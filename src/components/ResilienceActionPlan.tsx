import React, { useState } from 'react';
import { ShieldCheck, Heart, RotateCcw, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const ResilienceActionPlan: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: 'Faza 0–4h: Pierwsza Pomoc Somatyczna',
      instruction: 'Twój mózg jest w szoku afektywnym. Zakaz podejmowania jakichkolwiek decyzji. Weź gorący prysznic, zjedz ciepły posiłek, wyłącz telefon.',
      selfCompassionMantra: '„To jest moment cierpienia. Cierpienie jest częścią ludzkiego doświadczenia. Niech będę dla siebie łagodny w tej godzinie”.'
    },
    {
      step: 2,
      title: 'Faza 4–12h: Drenaż Emocjonalny bez Oceniania',
      instruction: 'Porozmawiaj z JEDNĄ bezpieczną osobą, która nie daje rad, a jedynie potrafi wysłuchać bez mówienia „a nie mówiłem”.',
      selfCompassionMantra: '„Każdy człowiek na świecie popełnia błędy i doświadcza odrzucenia. Nie jestem w tym odosobniony”.'
    },
    {
      step: 3,
      title: 'Faza 12–24h: Rozdzielenie Kontroli i Nowy Mikro-Ruch',
      instruction: 'Wypisz na kartce: Co było pod moją kontrolą? Co było poza moją kontrolą? Wykonaj JEDEN mikroskopijny krok naprawczy (2 minuty).',
      selfCompassionMantra: '„Porażka to nie moja tożsamość. To jedynie informacja zwrotna o tym, która ścieżka była ślepa”.'
    }
  ];

  const current = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-4">
        <ShieldCheck className="w-4 h-4 text-amber-700" />
        <span>Protokół Bounce-Back: Procedura 24h po Ciężkim Upadku</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {steps.map((s) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(s.step)}
            className={`p-3 rounded-xl border text-xs font-bold transition text-center ${
              activeStep === s.step
                ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 border-stone-200'
            }`}
          >
            Faza {s.step} ({s.step === 1 ? '0–4h' : s.step === 2 ? '4–12h' : '12–24h'})
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-4">
        <h4 className="font-serif font-bold text-base sm:text-lg text-amber-950 dark:text-amber-100">
          {current.title}
        </h4>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          {current.instruction}
        </p>

        <div className="p-4 rounded-xl bg-amber-50 dark:bg-stone-900/60 border border-amber-600/20">
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-amber-800 dark:text-amber-400 font-bold mb-1">
            <Heart className="w-3.5 h-3.5" />
            <span>Formuła Samowspółczucia Kristin Neff na tę fazę:</span>
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-stone-900 dark:text-stone-100">
            {current.selfCompassionMantra}
          </p>
        </div>
      </div>
    </div>
  );
};
