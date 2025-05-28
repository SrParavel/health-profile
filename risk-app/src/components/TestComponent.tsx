import { LuDownload } from "react-icons/lu";
import Card from "./Card";
import Doctor from "./Doctor";
import Button from "./form/Button";
import { useFormattedDate } from "../hooks/UseFormattedDate";
import response from "../utils/test_response.json";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

interface Report {
  probabilidad: number;
  reporte: {
    general: string;
    critical: string;
    positive: string;
    observation: string;
    recommendation: string;
  };
}

const note =
  "Recuerda que esto no es un juicio ni un diagnóstico médico, sino una herramienta para que puedas tomar decisiones más informadas sobre tu salud. Estás a tiempo de mejorar y cada pequeño paso que tomes cuenta.";

function TestComponent() {
  const [loading, setLoading] = useState(false);
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const date = useFormattedDate();

  const [report, setReport] = useState<Report | null>(null);

  useEffect(() => {
    const storedReporte = sessionStorage.getItem("report");
    if (storedReporte) {
      try {
        const parsedReporte = JSON.parse(storedReporte);
        setReport(parsedReporte);
      } catch (error) {
        console.error("Error al analizar el reporte:", error);
      }
    } else {
      console.warn("No se encontró el reporte en sessionStorage");
    }
  }, []);

  const handleDownload = async () => {
    setLoading(true);
    if (!cardWrapperRef.current) return;

    cardWrapperRef.current.classList.add("exporting-pdf");

    const canvas = await html2canvas(cardWrapperRef.current, {
      scale: 2,
      useCORS: true,
    });

    cardWrapperRef.current.classList.remove("exporting-pdf");

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("reporte-cardiovascular.pdf");

    setLoading(false);
  };

  return (
    <div ref={cardWrapperRef} style={{ colorScheme: "light" }}>
      <Card className="w-5xl flex flex-col">
        <div className="p-16 flex flex-col gap-8">
          <div className="flex justify-between items-center">
            {/* <Logo></Logo> */}
            <img src="Logo.png" alt="logo" className="h-24" />
            <span className="font-semibold">{date}</span>
          </div>
          <section className="grid gap-2">
            <h1 className="text-2xl font-bold">Reporte Cardiovascular</h1>
            <h2 className="text-lg">
              Estadística de riesgo: <b>{report?.probabilidad}%</b>
            </h2>
          </section>
          <section className="grid gap-2">
            <h2 className="text-xl font-semibold">Resultado General</h2>
            <p>{report?.reporte.general}</p>
          </section>
          <section className="grid gap-2">
            <h2 className="text-xl font-semibold">Factores Críticos</h2>
            <p>{report?.reporte.critical}</p>
          </section>
          <section className="grid gap-2">
            <h2 className="text-xl font-semibold">Observaciones Generales</h2>
            <p>{report?.reporte.observation}</p>
            <p>{report?.reporte.positive}</p>
          </section>
          <section className="grid gap-2">
            <h2 className="text-xl font-semibold">Recomendaciones</h2>
            <p>{report?.reporte.recommendation}</p>
          </section>

          <div className="flex justify-between items-center text-gray-400">
            <span>© 2025 IACardioRisk</span>

            <Button onClick={handleDownload} className="no-print">
              Descargar Reporte
              <LuDownload className="stroke-3"></LuDownload>
            </Button>
          </div>
          <h2 className="text-2xl text-center font-bold text-green-500">
            Nos importas tú
          </h2>
        </div>
        <div className="text-2xl bg-green-500 text-white p-4 text-center font-bold">
          <a href="/">www.iacardiorisk.com</a>
        </div>
        <Doctor>{note}</Doctor>
      </Card>
    </div>
  );
}

export default TestComponent;
