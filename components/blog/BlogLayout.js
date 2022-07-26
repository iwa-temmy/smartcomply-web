import React from "react";
import { motion } from "framer-motion";

import BlogFooter from "./BlogFooter";
import HeadComponent from "../HeadComponent";
import BlogHeader from "./BlogHeader";

import styles from "styles/BlogLayout.module.css";

const BlogLayout = props => {
  const { children, title } = props;
  return (
    <motion.div
      className={styles.bloglayout}
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      transition={{ duration: 0.8 }}
    >
      <HeadComponent title={title} />
      <BlogHeader />
      {children}
      <BlogFooter />
    </motion.div>
  );
};

export default BlogLayout;
