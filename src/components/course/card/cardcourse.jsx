import React from "react";
import { motion } from "framer-motion";
import imgPath from "../../../assets/img/gambarcard/hackeralgo.jpg";

const CardCourse = ({}) => {
  return (
    <>
      <div>
        <div className="md:h-[292px] md:w-[330px] ">
          <img
            src={imgPath}
            alt="cat-image"
            draggable="false"
            className="object-cover rounded-2xl overflow-hidden"
          />
        </div>
        <div className="bg-white md:w-[330px] translate-y-[-50px] sm:translate-y-[-70px] md:translate-y-[-110px] px-6 py-5 rounded-b-2xl">
          <div className="flex flex-col gap-[6px]">
            <h2 className="text-2xl font-semibold text-textSecondary">
              {/* {title} */}
              Web Development
            </h2>
            <p className="text-textLabel text-base">Mempelajari web developement nih</p>
            <div className="flex gap-2">
              {/* {subs.map((sub, index) => ( */}
                <p
                  // key={index}
                  className="border-[1.5px] border-borderPrimary text-textLabel text-base font-medium inline-flex items-center px-3 py-[2px] rounded-lg my-2 shadow-sm"
                >
                  {/* {sub} */}
                  Hacker
                </p>
              {/* ))} */}
            </div>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="text-white bg-primaryBlue text-base font-medium inline-flex items-center justify-center py-[10px] rounded-lg mt-6 mb-2 gap-3 w-full"
            >
              Lihat Detail
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCourse;
