import React, { useEffect, useState } from "react";
import HeaderKegiatan from "../../../components/kegiatan/headerkeg";
import ChallengeImg from "../../../assets/img/illustration/1.png";
import CardChallenge from "../../../components/kegiatan/cardchallenge";
import {
  dataCardChallenge,
  dataLeaderboard,
} from "../../../dummydata/kegiatan/datachallenge";
import LeaderboardSection from "./leaderboard/leaderboard";
import RoleImg from "../../../assets/img/illustration/role.png";
import { useNavigate } from "react-router-dom";

const ChallengePage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Challenge";
  }, []);

  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

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
              {dataCardChallenge.map((kegiatan, index) => (
                <CardChallenge key={index} {...kegiatan} />
              ))}
            </div>
          </div>
          <div className="md:w-[35%]">
            <LeaderboardSection
              data={dataLeaderboard}
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
