import React from 'react';
import { Chapter, ReaderTheme, FontSize, Bookmark } from '../types/book';
import { InteractiveToolRunner } from './InteractiveToolRunner';
import { ExerciseSection } from './ExerciseSection';
import { 
  Bookmark as BookmarkIcon, 
  BookmarkCheck, 
  Clock, 
  Share2, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight,
  Brain, 
  Flame, 
  Lightbulb, 
  Compass, 
  Quote, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface Props {
  chapter: Chapter;
  theme: ReaderTheme;
  fontSize: FontSize;
  prevChapter?: Chapter;
  nextChapter?: Chapter;
  onNavigateChapter: (chapterId: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (chapter: Chapter) => void;
  onExerciseCompleted: () => void;
}

export const ChapterView: React.FC<Props> = ({
  chapter,
  theme,
  fontSize,
  prevChapter,
  nextChapter,
  onNavigateChapter,
  isBookmarked,
  onToggleBookmark,
  onExerciseCompleted
}) => {
  // Font size classes
  const fontBodyClass = 
    fontSize === 'normal' ? 'text-base leading-relaxed sm:text-lg sm:leading-8' :
    fontSize === 'large' ? 'text-lg leading-8 sm:text-xl sm:leading-9' :
    'text-xl leading-9 sm:text-2xl sm:leading-10';

  const fontTheoryClass = 
    fontSize === 'normal' ? 'text-sm sm:text-base leading-relaxed' :
    fontSize === 'large' ? 'text-base sm:text-lg leading-relaxed' :
    'text-lg sm:text-xl leading-relaxed';

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-14">
      
      {/* Chapter header */}
      <header className="mb-10 sm:mb-14 border-b border-stone-200 dark:border-stone-800 pb-8 sm:pb-12">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-amber-800 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            Rozdział {chapter.chapterNumber} • Moduł {chapter.moduleIndex}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(chapter)}
              className={`p-2 rounded-xl border transition-all ${
                isBookmarked 
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300' 
                  : 'bg-white/80 dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-500 hover:text-stone-900'
              }`}
              title={isBookmarked ? 'Usuń zakładkę' : 'Dodaj zakładkę'}
              aria-label={isBookmarked ? 'Usuń zakładkę' : 'Dodaj zakładkę'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <BookmarkIcon className="w-4 h-4" />}
            </button>
            <span className="flex items-center gap-1 text-xs text-stone-500 bg-white/80 dark:bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-800">
              <Clock className="w-3.5 h-3.5 text-amber-700" /> {chapter.readingTimeMinutes} min
            </span>
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-950 dark:text-stone-50 tracking-tight leading-tight mb-4">
          {chapter.title}
        </h1>

        <p className="text-lg sm:text-xl font-sans text-stone-600 dark:text-stone-300 leading-snug font-normal">
          {chapter.subtitle}
        </p>

        {/* Epigraph / Quote */}
        {chapter.quote && (
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-amber-50/70 dark:bg-stone-900/60 border-l-4 border-amber-700 dark:border-amber-600 italic">
            <Quote className="w-5 h-5 text-amber-700 dark:text-amber-500 mb-2 opacity-75" />
            <p className="font-serif text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed mb-2">
              „{chapter.quote.text}”
            </p>
            <span className="text-xs font-sans not-italic font-semibold text-amber-900 dark:text-amber-400 block text-right">
              — {chapter.quote.author}
            </span>
          </div>
        )}
      </header>

      {/* Main body content */}
      <div className="space-y-12">
        
        {/* Lead Paragraph with drop cap */}
        <section className={`font-serif text-stone-800 dark:text-stone-200 ${fontBodyClass} drop-cap`}>
          {chapter.leadParagraph}
        </section>

        {/* Foundational Theory */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Fundamenty Teoretyczne i Mechanizm</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            {chapter.foundationalTheory.title}
          </h2>
          <div className={`space-y-4 font-serif text-stone-700 dark:text-stone-300 ${fontTheoryClass}`}>
            {chapter.foundationalTheory.paragraphs.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* CASE STUDY SECTION */}
        <section className="bg-white dark:bg-stone-900/80 rounded-3xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-stone-200 dark:border-stone-800">
            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400">
                Szczegółowe Studium Przypadku z Życia Codziennego
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                {chapter.caseStudy.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-stone-50 dark:bg-stone-950 p-4 rounded-xl border border-stone-100 dark:border-stone-900">
            <div>
              <span className="font-bold text-stone-500 uppercase tracking-wider block mb-1">
                Uczestnicy sytuacji:
              </span>
              <ul className="space-y-0.5 font-medium text-stone-800 dark:text-stone-200">
                {chapter.caseStudy.characters.map((char, cIdx) => (
                  <li key={cIdx}>• {char}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-bold text-stone-500 uppercase tracking-wider block mb-1">
                Miejsce i kontekst:
              </span>
              <p className="font-medium text-stone-800 dark:text-stone-200">
                {chapter.caseStudy.setting}
              </p>
            </div>
          </div>

          {/* Scenario story */}
          <div className="space-y-3 font-serif text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-500">
              Przebieg zdarzeń:
            </h4>
            <p className="whitespace-pre-line">
              {chapter.caseStudy.scenario}
            </p>
          </div>

          {/* Turning point & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border-l-3 border-amber-600">
              <span className="font-bold text-xs uppercase text-amber-900 dark:text-amber-300 block mb-1">
                Punkt zwrotny (Turning Point):
              </span>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {chapter.caseStudy.turningPoint}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-100/80 dark:bg-stone-950/50 border-l-3 border-stone-500">
              <span className="font-bold text-xs uppercase text-stone-800 dark:text-stone-300 block mb-1">
                Skutek i wgląd (Outcome):
              </span>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {chapter.caseStudy.outcome}
              </p>
            </div>
          </div>
        </section>

        {/* PSYCHOLOGICAL ANALYSIS SECTION */}
        <section className="bg-stone-50 dark:bg-stone-900/60 rounded-3xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-stone-200 dark:border-stone-800">
            <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-rose-700 dark:text-rose-400">
                Głęboka Analiza Psychologiczna
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Niewidzialne Siły i Zniekształcenia Poznawcze
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapter.psychologicalAnalysis.coreMechanisms.map((mech, mIdx) => (
              <div key={mIdx} className="bg-white dark:bg-stone-950 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-2">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider block">
                  {mech.name}
                </span>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  {mech.description}
                </p>
                <div className="pt-2 border-t border-stone-100 dark:border-stone-900 text-xs text-stone-500 italic">
                  <strong>W scenariuszu: </strong> {mech.realWorldManifestation}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-2 text-xs text-stone-700 dark:text-stone-300">
            <div className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800">
              <strong className="text-stone-900 dark:text-stone-100 block mb-1">Dynamika emocjonalna:</strong>
              {chapter.psychologicalAnalysis.emotionalDynamics}
            </div>

            <div className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800">
              <strong className="text-stone-900 dark:text-stone-100 block mb-1">Ukryte motywacje:</strong>
              {chapter.psychologicalAnalysis.hiddenMotivations}
            </div>

            <div className="p-4 bg-white dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800">
              <strong className="text-stone-900 dark:text-stone-100 block mb-1.5">Zidentyfikowane błędy poznawcze:</strong>
              <div className="flex flex-wrap gap-2">
                {chapter.psychologicalAnalysis.cognitiveDistortions.map((dist, dIdx) => (
                  <span key={dIdx} className="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded-md font-medium text-stone-800 dark:text-stone-200">
                    {dist}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEUROSCIENCE INSIGHT SECTION */}
        <section className="bg-gradient-to-br from-amber-500/5 via-stone-50 to-stone-100/50 dark:from-amber-950/20 dark:via-stone-900/60 dark:to-stone-950 rounded-3xl border border-amber-200/70 dark:border-amber-900/40 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2.5 pb-4 border-b border-amber-200/50 dark:border-stone-800">
            <div className="p-2 rounded-xl bg-amber-800 text-white shadow-sm">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-800 dark:text-amber-400">
                Wgląd Neuronaukowy i Neurobiologia
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                Co Dzieje się w Mózgu podczas Decyzji?
              </h3>
            </div>
          </div>

          {/* Structures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapter.neuroscienceInsight.brainStructures.map((struct, sIdx) => (
              <div key={sIdx} className="bg-white dark:bg-stone-950 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-1.5">
                <span className="text-xs font-bold text-amber-900 dark:text-amber-300 block">
                  {struct.name}
                </span>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  <strong>Rola fizjologiczna: </strong>{struct.role}
                </p>
                <p className="text-xs text-stone-700 dark:text-stone-300 italic pt-1 border-t border-stone-100 dark:border-stone-900">
                  {struct.functionInScenario}
                </p>
              </div>
            ))}
          </div>

          {/* Neurotransmitters */}
          <div className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
              Neuroprzekaźniki i Hormony w Grze:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {chapter.neuroscienceInsight.neurotransmitters.map((nt, ntIdx) => (
                <div key={ntIdx} className="p-2.5 rounded-lg bg-stone-50 dark:bg-stone-900">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block mb-0.5">
                    {nt.name}
                  </span>
                  <span className="text-stone-600 dark:text-stone-400">
                    {nt.effect}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific summary & Takeaway */}
          <div className="p-4 rounded-xl bg-amber-100/50 dark:bg-amber-950/40 text-xs text-stone-800 dark:text-stone-200 space-y-2">
            <p><strong>Konsensus naukowy: </strong>{chapter.neuroscienceInsight.scientificSummary}</p>
            <p className="font-bold text-amber-900 dark:text-amber-300">
              💡 Złota zasada neuronaukowa: {chapter.neuroscienceInsight.keyTakeaway}
            </p>
          </div>
        </section>

        {/* PRACTICAL APPLICATION / BEHAVIORAL ARCHITECTURE */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Zastosowanie w Praktyce</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
            {chapter.practicalApplication.title}
          </h2>

          <div className="space-y-4">
            {chapter.practicalApplication.adviceList.map((adv, aIdx) => (
              <div key={aIdx} className="bg-white dark:bg-stone-900/60 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-1.5">
                <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                  {adv.heading}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                  {adv.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE TOOL RUNNER */}
        <section className="pt-4">
          <InteractiveToolRunner 
            config={chapter.interactiveTool} 
            chapterTitle={chapter.title} 
          />
        </section>

        {/* SELF-DEVELOPMENT EXERCISE SECTION */}
        <ExerciseSection 
          exercise={chapter.exercise}
          chapterId={chapter.id}
          onExerciseCompleted={() => onExerciseCompleted()}
        />

        {/* KEY TAKEAWAYS BULLETS */}
        <section className="bg-amber-100/40 dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-amber-200 dark:border-stone-800 space-y-4">
          <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-700" />
            Kluczowe Wnioski w Jednym Spojrzeniu:
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-800 dark:text-stone-200">
            {chapter.keyTakeaways.map((takeaway, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Chapter navigation footer */}
      <nav className="mt-14 pt-8 border-t border-stone-200 dark:border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevChapter ? (
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigateChapter(prevChapter.id);
            }}
            className="p-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-amber-600 bg-white dark:bg-stone-900 text-left transition-all group"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 group-hover:text-amber-700 flex items-center gap-1 mb-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Poprzedni rozdział
            </span>
            <span className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
              {prevChapter.chapterNumber}. {prevChapter.title}
            </span>
          </button>
        ) : <div />}

        {nextChapter && (
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigateChapter(nextChapter.id);
            }}
            className="p-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-amber-600 bg-white dark:bg-stone-900 text-right transition-all group"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 group-hover:text-amber-700 flex items-center justify-end gap-1 mb-1">
              Następny rozdział <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
              {nextChapter.chapterNumber}. {nextChapter.title}
            </span>
          </button>
        )}
      </nav>

    </article>
  );
};
