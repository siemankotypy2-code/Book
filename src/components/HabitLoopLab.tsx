import React, { useState } from 'react';
import { Repeat, ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const HabitLoopLab: React.FC = () => {
  const [cue, setCue] = useState('Godzina 15:30 w biurze + znużenie arkuszem Excel');
  const [badRoutine, setBadRoutine] = useState('Pójście do automatu po batona czekoladowego i colę');
  const [realReward, setRealReward] = useState('Chwilowa ulga od nudy, zmiana pozycji ciała i zastrzyk nowości');
  const [replacementRoutine, setReplacementRoutine] = useState('Wyjście na 5-minutowy spacer wokół biurowca ze szklanką wody z cytryną i podcastem');

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-4">
        <Repeat className="w-4 h-4 text-amber-700" />
        <span>Laboratorium Nawyku: Złota Reguła Podmiany Pętli Prążkowia</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {/* Cue */}
        <div className="p-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
          <span className="text-[10px] font-mono uppercase text-amber-700 dark:text-amber-400 font-bold block mb-1">
            Krok 1: Wskazówka (Niezmienna):
          </span>
          <textarea
            value={cue}
            onChange={(e) => setCue(e.target.value)}
            rows={2}
            className="w-full text-xs p-2 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 resize-none font-medium"
          />
        </div>

        {/* Reward */}
        <div className="p-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
          <span className="text-[10px] font-mono uppercase text-amber-700 dark:text-amber-400 font-bold block mb-1">
            Krok 2: Prawdziwa Nagroda (Niezmienna):
          </span>
          <textarea
            value={realReward}
            onChange={(e) => setRealReward(e.target.value)}
            rows={2}
            className="w-full text-xs p-2 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 resize-none font-medium"
          />
        </div>

        {/* Replacement Routine */}
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800">
          <span className="text-[10px] font-mono uppercase text-emerald-800 dark:text-emerald-300 font-bold block mb-1">
            Krok 3: Nowa Rutyna (Zastępcza):
          </span>
          <textarea
            value={replacementRoutine}
            onChange={(e) => setReplacementRoutine(e.target.value)}
            rows={2}
            className="w-full text-xs p-2 rounded-xl bg-white dark:bg-stone-900 border border-emerald-200 dark:border-emerald-700 resize-none font-medium"
          />
        </div>
      </div>

      {/* Synthesis Box */}
      <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 dark:bg-stone-950 border border-stone-800 space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-amber-400 font-bold">
          <Sparkles className="w-4 h-4" />
          <span>Nowy Obwód Behawioralny w Zwojach Podstawy:</span>
        </div>
        <p className="text-sm font-serif italic text-amber-100/90 leading-relaxed">
          „Za każdym razem, gdy pojawi się wskazówka [{cue}], zamiast automatycznego [{badRoutine}], mój układ nerwowy wykona nową rutynę: [{replacementRoutine}], dostarczając upragnioną biologiczną ulgę: [{realReward}]”.
        </p>
        <div className="text-xs font-mono text-stone-400 pt-2 border-t border-white/10 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Tożsamość: Z każdym powtórzeniem stajesz się osobą, która świadomie dba o swoje zasoby w pracy.</span>
        </div>
      </div>
    </div>
  );
};
