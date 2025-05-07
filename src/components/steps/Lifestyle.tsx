import {
  alcoholDrinkers,
  difficultyConcentrating,
  eCigaretteUsage,
  mentalHealthDays,
  sleepHours,
  smokerStatus,
} from "../../config/fields";
import type { StepProps } from "../../types/StepProps";
import NumberField from "../form/NumberField";
import SelectField from "../form/SelectField";
import ToggleButton from "../form/ToggleButton";

function Lifestyle({ formData, handleChange }: StepProps) {
  return (
    <fieldset className="grid gap-2">
      <div className="grid grid-cols-1 gap-2">
        <ToggleButton {...alcoholDrinkers} checked={formData.AlcoholDrinkers} onChange={handleChange}></ToggleButton>
        {/* <ToggleButton
          {...difficultyConcentrating}
          checked={formData.DifficultyConcentrating}
          onChange={handleChange}
        ></ToggleButton> */}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <SelectField {...smokerStatus} value={formData.SmokerStatus} onChange={handleChange}></SelectField>
        <SelectField {...eCigaretteUsage} value={formData.ECigaretteUsage} onChange={handleChange}></SelectField>
        <NumberField {...sleepHours} value={formData.SleepHours} onChange={handleChange}></NumberField>
        <NumberField {...mentalHealthDays} value={formData.MentalHealthDays} onChange={handleChange}></NumberField>
      </div>
    </fieldset>
  );
}

export default Lifestyle;
