import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <p className="contact-intro">
        Have questions or need assistance? Reach out and we’ll get back to you
        soon!
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="John Doe" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="john@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
