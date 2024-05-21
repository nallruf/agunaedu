import React, { useEffect } from "react";
import HeaderCourse from "../../../../../components/course/header/headercourse";
import ImgRole from "../../../../../assets/img/illustration/path-web.png";
import MentorSection from "../../../../../components/course/fe/mentor";
import KelasMandiri from "../../../../../components/course/fe/kelasmandiri";
import { dataMentor } from "../../../../../dummydata/course/datamentor";
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
        <div className="px-10 sm:px-20 md:px-40 py-[80px]">
          <KelasMandiri />
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
              {dataMentor.map((item) => (
                <MentorSection key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebFePage;
