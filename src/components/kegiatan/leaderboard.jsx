import React from "react";
import LeaderboardItem from "./leaderboarditem";

const LeaderboardSection = ({ data, showAll, toggleShowAll }) => {
  const topThree = data
    .filter((participant) => participant.rank <= 3)
    .sort((a, b) => a.rank - b.rank);
  const orderedTopThree = [topThree[1], topThree[0], topThree[2]];
  const others = data.filter((participant) => participant.rank > 3);
  const displayedOthers = showAll ? others : others.slice(0, 3);

  return (
    <>
      <div className="bg-primaryBlue rounded-t-2xl pt-4 px-7 text-white">
        <h1 className="text-center text-2xl font-semibold">Leaderboard</h1>
        <div className="flex sm:justify-center sm:gap-[74px] md:gap-[10px] pb-4">
          {orderedTopThree.map((participant, index) => (
            <LeaderboardItem
              key={participant.id}
              participant={participant}
              isTopThree
              position={index}
            />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-b-2xl py-4 px-7 border-[1.5px] border-borderPrimary">
        {displayedOthers.map((participant) => (
          <LeaderboardItem key={participant.id} participant={participant} />
        ))}
        <div className="text-center">
          <button
            onClick={toggleShowAll}
            className="mt-4 text-primaryBlue font-semibold"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Lebih Banyak"}
          </button>
        </div>
      </div>
    </>
  );
};

export default LeaderboardSection;
