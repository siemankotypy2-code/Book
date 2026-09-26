export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  protagonist: string;
  context: string;
  story: string[];
  dialogue?: { speaker: string; text: string; subtext?: string }[];
  // Structure A-J expanded
  decisionTaken?: string;
  whatProtagonistSaw?: string;
  whatWasMissed?: string;
  psychologicalAnalysis: {
    coreMechanism: string;
    cognitiveBiases: { name: string; description: string; impact: string }[];
    defenseMechanisms: { name: string; explanation: string }[];
    emotionalDynamic: string;
  };
  decisionProcessAnalysis?: {
    trigger: string;
    attentionFocus: string;
    interpretation: string;
    emotion: string;
    impulse: string;
    action: string;
    consequence: string;
  };
  neurobiologicalAnalysis: {
    brainRegions: { region: string; role: string; activationState: string }[];
    neurotransmitters: { name: string; roleInScenario: string }[];
    biologicalTimeline: { timeMs: string; process: string }[];
  };
  influenceAndManipulation: {
    tacticsUsed: { tactic: string; description: string; vulnerabilityExploited: string }[];
    counterMeasures: { step: string; script: string; rationale: string }[];
  };
  alternativePath?: string;
  readerQuestion?: string;
  keyTakeaway: string;
}

export interface SelfExercise {
  id: string;
  title: string;
  subtitle: string;
  objective: string;
  durationMinutes: number;
  neuroScientificFoundation: string;
  steps: {
    stepNumber: number;
    title: string;
    instruction: string;
    promptText: string;
    placeholder: string;
  }[];
  reflectionQuestions: string[];
}

export interface BookSection {
  id: string;
  pageNumber: number;
  sectionNumber: string;
  title: string;
  category: 'wstep' | 'teoria' | 'studium-przypadku' | 'neuronauka' | 'cwiczenia' | 'podsumowanie';
  readingTimeMinutes: number;
  quote?: { text: string; author: string };
  paragraphs: string[];
  subsections?: {
    title: string;
    paragraphs: string[];
    highlightBox?: { title: string; content: string; type: 'insight' | 'warning' | 'neuro' | 'exercise' };
  }[];
  caseStudyRef?: CaseStudy;
  exerciseRef?: SelfExercise;
}

export interface Chapter {
  number: number;
  title: string;
  subtitle: string;
  leadParagraph: string;
  totalEstimatedPages: number;
  sections: BookSection[];
}

export type ReaderTheme = 'parchment' | 'sepia' | 'dark' | 'clean';
export type FontSize = 'sm' | 'base' | 'lg' | 'xl';

// Decision Process Map Types
export interface DecisionProcessNode {
  id: string;
  stepNumber: number;
  label: string;
  subtitle: string;
  description: string;
  everydayExample: string;
  neurobiologicalContext: string;
  reflectionQuestion: string;
  colorScheme: 'slate' | 'amber' | 'blue' | 'purple' | 'rose' | 'emerald';
}

// Laboratory Experiment Types
export interface LabExperiment {
  id: string;
  number: number;
  title: string;
  category: string;
  instruction: string;
  taskPrompt: string;
  interactiveType: 'speed_choice' | 'fact_vs_interpretation' | 'stroop_attention' | 'emotional_pulse' | 'decision_audit';
  explanation: string;
  reflectionInsight: {
    whatItSaysAboutProcess: string;
    whatItDoesNotSayAboutYou: string;
  };
}

// Chapter Final Exam Question
export interface ExamQuestion {
  id: number;
  question: string;
  topic: string;
  sectionRef: string;
  options: {
    label: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  keyTakeaway: string;
}

export interface ExamResult {
  score: number;
  total: number;
  percentage: number;
  weakTopics: { topic: string; sectionRef: string; advice: string }[];
  summaryMessage: string;
}

// Diagnostic Quiz types for diagnosticQuiz.ts
export interface QuizOption {
  label: string;
  score: number;
  explanation: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  options: QuizOption[];
}

// Glossary types for glossaryData.ts
export interface GlossaryTerm {
  term: string;
  category: string;
  shortDef: string;
  detailedExplanation: string;
  everydayExample: string;
}

// Module types for module1.ts & others
export interface ModuleChapterAdvice {
  heading: string;
  content: string;
}

export interface ModuleChapterStep {
  stepNumber: number;
  title: string;
  description: string;
  inputType: 'text' | 'textarea' | 'checklist';
  promptQuestion?: string;
  options?: string[];
}

export interface Bookmark {
  id: string;
  chapterId: string;
  sectionId?: string;
  createdAt?: string;
}

export type ChapterExercise = ModuleChapterExercise;
export type UserExerciseResponse = any;
export type InteractiveToolConfig = ModuleChapterInteractiveTool;

export interface ModuleChapterExercise {
  id: string;
  title: string;
  estimatedMinutes: number;
  category: string;
  goal: string;
  steps: ModuleChapterStep[];
  reflectionPrompt: string;
}

export interface ModuleChapterInteractiveTool {
  id: string;
  type: string;
  title: string;
  description: string;
  instruction: string;
}

export interface ModuleChapterCaseStudy {
  id: string;
  title: string;
  characters: string[];
  setting: string;
  scenario: string;
  turningPoint: string;
  outcome: string;
}

export interface ModuleChapterPsychAnalysis {
  coreMechanisms: {
    name: string;
    description: string;
    realWorldManifestation: string;
  }[];
  emotionalDynamics: string;
  hiddenMotivations: string;
  cognitiveDistortions: string[];
}

export interface ModuleChapterNeuroInsight {
  brainStructures: {
    name: string;
    role: string;
    functionInScenario: string;
  }[];
  neurotransmitters: {
    name: string;
    effect: string;
  }[];
  scientificSummary: string;
  keyTakeaway: string;
}

export interface ModuleChapter {
  id: string;
  moduleIndex: number;
  chapterNumber: number;
  title: string;
  subtitle: string;
  quote: {
    text: string;
    author: string;
  };
  readingTimeMinutes: number;
  leadParagraph: string;
  foundationalTheory: {
    title: string;
    paragraphs: string[];
  };
  caseStudy: ModuleChapterCaseStudy;
  psychologicalAnalysis: ModuleChapterPsychAnalysis;
  neuroscienceInsight: ModuleChapterNeuroInsight;
  practicalApplication: {
    title: string;
    adviceList: ModuleChapterAdvice[];
  };
  interactiveTool: ModuleChapterInteractiveTool;
  exercise: ModuleChapterExercise;
  keyTakeaways: string[];
}

export interface Module {
  id: string;
  index: number;
  romanNumeral: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  chapters: ModuleChapter[];
}
