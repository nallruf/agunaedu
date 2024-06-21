import ImgProfile from "../../../assets/img/team/ulum.png";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
export const dataUsers = [
  {
    id: 1,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    name: "Ulum Sepuh",
    jmlkls: "100",
    jmlevent: "10",
    jmlchallenge: "78",
    transaction: "$500.00",
  },
  {
    id: 2,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    name: "Budi Santoso",
    jmlkls: "80",
    jmlevent: "8",
    jmlchallenge: "50",
    transaction: "$400.00",
  },
  {
    id: 3,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    name: "Siti Aminah",
    jmlkls: "90",
    jmlevent: "9",
    jmlchallenge: "60",
    transaction: "$450.00",
  },
  {
    id: 4,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    name: "Joko Widodo",
    jmlkls: "110",
    jmlevent: "12",
    jmlchallenge: "85",
    transaction: "$550.00",
  },
  {
    id: 5,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    name: "Megawati Soekarnoputri",
    jmlkls: "120",
    jmlevent: "15",
    jmlchallenge: "90",
    transaction: "$600.00",
  },
  {
    id: 6,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    name: "Prabowo Subianto",
    jmlkls: "70",
    jmlevent: "7",
    jmlchallenge: "40",
    transaction: "$350.00",
  },
];
