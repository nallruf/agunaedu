import React, { useEffect, useState } from "react";
import Logo from "../../../../../assets/img/logo/logo-biru.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const HasilTes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { testData, answers, role } = location.state;

  useEffect(() => {
    document.title = `Aguna Edu | Hasil Tes Dasar - ${role}`;
  });

  const calculateResults = () => {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    const currentTime = new Date();
    const submittedTime = currentTime.toLocaleString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    testData.questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
    });

    const score = correctAnswers * 10;

    return {
      correctAnswers,
      wrongAnswers,
      score,
      submittedTime,
    };
  };

  const { correctAnswers, wrongAnswers, score, submittedTime } =
    calculateResults();

  const passed = score >= 70;
  const finalScore = `${score}/100`;

  const handleSubmit = () => {
    localStorage.setItem(`${role.toLowerCase()}_passed`, passed);

    navigate(passed ? `/course/${role}` : `/course/${role}/tes`);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="bg-white shadow border w-full md:w-20 hidden md:flex flex-col items-center py-4">
          <img className="h-9 mb-8" src={Logo} alt="logo" />
          <div className="mt-auto mb-4">
            <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full">
              <AiOutlineQuestionCircle className="text-textTertiary text-4xl" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex-col md:flex-row p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{testData.title}</h1>
            <span className="flex text-textTertiary items-center gap-3">
              {testData.description}
            </span>
            <div className="mt-10 sm:mt-16">
              <span className="text-xl font-semibold">Ringkasan Hasil Tes</span>
            </div>
            <div className="hidden sm:flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-textTertiary text-sm">Status test</span>
                <div className="flex justify-end sm:gap-3 md:gap-14">
                  <span className="text-textTertiary text-sm">Total Benar</span>
                  <span className="text-textTertiary text-sm">Total Salah</span>
                  <span className="text-textTertiary text-sm">Total Skor</span>
                </div>
              </div>
              <hr className="border-t border-gray-300" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="text-textPrimary font-semibold">
                    Selesai
                  </span>
                  <span className="pr-12 text-textTertiary text-sm">
                    Terkumpul {submittedTime}
                  </span>
                </div>
                <div className="flex justify-end md:gap-[110px] gap-2 sm:gap-10">
                  <div className="border-2 border-[#079455] text-[#079455] bg-[#ECFEF3] rounded-full p-1 px-2 text-xs font-semibold">
                    {correctAnswers}
                  </div>
                  <div className="border-2 border-[#D73328] text-[#D73328] bg-[#FEF3F2] rounded-full p-1 px-2 text-xs font-semibold">
                    {wrongAnswers}
                  </div>
                  <div className="border-2 border-[#85CAFF] text-[#175CD3] bg-[#EFF8FF] rounded-full p-1 px-2 text-xs font-semibold">
                    {score}
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-300" />
            </div>
            <div className="mt-12 flex flex-col gap-2 ">
              <span>
                Nilai Akhir yang dicapai :
                <span className="font-semibold"> {finalScore}</span>
              </span>
              <div className="flex flex-col md:flex-row md:items-center justify-between ">
                <span className="text-textTertiary">
                  {passed
                    ? "Kamu lulus tes dan dapat melanjutkan pembelajaran ke kelas lanjutan hacker!"
                    : "Maaf, kamu belum lulus tes dan coba lagi untuk memulai tes"}
                </span>
                <button
                  className="bg-primaryBlue text-white rounded-lg px-14 py-2 mr-auto md:mr-0 md:ml-auto md:mt-0 mt-4"
                  onClick={handleSubmit}
                >
                  Lanjutkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HasilTes;
