// src/components/Learn.js
import React from 'react';
import '../styles.css';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.jpg';

const Learn = () => {
  return (
    <div className="learn-page">
      <h1>Learn More About Us</h1>

      <section className="who-we-are">
        <h2>WHO ARE WE?</h2>
        <p>
        Drift Racing Team is a Formula SAE team of NIT, Jamshedpur. The team comprises of around 25 undergraduate students from various departments who fabricate an open wheel electric formula race car.

We innovate, design and excel!

Being Motorsport enthusiasts and budding engineers, we take up a task of designing and fabricating a single-seat formula style race-car and participate at International Formula Student events viz. Formula Student Australia and Formula Bharat, Formula Student UK which get participation from number of teams around the globe. Thus, this gives Drift Racing Team exposure to high-class engineering and helps develop the engineering practices of students that are going to be an important part in the development of technology in India.
        </p>
      </section>

      <section className="achievements">
        <h2>Our Achievements</h2>
        <p>Since its inception in 2009, we have won in several events all over India as well as on international tracks</p>
        <div className="achievement-grid">
          <div className="achievement-item">
            <img src={img1} alt="Achievement 1" />
            <h2>Formula Student India, 2018</h2>
            <ul>
              <li>The team took away the overall 2nd position amongst all the NITs and IITs.</li>
              <li>Overall 35th Rank among a total of 112 Teams from all across India.</li>
            </ul>
            
          </div>
          <div className="achievement-item">
            <img src={img2} alt="Achievement 2" />
            <h2>Formula Student India, 2016</h2>
            <ul>
              <li>The team was awarded 9th place in cost and manufacturing among all participating teams.</li>
              <li>Applauded for Real Case Scenario.</li>
            </ul>
          </div>
          <div className="achievement-item">
            <img src={img3} alt="Achievement 3" />
            <h2>Formula Student India, 2015</h2>
            <ul>
              <li>The team culminated 6th position in Business Presentation.</li>
              <li>Drift Racing Team had the lightest car among all race cars.</li>
            </ul>
          </div>
          <div className="achievement-item">
            <img src={img4} alt="Achievement 4" />
            <h2>Formula Student United Kingdom, 2011</h2>
            <ul>
              <li>The team represented National Institute of Technology, Jamshedpur, India at Silverstone Racing Circuit in the year 2011 with their second car model DR211.</li>
              <li>Secured the 5th position amongst 133 teams from all over the world for the distinguished "Airbus Teamwork Award".</li>
            </ul>
          </div>
          <div className="achievement-item">
            <img src={img5} alt="Achievement 5" />
            <h2>Formula Student Australia, 2010</h2>
            <ul>
              <li>The team successfully participated in the static event of Formula SAE Australia which was held at Victoria University, Melbourne, Australia.</li>
              <li>The team bagged the 1st place in the cost event of FSAE Australia as the car was designated under the " Most Economical Car Design".</li>
            </ul>
          </div>
          <div className="achievement-item">
            <img src={img6} alt="Achievement 6" />
            <h2>Formula Student India, 2009</h2>
            <ul>
              <li> Drift Racing Team participated in the event Formula SAE India in the year 2009 held at Anna University, Chennai.</li>
              <li>The vehicle fabricated by the team , DR110 was awarded 1st position in the Best Design criteria and overall the team managed to possess the 3rd rank.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
