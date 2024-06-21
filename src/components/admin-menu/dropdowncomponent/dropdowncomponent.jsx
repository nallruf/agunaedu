import React from "react";

const DropdownComponent = ({
  htmlfor,
  label,
  id,
  options,
  selected,
  onSelect,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlfor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="w-full border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
