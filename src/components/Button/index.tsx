import React from "react";
import "./style/index.scss";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "default" | "dashed";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "default",
  onClick,
}) => {
  return (
    <button className={`ui-button ui-button-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};
