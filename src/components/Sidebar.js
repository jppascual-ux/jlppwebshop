import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {/* The Sidebar itself */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul className="sidebar-nav">
            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/products" onClick={closeSidebar}>Products</Link></li>
            <li><Link to="/about" onClick={closeSidebar}>About Us</Link></li>
            <li><Link to="/contact" onClick={closeSidebar}>Contact Us</Link></li>
          </ul>
        </nav>
      </aside>
      
      {/* Overlay for mobile to darken the background when menu is open */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={closeSidebar}></div>
    </>
  );
};

export default Sidebar;