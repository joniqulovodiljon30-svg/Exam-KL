
export enum UserRole {
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN'
}

export interface User {
  username: string;
  role: UserRole;
}

export type QuestionType = 'gap_fill' | 'matching' | 'sentence_writing' | 'comparison' | 'definition';

export interface Question {
  id: string;
  text: string;
  correctAnswer?: string;
  options?: string[]; // For matching or gap fill choices
  points: number;
}

export interface Section {
  id: string;
  title: string;
  instructions: string;
  type: QuestionType;
  questions: Question[];
  options?: string[]; // Shared options for the whole section (e.g. gap fill list)
}

export interface ExamVariant {
  id: string;
  variantNumber: number;
  sections: Section[];
}

export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  variants: ExamVariant[];
}

export interface TestResult {
  id: string;
  userId: string;
  themeId: string;
  variantId: string;
  score: number;
  totalPoints: number;
  date: string;
  userAnswers: Record<string, string>;
  feedback: Record<string, string>;
}

export type AppView = 'login' | 'dashboard' | 'theme_details' | 'exam' | 'result' | 'history';
