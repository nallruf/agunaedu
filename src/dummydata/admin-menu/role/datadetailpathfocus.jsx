import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

export const dataDetailPathFocus = [
  {
    id: 1,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => alert("Delete event")}
        />
      </div>
    ),
    title: "Front-End Web Development",
    desc: "Mulai belajar front-end web development dan berkembang menjadi seorang front-end web developer handal.",
  },
];
