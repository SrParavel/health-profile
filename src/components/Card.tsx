import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Card({ children, className, ...props }: CardProps) {
  return (
    <div {...props} className={`shadow-lg bg-white rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export default Card;
