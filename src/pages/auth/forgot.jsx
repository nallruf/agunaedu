import React, { useEffect } from "react";
import ImgForgot from "../../assets/img/illustration/forgot.png";
import InfoComponent from "../../components/auth/info";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/auth/input";
import ButtonComponent from "../../components/auth/button";
import TitleComponent from "../../components/auth/title";

const ForgotPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aguna Edu | Forgot Password";
  }, []);

  const handleSubmit = () => {
    alert("Liaten Email mu");
    navigate("/auth/reset");
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden bg-[#1470EF] md:flex justify-center items-center w-1/2">
          <div className="w-2/3">
            <InfoComponent
              title="Lupa Kata Sandi"
              desc="Atur ulang kata sandimu sekarang melalui email terdaftar"
              img={ImgForgot}
            />
          </div>
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
              <InputComponent
                htmlfor="email"
                label="Email"
                type="email"
                placeholder="Masukan Email yang terdaftar"
                id="email"
                name="email"
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
