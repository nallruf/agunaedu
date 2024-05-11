import React from "react";
import Marquee from "react-fast-marquee";
import ToolCard from "../../../components/main/tool/toolcard";
import { dataTool } from "../../../dummydata/datatool";

const ToolsSection = () => {
  return (
    <section className="bg-primaryBlue">
      <div className="container mx-auto px-10 py-28">
        <div className="flex flex-col space-y-4 text-center">
          <span className="text-4xl text-white">
            Pelajari berbagai Tools yang sesuai dengan Industri!
          </span>
          <span className="text-white">Bergabunglah bersama kami</span>
          {/* <div>
            <button className="items-center rounded-lg font-semibold bg-white h-full px-6 py-2">
              Bergabung sekarang
            </button>
          </div> */}
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

// <div className="bg-blue-500">
//   <div className="flex justify-between w-full items-center">
//     <div className="flex flex-col space-y-4">
//       <span className="text-4xl">
//         Pelajari berbagai Tools yang sesuai dengan Industri!
//       </span>
//       <span>Bergabunglah bersama kami</span>
//       <div>
//         <button className="items-center rounded-lg font-semibold bg-white h-full px-6 py-2">
//           Bergabung sekarang
//         </button>
//       </div>
//     </div>
// <div className="flex gap-10 overflow-hidden">
//   <Marquee
//     pauseOnClick
//     direction="up"
//     gradient={true}
//     gradientColor="blue-500"
//   >
//     <ToolCard />
//   </Marquee>
// </div>
//   </div>
// </div>
