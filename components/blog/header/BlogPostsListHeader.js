import React, { useState } from "react";

// blog compoenents
import BlogSearchInput from "./BlogSearchInput";
import BlogSelectField from "./BlogSelectField";

// icons
import { BiSearch } from "react-icons/bi";
import { GrTextAlignLeft } from "react-icons/gr";
import { VscClose } from "react-icons/vsc";

import styles from "styles/BlogLayout.module.css";
import BlogDropdown from "./BlogDropdown";

const BlogPostsListHeader = props => {
  const { filters, setFilters, allCategories } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // functions
  const handleSearchFilter = e => {
    const { value } = e.target;
    setFilters(filter => ({ ...filter, name: value }));
  };
  const handleCategoryFilter = values => {
    setFilters(filter => ({
      ...filter,
      categories: values
    }));
  };
  const toggleDropdown = () => {
    setDropdownOpen(open => !open);
  };
  const openSearch = () => {
    setDropdownOpen(false);
    setSearchOpen(true);
  };
  const closeSearch = () => setSearchOpen(false);

  return (
    <>
      <header className="hidden md:flex justify-between items-center px-10 md:px-20">
        <h2 className={`uppercase text-lg font-medium ${styles.primaryText}`}>
          latest blog posts
        </h2>
        <div className={`flex justify-end items-center`}>
          <BlogSelectField
            fields={allCategories}
            defaultValue="all posts"
            values={filters.categories}
            handleSelect={handleCategoryFilter}
          />
          <BlogSearchInput onChange={handleSearchFilter} />
        </div>
      </header>
      <header className="md:hidden">
        <div
          className={`filter overflow-hidden transition-all duration-500 ${
            dropdownOpen ? styles.dropdownOpen : "h-16"
          } ${styles.smScreenBlogNav}`}
        >
          <div
            className={`topbar flex justify-between items-center px-5 py-5 relative`}
          >
            <button
              onClick={toggleDropdown}
              className={`${styles.primaryText} uppercase font-medium flex items-center text-xl`}
            >
              <GrTextAlignLeft className="text-2xl" />
              <span className="ml-2">categories</span>
            </button>
            <button onClick={openSearch} value={filters.name}>
              <BiSearch className={`text-2xl ${styles.primaryText}`} />
            </button>
            <div
              className={`absolute w-full top-0 left-0 bottom-0 flex transition-all duration-500 h-full p-2 px-5 flex justify-start items-center ${
                searchOpen
                  ? "top-0 opacity-100"
                  : "top-full  opacity-0 pointer-events-none"
              } ${styles.blueSearchInput}`}
            >
              <BlogSearchInput
                className="ml-0"
                onChange={handleSearchFilter}
                value={filters.name}
              />
              <button onClick={closeSearch}>
                <VscClose className="text-4xl ml-2 font-light" />
              </button>
            </div>
          </div>
          <BlogDropdown
            defaultValue="All Post"
            fields={allCategories}
            values={filters.categories}
            open={dropdownOpen}
            onItemSelect={handleCategoryFilter}
          />
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

export default BlogPostsListHeader;
