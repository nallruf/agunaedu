import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const MultiSelectInputComponent = ({
  htmlFor,
  label,
  placeholder,
  name,
  id,
  //   options = [],
}) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && inputValue) {
      if (!selectedSkills.includes(inputValue)) {
        setSelectedSkills([...selectedSkills, inputValue]);
      }
      setInputValue("");
      e.preventDefault();
    }
  };

  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  return (
    <div className="mb-[11px] relative">
      <label
        htmlFor={htmlFor}
        className="text-[14px] font-medium text-textLabel"
      >
        {label}
      </label>
      <div className="border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus-within:ring-2 focus-within:ring-primaryBlue shadow-sm pl-10">
        <div className="flex items-center gap-2">
          <div className="absolute inset-y-0 left-0 top-8 flex items-center pl-3">
            <CiSearch className="h-6 w-6 stroke-iconInput" />
          </div>
          {selectedSkills.map((skill) => (
            <div
              key={skill}
              className="flex items-center border-2 border-borderPrimary rounded-lg px-3 py-1 text-sm text-iconInput font-medium"
            >
              {skill}
              <AiOutlineClose
                className="ml-2 cursor-pointer"
                onClick={() => handleRemoveSkill(skill)}
              />
            </div>
          ))}
          <input
            type="text"
            placeholder={placeholder}
            name={name}
            id={id}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleAddSkill}
            className="border-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiSelectInputComponent;
