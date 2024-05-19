import ImgC1 from "../../assets/img/kegiatan/c1.jpg";
import ImgC2 from "../../assets/img/kegiatan/c2.jpg";
import ImgC3 from "../../assets/img/kegiatan/c3.jpg";
import ImgC4 from "../../assets/img/kegiatan/c4.jpg";
import ImgC5 from "../../assets/img/kegiatan/c5.jpg";
import Profile3 from "../../assets/img/team/ulum.png";
import Profile2 from "../../assets/img/team/zainal.png";
import Profile1 from "../../assets/img/team/yudha.png";
import Avatar from "../../assets/img/illustration/avatar1.jpg";
import { IoCodeSlash } from "react-icons/io5";
import { IoMedalOutline } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";

export const dataCardChallenge = [
  {
    id: 1,
    title: "Mobile App dengan Flutter",
    date: "20 Maret - 30 Agustus 2024",
    icons: [<IoCodeSlash />, <IoMedalOutline />],
    tags: ["Mobile", "Challenge"],
    imgChallenge: ImgC1,
    link: "/challenge/detail/1",
  },
  {
    id: 2,
    title: "UI/UX Design Crazy 8",
    date: "15 April - 15 September 2024",
    icons: [<BiPencil />, <IoMedalOutline />],
    tags: ["Designer", "Challenge"],
    imgChallenge: ImgC2,
    link: "/challenge/detail/2",
  },
  {
    id: 3,
    title: "UI/UX Design Wall Display",
    date: "10 Mei - 10 Oktober 2024",
    icons: [<BiPencil />, <IoMedalOutline />],
    tags: ["Designer", "Challenge"],
    imgChallenge: ImgC3,
    link: "/challenge/detail/3",
  },
  {
    id: 4,
    title: "Web Development with React",
    date: "1 Juni - 1 November 2024",
    icons: [<IoCodeSlash />, <IoMedalOutline />],
    tags: ["Web", "Challenge"],
    imgChallenge: ImgC4,
    link: "/challenge/detail/4",
  },
  {
    id: 5,
    title: "Mobile App Development",
    date: "5 Juli - 5 Desember 2024",
    icons: [<IoCodeSlash />, <IoMedalOutline />],
    tags: ["Mobile", "Challenge"],
    imgChallenge: ImgC5,
    link: "/challenge/detail/5",
  },
];

export const dataLeaderboard = [
  {
    id: 1,
    rank: 1,
    name: "Yudhi Yudhi Markoni",
    xp: "54k Xp",
    profileImg: Profile1,
  },
  {
    id: 2,
    rank: 2,
    name: "Jenal Jenal Amal",
    xp: "53k Xp",
    profileImg: Profile2,
  },
  {
    id: 3,
    rank: 3,
    name: "Ulam Ulam Malam",
    xp: "52k Xp",
    profileImg: Profile3,
  },
  {
    id: 4,
    rank: 4,
    name: "Chassandra Aninda SD",
    xp: "50k Xp",
    profileImg: Avatar,
  },
  {
    id: 5,
    rank: 5,
    name: "Anne Sebastian MS",
    xp: "49k Xp",
    profileImg: Avatar,
  },
  {
    id: 6,
    rank: 6,
    name: "Sule Prikitiw Sunima",
    xp: "47k Xp",
    profileImg: Avatar,
  },
  {
    id: 7,
    rank: 7,
    name: "Alexander Alex Graham",
    xp: "42k Xp",
    profileImg: Avatar,
  },
  {
    id: 8,
    rank: 8,
    name: "Albert Einstein Tan",
    xp: "39k Xp",
    profileImg: Avatar,
  },
  {
    id: 9,
    rank: 9,
    name: "Sopo Jarwo Adit",
    xp: "35k Xp",
    profileImg: Avatar,
  },
  {
    id: 10,
    rank: 10,
    name: "Rossie Sulaiman Joko",
    xp: "30k Xp",
    profileImg: Avatar,
  },
];

export const dataDetailChallenge = [
  {
    id: 1,
    title: "Mobile App dengan Flutter",
    desc: "Membuat mobile app pembelajaran dengan menggunakan flutter",
    win: "3 Orang",
    date: "20 Maret - 30 Agustus 2024",
    details: `Goals
    Membuat sebuah aplikasi mobile menggunakan flutter. Silahkan buat 3 halaman utama desain UI nya dan lakukan pendevelopan terhadap 3 halaman desain UI nya menggunakan Flutter.
    
    Fitur yang tersedia pada 3 halaman utama tersebut bebas berisi tentang apapun, seputar pendidikan. Anda juga bebas untuk menambahkan halaman tambahan jika diperlukan.
    
    Persyaratan
    1. Menggunakan Flutter
    2. Menggunakan Dart
    3. Menggunakan Figma untuk desain UI/UX
    
    Hadiah
    3 Pemenang akan mendapatkan kelas gratis, 7 pemenang lainnya akan mendapatkan voucher pembelian kelas mentoring.
    `,
    imgChallenge: ImgC1,
  },
  {
    id: 2,
    title: "UI/UX Design Crazy 8",
    desc: "Desain UI/UX untuk aplikasi pembelajaran menggunakan metode Crazy 8",
    win: "5 Orang",
    date: "15 April - 15 September 2024",
    details: `Goals
    Membuat desain UI/UX yang menarik dan inovatif menggunakan metode Crazy 8. Silahkan buat beberapa sketsa dan finalisasi desainnya.
    
    Persyaratan
    1. Menggunakan Figma atau Adobe XD
    2. Menggunakan metode Crazy 8 untuk brainstorming
    
    Hadiah
    5 Pemenang akan mendapatkan akses ke kelas desain premium.
    `,
    imgChallenge: ImgC2,
  },
  {
    id: 3,
    title: "UI/UX Design Wall Display",
    desc: "Desain tampilan dinding interaktif untuk aplikasi pendidikan",
    win: "3 Orang",
    date: "10 Mei - 10 Oktober 2024",
    details: `Goals
    Membuat desain tampilan dinding interaktif yang menarik untuk aplikasi pendidikan. Fokus pada interaktivitas dan user experience.
    
    Persyaratan
    1. Menggunakan Figma atau Adobe XD
    2. Menggunakan prinsip-prinsip UI/UX yang baik
    
    Hadiah
    3 Pemenang akan mendapatkan akses ke perangkat lunak desain premium.
    `,
    imgChallenge: ImgC3,
  },
  {
    id: 4,
    title: "Web Development with React",
    desc: "Membuat aplikasi web menggunakan React",
    win: "4 Orang",
    date: "1 Juni - 1 November 2024",
    details: `Goals
    Membangun aplikasi web yang fungsional dan responsif menggunakan React. Buat setidaknya 3 halaman dengan berbagai fitur.
    
    Persyaratan
    1. Menggunakan React
    2. Menggunakan JavaScript dan CSS
    
    Hadiah
    4 Pemenang akan mendapatkan akses ke kursus lanjutan React.
    `,
    imgChallenge: ImgC4,
  },
  {
    id: 5,
    title: "Mobile App Development",
    desc: "Mengembangkan aplikasi mobile dengan berbagai fitur menarik",
    win: "6 Orang",
    date: "5 Juli - 5 Desember 2024",
    details: `Goals
    Membuat aplikasi mobile dengan berbagai fitur yang menarik dan user-friendly. Buat setidaknya 3 halaman utama dan implementasikan fungsionalitas dasar.
    
    Persyaratan
    1. Menggunakan platform pilihan (Flutter, React Native, dll.)
    2. Menggunakan desain UI/UX yang baik
    
    Hadiah
    6 Pemenang akan mendapatkan akses ke kelas pengembangan mobile lanjutan.
    `,
    imgChallenge: ImgC5,
  },
];
