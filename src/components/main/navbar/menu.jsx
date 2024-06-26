import React from "react";
import { Link, useLocation } from "react-router-dom";
import { dataNav } from "../../../dummydata/main/datanav";

const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {dataNav.map(({ name, icon, icon2, linkMenu, submenu, sublinks }) => (
        <div key={name}>
          <div className="flex items-center text-left md:cursor-pointer group hover:scale-105 duration-200">
            <div
              className={`flex items-center ${
                currentPath === linkMenu ? "text-primaryBlue" : "text-iconInput"
              }`}
            >
              {icon}
              <Link to={linkMenu}>
                <h1
                  className={`py-5 px-2 cursor-pointer capitalize font-medium ${
                    currentPath === linkMenu
                      ? "text-primaryBlue"
                      : "text-iconInput"
                  }`}
                >
                  {name}
                </h1>
              </Link>
              {icon2}
              {submenu && (
                <div className="absolute top-10 hidden group-hover:block hover:block ">
                  <div className="py-3 ">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white pl-5 pr-10 py-5 rounded-xl">
                    {sublinks.map(({ sublink }, index) => (
                      <div key={index}>
                        {sublink.map(({ name, link, icon3 }) => (
                          <div
                            key={name}
                            className={`my-2.5 font-medium ${
                              currentPath === link
                                ? "text-primaryBlue"
                                : "text-iconInput"
                            }`}
                          >
                            <Link to={link} className="hover:text-primaryBlue">
                              <div className="flex items-center gap-2">
                                {icon3}
                                {name}
                              </div>
                            </Link>
                          </div>
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

export default Menu;
