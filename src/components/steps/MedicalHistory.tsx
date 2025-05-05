import { useEffect } from "react";
import type { StepProps } from "../../types/StepProps";

function MedicalHistory(props: StepProps) {
  const { formData, handleChange, setDescription } = props;

  useEffect(() => {
    setDescription(
      "Aquí nos interesa conocer tu historial médico. No te preocupes, toda la info es confidencial. Estos datos son esenciales para evaluar posibles factores de riesgo en tu salud."
    );
  }, []);

  return <p>General Information</p>;
}

export default MedicalHistory;
