import React from "react";

type Props = {
  type: "submit" | "button" | "reset";
  disabled: boolean;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
};
type Propssubmit = {
  disabled: boolean;
  className: string;
  children: JSX.Element;
};

function PrimaryBtn({ type, onClick, disabled, className, children }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button bg-white text-blackdark rounded-[100px] ${className}`}
    >
      {children}
    </button>
  );
}
export  { PrimaryBtn };
function SecondaryBtn({ type, onClick, disabled, className, children }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button bg-transparent text-white rounded-[100px] ${className}`}
    >
      {children}
    </button>
  );
}
export  { SecondaryBtn };
