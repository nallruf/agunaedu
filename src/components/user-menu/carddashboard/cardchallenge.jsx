import React from "react";
import { CgTrophy } from "react-icons/cg";
import { LuCoins } from "react-icons/lu";

const CardChallenge = ({ title, points, score, image }) => {
  return (
    <div>
      <div className="w-[271px] h-[309px] rounded-xl">
        <img src={image} alt="challenge1" className="rounded-t-xl w-[271px] h-[173px] object-cover" />
        <div className="bg-primaryBlue rounded-b-xl px-[15px] py-[10px] ">
          <div className="mb-[18px]">
            <span className="text-white text-xl font-semibold">{title}</span>
          </div>
          <div className="flex flex-col gap-[7px]">
            <div className="flex justify-between">
              <span className="text-xs text-white">Poin Yang didapat:</span>
              <span className="text-xs text-white">Skor Board:</span>
            </div>
            <div className="flex justify-between">
              <div className="bg-white border-2 border-borderPrimary rounded-xl px-3 py-1 flex gap-1 items-center font-semibold text-primaryBlue">
                <LuCoins />
                <span>{points} XP Poin</span>
              </div>
              <div className="bg-white border-2 border-borderPrimary rounded-xl px-3 py-1 flex gap-1 items-center font-semibold text-primaryBlue w-fit">
                <CgTrophy />
                <span>{score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardChallenge;
