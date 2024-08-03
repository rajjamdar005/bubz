"use client"; // Mark this as a client component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for routing
import { login } from '../../lib/auth'; // Adjust the import path as necessary
import styles from './Login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const isAuthenticated = await login(email);
    if (isAuthenticated) {
      // Redirect to the home page after successful login
      router.push('/home'); // Redirect to the home page
    } else {
      alert('Access denied. Please enter the correct email.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.loginBox}>
        <h1 className={styles.title}>🎉 Happy Birthday!🎉</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
