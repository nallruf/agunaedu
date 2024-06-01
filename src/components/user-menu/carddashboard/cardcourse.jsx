import React from "react";
import { useNavigate } from "react-router-dom";

const CardCourse = ({ title, img, icons, tags, progress }) => {
  const totalVideos = Math.ceil((progress / 100) * 20);
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    alert("Beri Feedback clicked");
  };

  const handlePathClick = () => {
    navigate("/user/course");
  };

  return (
    <div className="border border-borderPrimary p-6 rounded-xl w-full md:w-[907px]">
      <div className="flex justify-between md:items-center flex-col md:flex-row">
        <div className="flex gap-[15px] flex-col md:flex-row">
          <img
            src={img}
            alt="course-image"
            draggable="false"
            className="rounded-lg sm:w-[100px] sm:h-[90px] w-full"
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
            {/* masih gatau supaya width ukurannya untuk progress itu sama semua gimana */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="bg-primaryBlue h-2"
                    style={{ width: `${progress}%`, maxWidth: "100%" }}
                  />
                </div>
                <h2 className="text-textLabel font-medium text-sm">
                  {progress}%
                </h2>
              </div>
              <span className="text-iconInput text-xs">
                {totalVideos}/20 Video Pembelajaran
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          {progress === 100 ? (
            <div className="flex gap-2">
              <button
                className="text-primaryBlue border border-borderSecondary text-[14px] font-semibold inline-flex items-center justify-center py-[8px] px-[18px] rounded-lg"
                onClick={handleFeedbackClick}
              >
                Beri Feedback
              </button>
              <button
                className="text-white bg-primaryBlue text-[14px] font-semibold inline-flex items-center justify-center py-[8px] px-[18px] rounded-lg"
                onClick={handlePathClick}
              >
                Lihat Path
              </button>
            </div>
          ) : (
            <button className="text-white bg-primaryBlue text-[14px] font-semibold inline-flex items-center justify-center py-[8px] px-[18px] rounded-lg">
              Detail Kelas
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
