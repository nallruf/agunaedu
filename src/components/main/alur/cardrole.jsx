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
    <div>
      <div className="flex justify-end items-center mx-auto py-[15px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="shadow-lg rounded-xl ">
            <div className="md:h-[292px] md:w-[330px] ">
              <img
                src={img}
                alt="card-image"
                draggable="false"
                className="object-cover rounded-2xl overflow-hidden"
              />
            </div>
            <div className="bg-white md:w-[330px] translate-y-[-50px] sm:translate-y-[-70px] md:translate-y-[-110px] px-6 py-5 rounded-b-2xl">
              <div className="flex flex-col gap-[6px] ">
                <div className="flex items-center border-2 p-1 text-sm gap-1 rounded-lg ">
                  {icon1} {tes}
                </div>
                <h2 className="text-2xl font-semibold text-textSecondary">
                  {titlecard}
                </h2>
                <p className="text-textLabel text-base">{desccard}</p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center ">
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
        </div>
      </div>
    </div>
  );
};

export default CR;
