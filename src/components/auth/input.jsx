import React from "react";

const InputComponent = ({ htmlfor, label, type, placeholder, name, id }) => {
  return (
    <>
      <label
        htmlFor={htmlfor}
        className="text-[14px] font-medium text-[#334054]"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className="w-full border-2 border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-[#1470EF] shadow-sm"
      />
    </>
  );
};

export default InputComponent;
