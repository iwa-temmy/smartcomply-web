import React, { useState } from "react";
import Spinner from "../Spinner";

import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import styles from "styles/BlogLayout.module.css";

const BlogFooter = () => {
  const [loading, setLoading] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  // input classes
  const inputClasses = "mt-5 border p-3 rounded-lg outline-none w-full";
  return (
    <footer>
      <div
        className={`flex sm:justify-center align-center py-10 px-5 sm:p-20 ${styles.blogNewsLetter}`}
      >
        <div className="content grid sm:justify-center sm:justify-items-center sm:jus grid-cols-1 gap-4 sm:grid-cols-2 sm:max-w-4xl w-full">
          <h1
            className={`text-4xl font-medium max-w-sm sm:font-semibold mt-5 ${styles.primaryText}`}
          >
            Subscribe to our Newsletter
          </h1>
          <form onSubmit={handleSubmit} className="grid w-full">
            <input
              type="text"
              placeholder="First name"
              name="name"
              id="name"
              className={`formField bg-transparent ${inputClasses}`}
            />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
              className={`formField bg-transparent ${inputClasses}`}
            />
            <button
              type="submit"
              className={`text-white capitalize font-semibold flex justify-center items-center ${inputClasses}`}
            >
              {loading && <Spinner size={5} />}
              <span className={`${loading ? "pl-2" : ""} transition-all`}>
                subscribe
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className={`grid p-10 pb-5 ${styles.copyright}`}>
        <span className={styles.divider} />
        <div className="content pt-5 md:py-5 flex justify-between items-center flex-col sm:flex-row">
          <span className="text-white font-light text-sm">
            Copyright SMARTCOMPLY 2022 | All Rights Reserved
          </span>
          <div className="socials flex justify-end items-center mt-5 sm:m-0 ">
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
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ children, href }) => {
  return (
    <a href={href} className="m-2 text-white text-xl">
      {children}
    </a>
  );
};

export default BlogFooter;
