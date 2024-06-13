import React from "react";
import { motion } from "framer-motion";

const CardCat = ({ imgPath, title, subs, text }) => {
  return (
    <div>
      <div className="md:h-[292px] md:w-[330px] ">
        <img
          src={imgPath}
          alt="cat-image"
          draggable="false"
          className="object-cover rounded-2xl overflow-hidden"
        />
      </div>
      <div className="bg-white md:w-[330px] h-[300px] translate-y-[-50px] sm:translate-y-[-70px] md:translate-y-[-110px] px-6 py-5 rounded-b-2xl">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-[6px] ">
            <h2 className="text-2xl font-semibold text-textSecondary">
              {title}
            </h2>
            <p className="text-textLabel text-base">{text}</p>
            <div className="flex flex-wrap gap-2">
              {subs.map((sub, index) => (
                <p
                  key={index}
                  className="border-[1.5px] border-borderPrimary text-textLabel text-base font-medium inline-flex items-center px-3 py-[2px] rounded-lg my-2 shadow-sm"
                >
                  {sub}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="text-white bg-primaryBlue text-base font-medium inline-flex items-center justify-center py-[10px] rounded-lg w-full"
            >
              Lihat Detail
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCat;
