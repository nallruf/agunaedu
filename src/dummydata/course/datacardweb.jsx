import { FaLaptop } from "react-icons/fa";
import { LuBarChart } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import ImgHackerAlgo from "../../assets/img/gambarcard/hackeralgo.jpg";
import ImgHackerWeb from "../../assets/img/gambarcard/hacker_web.jpg";
import ImgHackerMobile from "../../assets/img/gambarcard/hacker_mobile.jpg";
import ImgHustlerLead from "../../assets/img/gambarcard/hustler_leadership.jpg";

export const dataCardWeb = [
  {
    id: 1,
    img: ImgHackerAlgo,
    icon1: <FaLaptop />,
    tes: ["Front End Web"],
    titlecard: "Front End Web with HTML CSS ",
    desccard:
      "Tes Dasar Mempelajari Front End web dengan HTML dan CSS membuka kelas hacker",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Menengah",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    id: 2,
    img: ImgHackerWeb,
    icon1: <FaLaptop />,
    tes: ["Front End Web", "Web"],
    titlecard: "Modern Website Tailwind CSS ",
    desccard:
      "Mempelajari Tailwind css pada website modern dengan design trend terbaru",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Tinggi",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    id: 3,
    img: ImgHackerMobile,
    icon1: <FaLaptop />,
    tes: ["Front End Web", "Web"],
    titlecard: "React JS & Tailwind CSS",
    desccard: "Mengimplementasikan Tailwind CSS ke dalam React JS",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Tinggi",
    rating: "4.9 (2k)",
    isLocked: false,
  },
  {
    id: 4,
    img: ImgHustlerLead,
    icon1: <FaLaptop />,
    tes: ["Front End Web", "Web"],
    titlecard: " Front End dengan Laravel",
    desccard: "Mempelajari cara front end dengan laravel",
    icon2: <LuBarChart />,
    icon3: <GoStarFill />,
    level: "Level Tinggi",
    rating: "4.9 (2k)",
    isLocked: false,
  },
];

export const dataSideWeb = [
  {
    title: "Front End Web Development",
    desc: "Berbagai course khusus front-end web yang bisa kamu pelajari!",
  },
  {
    title: "Back End Web Development",
    desc: "Berbagai course khusus back-end web yang bisa kamu pelajari!",
  },
  {
    title: "Full Stack Web Development",
    desc: "Berbagai course khusus full stack web yang bisa kamu pelajari!",
  },
];
