export type LanguageLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type LanguageAdditional = 'Mothertongue' | 'Basic' | 'Fluent';

export interface LanguageModel {
  name: string;
  level: LanguageLevel;
  additional: LanguageAdditional;
}
