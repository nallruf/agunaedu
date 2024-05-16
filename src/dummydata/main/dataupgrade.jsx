import ImgEvent from "../../assets/img/gambarcard/event1.jpg";
import ImgEvent2 from "../../assets/img/gambarcard/event2.jpg";
import ImgChallenge from "../../assets/img/gambarcard/challenge1.jpg";
import ImgChallenge2 from "../../assets/img/gambarcard/challenge2.jpg";

export const dataUpgrade = [
  {
    imgPath: ImgEvent,
    title: "Event Development",
    text: "Belajar Event pemrograman dari awal hingga bisa membuat Event",
    subs: ["Hacker", "Event", "Logic"],
  },
  {
    imgPath: ImgEvent2,
    title: "Project Management",
    text: "Mengatur project dengan framework scrum",
    subs: ["Hustler", "Event", "PM"],
  },
  {
    imgPath: ImgChallenge,
    title: "Mobile Development",
    text: "Buat 3 Halaman UI Mobile menggunakan Dart dan Flutter",
    subs: ["Hacker", "Challenge", "Mobile"],
  },
  {
    imgPath: ImgChallenge2,
    title: "UI/UX Design",
    text: "Membuat redesign website kami dari tahapan awal",
    subs: ["Hipster", "Challenge", "UI/UX"],
  },
];

export const dataSide = [
  {
    title: "Event IT Gratis!!",
    desc: "Berbagai event khusus di bidang IT hanya untuk para Mentee!",
    onclick: "/event",
    button: "Cari Event",
  },
  {
    title: "Uji Kemampuanmu, Yuk!",
    desc: "Asah kemampuanmu dengan mengikuti berbagai challenge yang kami sediakan dan menangkan hadiahnya!",
    onclick: "/challenge",
    button: "Cari Challenge",
  },
];
