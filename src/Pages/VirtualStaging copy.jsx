import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Pages/VirtualStaging.css";
import VirtualStaging1 from "../assets/bg1.jpg";
import SliderComponent from "../Components/Slider";

export default function VirtualStaging() {
  return (
    <div>
        <Navbar />
        <section className='vs-sec'>
            <div className='vs-main'>
                <div className='vs-sub-txt'>
                    <h1>Virtual Staging for Real Estate</h1>
                    <p>Utilizing designer brands curated by world-class interior designers, our hyper-realistic virtual staging services have the power to transform any home into an unforgettable real estate listing. Whether your space is vacant, cluttered, or simply in need of modern furnishings, you can use our virtual home staging services for any situation. Contact our sales team to get started today.</p>
                </div>
                <div className='vs-sub-img' >
                    <img style={{borderRadius:"20px", boxShadow:"5px 15px 20px black"}} src={VirtualStaging1} alt=''></img>
                </div>
            </div>
        </section>
        <section>
        <div>
      <h1>Before and After Slider</h1>
      <SliderComponent

      />
    </div>
        </section>
        <Footer />
    </div>
    
  )
}
