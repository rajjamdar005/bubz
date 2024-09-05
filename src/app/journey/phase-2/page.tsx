"use client";
import React from 'react';
import styles from './phase2.module.css';
import Image from 'next/image';

const Page = () => {
  const images = [
    '/images/walk1.JPG',
    '/images/walk2.jpg',
    '/images/walk3.jpg',
    '/images/walk4.jpg'
  ];

  const commonDescription = (
    <p>
      We started going for daily walks together. During these walks, we would sit on a bench, talk, and understand each other better. Afterward, we’d visit the local mart to get smoodh. We often found a spot near a vadapav stall to sit and chat for another hour while enjoying our drinks.
      I never realized how much we became addicted to those walks. They were special moments that brought us closer, and I still miss those days. It’s amazing how a simple walk can create such lasting memories.
    </p>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>The Walk</h1>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div className={styles.item} key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={300} // Adjust the width as needed
              height={200} // Adjust the height as needed
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Walk</h2>
        <div className={styles.description}>{commonDescription}</div>
      </div>
    </div>
  );
};

export default Page;
