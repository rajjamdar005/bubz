"use client"; // Mark this as a Client Component

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './memories.module.css'; // Ensure this file exists

const memoriesData = [
  {
    id: 1,
    title: "Beach Day",
    description: "A wonderful day spent at the beach with friends.",
    imageUrl: "/images/memory1.jpg",
  },
  {
    id: 2,
    title: "Birthday Party",
    description: "Celebrating my birthday with family and friends.",
    imageUrl: "/images/memory2.jpg",
  },
  {
    id: 3,
    title: "Trip to the Mountains",
    description: "An adventurous trip to the mountains.",
    imageUrl: "/images/memory3.jpg",
  },
  // Add more memories as needed
];

const MemoriesPage = () => {
  const pageRef = useRef<HTMLDivElement>(null); // Specify the type for TypeScript

  useEffect(() => {
    if (pageRef.current) {
      gsap.from(pageRef.current.children, {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.in',
      }); // Animate each memory item on page load
    }
  }, []);

  return (
    <div ref={pageRef} className={styles.memoriesContainer}>
      <h1 className={styles.pageTitle}>Memories</h1>
      <div className={styles.memoriesGrid}>
        {memoriesData.map((memory) => (
          <div key={memory.id} className={styles.memoryItem}>
            <img src={memory.imageUrl} alt={memory.title} className={styles.memoryImage} />
            <h2 className={styles.memoryTitle}>{memory.title}</h2>
            <p className={styles.memoryDescription}>{memory.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoriesPage;
