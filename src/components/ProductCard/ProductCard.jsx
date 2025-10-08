
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  const handleClick = () => {
    onClick(product);
  };

  const getImageUrl = (imagePath) => {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    return `/images/${imagePath}`;
  };

  const getStockClass = (stock) => {
    if (stock === 0) return 'stock-unavailable';
    return 'stock-available';
  };

  const getStockText = (stock) => {
    if (stock === 0) return 'Sin stock';
    if (stock <= 5) return `Solo ${stock} disponibles`;
    return `${stock} disponibles`;
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image">
        <img 
          src={getImageUrl(product.imgFrontUrl)} 
          alt={product.name}
          onError={(e) => {
      
            e.target.src = '/images/placeholder.png';
          }}
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-year">{product.year}</p>
        <p className="product-price">${product.price.toLocaleString()}</p>
        {product.stock !== undefined && (
          <p className={`product-stock ${getStockClass(product.stock)}`}>
            {getStockText(product.stock)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;