import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { ExamQuestion } from '../types/book';

interface ChapterExamWidgetProps {
  chapterNumber: number;
  chapterTitle: string;
  examQuestions: ExamQuestion[];
}

export const ChapterExamWidget: React.FC<ChapterExamWidgetProps> = ({
  chapterNumber,
  chapterTitle,
  examQuestions
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQ = examQuestions[currentIdx];
  const selectedOptionLabel = userAnswers[currentQ.id];

  const handleSelectOption = (label: string) => {
    if (showExplanation) return;
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: label }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIdx + 1 < examQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setUserAnswers({});
    setShowExplanation(false);
    setIsFinished(false);
  };

  // Calculate score and topic stats
  const correctCount = examQuestions.filter((q) => {
    const chosen = userAnswers[q.id];
    const correctOpt = q.options.find((o) => o.isCorrect);
    return correctOpt && chosen === correctOpt.label;
  }).length;

  const percentage = Math.round((correctCount / examQuestions.length) * 100);

  const topicStats: Record<string, { correct: boolean; sectionRef: string }> = {};
  examQuestions.forEach((q) => {
    const chosen = userAnswers[q.id];
    const correctOpt = q.options.find((o) => o.isCorrect);
    topicStats[q.topic] = {
      correct: !!(correctOpt && chosen === correctOpt.label),
      sectionRef: q.sectionRef
    };
  });

  return (
    <div className="my-8 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-md overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-1">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Egzamin Końcowy • Rozdział {chapterNumber}</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-50">
          Weryfikacja Wiedzy i Zastosowań Praktycznych: {chapterTitle}
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Zestaw {examQuestions.length} pytań sytuacyjnych weryfikujących zrozumienie mechanizmów, odróżnianie pojęć i umiejętność aplikacji narzędzi w codziennych wyzwaniach.
        </p>
      </div>

      <div className="p-5 sm:p-6">
        {!isFinished ? (
          <div className="space-y-6">
            {/* Progress Bar & Header */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-stone-500 dark:text-stone-400 mb-2">
                <span>Pytanie {currentIdx + 1} z {examQuestions.length}</span>
                <span>Postęp: {Math.round(((currentIdx + 1) / examQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-amber-600 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / examQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-amber-800 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                  {currentQ.topic}
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {currentQ.sectionRef}
                </span>
              </div>

              <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedOptionLabel === opt.label;
                  let btnStyle = 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/40 hover:bg-stone-100 dark:hover:bg-stone-800/60 text-stone-800 dark:text-stone-200';

                  if (showExplanation) {
                    if (opt.isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200 font-semibold';
                    } else if (isSelected && !opt.isCorrect) {
                      btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200';
                    } else {
                      btnStyle = 'opacity-50 border-stone-200 dark:border-stone-800';
                    }
                  }

                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectOption(opt.label)}
                      disabled={showExplanation}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all text-xs sm:text-sm font-sans flex items-start space-x-3 ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                        {opt.label}
                      </span>
                      <span className="leading-relaxed font-serif pt-0.5">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation box after selection */}
            {showExplanation && (
              <div className="space-y-4 pt-3 animate-fadeIn">
                <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 space-y-2 text-xs sm:text-sm">
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center space-x-1.5">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>Wyjaśnienie Merytoryczne:</span>
                  </div>
                  <p className="text-stone-800 dark:text-stone-200 font-serif leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  <div className="pt-2 border-t border-amber-200/60 dark:border-amber-800/40 text-[11px] font-mono text-amber-950 dark:text-amber-200">
                    <strong>Kluczowa lekcja:</strong> {currentQ.keyTakeaway}
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 hover:bg-amber-900 text-white dark:text-stone-900 font-mono text-xs sm:text-sm font-semibold transition flex items-center space-x-2"
                  >
                    <span>{currentIdx + 1 < examQuestions.length ? 'Następne Pytanie' : 'Zobacz Podsumowanie Testu'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Finished State Report */
          <div className="space-y-6 text-center py-2 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 max-w-lg mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 block mb-1">
                Twój Wynik Egzaminu Końcowego • Rozdział {chapterNumber}
              </span>
              <div className="font-serif font-bold text-5xl text-amber-950 dark:text-amber-100 my-2">
                {correctCount} / {examQuestions.length}
              </div>
              <div className="text-sm font-mono text-stone-600 dark:text-stone-400">
                Poprawne odpowiedzi: {percentage}%
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif mt-3 leading-relaxed">
                {percentage >= 80
                  ? `Świetny wynik! Opanowałeś kluczowe koncepcje Rozdziału ${chapterNumber}. Posiadasz solidny aparat pojęciowy do analizowania własnych reakcji.`
                  : `Dobry punkt wyjścia! Wynik pokazuje, że przyswoiłeś podstawy Rozdziału ${chapterNumber}. Warto wrócić do sekcji powiązanych z błędnymi odpowiedziami.`}
              </p>
            </div>

            {/* Review Recommendations */}
            <div className="text-left space-y-3 max-w-2xl mx-auto pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold block">
                Zalecenia i Sekcje do Powtórki:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(topicStats).map(([topic, data]) => (
                  <div
                    key={topic}
                    className={`p-3 rounded-xl border text-xs flex items-center justify-between space-x-2 ${
                      data.correct
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300'
                        : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/40 text-rose-900 dark:text-rose-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      {data.correct ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                      <span className="font-semibold truncate">{topic}</span>
                    </div>
                    <span className="font-mono text-[10px] text-stone-500 shrink-0">
                      {data.sectionRef}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 text-white dark:text-stone-900 font-mono text-xs font-semibold transition flex items-center space-x-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Rozwiąż test ponownie</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
