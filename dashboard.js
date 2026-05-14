import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState('');

  useEffect(() => {
    const u = localStorage.getItem('user');
    if (!u) router.push('/login');
    setUser(u);
  }, []);

  return (
    <div className='container'>
      <h1>Welcome {user}</h1>
      <h3>Dyslexia Support Tools</h3>
      <ul>
        <li>Reading Assistance Tips</li>
        <li>Phonics Activities</li>
        <li>Classroom Strategies</li>
      </ul>
      <button onClick={() => {
        localStorage.removeItem('user');
        router.push('/login');
      }}>
        Logout
      </button>
    </div>
  );
}
