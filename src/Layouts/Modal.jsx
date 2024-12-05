import React from "react";
import { IoClose } from "react-icons/io5";

function Modal({ children, onOpenModal, onCloseModal, titre, marginTop, hover, bg, className, color }) {
  return (
    <div
    aria-hidden="true"
    onClick={onOpenModal}
    className={`fixed inset-0 z-[1] flex justify-center opacity-100 pointer-events-auto ${marginTop}`}
  >
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[1]" // Masque de fond derrière le modal
      onClick={onCloseModal}
    ></div>
    <div className={`relative ${bg} rounded-lg shadow-xl p-4 w-full max-w-md max-h-full z-[2] overflow-y-auto scrollbar-thin scrollbar-thumb-[#1D1C1D] scrollbar-track-[#1D1C1D] scrollbar-rounded`}>
      <div>
        <div className="flex items-center justify-between p-4 md:p-5">
          <h3 className={`${className}`}>{titre}</h3>
          <button
            type="button"
            className={`${color || "text-white"} bg-transparent hover:bg-gray-900 hover:text-gray-200
            rounded-lg text-2xl ms-auto inline-flex justify-center items-center ${hover || "hover:bg-dark-500"} hover:text-white`}
            onClick={onCloseModal}
          >
            <IoClose />
          </button>
        </div>
        <div className="p-4 md:p-5">{children}</div>
      </div>
    </div>
  </div>
  
  );
}

export default Modal;
