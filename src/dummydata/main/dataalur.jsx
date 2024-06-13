import { FaRegUser } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineBookOpen } from "react-icons/hi";
import ImgHacker from "../../assets/img/role/Hacker.png";
import ImgHustler from "../../assets/img/role/Hustler.png";
import ImgHipster from "../../assets/img/role/Hipster.png";

export const dataAlur = [
  {
    id: 1,
    iconbtn: <FaRegUser />,
    alur1: "Pilih Role",
    alur2: "Memilih pembelajaran salah satu role",
  },
  {
    id: 2,
    iconbtn: <LuPencilLine />,
    alur1: "Tes & Kelas Pemula",
    alur2: "Selesaikan tes & kelas pemula",
  },
  {
    id: 3,
    iconbtn: <HiOutlineBookOpen />,
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

export const dataPilih = [
  {
    id: 1,
    desc: "Mempelajari pemrograman yang sesuai dengan Industri saat ini",
    goto: "/course/hacker",
  },
  {
    id: 2,
    desc: "Mempelajari skill-skill yang dibutuhkan seorang hustler sesuai dengan industri saat ini",
    goto: "/course/hustler",
  },
  {
    id: 3,
    desc: "Mempelajari skill-skill yang dibutuhkan seorang hipster sesuai dengan industri saat ini",
    goto: "/course/hipster",
  },
];
