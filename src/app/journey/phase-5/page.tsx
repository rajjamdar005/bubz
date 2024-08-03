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

  const commonDescription = <p>"We made infinite memories at Tea Toast (cafe). Initially, you used to hate that cafe, but one day I just forced you to keep me company there, and suddenly you started loving it. Although we have spent more there, money means nothing compared to those memories.";</p>

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Tea-toast</h1>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div className={styles.item} key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Tea-Toast</h2>
        <p className={styles.description}>{commonDescription}</p>
      </div>
    </div>
  );
};

export default Page;
