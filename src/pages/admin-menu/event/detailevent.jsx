import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import Modal from "../../../components/admin-menu/modal/modal";
import TextInputComponent from "../../../components/auth/textinput";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { dataMainEvent } from "../../../dummydata/admin-menu/event/datamainevent";
import { dataSpeakerEvent } from "../../../dummydata/admin-menu/event/dataspeakerevent";
import ImgTrash from "../../../assets/img/illustration/trash.png";
import MultiSelectInputComponent from "../../../components/auth/multipleinput";
import DropdownComponent from "../../../components/admin-menu/dropdowncomponent/dropdowncomponent";

const DetailEvent = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isAddSpeakerModalVisible, setIsAddSpeakerModalVisible] =
    useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
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
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  const imagePicker = useRef();

  const speakerOptions = dataSpeakerEvent.map((speaker) => ({
    label: speaker.name,
    value: speaker.name,
  }));

  const handleOpenModal = (event = null) => {
    if (event) {
      setFormData({
        id: event.id,
        namaEvent: event.title,
        deskripsiSingkat: event.desc,
        deskripsiDetail: event.descfull,
        waktu: event.time,
        tanggal: event.date,
        lokasi: event.lok,
        link: event.link,
        komunitas: event.community,
        type: event.type,
        skill: event.skill,
        gambar: event.image,
      });
      setIsEditing(true);
    } else {
      setFormData({
        id: null,
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
      setIsEditing(false);
    }
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleOpenDeleteModal = (item) => {
    setItemToDelete(item);
    setIsDeleteModalVisible(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setItemToDelete(null);
  };

  const handleOpenAddSpeakerModal = () => {
    setIsAddSpeakerModalVisible(true);
  };

  const handleCloseAddSpeakerModal = () => {
    setIsAddSpeakerModalVisible(false);
    setSelectedSpeaker(null);
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Deleting item:", itemToDelete);
    handleCloseDeleteModal();
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
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        gambar: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      // Handle edit logic here
      console.log("Editing event:", formData);
    } else {
      // Handle add logic here
      console.log("Adding event:", formData);
    }
    handleCloseModal();
  };

  const handleChangeLink = () => {
    // Logic to change link
  };

  const handleSpeakerChange = (selected) => {
    setSelectedSpeaker(selected);
  };

  const handleSpeakerSubmit = () => {
    // Handle adding speaker logic here
    console.log("Adding speaker:", selectedSpeaker);
    handleCloseAddSpeakerModal();
  };

  const dataMainEventWithActions = dataMainEvent.map((event) => ({
    ...event,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleOpenModal(event)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleOpenDeleteModal(event)}
        />
      </div>
    ),
  }));

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

  const columnsSpeakerEvent = [
    { header: "Nama", field: "name", truncate: 40 },
    { header: "Pekerjaan", field: "work", truncate: 40 },
    { header: "Gambar", field: "image", truncate: 30 },
  ];

  const content = (
    <>
      <div>
        <HeaderDashboard
          goto={() => navigate(-1)}
          buttonBack="Kembali"
          title="Detail Event"
          desc="Webinar Public Speaking"
        />
        <div className="px-10 sm:px-20 md:px-40 my-10">
          <div className="flex flex-col gap-10">
            <div>
              <TitleDashboard title="Event : Webinar Public Speaking" />
              <TableDashboard
                columns={columnsEvents}
                data={dataMainEventWithActions}
              />
            </div>
          </div>

          <div>
            <TitleDashboard
              button="Tambah Pembicara"
              onClick={handleOpenAddSpeakerModal}
              title="Pembicara"
              onButtonClick={handleOpenAddSpeakerModal}
            />
            <TableDashboard
              columns={columnsSpeakerEvent}
              data={dataSpeakerEvent}
            />
          </div>
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        title={isEditing ? "Edit Event" : "Tambah Event"}
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
              {isEditing ? "Edit" : "Tambah"}
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isVisible={isDeleteModalVisible}
        onClose={handleCloseDeleteModal}
        title="Hapus Event"
      >
        <div className="flex flex-col items-center justify-center gap-10 p-4">
          <img src={ImgTrash} alt="Delete" />
          <h1 className="text-2xl text-center">
            Anda yakin ingin menghapus event ini?
          </h1>
          <div className="flex w-full justify-between">
            <button
              className="py-3 px-14 rounded-lg border border-primaryBlue text-primaryBlue"
              onClick={handleCloseDeleteModal}
            >
              Batal
            </button>
            <button
              className="py-3 px-14 rounded-lg bg-primaryBlue text-white"
              onClick={handleDelete}
            >
              Hapus
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isVisible={isAddSpeakerModalVisible}
        title="Tambah Pembicara"
        onClose={handleCloseAddSpeakerModal}
        onSubmit={handleSpeakerSubmit}
        submitLabel="Tambah"
      >
        <div className="flex flex-col gap-4">
          <DropdownComponent
            label="Pilih Pembicara"
            options={speakerOptions}
            selectedValue={selectedSpeaker}
            onChange={handleSpeakerChange}
          />
        </div>
      </Modal>
    </>
  );

  return <Admin content={content} />;
};

export default DetailEvent;
