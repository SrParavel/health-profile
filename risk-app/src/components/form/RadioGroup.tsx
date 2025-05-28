import type React from "react";
import type { CategoricalOption } from "../../types/fields";
import Label from "./Label";

type Props = {
  label: string;
  options: CategoricalOption[];
} & React.InputHTMLAttributes<HTMLInputElement>;

function RadioGroup(props: Props) {
  const { label, options, value, ...rest } = props;
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex gap-1 text-sm">
            <input type="radio" value={opt.value} checked={value === opt.value} {...rest} />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioGroup;
