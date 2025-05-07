import type React from "react";

type Props = {
  children?: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({ children, ...rest }: Props) {
  const { className } = rest;

  return (
    <label {...rest} className={`text-sm text-gray-800 font-semibold px-4 ${className}`}>
      {children}
    </label>
  );
}

export default Label;
