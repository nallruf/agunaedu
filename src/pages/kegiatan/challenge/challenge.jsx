import React, { useEffect } from "react";
import HeaderKegiatan from "../../../components/kegiatan/headerkeg";
import ChallengeImg from "../../../assets/img/illustration/1.png";

const ChallengePage = () => {
  useEffect(() => {
    document.title = "Aguna Edu | Challenge";
  });

  return (
    <>
      <HeaderKegiatan
        title="Uji kemampuanmu melalui Challenge!"
        desc="Ikuti challenge untuk menguji kemampuanmu!"
        imgKeg={ChallengeImg}
      />
    </>
  );
};

export default ChallengePage;
