import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import ImgHero from "../../../assets/img/illustration/ipad.png";
import ImgArah from "../../../assets/img/illustration/arah-bawah.png";

const HeroCourse = ({ title, desc, button }) => {
  return (
    <>
      <section className="text-textPrimary">
        <div className="container mx-auto px-10 py-16">
          <div className="grid md:grid-cols-2">
            <div className="my-[52px] md:my-auto relative">
              <motion.h1
                initial={{ x: -300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-semibold pb-3"
              >
                {title}
              </motion.h1>
              <motion.h3
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-xl text-textTertiary"
              >
                {desc}
              </motion.h3>
              <img
                src={ImgArah}
                alt="img-arah"
                draggable="false"
                className="hidden sm:block absolute right-0 top-0 md:rotate-[10.739deg] rotate-[120deg] md:translate-x-[100px] sm:translate-y-[90px]"
              />
              <div className="flex mt-8 gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  initial={{ x: -100, scale: 0.5 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="bg-primaryBlue text-white text-[14px] font-semibold inline-flex items-center px-12 py-[10px] rounded-lg my-2 cursor-pointer gap-2 "
                >
                  <span>{button}</span>
                  <FaArrowRight />
                </motion.div>
              </div>
            </div>
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ x: 100, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={ImgHero}
                alt="img-hero"
                draggable="false"
                className="md:w-[90%] sm:w-2/3"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCourse;
