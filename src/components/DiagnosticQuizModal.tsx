import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS, calculateDiagnosticResult, DiagnosticResultCategory } from '../data/diagnosticQuiz';
import { X, CheckCircle2, ChevronRight, RotateCcw, Award, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (chapterId: string) => void;
}

export const DiagnosticQuizModal: React.FC<Props> = ({ isOpen, onClose, onSelectChapter }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentQ = DIAGNOSTIC_QUESTIONS[currentStep];
  const progressPercent = Math.round(((currentStep) / DIAGNOSTIC_QUESTIONS.length) * 100);

  const handleSelectOption = (questionId: number, score: number) => {
    const updated = { ...answers, [questionId]: score };
    setAnswers(updated);

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      setIsFinished(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
  };

  const result = isFinished ? calculateDiagnosticResult(answers) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs">
      <div className="bg-[#FAF7F2] dark:bg-stone-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-stone-300 dark:border-stone-800 shadow-2xl p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 transition-colors"
          aria-label="Zamknij"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-800 dark:text-amber-400">
                Autodiagnoza Psychologiczna
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                Profil Wrażliwości na Wpływ i Samoregulacji
              </h2>
              <div className="w-full bg-stone-200 dark:bg-stone-800 h-2 rounded-full mt-4 overflow-hidden">
                <div 
                  className="bg-amber-700 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-stone-500 mt-1.5 font-medium">
                <span>Pytanie {currentStep + 1} z {DIAGNOSTIC_QUESTIONS.length}</span>
                <span>{progressPercent}% ukończono</span>
              </div>
            </div>

            {/* Current Question */}
            <div className="bg-white dark:bg-stone-950 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 mb-6">
              <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug mb-5">
                {currentQ.question}
              </h3>

              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQ.id, opt.score)}
                    className="w-full text-left p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-amber-600 hover:bg-amber-50/50 dark:hover:bg-amber-950/30 transition-all text-xs sm:text-sm text-stone-800 dark:text-stone-200 group flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full border border-stone-300 dark:border-stone-700 group-hover:border-amber-700 group-hover:bg-amber-700 group-hover:text-white flex items-center justify-center font-bold text-xs shrink-0 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed pt-0.5">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation back */}
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(s => s - 1)}
                className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-300 font-medium"
              >
                ← Wróć do poprzedniego pytania
              </button>
            )}
          </div>
        ) : (
          /* Results View */
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 mb-3">
                <Sparkles className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-800 dark:text-amber-400 block">
                Twój Psychologiczny Archetyp
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                {result?.archetype}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto mt-2 leading-relaxed">
                {result?.archetypeDesc}
              </p>
              
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 text-xs font-bold text-amber-900 dark:text-amber-200">
                Ogólna Dojrzałość Neuro-Behawioralna: {result?.overallPercentage}% ({result?.totalScore} / {result?.maxTotalScore} pkt)
              </div>
            </div>

            {/* 5 Categories breakdown */}
            <div className="space-y-4 mb-8">
              <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
                Profil 5 Wymiarów Psychologicznych:
              </h4>
              {result?.categories.map((cat, idx) => (
                <div key={idx} className="bg-white dark:bg-stone-950 p-4 rounded-xl border border-stone-200 dark:border-stone-800">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                      {cat.name}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                      cat.percentage >= 75 
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                        : cat.percentage >= 50 
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' 
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {cat.percentage}%
                    </span>
                  </div>

                  <div className="w-full bg-stone-100 dark:bg-stone-800 h-1.5 rounded-full overflow-hidden mb-2">
                    <div 
                      className={`h-full rounded-full ${
                        cat.percentage >= 75 ? 'bg-emerald-600' : cat.percentage >= 50 ? 'bg-amber-600' : 'bg-rose-600'
                      }`}
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-relaxed">
                    {cat.recommendation}
                  </p>
                  <span className="inline-block mt-1 text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">
                    Kluczowa lektura: {cat.chapterRef}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Rozwiąż test ponownie
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-xs transition-colors shadow-sm"
              >
                Wróć do czytania książki
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
