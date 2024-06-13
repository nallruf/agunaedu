import React from "react";
import { NavLink } from "react-router-dom";

const FooterMenu = ({ title, links }) => (
  <div className="flex flex-col">
    <div className="mb-4">
      <h6 className="text-xl font-semibold text-textSecondary">{title}</h6>
    </div>
    <div className="flex flex-col gap-2 text-textLabel text-base">
      {links.map((link, index) => (
        <NavLink key={index} to={link.path}>
          {link.name}
        </NavLink>
      ))}
    </div>
  </div>
);

export default FooterMenu;
