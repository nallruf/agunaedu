import React, { useState } from "react";
import Logo from "../../../assets/img/logo/logo-name-biru.png";
import { Link } from "react-router-dom";
import NavLinks from "../Navbar/NavLinks.jsx";
import ButtonNav from "./ButtonNav.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-between mx-auto">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9 " />
        </div>
        <div className="mx-auto justify-between">
          <ul className="md:flex hidden uppercase items-center gap-8  ">
            <NavLinks />
            <div className="space-x-12 hidden lg:flex items-center">
              <ButtonNav />
            </div>
          </ul>
        </div>
        {/*Mobile*/}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 md:hidden flex flex-col items-center"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul
            className={`
      md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
    `}
          >
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <div className="py-5">
              <ButtonNav />
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
