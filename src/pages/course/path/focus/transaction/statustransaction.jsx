import React, { useState, useEffect } from "react";
import Logo from "../../../../../assets/img/logo/logo-name-biru.png";
import { transactionData } from "../../../../../dummydata/course/datastatusbayar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import { dataFeWeb } from "../../../../../dummydata/course/datadetailweb";
import NotFoundPage from "../../../../notfound";

const StatusTransactionPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const event = dataFeWeb.find((event) => event.id.toString() === id);
  const { totalPayment, paymentId } = location.state || {};

  const [status, setStatus] = useState("waiting");
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(
    transactionData.waiting.bayarSebelum
  );
  const [transactionDate, setTransactionDate] = useState(
    transactionData.waiting.tanggal
  );
  const [transactionTime, setTransactionTime] = useState(null);
  const data = transactionData[status];

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  };

  useEffect(() => {
    if (status === "waiting" && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (status === "waiting" && countdown <= 0) {
      setStatus("failed");
      setTransactionDate(formatDate(new Date()));
    }
  }, [status, countdown]);

  if (!event) {
    return <NotFoundPage />;
  }

  const handleUpload = () => {
    const isSuccess = true;
    setStatus(isSuccess ? "success" : "failed");
    setTransactionDate(formatDate(new Date()));
    setTransactionTime(new Date().toLocaleTimeString());
  };

  const handleRetry = () => {
    navigate("/course/hacker/path-web/fe");
  };

  const formatCountdown = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section className="bg-primaryBlue h-max relative overflow-hidden">
      <div className="absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] w-[600px] h-[600px] rounded-full bg-secondaryBlue" />
      <div className="absolute top-0 right-0 transform translate-x-[40%] translate-y-[-35%] w-[392px] h-[392px] rounded-full bg-secondaryBlue" />
      <div className="bg-white px-[32px] py-4 z-10 relative">
        <img className="h-9" src={Logo} alt="logoaguna" draggable="false" />
      </div>
      <div className="flex justify-center py-[70px]">
        <div className="flex flex-col">
          <div className="bg-white rounded-[20px] sm:w-[500px] md:w-[560px] sm:p-4 relative">
            <div className="absolute top-0 left-0 translate-x-[-70%] md:translate-y-[205px] translate-y-[225px] w-[70px] h-[70px] rounded-full bg-primaryBlue" />
            <div className="absolute top-0 right-0 translate-x-[70%] md:translate-y-[205px] translate-y-[225px] w-[70px] h-[70px] rounded-full bg-primaryBlue" />
            <div className="flex flex-col justify-center items-center gap-5 p-5 px-8 ">
              <img src={data.imgstatus} alt="img" draggable="false" />
              <div className="flex flex-col items-center gap-3 pb-3">
                <h1 className="text-3xl font-semibold text-textPrimary">
                  {data.title}
                </h1>
                <span className="text-textTertiary">{data.message}</span>
              </div>
              <div className="border border-borderPrimary border-dashed w-full" />
            </div>
            <div className="flex flex-col px-8 py-5 gap-3">
              <div className="flex justify-between">
                <span className="font-medium text-textTertiary">
                  ID Pembayaran
                </span>
                <div>
                  <span className="font-semibold text-textPrimary">
                    {paymentId}
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-textTertiary">Tanggal</span>
                <div>
                  <span className="font-semibold text-textPrimary">
                    {transactionDate}
                  </span>
                </div>
              </div>
              {transactionTime && (
                <div className="flex justify-between">
                  <span className="font-medium text-textTertiary">Waktu</span>
                  <div>
                    <span className="font-semibold text-textPrimary">
                      {transactionTime}
                    </span>
                  </div>
                </div>
              )}
              {status === "waiting" && (
                <div className="flex justify-between">
                  <span className="font-medium text-textTertiary">
                    Bayar Sebelum
                  </span>
                  <div>
                    <span className="font-semibold text-textPrimary">
                      {formatCountdown(countdown)}
                    </span>
                  </div>
                </div>
              )}
              {data.noVirtual && (
                <div className="flex justify-between">
                  <span className="font-medium text-textTertiary">
                    No Virtual Pembayaran
                  </span>
                  <div>
                    <span className="font-semibold text-textPrimary">
                      {data.noVirtual}
                    </span>
                  </div>
                </div>
              )}
              {data.metodePembayaran && (
                <div className="flex justify-between">
                  <span className="font-medium text-textTertiary">
                    Metode Pembayaran
                  </span>
                  <div>
                    <span className="font-semibold text-textPrimary">
                      {data.metodePembayaran}
                    </span>
                  </div>
                </div>
              )}
              <div className="border border-borderPrimary border-dashed w-full" />
              <div className="flex justify-between">
                <span className="font-medium text-textTertiary">Jumlah</span>
                <div>
                  <span className="font-semibold text-textPrimary">
                    {totalPayment}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex justify-center mt-[40px]">
                  {status === "waiting" ? (
                    <button
                      className="flex justify-center items-center gap-2 border border-[#85CAFF] text-textSecondary py-[10px] px-[30px] rounded-lg font-semibold text-sm w-full"
                      onClick={handleUpload}
                    >
                      {data.buttonIcon} {data.buttonText}
                    </button>
                  ) : status === "failed" ? (
                    <button
                      className="flex justify-center items-center gap-2 border border-[#85CAFF] text-textSecondary py-[10px] px-[30px] rounded-lg font-semibold text-sm w-full"
                      onClick={handleRetry}
                    >
                      {data.buttonIcon} {data.buttonText}
                    </button>
                  ) : (
                    <button className="flex justify-center items-center gap-2 border border-[#85CAFF] text-textSecondary py-[10px] px-[30px] rounded-lg font-semibold text-sm w-full">
                      {data.buttonIcon} {data.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {status === "success" ? (
            <div className="flex justify-end mt-[28px]">
              <button
                className="text-white flex items-center gap-3 font-semibold"
                onClick={handleRetry}
              >
                Lanjutkan ke kelas <IoMdArrowRoundForward className="text-xl" />
              </button>
            </div>
          ) : (
            <div className="flex justify-start mt-[28px]">
              <button
                className="text-white flex items-center gap-3 font-semibold"
                onClick={handleRetry}
              >
                <IoMdArrowRoundBack className="text-xl" /> Kembali
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StatusTransactionPage;
