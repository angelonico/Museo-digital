import Image from "next/image";
import CollectionCard from "../components/Card/CollectionCard";
import { useEffect, useState } from "react";

const Gallery = ({ open, objects }) => {
  return (
    <div
      className={` flex justify-center p-8 transition-all overflow-hidden duration-300 ease-in-out ${
        open ? " md:flex-1" : "p-8 flex-1"
      }`}
    >
      <Objects />
    </div>
  );
};

const Objects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/object", {
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
  }, []);
  return (
    <ul className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
      {data ? (
        data.map((objeto, index) => (
          <CollectionCard
            key={index}
            path={objeto.url}
            title={objeto.title}
            id={objeto.id}
          />
          /* <div key={index}>
            <h1>{objeto.title}</h1>
            <img src={objeto.url} width={500} height={300} />
          </div> */
        ))
      ) : (
        <p>Cargando...</p>
      )}{" "}
      {/* Renderiza el saludo */}
    </ul>
  );
};
export default Gallery;
