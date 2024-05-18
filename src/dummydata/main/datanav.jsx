import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RiCodeView } from "react-icons/ri";
import { PiPenNib } from "react-icons/pi";
import { FiUser } from "react-icons/fi";

export const dataNav = [
  {
    id: 1,
    name: "Beranda",
    icon: <RiHomeLine />,
    linkMenu: "/",
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
          { name: "Hustler", link: "/course/hustler", icon3: <FiUser /> },
          { name: "Hipster", link: "/course/hipster", icon3: <PiPenNib /> },
          { name: "Hacker", link: "/course/hacker", icon3: <RiCodeView /> },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Event",
    linkMenu: "/event",
    icon: <CiCalendar />,
  },
  {
    id: 4,
    name: "Challenge",
    linkMenu: "/challenge",
    icon: <FiAward />,
  },
];
