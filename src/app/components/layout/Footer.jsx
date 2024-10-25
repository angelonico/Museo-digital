import Image from "next/image";
import logoUach from "../../../../public/logo-uach.jpg";
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-zinc-800 flex md:flex-col min-h-1/4 w-full">
      <div className="w-2/3 p-5 flex">
        <div className="overflow-hidden rounded">
          <Image
            src={logoUach}
            width={"w-max"}
            height={"h-max"}
            className="object-cover"
            alt="Logo Universidad"
          />
        </div>
      </div>
      <div className="text-stone-200 flex flex-col items-end w-1/3 p-10">
        <div className="justify-start ">
          <h2>¡Siguenos!</h2>
        </div>
        <div className="pt-2 justify-start items-center flex">
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
