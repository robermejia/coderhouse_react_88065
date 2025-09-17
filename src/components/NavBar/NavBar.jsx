import '../NavBar/NavBar.css';
import CartWidget from '../NavBar/CartWidget/CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className='logo-img'/>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Productos
          </NavLink>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;