import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul className="footer-list">
          <li><a href="/terms">Terms and Conditions</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <p>Contact Information:</p>
        <p>Email:wanderweavers@gmail.com</p>
        <p>Phone: +91 7588490086</p>
      </div>
      <div className="footer-social">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
