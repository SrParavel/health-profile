import Label from "./Label";
import { FaCheck } from "react-icons/fa";

type Props = {
  label: string;
  description?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function ToggleButton({ label, description, ...rest }: Props) {
  const { name, checked } = rest;
  return (
    <Label
      htmlFor={name}
      className={`p-4 border border-gray-300  hover:cursor-pointer rounded-md flex gap-4 justify-between items-center ${
        checked ? "ring ring-green-500 bg-green-50" : "hover:bg-gray-100"
      }`}
    >
      <div className="h-full flex flex-col grow">
        {label}
        <p className="text-xs text-gray-400 font-light">{description}</p>
      </div>
      <span className={`${checked ? "bg-green-500" : "bg-gray-200"} p-1 flex items-center justify-center rounded-full`}>
        <FaCheck className="w-3 h-3 fill-gray-50"></FaCheck>
      </span>
      <input type="checkbox" {...rest} id={name} className="sr-only" />
    </Label>
  );
}

export default ToggleButton;
