import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../../button/Button";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [navToggle, setNavToggle] = useState(false);

  const openNavMenu = () => {
    setNavToggle(!navToggle);
  };
  return (
    <header
      className={`${styles.nav} flex flex-col relative lg:px-20 lg:py-4 lg:flex-row lg:justify-between`}
    >
      <div className="py-2 px-5 flex justify-between lg:p-3">
        <Image src="/logo.svg" alt="logo" width={120} height={50} />
        <div className="flex lg:hidden">
          <Button
            name={<GiHamburgerMenu color="#0C2356" size="24px" />}
            styles={styles}
            buttonAction={openNavMenu}
          />
        </div>
      </div>
      <nav
        className={
          navToggle
            ? "navbar flex flex-col bg-slate-500 pt-3 w-full top-24 absolute items-center lg:flex lg:flex-row lg:items-center h-80 lg:bg-inherit"
            : "hidden flex-col bg-slate-500 items-center lg:flex lg:flex-row lg:items-center lg:bg-inherit"
        }
      >
        <span className="my-8 lg:mr-10 text-white uppercase lg:my-4">
          <Link href="https://app.smartcomplyapp.com/auth/login">Sign in</Link>
        </span>
        <span className="my-8 lg:mr-10 text-white uppercase lg:my-4">
          <Link href="https://app.smartcomplyapp.com/auth/login">Blog</Link>
        </span>
        <Button name="Book Demo" styles={styles?.button} />
      </nav>
    </header>
  );
}
