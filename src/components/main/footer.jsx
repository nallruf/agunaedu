import React from "react";
import ImgFooter from "../../assets/img/logo/logo-name-biru.png";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import FooterMenu from "./footer/footermenu";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="bg-[#EFF8FF]">
      <div className="mx-[50px]">
        <div className="pt-14 pb-[45px] md:flex md:justify-between">
          <div className="flex flex-col sm:justify-between sm:flex-row md:justify-start md:flex-col gap-4">
            <div className="w-[185px]">
              <img src={ImgFooter} alt="img-footer" draggable="false" />
            </div>
            <div>
              <h3 className="text-[#334054] text-xl">
                Mulai lakukan mentoring <br />
                menjelajahi dunia IT
              </h3>
            </div>
            <div>
              <button
                className="w-40 bg-[#1470EF] p-2 text-white rounded-[8px] py-[10px] text-xl font-semibold"
                onClick={() =>
                  (window.location.href = "mailto:agunaeduaja@gmail.com")
                }
              >
                Kontak Kami
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-10 space-x-0 sm:gap-0 sm:flex-row sm:space-x-40 mt-10 md:mt-0">
            <FooterMenu
              title="Aguna Edu"
              links={["Tentang Kami", "Testimonial"]}
            />
            <FooterMenu
              title="Layanan"
              links={["Course", "Event", "Challenge"]}
            />
            <FooterMenu
              title="Bantuan"
              links={["Kebijakan dan Privasi", "Syarat dan Ketentuan", "FaQ"]}
            />
          </div>
        </div>
        <div className="pb-5">
          <div className="border-[1.5px] border-[#D0D5DD]" />
          <div className="pt-10 pb-4 flex flex-col sm:flex-row justify-between items-center text-[#175CD3]">
            <div>
              <p className="text-lg font-semibold ">
                &copy; Aguna Edu {year}, PT Aguna
              </p>
            </div>
            <div className="flex space-x-5 text-3xl justify-center items-center mt-5 sm:mt-0">
              <a href="https://www.instagram.com/agunaedu/">
                <AiFillInstagram />
              </a>
              <a href="https://www.tiktok.com/agunaedu/">
                <FaTiktok />
              </a>
              <a href="https://www.facebook.com/agunaedu/">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
