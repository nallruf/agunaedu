import { useEffect, useState } from "react";
import axios from "axios";

const useProfile = (user) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/v1/user/profile", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setProfile(response.data[0]);
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  return { profile };
};

export default useProfile;
