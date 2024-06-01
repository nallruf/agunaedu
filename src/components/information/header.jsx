import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HeaderInfo = ({ img, title, desc }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-primaryBlue pt-[130px] md:pt-[60px] rounded-bl-[100px] sm:rounded-bl-[165px] mb-[70px]">
        <div className="px-10 sm:px-20 md:px-40">
          <div className="grid md:grid-cols-2">
            <div className="text-white my-auto">
              <button onClick={() => navigate(-1)}>
                <div className="font-semibold flex items-center gap-1 text-base">
                  <MdKeyboardArrowLeft />
                  Kembali
                </div>
              </button>
              <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>
              {desc && <h4 className="text-base font-normal mt-[5px]">{desc}</h4>}
            </div>
            <div className="flex justify-center mt-10 md:mt-0 md:justify-end">
              <img
                src={img}
                alt="img"
                draggable="false"
                className="md:w-[90%] sm:w-2/3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderInfo;
