import React from "react";

const CardFeedback = ({
  imgCode,
  title,
  desc,
  tags,
  imgProfile,
  nameMentor,
}) => {
  const handleFeedbackClick = () => {
    alert("EA FEEDBACK");
  };

  return (
    <div className="border border-borderPrimary py-6 px-7 rounded-xl w-full md:w-[448px]">
      <div className="flex flex-col gap-6">
        <div className="flex items-center text-textPrimary font-semibold text-lg gap-3">
          <img src={imgCode} alt="img-code" draggable="false" />
          <h1>{title}</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-medium">{desc}</h1>
          <div className="flex flex-wrap sm:gap-2">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg my-2 shadow-md gap-2"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
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
          <button
            className="text-white bg-primaryBlue text-[12px] font-semibold h-fit py-2 px-[14px] rounded-lg"
            onClick={handleFeedbackClick}
          >
            Beri Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFeedback;
