import { useContext } from 'react';
import { AuthContext } from '../services/auth';

export default function useAuth(){
  return useContext(AuthContext);
}
