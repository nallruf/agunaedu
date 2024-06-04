import { FaRegUser } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiBook } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { HiMiniPencil } from "react-icons/hi2";
import { RiSpeakFill } from "react-icons/ri";
import ImgHacker from "../../assets/img/role/Hacker.png";
import ImgHustler from "../../assets/img/role/Hustler.png";
import ImgHipster from "../../assets/img/role/Hipster.png";
import ImgHackerWeb from "../../assets/img/gambarcard/hacker_web.jpg";
import ImgHackerMobile from "../../assets/img/gambarcard/hacker_mobile.jpg";
import ImgHackerAlgo from "../../assets/img/gambarcard/hackeralgo.jpg";
import ImgHustlerTes from "../../assets/img/gambarcard/tes-pm.jpg";
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
  // Hacker
  {
    img: ImgHackerAlgo,
    icons: [<IoCodeSlash />],
    tes: ["Hacker"],
    titlecard: "Web Development",
    desccard: "Alur pembelajaran web development",
    icon2: <FiUsers />,
    // icon3: <GoStarFill />,
    level: "200 Siswa",
    // rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHackerWeb,
    icons: [<IoCodeSlash />],
    tes: ["Hacker"],
    titlecard: "Mobile Development",
    desccard: "Alur pembelajaran web development",
    icon2: <FiUsers />,
    // icon3: <GoStarFill />,
    level: "200 Siswa",
    // rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHackerMobile,
    icons: [<IoCodeSlash />],
    tes: ["Hacker"],
    titlecard: "Dasar Mobile",
    desccard: "Tes Dasar untuk membuka path mobile",
    icon2: <FiUsers />,
    // icon3: <GoStarFill />,
    level: "200 Siswa",
    // rating: "4.9 (2k)",
    isLocked: false,
  },

  //Hustler
  {
    icons: [<RiSpeakFill />],
    img: ImgHustlerTes,
    tes: ["Hustler"],
    titlecard: "Public Speaking",
    desccard: "Alur pembelajaran path speaking",
    icon2: <FiUsers />,
    // icon3: <GoStarFill />,
    level: "200 Siswa",
    // rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHustlerPublic,
    icons: [<RiSpeakFill />],
    tes: ["Hustler"],
    titlecard: "Business Strategies",
    desccard: "Alur pembelajaran Business",
    icon2: <FiUsers />,
    // icon3: <GoStarFill />,
    level: "200 Siswa",
    // rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHustlerPM,
    icons: [<RiSpeakFill />],
    tes: ["Hustler"],
    titlecard: "Project Management",
    desccard: "Alur pembelajaran path PM",
    icon2: <FiUsers />,
    // icon3: <GoStarFill />,
    level: "200 Siswa",
    // rating: "4.9 (2k)",
    isLocked: false,
  },

  //Hipster
  {
    img: ImgHipsterUIUX,
    icons: [<HiMiniPencil />],
    tes: ["Hipster"],
    titlecard: "Basic Design",
    desccard: "Alur pembelajaran membuka kelas hipster",
    icon2: <FiUsers />,
    // icon3: <GoStarFill />,
    level: "200 Siswa",
    // rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHipsterUI,
    icons: [<HiMiniPencil />],
    tes: ["Hipster"],
    titlecard: "Introduction to UI UX",
    desccard: "Alur pembelajaran path UI UX Design",
    icon2: <FiUsers />,
    // icon3: <GoStarFill />,
    level: "200 Siswa",
    // rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    img: ImgHipsterUX,
    icons: [<HiMiniPencil />],
    tes: ["Hipster"],
    titlecard: "UX Designer",
    desccard: "Alur pembelajaran path UX Design ",
    icon2: <FiUsers />,
    // icon3: <GoStarFill />,
    level: "200 Siswa",
    // rating: "4.9 (2k)",
    isLocked: false,
  },
];
