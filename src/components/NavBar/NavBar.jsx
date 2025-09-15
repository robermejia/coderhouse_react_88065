import '../NavBar/NavBar.css';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MiLogo</div>
      <ul className="nav-links">
        {/* <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#servicios">Servicios</a>
        </li> */}
        {/* <li>
          <a href="#carrito">💲</a>
        </li> */}
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;