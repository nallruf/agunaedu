import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderCourse from "../../../../../components/course/header/headercourse";
import ImgTes from "../../../../../assets/img/illustration/tes.png";
import { MdOutlineAccessTime } from "react-icons/md";
import NotFoundPage from "../../../../notfound";
import {
  dataTesHacker,
  dataTesHustler,
  dataTesHipster,
} from "../../../../../dummydata/course/datates";
import { dataRole } from "../../../../../dummydata/course/datarole";
import { FiBook } from "react-icons/fi";

const DetailTesPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const event = dataRole.find((event) => event.role.toLowerCase() === role);

  useEffect(() => {
    if (event) {
      document.title = `Aguna Edu | Detail Tes - ${event.role}`;
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
      <HeaderCourse
        goto={`/course/${event.role}`.toLowerCase()}
        buttonBack="Kembali"
        role={testData.title}
        desc="Aguna Edu menghadirkan beberapa test dasar yang dapat kalian pelajari secara gratis!"
        imgRole={ImgTes}
      />
      <section className="px-10 sm:px-20 md:px-40 py-[80px]">
        <div className="flex flex-col gap-2 mb-[45px] md:w-[60%]">
          <h1 className="text-5xl text-textPrimary font-semibold">
            {testData.title}
          </h1>
          <span className="text-textTertiary text-xl mt-3">
            {testData.description}
          </span>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-5 ">
            <div className="grid gap-y-5 pr-10">
              <h1 className="text-2xl text-textPrimary font-semibold">
                Tentang Tes
              </h1>
              <span className="text-textTertiary">{testData.about}</span>
            </div>
            <div>
              <h1 className="text-2xl text-textPrimary font-semibold">
                Skill yang diuji
              </h1>
              <div className="flex flex-wrap gap-2">
                {testData.skills && testData.skills.length > 0 ? (
                  testData.skills.map((skill, index) => (
                    <p
                      key={index}
                      className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg my-2 shadow-md gap-2"
                    >
                      {skill}
                    </p>
                  ))
                ) : (
                  <p>No skills specified</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex md:justify-end items-center mt-10 md:mt-0">
            <div className="flex flex-col border-2 gap-5 w-[333px] p-8 rounded-xl">
              <span className="text-textPrimary text-2xl font-semibold">
                Detail Tes
              </span>
              <hr />
              <div className="flex flex-col gap-8 mb-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-textTertiary font-semibold text-lg">
                    Durasi Tes
                  </h2>
                  <h3 className="flex items-center gap-2">
                    <MdOutlineAccessTime className="text-primaryBlue text-xl" />
                    <span className="text-iconInput text-sm">
                      {testData.time < 60
                        ? `${testData.time} Menit`
                        : `${Math.floor(testData.time / 60)} Jam ${
                            testData.time % 60 !== 0
                              ? (testData.time % 60) + " Menit"
                              : ""
                          }`}
                    </span>
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-textTertiary font-semibold text-lg">
                    Jumlah Soal
                  </h2>
                  <h3 className="flex items-center gap-2">
                    <FiBook className="text-primaryBlue text-xl" />
                    <span className="text-iconInput text-sm">
                      {testData.questionsCount} Soal
                    </span>
                  </h3>
                </div>
              </div>
              <button
                className="bg-primaryBlue text-white rounded-lg px-5 w-[269px] h-[36px] items-center justify-center font-semibold"
                onClick={() => navigate(`/course/${role}/tes/dasar`)}
              >
                Ambil Tes
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailTesPage;
