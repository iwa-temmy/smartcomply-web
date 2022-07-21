import React from "react";


// icons
import { BiSearch } from "react-icons/bi";
import styles from "styles/BlogLayout.module.css";

const BlogSearchInput = props => {
  const { className, onChange, value } = props;
  return (
    <label
      htmlFor="search"
      className={`flex items-center border rounded-lg overflow-hidden p-2 border-gray-400 ml-5 bg-transparent w-full ${className}`}
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className={`w-full bg-transparent border-0 outline-0 ${styles.searchInput}`}
        onChange={onChange}
        value={value}
      />
      <BiSearch className="text-gray-400 text-2xl" />
    </label>
  );
};

export default BlogSearchInput;
