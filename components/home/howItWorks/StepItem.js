import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import styles from "styles/Home.module.css";

const cardVariants = {
  offscreen: {
    y: -40,
    scale: 0.5
  },
  onscreen: {
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.8
    }
  }
};

const StepItem = props => {
  const { title, image, description, index, container } = props;
  return (
    <motion.article
      className="grid grid-cols-1 lg:grid-cols-2 items-center flex-col justify-center lg:justify-between lg:flex-row relative pt-10 lg:pt-20 mt-24 p-10 lg:p-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.9, root: container }}
      variants={cardVariants}
    >
      <span
        className={`absolute top-0 left-0 text-9xl ${styles.stepNumber} font-extrabold`}
      >
        {index}
      </span>
      <div className="mx-auto lg:my-10 relative z-10 flex justify-center items-center max-w-sm">
        <img src={image} alt={title} />
      </div>
      <div className="text-center lg:text-left  max-w-lg">
        <h2 className="capitalize text-2xl md:text-3xl my-5 font-bold">
          {title}
        </h2>
        <p className="lg:text-2xl text-base">{description}</p>
      </div>
    </motion.article>
  );
};

export default StepItem;
