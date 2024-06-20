import React, { useState, useEffect } from "react";
import Modal from "../../../components/user-menu/modal/addtestimoni";

const CardFeedback = ({
  imgCode,
  title,
  desc,
  tags,
  courseId,
  statusFeedback,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

  useEffect(() => {
    setIsFeedbackSubmitted(statusFeedback === 1);
  }, [statusFeedback]);

  const handleFeedbackClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="border border-borderPrimary py-6 px-7 rounded-xl w-full md:w-[382px] flex flex-col justify-between">
      <div className="flex flex-col gap-6 flex-grow">
        <div className="flex items-center text-textPrimary font-semibold text-lg gap-3">
          <img src={imgCode} alt="img-code" draggable="false" />
          <h1>{title}</h1>
        </div>
        <div className="flex flex-col flex-grow">
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
      </div>

      <button
        className={`text-white text-[12px] font-semibold h-fit py-2 px-[14px] rounded-lg mt-6 ${
          isFeedbackSubmitted ? "bg-gray-400" : "bg-primaryBlue"
        }`}
        onClick={handleFeedbackClick}
        disabled={isFeedbackSubmitted}
      >
        {isFeedbackSubmitted ? "Feedback Submitted" : "Beri Feedback"}
      </button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} courseId={courseId} />
      )}
    </div>
  );
};

export default CardFeedback;
