import React, { useState } from 'react';
import { CaseStudy } from '../types/book';
import { BookOpen, Brain, ShieldAlert, CheckCircle2, User, Clock, MessageSquare, AlertTriangle, ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'psychology' | 'neuro' | 'manipulation' | 'counter'>('story');

  return (
    <div className="my-10 rounded-2xl border border-stone-300/80 bg-white shadow-lg overflow-hidden transition-all">
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
              <span className="text-stone-400 uppercase tracking-wider text-[11px] block font-mono">Kontekst Konfliktu:</span>
              <span className="text-stone-300 line-clamp-2">{caseStudy.context}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-stone-200 bg-stone-50 overflow-x-auto text-xs sm:text-sm font-medium">
        <button
          onClick={() => setActiveTab('story')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'story'
              ? 'border-amber-700 text-amber-900 bg-white font-semibold'
              : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Przebieg Sytuacji</span>
        </button>

        <button
          onClick={() => setActiveTab('psychology')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'psychology'
              ? 'border-amber-700 text-amber-900 bg-white font-semibold'
              : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>2. Analiza Psychologiczna</span>
        </button>

        <button
          onClick={() => setActiveTab('neuro')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'neuro'
              ? 'border-amber-700 text-amber-900 bg-white font-semibold'
              : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>3. Wiwisekcja Neuronowa</span>
        </button>

        <button
          onClick={() => setActiveTab('manipulation')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'manipulation'
              ? 'border-amber-700 text-amber-900 bg-white font-semibold'
              : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>4. Użyte Narzędzia Wpływu</span>
        </button>

        <button
          onClick={() => setActiveTab('counter')}
          className={`flex items-center space-x-2 px-5 py-3.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'counter'
              ? 'border-amber-700 text-amber-900 bg-white font-semibold'
              : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>5. Skrypt Obrony i Nowy Wybór</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 font-sans">
        {/* Tab 1: Story & Dialogue */}
        {activeTab === 'story' && (
          <div className="space-y-6">
            <div className="space-y-4 text-stone-800 text-base sm:text-lg leading-relaxed font-serif">
              {caseStudy.story.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'drop-cap' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Dialogue Excerpt */}
            {caseStudy.dialogue && caseStudy.dialogue.length > 0 && (
              <div className="mt-8 rounded-xl bg-amber-50/60 border border-amber-200/80 p-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold mb-3 flex items-center space-x-1.5">
                  <MessageSquare className="w-4 h-4 text-amber-700" />
                  <span>Kluczowa Wymiana Zdań i Podtekst Psychologiczny</span>
                </h4>
                <div className="space-y-3">
                  {caseStudy.dialogue.map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-white rounded-lg border border-amber-100 shadow-xs">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-semibold text-xs text-stone-900 font-sans">
                          {item.speaker}:
                        </span>
                      </div>
                      <p className="text-stone-800 text-sm font-serif italic mb-2">
                        "{item.text}"
                      </p>
                      {item.subtext && (
                        <div className="text-xs text-amber-900 bg-amber-50 p-2 rounded border border-amber-200/50 flex items-start space-x-1.5">
                          <span className="font-bold shrink-0 font-mono text-[10px] uppercase text-amber-700">Podtekst:</span>
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

        {/* Tab 2: Psychological Analysis */}
        {activeTab === 'psychology' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-stone-100 border border-stone-200">
              <span className="text-xs font-mono uppercase text-stone-500 tracking-wider block mb-1">
                Główny Mechanizm Psychologiczny
              </span>
              <p className="text-stone-900 font-serif text-lg font-semibold">
                {caseStudy.psychologicalAnalysis.coreMechanism}
              </p>
              <p className="text-xs text-stone-600 mt-2">
                Dynamika emocjonalna: {caseStudy.psychologicalAnalysis.emotionalDynamic}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 font-mono mb-3">
                Zidentyfikowane Błędy Poznawcze (Cognitive Biases)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseStudy.psychologicalAnalysis.cognitiveBiases.map((bias, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60">
                    <span className="text-xs font-mono text-amber-800 font-bold block mb-1">
                      {bias.name}
                    </span>
                    <p className="text-xs text-stone-700 leading-relaxed mb-2">
                      {bias.description}
                    </p>
                    <div className="pt-2 border-t border-amber-200/40 text-[11px] text-amber-900">
                      <strong>Wpływ w scenariuszu:</strong> {bias.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 font-mono mb-3">
                Podświadome Mechanizmy Obronne
              </h4>
              <div className="space-y-2">
                {caseStudy.psychologicalAnalysis.defenseMechanisms.map((def, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-semibold text-stone-900 text-sm">
                      {def.name}
                    </span>
                    <span className="text-xs text-stone-600 sm:text-right max-w-lg">
                      {def.explanation}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Neurobiology */}
        {activeTab === 'neuro' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 font-mono mb-3 flex items-center space-x-2">
                <Brain className="w-4 h-4 text-purple-600" />
                <span>Zaangażowane Ośrodki Mózgowe</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {caseStudy.neurobiologicalAnalysis.brainRegions.map((region, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                    <h5 className="font-bold text-sm text-purple-950 mb-1">{region.region}</h5>
                    <p className="text-xs text-stone-600 mb-2">{region.role}</p>
                    <span className="inline-block text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                      Stan: {region.activationState}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Neurotransmitters */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 font-mono mb-3">
                Kaskada Neuroprzekaźników
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {caseStudy.neurobiologicalAnalysis.neurotransmitters.map((nt, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-stone-900 block font-mono">{nt.name}</span>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">{nt.roleInScenario}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Biological Timeline */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 font-mono mb-3 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Oś Czasu Biologicznego w Głowie Bohatera</span>
              </h4>
              <div className="space-y-2 border-l-2 border-blue-400 pl-4 ml-2">
                {caseStudy.neurobiologicalAnalysis.biologicalTimeline.map((item, idx) => (
                  <div key={idx} className="relative pb-3">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white"></div>
                    <span className="text-xs font-mono font-bold text-blue-700">{item.timeMs}</span>
                    <p className="text-xs sm:text-sm text-stone-700 mt-0.5">{item.process}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Influence and Manipulation */}
        {activeTab === 'manipulation' && (
          <div className="space-y-4">
            <div className="text-xs text-stone-500 font-mono uppercase tracking-wider mb-2">
              Techniki Użyte Przez Drugą Stronę (Świadome lub Bezwiedne)
            </div>
            {caseStudy.influenceAndManipulation.tacticsUsed.map((tactic, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h5 className="font-bold text-sm text-rose-950 font-serif">
                    {tactic.tactic}
                  </h5>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                    Wektor Ataku
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-2 font-sans">
                  {tactic.description}
                </p>
                <div className="text-xs text-rose-900 bg-white/80 p-2 rounded border border-rose-200/50">
                  <strong className="font-mono text-[10px] uppercase text-rose-700">Wykorzystana podatność:</strong> {tactic.vulnerabilityExploited}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Counter Measures and Script */}
        {activeTab === 'counter' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold block mb-1">
                Kluczowa Lekcja i Nowa Odpowiedź
              </span>
              <p className="text-stone-900 font-serif text-sm sm:text-base italic">
                "{caseStudy.keyTakeaway}"
              </p>
            </div>

            <div className="space-y-3">
              {caseStudy.influenceAndManipulation.counterMeasures.map((counter, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
                  <div className="flex items-center space-x-2 text-stone-900 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{counter.step}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 font-serif text-stone-800 text-sm italic mb-2">
                    {counter.script}
                  </div>
                  <div className="text-xs text-stone-600 flex items-start space-x-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Dlaczego to działa na mózg:</strong> {counter.rationale}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
