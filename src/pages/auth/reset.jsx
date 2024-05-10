import React, { useEffect } from "react";
import ImgForgot from "../../assets/img/illustration/forgot.png";
import InfoComponent from "../../components/auth/info";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/auth/input";
import ButtonComponent from "../../components/auth/button";
import TitleComponent from "../../components/auth/title";
import InputPassComponent from "../../components/auth/pass";

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
        <div className="hidden bg-[#1470EF] md:flex justify-center items-center w-1/2">
          <div className="w-2/3">
            <InfoComponent
              title="Atur Kata Sandi Yang Baru"
              desc="Atur ulang kata sandi yang baru untuk   melindungi akunmu!"
              img={ImgForgot}
            />
          </div>
        </div>
        <div className="w-full p-8 sm:p-32 md:w-3/5 md:p-36">
          <TitleComponent
            onclick={() => navigate(-1)}
            back="Kembali"
            title="Kata Sandi Baru"
            desc="Kata sandi harus berbeda dengan yang sebelumnya!"
          />
          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <InputPassComponent
                htmlFor="newPass"
                titlePass="Kata Sandi Baru"
                placeholderPass="Masukan Kata Sandi Baru"
                namePass="newPass"
                idPass="newPass"
              />
              <InputPassComponent
                htmlFor="newPassConfirm"
                titlePass="Konfirmasi Kata Sandi Baru"
                placeholderPass="Masukan Konfirmasi Kata Sandi Baru"
                namePass="newPassConfirm"
                idPass="newPassConfirm"
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
