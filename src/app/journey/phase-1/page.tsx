"use client"; 
import React from 'react';
import Slider from 'react-slick';
import styles from './phase1.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const phase1Content = [
  {
    image: "/images/beg2.jpg",
    title: 'The Beginning',
    description: 'Our journey started with a spark of excitement and curiosity. Here\'s a detailed account of how it all began...'
  },
  {
    image: "/images/beg1.jpg",
    title: 'Adventures',
    description: 'We explored new places and experienced thrilling adventures together. Here are some memorable moments from our journey...'
  },
  // Add more phases as needed
];

const Phase1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className={styles.phasePage}>
      <h1 className={styles.pageTitle}>the beginning </h1>
      <Slider {...settings} className={styles.slider}>
        {phase1Content.map((content, index) => (
          <div key={index} className={styles.slide}>
            <img src={content.image} alt={content.title} className={styles.image} />
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{content.title}</h2>
              <p className={styles.description}>{content.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Phase1;
