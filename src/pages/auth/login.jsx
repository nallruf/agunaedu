import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Imglogin from "../../assets/img/illustration/login.png";
import ButtonComponent from "../../components/auth/button";
import InfoComponent from "../../components/auth/info";
import TitleComponent from "../../components/auth/title";
import TextInputComponent from "../../components/auth/textinput";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aguna Edu | Login";
  }, []);

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden bg-primaryBlue md:flex justify-center items-center w-1/2 relative overflow-hidden">
          <div className="absolute top-0 left-0 transform translate-x-[-70%] translate-y-[-70%] w-[420px] h-[490px] rotate-[32deg] border-4 border-white border-opacity-10 rounded-full" />
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
          <div className="absolute bottom-0 left-2/3 transform -translate-x-[15%] translate-y-[80%] w-[569px] h-[560px] border-4 border-white rounded-full" />
        </div>

        <div className="w-full p-8 sm:p-32 md:w-3/5 md:p-36">
          <TitleComponent
            onclick={() => navigate("/")}
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
                  className="appearance-none w-5 h-5 border cursor-pointer rounded-md border-borderTertiary checked:bg-textSecondary"
                />
                <label
                  htmlFor="ingat"
                  className="ml-2 text-[12px] text-textLabel"
                >
                  Ingat Saya
                </label>
              </div>
              <a href="/auth/forgot" className="text-textSecondary text-xs">
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
    </>
  );
};

export default LoginPage;
