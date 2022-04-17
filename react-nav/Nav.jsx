import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './Nav.scss';
import './Nav.css';
import { XIcon, MenuAlt3Icon } from '@heroicons/react/outline';
import logo from '../../images/logo-desktop.png';
import useNav from '../../hooks/useNav';

const Navbar = () => {
  const { navbar, navbarLogo } = useNav();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="Navbar">
      <span className="nav__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </span>
      <div className={`nav__items ${isOpen && 'open'}`}>
        <li>
          <NavLink className="a" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="a" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="a" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="a" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className="a" to="/login">
            Login
          </NavLink>
        </li>
      </div>
      <div
        className={`nav__toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
