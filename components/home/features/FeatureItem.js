import React from "react";
import { motion } from "framer-motion";

import styles from "styles/Home.module.css";

const FeatureItem = props => {
  const { icon, text, index } = props;
  return (
    <motion.div
      className={`${styles.featureItem} m-3 primary-border primary-text flex justify-start items-center rounded-lg border p-4 justify-center font-medium md:text-base text-sm h-28`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        bounce: 0.45,
        duration: 1.5,
        delay: index * 0.3
      }}
    >
      <div className="flex justify-center items-start gap-3">
        <span
          className={`mt-1 border rounded flex items-center justify-center text-xl ${styles.featureIcon}`}
        >
          {icon}
        </span>
        <span>{text}</span>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
