import { FaRegUser } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineBookOpen } from "react-icons/hi";
import ImgHacker from "../assets/img/role/Hacker.png";
import ImgHustler from "../assets/img/role/Hustler.png";
import ImgHipster from "../assets/img/role/Hipster.png";

export const dataAlur = [
  {
    id: 1,
    icon: <FaRegUser />,
    alur1: "Pilih Role",
    alur2: "Memilih pembelajaran salah satu role",
  },
  {
    id: 2,
    icon: <LuPencilLine />,
    alur1: "Mengikuti Tes",
    alur2: "Kerjakan tes dasar dan tes level",
  },
  {
    id: 3,
    icon: <HiOutlineBookOpen />,
    alur1: "Ikuti Mentoring",
    alur2: "Belajar hingga akhir dengan mentor",
  },
];

export const dataRole = [
  {
    id: 1,
    gambar: ImgHacker,
    role: "Hacker",
  },
  {
    id: 2,
    gambar: ImgHustler,
    role: "Hustler",
  },
  {
    id: 3,
    gambar: ImgHipster,
    role: "Hipster",
  },
];
