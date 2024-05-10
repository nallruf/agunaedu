import React, { useEffect } from "react";
import ImgRegister from "../../assets/img/illustration/register.png";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/auth/input";
import ButtonComponent from "../../components/auth/button";
import InfoComponent from "../../components/auth/info";
import TitleComponent from "../../components/auth/title";
import InputPassComponent from "../../components/auth/pass";
import { CiSearch } from "react-icons/ci";

const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aguna Edu | Register";
  }, []);

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="flex w-full h-full">
      <div className="hidden bg-[#1470EF] md:flex items-center justify-center w-1/2">
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
            <InputComponent
              htmlfor="namaLengkap"
              label="Nama Lengkap"
              type="text"
              placeholder="Masukan Nama Lengkap"
              id="namaLengkap"
              name="namaLengkap"
            />
          </div>
          <div className="mb-5">
            <InputComponent
              htmlfor="email"
              label="Emal"
              type="email"
              placeholder="Masukan Email"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-5">
            <InputComponent
              htmlfor="namaPengguna"
              label="Nama Pengguna"
              type="text"
              placeholder="Masukan Nama Pengguna"
              id="namaPengguna"
              name="namaPengguna"
            />
          </div>
          <div className="mb-5">
            <InputComponent
              htmlfor="noTelp"
              label="No Telp"
              type="number"
              placeholder="+62 812-3456-7890"
              id="noTelp"
              name="noTelp"
            />
          </div>
          <div className="mb-5">
            <div className="relative">
              <label
                htmlFor="univ"
                className="text-[14px] font-medium text-[#334054]"
              >
                Universitas
              </label>
              <div className="absolute inset-y-0 left-0 top-8 flex items-center pl-3">
                <CiSearch className="h-6 w-6 stroke-[#D0D5DD]" />
              </div>
              <input
                type="text"
                placeholder="Masukan Universitas"
                name="univ"
                id="univ"
                className="w-full pl-10 border-2 border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-[#1470EF] shadow-sm"
              />
            </div>
          </div>
          {/* Kurang ini untuk multi selection input*/}
          <div className="mb-5">
            <div className="relative">
              <label
                htmlFor="skill"
                className="text-[14px] font-medium text-[#334054]"
              >
                Ketertarikan Skill
              </label>
              <div className="absolute inset-y-0 left-0 top-8 flex items-center pl-3">
                <CiSearch className="h-6 w-6 stroke-[#D0D5DD]" />
              </div>
              <input
                type="search"
                placeholder="Masukan Ketertarikan Skill"
                name="skill"
                id="skill"
                className="w-full pl-10 border-2 border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] mt-[6px] focus:outline-none focus:ring-2 focus:ring-[#1470EF] shadow-sm"
              />
            </div>
          </div>
          <div className="mb-[11px]">
            <InputPassComponent
              htmlFor="password"
              titlePass="Kata Sandi"
              placeholderPass="Masukan Kata Sandi"
              namePass="password"
              idPass="password"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="ingat" className="ml-2 text-[12px] text-[#334054]">
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
  );
};

export default RegisterPage;
