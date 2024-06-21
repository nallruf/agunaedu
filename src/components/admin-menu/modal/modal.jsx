import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Modal = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl max-h-[90vh] overflow-auto">
        <div className="my-[20px] md:my-[30px]">
          <button
            className="flex items-center text-lg gap-3 text-primaryBlue"
            onClick={onClose}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <h3>Kembali</h3>
          </button>
          <h1 className="text-3xl font-semibold pt-8 pb-3">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
