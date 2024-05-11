import React, { useState } from "react";
import FaqItem from "../../../components/main/faq/faqitem";
import { dataFaq } from "../../../dummydata/datafaq";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <section className="container mx-auto space-y-16 mb-[140px] mt-[70px] px-10 md:px-52">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-medium text-[#101828] text-center">
            Frequently Asked Questions
          </h1>
          <h3 className="text-xl text-[#465467] text-center ">
            Berbagai Pertanyaan yang sering di ajukan
          </h3>
        </div>
        <div className="grid grid-cols-1 divide-y gap-8">
          {dataFaq.map((faq) => (
            <FaqItem
              key={faq.id}
              {...faq}
              openFaq={openFaq}
              setOpenFaq={setOpenFaq}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FaqSection;
