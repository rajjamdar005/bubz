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
              alt={`Image ${index + 1}`} 
              width={300} 
              height={200} 
              className={styles.image} // Optional if you have specific image styling
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
