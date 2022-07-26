import React, { useEffect } from "react";
import Head from "next/head";

const HeadComponent = props => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
      console.log(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-225361373-1");
    console.log(window.dataLayer);
  }, []);
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="SmartComply your number one smart compliance platform"
      />
      <meta
        name="keywords"
        content="SmartComply, compliance, Soc2, Pcidss, Ndpr, Iso270001, Cybersecurity, Compliance platform in Nigeria, first compliance platform in Africa"
      />
      <link rel="icon" href="/favicon.svg" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-225361373-1"
      ></script>
    </Head>
  );
};

export default HeadComponent;
