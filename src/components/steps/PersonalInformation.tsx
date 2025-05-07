import {
  ageCategory,
  bmi,
  // bmi,
  generalHealth,
  heightInMeters,
  raceEthnicityCategory,
  sex,
  weightInKilograms,
} from "../../config/fields";
import type { StepProps } from "../../types/StepProps";
import SelectField from "../form/SelectField";
import NumberField from "../form/NumberField";

function PersonalInformation({ formData, handleChange }: StepProps) {
  return (
    <fieldset className="grid gap-2">
      <div className="grid grid-cols-2 gap-2">
        <SelectField {...sex} onChange={handleChange} value={formData.Sex} />
        <SelectField {...ageCategory} onChange={handleChange} value={formData.AgeCategory} />
        <SelectField {...raceEthnicityCategory} onChange={handleChange} value={formData.RaceEthnicityCategory} />
        <SelectField {...generalHealth} onChange={handleChange} value={formData.GeneralHealth} />
        {/* <NumberField {...heightInMeters} onChange={handleChange} value={formData.HeightInMeters} />
      <NumberField {...weightInKilograms} onChange={handleChange} value={formData.WeightInKilograms} /> */}
      </div>
      <NumberField {...bmi} onChange={handleChange} value={formData.BMI} />
    </fieldset>
  );
}

export default PersonalInformation;
