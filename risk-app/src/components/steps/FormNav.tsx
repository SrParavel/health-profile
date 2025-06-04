import type { HtmlHTMLAttributes } from "react";
import type { FormStep } from "../../types/FormStep";

interface FormNavProps extends HtmlHTMLAttributes<HTMLElement> {
  step: number;
  steps: FormStep[];
  setStep: (index: number) => void;
}

function FormNav({ step, steps, setStep, className, ...props }: FormNavProps) {
  return (
    <nav {...props} className={` px-6 py-4 border-r border-r-gray-300 ${className}`}>
      <ol className="flex flex-col gap-4">
        {steps.map((stepItem, index) => {
          const isActive = index === step;
          const isCompleted = index < step;
          const isPending = index > step;

          const activeClass = isActive && "style-accent text-on-accent";
          const completedClass = isCompleted && "style-muted text-on-muted";
          const pendingClass = isPending && "style-surface text-on-surface";

          const { title, icon: Icon } = stepItem;

          return (
            <li
              key={index}
              className={`actions-button shape-sm font-semibold flex gap-2 items-center ${activeClass} ${completedClass} ${pendingClass}`}
              onClick={() => {
                setStep(index);
              }}
            >
              <Icon className="size-5 stroke-2"></Icon>
              {title}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default FormNav;
