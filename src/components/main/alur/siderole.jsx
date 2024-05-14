import React from "react";

const SideRole = ({
  title,
  desc,
  icon1,
  icon2,
  icon3,
  jmlalur,
  jmlkelas,
  jmlsiswa,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-4 p-1 py-[15px]">
        <h1 className="text-4xl font-semibold text-textLabel">{title}</h1>
        <p className="text-lg font-semibold text-textLabel">{desc}</p>
        <hr />
        <div className="space-y-[14px]">
          <div className="flex items-center gap-2 ">
            {icon1}

            <p className="text-base font-semibold text-textLabel">{jmlalur}</p>
          </div>
          <div className="flex items-center gap-2">
            {icon2}
            <p className="text-base font-semibold text-textLabel">{jmlkelas}</p>
          </div>
          <div className="flex items-center gap-2 ">
            {icon3}
            <p className="text-base font-semibold text-textLabel">{jmlsiswa}</p>
          </div>
        </div>
        <div className="gap-2 py-8">
          <button className="rounded-lg text-primaryBlue bg-white px-6 p-1 border-2  flex items-center font-semibold ">
            Pilih Role
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideRole;
