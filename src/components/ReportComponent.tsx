import { useEffect, useState } from "react";

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
    const sessionReport: Report = JSON.parse(data || "");
    setReport(sessionReport);
  }, []);

  if (!report) return <p>Cargando reporte...</p>;

  return (
    <div>
      <h1>Reporte de Salud</h1>
      <p>{report["Resultado General"]}</p>
      <p>{report["Factores Críticos"]}</p>
      <p>{report["Resultado General"]}</p>
      <p>{report.Recomendaciones}</p>
      <p>{report.NOTA}</p>
    </div>
  );
}

export default ReportComponent;
