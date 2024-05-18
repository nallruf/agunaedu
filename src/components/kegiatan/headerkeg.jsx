import React from "react";

const HeaderKegiatan = ({ title, desc, imgKeg }) => {
  return (
    <>
      <section className="bg-primaryBlue pb-[50px] sm:pb-[70px] pt-[130px] md:pb-[50px]">
        <div className="px-10 sm:px-20 md:px-40">
          <div className="grid md:grid-cols-2">
            <div className="text-white my-auto">
              <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>
              <h4 className="text-xl mt-[5px]">{desc}</h4>
            </div>
            <div className="flex justify-center mt-10 md:mt-0 md:justify-end">
              <img
                src={imgKeg}
                alt="img-kegiatna"
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

export default HeaderKegiatan;
