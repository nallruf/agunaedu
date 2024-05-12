import React from "react";
import Hero from "../../../assets/img/illustration/hero.png";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-10 my-[150px]">
      <div className="grid md:grid-cols-2">
        <div className="my-auto">
          <h1 className="text-5xl text-primaryBlue font-semibold mb-4">
            Temukan Course yang Tepat dan Raih Potensimu!
          </h1>
          <span className="text-xl text-textTertiary mb-6">
            Bergabunglah dan temukan bimbingan dari para ahli di bidang IT dari
            berbagai role!
          </span>
          <div className="py-6 md:flex items-center gap-7">
            <div>
              <button
                className="items-center rounded-lg font-semibold px-4 py-[10px] bg-primaryBlue text-white"
                onClick={() => navigate("/auth/login")}
              >
                Cari Course Sekarang
              </button>
            </div>
            <div>
              <button
                className="items-center font-semibold py-[10px] text-primaryBlue flex gap-2"
                onClick={() => navigate("/auth/register")}
              >
                Cari Course Sekarang
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="flex mt-6 space-x-6">
            <div className="flex items-center">
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
        <div className="flex md:justify-end justify-center mt-20 md:mt-0">
          <img src={Hero} alt="Hero" className="md:w-3/4 sm:w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
