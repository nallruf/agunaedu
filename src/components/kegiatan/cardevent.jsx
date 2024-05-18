import React from "react";

const CardEvent = ({ icon, desc }) => {
  return (
    <>
      <div className="bg-white rounded-2xl py-5 w-[300px] px-7">
        <div className="flex justify-center items-center">
          <div className="bg-secondaryBlue rounded-full p-5 text-white">
            <div className="text-3xl">{icon}</div>
          </div>
        </div>
        <div className="text-textLabel mt-3">
          <h3 className="text-base font-medium">{desc}</h3>
        </div>
      </div>
    </>
  );
};

export default CardEvent;
