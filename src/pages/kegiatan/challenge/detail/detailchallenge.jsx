import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataDetailChallenge } from "../../../../dummydata/kegiatan/datachallenge";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuCalendarCheck, LuUsers } from "react-icons/lu";
import TextInputComponent from "../../../../components/auth/textinput";
import Centang from "../../../../assets/img/illustration/centang.png";

const DetailChallengePage = () => {
  const { id } = useParams();
  const event = dataDetailChallenge.find((event) => event.id.toString() === id);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    url: "",
  });

  useEffect(() => {
    document.title = event
      ? `Aguna Edu | Detail Challenge ${event.id}`
      : "Aguna Edu | Detail Challenge";
  }, []);

  if (!event) {
    return (
      <div className="flex justify-center h-screen items-center">
        Belum ada Data
      </div>
    );
  }
  const boldKeywords = ["Goals", "Persyaratan", "Hadiah"];

  const paragraphs = event.details.split("\n").map((paragraph, index) => {
    const trimmedParagraph = paragraph.trim();
    const isBold = boldKeywords.some((word) =>
      trimmedParagraph.startsWith(word)
    );
    return (
      <p
        key={index}
        className={`text-textTertiary text-base ${
          isBold ? "font-semibold" : ""
        }`}
      >
        {trimmedParagraph} <br />
      </p>
    );
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="px-10 sm:px-20 md:px-40 pt-[130px]">
        <div className="mb-11">
          <button
            className="flex items-center text-lg gap-3 text-primaryBlue font-semibold mb-7"
            onClick={() => navigate(-1)}
          >
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <h3>Kembali</h3>
          </button>
          <h1 className="font-semibold text-4xl">{event.title}</h1>
          <h3 className="text-textTertiary text-xl mt-3">{event.desc}</h3>
        </div>
        <div className="mb-11">
          <img
            src={event.imgChallenge}
            alt="hero-detail"
            draggable="false"
            className="rounded-2xl h-[417px] w-full object-cover"
          />
        </div>
        <div className="flex gap-10 mb-[70px] md:flex-row flex-col">
          <div className="border-borderPrimary border-2 rounded-2xl p-8 md:w-[70%]">
            <h1 className="font-semibold text-2xl mb-7">Deskripsi</h1>
            {paragraphs}

            <div>
              <TextInputComponent
                htmlFor="url"
                label="URL Hasil Challenge"
                type="url"
                placeholder="Masukan URL"
                name="url"
                id="url"
                value={formData.url}
                onChange={handleChange}
              />
              <button
                className="rounded-lg px-[50px] py-[8px] text-white bg-primaryBlue font-semibold text-lg"
                onClick={() => setOpenModal(true)}
              >
                Submit Karya
              </button>
            </div>
          </div>
          <div className="border-borderPrimary border-2 rounded-2xl p-8 md:w-[30%] h-fit">
            <h1 className="font-semibold text-xl mb-3">Detail Event</h1>
            <hr className="text-borderPrimary border-[1.5px]" />
            <ChallengeDetails challenge={event} />
          </div>
        </div>
      </section>
      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </>
  );
};

const ChallengeDetails = ({ challenge }) => (
  <div className="flex flex-col gap-8 mt-5">
    <DetailItem
      icon={<LuCalendarCheck className="text-primaryBlue text-xl" />}
      label="Durasi Challenge"
      value={challenge.date}
    />
    <DetailItem
      icon={<LuUsers className="text-primaryBlue text-xl" />}
      label="Jumlah Pemenang"
      value={challenge.win}
    />
  </div>
);

const DetailItem = ({ icon, label, value }) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-textTertiary font-semibold text-lg">{label}</h2>
    <h3 className="flex items-center gap-2">
      {icon}
      <span className="text-iconInput text-sm">{value}</span>
    </h3>
  </div>
);

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-xl p-6 max-w-md">
      <img src={Centang} alt="centang" draggable="false" className="mb-5" />
      <h1 className="text-textPrimary text-lg font-semibold">
        Terimakasih Telah Mengumpulkan
      </h1>
      <p className="text-textTertiary mb-10">
        Kami akan mengirimkan informasi berikutnya melalui email terdaftar!
      </p>
      <button
        className="bg-primaryBlue text-white rounded-lg px-4 py-2 w-full"
        onClick={onClose}
      >
        Kembali
      </button>
    </div>
  </div>
);
export default DetailChallengePage;
