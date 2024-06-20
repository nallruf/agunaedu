import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const LeaderboardItem = ({ participant, isTopThree = false, position }) => {
  const topThreeClasses = ["mt-[87px]", "mt-[34px]", "mt-[87px]"];

  const rankSuffixes = ["nd", "st", "rd"];
  const marginTopClass = isTopThree ? topThreeClasses[position] : "mt-0";
  const rankSuffix = isTopThree ? rankSuffixes[position] : "";

  return isTopThree ? (
    <div className={`flex flex-col items-center gap-2 ${marginTopClass}`}>
      <h2 className="text-2xl font-semibold">
        {participant.rank}
        <span className="text-xl font-normal">{rankSuffix}</span>
      </h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center text-center gap-2">
          <img
            src={participant.profileImg}
            alt="gambar-foto-leaderboard"
            draggable="false"
            className="w-14 h-14 rounded-full border-borderSecondary border-[0.75px] object-contain"
          />
          <h2 className="text-[14px] font-semibold">{participant.name}</h2>
        </div>
        <div className="bg-[#079455] rounded-xl text-white text-[13px] font-semibold inline-flex items-center justify-center py-[10px] px-[12.5px] gap-1">
          <FaStar className="text-[#FDB022] text-base" />
          <span>{participant.xp} Xp</span>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 w-[60%] text-textLabel font-semibold">
          <h2>{participant.rank}</h2>
          <div className="flex items-center gap-2">
            <img
              src={participant.profileImg}
              alt="leaderboard"
              draggable="false"
              className="w-8 h-8 rounded-full"
            />
            <h3>{participant.name}</h3>
          </div>
        </div>
        <div className="w-[40%] justify-end flex">
          <div className="flex items-center border border-borderSecondary text-textSecondary bg-[#EFF8FF] gap-1 px-[10px] py-1 rounded-full text-[14px] font-semibold">
            <FaRegStar className="text-secondaryBlue text-xl" />
            {participant.xp} Xp
          </div>
        </div>
      </div>
      <div className="my-3 border border-borderPrimary" />
    </div>
  );
};

export default LeaderboardItem;
