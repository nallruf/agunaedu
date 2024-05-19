import ImgPS from "../../assets/img/kegiatan/public-speaking.jpg";
import ImgMob from "../../assets/img/kegiatan/mob.jpg";
import ImgWeb from "../../assets/img/kegiatan/web.jpg";
import Profile2 from "../../assets/img/team/zainal.png";
import Profile1 from "../../assets/img/team/nabila.png";
import Profile3 from "../../assets/img/team/yudha.png";
import Profile4 from "../../assets/img/team/ulum.png";
import Profile5 from "../../assets/img/team/taufik.png";
import Profile6 from "../../assets/img/team/nasrul.png";

export const dataCardEvent = [
  {
    id: 1,
    title: "Public Speaking",
    date: "Jumat, 24 Mei 2024",
    time: "09.30 WIB",
    desc: "Belajar public speaking sebagai seorang leader",
    tags: ["Hustler", "Public Speaking"],
    imgEvent: ImgPS,
    link: "/event/detail/1",
  },
  {
    id: 2,
    title: "Web Development",
    date: "Minggu, 26 Mei 2024",
    time: "08.00 WIB",
    desc: "Belajar web development untuk pemula dari awal banget",
    tags: ["Hacker", "Web Development"],
    imgEvent: ImgWeb,
    link: "/event/detail/2",
  },
  {
    id: 3,
    title: "Android Dev",
    date: "Sabtu, 1 Juni 2024",
    time: "10.00 WIB",
    desc: "Belajar mobile development tingkat lanjut",
    tags: ["Hacker", "Mobile Dev"],
    imgEvent: ImgMob,
    link: "/event/detail/3",
  },
  {
    id: 4,
    title: "Public Speaking",
    date: "Minggu, 2 Juni 2024",
    time: "14.00 WIB",
    desc: "Belajar public speaking sebagai seorang leader",
    tags: ["Hustler", "Public Speaking"],
    imgEvent: ImgPS,
    link: "/event/detail/4",
  },
  {
    id: 5,
    title: "Web Development",
    date: "Sabtu, 8 Juni 2024",
    time: "13.00 WIB",
    desc: "Belajar web development untuk pemula dari awal banget",
    tags: ["Hacker", "Web Development"],
    imgEvent: ImgWeb,
    link: "/event/detail/5",
  },
];

export const dataDetailEvent = [
  {
    id: 1,
    title: "Webinar Public Speaking",
    date: "Jumat, 24 Mei 2024",
    time: "09:30 - 11:00 WIB",
    loc: "Zoom Meeting",
    desc: "Webinar ini merupakan webinar public speaking untuk membantu terbiasa dengan public speaking.",
    details: `Bergabunglah dengan kami dalam acara yang menginspirasi ini yang bertujuan untuk membekali Anda dengan keterampilan yang diperlukan untuk menjadi seorang pembicara publik yang percaya diri dan berpengaruh. Dalam era di mana komunikasi efektif adalah kunci kesuksesan, keahlian dalam berbicara di depan umum sangat penting, baik untuk karir maupun kehidupan sehari-hari.

      Di acara ini, Anda akan mendapatkan:
      1. Teknik Berbicara yang Efektif: Pelajari teknik-teknik untuk mengatasi rasa gugup, meningkatkan kepercayaan diri, dan menyampaikan pesan dengan jelas dan persuasif.
      2. Struktur Presentasi yang Memukau: Temukan bagaimana merancang presentasi yang menarik perhatian audiens, dari pengantar yang kuat hingga penutup yang mempesona.
      3. Kiat dan Trik dari Ahli: Dapatkan wawasan dari para ahli public speaking yang telah sukses dalam berbagai bidang, siap untuk berbagi pengalaman dan saran praktis mereka.
      4. Sesi Latihan Langsung

      Tanggal: Jumat, 24 Mei 2024
      Waktu: 09:30 - 11:00 WIB
      Tempat: Zoom Meeting

      Jangan lewatkan kesempatan ini untuk mengasah keterampilan berbicara Anda dan menjadi pemimpin dalam komunikasi publik. Segera daftar dan pastikan tempat Anda!
    `,
    imgEvent: ImgPS,
    komunitas: "Komunitas IT Yogyakarta",
    speakers: [
      {
        name: "Zainar Ma'ruf Abidin",
        role: "CEO Komunitas IT Yogya",
        img: Profile2,
      },
      {
        name: "Nabila Dinda Aisyah",
        role: "Hustler Aguna",
        img: Profile1,
      },
      {
        name: "Yudha Aryo W",
        role: "Senior Web Developer Aguna",
        img: Profile3,
      },
    ],
  },
  {
    id: 2,
    title: "Workshop Web Development",
    date: "Minggu, 26 Mei 2024",
    time: "08:00 - 12:00 WIB",
    loc: "Online via Google Meet",
    desc: "Workshop intensif untuk belajar web development dari nol.",
    details: `Workshop ini ditujukan bagi pemula yang ingin memulai karir dalam web development. Selama workshop, Anda akan mempelajari dasar-dasar HTML, CSS, dan JavaScript, serta bagaimana membuat sebuah website sederhana.

      Dalam workshop ini, Anda akan mendapatkan:
      1. Pengenalan HTML, CSS, dan JavaScript.
      2. Latihan praktek membuat halaman web dasar.
      3. Tips dan trik dari developer berpengalaman.
      4. Sesi tanya jawab dan diskusi.

      Tanggal: Minggu, 26 Mei 2024
      Waktu: 08:00 - 12:00 WIB
      Tempat: Online via Google Meet

      Segera daftar untuk memastikan tempat Anda di workshop ini dan mulai perjalanan Anda menjadi web developer!
    `,
    imgEvent: ImgWeb,
    komunitas: "Komunitas Web Dev Indonesia",
    speakers: [
      {
        name: "Yudha Aryo W",
        role: "Senior Web Developer Aguna",
        img: Profile3,
      },
      {
        name: "Bahrul 'Ulum Fadhlur R",
        role: "Senior Web Developer Aguna",
        img: Profile4,
      },
    ],
  },
  {
    id: 3,
    title: "Advanced Android Development",
    date: "Sabtu, 1 Juni 2024",
    time: "10:00 - 13:00 WIB",
    loc: "In-Person at IT Campus",
    desc: "Pelatihan lanjutan untuk mengembangkan aplikasi Android.",
    details: `Pelatihan ini dirancang untuk pengembang Android yang ingin meningkatkan keterampilan mereka ke tingkat berikutnya. Anda akan belajar tentang arsitektur aplikasi, integrasi API, dan praktik terbaik dalam pengembangan Android.

      Dalam pelatihan ini, Anda akan mendapatkan:
      1. Pengenalan arsitektur MVVM.
      2. Latihan integrasi API dan database.
      3. Optimisasi performa aplikasi.
      4. Sesi praktek dan kode bersama.

      Tanggal: Sabtu, 1 Juni 2024
      Waktu: 10:00 - 13:00 WIB
      Tempat: In-Person at IT Campus

      Jangan lewatkan kesempatan untuk meningkatkan keterampilan Anda dan membuat aplikasi Android yang lebih canggih. Daftar sekarang!
    `,
    imgEvent: ImgMob,
    komunitas: "Komunitas Android Dev",
    speakers: [
      {
        name: "Zainar Ma'ruf Abidin",
        role: "Lead Developer IT Yogyakarta",
        img: Profile2,
      },
      {
        name: "Nasrul Hidayat",
        role: "Developer & Hipster Aguna",
        img: Profile6,
      },
    ],
  },
  {
    id: 4,
    title: "Advanced Public Speaking",
    date: "Minggu, 2 Juni 2024",
    time: "14:00 - 17:00 WIB",
    loc: "Online via Zoom",
    desc: "Pelatihan lanjutan untuk mengasah keterampilan public speaking.",
    details: `Dalam pelatihan ini, Anda akan mempelajari teknik lanjutan dalam public speaking yang akan membantu Anda menjadi pembicara yang lebih percaya diri dan efektif. Fokus pada improvisasi, pengendalian audiens, dan presentasi yang memukau.

      Di pelatihan ini, Anda akan mendapatkan:
      1. Teknik improvisasi dalam berbicara.
      2. Cara mengendalikan dan mempengaruhi audiens.
      3. Desain dan penyampaian presentasi yang memukau.
      4. Sesi praktek langsung dengan feedback.

      Tanggal: Minggu, 2 Juni 2024
      Waktu: 14:00 - 17:00 WIB
      Tempat: Online via Zoom

      Tingkatkan keterampilan public speaking Anda ke tingkat berikutnya dengan bergabung di pelatihan ini. Daftar sekarang!
    `,
    imgEvent: ImgPS,
    komunitas: "Komunitas Public Speaking",
    speakers: [
      {
        name: "Nabila Dinda Aisyah",
        role: "Hustler & CEO Aguna",
        img: Profile1,
      },
      {
        name: "Taufik Hidayat",
        role: "Trainer Public Speaking",
        img: Profile5,
      },
    ],
  },
  {
    id: 5,
    title: "Beginner Web Development",
    date: "Sabtu, 8 Juni 2024",
    time: "13:00 - 16:00 WIB",
    loc: "Online via Google Meet",
    desc: "Workshop dasar untuk memulai perjalanan sebagai web developer.",
    details: `Workshop ini didesain untuk pemula yang ingin mempelajari dasar-dasar pengembangan web. Anda akan belajar tentang HTML, CSS, dan JavaScript, serta cara membangun website sederhana dari awal.

      Dalam workshop ini, Anda akan mendapatkan:
      1. Pengenalan HTML, CSS, dan JavaScript.
      2. Latihan praktek membuat halaman web dasar.
      3. Tips dan trik dari developer berpengalaman.
      4. Sesi tanya jawab dan diskusi.

      Tanggal: Sabtu, 8 Juni 2024
      Waktu: 13:00 - 16:00 WIB
      Tempat: Online via Google Meet

      Daftarkan diri Anda sekarang dan mulai perjalanan Anda sebagai web developer dengan mengikuti workshop ini!
    `,
    imgEvent: ImgWeb,
    komunitas: "Komunitas Web Dev Indonesia",
    speakers: [
      {
        name: "Yudha Aryo W",
        role: "Senior Web Developer",
        img: Profile3,
      },
      {
        name: "Bahrul Ulum Fadhlur R",
        role: "Developer Aguna",
        img: Profile4,
      },
    ],
  },
];
