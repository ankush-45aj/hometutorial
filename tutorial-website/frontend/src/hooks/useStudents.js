import { useState, useEffect } from 'react';
import { fetchStudents } from '../services/api/students';

export default function useStudents(){
  const [students, setStudents] = useState([]);
  useEffect(()=>{ fetchStudents().then(setStudents); },[]);
  return { students };
}
