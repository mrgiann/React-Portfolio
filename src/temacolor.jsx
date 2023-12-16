import React, { useState, useEffect } from 'react';
import './index.css';

const TemaColor = () => {
  const [esTemaOscuro, setTemaOscuro] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('tema-oscuro', esTemaOscuro);
    root.classList.toggle('tema-claro', !esTemaOscuro);
  }, [esTemaOscuro]);

  const cambiarTema = () => {
    setTemaOscuro((temaAnterior) => !temaAnterior);
  };

  return (
    <div className="tema-color">
      <label className="interruptor">
        <input
          type="checkbox"
          checked={!esTemaOscuro}
          onChange={cambiarTema}
          className="interruptor-input"
        />
        <span className="interruptor-slider"></span>
      </label>
    </div>
  );
};

export default TemaColor;
