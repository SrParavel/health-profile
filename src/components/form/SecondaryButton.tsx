import type React from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function SecondaryButton(props: Props) {
  const { children, ...rest } = props;
  return (
    <button
      className="h-8 w-28 bg-gray-200 text-gray-400 hover:bg-gray-300 font-semibold rounded-md cursor-pointer transition duration-300"
      {...rest}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
