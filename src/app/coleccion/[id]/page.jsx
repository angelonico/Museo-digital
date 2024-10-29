"use client";
import BotonTarjeta from "../../components/Card/DescriptionCard";
import Galeria from "../../components/GaleriaImagenes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `http://localhost:4000/object/${params.id}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Error en la respuesta del servidor");

        const result = await response.json();
        setData(result); // Guarda el objeto recibido en `data`
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    }
    fetchData();
  }, [params.id]);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Galeria de imagenes */}
      {data ? <Galeria path={data.images} /> : <span>Loading...</span>}

      {/* Main */}
      <div className="min-h-screen">
        <div>
          {data ? (
            <div className="bg-white text-black flex flex-col lg:flex-row w-full relative">
              {/* Boton 3D */}
              <div className="absolute right-10 top-5">
                <Link href="/objeto3D">
                  <div className="bg-green-500 rounded-lg px-3 py-2 border-2 border-green-700">
                    <p className="text-white">Ver modelo 3D</p>
                  </div>
                </Link>
              </div>

              {/* Informacion del objeto */}
              <div className="flex-1 p-10">
                <h1 className="text-3xl">{data.title}</h1>
                <h2 className="text-xs italic">Barney, Dinosaurio, Dumbo</h2>
                <p className="text-justify mt-8">{data.description}</p>
              </div>

              {/*Tarjetas de infromacion */}
              <div className="flex justify-center items-center py-10 px-10 lg:h-screen w-full lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                  <BotonTarjeta title="Origen" />
                  <BotonTarjeta title="Dimensiones" />
                  <BotonTarjeta title="Categoria" />
                  <BotonTarjeta title="Adquisicion" />
                </div>
              </div>
            </div>
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </div>
  );
}
