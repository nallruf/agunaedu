import React from "react";
import Hero from "../../../assets/img/illustration/hero.png";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="px-10 sm:px-20 md:px-40 my-[100px] sm:my-[150px] md:my-[200px]"
      id="hero"
    >
      <div className="grid md:grid-cols-2">
        <div className="my-auto">
          <h1
            className="text-5xl text-primaryBlue font-semibold mb-4"
            // initial={{ x: -300, scale: 0.5 }}
            // animate={{ x: 0, scale: 1 }}
            // transition={{ duration: 0.8 }}
          >
            Temukan Course yang Tepat dan Raih Potensimu!
          </h1>
          <h3
            className="text-xl text-textTertiary mb-6"
            // initial={{ y: 300, scale: 0.5 }}
            // animate={{ y: 0, scale: 1 }}
            // transition={{ duration: 0.8 }}
          >
            Bergabunglah dan temukan bimbingan dari para ahli di bidang IT dari
            berbagai role!
          </h3>
          <div className="py-6 md:flex items-center gap-7">
            <motion.button
              className="items-center rounded-lg font-semibold px-4 py-[10px] bg-primaryBlue text-white"
              // initial={{ y: 100, scale: 0.5 }}
              // animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => navigate("/auth/login")}
            >
              Cari Course Sekarang
            </motion.button>
            <div>
              <Link to="alur" spy={true} smooth={true} offset={-70}>
                <motion.button
                  className="items-center font-semibold py-[10px] text-primaryBlue flex gap-2"
                  // initial={{ y: 100, scale: 0.5 }}
                  // animate={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  // onClick={() => navigate("/auth/register")}
                >
                  Pelajari lebih lanjut
                  <IoIosArrowForward />
                </motion.button>
              </Link>
            </div>
          </div>
          <div
            className="flex mt-6 sm:space-x-6"
            // initial={{ x: -300, scale: 0.5 }}
            // animate={{ x: 0, scale: 1 }}
            // transition={{ duration: 0.8 }}
          >
            <div className="hidden sm:flex items-center">
              <IoChatbubbleEllipsesOutline className="text-5xl text-textQuote" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col space-y-2 justify-center">
                <span className="text-base">
                  “Excellent app. An amazingly simple concept and well designed.
                  Never knew how much this was needed until it was here.”
                </span>
                <span className="font-semibold text-lg">
                  <span className="text-textPrimary">Filled a Huge Cap</span>
                  <span className="text-textQuote2"> - Jrobyutk</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex md:justify-end justify-center mt-20 md:mt-0"
          // initial={{ x: 100, scale: 0.5 }}
          // animate={{ x: 0, scale: 1 }}
          // transition={{ duration: 0.8 }}
        >
          <img
            src={Hero}
            alt="Hero"
            className="md:w-[90%] sm:w-2/3"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
