"use client";
import { useState, useEffect } from "react";

const videos = ["/inicio/museo.mp4", "/inicio/2d.mp4", "/inicio/3d.mp4"];

const VideosInicio = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Función para cambiar al siguiente video y actualizar el progreso
  useEffect(() => {
    // Temporizador para cambiar el video cada 5 segundos
    const videoTimer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);

      setProgress(0); // Reiniciar el progreso cuando cambia el video
    }, 5000);
    console.log(currentVideoIndex);
    // Temporizador para incrementar el progreso cada 1 segundo
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0; // Reinicia si llega a 100%
        }
        return prevProgress + 20; // Incrementa 20% por segundo
      });
    }, 1000);

    // Limpiar los intervalos cuando el componente se desmonta
    return () => {
      clearInterval(videoTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="h-full w-full text-white">
      <div className="w-full h-full bg-black flex">
        <video className="object-cover w-full" autoPlay muted loop>
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-8 font-bold ml-8 p-4 bg-black bg-opacity-90  rounded">
          <h1 className="">
            Museo Historico y Antropologico Maurio Van de Maele
          </h1>
        </div>

        {/* Indicadores circulares */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentVideoIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Indicador de progreso circular */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-2 w-32 bg-gray-300 rounded">
          <div
            className="bg-white h-full rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideosInicio;
