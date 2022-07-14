import Head from "next/head";
//Components
import Nav from "../components/home/nav/Nav";
import Hero from "../components/home/hero/Hero";
import MainFooter from "../components/home/footer/MainFooter";
import AuditProcess from "../components/home/auditProcess/AuditProcess";
import Infrastructures from "../components/home/Infrastructures/Infrastructures";
import HowItWorks from "../components/home/howItWorks/HowItWorks";
import Features from "../components/home/features/Features";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
export default function Home() {
  return (
    <div>
      <Head>
        <title>SmartComply</title>
        <meta
          name="description"
          content="SmartComply your number one smart compliance platform"
        />
        <meta
          name="keywords"
          content="SmartComply, compliance, Soc2, Pcidss, Ndpr, Iso270001, Cybersecurity, Compliance platform in Nigeria, first compliance platform in Africa"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Infrastructures />
      <AuditProcess />
      <MainFooter />
      <TawkMessengerReact
        propertyId="62602fc8b0d10b6f3e6e8294"
        widgetId="1g13rlaem"
      />
    </div>
  );
}
