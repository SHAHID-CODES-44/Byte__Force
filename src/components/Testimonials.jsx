import React from "react";
import './Style.css'

const Testimonials = () => {
    const testimonialsData = [
        { id: 1, name: "John Doe", feedback: "Excellent service and top-notch quality!" },
        { id: 2, name: "Jane Smith", feedback: "Highly recommend this to everyone!" },
        { id: 3, name: "Michael Brown", feedback: "Professional and reliable. A great experience." },
        { id: 4, name: "Sarah Wilson", feedback: "Truly exceeded my expectations!" },
        { id: 5, name: "David Johnson", feedback: "The team is friendly and very helpful." },
        { id: 6, name: "Emma Davis", feedback: "Amazing products with exceptional service." },
        { id: 7, name: "Chris Miller", feedback: "A seamless and enjoyable experience overall." },
        { id: 8, name: "Sophia Garcia", feedback: "Their attention to detail is remarkable." },
        { id: 9, name: "Daniel Martinez", feedback: "Affordable and worth every penny." },
        { id: 10, name: "Olivia Taylor", feedback: "Would definitely use their services again!" },
        { id: 10, name: "Olivia Taylor", feedback: "Would definitely use their services again!" },
        { id: 10, name: "Olivia Taylor", feedback: "Would definitely use their services again!" },
        
    ];

    return (
        <div className="testimonials-container">
            <h1 className="testimonials-title">What Our Clients Say</h1>
            <div className="testimonials-grid">
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                        <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                        <h3 className="testimonial-name">- {testimonial.name}</h3>
                    </div>
                ))}
            </div>
            <h1>THANKS</h1>
        </div>
    );
};

export default Testimonials;
