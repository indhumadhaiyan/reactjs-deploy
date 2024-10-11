import React,{useState} from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Pages/Photo.css";
import VirtualStaging1 from "../assets/bg1.jpg";


const VirtualStaging = () => {
    const images = [
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp1.42c71642.jpg&w=1920&q=75' ,
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp2.3fbe3ca9.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp21.c322cc11.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp3.a8feb064.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp5.806abdc6.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp8.19a4cd5c.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp1.42c71642.jpg&w=1920&q=75' ,
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp2.3fbe3ca9.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp21.c322cc11.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp3.a8feb064.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp5.806abdc6.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp8.19a4cd5c.jpg&w=1920&q=75'
      ];
    
      const [popupActive, setPopupActive] = useState(false);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const openPopup = (index) => {
        setCurrentIndex(index);
        setPopupActive(true);
      };
    
      const closePopup = () => {
        setPopupActive(false);
      };
    
      const updateImage = (index) => {
        setCurrentIndex(index);
      };
    
      const handleLeftArrow = () => {
        if (currentIndex > 0) {
          updateImage(currentIndex - 1);
        }
      };
    
      const handleRightArrow = () => {
        if (currentIndex < images.length - 1) {
          updateImage(currentIndex + 1);
        }
      };
    
    
  return (
    <div className='photo-editing'>
      <Navbar />
      <section className="vs-sec" style={{paddingTop:"1rem"}}>
        <div className="vs-main">
          <div className="vs-sub-txt">
            <h1>Expert Photo Editors.</h1>
            <p>
              Every image you upload to Edit Everest Productions will be
              assigned to a designer with years of training and experience in
              real estate editing. After the photo is completed by our editors
              it passes through two quality assurance checks to ensure the
              highest quality and consistency prior to delivery.
            </p>
          </div>
          <div className="vs-sub-img">
            <img
              style={{
                borderRadius: "20px",
                boxShadow: "5px 15px 20px black",
                width: "200rem",
              }}
              src={VirtualStaging1}
              alt=""
            ></img>
          </div>
        </div>
      </section>
      <section style={{background:"white", height:"50rem",padding:"1rem"}} className='image-sec'>
        <div>
          {/* Popup */}
          <div className={`popup ${popupActive ? "active" : ""}`}>
            {/* Top bar */}
            <div className="top-bar">
              <p className="image-name">{images[currentIndex]}</p>
              <span className="close-btn" onClick={closePopup}>X</span>
            </div>
            {/* Arrows */}
            <button style={{color:"white"}} className="arrow-btn left-arrow" onClick={handleLeftArrow}>Previous
              
            </button>
            <button style={{color:"white"}}
              className="arrow-btn right-arrow"
              onClick={handleRightArrow}
            >
              Next
            </button>
            {/* Image */}
            <img
              src={images[currentIndex]}
              className="large-image"
              alt="Popup Large"
            />
            {/* Image Index */}
            <h1 className="index">0{currentIndex + 1}</h1>
          </div>

          {/* Gallery */}
          <div className="gallery">
            {images.map((image, index) => (
              <div className="gallery-image" key={index}>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="image"
                  onClick={() => openPopup(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='main-para'>
            <div className='part1-para' style={{display:"flex", backgroundColor:"white",padding:"3rem"}}>
                <div className='sub-part1-para1' style={{padding:"2rem"}}>
                    <h1>Ample Available Editing Options</h1>
                    <p>Edit Everest professional real estate photo editors use a series of advanced digital editing tools and platforms. As such, we offer a slew of editing options for your photographs, and we will customize our approach based on your specific needs. Some examples include our virtual staging and twilight capabilities. We also specialize in flash blend and HDR. Additionally, we're always looking for further updates in the digital photography industry and enhancing our abilities to better serve the real estate market.</p>
                </div>
                <div className='sub-part1-para2'style={{padding:"2rem"}}>
                    <h1>Remove Obstructions</h1>
                    <p>We understand that few snapshots are perfect when you first take them. In fact, one of the most common struggles with real estate photography is dealing with obstructions that block the view of a beautiful home. With our real estate photography editing services, you can effectively remove these items from view and enhance the overall quality of images in seconds. From a lockbox near the front door to a full-sized vehicle in the driveway, you'll never need to worry about these unsightly items again.</p>
                </div>
            </div>
            <div className='part2-para'style={{display:"flex", background:"white",padding:"3rem"}}>
            <div className='sub-part1-para1' style={{padding:"2rem"}}>
                    <h1>Make Great Impressions on Buyers</h1>
                    <p>The more attention you give to your real estate photographs, the more likely they are to leave a positive impression on prospective buyers. Buyers want to like what they see, and every detail matters when attracting the best leads. Premium real estate HDR photo editing services provide you with an advantage over the competition by making the changes that appeal the most to any onlooker's eye.</p>
                </div>
                <div className='sub-part1-para2'style={{padding:"2rem"}}>
                    <h1>Quickly Post New Properties for Sale</h1>
                    <p>Getting a home's real estate profile on the market quickly ensures that the viewing appears in as many buyer searches as possible. So having access to real estate photo editing services that turn your portfolio around quickly will be the key to success. We guarantee on-time delivery for your photographs, and in many cases, we can get you the edits you want within the same day. This way, you don't have to waste precious minutes that could go toward gathering interest.</p>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default VirtualStaging;
