import ImgProfile from "../../assets/img/team/ulum.png";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
export const dataTransaction = [
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
    img: ImgProfile,
    class: "Public Speaking",
    name: "Andika Slebew",
    purchaseId: "1121211111",
    price: "Rp 50.000",
    status: "Sudah Bayar",
    statusColor: " bg-[#ECFDF3] text-green-500",
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
    img: ImgProfile,
    class: "Web Programming",
    name: "Andika Slebew",
    purchaseId: "112141214",
    price: "Rp 120.000",
    status: "Sudah Bayar",
    statusColor: "bg-[#ECFDF3] text-green-500",
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
    img: ImgProfile,
    class: "Project Management",
    name: "Mery Anne",
    purchaseId: "143434444",
    price: "Rp 200.000",
    status: "Sudah Bayar",
    statusColor: "bg-[#ECFDF3] text-green-500",
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
    img: ImgProfile,
    class: "Mobile Dev",
    name: "Yoga andrew",
    purchaseId: "121313132",
    price: "Rp 20.000",
    status: "Sudah Bayar",
    statusColor: "bg-[#ECFDF3] text-green-500",
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
    img: ImgProfile,
    class: "English",
    name: "Sulie prikitihv",
    purchaseId: "3235252532",
    price: "Rp 200.000",
    status: "Sudah Bayar",
    statusColor: "bg-[#ECFDF3] text-green-500",
  },
  {
    id: 6,
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
    img: ImgProfile,
    class: "Japanese",
    name: "Kunkun",
    purchaseId: "2212132323",
    price: "Rp 400.000",
    status: "Belum Bayar",
    statusColor: " bg-[#F2F4F7] text-textLabel",
  },
  {
    id: 7,
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
    img: ImgProfile,
    class: "Japanese",
    name: "Kunkun",
    purchaseId: "2212132323",
    price: "Rp 400.000",
    status: "Dibatalkan",
    statusColor: "bg-[#FFDAD8] text-red-500",
  },
];
export const dataTransactionAdmin = [
  {
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    class: "Japanese",
    purchaseId: "2212132323",
    tgl: "2022-12-13",
    name: "Kunkun",
    purchaseId: "2212132323",
    deadline: "2022-12-14",
    price: "Rp 400.000",
    status: "Dibatalkan",
  },
  {
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    class: "French",
    purchaseId: "2212132325",
    tgl: "2022-12-15",
    name: "Taro",
    deadline: "2022-12-16",
    price: "Rp 600.000",
    status: "Dalam Proses",
  },
  {
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    class: "Spanish",
    purchaseId: "2212132326",
    tgl: "2022-12-16",
    name: "Jiro",
    deadline: "2022-12-17",
    price: "Rp 700.000",
    status: "Dibatalkan",
  },
  {
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    class: "German",
    purchaseId: "2212132327",
    tgl: "2022-12-17",
    name: "Hana",
    deadline: "2022-12-18",
    price: "Rp 800.000",
    status: "Selesai",
  },
  {
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil className="text-primaryBlue" />
        <FaRegTrashAlt className="text-red-500" />
      </div>
    ),
    img: ImgProfile,
    class: "Chinese",
    purchaseId: "2212132328",
    tgl: "2022-12-18",
    name: "Ken",
    deadline: "2022-12-19",
    price: "Rp 900.000",
    status: "Dalam Proses",
  },
];
