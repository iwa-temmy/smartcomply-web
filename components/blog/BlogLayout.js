import React from "react";

import BlogFooter from "./BlogFooter";
import BlogHeadComponent from "./BlogHeadComponent";
import BlogHeader from "./BlogHeader";

import styles from "styles/BlogLayout.module.css";

const BlogLayout = props => {
  const { children, title } = props;
  return (
    <div className={styles.bloglayout}>
      <BlogHeadComponent title={title} />
      <BlogHeader />
      {children}
      <BlogFooter />
    </div>
  );
};

export default BlogLayout;
