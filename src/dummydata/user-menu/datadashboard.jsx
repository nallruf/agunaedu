import ImgProfile from "../../assets/img/team/ulum.png";
import { IoCodeSlash } from "react-icons/io5";
import { RiPlayLargeLine } from "react-icons/ri";
import ImgC1 from "../../assets/img/gambarcard/hacker_web.jpg";
import { FiUsers } from "react-icons/fi";
import ImgCode from "../../assets/img/illustration/code.png";

export const dataAnalysis = [
  {
    title: "Total Kelas Mentoring",
    amount: 10,
    total: "Rp 400.000",
    icon: "HiOutlineBookOpen",
    profit: "+26%",
  },
  {
    title: "Total Kelas Asynchronous",
    amount: 5,
    total: "Rp 500.000",
    icon: "HiOutlineTicket",
    profit: "+30%",
  },
  {
    title: "Total Challenge",
    amount: 4,
    total: "1145xp",
    icon: "RiAwardLine",
    profit: "+36%",
  },
];
export const dataChallenge = [
  {
    title: "Total Challenge Yang Diikuti",
    amount: 4,
    total: "1145xp",
    icon: "RiAwardLine",
    profit: "+36%",
  },
  {
    title: "Total Challenge",
    amount: 4,
    total: "1145xp",
    icon: "LuCoins",
    profit: "+36%",
  },
];

export const dataMentoring = [
  {
    title: "Mentoring Front-End Web Development dengan JS",
    img: ImgProfile,
    nameMentor: "Andika Slebew",
  },
  {
    title: "Kelas Mentoring Back-End Web Development PH",
    img: ImgProfile,
    nameMentor: "John Kocak",
  },
];

export const dataLiveMentoring = [
  {
    title: "Front-End Web dengan Tailwind",
    img: ImgC1,
    imgProfile: ImgProfile,
    icons: [<IoCodeSlash />, <FiUsers />],
    tags: ["Hacker", "Mentoring"],
    nameMentor: "Andika Slebew",
  },
  {
    title: "Front-End Web Development ",
    img: ImgC1,
    imgProfile: ImgProfile,
    icons: [<IoCodeSlash />, <FiUsers />],
    tags: ["Hacker", "Mentoring"],
    nameMentor: "Andika Slebew",
  },

  {
    title: "Back-End Web dengan PHP",
    img: ImgC1,
    imgProfile: ImgProfile,
    icons: [<IoCodeSlash />, <FiUsers />],
    tags: ["Hacker", "Mentoring"],
    nameMentor: "Andika Slebew",
  },
];

export const dataSelesaiMentoring = [
  {
    title: "Front-End Web dengan Tailwind",
    desc: "Pembelajaran Front-End Web dengan Tailwind",
    imgCode: ImgCode,
    imgProfile: ImgProfile,
    tags: ["Hacker", "Web Development", "Front-End"],
    nameMentor: "Andika Slebew",
  },
  {
    title: "Front-End Web dengan Bootstrap",
    desc: "Pembelajaran Front-End Web dengan Bootstrap",
    imgCode: ImgCode,
    imgProfile: ImgProfile,
    tags: ["Hacker", "Web Development", "Front-End"],
    nameMentor: "Andika Slebew",
  },
];

export const dataKelas = [
  {
    title: "Front-End Web dengan Tailwind",
    img: ImgC1,
    icons: [<IoCodeSlash />, <RiPlayLargeLine />],
    tags: ["Hacker", "Video Pembelajaran"],
    progress: 10,
  },
  {
    title: "Front-End Web dengan JavaScript",
    img: ImgC1,
    icons: [<IoCodeSlash />, <RiPlayLargeLine />],
    tags: ["Hacker", "Video Pembelajaran"],
    progress: 20,
  },
  {
    title: "Kelas Pemula: Web Development",
    img: ImgC1,
    icons: [<IoCodeSlash />, <RiPlayLargeLine />],
    tags: ["Hacker", "Video Pembelajaran"],
    progress: 100,
  },
];
