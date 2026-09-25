import React, { useState } from 'react';
import { CaseStudy } from '../types/book';
import { BookOpen, Brain, ShieldAlert, CheckCircle2, User, Clock, MessageSquare, AlertTriangle, ArrowRight, Eye, HelpCircle, GitFork } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'analysis' | 'process' | 'neuro' | 'counter'>('story');

  return (
    <div className="my-10 rounded-2xl border border-stone-300/80 bg-white dark:bg-stone-900 shadow-lg overflow-hidden transition-all">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
            Szczegółowe Studium Przypadku
          </span>
          <span className="text-xs text-stone-400 font-mono">
            ID: {caseStudy.id}
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-amber-50">
          {caseStudy.title}
        </h3>
        <p className="text-sm sm:text-base text-stone-300 font-sans mt-1">
          {caseStudy.subtitle}
        </p>

        {/* Protagonist & Context */}
        <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="flex items-start space-x-2 text-stone-200">
            <User className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-stone-400 uppercase tracking-wider text-[11px] block font-mono">Bohater:</span>
              <span className="font-medium">{caseStudy.protagonist}</span>
            </div>
          </div>
          <div className="flex items-start space-x-2 text-stone-200">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-stone-400 uppercase tracking-wider text-[11px] block font-mono">Kontekst Decyzyjny:</span>
              <span className="text-stone-300 line-clamp-2">{caseStudy.context}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (A-J Integrated) */}
      <div className="flex border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 overflow-x-auto text-xs sm:text-sm font-medium">
        <button
          onClick={() => setActiveTab('story')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'story'
              ? 'border-amber-700 text-amber-900 dark:text-amber-300 bg-white dark:bg-stone-900 font-semibold'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>A-D. Historia i Percepcja</span>
        </button>

        <button
          onClick={() => setActiveTab('analysis')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'analysis'
              ? 'border-amber-700 text-amber-900 dark:text-amber-300 bg-white dark:bg-stone-900 font-semibold'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>E. Analiza Psychologiczna</span>
        </button>

        <button
          onClick={() => setActiveTab('process')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'process'
              ? 'border-amber-700 text-amber-900 dark:text-amber-300 bg-white dark:bg-stone-900 font-semibold'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800'
          }`}
        >
          <GitFork className="w-4 h-4" />
          <span>F. Proces Decyzyjny Krok po Kroku</span>
        </button>

        <button
          onClick={() => setActiveTab('neuro')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'neuro'
              ? 'border-amber-700 text-amber-900 dark:text-amber-300 bg-white dark:bg-stone-900 font-semibold'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>G. Biologia i Oś Czasu</span>
        </button>

        <button
          onClick={() => setActiveTab('counter')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'counter'
              ? 'border-amber-700 text-amber-900 dark:text-amber-300 bg-white dark:bg-stone-900 font-semibold'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>H-J. Alternatywa i Narzędzie</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 font-sans">
        {/* Tab 1: Story, Decision, What was seen, What was missed */}
        {activeTab === 'story' && (
          <div className="space-y-6">
            <div className="space-y-4 text-stone-800 dark:text-stone-200 text-base sm:text-lg leading-relaxed font-serif">
              {caseStudy.story.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decision taken & Information gap breakdown (B, C, D) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
              {caseStudy.decisionTaken && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40">
                  <span className="text-[11px] font-mono uppercase text-amber-800 dark:text-amber-300 font-bold block mb-1">
                    B. Co bohater zrobił (Decyzja):
                  </span>
                  <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                    {caseStudy.decisionTaken}
                  </p>
                </div>
              )}

              {caseStudy.whatProtagonistSaw && (
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40">
                  <span className="text-[11px] font-mono uppercase text-blue-800 dark:text-blue-300 font-bold block mb-1">
                    C. Co widział bohater (Dostępne dane):
                  </span>
                  <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                    {caseStudy.whatProtagonistSaw}
                  </p>
                </div>
              )}

              {caseStudy.whatWasMissed && (
                <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/40">
                  <span className="text-[11px] font-mono uppercase text-purple-800 dark:text-purple-300 font-bold block mb-1">
                    D. Czego nie zauważył (Ślepa plamka):
                  </span>
                  <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                    {caseStudy.whatWasMissed}
                  </p>
                </div>
              )}
            </div>

            {/* Dialogue Excerpt */}
            {caseStudy.dialogue && caseStudy.dialogue.length > 0 && (
              <div className="mt-6 rounded-xl bg-amber-50/60 dark:bg-stone-800/60 border border-amber-200/80 dark:border-stone-700 p-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-900 dark:text-amber-300 font-bold mb-3 flex items-center space-x-1.5">
                  <MessageSquare className="w-4 h-4 text-amber-700" />
                  <span>Kluczowa Wymiana Zdań i Podtekst Psychologiczny</span>
                </h4>
                <div className="space-y-3">
                  {caseStudy.dialogue.map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-white dark:bg-stone-900 rounded-lg border border-amber-100 dark:border-stone-800 shadow-xs">
                      <span className="font-semibold text-xs text-stone-900 dark:text-stone-100 font-sans block mb-1">
                        {item.speaker}:
                      </span>
                      <p className="text-stone-800 dark:text-stone-200 text-sm font-serif italic mb-2">
                        "{item.text}"
                      </p>
                      {item.subtext && (
                        <div className="text-xs text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-stone-800 p-2 rounded border border-amber-200/50 dark:border-stone-700 flex items-start space-x-1.5">
                          <span className="font-bold shrink-0 font-mono text-[10px] uppercase text-amber-700 dark:text-amber-400">Podtekst:</span>
                          <span>{item.subtext}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Psychological Analysis (E) */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
              <span className="text-xs font-mono uppercase text-stone-500 dark:text-stone-400 tracking-wider block mb-1">
                Główny Mechanizm Psychologiczny
              </span>
              <p className="text-stone-900 dark:text-stone-100 font-serif text-lg font-semibold">
                {caseStudy.psychologicalAnalysis.coreMechanism}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
                Dynamika emocjonalna: {caseStudy.psychologicalAnalysis.emotionalDynamic}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-3">
                Zidentyfikowane Błędy Poznawcze (Cognitive Biases)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseStudy.psychologicalAnalysis.cognitiveBiases.map((bias, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-amber-50/50 dark:bg-stone-800 border border-amber-200/60 dark:border-stone-700">
                    <span className="text-xs font-mono text-amber-800 dark:text-amber-400 font-bold block mb-1">
                      {bias.name}
                    </span>
                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed mb-2 font-serif">
                      {bias.description}
                    </p>
                    <div className="pt-2 border-t border-amber-200/40 dark:border-stone-700 text-[11px] text-amber-900 dark:text-amber-200">
                      <strong>Wpływ:</strong> {bias.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-3">
                Podświadome Mechanizmy Obronne
              </h4>
              <div className="space-y-2">
                {caseStudy.psychologicalAnalysis.defenseMechanisms.map((def, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-semibold text-stone-900 dark:text-stone-100 text-sm">
                      {def.name}
                    </span>
                    <span className="text-xs text-stone-600 dark:text-stone-400 sm:text-right max-w-lg font-serif">
                      {def.explanation}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Decision Process Analysis (F) */}
        {activeTab === 'process' && (
          <div className="space-y-4">
            <div className="text-xs text-stone-500 dark:text-stone-400 font-mono uppercase tracking-wider mb-2">
              F. Rozbicie Sytuacji na Łańcuch Decyzyjny (Od Bodźca do Konsekwencji)
            </div>

            {caseStudy.decisionProcessAnalysis ? (
              <div className="space-y-3 border-l-2 border-amber-600 pl-4 ml-2">
                <div className="p-3 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 text-xs">
                  <strong className="font-mono text-amber-800 dark:text-amber-400 uppercase block">1. Bodziec (Trigger):</strong>
                  <span className="font-serif text-stone-800 dark:text-stone-200">{caseStudy.decisionProcessAnalysis.trigger}</span>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 text-xs">
                  <strong className="font-mono text-amber-800 dark:text-amber-400 uppercase block">2. Uwaga (Focus):</strong>
                  <span className="font-serif text-stone-800 dark:text-stone-200">{caseStudy.decisionProcessAnalysis.attentionFocus}</span>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 text-xs">
                  <strong className="font-mono text-amber-800 dark:text-amber-400 uppercase block">3. Interpretacja (Appraisal):</strong>
                  <span className="font-serif text-stone-800 dark:text-stone-200">{caseStudy.decisionProcessAnalysis.interpretation}</span>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 text-xs">
                  <strong className="font-mono text-amber-800 dark:text-amber-400 uppercase block">4. Emocja i Stan:</strong>
                  <span className="font-serif text-stone-800 dark:text-stone-200">{caseStudy.decisionProcessAnalysis.emotion}</span>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 text-xs">
                  <strong className="font-mono text-amber-800 dark:text-amber-400 uppercase block">5. Impuls do Działania:</strong>
                  <span className="font-serif text-stone-800 dark:text-stone-200">{caseStudy.decisionProcessAnalysis.impulse}</span>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 text-xs">
                  <strong className="font-mono text-amber-800 dark:text-amber-400 uppercase block">6. Podjęte Działanie:</strong>
                  <span className="font-serif text-stone-800 dark:text-stone-200">{caseStudy.decisionProcessAnalysis.action}</span>
                </div>
                <div className="p-3 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 text-xs">
                  <strong className="font-mono text-amber-800 dark:text-amber-400 uppercase block">7. Konsekwencja i Koszt:</strong>
                  <span className="font-serif text-stone-800 dark:text-stone-200">{caseStudy.decisionProcessAnalysis.consequence}</span>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-stone-100 rounded-lg text-xs text-stone-600 font-serif">
                Rozbicie procesu decyzyjnego dla tego studium jest zintegrowane w analizie psychologicznej.
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Neurobiology (G) */}
        {activeTab === 'neuro' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-3 flex items-center space-x-2">
                <Brain className="w-4 h-4 text-purple-600" />
                <span>Zaangażowane Ośrodki Mózgowe</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {caseStudy.neurobiologicalAnalysis.brainRegions.map((region, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-purple-50/50 dark:bg-stone-800 border border-purple-100 dark:border-stone-700">
                    <h5 className="font-bold text-sm text-purple-950 dark:text-purple-300 mb-1">{region.region}</h5>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mb-2 font-serif">{region.role}</p>
                    <span className="inline-block text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300">
                      Stan: {region.activationState}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neurotransmitters */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-3">
                Kaskada Neuroprzekaźników
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {caseStudy.neurobiologicalAnalysis.neurotransmitters.map((nt, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100 block font-mono">{nt.name}</span>
                    <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-relaxed font-serif">{nt.roleInScenario}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Biological Timeline */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 font-mono mb-3 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Oś Czasu Biologicznego w Głowie Bohatera</span>
              </h4>
              <div className="space-y-2 border-l-2 border-blue-400 pl-4 ml-2">
                {caseStudy.neurobiologicalAnalysis.biologicalTimeline.map((item, idx) => (
                  <div key={idx} className="relative pb-3">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white"></div>
                    <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400">{item.timeMs}</span>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 mt-0.5 font-serif">{item.process}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Alternative Path, Counter Measures, Reader Question (H, I, J) */}
        {activeTab === 'counter' && (
          <div className="space-y-6">
            {/* Alternative Path (H) */}
            {caseStudy.alternativePath && (
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-800 dark:text-blue-300 font-bold block mb-1">
                  H. Alternatywna Ścieżka (Co bohater mógł zrobić):
                </span>
                <p className="text-stone-800 dark:text-stone-200 font-serif text-xs sm:text-sm leading-relaxed">
                  {caseStudy.alternativePath}
                </p>
              </div>
            )}

            {/* Defense tool & scripts (I) */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-300 font-bold block mb-2">
                I. Narzędzie Obronne i Skrypty Działania
              </span>
              <div className="space-y-3">
                {caseStudy.influenceAndManipulation.counterMeasures.map((counter, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-xs">
                    <div className="flex items-center space-x-2 text-stone-900 dark:text-stone-100 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{counter.step}</span>
                    </div>
                    <div className="p-3 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 font-serif text-stone-800 dark:text-stone-200 text-sm italic mb-2">
                      {counter.script}
                    </div>
                    <div className="text-xs text-stone-600 dark:text-stone-400 flex items-start space-x-1.5">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Dlaczego to działa:</strong> {counter.rationale}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reader Question (J) */}
            {caseStudy.readerQuestion && (
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 flex items-start space-x-2.5">
                <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-950 dark:text-amber-200 font-mono text-xs uppercase block mb-1">
                    J. Pytanie dla Czytelnika:
                  </strong>
                  <p className="font-serif text-stone-800 dark:text-stone-200 text-xs sm:text-sm italic">
                    "{caseStudy.readerQuestion}"
                  </p>
                </div>
              </div>
            )}

            {/* Key takeaway */}
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300">
              <span className="font-mono uppercase font-bold text-stone-900 dark:text-stone-100 block mb-0.5">
                Główny Wniosek:
              </span>
              <p className="font-serif italic leading-relaxed">{caseStudy.keyTakeaway}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
