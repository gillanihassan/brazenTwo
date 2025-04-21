import React from "react";
import { Button } from "react-bootstrap";
import HeroSection from "../components/herosection/HeroSection";
import Media from "../components/media/Media";
import BrazenSection from "../components/brazensection/BrazenSection";
import TeamSection from "../components/teamSection/TeamSection";
import BrazenPress from "../components/brazenpress/BrazenPress";
import Brazenfoooter from "../components/brazenfooter/Brazenfoooter";
import BrazenSectionTwo from "../components/brazensectiontwo/BrazenSectionTwo";

function Brazen() {
  return (
    <div>
      <HeroSection />
      <Media />
      <BrazenSection />
      <TeamSection />
      <BrazenSectionTwo />
      <BrazenPress />
      <Brazenfoooter />
    </div>
  );
}

export default Brazen;
