import React from "react";

const MentorSection = ({ gambar, name, role }) => {
  return (
    <div>
      <div className="border-2 rounded-xl md:w-[266px] md:h-[318px] flex flex-col py-2  items-center ">
        <div className="py-2 flex items-start justify-start flex-col">
          <img src={gambar} alt="mentor" />
          <div className="flex flex-col items-start w-full justify-center py-2">
            <span className="text-xl font-bold">{name}</span>
            <span className="text-sm text-textTertiary">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSection;
