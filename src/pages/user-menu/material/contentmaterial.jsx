import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserMaterial from "../usermaterial/usermaterial";
import MentorImg from "../../../assets/img/team/avatar.jpg";
import ToolCard from "../../../components/user-menu/material/toolcardmaterial";
import { FiDownload } from "react-icons/fi";
import { useAuth } from "../../../hooks/useauth";
import { toast } from "react-hot-toast";

const ContentMaterial = () => {
  const { userCourseId, materialId } = useParams();
  const [material, setMaterial] = useState(null);
  const [tools, setTools] = useState([]);
  const [mentor, setMentor] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const response = await axios.get(
          `/api/v1/user/course/${userCourseId}`,
          {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          }
        );
        const courseData = response.data;

        setTools(courseData.tools);
        setMentor({
          name: courseData.mentorName,
          job: courseData.mentorJob,
          contact: courseData.contact,
        });

        const currentMaterial = courseData.materials.find(
          (m) => m.materialId.toString() === materialId
        );
        setMaterial(currentMaterial);
      } catch (error) {
        console.error("Error fetching material", error);
      }
    };

    if (userCourseId && materialId) {
      fetchMaterial();
    }
  }, [userCourseId, materialId]);

  const SaveProgress = async () => {
    try {
      const response = await axios.post(
        `/api/v1/user/setprogress`,
        {
          userCourseId: userCourseId,
          materialId: materialId,
        },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  if (!material) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        LOADING .......
      </div>
    );
  }

  const content = (
    <>
      <div className="w-full h-[300px] md:h-[503px] flex justify-center items-center">
        <iframe
          // src={material.materialVideo}
          src="https://www.youtube.com/embed/sqjUH-FIm4M?si=dSaSb8WUg0pSkAbH"
          title="YouTube video player"
          // frameBorder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
      <div className="mt-10 px-4 md:px-0">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{material.materialName}</h1>
            <span className="text-textLabel text-base font-normal">
              {material.materialMateri}
            </span>
          </div>
          <button
            className="border-[#85CAFF] border-2 bg-[#F9FAFB] text-primaryBlue rounded-lg px-10 shadow-md py-2 font-semibold"
            onClick={SaveProgress}
          >
            Lanjutkan
          </button>
        </div>
        <div className="mt-6 flex gap-3 justify-between">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">Modul Pembelajaran</h2>
              <div className="rounded-xl px-4 py-2 w-fit bg-primaryBlue text-white font-semibold">
                <div className="flex items-center">
                  <FiDownload />
                  <button className="px-2 py-1 text-sm">
                    Unduh Modul (Not Yet)
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-black text-base font-semibold">
                Tools Yang Digunakan
              </span>
              <div className="w-fit flex flex-wrap gap-2 md:gap-4">
                {tools.map((tool, index) => (
                  <div key={index}>
                    <ToolCard
                      img={`${import.meta.env.VITE_PUBLIC_URL}/images/${
                        tool.imageUrl
                      }`}
                      nameTool={tool.name}
                      role={tool.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-textPrimary text-xl font-semibold">
              Ingin Mentoring Private?
            </span>
            <div className="border-2 rounded-xl p-4 md:p-5 flex flex-col items-center bg-white mt-3 w-full md:w-fit">
              <div className="py-2 flex items-start justify-start flex-col">
                <div className="bg-primaryBlue p-4 rounded-xl">
                  <img
                    src={MentorImg}
                    alt="mentor"
                    draggable="false"
                    className="w-20 md:w-32"
                  />
                </div>
                <div className="flex flex-col items-start w-full justify-center py-2">
                  <span className="text-lg md:text-xl font-bold">
                    {mentor.name}
                  </span>
                  <div className="border-2 rounded-xl px-4 py-2 bg-primaryBlue text-white mt-2">
                    <button
                      className="text-sm md:text-base"
                      onClick={() => {
                        window.open(
                          `https://wa.me/${mentor.contact}`,
                          "_blank"
                        );
                      }}
                    >
                      Chat Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return <UserMaterial content={content} />;
};

export default ContentMaterial;
