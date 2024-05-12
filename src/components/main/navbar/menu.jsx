import React from "react";
import { Link } from "react-router-dom";
import { dataNav } from "../../../dummydata/datanav";

const Menu = () => {
  return (
    <>
      {dataNav.map((link) => (
        <div key={link.id}>
          <div className="flex items-center text-left md:cursor-pointer group hover:scale-105 duration-200">
            {link.icon}
            <div className="flex items-center">
              <h1
                className="py-5 px-2 cursor-pointer capitalize font-medium
         text-gray-800"
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
                              className="hover:text-primaryBlue"
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

export default Menu;
