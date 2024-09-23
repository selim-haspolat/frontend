import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`bg-primary text-white px-6 py-2 rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default Button;
