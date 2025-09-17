import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';

const fetchProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('../../products.json').then(module => {
        const product = module.default.find(p => p.id === id);
        resolve(product);
      });
    }, 1000);
  });
};

const ItemDetailContainer = ({ productId, onBack }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(productId).then(setProduct);
  }, [productId]);

  if (!product) return <div className="detail-loading">Cargando...</div>;

  return (
    <div className="item-detail-container">
      <button className="back-btn" onClick={onBack}>Volver</button>
      <div className="detail-imgs">
        {/* Usar misma carpeta que en ProductCard: /images */}
        <img
          src={`/images/${product.imgFrontUrl}`}
          alt={product.name}
          className="detail-img front"
        />
        <img
          src={`/images/${product.imgBackUrl}`}
          alt={`${product.name} back`}
          className="detail-img back"
        />
      </div>
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p><strong>Año:</strong> {product.year}</p>
        <p><strong>Precio:</strong> ${product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;