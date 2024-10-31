import Image from "next/image";

const colecciones = [
  { title: "Mobiliario", path: "/categorias/mobiliario.jpg" },
  { title: "Contenedores", path: "/categorias/contenedores.jpg" },
  { title: "Herramientas", path: "/categorias/herramientas.jpg" },
  { title: "Imágenes", path: "/categorias/images.jpg" },
  { title: "Vestuario", path: "/categorias/vestuario.jpg" },
  { title: "Textos y archivos", path: "/categorias/textos.jpg" },
  { title: "Música", path: "/categorias/musica.jpg" },
];

const CategoriasExplorar = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-3">
      {colecciones.map((coleccion, index) => (
        <TarjetaCategoria
          key={index}
          src={coleccion.path}
          title={coleccion.title}
        />
      ))}
    </div>
  );
};

const TarjetaCategoria = ({ src, title }) => {
  return (
    <div className="w-2/5 lg:w-1/4 xl:w-1/5 aspect-square relative overflow-hidden group grow max-h-96">
      <Image
        src={src}
        layout="fill"
        className="object-cover transition-transform duration-900 group-hover:scale-110 "
        alt="Categoría"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h3 className="text-white text-xl md:text-3xl font-semibold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoriasExplorar;
