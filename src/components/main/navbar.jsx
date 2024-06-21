import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/img/logo/logo-name-biru.png";
import Menu from "./navbar/menu";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ImgAvatar from "../../assets/img/team/avatar.jpg";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../hooks/useauth";
import useProfile from "../../hooks/useProfile";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, user, role } = useAuth();
  const { profile } = useProfile(user);

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

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/api/v1/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );
      if (response.status === 200) {
        logout();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error logging out", error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            {user ? (
              <>
                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center relative">
                    <img
                      src={
                        profile?.imageUrl
                          ? `${import.meta.env.VITE_PUBLIC_URL}/images/${
                              profile.imageUrl
                            }`
                          : ImgAvatar
                      }
                      alt="img-profile"
                      draggable="false"
                      className="rounded-full w-8 cursor-pointer"
                      onClick={toggleDropdown}
                    />
                  </div>
                  <div>
                    <h1 className="text-textLabel text-[14px] font-semibold">
                      Hi, {profile?.username || "User Aguna"}
                    </h1>
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute w-[240px] top-24 right-10 bg-white border border-gray-200 shadow-md rounded-lg">
                      <div className="text-textTertiary text-[14px] font-semibold py-2 px-4">
                        <div className="flex flex-col gap-4 py-2 px-3 items-start">
                          {role === "USER" && (
                            <button
                              onClick={() => navigate("/user/dashboard")}
                              className="hover:text-primaryBlue"
                            >
                              Dashboard
                            </button>
                          )}
                          {role === "ADMIN" && (
                            <button
                              onClick={() => navigate("/admin/dashboard")}
                              className="hover:text-primaryBlue"
                            >
                              Dashboard Admin
                            </button>
                          )}
                          <button
                            onClick={handleLogout}
                            className="hover:text-primaryBlue"
                          >
                            Keluar
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <motion.button
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  className="items-center rounded-xl font-semibold px-4 py-2 bg-white text-textTertiary"
                  onClick={() => navigate("/auth/login")}
                >
                  Masuk
                </motion.button>
                <motion.button
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  className="items-center rounded-xl font-semibold px-4 py-2 bg-primaryBlue text-white"
                  onClick={() => navigate("/auth/register")}
                >
                  Daftar
                </motion.button>
              </>
            )}
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
              {user ? (
                <>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center justify-center relative">
                      <img
                        src={
                          profile?.imageUrl
                            ? `${import.meta.env.VITE_PUBLIC_URL}/images/${
                                profile.imageUrl
                              }`
                            : ImgAvatar
                        }
                        alt="img-profile"
                        draggable="false"
                        className="rounded-full w-8 cursor-pointer"
                        onClick={toggleDropdown}
                      />
                    </div>
                    <div>
                      <h1 className="text-textLabel text-[14px] font-semibold">
                        Hi, {profile?.username || "User Aguna"}
                      </h1>
                    </div>
                    {isDropdownOpen && (
                      <div className="absolute w-[240px] top-[520px] md:top-24 md:right-10 bg-white border border-gray-200 shadow-md rounded-lg">
                        <div className="text-textTertiary text-[14px] font-semibold py-2 px-4">
                          <div className="flex flex-col gap-4 py-2 px-3 items-start">
                            {role === "USER" && (
                              <button
                                onClick={() => navigate("/user/dashboard")}
                                className="hover:text-primaryBlue"
                              >
                                Dashboard
                              </button>
                            )}
                            {role === "ADMIN" && (
                              <button
                                onClick={() => navigate("/admin/dashboard")}
                                className="hover:text-primaryBlue"
                              >
                                Dashboard Admin
                              </button>
                            )}
                            <button
                              onClick={handleLogout}
                              className="hover:text-primaryBlue"
                            >
                              Keluar
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
