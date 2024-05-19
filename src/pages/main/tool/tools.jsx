import React from "react";
import Marquee from "react-fast-marquee";
import ToolCard from "../../../components/main/tool/toolcard";
import { dataTool } from "../../../dummydata/main/datatool";

const ToolsSection = () => {
  return (
    <section
      className="bg-primaryBlue"
      // data-aos="fade-right"
    >
      <div className="px-10 sm:px-20 md:px-40 py-20">
        <div className="flex flex-col space-y-4 text-center">
          <span
            className="text-4xl text-white font-semibold"
            // data-aos="zoom-in"
          >
            Pelajari berbagai Tools yang sesuai dengan Industri!
          </span>
          <span
            className="text-white text-2xl"
            // data-aos="zoom-in"
          >
            Mulai kembangkan skill mu bersama kami
          </span>
        </div>
      </div>

      <div
        className="overflow-hidden pb-32"
        // data-aos="zoom-in"
      >
        {[...Array(2)].map((_, index) => (
          <Marquee
            key={index}
            pauseOnHover
            speed={30}
            direction={index === 1 ? "right" : "left"}
          >
            {dataTool.map((tool, toolIndex) => (
              <ToolCard key={toolIndex} {...tool} />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
