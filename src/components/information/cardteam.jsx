import React from "react";

const CardTeam = ({ role1, role2, role, aka, img, nameTeam }) => {
  return (
    <>
      <div className="w-[290px] h-[373px] bg-[#2196F3] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute text-[150px] text-[#2AA8F6] font-extrabold flex flex-col gap-28 rotate-[335deg]">
          <div>{role1}</div>
          <div>{role2}</div>
        </div>
        <div className="z-10 top-0 absolute text-center translate-y-[-30px]">
          <h1 className="text-textPrimary font-extrabold text-2xl mt-20">
            {role}
          </h1>
          <div className="text-[10px] text-white bg-textPrimary px-5 rounded-full font-semibold">
            {aka}
          </div>
        </div>
        <img
          src={img}
          alt="img-team"
          draggable="false"
          className="z-10 absolute translate-y-[50px]"
        />
        <div className="bg-[#2196F3] text-white font-semibold text-lg py-[5px] px-2 z-20 bottom-0 absolute">
          {nameTeam}
        </div>
      </div>
    </>
  );
};

export default CardTeam;
