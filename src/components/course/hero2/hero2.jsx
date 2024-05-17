import React from "react";
import ImgJuara from "../../../assets/img/illustration/juara.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HeroSection2 = () => {
  return (
    <>
      <section className="container mx-auto px-10 my-20 bg-primaryBlue">
        <div className="grid md:grid-cols-2">
          <div className="my-auto overflow-hidden" data-aos="zoom-in">
            <h1 className="text-white font-bold text-5xl mb-4">
              Yuk, Jadi juara Bersama Aguna Edu!
            </h1>

            <motion.button
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.2 }}
              className="text-primaryBlue bg-white mt-9 gap-1 px-8 py-2 rounded-lg flex items-center"
            >
              <span className="text-[14px] font-semibold flex items-center gap-1 mx-auto">
                Lihat Kelas Lainnya <FaArrowRight />
              </span>
            </motion.button>
          </div>
          <div
            className="flex md:justify-end justify-center mt-20 md:mt-0"
            data-aos="zoom-in"
          >
            <img
              src={ImgJuara}
              alt="img-keahlian"
              draggable="false"
              className="md:w-3/4 sm:w-2/3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection2;
