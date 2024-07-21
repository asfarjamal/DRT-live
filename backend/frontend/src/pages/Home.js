import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tes2 from '../images/tes2.png';
import tes3 from '../images/tes3.png';
import test from '../images/test.png';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Enable center mode for the slider
    centerPadding: '0px', // Set center padding to 0 to remove spacing
  };

  return (
    <div className="home">
      <Slider {...settings}>
        {/* Apply styles to center the images */}
        <div className="slide-content">
          <div className="image-text-container">
            <div className="image-container">
              <img src={tes2} alt="Racing Car 1" className="slider-image" />
            </div>
            <div className="text-container">
              <h2>Drift Racing Team</h2>
              <p>Official student Formula racing automotive team of National Institute of Technology, Jamshedpur</p>
              <Link to="/About" className="know-more-btn">LEARN MORE</Link> {/* Link to About page */}
            </div>
          </div>
        </div>
        <div className="slide-content">
          <div className="image-text-container">
            <div className="image-container">
              <img src={tes3} alt="Racing Car 2" className="slider-image" />
            </div>
            <div className="text-container">
              <h2>Built to Win</h2>
              <p>We take part in various national competitions like <br /> Formula Bharat, SUPRA SAE, FORMULA IMPERIAL, <br /> FSAE Australia and FSAE United Kingdom</p>
              <Link to="/Team" className="know-more-btn">OUR TEAM</Link> {/* Link to About page */}
            </div>
          </div>
        </div>
        <div className="slide-content">
          <div className="image-text-container">
            <div className="image-container">
              <img src={test} alt="Racing Car 3" className="slider-image" />
            </div>
            <div className="text-container">
              <h2>Founded in 2009</h2>
              <p>We are all artists, the track is our canvas and the car is our <br/> brush.</p>
              <Link to="/Contact" className="know-more-btn">CONTACT US</Link> {/* Link to About page */}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
