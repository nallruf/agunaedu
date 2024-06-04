import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const CardAnalysis = ({ title, amount, total, profit, icon }) => {
  const isTotalChallenge = title === "Total Challenge";

  return (
    <div className="bg-primaryBlue rounded-xl pl-3 pt-5 pr-5 pb-4 w-[185px] md:w-[306px] md:h-[138px] relative overflow-hidden sm:block hidden">
      <div className="absolute top-0 right-0 translate-x-[30%] translate-y-[-20%] transform w-[140px] h-[122px] rounded-full bg-[#0178FA]" />
      <div className="absolute bottom-0 left-0 translate-x-[-10%] translate-y-[60%] transform w-[140px] h-[122px] rounded-full bg-[#0178FA]" />
      <div className="flex justify-between relative z-10">
        <div className="flex flex-col gap-1 text-white">
          <h3 className="font-medium text-base">{title}</h3>
          <h2 className="text-2xl font-semibold">{amount}</h2>
        </div>
        <div className="bg-[#F9FAFB] p-1 rounded-lg border border-borderSecondary shadow-md h-fit">
          {icon}
        </div>
      </div>
      <div className="mt-5 hidden md:flex justify-between items-center relative z-10">
        <h3 className="text-textQuote text-xs">
          {isTotalChallenge ? "Total poin" : "Total transaksi"}:{" "}
          <span>{total}</span>
        </h3>
        <div className="bg-white px-2 py-1 gap-1 flex text-[#19B26B] items-center rounded-lg text-xs">
          {profit}
          <FaArrowUp />
        </div>
      </div>
    </div>
  );
};

export default CardAnalysis;
