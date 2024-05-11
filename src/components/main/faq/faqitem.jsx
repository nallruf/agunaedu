import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const FaqItem = ({ id, title, answer, openFaq, setOpenFaq }) => {
  const isFaqOpen = openFaq === id;

  const toggleFaq = () => {
    setOpenFaq(isFaqOpen ? null : id);
  };

  return (
    <>
      <div>
        <button
          className="flex justify-between w-full pt-6"
          onClick={toggleFaq}
        >
          <span className="text-lg font-medium text-[#101828] text-start sm:pr-10">
            {title}
          </span>
          {isFaqOpen ? (
            <AiOutlineMinusCircle className="hidden sm:block text-[#175CD3] text-2xl" />
          ) : (
            <AiOutlinePlusCircle className="hidden sm:block text-[#175CD3] text-2xl" />
          )}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-base text-[#465467] ${
            isFaqOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <h4 className="overflow-hidden mt-2 pr-10">{answer}</h4>
        </div>
      </div>
    </>
  );
};

export default FaqItem;
