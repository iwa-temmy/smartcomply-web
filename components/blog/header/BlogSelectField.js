import React, { useState } from "react";

// icons
import { BiChevronDown } from "react-icons/bi";

import styles from "styles/BlogLayout.module.css";
import { capitalizeText, replaceAllInstance } from "utils";

const BlogSelectField = props => {
  const { fields, defaultValue, values, handleSelect } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const handleOptionSelect = value => {
    if (!value) {
      // if the default value is picked, reset the array
      handleSelect([]);
    } else if (values.includes(value)) {
      // if the values exists, remove it
      handleSelect(values.filter(val => val != value));
    } else {
      // else add it to the selected ones
      handleSelect([...values, value]);
    }
  };
  return (
    <div
      name="categories"
      id="categories"
      className={`outline-none p-2 relative ${styles.customSelect}`}
    >
      <button
        className="flex justify-between items-center select-none outline-none h-10"
        onClick={openMenu}
      >
        <p className="text-ellipsis text-left overflow-hidden w-36 whitespace-nowrap text-gray-500 flex items-stretch h-3/5">
          {values.length
            ? values.map((value, index) => {
                const label = replaceAllInstance("-", " ", value);
                return (
                  <small
                    className="mr-1 px-2 flex justify-center items-center bg-slate-50 rounded-2xl h-full capitalize"
                    key={index}
                  >
                    {label}
                  </small>
                );
              })
            : "Select a category"}
        </p>
        <BiChevronDown className="ml-2 text-xl font-bold" />
      </button>
      <div
        className={`menu absolute top-full right-0 z-10 w-fit overflow-hidden shadow-xl  ${
          menuOpen ? "max-h-52" : "max-h-0"
        } transition-all duration-500`}
      >
        <div
          className={`scrim fixed top-0 left-0 w-full h-full ${
            menuOpen ? "" : "hidden"
          }`}
          onClick={closeMenu}
        />
        <div
          className={`options grid z-50 relative bg-white rounded py-1 w-fit min-w-full  h-52 overflow-y-auto`}
        >
          <SelectOption
            label={defaultValue}
            value=""
            onSelect={handleOptionSelect}
            active={!values.length}
          />
          {fields.map((field, key) => {
            const active = values.includes(field);
            return (
              <SelectOption
                label={field}
                value={field}
                onSelect={handleOptionSelect}
                key={key}
                active={active}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SelectOption = props => {
  const { label, active, value, onSelect } = props;
  return (
    <button
      className={`outline-none text-left py-1 px-3 pr-5  hover:bg-slate-50 active:bg-slate-100${
        active ? "bg-slate-100 font-semibold" : ""
      } whitespace-nowrap capitalize`}
      type="button"
      onClick={() => onSelect(value)}
    >
      {replaceAllInstance("-", " ", label)}
    </button>
  );
};

export default BlogSelectField;
