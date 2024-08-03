// components/Page.tsx

import React from 'react';
import styles from './phase6.module.css';

const Page = () => {
  const images = [
    '/images/us1.jpg',
    '/images/walk1.jpg',
    '/images/us3.jpg',
    '/images/walk3.jpg',
    '/images/us6.jpg',
    '/images/us7.jpg',
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
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
