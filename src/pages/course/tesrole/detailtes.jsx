import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderCourse from "../../../components/course/headercourse";
import ImgTes from "../../../assets/img/illustration/tes.png";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { useAuth } from "../../../hooks/useauth";
import axios from "axios";

const DetailTesPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState(null);
  const [classData, setClassData] = useState();
  const { user } = useAuth();

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
            `/api/v1/auth/test/detail/${foundRole.role_id}`,
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
      document.title = `Aguna Edu | Detail Tes - ${capitalizeFirstLetter(
        test.role_name
      )}`;
    }
  }, [test]);

  if (!test || !classData) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        LOADING .......
      </div>
    );
  }

  return (
    <>
      <HeaderCourse
        goto={`/course/${test.role_name}`.toLowerCase()}
        buttonBack="Kembali"
        role={`Test Dasar ${capitalizeFirstLetter(test.role_name)}`}
        desc="Aguna Edu menghadirkan beberapa test dasar yang dapat kalian pelajari secara gratis!"
        imgRole={ImgTes}
      />
      <section className="px-10 sm:px-20 md:px-40 py-[80px]">
        <div className="flex flex-col gap-2 mb-[45px] md:w-[60%]">
          <h1 className="text-5xl text-textPrimary font-semibold">
            {classData.testName}
          </h1>
          <span className="text-textTertiary text-xl mt-3">
            {classData.testDescription}
          </span>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-5 ">
            <div className="grid gap-y-5 pr-10">
              <h1 className="text-2xl text-textPrimary font-semibold">
                Tentang Tes
              </h1>
              <span className="text-textTertiary">
                {`Tes ini berisikan soalan teori dan soalan praktek. Mentee
                diharuskan untuk mencapai skor 80 agar dapat lulus tes ini dan
                dapat membuka kelas lanjutan di role ${test.role_name.toLowerCase()}`}
              </span>
            </div>
            <div>
              <h1 className="text-2xl text-textPrimary font-semibold">
                Skill yang diuji
              </h1>
              <div className="flex flex-wrap gap-2">
                {classData.skills.map((skill, index) => (
                  <p
                    key={index}
                    className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg my-2 shadow-md gap-2"
                  >
                    {skill.name}
                  </p>
                ))}
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
                      {classData.time < 60
                        ? `${classData.testDuration} Menit`
                        : `${Math.floor(classData.testDuration / 60)} Jam ${
                            classData.testDuration % 60 !== 0
                              ? (classData.testDuration % 60) + " Menit"
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
                      {classData.totalQuestion} Soal
                    </span>
                  </h3>
                </div>
              </div>
              <button
                className="bg-primaryBlue text-white rounded-lg px-5 w-[269px] h-[36px] items-center justify-center font-semibold"
                onClick={() => navigate(`/course/${test.role_name}/tes/dasar`)}
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
