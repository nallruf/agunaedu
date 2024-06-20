import React, { useEffect, useState } from "react";
import HeaderKegiatan from "../../../components/kegiatan/headerkeg";
import ChallengeImg from "../../../assets/img/illustration/1.png";
import CardChallenge from "../../../components/kegiatan/cardchallenge";
import LeaderboardSection from "../../../components/kegiatan/leaderboard";
import RoleImg from "../../../assets/img/illustration/role.png";
import Avatar from "../../../assets/img/team/avatar.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChallengePage = () => {
  const [challenge, setChallenge] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aguna Edu | Challenge";

    const fetchChallenge = async () => {
      try {
        const response = await axios.get("/api/v1/public/landing/challenge");
        setChallenge(response.data);
      } catch (error) {
        console.error("Error fetching challenge:", error);
      }
    };

    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("/api/v1/public/leaderboard");
        const leaderboardData = response.data.map((participant, index) => ({
          id: index + 1,
          name: participant.name,
          profileImg: participant.imageUrl
            ? `${import.meta.env.VITE_PUBLIC_URL}/images/${
                participant.imageUrl
              }`
            : Avatar,
          xp: participant.totalScore,
          rank: index + 1,
        }));
        setLeaderboard(leaderboardData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchChallenge();
    fetchLeaderboard();
  }, []);

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

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <HeaderKegiatan
        title="Uji kemampuanmu melalui Challenge!"
        desc="Ikuti challenge untuk menguji kemampuanmu!"
        imgKeg={ChallengeImg}
      />

      <section className="px-10 sm:px-20 md:px-40 mt-[70px] mb-[80px]">
        <div className="flex gap-10 md:flex-row flex-col">
          <div className="md:w-[65%]">
            <div className="text-textPrimary flex flex-col gap-1">
              <h1 className="text-4xl font-semibold">
                Kumpulkan Poin melalui Challenge
              </h1>
              <h3 className="text-xl">
                Tukarkan poinmu dengan berbagai voucher menarik!
              </h3>
            </div>
            <div className="mt-10 flex flex-col gap-6">
              {challenge.map((kegiatan) => (
                <CardChallenge
                  key={kegiatan.id}
                  title={kegiatan.name}
                  imgChallenge={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                    kegiatan.imageUrl
                  }`}
                  tags={kegiatan.skills.map((skill) => skill.name)}
                  date={formatDateRange(kegiatan.startDate, kegiatan.endDate)}
                  link={`/challenge/detail/${kegiatan.id}`}
                />
              ))}
            </div>
          </div>
          <div className="md:w-[35%]">
            <LeaderboardSection
              data={leaderboard}
              showAll={showAll}
              toggleShowAll={toggleShowAll}
            />
          </div>
        </div>
      </section>

      <section className="bg-primaryBlue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] w-[400px] h-[400px] rounded-full bg-secondaryBlue" />
        <div className="absolute bottom-0 left-0 translate-y-[90%] w-[770px] h-[735px] rounded-full bg-secondaryBlue" />
        <div className="px-10 sm:px-20 md:px-40 mt-[70px] z-10 relative">
          <div className="grid md:grid-cols-2">
            <div className="mt-32 md:my-auto">
              <h1 className="text-white font-semibold text-3xl sm:text-5xl">
                Ingin Tau cara ningkatin skillmu? Yuk, cari kelas!
              </h1>
              <h3 className="text-textQuote text-xl mt-3">
                Kamu bisa banget mulai belajar di Aguna Edu untuk tingkatin
                skillmu!
              </h3>
              <button
                className="text-primaryBlue font-semibold bg-white mt-9 px-11 py-[10px] rounded-lg flex items-center"
                onClick={() => navigate("/")}
              >
                Cari Kelas
              </button>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={RoleImg}
                alt="role-challenge"
                draggable="false"
                className="md:w-3/4 sm:w-2/3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChallengePage;
