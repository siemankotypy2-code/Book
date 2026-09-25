import React, { useState } from 'react';
import { Play, RotateCcw, Brain, ShieldAlert, Award, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface SimScenario {
  id: string;
  title: string;
  context: string;
  opponent: string;
  initialDialogue: string;
  choices: {
    id: string;
    text: string;
    type: 'capitulate' | 'aggressive' | 'assertive' | 'avoidant';
    label: string;
    outcomeDialogue: string;
    neuroImpact: {
      dlPFC: number; // -100 to +100
      amygdala: number; // 0 to 100
      cortisol: number; // 0 to 100
      dopamine: number; // 0 to 100
    };
    psychologicalVerdict: string;
    recommendation: string;
  }[];
}

const scenarios: SimScenario[] = [
  {
    id: 'sim-szef',
    title: 'Symulacja 1: Rozmowa z Dominującym Przełożonym',
    context: 'Wchodzisz do gabinetu dyrektora, by renegocjować warunki kontraktu. Dyrektor milczy przez minutę, po czym mówi z lodowatym uśmiechem.',
    opponent: 'Dyrektor Wiktor',
    initialDialogue: '„Tomaszu, myślałem, że cenisz stabilność naszej firmy. W tych trudnych czasach wysuwanie żądań finansowych wygląda na brak lojalności wobec zespołu”.',
    choices: [
      {
        id: 'c1',
        text: 'Przeproś i wycofaj się: „Oczywiście panie dyrektorze, ja bardzo doceniam stabilność. Może faktycznie to zły moment, wrócimy do tego za rok”.',
        type: 'capitulate',
        label: 'A. Uległość i przepraszanie (Freeze / Fawn)',
        outcomeDialogue: 'Dyrektor: „Cieszę się, że doszliśmy do porozumienia. Wiedziałem, że można na ciebie liczyć”. (Zostajesz z tym samym wynagrodzeniem na kolejny rok).',
        neuroImpact: { dlPFC: -60, amygdala: 85, cortisol: 90, dopamine: 10 },
        psychologicalVerdict: 'Kapitulacja kory przedczołowej pod wpływem strachu przed odrzuceniem. Wpadłeś w schemat uległości.',
        recommendation: 'Nie bierz na siebie odpowiedzialności za budżet całej firmy. Masz prawo wyceniać swoją pracę w oparciu o dostarczone rezultaty.'
      },
      {
        id: 'c2',
        text: 'Atak i emocjonalny wybuch: „To jest bezczelność! Pracuję po nocach, firma ma rekordowe zyski, a pan mówi o braku lojalności? Albo podwyżka, albo dziś rzucam papierami!”.',
        type: 'aggressive',
        label: 'B. Agresywna eskalacja (Fight)',
        outcomeDialogue: 'Dyrektor chłodno: „Jeśli tak stawiasz sprawę i nie panujesz nad emocjami, to obawiam się, że nasza współpraca dobiegła końca. Dział HR przygotuje dokumenty”.',
        neuroImpact: { dlPFC: -40, amygdala: 95, cortisol: 95, dopamine: 40 },
        psychologicalVerdict: 'Porwanie migdałowate (Amygdala Hijack) w wersji agresywnej. Zniszczyłeś pozycję negocjacyjną emocjonalnym szantażem.',
        recommendation: 'Agresja to w rzeczywistości objaw bezsilności. Prawdziwa siła nie krzyczy — prawdziwa siła operuje na faktach.'
      },
      {
        id: 'c3',
        text: 'Spokojna neuro-pauza i rozbicie ramy: (Bierzesz głęboki oddech fizjologiczny) „Panie dyrektorze, doskonale rozumiem wagę stabilności firmy. Właśnie dlatego, że zoptymalizowałem kluczowy proces przynoszący 40% oszczędności, przynoszę dziś tę analizę. Porozmawiajmy o tych konkretnych liczbach”.',
        type: 'assertive',
        label: 'C. Asertywne ugruntowanie (dlPFC Mastery)',
        outcomeDialogue: 'Dyrektor opuszcza wzrok na podsunięty dokument, po czym mówi łagodniejszym tonem: „Dobrze, pokaż mi te wyliczenia. Zobaczmy, co możemy z tym zrobić w tym kwartale”.',
        neuroImpact: { dlPFC: 85, amygdala: 25, cortisol: 30, dopamine: 75 },
        psychologicalVerdict: 'Mistrzowskie zachowanie kontroli kory przedczołowej! Rozbiłeś manipulacyjną ramę „lojalności” i przekierowałeś rozmowę na twarde dane.',
        recommendation: 'Perfekcyjne zastosowanie protokołu: uznanie punktu widzenia drugiej strony bez kapitulacji i twarde trzymanie faktów.'
      }
    ]
  },
  {
    id: 'sim-gaslighting',
    title: 'Symulacja 2: Subtelny Gaslighting Wspólnika',
    context: 'Wspólnik w projekcie po raz kolejny zaprzecza wcześniejszym ustaleniom, sugerując, że masz problem z pamięcią i histeryzujesz.',
    opponent: 'Wspólnik Paweł',
    initialDialogue: '„Przecież w czwartek ustaliliśmy zupełnie co innego! Znowu zapomniałaś? Naprawdę martwię się o twoją psychikę, ostatnio ciągle coś przekręcasz”.',
    choices: [
      {
        id: 'g1',
        text: 'Zacznij wątpić i przepraszać: „Naprawdę? Boże, byłam pewna, że to zapisywałam... Może faktycznie jestem przemęczona... Przepraszam, chyba muszę odpocząć”.',
        type: 'capitulate',
        label: 'A. Samozwątpienie i uległość (Dysonans Poznawczy)',
        outcomeDialogue: 'Paweł: „No widzisz, dobrze że masz mnie, bo znowu narobiłabyś kłopotów. Odpocznij, ja się wszystkim zajmę”. (Przejmuje kontrolę nad decyzją).',
        neuroImpact: { dlPFC: -70, amygdala: 80, cortisol: 85, dopamine: 15 },
        psychologicalVerdict: 'Złapałeś się na wędkę gaslightingu. Zaakceptowanie zniekształcenia rzeczywistości podkopuje Twój własny aparat poznawczy.',
        recommendation: 'Nigdy nie pozwalaj nikomu wmawiać sobie problemów z pamięcią bez weryfikacji notatek i twardych dowodów.'
      },
      {
        id: 'g2',
        text: 'Zdarta płyta i oparcie na notatkach: „Moja pamięć funkcjonuje bez zarzutu. O godzinie 14:15 wysłałam do ciebie maila z podsumowaniem tamtej rozmowy. Przeczytajmy go teraz wspólnie”.',
        type: 'assertive',
        label: 'B. Metoda zdartej płyty i dowód pisemny (Grey Rock)',
        outcomeDialogue: 'Paweł po chwili wahania: „Aha, faktycznie, może mi to umknęło... Nieważne, zróbmy tak jak w notatce”. (Manipulacja rozbita o twardy fakt).',
        neuroImpact: { dlPFC: 90, amygdala: 20, cortisol: 25, dopamine: 80 },
        psychologicalVerdict: 'Podręcznikowe rozbrojenie gaslightingu. Usunąłeś dyskusję o emocjach i "psychice", sprowadzając wszystko do niepodważalnego faktu.',
        recommendation: 'Manipulator boi się faktów jak ognia. Dokumentowanie ustaleń to najskuteczniejsza tarcza anty-manipulacyjna.'
      }
    ]
  }
];

export const InteractiveDecisionSim: React.FC = () => {
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState<number>(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  const scenario = scenarios[currentScenarioIdx];
  const selectedChoice = scenario.choices.find((c) => c.id === selectedChoiceId);

  const handleReset = () => {
    setSelectedChoiceId(null);
  };

  const handleNextScenario = () => {
    setSelectedChoiceId(null);
    setCurrentScenarioIdx((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <div className="my-10 rounded-2xl border border-stone-300 bg-stone-900 text-stone-100 shadow-xl overflow-hidden font-sans">
      {/* Sim Header */}
      <div className="p-6 sm:p-8 border-b border-stone-800 bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950/60">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5" />
              Interaktywny Symulator Decyzyjny
            </span>
            <span className="text-xs text-stone-400 font-mono">
              Scenariusz {currentScenarioIdx + 1} z {scenarios.length}
            </span>
          </div>

          <button
            onClick={handleNextScenario}
            className="text-xs font-mono text-stone-400 hover:text-amber-300 underline underline-offset-4 transition"
          >
            Przełącz na inny scenariusz →
          </button>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-amber-100 mt-2">
          {scenario.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          {scenario.context}
        </p>
      </div>

      {/* Arena */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Opponent's Attack */}
        <div className="p-5 rounded-xl bg-stone-800/90 border border-stone-700/80 shadow-md">
          <div className="flex items-center justify-between text-xs text-amber-400 font-mono uppercase tracking-wider mb-2">
            <span className="font-bold flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              Atakująca Strona: {scenario.opponent}
            </span>
          </div>
          <p className="font-serif text-base sm:text-lg text-stone-100 italic leading-relaxed">
            {scenario.initialDialogue}
          </p>
        </div>

        {/* Choices */}
        {!selectedChoice && (
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
              Wybierz swoją odpowiedź behawioralną:
            </div>
            {scenario.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => setSelectedChoiceId(choice.id)}
                className="w-full text-left p-4 rounded-xl bg-stone-800/50 hover:bg-stone-800 border border-stone-700/60 hover:border-amber-500/50 transition-all text-xs sm:text-sm text-stone-200 hover:text-white group flex flex-col space-y-1"
              >
                <span className="font-mono font-bold text-amber-400 text-xs">
                  {choice.label}
                </span>
                <span className="font-serif text-stone-200 group-hover:text-amber-100">
                  {choice.text}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Outcome View */}
        {selectedChoice && (
          <div className="space-y-6 animate-fadeIn">
            {/* Opponent Reaction */}
            <div className="p-5 rounded-xl bg-amber-950/40 border border-amber-800/60">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1 font-bold">
                Rezultat i Odpowiedź Rozmówcy:
              </div>
              <p className="font-serif text-base sm:text-lg text-stone-100 italic">
                {selectedChoice.outcomeDialogue}
              </p>
            </div>

            {/* Neuro Impact Meters */}
            <div className="p-5 rounded-xl bg-stone-800/70 border border-stone-700">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-stone-300 font-bold mb-4">
                <Brain className="w-4 h-4 text-indigo-400" />
                <span>Stan Twojej Neurobiologii po tym Wyborze</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* dlPFC */}
                <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">Kora PFC (Logika)</div>
                  <div className={`text-lg font-bold font-mono mt-1 ${selectedChoice.neuroImpact.dlPFC > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {selectedChoice.neuroImpact.dlPFC > 0 ? `+${selectedChoice.neuroImpact.dlPFC}%` : `${selectedChoice.neuroImpact.dlPFC}%`}
                  </div>
                  <div className="w-full bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full ${selectedChoice.neuroImpact.dlPFC > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                      style={{ width: `${Math.abs(selectedChoice.neuroImpact.dlPFC)}%` }}
                    />
                  </div>
                </div>

                {/* Amygdala */}
                <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">Ciało Migdałowate</div>
                  <div className={`text-lg font-bold font-mono mt-1 ${selectedChoice.neuroImpact.amygdala > 50 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {selectedChoice.neuroImpact.amygdala}%
                  </div>
                  <div className="w-full bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full ${selectedChoice.neuroImpact.amygdala > 50 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                      style={{ width: `${selectedChoice.neuroImpact.amygdala}%` }}
                    />
                  </div>
                </div>

                {/* Cortisol */}
                <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">Kortyzol (Stres)</div>
                  <div className={`text-lg font-bold font-mono mt-1 ${selectedChoice.neuroImpact.cortisol > 50 ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {selectedChoice.neuroImpact.cortisol}%
                  </div>
                  <div className="w-full bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full ${selectedChoice.neuroImpact.cortisol > 50 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                      style={{ width: `${selectedChoice.neuroImpact.cortisol}%` }}
                    />
                  </div>
                </div>

                {/* Dopamine */}
                <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">Dopamina (Sprawczość)</div>
                  <div className={`text-lg font-bold font-mono mt-1 ${selectedChoice.neuroImpact.dopamine > 50 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {selectedChoice.neuroImpact.dopamine}%
                  </div>
                  <div className="w-full bg-stone-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-amber-500"
                      style={{ width: `${selectedChoice.neuroImpact.dopamine}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Verdict & Recommendation */}
            <div className="p-5 rounded-xl bg-stone-800 border border-stone-700 space-y-3">
              <div className="text-xs font-mono uppercase text-amber-400 font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Werdykt Psychologiczny:</span>
              </div>
              <p className="text-sm font-sans text-stone-200 leading-relaxed">
                {selectedChoice.psychologicalVerdict}
              </p>

              <div className="p-3.5 rounded-lg bg-stone-900 border border-stone-700/80 text-xs text-stone-300 leading-relaxed">
                <strong className="text-amber-300 block mb-1">Praktyczna Wskazówka:</strong>
                {selectedChoice.recommendation}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-mono transition flex items-center space-x-1.5 text-stone-200"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Wypróbuj inną opcję odpowiedzi</span>
              </button>

              <button
                onClick={handleNextScenario}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-xs font-mono font-semibold transition text-white flex items-center space-x-1.5"
              >
                <span>Następny Scenariusz Życiowy →</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
