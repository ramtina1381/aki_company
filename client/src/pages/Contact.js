import React from "react";
import "./Pages.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const showModal = () => {
    const modal = document.getElementById("thankYouModal");
    if (modal) modal.style.display = "flex";
  };

  const closeModal = () => {
    const modal = document.getElementById("thankYouModal");
    if (modal) modal.style.display = "none";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
            });

      if (response.ok) {
        showModal();
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
          <p>Let’s build a cleaner future together. Whether you're an OEM, recycler, or community member—send us a message and we'll connect.</p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@akirecycling.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Southern Ontario, Canada</span>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.facebook.com/share/1C3UHsv5pw/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </a>
            <a
              href="https://x.com/akirecycle?s=35"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
            </a>
              <a
                href="https://www.linkedin.com/company/akirecycle/?viewAsMember=true "
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
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

      {/* Custom Modal */}
      <div
        className="modal-overlay"
        id="thankYouModal"
        style={{ display: "none" }}
        onClick={(e) => {
          if (e.target.id === "thankYouModal") closeModal();
        }}
      >
        <div className="modal-box">
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          <h2>Thank You!</h2>
          <div className="modal-content">
            <p>We appreciate your message. Our team will get back to you shortly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


