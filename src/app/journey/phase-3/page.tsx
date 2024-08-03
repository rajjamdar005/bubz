"use client";
import React from 'react';
import styles from './phase3.module.css';

const Page = () => {
  const images = [
    '/images/str1.jpg',
    '/images/str2.jpg',
    '/images/str3.jpg',
    '/images/str4.jpg'
  ];

  const commonDescription = <p>And then suddenly it started getting worse. Nothing was working, and that joy suddenly changed to sorrow. We went out on January 13, and then you made it clear that it wasn't going to work. My body was literally shivering; it started getting worse, and on my birthday, it finally ended. That was a gift I never received from anyone.
  But I am still happy to have gone from that worse situation to getting better together. This bond means a lot to me, thanks to Swati, who plays a very important role in holding us together. She is the thread that keeps us connected.
  </p>

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>strangers</h1>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div className={styles.item} key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>strangers</h2>
        <p className={styles.description}>{commonDescription}</p>
      </div>3
    </div>
  );
};

export default Page;
