import client from './client';

export async function login(credentials){
  const res = await client.post('/auth/login', credentials);
  return res.data;
}

export async function register(data){
  const res = await client.post('/auth/register', data);
  return res.data;
}

export async function me(){
  const res = await client.get('/auth/me');
  return res.data;
}
