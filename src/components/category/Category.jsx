import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Category.css";

const CATEGORIES = ["Todas", "Liga Profesional", "Primera Profesional", "Selección Argentina"];

const fetchAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      import("../../products.json").then((module) => {
        resolve(module.default || []);
      });
    }, 400);
  });
};

const Category = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    fetchAllProducts().then((all) => {
      if (!isMounted) return;
      setProducts(all);
      setIsLoading(false);
    });
    return () => { isMounted = false; };
  }, []);

  const visibleProducts = useMemo(() => {
    if (selectedCategory === "Todas") return products;
    return products.filter((p) =>
      (p.category || "").toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [products, selectedCategory]);

  return (
    <section className="category-container">
      <header className="category-header">
        <div className="category-titles">
          <h2 className="category-title">Categorías</h2>
          <p className="category-subtitle">Explora productos por categoría</p>
        </div>

        <div className="chips" role="tablist" aria-label="Filtrar por categoría">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`chip ${selectedCategory === cat ? "chip--active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "Todas" ? "Todas" : cat}
            </button>
          ))}
        </div>
      </header>

      {isLoading ? (
        <div className="skeleton-grid">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="skeleton-card" />
          ))}
        </div>
      ) : visibleProducts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🗂️</div>
          <h3>No hay productos</h3>
          <p>Prueba cambiando la categoría.</p>
        </div>
      ) : (
        <div className="products-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductSelect}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Category;