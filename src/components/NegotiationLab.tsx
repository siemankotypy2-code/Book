import React, { useState } from 'react';
import { Scale, CheckCircle2, ArrowRight, Sparkles, Shield, DollarSign } from 'lucide-react';

export const NegotiationLab: React.FC = () => {
  const [myPosition, setMyPosition] = useState('Chcę podwyżki o 30% od zaraz');
  const [myDeepInterest, setMyDeepInterest] = useState('Poczucie docenienia mojego wkładu, bezpieczeństwo finansowe przy rosnącej inflacji i jasna ścieżka awansu');
  const [myBatna, setMyBatna] = useState('Oferta od konkurencyjnej firmy z pensją +20% lub przejście na B2B z trzema niezależnymi klientami');

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-4">
        <Scale className="w-4 h-4 text-amber-700" />
        <span>Laboratorium Negocjacji Harwardzkich: Macierz Przygotowania i BATNA</span>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <span className="text-[10px] font-mono uppercase text-rose-700 dark:text-rose-400 font-bold block mb-1">
              1. Twoje Stanowisko (Żądanie twarde):
            </span>
            <input
              type="text"
              value={myPosition}
              onChange={(e) => setMyPosition(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 font-medium"
            />
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <span className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold block mb-1">
              2. Twój Prawdziwy Interes (Głęboka Potrzeba):
            </span>
            <input
              type="text"
              value={myDeepInterest}
              onChange={(e) => setMyDeepInterest(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 font-medium"
            />
          </div>
        </div>

        {/* BATNA Box */}
        <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-600/30">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-900 dark:text-amber-300 mb-1">
            <Shield className="w-4 h-4" />
            <span>3. Twoja Żelazna BATNA (Najlepsza alternatywa w razie fiaska rozmowy):</span>
          </div>
          <input
            type="text"
            value={myBatna}
            onChange={(e) => setMyBatna(e.target.value)}
            className="w-full text-xs p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-amber-600/30 font-medium"
          />
        </div>

        {/* Harvard Synthesis Script */}
        <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 dark:bg-stone-950 border border-stone-800 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-amber-400 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Pytanie Kalibrowane Vossa do Użycia przy Stole:</span>
          </div>
          <p className="text-sm font-serif italic text-amber-100/95 leading-relaxed">
            „Panie dyrektorze, zależy mi na stabilności projektów i wieloletniej współpracy z firmą. W oparciu o moje rezultaty: jak możemy ustrukturyzować mój pakiet wynagrodzenia, by odzwierciedlał tę wartość, bez naruszania budżetu kwartalnego?”.
          </p>
        </div>
      </div>
    </div>
  );
};
