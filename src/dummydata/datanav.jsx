import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export const dataNav = [
  {
    id: 1,
    name: "Beranda",
    icon: <RiHomeLine />,
  },
  {
    id: 2,
    name: "Course",
    submenu: true,
    icon: <IoBookOutline />,
    icon2: <IoIosArrowDown />,
    sublinks: [
      {
        sublink: [
          { name: "Hustler", link: "/" },
          { name: "Hipster", link: "/" },
          { name: "Hacker", link: "/" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Event",
    icon: <CiCalendar />,
  },
  {
    id: 4,
    name: "Challenge",
    icon: <FiAward />,
  },
];
