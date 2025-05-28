import {
  // Personal Information
  sex,
  ageCategory,
  raceEthnicityCategory,
  generalHealth,
  heightInMeters,
  weightInKilograms,
  bmi,

  // Cardiovascular History
  hadHeartAttack,
  hadAngina,
  hadStroke,
  hadDiabetes,

  // Lifestyle Factors
  physicalActivities,
  smokerStatus,
  eCigaretteUsage,
  alcoholDrinkers,
  sleepHours,
  physicalHealthDays,
  mentalHealthDays,

  // Other Health Conditions
  hadAsthma,
  hadCOPD,
  hadKidneyDisease,
  hadArthritis,
  hadDepressiveDisorder,

  // Physical Functioning
  difficultyWalking,
  difficultyDressingBathing,
  difficultyErrands,
  difficultyConcentrating,

  // Sensory and Physical Characteristics
  deafOrHardOfHearing,
  blindOrVisionDifficulty,
  removedTeeth,

  // Preventive Care
  lastCheckupTime,
  chestScan,
  fluVaxLast12,
  pneumoVaxEver,
  tetanusLast10Tdap,
  hivTesting,
  covidPos,
  highRiskLastYear,
} from "./fields";

import type { FormStep } from "../types/FormStep";
import {
  LuDumbbell,
  LuHeartPulse,
  LuLeaf,
  LuShieldCheck,
  LuStethoscope,
  LuUser,
} from "react-icons/lu";

export const formSteps: FormStep[] = [
  {
    title: "Información Personal",
    description: "Datos básicos para personalizar tu evaluación",
    context:
      "Para brindarte la mejor atención posible, necesitamos conocer algunos datos básicos sobre ti. Esta información nos ayudará a entender mejor tu perfil y proporcionar recomendaciones más precisas para tu salud cardiovascular.",
    fields: [
      sex,
      ageCategory,
      raceEthnicityCategory,
      generalHealth,
      heightInMeters,
      weightInKilograms,
      bmi,
    ],
    icon: LuUser,
  },
  {
    title: "Historial Cardiovascular",
    description: "Información sobre tu salud cardíaca",
    context:
      "Tu historial cardiovascular es fundamental para evaluar tu riesgo actual. Conocer tus experiencias previas nos permite tomar decisiones más informadas sobre tu cuidado y prevención futura.",
    fields: [hadHeartAttack, hadAngina, hadStroke, hadDiabetes],
    icon: LuHeartPulse,
  },
  {
    title: "Estilo de Vida",
    description: "Hábitos y rutinas diarias",
    context:
      "Tu estilo de vida tiene un impacto directo en tu salud cardiovascular. Al conocer tus hábitos diarios, podemos identificar áreas de mejora y sugerir cambios que beneficien tu corazón y tu bienestar general.",
    fields: [
      smokerStatus,
      eCigaretteUsage,
      alcoholDrinkers,
      sleepHours,
      mentalHealthDays,
    ],
    icon: LuLeaf,
  },
  {
    title: "Capacidad Física",
    description: "Movilidad y actividades diarias",
    context:
      "Tu capacidad física y movilidad son indicadores importantes de tu salud general. Esta información nos ayuda a entender mejor tus necesidades y a adaptar las recomendaciones a tu situación específica.",
    fields: [
      physicalActivities,
      difficultyWalking,
      difficultyDressingBathing,
      difficultyErrands,
      difficultyConcentrating,
      physicalHealthDays,
    ],
    icon: LuDumbbell,
  },
  {
    title: "Condiciones de Salud",
    description: "Condiciones médicas y características físicas",
    context:
      "Las condiciones de salud y características físicas pueden afectar tu sistema cardiovascular. Conocer tu historial médico completo nos ayuda a crear un plan de cuidado más efectivo y personalizado.",
    fields: [
      hadAsthma,
      hadCOPD,
      hadKidneyDisease,
      hadArthritis,
      hadDepressiveDisorder,
      deafOrHardOfHearing,
      blindOrVisionDifficulty,
      removedTeeth,
    ],
    icon: LuStethoscope,
  },
  {
    title: "Cuidado Preventivo",
    description: "Historial de vacunas y chequeos médicos",
    context:
      "El cuidado preventivo es esencial para mantener una buena salud cardiovascular. Al conocer tu historial de vacunas y chequeos, podemos asegurarnos de que estés al día con las medidas preventivas necesarias.",
    fields: [
      lastCheckupTime,
      chestScan,
      fluVaxLast12,
      pneumoVaxEver,
      tetanusLast10Tdap,
      hivTesting,
      covidPos,
      highRiskLastYear,
    ],
    icon: LuShieldCheck,
  },
];
