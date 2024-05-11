import React from "react";
import Hero from "../../../assets/img/illustration/hero.png";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const HeroSection = () => {
  const buttons = [
    {
      id: 1,
      button: "Cari Course Sekarang",
    },
    {
      id: 2,
      button: "Pelajari Lebih Lanjut",
    },
  ];
  return (
    <div className="container mx-auto px-10 my-20">
      <div className="grid md:grid-cols-2">
        <div className="my-auto">
          <h1 className="text-5xl text-blue-500 font-semibold mb-4">
            Temukan Course yang Tepat dan Raih Potensimu!
          </h1>
          <span className="text-xl text-gray-600 mb-6">
            Bergabunglah dan temukan bimbingan dari para ahli di bidang IT dari
            berbagai role!
          </span>
          {/* buat button baru untuk bisa onclick (dipisah aja gaperlu component) */}
          <div className="space-y-2 ">
            {buttons.map(({ id, button }) => (
              <button
                key={id}
                className={`items-center rounded-lg font-semibold ${
                  id === 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                }   px-6 py-2 `}
              >
                {button}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <IoChatbubbleEllipsesOutline className="text-4xl" />
            <div className="flex flex-col space-y-2 mt-8">
              <span className="text-sm">
                “Excellent app. An amazingly simple concept and well designed.
                Never knew how much this was needed until it was here.”
              </span>
              <span className="text-semibold">
                <span className="text-black">Filled a Huge Cap</span>
                <span className="text-gray-500"> - Jrobyutk</span>
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
