import React, { useState } from 'react';
import { Target, Award, ShieldCheck, Heart, ArrowUpRight, BarChart3, Check } from 'lucide-react';

export const SelfEfficacyLabWidget: React.FC = () => {
  const [masteryScore, setMasteryScore] = useState<number>(3); // 1-5
  const [modelingScore, setModelingScore] = useState<number>(3);
  const [persuasionScore, setPersuasionScore] = useState<number>(2);
  const [somaticScore, setSomaticScore] = useState<number>(3);

  // Bandura Self-efficacy Index calculation
  const totalEfficacyIndex = Math.round(
    ((masteryScore * 0.4 + modelingScore * 0.25 + persuasionScore * 0.15 + somaticScore * 0.2) / 5) * 100
  );

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 text-stone-100 border border-amber-900/40 shadow-xl font-sans my-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 flex items-center gap-1.5 w-fit mb-2">
            <Target className="w-3.5 h-3.5" />
            Tom III • Rozdział 19 • Diagnostyka Bandury
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">
            Analizator Czterech Filarów Skuteczności (Self-Efficacy Index)
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            Zdiagnozuj swoje poczucie skuteczności w wy wybranej domenie i zobacz, który z czterech filarów Bandury wymaga wzmocnienia.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sliders for the 4 pillars */}
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-amber-300 font-bold uppercase">1. Doświadczenie Opanowania (Mastery):</span>
              <span className="text-amber-400 font-bold">{masteryScore} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={masteryScore}
              onChange={(e) => setMasteryScore(parseInt(e.target.value, 10))}
              className="w-full accent-amber-500 h-2 bg-stone-700 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-stone-400 italic">
              Ile razy w przeszłości osobiście przetrwałeś trud w tym zadaniu?
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-blue-300 font-bold uppercase">2. Modelowanie Społeczne (Vicarious):</span>
              <span className="text-blue-400 font-bold">{modelingScore} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={modelingScore}
              onChange={(e) => setModelingScore(parseInt(e.target.value, 10))}
              className="w-full accent-blue-500 h-2 bg-stone-700 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-stone-400 italic">
              Czy masz w otoczeniu wzorce ludzi podobnych do Ciebie, którym się udało?
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-purple-300 font-bold uppercase">3. Perswazja i Wsparcie Społeczne:</span>
              <span className="text-purple-400 font-bold">{persuasionScore} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={persuasionScore}
              onChange={(e) => setPersuasionScore(parseInt(e.target.value, 10))}
              className="w-full accent-purple-500 h-2 bg-stone-700 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-stone-400 italic">
              Czy słyszysz wiarygodne informacje zwrotne od autorytetów?
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-emerald-300 font-bold uppercase">4. Regulacja Stanu Somatycznego:</span>
              <span className="text-emerald-400 font-bold">{somaticScore} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={somaticScore}
              onChange={(e) => setSomaticScore(parseInt(e.target.value, 10))}
              className="w-full accent-emerald-500 h-2 bg-stone-700 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-stone-400 italic">
              Czy potrafisz odczytać trema i lęk jako mobilizację ciała?
            </p>
          </div>
        </div>

        {/* Index Output & Action Plan */}
        <div className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-mono uppercase text-stone-400 font-bold block mb-1">
              Wskaźnik Poczucia Własnej Skuteczności (Self-Efficacy Index):
            </span>
            <div className="flex items-baseline space-x-3">
              <span className="text-5xl font-serif font-bold text-amber-300">
                {totalEfficacyIndex}%
              </span>
              <span className="text-xs font-mono text-stone-400">
                {totalEfficacyIndex >= 75
                  ? 'Wysoka Gotowość do Działania'
                  : totalEfficacyIndex >= 50
                  ? 'Umiarkowana Skuteczność'
                  : 'Wysokie Zwątpienie i Ryzyko Ucieczki'}
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-2 font-sans text-xs sm:text-sm">
            <span className="font-mono text-stone-300 font-bold uppercase block text-xs">
              Rekomendowany Mikro-Protokół Wzmocnienia:
            </span>

            {masteryScore <= 2 && (
              <div className="p-3 rounded-xl bg-amber-950/50 border border-amber-800/60 text-amber-200">
                <strong>Zwiń cel do mikrokroku:</strong> Twój filar Doświadczenia Opanowania jest niski. Wykonaj jedno zadanie trwające 5 minut, aby zapisać w pamięci wygraną bitwę.
              </div>
            )}

            {modelingScore <= 2 && (
              <div className="p-3 rounded-xl bg-blue-950/50 border border-blue-800/60 text-blue-200">
                <strong>Znajdź realizację u kogoś podobnego:</strong> Szukaj wywiadów lub historii ludzi o zbliżonym poziomie początkowym, a nie idealnych gwiazd.
              </div>
            )}

            {totalEfficacyIndex >= 70 && (
              <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-emerald-200">
                <strong>Zielone Światło dla Działania:</strong> Masz wystarczającą bazę zasobów. Wejdź w strefę wykonania bez czekania na perfekcyjny nastrój.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
