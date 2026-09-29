import React, { useState } from 'react';
import {
  InteractiveWindowData,
  MicroscopeLayer,
  WhatIfOption,
  FactInterpretationItem,
  RelationalLoopStep
} from '../types/book';
import {
  Search,
  Users2,
  Sliders,
  Scale,
  CheckCircle2,
  Repeat,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Info,
  HelpCircle,
  Eye,
  Brain,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface Props {
  data: InteractiveWindowData;
}

export const InteractiveAnalyticalWindowCard: React.FC<Props> = ({ data }) => {
  // State for Microscope
  const [activeMicroscopeStep, setActiveMicroscopeStep] = useState<number>(1);
  const [unfoldedMicroscopeCount, setUnfoldedMicroscopeCount] = useState<number>(3);

  // State for Dual Perspectives
  const [activePerspective, setActivePerspective] = useState<'A' | 'B' | 'compare'>('A');

  // State for What-If
  const [selectedWhatIfIndex, setSelectedWhatIfIndex] = useState<number>(0);

  // State for What We Know (Fakty vs Interpretacje)
  const [revealedItems, setRevealedItems] = useState<Record<string, boolean>>({});
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // State for Loop
  const [activeLoopStep, setActiveLoopStep] = useState<number>(1);

  const toggleReveal = (id: string) => {
    setRevealedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getBadgeForType = (type: InteractiveWindowData['type']) => {
    switch (type) {
      case 'microscope':
        return { label: 'Człowiek pod mikroskopem', icon: Search, bg: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20' };
      case 'dual_perspectives':
        return { label: 'Dwa spojrzenia (Dwie perspektywy)', icon: Users2, bg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20' };
      case 'what_if':
        return { label: 'Co zmieniłoby sytuację? (Eksperyment myślowy)', icon: Sliders, bg: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20' };
      case 'counter_case':
        return { label: 'Kontrprzypadek (Granice reguły)', icon: Scale, bg: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20' };
      case 'what_we_know':
        return { label: 'Co naprawdę wiemy? (Fakty vs Interpretacje)', icon: CheckCircle2, bg: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20' };
      case 'loop':
        return { label: 'Pętla wzajemnego oddziaływania', icon: Repeat, bg: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20' };
    }
  };

  const badge = getBadgeForType(data.type);
  const BadgeIcon = badge.icon;

  return (
    <div className="my-10 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg overflow-hidden font-sans">
      {/* Top Banner */}
      <div className="p-5 sm:p-6 bg-stone-50 dark:bg-stone-950/60 border-b border-stone-200 dark:border-stone-800">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.bg}`}>
            <BadgeIcon className="w-3.5 h-3.5" />
            {badge.label}
          </span>
          <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
            Interaktywne Okno Analityczne
          </span>
        </div>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
          {data.title}
        </h3>
        {data.subtitle && (
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 font-serif italic">
            {data.subtitle}
          </p>
        )}
        <div className="mt-3 p-3.5 rounded-xl bg-stone-100/80 dark:bg-stone-800/60 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed border border-stone-200/60 dark:border-stone-700/60">
          <strong className="text-stone-900 dark:text-stone-100">Kontekst sytuacji: </strong>
          {data.context}
        </div>
      </div>

      {/* Main Body per Window Type */}
      <div className="p-5 sm:p-7">
        {/* 1. MICROSCOPE */}
        {data.type === 'microscope' && data.microscopeLayers && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                Rozwijaj kolejne poziomy analizy psychologicznej:
              </span>
              <button
                onClick={() => setUnfoldedMicroscopeCount(unfoldedMicroscopeCount >= data.microscopeLayers!.length ? 3 : data.microscopeLayers!.length)}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {unfoldedMicroscopeCount >= data.microscopeLayers.length ? 'Zwiń do 3 kroków' : 'Rozwiń wszystkie poziomy'}
              </button>
            </div>

            <div className="space-y-3">
              {data.microscopeLayers.slice(0, unfoldedMicroscopeCount).map((layer) => {
                const isActive = activeMicroscopeStep === layer.stepNumber;
                return (
                  <div
                    key={layer.stepNumber}
                    onClick={() => setActiveMicroscopeStep(layer.stepNumber)}
                    className={`rounded-xl border transition-all cursor-pointer p-4 ${
                      isActive
                        ? 'bg-indigo-50/70 dark:bg-indigo-950/30 border-indigo-300 dark:border-indigo-700/60 shadow-xs'
                        : 'bg-stone-50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 hover:bg-stone-100/60 dark:hover:bg-stone-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                          isActive
                            ? 'bg-indigo-600 text-white'
                            : 'bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                        }`}>
                          {layer.stepNumber}
                        </span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                            {layer.label}
                          </span>
                          <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                            {layer.question}
                          </h4>
                        </div>
                      </div>
                      <span className="text-stone-400">
                        {isActive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </div>

                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-indigo-200/60 dark:border-indigo-800/40 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed space-y-1.5 animate-fadeIn">
                        <p>{layer.content}</p>
                        {layer.subtext && (
                          <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-300 bg-white/70 dark:bg-stone-900/60 p-2 rounded-lg border border-indigo-100 dark:border-indigo-900/40">
                            💡 Wgląd: {layer.subtext}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {unfoldedMicroscopeCount < data.microscopeLayers.length && (
              <div className="text-center pt-2">
                <button
                  onClick={() => setUnfoldedMicroscopeCount(prev => Math.min(prev + 3, data.microscopeLayers!.length))}
                  className="px-4 py-2 text-xs font-semibold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl transition"
                >
                  Pokaż kolejne 3 warstwy (jeszcze {data.microscopeLayers.length - unfoldedMicroscopeCount})
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. DUAL PERSPECTIVES */}
        {data.type === 'dual_perspectives' && data.dualPerspective && (
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 p-1.5 bg-stone-100 dark:bg-stone-800 rounded-xl w-fit mx-auto text-xs font-semibold">
              <button
                onClick={() => setActivePerspective('A')}
                className={`px-4 py-2 rounded-lg transition ${
                  activePerspective === 'A'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
              >
                Perspektywa: {data.dualPerspective.personA.name}
              </button>
              <button
                onClick={() => setActivePerspective('B')}
                className={`px-4 py-2 rounded-lg transition ${
                  activePerspective === 'B'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
              >
                Perspektywa: {data.dualPerspective.personB.name}
              </button>
              <button
                onClick={() => setActivePerspective('compare')}
                className={`px-4 py-2 rounded-lg transition ${
                  activePerspective === 'compare'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                }`}
              >
                Porównanie Side-by-Side
              </button>
            </div>

            {activePerspective !== 'compare' && (
              <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 space-y-4">
                {(() => {
                  const person = activePerspective === 'A' ? data.dualPerspective.personA : data.dualPerspective.personB;
                  return (
                    <>
                      <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-emerald-100 dark:border-emerald-900/60 font-serif italic text-stone-800 dark:text-stone-200 text-sm">
                        „{person.quote}”
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                        <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                          <span className="font-bold text-emerald-800 dark:text-emerald-400 uppercase text-[10px] block font-mono">Co ta osoba wie?</span>
                          <p className="mt-1 text-stone-700 dark:text-stone-300">{person.whatTheyKnow}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                          <span className="font-bold text-rose-700 dark:text-rose-400 uppercase text-[10px] block font-mono">Czego nie wie / co pomija?</span>
                          <p className="mt-1 text-stone-700 dark:text-stone-300">{person.whatTheyMiss}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                          <span className="font-bold text-amber-800 dark:text-amber-400 uppercase text-[10px] block font-mono">Główna interpretacja intencji:</span>
                          <p className="mt-1 text-stone-700 dark:text-stone-300">{person.interpretation}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                          <span className="font-bold text-sky-800 dark:text-sky-400 uppercase text-[10px] block font-mono">Kluczowa potrzeba i obawa:</span>
                          <p className="mt-1 text-stone-700 dark:text-stone-300">Potrzeba: {person.coreNeed} | Obawa: {person.fear}</p>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm">
                        <strong className="text-stone-900 dark:text-stone-100">Podejmowane zachowanie: </strong>
                        <span className="text-stone-700 dark:text-stone-300">{person.action}</span>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {activePerspective === 'compare' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 border-b pb-1.5">{data.dualPerspective.personA.name}</h4>
                  <p className="italic font-serif text-stone-600 dark:text-stone-400">„{data.dualPerspective.personA.quote}”</p>
                  <p><strong>Interpretuje:</strong> {data.dualPerspective.personA.interpretation}</p>
                  <p><strong>Potrzebuje:</strong> {data.dualPerspective.personA.coreNeed}</p>
                  <p><strong>Boi się:</strong> {data.dualPerspective.personA.fear}</p>
                  <p><strong>Robi:</strong> {data.dualPerspective.personA.action}</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 border-b pb-1.5">{data.dualPerspective.personB.name}</h4>
                  <p className="italic font-serif text-stone-600 dark:text-stone-400">„{data.dualPerspective.personB.quote}”</p>
                  <p><strong>Interpretuje:</strong> {data.dualPerspective.personB.interpretation}</p>
                  <p><strong>Potrzebuje:</strong> {data.dualPerspective.personB.coreNeed}</p>
                  <p><strong>Boi się:</strong> {data.dualPerspective.personB.fear}</p>
                  <p><strong>Robi:</strong> {data.dualPerspective.personB.action}</p>
                </div>
              </div>
            )}

            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs sm:text-sm text-stone-800 dark:text-stone-200 border-l-4 border-emerald-600">
              <strong className="block font-semibold mb-1">Synteza dwuperspektywiczna:</strong>
              {data.dualPerspective.synthesis}
            </div>
          </div>
        )}

        {/* 3. WHAT IF / CHANGE ONE VARIABLE */}
        {data.type === 'what_if' && data.whatIfOptions && (
          <div className="space-y-6">
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs sm:text-sm text-stone-800 dark:text-stone-200">
              <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 block mb-1">
                Scenariusz Bazowy:
              </span>
              {data.whatIfOptions.defaultScenario}
            </div>

            <div>
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block mb-2">
                Wybierz zmienną, którą modyfikujesz w historii:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {data.whatIfOptions.options.map((opt, idx) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedWhatIfIndex(idx)}
                    className={`p-3 rounded-xl border text-left transition text-xs font-sans ${
                      selectedWhatIfIndex === idx
                        ? 'bg-amber-700 text-white border-amber-800 shadow-sm font-semibold'
                        : 'bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 border-stone-200 dark:border-stone-700'
                    }`}
                  >
                    <span className="font-mono block text-[10px] opacity-80 uppercase">Wariant {idx + 1}</span>
                    <span className="mt-0.5 block">{opt.changeLabel}</span>
                  </button>
                ))}
              </div>
            </div>

            {(() => {
              const currentOpt = data.whatIfOptions.options[selectedWhatIfIndex];
              return (
                <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-3.5 animate-fadeIn">
                  <div className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                    Skutek zmiany: {currentOpt.changeLabel}
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p>
                      <strong className="text-stone-900 dark:text-stone-100">Zmiana interpretacji w umyśle: </strong>
                      <span className="text-stone-700 dark:text-stone-300">{currentOpt.resultingInterpretation}</span>
                    </p>
                    <p>
                      <strong className="text-stone-900 dark:text-stone-100">Wynikowe zachowanie: </strong>
                      <span className="text-stone-700 dark:text-stone-300">{currentOpt.resultingBehavior}</span>
                    </p>
                    <p>
                      <strong className="text-stone-900 dark:text-stone-100">Psychologiczny mechanizm: </strong>
                      <span className="text-stone-700 dark:text-stone-300">{currentOpt.psychologicalImpact}</span>
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 4. COUNTER-CASE */}
        {data.type === 'counter_case' && data.counterCase && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-stone-500 block mb-1">
                  Uproszczona teoria potoczna
                </span>
                <p className="text-stone-800 dark:text-stone-200">{data.counterCase.standardTheory}</p>
              </div>
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-rose-700 dark:text-rose-400 block mb-1">
                  Rzeczywisty kontrprzypadek
                </span>
                <p className="text-stone-800 dark:text-stone-200">{data.counterCase.counterExample}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-2 text-xs sm:text-sm">
              <h4 className="font-bold text-stone-900 dark:text-stone-100">Dlaczego ten przypadek łamie schemat?</h4>
              <p className="text-stone-700 dark:text-stone-300">{data.counterCase.whyItDefiesRule}</p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border-l-4 border-indigo-600 text-xs sm:text-sm text-stone-800 dark:text-stone-200">
              <strong>Głębsza nauka: </strong>
              {data.counterCase.deeperLesson}
            </div>
          </div>
        )}

        {/* 5. WHAT WE KNOW (FAKTY VS INTERPRETACJE) */}
        {data.type === 'what_we_know' && data.whatWeKnow && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                Kliknij na element, aby odsłonić jego weryfikację poznawczą:
              </span>
              <div className="flex gap-1.5 text-xs">
                {['all', 'fakt', 'interpretacja', 'hipoteza', 'motyw'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-2.5 py-1 rounded-md capitalize transition ${
                      filterCategory === cat
                        ? 'bg-sky-700 text-white font-semibold'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    {cat === 'all' ? 'Wszystkie' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              {data.whatWeKnow.items
                .filter(item => filterCategory === 'all' || item.category === filterCategory)
                .map((item) => {
                  const isRevealed = !!revealedItems[item.id];
                  const catColors = {
                    fakt: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300',
                    interpretacja: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
                    hipoteza: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300',
                    motyw: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300'
                  }[item.category];

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleReveal(item.id)}
                      className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:bg-stone-100/60 dark:hover:bg-stone-800 cursor-pointer transition"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs sm:text-sm font-medium text-stone-900 dark:text-stone-100">
                          {item.statement}
                        </p>
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold uppercase font-mono border shrink-0 ${catColors}`}>
                          {item.category}
                        </span>
                      </div>

                      {isRevealed && (
                        <div className="mt-2.5 pt-2.5 border-t border-stone-200 dark:border-stone-700 text-xs text-stone-600 dark:text-stone-300 animate-fadeIn">
                          <strong>Dlaczego to {item.category}? </strong>
                          {item.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* 6. RELATIONAL / CONFLICT LOOP */}
        {data.type === 'loop' && data.loopSteps && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {data.loopSteps.map((step) => {
                const isActive = activeLoopStep === step.step;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveLoopStep(step.step)}
                    className={`p-2.5 rounded-xl border text-center transition font-sans ${
                      isActive
                        ? 'bg-purple-700 text-white border-purple-800 shadow-sm font-bold'
                        : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span className="block text-[10px] font-mono opacity-80 uppercase">Ogniwo {step.step}</span>
                    <span className="text-xs truncate block">{step.title}</span>
                  </button>
                );
              })}
            </div>

            {(() => {
              const currentStep = data.loopSteps.find(s => s.step === activeLoopStep) || data.loopSteps[0];
              return (
                <div className="p-5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/40 space-y-3 animate-fadeIn text-xs sm:text-sm">
                  <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-900/60 pb-2">
                    <span className="font-bold text-purple-900 dark:text-purple-300 text-sm">
                      Ogniwo {currentStep.step}: {currentStep.title} ({currentStep.actor})
                    </span>
                    <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400">
                      Cykliczna dynamika
                    </span>
                  </div>

                  <p>
                    <strong className="text-stone-900 dark:text-stone-100">Działanie aktora: </strong>
                    <span className="text-stone-700 dark:text-stone-300">{currentStep.action}</span>
                  </p>
                  <p>
                    <strong className="text-stone-900 dark:text-stone-100">Interpretacja u drugiej strony: </strong>
                    <span className="text-stone-700 dark:text-stone-300">{currentStep.interpretationByOther}</span>
                  </p>
                  <p>
                    <strong className="text-stone-900 dark:text-stone-100">Wyzwalacz emocjonalny: </strong>
                    <span className="text-stone-700 dark:text-stone-300">{currentStep.emotionalTrigger}</span>
                  </p>
                  <p>
                    <strong className="text-stone-900 dark:text-stone-100">Kontrreakcja napędzająca kolejną rundę: </strong>
                    <span className="text-stone-700 dark:text-stone-300">{currentStep.counterAction}</span>
                  </p>
                </div>
              );
            })()}
          </div>
        )}

        {/* Bottom Takeaway */}
        <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-stone-900 dark:text-stone-100">Kluczowa lekcja analityczna: </strong>
            {data.takeaway}
          </div>
        </div>
      </div>
    </div>
  );
};
