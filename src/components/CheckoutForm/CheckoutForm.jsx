
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [orderId, setOrderId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const order = {
        buyer: formData,
        items: cart,
        total: getTotalPrice(),
        date: new Date()
      };

      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Error al procesar la orden. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Compra realizada con éxito!</h2>
        <div className="success-content">
          <p><strong>ID de la orden:</strong> {orderId}</p>
          <p><strong>Total:</strong> ${getTotalPrice().toLocaleString()}</p>
          <p>Te enviaremos un email con los detalles de tu compra.</p>
        </div>
        <a href="/" className="continue-shopping-btn">
          Continuar comprando
        </a>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>No hay productos en el carrito</h2>
        <a href="/" className="continue-shopping-btn">
          Continuar comprando
        </a>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <div className="checkout-content">
        <div className="order-summary">
          <h3>Resumen del pedido</h3>
          <div className="order-items">
            {cart.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <strong>Total: ${getTotalPrice().toLocaleString()}</strong>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Datos de contacto</h3>
          <div className="form-group">
            <label htmlFor="name">Nombre completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Teléfono *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Dirección *</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              rows="3"
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Procesando...' : 'Confirmar compra'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;