import React, { useEffect, useState } from "react";
import HeaderCourse from "../../../../../../components/course/header/headercourse";
import { useParams, useNavigate } from "react-router-dom";
import { dataFeWeb } from "../../../../../../dummydata/course/datadetailweb";
import NotFoundPage from "../../../../../notfound";
import ImgCourse from "../../../../../../assets/img/illustration/course.png";
import { FiBook } from "react-icons/fi";
import MentorKelas from "../../../../../../components/course/fe/metordetail";
import { dataMentorDetail } from "../../../../../../dummydata/course/datamentor";

const DetailFePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = dataFeWeb.find((event) => event.id.toString() === id);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  useEffect(() => {
    document.title = event ? `Aguna Edu | FE #${event.id}` : "Aguna Edu | FE";

    const paymentStatus = localStorage.getItem(`paymentConfirmed_${id}`);
    if (paymentStatus) {
      setPaymentConfirmed(JSON.parse(paymentStatus));
    }

    // Menghapus item dari localStorage saat komponen dilepas
    return () => {
      localStorage.removeItem(`paymentConfirmed_${id}`);
    };
  }, [id, event]);

  const handleDaftarClick = () => {
    navigate(`/course/hacker/path-web/fe/transaction/${event.id}`);
  };

  return (
    <>
      <div>
        <HeaderCourse
          goto="/course/hacker/path-web/fe"
          buttonBack="Kembali"
          role="Kelas Mandiri"
          desc="Aguna Edu menghadirkan berbagai kelas mentoring yang bisa kamu ikuti!"
          imgRole={ImgCourse}
        />
        <section className="px-10 sm:px-20 md:px-40 py-[80px]">
          <div className="flex flex-col gap-2 mb-[45px] md:w-[60%]">
            <h1 className="text-5xl text-textPrimary font-semibold">
              {event.title}
            </h1>
            <span className="text-textTertiary text-xl mt-3">{event.desc}</span>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-5 pr-10">
              <div className="grid gap-y-5">
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
              <div className=" flex flex-col border-2 gap-5 w-[333px] p-8 rounded-xl">
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
                {!paymentConfirmed ? (
                  <>
                    <span className="text-primaryBlue text-2xl font-semibold">
                      {event.harga}
                    </span>
                    <button
                      className="bg-primaryBlue text-white rounded-lg px-5 py-2 w-[269px] h-[36px] items-center justify-center flex"
                      onClick={handleDaftarClick}
                    >
                      Daftar
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-primaryBlue text-white rounded-lg px-5 py-2 w-[269px] h-[36px] items-center justify-center flex"
                    onClick={() => navigate(`/course/hacker/path-web/fe/${id}`)}
                  >
                    Lanjut Belajar
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {dataMentorDetail.map((item) => (
          <MentorKelas key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default DetailFePage;
