import React, { useState } from 'react';
import { Compass, Scale, Shield, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Heart, Target } from 'lucide-react';

interface ValueConflictCase {
  id: string;
  title: string;
  context: string;
  valueA: { name: string; category: string; description: string; shortTermConsequence: string };
  valueB: { name: string; category: string; description: string; shortTermConsequence: string };
  realLifeDilemma: string;
}

const DILEMMAS: ValueConflictCase[] = [
  {
    id: 'career-vs-family',
    title: 'Kariera i Osiągnięcia vs Bliskość i Obecność',
    context: 'Oferta objęcia roli dyrektora regionalnego w nowym mieście z 70% podwyżką, ale kosztem 60 godzin pracy tygodniowo i częstych wyjazdów.',
    valueA: {
      name: 'Osiągnięcia i Wpływ (Achievement / Power)',
      category: 'Umacnianie Ja (Self-Enhancement)',
      description: 'Dążenie do statusu, mistrzostwa zawodowego, sprawczości finansowej i uznania w branży.',
      shortTermConsequence: 'Poczucie triumfu, wysoki prestiż, ale chroniczne zmęczenie i nieobecność w domu.'
    },
    valueB: {
      name: 'Bliskość i Relacje (Benevolence / Care)',
      category: 'Przekraczanie Ja (Self-Transcendence)',
      description: 'Pielęgnowanie głębokich więzi z dziećmi i partnerem, uważność, obecność w codziennych rytuałach.',
      shortTermConsequence: 'Poczucie ciepła i stabilności rodzinnej, ale ukłucie żalu za utraconą szansą awansu.'
    },
    realLifeDilemma: 'Czy wybrać awans i obiecywać sobie „za 2 lata zwolnię tempo”, czy odmówić i zaakceptować stabilizację finansową?'
  },
  {
    id: 'security-vs-autonomy',
    title: 'Bezpieczeństwo Finansowe vs Autonomia i Twórczość',
    context: 'Stabilny etat w stabilnej korporacji ze świetnym pakietem benefitów kontra założenie własnego studia projektowego.',
    valueA: {
      name: 'Bezpieczeństwo i Przewidywalność (Security)',
      category: 'Zachowawczość (Conservation)',
      description: 'Ochrona przed ryzykiem, pewny dochód na 1. dzień miesiąca, spokój o ratę kredytu.',
      shortTermConsequence: 'Brak lęku o byt, ale powolne wypalenie i poczucie uwięzienia w cudzych procedurach.'
    },
    valueB: {
      name: 'Autonomia i Samokierowanie (Self-Direction)',
      category: 'Otwartość na Zmianę (Openness to Change)',
      description: 'Wolność wyboru projektów, decydowanie o własnym czasie, tworzenie według własnej wizji.',
      shortTermConsequence: 'Ogromna ekscytacja i duma, ale skoki kortyzolu przy pierwszych wahaniach przychodów.'
    },
    realLifeDilemma: 'Czy pracować bezpiecznie wbrew sobie, czy zaryzykować i wziąć odpowiedzialność za niepewność?'
  },
  {
    id: 'conformity-vs-authenticity',
    title: 'Akceptacja Grupy vs Wewnętrzna Prawda',
    context: 'W firmie zarząd forsuje kampanię marketingową opartą na manipulacji i ukrywaniu wad produktu. Wszyscy koledzy potakują.',
    valueA: {
      name: 'Konformizm i Przynależność (Conformity)',
      category: 'Zachowawczość (Conservation)',
      description: 'Unikanie działań i słów, które mogłyby zdenerwować innych lub naruszyć reguły grupy.',
      shortTermConsequence: 'Brak konfliktów, zachowanie pozycji w zespole, ale narastający niesmak do samego siebie.'
    },
    valueB: {
      name: 'Uczciwość i Uniwersalizm (Universalism / Integrity)',
      category: 'Przekraczanie Ja (Self-Transcendence)',
      description: 'Sprawiedliwość, szacunek do prawdy, ochrona klientów przed oszustwem.',
      shortTermConsequence: 'Czyste sumienie, ale ryzyko ostracyzmu i etykiety „trudnego marudy”.'
    },
    realLifeDilemma: 'Milczeć i brać premię czy zgłosić zastrzeżenia i narazić się szefostwu?'
  }
];

export const ValueConflictSim: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const dilemma = DILEMMAS[selectedIdx];

  const [weightA, setWeightA] = useState<number>(50); // slider 0-100
  const [chosenStrategy, setChosenStrategy] = useState<'prioritizeA' | 'prioritizeB' | 'integrative' | null>(null);

  const weightB = 100 - weightA;

  return (
    <div className="my-10 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-1">
          <Scale className="w-4 h-4 text-amber-400" />
          <span>Laboratorium Tomu III • Rozdział 4</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-amber-50">
          Symulator Konfliktu Wartości i Decyzji Autonomicznych
        </h3>
        <p className="text-sm text-stone-300 mt-1 max-w-2xl">
          Konflikt wartości nie jest błędem myślenia – to naturalne zderzenie fundamentalnych ludzkich motywacji (Shalom Schwartz). Zmierz koszt kompromisu i przećwicz protokół integracji aksjologicznej.
        </p>
      </div>

      <div className="p-6">
        {/* Dilemma Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {DILEMMAS.map((d, idx) => (
            <button
              key={d.id}
              onClick={() => {
                setSelectedIdx(idx);
                setWeightA(50);
                setChosenStrategy(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                idx === selectedIdx
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300'
              }`}
            >
              Dylemat {idx + 1}: {d.title.split(' vs ')[0]}
            </button>
          ))}
        </div>

        {/* Case Narrative */}
        <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-stone-800/60 border border-amber-200 dark:border-amber-900/50 mb-6">
          <span className="text-[11px] font-mono uppercase font-bold text-amber-800 dark:text-amber-400 block mb-1">
            Kontekst Sytuacyjny:
          </span>
          <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
            {dilemma.context}
          </p>
          <div className="mt-2 text-xs font-mono text-stone-600 dark:text-stone-400 italic">
            Główny problem: {dilemma.realLifeDilemma}
          </div>
        </div>

        {/* The Two Conflicting Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Value A */}
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-bold mb-1">
                Biegun A • {dilemma.valueA.category}
              </div>
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-1">
                {dilemma.valueA.name}
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
                {dilemma.valueA.description}
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[11px] text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-900">
              <strong>Konsekwencja:</strong> {dilemma.valueA.shortTermConsequence}
            </div>
          </div>

          {/* Value B */}
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                Biegun B • {dilemma.valueB.category}
              </div>
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-1">
                {dilemma.valueB.name}
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
                {dilemma.valueB.description}
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-[11px] text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-900">
              <strong>Konsekwencja:</strong> {dilemma.valueB.shortTermConsequence}
            </div>
          </div>
        </div>

        {/* Dynamic Weight Slider */}
        <div className="mb-6 p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
          <div className="flex justify-between items-center text-xs font-mono font-bold mb-2">
            <span className="text-blue-700 dark:text-blue-400">Waga Wartości A: {weightA}%</span>
            <span className="text-stone-500 uppercase">Ważenie Aksjologiczne</span>
            <span className="text-emerald-700 dark:text-emerald-400">Waga Wartości B: {weightB}%</span>
          </div>
          <input
            type="range"
            min="5"
            max="95"
            value={weightA}
            onChange={(e) => setWeightA(parseInt(e.target.value, 10))}
            className="w-full accent-amber-700 cursor-pointer h-2 bg-stone-300 dark:bg-stone-700 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
            <span>Całkowite poświęcenie B dla A</span>
            <span>Równowaga / Napięcie</span>
            <span>Całkowite poświęcenie A dla B</span>
          </div>
        </div>

        {/* Resolution Strategies */}
        <div className="mb-6">
          <span className="text-xs font-mono uppercase text-stone-500 font-bold block mb-2">
            Wybierz Strategię Rozwiązania Konfliktu (Protokół Rozdziału 4):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setChosenStrategy('prioritizeA')}
              className={`p-3 rounded-xl border text-left text-xs font-mono transition ${
                chosenStrategy === 'prioritizeA'
                  ? 'bg-blue-100 dark:bg-blue-950 border-blue-500 text-blue-900 dark:text-blue-200 ring-2 ring-blue-400'
                  : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
              }`}
            >
              <div className="font-bold mb-1">1. Wybór Bieguna A</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-sans">
                Akceptuję pełną cenę i żałobę po utraconej wartości B, ale działam z pełną determinacją.
              </p>
            </button>

            <button
              onClick={() => setChosenStrategy('prioritizeB')}
              className={`p-3 rounded-xl border text-left text-xs font-mono transition ${
                chosenStrategy === 'prioritizeB'
                  ? 'bg-emerald-100 dark:bg-emerald-950 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-400'
                  : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
              }`}
            >
              <div className="font-bold mb-1">2. Wybór Bieguna B</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-sans">
                Odrzucam pokusę krótkoterminowej nagrody na rzecz spójności etycznej i długofalowych więzi.
              </p>
            </button>

            <button
              onClick={() => setChosenStrategy('integrative')}
              className={`p-3 rounded-xl border text-left text-xs font-mono transition ${
                chosenStrategy === 'integrative'
                  ? 'bg-amber-100 dark:bg-amber-950 border-amber-500 text-amber-900 dark:text-amber-200 ring-2 ring-amber-400'
                  : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
              }`}
            >
              <div className="font-bold mb-1">3. Integracja Trzeciej Drogi</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 font-sans">
                Zamiast fałszywego dylematu „wszystko albo nic”, projektuję warunki brzegowe chroniące obie wartości.
              </p>
            </button>
          </div>
        </div>

        {/* Synthesis & Feedback */}
        {chosenStrategy && (
          <div className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800/90 border border-stone-200 dark:border-stone-700 space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-amber-800 dark:text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Analiza Wyboru wg Teorii Autodeterminacji (Deci & Ryan)</span>
            </div>

            <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
              {chosenStrategy === 'integrative'
                ? 'Wybrałeś podejście mądrościowe. Integracja polega na redefinicji zadania: np. w przypadku kariery i rodziny nie godzisz się na ślepe 60h, lecz negocjujesz hybrydowy model pracy, delegujesz operacyjne gaszenie pożarów i chronisz wieczorne okno rodzinne jak nienaruszalne spotkanie z kluczowym zarządem. W ten sposób zaspokajasz zarówno potrzebę kompetencji, jak i powiązania.'
                : chosenStrategy === 'prioritizeA'
                ? 'Świadoma asymetria. Jeżeli wybierasz biegun A, kluczem jest unikanie ucieczkowego tłumaczenia „nie miałem wyboru”. Miałeś wybór i wybrałeś A ze wszystkimi tego konsekwencjami. Ustal jednak z góry sztywny horyzont czasowy (np. 12 miesięcy), by nie obudzić się za 10 lat z poczuciem pustki.'
                : 'Odmowa uwikłania w cudzą grę. Wybór bieguna B wymaga ogromnej dojrzałości emocjonalnej i odporności na presję społeczną („jak mogłeś odrzucić taką ofertę!”). Twoją tarczą jest świadomość, że spokój sumienia i autentyczne więzi to zasoby, których nie da się odkupić żadną premią.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
