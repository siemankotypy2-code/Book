import React, { useState, useEffect } from 'react';
import { Eye, Clock, AlertTriangle, CheckCircle2, RotateCcw, Zap, Sparkles } from 'lucide-react';

interface StroopTrial {
  word: string;
  colorName: string;
  colorHex: string;
  isCongruent: boolean;
}

const trialsPool: StroopTrial[] = [
  { word: 'CZERWONY', colorName: 'niebieski', colorHex: '#2563EB', isCongruent: false },
  { word: 'ZIELONY', colorName: 'zielony', colorHex: '#16A34A', isCongruent: true },
  { word: 'NIEBIESKI', colorName: 'czerwony', colorHex: '#DC2626', isCongruent: false },
  { word: 'ŻÓŁTY', colorName: 'fioletowy', colorHex: '#9333EA', isCongruent: false },
  { word: 'FIOLETOWY', colorName: 'fioletowy', colorHex: '#9333EA', isCongruent: true },
  { word: 'ZIELONY', colorName: 'czerwony', colorHex: '#DC2626', isCongruent: false },
  { word: 'CZERWONY', colorName: 'czerwony', colorHex: '#DC2626', isCongruent: true },
  { word: 'NIEBIESKI', colorName: 'zielony', colorHex: '#16A34A', isCongruent: false }
];

export const AttentionExperimentWidget: React.FC = () => {
  const [phase, setPhase] = useState<'intro' | 'testing' | 'results'>('intro');
  const [currentTrialIdx, setCurrentTrialIdx] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [reactionTimesCongruent, setReactionTimesCongruent] = useState<number[]>([]);
  const [reactionTimesIncongruent, setReactionTimesIncongruent] = useState<number[]>([]);
  const [errorCount, setErrorCount] = useState(0);

  const options = [
    { label: 'Czerwony', hex: '#DC2626' },
    { label: 'Niebieski', hex: '#2563EB' },
    { label: 'Zielony', hex: '#16A34A' },
    { label: 'Fioletowy', hex: '#9333EA' }
  ];

  const startExperiment = () => {
    setPhase('testing');
    setCurrentTrialIdx(0);
    setReactionTimesCongruent([]);
    setReactionTimesIncongruent([]);
    setErrorCount(0);
    setStartTime(Date.now());
  };

  const handleSelectColor = (selectedHex: string) => {
    const currentTrial = trialsPool[currentTrialIdx];
    const duration = Date.now() - startTime;

    if (selectedHex.toLowerCase() === currentTrial.colorHex.toLowerCase()) {
      if (currentTrial.isCongruent) {
        setReactionTimesCongruent((prev) => [...prev, duration]);
      } else {
        setReactionTimesIncongruent((prev) => [...prev, duration]);
      }
    } else {
      setErrorCount((prev) => prev + 1);
    }

    if (currentTrialIdx + 1 < trialsPool.length) {
      setCurrentTrialIdx((prev) => prev + 1);
      setStartTime(Date.now());
    } else {
      setPhase('results');
    }
  };

  const avgCongruent = reactionTimesCongruent.length > 0
    ? Math.round(reactionTimesCongruent.reduce((a, b) => a + b, 0) / reactionTimesCongruent.length)
    : 0;

  const avgIncongruent = reactionTimesIncongruent.length > 0
    ? Math.round(reactionTimesIncongruent.reduce((a, b) => a + b, 0) / reactionTimesIncongruent.length)
    : 0;

  const switchCostMs = avgIncongruent > avgCongruent ? avgIncongruent - avgCongruent : 0;

  return (
    <div className="my-8 rounded-2xl border border-stone-300 bg-white dark:bg-stone-900 shadow-md overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-950 via-stone-900 to-indigo-950 text-white p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-300 mb-1">
          <Eye className="w-4 h-4" />
          <span>Interaktywny Eksperyment Uwagi • Sekcja 1.5</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-blue-50">
          Doświadczenie Stroopa: Konflikt Zmysłów i Koszt Przełączania
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Przekonaj się osobiście, jak Twój umysł przetwarza sprzeczne sygnały. Twoje zadanie to wskazać KOLOR CZCIONKI, całkowicie ignorując treść napisanego słowa!
        </p>
      </div>

      <div className="p-5 sm:p-6">
        {phase === 'intro' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
              <strong className="text-blue-900 dark:text-blue-300 font-mono text-xs uppercase block mb-1">
                Instrukcja Eksperymentu:
              </strong>
              Na ekranie pojawi się 8 słów oznaczających barwy. Słowa będą wyświetlane w różnych kolorach. Twoim jedynym celem jest jak najszybsze kliknięcie przycisku odpowiadającego <strong>fizycznemu kolorowi tekstu</strong>, a nie temu, co słowo znaczy.
              <br /><br />
              <em>Przykład: Jeśli zobaczysz słowo „CZERWONY” napisane niebieską czcionką — poprawną odpowiedzią jest NIEBIESKI!</em>
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={startExperiment}
                className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-mono text-xs sm:text-sm font-semibold transition flex items-center space-x-2 shadow-sm"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Rozpocznij Eksperyment (8 prób)</span>
              </button>
            </div>
          </div>
        )}

        {phase === 'testing' && (
          <div className="space-y-6 text-center py-4">
            <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">
              Próba {currentTrialIdx + 1} z {trialsPool.length}
            </div>

            {/* Stimulus Word */}
            <div className="py-8 bg-stone-100 dark:bg-stone-800/50 rounded-2xl border border-stone-200 dark:border-stone-700">
              <span
                className="font-serif font-black text-4xl sm:text-6xl tracking-wider select-none animate-scaleIn"
                style={{ color: trialsPool[currentTrialIdx].colorHex }}
              >
                {trialsPool[currentTrialIdx].word}
              </span>
            </div>

            <div className="text-xs font-mono text-stone-400">
              Jaki to kolor czcionki? Kliknij poniżej:
            </div>

            {/* Response Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
              {options.map((opt) => (
                <button
                  key={opt.hex}
                  onClick={() => handleSelectColor(opt.hex)}
                  className="p-3.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 font-semibold text-xs sm:text-sm font-sans transition flex items-center justify-center space-x-2 shadow-xs active:scale-95"
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full shrink-0"
                    style={{ backgroundColor: opt.hex }}
                  />
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === 'results' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-800 dark:text-blue-300 font-bold block mb-1">
                Twój Osobisty Wynik i Koszt Interferencji:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
                <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-blue-100 dark:border-stone-800 text-center">
                  <span className="text-[11px] font-mono text-stone-500 uppercase block">Zgodne (np. zielony zielonym)</span>
                  <span className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">{avgCongruent} ms</span>
                </div>
                <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-blue-100 dark:border-stone-800 text-center">
                  <span className="text-[11px] font-mono text-stone-500 uppercase block">Niezgodne (konflikt znaczenia)</span>
                  <span className="text-xl font-bold font-mono text-rose-600 dark:text-rose-400">{avgIncongruent} ms</span>
                </div>
                <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-blue-100 dark:border-stone-800 text-center">
                  <span className="text-[11px] font-mono text-stone-500 uppercase block">Koszt Przełączenia (Switch Cost)</span>
                  <span className="text-xl font-bold font-mono text-blue-700 dark:text-blue-300">+{switchCostMs} ms</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif pt-1">
                Liczba pomyłek: <strong>{errorCount}</strong>. Nawet przy pełnym skupieniu, gdy treść słowa kłóci się z kolorem czcionki, reakcja trwa przeciętnie o <strong>150–300 ms dłużej</strong>. Dlaczego? Ponieważ czytanie jest procesem tak silnie zautomatyzowanym (System 1), że Twój mózg odczytuje słowo ZANIM kora przedczołowa zdąży wyhamować ten impuls i nazwać barwę.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-700 dark:text-stone-300 space-y-2">
              <strong className="text-stone-900 dark:text-stone-100 font-mono text-xs uppercase block">
                Przełożenie na Życie Codzienne (Multitasking & Rozproszenie):
              </strong>
              <p className="font-serif leading-relaxed">
                Dokładnie to samo dzieje się, gdy pracujesz i co chwilę spoglądasz na powiadomienia w telefonie. Twój mózg nie potrafi robić dwóch rzeczy naraz — musi za każdym razem wyhamować poprzedni kontekst, przełączyć synapsy i załadować nowy. Ten „koszt przełączania” wysysa energię metaboliczną z kory przedczołowej, prowadząc do szybkiego wyczerpania decyzyjnego.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={startExperiment}
                className="px-4 py-2 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-mono text-xs font-semibold transition flex items-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Wykonaj test ponownie</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
