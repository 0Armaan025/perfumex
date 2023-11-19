import React from 'react';
import { Carousel, Slide, PrevButton, NextButton } from 'embla-carousel-react';
import styles from './Carousel.module.css';

const images = [
  { src: '/image1.jpg', alt: 'Image 1' },
  { src: '/image2.jpg', alt: 'Image 2' },
  { src: '/image3.jpg', alt: 'Image 3' },
];

// TODO: FIX CAROUSEL
const CarouselComponent = () => {
  return (
    <div className={styles.carousel}>
      <Carousel>
        {images.map((image, index) => (
          <Slide key={index} className={styles.slide}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </Slide>
        ))}
      </Carousel>
      <PrevButton className={styles.prevBtn} />
      <NextButton className={styles.nextBtn} />
    </div>
  );
};

export default CarouselComponent;
