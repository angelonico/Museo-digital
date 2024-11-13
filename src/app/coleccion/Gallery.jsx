import Image from "next/image";
import CollectionCard from "../components/Card/CollectionCard";
import { useEffect, useState } from "react";
import ContentPage from "../components/ui/ContentPage";

const Gallery = ({ open, objects }) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedData = data
    ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  return (
    <div
      className={` flex flex-col justify-center p-8 transition-all overflow-hidden duration-300 ease-in-out ${
        open ? " md:flex-1" : "p-8 flex-1"
      }`}
    >
      <div className="w-full flex items-center justify-end pr-8">
        {data && <p className="pb-2">{`${data.length} objetos`}</p>}
      </div>
      <ContentPage
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={Math.ceil((data ? data.length : 0) / itemsPerPage)}
      />
      <Objects setData={setData} />
      <ul className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
        {paginatedData.length > 0 ? (
          paginatedData.map((objeto, index) => (
            <CollectionCard
              key={index}
              path={objeto.url}
              title={objeto.title}
              id={objeto.id}
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </ul>
      <ContentPage
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={Math.ceil((data ? data.length : 0) / itemsPerPage)}
      />
    </div>
  );
};

const Objects = ({ setData }) => {
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
  }, [setData]);

  return null;
};

export default Gallery;
