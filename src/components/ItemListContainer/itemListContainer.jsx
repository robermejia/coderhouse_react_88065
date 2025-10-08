import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts } from '../../services/firestoreService';
import './ItemListContainer.css';

const ItemListContainer = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (err) {
        setError('Error al cargar los productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-container">
        <p>No se encontraron productos</p>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h2>Todos los productos</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={onProductSelect} 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;