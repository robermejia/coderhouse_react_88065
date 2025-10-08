
import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Tu carrito está vacío</h2>
          <p>¡Agrega algunos productos para comenzar!</p>
          <Link to="/" className="continue-shopping-btn">
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-summary">
          <h3>Resumen del pedido</h3>
          <div className="summary-line">
            <span>Total: ${getTotalPrice().toLocaleString()}</span>
          </div>
          <div className="cart-actions">
            <button onClick={clearCart} className="clear-cart-btn">
              Vaciar carrito
            </button>
            <Link to="/checkout" className="checkout-btn">
              Finalizar compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;