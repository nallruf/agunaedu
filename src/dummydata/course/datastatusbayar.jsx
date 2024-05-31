import { LuDownload } from "react-icons/lu";
import { MdOutlineUploadFile, MdReplay } from "react-icons/md";
import ImgSukses from "../../assets/img/illustration/sukses.png";
import ImgGagal from "../../assets/img/illustration/gagal.png";
import ImgWait from "../../assets/img/illustration/wait.png";

const formatDate = (date) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("id-ID", options).format(date);
};

export const transactionData = {
  waiting: {
    imgstatus: ImgWait,
    title: "Menunggu Pembayaran",
    message: "Lakukan pembayaran untuk memulai pembelajaran",
    idPembayaran: "02223977",
    tanggal: formatDate(new Date()),
    bayarSebelum: 60 * 60,
    noVirtual: "00036734987",
    jumlah: "Rp 175.000",
    buttonText: "Upload Bukti Pembayaran",
    buttonIcon: <MdOutlineUploadFile />,
  },
  success: {
    imgstatus: ImgSukses,
    title: "Transaksi Berhasil!",
    message: "Transaksi mu berhasil, mulai belajar sekarang!",
    idPembayaran: "02223977",
    tanggal: formatDate(new Date()),
    waktu: new Date().toLocaleTimeString(),
    metodePembayaran: "Gopay",
    jumlah: "Rp 175.000",
    buttonText: "Unduh Bukti Transaksi",
    buttonIcon: <LuDownload />,
  },
  failed: {
    imgstatus: ImgGagal,
    title: "Transaksi Gagal",
    message: "Transaksi gagal karena melewati batas waktu pembayaran",
    idPembayaran: "02223977",
    tanggal: formatDate(new Date()),
    metodePembayaran: "Gopay",
    jumlah: "Rp 175.000",
    buttonText: "Coba Lagi",
    buttonIcon: <MdReplay />,
  },
};
