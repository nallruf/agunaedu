import React from "react";

const ToolCardMaterial = ({ img, nameTool, role }) => (
  <div className="bg-white rounded-[20px] px-2 py-3 mb-3 flex pr-10 border border-borderPrimary gap-4">
    <div className="flex items-center">
      <img src={img} alt="tool-img" className="w-20"/>
    </div>
    <div className="flex flex-col justify-center items-start">
      <div className="font-inter font-semibold text-lg text-black">
        {nameTool}
      </div>
      <div className="font-size-[12px] mt-2 px-2 bg-gray-200 rounded-full border border-borderPrimary">
        {role}
      </div>
    </div>
  </div>
);

export default ToolCardMaterial;
