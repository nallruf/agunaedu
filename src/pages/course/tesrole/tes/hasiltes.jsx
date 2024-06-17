import React, { useEffect, useState } from "react";
import Logo from "../../../../assets/img/logo/logo-biru.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const HasilTes = () => {
  const location = useLocation();
  const { test, testName, answers, correctAnswers, submittedTime, classData } =
    location.state || {};
  const { role } = useParams();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalIncorrect, setTotalIncorrect] = useState(0);
  const [testStatus, setTestStatus] = useState(false);

  useEffect(() => {
    if (!test || !classData) {
      navigate(`/course/${role}/tes/dasar`);
    }
  }, [test, classData, navigate, role]);

  useEffect(() => {
    document.title = `Aguna Edu | Hasil Tes Dasar - ${test.role_name}`;
  });

  useEffect(() => {
    if (answers && correctAnswers) {
      const correct = answers.filter(
        (answer, index) => answer === correctAnswers[index]
      ).length;
      const incorrect = answers.length - correct;
      const calculatedScore = (correct / answers.length) * 100;

      setTotalCorrect(correct);
      setTotalIncorrect(incorrect);
      setScore(calculatedScore);

      if (calculatedScore >= 70) {
        setTestStatus(true);
      }
    }
  }, [answers, correctAnswers]);

  const passed = testStatus >= 70;
  const finalScore = `${score}/100`;

  //kurang untuk submitnya gatau aku arahin gimana...
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
            <h1 className="text-2xl font-semibold">{testName}</h1>
            <span className="flex text-textTertiary items-center gap-3">
              {testName}
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
                    {totalCorrect}
                  </div>
                  <div className="border-2 border-[#D73328] text-[#D73328] bg-[#FEF3F2] rounded-full p-1 px-2 text-xs font-semibold">
                    {totalIncorrect}
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
