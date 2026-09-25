import React, { useState, useEffect } from 'react';
import { ChapterExercise, UserExerciseResponse } from '../types/book';
import { CheckCircle2, Clock, Dumbbell, Save, Award, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  exercise: ChapterExercise;
  chapterId: string;
  onExerciseCompleted?: (response: UserExerciseResponse) => void;
}

export const ExerciseSection: React.FC<Props> = ({ exercise, chapterId, onExerciseCompleted }) => {
  const storageKey = `exercise_${chapterId}_${exercise.id}`;
  
  const [answers, setAnswers] = useState<Record<string, string | number | string[]>>({});
  const [reflection, setReflection] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [savedTime, setSavedTime] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed: UserExerciseResponse = JSON.parse(saved);
        setAnswers(parsed.answers || {});
        setReflection(parsed.reflection || '');
        setIsCompleted(true);
        setSavedTime(parsed.completedAt);
      } else {
        setAnswers({});
        setReflection('');
        setIsCompleted(false);
        setSavedTime(null);
      }
    } catch {
      // ignore
    }
  }, [storageKey]);

  const handleTextChange = (stepNumber: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [`step_${stepNumber}`]: value
    }));
  };

  const handleChecklistToggle = (stepNumber: number, option: string) => {
    const current = (answers[`step_${stepNumber}`] as string[]) || [];
    const updated = current.includes(option)
      ? current.filter(item => item !== option)
      : [...current, option];
    
    setAnswers(prev => ({
      ...prev,
      [`step_${stepNumber}`]: updated
    }));
  };

  const handleSave = () => {
    const response: UserExerciseResponse = {
      chapterId,
      exerciseId: exercise.id,
      answers,
      reflection,
      completedAt: new Date().toISOString()
    };

    localStorage.setItem(storageKey, JSON.stringify(response));
    setIsCompleted(true);
    setSavedTime(response.completedAt);

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.85 }
      });
    } catch {
      // ignore
    }

    if (onExerciseCompleted) {
      onExerciseCompleted(response);
    }
  };

  return (
    <section className="mt-12 pt-8 border-t-2 border-stone-200 dark:border-stone-800">
      <div className="bg-amber-50/60 dark:bg-stone-900/90 rounded-2xl border border-amber-200/80 dark:border-stone-800 p-6 sm:p-8 shadow-sm">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-200/60 dark:border-stone-800">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-700 text-white shadow-sm shrink-0">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-800 dark:text-amber-400">
                  Ćwiczenie Samorozwojowe i Integracja
                </span>
                {isCompleted && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ukończone
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100 mt-0.5">
                {exercise.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-stone-600 dark:text-stone-400">
            <span className="flex items-center gap-1 bg-white dark:bg-stone-950 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              ok. {exercise.estimatedMinutes} minut
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg hover:bg-stone-200/60 dark:hover:bg-stone-800 text-stone-500 transition-colors"
              aria-label={isExpanded ? 'Zwiń ćwiczenie' : 'Rozwiń ćwiczenie'}
            >
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-6 space-y-8">
            {/* Goal card */}
            <div className="p-4 rounded-xl bg-white/80 dark:bg-stone-950/80 border border-stone-200 dark:border-stone-800 text-sm">
              <span className="font-semibold text-stone-900 dark:text-stone-100">Cel praktyczny: </span>
              <span className="text-stone-700 dark:text-stone-300">{exercise.goal}</span>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {exercise.steps.map(step => (
                <div 
                  key={step.stepNumber} 
                  className="bg-white dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 font-bold text-xs flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </span>
                    <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">
                      {step.title}
                    </h4>
                  </div>
                  
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed pl-8">
                    {step.description}
                  </p>

                  {/* Text or Textarea */}
                  {(step.inputType === 'text' || step.inputType === 'textarea' || !step.inputType) && (
                    <div className="pl-8 pt-1">
                      {step.promptQuestion && (
                        <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                          {step.promptQuestion}
                        </label>
                      )}
                      {step.inputType === 'text' ? (
                        <input
                          type="text"
                          value={(answers[`step_${step.stepNumber}`] as string) || ''}
                          onChange={e => handleTextChange(step.stepNumber, e.target.value)}
                          placeholder="Wpisz swoją odpowiedź..."
                          className="w-full text-sm p-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-600/30"
                        />
                      ) : (
                        <textarea
                          rows={3}
                          value={(answers[`step_${step.stepNumber}`] as string) || ''}
                          onChange={e => handleTextChange(step.stepNumber, e.target.value)}
                          placeholder="Rozpisz swoje refleksje..."
                          className="w-full text-sm p-3 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-600/30"
                        />
                      )}
                    </div>
                  )}

                  {/* Checklist */}
                  {step.inputType === 'checklist' && step.options && (
                    <div className="pl-8 pt-1 space-y-2">
                      {step.options.map((opt, idx) => {
                        const current = (answers[`step_${step.stepNumber}`] as string[]) || [];
                        const checked = current.includes(opt);
                        return (
                          <label key={idx} className="flex items-center gap-2.5 text-xs text-stone-800 dark:text-stone-200 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleChecklistToggle(step.stepNumber, opt)}
                              className="rounded border-stone-300 dark:border-stone-700 text-amber-700 focus:ring-amber-600 w-4 h-4"
                            />
                            <span>{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Deep Reflection Box */}
            <div className="bg-white dark:bg-stone-950 p-5 rounded-xl border border-amber-300/80 dark:border-amber-900/60 space-y-3">
              <span className="text-xs uppercase font-bold text-amber-800 dark:text-amber-400 block">
                Głęboka Refleksja Końcowa:
              </span>
              <p className="text-xs text-stone-600 dark:text-stone-400 italic">
                {exercise.reflectionPrompt}
              </p>
              <textarea
                rows={4}
                value={reflection}
                onChange={e => setReflection(e.target.value)}
                placeholder="Zanotuj swój wgląd. Będzie on dostępny w Twoim osobistym Dzienniku Refleksji..."
                className="w-full text-sm p-3.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-600/30"
              />
            </div>

            {/* Save Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                onClick={handleSave}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-medium text-sm transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                {isCompleted ? 'Zaktualizuj swoje odpowiedzi' : 'Zapisz ćwiczenie w Dzienniku'}
              </button>

              {savedTime && (
                <span className="text-xs text-stone-500">
                  Zapisano: {new Date(savedTime).toLocaleDateString('pl-PL', { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
