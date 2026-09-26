import React, { useState } from 'react';
import { HeartPulse, ArrowRight, Brain, AlertCircle, RefreshCw, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  stimulus: string;
  fact: string;
  interpretations: {
    id: string;
    label: string;
    type: 'threat' | 'neutral' | 'opportunity';
    emotion: string;
    arousalLevel: string;
    impulse: string;
    typicalAction: string;
    alternativeAction: string;
    neuroMechanism: string;
  }[];
}

const scenarios: Scenario[] = [
  {
    id: 'boss-msg',
    title: 'Wiadomość od Szefa: „Wejdź do mnie na moment”',
    stimulus: 'Powiadomienie na komunikatorze służbowym o 14:15 z treścią: „Cześć, wejdź do mojego gabinetu o 15:00”.',
    fact: 'Przełożony wyznaczył krótkie spotkanie w gabinecie bez podania tematu rozmowy.',
    interpretations: [
      {
        id: 'interp-threat',
        label: 'Interpretacja Katastroficzna („Coś schrzaniłem, pewnie mnie zwolnią”)',
        type: 'threat',
        emotion: 'Ostry lęk, niepokój, wstyd',
        arousalLevel: 'Wysokie (wyrzut kortyzolu i adrenaliny, ścisk w żołądku, spłycony oddech)',
        impulse: 'Ucieczka, paraliż, szukanie w pamięci błędów z ostatnich tygodni',
        typicalAction: 'Gorączkowe sprawdzanie poczty, unikanie wzroku współpracowników, przyjęcie pozycji obronnej na wejściu',
        alternativeAction: 'Świadomy oddech (4-7-8), oddzielenie faktów od domysłów, zrobienie notatki: „Temat spotkania jest nieznany”',
        neuroMechanism: 'Ciało migdałowate uruchamia drogę niską (low-road) i oś HPA, wyprzedzając analizę grzbietowo-bocznej kory przedczołowej (dlPFC).'
      },
      {
        id: 'interp-neutral',
        label: 'Interpretacja Neutralna („Zwykła sprawa robocza lub aktualizacja projektu”)',
        type: 'neutral',
        emotion: 'Ciekawość, lekka czujność',
        arousalLevel: 'Umiarkowane (zbalansowane pobudzenie sprzyjające skupieniu)',
        impulse: 'Uporządkowanie dokumentów i przygotowanie się do rozmowy',
        typicalAction: 'Spokojne przejście do gabinetu o 15:00 z otwartą postawą i notatnikiem',
        alternativeAction: 'Zapytanie w wiadomości zwrotnej: „Jasne! Czy mam przygotować raport projektu X?”',
        neuroMechanism: 'Przyśrodkowa kora przedczołowa (mPFC) skutecznie tonuje aktywność limbiczną, pozwalając na chłodny bilans sytuacji.'
      },
      {
        id: 'interp-opportunity',
        label: 'Interpretacja Szansy („Może chodzi o podwyżkę lub nowy projekt!”)',
        type: 'opportunity',
        emotion: 'Radość, podekscytowanie, duma',
        arousalLevel: 'Wysokie pozytywne (skok dopaminy, rozszerzone źrenice, gotowość do działania)',
        impulse: 'Natychmiastowe chwalenie się koledze z biurka obok',
        typicalAction: 'Wchodzenie do gabinetu ze zbyt dużą pewnością siebie i gotowością na nagrodę',
        alternativeAction: 'Zachowanie spokojnego entuzjazmu bez wyciągania pochopnych wniosków przed usłyszeniem faktów',
        neuroMechanism: 'Jądro półleżące (ventral striatum) aktywuje obwód nagrody w oparciu o oczekiwanie gratyfikacji.'
      }
    ]
  },
  {
    id: 'partner-unanswered',
    title: 'Brak odpowiedzi na ważną wiadomość przez 4 godziny',
    stimulus: 'Wiadomość SMS do partnera wysłana o 10:00 dotyczyła ważnej decyzji domowej. O 14:00 widnieje status „Odczytano”, brak odpowiedzi.',
    fact: 'Partner odczytał wiadomość, ale nie wysłał tekstu zwrotnego.',
    interpretations: [
      {
        id: 'interp-threat-2',
        label: 'Interpretacja Odrzucenia („Lekceważy mnie, ma mnie dość!”)',
        type: 'threat',
        emotion: 'Złość, poczucie krzywdy, żal',
        arousalLevel: 'Wysokie (napięcie mięśni karku, podwyższone ciśnienie krwi)',
        impulse: 'Wysłanie sarkastycznej wiadomości ponaglającej lub karanie milczeniem',
        typicalAction: 'Pisanie impulsywnego SMS-a: „Dzięki za odpowiedź, jak zwykle można na ciebie liczyć!”',
        alternativeAction: 'Nazwanie emocji (etykietowanie afektu) i odczekanie do wieczornej rozmowy na żywo bez eskalacji',
        neuroMechanism: 'Grzbietowa część przedniej kory zakrętu obręczy (dACC) aktywuje ten sam obwód, co przy fizycznym bólu (ból społecznego odrzucenia).'
      },
      {
        id: 'interp-neutral-2',
        label: 'Interpretacja Zadaniowa („Pewnie wszedł na spotkanie lub coś go odciągnęło”)',
        type: 'neutral',
        emotion: 'Neutralny spokój, wyrozumiałość',
        arousalLevel: 'Niskie / stabilne',
        impulse: 'Powrót do własnych zadań',
        typicalAction: 'Czekanie na wolny moment partnera bez sprawdzania telefonu co minutę',
        alternativeAction: 'Napisanie krótkiego zapytania o 17:00 bez pretensji w głosie',
        neuroMechanism: 'Kora przedczołowa korzysta z teorii umysłu (ToM / Mentalizing network), modelując obiektywne ograniczenia czasowe drugiej osoby.'
      }
    ]
  }
];

export const EmotionalReactionWidget: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(scenarios[0].id);
  const [selectedInterpId, setSelectedInterpId] = useState<string | null>(null);

  const activeScenario = scenarios.find((s) => s.id === selectedScenarioId) || scenarios[0];
  const activeInterp = activeScenario.interpretations.find((i) => i.id === selectedInterpId);

  return (
    <div className="my-8 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg overflow-hidden font-sans">
      {/* Widget Header */}
      <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-rose-300 mb-1">
          <HeartPulse className="w-4 h-4 text-rose-400" />
          <span>Interaktywny Symulator Reakcji Emocjonalnej • Model Lazarusa</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-rose-50">
          Anatomia Porwania Emocjonalnego: Od Bodźca do Działania
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Ten sam bodziec sensoryczny może wywołać skrajnie różne reakcje fizjologiczne w zależności od nadanego mu znaczenia. Zobacz, jak interpretacja kształtuje emocję i impuls.
        </p>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Scenario Selector */}
        <div>
          <label className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold block mb-2">
            1. Wybierz Scenariusz Życiowy:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {scenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => {
                  setSelectedScenarioId(scen.id);
                  setSelectedInterpId(null);
                }}
                className={`p-3.5 rounded-xl text-left border transition font-sans ${
                  selectedScenarioId === scen.id
                    ? 'bg-rose-900 text-white border-rose-950 shadow-md font-bold'
                    : 'bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-700'
                }`}
              >
                <div className="text-xs font-mono opacity-80 uppercase mb-0.5">Scenariusz</div>
                <div className="text-sm">{scen.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Stimulus & Fact Breakdown */}
        <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="space-y-1">
            <span className="font-mono text-stone-500 text-[11px] uppercase font-bold block">
              Surowy Bodziec Zmysłowy (Stimulus):
            </span>
            <p className="text-stone-800 dark:text-stone-200 font-serif leading-relaxed italic">
              „{activeScenario.stimulus}”
            </p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-stone-300 dark:border-stone-700 pt-3 md:pt-0 md:pl-4">
            <span className="font-mono text-emerald-700 dark:text-emerald-400 text-[11px] uppercase font-bold block">
              Obiektywny Fakt (Niewartościujący):
            </span>
            <p className="text-stone-800 dark:text-stone-200 font-serif leading-relaxed">
              {activeScenario.fact}
            </p>
          </div>
        </div>

        {/* Interpretations Selector */}
        <div>
          <label className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold block mb-2">
            2. Wybierz Filtr Interpretacyjny (Jak Twój Mózg Ocenia Sytuację):
          </label>
          <div className="space-y-2">
            {activeScenario.interpretations.map((interp) => {
              const isSelected = selectedInterpId === interp.id;
              return (
                <button
                  key={interp.id}
                  onClick={() => setSelectedInterpId(interp.id)}
                  className={`w-full p-4 rounded-xl text-left border transition flex items-center justify-between ${
                    isSelected
                      ? interp.type === 'threat'
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 font-semibold ring-2 ring-rose-400'
                        : interp.type === 'opportunity'
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold ring-2 ring-emerald-400'
                        : 'bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-900 dark:text-blue-200 font-semibold ring-2 ring-blue-400'
                      : 'bg-white dark:bg-stone-800 hover:bg-stone-50 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-700'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-sans">{interp.label}</span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ml-2 ${isSelected ? 'text-rose-600 dark:text-rose-400' : 'text-stone-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Analysis Result Card */}
        {activeInterp ? (
          <div className="p-5 rounded-xl bg-stone-950 text-stone-100 space-y-4 border border-rose-900/40 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono uppercase text-rose-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Kaskada Reakcji Psychofizjologicznej
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-stone-300">
                {activeInterp.type === 'threat' ? 'Ścieżka Zwiększonej Czujności' : activeInterp.type === 'opportunity' ? 'Ścieżka Oczekiwania Nagrody' : 'Ścieżka Równowagi'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="text-stone-400 font-mono text-[10px] uppercase block">Wzbudzona Emocja:</span>
                <strong className="text-rose-300 text-sm">{activeInterp.emotion}</strong>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="text-stone-400 font-mono text-[10px] uppercase block">Pobudzenie Ciała (Arousal):</span>
                <p className="text-stone-200">{activeInterp.arousalLevel}</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="text-stone-400 font-mono text-[10px] uppercase block">Automatyczny Impuls (Przymus):</span>
                <p className="text-stone-200">{activeInterp.impulse}</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="text-stone-400 font-mono text-[10px] uppercase block">Reakcja Domyślna (Nawykowa):</span>
                <p className="text-stone-200">{activeInterp.typicalAction}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-xs space-y-1">
              <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Alternatywna Reakcja (Swoboda Decyzyjna po Pauzie Poznawczej):
              </span>
              <p className="text-emerald-100 font-medium leading-relaxed">
                {activeInterp.alternativeAction}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-900/40 text-xs space-y-1">
              <span className="text-blue-300 font-mono text-[10px] uppercase font-bold flex items-center gap-1">
                <Brain className="w-3.5 h-3.5" />
                Mechanizm Neurobiologiczny:
              </span>
              <p className="text-blue-200 font-serif leading-relaxed italic">
                {activeInterp.neuroMechanism}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-xl border border-dashed border-stone-300 dark:border-stone-700 text-center text-xs text-stone-500 font-mono">
            Wybierz jedną z powyższych interpretacji, aby zobaczyć pełną analizę neurobiologiczną i behawioralną.
          </div>
        )}
      </div>
    </div>
  );
};
