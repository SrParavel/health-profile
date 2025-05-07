import { hadAngina, hadDiabetes, hadHeartAttack, hadStroke, physicalActivities } from "../../config/fields";
import type { StepProps } from "../../types/StepProps";
import SelectField from "../form/SelectField";
import ToggleButton from "../form/ToggleButton";

function CardiovascularHistory({ formData, handleChange }: StepProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      {/* <ToggleButton {...hadHeartAttack} onChange={handleChange} checked={formData.HadHeartAttack}></ToggleButton> */}
      <ToggleButton {...hadAngina} onChange={handleChange} checked={formData.HadAngina}></ToggleButton>
      <ToggleButton {...hadStroke} onChange={handleChange} checked={formData.HadStroke}></ToggleButton>
      <SelectField {...hadDiabetes} onChange={handleChange} value={formData.HadDiabetes}></SelectField>
    </fieldset>
  );
}

export default CardiovascularHistory;
