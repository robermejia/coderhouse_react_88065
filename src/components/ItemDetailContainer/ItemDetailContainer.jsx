
import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { getProductById } from '../../services/firestoreService';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailContainer.css';

const ItemDetailContainer = ({ productId, onBack }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showItemCount, setShowItemCount] = useState(true);
  const { addToCart, isInCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await getProductById(productId);
        setProduct(productData);
      } catch (err) {
        setError('Producto no encontrado');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = (quantity) => {
    if (product) {
      addToCart(product, quantity);
      setShowItemCount(false);
    }
  };

  // Función para obtener la URL correcta de la imagen
  const getImageUrl = (imagePath) => {
    // Si ya es una URL completa, la devolvemos tal como está
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    // Si es un path local, lo construimos
    return `/images/${imagePath}`;
  };

  if (loading) {
    return (
      <div className="detail-loading">
        <div className="loading-spinner"></div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="detail-error">
        <h2>{error || 'Producto no encontrado'}</h2>
        <button onClick={onBack} className="back-btn">
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <button className="back-btn" onClick={onBack}>Volver</button>
      <div className="detail-content">
        <div className="detail-imgs">
          <img
            src={getImageUrl(product.imgFrontUrl)}
            alt={product.name}
            className="detail-img front"
            onError={(e) => {
              e.target.src = '/images/placeholder.png';
            }}
          />
          <img
            src={getImageUrl(product.imgBackUrl)}
            alt={`${product.name} back`}
            className="detail-img back"
            onError={(e) => {
              e.target.src = '/images/placeholder.png';
            }}
          />
        </div>
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p><strong>Categoría:</strong> {product.category}</p>
          <p><strong>Año:</strong> {product.year}</p>
          <p><strong>Precio:</strong> ${product.price.toLocaleString()}</p>
          <p><strong>Stock:</strong> {product.stock || 10}</p>
          
          {showItemCount && !isInCart(product.id) ? (
            <ItemCount 
              stock={product.stock || 10} 
              onAdd={handleAddToCart}
            />
          ) : isInCart(product.id) ? (
            <p className="added-to-cart">✓ Producto agregado al carrito</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;