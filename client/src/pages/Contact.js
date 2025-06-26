import React from "react";
import "./Pages.css";

export default function Contact() {
    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      try {
        const response = await fetch("http://localhost:5001/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "cors", // Explicitly set CORS mode,
          credentials: "include"
        });

        if (response.ok) {
          alert("Thank you for your message! We'll contact you soon.");
          e.target.reset();
        } else {
          alert("Something went wrong. Please try again later.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
    };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Have questions about our battery recycling services? Get in touch!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@akirecycling.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Southern Ontario, Canada</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              required 
              placeholder="Subject of your message"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}