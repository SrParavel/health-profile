import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../form/Button";
import type React from "react";
import Loader from "../Loader";

interface FormFooterProps extends React.HTMLAttributes<HTMLElement> {
  step: number;
  maxSteps: number;
  loading: boolean;
  next: () => void;
  back: () => void;
}

function FormFooter({
  step,
  maxSteps,
  loading,
  next,
  back,
  ...props
}: FormFooterProps) {
  return (
    <footer
      {...props}
      className="px-6 py-4 w-full flex flex-row-reverse justify-between"
    >
      {step < maxSteps - 1 ? (
        <Button key="next" type="button" onClick={next}>
          Siguiente
          <FaArrowRight className="w-4 h-4"></FaArrowRight>
        </Button>
      ) : (
        <Button key="submit" type="submit" className="w-24" disabled={loading}>
          {loading ? <Loader /> : "Enviar"}
        </Button>
      )}

      <Button
        className={`transition ${step > 0 ? "opacity-100" : "opacity-0"}`}
        key="back"
        type="button"
        variant="secondary"
        onClick={back}
        disabled={step == 0}
      >
        <FaArrowLeft className="w-4 h-4"></FaArrowLeft>
        Volver
      </Button>
    </footer>
  );
}

export default FormFooter;
