import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert('Message sent to Gym Leader Jo!');
  };

  return (
    <>
      <h2>Contact Form</h2>
      {submitted ? <p>Thank you! We will get back to you soon.</p> : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your full name" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="How can we help you today?"></textarea>
          <button type="submit">Submit Form</button>
        </form>
      )}
    </>
  );
};

export default Contact;