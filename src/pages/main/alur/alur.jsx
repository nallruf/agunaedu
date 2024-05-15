import React, { useState } from "react";
import TombolAlur from "../../../components/main/alur/tombolalur";
import Slider from "react-slick";
import {
  dataAlur,
  dataRole,
  dataPilih,
  dataCard,
} from "../../../dummydata/main/dataalur";
import RoleImg from "../../../components/main/alur/roleimg";
import SideRole from "../../../components/main/alur/siderole";
import CardRole from "../../../components/main/alur/cardrole";

const AlurSection = () => {
  const [activeRole, setActiveRole] = useState("Hacker");

  const handleRoleClick = (role) => {
    setActiveRole(role);
  };

  const filteredDataPilih = dataPilih.filter((item) =>
    item.title.toLowerCase().includes(activeRole.toLowerCase())
  );

  const filteredDataCard = dataCard.filter((item) =>
    item.tes.some((test) =>
      test.toLowerCase().includes(activeRole.toLowerCase())
    )
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section
      className="container mx-auto px-10 space-y-16 mb-[140px] mt-[70px]"
      id="alur"
    >
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
      <div className="grid md:grid-cols-3 gap-5 md:gap-0">
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
      <div className="flex justify-between md:flex-row flex-col items-center">
        <div className="my-12 sm:my-20 md:my-[150px] md:w-[40%] ">
          {filteredDataPilih.map((item) => (
            <SideRole
              key={item.id}
              title={item.title}
              desc={item.desc}
              icon1={item.icon1}
              icon2={item.icon2}
              icon3={item.icon3}
              jmlalur={item.jmlalur}
              jmlkelas={item.jmlkelas}
              jmlsiswa={item.jmlsiswa}
            />
          ))}
        </div>
        {/* <Slider {...settings}> */}
        <div
          className="grid md:grid-cols-2 mt-10 gap-10 justify-end md:py-[70px]"
          data-aos="zoom-in"
        >
          {filteredDataCard.slice(0, 2).map((item) => (
            <CardRole
              key={item.id}
              titlecard={item.titlecard}
              desccard={item.desccard}
              icon1={item.icon1}
              icon2={item.icon2}
              icon3={item.icon3}
              tes={item.tes}
              img={item.img}
              level={item.level}
              rating={item.rating}
            />
          ))}
        </div>
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default AlurSection;
