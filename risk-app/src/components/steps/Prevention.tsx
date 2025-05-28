import {
  chestScan,
  covidPos,
  fluVaxLast12,
  highRiskLastYear,
  hivTesting,
  lastCheckupTime,
  pneumoVaxEver,
  tetanusLast10Tdap,
} from "../../config/fields";
import type { StepProps } from "../../types/StepProps";
import SelectField from "../form/SelectField";
import ToggleField from "../form/ToggleField";

function Prevention({ formData, handleChange }: StepProps) {
  return (
    <fieldset className="grid grid-cols-1 gap-2">
      {/* <div className="grid grid-cols-2 gap-2">
        <ToggleButton {...chestScan} checked={formData.ChestScan} onChange={handleChange}></ToggleButton>
        <ToggleButton {...fluVaxLast12} checked={formData.FluVaxLast12} onChange={handleChange}></ToggleButton>
        <ToggleButton {...pneumoVaxEver} checked={formData.PneumoVaxEver} onChange={handleChange}></ToggleButton>
        <ToggleButton {...hivTesting} checked={formData.HIVTesting} onChange={handleChange}></ToggleButton>
      </div> */}
      {/* <ToggleButton {...highRiskLastYear} checked={formData.HighRiskLastYear} onChange={handleChange}></ToggleButton> */}
      {/* <div className="grid grid-cols-2 gap-2">
        <SelectField {...lastCheckupTime} onChange={handleChange} value={formData.LastCheckupTime}></SelectField>
      </div> */}
      <SelectField {...tetanusLast10Tdap} value={formData.TetanusLast10Tdap} onChange={handleChange}></SelectField>
      {/* <SelectField {...covidPos} value={formData.CovidPos} onChange={handleChange}></SelectField> */}
    </fieldset>
  );
}

export default Prevention;
