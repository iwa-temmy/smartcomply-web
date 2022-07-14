import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../../button/Button";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Nav() {
  return (
    <header
      className={`${styles.nav} flex flex-col lg:px-20 lg:py-4 lg:flex-row lg:justify-between`}
    >
      <div className="p-3 flex justify-between">
        <Image src="/logo.svg" alt="logo" width={120} height={50} />
        <div className="flex lg:hidden">
          <Button name={<GiHamburgerMenu color="#0C2356" size="24px"/>} styles={styles} />
        </div>
      </div>
      <nav className="hidden flex-col bg-slate-500 items-center lg:flex lg:flex-row lg:items-center lg:bg-inherit">
        <span className="my-4 lg:mr-10 text-white uppercase">
          <Link href="https://app.smartcomplyapp.com/auth/login">Sign in</Link>
        </span>
        <span className="my-4 lg:mr-10 text-white uppercase">
          <Link href="https://app.smartcomplyapp.com/auth/login">Blog</Link>
        </span>
        <Button name="Book Demo" styles={styles?.button} />
      </nav>
    </header>
  );
}
