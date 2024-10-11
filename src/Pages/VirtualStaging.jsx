import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Pages/VirtualStaging.css";
import VirtualStaging1 from "../assets/bg1.jpg";
import SliderComponent from "../Components/Slider";
import ImageSlider from './ImageSlider';

export default function VirtualStaging() {
  return (
    <div>
      <Navbar />
      <section className="vs-sec">
        <div className="vs-main">
          <div className="vs-sub-txt">
            <h1>Virtual Staging for Real Estate</h1>
            <p>
              Utilizing designer brands curated by world-class interior
              designers, our hyper-realistic virtual staging services have the
              power to transform any home into an unforgettable real estate
              listing. Whether your space is vacant, cluttered, or simply in
              need of modern furnishings, you can use our virtual home staging
              services for any situation. Contact our sales team to get started
              today.
            </p>
          </div>
          <div className="vs-sub-img">
            <img
              style={{ borderRadius: "20px", boxShadow: "5px 15px 20px black" }}
              src="https://theclose.com/wp-content/uploads/2022/04/Virtual-Staging-from-roOmy.jpg"
              height="2600rem"
              width="3800rem"
              alt=""
            ></img>
          </div>
        </div>
      </section>
      <section >
        <div>
          <ImageSlider />
        </div>
        <div
          className="main-content-vs"
          style={{ display: "flex", backgroundColor: "white", padding: "2rem"}}
        >
          <div
            className="sub-content-vs"
            style={{ padding: "2rem",  }}
          >
            <h1 style={{fontSize:"30px"}}>Not all virtual home staging is created equally</h1>
            <p>
              Many virtual house staging companies utilize outdated furniture,
              low quality 3D models and low quality renders. At Phixer we start
              our process by having interior designers and architects design
              style each and every space utilizing brand names such as Herman
              Miller, Charles and Ray Eames and Bauhaus designs. Our virtual
              furniture designs are modern, sophisticated and every detail is
              handled with meticulous care.
            </p>
          </div>
          <div className="sub-picture-vs" style={{ padding: " 2rem" }}>
            <img
              src="https://www.lcpmedia.com/hs-fs/hubfs/Real%20vs.%20Staged%20(5).png?width=2000&name=Real%20vs.%20Staged%20(5).png"
              style={{ borderRadius: "20px", boxShadow: "5px 15px 20px black" }}
              className="imgs"
            ></img>
          </div>
        </div>
      </section>
      <section>
        <div className='pix-vs' style={{display:"flex", backgroundColor:"white", padding:"2rem"}}>
          <div style={{padding:"2rem"}}>
            <img src="https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fvirtual-staging-sell-fast.8cd9c4ce.jpg&w=1920&q=75"></img>
          </div>
          <div style={{padding:"2rem"}}>
            <h1 style={{fontSize:"30px"}}>Sell Properties Faster</h1>
            <p>
              Sell your home up to 30X faster. A recent study from NAR found
              that homes which are staged sell for 3-30 times faster than
              un-staged homes. Virtual staging for realtors is an essential tool
              for top performing agents.
            </p>
            <h1 style={{fontSize:"30px"}}>A Fraction of the Cost of Traditional Staging</h1>
            <p>Virtual staging cost around 90% less than actual staging.</p>
            <h1 style={{fontSize:"30px"}}>Stage it to suit</h1>
            <p>
              Select from our range of style options to stage your listing to
              suit the home
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='end-main' style={{display:"flex", backgroundColor:"white",paddingTop:"5rem"}}>
          <div style={{width:"600px",padding:"5rem"}}>
              <h1 style={{fontSize:"30px"}}>Any room ready to list with one click</h1>
              <p style={{fontSize:"18px"}}>you can easily select the style of staging you want in a few clicks. You can remove unwanted clutter in any room and have marketing that home buyers fall in love with.</p>
              <h1 style={{fontSize:"30px"}}>Virtual home staging services delivered in just 24 hours</h1>
              <p style={{fontSize:"18px"}}>Real estate agents have a high demand business so every day they can save counts. We delivers high quality virtual staging twice as fast as the competition so that you can list your property on time. With 24 hour delivery you can always get your virtually staged images the next business day and get your property on the real estate market for sale.</p>
          </div>
          <div>
            <ImageSlider />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
