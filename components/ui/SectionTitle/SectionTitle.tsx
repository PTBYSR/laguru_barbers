import React from "react";

const SectionTitle = ({ children, variant }) => {
  return (
    <h1
      className={`kanit text-4xl font-bold uppercase leading-9 md:text-5xl ${
        variant || "sec"
      }`}
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
