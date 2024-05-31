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
import toast from "react-hot-toast";

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

  const [time, setTime] = useState(testData.time * 60);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(
    Array(testData.questions.length).fill(null)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigate(`/course/${role}/tes/dasar/hasil`, {
        state: {
          role,
          testData,
          answers,
        },
      });
    }
  }, [time]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const unansweredQuestions = answers.some((answer) => answer === null);

    if (unansweredQuestions) {
      toast.error("Please answer all questions before submitting.");
      return;
    }

    navigate(`/course/${role}/tes/dasar/hasil`, {
      state: {
        role,
        testData,
        answers,
      },
    });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="hidden bg-white shadow border w-full md:w-20 md:flex flex-col items-center py-4">
          <img className="h-9 mb-8" src={Logo} alt="logo" />
          <div className="mt-auto mb-4">
            <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full">
              <AiOutlineQuestionCircle className="text-textTertiary text-4xl" />
            </div>
          </div>
        </div>

        <div className=" flex-1 flex-col  p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{testData.title}</h1>
            <button
              className="flex text-textTertiary items-center gap-3"
              onClick={() => navigate(-1)}
            >
              <IoIosArrowBack />
              Kembali
            </button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 md:gap-4 flex-wrap">
              {testData.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`h-10 w-10 flex border border-secondaryBlue items-center justify-center rounded-xl ${
                    index === currentQuestionIndex
                      ? "bg-primaryBlue text-white"
                      : answers[index]
                      ? "bg-quatenaryBlue text-primaryBlue"
                      : "bg-white text-primaryBlue"
                  } hover:bg-blue-600 hover:text-white`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="flex items-center p-4 bg-[#FEF3F2] rounded-xl gap-2 text-[#D73328] mt-4 sm:mt-0 ml-auto md:ml-0">
              <FaRegClock className="text-xl" />
              <span>Waktu Tersisa</span>
              <span className="font-semibold ml-2">{formatTime(time)}</span>
            </div>
          </div>

          {/* {testData.questions.map((q, index) => (
            <div
              key={index}
              className="mt-8 p-8 bg-quatenaryBlue rounded-xl flex flex-col border-borderPrimary border"
            >
              <h2 className="text-lg">{q.question}</h2>
              <p className="mt-4 font-semibold">Pilih Jawaban:</p>
              <div className="mt-2 space-y-2">
                {q.options.map((option, idx) => (
                  <label
                    key={idx}
                    className="flex items-center bg-white p-3 rounded-xl border border-transparent hover:border-blue-500 cursor-pointer md:w-[30%]"
                  >
                    <input
                      type="radio"
                      name={`answer-${index}`}
                      className="mr-2"
                    />
                    <span className="whitespace-nowrap">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))} */}
          <div className="mt-8 p-8 bg-quatenaryBlue rounded-xl flex flex-col border-borderPrimary border">
            <h2 className="text-lg">
              {testData.questions[currentQuestionIndex].question}
            </h2>
            <p className="mt-4 font-semibold">Pilih Jawaban:</p>
            <div className="mt-2 space-y-2">
              {testData.questions[currentQuestionIndex].options.map(
                (option, idx) => (
                  <label
                    key={idx}
                    className="flex items-center bg-white p-3 rounded-xl border border-transparent hover:border-blue-500 cursor-pointer md:w-[30%]"
                  >
                    <input
                      type="radio"
                      name={`answer-${currentQuestionIndex}`}
                      className="mr-2"
                      checked={answers[currentQuestionIndex] === option}
                      onChange={() =>
                        handleAnswerChange(currentQuestionIndex, option)
                      }
                    />
                    <span className="whitespace-normal">{option}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-between">
            <div className="flex gap-3 md:flex-row justify-between">
              <button
                className="text-primaryBlue rounded-xl p-3 px-4 flex items-center gap-2 border border-borderSecondary font-medium"
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    prev > 0 ? prev - 1 : prev
                  )
                }
              >
                <FaArrowLeft /> Sebelumnya
              </button>
              <button
                className="bg-primaryBlue text-white rounded-xl p-3 px-4 flex items-center gap-2 font-medium"
                onClick={() =>
                  setCurrentQuestionIndex((prev) =>
                    prev < testData.questions.length - 1 ? prev + 1 : prev
                  )
                }
              >
                Selanjutnya <FaArrowRight />
              </button>
            </div>

            <div className="flex justify-center mt-4 md:mt-0">
              <button
                className="bg-primaryBlue text-white rounded-xl p-3 px-4 flex justify-center items-center gap-2 font-medium w-full"
                onClick={handleSubmit}
              >
                Kumpulkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TesPage;
