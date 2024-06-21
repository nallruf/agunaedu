import React from "react";
import { FaPlus } from "react-icons/fa";

const TitleDashboard = ({ title, desc, button, onButtonClick }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <h1 className="text-2xl text-primaryBlue font-semibold">{title}</h1>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
      {button && (
        <div className="sm:mt-0 sm:ml-auto font-semibold">
          <button
            className="bg-primaryBlue text-white py-2 px-10 rounded-lg flex items-center gap-2"
            onClick={onButtonClick}
          >
            <FaPlus />
            {button}
          </button>
        </div>
      )}
    </div>
  );
};

export default TitleDashboard;
