import { IoCodeSlash, IoPencil } from "react-icons/io5";
import TestWeb from "../../assets/img/gambarcard/kls-pemula-webdev.jpg";
import TestMob from "../../assets/img/gambarcard/kls-pemula-mobiledev.jpg";
import TestPS from "../../assets/img/gambarcard/tes-pm.jpg";
import TestBisnis from "../../assets/img/gambarcard/hustler_publicspeaking.jpg";
import TestDesign from "../../assets/img/gambarcard/hipster_UIUX.jpg";
import TestUI from "../../assets/img/gambarcard/hipster_UI.jpg";
import { LuBarChart } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { RiSpeakFill } from "react-icons/ri";

// Hacker Data
export const dataHacker = [
  {
    kelas: "Kelas Pemula Hacker",
    data: [
      {
        id: 1,
        img: TestWeb,
        icon1: <IoCodeSlash />,
        tes: ["Hacker", "Pemula"],
        titlecard: "Web Dev",
        desccard: "Mempelajari dasar Web Dev",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Pemula",
        rating: "4.9 (2k)",
        isLocked: false,
      },
      {
        id: 2,
        img: TestMob,
        icon1: <IoCodeSlash />,
        tes: ["Hacker", "Pemula"],
        titlecard: "Mobile Dev",
        desccard: "Mempelajari dasar Mobile Dev",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Pemula",
        rating: "4.9 (2k)",
        isLocked: false,
      },
    ],
  },
  {
    kelas: "Web Development",
    data: [
      {
        id: 1,
        img: TestWeb,
        icon1: <IoCodeSlash />,
        tes: ["Hacker", "Web"],
        titlecard: "Front-End Web Dev",
        desccard: "Mempelajari Front-End Web Dev",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.9 (2k)",
        isLocked: false,
        link: "/course/hacker/path-web",
      },
      {
        id: 2,
        img: TestWeb,
        icon1: <IoCodeSlash />,
        tes: ["Hacker", "Web"],
        titlecard: "Back-End Web Dev",
        desccard: "Mempelajari Back-End Web Dev",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.9 (2k)",
        isLocked: false,
        link: "/course/hacker/path-web",
      },
      {
        id: 3,
        img: TestWeb,
        icon1: <IoCodeSlash />,
        tes: ["Hacker", "Web"],
        titlecard: "Full Stack Web Dev",
        desccard: "Mempelajari Full Stack Web Dev",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.9 (2k)",
        isLocked: false,
        link: "/course/hacker/path-web",
      },
    ],
  },
  {
    kelas: "Mobile Development",
    data: [
      {
        id: 1,
        img: TestMob,
        icon1: <IoCodeSlash />,
        tes: ["Hacker", "Mobile"],
        titlecard: "Front-End Mobile Dev",
        desccard: "Mempelajari Front-End Mob Dev",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.9 (2k)",
        isLocked: true,
      },
      {
        id: 2,
        img: TestMob,
        icon1: <IoCodeSlash />,
        tes: ["Hacker", "Mobile"],
        titlecard: "Back-End Mobile Dev",
        desccard: "Mempelajari Back-End Mob Dev",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.9 (2k)",
        isLocked: true,
      },
      {
        id: 3,
        img: TestMob,
        icon1: <IoCodeSlash />,
        tes: ["Hacker", "Mobile"],
        titlecard: "Full Stack Mobile Dev",
        desccard: "Mempelajari Full Stack Mob Dev",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Tinggi",
        rating: "4.9 (2k)",
        isLocked: true,
      },
    ],
  },
];

// Hustler Data
export const dataHustler = [
  {
    kelas: "Kelas Pemula Hustler",
    data: [
      {
        id: 1,
        img: TestPS,
        icon1: <RiSpeakFill />,
        tes: ["Hustler", "Pemula"],
        titlecard: "Introduction to Business",
        desccard: "Mempelajari dasar-dasar bisnis",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Pemula",
        rating: "4.8 (1.5k)",
        isLocked: false,
      },
      {
        id: 2,
        img: TestBisnis,
        icon1: <RiSpeakFill />,
        tes: ["Hustler", "Pemula"],
        titlecard: "Basic Marketing",
        desccard: "Mempelajari dasar-dasar pemasaran",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Pemula",
        rating: "4.7 (1.3k)",
        isLocked: false,
      },
    ],
  },
  {
    kelas: "Public Speaking",
    data: [
      {
        id: 1,
        img: TestPS,
        icon1: <RiSpeakFill />,
        tes: ["Hustler", "Speaking"],
        titlecard: "Effective Com",
        desccard: "Mempelajari komunikasi yang efektif",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.7 (1.2k)",
        isLocked: true,
      },
      {
        id: 2,
        img: TestPS,
        icon1: <RiSpeakFill />,
        tes: ["Hustler", "Speaking"],
        titlecard: "Persuasive Speaking",
        desccard: "Mempelajari teknik berbicara persuasif",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.8 (1.3k)",
        isLocked: true,
      },
      {
        id: 3,
        img: TestPS,
        icon1: <RiSpeakFill />,
        tes: ["Hustler", "Speaking"],
        titlecard: "Public Relations",
        desccard: "Mempelajari hubungan masyarakat",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.9 (1.1k)",
        isLocked: true,
      },
    ],
  },
  {
    kelas: "Advanced Business Strategies",
    data: [
      {
        id: 1,
        img: TestBisnis,
        icon1: <RiSpeakFill />,
        tes: ["Hustler", "Business"],
        titlecard: "Market Analysis",
        desccard: "Mempelajari analisis pasar",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Tinggi",
        rating: "4.9 (1k)",
        isLocked: true,
      },
      {
        id: 2,
        img: TestBisnis,
        icon1: <RiSpeakFill />,
        tes: ["Hustler", "Business"],
        titlecard: "Strategic Planning",
        desccard: "Mempelajari perencanaan strategis",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Tinggi",
        rating: "4.9 (1k)",
        isLocked: true,
      },
      {
        id: 3,
        img: TestBisnis,
        icon1: <RiSpeakFill />,
        tes: ["Hustler", "Business"],
        titlecard: "Financial Management",
        desccard: "Mempelajari manajemen keuangan",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Tinggi",
        rating: "4.9 (1k)",
        isLocked: true,
      },
    ],
  },
];

// Hipster Data
export const dataHipster = [
  {
    kelas: "Kelas Pemula Hipster",
    data: [
      {
        id: 1,
        img: TestDesign,
        icon1: <IoPencil />,
        tes: ["Hipster", "Pemula"],
        titlecard: "Basic Design",
        desccard: "Mempelajari dasar-dasar desain",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Pemula",
        rating: "4.8 (1.3k)",
        isLocked: false,
      },
      {
        id: 2,
        img: TestUI,
        icon1: <IoPencil />,
        tes: ["Hipster", "Pemula"],
        titlecard: "Introduction to UX",
        desccard: "Mempelajari dasar-dasar UX",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Pemula",
        rating: "4.7 (1.2k)",
        isLocked: false,
      },
    ],
  },
  {
    kelas: "UI UX Design",
    data: [
      {
        id: 1,
        img: TestDesign,
        icon1: <IoPencil />,
        tes: ["Hipster", "Design"],
        titlecard: "User Interface Design",
        desccard: "Mempelajari desain antarmuka pengguna",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.7 (1.4k)",
        isLocked: true,
      },
      {
        id: 2,
        img: TestDesign,
        icon1: <IoPencil />,
        tes: ["Hipster", "Design"],
        titlecard: "User Experience Design",
        desccard: "Mempelajari pengalaman pengguna",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.8 (1.2k)",
        isLocked: true,
      },
      {
        id: 3,
        img: TestDesign,
        icon1: <IoPencil />,
        tes: ["Hipster", "Design"],
        titlecard: "Interaction Design",
        desccard: "Mempelajari desain interaksi",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Menengah",
        rating: "4.7 (1.3k)",
        isLocked: true,
      },
    ],
  },
  {
    kelas: "Advanced Design",
    data: [
      {
        id: 1,
        img: TestUI,
        icon1: <IoPencil />,
        tes: ["Hipster", "Design"],
        titlecard: "Creative Thinking",
        desccard: "Mempelajari berpikir kreatif",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Tinggi",
        rating: "4.9 (1.1k)",
        isLocked: true,
      },
      {
        id: 2,
        img: TestUI,
        icon1: <IoPencil />,
        tes: ["Hipster", "Design"],
        titlecard: "Graphic Design",
        desccard: "Mempelajari desain grafis tingkat lanjut",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Tinggi",
        rating: "4.9 (1.3k)",
        isLocked: true,
      },
      {
        id: 3,
        img: TestUI,
        icon1: <IoPencil />,
        tes: ["Hipster", "Design"],
        titlecard: "Design Leadership",
        desccard: "Mempelajari kepemimpinan dalam desain",
        icon2: <LuBarChart />,
        icon3: <GoStarFill />,
        level: "Level Tinggi",
        rating: "4.8 (1.2k)",
        isLocked: true,
      },
    ],
  },
];
