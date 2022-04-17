import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';
import logo from '../../images/logo-desktop.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </span>
      <div className={`nav-items ${isOpen && 'open'}`}>
        <NavLink className="link" to="/home">
          Home
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <NavLink className="link" to="/service">
          Service
        </NavLink>
        <NavLink className="link" to="/portfolio">
          Portfolio
        </NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
