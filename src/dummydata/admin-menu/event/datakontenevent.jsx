import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
export const dataKontenEvent = [
  {
    id: 1,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    title: "Webinar Public Speaking",
    sub: "Webinar ini merupakan webinar public speaking untuk membantu terbiasa dengan public speaking.",
    desc: "Bergabunglah dengan kami dalam acara yang menginspirasi ini yang bertujuan untuk membekali Anda dengan keterampilan yang diperlukan untuk menjadi seorang pembicara publik yang percaya diri dan berpengaruh. ",
  },
];
