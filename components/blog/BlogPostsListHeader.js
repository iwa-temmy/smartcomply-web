import React from "react";

// icons
import { BiSearch } from "react-icons/bi";
import { GrTextAlignLeft } from "react-icons/gr";

import styles from "styles/BlogLayout.module.css";

const BlogPostsListHeader = () => {
  return (
    <>
      <header className="hidden md:flex justify-between items-center px-10 md:px-20">
        <h2 className={`uppercase text-lg font-medium ${styles.primaryText}`}>
          latest blog posts
        </h2>
        <div className={`flex justify-end items-center`}>
          <select name="categories" id="categories" className="outline-none">
            <option value="" disabled>
              Categories
            </option>
            <option value="option1">Option 1</option>
            <option value="Option2">Option 2</option>
          </select>
          <SearchInput />
        </div>
      </header>
      <header className="md:hidden">
        <div className={`filter overflow-hidden ${styles.smScreenBlogNav}`}>
          <div
            className={`topbar flex justify-between items-center px-5 py-5 `}
          >
            <button
              className={`${styles.primaryText} uppercase font-medium flex items-center text-xl`}
            >
              <GrTextAlignLeft className="text-2xl" />
              <span className="ml-2">categories</span>
            </button>
            <button>
              <BiSearch className={`text-2xl ${styles.primaryText}`} />
            </button>
          </div>
          <div className="dropdown px-5">
            <div className={`divider ${styles.divider}`} />
            <nav className="grid  justify-start">
              <DropdownItem label="All Post" />
              <DropdownItem label="Option 1" />
              <DropdownItem label="Option 2" />
              <DropdownItem label="Option 3" />
              <DropdownItem label="Option 4" />
              <DropdownItem label="Option 5" />
            </nav>
          </div>
        </div>
        <h2
          className={`uppercase text-center mt-8 text-2xl font-medium ${styles.primaryText}`}
        >
          latest blog posts
        </h2>
      </header>
    </>
  );
};

const SearchInput = () => {
  return (
    <label
      htmlFor="search"
      className="flex items-center border rounded-lg overflow-hidden p-2 border-gray-400 ml-5"
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="outline-none"
      />
      <BiSearch className="text-gray-400 text-2xl" />
    </label>
  );
};
const DropdownItem = props => {
  const { label } = props;
  return <button className="w-full py-2 uppercase">{label}</button>;
};

export default BlogPostsListHeader;
