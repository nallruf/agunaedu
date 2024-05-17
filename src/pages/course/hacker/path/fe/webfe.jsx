import React, { useEffect } from "react";
import HeaderCourse from "../../../../../components/course/header/headercourse";
import ImgRole from "../../../../../assets/img/illustration/path-web.png";
const WebFePage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Web - FE";
  }, []);

  return (
    <>
      <div>
        <HeaderCourse
          goto="/course/hacker/path-web"
          buttonBack="Web Development"
          role="Front-End Web"
          desc="Mulai belajar pemrograman web development dan berkembang menjadi seorang web developer handal."
          imgRole={ImgRole}
        />
      </div>
    </>
  );
};

export default WebFePage;
