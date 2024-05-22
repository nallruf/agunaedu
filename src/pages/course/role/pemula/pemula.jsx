import React, { useEffect } from "react";
import HeaderCourse from "../../../../components/course/header/headercourse";
import ImgPemula from "../../../../assets/img/illustration/login.png";
import { FiBook } from "react-icons/fi";
import { dataMentorDetail } from "../../../../dummydata/course/datamentor";
import MentorKelas from "../../../../components/course/fe/metordetail";
import { useParams } from "react-router-dom";
import { dataPemulaHacker } from "../../../../dummydata/course/datadetailpemula";
import NotFoundPage from "../../../notfound";

const PemulaPage = () => {
  const { path } = useParams();
  const event = dataPemulaHacker.find(
    (event) => event.path.toLowerCase() === path
  );

  if (!event) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  }

  useEffect(() => {
    document.title = `Aguna Edu | Pemula - ${event.path}`;
  }, []);

  return (
    <>
      <HeaderCourse
        goto="/course/hacker/"
        buttonBack="Kembali"
        role="Kelas Pemula"
        desc="Aguna Edu menghadirkan beberapa kelas pemula yang dapat kalian pelajari secara gratis!"
        imgRole={ImgPemula}
      />
      <section className="px-10 sm:px-20 md:px-40 py-[80px]">
        <div className="flex flex-col gap-2 mb-[45px] md:w-[60%]">
          <h1 className="text-5xl text-textPrimary font-semibold">
            {event.title}
          </h1>
          <span className="text-textTertiary text-xl mt-3">{event.desc}</span>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-5 ">
            <div className="grid gap-y-5 pr-10">
              <h1 className="text-2xl text-textPrimary font-semibold">
                Tentang Kelas
              </h1>
              <span className="text-textTertiary">{event.detailDesc}</span>
            </div>
            <div>
              <h1 className="text-2xl text-textPrimary font-semibold">
                Skill yang dipelajari
              </h1>

              <div className="flex gap-2">
                {event.tags.map((tag, index) => (
                  <p
                    key={index}
                    className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg my-2 shadow-md gap-2"
                  >
                    <span className="text-textTertiary text-sm">
                      {event.icons[index]}
                    </span>
                    {tag}
                  </p>
                ))}
              </div>
            </div>

            <div className="text-2xl text-textPrimary font-semibold">
              Metode Pembelajaran
              <div>
                <p className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg shadow-md">
                  {event.metode}
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:justify-end items-center mt-10 md:mt-0">
            <div className=" flex flex-col border-2 gap-5  w-[333px] p-8 rounded-xl">
              <span className="text-textPrimary text-2xl font-semibold">
                Detail Kelas
              </span>
              <hr />
              <span className="text-textTertiary font-semibold">
                Jumlah Materi
              </span>
              <span className="flex items-center gap-2">
                <FiBook className="text-primaryBlue" />
                <span className="text-textTertiary">{event.modul}</span>
              </span>
              <button
                className="bg-primaryBlue text-white rounded-lg px-5 w-[269px] h-[36px] items-center justify-center font-semibold"
                // onClick={handleDaftarClick}
              >
                BERGABUNG
              </button>
            </div>
          </div>
        </div>
      </section>
      {dataMentorDetail.map((item) => (
        <MentorKelas key={item.id} {...item} />
      ))}
    </>
  );
};

export default PemulaPage;
