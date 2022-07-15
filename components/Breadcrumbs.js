import React from "react";
import Link from "next/link";

import styles from "styles/BlogLayout.module.css";

const Breadcrumbs = props => {
  const { routes } = props;
  return (
    <span className={`flex items-center mb-8 ${styles.primaryText}`}>
      {routes.map((route, index) => (
        <span key={index} className="mr-2 font-medium">
          {index < routes.length - 1 ? (
            <>
              <Link href={route.href}>
                <a className="mr-2">{route.label}</a>
              </Link>
              <span>/</span>
            </>
          ) : (
            <span className="mr-2 text-black">{route.label}</span>
          )}
        </span>
      ))}
    </span>
  );
};

export default Breadcrumbs;
