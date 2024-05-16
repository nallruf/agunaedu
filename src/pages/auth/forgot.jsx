import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImgForgot from "../../assets/img/illustration/forgot.png";
import InfoComponent from "../../components/auth/info";
import ButtonComponent from "../../components/auth/button";
import TitleComponent from "../../components/auth/title";
import TextInputComponent from "../../components/auth/textinput";
import { toast } from "react-hot-toast";

const ForgotPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aguna Edu | Forgot Password";
  }, []);

  const handleSubmit = () => {
    toast.success("Success - Check Email!");
    navigate("/auth/reset");
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden bg-primaryBlue md:flex justify-center items-center w-1/2 relative overflow-hidden">
          <div className="absolute top-0 left-0 transform translate-x-[-70%] translate-y-[-70%] w-[420px] h-[490px] rotate-[32deg] border-4 border-white border-opacity-10 rounded-full" />
          <div className="w-2/3">
            <InfoComponent
              title="Lupa Kata Sandi"
              desc="Atur ulang kata sandimu sekarang melalui email terdaftar"
              img={ImgForgot}
            />
          </div>
          <div className="absolute bottom-0 left-2/3 transform -translate-x-[15%] translate-y-[80%] w-[569px] h-[560px] border-4 border-white rounded-full" />
        </div>
        <div className="w-full p-8 sm:p-32 md:w-3/5 md:p-36">
          <TitleComponent
            onclick={() => navigate(-1)}
            back="Kembali"
            title="Lupa Kata Sandi"
            desc="Pastikan email mu terdaftar ke akun Google!"
          />
          <form onSubmit={handleSubmit}>
            <div className="mb-6 mt-10">
              <TextInputComponent
                htmlFor="email"
                label="Email"
                type="email"
                placeholder="Masukan Email yang terdaftar"
                name="email"
                id="email"
              />
            </div>
            <ButtonComponent nameButton="Kirim Link Reset Ulang" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPage;
