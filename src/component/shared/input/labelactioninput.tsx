import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  wrapperClass?: string;
  className?: string;
  err?: boolean;
}

const Index: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  wrapperClass,
  className,
  err,
  ...rest
}) => {
  return (
    <div className={`floating-label-group ${wrapperClass}`}>
      <input
        type="text"
        id={name}
        aria-invalid={error ? "true" : "false"}
        {...register(name)}
        {...rest}
        className={
          err
            ? `form-control bg-input rounded-[100px]  w-full focus:outline-none border-solid border-red ${className}`
            : `form-control bg-input rounded-[100px] border-none w-full focus:outline-none ${className}`
        }
        autoComplete="off"
        required
      />
      <label className="floating-label text-gray-40 text-Body16  cursor-text">
        {label}
      </label>

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
