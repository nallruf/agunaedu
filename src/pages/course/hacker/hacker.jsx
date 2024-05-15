import React, { useEffect } from "react";
import HeaderCourse from "../../../components/course/header/headercourse";
import ImgRole from "../../../assets/img/illustration/role.png";
import HeroCourse from "../../../components/course/hero/herocourse";
import ClassCourse from "../../../components/course/class/classcourse";
import {
  dataHacker,
  dataMob,
  dataWeb,
} from "../../../dummydata/course/datahacker";

const HackerPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Course Hacker";
  }, []);

  return (
    <>
      <HeaderCourse
        goto="/"
        buttonBack="Kembali"
        role="Role Hacker"
        desc="Mulai belajar pemrograman yang sesuai dengan industri saat ini agar dapat berkembang menjadi seorang developer handal."
        skills={[
          "Front-End Developer",
          "Back-End Developer",
          "Full Stack Developer",
        ]}
        imgRole={ImgRole}
      />
      <HeroCourse
        title="Ikut Tes Dulu, Yuk!"
        desc="Ikuti tes dasar dulu yuk sebelum membuka kelas hacker! Eitss, jangan khawatir, cuma yang simple simple aja kok!"
        button="Ikuti Tes"
      />

      <ClassCourse kelas="Kelas Pemula" data={dataHacker} />
      <ClassCourse kelas="Web Development" data={dataWeb} />
      <ClassCourse kelas="Mobile Development" data={dataMob} />
    </>
  );
};

export default HackerPage;
