import React from "react";
import JavaScript from "../../../assets/img/tools/JS.png";
import Figma from "../../../assets/img/tools/Figma.png";
import Dart from "../../../assets/img/tools/Dart.png";
import Tailwind from "../../../assets/img/tools/Tailwind.png";
import Trello from "../../../assets/img/tools/Trello.png";
import Html from "../../../assets/img/tools/HTML.png";

const card = () => {
  const links = [
    {
      name: "JavaScript",
      kelas: "Web development",
      img: JavaScript,
      role: "Hacker",
    },
    {
      name: "Dart",
      kelas: "Mobile development",
      img: Dart,
      role: "Hacker",
    },
    {
      name: "HTML",
      kelas: "Web development",
      img: Html,
      role: "Hacker",
    },
    {
      name: "Trello",
      kelas: "Project Management",
      img: Trello,
      role: "Hustler",
    },
    {
      name: "Tailwind",
      kelas: "Web development",
      img: Tailwind,
      role: "Hacker",
    },
    {
      name: "Figma",
      kelas: "UI/UX Design",
      img: Figma,
      role: "Hipster",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className="grid grid-cols-1">
          <div className=" h-120  bg-white rounded-md justify-start items-center  grid grid-cols-2 mb-3">
            <div className="flex items-center justify-center">
              <img src={link.img} className="w-97 h-90" />
            </div>
            <div className="flex-col justify-start items-start  flex">
              <div className="font-inter font-semibold text-lg text-blue-900 ">
                {link.name}
              </div>
              <div className="font-inter font-normal text-gray-700 text-base ">
                {link.kelas}
              </div>
              <div className="p-2 bg-gray-200 rounded-full border border-gray-400 justify-center items-center flex">
                <div className="font-inter font-medium text-gray-700 text-sm leading-5 break-words">
                  {link.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default card;
