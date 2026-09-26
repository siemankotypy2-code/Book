import React, { useState } from 'react';
import { Target, Scale, Zap, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const PersuasionLab: React.FC = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<'reciprocity' | 'scarcity' | 'socialProof' | 'framing'>('framing');

  const techniques = {
    framing: {
      name: 'Efekt Ramowania (Framing)',
      principle: 'Teoria Perspektywy Kahnemana: Ból straty boli 2,5 raza mocniej niż radość z zysku.',
      comparison: {
        weak: '„Jeśli wdrożymy ten system, zaoszczędzimy 15 000 zł rocznie”. (Rama Zysku — niska pilność decyzyjna).',
        strong: '„Każdy miesiąc zwłoki w podjęciu tej decyzji kosztuje nas 1250 zł wypływających bezpośrednio z kasy firmy bezpowrotnie”. (Rama Straty — wysoka pilność decyzyjna).'
      },
      neuroHook: 'Przednia kora zakrętu obręczy i amygdala aktywują natychmiastowe dążenie do zablokowania utraty zasobu.'
    },
    reciprocity: {
      name: 'Reguła Wzajemności i Ustępstw',
      principle: 'Człowiek odczuwa silne napięcie fizjologiczne, dopóki nie zrewanżuje się za otrzymany dar.',
      comparison: {
        weak: '„Proszę o podpisanie umowy na 2 lata z płatnością z góry”. (Żądanie jednostronne — opór).',
        strong: '„Przygotowałem dla państwa darmowy audyt waszego kodu z 3 gotowymi poprawkami. Jeśli chcecie, byśmy wdrożyli resztę, porozmawiajmy o elastycznym pakiecie”. (Darmowa wartość wywołuje dług wdzięczności).'
      },
      neuroHook: 'Układ nagrody i obwody moralne traktują dług wdzięczności jako asymetrię społeczną wymagającą wyrównania.'
    },
    scarcity: {
      name: 'Reguła Niedostępności (Scarcity)',
      principle: 'Rzeczy rzadkie lub tracące dostępność zyskują w naszych oczach podwójną wartość.',
      comparison: {
        weak: '„Nasze szkolenia są dostępne przez cały rok, można zapisać się w dowolnym momencie”. (Odkładanie na wieczne jutro).',
        strong: '„Pracujemy w kameralnej grupie do 8 osób, by zapewnić indywidualną opiekę. Zostały 2 ostatnie wolne miejsca w tym kwartale”. (Lęk przed wykluczeniem i utratą szansy).'
      },
      neuroHook: 'Reaktancja psychologiczna (J. Brehm) — mózg reaguje buntem na widmo zawężenia pola wyboru.'
    },
    socialProof: {
      name: 'Społeczny Dowód Słuszności (Social Proof)',
      principle: 'W warunkach niepewności kora nowa kopiuje wybory ludzi z tej samej grupy odniesienia.',
      comparison: {
        weak: '„Wierzymy, że nasza aplikacja jest bardzo innowacyjna i nowoczesna”. (Puste deklaracje nadawcy).',
        strong: '„84% dyrektorów IT w polskich bankach komercyjnych wdrożyło ten protokół bezpieczeństwa w 2025 roku”. (Precyzyjny dowód stada w niszy).'
      },
      neuroHook: 'Redukcja kosztu energetycznego decyzji — stado już sprawdziło bezpieczeństwo ścieżki.'
    }
  };

  const current = techniques[selectedTechnique];

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-4">
        <Target className="w-4 h-4 text-amber-700" />
        <span>Laboratorium Perswazji: Kognitywne Inżynierie Wpływu</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {(Object.keys(techniques) as (keyof typeof techniques)[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedTechnique(key)}
            className={`p-3 rounded-xl border text-xs font-semibold transition text-left ${
              selectedTechnique === key
                ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 border-stone-200'
            }`}
          >
            {techniques[key].name.split('(')[0]}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 mb-6">
        <h4 className="font-serif font-bold text-lg text-amber-950 dark:text-amber-100 mb-1">
          {current.name}
        </h4>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mb-4">
          {current.principle}
        </p>

        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 text-xs sm:text-sm text-rose-900 dark:text-rose-200">
            <strong className="block text-[11px] font-mono uppercase text-rose-700 dark:text-rose-400 mb-1">
              Słaba wersja (Opór i ziewanie odbiorcy):
            </strong>
            {current.comparison.weak}
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
            <strong className="block text-[11px] font-mono uppercase text-emerald-700 dark:text-emerald-400 mb-1">
              Mistrzowska wersja kognitywna (Uruchomienie działania):
            </strong>
            {current.comparison.strong}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-700 flex items-center gap-2 text-xs font-mono text-amber-800 dark:text-amber-400">
          <Zap className="w-4 h-4 shrink-0" />
          <span>Biologiczny haczyk: {current.neuroHook}</span>
        </div>
      </div>
    </div>
  );
};
