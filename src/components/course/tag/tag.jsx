import React from "react";
import { motion } from "framer-motion";

const Tag = ({ skill }) => (
  <>
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="border-[1.5px] border-borderPrimary bg-[#F9FAFB] text-textLabel text-[14px] font-medium inline-flex items-center px-3 py-[6px] rounded-[6px] mr-3 my-2 cursor-pointer gap-2 "
    >
      {skill}
    </motion.div>
  </>
);

export default Tag;
