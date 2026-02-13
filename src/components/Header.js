import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isDarkMode, toggleTheme, cartCount, user, logout }) => (
  <header>
    {/* Left: Logo */}
    <div className="header-left">
      <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
      <h1>PokeNiJo</h1>
    </div>

    {/* Center: Navigation Links (Moved from Sidebar) */}
    <nav className="header-nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>

    {/* Right: Actions */}
    <div className="header-right">
      <button onClick={toggleTheme} className="header-icon-btn" title="Toggle Theme">
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <Link to="/cart" className="header-btn">
        🛒 Cart ({cartCount})
      </Link>

      {user ? (
        <button onClick={logout} className="header-btn" style={{ backgroundColor: '#e74c3c' }}>
          Logout
        </button>
      ) : (
        <Link to="/login" className="header-btn">
          Login
        </Link>
      )}
    </div>
  </header>
);

export default Header;