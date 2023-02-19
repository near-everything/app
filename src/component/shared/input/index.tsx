import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
}

const Index: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  wrapperClass,
  className,
  ...rest
}) => {
  return (
    <div className={wrapperClass}>
      {label && (
        <label
          htmlFor={name}
          className=" flex justify-start w-full mb-[13px] text-[#4A4844] text-[14px] font-medium leading-[14px]"
        >
          {label}
        </label>
      )}
      <input
        aria-invalid={error ? "true" : "false"}
        {...register(name)}
        {...rest}
        className={` border-none w-full focus:outline-none outline-none focus:border-none focus:shadow-none shadow-none ${className}`}
      />
      {error && (
        <span
          className="text-[color:var(--btn-color-1)]  font-medium font_size_10 leading-[12px] mt_10"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Index;
