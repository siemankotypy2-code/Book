import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Eye,
  Sliders,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Brain,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface DecisionStep {
  id: string;
  stepNum: number;
  name: string;
  category: 'informacja' | 'uwaga' | 'interpretacja' | 'cele' | 'ocena' | 'przewidywanie' | 'wybor' | 'dzialanie' | 'wynik' | 'retrospekcja';
  description: string;
  keyQuestion: string;
  sourceRef: string;
  interventionPoint: string;
}

const PROCESS_STEPS: DecisionStep[] = [
  {
    id: 'step-1',
    stepNum: 1,
    name: 'Bodziec i Czysta Informacja',
    category: 'informacja',
    description: 'Środowisko fizyczne i cyfrowe generuje strumień danych (sygnały, liczby, fakty). W tym punkcie informacja jeszcze nie posiada znaczenia emocjonalnego ani wartości.',
    keyQuestion: 'Co dokładnie się wydarzyło w sensie obiektywnych faktów, bez żadnych moich domysłów?',
    sourceRef: 'Źródło: Rozdział 1.1 (Definicja i ramy)',
    interventionPoint: 'Punkt Interwencji 1: Wstrzymanie automatycznej reakcji i weryfikacja twardych danych przed nadaniem im etykiety.'
  },
  {
    id: 'step-2',
    stepNum: 2,
    name: 'Filtr i Ukierunkowanie Uwagi',
    category: 'uwaga',
    description: 'Zasoby uwagi są ograniczone. Mózg selekcjonuje ułamek docierających danych. To, co głośne, kontrastowe, pulsujące lub znajome, automatycznie przechwytuje reflektor świadomości.',
    keyQuestion: 'Na jakie elementy sytuacji patrzę, a które kluczowe informacje pozostają poza moim polem widzenia?',
    sourceRef: 'Źródło: Rozdział 1.1.4 & 1.2 (Koszt poznawczy)',
    interventionPoint: 'Punkt Interwencji 2: Świadome skierowanie reflektora uwagi na tło i pomijane alternatywy (np. koszty ukryte).'
  },
  {
    id: 'step-3',
    stepNum: 3,
    name: 'Interpretacja i Heurystyki Poznawcze',
    category: 'interpretacja',
    description: 'Surowy fakt zostaje przepuszczony przez filtry uproszczeń: zakotwiczenie (wpływ pierwszej liczby), framing (ramowanie w kategoriach straty vs zysku) czy dostępność skojarzeń.',
    keyQuestion: 'Czy to, co myślę, to bezpośredni fakt, czy szybka heurystyczna opowieść mojego umysłu?',
    sourceRef: 'Źródło: Rozdział 1.3 & 1.4 (Heurystyki i biasy)',
    interventionPoint: 'Punkt Interwencji 3: Przeformułowanie ramy (re-framing) i poszukiwanie alternatywnych wyjaśnień zamiast confirmation bias.'
  },
  {
    id: 'step-4',
    stepNum: 4,
    name: 'Konflikt Celów, Wartości i Tożsamości',
    category: 'cele',
    description: 'Umysł zderza sprzeczne motywacje: natychmiastowa ulga vs długoterminowy sukces, lojalność wobec innych vs własna autonomia, bezpieczeństwo vs rozwój.',
    keyQuestion: 'Który cel próbuje teraz dominować: natychmiastowe obniżenie napięcia czy długofalowy priorytet tożsamościowy?',
    sourceRef: 'Źródło: Rozdział 1.6 & 1.7 (Nagroda, koszt, konflikt)',
    interventionPoint: 'Punkt Interwencji 4: Ujawnienie ukrytego konfliktu aksjologicznego i świadome ustalenie priorytetu wyższego rzędu.'
  },
  {
    id: 'step-5',
    stepNum: 5,
    name: 'Wycena Subiektywna i Ocena Ryzyka',
    category: 'ocena',
    description: 'Value-based decision making: każda opcja otrzymuje subiektywną wagę. Rozróżnienie sytuacji ryzyka (znane prawdopodobieństwo) od sytuacji głębokiej niepewności (brak danych).',
    keyQuestion: 'Czy mam wiarygodne dane do oceny prawdopodobieństwa, czy działam w warunkach czystej niepewności?',
    sourceRef: 'Źródło: Rozdział 1.5 & 1.11 (Teoria perspektywy)',
    interventionPoint: 'Punkt Interwencji 5: Urealnienie punktu odniesienia i uwzględnienie asymetrii awersji do strat.'
  },
  {
    id: 'step-6',
    stepNum: 6,
    name: 'Przewidywanie Konsekwencji w Czasie',
    category: 'przewidywanie',
    description: 'Symulacja przyszłości. Zagrożenie pułapką optymizmu (optimism bias) oraz present bias (zaniżanie wagi kosztów odroczonych w czasie).',
    keyQuestion: 'Jak ocenię ten krok nie za 10 minut, lecz za 24 godziny, za miesiąc i za rok?',
    sourceRef: 'Źródło: Rozdział 1.4 & 1.6 (Present bias, discounting)',
    interventionPoint: 'Punkt Interwencji 6: Zastosowanie analizy pre-mortem: „Wyobraźmy sobie, że minął rok i projekt legł w gruzach — dlaczego?”.'
  },
  {
    id: 'step-7',
    stepNum: 7,
    name: 'Wybór: Decyzja Aktywna vs Zaniechanie',
    category: 'wybor',
    description: 'Zwieńczenie procesu porównania. Pamiętaj: zaniechanie działania i ucieczka w status quo również jest formą wyboru niosącą realne skutki.',
    keyQuestion: 'Czy wybieram to świadomie, czy biernie pozwalam, aby decyzja podjęła się sama przez brak mojego głosu?',
    sourceRef: 'Źródło: Rozdział 1.1.2 (Czy brak działania to decyzja?)',
    interventionPoint: 'Punkt Interwencji 7: Świadoma deklaracja: „Wybieram opcję A” lub „Świadomie decyduję się na brak zmiany”.'
  },
  {
    id: 'step-8',
    stepNum: 8,
    name: 'Działanie i Bariery Wykonawcze',
    category: 'dzialanie',
    description: 'Przejście od zamiaru do zachowania. Kora przedczołowa musi przełamać tarcie środowiskowe i koszt energetyczny aktywacji.',
    keyQuestion: 'Jakie tarcie w moim otoczeniu ułatwia właściwe działanie, a jakie popycha mnie w stronę automatycznego nawyku?',
    sourceRef: 'Źródło: Rozdział 1.2 (Kontrola wykonawcza, środowisko)',
    interventionPoint: 'Punkt Interwencji 8: Architektura środowiska — obniżenie tarcia dla kroku pożądanego i podniesienie tarcia dla pokusy.'
  },
  {
    id: 'step-9',
    stepNum: 9,
    name: 'Reakcja Świata, Innych i Wynik',
    category: 'wynik',
    description: 'Obiektywny rezultat zderzenia naszego działania ze złożonym środowiskiem, zdarzeniami losowymi i reakcjami innych ludzi.',
    keyQuestion: 'W jakim stopniu ten rezultat wynika z jakości mojego procesu decyzyjnego, a w jakim z czynników losowych?',
    sourceRef: 'Źródło: Rozdział 1.1.4 (Jakość decyzji vs jakość wyniku)',
    interventionPoint: 'Punkt Interwencji 9: Oddzielenie rzetelnej oceny procesu od losowości wyniku (nie myl szczęścia z mądrością).'
  },
  {
    id: 'step-10',
    stepNum: 10,
    name: 'Retrospekcja, Uczenie Się i Nowa Baza',
    category: 'retrospekcja',
    description: 'Pętla sprzężenia zwrotnego. Zamiast destrukcyjnego żalu i ataku na tożsamość („jestem beznadziejny”), funkcjonalne myślenie kontrfaktyczne koryguje przyszłe oczekiwania.',
    keyQuestion: 'Czego ta sytuacja uczy mnie o moich założeniach i jakie parametry zmienię przed kolejną decyzją?',
    sourceRef: 'Źródło: Rozdział 1.9 & 1.10 (Kontrfaktyczność, żal, sprawczość)',
    interventionPoint: 'Punkt Interwencji 10: Formułowanie reguły decyzyjnej 2.0 bez samobiczowania tożsamościowego.'
  }
];

interface SimulationScenario {
  id: string;
  title: string;
  badge: string;
  summary: string;
  defaultBias: string;
  counterfactualIntervention: string;
  badProcessPath: string[];
  goodProcessPath: string[];
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: 'sc-1',
    title: 'Dylemat Ryzykownego Projektu i Utopionych Kosztów',
    badge: 'Biznes & Projekty',
    summary: 'Zespół włożył 8 miesięcy i 120 000 zł w oprogramowanie, które z powodu zmian technologicznych traci sens rynkowy. Lider staje przed wyborem: zainwestować kolejne 50 000 zł czy zamknąć projekt.',
    defaultBias: 'Błąd Kosztów Utopionych (Sunk Cost) + Efekt Status Quo + Lęk przed przyznaniem się do porażki.',
    counterfactualIntervention: 'Interwencja w Kroku 3 i 5: Przyjęcie zasady „od zera” — czy gdybyśmy weszli do firmy dzisiaj i mieli 50 000 zł w gotówce, zainwestowalibyśmy je w ten projekt?',
    badProcessPath: [
      'Krok 3: Ramowanie: „Nie możemy pozwolić, by 8 miesięcy poszło na marne!”.',
      'Krok 5: Niedoszacowanie ryzyka dalszych strat przez overconfidence.',
      'Krok 7: Decyzja o dopłaceniu 50 000 zł.',
      'Krok 9: Całkowity krach produktu po 6 miesiącach, strata 170 000 zł.',
      'Krok 10: Retrospekcja w destrukcyjnej pętli żalu i wzajemnych oskarżeń.'
    ],
    goodProcessPath: [
      'Krok 3: Świadome odcięcie kosztów utopionych: przeszłe nakłady są nieodwracalne.',
      'Krok 5: Rzetelna analiza wartości bieżącej i porównanie z alternatywnymi projektami.',
      'Krok 7: Świadoma, kontrolowana decyzja o zamknięciu projektu i przekierowaniu zasobów.',
      'Krok 9: Ocalenie 50 000 zł kapitału i ulga zespołu.',
      'Krok 10: Uczenie się: wprowadzenie kwartalnych audytów opłacalności bez bicia w tożsamość.'
    ]
  },
  {
    id: 'sc-2',
    title: 'Egzamin vs Natychmiastowa Gratyfikacja (Casus Kuby)',
    badge: 'Edukacja & Czas',
    summary: 'Student ma 2 godziny na powtórkę do decydującego egzaminu. Dostaje zaproszenie do wspólnej gry online od paczki znajomych.',
    defaultBias: 'Present Bias (przecenianie bieżącej ulgi) + Heurystyka Dostępności (łatwa zabawa tu i teraz) + Optymistyczne Przewidywanie („pogram tylko 20 minut”).',
    counterfactualIntervention: 'Interwencja w Kroku 4 i 8: Rozpoznanie konfliktu celów oraz modyfikacja środowiska fizycznego (wyłączenie komunikatora na 90 minut, obniżenie tarcia do nauki).',
    badProcessPath: [
      'Krok 2: Powiadomienie natychmiast porywa uwagę, odcinając koncentrację.',
      'Krok 4: Zwycięstwo celu natychmiastowego (ucieczka przed napięciem nauki).',
      'Krok 6: Złudne przekonanie: „Odpocznę 20 minut i usiądę ze zdwojoną energią”.',
      'Krok 8: Uruchomienie gry; czas rozciąga się do północy.',
      'Krok 10: Następnego dnia oblanie egzaminu i wniosek: „Jestem beznadziejny” (atak na tożsamość).'
    ],
    goodProcessPath: [
      'Krok 2: Pauza poznawcza: zauważenie impulsu bez natychmiastowego kliknięcia.',
      'Krok 4: Nazwanie napięcia: „Czuję opór przed trudnym materiałem, gra to tylko znieczulenie”.',
      'Krok 8: Architektura środowiska: odłożenie telefonu, start od mikro-kroku (jedna strona notatek).',
      'Krok 9: Przepracowanie 90 minut w skupieniu; zdany egzamin na 4.0.',
      'Krok 10: Utrwalenie przekonania o własnej skuteczności (Self-Efficacy).'
    ]
  },
  {
    id: 'sc-3',
    title: 'Konfrontacja w Relacji: Milczenie przez 6 Godzin',
    badge: 'Relacje & Komunikacja',
    summary: 'Bliska osoba nie odpowiada na ważną wiadomość przez 6 godzin. W umyśle rośnie napięcie i chęć wysłania oskarżycielskiego SMS-a.',
    defaultBias: 'Błąd atrybucji + Confirmation Bias („pewnie mnie lekceważy”) + Heurystyka Afektu (reakcja pod wpływem lęku przed odrzuceniem).',
    counterfactualIntervention: 'Interwencja w Kroku 1 i 3: Rygorystyczne oddzielenie obiektywnego faktu („brak SMS przez 6h”) od interpretacji („ona ma mnie gdzieś”) i wygenerowanie 3 hipotez alternatywnych.',
    badProcessPath: [
      'Krok 1-3: Pomieszanie faktu z domysłem: „Ignoruje mnie, bo jej nie zależy”.',
      'Krok 4: Silny afekt złości i urazy przejmuje sterowanie.',
      'Krok 7-8: Wysłanie agresywnej wiadomości: „Widzę, jak bardzo można na ciebie liczyć!”.',
      'Krok 9: Druga osoba (będąca u lekarza z chorym dzieckiem) czuje się niesprawiedliwie zaatakowana.',
      'Krok 10: Eskalacja kłótni i zniszczenie zaufania w relacji.'
    ],
    goodProcessPath: [
      'Krok 1-3: Świadome rozróżnienie: Fakt to brak odpowiedzi. Interpretacja to tylko hipoteza.',
      'Krok 5: Zastosowanie brzytwy Hanlona i hipotez alternatywnych: bateria, pilne spotkanie, zmęczenie.',
      'Krok 7-8: Odłożenie telefonu na 2 godziny i powrót do swoich obowiązków.',
      'Krok 9: Druga osoba odpisuje: „Przepraszam, miałam nagłą wizytę w szpitalu”.',
      'Krok 10: Ocalenie spokoju i wzmocnienie dojrzałości relacyjnej.'
    ]
  }
];

export const DecisionSystemLab: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('sc-1');
  const [appliedIntervention, setAppliedIntervention] = useState<boolean>(false);
  const [matrixFilter, setMatrixFilter] = useState<'all' | 'deserved' | 'bad_luck' | 'illusion' | 'predictable'>('all');

  const currentStep = PROCESS_STEPS[activeStepIndex];
  const currentScenario = SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0];

  return (
    <div className="rounded-3xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-xl overflow-hidden font-sans my-10">
      {/* Header */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-stone-900 via-stone-850 to-amber-950 text-white border-b border-amber-900/30">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-300/80 font-bold block">
                Tom III • Rozdział 11 • Laboratorium Integracyjne (Rozdziały 1–10)
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">
                Wielki Symulator Systemu Decyzyjnego
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30">
            Tom III • Rozdział 11 • Etap 1
          </span>
        </div>
        <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Decyzja nie jest pojedynczym punktem w czasie. Jest dynamiczną pętlą 10 etapów.
          Wykorzystaj to laboratorium, by prześledzić anatomię wyborów, symulować punkty interwencji
          oraz zrozumieć, dlaczego ocena jakości decyzji musi być bezwzględnie oddzielona od jej rezultatu.
        </p>
      </div>

      {/* Mode Navigation Tabs */}
      <div className="border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/60 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-amber-600" />
            10 Etapów Pętli Decyzyjnej w Czasie Rzeczywistym:
          </span>
          <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-bold">
            Krok {activeStepIndex + 1} z {PROCESS_STEPS.length}
          </span>
        </div>

        {/* Step Scroller */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-2.5 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                  isActive
                    ? 'bg-amber-800 text-white border-amber-900 shadow-md ring-2 ring-amber-500/40'
                    : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 border-stone-200 dark:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-amber-200' : 'text-amber-700 dark:text-amber-400'}`}>
                    0{step.stepNum}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />}
                </div>
                <div className="font-semibold line-clamp-1 text-[11px]">
                  {step.name.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Detailed Card */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-stone-800/60 border border-amber-200/80 dark:border-amber-900/30">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-md bg-amber-700 text-white font-mono text-xs font-bold">
                Krok {currentStep.stepNum}
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                {currentStep.name}
              </h4>
            </div>
            <span className="text-xs font-mono text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-3 py-1 rounded-full border border-amber-300 dark:border-amber-800 font-medium">
              {currentStep.sourceRef}
            </span>
          </div>

          <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
            {currentStep.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-amber-200/60 dark:border-stone-700">
            <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold block mb-1">
                Kluczowe Pytanie Diagnostyczne:
              </span>
              <p className="text-stone-900 dark:text-stone-100 font-serif italic text-sm">
                „{currentStep.keyQuestion}”
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-bold block mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Dźwignia Sprawczości (Punkt Interwencji):
              </span>
              <p className="text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm leading-relaxed">
                {currentStep.interventionPoint}
              </p>
            </div>
          </div>

          {/* Step Nav Buttons */}
          <div className="flex items-center justify-between mt-5 pt-3">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-100 dark:hover:bg-stone-700 transition"
            >
              Poprzedni Krok
            </button>
            <div className="text-xs font-mono text-stone-400">
              Etap {activeStepIndex + 1} z {PROCESS_STEPS.length}
            </div>
            <button
              onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
              disabled={activeStepIndex === PROCESS_STEPS.length - 1}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-800 text-white hover:bg-amber-900 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center gap-1.5"
            >
              <span>Następny Krok</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* --- SCENARIO COMPARATIVE SANDBOX --- */}
        <div className="pt-6 border-t border-stone-200 dark:border-stone-800">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block">
                Symulacja Wielościeżkowa
              </span>
              <h4 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
                Laboratorium Przypadków: Co Zmienia Punkt Interwencji?
              </h4>
            </div>

            {/* Scenario buttons */}
            <div className="flex flex-wrap gap-2">
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScenarioId(sc.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition ${
                    sc.id === selectedScenarioId
                      ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border-stone-900'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                  }`}
                >
                  {sc.badge}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 mb-6">
            <h5 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base mb-1">
              {currentScenario.title}
            </h5>
            <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm mb-3">
              {currentScenario.summary}
            </p>
            <div className="text-xs font-mono text-rose-800 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 p-2.5 rounded-xl border border-rose-200 dark:border-rose-900/40">
              <strong className="block mb-0.5">Działające Heurystyki i Pułapki:</strong>
              {currentScenario.defaultBias}
            </div>
          </div>

          {/* Toggle Intervention Switch */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-stone-900 dark:to-stone-850 border border-amber-200 dark:border-stone-700 flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold block mb-1 flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-amber-600" />
                Przełącznik Kontrfaktyczny:
              </span>
              <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                {currentScenario.counterfactualIntervention}
              </p>
            </div>
            <button
              onClick={() => setAppliedIntervention(!appliedIntervention)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 shadow-xs ${
                appliedIntervention
                  ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  : 'bg-amber-800 hover:bg-amber-900 text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>
                {appliedIntervention ? 'Wyłącz Interwencję (Pokaż Ścieżkę Domyślną)' : 'Włącz Punkt Interwencji (Ścieżka Świadoma)'}
              </span>
            </button>
          </div>

          {/* Trajectory comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Default Trajectory */}
            <div className={`p-5 rounded-2xl border transition-all ${
              !appliedIntervention
                ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 ring-2 ring-rose-500/20'
                : 'bg-stone-50 dark:bg-stone-850 border-stone-200 dark:border-stone-800 opacity-60'
            }`}>
              <div className="flex items-center space-x-2 text-xs font-mono text-rose-800 dark:text-rose-400 font-bold mb-3 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Ścieżka Domyślna (Brak Świadomej Interwencji)</span>
              </div>
              <ul className="space-y-2.5">
                {currentScenario.badProcessPath.map((stepText, sIdx) => (
                  <li key={sIdx} className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{stepText}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intervened Trajectory */}
            <div className={`p-5 rounded-2xl border transition-all ${
              appliedIntervention
                ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 ring-2 ring-emerald-500/20'
                : 'bg-stone-50 dark:bg-stone-850 border-stone-200 dark:border-stone-800 opacity-60'
            }`}>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-bold mb-3 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ścieżka Po Zastosowaniu Dźwigni Sprawczości</span>
              </div>
              <ul className="space-y-2.5">
                {currentScenario.goodProcessPath.map((stepText, sIdx) => (
                  <li key={sIdx} className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{stepText}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- PROCESS QUALITY VS OUTCOME QUALITY MATRIX --- */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold block">
              Złota Zasada Oceny Decyzji
            </span>
            <h4 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
              Macierz: Jakość Procesu vs Jakość Wyniku (4 Kwadranty)
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              Największym błędem jest ocenianie jakości decyzji wyłącznie na podstawie tego, jak potoczyły się losy.
              Kliknij kwadrant, aby zrozumieć psychologiczny mechanizm:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Quadrant 1 */}
            <div
              onClick={() => setMatrixFilter(matrixFilter === 'deserved' ? 'all' : 'deserved')}
              className={`p-4 rounded-2xl border cursor-pointer transition ${
                matrixFilter === 'deserved' || matrixFilter === 'all'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700'
                  : 'opacity-40 bg-stone-50 border-stone-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                  DOBRY PROCES + DOBRY WYNIK
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-200/80 text-emerald-900 font-bold">
                  Zasłużony Sukces
                </span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                Rzetelna analiza, uwzględnienie niepewności, dobre zarządzanie ryzykiem i sprzyjające okoliczności.
                Wniosek: wzmocnij nawyk procesowy, ale pamiętaj, że świat zawsze zawiera element losowości.
              </p>
            </div>

            {/* Quadrant 2 */}
            <div
              onClick={() => setMatrixFilter(matrixFilter === 'bad_luck' ? 'all' : 'bad_luck')}
              className={`p-4 rounded-2xl border cursor-pointer transition ${
                matrixFilter === 'bad_luck' || matrixFilter === 'all'
                  ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700'
                  : 'opacity-40 bg-stone-50 border-stone-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-blue-800 dark:text-blue-300 uppercase">
                  DOBRY PROCES + ZŁY WYNIK
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-200/80 text-blue-900 font-bold">
                  Zrozumiały Pech
                </span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                Wybór był racjonalny przy dostępnych informacjach, ale wystąpiło zdarzenie o małym prawdopodobieństwie.
                Wniosek: NIE zmieniaj dobrego procesu pod wpływem pojedynczego pecha! Nie niszcz własnej tożsamości.
              </p>
            </div>

            {/* Quadrant 3 */}
            <div
              onClick={() => setMatrixFilter(matrixFilter === 'illusion' ? 'all' : 'illusion')}
              className={`p-4 rounded-2xl border cursor-pointer transition ${
                matrixFilter === 'illusion' || matrixFilter === 'all'
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700'
                  : 'opacity-40 bg-stone-50 border-stone-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-300 uppercase">
                  ZŁY PROCES + DOBRY WYNIK
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-200/80 text-amber-900 font-bold">
                  Pułapka Iluzji
                </span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                Nierozsądna, impulsywna decyzja przypadkiem przyniosła zysk (np. ryzykowny zakład).
                Śmiertelne niebezpieczeństwo: człowiek przypisuje sukces własnemu geniuszowi (overconfidence), powtarza zły proces i bankrutuje.
              </p>
            </div>

            {/* Quadrant 4 */}
            <div
              onClick={() => setMatrixFilter(matrixFilter === 'predictable' ? 'all' : 'predictable')}
              className={`p-4 rounded-2xl border cursor-pointer transition ${
                matrixFilter === 'predictable' || matrixFilter === 'all'
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-700'
                  : 'opacity-40 bg-stone-50 border-stone-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-rose-800 dark:text-rose-300 uppercase">
                  ZŁY PROCES + ZŁY WYNIK
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-200/80 text-rose-900 font-bold">
                  Przewidywalna Porażka
                </span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                Zignorowanie danych, uleganie heurystykom, present bias i brak planu przyniosły niekorzystny skutek.
                Wniosek: cenna informacja zwrotna! Zidentyfikuj, w którym kroku pętli zawiodła uwaga lub interpretacja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
