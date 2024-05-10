import React from "react";
import { NavLink } from "react-router-dom";

const FooterMenu = ({ title, links }) => (
  <div className="flex flex-col">
    <div className="mb-4">
      <h6 className="text-xl font-semibold text-[#175CD3]">{title}</h6>
    </div>
    <div className="flex flex-col gap-2 text-[#334054] text-base">
      {links.map((link, index) => (
        <NavLink key={index} to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>
          {link}
        </NavLink>
      ))}
    </div>
  </div>
);

export default FooterMenu;
