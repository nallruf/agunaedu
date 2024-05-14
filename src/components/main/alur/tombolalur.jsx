import React from "react";

const TombolAlur = ({ iconbtn, alur1, alur2 }) => {
  return (
    <div className="container mx-auto flex justify-between">
      <div className="flex items-center">
        <div className="flex items-center rounded-full border-2 border-primaryBlue p-4 gap-4">
          <div className="bg-secondaryBlue rounded-full p-5 text-white">
            <div className="text-2xl">{iconbtn}</div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl text-primaryBlue font-bold">{alur1}</h1>
            <h3 className="text-l font-sm text-[#667085]">{alur2}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TombolAlur;
