import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SidebarMaterial from "../../../components/user-menu/material/sidebarmaterial";
import { useAuth } from "../../..//hooks/useauth";

const UserMaterial = ({ content }) => {
  const { userCourseId } = useParams();
  const [materials, setMaterials] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get(
          `/api/v1/user/course/${userCourseId}`,
          {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          }
        );
        setMaterials(response.data.materials);
      } catch (error) {
        console.error("Error fetching materials", error);
      }
    };

    if (userCourseId) {
      fetchMaterials();
    }
  }, [userCourseId, user]);

  return (
    <div className="flex">
      <SidebarMaterial materials={materials} />
      <div className="flex-1 mx-8 md:mx-10 my-[35px] transition-all duration-300 overflow-x-auto">
        {content}
      </div>
    </div>
  );
};

export default UserMaterial;
