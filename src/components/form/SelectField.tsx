import type React from "react";
import type { CategoricalOption } from "../../types/fields";
import Label from "./Label";

type Props = {
  label: string;
  options: CategoricalOption[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

function SelectField({ label, options, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-1 ">
      <Label>{label}</Label>
      <select
        className="px-3 py-2 text-sm border border-gray-300 rounded-md outline-none cursor-pointer focus:ring-green-500 focus:ring"
        {...rest}
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
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
