import React from 'react';
import '../Style/Footer.css'; 

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-info">
          <p className="footer-text">
            &copy; <span className="footer-brand">Nature's Eye</span>. All rights reserved.
          </p>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">YouTube</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

