"use client";
import Image from "next/image";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";

export default function Page() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {/* Contenedor Buscador */}
      <div className="flex relative items-center justify-center flex-col bg-orange-400 h-32">
        {/* Buscador */}
        <div className="w-3/4 md:w-1/2 ">
          <form className="relative">
            <input
              type="text"
              placeholder="Buscar.."
              className="border-b-white w-full h-12 px-4 pr-10 text-2xl border-b bg-black bg-opacity-20 placeholder-white text-white focus:outline-none"
            />
            <GoSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              size={25}
            />
          </form>
        </div>

        {/* Tarjetas de filtros */}
        <div className=" flex absolute bottom-0 w-full justify-between  font-semibold">
          <div onClick={() => setOpen(!open)}>
            <p
              className={`cursor-pointer bg-orange-300 rounded-t-md flex justify-center px-2 py-1 duration-300 ${
                open ? "md:w-80 ml-0" : "w-auto ml-2"
              }`}
            >
              Filtros
            </p>
          </div>
          <div className="flex space-x-1 pr-2">
            <p className="bg-orange-300 rounded-t-md px-2 py-1">
              Colecciones 2D
            </p>
            <p className="bg-orange-300 rounded-t-md px-2 py-1">
              Colecciones 3D
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal  */}
      <div className="flex h-[130vh]">
        <SideBar open={open} />

        <div
          className={` flex justify-center p-8 transition-all overflow-hidden duration-300 ease-in-out ${
            open ? "w-0 p-0 md:flex-1" : "p-8 flex-1"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-start justify-center">
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
          </div>
        </div>
      </div>
    </div>
  );
}

const Tarjeta = () => {
  const [tituloVisible, setTituloVisible] = useState(false);
  return (
    <Link
      className="relative group"
      onMouseEnter={() => setTituloVisible(true)}
      onMouseLeave={() => setTituloVisible(false)}
      href="/objeto"
    >
      <Image src="/objetos/trice/trice1.jpg" width={200} height={300} />
      {tituloVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-lg font-bold">
          <span>Triceraptor</span>
        </div>
      )}
    </Link>
  );
};
