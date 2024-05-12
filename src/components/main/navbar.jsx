import React, { useState } from "react";
import Logo from "../../assets/img/logo/logo-name-biru.png";
import { Link } from "react-router-dom";
import Menu from "./navbar/menu";
import Tombol from "./navbar/tombol";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border">
      <div className="md:flex hidden">
        <div className="grid grid-cols-2 mx-[32px] ">
          <div className="flex justify-between">
            <div className="z-50 p-5 md:w-auto w-full">
              <img src={Logo} alt="logo" />
            </div>
            <div className="flex gap-10 pr-10 ">
              <Menu />
            </div>
          </div>

          <div className="flex justify-end gap-4 p-4">
            <div>
              <button
                className="items-center rounded-xl font-semibold  px-4 py-2 bg-white text-primary"
                onClick={() => navigate("/auth/login")}
              >
                Masuk
              </button>
            </div>
            <div>
              <button
                className="items-center rounded-xl font-semibold  px-4 py-2
              bg-primaryBlue text-white"
                onClick={() => navigate("/auth/register")}
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
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
          <Menu />
          <div className="py-5 flex items-center">
            <div>
              <button
                className="items-center rounded-xl font-semibold  px-4 py-2 bg-white text-primary"
                onClick={() => navigate("/auth/login")}
              >
                Masuk
              </button>
            </div>
            <div>
              <button
                className="items-center rounded-xl font-semibold  px-4 py-2
              bg-primaryBlue text-white"
                onClick={() => navigate("/auth/register")}
              >
                Daftar
              </button>
            </div>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
