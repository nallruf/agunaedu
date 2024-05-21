import React from "react";
import { FaStar } from "react-icons/fa6";

const MentorKelas = ({ about, skills, gambar, name, role, review }) => {
  return (
    <section className="px-10 sm:px-20 md:px-40 py-[80px] bg-primaryBlue ">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="text-white md:w-[60%] flex flex-col gap-2 my-auto">
          <h1 className="text-4xl font-semibold">Tentang Mentor</h1>
          <span>{about}</span>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">Keahlian</span>
            <div className="flex gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border-[1.5px] border-borderPrimary bg-[#F9FAFB] text-textLabel text-[14px] font-medium inline-flex items-center px-3 py-[6px] rounded-[6px] my-2 gap-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-2 rounded-xl md:w-[266px] md:h-[318px] flex flex-col py-2 items-center bg-white">
          <div className="py-2 flex items-start justify-start flex-col">
            <img src={gambar} alt="mentor" />
            <div className="flex flex-col items-start w-full justify-center py-2">
              <span className="text-xl font-bold">{name}</span>
              <span className="text-sm text-textTertiary">{role}</span>
              <span className="flex items-center gap-2 mt-2 text-textTertiary ">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                {review} Review
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorKelas;
