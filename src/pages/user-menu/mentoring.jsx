import React, { useEffect } from "react";
import User from "./user/user";
import {
  dataLiveMentoring,
  dataSelesaiMentoring,
} from "../../dummydata/user-menu/datadashboard";
import CardMentoring from "../../components/user-menu/cardmentoring/cardmentoring";
import CardFeedback from "../../components/user-menu/cardmentoring/cardfeedback";

const MentoringUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Mentoring User";
  }, []);

  const content = (
    <>
      <div className="flex flex-col gap-[35px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-[6px]">
            <h1 className="text-2xl text-textPrimary font-semibold">
              Sedang Berlangsung
            </h1>
            <h3 className="text-textTertiary text-base">
              Mentoring yang sedang berlangsung
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-5">
            {dataLiveMentoring.map((kelas, index) => (
              <CardMentoring
                key={index}
                title={kelas.title}
                img={kelas.img}
                tags={kelas.tags}
                icons={kelas.icons}
                imgProfile={kelas.imgProfile}
                nameMentor={kelas.nameMentor}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-[6px]">
            <h1 className="text-2xl text-textPrimary font-semibold">Selesai</h1>
            <h3 className="text-textTertiary text-base">
              Mentoring yang sudah selesai
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-5">
            {dataSelesaiMentoring.map((selesai, index) => (
              <CardFeedback
                key={index}
                kelas={selesai.kelas}
                title={selesai.title}
                imgCode={selesai.imgCode}
                desc={selesai.desc}
                tags={selesai.tags}
                imgProfile={selesai.imgProfile}
                nameMentor={selesai.nameMentor}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return <User content={content} />;
};

export default MentoringUserPage;
