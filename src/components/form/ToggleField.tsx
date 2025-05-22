import Label from "./Label";
import { FaCheck } from "react-icons/fa";

type Props = {
  label: string;
  description?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function ToggleField({ label, description, ...rest }: Props) {
  const { name, checked } = rest;
  return (
    <Label
      htmlFor={name}
      className={`flex items-center gap-4 shape-lg actions-button ${
        checked ? "style-selected" : "style-muted"
      }`}
    >
      <div className="h-full flex flex-col grow">
        {label}
        <p className="text-sm text-on-muted-secondary font-medium">
          {description}
        </p>
      </div>
      <span className={`bg-white rounded-full p-2`}>
        <FaCheck
          className={`size-3 ${checked ? "text-accent" : "text-muted"}`}
        ></FaCheck>
      </span>
      <input type="checkbox" {...rest} id={name} className="sr-only" />
    </Label>
  );
}

export default ToggleField;
