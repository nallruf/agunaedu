import React, { useEffect, useState } from "react";
import HeaderCourse from "../../components/course/headercourse";
import ImgRole from "../../assets/img/illustration/role.png";
import HeroCourse from "../../components/course/herocourse";
import ClassCourse from "../../components/course/classcourse";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/useauth";
import { IoBookOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";

const RolePage = () => {
  const { role } = useParams();
  const [course, setCourse] = useState(null);
  const [classData, setClassData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchRoleData = async () => {
      try {
        const response = await axios.get(`/api/v1/public/landing/role`);
        const foundEvent = response.data.find(
          (item) => item.role_name.toLowerCase() === role
        );

        if (foundEvent) {
          setCourse(foundEvent);

          const roleResponse = await axios.get(
            `/api/v1/auth/role/${foundEvent.role_id}`,
            {
              headers: {
                Authorization: `Bearer ${user}`,
              },
            }
          );

          setClassData(roleResponse.data);
        } else {
          console.error("Error No Course");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchRoleData();
  }, [role, user]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const formatPathName = (name) => {
    return name.split(" ")[0].toLowerCase();
  };

  useEffect(() => {
    if (course) {
      document.title = `Aguna Edu | Course ${capitalizeFirstLetter(
        course.role_name
      )}`;
    }
  }, [course]);

  if (!course) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        Loading...
      </div>
    );
  }

  const classDataWithFocus = [...classData];
  const pemulaIndex = classDataWithFocus.findIndex((item) =>
    item.pathName.toLowerCase().includes("pemula")
  );

  if (pemulaIndex !== -1) {
    const pemulaPath = classDataWithFocus.splice(pemulaIndex, 1)[0];
    classDataWithFocus.unshift(pemulaPath);
  }

  return (
    <>
      <HeaderCourse
        goto="/"
        buttonBack="Beranda"
        role={`Role  ${capitalizeFirstLetter(course.role_name)}`}
        desc={`${course.role_description}`}
        skills={[`${capitalizeFirstLetter(course.role_name)}`]}
        imgRole={ImgRole}
      />
      <HeroCourse
        title="Ikut Tes Dulu, Yuk!"
        desc={`Ikuti tes dasar dulu yuk sebelum membuka kelas ${course.role_name.toLowerCase()}! Eitss, jangan khawatir, cuma yang simple simple aja kok!`}
        button="Ikuti Tes"
        gonjay={`/course/${course.role_name}/tes`.toLowerCase()}
      />

      {classDataWithFocus.map((classItem) => (
        <ClassCourse
          key={classItem.pathId}
          kelas={classItem.pathName}
          data={classItem.pathFocus.map((focus) => ({
            pathFocusId: focus.pathFocusId,
            titlecard: focus.pathFocusName,
            desccard: focus.pathFocusDescription,
            img: `${import.meta.env.VITE_PUBLIC_URL}/images/${
              focus.pathFocusImageUrl
            }`,
            tes: [classItem.pathName],
            icons: [<IoBookOutline />],
            isLocked: classItem.lock,
            icon2: <GiBlackBook />,
            level: `${focus.totalCourse} Course`,
            link:
              classItem.pathName.toLowerCase().includes("pemula") ||
              classItem.pathName.toLowerCase() ===
                course.role_name.toLowerCase()
                ? `/course/${role}/pemula`
                : `/course/${role}/${formatPathName(classItem.pathName)}`,
          }))}
        />
      ))}
    </>
  );
};

export default RolePage;
