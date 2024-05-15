import React, { useEffect } from "react";
import HeaderCourse from "../../../components/course/header/headercourse";
import ImgRole from "../../../assets/img/illustration/role.png";

const HackerPage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Course Hacker";
  }, []);

  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default HackerPage;
