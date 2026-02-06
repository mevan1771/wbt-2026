import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourCards from './components/TourCards';
import BookingCta from './components/BookingCta';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TourCards />
        <BookingCta />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>WILD BIKE <span>TOURS</span></h3>
              <p>Premium Guiding & eBike Adventures in Sri Lanka.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#tours">Tours</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Wild Bike Tours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
