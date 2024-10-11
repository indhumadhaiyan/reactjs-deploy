import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";
// import useFetch from "./hooks/useFetch";
import { useEffect } from "react";
import axios from "axios";
import VirtualStaging from "./Pages/VirtualStaging";
import Photo from "./Pages/Photo";
import Lawn from "./Pages/Lawn";
import Dusk from "./Pages/Dusk";
import Video from "./Pages/Video";
import ImageSlider from "./Pages/ImageSlider";


export default function App() {
  // let { loading, error, data } = useFetch(
  //   "https://1337-alanproject24-anu-aw44d26qcrr.ws-us116.gitpod.io/api/services"
  // );
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;
  // console.log(data);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://1337-alanproject24-anu-aw44d26qcrr.ws-us116.gitpod.io/api/service"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //console.log(data);
  return (
    <div style={{ background: "rgba(13, 15, 17, 1)", height: "" }}>
      <Router basename="/reactjs-deploy">
        
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/virtual-staging" element={<VirtualStaging />} />
            <Route path="/photo-editing" element={<Photo />} />
            <Route path="/lawn-replacement" element={<Lawn />} />
            <Route path="/virtual-dusk" element={<Dusk />} />
            <Route path="/video-editing" element={<Video/>}/>
            <Route path="/image-slider" element={<ImageSlider />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
