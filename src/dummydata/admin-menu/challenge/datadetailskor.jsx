import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
export const dataDetailSkor = [
  {
    id: 1,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    skorpeserta: "300 Points",
    skorjuara: "500 Points",
  },
];
