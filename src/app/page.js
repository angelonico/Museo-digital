import Image from "next/image";
import CategoriasHome from "./components/inHome/ClasiDestacada/CategoriasHome";
import VideosInicio from "./components/inHome/VideosHome/VideosInicio";
import ObjectCardGallery from "./components/inHome/ObjetosDestacados/ObjectCardGallery";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="object-fill h-[calc(100vh-46px)]">
        <VideosInicio />
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="w-full md:w-[40%] md:m-10 p-10 flex justify-center items-center text-center  text-3xl">
          <h1>
            Museo digital es una <b>colleccion abierta</b> al publico, incorpora
            el catalago online de{" "}
            <i>Museo Historico y Antropologico Mauricio Van de Maele.</i>
          </h1>
        </div>
        <ObjectCardGallery />
      </div>
    </main>
  );
}
