export type IndustryType = 'all' | 'automotive' | 'heavy' | 'steel';

export type JobRoleType =
  | 'all'
  | '생산기술'
  | 'R&D / 설계'
  | '품질관리 / 보증'
  | '구매 / SCM'
  | '사업기획 / 영업';

export interface TechnicalTerm {
  term: string;
  definition: string;
  practicalNote: string;
}

export interface JobConnection {
  role: string;
  connection: string;
  requiredSkill: string;
}

export interface InterviewQuestion {
  question: string;
  answerTip: string;
}

export interface NewsAnalysis {
  coreSummary: string;
  industryImpact: string;
  companyImpact: string;
  technicalTerms: TechnicalTerm[];
  jobConnections: JobConnection[];
  interviewQuestions: InterviewQuestion[];
}

export interface NewsArticle {
  id: string;
  title: string;
  industry: 'automotive' | 'heavy' | 'steel';
  companies: string[];
  source: string;
  sourceUrl: string;
  publishedAt: string;
  collectedAt: string;
  keywords: string[];
  summary: string;
  jobSeekerImplication: string;
  relevantJobs: string[];
  hasAnalysis: boolean;
  analysis?: NewsAnalysis;
  imageUrl?: string;
  readTimeMin?: number;
}

export interface CompanyInfo {
  id: string;
  name: string;
  englishName: string;
  industry: 'automotive' | 'heavy' | 'steel';
  coreBusiness: string;
  keyProducts: string[];
  targetJobs: string[];
  hiringFocus2026: string;
  headquarters: string;
  stockTicker?: string;
}

export interface IndustryReport {
  id: string;
  title: string;
  industry: 'automotive' | 'heavy' | 'steel';
  targetAudience: string;
  readingTime: string;
  publishedDate: string;
  author: string;
  keySummary: string[];
  sections: {
    heading: string;
    content: string;
    actionForCandidates: string;
  }[];
  recommendedKeywords: string[];
}
