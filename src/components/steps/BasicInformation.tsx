import type { StepProps } from "../../types/StepProps";
import { ageCategories, sexOptions } from "../../config/ProfileOptions";
import SelectField from "../form/SelectField";

function BasicInformation(props: StepProps) {
  const { formData, handleChange } = props;

  return (
    <div className="w-full flex flex-col gap-4">
      <SelectField
        value={formData.Sex}
        name="Sex"
        label="Sexo"
        options={sexOptions}
        onChange={handleChange}
      ></SelectField>
      <SelectField
        value={formData.AgeCategory}
        name="AgeCategory"
        label="Rango de Edad"
        options={ageCategories}
        onChange={handleChange}
      ></SelectField>
    </div>
  );
}

export default BasicInformation;
