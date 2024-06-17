import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlLock } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import SeruImg from "../../../assets/img/illustration/seru.png";
import { useNavigate } from "react-router-dom";

const CardRole = ({
  img,
  icons = [],
  tes = [],
  titlecard,
  desccard,
  icon2,
  level,
  isLocked,
  link,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  const handleCardClick = () => {
    if (isLocked) {
      setShowPopup(true);
    } else {
      handleClick();
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const lockedOverlay = (
    <div className="absolute inset-0 flex items-center justify-center top-0 translate-y-[-100px] md:translate-y-[-20px]">
      <div className="rounded-lg text-white text-center">
        <div className="flex flex-col items-center md:gap-5">
          <SlLock className="text-6xl" />
          <p>Selesaikan tes terlebih dahulu</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg px-[34px] pt-[28px] pb-[54px] flex flex-col gap-[98px] h-[506px] mx-4 sm:mx-0">
            <div className="flex items-end justify-end text-2xl text-textLabel">
              <button onClick={closePopup}>
                <IoMdClose />
              </button>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                src={SeruImg}
                alt="Seru"
                draggable="false"
                className="mb-5"
              />
              <h2 className="text-xl font-bold mb-4 text-textLabel">
                Kamu Belum Bisa Akses,nih!
              </h2>
              <p className="mb-4">
                Yuk, selesaikan dulu kelas pemula dan tes dasar terlebih dahulu
              </p>
            </div>
          </div>
        </div>
      )}
      <motion.div
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.03 }}
        className={`cursor-pointer ${isLocked ? "opacity-50 relative" : ""}`}
        onClick={handleCardClick}
      >
        {isLocked && lockedOverlay}
        <div className="md:h-[250px] md:w-[336px] w-full shadow-lg rounded-2xl">
          <img
            src={img}
            alt="card-image"
            draggable="false"
            className="object-cover rounded-t-2xl overflow-hidden h-[200px] md:w-[336px] w-full"
          />
          <div className="bg-white p-6 flex flex-col rounded-b-2xl shadow-lg h-[270px]">
            <div className="flex flex-col gap-3 justify-between h-full">
              <div className="flex flex-col gap-5">
                {tes.length > 0 && icons.length > 0 && (
                  <div className="flex gap-3">
                    {tes.map((test, index) => (
                      <div
                        key={index}
                        className={`flex items-center border-2 px-3 py-1 text-sm gap-2 font-medium rounded-lg ${
                          isLocked ? "text-iconInput" : "text-textLabel"
                        } border-borderPrimary`}
                      >
                        <span>{icons[index]}</span>
                        <p>{test}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-col gap-10">
                  <div>
                    <h2
                      className={`text-2xl font-semibold ${
                        isLocked ? "text-iconInput" : "text-textSecondary"
                      }`}
                    >
                      {titlecard}
                    </h2>
                    <p
                      className={`text-textLabel text-[14px] mt-1 ${
                        isLocked ? "text-iconInput" : "text-textTertiary"
                      }`}
                    >
                      {desccard}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={isLocked ? "text-iconInput" : "text-primaryBlue"}
                >
                  {icon2}
                </span>
                <span
                  className={
                    isLocked
                      ? "text-iconInput"
                      : "text-primaryBlue font-semibold"
                  }
                >
                  {level}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CardRole;
