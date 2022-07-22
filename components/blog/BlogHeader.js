import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi";

const BlogHeader = () => {
  return (
    <header className="bg-primary p-5">
      <div className="container  flex justify-between items-center">
        <Image
          src="/logo-white.svg"
          alt="Website Logo"
          width={180}
          height={60}
        />
        <Link href="/">
          <a className={`font-bold text-white`}>
            <span className="hidden md:block">Home</span>
            <HiHome className="block md:hidden text-2xl" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default BlogHeader;
