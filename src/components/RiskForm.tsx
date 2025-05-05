import React, { useState, type JSX } from "react";
import type { HealthProfile } from "../types/HealthProfile";
import BasicInformation from "./steps/BasicInformation";
import GeneralHealth from "./steps/GeneralHealth";
import MedicalHistory from "./steps/MedicalHistory";
import Lifestyle from "./steps/Lifestyle";
import type { StepProps } from "../types/StepProps";
import Card from "./Card";
import Doctor from "./Doctor";
import Healthcare from "./steps/Healthcare";
import PrimaryButton from "./form/PrimaryButton";
import SecondaryButton from "./form/SecondaryButton";
import Typewriter from "./Typewriter";
import StepDetails from "../config/StepDetails.json";

const steps: ((props: StepProps) => JSX.Element)[] = [
  BasicInformation,
  GeneralHealth,
  Lifestyle,
  MedicalHistory,
  Healthcare,
];

function MultiStepForm() {
  const [formData, setFormData] = useState<HealthProfile>({
    Sex: "",
    GeneralHealth: "",
    PhysicalHealthDays: 0,
    MentalHealthDays: 0,
    PhysicalActivities: "",
    SleepHours: 0,
    HadAngina: "",
    HadStroke: "",
    HadAsthma: "",
    HadSkinCancer: "",
    HadCOPD: "",
    HadDepressiveDisorder: "",
    HadKidneyDisease: "",
    HadArthritis: "",
    HadDiabetes: "",
    DifficultyWalking: "",
    SmokerStatus: "",
    ECigaretteUsage: "",
    RaceEthnicityCategory: "",
    AgeCategory: "",
    BMI: 0,
    AlcoholDrinkers: "",
    TetanusLast10Tdap: "",
  });

  const [step, setCurrentStep] = useState(0);
  const FormStep = steps[step];
  const formTitle = StepDetails[step].title;
  const formDescription = StepDetails[step].description;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };

  const next = () => setCurrentStep((prev) => prev + 1);
  const back = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card>
      <div className="grid grid-cols-2">
        <div className="border-r-2 border-gray-200 row-span-2"></div>
        <div className="p-4 border-b-2 border-gray-200">
          <span className="text-sm text-gray-400">
            Etapa {step + 1}/{steps.length}
          </span>
          <h3 className="font-bold text-2xl text-gray-800">{formTitle}</h3>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <FormStep formData={formData} handleChange={handleChange} />
          <div className="py-4 w-full flex justify-end gap-4">
            {step > 0 && (
              <SecondaryButton type="button" onClick={back}>
                Regresar
              </SecondaryButton>
            )}
            {step < steps.length - 1 ? (
              <PrimaryButton type="button" onClick={next}>
                Continuar
              </PrimaryButton>
            ) : (
              <PrimaryButton key="submit" type="submit">
                Enviar
              </PrimaryButton>
            )}
          </div>
        </form>
        <div className="col-span-2">
          <Doctor>
            <Typewriter text={formDescription} />
          </Doctor>
        </div>
      </div>
    </Card>
  );
}

export default MultiStepForm;
