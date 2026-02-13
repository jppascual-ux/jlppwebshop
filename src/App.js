import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
// REMOVED: import Sidebar from './components/Sidebar'; (No longer needed)

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const addToCart = (product) => setCartItems([...cartItems, { ...product, cartId: Date.now() }]);
  const removeFromCart = (cartId) => setCartItems(cartItems.filter(item => item.cartId !== cartId));
  const loginUser = (userData) => setUser(userData);
  const logoutUser = () => setUser(null);

  return (
    <Router>
      <div className={`app-wrapper ${isDarkMode ? 'dark-theme' : ''}`}>
        <Header 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          cartCount={cartItems.length} 
          user={user} 
          logout={logoutUser} 
        />
        
        {/* Changed "container" to "main-content" since we don't need side-by-side anymore */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/login" element={<Login onLogin={loginUser} />} />
            <Route path="/signup" element={<Signup onLogin={loginUser} />} />
            <Route path="/profile" element={<Profile user={user} />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2026 PokeNiJo Inc. | Catch 'em all without the scalpers!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;