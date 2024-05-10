import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputPassComponent = ({
  htmlFor,
  titlePass,
  placeholderPass,
  namePass,
  idPass,
}) => {
  const [openEye, setOpenEye] = useState(false);
  const togglePassword = () => {
    setOpenEye(!openEye);
  };

  return (
    <>
      <div className="mb-[11px] relative">
        <label
          htmlFor={htmlFor}
          className="text-[14px] font-medium text-[#334054]"
        >
          {titlePass}
        </label>
        <input
          type={openEye ? "text" : "password"}
          placeholder={placeholderPass}
          name={namePass}
          id={idPass}
          autoComplete="current-password"
          className="w-full border-2 border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-[#1470EF] shadow-sm"
        />
        <div className="absolute top-11 right-5 text-xl cursor-pointer">
          {openEye ? (
            <AiOutlineEye onClick={togglePassword} />
          ) : (
            <AiOutlineEyeInvisible onClick={togglePassword} />
          )}
        </div>
      </div>
    </>
  );
};

export default InputPassComponent;
