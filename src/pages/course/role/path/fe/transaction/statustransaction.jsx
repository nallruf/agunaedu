import React from "react";
import ImgSukses from "../../../../../../assets/img/illustration/sukses.png";
import { LuDownload } from "react-icons/lu";
import Logo from "../../../../../../assets/img/logo/logo-name-biru.png";
import { MdOutlineFileUpload } from "react-icons/md";

const StatusTransactionPage = () => {
  return (
    <>
      <section className="bg-primaryBlue h-max  ">
        <div className="bg-white py-5 pl-8">
          <img className="h-9" src={Logo} alt="logoaguna" />
        </div>
        <div className="flex justify-center  p-40">
          <div className="bg-white rounded-xl  md:w-[600px] p-4 relative  ">
            <div className="flex flex-col justify-center my-auto items-center gap-5">
              <div>
                <img src={ImgSukses} alt="sukses" />
              </div>
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-3xl font-semibold text-textPrimary">
                  Transaksi Berhasil!
                </h1>
                {/* <h1 className="text-3xl font-semibold text-textPrimary">
                  Menunggu Pembayaran
                </h1>
                <h1 className="text-3xl font-semibold text-textPrimary">
                  Transaksi Gagal
                </h1> */}
                <span className="text-textTertiary">
                  Transaksi mu berhasil, mulai belajar sekarang!
                </span>
                {/* <span className="text-textTertiary">
                  Lakukan pembayaran untuk memulai pembelajaran
                </span>
                <span className="text-textTertiary">
                  Transaksi gagal karena melewati batas waktu pembayaran
                </span>
                <span className="text-textTertiary">
                  Maaf! Transaksimu gagal, harap menunggu atau coba lagi
                </span> */}
              </div>
            </div>
            <div className="flex flex-col p-8 gap-3">
              <hr />
              <div className="flex justify-between">
                <span className="font-semibold text-textTertiary">
                  Id Pembayaran
                </span>
                <div>
                  <span className="font-semibold text-textPrimary">
                    02223977
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-textTertiary">Tanggal</span>
                <div>
                  <span className="font-semibold text-textPrimary">
                    11 Juni 2023
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-textTertiary">Waktu</span>
                <div>
                  <span className="font-semibold text-textPrimary">
                    18:05:34
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-textTertiary">
                  No Virtual Pembayaran
                </span>
                <div>
                  <span className="font-semibold text-textPrimary">
                    00036734987
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-textTertiary">
                  Bayar Sebelum
                </span>
                <div>
                  <span className="font-semibold text-textPrimary">
                    24:00:01
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-textTertiary">
                  Metode Pembayaran
                </span>
                <div>
                  <span className="font-semibold text-textPrimary">Gopay</span>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <hr />
                <div className="flex justify-between">
                  <span className="font-semibold text-textTertiary">
                    Jumlah
                  </span>
                  <div>
                    <span className="font-semibold text-textPrimary">
                      Rp 175.000
                    </span>
                  </div>
                </div>
                <div className="flex justify-center mt-[50px]">
                  <button className="flex justify-center gap-2 border bg-[#F9FAFB] border-[#85CAFF] text-textSecondary py-[10px] px-[30px] rounded-lg font-semibold text-sm w-full">
                    <LuDownload /> Unduh Bukti Transakasi
                  </button>
                </div>
                {/* <div className="flex justify-center mt-[50px]">
                  <button className="flex justify-center gap-2 border bg-primaryBlue text-white py-[10px] px-[30px] rounded-lg font-semibold text-sm w-full">
                    Coba Lagi
                  </button>
                </div> */}
                {/* <div className="flex justify-center mt-[50px]">
                  <button className="flex justify-center gap-2 border bg-[#F9FAFB] border-[#85CAFF] text-textSecondary py-[10px] px-[30px] rounded-lg font-semibold text-sm w-full">
                    <MdOutlineFileUpload /> Upload Bukti Pembayaran
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-4 absolute bottom-4 right-8 ">
            <button className=" text-white ">Lanjutkan ke kelas</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatusTransactionPage;
