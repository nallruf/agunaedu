import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const TextInputComponent = ({
  htmlFor,
  label,
  type,
  placeholder,
  name,
  id,
  passwordInput = false,
  searchInput = false,
}) => {
  const [openEye, setOpenEye] = useState(false);
  const togglePassword = () => {
    setOpenEye(!openEye);
  };

  const inputType = passwordInput ? (openEye ? "text" : "password") : type;

  return (
    <>
      <div
        className={`mb-[11px] relative ${
          passwordInput ? "password-input" : ""
        } ${searchInput ? "search-input" : ""}`}
      >
        <label
          htmlFor={htmlFor}
          className="text-[14px] font-medium text-textLabel"
        >
          {label}
        </label>
        {searchInput && (
          <div className="absolute inset-y-0 left-0 top-8 flex items-center pl-3">
            <CiSearch className="h-6 w-6 stroke-iconInput" />
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          name={name}
          id={id}
          autoComplete={passwordInput ? "current-password" : "off"}
          className={`w-full border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm ${
            searchInput ? "pl-10" : ""
          }`}
        />
        {passwordInput && (
          <div className="absolute top-11 right-5 text-xl cursor-pointer">
            {openEye ? (
              <AiOutlineEye onClick={togglePassword} />
            ) : (
              <AiOutlineEyeInvisible onClick={togglePassword} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TextInputComponent;
