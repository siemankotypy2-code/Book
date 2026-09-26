import React, { useState } from 'react';
import { Eye, EyeOff, Sparkles, Layers, Sliders, CheckCircle2, AlertTriangle, ArrowRight, Brain } from 'lucide-react';

export const PerceptionExperimentWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'context' | 'illusion' | 'prediction'>('context');
  const [contextMode, setContextMode] = useState<'letters' | 'numbers' | 'none'>('letters');
  const [showIllusionGrid, setShowIllusionGrid] = useState<boolean>(false);
  const [illusionSize, setIllusionSize] = useState<number>(50);
  const [predictionUnveiled, setPredictionUnveiled] = useState<boolean>(false);

  return (
    <div className="my-8 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-950 via-stone-900 to-indigo-950 text-white p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-indigo-300 mb-1">
          <Eye className="w-4 h-4 text-indigo-400" />
          <span>Laboratorium Percepcji • Przetwarzanie Predykcyjne</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-indigo-50">
          Eksperyment Percepcyjny: Kontekst, Odgórne Oczekiwania i Iluzje
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Percepcja nie jest bierną rejestracją kamery. To proces wnioskowania nieświadomego (Helmholtz), w którym mózg nieustannie porównuje sygnał sensoryczny z modelem predykcyjnym.
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('context')}
            className={`px-3.5 py-1.5 rounded-lg transition ${
              activeTab === 'context' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            1. Wpływ Kontekstu (Top-Down)
          </button>
          <button
            onClick={() => setActiveTab('illusion')}
            className={`px-3.5 py-1.5 rounded-lg transition ${
              activeTab === 'illusion' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            2. Iluzja Wzrokowa i Obiektywna Siatka
          </button>
          <button
            onClick={() => setActiveTab('prediction')}
            className={`px-3.5 py-1.5 rounded-lg transition ${
              activeTab === 'prediction' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            3. Maszyna Predykcyjna (Uzupełnianie Plamki)
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* TAB 1: CONTEXT EFFECT */}
        {activeTab === 'context' && (
          <div className="space-y-5">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold block mb-2">
                Zmień Otoczenie Znaków (Kontekst Poznawczy):
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setContextMode('letters')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition ${
                    contextMode === 'letters'
                      ? 'bg-indigo-900 text-white border-indigo-950'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
                  }`}
                >
                  Kontekst Literowy (A _ C)
                </button>
                <button
                  onClick={() => setContextMode('numbers')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition ${
                    contextMode === 'numbers'
                      ? 'bg-indigo-900 text-white border-indigo-950'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
                  }`}
                >
                  Kontekst Cyfrowy (12 _ 14)
                </button>
                <button
                  onClick={() => setContextMode('none')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition ${
                    contextMode === 'none'
                      ? 'bg-indigo-900 text-white border-indigo-950'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
                  }`}
                >
                  Izolowany Znak (Samotny bodziec)
                </button>
              </div>
            </div>

            {/* Canvas Visualizer */}
            <div className="p-8 rounded-2xl bg-stone-950 text-white text-center flex items-center justify-center space-x-6 min-h-[160px] border border-indigo-900/30">
              {contextMode === 'letters' && (
                <span className="font-serif text-5xl font-bold tracking-widest text-indigo-300">A</span>
              )}

              {/* Ambiguous Symbol */}
              <div className="relative group p-4 rounded-xl bg-indigo-950/80 border border-indigo-500/50 shadow-inner">
                <span className="font-serif text-6xl font-black text-amber-300 tracking-wider">
                  13
                </span>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-stone-400 whitespace-nowrap">
                  Ten sam fizyczny kształt!
                </span>
              </div>

              {contextMode === 'letters' && (
                <span className="font-serif text-5xl font-bold tracking-widest text-indigo-300">C</span>
              )}

              {contextMode === 'numbers' && (
                <>
                  <span className="font-serif text-5xl font-bold tracking-widest text-indigo-300 leading-none">12</span>
                  <div className="w-0.5 h-0" />
                  <span className="font-serif text-5xl font-bold tracking-widest text-indigo-300 leading-none">14</span>
                </>
              )}
            </div>

            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
              <strong className="font-mono text-indigo-900 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                Dlaczego to widzisz inaczej?
              </strong>
              {contextMode === 'letters' && (
                <p>
                  Gdy bodziec po lewej to „A”, a po prawej „C”, Twoja kora wzrokowa uruchamia odgórny schemat leksykalny. Ten sam wzorzec kreski i łuku od razu czytasz jako literę <strong>„B”</strong>!
                </p>
              )}
              {contextMode === 'numbers' && (
                <p>
                  Gdy obok znajdują się liczby 12 i 14, system aktywuje pojęcia numeryczne. Ten sam rysunek bez mrugnięcia okiem interpretujesz jako liczbę <strong>13</strong>!
                </p>
              )}
              {contextMode === 'none' && (
                <p>
                  W izolacji znak jest niejednoznaczny (może być zarówno 'B', jak i '13'). Mózg bez kontekstu czuje się niepewnie i dopasowuje najbardziej prawdopodobny schemat na bazie aktualnej dominacji myślowej.
                </p>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: ILLUSION & OBJECTIVE GRID */}
        {activeTab === 'illusion' && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
                Eksperyment Ebbinghausa / Kontrastu Kontekstowego:
              </span>
              <button
                onClick={() => setShowIllusionGrid(!showIllusionGrid)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 ${
                  showIllusionGrid
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
                }`}
              >
                {showIllusionGrid ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showIllusionGrid ? 'Ukryj Linie Pomiarowe' : 'Nałóż Linie Pomiarowe (Prawda)'}</span>
              </button>
            </div>

            {/* Visual Illusion Board */}
            <div className="relative p-8 rounded-2xl bg-stone-900 overflow-hidden flex flex-col sm:flex-row items-center justify-around gap-8 min-h-[220px] border border-stone-800">
              {/* Overlay Grid lines when active */}
              {showIllusionGrid && (
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-center space-y-8 z-20">
                  <div className="w-full h-0.5 bg-emerald-400/80 shadow-xs" />
                  <div className="w-full h-0.5 bg-emerald-400/80 shadow-xs" />
                </div>
              )}

              {/* Circle A (surrounded by huge circles) */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-28 h-28 border border-dashed border-stone-700 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-stone-700/80 absolute top-0" />
                  <div className="w-8 h-8 rounded-full bg-stone-700/80 absolute bottom-0" />
                  <div className="w-8 h-8 rounded-full bg-stone-700/80 absolute left-0" />
                  <div className="w-8 h-8 rounded-full bg-stone-700/80 absolute right-0" />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-400 shadow-md z-10 flex items-center justify-center text-xs font-mono font-bold text-stone-950">
                  A
                </div>
              </div>

              {/* Circle B (surrounded by tiny circles) */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 border border-dashed border-stone-700 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-stone-700/80 absolute top-0" />
                  <div className="w-3 h-3 rounded-full bg-stone-700/80 absolute bottom-0" />
                  <div className="w-3 h-3 rounded-full bg-stone-700/80 absolute left-0" />
                  <div className="w-3 h-3 rounded-full bg-stone-700/80 absolute right-0" />
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-400 shadow-md z-10 flex items-center justify-center text-xs font-mono font-bold text-stone-950">
                  B
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
              <p>
                <strong>Wynik pomiarowy:</strong> Koło A i koło B mają dokładnie tę samą średnicę (12mm w kodzie). Jednak dla ludzkiego oka koło B wydaje się zauważalnie większe! Mózg nie potrafi oceniać wielkości w próżni — zawsze dokonuje relatywnego porównania z otaczającymi go obiektami odniesienia.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: PREDICTIVE PROCESSING */}
        {activeTab === 'prediction' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-300 font-serif text-sm sm:text-base mb-1">
                Eksperyment Uzupełniania Luki (Plamka Ślepa & Modelowanie)
              </h4>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                W Twojej siatkówce znajduje się plamka ślepa (miejsce wyjścia nerwu wzrokowego), gdzie nie ma żadnych fotoreceptorów. Dlaczego więc nie widzisz czarnej dziury w polu widzenia? Bo mózg w czasie rzeczywistym „maluje” brakujący kawałek obrazu w oparciu o otaczające tło i oczekiwania!
              </p>
            </div>

            <div className="p-6 rounded-xl bg-stone-900 text-white text-center space-y-4">
              <p className="text-xs font-mono text-stone-300">
                Spójrz na poniższy tekst z „brakującymi” literami:
              </p>
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 font-serif text-lg sm:text-xl text-amber-200 tracking-wider">
                {predictionUnveiled
                  ? "P_YKŁA_O_Y T_KS_ Z_ST_Ł P_P_AW_I_ R_ZO_U_I_N_!"
                  : "PRZYKŁADOWY TEKST ZOSTAŁ POPRAWNIE ROZUMIANY!"}
              </div>

              <button
                onClick={() => setPredictionUnveiled(!predictionUnveiled)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition"
              >
                {predictionUnveiled ? 'Pokaż Tekst Pełny' : 'Usuń Co Trzecią Literę (Sprawdź Czy Przeczytasz)'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
