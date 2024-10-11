import React,{useState} from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Pages/Photo.css";
import VirtualStaging1 from "../assets/bg1.jpg";


const Dusk = () => {
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
            <h1>Virtual Twilight Photo Editing Simplified.</h1>
            <p>
            Our day-to-dusk photo editing services turn your daytime exterior photos into gorgeous twilight photos.
            </p>
          </div>
          <div className="vs-sub-img">
            <img
              style={{
                borderRadius: "20px",
                boxShadow: "5px 15px 20px black",
                width: "100rem",
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
                <img src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcvt1.fe2c15d4.jpeg&w=640&q=75'style={{height:"200px",paddingTop:"2rem"}}></img>
                <div className='sub-part1-para1' style={{padding:"2rem"}}>
                    <h1 style={{fontSize:"35px"}}>The Golden Hour is an Aesthetic Standard</h1>
                    <p>Often, social media influencers will capture their content during the golden hour because of the soft glow and iridescent lighting. You can achieve a similar effect in your real estate photos with our virtual twilight photo editing. Attract potential buyers with unique illuminations from the house interior to the beautiful twilight sky.</p>
                </div>
                <img src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcvt2.d0198f7e.jpeg&w=640&q=75' style={{height:"200px",paddingTop:"2rem"}}></img>
                <div className='sub-part1-para2'style={{padding:"2rem"}}>
                    <h1 style={{fontSize:"35px"}}>Create Your Perfect Timing</h1>
                    <p>Forget bad weather and waiting around for prime shooting time. With Phixer day-to-dusk photo editing services, you can achieve the appealing effects of twilight lighting in your real estate photos regardless of when they were taken.</p>
                </div>
            </div>
            <div className='part2-para'style={{display:"flex", background:"white",padding:"3rem"}}>
            <img src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcvt1.fe2c15d4.jpeg&w=640&q=75'style={{height:"200px",paddingTop:"2rem"}}></img>
            <div className='sub-part1-para1' style={{padding:"2rem"}}>
                    <h1 style={{fontSize:"35px"}}>Creatively Show Lighting Contrasts</h1>
                    <p>Real estate interiors and exterior lightings are hard to capture with standard digital cameras. Glass, lens flares, and other reflections may distort or cause lighting to react in an unflattering way. Leave your lighting struggles behind with Phixer virtual twilight real estate photography editing. Our services create a beautiful distinction between light and shadows that appeal to all audiences without any hassle.</p>
                </div>
                <img src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcvt1.fe2c15d4.jpeg&w=640&q=75'style={{height:"200px",paddingTop:"2rem"}}></img>
                <div className='sub-part1-para2'style={{padding:"2rem"}}>
                    <h1 style={{fontSize:"35px"}}>Adjust Overexposed Images</h1>
                    <p>Have you ever found yourself shooting a view that you thought would have been perfect if the natural light wasn't so bright? Overexposed photos look unprofessional and will give buyers the impression that you don't know your equipment. Virtual twilight photo editing modifies overexposed lighting and brings contrast to emphasize the property's key elements.</p>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Dusk;
