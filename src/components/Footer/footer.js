import React from 'react';
import './footer.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>Email: example@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 1234 Street Name, City, Country</p>
      </div>
      <div className="contact-center">
        <h2>Legal</h2>
        <p><a href="www.google.com">Privacy Policy</a></p>
        <p><a href="www.google.com">Terms and Conditions</a></p>
      </div>
      <div className="contact-right">
        <h2>Subscribe to our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;