import React from "react";

const CardRole = ({
  img,
  icon1,
  tes,
  titlecard,
  desccard,
  icon2,
  icon3,
  level,
  rating,
}) => {
  return (
    <div className=" rounded-b-2xl shadow-lg py-[15px] bg-white ">
      <div className="md:h-[400px] md:w-[336px]">
        <img
          src={img}
          alt="card-image"
          draggable="false"
          className="object-cover rounded-t-2xl overflow-hidden h-[400px] "
        />
      </div>

      <div className="bg-white md:w-[336px] translate-y-[-50px] sm:translate-y-[-70px] md:translate-y-[-110px] px-6 py-5 flex flex-col">
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center border-2 p-1 text-sm gap-1 rounded-lg">
            {icon1}
            {tes.map((test, index) => (
              <p key={index}>{test}</p>
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-textSecondary">
            {titlecard}
          </h2>
          <p className="text-textLabel text-base">{desccard}</p>
        </div>
        <div className="flex gap-2 ">
          <div className="flex items-center">
            {icon2}
            {level}
          </div>
          <div className="flex items-center text-yellow">
            {icon3}
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRole;
