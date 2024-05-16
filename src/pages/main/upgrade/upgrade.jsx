import React, { useState } from "react";
import Category from "../../../components/main/upgrade/category";
import { BsCalendar4Event } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import CardCat from "../../../components/main/upgrade/cardcat";
import SideCat from "../../../components/main/upgrade/sidecat";
import { dataUpgrade, dataSide } from "../../../dummydata/main/dataupgrade";

const UpgradeSection = () => {
  const [activeCategory, setActiveCategory] = useState("Event");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredDataSide = dataSide.filter(({ button }) =>
    button.toLowerCase().includes(activeCategory.toLowerCase())
  );

  const filteredDataCard = dataUpgrade.filter(({ subs }) =>
    subs.some((sub) => sub.toLowerCase().includes(activeCategory.toLowerCase()))
  );
  
  return (
    <>
      <div
        className="flex flex-col gap-3 container mx-auto px-10 pt-20 pb-10"
        data-aos="fade-right"
      >
        <h1 className="text-textPrimary text-3xl font-semibold">
          Tingkatkan lebih dalam lagi kemampuanmu!
        </h1>
        <h3 className="text-textTertiary text-xl ">
          Ikuti berbagai kegiatan lainnya dari kami!
        </h3>
      </div>

      <section
        className="bg-primaryBlue relative overflow-hidden"
        data-aos="fade-right"
      >
        <div className="absolute bottom-0 left-0 transform translate-x-[-50%] translate-y-[50%] w-[600px] h-[600px] rounded-full bg-secondaryBlue" />
        <div className="container mx-auto px-10 z-10 relative">
          <div className="top-0 translate-y-[-8px]">
            <Category
              icon={<BsCalendar4Event />}
              upgrade="Event"
              isActive={activeCategory === "Event"}
              onClick={() => handleCategoryClick("Event")}
            />
            <Category
              icon={<PiMedal />}
              upgrade="Challenge"
              isActive={activeCategory === "Challenge"}
              onClick={() => handleCategoryClick("Challenge")}
            />
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <div
              className="my-12 sm:my-20 md:my-[150px] md:w-[40%]"
              data-aos="fade-right"
            >
              {filteredDataSide.map((item, index) => (
                <SideCat key={index} {...item} />
              ))}
            </div>

            <div
              className="grid md:grid-cols-2 mt-10 gap-3 justify-end"
              data-aos="zoom-in"
            >
              {filteredDataCard.map((item, index) => (
                <div key={index}>
                  <CardCat imgPath={item.imgPath} {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpgradeSection;
