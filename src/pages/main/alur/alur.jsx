import React, { useState } from "react";
import TombolAlur from "../../../components/main/alur/tombolalur";
import {
  dataAlur,
  dataRole,
  dataPilih,
  dataCard,
} from "../../../dummydata/main/dataalur";
import RoleImg from "../../../components/main/alur/roleimg";
import SideRole from "../../../components/main/alur/siderole";
import CardRole from "../../../components/main/alur/cardrole";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

const AlurSection = () => {
  const [activeRole, setActiveRole] = useState("Hacker");

  const handleRoleClick = (role) => {
    setActiveRole(role);
  };

  const filteredDataPilih = dataPilih.filter(({ title }) =>
    title.toLowerCase().includes(activeRole.toLowerCase())
  );

  const filteredDataCard = dataCard.filter(({ tes }) =>
    tes.some((test) => test.toLowerCase().includes(activeRole.toLowerCase()))
  );

  return (
    <section
      className="px-10 sm:px-20 md:px-40 space-y-16 mb-[80px] mt-[70px]"
      id="alur"
    >
      <div className="flex flex-col justify-center text-center">
        <h1
          className="text-2xl sm:text-4xl font-semibold text-textPrimary"
          // data-aos="zoom-in"
        >
          Alur pengembangan kami!
        </h1>
        <h1
          className="text-base sm:text-[22px] text-textTertiary mt-4"
          // data-aos="zoom-in"
        >
          Kembangkan satu skill secara bertahap <br />
          dengan konsisten melalui alur pembelajaran kami!
        </h1>
      </div>

      <div
        className="grid md:grid-cols-3 gap-5 md:gap-0 relative"
        // data-aos="fade-right"
      >
        {dataAlur.map((alur) => (
          <div
            key={alur.id}
            className="flex md:justify-center items-center relative"
          >
            {/* {alur.id !== 1 && (
              <div className="border-dashed border-primaryBlue border absolute w-full right-2/4" />
            )} */}
            <div className="relative z-10">
              <TombolAlur {...alur} />
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex gap-5"
        // data-aos="fade-right"
      >
        {dataRole.map((roleimg) => (
          <RoleImg
            key={roleimg.id}
            {...roleimg}
            isActive={activeRole === roleimg.role}
            onClick={() => handleRoleClick(roleimg.role)}
          />
        ))}
      </div>

      <div className="flex justify-between md:flex-row flex-col">
        <div
          className="md:w-[40%]"
          // data-aos="fade-right"
        >
          {filteredDataPilih.map((item) => (
            <SideRole key={item.id} {...item} />
          ))}
        </div>

        <div
          className="grid md:grid-cols-2 gap-10 md:justify-end justify-start"
          // data-aos="zoom-in"
        >
          {filteredDataCard.slice(0, 2).map((item, index) => (
            <CardRole key={index} {...item} />
          ))}
        </div>
        {/* note: kekurangan slide e gabisa responsive (infinite) */}
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={10}
          className="md:pb-36 pb-20"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
          }}
        >
          {filteredDataCard.map((item, index) => (
            <SwiperSlide className="md:my-10 md:pl-10" key={index}>
              <CardRole {...item} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
};

export default AlurSection;
