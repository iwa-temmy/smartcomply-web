import Image from "next/image";
import React from "react";

import styles from "styles/BlogLayout.module.css";

const BlogHeader = () => {
  return (
    <header
      className={`py-10 px-20 flex justify-center md:justify-start ${styles.header}`}
    >
      <Image src="/logo.svg" alt="Website Logo" width={180} height={60} />
    </header>
  );
};

export default BlogHeader;
