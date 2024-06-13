import React from "react";
import ToolCard from "../../main/tool/toolcard";
import { dataToolsWeb } from "../../../dummydata/course/datatoolsweb";
import Marquee from "react-fast-marquee";

const ToolsPath = () => {
  return (
    <section>
      <div className="px-10 sm:px-20 md:px-40 py-[80px]">
        <div className=" md:grid-cols-2">
          <h1 className="text-5xl text-textPrimary font-semibold">
            Berbagai Tools di Sesi Pembelajaran!
          </h1>
          <p className="text-textTertiary mt-3">
            Ada beragam tools yang akan digunakan disetiap pembelajaran <br />
            yang sesuai dengan industri saat ini!
          </p>
        </div>
      </div>
      <div className="overflow-hidden pb-32 ">
        {[...Array(1)].map((_, index) => (
          <Marquee key={index} pauseOnHover speed={30} direction={"left"}>
            {dataToolsWeb.map((tool, toolIndex) => (
              <ToolCard key={toolIndex} {...tool} />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
};

export default ToolsPath;
