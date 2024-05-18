import React, { useEffect } from "react";
import HeaderKegiatan from "../../../components/kegiatan/headerkeg";
import EventImg from "../../../assets/img/illustration/kegiatan.png";
import CardKegiatan from "../../../components/kegiatan/cardkeg";
import CardEvent from "../../../components/kegiatan/cardevent";
import { FiUser } from "react-icons/fi";
import { RiBookLine } from "react-icons/ri";
import { LuTag } from "react-icons/lu";
import { dataCardEvent } from "../../../dummydata/kegiatan/datakegiatan";

const EventPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Event";
  });

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
          {dataCardEvent.map((kegiatan, index) => (
            <CardKegiatan key={index} {...kegiatan} />
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
