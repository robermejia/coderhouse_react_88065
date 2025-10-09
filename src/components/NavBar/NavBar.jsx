import React, { useState } from 'react';
import '../NavBar/NavBar.css';
import CartWidget from '../NavBar/CartWidget/CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo_dark.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className='logo-img' />
          </Link>
        </div>
        <button className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span>-</span>
          <span>-</span>
          <span>-</span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={closeMenu}>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Liga Profesional" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={closeMenu}>
              Liga Profesional
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Primera Profesional" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={closeMenu}>
              Primera Profesional
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Selección Argentina" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={closeMenu}>
              Selección Argentina
            </NavLink>
          </li>
          <li className="cart-widget-mobile">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
