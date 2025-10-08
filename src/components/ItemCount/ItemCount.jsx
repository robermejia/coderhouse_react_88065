
import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
  };

  if (stock === 0) {
    return (
      <div className="item-count">
        <p className="no-stock">Producto sin stock</p>
      </div>
    );
  }

  return (
    <div className="item-count">
      <div className="quantity-controls">
        <button 
          onClick={handleDecrement} 
          disabled={quantity <= 1}
          className="quantity-btn"
        >
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button 
          onClick={handleIncrement} 
          disabled={quantity >= stock}
          className="quantity-btn"
        >
          +
        </button>
      </div>
      <button 
        onClick={handleAddToCart}
        className="add-to-cart-btn"
        disabled={quantity > stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;