import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import styles from "../../../styles/Home.module.css";
import Button from "../../button/Button";
import FeatureItem from "./FeatureItem";
import PartnerLogo from "./PartnerLogo";

import { features } from "data";

const Features = () => {
  // animation controls
  const imageControls = useAnimation();

  // animation functions
  const handleImageAnimations = () => {
    const onEnterViewport = () => {
      imageControls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "tween",
          duration: 0.8
        }
      });
    };
    const onLeaveViewport = entry => {
      const y = entry?.boundingClientRect?.y > 0 ? "96px" : "-96px";
      imageControls.start({
        opacity: 0,
        y,
        x: "-10vh",
        transition: {
          type: "tween",
          duration: 0.8
        }
      });
    };
    return { onEnterViewport, onLeaveViewport };
  };
  return (
    <section className="px-8 py-8 font-semibold md:py-20 md:px-4 container">
      <motion.h3
        className={`${styles.infrastructure_description} text-center text-lg font-medium md:text-xl`}
        initial={{ opacity: 0, x: "-5vw" }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
            duration: 0.8
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
        className="flex justify-center md:py-10"
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
      <div className="flex flex-col justify-between items-center lg:flex-row py-16">
        <div className="w-full sm:w-11/12 sm:mr-10 pb-5 text-center sm:text-left">
          <motion.p
            className={`${styles.infrastructure_description} my-8 text-lg sm:text-xl font-bold leading-tight`}
            initial={{ opacity: 0, x: "-10vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your all-in-one compliance solution suite helping you consolidate
            your compliance process end-to-end at a very affordable rate with
            monthly spaced payment.
          </motion.p>
          <motion.p
            className={`mt-9 mb-5 text-lg sm:text-base font-medium`}
            initial={{ opacity: 0, x: "-10vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Find out why smart businesses trust us
          </motion.p>

          <motion.div
            className="flex justify-center sm:justify-start"
            initial={{ opacity: 0, x: "-10vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              name="schedule a free demo"
              styles={styles?.infrastructureButton}
            />
          </motion.div>
        </div>
        <div className="w-full grid-cols-1 grid sm:grid-cols-2 justify-items-center justify-center">
          {features.map((item, index) => (
            <FeatureItem
              icon={<item.Icon />}
              text={item.text}
              key={item.id}
              index={(index + 1) / 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
