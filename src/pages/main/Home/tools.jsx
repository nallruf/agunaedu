import React from "react";
import Marquee from "react-fast-marquee";
import Card from "./card";

const ToolsSection = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex justify-between w-full items-center h-screen">
        <div className="flex flex-col space-y-4">
          <span className="text-4xl">
            Pelajari berbagai Tools yang sesuai dengan Industri!
          </span>
          <span>Bergabunglah bersama kami</span>
          <div>
            <button className="items-center rounded-lg font-semibold bg-white h-full px-6 py-2">
              Bergabung sekarang
            </button>
          </div>
        </div>
        <div className="flex gap-10">
          <Marquee pauseOnClick direction="up">
            <Card />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
