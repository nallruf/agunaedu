import React, { useState } from "react";
import CardRole from "../../main/alur/cardrole";
import { dataCardWeb } from "../../../dummydata/course/datacardweb";
import CategoryWeb from "./categoryweb";

const SkillWeb = () => {
  const [activeCategory, setActiveCategory] = useState("Front End Web");
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const DataCardWeb = dataCardWeb.filter((tes) =>
    tes.toLowerCase().includes(activeCategory.toLowerCase())
  );

  return (
    <section>
      <div className="absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] w-[600px] h-[600px] rounded-full bg-secondaryBlue" />
      <div className="container mx-auto px-10 z-10 relative">
        <div className="top-0 translate-y-[-8px]">
          <CategoryWeb
            icon={<FaLaptop />}
            skill="Front End Web"
            isActive={activeCategory === "Front End Web"}
            onClick={() => handleCategoryClick("Front End Web")}
          />
          <CategoryWeb
            icon={<FaLaptop />}
            upgrade="Back-End Web"
            isActive={activeCategory === "Back-End Web"}
            onClick={() => handleCategoryClick("Back-End Web")}
          />
          <CategoryWeb
            icon={<FaLaptop />}
            upgrade="Full Stack Web"
            isActive={activeCategory === "Full Stack Web"}
            onClick={() => handleCategoryClick("Full Stack Web")}
          />
        </div>
        <div className="flex justify-between md:flex-row ">
          <div
            className="grid md:grid-cols-2 mt-10 gap-3 justify-end"
            data-aos="zoom-in"
          >
            {DataCardWeb.map((item) => (
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillWeb;
