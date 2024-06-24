import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../../hooks/useauth";
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
import Logo from "../../../../assets/img/logo/logo-name-biru.png";
import { transactionData } from "../../../../dummydata/kegiatan/datastatusbayar";
import {
  formatDate,
  formatCurrency,
  formatCountdown,
} from "../../../../utils/formatting";
import { toast } from "react-hot-toast";

const StatusTransactionEventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const { transactionId, paymentId } = location.state || {};
  const [data, setData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const [status, setStatus] = useState("waiting");
  const [countdown, setCountdown] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const dataTf = transactionData[status];

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const eventResponse = await axios.get(`/api/v1/auth/event/${id}`, {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });

        if (eventResponse.data) {
          setData(eventResponse.data);

          const paymentResponse = await axios.get(
            `/api/v1/auth/payment/${transactionId}`,
            {
              headers: {
                Authorization: `Bearer ${user}`,
              },
            }
          );
          setPaymentData(paymentResponse.data);
          setStatus(
            paymentResponse.data.status === "UNPAID"
              ? "waiting"
              : paymentResponse.data.status === "PENDING"
              ? "pending"
              : paymentResponse.data.status === "ACCEPT"
              ? "success"
              : "failed"
          );
          setCountdown(
            Math.max(
              0,
              (new Date(paymentResponse.data.paymentDeadline) - new Date()) /
                1000
            )
          );
        } else {
          console.error("Event not found");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchDetail();
  }, [id, user]);

  useEffect(() => {
    if (data) {
      document.title = `Aguna Edu | Status Transaction #${data.id}`;
    }
  }, [data]);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    setUploading(true);
    try {
      const uploadResponse = await axios.post(
        `/api/v1/auth/payment/${transactionId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (uploadResponse.data.status === "Success") {
        setStatus("pending");
        toast.success("Payment proof uploaded successfully");
      } else {
        toast.success("Failed to upload payment proof");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading payment proof");
    } finally {
      setUploading(false);
    }
  };

  if (!data || !paymentData) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-primaryBlue min-h-screen relative overflow-hidden">
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
              <img src={dataTf.imgstatus} alt="img" draggable="false" />
              <div className="flex flex-col items-center gap-3 pb-3">
                <h1 className="text-3xl font-semibold text-textPrimary text-center">
                  {dataTf.title}
                </h1>
                <span className="text-textTertiary text-center">{dataTf.message}</span>
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
                    {formatDate(paymentData.date)}
                  </span>
                </div>
              </div>
              {paymentData.paymentDeadline &&
                (status === "waiting" || status === "pending") && (
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
              {paymentData.bankNo && (
                <div className="flex justify-between">
                  <span className="font-medium text-textTertiary">No Bank</span>
                  <div>
                    <span className="font-semibold text-textPrimary">
                      {paymentData.bankNo}
                    </span>
                  </div>
                </div>
              )}
              <div className="border border-borderPrimary border-dashed w-full" />
              <div className="flex justify-between">
                <span className="font-medium text-textTertiary">Jumlah</span>
                <div>
                  <span className="font-semibold text-textPrimary">
                    {formatCurrency(paymentData.totalPrice)}
                  </span>
                </div>
              </div>
              {status === "waiting" && (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    hidden
                  />
                  <div className="flex flex-col items-center">
                    {preview && (
                      <div className="mt-4">
                        <img
                          src={preview}
                          alt="Preview"
                          className="max-w-full h-auto"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center mt-[40px]">
                    <button
                      className="flex justify-center items-center gap-2 border border-[#85CAFF] text-textSecondary py-[10px] px-[30px] rounded-lg font-semibold text-sm w-full"
                      onClick={() => fileInputRef.current.click()}
                      disabled={uploading}
                    >
                      {uploading ? "Uploading..." : dataTf.buttonIcon}{" "}
                      {dataTf.buttonText}
                    </button>
                  </div>
                  {selectedFile && (
                    <div className="flex justify-center mt-[20px]">
                      <button
                        className="flex justify-center items-center gap-2 bg-primaryBlue text-white py-[10px] px-[30px] rounded-lg font-semibold text-sm w-full"
                        onClick={handleUpload}
                        disabled={uploading}
                      >
                        {uploading ? "Uploading..." : "Kirim"}
                      </button>
                    </div>
                  )}
                </>
              )}
              {status === "pending" && (
                <div className="flex flex-col gap-6">
                  <div className="flex justify-center mt-[40px]">
                    <button className="flex justify-center items-center gap-2 border border-[#85CAFF] text-textSecondary py-[10px] px-[30px] rounded-lg font-semibold text-sm w-full">
                      MOHON TUNGGU YA
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {status === "success" ? (
            <div className="flex justify-end mt-[28px]">
              <button
                className="text-white flex items-center gap-3 font-semibold"
                onClick={() => navigate("/user/event")}
              >
                Lanjutkan ke event <IoMdArrowRoundForward className="text-xl" />
              </button>
            </div>
          ) : (
            <div className="flex justify-start mt-[28px]">
              <button
                className="text-white flex items-center gap-3 font-semibold"
                onClick={() => navigate(-1)}
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

export default StatusTransactionEventPage;
