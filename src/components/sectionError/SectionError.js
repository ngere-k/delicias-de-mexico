import React from "react";

const SectionError = ({ error }) => {
  return (
    <div className="section section-center text-center">
      <h2>{error}</h2>
    </div>
  );
};

export default SectionError;
