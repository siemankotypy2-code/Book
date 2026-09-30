export interface CaseStudy {
  id: string;
  title: string;
  subtitle?: string;
  protagonist?: string;
  characters?: { name: string; role?: string; personality?: string }[];
  context: string;
  dilemma?: string;
  timeline?: { time: string; event: string }[];
  story?: string[];
  dialogue?: { speaker: string; text: string; subtext?: string }[];
  // Structure A-J expanded
  decisionTaken?: string;
  whatProtagonistSaw?: string;
  whatWasMissed?: string;
  psychologicalDynamics?: any;
  psychologicalAnalysis?: {
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
  neurobiologicalAnalysis?: {
    brainRegions: { region: string; role: string; activationState: string }[];
    neurotransmitters: { name: string; roleInScenario: string }[];
    biologicalTimeline: { timeMs: string; process: string }[];
  };
  influenceAndManipulation?: {
    tacticsUsed: { tactic: string; description: string; vulnerabilityExploited: string }[];
    counterMeasures: { step: string; script: string; rationale: string }[];
  };
  alternativePath?: string;
  readerQuestion?: string;
  keyTakeaway?: string;
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
  quote?: { text: string; author: string; source?: string };
  paragraphs: string[];
  subsections?: {
    id?: string;
    title: string;
    paragraphs?: string[];
    content?: string[];
    highlightBox?: { title: string; content: string; type: 'insight' | 'warning' | 'neuro' | 'exercise' };
  }[];
  caseStudyRef?: CaseStudy;
  exerciseRef?: SelfExercise;
  interactiveWindowRef?: InteractiveWindowData;
  interactiveWindow?: any;
  highlightBoxes?: any[];
}

export type InteractiveWindowType = 
  | 'microscope'         // Człowiek pod mikroskopem
  | 'dual_perspectives'   // Dwa spojrzenia (Osoba A / Osoba B)
  | 'what_if'            // Co zmieniłoby sytuację? / Zmień jeden element
  | 'counter_case'       // Kontrprzypadek
  | 'what_we_know'       // Co naprawdę wiemy? (Fakty vs Interpretacje)
  | 'loop'               // Pętla relacji / konfliktu
  | 'czlowiek_pod_mikroskopem'
  | string;

export interface MicroscopeLayer {
  stepNumber: number;
  label: string;
  question: string;
  content: string;
  subtext?: string;
}

export interface DualPerspectiveData {
  situation: string;
  personA: {
    name: string;
    quote: string;
    whatTheyKnow: string;
    whatTheyMiss: string;
    interpretation: string;
    coreNeed: string;
    fear: string;
    action: string;
  };
  personB: {
    name: string;
    quote: string;
    whatTheyKnow: string;
    whatTheyMiss: string;
    interpretation: string;
    coreNeed: string;
    fear: string;
    action: string;
  };
  synthesis?: string;
}

export interface WhatIfOption {
  id: string;
  changeLabel: string;
  resultingInterpretation: string;
  resultingBehavior: string;
  psychologicalImpact: string;
}

export interface FactInterpretationItem {
  id: string;
  statement: string;
  category: 'fakt' | 'interpretacja' | 'hipoteza' | 'motyw';
  explanation: string;
}

export interface RelationalLoopStep {
  step: number;
  title: string;
  actor: string;
  action: string;
  interpretationByOther: string;
  emotionalTrigger: string;
  counterAction: string;
}

export interface InteractiveWindowData {
  id: string;
  type: InteractiveWindowType;
  title: string;
  subtitle?: string;
  context: string;
  microscopeLayers?: MicroscopeLayer[];
  microscopeSteps?: any[];
  steps?: any[];
  reflectionPrompt?: string;
  dualPerspective?: DualPerspectiveData;
  whatIfOptions?: {
    defaultScenario: string;
    options: WhatIfOption[];
  };
  counterCase?: {
    standardTheory: string;
    counterExample: string;
    whyItDefiesRule: string;
    deeperLesson: string;
  };
  whatWeKnow?: {
    items: FactInterpretationItem[];
  };
  loopSteps?: RelationalLoopStep[];
  loopStages?: any[];
  takeaway?: string;
  keyTakeaway?: string;
}

export interface Chapter {
  number: number;
  volume?: number;
  volumeChapterNumber?: number;
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
