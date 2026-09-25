import React, { useState, useEffect } from 'react';
import { SelfExercise } from '../types/book';
import { CheckCircle, Clock, Sparkles, Download, Copy, Check, Bookmark, ArrowRight, Brain } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SelfReflectExercisesProps {
  exercises: SelfExercise[];
}

export const SelfReflectExercises: React.FC<SelfReflectExercisesProps> = ({ exercises }) => {
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>(exercises[0]?.id || '');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('anatomia_umyslu_cwiczenia');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [copied, setCopied] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('anatomia_umyslu_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const activeExercise = exercises.find((e) => e.id === selectedExerciseId) || exercises[0];

  useEffect(() => {
    try {
      localStorage.setItem('anatomia_umyslu_cwiczenia', JSON.stringify(userAnswers));
    } catch (e) {
      console.error('Error saving answers to localStorage', e);
    }
  }, [userAnswers]);

  useEffect(() => {
    try {
      localStorage.setItem('anatomia_umyslu_completed', JSON.stringify(completedExercises));
    } catch (e) {
      console.error('Error saving completed exercises to localStorage', e);
    }
  }, [completedExercises]);

  const handleInputChange = (stepKey: string, value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [stepKey]: value
    }));
  };

  const handleMarkComplete = (exerciseId: string) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises((prev) => [...prev, exerciseId]);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  const handleCopyNotes = () => {
    const textOutput = `=== ZESZYT SAMOROZWOJOWY: ${activeExercise.title} ===\n\n` +
      activeExercise.steps
        .map((step) => {
          const key = `${activeExercise.id}_step_${step.stepNumber}`;
          const answer = userAnswers[key] || '(Brak wpisu)';
          return `[Krok ${step.stepNumber}: ${step.title}]\nInstrukcja: ${step.promptText}\nMoja odpowiedź:\n${answer}\n`;
        })
        .join('\n----------------------------------------\n\n');

    navigator.clipboard.writeText(textOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadNotes = () => {
    const textOutput = `========================================================\n` +
      `ANATOMIA UMYSŁU: ZESZYT ĆWICZEŃ SAMOROZWOJOWYCH\n` +
      `Rozdział 1: Architektura Umysłu i Wolny Wybór\n` +
      `========================================================\n\n` +
      exercises
        .map((ex) => {
          return `## ${ex.title}\n${ex.subtitle}\n\n` +
            ex.steps
              .map((step) => {
                const key = `${ex.id}_step_${step.stepNumber}`;
                const ans = userAnswers[key] || '(brak notatki)';
                return `### Krok ${step.stepNumber}: ${step.title}\n${step.promptText}\n\nOdpowiedź:\n${ans}\n`;
              })
              .join('\n');
        })
        .join('\n\n========================================\n\n');

    const element = document.createElement('a');
    const file = new Blob([textOutput], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Anatomia_Umyslu_Cwiczenia_Rozdzial_1.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const isCompleted = completedExercises.includes(activeExercise.id);

  return (
    <div className="my-10 rounded-2xl border border-stone-300 bg-white shadow-xl overflow-hidden">
      {/* Workbook Header */}
      <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-stone-950 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Praktyczny Zeszyt Samorozwojowy
            </span>
            <span className="text-xs text-stone-400 font-mono">
              Auto-zapis w przeglądarce
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyNotes}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition flex items-center space-x-1.5 text-stone-200"
              title="Kopiuj notatki do schowka"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Skopiowano!' : 'Kopiuj'}</span>
            </button>
            <button
              onClick={handleDownloadNotes}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-amber-600/80 hover:bg-amber-600 transition flex items-center space-x-1.5 text-white"
              title="Pobierz notatki jako plik tekstowy"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Eksportuj (.txt)</span>
            </button>
          </div>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-amber-100">
          Warsztat Neuroplastyczny: Ćwiczenia z Dziennikiem Osobistym
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl font-sans">
          Przełóż wiedzę teoretyczną na trwałe zmiany w mózgu. Wypełnij poniższe pola — Twoje przemyślenia zapisują się automatycznie na Twoim urządzeniu.
        </p>

        {/* Exercise Switcher Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
          {exercises.map((exercise, idx) => {
            const isSelected = exercise.id === activeExercise.id;
            const hasCompleted = completedExercises.includes(exercise.id);

            return (
              <button
                key={exercise.id}
                onClick={() => setSelectedExerciseId(exercise.id)}
                className={`text-left p-3 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-amber-100 text-stone-900 border-amber-300 shadow-sm font-semibold'
                    : 'bg-white/5 hover:bg-white/10 text-stone-300 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono text-[11px] opacity-75">Ćwiczenie {idx + 1}</span>
                  {hasCompleted && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                </div>
                <div className="text-xs font-medium line-clamp-1">
                  {exercise.title.replace(`Ćwiczenie ${idx + 1}: `, '')}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Exercise Detail */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Title & Neuro scientific foundation */}
        <div className="border-b border-stone-200 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              {activeExercise.title}
            </h4>
            <div className="flex items-center space-x-1.5 text-xs text-stone-500 font-mono bg-stone-100 px-2.5 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>Szacowany czas: {activeExercise.durationMinutes} minut</span>
            </div>
          </div>
          <p className="text-sm font-sans text-stone-600 mb-4">
            {activeExercise.subtitle}
          </p>

          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs sm:text-sm text-stone-800 leading-relaxed flex items-start space-x-3">
            <Brain className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-mono text-amber-900 text-xs uppercase tracking-wider block mb-1">
                Fundament Neuronaukowy:
              </strong>
              {activeExercise.neuroScientificFoundation}
            </div>
          </div>
        </div>

        {/* Steps with Interactive Form Fields */}
        <div className="space-y-6">
          {activeExercise.steps.map((step) => {
            const stepKey = `${activeExercise.id}_step_${step.stepNumber}`;
            const currentValue = userAnswers[stepKey] || '';

            return (
              <div key={step.stepNumber} className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center font-mono font-bold shrink-0">
                    {step.stepNumber}
                  </span>
                  <h5 className="font-sans font-bold text-stone-900 text-sm sm:text-base">
                    {step.title}
                  </h5>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  {step.instruction}
                </p>

                <div className="text-xs font-semibold text-stone-800 font-sans">
                  {step.promptText}
                </div>

                <textarea
                  value={currentValue}
                  onChange={(e) => handleInputChange(stepKey, e.target.value)}
                  placeholder={step.placeholder}
                  rows={3}
                  className="w-full text-xs sm:text-sm p-3.5 rounded-lg border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-500/20 bg-white font-sans text-stone-800 placeholder:text-stone-400 leading-relaxed outline-none transition"
                />

                <div className="text-[11px] text-stone-400 font-mono text-right">
                  {currentValue.length > 0 ? `Zapisano ${currentValue.length} znaków` : 'Wpisz swoje przemyślenie'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reflection Questions */}
        {activeExercise.reflectionQuestions.length > 0 && (
          <div className="mt-8 p-5 rounded-xl bg-stone-100/80 border border-stone-200">
            <h5 className="font-mono text-xs uppercase tracking-wider text-stone-600 font-bold mb-3 flex items-center space-x-1.5">
              <Bookmark className="w-4 h-4 text-amber-700" />
              <span>Głębokie Pytania Refleksyjne (Do Rozważenia w Ciszy)</span>
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700 font-serif">
              {activeExercise.reflectionQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-amber-700 font-bold">•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Completion Action */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200">
          <div className="text-xs text-stone-500 font-sans">
            Wypełnienie ćwiczenia tworzy fizyczne, trwałe połączenia synaptyczne w korze przedczołowej.
          </div>

          <button
            onClick={() => handleMarkComplete(activeExercise.id)}
            className={`px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold transition flex items-center space-x-2 ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-stone-900 text-white hover:bg-amber-900'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{isCompleted ? 'Ćwiczenie Ukończone (Kliknij ponownie dla confetti)' : 'Oznacz Ćwiczenie jako Wykonane'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
