import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Button from "../../button/Button";
import PartnerLogo from "./PartnerLogo";

const Features = () => {
  // animation controls
  const imageControls = useAnimation();

  // animation functions
  const handleImageAnimations = () => {
    const onEnterViewport = () => {
      console.log("entering viewport");
      imageControls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "tween",
          duration: 1
        }
      });
    };
    const onLeaveViewport = entry => {
      console.log("leaving viewport");
      const y = entry?.boundingClientRect?.y > 0 ? "96px" : "-96px";
      imageControls.start({
        opacity: 0,
        y,
        x: "-10vh",
        transition: {
          type: "tween",
          duration: 1
        }
      });
    };
    return { onEnterViewport, onLeaveViewport };
  };
  return (
    <section className="px-8 py-8 font-semibold lg:px-20 container">
      <motion.h3
        className={`${styles.infrastructure_description} text-center text-lg font-medium md:text-xl`}
        initial={{ opacity: 0, x: "-5vw" }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
            duration: 1
          }
        }}
      >
        Fast-growing brands that trust us
      </motion.h3>
      <div className="w-full">
        <div className="flex justify-center items-center flex-wrap">
          <PartnerLogo
            src="/simplify-logo.svg"
            alt="simplify"
            animationDelay={0}
          />
          <PartnerLogo
            src="/appzone-logo.svg"
            alt="appzone"
            animationDelay={0.5}
          />
          <PartnerLogo
            src="/pennytree-logo.svg"
            alt="pennytree"
            animationDelay={1}
          />
          <PartnerLogo src="/3line-logo.svg" alt="3line" animationDelay={1.5} />
          <PartnerLogo
            src="/swiftend-logo.svg"
            alt="swiftend"
            animationDelay={2}
          />
        </div>
      </div>
      <motion.div
        className="flex justify-center border relative"
        initial={{ opacity: 0, y: "96px", x: "-10vh" }}
        animate={imageControls}
        onViewportLeave={handleImageAnimations().onLeaveViewport}
        onViewportEnter={handleImageAnimations().onEnterViewport}
      >
        <Image
          src="/dashboard.svg"
          alt="SmartcomplyApp dashboard"
          width="800"
          height="600"
        />
      </motion.div>
      <div className="flex flex-col justify-between items-center lg:flex-row">
        <div className="w-full lg:w-11/12 lg:mr-10">
          <p
            className={`${styles.infrastructure_description} my-8 text-lg lg:text-xl`}
          >
            Your all-in-one compliance solution suite helping you consolidate
            your compliance process end-to-end at a very affordable rate with
            monthly spaced payment.
          </p>
          <p className={`my-8 text-lg lg:text-xl font-semibold`}>
            Find out why smart businesses trust us
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              name="schedule a free demo"
              styles={styles?.infrastructureButton}
            />
          </div>
        </div>
        <div className="w-11/12">
          <Image src="/features.svg" width="700" alt="features" height="500" />
        </div>
      </div>
    </section>
  );
};

export default Features;
