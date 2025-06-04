import PersonalInformation from "./steps/PersonalInformation";
import CardiovascularHistory from "./steps/CardiovascularHistory";
import HealthCondition from "./steps/HealthCondition";
import Lifestyle from "./steps/Lifestyle";
import PhysicalCapabilities from "./steps/PhysicalCapabilities";
import Prevention from "./steps/Prevention";

import type { StepProps } from "../types/StepProps";
import React, { useState, type JSX } from "react";
import Card from "./Card";
import Doctor from "./Doctor";
import Typewriter from "./Typewriter";
import { defaultFormData, type FormData } from "../types/formData";
import { formSteps } from "../config/steps";
import FormHeader from "./steps/FormHeader";
import FormFooter from "./steps/FormFooter";
import FormNav from "./steps/FormNav";
import { navigate } from "astro:transitions/client";

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
  const [loading, setLoading] = useState(false);

  const FormStep = steps[step];
  const { title, context, description } = formSteps[step];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const transformedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) =>
        typeof value === "boolean" ? [key, value ? "Yes" : "No"] : [key, value]
      )
    );

    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformedData),
    });

    const result = await response.json();
    console.log(result);

    sessionStorage.setItem("report", JSON.stringify(result));
    setLoading(false);
    navigate("/testing");
  };

  return (
    <Card className="max-w-4xl">
      <form id="form" onSubmit={handleSubmit} className=" flex flex-col justify-between">
        <FormNav className="[grid-area:nav]" step={step} steps={formSteps} setStep={setStep}></FormNav>

        <FormHeader
          className="[grid-area:header]"
          step={step}
          maxSteps={steps.length}
          stepTitle={title}
          stepDescription={description}
        />

        <div key={step} className="fade-in overflow-y-auto px-6 py-4 [grid-area:form]">
          <FormStep formData={formData} handleChange={handleChange} />
        </div>

        <FormFooter
          step={step}
          maxSteps={steps.length}
          loading={loading}
          next={next}
          back={back}
          className="[grid-area:footer]"
        />
        <Doctor className="[grid-area:doctor]">
          <Typewriter text={context} />
        </Doctor>
      </form>
    </Card>
  );
}

export default Form;
