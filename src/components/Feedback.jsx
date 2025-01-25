import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
    acceptedTerms: false,
  });

  const navigate = useNavigate();  // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`We got you. Thanks!`); 
    navigate('/'); 
  };

  return (
    <div className="contact-form-container">
      <h2>Share Your FeedBack</h2>
      <p>Reach out to learn more or collaborate!</p>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          required
        />

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
            required
          />
          <span>I accept the terms</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
