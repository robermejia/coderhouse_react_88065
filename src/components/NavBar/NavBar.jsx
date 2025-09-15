import '../NavBar/NavBar.css';
import CartWidget from '../NavBar/CartWidget/CartWidget.jsx';
import logo from '../../assets/img/logo.png'; // <-- Ruta corregida

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className='logo-img'/>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#servicios">Acerca</a>
        </li>
        <li>
          <a href="#inicio">Productos</a>
        </li>
        <li>
          <a href="#servicios">Contactos</a>
        </li>
        {/* <li>
          <a href="#carrito">
            <img src={buyIcon} alt="Buy Icon" className="buy-icon" />
          </a>
        </li>  */}
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar