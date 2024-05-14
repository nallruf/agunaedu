import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/img/logo/logo-name-biru.png";
import Menu from "./navbar/menu";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white ${
        scrolled ? "shadow-md" : ""
      } z-50`}
    >
      <div className="mx-[32px] py-2">
        <div className="grid grid-cols-2 items-center h-16">
          <div className="flex items-center justify-between">
            <Link
              to="hero"
              className="flex-shrink-0 cursor-pointer pt-2"
              spy={true}
              smooth={true}
              offset={-70}
            >
              <img
                src={Logo}
                alt="logo-aguna"
                draggable="false"
                className="h-9"
              />
            </Link>
            <div className="hidden md:block pr-10">
              <ul className="flex space-x-6">
                <Menu />
              </ul>
            </div>
          </div>
          <div className="hidden md:flex justify-end gap-4 p-4">
            <div>
              <motion.button
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.2 }}
                className="items-center rounded-xl font-semibold px-4 py-2 bg-white text-textTertiary"
                onClick={() => navigate("/auth/login")}
              >
                Masuk
              </motion.button>
            </div>
            <div>
              <motion.button
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.2 }}
                className="items-center rounded-xl font-semibold px-4 py-2 bg-primaryBlue text-white"
                onClick={() => navigate("/auth/register")}
              >
                Daftar
              </motion.button>
            </div>
          </div>

          <div
            onClick={handleMenu}
            className="md:hidden cursor-pointer text-primaryBlue top-10 z-50 justify-end flex"
          >
            {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>

        {menu && (
          <div className="md:hidden">
            <ul className="py-5 text-lg space-y-3">
              <Menu />
            </ul>
            <div className="py-5 flex gap-3">
              <div>
                <motion.button
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  className="items-center rounded-xl font-semibold px-4 py-2 text-iconInput"
                  onClick={() => navigate("/auth/login")}
                >
                  Masuk
                </motion.button>
              </div>
              <div>
                <motion.button
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  className="items-center rounded-xl font-semibold px-4 py-[9px] bg-primaryBlue text-white"
                  onClick={() => navigate("/auth/register")}
                >
                  Daftar
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
