import React, { useState } from "react";
import TombolAlur from "../../../components/main/alur/tombolalur";
import { dataAlur, dataRole } from "../../../dummydata/dataalur";
import ImgHacker from "../../../assets/img/role/Hacker.png";
import RoleImg from "../../../components/main/alur/roleimg";
import { FiBook } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";
import { LuBarChart } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";

const AlurSection = () => {
  const [activeRole, setActiveRole] = useState("Hacker");

  const handleRoleClick = (role) => {
    setActiveRole(role);
  };

  return (
    <section className="container mx-auto px-10 space-y-16 mb-[140px] mt-[70px]">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-4xl font-semibold text-textPrimary">
          Alur pengembangan kami!
        </h1>
        <h1 className="text-[22px] text-textTertiary mt-4">
          Kembangkan satu skill secara bertahap <br />
          dengan konsisten melalui alur pembelajaran kami!
        </h1>
      </div>

      <div class="border-dashed border-black border" />
      <div className="flex">
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

      <div className="flex justify-between border-4">
        <div className="flex flex-col gap-4">
          <h1>Role Hacker</h1>
          <p>Mempelajari pemrograman yang sesuai dengan Industri saat ini</p>
          <hr className="mt-8" />
          <div>
            <div className="flex items-center gap-2 mt-4">
              <FiBook />
              <p>2 Alur Pembelajaran</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <HiOutlineBookOpen />
              <p>30 Kelas Self Learning & Mentoring</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <FiUsers />
              <p>210 Siswa</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="rounded-lg text-primaryBlue bg-white p-2 border">
              Pilih Role
            </button>
          </div>
        </div>
        <div className="flex justify-end items-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="rounded-lg border p-4 shadow-lg">
              <div className="p 5 flex flex-col">
                <div className="rounded-lg overflow-hidden">
                  <img src={ImgHacker} alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="flex border rounded-lg items-center mx-auto">
                    <FaLaptop /> Tes Dasar
                  </div>
                  <h1>Pemrogaman dasar</h1>
                  <h1>Tes dasar</h1>
                  <div className="flex items-center">
                    <LuBarChart /> Level Pemula
                    <GoStarFill />
                    4.9 (2k)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlurSection;
