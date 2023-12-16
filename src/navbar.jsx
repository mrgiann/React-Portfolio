import React, { useState } from 'react';
import TemaColor from './temacolor.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <nav className="navbar">
        <div className="container">   
          <button className="logo" onClick={closeMenu}>
            <img src="/logo.webp" loading="lazy" alt="Icono" />
            MRGIANN
          </button>
          <input type="checkbox" id="toggler" checked={isMenuOpen} readOnly />
          <label htmlFor="toggler" id="toggler" onClick={toggleMenu}>
            <i className={`fas fa-bars ${isMenuOpen ? 'open' : ''}`}></i>
          </label>
          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="list">
              <li>
                <a href='#'>
                  <button onClick={closeMenu}>
                    Inicio
                  </button>
                </a>
              </li>
              <li>
                <a href='#proyectos'>
                  <button onClick={closeMenu}>
                    Proyectos
                  </button>
                </a>
              </li>
              <li>
                <a href='#habilidades'>
                  <button onClick={closeMenu}>
                    Habilidades
                  </button>
                </a>
              </li>
              <li>
                <a href='#contacto'>
                  <button onClick={closeMenu}>
                    Contacto
                  </button>
                </a>
              </li>
              <TemaColor />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
