"use client";
import SideBar from "../components/layout/SideBar";
import { useEffect, useState } from "react";
import SearchBox from "../components/ui/SearchBox";
import Gallery from "./Gallery";

export default function Page() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-bg-coleccion min-h-screen">
      {/* Contenedor Buscador */}
      <div className="flex relative items-center p-24 flex-col bg-orange-400 h-48">
        {/* Buscador */}
        <div className="z-10 w-3/4 md:w-1/2">
          <SearchBox />
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
      <div className="flex">
        <SideBar open={open} />

        <Gallery open={open} />
      </div>
    </div>
  );
}
