import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
export const dataSkill = [
  {
    id: 1,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit HTML tool")}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => alert("Delete HTML tool")}
        />
      </div>
    ),
    tools: "HTML",
    desc: "Web Development",
  },
  {
    id: 2,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit CSS tool")}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => alert("Delete CSS tool")}
        />
      </div>
    ),
    tools: "CSS",
    desc: "Styling Web Pages",
  },
  {
    id: 3,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit Laravel tool")}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => alert("Delete Laravel tool")}
        />
      </div>
    ),
    tools: "Laravel",
    desc: "PHP Framework",
  },
  {
    id: 4,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit Tailwind tool")}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => alert("Delete Tailwind tool")}
        />
      </div>
    ),
    tools: "Tailwind",
    desc: "Utility-First CSS Framework",
  },
  {
    id: 5,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit JavaScript tool")}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => alert("Delete JavaScript tool")}
        />
      </div>
    ),
    tools: "JavaScript",
    desc: "Programming Language",
  },
  {
    id: 6,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit ReactJS tool")}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => alert("Delete ReactJS tool")}
        />
      </div>
    ),
    tools: "ReactJS",
    desc: "JavaScript Library for Building User Interfaces",
  },
];
