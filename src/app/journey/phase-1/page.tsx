"use client";
import React from 'react';
import styles from './phase1.module.css';

const Page = () => {
  const images = [
    '/images/beg1.JPG',
    '/images/beg2.JPG',
    '/images/beg3.JPG',
    '/images/beg4.jpg'
  ];

  const commonDescription =<p>"It all began in a workshop, where fate intervened as our instructor directed me to sit beside her. With a mix of excitement and nerves, I took my seat, and we quickly struck up a conversation. Before long, we exchanged Snapchat usernames, marking the start of our casual friendship.
As the workshop progressed, we were assigned a task: to create a bookmark as homework. I found myself struggling with the project, and to my delight, she offered to help. Our chats about the assignment soon turned into lively conversations, filled with laughter and shared ideas.
When the second day of the workshop arrived, the air was electric with anticipation. We spent the day having fun, our connection deepening with every exchange. What began as a simple assignment had blossomed into something much more meaningful. This was just the beginning of our journey together, a journey that promised adventure and joy.";
</p>
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>The Beginning</h1>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div className={styles.item} key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>The Beginning</h2>
        <p className={styles.description}>{commonDescription}</p>
      </div>
    </div>
  );
};

export default Page;
