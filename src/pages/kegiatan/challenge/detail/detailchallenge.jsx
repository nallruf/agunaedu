import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuCalendarCheck, LuUsers } from "react-icons/lu";
import TextInputComponent from "../../../../components/auth/textinput";
import Centang from "../../../../assets/img/illustration/centang.png";
import axios from "axios";
import { useAuth } from "../../../../hooks/useauth";
import toast from "react-hot-toast";

const DetailChallengePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    url: "",
  });

  const [challenge, setChallenge] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchChallengeDetail = async () => {
      try {
        const response = await axios.get(`/api/v1/auth/challenge/${id}`, {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setChallenge(response.data);
      } catch (error) {
        console.error("Error fetching challenge detail:", error);
      }
    };

    fetchChallengeDetail();
  }, [id, user]);

  useEffect(() => {
    document.title = challenge
      ? `Aguna Edu | Detail Challenge ${challenge.id}`
      : "Aguna Edu | Detail Challenge";
  }, [challenge]);

  if (!challenge) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        LOADING .......
      </div>
    );
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitChallenge = async () => {
    try {
      await axios.post(
        `/api/v1/auth/challenge/${id}`,
        { link: formData.url },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );
      toast.success("Challenge submitted successfully!");
      setOpenModal(true);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      if (error.response?.status === 400) {
        toast.error(`${errorMessage}`);
      }
    }
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
          <h1 className="font-semibold text-4xl">{challenge.name}</h1>
          <h3 className="text-textTertiary text-xl mt-3">
            {challenge.shortDescription}
          </h3>
        </div>
        <div className="mb-11">
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}/images/${
              challenge.imageUrl
            }`}
            alt="hero-detail"
            draggable="false"
            className="rounded-2xl h-[417px] w-full object-cover"
          />
        </div>
        <div className="flex gap-10 mb-[70px] md:flex-row flex-col">
          <div className="border-borderPrimary border-2 rounded-2xl p-8 md:w-[70%]">
            <h1 className="font-semibold text-2xl mb-7">Deskripsi</h1>
            {challenge.detailDescription}

            <div className="mt-20">
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
                onClick={submitChallenge}
              >
                Submit Karya
              </button>
            </div>
          </div>
          <div className="border-borderPrimary border-2 rounded-2xl p-8 md:w-[30%] h-fit">
            <h1 className="font-semibold text-xl mb-3">Detail Event</h1>
            <hr className="text-borderPrimary border-[1.5px]" />
            <ChallengeDetails challenge={challenge} />
          </div>
        </div>
      </section>
      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </>
  );
};

const formatDateRange = (startDateStr, endDateStr) => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedStartDate = startDate.toLocaleDateString("id-ID", options);
  const formattedEndDate = endDate.toLocaleDateString("id-ID", options);

  return `${formattedStartDate} - ${formattedEndDate}`;
};

const ChallengeDetails = ({ challenge }) => (
  <div className="flex flex-col gap-8 mt-5">
    <DetailItem
      icon={<LuCalendarCheck className="text-primaryBlue text-xl" />}
      label="Durasi Challenge"
      value={formatDateRange(challenge.startDate, challenge.endDate)}
    />
    <DetailItem
      icon={<LuUsers className="text-primaryBlue text-xl" />}
      label="Jumlah Pemenang"
      value={`${challenge.winner} Orang`}
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
