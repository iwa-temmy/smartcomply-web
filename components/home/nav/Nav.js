import { useState } from "react";
import styles from "styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../../button/Button";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav({ openModal }) {
  const [navToggle, setNavToggle] = useState(false);

  const openNavMenu = () => {
    setNavToggle(!navToggle);
  };
  const closeMenu = () => {
    setNavToggle(false);
  };

  const openRequestDemoModal = () => {
    openModal();
    closeMenu();
  };
  return (
    <header className={`${styles.nav} absolute w-full bg-transparent z-10`}>
      <div className="container flex flex-col sm:items-center sm:flex-row sm:justify-between sm:pt-4">
        <div className="py-2 px-5 flex justify-between items-center sm:p-3">
          <Image src="/logo-white.svg" alt="logo" width={120} height={50} />
          <div className="flex sm:hidden">
            <button
              className=" py-3 px-5 rounded-sm uppercase my-5 sm:my-0"
              onClick={openNavMenu}
            >
              <GiHamburgerMenu color="#fff" size="24px" />
            </button>
          </div>
        </div>
        <nav
          className={`${
            navToggle
              ? "pt-3 w-full translate-x-0"
              : "-translate-x-full flex-col bg-slate-500"
          } flex flex-col bg-slate-500 transition-all duration-100 absolute top-24 h-80 sm:flex sm:flex-row items-center sm:bg-inherit sm:relative sm:top-0 sm:h-fit sm:translate-x-0 sm:items-center`}
        >
          <span className="my-8 sm:mr-10 text-white uppercase sm:my-4">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </span>
          <span className="my-8 sm:mr-10 text-white uppercase sm:my-4">
            <Link href="https://app.smartcomplyapp.com/auth/login">
              <a>Sign in</a>
            </Link>
          </span>
          <Button
            name="Book Demo"
            styles={styles?.button}
            buttonAction={openRequestDemoModal}
          />
        </nav>
      </div>
    </header>
  );
}
