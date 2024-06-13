import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const MultiSelectInputComponent = ({
  htmlFor,
  label,
  placeholder,
  name,
  id,
  value,
  onChange,
}) => {
  const [availableSkills, setAvailableSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState(value || []);
  const [inputValue, setInputValue] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("/api/v1/public/skills");
        setAvailableSkills(response.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  useEffect(() => {
    if (inputValue) {
      setFilteredSkills(
        availableSkills
          .filter((skill) =>
            skill.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .filter((skill) => !selectedSkills.includes(skill.id))
      );
    } else {
      setFilteredSkills([]);
    }
  }, [inputValue, availableSkills, selectedSkills]);

  const handleAddSkill = (skill) => {
    if (!selectedSkills.includes(skill.id)) {
      const newSelectedSkills = [...selectedSkills, skill.id];
      setSelectedSkills(newSelectedSkills);
      onChange(newSelectedSkills);
    }
    setInputValue("");
  };

  const handleRemoveSkill = (skillId) => {
    const newSelectedSkills = selectedSkills.filter((s) => s !== skillId);
    setSelectedSkills(newSelectedSkills);
    onChange(newSelectedSkills);
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
        <div className="flex flex-wrap items-center gap-2">
          <div className="absolute inset-y-0 left-0 top-8 flex items-center pl-3">
            <CiSearch className="h-6 w-6 text-iconInput" />
          </div>
          {selectedSkills.map((skillId) => {
            const skill = availableSkills.find((s) => s.id === skillId);
            if (!skill) return null;
            return (
              <div
                key={skill.id}
                className="flex items-center border-2 border-borderPrimary rounded-lg px-3 py-1 text-sm text-iconInput font-medium"
              >
                {skill.name}
                <AiOutlineClose
                  className="ml-2 cursor-pointer"
                  onClick={() => handleRemoveSkill(skill.id)}
                />
              </div>
            );
          })}
          <input
            type="text"
            placeholder={placeholder}
            name={name}
            id={id}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border-none focus:outline-none flex-grow"
            autoComplete="off"
          />
        </div>
      </div>
      {filteredSkills.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white border-2 border-borderPrimary rounded-xl shadow-lg text-textPrimary">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="cursor-pointer p-2 hover:bg-gray-100"
              onClick={() => handleAddSkill(skill)}
            >
              {skill.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectInputComponent;

// import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { AiOutlineClose } from "react-icons/ai";

// const MultiSelectInputComponent = ({
//   htmlFor,
//   label,
//   placeholder,
//   name,
//   id,
//   //   options = [],
// }) => {
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleAddSkill = (e) => {
//     if (e.key === "Enter" && inputValue) {
//       if (!selectedSkills.includes(inputValue)) {
//         setSelectedSkills([...selectedSkills, inputValue]);
//       }
//       setInputValue("");
//       e.preventDefault();
//     }
//   };

//   const handleRemoveSkill = (skill) => {
//     setSelectedSkills(selectedSkills.filter((s) => s !== skill));
//   };

//   return (
//     <div className="mb-[11px] relative">
//       <label
//         htmlFor={htmlFor}
//         className="text-[14px] font-medium text-textLabel"
//       >
//         {label}
//       </label>
//       <div className="border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus-within:ring-2 focus-within:ring-primaryBlue shadow-sm pl-10">
//         <div className="flex flex-wrap items-center gap-2">
//           <div className="absolute inset-y-0 left-0 top-8 flex items-center pl-3">
//             <CiSearch className="h-6 w-6 text-iconInput" />
//           </div>
//           {selectedSkills.map((skill) => (
//             <div
//               key={skill}
//               className="flex items-center border-2 border-borderPrimary rounded-lg px-3 py-1 text-sm text-iconInput font-medium"
//             >
//               {skill}
//               <AiOutlineClose
//                 className="ml-2 cursor-pointer"
//                 onClick={() => handleRemoveSkill(skill)}
//               />
//             </div>
//           ))}
//           <input
//             type="text"
//             placeholder={placeholder}
//             name={name}
//             id={id}
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={handleAddSkill}
//             className="border-none focus:outline-none flex-grow"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiSelectInputComponent;
