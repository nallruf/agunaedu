import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
export const dataDetailEvent = [
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
    date: "11/03/2024",
    time: "08.00 - 12.00 WIB",
    place: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Zoom Meeting
      </div>
    ),
    community: "Kom uitas IT Yogyakarta",
  },
];
