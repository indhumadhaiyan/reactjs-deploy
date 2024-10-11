import React, { useState } from 'react';
import styles from '../Pages/ImageSlider.module.css'; // Adjust the path according to your project structure

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <>
      <main
        className={styles.main}
        style={{ color: 'black', backgroundColor: 'white', fontWeight: '500' }}
      >
        <div
          className={styles.container}
          style={{ '--position': `${sliderValue}%` }}
        >
          <div className={styles.imageContainer}>
            <img
              className={`${styles.imageBefore} ${styles.sliderImage}`}
              src="https://ftedesign.com/wp-content/uploads/2023/04/217359807_353084599740989_7515132072648962576_n.jpg"
              alt="black and white"
            />
            <img
              className={`${styles.imageAfter} ${styles.sliderImage}`}
              src="https://ftedesign.com/wp-content/uploads/2023/04/214759684_353084886407627_238863848921388688_n.jpg"
              alt="color photo"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            aria-label="Percentage of before photo shown"
            className={styles.slider}
          />
          <div className={styles.sliderLine} aria-hidden="true"></div>
          <div className={styles.sliderButton} aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="456" height="256" fill="none"></rect>
              <line
                x1="128"
                y1="40"
                x2="128"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="96"
                y1="128"
                x2="16"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="48 160 16 128 48 96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
              <line
                x1="160"
                y1="128"
                x2="240"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <polyline
                points="208 96 240 128 208 160"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default ImageSlider;
