import React, { useState } from "react";
import CardRole from "../../main/alur/cardrole";
import {
  dataCardWeb,
  dataSideWeb,
} from "../../../dummydata/course/datacardweb";
import { FaLaptop } from "react-icons/fa";
import Category from "../../main/upgrade/category";
import TitleSkill from "./titleskill";

const SkillWeb = () => {
  const [activeCategory, setActiveCategory] = useState("Front End Web");
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredDataCardWeb = dataCardWeb.filter(({ tes }) =>
    tes.some((test) =>
      test.toLowerCase().includes(activeCategory.toLowerCase())
    )
  );

  const filteredDataTitle = dataSideWeb.filter(({ title }) =>
    title.toLowerCase().includes(activeCategory.toLowerCase())
  );

  return (
    <section
      className="bg-primaryBlue relative overflow-hidden h-screen"
      data-aos="fade-right"
    >
      <div className="absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] w-[600px] h-[600px] rounded-full bg-secondaryBlue" />
      <div className="container mx-auto px-10 z-10 relative">
        <div className="top-0 translate-y-[-8px]">
          <Category
            icon={<FaLaptop />}
            upgrade="Front End Web"
            isActive={activeCategory === "Front End Web"}
            onClick={() => handleCategoryClick("Front End Web")}
          />
          <Category
            icon={<FaLaptop />}
            upgrade="Back End Web"
            isActive={activeCategory === "Back End Web"}
            onClick={() => handleCategoryClick("Back End Web")}
          />
          <Category
            icon={<FaLaptop />}
            upgrade="Full Stack Web"
            isActive={activeCategory === "Full Stack Web"}
            onClick={() => handleCategoryClick("Full Stack Web")}
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="mt-10">
            {filteredDataTitle.map((item, index) => (
              <TitleSkill key={index} {...item} />
            ))}
          </div>
          <div className="flex gap-10">
            {filteredDataCardWeb.map((item) => (
              <CardRole key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillWeb;
