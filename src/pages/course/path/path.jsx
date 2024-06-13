import React, { useEffect, useState } from "react";
import HeaderCourse from "../../../components/course/headercourse";
import ImgRole from "../../../assets/img/illustration/path-web.png";
import SkillPath from "../../../components/course/skill/skillpath";
import TestiCourse from "../../../components/course/testi/testicourse";
import HeroSection2 from "../../../components/course/hero2/hero2";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useauth";
import axios from "axios";
import ToolsPath from "../../../components/course/tools/toolspath";

const PathPage = () => {
  const { role, path } = useParams();
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [detailPath, setDetailPath] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rolesData = await axios.get(`/api/v1/public/landing/role`);
        const foundRole = rolesData.data.find(
          (item) => item.role_name.toLowerCase() === role.toLowerCase()
        );
        const pathFirstWord = path.split("-")[0].toLowerCase();
        const foundPath = foundRole.paths.find(
          (item) =>
            item.name.toLowerCase() !== "pemula" &&
            item.name.split(" ")[0].toLowerCase() === pathFirstWord
        );

        setData(foundRole);
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

          const skillNames = responsePath.data.map(
            (item) => item.pathFocusName
          );
          setSkills(skillNames);
        } else {
          console.error("Error No Path");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [role, path, user]);

  const capitalizeFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  useEffect(() => {
    if (data && detailPath) {
      document.title = `Aguna Edu | ${capitalizeFirstLetter(
        data.role_name
      )} - ${capitalizeFirstLetter(detailPath.name)}`;
    }
  }, [data, detailPath]);

  if (!data || !detailPath) {
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
          goto={`/course/${data.role_name.toLowerCase()}`}
          buttonBack={`${capitalizeFirstLetter(data.role_name)}`}
          role={detailPath.name}
          desc={detailPath.description}
          skills={skills}
          imgRole={ImgRole}
        />
        <ToolsPath />
        <SkillPath pathId={detailPath.id} />
        <TestiCourse />
        <HeroSection2 />
      </div>
    </>
  );
};

export default PathPage;
