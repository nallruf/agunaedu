import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";

const FooterMenu = ({ title, links }) => (
  <div className="flex flex-col">
    <div className="mb-4">
      <h6 className="text-xl font-semibold text-textSecondary">{title}</h6>
    </div>
    <div className="flex flex-col gap-2 text-textLabel text-base">
      {links.map((link, index) => (
        // link.scrollTo ? (
        //   <Link
        //     key={index}
        //     to={link.scrollTo}
        //     smooth={true}
        //     duration={500}
        //     className="cursor-pointer"
        //   >
        //     {link.name}
        //   </Link>
        // ) : (
        //   <NavLink key={index} to={link.path}>
        //     {link.name}
        //   </NavLink>
        // )
        <NavLink key={index} to={link.path}>
          {link.name}
        </NavLink>
      ))}
    </div>
  </div>
);

export default FooterMenu;
