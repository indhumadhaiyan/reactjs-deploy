import React from 'react'
import "./Footer.css"
import Wap from "../assets/whatsapp.png"
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const navigate = useNavigate();
  const handleScrollToSection = (id) => {
    navigate('/'); // Assuming the section is on the home page

    // Wait for navigation to complete, then scroll to the section
    setTimeout(() => {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust delay to ensure navigation completes
  };
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row" style={{ paddingLeft: "150px" }}>
            <div class="footer-col">
              <h4>company</h4>
			        <ul>
                <Link to={"/"} className="link-services">
                   Home
                  {/* <a>Home</a> */}
                </Link><br />
                <Link to={"/about"} className="link-services " onClick={handleLinkClick}>
                About Us
                  {/* <a>About Us</a> */}
                </Link><br />
                <Link to={"/virtual-dusk"} className="link-services ">
                Services
                  {/* <a>Services</a> */}
                </Link><br />
                <button
                    style={{ textDecoration: "none", color: "white", background: "none", border: "none", cursor: "pointer" }}
                    onClick={() => handleScrollToSection('contact')}
                  >
                    Contact
                  </button>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Services</h4>
              <ul>
                <Link to={"/virtual-dusk"} className="link-services ">
                  <a onClick={handleLinkClick}>Virtual Dusk</a>
                </Link><br />
                <Link to={"/photo-editing"} className="link-services ">
                  <a onClick={handleLinkClick}>Retouching</a>
                </Link><br />
                <Link to={"/virtual-staging"} className="link-services ">
                  <a onClick={handleLinkClick}>Virtual Staging</a>
                </Link><br />
                <Link to={"/photo-editing"} className="link-services ">
                  <a onClick={handleLinkClick}>Photo Editing</a>
                </Link><br />
                <Link to={"/lawn-replacement"} className="link-services ">
                  <a onClick={handleLinkClick}>Lawn Replacement</a>
                </Link><br />
                <Link to={"/video-editing"} className="link-services ">
                  <a onClick={handleLinkClick}> Video Editing</a>
                </Link><br />
              </ul>
            </div>
            <div class="footer-col">
              <h4 style={{ paddingTop: "40px" }}>Moorthi</h4>
              <h4>+91 9095680206 </h4>
              <p style={{ color: "white" }}>admin@editeverestproductions.com</p>
              <a href="https://wa.me/919095680206">
                <img src={Wap} alt="" width="50px" />{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
