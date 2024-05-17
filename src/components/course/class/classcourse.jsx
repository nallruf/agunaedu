import React from "react";
import CardRole from "../../main/alur/cardrole";

const ClassCourse = ({ kelas, data }) => (
  <section className="px-10 sm:px-20 md:px-40" data-aos="zoom-in">
    <h1 className="text-textPrimary text-2xl font-semibold mb-7">{kelas}</h1>
    <div className="pb-20 md:pb-60 md:flex w-fit space-y-10 md:space-y-0 md:gap-10">
      {data.map((item) => (
        <CardRole key={item.id} {...item} />
      ))}
    </div>
  </section>
);

export default ClassCourse;
