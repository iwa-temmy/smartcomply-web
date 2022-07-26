import { useState, useEffect } from "react";
//Components
import Nav from "../components/home/nav/Nav";
import Hero from "../components/home/hero/Hero";
import MainFooter from "../components/home/footer/MainFooter";
import AuditProcess from "../components/home/auditProcess/AuditProcess";
import Infrastructures from "../components/home/Infrastructures/Infrastructures";
import HowItWorks from "../components/home/howItWorks/HowItWorks";
import Features from "../components/home/features/Features";
import RequestDemoModal from "components/modal/RequestDemoModal";
import HeadComponent from "components/HeadComponent";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import AOS from "aos";
export default function Home() {
  const [modal, setModal] = useState(false);

  function openDemoFormModal() {
    setModal(true);
  }
  function closeDemoFormModal() {
    setModal(false);
  }

  useEffect(() => {
    AOS.init({
      delay: 300, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out" // default easing for AOS animations
    });
  }, []);
  return (
    <div>
      <HeadComponent title="SmartComply" />
      <Nav openModal={openDemoFormModal} />
      <Hero openModal={openDemoFormModal} />
      <Features openModal={openDemoFormModal} />
      <HowItWorks />
      <Infrastructures openModal={openDemoFormModal} />
      <AuditProcess openModal={openDemoFormModal} />
      <MainFooter />
      <TawkMessengerReact
        propertyId="62602fc8b0d10b6f3e6e8294"
        widgetId="1g13rlaem"
      />
      <RequestDemoModal open={modal} closeModal={closeDemoFormModal} />
    </div>
  );
}
