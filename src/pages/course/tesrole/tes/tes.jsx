import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../../../../assets/img/logo/logo-biru.png";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useAuth } from "../../../../hooks/useauth";
import axios from "axios";

const TesPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState(null);
  const [classData, setClassData] = useState(null);
  const { user } = useAuth();
  const location = useLocation();
  const testName = location.state?.testName;

  useEffect(() => {
    const fetchDetailclassData = async () => {
      try {
        const response = await axios.get(`/api/v1/public/landing/role`);
        const foundRole = response.data.find(
          (item) => item.role_name.toLowerCase() === role
        );

        if (foundRole) {
          setTest(foundRole);

          const roleResponse = await axios.get(
            `/api/v1/auth/test/start/${foundRole.role_id}`,
            {
              headers: {
                Authorization: `Bearer ${user}`,
              },
            }
          );
          setClassData(roleResponse.data);
        } else {
          console.error("Error No Test");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchDetailclassData();
  }, [role, user]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (test) {
      document.title = `Aguna Edu | Tes Dasar - ${capitalizeFirstLetter(
        test.role_name
      )}`;
    }
  }, [test]);

  const [time, setTime] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (classData) {
      setTime(classData.duration * 60);
      setAnswers(Array(classData.questions.length).fill(null));
    }
  }, [classData]);

  useEffect(() => {
    if (time !== null) {
      const timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      navigate(`/course/${test.role_name.toLowerCase()}/tes/dasar/hasil`, {
        state: {
          test,
          classData,
          testName,
          answers,
          correctAnswers: classData.questions.map((q) => q.correctAnswer),
          submittedTime: new Date().toLocaleString(),
        },
      });
    }
  }, [time, test, navigate, classData, answers]);

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
      toast.error("Jawab semua pertanyaan sebelum menyelesaikan tes");
      return;
    }

    navigate(`/course/${test.role_name.toLowerCase()}/tes/dasar/hasil`, {
      state: {
        test,
        classData,
        testName,
        answers,
        correctAnswers: classData.questions.map((q) => q.correctAnswer),
        submittedTime: new Date().toLocaleString(),
      },
    });
  };

  if (!test || !classData) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        LOADING .......
      </div>
    );
  }

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

        <div className="flex-1 flex-col p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{testName}</h1>
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
              {classData.questions.map((_, index) => (
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

          <div className="mt-8 p-8 bg-quatenaryBlue rounded-xl flex flex-col border-borderPrimary border">
            <h2 className="text-lg">
              {classData.questions[currentQuestionIndex].question}
            </h2>
            <p className="mt-4 font-semibold">Pilih Jawaban:</p>
            <div className="mt-2 space-y-2">
              {classData.questions[currentQuestionIndex].answers.map(
                (option, idx) => (
                  <label
                    key={idx}
                    className="flex items-center bg-white p-3 rounded-xl border border-transparent hover:border-blue-500 cursor-pointer md:w-[30%]"
                  >
                    <input
                      type="radio"
                      name={`answer-${currentQuestionIndex}`}
                      className="mr-2"
                      checked={
                        answers[currentQuestionIndex] === option.idAnswer
                      }
                      onChange={() =>
                        handleAnswerChange(
                          currentQuestionIndex,
                          option.idAnswer
                        )
                      }
                    />
                    <span className="whitespace-normal">{option.answer}</span>
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
                    prev < classData.questions.length - 1 ? prev + 1 : prev
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
                Selesai Tes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TesPage;
