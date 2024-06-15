import React, { useState, useEffect } from "react";
import CardRole from "../../main/alur/cardrole";
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
import axios from "axios";
import { useAuth } from "../../../hooks/useauth";
import { SiGitbook } from "react-icons/si";

const SkillPath = ({ pathId }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("");
  const [data, setData] = useState([]);
  const [role, setRole] = useState({});
  const [detailPath, setDetailPath] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rolesData = await axios.get(`/api/v1/public/landing/role`);
        const foundRole = rolesData.data.find((item) =>
          item.paths.some((p) => p.id === pathId)
        );

        if (foundRole) {
          const foundPath = foundRole.paths.find((item) => item.id === pathId);
          setRole(foundRole);
          setDetailPath(foundPath);

          const response = await axios.get(`/api/v1/auth/path/${pathId}`, {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          });
          setData(response.data);

          if (response.data.length > 0) {
            setActiveCategory(response.data[0].pathFocusName);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [pathId]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleButtonClick = () => {
    const activePath = data.find(
      ({ pathFocusName }) => pathFocusName === activeCategory
    );
    if (activePath) {
      const roleName = role.role_name ? role.role_name.toLowerCase() : "";
      const detailPathName = detailPath.name
        ? detailPath.name.split(" ")[0].toLowerCase()
        : "";
      navigate(
        `/course/${roleName}/${detailPathName}/${activePath.pathFocusName
          .toLowerCase()
          .replace(/\s+/g, "-")}`
      );
    }
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        LOADING .......
      </div>
    );
  }

  const filteredData = data.find(
    ({ pathFocusName }) => pathFocusName === activeCategory
  );

  const capitalizeFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <section className="bg-primaryBlue relative overflow-hidden">
      <div className="absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] w-[600px] h-[600px] rounded-full bg-secondaryBlue" />
      <div className="px-10 sm:px-20 md:px-40 z-10 relative">
        <div className="top-0 translate-y-[-8px] flex gap-4">
          {data.map(({ pathFocusName }) => (
            <Category
              key={pathFocusName}
              icon={
                pathFocusName.toLowerCase().includes("frontend") ? (
                  <FaLaptop />
                ) : pathFocusName.toLowerCase().includes("backend") ? (
                  <CgDatabase />
                ) : (
                  <BiCodeBlock />
                )
              }
              upgrade={pathFocusName}
              isActive={activeCategory === pathFocusName}
              onClick={() => handleCategoryClick(pathFocusName)}
            />
          ))}
        </div>
        <div className="md:flex-row">
          <div className="mt-10">
            {filteredData && (
              <TitleSkill
                key={filteredData.pathFocusId}
                title={filteredData.pathFocusName}
                desc={`Berbagai course khusus ${filteredData.pathFocusName.toLowerCase()} yang bisa kamu pelajari!`}
              />
            )}
          </div>
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
        {filteredData &&
          filteredData.courses.map((item, index) => (
            <SwiperSlide className="mt-10" key={index}>
              <CardRole
                titlecard={item.courseName}
                img={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                  item.courseImageUrl
                }`}
                desccard={item.description}
                icon2={<SiGitbook />}
                level={`${capitalizeFirstLetter(item.courseLevel)} Level`}
              />
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

export default SkillPath;
