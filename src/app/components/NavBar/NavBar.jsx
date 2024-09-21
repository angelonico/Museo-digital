"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
const { default: Link } = require("next/link");

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagenActual, setImagenActual] = useState("/explorar/colecciones.jpg");

  useEffect(() => {
    if (isVisible) {
      // Desactiva el scroll cuando el overlay está visible
      document.body.style.overflow = "hidden";
    } else {
      // Restaura el scroll cuando el overlay está cerrado
      document.body.style.overflow = "auto";
    }

    // Limpieza del efecto cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  const handleExplorarClick = (e) => {
    e.preventDefault();
    setIsVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsVisible(false);
  };

  const cambiarImagen = (imagen) => {
    setImagenActual(imagen);
  };

  return (
    <div className="bg-orange-600 text-white flex justify-between w-full">
      <div className="p-3">
        <Link href="/">Museo Digital</Link>
      </div>
      <div className="flex p-3 space-x-3">
        <Link href="/explorar">Explorar</Link>
        <Link href="/visitanos">Visitanos</Link>
        <Link href="/Nosotros">Nosotros</Link>
      </div>
    </div>
  );
};

export default NavBar;
