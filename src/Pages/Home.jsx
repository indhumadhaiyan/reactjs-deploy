import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Grid,
  Button,
  CardContent,
  Avatar,
} from "@mui/material";
import "./Home.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";
import Contact from "./Contact";
import "./Contact.css";
import Footer from "../Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import About2 from'../assets/bg3.jpg';
import About1 from'../assets/bg5.jpg';
import About3 from'../assets/bg4.jpg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function Home() {
  const contactId = "contact";
  return (
    <div>
      <Navbar contactId={contactId}/>
      <Hero />
      <Aboutp />
      {/* <Abt/> */}
      <Porfolio />
      {/* <Feedback/> */}
      {/* <WhyMeSection/>  */}
      <Testimonial />
      <Cont />
      <Footer />
    </div>
  );
}

const Item = styled(Paper)(({ theme }) => ({

}));

// Hero component
const Hero = () => {
  return (
    <div className="main-home" >
      <Box flex={1} className="box-main" >
        <div className="" >
          <Typography style={{backdropFilter:"blur(9px)",outline: "solid white 1px",padding: "2rem",borderRadius: "24px", fontSize:"62px", fontWeight:"500" }} className="text-box" id="photo" variant="h1" color="initial">
            Real Estate
            <span className="span-text"
              style={{ color: "#25A18E" }}
              data-text="Photoediting..."
            ></span>{" "}
            <br></br>made simple..!
            <p style={{fontSize:"22px",color:"white"}}>convenient and professional photo editing services for real estate<br />
        photographers, agents, and owners to edit images...{" "}</p>
          </Typography>
        </div>
      </Box>
      </div>
  );
};

// About component with Swiper
function About() {
  const cardData = [
    { id: 1, image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg" },
    { id: 2, image: "https://nextui-docs-v2.vercel.app/images/fruit-2.jpeg" },
    { id: 3, image: "https://nextui-docs-v2.vercel.app/images/fruit-3.jpeg" },
    { id: 4, image: "https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg" },
    { id: 5, image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg" },
  ];

  return (
    <Box mt={5} className="swiper-containe">
      <Typography variant="h4" align="center" mb={5}>
        Responsive Card Swiper
      </Typography>
      <Swiper
        spaceBetween={20} // Adjust space between slides
        slidesPerView={3} // Number of slides to show at once
        navigation // Show navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
        modules={[Navigation, Pagination]} // Import Swiper modules
        breakpoints={{
          640: {
            slidesPerView: 1, // For small screens
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // For medium screens
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, // For larger screens
            spaceBetween: 20,
          },
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <Card raised>
              <CardMedia
                component="img"
                height="240"
                image={card.image}
                alt={`Fruit Image ${card.id}`}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

function Porfolio() {
  return (
    <Box mt={15}  style={{backgroundColor:"white", margin:"0"}}>
      <Typography
        className=" flex"
        id="photo"
        variant="h2"
        p={5}
      >
        Services
      </Typography>
      <Box>
        <ImageGrid />
        {/* <Service /> */}
      </Box>
    </Box>
  );
}

const images = [
  "http://webneel.com/daily/sites/default/files/images/daily/08-2014/2-real-estate-photography.jpg",
  "https://soft3ds.com/wp-content/uploads/2023/12/DSCF4525-min.jpg",
  // "https://www.donwrightdesigns.com/wp-content/uploads/2013/08/DWT22231-HDR-980x400.jpg",
  "https://virtuance-media.s3.us-west-2.amazonaws.com/virtuance-brochure/wp-content/uploads/2021/02/22222032/8409-Valerio-Austin-TX-78735-large-001-002-Exterior-Front-1500x1000-72dpi-768x512.jpg",
  "https://static.wixstatic.com/media/eedd88_d26920ddf7db46ceaf109ddae2da610b~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eedd88_d26920ddf7db46ceaf109ddae2da610b~mv2.jpg",
  "http://www.arizonarealestatephotographyblog.com/wp-content/uploads/2015/02/Paradise_Valley_Luxury_Twilight_Real_Estate_Photography_05.jpg",
  // "https://i.pinimg.com/originals/b8/9a/f5/b89af5021cb963c4ea58b7353789ac9f.png",
  "https://cdn-wp.photoup.net/wp-content/uploads/2023/03/16080007/Real-Estate-Photo-Editing-by-PhotoUp.jpg",
  // "https://images.squarespace-cdn.com/content/v1/5fc403d624b06a7eb31314f5/8e4c4228-8055-4183-a30e-12468c104a2e/Modern+Living+Room+Midjourney",
  // "https://d34mfkth6cubud.cloudfront.net/wp-content/uploads/2022/09/27114110/Real-Estate-Photography-_-Body-2-29-8-22-1024x640.jpg",
  // "https://imagelife.app/wp-content/uploads/2021/09/009Virtual-Dusk-Premium-editing.jpg",
  // "https://cdn-wp.photoup.net/wp-content/uploads/2023/07/17124737/RRSPR82R.jpg",
];

// function Service() {
//   return (
//     <div style={{ padding: "2rem" }}>
//       <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={30} // Adjust the spacing between slides
//         slidesPerView={3} // Number of visible slides at once
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         direction="horizontal" // Ensure horizontal sliding
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//         className="mySwiper"
//         style={{ width: "100%", height: "auto" }}
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="sub-services-div"
//               style={{ position: "relative", borderRadius: "8px", overflow: "hidden" }}
//             >
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   width: "100%",
//                   height: "300px", // Set height for uniformity
//                   objectFit: "cover", // Ensure images cover the container
//                 }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//                 className="carousel-text"
//               >
//                 <p style={{ color: "white", fontSize: "1.5rem" }}>
//                   Slide {index + 1}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

const ImageGrid = () => {
  const renderImages = () => {
    // Split images into chunks of 3 for each grid column
    const columns = [];
    for (let i = 0; i < images.length; i += 2) {
      columns.push(images.slice(i, i + 2));
    }
    return columns.map((columnImages, index) => (
      <div className="grid gap-2" key={index}>
        {columnImages.map((src, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-lg">
            <img
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
              src={src}
              alt={`Image ${index * 3 + idx + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              
              <Link to={"/services"}>
              <button className="but">
                View More
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {renderImages()}
    </div>
  );
};

function Why() {
  return (
    <div>
      <Box>
        <Grid container spacing={2} direction="row" justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box p={3} sx={{ border: "0.1px solid white" }}>
              <Typography
                color="white"
                variant="h2"
                component="h2"
                gutterBottom
                id="photo"
              >
                WHY ME
              </Typography>
              <Typography variant="body2" color="initial">
                We believe in turning your vision into reality with precision
                and creativity. Whether you need professional retouching, color
                correction, or creative enhancements, we deliver fast, reliable,
                and personalized service to meet your unique needs. We take
                pride in using the latest tools and techniques to provide a
                seamless experience and outstanding results. Trust us to elevate
                your photos to the next level.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box p={4} sx={{ background: "red" }}>
              <Typography
                color="white"
                variant="body2"
                component="h2"
                gutterBottom
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box p={4} sx={{ background: "red" }}>
              <Typography
                color="white"
                variant="body2"
                component="h2"
                gutterBottom
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

function Aboutp() {
  useEffect(() => {
    anime({
      targets: ".year .inpu", // Corrected the selector for class targeting
      innerHTML: [0, 4], // Use 'innerHTML' instead of 'value' since you're animating an HTML element
      round: 1,
      easing: "easeInOutExpo",
      duration: 2500, // Added duration for smoother animation
    });
  }, []); // Empty dependency array to ensure anime.js runs only once after the component mounts

  useEffect(() => {
    anime({
      targets: ".customer .inpu", // Corrected the selector for class targeting
      innerHTML: [0, 450], // Use 'innerHTML' instead of 'value' since you're animating an HTML element
      round: 1,
      easing: "easeInOutExpo",
      duration: 2500, // Added duration for smoother animation
    });
  }, []);

  useEffect(() => {
    anime({
      targets: ".photo .inpu", // Corrected the selector for class targeting
      innerHTML: [0, 15], // Use 'innerHTML' instead of 'value' since you're animating an HTML element
      round: 1,
      easing: "easeInOutExpo",
      duration: 2500, // Added duration for smoother animation
    });
  }, []);

  return (
    <div>
      <Box >
        <section
          className="about"
          id="photo"
          style={{
            backgroundColor: "white",
            margin: "0",
            paddingTop: "5rem",
            paddingBottom: "1rem",
            
          }}
        >
          <div className="main-abt-div">
            <div className="abt-img" style={{padding:"3rem"}}>
              <img src={About1} alt="" className="img-1" ></img>
              {/* <img src={About2} alt="" className="img2" ></img> */}
            </div>
            <div
              className="main-abt"
              style={{

                paddingTop: "2rem",
              }}
            >
              <div className="abt-text">
                
                <h1
                  style={{
                    fontSize: "4rem",
                    color: "#e91e63",
                  
                  }}
                >
                  About Us
                </h1>
                <h2
                  style={{
                    fontSize: "1.8rem",
                    color: "black",
                    paddingTop: "rem",
                    paddingBottom: "1rem",
                  }}
                >
                  Real Estate Photo & video Editing Services
                </h2>
                <p
                  style={{
                    color: "black",
                    paddingRight: "5rem",
                    fontWeight:"600",
                    fontSize:"1.1rem"
                  }}
                >
                  Edit Everest Productions is the leading online hub for all things digital. Our global
                  team of professional editing experts are ready to transform
                  your photos into eye-catching professional images. Simply
                  upload your photos and let our professionals take care of the
                  rest We offer a wide range of services including, photo
                  editing, virtual staging. floor plan redraws, renders, and
                  virtual renovations.<br /><br /> The process is fast, easy-to-use and
                  extremely affordable. Are you in the residential or commercial
                  real estate industry and need high-quality images to showcase
                  your listings? Or are you in the retail industry and want
                  clean and professional images to display your products?
                  We will work with your images to get you the best
                  results to meet your needs but standout from your competitors
                </p>
                
              </div>
            </div>
          </div>
        </section>
      </Box>
      <Box mt={4} style={{ margin: "0" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          backgroundColor="white"
        >
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography id="photo" className="year text-end" variant="h1" style={{color:"black"}}>
              +<span className="inpu"></span> Years
            </Typography>
            <Typography mt={1} className="text-end me-5" id="par" variant="h5" style={{color:"black"}}>
              Experience
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography
              id="photo"
              className="customer text-center"
              variant="h1"
              style={{color:"black"}}
            >
              +<span className="inpu"></span>
            </Typography>
            <Typography mt={1} className="text-center" id="par" variant="h5" style={{color:"black"}}>
              Customer
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography id="photo" className="photo" variant="h1" style={{color:"black"}}>
              +<span className="inpu"></span> K
            </Typography>
            <Typography mt={1} id="par" variant="h5" style={{color:"black"}}>
              Portfolio photos
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

const Feedback = () => {
  return (
    <>
      <h1
        style={{ padding: "4rem", backgroundColor: "white" }}
        className="main-heading-text"
      >
        What Customers Say
      </h1>
      <Swiper
        style={{ padding: "0 6rem 7rem" }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <section className="carousel-bg">
          <SwiperSlide
            style={{
              backgroundColor: "#0000001c",
              borderRadius: "20px",
              border: "1px solid black",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.727), 0 6px 20px 0 rgba(0, 0, 0, 0.927)",
            }}
            className="sub-feedback-div"
          >
            <div
              style={{ padding: "2.5rem" }}
              className="carousel-text-feedback"
            >
              <h1 style={{ fontSize: "20px" }}>Sarah Thompson</h1>
              <img
                style={{ height: "1.5rem", width: "10rem" }}
                className="carousel1"
                src={Star1}
                alt=""
              ></img>
              <p style={{ color: "black" }}>
                "I’ve been in the real estate business for over a decade, and
                your photo editing service has been a game-changer for me. The
                quality of the edited photos is incredible—they look clean,
                sharp, and professional. I’ve noticed a significant increase in
                inquiries. My properties look more attractive online, which has
                definitely helped me stand out. I highly recommend your service
                to anyone looking to boost their real estate listings!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0000001c",
              borderRadius: "20px",
              border: "1px solid black",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.727), 0 6px 20px 0 rgba(0, 0, 0, 0.927)",
            }}
            className="sub-feedback-div"
          >
            <div
              style={{ padding: "2.5rem" }}
              className="carousel-text-feedback"
            >
              <h1 style={{ fontSize: "20px" }}>Michael Rodriguez</h1>
              <img
                style={{ height: "1.5rem", width: "10rem" }}
                className="carousel1"
                src={Star1}
                alt=""
              ></img>
              <p style={{ color: "black" }}>
                "As a realtor, I know how important first impressions are, and
                your team truly delivered. The turnaround time was quicker than
                expected, and the quality of the edits was superb. The way you
                enhanced the lighting and brought out the natural colors in the
                properties made a huge difference. I’ve already had clients
                mention how great the photos look. I’ll definitely be using your
                services again for future listings!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0000001c",
              borderRadius: "20px",
              border: "1px solid black",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.727), 0 6px 20px 0 rgba(0, 0, 0, 0.927)",
            }}
            className="sub-feedback-div"
          >
            <div
              style={{ padding: "2.5rem" }}
              className="carousel-text-feedback"
            >
              <h1 style={{ fontSize: "20px" }}>Emma Harris</h1>
              <img
                style={{ height: "1.5rem", width: "10rem" }}
                className="carousel1"
                src={Star1}
                alt=""
              ></img>
              <p style={{ color: "black" }}>
                "I’ve worked with various photo editing services before, but
                none have matched the level of professionalism and attention to
                detail that you offer. From the clarity of the images to the
                small tweaks that make each property stand out, your edits are
                top-tier. I’m thrilled with the results! The before-and-after
                comparison is amazing, and my clients are just as impressed.
                You’ve earned a loyal customer!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0000001c",
              borderRadius: "20px",
              border: "1px solid black",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.727), 0 6px 20px 0 rgba(0, 0, 0, 0.927)",
            }}
            className="sub-feedback-div"
          >
            <div
              style={{ padding: "2.5rem" }}
              className="carousel-text-feedback"
            >
              <h1 style={{ fontSize: "20px" }}>James Patel</h1>
              <img
                style={{ height: "1.5rem", width: "10rem" }}
                className="carousel1"
                src={Star1}
                alt=""
              ></img>
              <p style={{ color: "black" }}>
                "Your virtual staging service is absolutely brilliant! You
                turned an empty, uninspiring property into a cozy, inviting
                home, and that made all the difference in selling the space. My
                client was hesitant at first, but after seeing the virtual
                staging, they were blown away, and the property sold much faster
                than we anticipated. The attention to detail was impressive,
                from the furniture placement to the color scheme—it looked
                incredibly realistic!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundColor: "#0000001c",
              borderRadius: "20px",
              border: "1px solid black",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.727), 0 6px 20px 0 rgba(0, 0, 0, 0.927)",
            }}
            className="sub-feedback-div"
          >
            <div
              style={{ padding: "2.5rem" }}
              className="carousel-text-feedback"
            >
              <h1 style={{ fontSize: "20px" }}>David Nguyen</h1>
              <img
                style={{ height: "1.5rem", width: "10rem" }}
                className="carousel1"
                src={Star1}
                alt=""
              ></img>
              <p style={{ color: "black" }}>
                "The subtle yet impactful changes your team made to my real
                estate photos made a world of difference. The brightness,
                sharpness, and overall look of the photos improved dramatically,
                and my listings have received a lot more attention since I
                started using your service. I appreciate that the edits don’t
                look overly processed—just clean and professional. I’ll
                definitely continue working with you for all my future
                listings!"
              </p>
            </div>
          </SwiperSlide>
        </section>
      </Swiper>
    </>
  );
};

function Cont() {
  return (
    <div className="contact-bg" >
      <section class="contact"  id="contact" >
        <div>
          <Typography
            id="photo"
            className="text-center"
            variant="h2"
            color="white"
          >
            CONTACT US
          </Typography>
        </div>

        <div class="container" >
          <div class="contactInfo" id="photo">
          </div>

          <div class="contactForm">
            <Typography
              className="text-center"
              variant="h4"
              color="white"
              id="photo"
            >
              Get Started
            </Typography>
            <form className="mt-10">
              <div class="mb-6">
                <label
                  
                  style={{ color: "white", fontWeight:"600" }}
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Deo"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  
                  style={{ color: "white",fontWeight:"600"  }}
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email address
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  
                  style={{ color: "white",fontWeight:"600" }}
                  for="Subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Subject
                </label>
                <input
                  type="Subject"
                  id="Subject"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter the Subject"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  
                  style={{ color: "white",fontWeight:"600" }}
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <input
                  type="message"
                  id="message"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter the message"
                  required
                  style={{height:"100px"}}
                />
              </div>
              <Button
                className="submit-button"
                
                type="submit"
                variant="contained"
                color="default"
              >
                submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const Testimonial = () => {
  
  // Custom Prev Arrow Component
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        style={{
          display: "block",
          background: "#1974d2",
          borderRadius: "5%",
          padding: "0.5rem",
          position: "absolute",
          left: "30rem",
          top: "110%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        className="PrevArrow"
        onClick={onClick}
      >
        <i style={{ color: "white" }}>Previous</i>
      </div>
    );
  };
  const NextArrow = ({ onClick }) => {
    return (
      <div
        style={{
          display: "block",
          background: "#1974d2",
          borderRadius: "5%",
          padding: "0.5rem 1.5rem",
          position: "absolute",
          right: "30rem",
          top: "110%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <i style={{ color: "white" }}>Next</i>
      </div>
    );
  };
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />, // Using custom NextArrow
 
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "https://mohanraj-web.github.io/MR-Exports/Testimonal.json"
        // );
        const response =
          [
            {
              Review: "Graffix Studio truly impressed me with their photo editing skills. The images looked sharp, professional, and had the perfect touch of creativity. Highly recommended!",
              Name: "John D",
              Designation: "Photo Editing",
              Image: "https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=",
            },
            {
              Review: "I wanted to give my property listings a magical touch, and Graffix Studio delivered perfectly with their Virtual Twilight services. The photos were stunning and attracted so many potential buyers!",
              Name: "Emily R",
              Designation: "Virtual Twilight",
              Image: "https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=",
            },
            {
              Review: "Their video editing service is top-notch! The transitions, sound quality, and overall flow were amazing. It really elevated the promotional video for my brand.",
              Name: "Michael T",
              Designation: "Video Editing ",
              Image: "https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=",
            },
            {
              Review: "Graffix Studio’s lawn replacement work was outstanding! The photos looked so natural and fresh, giving my real estate listings a whole new look. I’ll definitely use their services again.",
              Name: "Sarah P.",
              Designation: "Lawn Replacement ",
              Image: "https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=",
            },
            {
              Review: "The virtual staging service made a huge difference in how my property looked online. Graffix Studio has an eye for design, and it helped me sell the property faster than I expected",
              Name: "David L",
              Designation: "Virtual Staging ",
              Image: "https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=",
            },
            {
              Review: "I’m beyond pleased with their decluttering service. The room images looked clean and spacious, which made a big impact on my clients. They really know how to make spaces stand out!",
              Name: "Karen S",
              Designation: "Declutter ",
              Image: "https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=",
            },
            {
              Review: "Graffix Studio built my business website, and I couldn’t be happier. It’s user-friendly, visually appealing, and exactly what I needed to enhance my online presence.",
              Name: "Mark J",
              Designation: "Website Builder",
              Image: "https://media.istockphoto.com/id/1363118407/photo/portrait-of-young-businessman.jpg?s=612x612&w=0&k=20&c=e9xjo1AdlIbr7ttZe3iBG3CBWKUBwdTMLkPus9DxA_s=",
            },
        ];
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box p={{ lg: 8, xs: 1 }}  style={{backgroundColor:"white", color:"initial"}}>
      <Typography
        className="justify flex"
        id="photo"
        fontSize="50px"
        fontWeight="500"
      >
        What Customers Say About Us
      </Typography>
      <Box  display="flex" justifyContent="center"alignItems="center" padding="50px">
        <Box width="100%" maxWidth={1209}>
          <Slider {...settings}>
            {data.map((item, index) => (
              <Box
                // Ensure each Box has a unique key
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={2}
              >
                <Card
                  // Ensure each Card has a unique key
                  sx={{
                    maxWidth: 1200,
                    borderRadius: 4,
                    boxShadow: 6,
                    mb: 2,
                    background: "rgb(160, 160, 224);",
                  }}
                >
                  <CardContent sx={{ p: 5 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: 16,
                        lineHeight: 2,
                        mb: 2.5,
                        color: "white",
                      }}
                      id="par"
                    >
                      {item.Review}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar
                          src={item.Image}
                          sx={{ width: 60, height: 60 }}
                        />
                        <Box>
                          <Typography
                            id="par"
                            variant="h6"
                            sx={{ color: "white" }}
                          >
                            {item.Name}
                          </Typography>
                          <Typography
                            id="par"
                            variant="body2"
                            sx={{ color: "white" }}
                          >
                            {item.Designation}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        component="img"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b37bf33f4817f0aeafb58b6ae857a4b7fbccf0f48678937df525c260d618f4e3?apiKey=6bcee3e3ed9847128d266201399eebb6&"
                        alt=""
                        sx={{
                          width: 60,
                          height: "auto",
                          aspectRatio: "1.28",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};
