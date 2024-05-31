// src/pages/SponsorUs.js
import React from 'react';
import '../styles.css';
import goldImage from '../images/gold-medal.png';
import silverImage from '../images/silver-medal.png';
import bronzeImage from '../images/bronze-medal.png';
import otherImage from '../images/others.png';

const Sponsor = () => {
  return (
    <div className="sponsor-us">
      <header>
        <h1>Sponsor Us</h1>
        <p>Help us achieve the zenith</p>
        <a href="https://firebasestorage.googleapis.com/v0/b/personnel-94c6d.appspot.com/o/DRT%20BROCHURE.pdf?alt=media&token=f165c7fc-34af-4144-9def-31deb91af261" target="_blank" rel="noopener noreferrer" className="download-button-sponsor">OUR BROCHURE</a>
      </header>

      <div className="sponsor-tiers">
        <div className="sponsor-tier gold">
          <img src={goldImage} alt="Gold Sponsor" />
          <h2>Gold</h2>
          <p>50,000 INR+</p>
          <ul>
            <li>Company Banner at the competetion</li>
            <li>Mention at public outreach</li>
            <li>Logo on Car</li>
            <li>Logo on all merchandise of team</li>
            <li>Appreciation posts on social media handles of the team</li>
            <li>Mention on the website</li>
            <li>Souvenir as a token of appreciation</li>
          </ul>
        </div>
        <div className="sponsor-tier silver">
          <img src={silverImage} alt="Silver Sponsor" />
          <h2>Silver</h2>
          <p>25,000 - 50,000 INR</p>
          <ul>
            <li>Mention at public outreach</li>
            <li>Logo on Car</li>
            <li>Appreciation posts on social media handles of the team</li>
            <li>Mention on the website</li>
            <li>Souvenir as a token of appreciation</li>
          </ul>
        </div>
        <div className="sponsor-tier bronze">
          <img src={bronzeImage} alt="Bronze Sponsor" />
          <h2>Bronze</h2>
          <p>10,000 - 25,000 INR</p>
          <ul>
          <li>Logo on Car</li>
            <li>Appreciation posts on social media handles of the team</li>
            <li>Mention on the website</li>
          </ul>
        </div>
        <div className="sponsor-tier other">
          <img src={otherImage} alt="Other Sponsor" />
          <h2>Other</h2>
          <p>5,000 - 10,000 INR</p>
          <ul>
          <li>Appreciation posts on social media handles of the team</li>
            <li>Mention on the website</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
