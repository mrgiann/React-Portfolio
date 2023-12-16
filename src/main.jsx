import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./navbar";
import Habilidades from "./habilidades"
import Proyectos from "./proyectos"
import Footer from "./footer"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <div className="inicio">
        <h1 id="titulo">Renzo Roggiapane</h1>
        <span id="descripcion">
          ¡Hola! Soy un estudiante de desarrollo web full stack.
        </span>
      </div>

      <Habilidades />

      <h2 id="proyectos">Proyectos</h2>
      <Proyectos />

      <h2 id="contacto"></h2>
    </div>
    <Footer />
  </React.StrictMode>
);
