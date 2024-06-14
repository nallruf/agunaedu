import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderDashboard = ({ buttonBack, title, desc, goto }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-primaryBlue text-white  rounded-bl-[120px]">
        <div className="px-10 sm:px-20 md:px-40">
          <div className="grid md:grid-cols-2">
            <div className="my-[20px] md:my-[30px]">
              <button
                className="flex items-center text-lg gap-3"
                onClick={() => navigate(goto)}
              >
                <MdOutlineKeyboardArrowLeft className="text-2xl" />
                <h3>{buttonBack}</h3>
              </button>
              <h1
                // initial={{ x: -300, scale: 0.5 }}
                // animate={{ x: 0, scale: 1 }}
                // transition={{ duration: 0.8 }}
                className="text-5xl font-semibold pt-8 pb-3"
              >
                {title}
              </h1>
              <h3
                // initial={{ x: 300, scale: 0.5 }}
                // animate={{ x: 0, scale: 1 }}
                // transition={{ duration: 0.8 }}
                className="text-lg"
              >
                {desc}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderDashboard;
