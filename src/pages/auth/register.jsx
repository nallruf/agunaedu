import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImgRegister from "../../assets/img/illustration/register.png";
import ButtonComponent from "../../components/auth/button";
import InfoComponent from "../../components/auth/info";
import TextInputComponent from "../../components/auth/textinput";
import TitleComponent from "../../components/auth/title";
import { toast } from "react-hot-toast";
import MultiSelectInputComponent from "../../components/auth/multipleinput";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    skills: [],
    universities: "",
    phoneNumber: "",
  });

  useEffect(() => {
    document.title = "Aguna Edu | Register";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (selectedSkills) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: selectedSkills,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.username ||
      !formData.phoneNumber ||
      !formData.universities ||
      !formData.skills.length ||
      !formData.password
    ) {
      toast.error("Mohon lengkapi semua kolom yang dibutuhkan.");
      return;
    }

    try {
      const response = await axios.post("/api/v1/public/register", formData);
      if (response.status === 201) {
        toast.success(response.data.message);
        navigate("/auth/login");
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.error || err.response.data.message);
      } else {
        toast.error("An error occurred during registration. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="flex w-full h-full">
        <div className="hidden bg-primaryBlue md:flex items-center justify-center w-1/2 relative overflow-hidden">
          <div className="absolute top-0 left-0 transform translate-x-[-70%] translate-y-[-70%] w-[420px] h-[490px] rotate-[32deg] border-4 border-white border-opacity-10 rounded-full" />
          <div className="w-2/3">
            <InfoComponent
              title="Bergabung bersama kami!"
              desc="Daftar dan dapatkan bimbingan dengan para mentor berkualitas!"
              img={ImgRegister}
              starCount={5}
              quotes="“Aku tanpamu butiran kaldu.”"
              text="Filled a Huge Cap"
              people="- Jrobyutk"
            />
          </div>
          <div className="absolute bottom-0 left-2/3 transform -translate-x-[15%] translate-y-[80%] w-[569px] h-[560px] border-4 border-white rounded-full" />
        </div>
        <div className="w-full p-8 sm:p-20 md:w-3/5">
          <TitleComponent
            backTo="/auth/login"
            back="Kembali"
            title="Pendaftaran Akun"
            desc="Yuk, buat akun mu terlebih dahulu"
          />
          <form onSubmit={handleSubmit}>
            <div className="mb-5 mt-10">
              <TextInputComponent
                htmlfor="name"
                label="Nama Lengkap"
                type="text"
                placeholder="Masukan Nama Lengkap"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <TextInputComponent
                htmlfor="email"
                label="Email"
                type="email"
                placeholder="Masukan Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <TextInputComponent
                htmlfor="username"
                label="Nama Pengguna"
                type="text"
                placeholder="Masukan Nama Pengguna"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <TextInputComponent
                htmlfor="phoneNumber"
                label="No Telp"
                type="text"
                placeholder="+62 812-3456-7890"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <TextInputComponent
                htmlFor="universities"
                label="Universitas"
                type="text"
                placeholder="Masukkan Universitas"
                name="universities"
                id="universities"
                searchInput={true}
                value={formData.universities}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <MultiSelectInputComponent
                htmlFor="skills"
                label="Ketertarikan Skill"
                placeholder="Masukan Ketertarikan Skill"
                name="skills"
                id="skills"
                value={formData.skills}
                onChange={handleSkillChange}
              />
            </div>
            <div className="mb-[11px]">
              <TextInputComponent
                htmlFor="password"
                label="Password"
                type="password"
                placeholder="Masukan Kata Sandi"
                name="password"
                id="password"
                passwordInput={true}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="ingat"
                className="ml-2 text-[12px] text-[#334054]"
              >
                *kata sandi min 8 karakter
              </label>
            </div>
            <ButtonComponent
              nameButton="Daftar Akun"
              confirm="Sudah punya akun?"
              direct="Masuk disini"
              onclick={() => navigate("/auth/login")}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
