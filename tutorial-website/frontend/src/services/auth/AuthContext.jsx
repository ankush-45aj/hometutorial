import React, { createContext, useState, useEffect } from 'react';
import { me as apiMe } from '../api/auth';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    apiMe().then(data => {
      if (data && data.user) setUser(data.user);
    }).catch(() => {
      localStorage.removeItem('token');
    });
  }, []);

  const logout = () => { localStorage.removeItem('token'); setUser(null); };

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>;
}
