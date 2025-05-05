import type React from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function PrimaryButton(props: Props) {
  const { children, ...rest } = props;
  return (
    <button
      className="h-8 w-28 bg-green-500 hover:bg-green-600 text-gray-50 font-semibold rounded-md cursor-pointer transition duration-300"
      {...rest}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
