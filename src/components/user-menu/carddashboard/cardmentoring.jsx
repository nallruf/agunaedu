import React from "react";

const CardMentoring = ({ title, img, nameMentor }) => {
  return (
    <div className="border border-borderPrimary px-8 py-6 rounded-2xl w-full md:w-[426px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-textPrimary text-base font-medium">{title}</h2>
        <div className="flex sm:justify-between sm:flex-row flex-col gap-5 md:gap-0">
          <div className="flex items-center gap-3">
            <img
              src={img}
              alt="img-profile"
              draggable="false"
              className="w-[35px] rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold text-textLabel">Mentor</h2>
              <h4 className="text-xs text-textTertiary">{nameMentor}</h4>
            </div>
          </div>
          <button className="text-white font-medium text-sm bg-primaryBlue rounded-lg px-3 py-2">
            Hubungi Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMentoring;
