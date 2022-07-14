import React, { useEffect, useRef, useState } from "react";
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const title = elementRef.current.querySelector("h3");
    const desc = elementRef.current.querySelector("p");
    if (title) {
      setTitle(title.textContent);
    }
    if (desc) {
      setDescription(desc.textContent);
    }
  }, []);
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: post.description }}
        className="-z-10 absolute opacity-0 h-0 overflow-hidden"
        ref={elementRef}
      />
      <div className={`h-full grid content-start ${styles.blogCard}`}>
        <img
          src={getImageURL(post.thumbnail) || "/blogImage.png"}
          className="w-full block h-56 object-cover "
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
    </>
  );
};

export default BlogPostCard;
