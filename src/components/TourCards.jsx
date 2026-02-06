import React from 'react';
import './TourCards.css';

const tours = [
    {
        id: 1,
        title: "Colombo City Explorer",
        duration: "3-4 Hours",
        price: "$45",
        img: "/colombo.jpg",
        desc: "Discover the hidden history and vibrant culture of Sri Lanka's capital."
    },
    {
        id: 2,
        title: "Sigiriya Countryside",
        duration: "4-5 Hours",
        price: "$55",
        img: "/sigiriya.jpg",
        desc: "Cycle through rural villages and lush trails surrounding the Lion Rock."
    },
    {
        id: 3,
        title: "Ella Mountain Trails",
        duration: "5-6 Hours",
        price: "$60",
        img: "/ella.jpg",
        desc: "Breathtaking views and tea estate trails in the heart of the hill country."
    }
];

const TourCards = () => {
    return (
        <section id="tours" className="tours">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Popular <span>Tours</span></h2>
                    <p>Hand-picked eBike adventures tailored for every explorer.</p>
                </div>
                <div className="tour-grid">
                    {tours.map(tour => (
                        <div key={tour.id} className="tour-card glass">
                            <div className="tour-img-container">
                                <img src={tour.img} alt={tour.title} className="tour-img" />
                                <div className="tour-badge">{tour.duration}</div>
                            </div>
                            <div className="tour-info">
                                <h3>{tour.title}</h3>
                                <p>{tour.desc}</p>
                                <div className="tour-footer">
                                    <span className="price">From {tour.price}</span>
                                    <a href="#contact" className="button button-primary small">Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TourCards;
