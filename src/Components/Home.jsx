import React from "react";
import FarmImage from "../Assets/farmhouse.jpg";

import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite destination is ready 
          </h1>
          <p className="primary-text">
            
Join us for a delightful evening at our farmhouse party, where rustic charm meets lively entertainment.
 Enjoy fresh, farm-to-table cuisine, live music, and great company under the open sky.
            
          </p>
          <button className="secondary-button">
            Book  Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={FarmImage} alt="" style={{ marginTop: '100px', width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
