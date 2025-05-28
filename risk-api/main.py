from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, ConfigDict
import pandas as pd
import json
from joblib import load
from fastapi.middleware.cors import CORSMiddleware
from reporter import gen_report


# Cargar modelo y columnas
modelo = load("model/modelo_entrenado.pkl")

with open("model/columnas_entradas.json") as f:
    columnas_modelo = json.load(f)

with open("model/columnas_categoricas.json") as f:
    columnas_categoricas = json.load(f)

# Definir la app
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # o restringe si es necesario
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FormData(BaseModel):
    Sex: str
    GeneralHealth: str
    PhysicalHealthDays: float
    MentalHealthDays: float
    PhysicalActivities: bool
    SleepHours: float
    HadAngina: bool
    HadStroke: bool
    HadAsthma: bool
    HadSkinCancer: bool
    HadCOPD: bool
    HadDepressiveDisorder: bool
    HadKidneyDisease: bool
    HadArthritis: bool
    HadDiabetes: str
    DifficultyWalking: bool
    SmokerStatus: str
    ECigaretteUsage: str
    RaceEthnicityCategory: str
    AgeCategory: str
    BMI: float
    AlcoholDrinkers: bool
    TetanusLast10Tdap: str

    model_config = ConfigDict(extra="ignore")

@app.get("/")
def home():
    return {"message": "Servidor de predicción de enfermedades cardiacas funcionando 🚀"}

@app.post("/predict")
def predecir(datos: FormData):
    try:
        df = pd.DataFrame([datos.model_dump()])
        df = df.reindex(columns=columnas_modelo, fill_value=None)

        for col in columnas_categoricas:
            df[col] = df[col].astype("category")

        prob = modelo.predict_proba(df)[:, 1][0]
        probabilidad = round(prob * 100, 2)

        reporte = gen_report(datos.model_dump(), probabilidad)

        return {
            "probabilidad": probabilidad,
            "reporte": reporte
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
