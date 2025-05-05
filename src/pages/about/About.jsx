import React from "react";
import CustomNavbar from "./components/navbar/CustomNavbar";
import BrazenIntro from "./components/brazenintro/BrazenIntro";
import TeamSection from "./components/teamSection/TeamSection";
import Documentarie from "./components/documentarie/Documentarie";
import PressSection from "./components/pressSection/PressSection";
import AwardSection from "./components/awardSection/AwardSection";
import FooterSection from "../components/brazenfooter/Brazenfoooter";

function About() {
  return (
    <div>
      <CustomNavbar />
      <BrazenIntro />
      <TeamSection />
      <Documentarie />
      <PressSection />
      <AwardSection />
      <FooterSection />
    </div>
  );
}

export default About;
