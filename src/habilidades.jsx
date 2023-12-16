import React from "react";

function Habilidades() {
  return (
    <>
      <h2 id="habilidades"></h2>
      <div className="habilidades">
        <div className="contenedor-habilidades">
          <h3 id="titulo-habilidad">Frontend</h3>
          <ul>
            <li className="habilidades" id="Javascript">
              <i className="fa-brands fa-js" style={{ color: "#f7df1e" }}></i>{" "}
              Javascript
            </li>
            <li className="habilidades" id="HTML">
              <i
                className="fa-brands fa-html5"
                style={{ color: "#F1502F" }}
              ></i>{" "}
              HTML
            </li>
            <li className="habilidades" id="CSS">
              <i
                className="fa-brands fa-css3-alt"
                style={{ color: "#1572b5" }}
              ></i>{" "}
              CSS
            </li>
            <li className="habilidades" id="React">
              <i
                className="fa-brands fa-react"
                style={{ color: "#00c6f7" }}
              ></i>{" "}
              React
            </li>
            <li className="habilidades" id="Bootstrap">
              <i
                className="fa-brands fa-bootstrap"
                style={{ color: "#5d467f" }}
              ></i>{" "}
              Bootstrap
            </li>
          </ul>
          <h3 id="titulo-habilidad">Backend</h3>
          <ul>
            <li className="habilidades" id="Nodejs">
              <i
                className="fa-brands fa-node-js"
                style={{ color: "#6fb651" }}
              ></i>{" "}
              Node.js
            </li>
            <li className="habilidades" id="Python">
              <i
                className="fa-brands fa-python"
                style={{ color: "#3776AB" }}
              ></i>{" "}
              Python
            </li>
          </ul>
          <h3 id="titulo-habilidad">Base de Datos</h3>
          <ul>
            <li className="habilidades" id="SQLite">
              <i
                className="fa-sharp fa-solid fa-feather"
                style={{ color: "#003856" }}
              ></i>{" "}
              SQLite
            </li>
            <li className="habilidades" id="PostgreSQL">
              🐘 PostgreSQL
            </li>
          </ul>
          <h3 id="titulo-habilidad">Extra</h3>
          <ul>
            <li className="habilidades" id="Postman">
              <i
                className="fa-solid fa-user-astronaut"
                style={{ color: "#F1502F" }}
              ></i>{" "}
              Postman
            </li>
            <li className="habilidades" id="Git-GitHub">
              <i
                className="fa-brands fa-git-alt"
                style={{ color: "#F1502F" }}
              ></i>{" "}
              Git/Github
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Habilidades;
