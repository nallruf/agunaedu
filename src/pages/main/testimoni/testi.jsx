import React, { useState, useEffect } from "react";
import TestiCard from "../../../components/main/testi/testicard";
import { dataTesti } from "../../../dummydata/main/datatesti";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TestiSection = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleJoinClick = () => {
    if (isLoggedIn) {
      navigate("/user/dashboard");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <>
      <section className="bg-primaryBlue relative overflow-hidden" id="testi">
        <div className="absolute bottom-0 left-0 transform translate-x-[-45%] w-[350px] h-[350px] rounded-full bg-secondaryBlue" />
        <div className="absolute top-0 right-0 transform translate-x-1/2 w-[200px] h-[200px] rounded-full bg-secondaryBlue" />
        <div className="px-10 sm:px-20 md:px-40 pt-[90px] pb-[128px] z-10 relative">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold text-white">
              Ulasan Para Siswa Kami!
            </h1>
            <h3 className="text-textQuote text-xl">
              Temukan berbagai review dari para mentee kami
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dataTesti.map((testi, index) => (
              <TestiCard key={index} {...testi} />
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <motion.button
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.2 }}
              className="text-white flex items-center gap-3"
              onClick={handleJoinClick}
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
