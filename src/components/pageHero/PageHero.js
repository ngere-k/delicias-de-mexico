import React from "react";

// styles
import "./PageHero.scss";

const PageHero = ({ subheading, heading, heroClass }) => {
  return (
    <div className={`page-hero ${heroClass}`}>
      <div className="page-hero__content">
        <span className="subheading font-size-sm">{subheading}</span>
        <h2 className="page-hero__heading">{heading}</h2>
      </div>
    </div>
  );
};

export default PageHero;
