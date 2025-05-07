import type React from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function SecondaryButton(props: Props) {
  const { children, ...rest } = props;
  return (
    <button
      className="h-8 w-28 border border-gray-200  font-semibold text-gray-400 text-sm hover:bg-gray-100 rounded-md cursor-pointer transition duration-300"
      {...rest}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
