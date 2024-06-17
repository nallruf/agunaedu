import React from "react";

const InputImgComponent = ({
  htmlfor,
  label,
  type,
  id,
  name,
  placeholder,
  onChange,
  imagePicker,
}) => {
  return (
    <div>
      <label
        htmlFor={htmlfor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm"
        hidden
        ref={imagePicker}
      />
    </div>
  );
};

export default InputImgComponent;
