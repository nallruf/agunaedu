import React, { useEffect, useState } from "react";
import TombolAlur from "../../../components/main/alur/tombolalur";
import {
  dataAlur,
  dataPilih,
  dataRole,
} from "../../../dummydata/main/dataalur";
import RoleImg from "../../../components/main/alur/roleimg";
import SideRole from "../../../components/main/alur/siderole";
import CardRole from "../../../components/main/alur/cardrole";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiUsers } from "react-icons/fi";
import { IoCodeSlash, IoPencil } from "react-icons/io5";
import { RiSpeakFill } from "react-icons/ri";

const AlurSection = () => {
  const [activeRole, setActiveRole] = useState("Hacker");
  const [roleData, setRoleData] = useState([]);

  useEffect(() => {
    const fetchRoleData = async () => {
      try {
        const response = await axios.get("api/v1/public/landing/role");
        const formattedData = response.data.map((role) => ({
          ...role,
          role_name: formatRoleName(role.role_name),
        }));
        setRoleData(formattedData);
      } catch (error) {
        console.error("Error fetching role data:", error);
      }
    };

    fetchRoleData();
  }, []);

  const handleRoleClick = (role) => {
    setActiveRole(role);
  };

  const getRoleImage = (roleName) => {
    const role = dataRole.find((r) => r.role === roleName);
    return role ? role.gambar : "";
  };

  const formatRoleName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const filteredDataPilih = dataPilih.filter(({ goto }) =>
    goto.toLowerCase().includes(activeRole.toLowerCase())
  );

  const getRoleIcon = (roleName) => {
    switch (roleName.toLowerCase()) {
      case "hacker":
        return <IoCodeSlash />;
      case "hipster":
        return <IoPencil />;
      case "hustler":
        return <RiSpeakFill />;
      default:
        return null;
    }
  };

  return (
    <section
      className="px-10 sm:px-20 md:px-40 space-y-16 mb-[80px] mt-[70px]"
      id="alur"
    >
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-2xl sm:text-4xl font-semibold text-textPrimary">
          Alur pengembangan kami!
        </h1>
        <h1 className="text-base sm:text-[22px] text-textTertiary mt-4">
          Kembangkan satu skill secara bertahap <br />
          dengan konsisten melalui alur pembelajaran kami!
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-0 relative">
        {dataAlur.map((alur) => (
          <div
            key={alur.id}
            className="flex md:justify-center items-center relative"
          >
            <div className="relative z-10">
              <TombolAlur {...alur} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-5">
        {roleData.map((role) => (
          <RoleImg
            key={role.role_id}
            id={role.role_id}
            gambar={getRoleImage(role.role_name)}
            role={role.role_name}
            isActive={activeRole === role.role_name}
            onClick={() => handleRoleClick(role.role_name)}
          />
        ))}
      </div>

      <div className="flex justify-between md:flex-row flex-col">
        <div className="md:w-[40%]">
          {roleData
            .filter(({ role_name }) =>
              role_name.toLowerCase().includes(activeRole.toLowerCase())
            )
            .map((item) => (
              <SideRole
                key={item.role_id}
                title={item.role_name}
                desc={
                  filteredDataPilih.find(({ goto }) =>
                    goto.toLowerCase().includes(item.role_name.toLowerCase())
                  )?.desc
                }
                jmlalur={item.total_path}
                jmlkelas={item.total_course}
                jmlsiswa={item.total_student}
                goto={
                  filteredDataPilih.find(({ goto }) =>
                    goto.toLowerCase().includes(item.role_name.toLowerCase())
                  )?.goto
                }
              />
            ))}
        </div>
        <div className="flex-1 overflow-x-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            className="md:pb-36 pb-20"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {roleData
              .filter(({ role_name }) =>
                role_name.toLowerCase().includes(activeRole.toLowerCase())
              )
              .flatMap((item) =>
                item.paths.map((path, index) => (
                  <SwiperSlide className="md:my-24 md:pl-10" key={index}>
                    <CardRole
                      img={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                        path.imageUrl
                      }`}
                      titlecard={path.name}
                      desccard={path.description}
                      icon2={<FiUsers />}
                      isLocked={false}
                      level={`${path.totalStudent} Siswa`}
                      icons={[getRoleIcon(item.role_name)]}
                      tes={[item.role_name]}
                    />
                  </SwiperSlide>
                ))
              )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AlurSection;
