import React from "react";
import Head from "next/head";

const BlogHead = props => {
  const { title } = props;
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.svg" />
      <title>{title}</title>
      <meta
        name="description"
        content="SmartComply your number one smart compliance platform"
      />
      <meta
        name="keywords"
        content="SmartComply, compliance, Soc2, Pcidss, Ndpr, Iso270001, Cybersecurity, Compliance platform in Nigeria, first compliance platform in Africa"
      />
    </Head>
  );
};

export default BlogHead;
