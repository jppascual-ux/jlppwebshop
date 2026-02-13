import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Capturing data for the trainer profile
    const trainerData = {
      firstName: "Jose Luis",
      lastName: "Pascual",
      email: e.target[0].value
    };

    onLogin(trainerData); 
    alert('Welcome back, Trainer!');
    navigate('/profile'); 
  };

  return (
    <div className="centered-content">
      <div className="profile-card" style={{ maxWidth: '450px', width: '100%' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
        
        <form className="contact-form" onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="trainer@feutech.edu.ph" 
              required 
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <button type="submit" className="animated-button" style={{ width: '100%' }}>
            Enter Gym
          </button>
        </form>

        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
          New Trainer? <Link to="/signup" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;