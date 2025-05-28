import json
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def gen_report(datos_usuario: dict, probabilidad: float) -> dict:
    prompt = (
        "Eres un asistente médico que genera reportes personalizados de salud cardiovascular. "
        "A continuación, se presentan los datos de un paciente en formato JSON, incluyendo la probabilidad de riesgo. "
        "Genera un reporte en formato JSON con las siguientes claves: 'general', 'critical', 'positive', 'observation', 'recommendation'. "
        "Utiliza un tono empático y profesional.\n\n"
        f"Datos del paciente:\n{json.dumps(datos_usuario, indent=2)}\n"
        f"Probabilidad de riesgo: {probabilidad}%\n\n"
        "Reporte:"
    )

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "system", "content": "Eres un asistente médico que genera reportes personalizados de salud cardiovascular."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7
    )

    contenido = response.choices[0].message.content.strip()

    try:
        reporte = json.loads(contenido)
    except json.JSONDecodeError:
        reporte = {"error": "No se pudo generar un reporte válido."}

    return reporte
