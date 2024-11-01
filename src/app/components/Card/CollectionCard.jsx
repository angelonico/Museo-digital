import Link from "next/link";

const CollectionCard = ({ path, title, id }) => {
  return (
    <li className="mb-4 break-inside-avoid bg-white shadow-md p-2">
      <Link href={`/coleccion/${id}`}>
        <div className="flex flex-col">
          <img
            src={path}
            alt={title}
            className="w-full h-auto object-contain bg-red-300"
          />

          <span className="text-center px-4 py-2">{title}</span>
        </div>
      </Link>
    </li>
  );
};
export default CollectionCard;
