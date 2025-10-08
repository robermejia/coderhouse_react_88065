import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link to="/cart" className="cart-widget">
      <div className="cart-icon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
          alt="Cart"
          className="cart-image"
        />
        
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;