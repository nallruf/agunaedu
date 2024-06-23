import React, { useState, useEffect, useRef } from "react";
import Admin from "../admin/admin";
import TitleDashboard from "../../../components/admin-menu/title/title";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import { dataChallenge } from "../.././../dummydata/admin-menu/challenge/datachallenge";
import TextInputComponent from "../../../components/auth/textinput";
import InputImgComponent from "../../../components/admin-menu/inputimg/inputimg";
import Modal from "../../../components/admin-menu/modal/modal";

const ChallengeDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);

  const [showAddChallenge, setShowAddChallenge] = useState(false);
  const imagePicker = useRef(null);

  const handleAddChallengeClick = () => {
    setShowAddChallenge(true);
  };

  const handleCloseAddChallengeModal = () => {
    setShowAddChallenge(false);
  };

  const handleAddChallenge = () => {
    console.log("Challenge added");
    // Add your logic to save the new challenge here
    handleCloseAddChallengeModal();
  };

  const columnsChallenge = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama challenge", field: "title", truncate: 20 },
    { header: "Deskripsi Singkat", field: "desc", truncate: 10 },
    { header: "Deskripsi Detail", field: "descfull", truncate: 10 },
    { header: "Durasi", field: "durasi", truncate: 20 },
    { header: "Gambar", field: "image", truncate: 0 },
  ];

  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/course/hacker/path-web/fe"
          buttonBack="Kembali"
          title="Challenge"
          desc="Pengaturan Challenge"
        />
      </div>
      <div className="px-10 sm:px-20 md:px-40">
        <TitleDashboard
          title="Challenge"
          desc="Jumlah Challenge Berlangsung : 5"
          button="Tambah Challenge"
          onButtonClick={handleAddChallengeClick}
        />
        <Modal
          isVisible={showAddChallenge}
          onClose={handleCloseAddChallengeModal}
          title="Tambah Challenge"
        >
          <div className="p-10  space-y-4">
            <div className="flex justify-between">
              <div className="w-1/2 mr-3">
                <TextInputComponent
                  htmlfor="namaChallenge"
                  label="Nama Challenge"
                  type="text"
                  id="namaChallenge"
                  name="title"
                />
              </div>
              <div className="w-1/2">
                <InputImgComponent
                  htmlfor="namaGambar"
                  label="Tambah Foto"
                  type="file"
                  id="namaGambar"
                  name="image"
                  imagePicker={imagePicker}
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
              htmlfor="deskripsiSingkat"
              label="Deskripsi Singkat"
              type="text"
              id="deskripsiSingkat"
              name="shortDesc"
            />
            <TextInputComponent
              htmlfor="deskripsiDetail"
              label="Deskripsi Detail"
              type="textarea"
              id="deskripsiDetail"
              name="detailDesc"
            />
            <div className="flex justify-between gap-4">
              <TextInputComponent
                htmlfor="tanggalMulai"
                label="Tanggal Mulai"
                type="date"
                id="tanggalMulai"
                name="startDate"
              />
              <TextInputComponent
                htmlfor="tanggalSelesai"
                label="Tanggal Selesai"
                type="date"
                id="tanggalSelesai"
                name="endDate"
              />
            </div>
            <TextInputComponent
              htmlfor="jumlahPemenang"
              label="Jumlah Pemenang"
              type="number"
              id="jumlahPemenang"
              name="winners"
            />
            <div className="flex justify-center gap-4 mt-4">
              <button
                type="button"
                onClick={handleAddChallenge}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Tambah
              </button>
              <button
                type="button"
                onClick={handleCloseAddChallengeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Batal
              </button>
            </div>
          </div>
        </Modal>
        <div className="mb-10">
          <TableDashboard
            columns={columnsChallenge}
            data={dataChallenge}
            detailRoute="/admin/challenge/detail"
          />
        </div>
      </div>
    </>
  );

  return <Admin content={content} />;
};

export default ChallengeDashboard;
