import React from "react";
import { DataCardMandiri } from "../../../dummydata/course/datacardmandiri";
import CardRole from "../../main/alur/cardrole";
const KelasMandiri = () => {
  return (
    <div className="grid md:grid-cols-3 mt-[50px] gap-y-10 md:gap-y-60 md:mb-80">
      {DataCardMandiri.map((item, index) => (
        <CardRole key={index} {...item} />
      ))}
    </div>
  );
};

export default KelasMandiri;
