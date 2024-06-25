import Admin from "./admin/admin";
import React, { useEffect, useRef, useState } from "react";
import TextInputComponent from "../../components/auth/textinput";
import ImgAvatar from "../../assets/img/team/avatar.jpg";
import useProfile from "../../hooks/useProfile";
import { useAuth } from "../../hooks/useauth";
import axios from "axios";
import { toast } from "react-hot-toast";

const SettingDashboard = () => {
  const imagePicker = useRef();
  const [previewImage, setPreviewImage] = useState(null);
  const { user } = useAuth();
  const { profile } = useProfile(user);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    universities: "",
    imageUrl: null,
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        username: profile.username || "",
        email: profile.email || "",
        phoneNumber: profile.phoneNumber || "",
        universities: profile.universities || "",
        imageUrl: null,
      });
    }
  }, [profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFormData((prevFormData) => ({
        ...prevFormData,
        imageUrl: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProfile = new FormData();
    updatedProfile.append("name", formData.name);
    updatedProfile.append("username", formData.username);
    updatedProfile.append("email", formData.email);
    updatedProfile.append("phoneNumber", formData.phoneNumber);
    updatedProfile.append("universities", formData.universities);
    if (formData.imageUrl) {
      updatedProfile.append("image", formData.imageUrl);
    }

    try {
      await axios.post("/api/v1/user/profile/update", updatedProfile, {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Profile Updated Successfully.");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error updating profile", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  useEffect(() => {
    document.title = "Aguna Edu | Setting Admin";
  }, []);

  const content = (
    <>
      <div className="flex mx-8 md:mx-10 my-[35px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl text-textPrimary font-semibold">
            Pengaturan
          </h1>
          <form
            onSubmit={handleSubmit}
            className="border border-borderPrimary px-8 py-6 rounded-2xl w-[600px]"
          >
            <div className="flex flex-col gap-4 pb-5">
              <h2 className="text-lg text-textPrimary font-semibold">
                Edit Akun
              </h2>
              <div className="flex items-center gap-4">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleImageChange}
                    ref={imagePicker}
                    hidden
                  />
                  <div onClick={() => imagePicker.current.click()}>
                    <img
                      src={
                        previewImage ||
                        (profile?.imageUrl
                          ? `${import.meta.env.VITE_PUBLIC_URL}/images/${
                              profile.imageUrl
                            }`
                          : ImgAvatar)
                      }
                      alt="img-profile"
                      draggable="false"
                      className="w-[60px] rounded-full cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-textPrimary">
                    {formData.username || "User Aguna"}
                  </h2>
                  <h4 className="text-base text-textTertiary">
                    {formData.email || "dummy@gmail.com"}
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <TextInputComponent
                  htmlFor="name"
                  label="Nama"
                  type="text"
                  placeholder="Masukan Nama Terbaru"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextInputComponent
                  htmlFor="username"
                  label="Nama Pengguna"
                  type="text"
                  placeholder="Masukan Username Terbaru"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <div className="flex flex-col mb-[11px]">
                  <label
                    htmlFor="email"
                    className="text-[14px] font-medium text-textLabel"
                  >
                    Email
                  </label>
                  <div
                    id="email"
                    className="w-full border-2 border-borderPrimary bg-gray-100 rounded-[8px] px-[14px] py-[10px] mt-[6px] shadow-sm"
                  >
                    {formData.email}
                  </div>
                </div>
                <TextInputComponent
                  htmlFor="notelp"
                  label="No Telp"
                  type="text"
                  placeholder="Masukan No Telp Terbaru"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                <TextInputComponent
                  htmlFor="univ"
                  label="Universitas"
                  type="text"
                  placeholder="Masukan Universitas Terbaru"
                  name="universities"
                  value={formData.universities}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primaryBlue h-[44px] text-white rounded-lg px-6 py-2 font-semibold"
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );

  return <Admin content={content} />;
};

export default SettingDashboard;
