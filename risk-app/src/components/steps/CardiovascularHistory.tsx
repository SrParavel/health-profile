import { hadAngina, hadDiabetes, hadHeartAttack, hadStroke, physicalActivities } from "../../config/fields";
import type { StepProps } from "../../types/StepProps";
import SelectField from "../form/SelectField";
import ToggleField from "../form/ToggleField";

function CardiovascularHistory({ formData, handleChange }: StepProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      {/* <ToggleButton {...hadHeartAttack} onChange={handleChange} checked={formData.HadHeartAttack}></ToggleButton> */}
      <ToggleField {...hadAngina} onChange={handleChange} checked={formData.HadAngina}></ToggleField>
      <ToggleField {...hadStroke} onChange={handleChange} checked={formData.HadStroke}></ToggleField>
      <SelectField {...hadDiabetes} onChange={handleChange} value={formData.HadDiabetes}></SelectField>
    </fieldset>
  );
}

export default CardiovascularHistory;
