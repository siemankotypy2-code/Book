import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, RefreshCw, Sparkles, Copy, Check } from 'lucide-react';

interface Tactic {
  id: string;
  name: string;
  typicalPhrase: string;
  vulnerabilityTargeted: string;
  underlyingTrap: string;
  assertiveDefense: {
    script: string;
    rationale: string;
  };
}

const tactics: Tactic[] = [
  {
    id: 'gaslight',
    name: 'Gaslighting (Podważanie Pamięci i Rozsądku)',
    typicalPhrase: '„Nigdy czegoś takiego nie mówiłem, znowu wymyślasz i robisz z siebie ofiarę!”.',
    vulnerabilityTargeted: 'Zaufanie do własnych zmysłów i pamięci roboczej.',
    underlyingTrap: 'Sprawienie, byś poczuł się niestabilny emocjonalnie i uzależnił się od wersji manipulatora.',
    assertiveDefense: {
      script: '„Moja pamięć tej rozmowy jest jasna i nie będę o niej dyskutować. Skupmy się na tym, co robimy teraz”.',
      rationale: 'Odmawia wejścia w debatę o Twojej poczytalności i stawia twardą granicę.'
    }
  },
  {
    id: 'darvo',
    name: 'DARVO (Odwrócenie Ról Kata i Ofiary)',
    typicalPhrase: '„Jak śmiesz mi zarzucać spóźnienie?! Przez twoje ciągłe pretensje mam zawał serca, znowu mnie atakujesz!”.',
    vulnerabilityTargeted: 'Empatia i lęk przed byciem postrzeganym jako „zły człowiek”.',
    underlyingTrap: 'Zmuszenie Cię do przepraszania za to, że zwróciłeś uwagę na realny błąd manipulatora.',
    assertiveDefense: {
      script: '„Widzę, że ta rozmowa budzi w tobie silne emocje. Wrócimy do niej, gdy ochłoniesz. Sprawa spóźnienia nadal wymaga wyjaśnienia”.',
      rationale: 'Nie przyjmuje roli kata, wygasza manipulacyjny atak i zatrzymuje temat na stole.'
    }
  },
  {
    id: 'urgency',
    name: 'Sztuczna Presja Czasu (Artificial Urgency)',
    typicalPhrase: '„Musisz zdecydować w tej sekundzie! Za 5 minut oferta przepada na zawsze!”.',
    vulnerabilityTargeted: 'Lęk przed stratą (FOMO) i paraliż Systemu 2.',
    underlyingTrap: 'Zmuszenie kory przedczołowej do kapitulacji pod wpływem wyrzutu kortyzolu.',
    assertiveDefense: {
      script: '„Jeśli muszę podjąć decyzję teraz, moja odpowiedź brzmi NIE. Jeśli mam to przeanalizować, potrzebuję 24 godzin”.',
      rationale: 'Cofa manipulacyjną dźwignię czasu i natychmiast przywraca równowagę sił.'
    }
  },
  {
    id: 'guilt',
    name: 'Szantaż Emocjonalny (Poczucie Winy FOG)',
    typicalPhrase: '„Po tym wszystkim, co dla ciebie poświęciłem, ty masz czelność mi odmawiać?!”.',
    vulnerabilityTargeted: 'Dług wdzięczności i schemat uległości.',
    underlyingTrap: 'Wzbudzenie wstydu, który zmusi Cię do bezwarunkowego podporządkowania się żądaniu.',
    assertiveDefense: {
      script: '„Bardzo doceniam to, co dla mnie zrobiłeś w przeszłości, i jednocześnie w tej konkretnej sprawie moja odpowiedź brzmi nie”.',
      rationale: 'Uznaje przeszłość, ale zrywa manipulacyjny sznur długu w teraźniejszości.'
    }
  }
];

export const ManipulationDetector: React.FC = () => {
  const [selectedTacticId, setSelectedTacticId] = useState(tactics[0].id);
  const [copied, setCopied] = useState(false);

  const activeTactic = tactics.find((t) => t.id === selectedTacticId) || tactics[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTactic.assertiveDefense.script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold mb-4">
        <ShieldAlert className="w-4 h-4 text-amber-700" />
        <span>Detektor Manipulacji: Narzędzie Rozpoznawania i Odporności</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {tactics.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTacticId(t.id)}
            className={`p-3 rounded-xl border text-xs font-semibold transition text-left ${
              t.id === selectedTacticId
                ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 border-stone-200'
            }`}
          >
            {t.name.split('(')[0]}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400 font-bold block mb-1">
            Toksyczny cytat wyzwalający:
          </span>
          <p className="font-serif italic text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
            {activeTactic.typicalPhrase}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-700/60 border border-stone-200 dark:border-stone-600">
            <strong className="text-stone-900 dark:text-stone-100 block mb-0.5">Celowany słaby punkt:</strong>
            <span className="text-stone-600 dark:text-stone-300">{activeTactic.vulnerabilityTargeted}</span>
          </div>
          <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-700/60 border border-stone-200 dark:border-stone-600">
            <strong className="text-stone-900 dark:text-stone-100 block mb-0.5">Ukryta pułapka:</strong>
            <span className="text-stone-600 dark:text-stone-300">{activeTactic.underlyingTrap}</span>
          </div>
        </div>

        {/* Assertive Script */}
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Asertywna Odpowiedź Pancerza (Skrypt Gotowy):
            </span>
            <button
              onClick={handleCopy}
              className="text-xs font-mono text-emerald-800 hover:text-emerald-950 dark:text-emerald-300 flex items-center gap-1"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Skopiowano' : 'Kopiuj'}</span>
            </button>
          </div>
          <p className="font-serif font-bold text-sm sm:text-base text-emerald-950 dark:text-emerald-100 leading-relaxed">
            „{activeTactic.assertiveDefense.script}”
          </p>
          <p className="text-xs text-emerald-900 dark:text-emerald-200 italic">
            Dlaczego to działa: {activeTactic.assertiveDefense.rationale}
          </p>
        </div>
      </div>
    </div>
  );
};
