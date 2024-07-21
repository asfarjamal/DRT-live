import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Sponsor from './pages/Sponsor';
import News from './pages/News';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Learn from './pages/Learn';
import Induction from './pages/Induction';
import Footer from './pages/Footer'; // Import the Footer component
import './styles.css'; // Make sure this includes the styles for the footer

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/news" element={<News />} />
        <Route path="/induction" element={<Induction />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Add the Footer component */}
    </Router>
  );
}

export default App;
