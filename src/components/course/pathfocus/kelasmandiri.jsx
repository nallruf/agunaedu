import React from "react";
import CardRole from "../../main/alur/cardrole";
import { SiGitbook } from "react-icons/si";
import axios from "axios";

const KelasMandiri = ({ courses }) => {
  const capitalizeFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  if (!courses || courses.length === 0) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        LOADING .......
      </div>
    );
  }

  return (
    <div>
      <div className="md:grid-cols-2">
        <h1 className="text-5xl text-textPrimary font-semibold">
          Belajar Secara Mandiri!
        </h1>
        <p className="text-textTertiary mt-3">
          Aguna Edu menghadirkan berbagai kelas mandiri yang bisa kamu ikuti!
        </p>
      </div>
      <div className="grid md:grid-cols-3 mt-[50px] gap-y-10 md:gap-y-72 md:mb-80">
        {courses.map((course, index) => (
          <CardRole
            key={index}
            titlecard={course.courseName}
            img={`${import.meta.env.VITE_PUBLIC_URL}/images/${
              course.courseImageUrl
            }`}
            desccard={course.courseDescription}
            icon2={<SiGitbook />}
            level={`${capitalizeFirstLetter(course.courseLevel)} Level`}
            link={`/course/${course.role}/${course.path}/${course.focus}/${course.courseId}`}
          />
        ))}
      </div>
    </div>
  );
};

export default KelasMandiri;
