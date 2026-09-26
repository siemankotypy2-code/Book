import React, { useState } from 'react';
import { Brain, Sliders, AlertTriangle, CheckCircle2, RefreshCw, BarChart2, Shield } from 'lucide-react';

export const BeliefUpdateSimWidget: React.FC = () => {
  const [priorBelief, setPriorBelief] = useState<number>(80); // Prior probability %
  const [evidenceStrength, setEvidenceStrength] = useState<number>(50); // Evidence value %
  const [confirmationBiasFilter, setConfirmationBiasFilter] = useState<boolean>(true);

  // Calculate posterior belief using simplified Bayesian updating formula
  const effectiveEvidence = confirmationBiasFilter
    ? evidenceStrength * 0.4 // Confirmation bias reduces contradictory evidence impact
    : evidenceStrength;

  const posteriorBelief = Math.round(
    (priorBelief * effectiveEvidence) /
      (priorBelief * effectiveEvidence + (100 - priorBelief) * (100 - effectiveEvidence)) * 100 || priorBelief
  );

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 border border-amber-900/40 shadow-xl font-sans my-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1.5 w-fit mb-2">
            <Brain className="w-3.5 h-3.5" />
            Tom III • Rozdział 18 • Laboratorium Bayesowskie
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">
            Symulator Bayesowskiej Aktualizacji Przekonań
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Zobacz, jak Twoje przekonanie początkowe (Prior) przesuwa się pod wpływem nowych dowodów oraz jak Błąd Potwierdzenia (Confirmation Bias) zniekształca obiektywną ocenę faktów.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          {/* Prior belief slider */}
          <div className="space-y-2 p-4 rounded-2xl bg-stone-800/60 border border-stone-700">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-amber-300 font-bold uppercase">Początkowa Pewność Tezy (Prior Belief):</span>
              <span className="text-amber-400 font-bold text-base">{priorBelief}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="99"
              value={priorBelief}
              onChange={(e) => setPriorBelief(parseInt(e.target.value, 10))}
              className="w-full accent-amber-500 h-2 bg-stone-700 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-stone-400 italic">
              Przekonanie zanim poznałeś najnowszy raport lub kontrargument.
            </p>
          </div>

          {/* Evidence strength slider */}
          <div className="space-y-2 p-4 rounded-2xl bg-stone-800/60 border border-stone-700">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-blue-300 font-bold uppercase">Siła Nowego Dowodu Sprzecznego:</span>
              <span className="text-blue-400 font-bold text-base">{evidenceStrength}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="99"
              value={evidenceStrength}
              onChange={(e) => setEvidenceStrength(parseInt(e.target.value, 10))}
              className="w-full accent-blue-500 h-2 bg-stone-700 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-stone-400 italic">
              Obiektywna siła badań, liczb lub audytu sprzecznego z Twoją tezą.
            </p>
          </div>

          {/* Confirmation Bias toggle */}
          <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-stone-200 block">
                Aktywny Błąd Potwierdzenia (Confirmation Bias Filter):
              </span>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Gdy włączony, umysł automatycznie unieważnia siłę dowodów sprzecznych.
              </p>
            </div>
            <button
              onClick={() => setConfirmationBiasFilter(!confirmationBiasFilter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition shrink-0 ${
                confirmationBiasFilter
                  ? 'bg-rose-900/80 text-rose-200 border border-rose-700'
                  : 'bg-emerald-900/80 text-emerald-200 border border-emerald-700'
              }`}
            >
              {confirmationBiasFilter ? 'WŁĄCZONY (Filtr EGO)' : 'WYŁĄCZONY (Czysta Nauka)'}
            </button>
          </div>
        </div>

        {/* Output Visualization */}
        <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-mono uppercase text-stone-400 font-bold block mb-1">
              Wynik Aktualizacji Bayesowskiej:
            </span>
            <div className="flex items-baseline space-x-3">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-amber-300">
                {posteriorBelief}%
              </span>
              <span className="text-xs font-mono text-stone-400">
                Zaktualizowany poziom pewności tezy (Posterior)
              </span>
            </div>
          </div>

          {/* Bar Chart Comparison */}
          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-[11px] font-mono text-stone-400 mb-1">
                <span>Przekonanie Początkowe (Prior):</span>
                <span>{priorBelief}%</span>
              </div>
              <div className="w-full bg-stone-700 h-3 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full transition-all duration-300" style={{ width: `${priorBelief}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono text-stone-400 mb-1">
                <span>Zaktualizowany Stan Umysłu (Posterior):</span>
                <span>{posteriorBelief}%</span>
              </div>
              <div className="w-full bg-stone-700 h-3 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full transition-all duration-300" style={{ width: `${posteriorBelief}%` }} />
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-900/50 text-xs text-stone-300 font-serif leading-relaxed">
            {confirmationBiasFilter ? (
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Uwaga:</strong> Filtr Confirmation Bias stumił siłę dowodu. Mimo napływu faktów, Twoja zmiana zdania jest minimalna.
                </span>
              </div>
            ) : (
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Epistemiczna Pokora:</strong> Bez filtra ego dowód prawidłowo przesunął suwak Twoich przekonań w stronę obiektywnej prawdy.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
