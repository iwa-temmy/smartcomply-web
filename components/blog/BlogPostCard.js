import React from "react";
import Image from "next/image";

// utils
import { truncateText } from "utils";

import styles from "styles/BlogLayout.module.css";

const BlogPostCard = () => {
  return (
    <div>
      <Image
        layout="responsive"
        src="/blogImage.png"
        height={280}
        width={280}
        className="w-full block"
      />
      <div
        className={`text-sm flex justify-between font-semibold mt-2 mb-1 ${styles.primaryText}`}
      >
        <span className="category">Compliance</span>
        <span>May 17, 2022</span>
      </div>
      <h4 className="font-semibold text-lg">
        Aliqua id fugiat nostrud irure ex duis ea quis id .
      </h4>
      <span className={`mt-2 mr-2`}>
        {truncateText(
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit",
          70
        )}
      </span>
      <a href="#" className={styles.primaryText}>
        read more
      </a>
    </div>
  );
};

export default BlogPostCard;
