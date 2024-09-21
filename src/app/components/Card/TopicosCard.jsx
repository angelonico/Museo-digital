import Image from "next/image";

const TopicosExplorar = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-9">
      <TopicosCard src="/categorias/colecction.jpg" title="Mobiliario" />
      <TopicosCard src="/categorias/colection2.jpg" title="Contenedores" />
      <TopicosCard src="/categorias/colection3.jpg" title="Imagenes" />
      <TopicosCard src="/categorias/colection4.jpeg" title="Herramientas" />
    </div>
  );
};

const TopicosCard = ({ src, title }) => {
  return (
    <div className="w-full h-96 relative overflow-hidden group rounded-md">
      <Image
        src={src}
        layout="fill"
        className="object-cover transition-transform duration-900 group-hover:scale-110 "
        alt="Categoría"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h3 className="text-white text-3xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default TopicosExplorar;
