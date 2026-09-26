import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const SocialSystemMap: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'bio' | 'comm' | 'influence' | 'habits' | 'anchor'>('bio');

  const layers = {
    bio: {
      name: '1. Poziom Biologiczny (Tom I)',
      title: 'Zarządzanie Układem Nerwowym i Zasobami',
      focus: 'Sen NREM/REM, nawodnienie, protokół HALT (Hungry, Angry, Lonely, Tired), oddech fizjologiczny.',
      keyQuestion: 'W jakim stanie somatycznym wchodzę w dzisiejszy dzień?'
    },
    comm: {
      name: '2. Poziom Komunikacji (Rozdz. 7 & 10)',
      title: 'Architektura Słuchania i Granic',
      focus: 'Parafraza zamiast riposty, wyciszenie Ucha Relacji, stawianie granic bez poczucia winy, proporcja 5:1.',
      keyQuestion: 'Którym uchem słucham moich bliskich, gdy wracam do domu?'
    },
    influence: {
      name: '3. Poziom Odporności na Wpływ (Rozdz. 8 & 9)',
      title: 'Tarcza Poznawcza i Demaskowanie Manipulacji',
      focus: 'Rozpoznawanie sztucznej presji czasu, demaskowanie gaslightingu, ugruntowanie w faktach, etos.',
      keyQuestion: 'Kto próbuje wywołać we mnie sztuczny pośpiech lub poczucie długu?'
    },
    habits: {
      name: '4. Poziom Nawyków i Działania (Rozdz. 11, 12, 15)',
      title: 'Architektura Środowiska i Tożsamość',
      focus: 'Podmiana rutyny w zwojach podstawy, tarcie środowiskowe, zasada 2 minut, antyperfekcjonizm.',
      keyQuestion: 'Jakie jedno małe zachowanie powtarzam dzisiaj bez walki z silną wolą?'
    },
    anchor: {
      name: '5. Poziom Sensu i Systemu (Rozdz. 16)',
      title: 'Świadoma Współzależność i Sprawczość',
      focus: 'Pomiędzy bodźcem a reakcją jest przestrzeń. Rezonans limbiczny, bycie stabilną obecnością dla innych.',
      keyQuestion: 'Kim jestem w pętli społecznej mojego stada?'
    }
  };

  const active = layers[activeLayer];

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-4">
        <Compass className="w-4 h-4 text-amber-700" />
        <span>Syntetyczna Mapa Mechanizmów: Wielka Integracja Tomu I i II</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {(Object.keys(layers) as (keyof typeof layers)[]).map((k) => (
          <button
            key={k}
            onClick={() => setActiveLayer(k)}
            className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition ${
              activeLayer === k
                ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 border-stone-200'
            }`}
          >
            {layers[k].name.split('.')[1]}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-3">
        <h4 className="font-serif font-bold text-lg text-amber-950 dark:text-amber-100">
          {active.title}
        </h4>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          <strong className="text-stone-900 dark:text-stone-100">Kluczowe mechanizmy: </strong>
          {active.focus}
        </p>

        <div className="p-4 rounded-xl bg-amber-50 dark:bg-stone-900/60 border border-amber-600/20">
          <span className="text-[10px] font-mono uppercase text-amber-800 dark:text-amber-400 font-bold block mb-1">
            Pytanie Kompasowe na ten poziom:
          </span>
          <p className="font-serif italic text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
            „{active.keyQuestion}”
          </p>
        </div>
      </div>
    </div>
  );
};
