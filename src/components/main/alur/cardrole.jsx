import { motion } from "framer-motion";
import React from "react";
import { SlLock } from "react-icons/sl";

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
  isLocked,
}) => {
  const lockedOverlay = (
    <div className="absolute inset-0 flex items-center justify-center top-0 translate-y-[-100px] md:translate-y-[-20px]">
      <div className="rounded-lg text-white text-center">
        <div className="flex flex-col items-center md:gap-5">
          <SlLock className="text-6xl" />
          <p>Selesaikan tes terlebih dahulu</p>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.03 }}
      className={`cursor-pointer ${
        isLocked ? "opacity-50 pointer-events-none relative" : ""
      }`}
    >
      {isLocked && lockedOverlay}
      <div className="md:h-[250px] md:w-[336px] w-[330px] shadow-lg">
        <img
          src={img}
          alt="card-image"
          draggable="false"
          className="object-cover rounded-t-2xl overflow-hidden h-[200px] w-[336px]"
        />
        <div className="bg-white p-6 flex flex-col rounded-b-2xl shadow-lg">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {tes.map((test, index) => (
                <div
                  key={index}
                  className={`flex items-center border-2 px-3 py-1 text-sm gap-2 font-medium rounded-lg ${
                    isLocked ? "text-iconInput" : "text-textLabel"
                  } border-borderPrimary`}
                >
                  <span>{icon1}</span>
                  <p>{test}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <h2
                  className={`text-2xl font-semibold ${
                    isLocked ? "text-iconInput" : "text-textSecondary"
                  }`}
                >
                  {titlecard}
                </h2>
                <p
                  className={`text-textLabel text-[14px] mt-1 ${
                    isLocked ? "text-iconInput" : "text-textTertiary"
                  }`}
                >
                  {desccard}
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={isLocked ? "text-iconInput" : "text-primaryBlue"}
                  >
                    {icon2}
                  </span>
                  <span
                    className={isLocked ? "text-iconInput" : "text-textLabel"}
                  >
                    {level}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={isLocked ? "text-iconInput" : "text-yellow-500"}
                  >
                    {icon3}
                  </span>
                  <span
                    className={
                      isLocked ? "text-iconInput" : "text-textTertiary"
                    }
                  >
                    {rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardRole;
