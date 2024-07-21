import React, { useState } from 'react';
import '../styles.css';
import img1 from '../images/1 copy.png';
import img2 from '../images/2 copy.png';
import img3 from '../images/3 copy.png';
import img4 from '../images/6.png';
import img5 from '../images/7.png';
import img6 from '../images/8.png';
import img7 from '../images/9.png';
import img8 from '../images/10.png';
import img9 from '../images/11.png';
import img10 from '../images/20.png';
import img11 from '../images/12.png';
import img12 from '../images/13.png';
import img13 from '../images/14.png';
import img14 from '../images/15.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
import img17 from '../images/17.png';
import img18 from '../images/18.png';
import img19 from '../images/19.png';

const eventPhotos = {
  "SUPRA SAE INDIA 2018": [img1, img2, img3],
  "SUPRA SAE INDIA 2016": [img4, img5],
  "FSAE UK 2011": [img6, img7, img8, img9],
  "FSAE AUSTRALASIA 2010": [img11, img12, img13, img14],
  "FSAE INDIA 2009": [img16, img17, img18, img19, img10],
  "ALL EVENTS": [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19]
};

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState("ALL EVENTS");

  return (
    <div className="gallery-page">
      <h1>Our Event Gallery</h1>
      
      <div className="event-navigation">
        {Object.keys(eventPhotos).map((event) => (
          <button
            key={event}
            onClick={() => setSelectedEvent(event)}
            className={`event-button ${selectedEvent === event ? 'active' : ''}`}
          >
            {event}
          </button>
        ))}
      </div>
      
      <div className="image-grid">
        {eventPhotos[selectedEvent].map((img, index) => (
          <img key={index} src={img} alt={`${selectedEvent} - ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
