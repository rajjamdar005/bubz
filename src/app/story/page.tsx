// app/page.tsx:

"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page
    router.push('/auth/login');
  }, [router]);

  return null; // Return null while redirecting
}
