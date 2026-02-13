import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const newTrainer = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value
    };
    onLogin(newTrainer);
    navigate('/profile');
  };

  return (
    <div className="centered-content">
      <div className="profile-card" style={{ maxWidth: '600px', width: '90%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
          Join the Community
        </h2>
        
        <form className="contact-form" onSubmit={handleSignup}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" placeholder="Enter first name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" placeholder="Enter last name" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="trainer@feutech.edu.ph" required />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="text" id="mobile" placeholder="e.g. 09391234567" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Home Address</label>
            <textarea id="address" placeholder="Street, City, Zip Code" rows="3"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Min. 8 characters" required />
          </div>

          <button type="submit" className="animated-button" style={{ width: '100%', padding: '15px' }}>
            Create Trainer Account
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;