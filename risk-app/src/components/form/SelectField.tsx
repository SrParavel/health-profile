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
        className={`shape-base style-muted actions-input text-sm ${
          rest.value == 0 && "text-gray-400"
        }`}
        {...rest}
      >
        <option value="" disabled hidden>
          Selecciona una opción
        </option>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="text-sm text-on-surface"
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
