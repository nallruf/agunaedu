import React, { useEffect, useState } from "react";
import User from "./user/user";
import CardCourse from "../../components/user-menu/cardcourse/cardcourse";
import CardFeedback from "../../components/user-menu/cardcourse/cardfeedback";
import { useAuth } from "../../hooks/useauth";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import ImgCode from "../../assets/img/illustration/code.png";

const CourseUserPage = () => {
  const { user } = useAuth();
  const [progressCourses, setProgressCourses] = useState([]);
  const [finishedCourses, setFinishedCourses] = useState([]);

  useEffect(() => {
    document.title = "Aguna Edu | Course User";
  }, []);

  useEffect(() => {
    const fetchProgressCourses = async () => {
      try {
        const response = await axios.get("/api/v1/user/progrescourse", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setProgressCourses(response.data);
      } catch (error) {
        console.error("Error fetching progress courses", error);
      }
    };

    const fetchFinishedCourses = async () => {
      try {
        const response = await axios.get("/api/v1/user/finishcourse", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setFinishedCourses(response.data);
      } catch (error) {
        console.error("Error fetching finished courses", error);
      }
    };

    if (user) {
      fetchProgressCourses();
      fetchFinishedCourses();
    }
  }, [user]);

  const noCourses =
    progressCourses.length === 0 && finishedCourses.length === 0;

  const content = (
    <>
      {noCourses ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <BiSearchAlt className="text-secondaryBlue" size={60} />
          <h1 className="text-xl font-semibold mt-4">
            Kamu Belum Mengikuti Course Apapun :(
          </h1>
        </div>
      ) : (
        <div className="flex flex-col gap-[35px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[6px]">
              <h1 className="text-2xl text-textPrimary font-semibold">
                Sedang Berlangsung
              </h1>
              <h3 className="text-textTertiary text-base">
                Course yang sedang berlangsung
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-5">
              {progressCourses.length > 0 ? (
                progressCourses.map((course, index) => (
                  <CardCourse
                    key={index}
                    title={course.course[0]?.courseName}
                    img={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                      course.course[0]?.courseImageUrl
                    }`}
                    tags={[course.course[0]?.method]}
                    icons={[<IoVideocamOutline />]}
                    imgProfile={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                      course.course[0]?.mentor?.mentorImage
                    }`}
                    nameMentor={course.course[0]?.mentor?.mentorName}
                  />
                ))
              ) : (
                <p className="text-textPrimary">
                  Tidak ada course yang sedang berlangsung
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[6px]">
              <h1 className="text-2xl text-textPrimary font-semibold">
                Selesai
              </h1>
              <h3 className="text-textTertiary text-base">
                Course yang sudah selesai
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-5">
              {finishedCourses.length > 0 ? (
                finishedCourses.map((course, index) => (
                  <CardFeedback
                    key={index}
                    imgCode={ImgCode}
                    title={course.course[0]?.courseName}
                    desc={course.course[0]?.description}
                    tags={[course.course[0]?.courseLevel]}
                  />
                ))
              ) : (
                <p className="text-textPrimary">
                  Tidak ada course yang sudah selesai
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );

  return <User content={content} />;
};

export default CourseUserPage;
