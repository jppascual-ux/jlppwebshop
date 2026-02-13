import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulates the secure payment gateway response from your original activity
  const processPayment = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: 200, message: "Payment Captured!" });
      }, 2500); // 2.5 second delay to simulate network latency
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await processPayment();
      console.log(response.message); //
      alert("Order placed successfully! Redirecting to receipt...");
      navigate('/receipt'); // Redirects to receipt after confirmation
    } catch (error) {
      alert("Transaction failed. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="centered-content">
      <div className="profile-card checkout-card">
        <h2>Delivery & Payment</h2>
        <p>Complete your trainer details to finish the order.</p>
        
        <form className="contact-form" onSubmit={handleCheckout}>
          <label htmlFor="delivery">Preferred Delivery:</label>
          <select id="delivery" required>
            <option value="standard">Standard Shipping (Free)</option>
            <option value="express">Pidgeot Express ($10.00)</option>
            <option value="overnight">Dragonite Overnight ($25.00)</option>
          </select>

          <label htmlFor="payment">Payment Method:</label>
          <select id="payment" required>
            <option value="card">Credit / Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </select>

          <div className="order-summary">
            <div className="summary-item">
              <span>Items Total:</span>
              <strong>$69.99</strong>
            </div>
            <div className="summary-item text-accent">
              <span>Shipping:</span>
              <strong>Calculated</strong>
            </div>
            <div className="summary-total">
              <span>Total:</span>
              <strong>$69.99</strong>
            </div>
          </div>

          <button 
            type="submit" 
            className="animated-button" 
            disabled={isProcessing}
            style={{ opacity: isProcessing ? 0.7 : 1 }}
          >
            {isProcessing ? "Verifying Transaction..." : "Complete Purchase"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;