export interface FormData {
  // Campos binarios
  PhysicalActivities: boolean;
  HadHeartAttack: boolean;
  HadAngina: boolean;
  HadStroke: boolean;
  HadAsthma: boolean;
  HadSkinCancer: boolean;
  HadCOPD: boolean;
  HadDepressiveDisorder: boolean;
  HadKidneyDisease: boolean;
  HadArthritis: boolean;
  DeafOrHardOfHearing: boolean;
  BlindOrVisionDifficulty: boolean;
  DifficultyConcentrating: boolean;
  DifficultyWalking: boolean;
  DifficultyDressingBathing: boolean;
  DifficultyErrands: boolean;
  ChestScan: boolean;
  AlcoholDrinkers: boolean;
  HIVTesting: boolean;
  FluVaxLast12: boolean;
  PneumoVaxEver: boolean;
  HighRiskLastYear: boolean;

  // Campos numéricos
  PhysicalHealthDays: number;
  MentalHealthDays: number;
  SleepHours: number;
  HeightInMeters: number;
  WeightInKilograms: number;
  BMI: number;

  // Campos categóricos
  Sex: string;
  GeneralHealth: string;
  LastCheckupTime: string;
  RemovedTeeth: string;
  HadDiabetes: string;
  SmokerStatus: string;
  ECigaretteUsage: string;
  RaceEthnicityCategory: string;
  AgeCategory: string;
  TetanusLast10Tdap: string;
  CovidPos: string;
}

// Valores por defecto para el formulario
export const defaultFormData: FormData = {
  // Campos binarios
  PhysicalActivities: false,
  HadHeartAttack: false,
  HadAngina: false,
  HadStroke: false,
  HadAsthma: false,
  HadSkinCancer: false,
  HadCOPD: false,
  HadDepressiveDisorder: false,
  HadKidneyDisease: false,
  HadArthritis: false,
  DeafOrHardOfHearing: false,
  BlindOrVisionDifficulty: false,
  DifficultyConcentrating: false,
  DifficultyWalking: false,
  DifficultyDressingBathing: false,
  DifficultyErrands: false,
  ChestScan: false,
  AlcoholDrinkers: false,
  HIVTesting: false,
  FluVaxLast12: false,
  PneumoVaxEver: false,
  HighRiskLastYear: false,

  // Campos numéricos
  PhysicalHealthDays: 0,
  MentalHealthDays: 0,
  SleepHours: 0,
  HeightInMeters: 0,
  WeightInKilograms: 0,
  BMI: 0,

  // Campos categóricos
  Sex: "",
  GeneralHealth: "",
  LastCheckupTime: "",
  RemovedTeeth: "",
  HadDiabetes: "",
  SmokerStatus: "",
  ECigaretteUsage: "",
  RaceEthnicityCategory: "",
  AgeCategory: "",
  TetanusLast10Tdap: "",
  CovidPos: "",
};
