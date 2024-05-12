import React from "react";

const roleimg = ({ gambar, role }) => {
  return (
    <>
      <div className="flex gap-10 relative">
        <div className="relative">
          <img src={gambar} alt="hipster" />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-4xl text-white ">
            {role}
          </p>
        </div>
      </div>
    </>
  );
};

export default roleimg;
