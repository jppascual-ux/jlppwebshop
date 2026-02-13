import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="content">
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <table>
            <thead>
              <tr><th>Product</th><th>Price</th><th>Action</th></tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.cartId}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button style={{ background: '#e74c3c' }} onClick={() => removeFromCart(item.cartId)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <Link to="/checkout" className="animated-button">Proceed to Checkout</Link>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p>Your cart is empty, Trainer!</p>
          <Link to="/products" className="btn-login">Go Shopping</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;