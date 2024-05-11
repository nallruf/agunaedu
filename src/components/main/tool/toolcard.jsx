import React from "react";

const ToolCard = ({ img, nameTool, kelas, role }) => (
  <div className="bg-white rounded-[20px] px-2 py-3 mb-3 mx-2 flex pr-10">
    <div className="flex items-center">
      <img src={img} alt="tool-img" />
    </div>
    <div className="flex flex-col justify-center items-start">
      <div>{nameTool}</div>
      <div>{kelas}</div>
      <div>{role}</div>
    </div>
  </div>
);

export default ToolCard;

{
  /* <div className="grid grid-cols-1">
      <div className="bg-white rounded-md">
        <div className="flex items-center justify-center">
          <img src={img} className="w-97 h-90" />
        </div>
        <div className="flex-col justify-start items-start inline-flex">
          <div className="font-inter font-semibold text-lg text-blue-900 ">
            {nameTool}
          </div>
          <div className="font-inter font-normal text-gray-700 text-base ">
            {kelas}
          </div>
          <div className="p-2 bg-gray-200 rounded-full border border-gray-400 justify-center items-center flex">
            <div className="font-inter font-medium text-gray-700 text-sm leading-5 break-words">
              {role}
            </div>
          </div>
        </div>
      </div>
    </div> */
}
