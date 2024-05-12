import React from "react";
import FaqSection from "./faq/faq";
import TestiSection from "./testimoni/testi";
import ShareTagSection from "./sharetag/sharetag";
import HeroSection from "./hero/hero";
import ToolsSection from "./tool/tools";
import UpgradeSection from "./upgrade/upgrade";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ToolsSection />
      <UpgradeSection />
      <ShareTagSection />
      <TestiSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
