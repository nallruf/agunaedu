import React from "react";
import Marquee from "react-fast-marquee";
import ToolCard from "../../../components/main/tool/toolcard";
import { dataTool } from "../../../dummydata/main/datatool";

const ToolsSection = () => {
  return (
    <section className="bg-primaryBlue">
      <div className="container mx-auto px-10 py-20">
        <div className="flex flex-col space-y-4 text-center">
          <span className="text-4xl text-white font-semibold" data-aos="zoom-in">
            Pelajari berbagai Tools yang sesuai dengan Industri!
          </span>
          <span className="text-white text-2xl" data-aos="zoom-in">
            Mulai kembangkan skill mu bersama kami
          </span>
        </div>
      </div>

      <div className="overflow-hidden pb-32">
        {[...Array(2)].map((_, index) => (
          <Marquee
            key={index}
            pauseOnHover
            speed={30}
            direction={index === 1 ? "right" : "left"}
          >
            {dataTool.map((tool, toolIndex) => (
              <ToolCard
                key={toolIndex}
                img={tool.img}
                nameTool={tool.name}
                kelas={tool.kelas}
                role={tool.role}
              />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
