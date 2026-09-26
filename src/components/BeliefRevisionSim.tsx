import React, { useState } from 'react';
import { Target, ShieldAlert, Award, Brain, CheckCircle2, RotateCcw, AlertTriangle, ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';

interface EvidenceItem {
  id: string;
  type: 'disconfirming_strong' | 'confirming_mild' | 'disconfirming_mild' | 'peer_reviewed' | 'anecdote';
  title: string;
  description: string;
  bayesianImpact: number; // e.g. -20, +5, -15
  sourceCredibility: 'Wysoka (Metaanaliza)' | 'Średnia (Badanie kohortowe)' | 'Niska (Dowód anegdotyczny)';
}

interface Scenario {
  id: string;
  topic: string;
  initialBelief: string;
  priorConfidence: number; // initial %
  evidenceList: EvidenceItem[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 'talent-vs-effort',
    topic: 'Talent kontra Świadoma Praktyka',
    initialBelief: '„Wybitne osiągnięcia w pracy lub sztuce to w 80% wrodzony, genetyczny talent; bez niego ciężka praca daje tylko przeciętność”.',
    priorConfidence: 85,
    evidenceList: [
      {
        id: 'e1',
        type: 'peer_reviewed',
        title: 'Metaanaliza Ericssona (10 000 godzin celowej praktyki)',
        description: 'Badania skrzypków i sportowców pokazują, że różnica między poziomem wybitnym a dobrym wynika niemal w całości z liczby godzin samotnego, celowego treningu z natychmiastowym feedbackiem, a nie wrodzonych predyspozycji.',
        bayesianImpact: -25,
        sourceCredibility: 'Wysoka (Metaanaliza)'
      },
      {
        id: 'e2',
        type: 'anecdote',
        title: 'Historia znajomego: „Grał od dziecka bez wysiłku”',
        description: 'Twój kolega z pracy opowiada, że jego kuzyn nigdy nie uczył się programowania, a po miesiącu pisał zaawansowane algorytmy.',
        bayesianImpact: +5,
        sourceCredibility: 'Niska (Dowód anegdotyczny)'
      },
      {
        id: 'e3',
        type: 'disconfirming_strong',
        title: 'Badania plastyczności neuronalnej dorosłych (Draganski et al.)',
        description: 'Mózgi londyńskich taksówkarzy uczących się mapy miasta wykazały fizyczny wzrost objętości istoty szarej w tylnym hipokampie po 4 latach intensywnego uczenia, bez względu na wyjściowy „talent”.',
        bayesianImpact: -20,
        sourceCredibility: 'Wysoka (Metaanaliza)'
      },
      {
        id: 'e4',
        type: 'disconfirming_mild',
        title: 'Eksperyment Carol Dweck nad Mindsetem',
        description: 'Dzieci chwalone za inteligencję i „talent” w obliczu trudnych zadań szybko rezygnowały z lęku przed porażką, podczas gdy dzieci chwalone za strategię i wysiłek podejmowały trudniejsze wyzwania i osiągały wyższe wyniki.',
        bayesianImpact: -15,
        sourceCredibility: 'Średnia (Badanie kohortowe)'
      }
    ]
  },
  {
    id: 'multitasking',
    topic: 'Wielozadaniowość i Efektywność',
    initialBelief: '„Potrafię skutecznie pisać raport, odpowiadać na Slacku i słuchać zebrania jednocześnie bez żadnej straty jakości”.',
    priorConfidence: 75,
    evidenceList: [
      {
        id: 'm1',
        type: 'peer_reviewed',
        title: 'Badania Uniwersytetu Stanforda (Ophir, Nass, Wagner)',
        description: 'Osoby deklarujące się jako "heavy multitaskers" radziły sobie znacznie gorzej z odfiltrowywaniem nieistotnych bodźców, przełączaniem zadań oraz organizacją pamięci roboczej niż osoby pracujące sekwencyjnie.',
        bayesianImpact: -30,
        sourceCredibility: 'Wysoka (Metaanaliza)'
      },
      {
        id: 'm2',
        type: 'disconfirming_strong',
        title: 'Neurobiologiczny koszt przełączania (Switching Cost)',
        description: 'Funkcjonalny rezonans magnetyczny pokazuje, że kora przedczołowa musi za każdym razem przeładować zawartość pamięci roboczej, co obniża tempo przetwarzania o 30-40% i zwiększa liczbę błędów trzykrotnie.',
        bayesianImpact: -25,
        sourceCredibility: 'Wysoka (Metaanaliza)'
      },
      {
        id: 'm3',
        type: 'anecdote',
        title: 'Subiektywne poczucie „jestem w rytmie”',
        description: 'W trakcie ciągłego przełączania czujesz wyrzut dopaminy na każde nowe powiadomienie, co tworzy subiektywną iluzję wysokiej dynamiki i produktywności.',
        bayesianImpact: +5,
        sourceCredibility: 'Niska (Dowód anegdotyczny)'
      }
    ]
  }
];

export const BeliefRevisionSim: React.FC = () => {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState<number>(0);
  const scenario = SCENARIOS[selectedScenarioIdx];

  const [currentConfidence, setCurrentConfidence] = useState<number>(scenario.priorConfidence);
  const [revealedEvidence, setRevealedEvidence] = useState<string[]>([]);
  const [userReactions, setUserReactions] = useState<Record<string, 'accept' | 'defend' | 'discount'>>({});

  const handleSelectScenario = (idx: number) => {
    setSelectedScenarioIdx(idx);
    setCurrentConfidence(SCENARIOS[idx].priorConfidence);
    setRevealedEvidence([]);
    setUserReactions({});
  };

  const handleRevealEvidence = (id: string) => {
    if (!revealedEvidence.includes(id)) {
      setRevealedEvidence([...revealedEvidence, id]);
    }
  };

  const handleReaction = (evidence: EvidenceItem, reaction: 'accept' | 'defend' | 'discount') => {
    setUserReactions((prev) => ({ ...prev, [evidence.id]: reaction }));

    // Update confidence based on reaction
    if (reaction === 'accept') {
      setCurrentConfidence((prev) => Math.max(5, Math.min(99, prev + evidence.bayesianImpact)));
    } else if (reaction === 'discount') {
      // Discarding or finding flaw in evidence reduces impact drastically
      const dampedImpact = Math.round(evidence.bayesianImpact * 0.2);
      setCurrentConfidence((prev) => Math.max(5, Math.min(99, prev + dampedImpact)));
    } else if (reaction === 'defend') {
      // Backfire tendency: clinging even harder
      const backfireDelta = evidence.bayesianImpact < 0 ? 5 : 0;
      setCurrentConfidence((prev) => Math.max(5, Math.min(99, prev + backfireDelta)));
    }
  };

  const handleReset = () => {
    setCurrentConfidence(scenario.priorConfidence);
    setRevealedEvidence([]);
    setUserReactions({});
  };

  // Bayesian target confidence if all revealed evidence was rationally integrated
  const idealConfidence = Math.max(
    5,
    Math.min(
      99,
      scenario.priorConfidence +
        revealedEvidence.reduce((acc, id) => {
          const item = scenario.evidenceList.find((e) => e.id === id);
          return acc + (item ? item.bayesianImpact : 0);
        }, 0)
    )
  );

  const cognitiveResistanceGap = currentConfidence - idealConfidence;

  return (
    <div className="my-10 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-blue-950 to-stone-900 text-white p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-300 mb-1">
          <Brain className="w-4 h-4 text-blue-400" />
          <span>Laboratorium Tomu III • Rozdział 2</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-blue-50">
          Symulator Aktualizowania Przekonań i Epistemicznej Pokory
        </h3>
        <p className="text-sm text-stone-300 mt-1 max-w-2xl">
          Czy myślisz jak żołnierz broniący twierdzy (Soldier Mindset), czy jak zwiadowca mapujący teren (Scout Mindset)? Zobacz, jak Twój umysł reaguje na dowody sprzeczne z wyjściowym dogmatem.
        </p>
      </div>

      <div className="p-6">
        {/* Scenario Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {SCENARIOS.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => handleSelectScenario(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                idx === selectedScenarioIdx
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300'
              }`}
            >
              Scenariusz {idx + 1}: {sc.topic}
            </button>
          ))}
        </div>

        {/* Belief Banner */}
        <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 mb-6">
          <div className="text-[11px] font-mono uppercase font-bold text-blue-800 dark:text-blue-300">
            Wyjściowe Przekonanie Badane w Eksperymencie:
          </div>
          <div className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 mt-1 italic">
            {scenario.initialBelief}
          </div>
          <div className="flex items-center justify-between text-xs font-mono text-stone-500 dark:text-stone-400 mt-2">
            <span>Wyjściowa pewność siebie (Prior): <strong>{scenario.priorConfidence}%</strong></span>
            <span>Aktualna subiektywna pewność: <strong className="text-blue-700 dark:text-blue-400 text-sm">{currentConfidence}%</strong></span>
          </div>
        </div>

        {/* Gauges Comparison: User vs Bayesian Ideal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="font-bold text-stone-700 dark:text-stone-300">Twoja Subiektywna Pewność:</span>
              <span className="text-sm font-bold text-blue-700 dark:text-blue-400">{currentConfidence}%</span>
            </div>
            <div className="w-full bg-stone-200 dark:bg-stone-700 h-3 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-500"
                style={{ width: `${currentConfidence}%` }}
              />
            </div>
            <span className="text-[10px] text-stone-500 font-mono mt-1 block">
              Odzwierciedla to, jak mocno trzymasz się tego poglądu po napotkaniu faktów.
            </span>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="font-bold text-stone-700 dark:text-stone-300">Wzorcowa Kalibracja Bayesowska:</span>
              <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">{idealConfidence}%</span>
            </div>
            <div className="w-full bg-stone-200 dark:bg-stone-700 h-3 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full transition-all duration-500"
                style={{ width: `${idealConfidence}%` }}
              />
            </div>
            <span className="text-[10px] text-stone-500 font-mono mt-1 block">
              Gdzie powinieneś być, gdybyś bezstronnie uwzględnił wagę dowodów (Scout Mindset).
            </span>
          </div>
        </div>

        {/* Evidence Cards Stream */}
        <div className="space-y-4 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
            Strumień Dowodów Empirycznych (Kliknij, aby odkryć i ustosunkować się):
          </div>

          {scenario.evidenceList.map((ev, idx) => {
            const isRevealed = revealedEvidence.includes(ev.id);
            const userReaction = userReactions[ev.id];

            return (
              <div
                key={ev.id}
                className={`p-4 rounded-xl border transition-all ${
                  isRevealed
                    ? 'bg-white dark:bg-stone-800/90 border-stone-300 dark:border-stone-700 shadow-xs'
                    : 'bg-stone-50 dark:bg-stone-800/30 border-dashed border-stone-300 dark:border-stone-700'
                }`}
              >
                {!isRevealed ? (
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300">
                        Dowód #{idx + 1}: {ev.title}
                      </span>
                      <div className="text-[11px] font-mono text-stone-500">
                        Wiarigodność: {ev.sourceCredibility}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRevealEvidence(ev.id)}
                      className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-mono font-semibold transition"
                    >
                      Odkryj Dowód
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="text-xs font-mono uppercase font-bold text-blue-700 dark:text-blue-400">
                          Dowód #{idx + 1} • {ev.sourceCredibility}
                        </div>
                        <h4 className="font-serif font-bold text-stone-900 dark:text-stone-100 text-base mt-0.5">
                          {ev.title}
                        </h4>
                      </div>
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded-full shrink-0 font-bold ${
                          ev.bayesianImpact < 0
                            ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        }`}
                      >
                        Waga: {ev.bayesianImpact > 0 ? `+${ev.bayesianImpact}%` : `${ev.bayesianImpact}%`}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-3">
                      {ev.description}
                    </p>

                    {/* Reader reaction choices */}
                    <div className="pt-3 border-t border-stone-200 dark:border-stone-700 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-stone-500 uppercase font-bold">
                        Twoja Reakcja Poznawcza:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          onClick={() => handleReaction(ev, 'accept')}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition ${
                            userReaction === 'accept'
                              ? 'bg-emerald-700 text-white font-bold'
                              : 'bg-stone-100 dark:bg-stone-700 hover:bg-emerald-50 text-stone-700 dark:text-stone-300'
                          }`}
                        >
                          ✓ Przyjmuję i aktualizuję pogląd
                        </button>
                        <button
                          onClick={() => handleReaction(ev, 'discount')}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition ${
                            userReaction === 'discount'
                              ? 'bg-amber-700 text-white font-bold'
                              : 'bg-stone-100 dark:bg-stone-700 hover:bg-amber-50 text-stone-700 dark:text-stone-300'
                          }`}
                        >
                          ~ Szukam luki w metodologii
                        </button>
                        <button
                          onClick={() => handleReaction(ev, 'defend')}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition ${
                            userReaction === 'defend'
                              ? 'bg-rose-700 text-white font-bold'
                              : 'bg-stone-100 dark:bg-stone-700 hover:bg-rose-50 text-stone-700 dark:text-stone-300'
                          }`}
                        >
                          ✗ Odrzucam / to wyjątek potwierdzający regułę
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Cognitive Resistance Diagnostics */}
        {revealedEvidence.length > 0 && (
          <div className="p-5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase text-stone-700 dark:text-stone-300">
                Wskaźnik Oporu Poznawczego (Cognitive Resistance Gap):
              </span>
              <span className={`font-mono font-bold text-sm ${cognitiveResistanceGap > 15 ? 'text-rose-600' : 'text-emerald-600'}`}>
                +{cognitiveResistanceGap} pkt procentowych nadwyżki pewności
              </span>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              {cognitiveResistanceGap > 20
                ? 'Twój umysł wykazuje silny odruch obronny (Soldier Mindset). Mimo solidnych metaanaliz podważających pierwotną tezę, nadal bronisz wyjściowego dogmatu, minimalizując wagę faktów. To naturalny mechanizm ochrony spójności ego przed dysonansem poznawczym.'
                : cognitiveResistanceGap > 5
                ? 'Umiarkowana elastyczność poznawcza. Zauważasz dowody, ale proces aktualizacji jest spowalniany przez potrzebę szukania wyjątków. Dobry krok w stronę myślenia zwiadowcy.'
                : 'Znakomita epistemiczna pokora (Scout Mindset). Twoja pewność dynamicznie dopasowuje się do jakości i wagi napływających danych empirycznych, zamiast chronić stare przekonania.'}
            </p>

            <button
              onClick={handleReset}
              className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mt-2"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Zresetuj ten scenariusz i spróbuj z inną postawą</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
