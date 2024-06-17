import React from "react";
import { useNavigate } from "react-router-dom";

const CardCourse = ({ title, img, icons, tags, imgProfile, nameMentor }) => {
  const navigate = useNavigate();

  const handleMentorClick = () => {
    navigate("/");
  };

  return (
    <div className="border border-borderPrimary p-4 rounded-xl w-full md:w-[880px]">
      <div className="flex justify-between md:items-center flex-col md:flex-row">
        <div className="flex gap-[15px] flex-col md:flex-row">
          <img
            src={img}
            alt="course-image"
            draggable="false"
            className="rounded-lg md:w-[100px] md:h-[90px] w-full"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg my-2 shadow-md gap-2"
                >
                  {icons[index]}
                  {tag}
                </p>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-2">
              <img
                src={imgProfile}
                alt="img-profile"
                draggable="false"
                className=" w-10 rounded-full"
              />
              <div className="flex flex-col">
                <h2 className="text-sm font-semibold text-textLabel">Mentor</h2>
                <h4 className="text-xs text-textTertiary">{nameMentor}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <button
            className="text-white bg-primaryBlue text-[14px] font-semibold inline-flex items-center justify-center py-[8px] px-[18px] rounded-lg"
            onClick={handleMentorClick}
          >
            Lanjutkan Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
