import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderCourse from "../../../../../components/course/headercourse";
import { useParams, useNavigate } from "react-router-dom";
import ImgCourse from "../../../../../assets/img/illustration/course.png";
import { FiBook } from "react-icons/fi";
import MentorKelas from "../../../../../components/course/pathfocus/metordetail";
import { useAuth } from "../../../../../hooks/useauth";

const DetailPathPage = () => {
  const { role, path, focus, id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [data, setData] = useState(null);
  const [detailPath, setDetailPath] = useState(null);
  const [focusPath, setFocusPath] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [mentors, setMentors] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const roleResponse = await axios.get("/api/v1/public/landing/role");
        const selectedRole = roleResponse.data.find(
          (r) => r.role_name.toLowerCase() === role
        );

        if (!selectedRole) {
          console.error("Role not found");
          return;
        }

        const pathFirstWord = path.split("-")[0].toLowerCase();
        const foundPath = selectedRole.paths.find(
          (item) =>
            item.name.toLowerCase() !== "pemula" &&
            item.name.split(" ")[0].toLowerCase() === pathFirstWord
        );

        setData(selectedRole);
        if (foundPath) {
          setDetailPath(foundPath);

          const responsePath = await axios.get(
            `/api/v1/auth/path/${foundPath.id}`,
            {
              headers: {
                Authorization: `Bearer ${user}`,
              },
            }
          );
          const foundFocus = responsePath.data.find(
            (item) =>
              item.pathFocusName.toLowerCase().replace(/\s+/g, "-") === focus
          );
          setFocusPath(foundFocus);

          if (foundFocus) {
            const courseResponse = await axios.get(
              `/api/v1/auth/course/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${user}`,
                },
              }
            );

            setCourseData(courseResponse.data);

            const mentorResponse = await axios.get(
              `/api/v1/auth/course/mentor/${courseResponse.data.courseId}`,
              {
                headers: {
                  Authorization: `Bearer ${user}`,
                },
              }
            );

            setMentors(mentorResponse.data);
          } else {
            console.error("Focus and Course not found");
          }
        } else {
          console.error("Course not found");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchDetail();

    // kurang payment
    const paymentStatus = localStorage.getItem(`paymentConfirmed_${id}`);
    if (paymentStatus) {
      setPaymentConfirmed(JSON.parse(paymentStatus));
    }

    return () => {
      localStorage.removeItem(`paymentConfirmed_${id}`);
    };
  }, [role, path, focus, id, user]);

  const handleDaftarClick = () => {
    navigate(
      `/course/${role}/path-${path.toLowerCase()}/${focus.toLowerCase()}/transaction/${id}`
    );
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (focusPath && courseData) {
      document.title = `Aguna Edu | ${focusPath.pathFocusName} #${courseData.courseId}`;
    }
  }, [focus, courseData]);

  if (!mentors || !detailPath || !courseData) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        LOADING .......
      </div>
    );
  }

  return (
    <>
      <div>
        <HeaderCourse
          goto={`/course/${data.role_name.toLowerCase()}/${path.toLowerCase()}/${focus.toLowerCase()}`}
          buttonBack="Kembali"
          role="Kelas Mandiri"
          desc="Aguna Edu menghadirkan berbagai kelas mentoring yang bisa kamu ikuti!"
          imgRole={ImgCourse}
        />
        <section className="px-10 sm:px-20 md:px-40 py-[80px]">
          <div className="flex flex-col gap-2 mb-[45px] md:w-[60%]">
            <h1 className="text-5xl text-textPrimary font-semibold">
              {courseData.courseName}
            </h1>
            <span className="text-textTertiary text-xl mt-3">
              {`Kelas Mandiri untuk meningkatkan kemampuan dibidang ${courseData.courseName.toLowerCase()}! Segera bergabung!`}
            </span>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-5 pr-10">
              <div className="grid gap-y-5">
                <h1 className="text-2xl text-textPrimary font-semibold">
                  Tentang Kelas
                </h1>
                <span className="text-textTertiary">
                  {/* tunggu di perbaiki uutuk desc  */}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, placeat? Laborum, asperiores optio, dolores quas
                  labore eaque possimus distinctio nihil inventore id esse,
                  iusto veniam iste eum quidem? Suscipit, sint.
                </span>
              </div>
              <div>
                <h1 className="text-2xl text-textPrimary font-semibold">
                  Skill yang dipelajari
                </h1>
                <div className="flex gap-2">
                  {courseData.skills &&
                    courseData.skills.map((skill, index) => (
                      <p
                        key={index}
                        className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg my-2 shadow-md gap-2"
                      >
                        {skill.name}
                      </p>
                    ))}
                </div>
              </div>

              <div className="text-2xl text-textPrimary font-semibold">
                Metode Pembelajaran
                <div>
                  <p className="border-[1.5px] border-borderPrimary text-textLabel text-xs font-medium inline-flex items-center px-3 py-[4px] rounded-lg shadow-md">
                    {courseData.method}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end items-center mt-10 md:mt-0">
              <div className=" flex flex-col border-2 gap-5 md:w-[333px] p-4 sm:p-8 rounded-xl">
                <span className="text-textPrimary text-2xl font-semibold">
                  Detail Kelas
                </span>
                <hr />
                <span className="text-textTertiary font-semibold">
                  Jumlah Materi
                </span>
                <span className="flex items-center gap-2">
                  <FiBook className="text-primaryBlue" />
                  <span className="text-textTertiary">
                    {courseData.totalMaterial} Modul
                  </span>
                </span>
                {!paymentConfirmed ? (
                  <>
                    <span className="text-primaryBlue text-2xl font-semibold">
                      {courseData.price}
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
                    onClick={() =>
                      navigate(
                        `/course/${role}/path-${path.toLowerCase()}/${focus.toLowerCase()}/${id}`
                      )
                    }
                  >
                    Lanjut Belajar
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
        <MentorKelas
          name={mentors.mentorName}
          gambar={`${import.meta.env.VITE_PUBLIC_URL}/images/${
            mentors.mentorImageUrl
          }`}
          about={`${capitalizeFirstLetter(mentors.mentorRole)} adalah seorang ${
            mentors.mentorJob
          } dengan pengalaman kerja selama beberapa tahun dan telah menempuh pendidikan di ${
            mentors.mentorUniversities
          }`}
          email={mentors.mentorEmail}
          nohp={mentors.mentorPhoneNumber}
          role={mentors.mentorJob}
          review={mentors.mentorPoint}
        />
      </div>
    </>
  );
};

export default DetailPathPage;
