import { LuDownload } from "react-icons/lu";
import { MdOutlineUploadFile, MdReplay } from "react-icons/md";
import ImgSukses from "../../assets/img/illustration/sukses.png";
import ImgGagal from "../../assets/img/illustration/gagal.png";
import ImgWait from "../../assets/img/illustration/wait.png";

export const transactionData = {
  waiting: {
    imgstatus: ImgWait,
    title: "Menunggu Pembayaran",
    message: "Lakukan pembayaran untuk memulai pembelajaran",
    buttonText: "Upload Bukti Pembayaran",
    buttonIcon: <MdOutlineUploadFile />,
  },
  pending: {
    imgstatus: ImgWait,
    title: "Menunggu Konfirmasi Admin",
    message: "Mohon tunggu dikonfirmasi oleh Admin Aguna",
  },
  success: {
    imgstatus: ImgSukses,
    title: "Transaksi Berhasil!",
    message: "Transaksi mu berhasil, mulai belajar sekarang!",
    buttonText: "Unduh Bukti Transaksi",
    buttonIcon: <LuDownload />,
  },
  failed: {
    imgstatus: ImgGagal,
    title: "Transaksi Gagal",
    message: "Transaksi gagal karena melewati batas waktu pembayaran",
    buttonText: "Coba Lagi",
    buttonIcon: <MdReplay />,
  },
};
