import React, { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import LogoBiru from "../../../assets/img/logo/logo-biru.png";
import { FiLock } from "react-icons/fi";

const SidebarMaterial = ({ materials }) => {
  const location = useLocation();
  const { userCourseId } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMaterialUnlocked = (index) => {
    if (index === 0) return true;
    return materials[index - 1].isViewed === 1;
  };

  return (
    <div className="min-h-screen border-r border-[#EAECF0] w-[60px] md:w-[312px] px-2 md:px-10 py-4 shadow-lg flex flex-col justify-between transition-all duration-300">
      <div className="flex flex-col gap-4 md:gap-8 items-center md:items-start md:mt-16">
        <Link to={"/user/dashboard"}>
          {isMobile ? (
            <img
              src={LogoBiru}
              alt="logo"
              draggable="false"
              className="w-[20px]"
            />
          ) : (
            <div className="flex items-center gap-[6px]">
              <IoIosArrowBack />
              <span className="text-textLabel text-sm">Dashboard</span>
            </div>
          )}
        </Link>
        <div className="w-full">
          <ul className="text-textLabel font-semibold gap-2 flex flex-col">
            {materials.map((material, index) => {
              const isActive = location.pathname.includes(
                `/user/course/${userCourseId}/material/${material.materialId}`
              );
              const isLocked = !isMaterialUnlocked(index);

              return isLocked ? (
                <li
                  key={index}
                  className={`mb-1 flex items-center py-3 px-2 rounded-xl border-2 gap-2 text-textLabel border-borderPrimary opacity-50 cursor-not-allowed`}
                >
                  <FiLock size={24} />
                  {!isMobile && (
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm">
                        {material.materialName}
                      </span>
                    </div>
                  )}
                </li>
              ) : (
                <Link
                  key={index}
                  to={`/user/course/${userCourseId}/material/${material.materialId}`}
                >
                  <li
                    className={`mb-1 flex items-center py-3 px-2 rounded-xl border-2 gap-2 ${
                      isActive
                        ? "bg-primaryBlue text-white border-primaryBlue"
                        : "text-textLabel border-borderPrimary"
                    }`}
                  >
                    <div
                      className={`mr-2 ${
                        isActive ? "text-white" : "text-primaryBlue"
                      }`}
                    >
                      <FaCirclePlay size={24} />
                    </div>
                    {!isMobile && (
                      <div className="flex flex-col">
                        <span className="text-xs md:text-sm">
                          {material.materialName}
                        </span>
                      </div>
                    )}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMaterial;
