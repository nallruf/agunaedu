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
  goto,
}) => {
  const navigate = useNavigate();

  const InfoRow = ({ icon, text }) => (
    <div className="flex items-center gap-2 ">
      {icon}
      <p className="text-base font-semibold text-textLabel">{text}</p>
    </div>
  );

  return (
    <div>
      <div className="flex flex-col gap-4 p-1 py-[15px]">
        <h1 className="text-4xl font-semibold text-textLabel">{title}</h1>
        <p className="text-lg text-textLabel">{desc}</p>
        <hr />
        <div className="space-y-[14px]">
          <InfoRow icon={icon1} text={jmlalur} />
          <InfoRow icon={icon2} text={jmlkelas} />
          <InfoRow icon={icon3} text={jmlsiswa} />
        </div>
        <div className="py-8">
          <motion.button
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
