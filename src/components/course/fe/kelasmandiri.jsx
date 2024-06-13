import React from "react";
import { DataCardMandiri } from "../../../dummydata/course/datacardmandiri";
import CardRole from "../../main/alur/cardrole";

const KelasMandiri = () => {
  return (
    <div>
      <div className=" md:grid-cols-2">
        <h1 className="text-5xl text-textPrimary font-semibold">
          Belajar Secara Mandiri!
        </h1>
        <p className="text-textTertiary mt-3">
          Aguna Edu menghadirkan berbagai kelas mandiri yang bisa kamu ikuti!
        </p>
      </div>
      <div className="grid md:grid-cols-3 mt-[50px] gap-y-10 md:gap-y-72 md:mb-80">
        {DataCardMandiri.map((item, index) => (
          <CardRole key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default KelasMandiri;
