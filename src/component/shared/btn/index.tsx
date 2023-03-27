import React from "react";

type Props = {
  type: "submit" | "button" | "reset";
  disabled: boolean;
  className?: string;
  size: `L` | `M` | `S`;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
};
type PropsInter = {
  type: "submit" | "button" | "reset";
  disabled: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
};
type Propssubmit = {
  disabled: boolean;
  className: string;
  children: JSX.Element;
};
const sizes = {
  L: "max-w-[343px]",
  M: "max-w-[261px]",
  S: "max-w-[241px]",
};
const sizess = {
  L: "max-w-[343px]",
  M: "max-w-[261px]",
  S: "max-w-[81px]",
};

function MainBtn({
  type,
  onClick,
  disabled,
  className,
  size,
  children,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button text-Button16 py-[16px] cursor-pointer bg-white  text-black rounded-[100px] ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
export { MainBtn };
function Secondarywhite({
  type,
  onClick,
  disabled,
  className,
  size,
  children,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button cursor-pointer text-white text-Button16 py-[16px] bg-white20  rounded-[100px] ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
export { Secondarywhite };
function Secondaryblack({
  type,
  onClick,
  disabled,
  className,
  size,
  children,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button text-white cursor-pointer text-Button16 py-[16px] bg-black80  rounded-[100px] ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
export { Secondaryblack };
function SecondaryBtn({ type, onClick, disabled, className, children }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button bg-transparent cursor-pointer text-Button16 py-[16px] text-white rounded-[100px] ${className}`}
    >
      {children}
    </button>
  );
}
export { SecondaryBtn };
function Interactionmain({
  type,
  onClick,
  disabled,
  className,
  children,
}: PropsInter) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button active:bg-gray-20 cursor-pointer bg-white text-Button16 text-black rounded-[100px] px-[24px] py-[16px] ${className}`}
    >
      {children}
    </button>
  );
}
export { Interactionmain };
function InteractionSecondarywhite({
  type,
  onClick,
  disabled,
  className,
  children,
}: PropsInter) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button bg-white20 cursor-pointer active:bg-white80 text-Button16 text-white rounded-[100px] px-[24px] py-[16px] ${className}`}
    >
      {children}
    </button>
  );
}
export { InteractionSecondarywhite };
function InteractionSecondaryblack({
  type,
  onClick,
  disabled,
  className,
  children,
}: PropsInter) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button bg-black80 cursor-pointer active:bg-black20 text-Button16 text-white rounded-[100px] px-[24px] py-[16px] ${className}`}
    >
      {children}
    </button>
  );
}
export { InteractionSecondaryblack };
function Interactiontetriary({
  type,
  onClick,
  disabled,
  className,
  children,
}: PropsInter) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button bg-transparent cursor-pointer active:bg-white20 text-Button16 text-white rounded-[100px] px-[24px] py-[16px] ${className}`}
    >
      {children}
    </button>
  );
}
export { Interactiontetriary };
function Iconmain({
  type,
  onClick,
  disabled,
  className,
  children,
}: PropsInter) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-white rounded-[50%] cursor-pointer text-black px-[20px] py-[22px] ${className}`}
    >
      {children}
    </button>
  );
}
export { Iconmain };
function Iconsecondarywhite({
  type,
  onClick,
  disabled,
  className,
  children,
}: PropsInter) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-white20 rounded-[50%] cursor-pointer active:bg-white80 text-white  ${className}`}
    >
      {children}
    </button>
  );
}
export { Iconsecondarywhite };
function Iconsecondaryblack({
  type,
  onClick,
  disabled,
  className,
  children,
}: PropsInter) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-black80 rounded-[50%] cursor-pointer active:bg-black20 text-white px-[20px] py-[22px] ${className}`}
    >
      {children}
    </button>
  );
}
export { Iconsecondaryblack };
function Icontetriary({
  type,
  onClick,
  disabled,
  className,
  children,
}: PropsInter) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` text-Button bg-transparent cursor-pointer active:bg-white20  text-white rounded-[50%]  px-[20px] py-[22px] ${className}`}
    >
      {children}
    </button>
  );
}
export { Icontetriary };
