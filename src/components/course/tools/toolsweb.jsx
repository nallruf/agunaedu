import React from "react";
import ToolCard from "../../main/tool/toolcard";
import { dataToolsWeb } from "../../../dummydata/course/datatoolsweb";
import Marquee from "react-fast-marquee";

const ToolsWeb = ({ img, nameTool, kelas, role }) => {
  return (
    <section>
      <div className=" container mx-auto justify-center  items-center px-10">
        <div>
          <h1>Berbagai Tools di Sesi Pembelajaran!</h1>
          <p>
            Ada beragam tools yang akan digunakan disetiap pembelajaran yang
            sesuai dengan industri saat ini!
          </p>
        </div>
      </div>
      <div className="overflow-hidden pb-32 " data-aos="zoom-in">
        {[...Array(1)].map((_, index) => (
          <Marquee key={index} pauseOnHover speed={30} direction={"left"}>
            {dataToolsWeb.map((tool, toolIndex) => (
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

export default ToolsWeb;
