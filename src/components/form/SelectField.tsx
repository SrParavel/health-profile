import type React from "react";
import type { Option } from "../../types/Option";
import Label from "./Label";

type Props = {
  label: string;
  options: Option[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

function SelectField({ label, options, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-2 ">
      <Label>{label}</Label>
      <select className="h-10 w-full border-2 px-3 border-gray-300 rounded-md outline-none text-sm" {...rest}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-sm">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
