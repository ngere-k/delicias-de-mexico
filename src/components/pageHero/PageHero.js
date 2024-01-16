import React from "react";

// styles
import "./PageHero.scss";

const PageHero = ({ subheading, heading }) => {
  return (
    <div className="page-hero reservation__hero">
      <div className="page-hero__content">
        <span className="subheading font-size-sm">{subheading}</span>
        <h2 className="page-hero__heading">{heading}</h2>
      </div>
    </div>
  );
};

export default PageHero;
