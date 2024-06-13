import React from "react";
import TestiCard from "../../main/testi/testicard";
import { dataTesti } from "../../../dummydata/main/datatesti";

const TestiCourse = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="px-10 sm:px-20 md:px-40 pt-[90px] pb-[128px] z-10 relative">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold text-textPrimary">
            Apa Para Siswa Kami!
          </h1>
          <h3 className="text-textTertiary text-xl">
            Temukan berbagai review dari para siswa dan alumni kami!
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dataTesti.map((testi, index) => (
            <TestiCard key={index} {...testi} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestiCourse;
