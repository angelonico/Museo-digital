"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import materials from "../../../../public/data/Material";

const ItemsMenu = [
  { title: "Colecccion", data: ["Mauricio Van de Maele"] },
  { title: "Clasificacion", data: ["Arte", "Historia", "Antropologia"] },
  { title: "Material", data: materials },
  { title: "Siglo", data: ["XVIII", "XIX", "XX"] },
  { title: "Estilo de fabricacion" },
];

const SideBar = ({ open }) => {
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggleSubMenu = (menuName) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  return (
    <div
      className={`bg-gray-300 text-black space-y-4 h-auto transition-all duration-300 ease-in-out ${
        open ? "w-full md:w-80 p-4" : "w-0 h-0 md:h-auto p-0"
      } overflow-hidden m-3`}
    >
      {ItemsMenu.map((menu, index) => (
        <div key={index}>
          <Categoria
            text={menu.title}
            isOpen={subMenuOpen[menu.title]}
            data={menu.data}
            toggleMenu={() => toggleSubMenu(menu.title)}
          />
        </div>
      ))}
    </div>
  );
};

const Categoria = ({ text, isOpen, data, toggleMenu }) => {
  return (
    <div>
      <div
        className="flex py-1 px-2 rounded hover:bg-slate-400 justify-between items-center border-b border-slate-400"
        onClick={toggleMenu}
      >
        <p>{text}</p>
        <IoIosArrowBack className={`duration-300 ${isOpen && "-rotate-90"}`} />
      </div>
      {isOpen && (
        <div className="pl-4 pt-3">
          {data &&
            data.map((item, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <p>{item}</p>
              </label>
            ))}
        </div>
      )}
    </div>
  );
};

export default SideBar;
