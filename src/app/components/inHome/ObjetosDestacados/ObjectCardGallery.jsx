import Image from "next/image";

const ObjectCardGallery = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
    </div>
  );
};

const ObjectCard = () => {
  return (
    <div className="bg-violet-500 rounded-lg relative h-52 w-60 ">
      <Image
        src="/objetos/trice/trice1.jpg"
        fill
        className="object-cover"
        alt="Objeto"
      />
    </div>
  );
};

export default ObjectCardGallery;
