import {
  difficultyDressingBathing,
  difficultyErrands,
  difficultyWalking,
  physicalActivities,
  physicalHealthDays,
} from "../../config/fields";
import type { StepProps } from "../../types/StepProps";
import NumberField from "../form/NumberField";
import ToggleField from "../form/ToggleField";

function PhysicalCapabilities({ formData, handleChange }: StepProps) {
  return (
    <fieldset className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-2">
        <ToggleField
          {...physicalActivities}
          checked={formData.PhysicalActivities}
          onChange={handleChange}
        ></ToggleField>
        <ToggleField {...difficultyWalking} checked={formData.DifficultyWalking} onChange={handleChange}></ToggleField>
        {/* <ToggleButton
          {...difficultyDressingBathing}
          checked={formData.DifficultyDressingBathing}
          onChange={handleChange}
        ></ToggleButton> */}
        {/* <ToggleButton
          {...difficultyErrands}
          checked={formData.DifficultyErrands}
          onChange={handleChange}
        ></ToggleButton> */}
      </div>
      <NumberField {...physicalHealthDays} value={formData.PhysicalHealthDays} onChange={handleChange}></NumberField>
    </fieldset>
  );
}

export default PhysicalCapabilities;
