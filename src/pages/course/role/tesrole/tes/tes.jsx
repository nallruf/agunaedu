import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataRole } from "../../../../../dummydata/course/datarole";
import {
  dataTesHacker,
  dataTesHipster,
  dataTesHustler,
} from "../../../../../dummydata/course/datates";
import NotFoundPage from "../../../../notfound";
import Logo from "../../../../../assets/img/logo/logo-biru.png";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import HasilTes from "./hasiltes";

const TesPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const event = dataRole.find((event) => event.role.toLowerCase() === role);

  useEffect(() => {
    if (event) {
      document.title = `Aguna Edu | Tes Dasar - ${event.role}`;
    }
  }, [event]);

  let testData;
  if (event.role.toLowerCase() === "hacker") {
    testData = dataTesHacker[0];
  } else if (event.role.toLowerCase() === "hustler") {
    testData = dataTesHustler[0];
  } else if (event.role.toLowerCase() === "hipster") {
    testData = dataTesHipster[0];
  }

  if (!event || !testData) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="bg-white shadow border w-full md:w-20 flex flex-col items-center py-4">
          <img className="h-9 mb-8" src={Logo} alt="logo" />
          <div className="mt-auto mb-4">
            <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full">
              <AiOutlineQuestionCircle className="text-textTertiary text-4xl" />
            </div>
          </div>
        </div>

        <div className=" flex-1 flex-col  p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">
              Tes Dasar Web Development
            </h1>
            <span className="flex text-textTertiary items-center gap-3">
              <IoIosArrowBack />
              Kembali
            </span>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 md:gap-4 flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  className={`h-10 w-10 flex border border-secondaryBlue items-center justify-center rounded-xl ${
                    num === 4
                      ? "bg-blue-500 text-white"
                      : "bg-quatenaryBlue text-primaryBlue"
                  } hover:bg-blue-600 hover:text-white`}
                >
                  {num}
                </button>
              ))}
            </div>

            <div className="flex items-center p-4 bg-[#FEF3F2] rounded-xl gap-2 text-[#D73328] mt-4 md:mt-0 ml-auto md:ml-0">
              <FaRegClock className="text-xl" />
              <span>Tersisa</span>
              <span className="font-semibold ml-2">0:55:02</span>
            </div>
          </div>

          <div className="mt-8 p-8 bg-quatenaryBlue rounded-xl flex flex-col border-borderPrimary border">
            <h2 className="text-lg">
              Protokol apa yang digunakan untuk mengirim data dalam bentuk teks
              antara client dan server?
            </h2>
            <p className="mt-4 font-semibold">Pilih Jawaban:</p>
            <div className="mt-2 space-y-2">
              {["a. HTTP", "b. FTP", "c. SMTP", "d. TCP"].map((answer, idx) => (
                <label
                  key={idx}
                  className="flex items-center bg-white p-3 rounded-xl border border-transparent hover:border-blue-500 cursor-pointer md:w-[30%]"
                >
                  <input type="radio" name="answer" className="mr-2" />
                  <span className="whitespace-nowrap">{answer}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-between">
            <div className="flex gap-3 md:flex-row justify-between">
              <button className="bg-[#F9FAFB] text-primaryBlue rounded-xl p-3  px-4  flex items-center gap-2 border border-borderSecondary font-medium">
                <FaArrowLeft /> Sebelumnya
              </button>
              <button className="bg-primaryBlue text-white rounded-xl p-3 px-4  flex items-center gap-2 font-medium">
                Selanjutnya
                <FaArrowRight />
              </button>
            </div>

            <div className="flex justify-center md:justify-end mt-4 md:mt-0">
              <button className="bg-primaryBlue text-white rounded-xl p-3 px-10 flex items-center gap-2 font-medium">
                Kumpulkan
              </button>
            </div>
          </div>
        </div>
      </div>
      <HasilTes />
    </>
  );
};

export default TesPage;
