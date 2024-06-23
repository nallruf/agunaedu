import React, { useState } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import TextInputComponent from "../../../components/auth/textinput";
import Modal from "../../../components/admin-menu/modal/modal";
import { dataPembicaraEvent } from "../../../dummydata/admin-menu/event/datapembicaraevent";
import ImgTrash from "../../../assets/img/illustration/trash.png";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const columnsPembicaraEvent = [
  { header: "Aksi", field: "icon", truncate: 0 },
  { header: "Nama", field: "title", truncate: 20 },
  { header: "Pekerjaan", field: "work", truncate: 20 },
  { header: "Gambar", field: "image", truncate: 0 },
];

const PembicaraEventPage = () => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [newSpeaker, setNewSpeaker] = useState({
    name: "",
    work: "",
    image: "",
  });

  const handleAddClick = () => {
    setNewSpeaker({ name: "", work: "", image: "" });
    setIsAddModalVisible(true);
  };

  const handleEditClick = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsEditModalVisible(true);
  };

  const handleDeleteClick = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsDeleteModalVisible(true);
  };

  const handleModalClose = () => {
    setIsAddModalVisible(false);
    setIsEditModalVisible(false);
    setIsDeleteModalVisible(false);
    setSelectedSpeaker(null);
  };

  const handleSaveNewSpeaker = () => {
    console.log("New Speaker: ", newSpeaker);
    // Add logic to save the new speaker
    handleModalClose();
  };

  const handleSaveEditSpeaker = () => {
    console.log("Edited Speaker: ", selectedSpeaker);
    // Add logic to save the edited speaker
    handleModalClose();
  };

  const handleDelete = () => {
    console.log("Deleted Speaker: ", selectedSpeaker);
    // Add logic to delete the speaker
    handleModalClose();
  };

  const dataPembicaraEventWithActions = dataPembicaraEvent.map((speaker) => ({
    ...speaker,
    icon: (
      <div className="flex gap-2 cursor-pointer">
        <LuPencil
          className="text-primaryBlue"
          onClick={() => handleEditClick(speaker)}
        />
        <FaRegTrashAlt
          className="text-red-500"
          onClick={() => handleDeleteClick(speaker)}
        />
      </div>
    ),
  }));

  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Pembicara Event"
          desc="Data Pembicara Event"
        />
        <div className="px-10 sm:px-20 md:px-40 mt-5 my-10">
          <TitleDashboard
            title="Pembicara Event"
            button="Tambah Pembicara"
            onButtonClick={handleAddClick}
          />
          <TableDashboard
            columns={columnsPembicaraEvent}
            data={dataPembicaraEventWithActions}
          />
        </div>
      </div>

      <Modal
        isVisible={isAddModalVisible}
        onClose={handleModalClose}
        title="Tambah Pembicara"
      >
        <div className="flex justify-between items-center gap-5">
          <div className="mr-3 w-1/2">
            <TextInputComponent
              htmlfor="speakerName"
              label="Nama Pembicara"
              type="text"
              id="speakerName"
              name="speakerName"
              value={newSpeaker.name}
              onChange={(e) =>
                setNewSpeaker({ ...newSpeaker, name: e.target.value })
              }
            />
          </div>
          <div className="w-1/2">
            <InputImgComponent
              label="Ganti Foto"
              id="speakerImage"
              name="speakerImage"
              value={newSpeaker.image}
              onChange={(e) =>
                setNewSpeaker({ ...newSpeaker, image: e.target.files[0] })
              }
            />
            <div
              onClick={() => imagePicker.current.click()}
              className="flex items-center justify-center border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
            >
              Tambah Foto
            </div>
          </div>
        </div>
        <TextInputComponent
          htmlfor="speakerWork"
          label="Pekerjaan"
          type="text"
          id="speakerWork"
          name="speakerWork"
          value={newSpeaker.work}
          onChange={(e) =>
            setNewSpeaker({ ...newSpeaker, work: e.target.value })
          }
        />
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={handleSaveNewSpeaker}
            className="bg-primaryBlue w-full text-white px-4 py-2 rounded-md"
          >
            Simpan
          </button>
        </div>
      </Modal>

      <Modal
        isVisible={isEditModalVisible}
        onClose={handleModalClose}
        title="Edit Pembicara"
      >
        <div className="flex justify-between items-center gap-5">
          <div className="mr-3 w1/2">
            <TextInputComponent
              htmlfor="speakerName"
              label="Nama Pembicara"
              type="text"
              id="speakerName"
              name="speakerName"
              value={selectedSpeaker?.title || ""}
              onChange={(e) =>
                setSelectedSpeaker({
                  ...selectedSpeaker,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className="w-1/2">
            <InputImgComponent
              label="Tambah Foto"
              id="speakerImage"
              name="speakerImage"
              onChange={(e) =>
                setSelectedSpeaker({
                  ...selectedSpeaker,
                  image: e.target.files[0],
                })
              }
            />
            <div
              onClick={() => imagePicker.current.click()}
              className="flex items-center justify-center border font-semibold py-[10px] px-8 bg-[#F9FAFB] border-[#85CAFF] text-primaryBlue rounded-lg cursor-pointer"
            >
              Tambah Foto
            </div>
          </div>
        </div>

        <TextInputComponent
          htmlfor="speakerWork"
          label="Pekerjaan"
          type="text"
          id="speakerWork"
          name="speakerWork"
          value={selectedSpeaker?.work || ""}
          onChange={(e) =>
            setSelectedSpeaker({ ...selectedSpeaker, work: e.target.value })
          }
        />
        <div className="flex justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={handleSaveEditSpeaker}
            className="bg-primaryBlue w-full text-white px-4 py-2 rounded-md"
          >
            Simpan
          </button>
        </div>
      </Modal>

      <Modal
        isVisible={isDeleteModalVisible}
        onClose={handleModalClose}
        title="Hapus Pembicara"
      >
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          <img src={ImgTrash} alt="delete illustration" />
          <h3 className="text-lg text-center">
            Apakah anda yakin ingin menghapus pembicara {selectedSpeaker?.title}
            ?
          </h3>
          <div className="flex gap-5 w-full justify-center">
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-lg"
              onClick={handleDelete}
            >
              Hapus
            </button>
            <button
              className="bg-gray-300 text-black px-6 py-3 rounded-lg"
              onClick={handleModalClose}
            >
              Batal
            </button>
          </div>
        </div>
      </Modal>
    </>
  );

  return <Admin content={content} />;
};

export default PembicaraEventPage;
