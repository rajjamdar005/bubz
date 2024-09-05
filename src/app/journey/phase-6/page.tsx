// components/Page.tsx

import React from 'react';
import styles from './phase6.module.css';
import Image from 'next/image';

const Page = () => {
  const images = [
    '/images/us1.jpg',
    '/images/walk1.JPG',
    '/images/us3.jpg',
    '/images/walk3.jpg',
    '/images/us6.JPG',
    '/images/us7.JPG',
    '/images/us8.jpg',
    '/images/us9.jpg',
    '/images/us10.jpg',
    '/images/us11.jpg',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div className={styles.item} key={index}>
            <Image 
              src={src} 
              alt={`Memorable moment ${index + 1}`} // Improve alt text descriptions
              width={300} 
              height={200} 
              className={styles.image} 
              loading="lazy" // Lazy-load images for better performance
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
