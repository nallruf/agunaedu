import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImgRegister from "../../assets/img/illustration/register.png";
import ButtonComponent from "../../components/auth/button";
import InfoComponent from "../../components/auth/info";
import TextInputComponent from "../../components/auth/textinput";
import TitleComponent from "../../components/auth/title";

const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aguna Edu | Register";
  }, []);

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex w-full h-full">
        <div className="hidden bg-[#1470EF] md:flex items-center justify-center w-1/2 relative overflow-hidden">
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
            onclick={() => navigate(-1)}
            back="Kembali"
            title="Pendaftaran Akun"
            desc="Yuk, buat akun mu terlebih dahulu"
          />
          <form onSubmit={handleSubmit}>
            <div className="mb-5 mt-10">
              <TextInputComponent
                htmlfor="namaLengkap"
                label="Nama Lengkap"
                type="text"
                placeholder="Masukan Nama Lengkap"
                id="namaLengkap"
                name="namaLengkap"
              />
            </div>
            <div className="mb-5">
              <TextInputComponent
                htmlfor="email"
                label="Emal"
                type="email"
                placeholder="Masukan Email"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-5">
              <TextInputComponent
                htmlfor="namaPengguna"
                label="Nama Pengguna"
                type="text"
                placeholder="Masukan Nama Pengguna"
                id="namaPengguna"
                name="namaPengguna"
              />
            </div>
            <div className="mb-5">
              <TextInputComponent
                htmlfor="noTelp"
                label="No Telp"
                type="number"
                placeholder="+62 812-3456-7890"
                id="noTelp"
                name="noTelp"
              />
            </div>
            <div className="mb-5">
              <TextInputComponent
                htmlFor="univ"
                label="Universitas"
                type="text"
                placeholder="Masukkan Universitas"
                name="univ"
                id="univ"
                searchInput={true}
              />
            </div>
            {/* Kurang ini untuk multi selection input*/}
            <div className="mb-5">
              <TextInputComponent
                htmlFor="skill"
                label="Ketertarikan Skill"
                type="text"
                placeholder="Masukan Ketertarikan Skill"
                name="skill"
                id="skill"
                searchInput={true}
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
