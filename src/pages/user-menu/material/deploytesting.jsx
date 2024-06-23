import React from "react";
import UserMaterial from "../../user-menu/usermaterial/usermaterial";
import MentorImg from "../../../assets/img/team/ulum.png";
import ToolCard from "../../../components/main/tool/toolcard";
import { dataToolsMaterialReactBasic } from "../../../dummydata/user-menu/datatoolsmaterial";
import { FiDownload } from "react-icons/fi";

const DeployTetingPage = () => {
  const content = (
    <>
      <div className="w-full h-[300px] md:h-[503px] flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/sqjUH-FIm4M?si=dSaSb8WUg0pSkAbH"
          title="YouTube video player"
          frameBorder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
      <div className="mt-10 px-4 md:px-0">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Deploy Testing</h1>
            <span className="text-textLabel text-base font-normal">
              Materi Dasar Deploy Testing{" "}
            </span>
          </div>
          <button className="border-[#85CAFF] border-2 bg-[#F9FAFB] text-primaryBlue rounded-lg px-10 shadow-md py-2 font-semibold">
            Lanjutkan
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Start</h2>
          <div className="rounded-xl px-4 py-2 w-fit bg-primaryBlue text-white font-semibold">
            <div className="flex items-center">
              <FiDownload />
              <button className="px-2 py-1 text-sm">Unduh Modul</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-11 flex flex-col md:flex-row gap-8 px-4 md:px-0">
        <div className="flex-1 md:order-2">
          <span className="text-textLabel text-base font-semibold">
            Ingin Mentoring Private?
          </span>
          <div className="border-2 rounded-xl p-4 md:p-5 flex flex-col items-center bg-white mt-3 w-full md:w-fit">
            <div className="py-2 flex items-start justify-start flex-col">
              <div className="bg-primaryBlue p-4 rounded-xl">
                <img
                  src={MentorImg}
                  alt="mentor"
                  draggable="false"
                  className="w-20 md:w-32"
                />
              </div>
              <div className="flex flex-col items-start w-full justify-center py-2">
                <span className="text-lg md:text-xl font-bold">Ulum GG</span>
                <div className="border-2 rounded-xl px-4 py-2 bg-primaryBlue text-white mt-2">
                  <button className="text-sm md:text-base">
                    Chat Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 md:order-1 hidden md:block">
          <span className="text-black text-base font-semibold">
            Tools Yang Digunakan
          </span>
          <div className="w-fit flex flex-wrap gap-2 md:gap-4">
            {dataToolsMaterialReactBasic.map((tool, index) => (
              <div key={index} className="w-20 md:w-auto">
                <ToolCard
                  img={tool.img}
                  nameTool={tool.nameTool}
                  kelas={tool.kelas}
                  role={tool.role}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-11 flex flex-col md:hidden">
        <span className="text-black text-base font-semibold">
          Tools Yang Digunakan
        </span>
        <div className="w-fit flex flex-wrap gap-2 md:gap-4">
          {dataToolsMaterialReactBasic.map((tool, index) => (
            <div key={index} className="w-20 md:w-auto">
              <ToolCard
                img={tool.img}
                nameTool={tool.nameTool}
                kelas={tool.kelas}
                role={tool.role}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return <UserMaterial content={content} />;
};

export default DeployTetingPage;
