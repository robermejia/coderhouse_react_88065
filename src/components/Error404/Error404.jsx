// src/components/Error404/Error404.jsx
import { Link } from 'react-router-dom';
import './Error.404.css';  

const Error404 = () => {
  return (
    <div className="error404">
      <h2 className="error404__title">404 - Página no encontrada</h2>
      <p className="error404__desc">La ruta que buscás no existe.</p>
      <Link to="/" className="error404__link">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;