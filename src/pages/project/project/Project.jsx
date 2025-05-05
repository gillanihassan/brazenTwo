import React from "react";
import ProjectNavbar from "../components/navbar/ProjectNavbar";
import Doug from "../components/doug/Doug";
import EpisodeSection from "../components/episodeSection/EpisodeSection";
import GateWay from "../components/gateway/GateWay";
import FooterSection from "../../components/brazenfooter/Brazenfoooter";

function Project() {
  return (
    <div>
      <ProjectNavbar />
      <Doug />
      <EpisodeSection />
      <GateWay />
      <FooterSection />
    </div>
  );
}

export default Project;
