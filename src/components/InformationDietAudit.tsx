import React, { useState } from 'react';
import { Newspaper, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, EyeOff } from 'lucide-react';

export const InformationDietAudit: React.FC = () => {
  const [screenHours, setScreenHours] = useState(4);
  const [newsFrequency, setNewsFrequency] = useState<'hourly' | 'daily' | 'weekly'>('hourly');
  const [outrageSource, setOutrageSource] = useState(true);

  // Toxic information score calculation
  const toxicityScore = Math.min(100, Math.round(
    (screenHours * 12) +
    (newsFrequency === 'hourly' ? 35 : newsFrequency === 'daily' ? 15 : 0) +
    (outrageSource ? 25 : 0)
  ));

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-4">
        <Newspaper className="w-4 h-4 text-amber-700" />
        <span>Audyt Diety Informacyjnej: Toksyczność Przebodźcowania Cyfrowego</span>
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-4">
        <div>
          <div className="flex justify-between text-xs font-bold mb-1">
            <span>Dzienny czas w social mediach / portalach:</span>
            <span className="font-mono text-amber-800 dark:text-amber-400">{screenHours} godz.</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={screenHours}
            onChange={(e) => setScreenHours(Number(e.target.value))}
            className="w-full accent-amber-800"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="font-bold block mb-1">Częstotliwość sprawdzania newsów:</label>
            <div className="flex gap-1.5">
              {(['hourly', 'daily', 'weekly'] as const).map((freq) => (
                <button
                  key={freq}
                  onClick={() => setNewsFrequency(freq)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono capitalize transition ${
                    newsFrequency === freq
                      ? 'bg-amber-800 text-white border-amber-900 font-bold'
                      : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  {freq === 'hourly' ? 'Co godzinę' : freq === 'daily' ? 'Raz dziennie' : 'Tygodniowo'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-bold block mb-1">Czy Twoje źródła grają na oburzeniu moralnym?</label>
            <button
              onClick={() => setOutrageSource(!outrageSource)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition ${
                outrageSource
                  ? 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 font-bold'
                  : 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300'
              }`}
            >
              {outrageSource ? 'Tak, dominują nagłówki o skandalach' : 'Nie, czytam chłodne analizy'}
            </button>
          </div>
        </div>

        {/* Score Bar */}
        <div className="pt-3 border-t border-stone-200 dark:border-stone-700 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono uppercase text-stone-400 block">
              Indeks Toksyczności Cyfrowej:
            </span>
            <span className={`text-xl font-bold font-mono ${
              toxicityScore > 60 ? 'text-rose-600' : toxicityScore > 35 ? 'text-amber-700' : 'text-emerald-700'
            }`}>
              {toxicityScore} / 100 pkt
            </span>
          </div>

          <div className="text-xs text-stone-600 dark:text-stone-300 max-w-sm">
            {toxicityScore > 60 ? (
              <span className="text-rose-600 dark:text-rose-400 font-bold">
                🚨 Zagrożenie IFS: Twój układ nerwowy jest w permanentnym stanie alarmu. Wdroż natychmiast post cyfrowy!
              </span>
            ) : (
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                🍃 Higiena Prawidłowa: Kora przedczołowa ma przestrzeń na głębokie myślenie i regenerację.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
