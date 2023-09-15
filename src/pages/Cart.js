import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import './cart.css'; // Import the CSS file
import { remove } from '../store/createSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const [total,settotal]=useState(0)
;
  const removeprod= (prodid)=>{
    dispatch(remove(prodid))
  };
  useEffect(() => {
    let calculatedTotal = 0;
    cartItems.forEach((item) => {
      calculatedTotal += item.price;
    });
    settotal(calculatedTotal);
  }, [cartItems]);



  
    return cartItems.length >0 ? (
    
      <div className="cart-container">
      <h1 className="cart-title">My Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <h5 className="cart-item-title">{item.title}</h5>
            <h6 className="cart-item-price">${item.price}</h6>
          
          </div>
          <button className="cart-item-remove-button" onClick={()=>removeprod(item.id)}>Remove</button>
        </div>
      ))}
      <div><h3>Your Total:{total}</h3>
      <button className="cart-item-remove-button">Confirm Order</button>
      </div>
      
    </div>
  ):(
    <div>
      <h1 className="cart-title">My Cart</h1>
      <h2>No Products in the Cart</h2>
      <Link to="/">
      <button className="cart-item-remove-button">Continue Shopping</button>
      </Link>
    </div>
  )
};

export default Cart;
