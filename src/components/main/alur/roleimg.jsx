import React from "react";

const RoleImg = ({ gambar, role, isActive, onClick }) => {
  const buttonClasses = isActive
    ? "cursor-default"
    : "rounded-2xl z-10 relative opacity-50";

  return (
    <button className={`flex gap-10 ${buttonClasses}`} onClick={onClick}>
      <div className="relative">
        <img
          src={gambar}
          alt="gambar-alur"
          draggable="false"
          className="w-full h-full"
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold md:text-4xl text-white">
          {role}
        </p>
      </div>
    </button>
  );
};

export default RoleImg;
