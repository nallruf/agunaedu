import React from "react";
import { FaPlus } from "react-icons/fa";

const TitleDashboard = ({ title, desc, button, onClick }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-4">
            <h1 className="text-primaryBlue font-bold text-3xl">{title}</h1>
          </div>
          <span className="text-textTertiary font-semibold">{desc}</span>
        </div>
        {button && (
          <div className="sm:mt-0 sm:ml-auto font-semibold">
            <button
              className="bg-primaryBlue text-white py-2 px-10 rounded-lg flex items-center gap-2"
              onClick={onClick}
            >
              <FaPlus />
              {button}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TitleDashboard;
