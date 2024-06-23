import React, { useEffect, useState } from "react";
import UserMaterial from "../usermaterial/usermaterial";
import { useAuth } from "../../../hooks/useauth";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const MaterialPage = () => {
  const { userCourseId } = useParams();
  const [material, setMaterial] = useState(null);
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
        setMaterial(response.data);
      } catch (error) {
        console.error("Error fetching material", error);
      }
    };

    if (userCourseId) {
      fetchMaterial();
    }
  }, [userCourseId]);

  if (!material) {
    return (
      <div className="flex justify-center h-screen items-center text-primaryBlue font-semibold">
        LOADING .......
      </div>
    );
  }

  const content = (
    <div className="p-4">
      <div className="flex flex-col gap-5">
        <div>
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}/images/${
              material.courseImageUrl
            }`}
            alt="cek"
            className="rounded-2xl h-[217px] w-full object-cover"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold text-textPrimary">
            {material.courseName}
          </p>
          <p className="text-lg text-textLabel">{material.courseDescription}</p>
        </div>
      </div>
      <div className="flex items-center text-primaryBlue font-semibold text-4xl justify-center mt-40">
        <MdKeyboardDoubleArrowLeft />
        SELAMAT MENGERJAKAN
      </div>
    </div>
  );
  return <UserMaterial content={content} />;
};

export default MaterialPage;
