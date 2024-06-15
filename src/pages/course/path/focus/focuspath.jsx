import React, { useEffect, useState } from "react";
import HeaderCourse from "../../../../components/course/headercourse";
import ImgRole from "../../../../assets/img/illustration/path-web.png";
import MentorSection from "../../../../components/course/pathfocus/mentor";
import KelasMandiri from "../../../../components/course/pathfocus/kelasmandiri";
import { dataMentor } from "../../../../dummydata/course/datamentor";
import { useAuth } from "../../../../hooks/useauth";
import { useParams } from "react-router-dom";
import axios from "axios";

const FocusPathPage = () => {
  const { role, path, focus } = useParams();
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [courses, setCourses] = useState([]);
  const [detailPath, setDetailPath] = useState(null);
  const [focusData, setFocusData] = useState(null);
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/public/landing/role`);
        const foundRole = response.data.find(
          (item) => item.role_name.toLowerCase() === role
        );
        const pathFirstWord = path.split("-")[0].toLowerCase();
        const foundPath = foundRole.paths.find(
          (item) =>
            item.name.toLowerCase() !== "pemula" &&
            item.name.split(" ")[0].toLowerCase() === pathFirstWord
        );

        setData(foundRole);
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

        setFocusData(foundFocus);

        const responseFocus = await axios.get(
          `/api/v1/auth/path/focus/${foundFocus.pathFocusId}`,
          {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          }
        );

        setCourses(responseFocus.data);

        const responseMentors = await axios.get(
          `/api/v1/auth/path/focus/mentor/${foundFocus.pathFocusId}`,
          {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          }
        );

        setMentors(responseMentors.data);
      } catch (err) {
        console.error("Path Focus not found");
      }
    };

    fetchData();
  }, [role, path, focus, user]);

  const capitalizeFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  useEffect(() => {
    if (focusData && detailPath && data) {
      document.title = `Aguna Edu | ${capitalizeFirstLetter(
        detailPath.name
      )} - ${capitalizeFirstLetter(focusData.pathFocusName)}`;
    }
  }, [focusData, detailPath, data]);

  if (!focusData || !detailPath || !data) {
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
          goto={`/course/${data.role_name.toLowerCase()}/${detailPath.name
            .split(" ")[0]
            .toLowerCase()}`}
          buttonBack={detailPath.name}
          role={focusData.pathFocusName}
          desc={`Mulai belajar pemrograman ${detailPath.name.toLowerCase()} dan berkembang menjadi seorang developer handal.`}
          imgRole={ImgRole}
        />
        <div className="px-10 sm:px-20 md:px-40 py-[80px]">
          <KelasMandiri
            courses={courses.map((course) => ({
              ...course,
              role: data.role_name.toLowerCase(),
              path: detailPath.name.split(" ")[0].toLowerCase(),
              focus: focusData.pathFocusName.toLowerCase().replace(/\s+/g, "-"),
            }))}
          />
          <div className="flex flex-col mt-20">
            <div>
              <h1 className="text-5xl text-textPrimary font-semibold">
                Belajar Bersama Para Profesional!
              </h1>
              <p className="text-textTertiary mt-3">
                Aguna Edu menghadirkan mentor profesional yang sudah ahli di
                bidangnya!
              </p>
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:gap-10 pb-24 mt-[51px]">
              {mentors.map((item) => (
                <MentorSection
                  key={item.mentorId}
                  gambar={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                    item.mentorImageUrl
                  }`}
                  name={item.mentorName}
                  role={item.mentorJob}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusPathPage;
