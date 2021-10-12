import React from "react";

const Button = ({ children, className, clickCart }) => {
  return <button className={`button ${className}`}>{children}</button>;
};

export default Button;
