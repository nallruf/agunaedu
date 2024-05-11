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
    // <nav className="bg-white">
    //   <div className="flex items-center font-medium justify-between mx-auto">
    //     <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
    //       <img src={Logo} alt="logo" className="md:cursor-pointer h-9 " />
    //     </div>
    //     <div className="mx-auto justify-between">
    //       <ul className="md:flex hidden uppercase items-center gap-8  ">
    //         <Menu />
    //         <div className="space-x-12 hidden lg:flex items-center">
    //           <Tombol />
    //         </div>
    //       </ul>
    //     </div>
    //     {/*Mobile*/}
    //     <div
    //       onClick={() => setNav(!nav)}
    //       className="cursor-pointer pr-4 z-10 md:hidden flex flex-col items-center"
    //     >
    //       {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    //     </div>

    //     {nav && (
    //       <ul
    //         className={`
    //   md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
    // `}
    //       >
    //         <li>
    //           <Link to="/" className="py-7 px-3 inline-block">
    //             Home
    //           </Link>
    //         </li>
    //         <Menu />
    //         <div className="py-5">
    //           <Tombol />
    //         </div>
    //       </ul>
    //     )}
    //   </div>
    // </nav>
    <>
      <nav className="bg-primaryBlue">
        <div className="grid grid-cols-2 mx-[32px]">
          <div className="flex justify-between">
            <div>logo</div>
            <div className="flex gap-10 pr-10">
              <a href="">beranda</a>
              <a href="">course</a>
              <a href="">event</a>
              <a href="">challeng</a>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <div>
              <button onClick={() => navigate("/auth/login")}>Masuk</button>
            </div>
            <div>
              <button onClick={() => navigate("/auth/register")}>Daftar</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
