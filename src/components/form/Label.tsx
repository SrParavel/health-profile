import type React from "react";

type Props = {
  children?: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({ children, ...rest }: Props) {
  return (
    <label {...rest} className="text-md text-gray-800 font-semibold px-4">
      {children}
    </label>
  );
}

export default Label;
