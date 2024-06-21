import React, { useState, useEffect, useRef } from "react";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import Modal from "../../../components/admin-menu/modal/modal";
import { dataEvent } from "../../../dummydata/admin-menu/event/dataevent";
import TextInputComponent from "../../../components/auth/textinput";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import MultiSelectInputComponent from "../../../components/auth/multipleinput";

const EventDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    namaEvent: "",
    deskripsiSingkat: "",
    deskripsiDetail: "",
    waktu: "",
    tanggal: "",
    lokasi: "",
    link: "",
    komunitas: "",
    type: "",
    skill: [],
    gambar: "",
  });

  const imagePicker = useRef(null);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          gambar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeLink = () => {
    console.log("Change link clicked");
    // Add your logic to change the link here if needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form Data:", formData);
    handleCloseModal();
  };

  const columnsEvents = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama Event", field: "title", truncate: 20 },
    { header: "Deskripsi singkat", field: "desc", truncate: 15 },
    { header: "Deskripsi Detail", field: "descfull", truncate: 15 },
    { header: "Waktu", field: "time", truncate: 20 },
    { header: "Tanggal", field: "date", truncate: 20 },
    { header: "Lokasi", field: "lok", truncate: 20 },
    { header: "Link", field: "link", truncate: 20 },
    { header: "Komunitas", field: "community", truncate: 20 },
    { header: "Type", field: "type", truncate: 10 },
    { header: "Skill", field: "skill", truncate: 10 },
    { header: "Gambar", field: "image", truncate: 0 },
  ];

  const content = (
    <>
      <div className="mb-10">
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Tambah Event"
          desc="Pengaturan Event"
        />
        <div className="px-10 sm:px-20 md:px-40">
          <TitleDashboard
            title="Event"
            desc="Jumlah Event Berlangsung : 5"
            button="Tambah Event"
            onButtonClick={handleOpenModal}
          />
          <div className="mb-10">
            <TableDashboard
              columns={columnsEvents}
              data={dataEvent}
              detailRoute="/admin/event/detail"
            />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Admin content={content} />
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        title="Tambah Event"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="mr-3 w-1/2">
                <TextInputComponent
                  htmlFor="namaEvent"
                  label="Nama Event"
                  type="text"
                  id="namaEvent"
                  name="namaEvent"
                  value={formData.namaEvent}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <InputImgComponent
                  htmlFor="gambar"
                  label="Gambar"
                  type="file"
                  id="gambar"
                  name="gambar"
                  imagePicker={imagePicker}
                  onChange={handleFileChange}
                />
                {formData.gambar && (
                  <img
                    src={formData.gambar}
                    alt="Gambar Event"
                    className="mt-3 w-full h-auto"
                  />
                )}
                <div
                  onClick={() => imagePicker.current.click()}
                  className="flex items-center justify-center border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer mt-2"
                >
                  Tambah Foto
                </div>
              </div>
            </div>
            <div>
              <TextInputComponent
                htmlFor="deskripsiSingkat"
                label="Deskripsi Singkat"
                type="text"
                id="deskripsiSingkat"
                name="deskripsiSingkat"
                value={formData.deskripsiSingkat}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextInputComponent
                htmlFor="deskripsiDetail"
                label="Deskripsi Detail"
                type="text"
                id="deskripsiDetail"
                name="deskripsiDetail"
                value={formData.deskripsiDetail}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <TextInputComponent
                htmlFor="waktu"
                label="Waktu"
                type="text"
                id="waktu"
                name="waktu"
                calenderInput={true}
                value={formData.waktu}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
            <div>
              <TextInputComponent
                htmlFor="tanggal"
                label="Tanggal"
                type="text"
                id="tanggal"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextInputComponent
                htmlFor="lokasi"
                label="Lokasi"
                type="text"
                id="lokasi"
                name="lokasi"
                value={formData.lokasi}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="w-1/2">
                <TextInputComponent
                  htmlFor="link"
                  label="Link"
                  type="text"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <button
                  type="button"
                  onClick={handleChangeLink}
                  className="w-full border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
                >
                  Ganti Link
                </button>
              </div>
            </div>
            <div>
              <TextInputComponent
                htmlFor="komunitas"
                label="Komunitas"
                type="text"
                id="komunitas"
                name="komunitas"
                value={formData.komunitas}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextInputComponent
                htmlFor="type"
                label="Type"
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              />
            </div>
            <div>
              <MultiSelectInputComponent
                htmlFor="skill"
                label="Skill"
                name="skill"
                id="skill"
                value={formData.skill}
                onChange={(selectedSkills) =>
                  setFormData({ ...formData, skill: selectedSkills })
                }
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
            >
              Tambah
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EventDashboard;
