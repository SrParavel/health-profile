import type { BinaryField, CategoricalField, NumericField } from "../types/fields";

// Binary Fields
export const physicalActivities: BinaryField = {
  name: "PhysicalActivities",
  label: "Actividades Físicas",
  description: "¿Realizas actividades físicas o ejercicio regularmente?",
};

export const hadHeartAttack: BinaryField = {
  name: "HadHeartAttack",
  label: "Ha tenido un ataque al corazón",
  description: "¿Has sufrido algún ataque al corazón en el pasado?",
};

export const hadAngina: BinaryField = {
  name: "HadAngina",
  label: "Ha tenido angina",
  description: "¿Has experimentado dolor o molestia en el pecho?",
};

export const hadStroke: BinaryField = {
  name: "HadStroke",
  label: "Ha tenido un derrame cerebral",
  description: "¿Has sufrido algún derrame cerebral o accidente cerebrovascular?",
};

export const hadAsthma: BinaryField = {
  name: "HadAsthma",
  label: "Tiene asma",
  description: "¿Padeces de asma o problemas respiratorios?",
};

export const hadSkinCancer: BinaryField = {
  name: "HadSkinCancer",
  label: "Ha tenido cáncer de piel",
  description: "¿Has sido diagnosticado con cáncer de piel?",
};

export const hadCOPD: BinaryField = {
  name: "HadCOPD",
  label: "Tiene EPOC",
  description: "¿Has sido diagnosticado con EPOC (Enfermedad Pulmonar Obstructiva Crónica)?",
};

export const hadDepressiveDisorder: BinaryField = {
  name: "HadDepressiveDisorder",
  label: "Tiene trastorno depresivo",
  description: "¿Has sido diagnosticado con depresión o trastorno depresivo?",
};

export const hadKidneyDisease: BinaryField = {
  name: "HadKidneyDisease",
  label: "Tiene enfermedad renal",
  description: "¿Padeces de alguna enfermedad renal?",
};

export const hadArthritis: BinaryField = {
  name: "HadArthritis",
  label: "Tiene artritis",
  description: "¿Has sido diagnosticado con artritis?",
};

export const deafOrHardOfHearing: BinaryField = {
  name: "DeafOrHardOfHearing",
  label: "Sordo o con dificultad auditiva",
  description: "¿Tienes dificultad para oír o eres sordo?",
};

export const blindOrVisionDifficulty: BinaryField = {
  name: "BlindOrVisionDifficulty",
  label: "Ciego o con dificultad visual",
  description: "¿Tienes problemas de visión o eres ciego?",
};

export const difficultyConcentrating: BinaryField = {
  name: "DifficultyConcentrating",
  label: "Dificultad para concentrarse",
  description: "¿Tienes dificultad para concentrarte o recordar cosas?",
};

export const difficultyWalking: BinaryField = {
  name: "DifficultyWalking",
  label: "Dificultad para caminar",
  description: "¿Tienes dificultad para caminar o subir escaleras?",
};

export const difficultyDressingBathing: BinaryField = {
  name: "DifficultyDressingBathing",
  label: "Dificultad para vestirse o bañarse",
  description: "¿Tienes dificultad para vestirte o bañarte por ti mismo?",
};

export const difficultyErrands: BinaryField = {
  name: "DifficultyErrands",
  label: "Dificultad para realizar diligencias",
  description: "¿Tienes dificultad para realizar actividades diarias como ir de compras o al banco?",
};

export const chestScan: BinaryField = {
  name: "ChestScan",
  label: "Escáner de tórax",
  description: "¿Te has realizado un escáner de tórax recientemente?",
};

export const alcoholDrinkers: BinaryField = {
  name: "AlcoholDrinkers",
  label: "Consume alcohol",
  description: "¿Consumes bebidas alcohólicas?",
};

export const hivTesting: BinaryField = {
  name: "HIVTesting",
  label: "Prueba de VIH",
  description: "¿Te has realizado una prueba de VIH?",
};

export const fluVaxLast12: BinaryField = {
  name: "FluVaxLast12",
  label: "Vacuna contra la gripe en los últimos 12 meses",
  description: "¿Te has vacunado contra la gripe en el último año?",
};

export const pneumoVaxEver: BinaryField = {
  name: "PneumoVaxEver",
  label: "Vacuna neumocócica",
  description: "¿Te has vacunado contra el neumococo en algún momento?",
};

export const highRiskLastYear: BinaryField = {
  name: "HighRiskLastYear",
  label: "Alto riesgo en el último año",
  description: "¿Has estado en una situación de alto riesgo para tu salud en el último año?",
};

// Categorical Fields
export const sex: CategoricalField = {
  name: "Sex",
  label: "Sexo",
  description: "¿Cuál es tu género?",
  options: [
    { value: "Female", label: "Femenino" },
    { value: "Male", label: "Masculino" },
  ],
};

export const generalHealth: CategoricalField = {
  name: "GeneralHealth",
  label: "Salud General",
  description: "¿Cómo calificarías tu estado de salud general?",
  options: [
    { value: "Poor", label: "Mala" },
    { value: "Fair", label: "Regular" },
    { value: "Good", label: "Buena" },
    { value: "Very good", label: "Muy buena" },
    { value: "Excellent", label: "Excelente" },
  ],
};

export const lastCheckupTime: CategoricalField = {
  name: "LastCheckupTime",
  label: "Último chequeo médico",
  description: "¿Cuándo fue tu último chequeo médico?",
  options: [
    {
      value: "Within past year (anytime less than 12 months ago)",
      label: "En el último año",
    },
    {
      value: "Within past 2 years (1 year but less than 2 years ago)",
      label: "En los últimos 2 años",
    },
    {
      value: "Within past 5 years (2 years but less than 5 years ago)",
      label: "En los últimos 5 años",
    },
    { value: "5 or more years ago", label: "Hace 5 años o más" },
  ],
};

export const removedTeeth: CategoricalField = {
  name: "RemovedTeeth",
  label: "Dientes extraídos",
  description: "¿Cuántos dientes te han extraído?",
  options: [
    { value: "None of them", label: "Ninguno" },
    { value: "1 to 5", label: "1 a 5" },
    { value: "6 or more, but not all", label: "6 o más, pero no todos" },
    { value: "All", label: "Todos" },
  ],
};

export const hadDiabetes: CategoricalField = {
  name: "HadDiabetes",
  label: "Ha sufrido de diabetes",
  description: "¿Has sido diagnosticado con diabetes?",
  options: [
    { value: "No", label: "No" },
    { value: "Yes", label: "Sí" },
    {
      value: "Yes, but only during pregnancy (female)",
      label: "Sí, pero solo durante el embarazo",
    },
    {
      value: "No, pre-diabetes or borderline diabetes",
      label: "No, pre-diabetes o diabetes limítrofe",
    },
  ],
};

export const smokerStatus: CategoricalField = {
  name: "SmokerStatus",
  label: "Ha fumado",
  description: "¿Cuál es tu situación actual respecto al consumo de tabaco?",
  options: [
    { value: "Never smoked", label: "Nunca he fumado" },
    { value: "Former smoker", label: "Ex fumador" },
    {
      value: "Current smoker - now smokes some days",
      label: "Fumo algunos días",
    },
    {
      value: "Current smoker - now smokes every day",
      label: "Fumo todos los días",
    },
  ],
};

export const eCigaretteUsage: CategoricalField = {
  name: "ECigaretteUsage",
  label: "Ha usado cigarrillo electrónico",
  description: "¿Usas cigarrillos electrónicos?",
  options: [
    {
      value: "Never used e-cigarettes in my entire life",
      label: "Nunca he usado cigarrillos electrónicos",
    },
    { value: "Not at all (right now)", label: "No los uso (actualmente)" },
    { value: "Use them some days", label: "Los uso algunos días" },
    { value: "Use them every day", label: "Los uso todos los días" },
  ],
};

export const raceEthnicityCategory: CategoricalField = {
  name: "RaceEthnicityCategory",
  label: "Categoría racial/étnica",
  description: "¿Cuál es tu origen racial o étnico?",
  options: [
    { value: "White only, Non-Hispanic", label: "Solo blanco, no hispano" },
    { value: "Black only, Non-Hispanic", label: "Solo negro, no hispano" },
    { value: "Other race only, Non-Hispanic", label: "Otra raza, no hispano" },
    { value: "Multiracial, Non-Hispanic", label: "Multirracial, no hispano" },
    { value: "Hispanic", label: "Hispano" },
  ],
};

export const ageCategory: CategoricalField = {
  name: "AgeCategory",
  label: "Rango de edad",
  description: "¿En qué rango de edad te encuentras?",
  options: [
    { value: "Age 18 to 24", label: "18 a 24 años" },
    { value: "Age 25 to 29", label: "25 a 29 años" },
    { value: "Age 30 to 34", label: "30 a 34 años" },
    { value: "Age 35 to 39", label: "35 a 39 años" },
    { value: "Age 40 to 44", label: "40 a 44 años" },
    { value: "Age 45 to 49", label: "45 a 49 años" },
    { value: "Age 50 to 54", label: "50 a 54 años" },
    { value: "Age 55 to 59", label: "55 a 59 años" },
    { value: "Age 60 to 64", label: "60 a 64 años" },
    { value: "Age 65 to 69", label: "65 a 69 años" },
    { value: "Age 70 to 74", label: "70 a 74 años" },
    { value: "Age 75 to 79", label: "75 a 79 años" },
    { value: "Age 80 or older", label: "80 años o más" },
  ],
};

export const tetanusLast10Tdap: CategoricalField = {
  name: "TetanusLast10Tdap",
  label: "Ha sido vacunado contra el tétano",
  description: "¿Te has vacunado contra el tétanos en los últimos 10 años?",
  options: [
    {
      value: "No, did not receive any tetanus shot in the past 10 years",
      label: "No, no me he vacunado en los últimos 10 años",
    },
    {
      value: "Yes, received tetanus shot, but not Tdap",
      label: "Sí, recibí la vacuna, pero no fue Tdap",
    },
    {
      value: "Yes, received tetanus shot but not sure what type",
      label: "Sí, recibí la vacuna pero no estoy seguro del tipo",
    },
    { value: "Yes, received Tdap", label: "Sí, recibí Tdap" },
  ],
};

export const covidPos: CategoricalField = {
  name: "CovidPos",
  label: "COVID-19 positivo",
  description: "¿Has dado positivo en alguna prueba de COVID-19?",
  options: [
    { value: "No", label: "No" },
    { value: "Yes", label: "Sí" },
    {
      value: "Tested positive using home test without a health professional",
      label: "Sí, con prueba casera sin supervisión médica",
    },
  ],
};

// Numeric Fields
export const physicalHealthDays: NumericField = {
  name: "PhysicalHealthDays",
  label: "Días de salud física",
  description: "¿Cuántos días en el último mes tu salud física no fue buena?",
  min: 0,
  max: 30,
  step: 1,
  unit: "días",
};

export const mentalHealthDays: NumericField = {
  name: "MentalHealthDays",
  label: "Días de salud mental",
  description: "¿Cuántos días en el último mes tu salud mental no fue buena?",
  min: 0,
  max: 30,
  step: 1,
  unit: "días",
};

export const sleepHours: NumericField = {
  name: "SleepHours",
  label: "Horas de sueño",
  description: "¿Cuántas horas duermes en promedio por noche?",
  min: 0,
  max: 24,
  step: 0.5,
  unit: "horas",
};

export const heightInMeters: NumericField = {
  name: "HeightInMeters",
  label: "Altura",
  description: "¿Cuál es tu altura?",
  min: 0.5,
  max: 2.5,
  step: 0.01,
  unit: "metros",
};

export const weightInKilograms: NumericField = {
  name: "WeightInKilograms",
  label: "Peso",
  description: "¿Cuál es tu peso?",
  min: 20,
  max: 300,
  step: 0.1,
  unit: "kg",
};

export const bmi: NumericField = {
  name: "BMI",
  label: "Índice de masa corporal",
  description: "Tu índice de masa corporal (IMC)",
  min: 10,
  max: 50,
  step: 0.1,
  unit: "kg/m²",
};
