import React from 'react';
import './Landing_page.css';

const LandingPage = () => {
    return (
        <>
            <header className="navbar">
                <nav>
                    <div className="left"><h1>CupCycle</h1></div>
                    <div className="right">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/About">OurVision</a></li>
                            <li><a href="/Service">Service</a></li>
                            <li><a href="/Testimonials">Testimonials</a></li>
                            <li><a href="/Helpdesk">HelpDesk</a></li>
                            <li><a  href="/Supporters">Supporters</a></li>
                        </ul>
                    </div>
                    <a href="/Signup"><button className="btn1">Join</button></a>
                    <a href="/Dashboard"><button className="btn2">Track Your Impact</button></a>
                   

                </nav>
              
            </header>
          
            <main>
                <section className="section1">
                    <div className="homepage">
                        <div className="tag-line">
                            <h1 id='text18'>Reduce Waste with <br /><span className="purple">CupCycle</span> Today</h1>
                        </div>
                        <div className="lower-btn">
                        <a href="/Signup"><button className="lbtn1">Join The Movement</button></a>
                        <a href="/Dashboard"><button className="lbtn2">Track Your Impact</button></a>
                        </div>
                        <a href="/Feedback"><button className="btn3">Share Feedback</button></a>
                        <a href="/Live"><button className="btn4">See Live Details</button></a>

                    </div>
                </section>

                <section className="section2">
                    <div className="features-section">
                        <div className="features-container">
                            {/* Feature 1 */}
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <span className="icon">&#9679;&#9679;&#9679;</span>
                                </div>
                                <h3 className="feature-title">Personalized Dashboard</h3>
                                <p className="feature-description">View your saved cups and earned points!</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <span className="icon">&#9733;</span>
                                </div>
                                <h3 className="feature-title">Gamification Rewards</h3>
                                <p className="feature-description">Track achievements and earn rewards for sustainable actions.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <span className="icon">&#9654;</span>
                                </div>
                                <h3 className="feature-title">Engaging Resources</h3>
                                <p className="feature-description">Explore articles, videos, and tips for sustainability.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-contact">
                    <div className="contact-form">
                        <h2>Get in Touch Today</h2>
                        <h1>Contact Us</h1>
                        <p>Reach out to learn more or collaborate!</p>
                        <form>
                            <div>
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" required />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" />
                            </div>
                            <div>
                                <input type="checkbox" id="terms" />
                                <label htmlFor="terms">I accept the terms</label>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} CupCycle. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;