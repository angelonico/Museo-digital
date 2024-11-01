"use client";
import { useState } from "react";

const GaleriaImagenes = ({ path }) => {
  const images = Array.isArray(path) ? path : [path]; // Normaliza la imagen
  const [imagenActiva, setImagenActiva] = useState(images[0]);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-between relative">
      <div className="flex flex-1 w-full h-[calc(100vh-5rem)] items-center justify-center">
        <img src={imagenActiva.url} className="max-h-full object-contain" />
        {/* <Image
          src={imagenActiva}
          fill
          className="object-contain"
          alt="Imagen de ejemplo"
        /> */}
      </div>
      <div className="absolute z-51 text-white bottom-20 left-0 bg-zinc-600 bg-opacity-50 p-10 py-5 m-5 rounded">
        <h1>Triceraptor</h1>
      </div>
      {images.length > 1 && (
        <div className="bg-zinc-600 h-20 w-full flex items-center justify-center gap-3">
          {images.map((img, index) => (
            <TarjetaImagen
              key={index}
              src={img.url}
              activa={imagenActiva.url === img.url}
              onClick={() => setImagenActiva(img)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TarjetaImagen = ({ src, activa, onClick }) => {
  return (
    <div
      className={`bg-black ${activa ? "" : "filter opacity-40"} cursor-pointer`}
      onClick={onClick}
    >
      <img src={src} width={50} height={60}></img>
    </div>
  );
};

export default GaleriaImagenes;
