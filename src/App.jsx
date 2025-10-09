import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Category from './components/category/Category';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Error404 from './components/Error404/Error404';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<CategoryWrapper />} />
          {/* Lista de productos */}
          <Route path="/productos" element={<ItemListContainerWrapper />} />
          {/* Productos por categoría */}
          <Route path="/categoria/:category" element={<CategoryWrapper />} />
          {/* Detalle de producto */}
          <Route path="/producto/:id" element={<ItemDetailContainerWrapper />} />
          {/* Carrito */}
          <Route path="/cart" element={<Cart />} />
          {/* Checkout */}
          <Route path="/checkout" element={<CheckoutForm />} />
          {/* Error 404 */}
          <Route path="/error404" element={<Error404 />} />
          {/* Redirige a url error404 */}
          <Route path="*" element={<Navigate to="/error404" replace />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </CartProvider>
  );
};

// Lista de productos con navegación a detalle
const CategoryWrapper = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  
  const handleProductSelect = (product) => {
    navigate(`/producto/${product.id}`);
  };
  
  return <Category onProductSelect={handleProductSelect} category={category} />;
};

// Lista de productos general
const ItemListContainerWrapper = () => {
  const navigate = useNavigate();
  
  const handleProductSelect = (product) => {
    navigate(`/producto/${product.id}`);
  };
  
  return <ItemListContainer onProductSelect={handleProductSelect} />;
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
