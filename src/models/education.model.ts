interface LanguageModel {
  en: string;
  de: string;
  link: string;
}

interface DegreeModel {
  full: string;
  abbreviation: string;
}

interface DurationModel {
  from: number;
  to?: number;
}

interface ThesisModel {
  title: string;
  link: string;
}

interface ExchangeModel {
  title: string;
  period: string;
  year: number;
  university: string;
  link: string;
}

export interface EducationModel {
  title: LanguageModel;
  abbreviation: string;
  degree: DegreeModel;
  duration: DurationModel;
  university: LanguageModel;
  thesis?: ThesisModel;
  exchange?: ExchangeModel;
}
