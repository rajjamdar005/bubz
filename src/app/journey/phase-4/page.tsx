"use client";
import React from 'react';
import styles from './phase4.module.css';
import Image from 'next/image';

const Page = () => {
  const images = [
    '/images/trek1.jpg',
    '/images/trek2.jpg',
    '/images/trek3.jpg',
    '/images/trek4.jpg'
  ];

  const commonDescription = (
    <p>
      Even though our treks were challenging, they made us better together. We went on two hikes, both of which are memorable. Each trek had different people and unique stories. One was full of joy and fun, while the other was completely adventurous. However, what remained constant throughout both experiences was us.
    </p>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Treks</h1>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div className={styles.item} key={index}>
            <Image
              src={src}
              alt={`Memorable trek ${index + 1}`}
              width={300}  // Adjust the width as needed
              height={200} // Adjust the height as needed
              className={styles.image}
              loading="lazy" // Lazy loading for better performance
            />
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Trek</h2>
        <div className={styles.description}>{commonDescription}</div>
      </div>
    </div>
  );
};

export default Page;
