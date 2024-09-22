import Image from "next/image";
import logoUach from "../../../public/logo-uach.png";
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-zinc-800 flex h-1/4 w-full">
      <div className="w-1/3 p-5 pl-14 flex text-stone-200 space-x-8">
        <Image src={logoUach} width={100} />
        <h1 className="pt-7">Universidad Austral de Chile</h1>
      </div>
      <div className="text-stone-200 flex flex-col w-full items-end p-10">
        <div className="justify-start w-1/3">
          <h2>¡Siguenos!</h2>
        </div>
        <div className="w-1/3 pt-2 justify-start items-center flex">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <FaInstagram size={25} />
            <FaFacebookSquare size={25} />
            <FaXTwitter size={25} />
            <FaYoutube size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
