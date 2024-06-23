import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

export const dataPembicaraEvent = [
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
    title: "Ulum Sepuh",
    work: "CEO Aguna",
  },
  {
    id: 2,
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
    title: "Jenal Sepuh",
    work: "Data Analyst Aguna",
  },
];
