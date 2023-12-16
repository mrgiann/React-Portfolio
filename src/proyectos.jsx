import React from 'react';
import proyectosData from './proyectos.json'; 

const Proyectos = () => {
  return (
    <div className="proyectos">
      {proyectosData.proyectos.map((proyecto, index) => (
        <div className="project-container" key={index}>
          <div className="project-box">
            <div className="parte1">
            <img src={proyecto.imagen} alt={proyecto.titulo} loading="lazy" width="307" height="242" />
            </div>
            <div className="parte2">
              <div className="container-text">
                <h3 id="proyecto-titulo">{proyecto.titulo}</h3>
                <p id="proyecto-descripcion">{proyecto.descripcion}</p>
                <h4 id="tareas-titulo">Tareas Realizadas:</h4>
                <ul id="tareas-lista">
                  {proyecto.tareasRealizadas.map((tarea, index) => (
                    <li key={index}>{tarea}</li>
                  ))}
                </ul>
                <h4 id="tecnologias-titulo">Tecnologías:</h4>
                <ul id="tecnologias-lista">
                  <li>{proyecto.tecnologias.join(', ')}</li>
                </ul>
              </div>
              <div className="iconos-container">
                <a href={proyecto.enlaceProyecto} target="_blank" rel="noopener noreferrer" className="icono-hover" aria-label="Ver proyecto">
                  <i className="fa-solid fa-eye" style={{ color: proyecto.colorProyecto, fontSize: '23px' }}></i>
                  <span className="tooltip">Ver proyecto</span>
                </a>
                <a href={proyecto.enlaceGitHub} target="_blank" rel="noopener noreferrer" className="icono-hover" aria-label="Ver en GitHub">
                  <i className="fa-brands fa-github" style={{ color: proyecto.colorGithub, fontSize: '23px' }}></i>
                  <span className="tooltip">Ver en GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proyectos;
