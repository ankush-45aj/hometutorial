import React, { useState } from 'react';
import './Login.css';
import { login as apiLogin } from '../../services/api/auth';
import { saveToken } from '../../services/auth/authUtils';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await apiLogin({ email, password });
      if (res.token) {
        saveToken(res.token);
        setUser(res.user || { name: 'User' });
        navigate('/dashboard');
      }
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  return (
    <div className="page-login">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </div>
  );
}
