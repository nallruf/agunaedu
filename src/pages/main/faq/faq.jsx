import React, { useState, useEffect } from "react";
import FaqItem from "../../../components/main/faq/faqitem";
import axios from "axios";

const FaqSection = () => {
  const [faqData, setFaqData] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  
  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await axios.get("/api/v1/public/landing/faq");
        setFaqData(response.data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFaqData();
  }, []);

  return (
    <>
      <section
        className="sm:px-20 space-y-16 mb-[140px] mt-[70px] px-10 md:px-52"
        id="faq"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-medium text-textPrimary text-center">
            Frequently Asked Questions
          </h1>
          <h3 className="text-xl text-textTertiary text-center">
            Berbagai Pertanyaan yang sering di ajukan
          </h3>
        </div>
        <div className="grid grid-cols-1 divide-y gap-8">
          {faqData.map((faq) => (
            <FaqItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
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
