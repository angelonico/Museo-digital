import { SlArrowRight } from "react-icons/sl";

const ContentPage = ({ currentPage, onPageChange, totalPages }) => {
  return (
    <div className="flex items-center justify-end pr-4">
      <SlArrowRight
        className="rotate-180 cursor-pointer"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <div className="bg-sky-100 w-12 h-8 p-1 px-3 flex items-center justify-end border-b border-b-sky-400">
        <p>{currentPage}</p>
      </div>
      <p>|</p>
      <div className="w-12 h-8 p-1 px-3 flex items-center justify-end">
        <p>{totalPages}</p>
      </div>
      <SlArrowRight
        className="cursor-pointer"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};
export default ContentPage;
