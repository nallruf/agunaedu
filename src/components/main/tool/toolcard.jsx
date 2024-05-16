import React from "react";

const ToolCard = ({ img, nameTool, kelas, role }) => (
  <div className="bg-white rounded-[20px] px-2 py-3 mb-3 mx-2 flex pr-10 border border-borderPrimary">
    <div className="flex items-center">
      <img src={img} alt="tool-img" />
    </div>
    <div className="flex flex-col justify-center items-start">
      <div className="font-inter font-semibold text-lg text-black">
        {nameTool}
      </div>
      <div className="font-inter font-normal text-gray-700 text-base">
        {kelas}
      </div>
      <div className="font-size-[12px] mt-2 px-2 bg-gray-200 rounded-full border border-borderPrimary">
        {role}
      </div>
    </div>
  </div>
);

export default ToolCard;
