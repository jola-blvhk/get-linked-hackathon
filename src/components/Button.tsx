import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`px-12 py-2 text-center rounded-sm  transition duration-700 ease-in-out text-white bg-gradient-pink ${className}`}
    >
      {children}
    </button>
  );
};
