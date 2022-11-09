import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={
        "flex items-center justify-center rounded-md border border-transparent py-3 text-base font-medium  shadow-sm " +
        props.className
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
