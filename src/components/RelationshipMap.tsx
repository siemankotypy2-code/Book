import React, { useState } from 'react';
import { Heart, ShieldCheck, Flame, AlertOctagon, CheckCircle2, RefreshCw, Sparkles } from 'lucide-react';

export const RelationshipMap: React.FC = () => {
  const [positiveCount, setPositiveCount] = useState(5);
  const [negativeCount, setNegativeCount] = useState(1);
  const [selectedHorseman, setSelectedHorseman] = useState<'criticism' | 'contempt' | 'defensiveness' | 'stonewalling'>('contempt');

  const ratio = negativeCount > 0 ? (positiveCount / negativeCount).toFixed(1) : positiveCount.toString();
  const isHealthy = Number(ratio) >= 5;

  const horsemenData = {
    criticism: {
      name: 'Krytyka (Atak na Tożsamość)',
      example: '„Znowu nie posprzątałeś kuchni, jesteś niereformowalnym bałaganiarzem!”.',
      antidote: 'Łagodne Rozpoczęcie (Softened Startup): Skup się na zachowaniu i konkretnej prośbie: „Kochanie, widzę naczynia w zlewie. Zależy mi, abyśmy mieli czysto przed snem, proszę zmyj je teraz”.'
    },
    contempt: {
      name: 'Pogarda (Najgroźniejszy Jeździec)',
      example: '„I to mówi ten wielki biznesmen, który nie potrafi nawet zapłacić rachunku za prąd? (przewracanie oczami)”.',
      antidote: 'Kultura Docenienia (Culture of Appreciation): Zauważanie drobnych starań i budowanie szacunku: „Doceniam, jak ciężko pracujesz, i jednocześnie potrzebuję twojej pomocy w domowych rachunkach”.'
    },
    defensiveness: {
      name: 'Postawa Obronna (Odbijanie Piłeczki)',
      example: '„Ja się spóźniłem?! A pamiętasz, jak ty w zeszłą niedzielę kazałaś mi czekać pół godziny?!”.',
      antidote: 'Wzięcie Choćby 10% Odpowiedzialności: „Masz rację, nie uprzedziłem cię o korkach. Przepraszam, powinienem był zadzwonić z drogi”.'
    },
    stonewalling: {
      name: 'Mur Obojętności (Zalanie Fizjologiczne)',
      example: 'Całkowite milczenie, wpatrywanie się w ścianę, ignorowanie obecności partnera.',
      antidote: 'Fizjologiczne Uspokojenie (Self-Soothing): „Jestem teraz zalany emocjami i moje tętno przekracza 100 bpm. Zróbmy 20 minut przerwy, pójdę na spacer i wrócę do rozmowy”.'
    }
  };

  const activeHorseman = horsemenData[selectedHorseman];

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-4">
        <Heart className="w-4 h-4 text-amber-700" />
        <span>Kalkulator Relacyjny: Magiczna Proporcja 5:1 i Antidota Gottmana</span>
      </div>

      {/* 5:1 Ratio Interactive Barometer */}
      <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
            Kalkulator Interakcji w Ostatnich 7 Dniach:
          </span>
          <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
            isHealthy
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300'
              : 'bg-rose-100 text-rose-800 border border-rose-300 dark:bg-rose-950/60 dark:text-rose-300'
          }`}>
            Proporcja: {ratio} : 1 {isHealthy ? '• Strefa Bezpieczna' : '• Strefa Zagrożenia'}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
            <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
              Gesty Pozytywne (uśmiech, wsparcie, herbata, dotyk): {positiveCount}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPositiveCount(Math.max(0, positiveCount - 1))}
                className="w-7 h-7 rounded-lg bg-emerald-200 dark:bg-emerald-800 text-emerald-950 dark:text-emerald-100 font-bold"
              >
                -
              </button>
              <button
                onClick={() => setPositiveCount(positiveCount + 1)}
                className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800">
            <span className="text-xs font-mono font-bold text-rose-800 dark:text-rose-300 block mb-1">
              Spięcia i Krytyka (pretensje, chłód, zniecierpliwienie): {negativeCount}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setNegativeCount(Math.max(0, negativeCount - 1))}
                className="w-7 h-7 rounded-lg bg-rose-200 dark:bg-rose-800 text-rose-950 dark:text-rose-100 font-bold"
              >
                -
              </button>
              <button
                onClick={() => setNegativeCount(negativeCount + 1)}
                className="w-7 h-7 rounded-lg bg-rose-700 text-white font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Four Horsemen Antidotes */}
      <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
        <span className="text-xs font-mono uppercase text-stone-500 font-bold block mb-2">
          Rozbrój Czterech Jeźdźców Apokalipsy Gottmana:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {(Object.keys(horsemenData) as (keyof typeof horsemenData)[]).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedHorseman(key)}
              className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition ${
                selectedHorseman === key
                  ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                  : 'bg-stone-50 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 border-stone-200'
              }`}
            >
              {horsemenData[key].name.split('(')[0]}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 text-xs sm:text-sm text-rose-900 dark:text-rose-200">
            <strong className="block text-[10px] font-mono uppercase text-rose-700 dark:text-rose-400 mb-1">
              Toksyczny Schemat Jeźdźca:
            </strong>
            {activeHorseman.example}
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
            <strong className="block text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 mb-1">
              Antidotum Kliniczne Gottmana:
            </strong>
            {activeHorseman.antidote}
          </div>
        </div>
      </div>
    </div>
  );
};
