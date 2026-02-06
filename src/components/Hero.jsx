import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">Experience Sri Lanka <br /><span>Like Never Before</span></h1>
                <p className="hero-subtitle">Premium eBike tours through the heart of paradise. Explore ancient ruins, lush tea estates, and vibrant cities.</p>
                <div className="hero-btns">
                    <a href="#tours" className="button button-primary">Explore Tours</a>
                    <a href="#about" className="button" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', marginLeft: '1rem' }}>Our Story</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
