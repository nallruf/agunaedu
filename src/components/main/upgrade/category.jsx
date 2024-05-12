import React from "react";

const Category = ({ icon, upgrade, isActive, onClick }) => {
  return (
    <button
      className={`${
        isActive
          ? "bg-tertiaryBlue text-textQuote cursor-default"
          : "bg-white text-primaryBlue"
      } text-base font-medium inline-flex items-center px-3 py-[6px] rounded-b-lg mr-3 my-2 gap-3`}
      onClick={onClick}
    >
      {icon}
      <span>{upgrade}</span>
    </button>
  );
};

export default Category;
