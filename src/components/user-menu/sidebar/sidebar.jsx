import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import LogoAguna from "../../../assets/img/logo/logo-name-biru.png";
import ImgProfile from "../../../assets/img/team/ulum.png";
import { RiHome6Line } from "react-icons/ri";
import { LuBarChart2, LuSettings2, LuLogOut } from "react-icons/lu";
import { CiCalendar, CiBookmarkCheck, CiSearch } from "react-icons/ci";
import { PiMedal } from "react-icons/pi";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menu = [
    {
      name: "Dashboard",
      icon: <RiHome6Line size={24} />,
      link: "/user/dashboard",
    },
    {
      name: "Mentoring",
      icon: <LuBarChart2 size={24} />,
      link: "/user/mentoring",
    },
    { name: "Event", icon: <CiCalendar size={24} />, link: "/user/event" },
    { name: "Challenge", icon: <PiMedal size={24} />, link: "/user/challenge" },
    {
      name: "Transaksi",
      icon: <CiBookmarkCheck size={24} />,
      link: "/user/transaction",
    },
  ];

  const handleLogout = () => {
    //  ubah jika sudah ada isLoggednya
    navigate("/");
  };

  return (
    <div className="min-h-screen border-r border-[#EAECF0] w-[312px] px-5 py-8 shadow-lg outline-none flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <img
          src={LogoAguna}
          alt="logo"
          draggable="false"
          className="w-[130px]"
        />
        <div className="relative">
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
                    className={`mb-1 flex flex-row items-center gap-3 py-2 px-3 rounded-lg ${
                      isActive
                        ? "bg-[#F9FAFB] text-textPrimary"
                        : "text-textLabel"
                    }`}
                  >
                    <div className={`${isActive ? "text-primaryBlue" : ""}`}>
                      {navi.icon}
                    </div>
                    <div>{navi.name}</div>
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
            className={`flex items-center gap-3 py-2 px-3 rounded-lg font-semibold ${
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
            Pengaturan
          </div>
        </Link>
        <div className="border-t border-[#EAECF0]">
          <div className="pt-[25px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={ImgProfile}
                alt="img-profile"
                draggable="false"
                className="w-10 rounded-full"
              />
              <div className="flex flex-col">
                <h2 className="text-sm font-semibold text-textLabel">Ulum</h2>
                <h4 className="text-xs text-textTertiary">Ulum@gmail.com</h4>
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
