import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import InfoComponent from "../../../../../components/auth/info";
import { useAuth } from "../../../../../hooks/useauth";
import axios from "axios";
import ImgAtm from "../../../../../assets/img/illustration/atm.png";

const TransactionPage = () => {
  const { role, path, focus, id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [detailPath, setDetailPath] = useState(null);
  const [focusPath, setFocusPath] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [transactionData, setTransactionData] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [isValidPromo, setIsValidPromo] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [paymentId, setPaymentId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedBank, setSelectedBank] = useState("");

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const roleResponse = await axios.get("/api/v1/public/landing/role");
        const selectedRole = roleResponse.data.find(
          (r) => r.role_name.toLowerCase() === role
        );

        if (!selectedRole) {
          console.error("Role not found");
          return;
        }

        const pathFirstWord = path.split("-")[0].toLowerCase();
        const foundPath = selectedRole.paths.find(
          (item) =>
            item.name.toLowerCase() !== "pemula" &&
            item.name.split(" ")[0].toLowerCase() === pathFirstWord
        );

        setData(selectedRole);
        if (foundPath) {
          setDetailPath(foundPath);

          const responsePath = await axios.get(
            `/api/v1/auth/path/${foundPath.id}`,
            {
              headers: {
                Authorization: `Bearer ${user}`,
              },
            }
          );
          const foundFocus = responsePath.data.find(
            (item) =>
              item.pathFocusName.toLowerCase().replace(/\s+/g, "-") === focus
          );
          setFocusPath(foundFocus);

          if (foundFocus) {
            const courseResponse = await axios.get(
              `/api/v1/auth/course/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${user}`,
                },
              }
            );

            setCourseData(courseResponse.data);

            const transactionResponse = await axios.get(
              `/api/v1/auth/transaction/course/${courseResponse.data.courseId}`,
              {
                headers: {
                  Authorization: `Bearer ${user}`,
                },
              }
            );

            setTransactionData(transactionResponse.data);

            if (!paymentId) {
              const newPaymentId = Math.floor(Math.random() * 10000000000)
                .toString()
                .padStart(10, "0");
              setPaymentId(newPaymentId);
            }
          } else {
            console.error("Focus and Course not found");
          }
        } else {
          console.error("Course not found");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchDetail();
  }, [role, path, focus, id, user]);

  useEffect(() => {
    if (courseData) {
      document.title = `Aguna Edu | Transaction #${courseData.courseId}`;
    }
  }, [courseData]);

  const handleCheckPromoCode = async () => {
    try {
      const response = await axios.post(
        "/api/v1/auth/cekpromo",
        { promoCode, totalPrice: transactionData.totalPrice },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );

      if (response.data.isValid) {
        setIsValidPromo(true);
        setDiscount(response.data.discount);
        setErrorMessage("");
      } else {
        setIsValidPromo(false);
        setDiscount(0);
        setErrorMessage("Kode promo tidak valid. Silakan coba lagi.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("Kode promo tidak ditemukan. Silakan coba lagi.");
      } else {
        console.error("Failed to check promo code:", error);
        setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
      }
    }
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
    setErrorMessage("");
  };

  const handleBankChange = (e) => {
    setSelectedBank(e.target.value);
  };

  if (!data || !focusPath || !detailPath || !courseData || !transactionData) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        Loading...
      </div>
    );
  }

  const { course, servicePrice, totalPrice, bank } = transactionData;
  const originalPrice = course.price;
  const discountedPrice = originalPrice * (1 - discount / 100);
  const formattedServiceFee = servicePrice.toLocaleString("id-ID");
  const formattedTotalPrice = isValidPromo
    ? (discountedPrice + servicePrice).toLocaleString("id-ID")
    : totalPrice.toLocaleString("id-ID");

  return (
    <div className="flex w-full h-full">
      <div className="hidden bg-primaryBlue md:flex justify-center items-center w-1/2 relative overflow-hidden min-h-screen">
        <div className="absolute top-0 left-0 transform translate-x-[-70%] translate-y-[-70%] w-[420px] h-[490px] rotate-[32deg] border-4 border-white border-opacity-10 rounded-full" />
        <div className="w-2/3">
          <InfoComponent
            title="Yuk, selesaikan transaksimu!"
            desc="Selesaikan dulu transaksimu sebelum memulai pembelajaran!"
            img={ImgAtm}
          />
        </div>
        <div className="absolute bottom-0 left-2/3 transform -translate-x-[15%] translate-y-[80%] w-[569px] h-[560px] border-4 border-white rounded-full" />
      </div>

      <div className="w-full md:w-3/5 md:py-11 md:pl-[73px] md:pr-[67px] p-8 sm:p-20">
        <div>
          <button
            className="flex items-center text-lg gap-3 text-primaryBlue font-semibold mb-7"
            onClick={() => navigate(-1)}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <h3>Kembali</h3>
          </button>
          <div className="border-borderPrimary border-2 rounded-xl p-6 flex flex-col gap-6">
            <h1 className="text-textPrimary font-semibold text-2xl">
              {course.name}
            </h1>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 text-textTertiary">
                <h3 className="text-textLabel font-medium text-base">
                  Detail Pembayaran
                </h3>
                <div className="flex justify-between">
                  Harga Kelas
                  <span>Rp. {originalPrice.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  Biaya Layanan
                  <span className="text-[#079455]">
                    + Rp. {formattedServiceFee}
                  </span>
                </div>
                {isValidPromo && (
                  <div className="flex justify-between">
                    Diskon
                    <span className="text-[#079455]">
                      Rp. {discount.toLocaleString("id-ID")}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  Total Pembayaran
                  <span>{formattedTotalPrice}</span>
                </div>
                <div className="flex justify-between">
                  ID Pembayaran
                  <span>{paymentId}</span>
                </div>
              </div>
              <div>
                <div>
                  <label
                    htmlFor="kode"
                    className="text-base font-medium text-textLabel"
                  >
                    Kode Promo
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Masukan Kode Promo"
                      name="kode"
                      id="kode"
                      value={promoCode}
                      onChange={handlePromoCodeChange}
                      className="w-full border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm"
                    />
                    <button
                      className="bg-primaryBlue text-white rounded-lg px-6 py-2 items-center justify-center mt-[6px]"
                      onClick={handleCheckPromoCode}
                    >
                      Cek
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="text-red-500 mt-2">{errorMessage}</p>
                  )}
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="metode"
                    className="text-base font-medium text-textLabel"
                  >
                    Metode Pembayaran
                  </label>
                  <select
                    id="metode"
                    name="metode"
                    value={selectedBank}
                    onChange={handleBankChange}
                    className="w-full border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm"
                  >
                    <option value="">Pilih Metode Pembayaran</option>
                    {bank.map((bankini) => (
                      <option key={bankini.bankId}>
                        {bankini.bankName} - {bankini.bankNo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 flex-col sm:flex-row">
              <div>
                <button
                  className="w-full sm:w-[185px] h-[44px] border-2 border-borderSecondary text-primaryBlue font-semibold rounded-lg px-6 py-2 items-center justify-center mt-[6px]"
                  onClick={() => navigate(-1)}
                >
                  Batalkan
                </button>
              </div>
              <div>
                <button
                  className="bg-primaryBlue w-full sm:w-[185px] h-[44px] text-white rounded-lg px-6 py-2 items-center font-semibold justify-center mt-[6px]"
                  onClick={() => navigate("/")}
                >
                  Bayar
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-textLabel text-lg font-semibold my-6">
            Metode Pembayaran yang di dukung
          </h2>
          <div className="border-borderPrimary border-2 rounded-xl p-6 flex flex-col gap-6">
            <div className="grid grid-cols-3 justify-center items-center ">
              {bank.map((bankini, index) => (
                <div key={index}>
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                      bankini.bankImageUrl
                    }`}
                    alt="img"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
