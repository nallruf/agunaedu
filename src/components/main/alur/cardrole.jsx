import { motion } from "framer-motion";
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
    <motion.div
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.2 }}
      className="shadow-lg cursor-pointer"
    >
      <div className="md:h-[250px] md:w-[336px]">
        <img
          src={img}
          alt="card-image"
          draggable="false"
          className="object-cover rounded-t-2xl overflow-hidden h-[200px] w-[336px]"
        />
        <div className="bg-white p-6 flex flex-col rounded-b-2xl shadow-lg">
          <div className="flex flex-col gap-3">
            <div className="flex items-center border-2 p-1 text-sm gap-1 rounded-lg text-textLabel border-borderPrimary">
              <span>{icon1}</span>
              {tes.map((test, index) => (
                <p key={index}>{test}</p>
              ))}
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-semibold text-textSecondary">
                  {titlecard}
                </h2>
                <p className="text-textLabel text-[14px] mt-1">{desccard}</p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-2">
                  {icon2}
                  {level}
                </div>
                <div className="flex items-center text-yellow gap-2">
                  {icon3}
                  {rating}
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
