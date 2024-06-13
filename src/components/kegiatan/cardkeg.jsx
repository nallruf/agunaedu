import React, { useState } from "react";
import { LuCalendarCheck } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import LoginPopup from "../popup/loginpopup";
import { useAuth } from "../../hooks/useauth";

const CardKegiatan = ({ imgEvent, title, date, time, desc, tags, link }) => {
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { user } = useAuth();

  const handleClick = () => {
    if (!user) {
      setShowLoginPopup(true);
    } else {
      navigate(link);
    }
  };

  const handleLogin = () => {
    setShowLoginPopup(false);
    navigate("/auth/login");
  };

  const handleClose = () => {
    setShowLoginPopup(false);
  };

  return (
    <>
      <div className="mb-10 md:mb-80">
        <div className="w-full md:h-[250px] md:w-[336px] shadow-lg">
          <img
            src={imgEvent}
            alt="card-image"
            draggable="false"
            className="object-cover rounded-t-2xl overflow-hidden md:h-[250px] md:w-[336px] w-full"
          />

          <div className="bg-white px-6 py-5 rounded-xl shadow-lg h-[350px]">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-col gap-[6px]">
                  <h1 className="text-2xl text-primaryBlue font-semibold">
                    {title}
                  </h1>
                  <div className="flex text-iconInput text-sm gap-3">
                    <div className="flex items-center gap-1">
                      <LuCalendarCheck className="text-base" />
                      <span>{date}</span>
                    </div>
                    {time && (
                      <div className="flex items-center gap-1">
                        <IoMdTime className="text-base" />
                        <span>{time}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-textLabel text-base">{desc}</h3>
                </div>
                <div className="flex gap-3 mt-2">
                  {tags.map((tag, index) => (
                    <p
                      key={index}
                      className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg my-2 shadow-sm"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <button
                  className="text-white bg-primaryBlue text-base font-medium inline-flex items-center justify-center py-[10px] rounded-lg mt-5 mb-1 gap-3 w-full"
                  onClick={handleClick}
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoginPopup
        showLoginPopup={showLoginPopup}
        handleLogin={handleLogin}
        handleClose={handleClose}
      />
    </>
  );
};

export default CardKegiatan;
