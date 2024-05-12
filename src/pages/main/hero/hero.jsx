import React from "react";
import Hero from "../../../assets/img/illustration/hero.png";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-10 my-20">
      <div className="grid md:grid-cols-2">
        <div className="my-auto">
          <h1 className="text-5xl text-primaryBlue font-semibold mb-4">
            Temukan Course yang Tepat dan Raih Potensimu!
          </h1>
          <span className="text-xl text-textTertiary mb-6">
            Bergabunglah dan temukan bimbingan dari para ahli di bidang IT dari
            berbagai role!
          </span>
          {/* buat button baru untuk bisa onclick (dipisah aja gaperlu component) */}
          <div className="py-5 md:flex items-center">
            <div>
              <button
                className="items-center rounded-xl font-semibold  px-12 py-2 bg-primaryBlue text-white"
                onClick={() => navigate("/auth/login")}
              >
                Cari Course Sekarang
              </button>
            </div>
            <div>
              <button
                className="items-center rounded-xl font-semibold flex px-12 py-2
              bg-white text-primaryBlue"
                onClick={() => navigate("/auth/register")}
              >
                Pelajari Lebih Lanjut
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <IoChatbubbleEllipsesOutline className="text-4xl" />
            <div className="flex flex-col space-y-2 mt-8">
              <span className="text-sm">
                “Excellent app. An amazingly simple concept and well designed.
                Never knew how much this was needed until it was here.”
              </span>
              <span className="text-semibold">
                <span className="text-[#33333] font-semibold">
                  Filled a Huge Cap
                </span>
                <span className="text-textQuote2"> - Jrobyutk</span>
              </span>
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
