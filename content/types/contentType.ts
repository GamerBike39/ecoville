// typeData.ts

export interface Feature {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  cta?: {
    buttonText?: string;
    href?: string;
    price: string;
    desc?: string;
  };
}

export interface Reason {
  title: string;
  description: string;
  image?: string;
}

export interface EcovilleProjectData {
  title: string;
  subtitle: string;
  whyEcoville: {
    title: string;
    content: string;
  };
  features: Feature[];
  whyJoin: {
    title: string;
    reasons: Reason[];
  };
}

export interface KeyPoint {
  title: string;
  description: string;
}

export interface EcovilleHistoryData {
  title: string;
  content: string;
  beforeImg: string;
  afterImg: string;
  keyPoints: KeyPoint[];
}

export interface EcovilleArchitectureData {
  title: string;
  content: string;
  features: Feature[];
}

export interface EcovilleGovernanceData {
  title: string;
  content: string;
  features: Feature[];
}

export interface ResearchArea {
  title: string;
  description: string;
}

export interface EcovilleInnovationData {
  title: string;
  content: string;
  researchAreas: ResearchArea[];
}

export interface EducationHighlight {
  title: string;
  description: string;
}

export interface EcovilleEducationData {
  title: string;
  content: string;
  highlights: EducationHighlight[];
}

export interface EconomyFeature {
  title: string;
  description: string;
}

export interface EcovilleEconomyData {
  title: string;
  content: string;
  features: EconomyFeature[];
}

export interface EcovilleTourismData {
  title: string;
  content: string;
  features: Feature[];
}

// Si vous avez besoin d'un type global pour regrouper toutes les données d'Écoville
export interface EcovilleData {
  project: EcovilleProjectData;
  history: EcovilleHistoryData;
  architecture: EcovilleArchitectureData;
  governance: EcovilleGovernanceData;
  innovation: EcovilleInnovationData;
  education: EcovilleEducationData;
  economy: EcovilleEconomyData;
  tourism: EcovilleTourismData;
}
