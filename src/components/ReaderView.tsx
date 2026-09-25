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
              Tom I • Rozdział {chapter.number}
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

        {/* SECTION 1.1: MicroChoice Dilemma Widget (Sytuacja Michała) */}
        {activeSection.sectionNumber === '1.1' && (
          <div className="my-10">
            <MicroChoiceWidget />
          </div>
        )}

        {/* SECTION 1.2: Dual Process Visualizer (System 1 vs System 2) */}
        {activeSection.sectionNumber === '1.2' && (
          <div className="my-10">
            <DualProcessVisualizer />
          </div>
        )}

        {/* SECTION 1.3: Interactive Decision Simulator */}
        {activeSection.sectionNumber === '1.3' && (
          <div className="my-10">
            <InteractiveDecisionSim />
          </div>
        )}

        {/* SECTION 1.4: Brain Neuro Widget & Diagnostic Test */}
        {activeSection.sectionNumber === '1.4' && (
          <div className="my-10 space-y-10">
            <BrainNeuroWidget />
            <DiagnosticTest />
          </div>
        )}

        {/* SECTION 1.5: Attention Experiment Widget (Stroop & Selective Attention) */}
        {activeSection.sectionNumber === '1.5' && (
          <div className="my-10">
            <AttentionExperimentWidget />
          </div>
        )}

        {/* Case Study if present on regular sections */}
        {activeSection.caseStudyRef && (
          <div className="my-10">
            <CaseStudyCard caseStudy={activeSection.caseStudyRef} />
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
            Rozdział 1 • Sekcja {activeSection.sectionNumber} z {chapter.sections.length}
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
