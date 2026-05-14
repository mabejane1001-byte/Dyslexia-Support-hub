import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem('user', name);
      router.push('/dashboard');
    }
  };

  return (
    <div className='container'>
      <h1>Teacher Login</h1>
      <input placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
      <button onClick={handleLogin}>Enter</button>
    </div>
  );
}
