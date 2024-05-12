import React from "react";
import Marquee from "react-fast-marquee";
import ToolCard from "../../../components/main/tool/toolcard";
import { dataTool } from "../../../dummydata/datatool";
import Logo from "../../../assets/img/logo/logo-name-putih.png";

const ToolsSection = () => {
  return (
    <section className="bg-primaryBlue">
      <div className="container mx-auto px-10 py-28">
        <div className="flex flex-col space-y-4 text-center">
          <span className="text-4xl text-white font-semibold">
            Pelajari berbagai Tools yang sesuai dengan Industri!
          </span>
          <span className="text-white text-2xl font-semibold">Mulai kembangkan skill mu bersama kami</span>
          <div className="flex justify-center">
            <img
              src={Logo}
              alt="logo-aguna"
              draggable="false"
              className="w-[15%]"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden pb-40">
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