import React, { useState, useEffect } from 'react';
import './Product.css'; // Import the CSS file
import { add } from '../store/createSlice';
import { useDispatch } from 'react-redux';

const Product = () => {
  const [product, setProduct] = useState([]);
  const dispatch =useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProducts();
  }, []);
  function addprod(product){
    dispatch(add(product))
  };

  return (
    <div className="product-grid">
      {product.map((item) => (
        <div key={item.id} className="product-item">
          <img src={item.image} alt={item.title} className="product-image" />
          <h4 className="product-title">{item.title}</h4>
          <p className="product-price">Price: ${item.price}</p>
          <button className='add-to-cart-button' onClick={()=>addprod(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
