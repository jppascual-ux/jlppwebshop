import React from 'react';
import { Link } from 'react-router-dom';

const Receipt = () => {
  return (
    <div className="centered-content">
      <div className="profile-card checkout-card">
        <h2 className="text-accent">Payment Confirmed!</h2>
        <p>Thank you for your purchase, Trainer. Your order is being processed.</p>
        
        <div className="order-summary" style={{ marginTop: '20px' }}>
          <div className="summary-item">
            <span>Order Number:</span>
            <strong>#PNJ-2026-8842</strong>
          </div>
          <div className="summary-item">
            <span>Date:</span>
            <strong>February 9, 2026</strong>
          </div>
          <div className="summary-item">
            <span>Status:</span>
            <span className="status-badge">Processing</span>
          </div>
          <hr style={{ margin: '10px 0', border: '0', borderTop: '1px solid #ddd' }} />
          <div className="summary-item">
            <span>Item:</span>
            <span>Prismatic Evolutions ETB</span>
          </div>
          <div className="summary-total">
            <span>Total Amount:</span>
            <strong>$69.99</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="animated-button" onClick={() => window.print()} style={{ flex: 1 }}>
            Print Receipt
          </button>
          <Link to="/products" className="btn-login" style={{ flex: 1, textAlign: 'center', backgroundColor: 'var(--primary-color)' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Receipt;