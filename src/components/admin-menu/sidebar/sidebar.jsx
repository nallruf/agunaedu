import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import LogoAguna from "../../../assets/img/logo/logo-name-biru.png";
import LogoBiru from "../../../assets/img/logo/logo-biru.png";
import ImgProfile from "../../../assets/img/team/ulum.png";
import { RiHome6Line } from "react-icons/ri";
import { LuSettings2, LuLogOut, LuUserCheck2 } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { PiMedal } from "react-icons/pi";
import { FiUsers, FiBookOpen } from "react-icons/fi";
import { AiOutlineUsergroupAdd, AiOutlineTool } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { TbSquarePlus } from "react-icons/tb";
import { GrGroup } from "react-icons/gr";
import { CiBookmarkCheck } from "react-icons/ci";
import { RiUser6Line } from "react-icons/ri";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isPenggunaDropdownOpen, setIsPenggunaDropdownOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Close dropdowns on route change
    setIsPenggunaDropdownOpen(false);
    setIsEventDropdownOpen(false);
  }, [location.pathname]);

  const menu = [
    {
      name: "Dashboard",
      icon: <RiHome6Line size={24} />,
      link: "/admin/dashboard",
    },
    {
      name: "Role",
      icon: <FiBookOpen size={24} />,
      link: "/admin/role",
    },
    {
      name: "Event",
      icon: <CiCalendar size={24} />,
      link: "#",
      dropdown: [
        {
          name: "Tambah Event",
          link: "/admin/event",
          icon: <TbSquarePlus size={24} />,
        },
        {
          name: "Jumlah Pendaftar",
          link: "/admin/event/registrants",
          icon: <GrGroup size={24} />,
        },
        {
          name: "Pembicara",
          link: "/admin/event/speaker",
          icon: <RiUser6Line size={24} />,
        },
      ],
    },
    {
      name: "Challenge",
      icon: <PiMedal size={24} />,
      link: "/admin/challenge",
    },
    {
      name: "Mentor",
      icon: <LuUserCheck2 size={24} />,
      link: "/admin/mentor",
    },
    {
      name: "Pengguna",
      icon: <FiUsers size={24} />,
      link: "/admin/users",
    },
    {
      name: "Skill & Tools",
      icon: <AiOutlineTool size={24} />,
      link: "/admin/skillandtools",
    },
    {
      name: "Transaksi",
      icon: <CiBookmarkCheck size={24} />,
      link: "/admin/transaksi",
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen border-r border-[#EAECF0] w-[80px] md:w-[260px] px-5 py-8 shadow-lg flex flex-col justify-between transition-all duration-300">
      <div className="flex flex-col gap-6 items-center md:items-start">
        <img
          src={isMobile ? LogoBiru : LogoAguna}
          alt="logo"
          draggable="false"
          className="w-[30px] md:w-[130px]"
        />

        <div>
          <ul className="text-textLabel font-semibold">
            {menu.map((navi, index) => {
              const isActive =
                location.pathname === navi.link ||
                (navi.dropdown &&
                  navi.dropdown.some(
                    (item) => location.pathname === item.link
                  ));
              const hasDropdown = navi.dropdown && navi.dropdown.length > 0;

              return (
                <div key={index} className="mb-1">
                  <Link
                    to={navi.link}
                    onClick={(e) => {
                      if (hasDropdown) {
                        e.preventDefault();
                        if (navi.name === "Event") {
                          setIsEventDropdownOpen(!isEventDropdownOpen);
                        } else {
                          setIsPenggunaDropdownOpen(!isPenggunaDropdownOpen);
                        }
                      }
                    }}
                  >
                    <li
                      className={`flex flex-col md:flex-row items-center md:gap-3 py-2 px-3 rounded-lg ${
                        isActive
                          ? "bg-[#F9FAFB] text-textPrimary"
                          : "text-textLabel hover:bg-[#F9FAFB] hover:text-textPrimary"
                      }`}
                    >
                      <div className={`${isActive ? "text-primaryBlue" : ""}`}>
                        {navi.icon}
                      </div>
                      <div className="hidden md:block">{navi.name}</div>
                      {hasDropdown && (
                        <div className="md:ml-auto">
                          {navi.name === "Event" ? (
                            isEventDropdownOpen ? (
                              <MdKeyboardArrowUp size={24} />
                            ) : (
                              <MdKeyboardArrowDown size={24} />
                            )
                          ) : isPenggunaDropdownOpen ? (
                            <MdKeyboardArrowUp size={24} />
                          ) : (
                            <MdKeyboardArrowDown size={24} />
                          )}
                        </div>
                      )}
                    </li>
                  </Link>
                  {(isEventDropdownOpen && navi.name === "Event") ||
                  (isPenggunaDropdownOpen && navi.name !== "Event")
                    ? hasDropdown && (
                        <ul className="pl-8">
                          {navi.dropdown.map((dropdownItem, dropdownIndex) => {
                            const isDropdownActive =
                              location.pathname === dropdownItem.link;

                            return (
                              <Link key={dropdownIndex} to={dropdownItem.link}>
                                <li
                                  className={`flex items-center gap-3 py-2 px-3 rounded-lg ${
                                    isDropdownActive
                                      ? "bg-[#F9FAFB] text-textPrimary"
                                      : "text-textLabel hover:bg-[#F9FAFB] hover:text-textPrimary"
                                  }`}
                                >
                                  <div
                                    className={`${
                                      isDropdownActive ? "text-primaryBlue" : ""
                                    }`}
                                  >
                                    {dropdownItem.icon}
                                  </div>
                                  {dropdownItem.name}
                                </li>
                              </Link>
                            );
                          })}
                        </ul>
                      )
                    : null}
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link to={"/admin/settings"}>
          <div
            className={`flex flex-col md:flex-row items-center md:gap-3 py-2 px-3 rounded-lg font-semibold ${
              location.pathname === "/admin/settings"
                ? "bg-[#F9FAFB] text-textPrimary"
                : "text-textLabel hover:bg-[#F9FAFB] hover:text-textPrimary"
            }`}
          >
            <LuSettings2
              size={24}
              className={`${
                location.pathname === "/admin/settings"
                  ? "text-primaryBlue"
                  : ""
              }`}
            />
            <div className="hidden md:block">Pengaturan</div>
          </div>
        </Link>
        <div className="border-t border-[#EAECF0]">
          <div className="pt-[25px] flex flex-col md:flex-row items-center justify-between">
            <div className="hidden md:flex items-center gap-2">
              <img
                src={ImgProfile}
                alt="img-profile"
                draggable="false"
                className=" w-10 rounded-full"
              />
              <div className="flex flex-col">
                <h2 className="text-sm font-semibold text-textLabel">Ulum</h2>
                <h4 className="text-xs text-textTertiary">Ulum@gmail.com</h4>
              </div>
            </div>
            <button
              className="text-textLabel hover:text-textPrimary"
              onClick={handleLogout}
            >
              <LuLogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
