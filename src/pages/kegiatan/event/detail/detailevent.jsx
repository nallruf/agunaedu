import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LuCalendarCheck, LuUsers } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { dataDetailEvent } from "../../../../dummydata/kegiatan/datakegiatan";
import NotFoundPage from "../../../notfound";
import Centang from "../../../../assets/img/illustration/centang.png";

const DetailEventPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const event = dataDetailEvent.find((event) => event.id.toString() === id);

  useEffect(() => {
    document.title = "Aguna Edu | Detail Event";
  }, []);

  if (!event) {
    return (
      <div className="flex justify-center h-screen items-center">
        Belum ada Data
      </div>
    );
  }

  const paragraphs = event.details.split("\n").map((paragraph, index) => (
    <p key={index} className="text-textTertiary text-base">
      {paragraph} <br />
    </p>
  ));

  return (
    <>
      <section className="px-10 sm:px-20 md:px-40 pt-[130px]">
        <div className="mb-11">
          <h1 className="font-semibold text-4xl">{event.title}</h1>
          <h3 className="text-textTertiary text-xl mt-3">{event.desc}</h3>
        </div>
        <div className="mb-11">
          <img
            src={event.imgEvent}
            alt="hero-detail"
            draggable="false"
            className="rounded-2xl h-[417px] w-full object-cover"
          />
        </div>
        <div className="flex gap-10 mb-[70px] md:flex-row flex-col">
          <div className="border-borderPrimary border-2 rounded-2xl p-8 md:w-[70%]">
            <h1 className="font-semibold text-2xl mb-7">Deskripsi</h1>
            {paragraphs}
          </div>
          <div className="border-borderPrimary border-2 rounded-2xl p-8 md:w-[30%] h-fit">
            <h1 className="font-semibold text-xl mb-3">Detail Event</h1>
            <hr className="text-borderPrimary border-[1.5px]" />
            <EventDetails event={event} />
            <div className="text-primaryBlue font-semibold text-xl my-8">
              GRATIS!
            </div>
            <button
              className="border-2 border-borderSecondary w-full rounded-lg px-4 py-[10px] text-textSecondary font-semibold text-lg"
              onClick={() => setOpenModal(true)}
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

const EventDetails = ({ event }) => (
  <div className="flex flex-col gap-8 mt-5">
    <DetailItem
      icon={<LuCalendarCheck className="text-primaryBlue text-xl" />}
      label="Tanggal Event"
      value={event.date}
    />
    <DetailItem
      icon={<IoMdTime className="text-primaryBlue text-xl" />}
      label="Waktu"
      value={event.time}
    />
    <DetailItem
      icon={<SlLocationPin className="text-primaryBlue text-xl" />}
      label="Lokasi"
      value={event.loc}
    />
    <DetailItem
      icon={<LuUsers className="text-primaryBlue text-xl" />}
      label="Komunitas"
      value={event.komunitas}
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
  <section className="bg-primaryBlue md:pb-40">
    <div className="px-10 sm:px-20 md:px-40">
      <div className="flex flex-col justify-center items-center text-center pt-[68px] pb-[38px] gap-[59px]">
        <div>
          <h1 className="text-4xl font-semibold text-white mb-9">
            Profil Pembicara
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
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
      src={speaker.img}
      alt="speaker-profile"
      draggable="false"
      className="object-contain rounded-t-2xl overflow-hidden md:h-[241px] md:w-[304px] w-full bg-secondaryBlue"
    />
    <div className="bg-white px-6 py-5 rounded-b-2xl shadow-lg">
      <div className="flex flex-col text-textPrimary items-start">
        <h1 className="text-xl font-semibold">{speaker.name}</h1>
        <h3 className="text-base">{speaker.role}</h3>
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
