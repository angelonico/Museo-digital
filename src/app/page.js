import Image from "next/image";
import CategoriasHome from "./components/inHome/ClasiDestacada/CategoriasHome";
import VideosInicio from "./components/inHome/VideosInicio";
import ObjectCardGallery from "./components/inHome/ObjetosDestacados/ObjectCardGallery";
import TopicosExplorar from "./components/Card/TopicosCard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <VideosInicio />
      <div className="w-full px-7 py-14 lg:p-28 lg:px-56 flex justify-center items-center text-center text-2xl lg:text-3xl">
        <h1>
          Museo digital es una <b>colección virtual abierta</b> a todo público.
          Contiene el catalago de la coleccion permanente de{" "}
          <i>Museo Historico y Antropológico Mauricio Van de Maele.</i>
        </h1>
      </div>
      <div className="px-10 pb-8 lg:px-20">
        <TopicosExplorar />
      </div>
      <div className="py-14 bg-gray-950">
        <ObjectCardGallery />
      </div>
    </main>
  );
}
