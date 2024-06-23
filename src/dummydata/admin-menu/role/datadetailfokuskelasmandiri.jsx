import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
export const dataDetailFocusKelasMandiri = [
  {
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
      </div>
    ),
    id: 1,
    title: "Front End Web dengan Js",
    desc: "Mempelejari HTML, CSS, dan Js",
    price: "$499",
    level: "Intermediate",
    mentor: "Jane Smith",
    metode: "Online, Self-paced",
    tools: "VSCode, Git, Node.js",
    skill: "HTML, CSS, JavaScript, Node.js",
  },
];

export const dataMentorKelasMandiri = [
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
    name: "Bahrul Ulum F",
    aboutmentor:
      "Mentor adalah seorang web developer yang sedang bekerja di Gojek selama 3 tahun dan telah menempuh pendidikan S1 Teknik Informatiknya di Universitas Brawijaya. ",
    skills: "Web Development, Front End WEb, Back-End Web, HTML & CSS",
    review: "500 Reviews",
    work: "Front-End Web Developer",
  },
];
export const dataMateriKelasMandiri = [
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
    name: "Dasar JavaScript",
    video: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Video
      </div>
    ),
    pdf: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Link PDF
      </div>
    ),
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
    name: "Routing",
    video: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Video
      </div>
    ),
    pdf: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Link PDF
      </div>
    ),
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
    name: "Styling",
    video: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Video
      </div>
    ),
    pdf: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Link PDF
      </div>
    ),
  },
  {
    id: 4,
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
    name: "Deploy",
    video: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Video
      </div>
    ),
    pdf: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Link PDF
      </div>
    ),
  },
  {
    id: 5,
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
    name: "Pengujian",
    video: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Video
      </div>
    ),
    pdf: (
      <div className="border border-secondaryBlue gap-2 flex bg-[#F9FAFB] shadow-md items-center px-4 py-2 rounded-xl w-fit">
        <AiOutlineLink /> Link PDF
      </div>
    ),
  },
];
