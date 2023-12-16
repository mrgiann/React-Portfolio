import React from 'react';

export default function Footer() {
  return (
    <div className="pie">
      <a href="https://github.com/mrgiann" target="_blank" rel="noopener noreferrer" className="icono-hover" aria-label="Ver en GitHub">
        <i className="fab fa-github" style={{ color: '#eeeeee' }} alt="GitHub"></i>
      </a>

      <a href="mailto:renzoroggiapanedev@gmail.com" target="_blank" rel="noopener noreferrer" className="icono-hover" aria-label="Ver correo">
        <i className="fas fa-envelope fa-sm" style={{ color: '#c0bb7c' }}></i>
      </a>

      <a href="https://www.instagram.com/gianhg_/" target="_blank" rel="noopener noreferrer" className="icono-hover" aria-label="Ver en Instagram">
        <i className="fab fa-instagram" style={{ color: '#f74190' }} alt="Instagram"></i>
      </a>

      <a href="https://www.linkedin.com/in/renzo-roggiapane-bb4520279/" target="_blank" rel="noopener noreferrer" className="icono-hover" aria-label="Ver en LinkedIn">
        <i className="fab fa-linkedin" style={{ color: '#034bb8' }} alt="LinkedIn"></i>
      </a>
    </div>
  );
}

