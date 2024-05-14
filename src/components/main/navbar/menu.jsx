import React from "react";
import { Link } from "react-router-dom";
import { dataNav } from "../../../dummydata/main/datanav";

const Menu = () => {
  return (
    <>
      {dataNav.map((linkGroup) => (
        <div key={linkGroup.name}>
          <div className="flex items-center text-left md:cursor-pointer group hover:scale-105 duration-200 text-iconInput">
            <div className="flex items-center hover:text-primaryBlue">
              {linkGroup.icon}
              <Link to={linkGroup.linkMenu}>
                <h1 className="py-5 px-2 cursor-pointer capitalize font-medium text-iconInput hover:text-primaryBlue">
                  {linkGroup.name}
                </h1>
              </Link>
              {linkGroup.icon2}
              {linkGroup.submenu && (
                <div className="absolute top-10 hidden group-hover:block hover:block ">
                  <div className="py-3 ">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white pl-5 pr-10 py-5 rounded-xl">
                    {linkGroup.sublinks.map((sublinkGroup, index) => (
                      <div key={index}>
                        {sublinkGroup.sublink.map((slink) => (
                          <div
                            key={slink.name}
                            className=" text-iconInput my-2.5 font-medium"
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-primaryBlue"
                            >
                              <div className="flex items-center gap-2">
                                {slink.icon3}
                                {slink.name}
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
