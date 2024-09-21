"use client";
import { useState } from "react";

const BotonTarjeta = ({ title }) => {
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

  const manejarClick = () => {
    setMostrarTarjeta(!mostrarTarjeta);
  };

  return (
    <div className="relative w-64">
      <div
        onClick={manejarClick}
        className="text-black bg-slate-300 px-6 py-3 rounded-md shadow-md w-full cursor-pointer"
      >
        {title}
      </div>

      {mostrarTarjeta && (
        <div
          className={`transition-transform duration-300 transform ${
            mostrarTarjeta ? "translate-y-0" : "-translate-y-full"
          } absolute top-full left-0 w-full`}
        >
          <div className="bg-white shadow-lg p-4 rounded-md border border-gray-300">
            <p>Este es el contenido de la tarjeta.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotonTarjeta;
