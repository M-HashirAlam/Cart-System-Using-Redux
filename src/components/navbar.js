import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
  const num =useSelector((state)=>state.cart)
  return (
    <div className="navbar-container">
      <span className="logo">My Store</span>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
        <span className="cart-item-count">Cart Items: {num.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
