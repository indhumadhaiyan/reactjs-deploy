import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";

import "./Home.css";
import "./Contact.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Img />
      <Footer/>
    </div>
  );
}

function Img() {
  return (
    <div>
      <div className="relative group overflow-hidden">
        <img
          className="object-cover w-full"
          src="https://alamedaformosa.com/wp-content/uploads/2018/04/suburban-villas.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-100 transition-opacity duration-300 ease-in-out">
          <h1 id="par" className="text-white">
            Contact Us
          </h1>
        </div>
      </div>
      <Box>
        <Cont/>
      </Box>
    </div>
  );
}

function Cont() {
  return (
    <div className="">
      <section class="contact">
        <div>
          <Typography
            className="text-center"
            id="photo"
            variant="h2"
            color="initial"
          >
            CONTACT US
          </Typography>
        </div>

        <div class="container">
          <div class="contactInfo">
            
          </div>

          <div class="contactForm">
            <Typography
              id="par"
              className="text-center"
              variant="h4"
              color="initial"
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
