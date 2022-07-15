import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi";

import styles from "styles/BlogLayout.module.css";

const BlogHeader = () => {
  return (
    <header
      className={`py-8 md:py-10 px-5 md:px-20 flex justify-between items-center ${styles.header}`}
    >
      <Image src="/logo.svg" alt="Website Logo" width={180} height={60} />
      <Link href="/">
        <a className={`font-bold ${styles.primaryText}`}>
          <span className="hidden md:block">Home</span>
          <HiHome className="block md:hidden text-2xl" />
        </a>
      </Link>
    </header>
  );
};

export default BlogHeader;
