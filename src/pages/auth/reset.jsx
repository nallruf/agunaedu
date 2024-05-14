import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImgForgot from "../../assets/img/illustration/forgot.png";
import InfoComponent from "../../components/auth/info";
import ButtonComponent from "../../components/auth/button";
import TitleComponent from "../../components/auth/title";
import TextInputComponent from "../../components/auth/textinput";

const ResetPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aguna Edu | Reset Password";
  }, []);

  const handleSubmit = () => {
    alert("Berhasil diganti");
    navigate("/auth/login");
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden bg-primaryBlue md:flex justify-center items-center w-1/2 relative overflow-hidden">
          <div className="absolute top-0 left-0 transform translate-x-[-70%] translate-y-[-70%] w-[420px] h-[490px] rotate-[32deg] border-4 border-white border-opacity-10 rounded-full" />
          <div className="w-2/3">
            <InfoComponent
              title="Atur Kata Sandi Yang Baru"
              desc="Atur ulang kata sandi yang baru untuk   melindungi akunmu!"
              img={ImgForgot}
            />
          </div>
          <div className="absolute bottom-0 left-2/3 transform -translate-x-[15%] translate-y-[80%] w-[569px] h-[560px] border-4 border-white rounded-full" />
        </div>
        <div className="w-full p-8 sm:p-32 md:w-3/5 md:p-36">
          <TitleComponent
            onclick={() => navigate("/auth/login")}
            back="Kembali"
            title="Kata Sandi Baru"
            desc="Kata sandi harus berbeda dengan yang sebelumnya!"
          />
          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <TextInputComponent
                htmlFor="newPass"
                label="Kata Sandi Baru"
                type="password"
                placeholder="Masukan Kata Sandi Baru"
                name="newPass"
                id="newPass"
                passwordInput={true}
              />
              <TextInputComponent
                htmlFor="newPassConfirm"
                label="Konfirmasi Kata Sandi Baru"
                type="password"
                placeholder="Masukan Konfirmasi Kata Sandi Baru"
                name="newPassConfirm"
                id="newPassConfirm"
                passwordInput={true}
              />
            </div>
            <ButtonComponent nameButton="Kirim Link Reset Ulang" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPage;
