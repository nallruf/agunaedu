import React, { useState, useEffect } from "react";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboard";
import AddEvent from "../../../components/admin-menu/addevent/addevent";
import TitleDashboard from "../../../components/admin-menu/title/title";
import { dataEvent } from "../../../dummydata/admin-menu/dataevent";

const EventDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);

  const [showAddEvent, setShowAddEvent] = useState(false);

  const handleAddEventClick = () => {
    setShowAddEvent(true);
  };

  const columnsEvents = [
    { header: "Aksi", field: "icon", truncate: 0 },
    { header: "Nama Event", field: "title", truncate: 20 },
    { header: "Deskripsi", field: "desc", truncate: 15 },
    { header: "Waktu", field: "time", truncate: 20 },
    { header: "Tanggal", field: "date", truncate: 20 },
    { header: "Tag", field: "tag", truncate: 10 },
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
            onClick={handleAddEventClick}
          />
          <AddEvent
            isVisible={showAddEvent}
            onClose={() => setShowAddEvent(false)}
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

  return <Admin content={content} />;
};

export default EventDashboard;
