import React, { useEffect } from "react";
import User from "./user/user";
import {
  dataAnalysis,
  dataKelas,
  dataMentoring,
} from "../../dummydata/user-menu/datadashboard";
import { HiOutlineBookOpen, HiOutlineTicket } from "react-icons/hi2";
import { RiAwardLine } from "react-icons/ri";
import CardDashboardAnalysis from "../../components/user-menu/carddashboard/cardanalysis";
import CardDashboardMentoring from "../../components/user-menu/carddashboard/cardmentoring";
import CardCourse from "../../components/user-menu/carddashboard/cardcourse";

const DashboardUserPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);

  const iconComponents = {
    HiOutlineBookOpen: (
      <HiOutlineBookOpen className="text-secondaryBlue stroke-2" size={30} />
    ),
    HiOutlineTicket: (
      <HiOutlineTicket className="text-secondaryBlue stroke-2" size={30} />
    ),
    RiAwardLine: (
      <RiAwardLine className="text-secondaryBlue stroke" size={30} />
    ),
  };

  const content = (
    <>
      <div className="flex flex-col gap-5 mb-10">
        <h1 className="text-2xl font-semibold text-textPrimary">
          Selamat Datang, Ulum
        </h1>
        <div className="flex flex-wrap gap-5 md:gap-10">
          {dataAnalysis.map((item, index) => (
            <CardDashboardAnalysis
              key={index}
              title={item.title}
              amount={item.amount}
              total={item.total}
              profit={item.profit}
              icon={iconComponents[item.icon]}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-10">
        <h1 className="text-xl font-semibold text-textPrimary">Mentoring</h1>
        <div className="flex flex-wrap gap-3 md:gap-5">
          {dataMentoring.map((mentoring, index) => (
            <CardDashboardMentoring
              key={index}
              title={mentoring.title}
              img={mentoring.img}
              nameMentor={mentoring.nameMentor}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-semibold text-textPrimary">
          Lanjutkan Progress Terakhir Kelas
        </h1>
        <div className="flex flex-wrap gap-3 md:gap-5">
          {dataKelas.map((kelas, index) => (
            <CardCourse
              key={index}
              title={kelas.title}
              img={kelas.img}
              tags={kelas.tags}
              icons={kelas.icons}
              progress={kelas.progress}
            />
          ))}
        </div>
      </div>
    </>
  );

  return <User content={content} />;
};

export default DashboardUserPage;
