"use client";
import { useState } from "react";
import Image from "next/image";

const GaleriaImagenes = ({ path }) => {
  const [imagenActiva, setImagenActiva] = useState(path[0]);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-between relative">
      <div className="flex w-full h-[calc(100vh-5rem)] items-center justify-center">
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
      <div className="bg-zinc-600 h-20 w-full flex items-center justify-center gap-3">
        {path[1] && (
          <TarjetaImagen
            src={path[1].url}
            activa={imagenActiva.url === path[1].url}
            onClick={() => setImagenActiva(path[1])}
          />
        )}
        <TarjetaImagen
          src="/objetos/trice/trice2.jpg"
          activa={imagenActiva === "/objetos/trice/trice2.jpg"}
          onClick={() => setImagenActiva("/objetos/trice/trice2.jpg")}
        />
        <TarjetaImagen
          src="/objetos/trice/trice3.jpg"
          activa={imagenActiva === "/objetos/trice/trice3.jpg"}
          onClick={() => setImagenActiva("/objetos/trice/trice3.jpg")}
        />
        <TarjetaImagen
          src="/objetos/trice/trice4.jpg"
          activa={imagenActiva === "/objetos/trice/trice4.jpg"}
          onClick={() => setImagenActiva("/objetos/trice/trice4.jpg")}
        />
        <TarjetaImagen
          src="/objetos/trice/trice5.jpg"
          activa={imagenActiva === "/objetos/trice/trice5.jpg"}
          onClick={() => setImagenActiva("/objetos/trice/trice5.jpg")}
        />
        <TarjetaImagen
          src="/objetos/trice/trice6.jpg"
          activa={imagenActiva === "/objetos/trice/trice6.jpg"}
          onClick={() => setImagenActiva("/objetos/trice/trice6.jpg")}
        />
      </div>
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
