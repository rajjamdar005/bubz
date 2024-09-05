"use client";
import React from 'react';
import styles from './phase3.module.css';
import Image from 'next/image';

const Page = () => {
  const images = [
    '/images/str1.jpg',
    '/images/str2.jpg',
    '/images/str3.jpg',
    '/images/str4.jpg'
  ];

  const commonDescription = (
    <p>
      And then suddenly it started getting worse. Nothing was working, and that joy suddenly changed to sorrow. We went out on January 13, and then you made it clear that it wasn't going to work. My body was literally shivering; it started getting worse, and on my birthday, it finally ended. That was a gift I never received from anyone.
      But I am still happy to have gone from that worse situation to getting better together. This bond means a lot to me, thanks to Swati, who plays a very important role in holding us together. She is the thread that keeps us connected.
    </p>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Strangers</h1>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div className={styles.item} key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={300}  // Adjust the width as needed
              height={200} // Adjust the height as needed
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Strangers</h2>
        <div className={styles.description}>{commonDescription}</div>
      </div>
    </div>
  );
};

export default Page;
