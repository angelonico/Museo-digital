"use client";
import SideBar from "../components/layout/SideBar";
import { useEffect, useState } from "react";
import SearchBox from "../components/ui/SearchBox";
import Gallery from "./Gallery";
import { GoFilter } from "react-icons/go";
import { MdSort } from "react-icons/md";

export default function Page() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-bg-coleccion min-h-screen">
      {/* Contenedor Buscador */}
      <div className="flex relative items-center pt-24 flex-col bg-orange-400 h-56">
        {/* Buscador */}
        <div className="z-10 w-3/4 md:w-1/2">
          <SearchBox />
        </div>

        {/* Tarjetas de filtros */}
        <div className=" flex absolute bottom-0 w-full place-content-around font-semibold">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-end px-4 pb-2 space-x-2 cursor-pointer text-slate-900 hover:text-white duration-200"
          >
            <p className="text-xl">Filtrar</p>
            <GoFilter size={28} />
          </div>
          <div className="flex items-end px-4 pb-2 space-x-2 text-gray-600 ">
            <p className="text-xl">Ordernar por</p>
            <MdSort size={28} />
          </div>
        </div>
      </div>

      {/* Contenido Principal  */}
      <div className="flex flex-col md:flex-row">
        <SideBar open={open} />

        <Gallery open={open} />
      </div>
    </div>
  );
}
