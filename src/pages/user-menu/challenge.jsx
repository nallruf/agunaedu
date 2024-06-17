import React, { useEffect, useState } from "react";
import User from "./user/user";
import { useNavigate } from "react-router-dom";
import { RiAwardLine } from "react-icons/ri";
import { LuCoins } from "react-icons/lu";
import { BiSearchAlt } from "react-icons/bi";
import CardDashboardAnalysis from "../../components/user-menu/carddashboard/cardanalysis";
import CardChallenge from "../../components/user-menu/carddashboard/cardchallenge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useAuth } from "../../hooks/useauth";
import axios from "axios";

const ChallengeUserPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [challengeHistory, setChallengeHistory] = useState([]);
  const [stats, setStats] = useState({
    totalChallenge: 0,
    point: 0,
  });

  useEffect(() => {
    document.title = "Aguna Edu | Challenge User";
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/v1/user/challenge/statistic", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };

    const fetchChallengeHistory = async () => {
      try {
        const response = await axios.get("/api/v1/user/challenge/history", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setChallengeHistory(response.data);
      } catch (error) {
        console.error("Error fetching challenge history", error);
      }
    };

    if (user) {
      fetchStats();
      fetchChallengeHistory();
    }
  }, [user]);

  const iconComponents = {
    RiAwardLine: (
      <RiAwardLine className="text-secondaryBlue stroke" size={30} />
    ),
    LuCoins: <LuCoins className="text-secondaryBlue stroke-2" size={30} />,
  };

  const dataAnalysis = [
    {
      title: "Total Challenge yang diikuti",
      amount: stats.totalChallenge,
      icon: "RiAwardLine",
    },
    {
      title: "Total Poin",
      amount: `${stats.point} XP`,
      icon: "LuCoins",
    },
  ];

  const content = (
    <>
      <div className="flex flex-wrap gap-5 md:gap-10">
        {dataAnalysis.map((item, index) => (
          <CardDashboardAnalysis
            key={index}
            title={item.title}
            amount={item.amount}
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
            <button
              className="text-white font-medium text-sm bg-primaryBlue rounded-lg px-3 py-2 w-full"
              onClick={() => navigate("/challenge")}
            >
              Cari Challenge
            </button>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-2xl font-bold mb-6">Riwayat Challenge</h1>
        {challengeHistory.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <BiSearchAlt className="text-secondaryBlue" size={60} />
            <h1 className="text-xl font-semibold mt-4">
              Kamu Belum Mengikuti Challenge Apapun :(
            </h1>
          </div>
        ) : (
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
            {challengeHistory.map((item, index) => (
              <SwiperSlide key={index}>
                <CardChallenge
                  title={item.challenge[0].challengeName}
                  points={item.point}
                  score={item.winner}
                  image={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                    item.challenge[0].imageUrl
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );

  return <User content={content} />;
};

export default ChallengeUserPage;
