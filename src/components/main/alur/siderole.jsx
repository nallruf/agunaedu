import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SideRole = ({
  title,
  desc,
  icon1,
  icon2,
  icon3,
  jmlalur,
  jmlkelas,
  jmlsiswa,
  goto
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col gap-4 p-1 py-[15px]">
        <h1 className="text-4xl font-semibold text-textLabel">{title}</h1>
        <p className="text-lg font-semibold text-textLabel">{desc}</p>
        <hr />
        <div className="space-y-[14px]">
          <div className="flex items-center gap-2 ">
            {icon1}

            <p className="text-base font-semibold text-textLabel">{jmlalur}</p>
          </div>
          <div className="flex items-center gap-2">
            {icon2}
            <p className="text-base font-semibold text-textLabel">{jmlkelas}</p>
          </div>
          <div className="flex items-center gap-2 ">
            {icon3}
            <p className="text-base font-semibold text-textLabel">{jmlsiswa}</p>
          </div>
        </div>
        <div className="py-8">
          <motion.button
            initial={{ y: 100, scale: 0.5 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.2 }}
            className="rounded-lg text-primaryBlue bg-white px-6 py-1 border-2 flex items-center font-semibold gap-2"
            onClick={() => navigate(goto)}
          >
            <span>Pilih Role</span>
            <IoIosArrowForward />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SideRole;
