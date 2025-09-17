// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Category from './components/category/Category';
import Error404 from './components/Error404/Error404';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<CategoryWrapper />} />
        {/* Detalle de producto */}
        <Route path="/producto/:id" element={<ItemDetailContainerWrapper />} />
        <Route path="/error404" element={<Error404 />} />
        {/* Redirige a url error404 */}
       <Route path="*" element={<Navigate to="/error404" replace />} />
      </Routes>
    </Router>
  );
};

// Lista de productos con navegación a detalle
const CategoryWrapper = () => {
  const navigate = useNavigate();
  const handleProductSelect = (product) => {
    navigate(`/producto/${product.id}`);
  };
  return <Category onProductSelect={handleProductSelect} />;
};

// Detalle de producto
const ItemDetailContainerWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <ItemDetailContainer
      productId={parseInt(id)}
      onBack={() => navigate('/')}
    />
  );
};

export default App;