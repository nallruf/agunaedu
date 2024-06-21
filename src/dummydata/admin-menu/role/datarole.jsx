import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
export const dataRole = [
  {
    id: 1,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
      </div>
    ),
    role: "Hacker",
    desc: "Ini adalah hacker",
    jmlpath: "10",
    jmlpathfocus: "5",
    jmlcourse: "35",
    jmlsiswa: "50",
  },
  {
    id: 2,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit event")}
        />
      </div>
    ),
    role: "Hipster",
    desc: "Ini adalah hipster",

    jmlpath: "8",
    jmlpathfocus: "4",
    jmlcourse: "30",
    jmlsiswa: "45",
  },
  {
    id: 3,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit event")}
        />
      </div>
    ),
    role: "Hustler",
    desc: "Ini adalah hustler",

    jmlpath: "12",
    jmlpathfocus: "6",
    jmlcourse: "40",
    jmlsiswa: "55",
  },
  {
    id: 4,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit event")}
        />
      </div>
    ),
    role: "Hacker",
    desc: "Ini adalah hacker",

    jmlpath: "7",
    jmlpathfocus: "3",
    jmlcourse: "25",
    jmlsiswa: "40",
  },
  {
    id: 5,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => alert("Edit event")}
        />
      </div>
    ),
    role: "Hacker",
    desc: "Ini adalah hacker",

    jmlpath: "15",
    jmlpathfocus: "8",
    jmlcourse: "45",
    jmlsiswa: "60",
  },
];
