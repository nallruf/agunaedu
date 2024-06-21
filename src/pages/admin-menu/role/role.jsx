import React, { useState, useEffect } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import { dataRole } from "../../../dummydata/admin-menu/role/datarole";
import Modal from "../../../components/admin-menu/modal/modal";

import TextInputComponent from "../../../components/auth/textinput";

const RoleDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newRole, setNewRole] = useState({ roleName: "", description: "" });

  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);

  const columnsRole = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama", field: "role", truncate: 20 },
    { header: "Jumlah Path", field: "jmlpath", truncate: 20 },
    { header: "Jumlah Path Focus", field: "jmlpathfocus", truncate: 20 },
    { header: "Jumlah Course", field: "jmlcourse", truncate: 20 },
    { header: "Jumlah Siswa", field: "jmlsiswa", truncate: 20 },
  ];

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setNewRole({ roleName: "", description: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRole((prevRole) => ({ ...prevRole, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("New Role:", newRole);
    // Add your logic to save the new role here
    handleModalClose();
  };

  const content = (
    <>
      <div>
        <HeaderDashboard
          goto="/"
          buttonBack="Kembali"
          title="Role"
          desc="Pengaturan Role "
        />
        <div className="px-10 sm:px-20 md:px-40">
          <TitleDashboard
            title="Role"
            desc="Jumlah Role : 3"
            button="Tambah Role"
            onButtonClick={handleModalOpen}
          />
          <TableDashboard
            columns={columnsRole}
            data={dataRole}
            detailRoute={"/admin/role/detail"}
          />
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        title="Tambah Role"
      >
        <form className="space-y-4">
          <TextInputComponent
            label="Nama Role"
            name="roleName"
            value={newRole.roleName}
            onChange={handleInputChange}
          />
          <TextInputComponent
            label="Deskripsi"
            name="description"
            value={newRole.description}
            onChange={handleInputChange}
            type="textarea"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-primaryBlue text-white px-6 py-3 rounded-lg w-full mt-6"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>
    </>
  );

  return <Admin content={content} />;
};

export default RoleDashboard;
