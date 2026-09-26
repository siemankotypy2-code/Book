import React, { useState } from 'react';
import {
  Brain,
  Sliders,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Zap,
  Activity,
  Compass,
  ArrowRight,
  ShieldCheck,
  Target
} from 'lucide-react';

type RegulationStrategy = 'willpower' | 'situation_mod' | 'attention_deploy' | 'cognitive_reappraisal' | 'if_then_intentions';

interface StrategyDetail {
  id: RegulationStrategy;
  name: string;
  stage: string;
  cognitiveCost: 'high' | 'medium' | 'low';
  sustainability: 'low' | 'medium' | 'high';
  description: string;
  example: string;
}

const STRATEGIES: StrategyDetail[] = [
  {
    id: 'willpower',
    name: 'Bezpośrednia Samokontrola (Silna Wola / Tłumienie)',
    stage: 'Etap Reakcji (Response-focused)',
    cognitiveCost: 'high',
    sustainability: 'low',
    description: 'Próba siłowego powstrzymania pokusy lub reakcji w momencie, gdy impuls jest już w pełni rozwinięty.',
    example: 'Siedzenie przy biurku z telefonem leżącym obok i zmuszanie się do patrzenia w ekran monitora mimo chęci sprawdzenia powiadomień.'
  },
  {
    id: 'situation_mod',
    name: 'Modyfikacja Środowiska (Antycypacja)',
    stage: 'Etap Sytuacyjny (Situation selection & modification)',
    cognitiveCost: 'low',
    sustainability: 'high',
    description: 'Zmiana warunków zewnętrznych przed pojawieniem się pokusy, aby wyeliminować bodźce wyzwalające niepożądany impuls.',
    example: 'Wyłączenie telefonu i zostawienie go w drugim pokoju przed rozpoczęciem pracy wymagającej skupienia.'
  },
  {
    id: 'attention_deploy',
    name: 'Przekierowanie Uwagi (Odroczona Satysfakcja)',
    stage: 'Etap Atencyjny (Attentional deployment)',
    cognitiveCost: 'medium',
    sustainability: 'medium',
    description: 'Świadome przeniesienie ostrości uwagi z pokusy na inny obiekt, zadanie lub detal otoczenia.',
    example: 'Skupienie uwagi na detalu wykonywanego zadania lub włączenie instrumentalnej muzyki, gdy pojawia się chęć rozproszenia.'
  },
  {
    id: 'cognitive_reappraisal',
    name: 'Przewartościowanie Poznawcze (Reframing)',
    stage: 'Etap Poznawczy (Cognitive change)',
    cognitiveCost: 'medium',
    sustainability: 'high',
    description: 'Zmiana sposobu interpretacji sytuacji, bodźca lub odczuwanego dyskomfortu.',
    example: 'Postrzeganie trudnego tekstu nie jako "dręczącego obowiązku", lecz jako "eksperymentu sprawdzającego plastyczność własnego umysłu".'
  },
  {
    id: 'if_then_intentions',
    name: 'Intencje Implementacyjne (Plan "Jeśli X, to Y")',
    stage: 'Etap Antycypacji i Automatyzacji (Implementation Intentions)',
    cognitiveCost: 'low',
    sustainability: 'high',
    description: 'Wcześniejsze zaprogramowanie automatycznej reakcji na konkretny sygnał wyzwalający (Gollwitzer).',
    example: '"JEŚLI poczuję chęć sięgnięcia po przekąskę ze stresu, TO wypiję szklankę wody i zrobię 3 głębokie oddechy."'
  }
];

export const SelfRegulationLabWidget: React.FC = () => {
  // Scenario settings
  const [stressLevel, setStressLevel] = useState<number>(60);
  const [fatigueLevel, setFatigueLevel] = useState<number>(50);
  const [temptationStrength, setTemptationStrength] = useState<number>(75);
  const [selectedStrategy, setSelectedStrategy] = useState<RegulationStrategy>('willpower');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(0);

  const currentStrategy = STRATEGIES.find((s) => s.id === selectedStrategy) || STRATEGIES[0];

  // Calculate self-regulation outcome score based on Cybernetic Model
  const cognitiveLoad = Math.round((stressLevel * 0.4) + (fatigueLevel * 0.4) + (temptationStrength * 0.2));
  
  // Strategy bonuses
  const strategyBonus: Record<RegulationStrategy, number> = {
    willpower: -15, // Willpower alone under high load fails easily
    situation_mod: 40,
    attention_deploy: 15,
    cognitive_reappraisal: 30,
    if_then_intentions: 35
  };

  const successProbability = Math.max(10, Math.min(98, Math.round(100 - cognitiveLoad + strategyBonus[selectedStrategy])));

  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(1);
    
    setTimeout(() => setSimStep(2), 800);
    setTimeout(() => setSimStep(3), 1600);
    setTimeout(() => setSimStep(4), 2400);
    setTimeout(() => setIsSimulating(false), 2500);
  };

  return (
    <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl my-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-amber-500/20 rounded-xl border border-amber-500/30 text-amber-400">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-serif text-amber-200">
              Laboratorium Cybernetycznej Samoregulacji
            </h3>
            <p className="text-xs text-slate-400">
              Symulator Pętli Sprzężenia Zwrotnego i Modelu Procesowego Samokontroli (Carver & Scheier / Gross)
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-amber-300 font-mono">
          <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Stan Pętli: {isSimulating ? 'EWALUACJA...' : 'GOTOWY'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Column: Environmental & Biological Controls */}
        <div className="lg:col-span-5 space-y-6 bg-slate-800/50 p-5 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-2 text-sm font-semibold text-amber-300 font-mono uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>1. Zmienne Systemowe & Stan Biologiczny</span>
          </div>

          {/* Stress Level */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Poziom Stresu (Pobudzenie Współczulne):</span>
              <span className="font-mono text-amber-400 font-bold">{stressLevel}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="95"
              value={stressLevel}
              onChange={(e) => setStressLevel(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-700 h-2 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              {stressLevel > 70 ? 'Wysoki kortyzol osłabia obwody przedczołowe (PFC) na rzecz ciała migdałowatego.' : 'Umiarkowane pobudzenie sprzyja skupieniu.'}
            </p>
          </div>

          {/* Fatigue Level */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Zmęczenie Poznawcze / Deprywacja Snu:</span>
              <span className="font-mono text-amber-400 font-bold">{fatigueLevel}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="95"
              value={fatigueLevel}
              onChange={(e) => setFatigueLevel(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-700 h-2 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              {fatigueLevel > 60 ? 'Zmniejszona dostępność zasobów metabolicznych w grzbietowo-bocznej korze przedczołowej (dlPFC).' : 'Optymalna regeneracja metaboliczna ułatwia kontrolę zarządczą.'}
            </p>
          </div>

          {/* Temptation Strength */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Siła Natychmiastowej Nagrody / Pokusy:</span>
              <span className="font-mono text-amber-400 font-bold">{temptationStrength}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="95"
              value={temptationStrength}
              onChange={(e) => setTemptationStrength(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-700 h-2 rounded-lg cursor-pointer"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Dopaminergiczny sygnał przewidywania nagrody (VTA → Prążkowie).
            </p>
          </div>

          {/* Calculated Total Load */}
          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-700 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Całkowite Obciążenie Systemu:</span>
            <span className={`text-sm font-mono font-bold ${cognitiveLoad > 65 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {cognitiveLoad} / 100
            </span>
          </div>
        </div>

        {/* Middle Column: Strategy Selection */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-2 text-sm font-semibold text-amber-300 font-mono uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>2. Wybór Strategii Regulacyjnej</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {STRATEGIES.map((strat) => {
              const isSelected = selectedStrategy === strat.id;
              return (
                <button
                  key={strat.id}
                  onClick={() => setSelectedStrategy(strat.id)}
                  className={`text-left p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-amber-950/40 border-amber-500/80 text-amber-100 ring-1 ring-amber-500/50'
                      : 'bg-slate-800/40 border-slate-700/80 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{strat.name}</span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-amber-400">
                      {strat.stage}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{strat.description}</p>
                </button>
              );
            })}
          </div>

          {/* Selected Strategy Details */}
          <div className="p-4 bg-amber-950/20 border border-amber-500/20 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-amber-300 font-semibold font-mono">Koszt Poznawczy:</span>
              <span className="font-bold uppercase text-amber-400">{currentStrategy.cognitiveCost}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-amber-300 font-semibold font-mono">Zrównoważenie Długoterminowe:</span>
              <span className="font-bold uppercase text-emerald-400">{currentStrategy.sustainability}</span>
            </div>
            <div className="text-xs text-slate-300 mt-2 italic bg-slate-900/60 p-2.5 rounded border border-slate-800">
              <strong className="text-amber-200 not-italic">Przykład z życia: </strong>"{currentStrategy.example}"
            </div>
          </div>
        </div>
      </div>

      {/* Cybernetic Feedback Loop Visualizer */}
      <div className="mt-8 pt-6 border-t border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-sm font-semibold text-amber-300 font-mono uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>3. Pętla Sprzężenia Zwrotnego (TOTP: Test - Operate - Test - Exit)</span>
          </div>
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl transition flex items-center space-x-2 shadow-lg disabled:opacity-50"
          >
            {isSimulating ? <RotateCcw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
            <span>Uruchom Symulację Pętli</span>
          </button>
        </div>

        {/* Process Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-sans">
          {/* Step 1: Standard & Goal */}
          <div
            className={`p-3.5 rounded-xl border text-xs transition-all ${
              simStep >= 1 ? 'bg-amber-900/30 border-amber-500/50 text-amber-100' : 'bg-slate-800/30 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center space-x-2 font-mono font-bold mb-1 text-amber-400">
              <Target className="w-3.5 h-3.5" />
              <span>1. WZORZEC (Goal)</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Inicjacja standardu zachowania. Aktywacja reprezentacji celu w korze przedczołowej.
            </p>
          </div>

          {/* Step 2: Comparator / Discrepancy */}
          <div
            className={`p-3.5 rounded-xl border text-xs transition-all ${
              simStep >= 2 ? 'bg-amber-900/30 border-amber-500/50 text-amber-100' : 'bg-slate-800/30 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center space-x-2 font-mono font-bold mb-1 text-amber-400">
              <Activity className="w-3.5 h-3.5" />
              <span>2. MONITORYZM (Test)</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Przednia kora zakrętu obręczy (dACC) wykrywa konflikty i rozbieżność między stanem obecnym a celem.
            </p>
          </div>

          {/* Step 3: Action / Regulation */}
          <div
            className={`p-3.5 rounded-xl border text-xs transition-all ${
              simStep >= 3 ? 'bg-amber-900/30 border-amber-500/50 text-amber-100' : 'bg-slate-800/30 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center space-x-2 font-mono font-bold mb-1 text-amber-400">
              <Zap className="w-3.5 h-3.5" />
              <span>3. OPERACJA (Operate)</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Zastosowanie strategii: <strong className="text-amber-200">{currentStrategy.name}</strong>.
            </p>
          </div>

          {/* Step 4: Outcome & Exit */}
          <div
            className={`p-3.5 rounded-xl border text-xs transition-all ${
              simStep >= 4 ? 'bg-amber-900/30 border-amber-500/50 text-amber-100' : 'bg-slate-800/30 border-slate-800 text-slate-500'
            }`}
          >
            <div className="flex items-center space-x-2 font-mono font-bold mb-1 text-amber-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>4. EFEKT (Exit / Adjust)</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Szansa utrzymania samokontroli: <span className="font-mono font-bold text-amber-300">{successProbability}%</span>.
            </p>
          </div>
        </div>

        {/* Simulation Output Dashboard */}
        <div className="mt-4 p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            {successProbability > 60 ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-6 h-6 text-rose-400 shrink-0" />
            )}
            <div>
              <div className="text-sm font-bold text-slate-200">
                Prawdopodobieństwo Skutecznej Samoregulacji: {successProbability}%
              </div>
              <p className="text-xs text-slate-400">
                {selectedStrategy === 'willpower' && cognitiveLoad > 60
                  ? 'UWAGA: Opieranie samokontroli wyłącznie na tłumieniu impulses w warunkach wysokiego stresu i zmęczenia drastycznie zwiększa ryzyko epizodu utraty kontroli (efekt odbicia).'
                  : selectedStrategy === 'situation_mod' || selectedStrategy === 'if_then_intentions'
                  ? 'OPTYMALNY WYBÓR: Przeprojektowanie sytuacji lub intencje "Jeśli-To" drastycznie redukują zapotrzebowanie na zasoby zarządcze PFC.'
                  : 'Strategia poznawcza modyfikuje przetwarzanie bodźca, zmniejszając pobudzenie układu nagrody.'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-slate-500 block">WNIOSEK KLUCZOWY</span>
            <span className="text-xs font-serif italic text-amber-300">
              "Samoregulacja to nie walka siłowa, lecz umiejętne zarządzanie architekturą wyzwalaczy i uwagi."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
