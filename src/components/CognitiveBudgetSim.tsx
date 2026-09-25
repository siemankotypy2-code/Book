import React, { useState } from 'react';
import { BatteryCharging, BatteryWarning, AlertTriangle, RefreshCw, Sliders, ShieldCheck, Info } from 'lucide-react';

export const CognitiveBudgetSim: React.FC = () => {
  // Factors on a 0 to 10 scale (or discrete values)
  const [sleepQuality, setSleepQuality] = useState(7); // 0 (skrajny brak snu) to 10 (idealny sen 8h)
  const [stressLevel, setStressLevel] = useState(4); // 0 (spokój) to 10 (ostry stres)
  const [multitaskingDegree, setMultitaskingDegree] = useState(5); // 0 (jeden cel) to 10 (skrajny multitasking)
  const [decisionsCount, setDecisionsCount] = useState(6); // 0 (poranek, mało wyborów) to 10 (setki mikro-decyzji)
  const [timePressure, setTimePressure] = useState(4); // 0 (spokojne tempo) to 10 (ostry deadline)

  // Calculate educational cognitive load score (model edukacyjny, nie pomiar kliniczny)
  // Higher load = lower remaining available capacity
  const calculatedLoad = Math.min(100, Math.max(10, Math.round(
    (10 - sleepQuality) * 3.5 +
    stressLevel * 2.5 +
    multitaskingDegree * 2.2 +
    decisionsCount * 1.8 +
    timePressure * 1.5
  )));

  const remainingCapacity = 100 - calculatedLoad;

  // Determine state
  let stateLabel = 'Wysoka jasność analityczna';
  let stateDesc = 'Kora przedczołowa ma stabilne warunki. Łatwo przychodzi Ci hamowanie impulsów, ważenie argumentów za i przeciw oraz spokojne rozróżnianie faktów od interpretacji.';
  let stateColor = 'text-emerald-600 dark:text-emerald-400';
  let barColor = 'bg-emerald-500';

  if (calculatedLoad > 75) {
    stateLabel = 'Skrajne przeciążenie (Tryb Automatyczny / Reaktywny)';
    stateDesc = 'Kora nowa jest wyczerpana metabolicznie. Sterowanie przejmują pierwotne odruchy Systemu 1: uległość wobec autorytetu, sięganie po natychmiastowe nagrody dopaminowe lub wybuchy irytacji. Bardzo wysokie ryzyko błędów decyzyjnych.';
    stateColor = 'text-rose-600 dark:text-rose-400';
    barColor = 'bg-rose-500';
  } else if (calculatedLoad > 45) {
    stateLabel = 'Umiarkowane obciążenie (Zawężone pole uwagi)';
    stateDesc = 'Pojawiają się pierwsze objawy znużenia: trudniej utrzymać koncentrację na trudnym tekście, rośnie podatność na prokrastynację i skróty myślowe (heurystyki). Wskazana krótka pauza regeneracyjna.';
    stateColor = 'text-amber-600 dark:text-amber-400';
    barColor = 'bg-amber-500';
  }

  const handleResetDefaults = () => {
    setSleepQuality(7);
    setStressLevel(4);
    setMultitaskingDegree(5);
    setDecisionsCount(6);
    setTimePressure(4);
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-300 bg-white dark:bg-stone-900 shadow-md overflow-hidden font-sans">
      {/* Header with prominent disclaimer */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-stone-950 text-white p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-1">
          <BatteryCharging className="w-4 h-4" />
          <span>Interaktywny Model Edukacyjny • Sekcja 1.8</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-50">
          Budżet Uwagi i Obciążenie Poznawcze
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Sprawdź, jak różne czynniki dnia codziennego wpływają na dostępną pojemność Twojej kory przedczołowej.
        </p>

        {/* Clear Disclaimer */}
        <div className="mt-3 p-2.5 rounded-lg bg-white/10 border border-white/15 text-[11px] font-mono text-amber-200 flex items-start space-x-2">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-300" />
          <span>
            <strong>Ważne zastrzeżenie metodologiczne:</strong> Jest to uproszczony model dydaktyczny demonstrujący dynamikę procesów poznawczych, a nie kliniczne narzędzie diagnostyczne czy pomiar laboratoryjny.
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Sliders Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold flex items-center justify-between">
            <span>Dostosuj parametry Twojego dnia:</span>
            <button
              onClick={handleResetDefaults}
              className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 flex items-center space-x-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Domyślne</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Sleep */}
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
              <div className="flex justify-between font-semibold text-stone-800 dark:text-stone-200 mb-1.5">
                <span>Jakość i długość snu w nocy:</span>
                <span className="font-mono text-amber-700 dark:text-amber-400">{sleepQuality}/10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={sleepQuality}
                onChange={(e) => setSleepQuality(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                <span>Skrajna bezsenność (3h)</span>
                <span>Głęboki, regenerujący (8h)</span>
              </div>
            </div>

            {/* Stress */}
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
              <div className="flex justify-between font-semibold text-stone-800 dark:text-stone-200 mb-1.5">
                <span>Poziom napięcia emocjonalnego (Stres):</span>
                <span className="font-mono text-amber-700 dark:text-amber-400">{stressLevel}/10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={stressLevel}
                onChange={(e) => setStressLevel(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                <span>Spokój i bezpieczeństwo</span>
                <span>Ostry konflikt / zagrożenie</span>
              </div>
            </div>

            {/* Multitasking */}
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
              <div className="flex justify-between font-semibold text-stone-800 dark:text-stone-200 mb-1.5">
                <span>Przełączanie zadań (Multitasking):</span>
                <span className="font-mono text-amber-700 dark:text-amber-400">{multitaskingDegree}/10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={multitaskingDegree}
                onChange={(e) => setMultitaskingDegree(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                <span>Jedno zadanie w ciszy</span>
                <span>Ciągłe powiadomienia i maile</span>
              </div>
            </div>

            {/* Decisions Count */}
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
              <div className="flex justify-between font-semibold text-stone-800 dark:text-stone-200 mb-1.5">
                <span>Liczba trudnych decyzji od rana:</span>
                <span className="font-mono text-amber-700 dark:text-amber-400">{decisionsCount}/10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={decisionsCount}
                onChange={(e) => setDecisionsCount(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                <span>Wypoczęty poranek</span>
                <span>Koniec 10h dnia pełnego sporów</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calculated Output Meter */}
        <div className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 block">
                Szacowane Obciążenie Poznawcze:
              </span>
              <div className={`font-serif font-bold text-lg sm:text-xl ${stateColor}`}>
                {stateLabel} ({calculatedLoad}%)
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-mono text-stone-500 uppercase block">Dostępna Rezerwa Wolnej Woli</span>
              <span className="font-mono text-lg font-bold text-stone-900 dark:text-stone-100">
                {remainingCapacity}%
              </span>
            </div>
          </div>

          {/* Bar */}
          <div className="w-full bg-stone-200 dark:bg-stone-700 h-3 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${barColor}`}
              style={{ width: `${calculatedLoad}%` }}
            />
          </div>

          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed pt-1">
            {stateDesc}
          </p>
        </div>

        {/* Actionable Rules */}
        <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-xs sm:text-sm space-y-2">
          <strong className="text-amber-900 dark:text-amber-300 font-mono text-xs uppercase block">
            Strategie Zarządzania Budżetem Uwagi:
          </strong>
          <ul className="space-y-1.5 text-stone-700 dark:text-stone-300 font-serif list-disc pl-4">
            <li><strong>Zasada Trudnych Rozmów Przed Południem:</strong> Nigdy nie negocjuj podwyżki ani warunków rozwodu po godzinie 17:00, gdy obciążenie poznawcze obu stron przekracza 70%.</li>
            <li><strong>Monotasking w Blokach 45-minutowych:</strong> Zamknięcie zakładek w przeglądarce natychmiast obniża koszt przełączania o kilkadziesiąt procent.</li>
            <li><strong>Regeneracja Metaboliczna:</strong> Gdy poziom cukru we krwi spada, kora przedczołowa wybiera opcję najłatwiejszą i najbardziej konserwatywną. Zjedz lekki posiłek przed podjęciem kluczowej decyzji.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
