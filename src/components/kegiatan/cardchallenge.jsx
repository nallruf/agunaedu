import React from "react";
import { useNavigate } from "react-router-dom";

const CardChallenge = ({ title, imgChallenge, tags, date, icons, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <>
      <div className="border-[1.5px] border-borderPrimary py-3 pl-3 pr-6 rounded-xl">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div className="flex items-center justify-center gap-3 flex-col sm:flex-row">
            <img
              src={imgChallenge}
              alt="challenge"
              draggable="false"
              className="rounded-lg sm:w-[100px] sm:h-[90px] w-full"
            />
            <div className="flex flex-col items-center text-center sm:text-start sm:items-start">
              <h1 className="text-xl font-semibold">{title}</h1>
              <div className="flex gap-2">
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg my-2 shadow-md gap-2"
                  >
                    <span className="text-textTertiary text-sm">
                      {icons[index]}
                    </span>
                    {tag}
                  </p>
                ))}
              </div>
              <span className="text-textTertiary text-sm ">{date}</span>
            </div>
          </div>
          <div className="mt-5 sm:mt-0">
            <button
              className="text-white bg-primaryBlue text-[14px] font-semibold inline-flex items-center justify-center py-[8px] px-[18px] rounded-lg"
              onClick={handleClick}
            >
              Detail Challenge
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardChallenge;
