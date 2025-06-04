import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const variants = {
    primary: "style-accent text-on-accent",
    secondary: "style-muted text-on-muted",
  };
  return (
    <button
      className={`flex items-center justify-center gap-2 shape-base actions-button font-bold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
