import React from 'react';
import { Navigate } from 'react-router-dom';

const Profile = ({ user }) => {
  // Guard clause: if no user is logged in, redirect them to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile-grid">
      <section className="profile-card">
        <h2>Trainer Info</h2>
        <div className="info-group">
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile:</strong> {user.mobile}</p>
          <p><strong>Course:</strong> BSIT - Business Analytics (FEU Tech)</p>
          <p><strong>Address:</strong> 123 Pallet Town St., Kanto Region</p>
        </div>
        <button className="animated-button" style={{ marginTop: '10px', padding: '0.5rem 1rem' }}>
          Edit Profile
        </button>
      </section>

      <section className="profile-card">
        <h2>Recent Orders</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prismatic ETB</td>
                <td>$69.99</td>
                <td><span className="status-badge">Shipped</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Profile;