import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import LogoAguna from "../../../assets/img/logo/logo-name-biru.png";
import LogoBiru from "../../../assets/img/logo/logo-biru.png";
import ImgAvatar from "../../../assets/img/team/avatar.jpg";
import { RiHome6Line } from "react-icons/ri";
import { LuBarChart2, LuSettings2, LuLogOut } from "react-icons/lu";
import { CiCalendar, CiBookmarkCheck, CiSearch } from "react-icons/ci";
import { PiMedal } from "react-icons/pi";
import { useAuth } from "../../../hooks/useauth";
import axios from "axios";
import { toast } from "react-hot-toast";
import useProfile from "../../../hooks/useProfile";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { logout, user } = useAuth();
  const { profile } = useProfile(user);

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
      name: "Dashboard",
      icon: <RiHome6Line size={24} />,
      link: "/user/dashboard",
    },
    {
      name: "Course",
      icon: <LuBarChart2 size={24} />,
      link: "/user/course",
    },
    {
      name: "Material",
      icon: <LuBarChart2 size={24} />,
      link: "/user/course-material",
    },
    { name: "Event", icon: <CiCalendar size={24} />, link: "/user/event" },
    { name: "Challenge", icon: <PiMedal size={24} />, link: "/user/challenge" },
    {
      name: "Transaksi",
      icon: <CiBookmarkCheck size={24} />,
      link: "/user/transaction",
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
    <div className="min-h-screen border-r border-[#EAECF0] w-[80px] md:w-[260px] px-5 py-8 shadow-lg flex flex-col justify-between transition-all duration-300">
      <div className="flex flex-col gap-6 items-center md:items-start">
        <Link to={"/"}>
          <img
            src={isMobile ? LogoBiru : LogoAguna}
            alt="logo"
            draggable="false"
            className="w-[30px] md:w-[130px]"
          />
        </Link>
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch className="h-6 w-6 text-iconInput" />
          </div>
          <input
            type="text"
            placeholder="Cari"
            name="search"
            id="search"
            className="w-full border border-borderPrimary rounded-[8px] px-[14px] py-[10px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm pl-10"
          />
        </div>
        <div>
          <ul className="text-textLabel font-semibold">
            {menu.map((navi, index) => {
              const isActive = location.pathname === navi.link;
              return (
                <Link key={index} to={navi.link}>
                  <li
                    className={`mb-1 flex flex-col md:flex-row items-center md:gap-3 py-2 px-3 rounded-lg ${
                      isActive
                        ? "bg-[#F9FAFB] text-textPrimary"
                        : "text-textLabel"
                    }`}
                  >
                    <div className={`${isActive ? "text-primaryBlue" : ""}`}>
                      {navi.icon}
                    </div>
                    <div className="hidden md:block">{navi.name}</div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link to={"/user/settings"}>
          <div
            className={`flex flex-col md:flex-row items-center md:gap-3 py-2 px-3 rounded-lg font-semibold ${
              location.pathname === "/user/settings"
                ? "bg-[#F9FAFB] text-textPrimary"
                : "text-textLabel"
            }`}
          >
            <LuSettings2
              size={24}
              className={`${
                location.pathname === "/user/settings" ? "text-primaryBlue" : ""
              }`}
            />
            <div className="hidden md:block">Pengaturan</div>
          </div>
        </Link>
        <div className="border-t border-[#EAECF0]">
          <div className="pt-[25px] flex flex-col md:flex-row items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <img
                src={
                  profile?.imageUrl
                    ? `${import.meta.env.VITE_PUBLIC_URL}/images/${
                        profile.imageUrl
                      }`
                    : ImgAvatar
                }
                alt="img-profile"
                draggable="false"
                className=" w-10 rounded-full"
              />
              <div className="flex flex-col">
                <h2 className="text-sm font-semibold text-textLabel">
                  {profile?.username || "User Aguna"}
                </h2>
                <h4 className="text-xs text-textTertiary">
                  {profile?.email || "dummy@gmail.com"}
                </h4>
              </div>
            </div>
            <button className="text-textLabel" onClick={handleLogout}>
              <LuLogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
