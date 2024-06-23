import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

export const dataTesRole = [
  {
    id: 1,
    icon: <LuPencil />,
    title: "Tes Dasar Hacker",
    desc: "Tes ini akan membantu kamu untu lebih memahami tentang apa",

    skill: " Web Programmiing, HTML & CSS, Teori Programming",
    durasi: "1 Jam 20 Menit",
  },
];
export const dataDetailTesDasar = [
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
    title: "Tes Dasar Hacker",
    desc: "Tes ini akan membantu kamu untu lebih memahami tentang apa",

    skill: " Web Programmiing, HTML & CSS, Teori Programming",
    durasi: "1 Jam 20 Menit",
  },
];

export const dataSoalTesDasar = [
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
    question: "HTML",
    answer: "aodfoisa",
    skor: "1000",
  },
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
    question:
      "Protokol apa yang digunakan untuk mengirim data dalam bentuk teks antara client dan server? ",
    answer: "A",
    skor: "1000",
  },
  {
    id: 2,
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
    question: "Apa yang disebut Web Development ",
    answer: "B",
    skor: "1000",
  },
  {
    id: 3,
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
    question: "Apa yang disebut Web Development ",
    answer: "A",
    skor: "1000",
  },
];
