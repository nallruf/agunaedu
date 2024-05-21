import { FaRegUser } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiBook } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { LuBarChart } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { HiMiniPencil } from "react-icons/hi2";

import ImgHacker from "../../assets/img/role/Hacker.png";
import ImgHustler from "../../assets/img/role/Hustler.png";
import ImgHipster from "../../assets/img/role/Hipster.png";
import ImgHackerWeb from "../../assets/img/gambarcard/hacker_web.jpg";
import ImgHackerMobile from "../../assets/img/gambarcard/hacker_mobile.jpg";
import ImgHackerAlgo from "../../assets/img/gambarcard/hackeralgo.jpg";
import ImgHustlerLead from "../../assets/img/gambarcard/hustler_leadership.jpg";
import ImgHustlerPM from "../../assets/img/gambarcard/hustler_PM.jpg";
import ImgHustlerPublic from "../../assets/img/gambarcard/hustler_publicspeaking.jpg";
import ImgHipsterUI from "../../assets/img/gambarcard/hipster_UI.jpg";
import ImgHipsterUX from "../../assets/img/gambarcard/hipster_UX.jpg";
import ImgHipsterUIUX from "../../assets/img/gambarcard/hipster_UIUX.jpg";

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
    title: "Role Hacker",
    desc: "Mempelajari pemrograman yang sesuai dengan Industri saat ini",
    icon1: <FiBook className="text-borderTertiary text-lg" />,
    icon2: <HiOutlineBookOpen className="text-borderTertiary text-lg " />,
    icon3: <FiUsers className="text-borderTertiary text-lg" />,
    jmlalur: "2 Alur Pembelajaran",
    jmlkelas: "30 Kelas Self Learning & Mentoring",
    jmlsiswa: "250 Siswa",
    goto: "/course/hacker",
  },
  {
    id: 2,
    title: "Role Hustler",
    desc: "Mempelajari skill-skill yang dibutuhkan seorang hustler sesuai dengan industri saat ini",
    icon1: <FiBook className="text-borderTertiary text-lg" />,
    icon2: <HiOutlineBookOpen className="text-borderTertiary text-lg " />,
    icon3: <FiUsers className="text-borderTertiary text-lg" />,
    jmlalur: "2 Alur Pembelajaran",
    jmlkelas: "30 Kelas Self Learning & Mentoring",
    jmlsiswa: "150 Siswa",
    goto: "/course/hustler",
  },
  {
    id: 3,
    title: "Role Hipster",
    desc: "Mempelajari skill-skill yang dibutuhkan seorang hipster sesuai dengan industri saat ini",
    icon1: <FiBook className="text-borderTertiary text-lg" />,
    icon2: <HiOutlineBookOpen className="text-borderTertiary text-lg " />,
    icon3: <FiUsers className="text-borderTertiary text-lg" />,
    jmlalur: "2 Alur Pembelajaran",
    jmlkelas: "30 Kelas Self Learning & Mentoring",
    jmlsiswa: "110 Siswa",
    goto: "/course/hipster",
  },
];

export const dataCard = [
  {
    img: ImgHackerAlgo,
    icon1: <IoCodeSlash />,
    tes: ["Hacker"],
    titlecard: "Algoritma Pemrograman",
    desccard: "Tes Dasar untuk membuka kelas hacker",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHackerWeb,
    icon1: <IoCodeSlash />,
    tes: ["Hacker"],
    titlecard: "Dasar Web",
    desccard: "Tes Dasar untuk membuka path web",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHackerMobile,
    icon1: <IoCodeSlash />,
    tes: ["Hacker"],
    titlecard: "Dasar Mobile",
    desccard: "Tes Dasar untuk membuka path mobile",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHackerMobile,
    icon1: <IoCodeSlash />,
    tes: ["Hacker"],
    titlecard: "Dasar Mobile",
    desccard: "Tes Dasar untuk membuka path mobile",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },

  //Hustler
  {
    img: ImgHustlerLead,
    icon1: <FiUsers />,
    tes: ["Hustler"],
    titlecard: "Leadership",
    desccard: "Tes Dasar untuk membuka kelas hustler",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHustlerPM,
    icon1: <FiUsers />,
    tes: ["Hustler"],
    titlecard: "Project Management",
    desccard: "Tes Level untuk membuka path PM",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    icon1: <FiUsers />,
    img: ImgHustlerPublic,
    tes: ["Hustler"],
    titlecard: "Public Speaking",
    desccard: "Tes Dasar untuk membuka path speaking",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    icon1: <FiUsers />,
    img: ImgHustlerPublic,
    tes: ["Hustler"],
    titlecard: "Public Speaking",
    desccard: "Tes Dasar untuk membuka path speaking",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },

  //Hipster
  {
    img: ImgHipsterUIUX,
    icon1: <HiMiniPencil />,
    tes: ["Hipster"],
    titlecard: "UI/UX Designer",
    desccard: "Tes Dasar untuk membuka kelas hipster",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHipsterUI,
    icon1: <HiMiniPencil />,
    tes: ["Hipster"],
    titlecard: "UI Designer",
    desccard: "Tes Level untuk membuka path UI Design",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHipsterUX,
    icon1: <HiMiniPencil />,
    tes: ["Hipster"],
    titlecard: "UX Designer",
    desccard: "Tes Dasar untuk membuka path UX Design ",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHipsterUX,
    icon1: <HiMiniPencil />,
    tes: ["Hipster"],
    titlecard: "UX Designer",
    desccard: "Tes Dasar untuk membuka path UX Design ",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Pemula",
    rating: "4.9 (2k)",
    isLocked: false,
  },
];
