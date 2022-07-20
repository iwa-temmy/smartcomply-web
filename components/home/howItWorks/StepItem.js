import Image from "next/image";
import React from "react";

import styles from "styles/Home.module.css";

const StepItem = props => {
  const { title, image, description, index } = props;
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 items-center flex-col justify-center lg:justify-between lg:flex-row relative pt-20 mt-24 p-4">
      <span
        className={`absolute top-0 left-0 text-9xl ${styles.stepNumber} font-extrabold`}
      >
        {index}
      </span>
      <div className="mx-auto my-10 relative z-10 flex justify-center items-center max-w-sm">
        <img src={image} alt={title} />
      </div>
      <div className="text-center lg:text-left  max-w-lg">
        <h2 className="capitalize text-3xl my-5">{title}</h2>
        <p className="">{description}</p>
      </div>
    </article>
  );
};

export default StepItem;
