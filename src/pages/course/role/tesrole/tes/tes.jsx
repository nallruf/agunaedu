import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataRole } from "../../../../../dummydata/course/datarole";
import {
  dataTesHacker,
  dataTesHipster,
  dataTesHustler,
} from "../../../../../dummydata/course/datates";
import NotFoundPage from "../../../../notfound";

const TesPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const event = dataRole.find((event) => event.role.toLowerCase() === role);

  useEffect(() => {
    if (event) {
      document.title = `Aguna Edu | Tes Dasar - ${event.role}`;
    }
  }, [event]);

  let testData;
  if (event.role.toLowerCase() === "hacker") {
    testData = dataTesHacker[0];
  } else if (event.role.toLowerCase() === "hustler") {
    testData = dataTesHustler[0];
  } else if (event.role.toLowerCase() === "hipster") {
    testData = dataTesHipster[0];
  }

  if (!event || !testData) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div>MASUKAN DISIINI SLICING UI TES NYA</div>
    </>
  );
};

export default TesPage;
