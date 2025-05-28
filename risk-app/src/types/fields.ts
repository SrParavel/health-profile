export interface BinaryField {
  name: string;
  label: string;
  description: string;
}

export interface NumericField {
  name: string;
  label: string;
  description: string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

export interface CategoricalOption {
  value: string;
  label: string;
}

export interface CategoricalField {
  name: string;
  label: string;
  description: string;
  options: CategoricalOption[];
}
