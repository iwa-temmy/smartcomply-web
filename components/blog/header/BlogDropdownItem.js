import React from "react";

import styles from "styles/BlogLayout.module.css";

const BlogDropdownItem = props => {
  const { label, selected = false, onSelect, value } = props;
  return (
    <button
      className={`w-full py-2 px-2 uppercase text-left ${
        selected ? "font-semibold " + styles.primaryText : ""
      }`}
      onClick={() => onSelect(value)}
    >
      {label}
    </button>
  );
};

export default BlogDropdownItem;
