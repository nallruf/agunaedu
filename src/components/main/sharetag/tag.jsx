import React from "react";
import { motion } from "framer-motion";

const Tag = ({ icon, skill }) => (
  <>
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="border-[1.5px] border-[#85CAFF] text-[#175CD3] text-base font-medium inline-flex items-center gap-2 px-3 py-[6px] rounded-lg mr-3 my-2 cursor-pointer "
    >
      {icon}
      <span>{skill}</span>
    </motion.div>
  </>
);

export default Tag;
