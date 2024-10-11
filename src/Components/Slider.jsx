import React, { useState } from "react";
import styles from "./Slider.module.css"; // Make sure to use CSS Modules
import Bg from "../assets/banner-page1-600x400.png";
import { Box, Grid, Typography, Button } from "@mui/material";
import "../Pages/Home.css";
import { Link, Route, Routes } from "react-router-dom";

const SliderComponent = () => {
  const [position, setPosition] = useState(50);

  const handleInputChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <>
      <div className="relative group overflow-hidden">
        <img
          className="object-cover w-full"
          src="https://alamedaformosa.com/wp-content/uploads/2018/04/suburban-villas.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-100 transition-opacity duration-300 ease-in-out">
          <h1 id="par" className="text-white">
            Services
          </h1>
        </div>
      </div>
      <div
        style={{
          color: "black",
          backgroundColor: "white",
          paddingTop: "100px",
          fontSize: "35px",
          paddingLeft: "150px",
          fontWeight: "500",
        }}
        className="head-text"
        id="par"
      >
        Virtual Dusk
      </div>
      <p
        id="par"
        style={{
          padding: "10px 150px",
          color: "black",
          backgroundColor: "white",
          fontWeight: "500",
          margin: "0",
        }}
      >
        Day to Dusk photo conversions creates powerful imagery that definitely
        captures potential buyers’ attention. A dusk photo can help to create a
        more dynamic and inviting image, highlighting the inherently attractive
        features of a property, which make it stand out from the competition. By
        using advanced photo editing techniques, Day to Dusk conversions service
        can turn a daytime image of your property into an evening shot that will
        take your listing to the next level.
      </p>
      <div
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "10rem",
        }}
      >
        <Link to={"/virtual-dusk"} className="button-services ">
          <button>View More</button>
        </Link>
      </div>
      <main
        className={styles.main}
        style={{ color: "black", backgroundColor: "white", fontWeight: "500" }}
      >
        <div
          className={styles.container}
          style={{ "--position": `${position}%` }}
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
            value={position}
            onChange={handleInputChange}
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
              <rect width="256" height="256" fill="none"></rect>
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
      <div
        style={{
          color: "white",
          paddingTop: "10px",
          fontSize: "35px",
          paddingLeft: "150px",
          backgroundColor: "white",
          fontWeight: "500",
        }}
        className="head-text"
        id="par"
      >
        Retouching
      </div>
      <p
        id="par"
        style={{
          padding: "10px 150px",
          color: "black",
          backgroundColor: "white",
          fontWeight: "500",
          margin: "0",
        }}
      >
        Don't let the clutter kill inquiries. When shooting REP, it is not
        always you work with a convenient conditions where the properties are
        prepared well. Other than the normal edit, Retouching or Item Removal on
        images can change the whole look and feel of a shot. It can make the
        houses look cleaner, more spacious with an inhibiting atmosphere.
      </p>
      <div
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "10rem",
        }}
      >
        <Link to={"/photo-editing"} className="button-services ">
          <button style={{backgroundColor:"red"}}>View More</button>
        </Link>
      </div>
      <main
        className={styles.main}
        style={{ color: "black", backgroundColor: "white", fontWeight: "500" }}
      >
        <div
          className={styles.container}
          style={{ "--position": `${position}%` }}
        >
          <div className={styles.imageContainer}>
            <img
              className={`${styles.imageBefore} ${styles.sliderImage}`}
              src="https://ftedesign.com/wp-content/uploads/2023/04/IMG_4945_compressed.jpg"
              alt="black and white"
            />
            <img
              className={`${styles.imageAfter} ${styles.sliderImage}`}
              src="https://ftedesign.com/wp-content/uploads/2023/04/IMG_4945_add-Pool_compressed.jpg"
              alt="color photo"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={handleInputChange}
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
              <rect width="256" height="256" fill="none"></rect>
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
      <div
        style={{
          color: "white",
          paddingTop: "10px",
          fontSize: "35px",
          paddingLeft: "150px",
          backgroundColor: "white",
          fontWeight: "500",
        }}
        className="head-text"
        id="par"
      >
        Virtual Staging
      </div>
      <p
        id="par"
        style={{
          padding: "10px 150px",
          color: "black",
          backgroundColor: "white",
          fontWeight: "500",
          margin: "0",
        }}
      >
        virtual staging services assures to create a photorealistic
        three-dimension simulation of the property in onlyaround 24 hours.
        Special requests with adjusted delivery time shall be informed in
        advance. To even save your precioustime, you can choose furniture models
        right from our diverse library. It allows us to accentuate the currently
        empty roomwith eye-grabbing accessories and completely renovate
        unsightly spaces with on-trend items. Skillfully handlinginterior to
        exterior staging and from residential to commercial spaces, BeatColor
        shall be the only all-inclusiveservice you need.
      </p>
      <div
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "10rem",
        }}
      >
        <Link to={"/virtual-staging"} className="button-services ">
          <button>View More</button>
        </Link>
      </div>
      <main
        className={styles.main}
        style={{ color: "black", backgroundColor: "white", fontWeight: "500" }}
      >
        <div
          className={styles.container}
          style={{ "--position": `${position}%` }}
        >
          <div className={styles.imageContainer}>
            <img
              className={`${styles.imageBefore} ${styles.sliderImage}`}
              src="https://beatcolor.com/media/2019/07/DSC6721-Edit-900x600.jpg"
              alt="black and white"
            />
            <img
              className={`${styles.imageAfter} ${styles.sliderImage}`}
              src="https://beatcolor.com/media/2019/07/DSC6721-final-scaled.jpg"
              alt="color photo"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={handleInputChange}
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
              <rect width="256" height="256" fill="none"></rect>
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
      <div
        style={{
          color: "white",
          paddingTop: "10px",
          fontSize: "35px",
          paddingLeft: "150px",
          backgroundColor: "white",
          fontWeight: "500",
        }}
        className="head-text"
        id="par"
      >
        Photo editing
      </div>
      <p
        id="par"
        style={{
          padding: "10px 150px",
          color: "black",
          backgroundColor: "white",
          fontWeight: "500",
          margin: "0",
        }}
      >
        real estate photo editing services proudly bring top-notch quality and
        on-demand products to our clients. Whether it is HDR and ambient
        techniques for successful home listing or high-end editing for editorial
        looks, you get the images perfectly edited in your style within just a
        24-hour turnaround time
      </p>
      <div
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "10rem",
        }}
      >
        <Link to={"/photo-editing"} className="button-services ">
          <button
            style={{
              color: "white",
              backgroundColor:
                "linear-gradient(to right, rgb(84, 30, 118), rgb(160, 160, 224));",
            }}
          >
            View More
          </button>
        </Link>
      </div>
      <main
        className={styles.main}
        style={{ color: "black", backgroundColor: "white", fontWeight: "500" }}
      >
        <div
          className={styles.container}
          style={{ "--position": `${position}%` }}
        >
          <div className={styles.imageContainer}>
            <img
              className={`${styles.imageBefore} ${styles.sliderImage}`}
              src="https://beatcolor.com/media/2016/03/Game.jpg"
              alt="black and white"
            />
            <img
              className={`${styles.imageAfter} ${styles.sliderImage}`}
              src="https://beatcolor.com/media/2016/03/8.game_room-1.jpg"
              alt="color photo"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={handleInputChange}
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
              <rect width="256" height="256" fill="none"></rect>
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
      <div
        style={{
          color: "white",
          paddingTop: "10px",
          fontSize: "35px",
          paddingLeft: "150px",
          backgroundColor: "white",
          fontWeight: "500",
        }}
        className="head-text"
        id="par"
      >
        Lawn Replacement
      </div>
      <p
        id="par"
        style={{
          padding: "10px 150px",
          color: "black",
          backgroundColor: "white",
          fontWeight: "500",
          margin: "0",
        }}
      >
        Transform your outdoor space with our Lawn Replacement Photo Editing
        service. Whether you're looking to visualize a lush, green lawn in place
        of a worn-out yard or experiment with different landscaping ideas, we’ve
        got you covered.We accurately replace your old lawn with a fresh,
        vibrant grass texture that looks natural and appealing. We adjust the
        shades and tones of the grass to perfectly match the lighting and
        atmosphere of your photo. Our advanced editing ensures the new lawn
        blends smoothly with surrounding elements like paths, fences, and flower
        beds. Choose from various lawn styles—sod, turf, or wild grass—to fit
        your vision and landscaping plans.
      </p>
      <div
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "10rem",
        }}
      >
        <Link to={"/photo-editing"} className="button-services ">
          <button
            style={{
              color: "white",
              backgroundColor:
                "linear-gradient(to right, rgb(84, 30, 118), rgb(160, 160, 224));",
            }}
          >
            View More
          </button>
        </Link>
      </div>
      <main
        className={styles.main}
        style={{ color: "black", backgroundColor: "white", fontWeight: "500" }}
      >
        <div
          className={styles.container}
          style={{ "--position": `${position}%` }}
        >
          <div className={styles.imageContainer}>
            <img
              className={`${styles.imageBefore} ${styles.sliderImage}`}
              src="https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F1before.01e784a9.jpeg&w=828&q=75"
              alt="black and white"
            />
            <img
              className={`${styles.imageAfter} ${styles.sliderImage}`}
              src="https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F1after.1f1508a9.jpeg&w=1920&q=75"
              alt="color photo"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={handleInputChange}
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
              <rect width="256" height="256" fill="none"></rect>
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
      <div style={{paddingBottom:"3rem",backgroundColor:"white"}}>
      <div
        style={{
          color: "white",
          paddingTop: "10px",
          fontSize: "35px",
          paddingLeft: "150px",
          backgroundColor: "white",
          fontWeight: "500",
          
        }}
        className="head-text"
        id="par"
      >
        Video Editing
      </div>
      <p
        id="par"
        style={{
          padding: "10px 150px",
          color: "black",
          backgroundColor: "white",
          fontWeight: "500",
          margin: "0",
        }}
      >
        Experience modern luxury in every corner of this stunning property, located in the heart of City/Neighborhood. From spacious living areas designed for both relaxation and entertainment to a breathtaking backyard perfect for hosting or unwinding after a long day, this home offers the perfect blend of style and comfort. The serene master suite and spa-like bathrooms provide a peaceful retreat, while the contemporary kitchen and open spaces cater to your every need. Nestled in a prime location with access to top amenities, this property is more than a home—it’s a lifestyle. Your dream home is waiting. Schedule a tour today!
      </p>
      <div
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "10rem",
        }}
      >
        <Link to={"/video-editing"} className="button-services " style={{paddingBottom:"3rem"}}>
          <button
            style={{
              color: "white",
              backgroundColor:
                "linear-gradient(to right, rgb(84, 30, 118), rgb(160, 160, 224));",
              
            }}
          >
            View More
          </button>
        </Link>
      </div>
      </div>
    </>
  );
};

export default SliderComponent;
