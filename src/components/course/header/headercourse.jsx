import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderCourse = ({ buttonBack, role, desc, imgRole, skills, goto }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-primaryBlue text-white">
        <div className="container mx-auto px-10">
          <div className="grid md:grid-cols-2">
            <div className="my-[52px] md:my-[70px]">
              <Link
                className="flex items-center text-lg gap-3"
                to={navigate(goto)}
              >
                <MdOutlineKeyboardArrowLeft className="text-2xl" />
                <h3>{buttonBack}</h3>
              </Link>
              <h1 className="text-6xl font-semibold pt-20 pb-3">{role}</h1>
              <span className="text-lg">{desc}</span>
              <div className="flex mt-5 gap-3">
                {skills.map((skill) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="border-[1.5px] border-borderPrimary bg-[#F9FAFB] text-textLabel text-[14px] font-medium inline-flex items-center px-3 py-[6px] rounded-[6px] mr-2 my-2 cursor-pointer gap-2 "
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={imgRole}
                alt="img-role"
                className="md:w-[90%] sm:w-2/3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCourse;
