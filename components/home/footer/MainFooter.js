import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function MainFooter() {
  return (
    <footer className="flex flex-col lg:justify-between lg:flex-row items-center border-t border-black my-7 pt-5 lg:px-20">
      <span>&copy; Copyright SmartComply 2022</span>
      <div className="flex mt-4 lg:mt-0">
        <SocialLink href="https://twitter.com/smartcomplyapp?s=21&t=plrz_5SKZo_eZz0EFKLRLg">
          <BsTwitter />
        </SocialLink>
        <SocialLink href="https://m.facebook.com/smartcomplyapp/">
          <FaFacebookF />
        </SocialLink>
        <SocialLink href="https://instagram.com/smartcomplyapp?igshid=YmMyMTA2M2Y=">
          <AiFillInstagram />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/company/smartcomplyapp/">
          <FaLinkedinIn />
        </SocialLink>
      </div>
    </footer>
  );
}

const SocialLink = props => {
  const { children, href } = props;
  return (
    <a
      href={href}
      className="m-2 text-white text-xl border primary-text primary-border p-1 rounded-lg"
    >
      {children}
    </a>
  );
};
