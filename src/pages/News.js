// src/pages/News.js
import React from 'react';
import Slider from 'react-slick';
import '../styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import images
import image1 from '../images/slider-1.jpg';
import image2 from '../images/slider-2.jpg';
import image3 from '../images/slider-3.jpg';
import image4 from '../images/slider-4.jpg';
import image5 from '../images/slider-5.jpg';
import image6 from '../images/slider-6.jpg';
import image7 from '../images/slider-7.jpg';
import image8 from '../images/slider-8.jpg';

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className="news-page">
      <div className="news-carousel">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slider-image-container">
              <img src={img} alt={`Slide ${index + 1}`} className="slider-image-news" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="news-text">
        <h1>DRIFT IN NEWS</h1>
        <h2>What Media Says About Us</h2>
        <p>What started off as a passion project for its founders, manifested into reality when Drift Racing Team made its victories. The team faced the mammoth task of conquering a steep learning curve in a rather short duration, battling it out with some of the most experienced teams in formula racing and has never left the news since then.</p>
      </div>
    </div>
  );
};

export default News;
