import React,{useState} from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Pages/Photo.css";
import VirtualStaging1 from "../assets/bg1.jpg";


const Lawn = () => {
    const images = [
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F2before.caae7b6a.jpg&w=828&q=75' ,
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F1after.1f1508a9.jpeg&w=828&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F4after.93735913.jpeg&w=828&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F3after.133b0263.jpeg&w=828&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F5after.beef9b97.jpeg&w=828&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp8.19a4cd5c.jpg&w=1920&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F6after.9f05c204.jpeg&w=828&q=75' ,
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F7after.c6aec3b6.jpeg&w=828&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F8after.6c0e3cfd.jpeg&w=828&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F9after.7fd8127e.jpeg&w=828&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F10after.9a49525f.jpeg&w=828&q=75',
        'https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F11after.c6e50917.jpeg&w=828&q=75'
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
            <h1>Real Estate Photography Grass Replacement Services.</h1>
            <p>
            Fix new construction dirt fill, bare patches, clutter, and more with our real estate photography grass replacement service. Our team of experts will make any lawn ready for marketing.
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
            <div>
            <div className='part1-para' style={{display:"flex", backgroundColor:"white",padding:"3rem"}}>
            <div>
                <img src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcl1.4f7c0e26.jpeg&w=750&q=75' style={{width:"1100px", paddingTop:"2rem"}}  alt=''></img>
            </div>
                <div className='sub-part1-para1' style={{padding:"1rem"}}>
                    <h1 style={{fontSize:"50px"}}>Put your best foot forward</h1>
                    <p>It's hard to draw in customers when you're competing against thousands of real estate properties on a single listing website. It will be even harder if your real estate listing photos feature an unsightly yard. Give yourself the best chance of attracting potential buyers with Phixer real estate photography grass replacement services.</p>
                </div>
                <div>
                <img src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcl2.6b9a42f1.jpeg&w=750&q=75' style={{width:"1100px", paddingTop:"2rem"}}  alt=''></img>
            </div>
                <div className='sub-part1-para2'style={{padding:"1rem"}}>
                    <h1 style={{fontSize:"50px"}}>Surroundings are just as important as the property itself</h1>
                    <p>Unsurprisingly, clutter and mess outside of the home can be just as detrimental to the property's sellability as clutter inside the home. Phixer aims to relieve owners and agents of the hassle that cleaning a large mess requires with convenient real estate photography grass replacement. We can even customize the grass to best suit the state in which the home is located.</p>
                </div>
            </div>
            </div>
            
            <div className='part2-para'style={{display:"flex", background:"white",padding:"3rem"}}>
            <div>
                <img src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcl3.70c99fb3.jpeg&w=750&q=75' style={{width:"1100px", paddingTop:"2rem"}}  alt=''></img>
            </div>
                <div className='sub-part1-para1' style={{padding:"2rem"}}>
                    <h1>Cheaper than actual garden maintenance costs</h1>
                    <p>Maintaining an actual lawn could imply spending a lot of money on lawnmowers and fertilizers. No matter how well you take care of your lawn, you still can't prevent seasonal changes. Grass replacement editing improves your garden's appearance for a fraction of the cost.</p>
                </div>
                <div>
                <img src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcl4.90a7a2b0.jpeg&w=640&q=75' style={{width:"1100px", paddingTop:"2rem"}}  alt=''></img>
            </div>
                <div className='sub-part1-para2'style={{padding:"2rem"}}>
                    <h1>First impressions matter</h1>
                    <p>To potential buyers, an unsightly lawn could be a red flag and indicate the rest of the listing photos aren't worth exploring. They'll likely move along to the next listing without giving the rest of the home a second thought. Make a lasting first impression with a lush yard.</p>
                </div>
            </div>
            <div className='part3-para'style={{display:"flex", background:"white",padding:"3rem"}}>
            <div>
                <img src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcl5.4443b921.jpeg&w=640&q=75' style={{width:"400px", paddingTop:"2rem"}}  alt=''></img>
            </div>
                <div className='sub-part1-para1' style={{padding:"2rem"}}>
                    <h1>Digital lawn replacement is quicker</h1>
                    <p>You may need to take photos of your real estate during summer when the sun is high in the sky. The property would look pristine under the bright sunny sky, but the grass won't fare the same way. Lawn replacement editing allows your real estate to look like spring all year long.</p>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Lawn;
