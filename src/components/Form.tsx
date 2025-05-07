import React, { useState, type JSX } from "react";
import PersonalInformation from "./steps/PersonalInformation";
import CardiovascularHistory from "./steps/CardiovascularHistory";
import HealthCondition from "./steps/HealthCondition";
import Lifestyle from "./steps/Lifestyle";
import type { StepProps } from "../types/StepProps";
import Card from "./Card";
import Doctor from "./Doctor";
import Prevention from "./steps/Prevention";
import PrimaryButton from "./form/PrimaryButton";
import SecondaryButton from "./form/SecondaryButton";
import Typewriter from "./Typewriter";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { defaultFormData, type FormData } from "../types/formData";
import { formSteps } from "../config/steps";
import PhysicalCapabilities from "./steps/PhysicalCapabilities";
import ProgressBar from "./ProgressBar";
const steps: ((props: StepProps) => JSX.Element)[] = [
  PersonalInformation,
  CardiovascularHistory,
  Lifestyle,
  PhysicalCapabilities,
  HealthCondition,
  Prevention,
];

function Form() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const [step, setStep] = useState(0);
  const FormStep = steps[step];
  const currentStep = formSteps[step];
  const stepTitle = currentStep.title;
  const stepContext = currentStep.context;
  const stepDescription = currentStep.description;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    let newValue: string | number | boolean = value;

    if (type === "checkbox") {
      newValue = checked;
    } else if (type === "number") {
      newValue = value === "" ? "" : Number(value);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card>
      <div className="w-4xl grid grid-cols-[200px_1fr]">
        <div className="border-r-2 border-gray-200 row-span-2">
          <ProgressBar currentStep={step} />
        </div>

        <div className="px-8 py-4 border-b-2 border-gray-200">
          <div className="text-xs text-gray-400">
            Etapa {step + 1}/{steps.length}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{stepTitle}</h3>
          <p className="text-sm text-gray-500">{stepDescription}</p>
        </div>

        <form onSubmit={handleSubmit} className="h-[21rem] flex flex-col justify-between px-8 py-4 gap-4 grow">
          <FormStep formData={formData} handleChange={handleChange} />
          <div className="w-full flex flex-row-reverse justify-between gap-4">
            {step < steps.length - 1 ? (
              <PrimaryButton type="button" onClick={next}>
                <div className="w-full flex items-center justify-center gap-2">
                  Siguiente
                  <FaArrowRight className="w-4 h-4"></FaArrowRight>
                </div>
              </PrimaryButton>
            ) : (
              <PrimaryButton key="submit" type="submit">
                Enviar
              </PrimaryButton>
            )}
            {step > 0 && (
              <SecondaryButton type="button" onClick={back}>
                <div className="w-full flex items-center justify-center gap-2">
                  <FaArrowLeft className="w-4 h-4"></FaArrowLeft>
                  Volver
                </div>
              </SecondaryButton>
            )}
          </div>
        </form>

        <div className="col-span-2">
          <Doctor>
            <Typewriter text={stepContext} />
          </Doctor>
        </div>
      </div>
    </Card>
  );
}

export default Form;
