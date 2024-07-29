// app/components/InteractiveCake.tsx
"use client";

import { useState } from 'react';
import styles from './InteractiveCake.module.css';

const InteractiveCake = () => {
  const [candles, setCandles] = useState(0);
  const [sprinkles, setSprinkles] = useState(0);

  const addCandle = () => {
    setCandles(candles + 1);
  };

  const addSprinkle = () => {
    setSprinkles(sprinkles + 1);
  };

  return (
    <div className={styles.cakeContainer}>
      <h2 className={styles.cakeTitle}>Decorate Your Cake!</h2>
      <div className={styles.cake}>
        <img src="/images/cake.png" alt="Cake" className={styles.cakeImage} />
        {Array.from({ length: candles }).map((_, index) => (
          <div key={index} className={styles.candle} style={{ left: `${10 + index * 20}px` }} />
        ))}
        {Array.from({ length: sprinkles }).map((_, index) => (
          <div key={index} className={styles.sprinkle} style={{ left: `${Math.random() * 80}%`, top: `${Math.random() * 60}%` }} />
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={addCandle} className={styles.button}>Add Candle</button>
        <button onClick={addSprinkle} className={styles.button}>Add Sprinkle</button>
      </div>
    </div>
  );
};

export default InteractiveCake;