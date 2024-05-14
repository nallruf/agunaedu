import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SideCat = ({ desc, title, onclick, button }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-white flex flex-col gap-2">
        <h1 className="font-semibold text-3xl sm:text-4xl">{title}</h1>
        <h4 className="text-base sm:text-xl">{desc}</h4>
      </div>
      <div className="mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 bg-white text-textSecondary py-[10px] px-[30px] rounded-lg font-semibold text-sm"
          onClick={() => navigate(onclick)}
        >
          <span>{button}</span>
          <FaArrowRight />
        </motion.button>
      </div>
    </>
  );
};

export default SideCat;
