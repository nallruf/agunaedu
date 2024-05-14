import React, { useState } from "react";
import TombolAlur from "../../../components/main/alur/tombolalur";
import {
  dataAlur,
  dataRole,
  dataPilih,
  dataCard,
} from "../../../dummydata/dataalur";
import ImgHacker from "../../../assets/img/gambarcard/hackeralgo.png";
import RoleImg from "../../../components/main/alur/roleimg";
import { FiBook } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";
import { LuBarChart } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import SideRole from "../../../components/main/alur/siderole";

const AlurSection = () => {
  const [activeRole, setActiveRole] = useState("Hacker");

  const handleRoleClick = (role) => {
    setActiveRole(role);
  };

  return (
    <section className="container mx-auto px-10 space-y-16 mb-[140px] mt-[70px]" id="alur">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-4xl font-semibold text-textPrimary">
          Alur pengembangan kami!
        </h1>
        <h1 className="text-[22px] text-textTertiary mt-4">
          Kembangkan satu skill secara bertahap <br />
          dengan konsisten melalui alur pembelajaran kami!
        </h1>
      </div>

      {/* <div className="border-dashed border-black border" /> */}
      <div className="grid md:grid-cols-3 gap-4 md:gap-0">
        {dataAlur.map((alur) => (
          <TombolAlur key={alur.id} {...alur} />
        ))}
      </div>

      <div className="flex gap-5">
        {dataRole.map((roleimg) => (
          <RoleImg
            key={roleimg.id}
            {...roleimg}
            isActive={activeRole === roleimg.role}
            onClick={() => handleRoleClick(roleimg.role)}
          />
        ))}
      </div>

      <div className="flex justify-between border-4 p-5">
        {dataPilih.map(() => (
          <SideRole
            key={dataPilih.id}
            title={item.title}
            desc={item.desc}
            icon1={item.icon1}
            icon2={item.icon2}
            icon3={item.icon3}
          />
        ))}
        {CardRole.map((item) => (
          <CardRole
            key={item.id}
            title={item.titlecard}
            desc={item.desccard}
            icon1={item.icon1}
            icon2={item.icon2}
            icon3={item.icon3}
          />
        ))}
      </div>
    </section>
  );
};

export default AlurSection;
