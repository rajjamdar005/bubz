"use client";
import React from 'react';
import styles from './phase5.module.css';
import Image from 'next/image';

const Page = () => {
  const images = [
    '/images/tea1.jpg',
    '/images/tea2.jpg',
    '/images/tea3.jpg',
    '/images/tea4.jpg'
  ];

  const commonDescription = (
    <p>
      &quot;We made infinite memories at Tea Toast (cafe). Initially, you used to hate that cafe, but one day I just forced you to keep me company there, and suddenly you started loving it. Although we have spent more there, money means nothing compared to those memories.&quot;
    </p>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Tea-Toast</h1>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div className={styles.item} key={index}>
            <Image
              src={src}
              alt={`Memorable moment at Tea-Toast ${index + 1}`}
              width={300}  // Adjust the width as needed
              height={200} // Adjust the height as needed
              className={styles.image}
              loading="lazy" // Lazy loading for performance
            />
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Tea-Toast</h2>
        <div className={styles.description}>{commonDescription}</div>
      </div>
    </div>
  );
};

export default Page;
