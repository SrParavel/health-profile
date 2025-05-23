import type { HTMLAttributes } from "react";

interface DoctorProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Doctor({ children, className, ...props }: DoctorProps) {
  return (
    <section
      {...props}
      className={`px-6 flex items-end gap-8 border-t-gray-200 border-t-2 text-gray-400 hover:text-gray-800 transition duration-300 ${className}`}
    >
      <img className="h-28" src="doctor.png" alt="doctor" />
      <div className="h-32 py-4 flex items-center">{children}</div>
    </section>
  );
}

export default Doctor;
