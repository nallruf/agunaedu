import { LuPencil } from "react-icons/lu";

export const dataPathRole = [
  {
    id: 1,
    icon: <LuPencil />,
    title: "Web Development",
    desc: "Mulai belajar pemrograman yang sesuai dengan industri saat ini agar dapat berkembang menjadi seorang developer handal.",
    role: (
      <div className="p-2 rounded-lg border-2 font-semibold shadow-sm w-fit">
        Hacker
      </div>
    ),
  },
  {
    id: 2,
    icon: <LuPencil />,
    title: "Data Science",
    desc: "Pelajari cara mengolah dan menganalisis data untuk mendapatkan wawasan berharga dan mendukung pengambilan keputusan bisnis.",
    role: (
      <div className="p-2 rounded-lg border-2 font-semibold shadow-sm w-fit">
        Data Analyst
      </div>
    ),
  },
  {
    id: 3,
    icon: <LuPencil />,
    title: "Mobile Development",
    desc: "Belajar mengembangkan aplikasi mobile yang menarik dan fungsional untuk platform Android dan iOS.",
    role: (
      <div className="p-2 rounded-lg border-2 font-semibold shadow-sm w-fit">
        Mobile Developer
      </div>
    ),
  },
];
