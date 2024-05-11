import React from "react";
import FaqSection from "./faq/faq";
import TestiSection from "./testimoni/testi";
import ShareTag from "./sharetag/sharetag";

const HomePage = () => {
  return (
    <div>
      <ShareTag />
      <TestiSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
