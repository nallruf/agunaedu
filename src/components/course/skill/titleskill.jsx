import React from "react";

const TitleSkill = ({ desc, title}) => {
  return (
    <>
      <div className="text-white flex flex-col gap-2">
        <h1 className="font-semibold text-3xl sm:text-4xl">{title}</h1>
        <h4 className="text-base sm:text-xl">{desc}</h4>
      </div>
    </>
  );
};

export default TitleSkill;
