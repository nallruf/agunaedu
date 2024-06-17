import React, { useEffect, useState } from "react";
import HeaderKegiatan from "../../../components/kegiatan/headerkeg";
import EventImg from "../../../assets/img/illustration/kegiatan.png";
import CardKegiatan from "../../../components/kegiatan/cardkeg";
import CardEvent from "../../../components/kegiatan/cardevent";
import { FiUser } from "react-icons/fi";
import { RiBookLine } from "react-icons/ri";
import { LuTag } from "react-icons/lu";
import axios from "axios";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/v1/public/landing/event");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    document.title = "Aguna Edu | Event";
  });

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

  return (
    <>
      <HeaderKegiatan
        title="Berbagai Event Sesuai Kebutuhanmu!"
        desc="Ikuti berbagai event secara gratis"
        imgKeg={EventImg}
      />
      <section className="px-10 sm:px-20 md:px-40 mt-[70px] mb-[80px]">
        <div>
          <h1 className="text-textPrimary font-semibold text-4xl">
            Event Seru dari Aguna Edu!
          </h1>
          <h3 className="text-textLabel text-xl mt-[13px]">
            Ikuti rangkaian acara menarik dari Aguna Edu dan dapatkan pengalaman
            belajar yang seru dan inspiratif!
          </h3>
        </div>
        <div className="grid md:grid-cols-3 mt-[50px]">
          {events.map((event) => (
            <CardKegiatan
              key={event.id}
              date={formatDateAndTime(event.date)}
              desc={event.shortDescription}
              imgEvent={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                event.imageUrl
              }`}
              tags={event.skills.map((skill) => skill.name)}
              // time={event.time}
              title={event.name}
              link={`/event/detail/${event.id}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-primaryBlue">
        <div className="px-10 sm:px-20 md:px-40">
          <div className="text-center py-16">
            <h1 className="text-3xl font-semibold text-white">
              Kenapa Harus Ikut Event di Aguna Edu?
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
              <CardEvent
                icon={<FiUser />}
                desc="Bertemu dengan narasumber yang hebat dan profesional"
              />
              <CardEvent
                icon={<RiBookLine />}
                desc="Sharing ilmu dan pengalaman yang daging banget!"
              />
              <CardEvent
                icon={<LuTag />}
                desc="Gratis! Event Aguna Edu tidak dipungut biaya!"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventPage;
