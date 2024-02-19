import React from "react";

// styles
import "./SectionError.scss";

const SectionError = ({ error }) => {
  return (
    <div className="section section-center text-center">
      <h2 className="error-api">{error}</h2>
    </div>
  );
};

export default SectionError;
