import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Connect</h4>
          <p>info@akibatterymaterials.com</p>
          <p>Ontario, Canada</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aki Battery Materials</p>
      </div>
    </footer>
  );
};

export default Footer;