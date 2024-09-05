// components/Page.tsx

import React from 'react';
import Image from 'next/image';
import styles from './memories.module.css';
import Image from 'next/image';

const Page = () => {
  const images = [
    '/images/mem1.JPG',
    '/images/mem4.jpg',
    '/images/mem6.jpg',
    '/images/mem7.jpg',
    '/images/mem2.jpg',
    '/images/mem3.jpg',
    '/images/mem5.jpg',
    '/images/mem9.jpg',
    '/images/mem8.jpg',
    '/images/mem10.jpg',
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
