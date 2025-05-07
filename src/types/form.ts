export interface FormStep {
  title: string;
  description: string;
  context: string;
  fields: any[]; // TODO: Definir un tipo más específico para los campos
}
