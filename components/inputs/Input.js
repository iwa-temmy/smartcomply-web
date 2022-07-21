import React from "react";

const Input = ({
  label,
  name,
  type,
  handleInputChange,
  reference,
}) => {
  if (reference) {
    const emailInputRef = reference?.current;
    emailInputRef?.setAttribute(
      "pattern",
      "^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
    );
    emailInputRef?.setAttribute(
      "oninvalid",
      "setCustomValidity('Please enter a business email')"
    );
    emailInputRef?.setAttribute(
      "onchange",
      `try{
              setCustomValidity('')
            }catch(e){
              console.log(error)
            }`
    );
  }

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={label}
        required
        ref={reference ? reference : null}
      />
    </div>
  );
};

export default Input;
