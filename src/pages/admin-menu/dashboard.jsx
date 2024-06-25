import React, { useEffect, useState } from "react";
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
import { useAuth } from "../../hooks/useauth";
import axios from "axios";
import { FiUsers } from "react-icons/fi";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalMentee: 0,
    totalMentor: 0,
    totalCourse: 0,
    totalEvent: 0,
    totalChallenge: 0,
  });

  useEffect(() => {
    document.title = "Aguna Edu | Dashboard Admin";
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/v1/admin/statistic", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };

    if (user) {
      fetchStats();
    }
  }, [user]);

  const iconComponents = {
    HiOutlineBookOpen: (
      <HiOutlineBookOpen className="text-secondaryBlue stroke-2" size={30} />
    ),
    FiUsers: (
      <FiUsers className="text-secondaryBlue stroke-2" size={30} />
    ),
    HiOutlineTicket: (
      <HiOutlineTicket className="text-secondaryBlue stroke-2" size={30} />
    ),
    RiAwardLine: (
      <RiAwardLine className="text-secondaryBlue stroke" size={30} />
    ),
  };

  const dataDashboardNih = [
    {
      title: "Total Mentee",
      amount: stats.totalMentee,
      icon: "FiUsers",
    },
    {
      title: "Total Mentor",
      amount: stats.totalMentor,
      icon: "FiUsers",
    },
    {
      title: "Total Course",
      amount: stats.totalCourse,
      icon: "HiOutlineBookOpen",
    },
    {
      title: "Total Event",
      amount: stats.totalEvent,
      icon: "HiOutlineTicket",
    },
    {
      title: "Total Challenge",
      amount: stats.totalChallenge,
      icon: "RiAwardLine",
    },
  ];
  const content = (
    <>
      <div className="flex-1 mx-8 md:mx-10 my-[35px] transition-all duration-300 overflow-auto">
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex flex-wrap gap-5 md:gap-10">
            {dataDashboardNih.map((item, index) => (
              <CardDashboardAnalysis
                key={index}
                title={item.title}
                amount={item.amount}
                // total={item.total}
                // profit={item.profit}
                icon={iconComponents[item.icon]}
              />
            ))}
          </div>
        </div>
        {/* <LineChart />
        <div className="mt-10">
          <BarCard
            transaksiData={transaksiData}
            penyelesaianData={penyelesaianData}
          />
        </div> */}
      </div>
    </>
  );
  return <Admin content={content} />;
};

export default Dashboard;
