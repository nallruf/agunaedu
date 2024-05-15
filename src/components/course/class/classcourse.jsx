import React from "react";
import CardRole from "../../main/alur/cardrole";

const ClassCourse = ({ kelas, data }) => (
  <>
    <div className="container mx-auto px-10">
      <h1 className="text-textPrimary text-2xl font-semibold mb-7">{kelas}</h1>
      <div className="pb-20 md:pb-60 md:flex w-fit space-y-10 md:space-y-0 md:gap-10">
        {data.map((item) => (
          <CardRole
            key={item.id}
            titlecard={item.titlecard}
            desccard={item.desccard}
            icon1={item.icon1}
            icon2={item.icon2}
            icon3={item.icon3}
            tes={item.tes}
            img={item.img}
            level={item.level}
            rating={item.rating}
            isLocked={item.isLocked}
          />
        ))}
      </div>
    </div>
  </>
);

export default ClassCourse;
