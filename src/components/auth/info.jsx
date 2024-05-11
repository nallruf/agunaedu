import React from "react";
import { FaStar } from "react-icons/fa";

const InfoComponent = ({
  title,
  desc,
  img,
  starCount = "",
  quotes = "",
  text = "",
  people = "",
}) => {
  const show = starCount && quotes && text && people;

  return (
    <>
      <div className="text-white">
        <h1 className="text-6xl font-semibold mb-5">{title}</h1>
        <h2 className="text-[18px]">{desc}</h2>
      </div>
      <div className="w-2/3">
        <img src={img} alt="img-auth" draggable="false" className="my-2" />
      </div>
      {show && (
        <>
          <div className="flex pb-6 gap-1">
            {[...Array(starCount)].map((_, index) => (
              <FaStar key={index} className="text-yellow-300 w-4" />
            ))}
          </div>
          <div className="text-white">
            <h3 className="mb-3">{quotes}</h3>
            <h3 className="text-lg font-semibold">
              {text}
              <span className="text-[#B2DDFF]"> {people}</span>
            </h3>
          </div>
        </>
      )}
    </>
  );
};

export default InfoComponent;
