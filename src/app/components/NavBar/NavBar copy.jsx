"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
const { default: Link } = require("next/link");

const NavBar2 = () => {
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
    <div className="bg-orange-600 flex justify-between w-full">
      <div className="p-3">
        <Link href="/">Museo Digital</Link>
      </div>
      <div className="flex p-3 space-x-3">
        <p className="cursor-pointer" onClick={handleExplorarClick}>
          Explorar
        </p>
        <Link href="/visitanos">Visitanos</Link>
        <Link href="/Nosotros">Nosotros</Link>
      </div>
      {isVisible && (
        <div className="fixed w-full h-full inset-0 bg-orange-300 flex z-50">
          <div className="flex flex-col bg-black h-full w-16">
            <button
              onClick={handleCloseOverlay}
              className="m-3 mt-4 p-2 bg-blue-500 text-white rounded"
            >
              X
            </button>
          </div>
          <div className="bg-red-600 p-5 w-1/3 flex flex-col">
            <h2 className="text-2xl mb-4">Colecciones</h2>
            <Link
              onMouseEnter={() => cambiarImagen("/explorar/colecciones.jpg")}
              onClick={handleCloseOverlay}
              className="cursor-pointer hover:text-blue-500 transition duration-300 py-2"
              href="/Objetos"
            >
              Ver todas las colecciones
            </Link>
            <Link
              onMouseEnter={() => cambiarImagen("/explorar/antropologia.jpeg")}
              onClick={handleCloseOverlay}
              className="cursor-pointer hover:text-blue-500 transition duration-300 py-2"
              href="/Objetos"
            >
              Antropologia
            </Link>
            <Link
              onMouseEnter={() => cambiarImagen("/explorar/arte.jpg")}
              onClick={handleCloseOverlay}
              className="cursor-pointer hover:text-blue-500 transition duration-300 py-2"
              href="/Objetos"
            >
              Arte
            </Link>
            <Link
              onMouseEnter={() => cambiarImagen("/explorar/historia.jpg")}
              onClick={handleCloseOverlay}
              className="cursor-pointer hover:text-blue-500 transition duration-300 py-2"
              href="/Objetos"
            >
              Historia
            </Link>
            <Link
              onMouseEnter={() => cambiarImagen("/explorar/3d.jpeg")}
              onClick={handleCloseOverlay}
              className="cursor-pointer hover:text-blue-500 transition duration-300 py-2 bg-green-500 rounded text-center"
              href="/Objetos"
            >
              Colecciones 3D
            </Link>
          </div>
          <div className="w-full h-full">
            <Image
              src={imagenActual}
              alt="Imagen de Explorar"
              layout="resposive"
              width={500}
              height={600}
              className="object-cover w-full h-full"
            ></Image>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar2;
