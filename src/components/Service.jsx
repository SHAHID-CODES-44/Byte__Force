import React from 'react';
import './Style.css';

const Service = () => {
    return (
        <>
            <div className="main-container-service">
                {/* Navbar */}
                <nav id="navbar2">
                    <h1 id="logo1">CupCycle</h1>
                    <div id="navdetails">
                        <p id="info1">Home</p>
                        <p id="info1">About</p>
                        <p id="info1">Service</p>
                        <p id="info1">Testimonial</p>
                        <p id="info1">Contact</p>
                    </div>
                    <div id="navdetais2">
                        <p id="text1">Join</p>
                        <button id="track">Track Your Impact</button>
                    </div>
                </nav>

                {/* Services Section */}
                <div className="service-container">
                    <div className="ser1">
                        <br />
                        <p>Awareness Campaigns</p>
                        <p>We organize community events and workshops to raise awareness about sustainable practices and environmental conservation.</p>
                    </div>
                    <div className="ser1">
                        <p>Eco-friendly Products</p>
                        <p>Our range of eco-friendly products is designed to reduce waste and promote sustainable living.</p>
                    </div>
                    <div className="ser1">
                        <p>Collaboration</p>
                        <p>We collaborate with businesses and individuals to create impactful solutions for a greener future.</p>
                    </div>
                    <div className="ser1">
                        <p>Recycling</p>
                        <p>Our recycling programs ensure proper waste management, turning used materials into new resources.</p>
                    </div>
                </div>

                {/* Footer */}
                <footer id="footer">
                    <h1>Thanks for Visiting</h1>
                    <p>About Us</p>
                </footer>
            </div>
        </>
    );
};

export default Service;
