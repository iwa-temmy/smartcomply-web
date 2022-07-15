import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
// import Link from "next/link";
import Button from "../../button/Button";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav({openModal}) {
  const [navToggle, setNavToggle] = useState(false);

  const openNavMenu = () => {
    setNavToggle(!navToggle);
  };
  const closeMenu = () => {
    setNavToggle(false)
  }

  const openRequestDemoModal = () => {
    openModal()
    closeMenu()
  }
  return (
    <header
      className={`${styles.nav} flex flex-col relative lg:px-20 lg:py-4 lg:flex-row lg:justify-between`}
    >
      <div className="py-2 px-5 flex justify-between lg:p-3">
        <Image src="/logo-white.svg" alt="logo" width={120} height={50} />
        <div className="flex lg:hidden">
          <button
            className=" py-2 px-3 bg-white rounded-lg uppercase my-5 lg:my-0"
            onClick={openNavMenu}
            type="button"
          >
            <GiHamburgerMenu color="#0C2356" size="22px" />
          </button>
        </div>
      </div>
      <nav
        className={`${
          navToggle
            ? "pt-3 w-full translate-x-0"
            : "-translate-x-full flex-col bg-slate-500"
        } flex flex-col bg-slate-500 transition-all duration-100 absolute top-24 h-80 lg:flex lg:flex-row items-center lg:bg-inherit lg:relative lg:top-0 lg:h-fit lg:translate-x-0 lg:items-end`}
      >
        <span className="my-8 lg:mr-10 text-white uppercase lg:my-4">
          <a href="https://app.smartcomplyapp.com/auth/login" target="_blank" rel="noreferrer" onClick={closeMenu}>Sign in</a>
        </span>
        <span className="my-8 lg:mr-10 text-white uppercase lg:my-4">
          <a href="/blog" onClick={closeMenu}>Blog</a>
        </span>
        <Button name="Book Demo" styles={styles?.button} buttonAction={openRequestDemoModal}/>
      </nav>
    </header>
  );
}
