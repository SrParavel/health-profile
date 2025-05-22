import { useEffect, useState } from "react";
import test_report from "../utils/test_report.json";

interface Report {
  "Resultado General": string;
  "Factores Críticos": string;
  "Hábitos Positivos": string;
  "Observaciones Generales": string;
  Recomendaciones: string;
  NOTA: string;
}

function ReportComponent() {
  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("report");
    const sessionReport: Report = test_report;
    setReport(sessionReport);
  }, []);

  if (!report) return <p>Cargando reporte...</p>;

  return (
    <div>
      <h1>Reporte de Salud</h1>
      <p>{test_report["Resultado General"]}</p>
      <p>{test_report["Factores Críticos"]}</p>
      <p>{test_report["Resultado General"]}</p>
      <p>{test_report.Recomendaciones}</p>
      <p>{test_report.NOTA}</p>
    </div>
  );
}

export default ReportComponent;
