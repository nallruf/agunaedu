import React, { useEffect } from "react";
import User from "./user/user";
import { dataChallenge } from "../../dummydata/user-menu/datadashboard";
import { RiAwardLine } from "react-icons/ri";
import { LuCoins } from "react-icons/lu";
import CardDashboardAnalysis from "../../components/user-menu/carddashboard/cardanalysis";
import { dataCardChallenge } from "../../dummydata/user-menu/datachallenge";
import CardChallenge from "../../components/user-menu/carddashboard/cardchallenge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ChallengeUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Challenge User";
  }, []);

  const iconComponents = {
    RiAwardLine: (
      <RiAwardLine className="text-secondaryBlue stroke" size={30} />
    ),
    LuCoins: <LuCoins className="text-secondaryBlue stroke-2" size={30} />,
  };

  const content = (
    <>
      <div className="flex flex-wrap gap-5 md:gap-10">
        {dataChallenge.map((item, index) => (
          <CardDashboardAnalysis
            key={index}
            title={item.title}
            amount={item.amount}
            total={item.total}
            profit={item.profit}
            icon={iconComponents[item.icon]}
          />
        ))}
        <div className="bg-white rounded-xl border-2 border-borderPrimary pl-3 pt-5 pr-5 pb-4 w-[185px] md:w-[306px] md:h-[138px] relative overflow-hidden sm:block ">
          <div className="flex justify-between relative z-10">
            <div className="flex flex-col gap-1 text-white">
              <h3 className="font-medium text-base text-textTertiary">
                Kamu Lagi Bosan?
              </h3>
              <h2 className="text-xl font-semibold text-textLabel">
                Ikut Challenge Yuk!
              </h2>
            </div>
          </div>
          <div className="my-2 flex items-center relative z-10">
            <button className="text-white font-medium text-sm bg-primaryBlue rounded-lg px-3 py-2 w-full">
              Cari Challenge
            </button>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-2xl font-bold mb-6">Riwayat Challenge</h1>
        <Swiper
          className="pb-20 md:pb-72"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {dataCardChallenge.map((item, index) => (
            <SwiperSlide key={index}>
              <CardChallenge {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-7 flex-wrap">
          {dataCardChallenge.map((item, index) => (
            <div key={index}>
              <CardChallenge {...item} />
            </div>
          ))}
          {/* </Swiper> */}
        </div>
      </div>
    </>
  );

  return <User content={content} />;
};

export default ChallengeUserPage;
