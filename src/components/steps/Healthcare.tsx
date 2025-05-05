import { useEffect } from "react";
import type { StepProps } from "../../types/StepProps";

function Healthcare(props: StepProps) {
  const { formData, handleChange, setDescription } = props;

  useEffect(() => {
    setDescription(
      "Finalmente, unos detalles sobre las vacunas y cuidados preventivos recientes. Aunque pueda sonar curioso, estos datos también aportan en nuestro análisis de tu salud general."
    );
  }, []);
  return <p>TODO</p>;
}

export default Healthcare;
