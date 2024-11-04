import Image from "next/image";
import logoUach from "../../../../public/logos/logo-uach.jpg";
import SERPAT from "../../../../public/logos/sernat.png";
import DM from "../../../../public/logos/dm.png";
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-500 flex flex-col md:flex-row py-10 place-content-around w-full">
      <div className="flex flex-col justify-center items-center space-y-8 md:space-y-0 md:flex-row md:space-x-12">
        <Image src={SERPAT} width={150} height={40} alt="Logo SERPAT" />
        <Image
          src={DM}
          width={400}
          height={40}
          alt="Logo Dirección Museológica"
        />
      </div>
      <div className="text-stone-500 justify-center items-center flex flex-col p-10">
        <div className="text-center text-2xl">
          <h2>¡Conócenos!</h2>
        </div>
        <div className="pt-2 items-center flex">
          <div className="flex gap-4">
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
