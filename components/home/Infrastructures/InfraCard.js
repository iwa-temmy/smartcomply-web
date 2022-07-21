import React from "react";
import { motion } from "framer-motion";

import styles from "styles/Home.module.css";

const InfraCard = props => {
  const { image, index } = props;
  return (
    <motion.div
      className={`${styles.infraCard} rounded-3xl shadow-lg flex justify-center items-center h-44 m-3 p-8`}
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 * index }}
    >
      <img src={image} className="max-w-full" />
    </motion.div>
  );
};

export default InfraCard;
