import type { HealthProfile } from "./HealthProfile";

export type StepProps = {
  formData: HealthProfile;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
