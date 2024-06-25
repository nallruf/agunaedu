import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LuCalendarCheck, LuUsers } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import Centang from "../../../../assets/img/illustration/centang.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import axios from "axios";
import { useAuth } from "../../../../hooks/useauth";

const DetailEventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchEventDetail = async () => {
      try {
        const response = await axios.get(`/api/v1/auth/event/${id}`, {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching event detail:", error);
      }
    };

    fetchEventDetail();
  }, [id, user]);

  useEffect(() => {
    document.title = event
      ? `Aguna Edu | Detail Event ${event.id}`
      : "Aguna Edu | Detail Event";
  }, [event]);

  if (!event) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        LOADING .......
      </div>
    );
  }

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
          <h1 className="font-semibold text-4xl">{event.name}</h1>
          <h3 className="text-textTertiary text-xl mt-3">
            {event.shortDescription}
          </h3>
        </div>
        <div className="mb-11">
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}/images/${event.imageUrl}`}
            alt="hero-detail"
            draggable="false"
            className="rounded-2xl h-[417px] w-full object-cover"
          />
        </div>
        <div className="flex gap-10 mb-[70px] md:flex-row flex-col">
          <div className="border-borderPrimary border-2 rounded-2xl p-8 md:w-[70%] h-fit">
            <h1 className="font-semibold text-2xl mb-7">Deskripsi</h1>
            <div className="text-textTertiary">
              {event.detailDescription.split("\n").map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="border-borderPrimary border-2 rounded-2xl p-8 md:w-[30%] h-fit">
            <h1 className="font-semibold text-xl mb-3">Detail Event</h1>
            <hr className="text-borderPrimary border-[1.5px]" />
            <EventDetails event={event} />
            <div className="text-primaryBlue font-semibold text-xl my-8">
              {event.price === 0 ? "GRATIS" : `Rp ${event.price}`}
            </div>
            <button
              className="border-2 border-borderSecondary w-full rounded-lg px-4 py-[10px] text-textSecondary font-semibold text-lg"
              // onClick={() => setOpenModal(true)}
              onClick={() => navigate(`/event/detail/transaction/${event.id}`)}
            >
              Daftar
            </button>
          </div>
        </div>
      </section>

      <SpeakerProfile speakers={event.speakers} />

      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </>
  );
};

const formatDateAndTime = (dateStr) => {
  const date = new Date(dateStr);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("id-ID", options);
  return `${formattedDate}`;
};

const EventDetails = ({ event }) => (
  <div className="flex flex-col gap-8 mt-5">
    <DetailItem
      icon={<LuCalendarCheck className="text-primaryBlue text-xl" />}
      label="Tanggal Event"
      value={formatDateAndTime(event.date)}
    />
    <DetailItem
      icon={<IoMdTime className="text-primaryBlue text-xl" />}
      label="Waktu"
      value={event.time}
    />
    <DetailItem
      icon={<SlLocationPin className="text-primaryBlue text-xl" />}
      label="Lokasi"
      value={event.location}
    />
    <DetailItem
      icon={<LuUsers className="text-primaryBlue text-xl" />}
      label="Komunitas"
      value={event.organizer}
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

const SpeakerProfile = ({ speakers }) => (
  <section className="bg-primaryBlue md:pb-40 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[70%] w-[617px] h-[577px] rounded-full bg-secondaryBlue" />
    <div className="absolute top-0 right-0 translate-x-[50%] w-[333px] h-[320px] rounded-full bg-secondaryBlue" />
    <div className="px-10 sm:px-20 md:px-40 relative z-10">
      <div className="flex flex-col justify-center items-center text-center pt-[68px] pb-[38px] gap-[59px]">
        <div>
          <h1 className="text-4xl font-semibold text-white mb-9">
            Profil Pembicara
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SpeakerCard = ({ speaker }) => (
  <div className="w-full md:h-[241px] md:w-[304px] shadow-lg">
    <img
      src={`${import.meta.env.VITE_PUBLIC_URL}/images/${speaker.imageUrl}`}
      alt="speaker-profile"
      draggable="false"
      className="object-cover rounded-t-2xl overflow-hidden md:h-[241px] md:w-[304px] w-full bg-secondaryBlue"
    />
    <div className="bg-white px-6 py-5 rounded-b-2xl shadow-lg">
      <div className="flex flex-col text-textPrimary items-start">
        <h1 className="text-xl font-semibold">{speaker.name}</h1>
        <h3 className="text-base text-start">{speaker.jobs}</h3>
      </div>
    </div>
  </div>
);

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-xl p-6 max-w-md">
      <img src={Centang} alt="centang" draggable="false" className="mb-5" />
      <h1 className="text-textPrimary text-lg font-semibold">
        Terimakasih Telah Mendaftar
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

export default DetailEventPage;
