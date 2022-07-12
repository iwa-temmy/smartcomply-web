import Head from "next/head";
import styles from "../styles/Home.module.css";
//Components
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import MainFooter from "../components/homeFooter/MainFooter";
import AuditProcess from "../components/auditProcess/AuditProcess";
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
    
      <Nav styles={styles}/>
      <Hero />
      <AuditProcess />
      <MainFooter />
    </div>
  );
}
