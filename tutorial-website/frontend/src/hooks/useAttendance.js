import { useState, useEffect } from 'react';
import { fetchAttendance } from '../services/api/attendance';

export default function useAttendance(){
  const [attendance, setAttendance] = useState([]);
  useEffect(()=>{ fetchAttendance().then(setAttendance); },[]);
  return { attendance };
}
