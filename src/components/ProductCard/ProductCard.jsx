import React, { useEffect, useState } from "react";
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <div className="product-imgs">
        <img src={`/images/${product.imgFrontUrl}`} alt={product.name} className="product-img front" />
        <img src={`/images/${product.imgBackUrl}`} alt={`${product.name} back`} className="product-img back" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product?.name ?? product?.title ?? product?.nombre ?? 'Sin nombre'}</h3>
        <p className="product-category">{product?.category ?? 'Sin categoría'}</p>
        <p className="product-year">Año: {product?.year ?? 'Sin año'}</p>
        <p className="product-price">${product?.price?.toLocaleString() ?? 'Sin precio'}</p>
      </div>
    </div>
  );
};

export default ProductCard;