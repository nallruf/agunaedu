import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
export const dataRolePath = [
  {
    id: 1,
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
    title: "Web Development",
    desc: "Mulai belajar pemrograman yang sesuai dengan industri saat ini agar dapat berkembang menjadi seorang developer handal.",
    role: (
      <div className="p-2 rounded-lg border-2 font-semibold shadow-sm w-fit">
        Hacker
      </div>
    ),
  },
];
