import React from "react";
import "./Usercard.css"; // Keep the styles

const Usercard = ({ name, email, phone, address, profilePhoto }) => {
  return (
    <div className="user-card">
      <img src={profilePhoto} alt="User Profile" className="user-photo" />
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default Usercard;