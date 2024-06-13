import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiBook, FiUsers } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";

const SideRole = ({ title, desc, jmlalur, jmlkelas, jmlsiswa, goto }) => {
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
          <InfoRow
            icon={<FiBook className="text-borderTertiary text-lg" />}
            text={`${jmlalur} Alur Pembelajaran`}
          />
          <InfoRow
            icon={
              <HiOutlineBookOpen className="text-borderTertiary text-lg " />
            }
            text={`${jmlkelas} Kelas Self Learning & Mentoring`}
          />
          <InfoRow
            icon={<FiUsers className="text-borderTertiary text-lg" />}
            text={`${jmlsiswa} Siswa`}
          />
        </div>
        <div className="py-8">
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.8 }}
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
