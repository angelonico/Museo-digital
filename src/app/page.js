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
      <div className="flex">
        <div className="w-[40%] flex justify-center items-center text-center m-10 p-10 text-3xl">
          <h1>
            Museo digital es una <br />
            <b>collecion abierta</b> al <br />
            publico, incorpora el
            <br />
            catalago online de{" "}
            <i>
              Museo <br />
              Historico y Antropologico <br />
              Mauricio Van de Maele.
            </i>
          </h1>
        </div>
        <ObjectCardGallery />
      </div>
    </main>
  );
}
