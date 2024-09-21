"use client";
import Image from "next/image";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Buscador */}
      <div className="items-center justify-center flex bg-orange-400 h-32">
        <div className="w-3/4 md:w-1/2">
          <form className="">
            <input
              type="text"
              placeholder="Buscar.."
              className="border-b-white w-full h-12 px-4 text-2xl border-b bg-black bg-opacity-20 placeholder-white text-white"
            />
          </form>
        </div>
      </div>
      <div className="flex p-8">
        <SideBar />
        <div className="flex-1 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
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
      href="/Objeto"
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
