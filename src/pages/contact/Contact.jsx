import React from "react";
import ContactNavbar from "./components/contactNavbar/ContactNavbar";
import Office from "./components/office/Office";
import Documentarie from "../about/components/documentarie/Documentarie";
import FooterSection from "../components/brazenfooter/Brazenfoooter";

function Contact() {
  return (
    <div>
      <ContactNavbar />
      <Office />
      <Documentarie />
      <FooterSection />
    </div>
  );
}

export default Contact;
