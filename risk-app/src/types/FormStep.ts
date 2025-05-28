import type { JSX } from "astro/jsx-runtime";

export interface FormStep {
  title: string;
  description: string;
  context: string;
  fields: any[];
  icon: JSX.Element;
}
