import React from 'react';
import '../styles.css'; // Import the CSS file

const Induction = () => {
  const redirectToWebsite = () => {
    // Replace the URL with the actual website URL
    window.open('https://inductions2022.onrender.com/results/pi2', '_blank');
  };
  const orientation2021PPT = 'https://firebasestorage.googleapis.com/v0/b/personnel-94c6d.appspot.com/o/DRT%20ORIENTATION%202K21.pdf?alt=media&token=158c7f7f-ed8d-4bb4-b8eb-8e2a04aa8652'; // Replace with actual URL
  const orientation2022PPT = 'https://firebasestorage.googleapis.com/v0/b/personnel-94c6d.appspot.com/o/DRT%20ORIENTATION%202022.pdf?alt=media&token=404a03f9-85f7-4751-8fa2-215e13b01574'; // Replace with actual URL
  const brochure = 'https://firebasestorage.googleapis.com/v0/b/personnel-94c6d.appspot.com/o/DRT%20BROCHURE.pdf?alt=media&token=f165c7fc-34af-4144-9def-31deb91af261'; // Replace with actual URL

  return (
    <div className='ind'>
        <div className="induction-page">
      <h1>DRIFT RACING TEAM</h1>
      <h2>INDUCTION STUDY MATERIAL</h2>

      {/* Orientation Document Section */}
      <section className="orientation-document">
        {/* Container for download buttons */}
        <div className="download-buttons-container">
          {/* Download button for Orientation 2021 PPT */}
          <div className="download-button">
            <a href={orientation2021PPT} download>Download Orientation 2021 PPT</a>
          </div>
          {/* Download button for Orientation 2022 PPT */}
          <div className="download-button">
            <a href={orientation2022PPT} download>Download Orientation 2022 PPT</a>
          </div>
          {/* Download button for Brochure */}
          <div className="download-button">
            <a href={brochure} download>Download Brochure</a>
          </div>
        </div>
      </section>

      {/* Result Section as Button */}
      <section className="result-section">
        {/* Add a button-like div to act as the clickable button */}
        <div className="button" onClick={redirectToWebsite}>
          Induction Result
        </div>
      </section>
    </div>

    </div>
    
  );
};

export default Induction;
