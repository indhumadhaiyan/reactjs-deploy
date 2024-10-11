import React,{useState} from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Pages/Photo.css";
import "../Pages/Video.css";
import ReactPlayer from 'react-player'
//import Video1 from "../assets/Videopg1.mp4";

//import Video1 from "https://www.w3schools.com/tags/mov_bbb.mp4";

const Video = () => {
    const images = [
        1,
        2,
        3,
        4,
        5,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
        // <ReactPlayer url={Video1} light={true} controls={true} height="500px" width="900px" style={{paddingLeft:"280px"}} ></ReactPlayer>,
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
            <h1 style={{fontSize:"60px"}}>Real Estate Video Editing Simplified.</h1>
            <p>
            Upload any type of video and our team of expert video editors will turn them into a 4K Hollywood quality film.
            </p>
          </div>
          <div className="vs-sub-img">
            <img
              style={{
                borderRadius: "50px",
                boxShadow: "5px 15px 20px black",
                width: "70rem",
              }}
              src="https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fvideo-banner.44bd1f5a.png&w=750&q=75"
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
                  src='https://www.phixer.net/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fp2.3fbe3ca9.jpg&w=1920&q=75'
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
                    <h1 style={{fontSize:"35px"}}>Immersive Touring for Buyers</h1>
                    <p>Viewing a property in-person is generally preferred by buyers. However, they still want to know ahead of time if the home is worth their time. Videos allow them to walk through a house and its land without ever needing to leave the comfort of their couch. This, combined with the power of real estate video editing, can create a fully immersive experience that will pique interest and encourage in-person touring.</p>
                </div>
                <div className='sub-part1-para2'style={{padding:"2rem"}}>
                    <h1 style={{fontSize:"35px"}}>Polished Clarity and Style</h1>
                    <p>From giving a room extra light to introducing a color that complements certain style elements, our team of experienced real estate video editing professionals can make a home look flawless. We work tirelessly to bring out a home's best features by designing strategically with our advanced video editing tool kit. We can even bring some blurry videos into greater focus for visual clarity and attractiveness.</p>
                </div>
            </div>
            <div className='part2-para'style={{display:"flex", background:"white",padding:"3rem"}}>
            <div className='sub-part1-para1' style={{padding:"2rem"}}>
                    <h1 style={{fontSize:"35px"}}>Diverse Enhancement Capabilities</h1>
                    <p>Our real estate video editing outsourcing team utilizes a series of advanced video editing tools to bring out the beauty of a property. We also go the extra mile to hire only the most experienced and knowledgeable editors in this industry, allowing us access to the best techniques.</p>
                </div>
                <div className='sub-part1-para2'style={{padding:"2rem",}}>
                    <h1 style={{fontSize:"35px"}}>Create Unique Real Estate Portfolios</h1>
                    <p>Almost all virtual property listings have photos to accompany them. But video walkthroughs are still relatively rare. Even having one of these films in a portfolio can prove beneficial in attracting buyers and facilitating a greater number of options for sellers. So when used in tandem with powerful real estate video editing services, it can make your listings stand out from the rest.</p>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Video;
