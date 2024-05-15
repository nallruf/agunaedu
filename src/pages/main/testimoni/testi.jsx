import React from "react";
import TestiCard from "../../../components/main/testi/testicard";
import { dataTesti } from "../../../dummydata/main/datatesti";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TestiSection = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/auth/login");
  };
  return (
    <>
      <section
        className="bg-primaryBlue relative overflow-hidden"
        data-aos="zoom-in"
      >
        <div className="absolute bottom-0 left-0 transform translate-x-[-45%] w-[350px] h-[350px] rounded-full bg-secondaryBlue" />
        <div className="absolute top-0 right-0 transform translate-x-1/2 w-[200px] h-[200px] rounded-full bg-secondaryBlue" />
        <div className="container mx-auto pt-[90px] pb-[128px] px-10 z-10 relative">
          <div className="flex flex-col gap-3">
            <h1
              className="text-3xl font-semibold text-white"
              data-aos="fade-right"
            >
              Ulasan Para Siswa Kami!
            </h1>
            <h3 className="text-textQuote text-xl" data-aos="fade-right">
              Temukan berbagai review dari para mentee kami
            </h3>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            data-aos="zoom-in"
          >
            {dataTesti.map((testi, index) => (
              <TestiCard
                key={index}
                starCount={testi.starCount}
                feedback={testi.feedback}
                img={testi.img}
                namePerson={testi.namePerson}
                job={testi.job}
              />
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <motion.button
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.2 }}
              className="text-white flex items-center gap-3"
              data-aos="fade-right"
              onClick={handleButton}
            >
              <span className="text-xl font-semibold">Gabung Bersama Kami</span>
              <FaArrowRight className="text-base" />
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestiSection;
