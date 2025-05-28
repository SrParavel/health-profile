import type React from "react";

type Props = {
  children?: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({ children, ...rest }: Props) {
  const { className } = rest;

  return (
    <label {...rest} className={`text-base text-gray-800 font-bold px-4 ${className}`}>
      {children}
    </label>
  );
}

export default Label;
