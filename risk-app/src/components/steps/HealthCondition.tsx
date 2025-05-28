import {
  blindOrVisionDifficulty,
  deafOrHardOfHearing,
  hadArthritis,
  hadAsthma,
  hadCOPD,
  hadDepressiveDisorder,
  hadKidneyDisease,
  removedTeeth,
} from "../../config/fields";
import type { StepProps } from "../../types/StepProps";
import SelectField from "../form/SelectField";
import ToggleField from "../form/ToggleField";

function HealthCondition({ formData, handleChange }: StepProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <ToggleField {...hadAsthma} checked={formData.HadAsthma} onChange={handleChange}></ToggleField>
        <ToggleField {...hadCOPD} checked={formData.HadCOPD} onChange={handleChange}></ToggleField>
        <ToggleField {...hadKidneyDisease} checked={formData.HadKidneyDisease} onChange={handleChange}></ToggleField>
        <ToggleField {...hadArthritis} checked={formData.HadArthritis} onChange={handleChange}></ToggleField>
        {/* <ToggleButton
          {...deafOrHardOfHearing}
          checked={formData.DeafOrHardOfHearing}
          onChange={handleChange}
          ></ToggleButton> */}
      </div>
      <ToggleField
        {...hadDepressiveDisorder}
        checked={formData.HadDepressiveDisorder}
        onChange={handleChange}
      ></ToggleField>

      {/* <ToggleButton
        {...blindOrVisionDifficulty}
        checked={formData.BlindOrVisionDifficulty}
        onChange={handleChange}
      ></ToggleButton> */}
      {/* <SelectField {...removedTeeth} value={formData.RemovedTeeth} onChange={handleChange}></SelectField> */}
    </fieldset>
  );
}

export default HealthCondition;
