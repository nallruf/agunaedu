import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const TitleComponent = ({ backTo, back, title, desc }) => {
  return (
    <div className="flex flex-col">
      <Link to={backTo}>
        <div className="text-primaryBlue font-semibold flex items-center gap-1 text-base">
          <MdKeyboardArrowLeft />
          {back}
        </div>
      </Link>
      <div className="text-black mt-5">
        <h1 className="text-4xl sm:text-5xl font-semibold">{title}</h1>
        <h3 className="text-[18px] text-textLabel mt-2">{desc}</h3>
      </div>
    </div>
  );
};

export default TitleComponent;
