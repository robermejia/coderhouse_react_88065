
import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

 
  const getImageUrl = (imagePath) => {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `/images/${imagePath}`;
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img 
          src={getImageUrl(item.imgFrontUrl)} 
          alt={item.name}
          onError={(e) => {
            e.target.src = '/images/placeholder.png';
          }}
        />
      </div>
      <div className="item-details">
        <h4>{item.name}</h4>
        <p className="item-category">{item.category}</p>
        <p className="item-price">${item.price.toLocaleString()}</p>
      </div>
      <div className="item-quantity">
        <button 
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="quantity-btn"
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button 
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="quantity-btn"
        >
          +
        </button>
      </div>
      <div className="item-total">
        <span className="total-price">
          ${(item.price * item.quantity).toLocaleString()}
        </span>
        <button 
          onClick={handleRemove}
          className="remove-btn"
          title="Eliminar del carrito"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartItem;