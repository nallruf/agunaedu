import React from "react";
import TestiCard from "../../../components/main/testi/testicard";
import { dataTesti } from "../../../dummydata/main/datatesti";

const TestiCourse = () => {
  return (
    <section className="bg-white relative overflow-hidden" data-aos="zoom-in">
      <div className="container mx-auto pt-[90px] pb-[128px] px-10 z-10 relative">
        <div className="flex flex-col gap-3">
          <h1
            className="text-3xl font-semibold text-textPrimary"
            data-aos="fade-right"
          >
            Apa Para Siswa Kami!
          </h1>
          <h3 className="text-textTertiary text-xl" data-aos="fade-right">
            Temukan berbagai review dari para siswa dan alumni kami!
          </h3>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          data-aos="zoom-in"
        >
          {dataTesti.map((testi, index) => (
            <TestiCard key={index} {...testi} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestiCourse;
