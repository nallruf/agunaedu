import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataFeWeb } from "../../../../../dummydata/course/datadetailweb";
import NotFoundPage from "../../../../notfound";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import InfoComponent from "../../../../../components/auth/info";
import ImgAtm from "../../../../../assets/img/illustration/atm.png";
import ImgGop from "../../../../../assets/img/brand-transaction/gopay.png";
import ImgOvo from "../../../../../assets/img/brand-transaction/ovo.png";
import ImgShop from "../../../../../assets/img/brand-transaction/shopay.png";
import ImgLink from "../../../../../assets/img/brand-transaction/link.png";
import ImgDana from "../../../../../assets/img/brand-transaction/dana.png";
import ImgMidtrans from "../../../../../assets/img/brand-transaction/midtrans.png";

const TransactionFePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = dataFeWeb.find((event) => event.id.toString() === id);

  const [promoCode, setPromoCode] = useState("");
  const [isValidPromo, setIsValidPromo] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [paymentId, setPaymentId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const serviceFee = 5000;
  const originalPrice = event
    ? parseInt(event.harga.replace("Rp. ", "").replace(".", ""))
    : 0;
  const discountedPrice = originalPrice * 0.95;
  const totalPrice = isValidPromo
    ? discountedPrice + serviceFee
    : originalPrice + serviceFee;
  const formattedServiceFee = serviceFee.toLocaleString("id-ID");
  const formattedTotalPrice = totalPrice.toLocaleString("id-ID");

  useEffect(() => {
    document.title = event ? `Transaksi | FE #${event.id}` : "Transaksi | FE";

    if (!paymentId) {
      const newPaymentId = Math.floor(Math.random() * 10000000000)
        .toString()
        .padStart(10, "0");
      setPaymentId(newPaymentId);
    }

    const cleanup = () => {
      localStorage.removeItem(`paymentConfirmed_${id}`);
    };
    window.addEventListener("beforeunload", cleanup);
    return () => {
      window.removeEventListener("beforeunload", cleanup);
    };
  }, [event, id, paymentId]);

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
    setErrorMessage("");
  };

  const handleCheckPromoCode = () => {
    if (promoCode === "AGUNA") {
      setIsValidPromo(true);
      setDiscount(originalPrice * 0.05);
      setErrorMessage("");
    } else {
      setIsValidPromo(false);
      setDiscount(0);
      setErrorMessage("Kode promo tidak valid. Silakan coba lagi.");
    }
  };

  const handleConfirmPayment = () => {
    setPaymentConfirmed(true);
    localStorage.setItem(`paymentConfirmed_${id}`, JSON.stringify(true));
  };

  if (!event) {
    return <NotFoundPage />;
  }

  if (paymentConfirmed) {
    // navigate(`/course/hacker/path-web/fe/${id}`);
    // navigate(`/course/hacker/path-web/fe/transaction/status/${id}`);
    navigate(`/course/hacker/path-web/fe/transaction/status/${id}`, {
      state: { totalPayment: formattedTotalPrice, paymentId },
    });
  }

  return (
    <div className="flex w-full h-full">
      <div className="hidden bg-primaryBlue md:flex justify-center items-center w-1/2 relative overflow-hidden">
        <div className="absolute top-0 left-0 transform translate-x-[-70%] translate-y-[-70%] w-[420px] h-[490px] rotate-[32deg] border-4 border-white border-opacity-10 rounded-full" />
        <div className="w-2/3">
          <InfoComponent
            title="Yuk, selesaikan transaksimu!"
            desc="BSelesaikan dulu transaksimu sebelum memulai pembelajaran!"
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
              {event.title}
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
                    Diskon 5%
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
                    htmlFor="kode"
                    className="text-base font-medium text-textLabel"
                  >
                    Metode Pembayaran
                  </label>
                  <input
                    type="text"
                    placeholder="Pilih Metode Pembayaran"
                    name="metode"
                    id="metode"
                    className="w-full border-2 border-borderPrimary rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm"
                  />
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
                  onClick={handleConfirmPayment}
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
              <div>
                <img src={ImgGop} alt="img" draggable="false" />
              </div>
              <div>
                <img src={ImgShop} alt="img" draggable="false" />
              </div>
              <div>
                <img src={ImgMidtrans} alt="img" draggable="false" />
              </div>
              <div>
                <img src={ImgOvo} alt="img" draggable="false" />
              </div>
              <div>
                <img src={ImgLink} alt="img" draggable="false" />
              </div>
              <div>
                <img src={ImgDana} alt="img" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFePage;
