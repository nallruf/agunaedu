import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderCourse = ({
  buttonBack,
  role,
  desc,
  imgRole,
  skills = [],
  goto,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-primaryBlue text-white">
        <div className="px-10 sm:px-20 md:px-40">
          <div className="grid md:grid-cols-2">
            <div className="my-[52px] md:my-[70px]">
              <button
                className="flex items-center text-lg gap-3"
                onClick={() => navigate(goto)}
              >
                <MdOutlineKeyboardArrowLeft className="text-2xl" />
                <h3>{buttonBack}</h3>
              </button>
              <motion.h1
                initial={{ x: -300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-semibold pt-20 pb-3"
              >
                {role}
              </motion.h1>
              <motion.h3
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-lg"
              >
                {desc}
              </motion.h3>
              <div className="flex mt-5 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    initial={{ x: -100, scale: 0.5 }}
                    animate={{ x: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="border-[1.5px] border-borderPrimary bg-[#F9FAFB] text-textLabel text-[14px] font-medium inline-flex items-center px-3 py-[6px] rounded-[6px] my-2 cursor-pointer gap-2"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ x: 100, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={imgRole}
                alt="img-role"
                draggable="false"
                className="md:w-[90%] sm:w-2/3"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderCourse;
