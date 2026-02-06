import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <div className="logo">WILD BIKE <span>TOURS</span></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#tours">Tours</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="button button-primary">Enquire Now</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
