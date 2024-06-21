import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
export const dataMainRole = [
  {
    id: 1,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit event")}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => alert("Delete event")}
        />
      </div>
    ),
    desc: "Ini adalah hacker",
    role: "Hacker",
    jmlpath: "10",
    jmlpathfocus: "5",
    jmlcourse: "35",
    jmlsiswa: "50",
  },
];
