import Admin from "./admin/admin";
import React, { useEffect, useRef, useState } from "react";
import TextInputComponent from "../../components/auth/textinput";
import ImgProfile from "../../assets/img/team/ulum.png";
const SettingDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);
  const imagePicker = useRef();
  const [previewImage, setPreviewImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    document.title = "Aguna Edu | Setting User";
  }, []);

  const content = (
    <>
      <div className="px-10 sm:px-20 md:px-40">
        <div className="flex ">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl text-textPrimary font-semibold">
              Pengaturan
            </h1>
            <div className="border border-borderPrimary px-8 py-6 rounded-2xl w-[600px]">
              <div className="flex flex-col gap-4 pb-5">
                <h2 className="text-lg text-textPrimary font-semibold">
                  Edit Akun
                </h2>
                <div className="flex items-center gap-4">
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      name="images"
                      onChange={handleImage}
                      ref={imagePicker}
                      hidden
                    />
                    <div onClick={() => imagePicker.current.click()}>
                      <img
                        src={previewImage || ImgProfile}
                        alt="img-profile"
                        draggable="false"
                        className="w-[60px] rounded-full cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold text-textPrimary">
                      Ulum
                    </h2>
                    <h4 className="text-base text-textTertiary">
                      Ulum@gmail.com
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <TextInputComponent
                    htmlFor="nama"
                    label="Nama"
                    type="text"
                    placeholder="Masukan Nama Terbaru"
                    name="nama"
                    id="nama"
                    // value={formData.email}
                    // onChange={handleChange}
                  />
                  <TextInputComponent
                    htmlFor="username"
                    label="Nama Pengguna"
                    type="text"
                    placeholder="Masukan Username Terbaru"
                    name="username"
                    id="username"
                    // value={formData.email}
                    // onChange={handleChange}
                  />
                  <TextInputComponent
                    htmlFor="email"
                    label="Email"
                    type="email"
                    placeholder="Masukan Email Terbaru"
                    name="email"
                    id="email"
                    // value={formData.email}
                    // onChange={handleChange}
                  />
                  <TextInputComponent
                    htmlFor="notelp"
                    label="No Telp"
                    type="text"
                    placeholder="Masukan No Telp Terbaru"
                    name="notelp"
                    id="notelp"
                    // value={formData.email}
                    // onChange={handleChange}
                  />
                  <TextInputComponent
                    htmlFor="univ"
                    label="Universitas"
                    type="text"
                    placeholder="Masukan Universitas Terbaru"
                    name="univ"
                    id="univ"
                    // value={formData.email}
                    // onChange={handleChange}
                  />
                </div>
                <div className="flex justify-end">
                  <button className="bg-primaryBlue h-[44px] text-white rounded-lg px-6 py-2 font-semibold">
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return <Admin content={content} />;
};

export default SettingDashboard;
