import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ItemListContainer.css';

const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('../../products.json').then(module => resolve(module.default));
    }, 1000);
  });
};

const ItemListContainer = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="item-list-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onClick={onProductSelect} />
      ))}
    </div>
  );
};

export default ItemListContainer;