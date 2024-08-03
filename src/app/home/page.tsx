// app/home/page.tsx
import styles from './Home.module.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import Header from '../components/header';
// import Footer from '../components/footer';
import Image from 'next/image';
import MemoryHighlights from './components/MemoryHighlights';
import BirthdayWishes from './components/BirthdayWishes';
import Link from 'next/link'; // Import Link from next/link

export default function HomePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.welcomeMessage}>
          <h1 className={styles.title}>Happy Birthday, duchki!</h1>
          <p className={styles.message}>
            Welcome to your special day! Today is all about celebrating YOU and the wonderful memories we've created together.
          </p>
        </section>

        <MemoryHighlights />

        <section className={styles.quickLinks}>
          <Link href="/memories" className={styles.button}>
            View Memories
          </Link>
          <Link href="/journey" className={styles.button}>
            Explore Our Journey
          </Link>
        </section>

        <BirthdayWishes />
      </main>
    </div>
  );
}
