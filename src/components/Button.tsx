import * as React from "react";

type Variant = "secondary";

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: Variant;
}

export const Button: React.FC<ButtonProps> = ({ onClick, label, variant }) => {
  const className = variant ? "secondary-button" : "button";
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
