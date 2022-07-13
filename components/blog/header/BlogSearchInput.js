import React from "react";

// icons
import { BiSearch } from "react-icons/bi";

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
        className="outline-none w-full bg-transparent"
        onChange={onChange}
        value={value}
      />
      <BiSearch className="text-gray-400 text-2xl" />
    </label>
  );
};

export default BlogSearchInput;
