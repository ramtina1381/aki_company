import React, { useState } from 'react';
import Modal from './Modal';
import './Footer.css';

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><button onClick={() => setShowPrivacy(true)} className="link-button">Privacy Policy</button></li>
              <li><button onClick={() => setShowTerms(true)} className="link-button">Terms of Service</button></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Connect</h4>
            <p><a href="mailto:info@akirecycling.com">info@akirecycling.com</a></p>
            <p>Southern Ontario, Canada</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aki Battery Recycling</p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} title="Privacy Policy">
        <p>
          We respect your privacy and are committed to protecting your personal information. Any data collected will
          only be used to improve our services and will never be shared without your consent. For full details,
          including how we handle cookies, user data, and third-party services, please contact us at info@akibatterymaterials.com.
        </p>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={showTerms} onClose={() => setShowTerms(false)} title="Terms of Service">
        <p>
          By using our website, you agree to our terms of use. You may not misuse the content or services provided.
          Aki Battery Materials reserves the right to modify or terminate services at any time. Your continued use
          constitutes acceptance of these terms. Please review them regularly for updates.
        </p>
      </Modal>
    </>
  );
};

export default Footer;
