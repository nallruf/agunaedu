import React, { useState, useEffect } from "react";
import Admin from "../admin/admin";
import HeaderDashboard from "../../../components/admin-menu/headerdashboard/headerdashboard";
import TableDashboard from "../../../components/admin-menu/tabledashboard/tabledashboardevent";

import AddEvent from "../../../components/admin-menu/addevent/addevent";
import TitleDashboard from "../../../components/admin-menu/title/title";

const EventDashboard = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Dashboard User";
  }, []);

  const [showAddEvent, setShowAddEvent] = useState(false);

  const handleAddEventClick = () => {
    setShowAddEvent(true);
  };

  const content = (
    <>
      <div>
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
          <TableDashboard />
        </div>
      </div>
    </>
  );

  return <Admin content={content} />;
};

export default EventDashboard;
