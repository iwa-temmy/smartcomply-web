import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

// utils
import {
  truncateText,
  getImageURL,
  replaceAllInstance,
  getDateFromDateTimeString
} from "utils";

import styles from "styles/BlogLayout.module.css";

const BlogPostCard = props => {
  const { post, id } = props;

  // hooks
  const elementRef = useRef();
  const animationRef = useRef();
  const animationControl = useAnimation();

  // state
  const [description, setDescription] = useState("");
  const [showAnimation, setAnimation] = useState(true);

  // functions
  const handleCardAnimation = entries => {
    const entry = entries[0];
    const inView = entry.isIntersecting;
    if (!showAnimation) return;

    if (inView) {
      animationControl.start({
        y: "0",
        opacity: 1,
        transition: { type: "tween", duration: 1 }
      });
      setAnimation(false);
    } else {
      const y = entry?.boundingClientRect?.y > 0 ? "5vh" : "-5vh";
      animationControl.start({
        y,
        opacity: 0,
        transition: { type: "tween" }
      });
    }
  };

  useEffect(() => {
    const desc = elementRef.current.querySelector("p");

    if (desc) {
      setDescription(desc.textContent);
    }
    // intersection observer
    const animationObserver = new IntersectionObserver(handleCardAnimation, {});
    animationObserver.observe(animationRef.current);
  }, []);
  return (
    <>
      <motion.span
        animate={animationControl}
        ref={animationRef}
        initial={{ y: "5vh", opacity: 0 }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: post.description }}
          className="-z-10 absolute opacity-0 h-0 overflow-hidden"
          ref={elementRef}
        />
        <div className={`h-full grid content-start ${styles.blogCard}`}>
          <img
            src={getImageURL(post.thumbnail) || "/blogImage.png"}
            className="w-full block h-56 object-cover "
            alt="post image"
          />
          <div
            className={`text-xs flex justify-between font-semibold mt-2 mb-1 ${styles.primaryText}`}
          >
            <span className="category capitalize mr-3">
              {replaceAllInstance("-", " ", post.categories?.[0])}
            </span>
            <span className="text-right">
              {getDateFromDateTimeString(post.pubDate)}
            </span>
          </div>
          <h4 className="font-semibold text-lg leading-5 py-2">{post.title}</h4>
          <span className="self-end">
            <span className={`mt-2 mr-2`}>{truncateText(description, 70)}</span>
            <Link href="/blog/posts/[id]" as={`/blog/posts/${id}`}>
              <a className={styles.primaryText}>read more</a>
            </Link>
          </span>
        </div>
      </motion.span>
    </>
  );
};

export default BlogPostCard;
