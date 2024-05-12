import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const TestiCard = ({ starCount, feedback, img, namePerson, job }) => (
  <>
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl p-8 mt-10 shadow-md cursor-pointer"
    >
      <div className="space-y-5">
        <div className="flex gap-1">
          {[...Array(starCount)].map((_, index) => (
            <FaStar key={index} className="text-textYellow w-4" />
          ))}
        </div>
        <div className="text-lg font-medium max-h-28 overflow-y-auto">
          {feedback}
        </div>
        <div className="flex justify-start items-center gap-3">
          <div className="rounded-full overflow-hidden">
            <img
              src={img}
              alt="foto-feedback"
              draggable="false"
              className="w-14 h-14 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-base text-textPrimary">
              {namePerson}
            </h1>
            <h4 className="text-textLabel text-sm">{job}</h4>
          </div>
        </div>
      </div>
    </motion.div>
  </>
);

export default TestiCard;
