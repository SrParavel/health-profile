import { FaUser, FaHeartbeat, FaRunning, FaWheelchair, FaStethoscope, FaShieldAlt } from "react-icons/fa";

interface ProgressBarProps {
  currentStep: number;
}

function ProgressBar({ currentStep }: ProgressBarProps) {
  const steps = [
    { icon: FaUser, label: "Información Personal" },
    { icon: FaHeartbeat, label: "Historial Cardiovascular" },
    { icon: FaRunning, label: "Estilo de Vida" },
    { icon: FaWheelchair, label: "Capacidad Física" },
    { icon: FaStethoscope, label: "Condiciones de Salud" },
    { icon: FaShieldAlt, label: "Cuidado Preventivo" },
  ];

  return (
    <div className="p-4 flex flex-col items-center justify-center h-full">
      {steps.map((step, index) => (
        <div className={`grid grid-cols-[1fr_48px] gap-x-2 w-full justify-items-center`}>
          <p className="w-full flex justify-end items-center text-xs text-right text-gray-400">{step.label}</p>
          <span className="flex flex-col items-center justify-center bg-gray-200 rounded-full w-12 h-12">
            <step.icon className="w-6 h-6 fill-gray-400"></step.icon>
          </span>
          {index != steps.length - 1 && <span className="w-0.5 h-5 bg-gray-200 col-start-2"></span>}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
