import { useEffect } from "react";
import type { StepProps } from "../../types/StepProps";

function Lifestyle(props: StepProps) {
  const { formData, handleChange, setDescription } = props;

  useEffect(() => {
    setDescription(
      "Estos aspectos hablan de tu estilo de vida. Saber qué tan activo eres y tus hábitos nos ayuda a ver cómo podrían influir en tu salud cardiovascular."
    );
  }, []);

  return <p>General Information</p>;
}

export default Lifestyle;
