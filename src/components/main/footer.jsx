import React from "react";
import ImgFooter from "../../assets/img/logo/logo-name-biru.png";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import FooterMenu from "./footer/footermenu";
import { motion } from "framer-motion";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <footer className="bg-quatenaryBlue">
        <div className="mx-[50px]">
          <div className="pt-14 pb-[45px] md:flex md:justify-between">
            <div className="flex flex-col sm:justify-between sm:flex-row md:justify-start md:flex-col gap-4">
              <div className="w-[185px]">
                <img src={ImgFooter} alt="img-footer" draggable="false" />
              </div>
              <div>
                <h3 className="text-textLabel text-xl">
                  Mulai lakukan mentoring <br />
                  menjelajahi dunia IT
                </h3>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="w-40 bg-primaryBlue text-white rounded-[8px] py-[10px] text-xl font-semibold"
                  onClick={() =>
                    (window.location.href = "mailto:agunaeduaja@gmail.com")
                  }
                >
                  Kontak Kami
                </motion.button>
              </div>
            </div>
            <div className="flex flex-col gap-10 space-x-0 sm:gap-0 sm:flex-row sm:space-x-40 mt-10 md:mt-0">
              <FooterMenu
                title="Aguna Edu"
                links={[
                  { name: "Tentang Kami", scrollTo: "hero" },
                  { name: "Testimonial", scrollTo: "testi" },
                ]}
              />
              <FooterMenu
                title="Layanan"
                links={[
                  { name: "Course", scrollTo: "alur" },
                  { name: "Event", path: "/event" },
                  { name: "Challenge", path: "/challenge" },
                ]}
              />
              <FooterMenu
                title="Bantuan"
                links={[
                  { name: "Kebijakan dan Privasi", scrollTo: "hero" },
                  { name: "Syarat dan Ketentuan", scrollTo: "hero" },
                  { name: "FaQ", scrollTo: "faq" },
                ]}
              />
            </div>
          </div>
          <div className="pb-5">
            <div className="border-[1.5px] border-borderPrimary" />
            <div className="pt-10 pb-4 flex flex-col sm:flex-row justify-between items-center text-textSecondary">
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
    </>
  );
};

export default Footer;
