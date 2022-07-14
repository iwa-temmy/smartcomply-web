import React from "react";

import BlogDropdownItem from "./BlogDropdownItem";

import styles from "styles/BlogLayout.module.css";

const BlogDropdown = props => {
  const { defaultValue, fields, values, open, onItemSelect } = props;

  const handleItemSelect = value => {
    if (!value) {
      // if the default value is picked, reset the array
      onItemSelect([]);
    } else if (values.includes(value)) {
      // if the values exists, remove it
      onItemSelect(values.filter(val => val != value));
    } else {
      // else add it to the selected ones
      onItemSelect([...values, value]);
    }
  };

  return (
    <div
      className={`dropdown px-5 transition-all duration-500 ${
        open ? "opacity-100" : "opacity-25"
      }`}
    >
      <div className={`divider ${styles.divider}`} />
      <nav className="grid py-2 h-64 overflow-hidden overflow-y-auto">
        <BlogDropdownItem
          label={defaultValue}
          value=""
          selected={!values.length}
          onSelect={handleItemSelect}
        />
        {fields?.map((field, key) => {
          const selected = values.includes(field);
          return (
            <BlogDropdownItem
              label={field}
              key={key}
              value={field}
              selected={selected}
              onSelect={handleItemSelect}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default BlogDropdown;
