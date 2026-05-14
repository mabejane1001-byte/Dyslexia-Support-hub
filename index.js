import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className='container'>
      <h1>Dyslexia Support Hub</h1>
      <p>Helping teachers support learners with Dyslexia</p>
      <button onClick={() => router.push('/login')}>Login</button>
    </div>
  );
}
