import React from 'react';
import './BookingCta.css';

const BookingCta = () => {
    return (
        <section id="contact" className="booking-cta">
            <div className="container">
                <div className="booking-card glass">
                    <div className="booking-info">
                        <h2>Ready for an <span>Adventure?</span></h2>
                        <p>Our guides are waiting to show you the heart of Sri Lanka. Book your eBike tour today and experience the island like a local.</p>
                        <form className="booking-form">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <select>
                                <option>Select Tour</option>
                                <option>Colombo City Explorer</option>
                                <option>Sigiriya Countryside</option>
                                <option>Ella Mountain Trails</option>
                            </select>
                            <button type="button" className="button button-primary">Send Inquiry</button>
                        </form>
                    </div>
                    <div className="booking-visual">
                        <img src="/feature-bg.jpg" alt="Wild Bike Tours" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCta;
