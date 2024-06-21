import React, { useEffect } from "react";
import Admin from "./admin/admin";
import { HiOutlineBookOpen, HiOutlineTicket } from "react-icons/hi2";
import { RiAwardLine } from "react-icons/ri";
import { dataAnalysis } from "../../dummydata/user-menu/datadashboard";
import CardDashboardAnalysis from "../../components/user-menu/carddashboard/cardanalysis";
import LineChart from "../../components/admin-menu/linechart/linechart";
import BarCard from "../../components/admin-menu/barcard/barcard";
import {
  transaksiData,
  penyelesaianData,
} from "../../dummydata/admin-menu/databarcard";

const Dashboard = () => {
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
      <div className="flex-1 mx-8 md:mx-10 my-[35px] transition-all duration-300 overflow-auto">
        <div className="flex flex-col gap-5 mb-10">
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
        <LineChart />
        <div className="mt-10">
          <BarCard
            transaksiData={transaksiData}
            penyelesaianData={penyelesaianData}
          />
        </div>
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default Dashboard;
