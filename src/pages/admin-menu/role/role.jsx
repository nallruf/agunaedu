import React, { useState, useEffect } from "react";
import Admin from "./../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import TitleDashboard from "../../../components/admin-menu/title/title";
import Modal from "../../../components/admin-menu/modal/modal";
import TextInputComponent from "../../../components/auth/textinput";
import { useAuth } from "../../../hooks/useauth";
import axios from "axios";
import { LuPencil } from "react-icons/lu";

const RoleDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [roleData, setRoleData] = useState([]);
  const [newRole, setNewRole] = useState({ roleName: "", description: "" });
  const { user } = useAuth();

  useEffect(() => {
    document.title = "Aguna Edu | Role Admin";
  }, []);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await axios.get("/api/v1/admin/role", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });

        const rolesWithIcons = response.data.map((role) => ({
          ...role,
          icon: (
            <div className="flex gap-2 cursor-pointer">
              <LuPencil className="text-primaryBlue" />
            </div>
          ),
        }));

        setRoleData(rolesWithIcons);
      } catch (error) {
        console.error("Error fetching role", error);
      }
    };

    if (user) {
      fetchRole();
    }
  }, [user]);

  const columnsRole = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "ID Role", field: "role_id", truncate: 0 },
    { header: "Nama", field: "role_name", truncate: 20 },
    { header: "Jumlah Path", field: "total_path", truncate: 20 },
    { header: "Jumlah Path Focus", field: "total_path_focus", truncate: 20 },
    { header: "Jumlah Course", field: "total_course", truncate: 20 },
    { header: "Jumlah Siswa", field: "total_student", truncate: 20 },
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
          desc="Pengaturan Role"
        />
        <div className="px-10 sm:px-20 md:px-40">
          <TitleDashboard
            title="Role"
            desc={`Jumlah Role : ${roleData.length}`}
            button="Tambah Role"
            onButtonClick={handleModalOpen}
          />
          <TableDashboard
            columns={columnsRole}
            data={roleData}
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
