import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Pages/About.css";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://1337-alanproject24-anu-aw44d26qcrr.ws-us116.gitpod.io/api/about"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Img />
      <Footer />
    </div>
  );
}

function Img() {
  return (
    <>
      <div>
        <div className="relative group overflow-hidden">
          <img
            className="object-cover w-full"
            src="https://alamedaformosa.com/wp-content/uploads/2018/04/suburban-villas.jpg"
          /> 
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-100 transition-opacity duration-300 ease-in-out">
        
            <h1 id="par" className="text-white">
              About Us
            </h1>
          </div>
        </div>
        <div style={{ padding: "100px", color: "black", backgroundColor:"white" }}>
          <h1 id="photo">VISION:</h1>
          <p>
            {" "}
            Standing on the Top Global companies and the number one in providing
            high-quality photographic post-production in Real Estate Photography
            Industry.{" "}
          </p>
          <br />
          <h1 id="photo"> MISSION:</h1>
          <p style={{ paddingTop: "20px" }}>
            Awakening and showcasing the beauty of every listing through artist
            eyes and high expertise of Adobe Photoshop Experts. We provides the
            most realistic photographic images and high quality video in 12 - 24
            hours.
          </p>{" "}
          <br />
          <h1 id="photo">CORE VALUE:</h1>
          <p style={{ paddingTop: "20px" }}>
            Our Quality defined the success and reputation in the Real Estate
            Photo Editing Industry. Quality continues to be the oriented goal
            leading all operations and the development of BeatColor in the
            future. Caring: More than a win-win partnership, we are striving to
            serve guests better day by day. Trust: We honour commitments with
            anyone who works with. In the partnership, we respect the turnaround
            time, transparency as well as deliver professional manners.For all
            the staff, we place employee benefits equivalently with the
            company’s profit. We guarantee a better life with a competitive
            salary and healthcare benefits,... Unity: Be the ONE team sharing
            the same vision "Work hard, Play Harder" Passion: Showcasing the
            beauty of every listing through artist eyes and high expertise to
            create the stunning video and eye-catching images. We are dedicated
            to creating the perfect products.
          </p>

        </div>
      </div>
      
    </>
  );
}
