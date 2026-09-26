import React, { useState } from 'react';
import { Flame, Zap, Play, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

export const MotivationSystemSim: React.FC = () => {
  const [taskName, setTaskName] = useState('Napisanie raportu kwartalnego');
  const [rewardDelay, setRewardDelay] = useState(30); // days
  const [frictionEnergy, setFrictionEnergy] = useState(8); // 1-10
  const [perceivedReward, setPerceivedReward] = useState(6); // 1-10

  // Valuation formula
  const motivationIndex = Math.max(1, Math.round((perceivedReward * 10) / ((rewardDelay * 0.2 + 1) * (frictionEnergy * 0.3 + 1)) * 10));

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-4">
        <Flame className="w-4 h-4 text-amber-700" />
        <span>Symulator Układu Dopaminowego: Kalkulator Wyceny Zadania</span>
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-5">
        <div>
          <label className="text-xs font-mono uppercase text-stone-500 font-bold block mb-1">
            Zadanie, z którym walczysz:
          </label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-xl border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 font-medium"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <div className="flex justify-between font-bold mb-1">
              <span>Opóźnienie Nagrody:</span>
              <span className="font-mono text-amber-800">{rewardDelay} dni</span>
            </div>
            <input
              type="range"
              min="1"
              max="90"
              value={rewardDelay}
              onChange={(e) => setRewardDelay(Number(e.target.value))}
              className="w-full accent-amber-800"
            />
          </div>

          <div>
            <div className="flex justify-between font-bold mb-1">
              <span>Koszt Tarcia / Wysiłek:</span>
              <span className="font-mono text-amber-800">{frictionEnergy} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={frictionEnergy}
              onChange={(e) => setFrictionEnergy(Number(e.target.value))}
              className="w-full accent-amber-800"
            />
          </div>

          <div>
            <div className="flex justify-between font-bold mb-1">
              <span>Wielkość Nagrody:</span>
              <span className="font-mono text-amber-800">{perceivedReward} / 10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={perceivedReward}
              onChange={(e) => setPerceivedReward(Number(e.target.value))}
              className="w-full accent-amber-800"
            />
          </div>
        </div>

        {/* Output Barometer */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-stone-900/60 border border-amber-600/20 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono uppercase text-stone-400 block">
              Biologiczny Wskaźnik Napędu Dopaminowego:
            </span>
            <span className="text-xl font-bold font-mono text-amber-800 dark:text-amber-400">
              {motivationIndex} pkt / 100
            </span>
          </div>
          <div className="text-xs text-stone-600 dark:text-stone-300 max-w-sm">
            {motivationIndex < 25 ? (
              <span className="text-rose-600 dark:text-rose-400 font-bold">
                ⚠️ Stan Paraliżu: Wysokie tarcie i odległa nagroda odcinają napęd. Zredukuj zadanie do 2 minut!
              </span>
            ) : (
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                ✅ Zielona Strefa: Zadanie ma wystarczająco niski próg wejścia, by System 1 ruszył z miejsca!
              </span>
            )}
          </div>
        </div>

        {/* 2-Minute Micro-Step Generator */}
        <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-700/50 border border-stone-200 dark:border-stone-600">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-800 dark:text-amber-300 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Automatyczny Generator Mikro-Kroku 2-Minutowego:</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 italic">
            „Otworzę plik edytora i napiszę dokładnie jedno koślawe zdanie o temacie: {taskName}. Zakaz poprawiania, zakaz oceniania. Po 120 sekundach mam pełne prawo zamknąć laptopa”.
          </p>
        </div>
      </div>
    </div>
  );
};
