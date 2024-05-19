import React, { useState } from "react";
import CardRole from "../../main/alur/cardrole";
import {
  dataCardWeb,
  dataSideWeb,
} from "../../../dummydata/course/datacardweb";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { CgDatabase } from "react-icons/cg";
import { FaLaptop } from "react-icons/fa";
import Category from "../../main/upgrade/category";
import TitleSkill from "./titleskill";
import { BiCodeBlock } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SkillWeb = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("Front End Web");
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleButtonClick = () => {
    let path = "";
    switch (activeCategory) {
      case "Front End Web":
        path = "/course/hacker/path-web/fe";
        break;
      case "Back End Web":
        path = "/course/hacker/path-web/be";
        break;
      case "Full Stack Web":
        path = "/course/hacker/path-web/fs";
        break;
      default:
        path = "/course/hacker/path-web/fe";
    }
    navigate(path);
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
      className="bg-primaryBlue relative overflow-hidden"
      // data-aos="fade-right"
    >
      <div className="absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] w-[600px] h-[600px] rounded-full bg-secondaryBlue" />
      <div className="px-10 sm:px-20 md:px-40 z-10 relative">
        <div className="top-0 translate-y-[-8px]">
          <Category
            icon={<FaLaptop />}
            upgrade="Front End Web"
            isActive={activeCategory === "Front End Web"}
            onClick={() => handleCategoryClick("Front End Web")}
          />
          <Category
            icon={<CgDatabase />}
            upgrade="Back End Web"
            isActive={activeCategory === "Back End Web"}
            onClick={() => handleCategoryClick("Back End Web")}
          />
          <Category
            icon={<BiCodeBlock />}
            upgrade="Full Stack Web"
            isActive={activeCategory === "Full Stack Web"}
            onClick={() => handleCategoryClick("Full Stack Web")}
          />
        </div>
        <div className="md:flex-row">
          <div className="mt-10">
            {filteredDataTitle.map((item, index) => (
              <TitleSkill key={index} {...item} />
            ))}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-row-4 ">
            <div className="flex flex-col gap-10 md:flex-row mt-10">
              {filteredDataCardWeb.map((item) => (
                <CardRole key={item.id} {...item} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <Swiper
        className="pl-10 sm:pl-20 md:pl-40 pb-20 md:pb-72"
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {filteredDataCardWeb.map((item, index) => (
          <SwiperSlide className="mt-10" key={index}>
            <CardRole {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end pr-10 sm:pr-20 md:pr-40 pb-10 z-10 relative">
        <motion.button
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.2 }}
          className="text-white flex items-center gap-3"
          onClick={handleButtonClick}
        >
          <span className="text-sm font-semibold">Lihat Detail</span>
          <FaArrowRight className="text-base" />
        </motion.button>
      </div>
    </section>
  );
};

export default SkillWeb;
