import Label from "./Label";

type Props = {
  label: string;
  unit?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function NumberField({ label, unit, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <Label>
        {label} <span className="text-xs font-light text-gray-400">({unit})</span>
      </Label>
      <input
        type="number"
        {...rest}
        className="px-4 py-2 text-sm border border-gray-300 rounded-md outline-none cursor-pointer focus:ring-green-500 focus:ring"
      />
    </div>
  );
}

export default NumberField;
