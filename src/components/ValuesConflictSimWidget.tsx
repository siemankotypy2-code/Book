import React, { useState } from 'react';
import { Compass, Scale, CheckCircle2, AlertCircle, ArrowRight, Heart } from 'lucide-react';

interface ValuePair {
  id: string;
  valueA: string;
  valueB: string;
  dilemmaScenario: string;
  costA: string;
  costB: string;
  resolutionStrategy: string;
}

const defaultDilemmas: ValuePair[] = [
  {
    id: 'd1',
    valueA: 'Bezpieczeństwo & Stabilność',
    valueB: 'Wolność & Rozwój',
    dilemmaScenario: 'Propozycja przejścia z etatu w stabilnej firmie na własną działalność gospodarczą w innowacyjnej branży.',
    costA: 'Rezygnacja ze stałej pensji, ryzyko braku zleceń i konieczność budowania wszystkiego od zera.',
    costB: 'Pozostanie na etacie z poczuciem utknięcia, rutyną i niewykorzystanym potencjałem.',
    resolutionStrategy: 'Wyznaczanie bufora finansowego na 6 miesięcy (zabezpieczenie wartości A) przy jednoczesnym starcie projektu w wymiarze 1/2 etatu (realizacja wartości B).'
  },
  {
    id: 'd2',
    valueA: 'Ambicja & Status Osiągnięć',
    valueB: 'Bliskość & Relacje Rodzinne',
    dilemmaScenario: 'Oferta awansu na dyrektora regionalnego wymagająca 4 dni podróży w tygodniu.',
    costA: 'Nieobecność w domu, brak udziału w dorastaniu dzieci i odległość od partnera.',
    costB: 'Przegapienie życiowej szansy biznesowej i niższe dochody gospodarstwa domowego.',
    resolutionStrategy: 'Negocjowanie hybrydowego modelu podróży i ustalenie sztywnej granicy czasowej projektu na 12 miesięcy z audytem po tym okresie.'
  }
];

export const ValuesConflictSimWidget: React.FC = () => {
  const [selectedDilemmaId, setSelectedDilemmaId] = useState<string>('d1');
  const [chosenValue, setChosenValue] = useState<'A' | 'B' | null>(null);

  const currentDilemma = defaultDilemmas.find((d) => d.id === selectedDilemmaId) || defaultDilemmas[0];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 border border-amber-900/40 shadow-xl font-sans my-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1.5 w-fit mb-2">
            <Compass className="w-3.5 h-3.5" />
            Tom III • Rozdział 20 • Macierz Aksjologiczna
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">
            Symulator Konfliktu Wartości i Decyzji Życiowych
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Przeanalizuj zderzenie dwóch wartości, zobacz nieunikniony koszt wyboru i znajdź strategię spójności aksjologicznej.
          </p>
        </div>

        {/* Dilemma selector */}
        <div className="flex space-x-2 font-mono text-xs">
          {defaultDilemmas.map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setSelectedDilemmaId(d.id);
                setChosenValue(null);
              }}
              className={`px-3 py-1.5 rounded-xl border transition ${
                d.id === selectedDilemmaId
                  ? 'bg-amber-800 text-white border-amber-600 font-bold'
                  : 'bg-stone-800 text-stone-400 border-stone-700 hover:text-white'
              }`}
            >
              Dylemat: {d.valueA.split('&')[0]} vs {d.valueB.split('&')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Scenario Overview */}
      <div className="p-5 rounded-2xl bg-stone-800/60 border border-stone-700 mb-6 space-y-2">
        <span className="text-xs font-mono uppercase text-amber-400 font-bold block">
          Scenariusz Decyzyjny:
        </span>
        <p className="text-sm sm:text-base text-stone-200 font-serif italic leading-relaxed">
          „{currentDilemma.dilemmaScenario}”
        </p>
      </div>

      {/* Two Values Arena */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Value A */}
        <div
          onClick={() => setChosenValue('A')}
          className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between space-y-4 ${
            chosenValue === 'A'
              ? 'bg-amber-950/60 border-amber-500 ring-2 ring-amber-500 shadow-lg'
              : 'bg-stone-800/50 border-stone-700/80 hover:bg-stone-800'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-amber-400 font-bold">Wartość A</span>
              {chosenValue === 'A' && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
            </div>
            <h4 className="text-lg font-serif font-bold text-white">{currentDilemma.valueA}</h4>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-700/80 text-xs text-stone-300">
            <span className="font-mono text-rose-400 font-bold block uppercase mb-1">
              Akceptowany Koszt Wyboru:
            </span>
            {currentDilemma.costA}
          </div>
        </div>

        {/* Value B */}
        <div
          onClick={() => setChosenValue('B')}
          className={`p-5 rounded-2xl border transition cursor-pointer flex flex-col justify-between space-y-4 ${
            chosenValue === 'B'
              ? 'bg-amber-950/60 border-amber-500 ring-2 ring-amber-500 shadow-lg'
              : 'bg-stone-800/50 border-stone-700/80 hover:bg-stone-800'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-blue-400 font-bold">Wartość B</span>
              {chosenValue === 'B' && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
            </div>
            <h4 className="text-lg font-serif font-bold text-white">{currentDilemma.valueB}</h4>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-700/80 text-xs text-stone-300">
            <span className="font-mono text-rose-400 font-bold block uppercase mb-1">
              Akceptowany Koszt Wyboru:
            </span>
            {currentDilemma.costB}
          </div>
        </div>
      </div>

      {/* Resolution Integration Strategy */}
      <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-900/60 space-y-2">
        <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase">
          <Scale className="w-4 h-4" />
          <span>Strategia Integracji Aksjologicznej (Dojrzały Kompromis):</span>
        </div>
        <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
          {currentDilemma.resolutionStrategy}
        </p>
      </div>
    </div>
  );
};
