import Label from "./Label";

type Props = {
  label: string;
  unit?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function NumberField({ label, unit, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <Label>
        {label}{" "}
        <span className="text-sm font-medium text-gray-400">({unit})</span>
      </Label>
      <input
        type="number"
        {...rest}
        className="shape-base text-sm style-muted text-on-muted actions-input"
      />
    </div>
  );
}

export default NumberField;
