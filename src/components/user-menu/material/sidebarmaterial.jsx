import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import LogoBiru from "../../../assets/img/logo/logo-biru.png";
import { useAuth } from "../../../hooks/useauth";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

const SidebarMaterial = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { logout, user } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menu = [
    {
      name: "Dasar JavaScript",
      duration: "45 Menit",
      icon: <FaCirclePlay size={24} />,
      link: "/user/course/jsbasic",
    },
    {
      name: "ReactJs Dasar",
      duration: "35 Menit",
      icon: <FaCirclePlay size={24} />,
      link: "/user/course/reactbasic",
    },
    {
      name: "Routing",
      duration: "45 Menit",
      icon: <FaCirclePlay size={24} />,
      link: "/user/course/routing",
    },
    {
      name: "Styling",
      duration: "35 Menit",
      icon: <FaCirclePlay size={24} />,
      link: "/user/course/styling",
    },
    {
      name: "Deploy & Pengujian",
      duration: "1 jam 23 Menit",
      icon: <FaCirclePlay size={24} />,
      link: "/user/course/deploytesting",
    },
  ];

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/api/v1/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );
      if (response.status === 200) {
        logout();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error logging out", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <div className="min-h-screen border-r border-[#EAECF0] w-[60px] md:w-[200px] px-2 py-4 shadow-lg flex flex-col justify-between transition-all duration-300">
      <div className="flex flex-col gap-4 items-center">
        <Link to={"/"}>
          {isMobile ? (
            <img
              src={LogoBiru}
              alt="logo"
              draggable="false"
              className="w-[20px]"
            />
          ) : (
            <div className="flex items-center gap-4">
              <IoIosArrowBack />
              <span className="text-textLabel text-sm">Dashboard</span>
            </div>
          )}
        </Link>
        <div className="w-full">
          <ul className="text-textLabel font-semibold gap-2 flex flex-col">
            {menu.map((navi, index) => {
              const isActive = location.pathname === navi.link;
              return (
                <Link key={index} to={navi.link}>
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
                      {navi.icon}
                    </div>
                    {!isMobile && (
                      <div className="flex flex-col">
                        <span className="text-xs md:text-sm">{navi.name}</span>
                        <span
                          className={`text-xs ${
                            isActive ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {navi.duration}
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
