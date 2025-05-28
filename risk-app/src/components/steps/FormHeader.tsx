import type React from "react";

interface StepHeaderProps extends React.HTMLAttributes<HTMLElement> {
  step: number;
  maxSteps: number;
  stepTitle: string;
  stepDescription: string;
}

function FormHeader({ step, maxSteps, stepTitle, stepDescription, className, ...props }: StepHeaderProps) {
  return (
    <header key={step} className={`fade-in px-8 py-4 border-b-2 border-gray-200 ${className}`} {...props}>
      <div className="text-xs text-gray-400">
        Etapa {step + 1}/{maxSteps}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{stepTitle}</h3>
      <p className="text-sm text-gray-500">{stepDescription}</p>
    </header>
  );
}

export default FormHeader;
