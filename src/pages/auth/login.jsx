import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Imglogin from "../../assets/img/illustration/login.png";
import ButtonComponent from "../../components/button";
import InfoComponent from "../../components/auth/info";
import TitleComponent from "../../components/auth/title";
import TextInputComponent from "../../components/textinput";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aguna Edu | Login";
  }, []);

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="flex w-full h-screen">
      <div className="hidden bg-[#1470EF] md:flex justify-center items-center w-1/2">
        <div className="w-2/3">
          <InfoComponent
            title="Selamat Datang di Aguna Edu!"
            desc="Bergabunglah bersama kami kembangkan skillmu dengan komunitas profesional Aguna Edu"
            img={Imglogin}
            starCount={5}
            quotes="“Mentor siap membantu dan memberikan pengajaran yang asik banget!”"
            text="Filled a Huge Cap"
            people="- Jrobyutk"
          />
        </div>
      </div>
      <div className="w-full p-8 sm:p-32 md:w-3/5 md:p-36">
        <TitleComponent
          onclick={() => navigate(-1)}
          back="Kembali"
          title="Masuk ke Akun mu"
          desc="Yuk, lanjutin pembelajaran bersama mentormu!"
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-6 mt-10">
            <TextInputComponent
              htmlFor="email"
              label="Email"
              type="email"
              placeholder="Masukan Email"
              name="email"
              id="email"
            />
          </div>
          <TextInputComponent
            htmlFor="password"
            label="Password"
            type="password"
            placeholder="Masukan Kata Sandi"
            name="password"
            id="password"
            passwordInput={true}
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="ingat"
                className="appearance-none w-5 h-5 border cursor-pointer rounded-md border-[#94A3B8] checked:bg-[#175CD3]"
              />
              <label
                htmlFor="ingat"
                className="ml-2 text-[12px] text-[#334054]"
              >
                Ingat Saya
              </label>
            </div>
            <a href="/auth/forgot" className="text-[#175CD3] text-xs">
              Lupa Password?
            </a>
          </div>
          <ButtonComponent
            nameButton="Masuk"
            confirm="Belum punya akun?"
            direct="Daftar disini"
            onclick={() => navigate("/auth/register")}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
