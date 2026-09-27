import React, { useRef, useState } from 'react';
import { Chapter, BookSection, ReaderTheme, FontSize, CaseStudy } from '../types/book';
import { caseStudiesList, selfExercisesList } from '../data/chapterOneData';
import { CaseStudyCard } from './CaseStudyCard';
import { BrainNeuroWidget } from './BrainNeuroWidget';
import { SelfReflectExercises } from './SelfReflectExercises';
import { InteractiveDecisionSim } from './InteractiveDecisionSim';
import { DiagnosticTest } from './DiagnosticTest';
import { MicroChoiceWidget } from './MicroChoiceWidget';
import { DualProcessVisualizer } from './DualProcessVisualizer';
import { AttentionExperimentWidget } from './AttentionExperimentWidget';
import { CognitiveBudgetSim } from './CognitiveBudgetSim';
import { ChapterOneLab } from './ChapterOneLab';
import { ChapterOneFinalTest } from './ChapterOneFinalTest';
import { DecisionProcessMap } from './DecisionProcessMap';
import { EmotionalReactionWidget } from './EmotionalReactionWidget';
import { PerceptionExperimentWidget } from './PerceptionExperimentWidget';
import { MemoryExperimentWidget } from './MemoryExperimentWidget';
import { ChapterExamWidget } from './ChapterExamWidget';
import { chapterTwoExamQuestions } from '../data/chapterTwoData';
import { chapterThreeExamQuestions } from '../data/chapterThreeData';
import { chapterFourExamQuestions } from '../data/chapterFourData';
import { chapterFiveExamQuestions } from '../data/chapterFiveData';
import { chapterSixExamQuestions } from '../data/chapterSixData';
import { chapterSevenExamQuestions } from '../data/chapterSevenData';
import { chapterEightExamQuestions } from '../data/chapterEightData';
import { chapterNineExamQuestions } from '../data/chapterNineData';
import { chapterTenExamQuestions } from '../data/chapterTenData';
import { chapterElevenExamQuestions } from '../data/chapterElevenData';
import { chapterTwelveExamQuestions } from '../data/chapterTwelveData';
import { chapterThirteenExamQuestions } from '../data/chapterThirteenData';
import { chapterFourteenExamQuestions } from '../data/chapterFourteenData';
import { chapterFifteenExamQuestions } from '../data/chapterFifteenData';
import { chapterSixteenExamQuestions } from '../data/chapterSixteenData';
import { chapterSeventeenExamQuestions } from '../data/chapterSeventeenData';
import { chapterEighteenExamQuestions } from '../data/chapterEighteenData';
import { chapterNineteenExamQuestions } from '../data/chapterNineteenData';
import { chapterTwentyExamQuestions } from '../data/chapterTwentyData';
import { chapterTwentyOneExamQuestions } from '../data/chapterTwentyOneData';
import { chapterTwentyTwoExamQuestions } from '../data/chapterTwentyTwoData';
import { chapterTwentyThreeExamQuestions } from '../data/chapterTwentyThreeData';
import { chapterTwentyFourExamQuestions } from '../data/chapterTwentyFourData';
import { chapterTwentyFiveExamQuestions } from '../data/chapterTwentyFiveData';
import { chapterTwentySixExamQuestions } from '../data/chapterTwentySixData';
import { chapterTwentySevenExamQuestions } from '../data/chapterTwentySevenData';
import { chapterTwentyEightExamQuestions } from '../data/chapterTwentyEightData';
import { chapterTwentyNineExamQuestions } from '../data/chapterTwentyNineData';
import { chapterThirtyExamQuestions } from '../data/chapterThirtyData';
import { SocialInfluenceLab } from './SocialInfluenceLab';
import { CommunicationLab } from './CommunicationLab';
import { PersuasionLab } from './PersuasionLab';
import { ManipulationDetector } from './ManipulationDetector';
import { RelationshipMap } from './RelationshipMap';
import { DecisionSystemLab } from './DecisionSystemLab';
import { MotivationSystemSim } from './MotivationSystemSim';
import { HabitLoopLab } from './HabitLoopLab';
import { InformationDietAudit } from './InformationDietAudit';
import { NegotiationLab } from './NegotiationLab';
import { ResilienceActionPlan } from './ResilienceActionPlan';
import { SocialSystemMap } from './SocialSystemMap';
import { IdentityMapWidget } from './IdentityMapWidget';
import { BeliefUpdateSimWidget } from './BeliefUpdateSimWidget';
import { SelfEfficacyLabWidget } from './SelfEfficacyLabWidget';
import { ValuesConflictSimWidget } from './ValuesConflictSimWidget';
import { MetacognitionLabWidget } from './MetacognitionLabWidget';
import { SelfRegulationLabWidget } from './SelfRegulationLabWidget';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Bookmark,
  Share2,
  Quote,
  Lightbulb,
  AlertTriangle,
  Brain,
  Users,
  Sparkles
} from 'lucide-react';

interface ReaderViewProps {
  chapter: Chapter;
  activeSection: BookSection;
  onNavigateSection: (direction: 'prev' | 'next') => void;
  hasPrev: boolean;
  hasNext: boolean;
  theme: ReaderTheme;
  fontSize: FontSize;
  completedSections: string[];
  onToggleCompleteSection: (sectionId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const ReaderView: React.FC<ReaderViewProps> = ({
  chapter,
  activeSection,
  onNavigateSection,
  hasPrev,
  hasNext,
  theme,
  fontSize,
  completedSections,
  onToggleCompleteSection,
  isBookmarked,
  onToggleBookmark
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>(caseStudiesList[0].id);

  // Theme styles
  const themeClasses: Record<ReaderTheme, { container: string; text: string; subtext: string; card: string; border: string }> = {
    parchment: {
      container: 'bg-[#FAF7F2]',
      text: 'text-[#23201D]',
      subtext: 'text-stone-600',
      card: 'bg-white/70 border-stone-200/90',
      border: 'border-amber-900/15'
    },
    sepia: {
      container: 'bg-[#F4ECD8]',
      text: 'text-[#3E2F20]',
      subtext: 'text-stone-700',
      card: 'bg-[#EFE3CA] border-[#DECAB0]',
      border: 'border-[#CBB499]'
    },
    dark: {
      container: 'bg-[#18181B]',
      text: 'text-[#E4E4E7]',
      subtext: 'text-stone-400',
      card: 'bg-[#27272A] border-stone-700',
      border: 'border-stone-800'
    },
    clean: {
      container: 'bg-white',
      text: 'text-slate-900',
      subtext: 'text-slate-600',
      card: 'bg-slate-50 border-slate-200',
      border: 'border-slate-200'
    }
  };

  const currentTheme = themeClasses[theme];

  // Font size styles
  const fontSizeClasses: Record<FontSize, { body: string; h1: string; h2: string }> = {
    sm: { body: 'text-base sm:text-lg leading-[1.8]', h1: 'text-2xl sm:text-3xl', h2: 'text-xl sm:text-2xl' },
    base: { body: 'text-lg sm:text-xl leading-[1.85]', h1: 'text-3xl sm:text-4xl', h2: 'text-2xl sm:text-3xl' },
    lg: { body: 'text-xl sm:text-2xl leading-[1.9]', h1: 'text-4xl sm:text-5xl', h2: 'text-3xl sm:text-4xl' },
    xl: { body: 'text-2xl sm:text-3xl leading-[1.95]', h1: 'text-4xl sm:text-6xl', h2: 'text-3xl sm:text-5xl' }
  };

  const currentFont = fontSizeClasses[fontSize];
  const isCompleted = completedSections.includes(activeSection.id);
  const activeCaseStudy = caseStudiesList.find((c) => c.id === selectedCaseStudyId) || caseStudiesList[0];

  return (
    <main className={`min-h-screen transition-colors duration-300 ${currentTheme.container} py-8 sm:py-12 px-4 sm:px-6 lg:px-8`}>
      <div ref={containerRef} className="max-w-4xl mx-auto">
        {/* Book & Chapter Meta Header */}
        <div className="mb-10 pb-6 border-b border-stone-300/60 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-1">
              {chapter.number <= 5
                ? `Tom I • Architektura Umysłu (Rozdział ${chapter.number})`
                : chapter.number <= 16
                ? `Tom II • Człowiek Wśród Ludzi (Rozdział ${chapter.number - 5})`
                : chapter.number === 27
                ? 'Tom III • Autonomia & Samokształtowanie • Rozdział 11 (Integracja Wiedzy Rozdziałów 1–10)'
                : `Tom III • Autonomia & Samokształtowanie (Rozdział ${chapter.number - 16})`}
            </span>
            <div className="text-sm font-sans font-medium text-stone-500">
              {chapter.title}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded-full border border-stone-200 dark:border-stone-700">
              Strona {activeSection.pageNumber} z {chapter.totalEstimatedPages}
            </span>
            <button
              onClick={() => onToggleCompleteSection(activeSection.id)}
              className={`p-2 rounded-xl border text-xs font-mono transition flex items-center space-x-1.5 ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700'
                  : 'text-stone-500 hover:text-stone-900 border-stone-300 dark:border-stone-700'
              }`}
              title="Oznacz moduł jako przeczytany"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">{isCompleted ? 'Przeczytano' : 'Oznacz przeczytane'}</span>
            </button>
            <button
              onClick={onToggleBookmark}
              className={`p-2 rounded-xl border text-xs font-mono transition flex items-center space-x-1.5 ${
                isBookmarked
                  ? 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-700'
                  : 'text-stone-500 hover:text-stone-900 border-stone-300 dark:border-stone-700'
              }`}
              title="Dodaj zakładkę do tej sekcji"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-600 text-amber-600' : 'text-stone-400'}`} />
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-800 dark:text-amber-400 uppercase tracking-widest mb-2 font-bold">
            <span>Sekcja {activeSection.sectionNumber}</span>
            <span>•</span>
            <span>Czas czytania: ok. {activeSection.readingTimeMinutes} min</span>
          </div>
          <h2 className={`font-serif font-bold tracking-tight ${currentFont.h1} ${currentTheme.text}`}>
            {activeSection.title}
          </h2>
        </div>

        {/* Quote if present */}
        {activeSection.quote && (
          <blockquote className="my-8 p-6 rounded-2xl bg-amber-50/60 dark:bg-stone-800/60 border-l-4 border-amber-600 shadow-xs">
            <p className="font-serif italic text-lg sm:text-xl text-stone-800 dark:text-stone-200 leading-relaxed">
              „{activeSection.quote.text}”
            </p>
            <footer className="mt-3 text-xs sm:text-sm font-sans font-bold text-amber-900 dark:text-amber-400">
              — {activeSection.quote.author}
            </footer>
          </blockquote>
        )}

        {/* Lead/First paragraphs */}
        <article className={`space-y-6 font-serif ${currentFont.body} ${currentTheme.text}`}>
          {activeSection.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
              {p}
            </p>
          ))}
        </article>

        {/* --- CHAPTER 1 WIDGETS --- */}
        {activeSection.sectionNumber === '1.1' && (
          <div className="my-10">
            <MicroChoiceWidget />
          </div>
        )}

        {activeSection.sectionNumber === '1.2' && (
          <div className="my-10">
            <DualProcessVisualizer />
          </div>
        )}

        {activeSection.sectionNumber === '1.3' && (
          <div className="my-10">
            <InteractiveDecisionSim />
          </div>
        )}

        {activeSection.sectionNumber === '1.4' && (
          <div className="my-10 space-y-10">
            <BrainNeuroWidget />
            <DiagnosticTest />
          </div>
        )}

        {activeSection.sectionNumber === '1.5' && (
          <div className="my-10">
            <AttentionExperimentWidget />
          </div>
        )}

        {/* --- CHAPTER 2 WIDGETS --- */}
        {(activeSection.sectionNumber === '2.3' || activeSection.sectionNumber === '2.6') && (
          <div className="my-10">
            <EmotionalReactionWidget />
          </div>
        )}

        {/* --- CHAPTER 3 WIDGETS --- */}
        {(activeSection.sectionNumber === '3.1' || activeSection.sectionNumber === '3.3') && (
          <div className="my-10">
            <AttentionExperimentWidget />
          </div>
        )}

        {/* --- CHAPTER 4 WIDGETS --- */}
        {(activeSection.sectionNumber === '4.2' || activeSection.sectionNumber === '4.3') && (
          <div className="my-10">
            <PerceptionExperimentWidget />
          </div>
        )}

        {/* --- CHAPTER 5 WIDGETS --- */}
        {(activeSection.sectionNumber === '5.2' || activeSection.sectionNumber === '5.4') && (
          <div className="my-10">
            <MemoryExperimentWidget />
          </div>
        )}

        {/* Case Study if present on regular sections */}
        {activeSection.caseStudyRef && (
          <div className="my-10">
            <CaseStudyCard caseStudy={activeSection.caseStudyRef} />
          </div>
        )}

        {/* Exercise if present on regular sections */}
        {activeSection.exerciseRef && activeSection.sectionNumber !== '1.8' && (
          <div className="my-10">
            <SelfReflectExercises exercises={[activeSection.exerciseRef]} />
          </div>
        )}

        {/* Subsections if present */}
        {activeSection.subsections && activeSection.subsections.length > 0 && (
          <div className="my-12 space-y-10">
            {activeSection.subsections.map((sub, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className={`font-serif font-bold text-xl sm:text-2xl ${currentTheme.text} border-b border-stone-200 dark:border-stone-800 pb-2`}>
                  {sub.title}
                </h3>
                <div className={`space-y-5 font-serif ${currentFont.body} ${currentTheme.text}`}>
                  {sub.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Highlight Box */}
                {sub.highlightBox && (
                  <div className="my-6 p-5 sm:p-6 rounded-2xl bg-amber-500/10 border border-amber-600/20 shadow-xs">
                    <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-300 font-bold mb-2">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <span>{sub.highlightBox.title}</span>
                    </div>
                    <p className="font-sans text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed">
                      {sub.highlightBox.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SECTION 1.8: Cognitive Budget Simulator & Self-Development Workbook */}
        {activeSection.sectionNumber === '1.8' && (
          <div className="my-10 space-y-10">
            <CognitiveBudgetSim />
            <SelfReflectExercises exercises={selfExercisesList} />
          </div>
        )}

        {/* SECTION 1.11: Laboratory of the Mind (5 Interactive Experiments) */}
        {activeSection.sectionNumber === '1.11' && (
          <div className="my-10">
            <ChapterOneLab />
          </div>
        )}

        {/* SECTION 1.12: Comprehensive Case Studies Deep-Dive Selector */}
        {activeSection.sectionNumber === '1.12' && (
          <div className="my-10 space-y-6">
            <div className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-300 dark:border-stone-700">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-2">
                <Users className="w-4 h-4" />
                <span>Wybierz Studium Przypadku do Szczegółowej Wiwisekcji:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {caseStudiesList.map((cs) => {
                  const isSelected = cs.id === selectedCaseStudyId;
                  return (
                    <button
                      key={cs.id}
                      onClick={() => setSelectedCaseStudyId(cs.id)}
                      className={`p-3 rounded-xl text-left border transition font-sans ${
                        isSelected
                          ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                          : 'bg-white dark:bg-stone-700/80 text-stone-800 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-600 border-stone-300 dark:border-stone-600'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase block opacity-80">
                        {cs.protagonist.split(',')[0]}
                      </span>
                      <h4 className="font-bold text-xs line-clamp-2 mt-0.5">
                        {cs.title.split(':')[0]}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Case Study Card */}
            <CaseStudyCard caseStudy={activeCaseStudy} />
          </div>
        )}

        {/* SECTION 1.14: Interactive Decision Process Map */}
        {activeSection.sectionNumber === '1.14' && (
          <div className="my-10">
            <DecisionProcessMap />
          </div>
        )}

        {/* SECTION 1.15: Chapter One Final Exam */}
        {activeSection.sectionNumber === '1.15' && (
          <div className="my-10">
            <ChapterOneFinalTest />
          </div>
        )}

        {/* SECTION 2.16: Chapter Two Final Exam */}
        {activeSection.sectionNumber === '2.16' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={2}
              chapterTitle="Porwanie Emocjonalne"
              examQuestions={chapterTwoExamQuestions}
            />
          </div>
        )}

        {/* SECTION 3.14: Chapter Three Final Exam */}
        {activeSection.sectionNumber === '3.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={3}
              chapterTitle="Uwaga i Reflektor Świadomości"
              examQuestions={chapterThreeExamQuestions}
            />
          </div>
        )}

        {/* SECTION 4.13: Chapter Four Final Exam */}
        {activeSection.sectionNumber === '4.13' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={4}
              chapterTitle="Percepcja i Filtry Rzeczywistości"
              examQuestions={chapterFourExamQuestions}
            />
          </div>
        )}

        {/* SECTION 5.15: Chapter Five Final Exam */}
        {activeSection.sectionNumber === '5.15' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={5}
              chapterTitle="Pamięć i Rekonstrukcja Przeszłości"
              examQuestions={chapterFiveExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 6 WIDGETS --- */}
        {activeSection.sectionNumber === '6.4' && (
          <div className="my-10">
            <SocialInfluenceLab />
          </div>
        )}

        {activeSection.sectionNumber === '6.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={6}
              chapterTitle="Człowiek Wśród Ludzi"
              examQuestions={chapterSixExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 7 WIDGETS --- */}
        {(activeSection.sectionNumber === '7.2' || activeSection.sectionNumber === '7.4') && (
          <div className="my-10">
            <CommunicationLab />
          </div>
        )}

        {activeSection.sectionNumber === '7.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={7}
              chapterTitle="Komunikacja"
              examQuestions={chapterSevenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 8 WIDGETS --- */}
        {(activeSection.sectionNumber === '8.6' || activeSection.sectionNumber === '8.10') && (
          <div className="my-10">
            <PersuasionLab />
          </div>
        )}

        {activeSection.sectionNumber === '8.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={8}
              chapterTitle="Wpływ i Perswazja"
              examQuestions={chapterEightExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 9 WIDGETS --- */}
        {(activeSection.sectionNumber === '9.5' || activeSection.sectionNumber === '9.12') && (
          <div className="my-10">
            <ManipulationDetector />
          </div>
        )}

        {activeSection.sectionNumber === '9.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={9}
              chapterTitle="Manipulacja"
              examQuestions={chapterNineExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 10 WIDGETS --- */}
        {(activeSection.sectionNumber === '10.3' || activeSection.sectionNumber === '10.8') && (
          <div className="my-10">
            <RelationshipMap />
          </div>
        )}

        {activeSection.sectionNumber === '10.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={10}
              chapterTitle="Relacje"
              examQuestions={chapterTenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 11 WIDGETS --- */}
        {(activeSection.sectionNumber === '11.4' || activeSection.sectionNumber === '11.9') && (
          <div className="my-10">
            <MotivationSystemSim />
          </div>
        )}

        {activeSection.sectionNumber === '11.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={11}
              chapterTitle="Motywacja"
              examQuestions={chapterElevenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 12 WIDGETS --- */}
        {(activeSection.sectionNumber === '12.5' || activeSection.sectionNumber === '12.9') && (
          <div className="my-10">
            <HabitLoopLab />
          </div>
        )}

        {activeSection.sectionNumber === '12.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={12}
              chapterTitle="Nawyki"
              examQuestions={chapterTwelveExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 13 WIDGETS --- */}
        {(activeSection.sectionNumber === '13.2' || activeSection.sectionNumber === '13.12') && (
          <div className="my-10">
            <InformationDietAudit />
          </div>
        )}

        {activeSection.sectionNumber === '13.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={13}
              chapterTitle="Decyzje w Świecie Informacji"
              examQuestions={chapterThirteenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 14 WIDGETS --- */}
        {(activeSection.sectionNumber === '14.2' || activeSection.sectionNumber === '14.8') && (
          <div className="my-10">
            <NegotiationLab />
          </div>
        )}

        {activeSection.sectionNumber === '14.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={14}
              chapterTitle="Konflikt i Negocjacje"
              examQuestions={chapterFourteenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 15 WIDGETS --- */}
        {(activeSection.sectionNumber === '15.4' || activeSection.sectionNumber === '15.12') && (
          <div className="my-10">
            <ResilienceActionPlan />
          </div>
        )}

        {activeSection.sectionNumber === '15.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={15}
              chapterTitle="Samokontrola i Działanie"
              examQuestions={chapterFifteenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM II: CHAPTER 16 WIDGETS --- */}
        {(activeSection.sectionNumber === '16.1' || activeSection.sectionNumber === '16.13') && (
          <div className="my-10">
            <SocialSystemMap />
          </div>
        )}

        {activeSection.sectionNumber === '16.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={16}
              chapterTitle="Człowiek Jako System Społeczny"
              examQuestions={chapterSixteenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 17 (Tom III Rozdział 1) WIDGETS --- */}
        {(activeSection.sectionNumber === '17.4' || activeSection.sectionNumber === '17.8') && (
          <div className="my-10">
            <IdentityMapWidget />
          </div>
        )}

        {(activeSection.sectionNumber === '17.18' || activeSection.sectionNumber === '17.21') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={17}
              chapterTitle="Tożsamość i Obraz Siebie"
              examQuestions={chapterSeventeenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 18 (Tom III Rozdział 2) WIDGETS --- */}
        {(activeSection.sectionNumber === '18.9' || activeSection.sectionNumber === '18.17') && (
          <div className="my-10">
            <BeliefUpdateSimWidget />
          </div>
        )}

        {(activeSection.sectionNumber === '18.18' || activeSection.sectionNumber === '18.21') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={18}
              chapterTitle="Przekonania i Sposób Patrzenia na Świat"
              examQuestions={chapterEighteenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 19 (Tom III Rozdział 3) WIDGETS --- */}
        {(activeSection.sectionNumber === '19.3' || activeSection.sectionNumber === '19.17') && (
          <div className="my-10">
            <SelfEfficacyLabWidget />
          </div>
        )}

        {(activeSection.sectionNumber === '19.18' || activeSection.sectionNumber === '19.21') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={19}
              chapterTitle="Samoocena, Poczucie Skuteczności i Obraz Siebie"
              examQuestions={chapterNineteenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 20 (Tom III Rozdział 4) WIDGETS --- */}
        {(activeSection.sectionNumber === '20.11' || activeSection.sectionNumber === '20.17') && (
          <div className="my-10">
            <ValuesConflictSimWidget />
          </div>
        )}

        {(activeSection.sectionNumber === '20.18' || activeSection.sectionNumber === '20.21') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={20}
              chapterTitle="Wartości, Potrzeby i Priorytety"
              examQuestions={chapterTwentyExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 21 (Tom III Rozdział 5) WIDGETS --- */}
        {(activeSection.sectionNumber === '21.5' || activeSection.sectionNumber === '21.17') && (
          <div className="my-10">
            <MetacognitionLabWidget />
          </div>
        )}

        {(activeSection.sectionNumber === '21.18' || activeSection.sectionNumber === '21.21') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={21}
              chapterTitle="Świadomość Siebie i Metapoznanie"
              examQuestions={chapterTwentyOneExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 22 (Tom III Rozdział 6) WIDGETS --- */}
        {(activeSection.sectionNumber === '22.4' || activeSection.sectionNumber === '22.11' || activeSection.sectionNumber === '22.17') && (
          <div className="my-10">
            <SelfRegulationLabWidget />
          </div>
        )}

        {(activeSection.sectionNumber === '22.18' || activeSection.sectionNumber === '22.21') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={22}
              chapterTitle="Samoregulacja i Kierowanie Zachowaniem"
              examQuestions={chapterTwentyTwoExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 23 (Tom III Rozdział 7) WIDGETS --- */}
        {(activeSection.sectionNumber === '23.8' || activeSection.sectionNumber === '23.12' || activeSection.sectionNumber === '23.17') && (
          <div className="my-10">
            <HabitLoopLab />
          </div>
        )}

        {(activeSection.sectionNumber === '23.27' || activeSection.sectionNumber === '23.28') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={23}
              chapterTitle="Nawyki — jak zachowania stają się częścią codzienności"
              examQuestions={chapterTwentyThreeExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 24 (Tom III Rozdział 8: Decyzje) WIDGETS --- */}
        {(activeSection.sectionNumber === '24.9' || activeSection.sectionNumber === '24.13') && (
          <div className="my-10">
            <InteractiveDecisionSim />
          </div>
        )}

        {(activeSection.sectionNumber === '24.23' || activeSection.sectionNumber === '24.25') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={24}
              chapterTitle="Decyzje i Proces Wybierania (Tom III Rozdział 8)"
              examQuestions={chapterTwentyFourExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 25 (Tom III Rozdział 9: Zachowanie) WIDGETS --- */}
        {(activeSection.sectionNumber === '25.3' || activeSection.sectionNumber === '25.6') && (
          <div className="my-10">
            <HabitLoopLab />
          </div>
        )}

        {(activeSection.sectionNumber === '25.18' || activeSection.sectionNumber === '25.19') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={25}
              chapterTitle="Zachowanie: Od Intencji do Działania (Tom III Rozdział 9)"
              examQuestions={chapterTwentyFiveExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 26 (Tom III Rozdział 10: Zmiana) WIDGETS --- */}
        {(activeSection.sectionNumber === '26.3' || activeSection.sectionNumber === '26.8') && (
          <div className="my-10">
            <SelfRegulationLabWidget />
          </div>
        )}

        {(activeSection.sectionNumber === '26.16' || activeSection.sectionNumber === '26.18') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={26}
              chapterTitle="Zmiana: Od Zrozumienia do Działania (Tom III Rozdział 10)"
              examQuestions={chapterTwentySixExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 27 (Tom III Rozdział 11: Integracja Wiedzy Rozdziałów 1–10) WIDGETS --- */}
        {(activeSection.sectionNumber === '27.2' || activeSection.sectionNumber === '27.4' || activeSection.sectionNumber === '27.12') && (
          <div className="my-10">
            <DecisionSystemLab />
          </div>
        )}

        {activeSection.sectionNumber === '27.14' && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={27}
              chapterTitle="Rozdział 11: Integracja Wiedzy — Od Pojedynczych Rozdziałów do Jednego Systemu"
              examQuestions={chapterTwentySevenExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 28 (Tom III Rozdział 12: Podejmowanie Decyzji) WIDGETS --- */}
        {(activeSection.sectionNumber === '28.24' || activeSection.sectionNumber === '28.29') && (
          <div className="my-10">
            <InteractiveDecisionSim />
          </div>
        )}

        {(activeSection.sectionNumber === '28.30') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={28}
              chapterTitle="Podejmowanie Decyzji — Mechanizmy Wyboru i Niepewność (Rozdział 28)"
              examQuestions={chapterTwentyEightExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 29 (Tom III Rozdział 13: Zdrowe Granice) WIDGETS --- */}
        {(activeSection.sectionNumber === '29.20' || activeSection.sectionNumber === '29.30') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={29}
              chapterTitle="Zdrowe Granice — Ochrona Autonomii i Psychologia Odmowy (Rozdział 29)"
              examQuestions={chapterTwentyNineExamQuestions}
            />
          </div>
        )}

        {/* --- TOM III: CHAPTER 30 (Tom III Rozdział 14: Asertywność) WIDGETS --- */}
        {(activeSection.sectionNumber === '30.12' || activeSection.sectionNumber === '30.18') && (
          <div className="my-10">
            <CommunicationLab />
          </div>
        )}

        {(activeSection.sectionNumber === '30.30') && (
          <div className="my-10">
            <ChapterExamWidget
              chapterNumber={30}
              chapterTitle="Asertywność — Sztuka Komunikacji w Zgodzie ze Sobą (Rozdział 30)"
              examQuestions={chapterThirtyExamQuestions}
            />
          </div>
        )}

        {/* Section Navigation Footer */}
        <div className="mt-14 pt-8 border-t border-stone-300/80 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4 font-sans">
          <button
            onClick={() => onNavigateSection('prev')}
            disabled={!hasPrev}
            className={`px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition flex items-center space-x-2 ${
              hasPrev
                ? 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 border-stone-300 dark:border-stone-700 shadow-xs'
                : 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-transparent'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Poprzednia sekcja</span>
          </button>

          <div className="text-xs font-mono text-stone-400">
            Rozdział {chapter.number} • Sekcja {activeSection.sectionNumber} z {chapter.sections.length}
          </div>

          <button
            onClick={() => onNavigateSection('next')}
            disabled={!hasNext}
            className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center space-x-2 ${
              hasNext
                ? 'bg-amber-800 hover:bg-amber-900 text-white shadow-md'
                : 'opacity-40 cursor-not-allowed bg-stone-200 text-stone-400'
            }`}
          >
            <span>Kolejna sekcja</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
};
