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
import ToggleButton from "../form/ToggleButton";

function HealthCondition({ formData, handleChange }: StepProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <ToggleButton {...hadAsthma} checked={formData.HadAsthma} onChange={handleChange}></ToggleButton>
        <ToggleButton {...hadCOPD} checked={formData.HadCOPD} onChange={handleChange}></ToggleButton>
        <ToggleButton {...hadKidneyDisease} checked={formData.HadKidneyDisease} onChange={handleChange}></ToggleButton>
        <ToggleButton {...hadArthritis} checked={formData.HadArthritis} onChange={handleChange}></ToggleButton>
        {/* <ToggleButton
          {...deafOrHardOfHearing}
          checked={formData.DeafOrHardOfHearing}
          onChange={handleChange}
          ></ToggleButton> */}
      </div>
      <ToggleButton
        {...hadDepressiveDisorder}
        checked={formData.HadDepressiveDisorder}
        onChange={handleChange}
      ></ToggleButton>

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
