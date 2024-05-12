import React from "react";

const tombolalur = ({ icon, alur1, alur2 }) => {
  return (
    <section className="container mx-auto flex justify-between">
      <div className="flex   items-center">
        <div className="flex items-center rounded-full border-2 border-primaryBlue p-4">
          <div className="  bg-primaryBlue rounded-full p-8 text-white mr-6">
            <div className="text-3xl">{icon}</div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl text-primaryBlue font-bold">{alur1}</h1>
            <h3 className="text-l font-sm text-[#667085]">{alur2}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default tombolalur;
