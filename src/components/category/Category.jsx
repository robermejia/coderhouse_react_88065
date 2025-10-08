
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts, getProductsByCategory } from '../../services/firestoreService';
import './Category.css';

const Category = ({ onProductSelect, category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category: urlCategory } = useParams();
  const currentCategory = category || urlCategory;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let productsData;
        
        if (currentCategory) {
          productsData = await getProductsByCategory(currentCategory);
        } else {
          productsData = await getProducts();
        }
        
        setProducts(productsData);
      } catch (err) {
        setError('Error al cargar los productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentCategory]);

  if (loading) {
    return (
      <div className="category-loading">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="category-error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="category-empty">
        <h2>{currentCategory || 'Productos'}</h2>
        <p>No se encontraron productos en esta categoría</p>
      </div>
    );
  }

  return (
    <div className="category-container">
      <h2>{currentCategory || 'Todos los productos'}</h2>
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

export default Category;