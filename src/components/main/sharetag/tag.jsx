import React from "react";
import { motion } from "framer-motion";

const Tag = ({ icon, skill }) => (
  <>
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="border-[1.5px] border-borderSecondary text-textSecondary text-base font-medium inline-flex items-center px-3 py-[6px] rounded-lg mr-3 my-2 cursor-pointer "
    >
      {icon}
      <span>{skill}</span>
    </motion.div>
  </>
);

export default Tag;
