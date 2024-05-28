import React, { useEffect } from "react";
import HeaderCourse from "../../../components/course/header/headercourse";
import ImgRole from "../../../assets/img/illustration/role.png";
import HeroCourse from "../../../components/course/hero/herocourse";
import ClassCourse from "../../../components/course/class/classcourse";
import { useParams } from "react-router-dom";
import { dataRole } from "../../../dummydata/course/datarole";
import NotFoundPage from "../../notfound";
import {
  dataHacker,
  dataHipster,
  dataHustler,
} from "../../../dummydata/course/datacourse";

const RolePage = () => {
  const { role } = useParams();
  const event = dataRole.find((event) => event.role.toLowerCase() === role);

  if (!event) {
    return (
      <>
        <NotFoundPage />
      </>
    );
  }

  useEffect(() => {
    document.title = `Aguna Edu | Course ${event.role}`;
  }, []);

  let classData;
  if (event.role.toLowerCase() === "hacker") {
    classData = dataHacker;
  } else if (event.role.toLowerCase() === "hustler") {
    classData = dataHustler;
  } else if (event.role.toLowerCase() === "hipster") {
    classData = dataHipster;
  }
  return (
    <>
      <HeaderCourse
        goto="/"
        buttonBack="Kembali"
        role={`Role ${event.role}`}
        desc={event.desc}
        skills={event.skill}
        imgRole={ImgRole}
      />
      <HeroCourse
        title="Ikut Tes Dulu, Yuk!"
        desc={`Ikuti tes dasar dulu yuk sebelum membuka kelas ${event.role}! Eitss, jangan khawatir, cuma yang simple simple aja kok!`}
        button="Ikuti Tes"
        gonjay={`/course/${event.role}/tes`.toLowerCase()}
      />

      {classData &&
        classData.map((classItem, index) => (
          <ClassCourse
            key={index}
            kelas={classItem.kelas}
            data={classItem.data}
          />
        ))}
    </>
  );
};

export default RolePage;
