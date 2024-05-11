import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const links = [
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
          Head: "Course",
          sublink: [
            { name: "Web-Dev", link: "/" },
            { name: "Mobile-Dev", link: "/" },
            { name: "UI/IX", link: "/" },
            { name: "Front-End", link: "/" },
            { name: "Back-End", link: "/" },
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

  return (
    <>
      {links.map((link) => (
        <div key={link.id}>
          <div className="flex items-center text-left md:cursor-pointer group">
            {link.icon}
            <div className="flex items-center">
              <h1
                className="py-5 px-2 cursor-pointer capitalize font-medium
         text-gray-800 hover:scale-105 duration-200"
              >
                {link.name}
              </h1>
              {link.icon2}
              {link.submenu && (
                <div className="absolute top-10 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            key={slink.name}
                            className="text-sm text-gray-600 my-2.5"
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-gray-500"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
