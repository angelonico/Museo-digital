import Link from "next/link";

const CollectionCard = ({ path, title, id }) => {
  return (
    <li className="bg-red-50">
      <Link href={`/coleccion/${id}`}>
        <div className="flex flex-col bg-white">
          <img
            src={path}
            alt={title}
            className="w-full h-auto object-contain bg-red-300"
          />

          <span>{title}</span>
        </div>
      </Link>
    </li>
  );
};
export default CollectionCard;
