import React, { useState } from "react";
import Logo from "../../assets/img/logo/logo-name-biru.png";
import Menu from "./navbar/menu";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b-2">
      <div className="grid grid-cols-2 mx-[32px] py-2">
        <div className="flex items-center justify-between">
          <div className="z-50 md:w-auto w-full pt-2">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          </div>
          <div className="hidden md:flex items-center gap-5 pr-10">
            <Menu />
          </div>
        </div>
        <div className="hidden md:flex justify-end gap-4 p-4">
          <div>
            <button
              className="items-center rounded-xl font-semibold px-4 py-2 bg-white text-primary"
              onClick={() => navigate("/auth/login")}
            >
              Masuk
            </button>
          </div>
          <div>
            <button
              className="items-center rounded-xl font-semibold px-4 py-2 bg-primaryBlue text-white"
              onClick={() => navigate("/auth/register")}
            >
              Daftar
            </button>
          </div>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 md:hidden flex items-center justify-end text-primaryBlue"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      <div>
        {nav && (
          <ul
            className={`
            md:hidden bg-white absolute w-full py-10
          `}
          >
            <li className="mx-[32px]">
              <Menu />
              <div className="py-5 flex gap-3">
                <div>
                  <button
                    className="items-center rounded-xl font-semibold px-4 py-2 border-borderSecondary border"
                    onClick={() => navigate("/auth/login")}
                  >
                    Masuk
                  </button>
                </div>
                <div>
                  <button
                    className="items-center rounded-xl font-semibold px-4 py-[9px] bg-primaryBlue text-white"
                    onClick={() => navigate("/auth/register")}
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
