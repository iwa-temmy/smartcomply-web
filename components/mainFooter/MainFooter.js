import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function MainFooter() {
  return (
    <footer className="flex justify-between border-t border-black mt-5 pt-5 px-20">
      <span>&copy; Copyright SmartComply 2022</span>
      <div className="flex">
        <AiOutlineTwitter style={{ color: "0E2C66", height: "18px" }} />
        <FaFacebookF style={{ color: "0E2C66", height: "18px" }} />
        <AiFillInstagram style={{ color: "0E2C66", height: "18px" }} />
        <FaLinkedinIn style={{ color: "0E2C66", height: "18px" }} />
      </div>
    </footer>
  );
}
