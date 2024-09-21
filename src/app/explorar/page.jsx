import Image from "next/image";
import imagenSearch from "../../../public/bg-explorar.jpeg";
import Link from "next/link";
import CategoriasExplorar from "../components/Card/CategoriaCard";
import TopicosExplorar from "../components/Card/TopicosCard";
import CategoriasHome from "../components/inHome/ClasiDestacada/CategoriasHome";

export default function Page() {
  return (
    <div>
      {/* Buscador */}
      <div className="h-[75vh]">
        <div className="items-center justify-center relative flex bg-orange-400 h-full">
          <div className="absolute inset-0">
            <Image src={imagenSearch} fill className="object-cover" />
          </div>
          <div className="relative z-10 w-3/4 md:w-1/2">
            <form className="">
              <input
                type="text"
                placeholder="Buscar.."
                className="border-b-white w-full h-12 px-4 text-2xl border-b bg-black bg-opacity-20 placeholder-white text-white"
              />
            </form>
            <div className="flex justify-end">
              <Link
                href="/coleccion"
                className="text-white px-4 font-bold py-2 hover:text-orange-500"
              >
                Ver todos los objetos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Texto descripcitvo */}
      <div className="p-24 px-80 text-center text-xl">
        <p>
          La base de datos de esta coleccion cuenta con mas de 500 objetos del
          Museo Maurico Van de Maele, cada objeto registrada cuenta con mas de
          10 imagenes. Contamos con mas de 70 objetos con modelos 3D, los cuales
          pueden ser descargados por todo publico. Ademas, cada objeto cuenta
          con la informacion actualizada dia a dia desde el museo.
        </p>
      </div>

      {/* Colecciones Principales */}
      <div className="bg-cyan-700 text-amber-300 px-10 pb-8">
        <h1 className="text-3xl text-center font-extralight py-8">
          Explora la Coleccion
        </h1>
        <CategoriasExplorar />
      </div>

      {/* Topicos principales */}
      <div className="px-32 pb-8 flex flex-col">
        <h2 className="text-3xl text-center font-light py-8">
          Topicos principales
        </h2>
        <TopicosExplorar />
      </div>
    </div>
  );
}
