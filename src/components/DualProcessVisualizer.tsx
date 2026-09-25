import React, { useState } from 'react';
import { Zap, Clock, Battery, AlertTriangle, ShieldCheck, Sparkles, Brain, CheckCircle2, ArrowRight } from 'lucide-react';

interface SystemModeInfo {
  name: string;
  subtitle: string;
  evolutionAge: string;
  reactionSpeed: string;
  energyCost: string;
  consciousness: string;
  errorRisk: string;
  color: string;
  bgColor: string;
  borderColor: string;
  neuroStructures: string[];
  strengths: string[];
  vulnerabilities: string[];
  tasks: string[];
}

export const DualProcessVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compare' | 'sim' | 'system1' | 'system2'>('compare');
  const [simStep, setSimStep] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);

  const system1: SystemModeInfo = {
    name: 'System 1 (Szybki / Automatyczny)',
    subtitle: 'Niewidzialny pilot automatyczny Twojego życia',
    evolutionAge: 'Setki milionów lat ewolucji (wspólny ze ssakami i gadami)',
    reactionSpeed: 'Błyskawiczny: 50 – 250 milisekund',
    energyCost: 'Minimalny (oszczędza glukozę, działa bez wysiłku w tle)',
    consciousness: 'Poza świadomością (widzisz tylko gotowy wynik/odczucie)',
    errorRisk: 'Wysoka podatność na stereotypy, złudzenia i heurystyki',
    color: 'text-amber-700 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-300 dark:border-amber-800',
    neuroStructures: [
      'Ciało migdałowate (Amygdala)',
      'Prążkowie i zwoje podstawy (Basal Ganglia)',
      'Wzgórze (Thalamus - droga niska / low road)',
      'Kora czuciowa pierwszorzędowa'
    ],
    strengths: [
      'Natychmiastowa reakcja w sytuacji fizycznego zagrożenia życia',
      'Płynne rozpoznawanie nastroju i mikroekspresji twarzy bliskich',
      'Automatyczne prowadzenie auta po znanej, pustej trasie',
      'Błyskawiczne wykrywanie niespójności zmysłowych'
    ],
    vulnerabilities: [
      'Podatność na kotwiczenie cenowe i manipulacje marketingowe',
      'Brak umiejętności precyzyjnej kalkulacji prawdopodobieństwa',
      'Mylenie twardych faktów z subiektywnymi interpretacjami',
      'Trudność w powstrzymaniu natychmiastowych pokus (dopamina)'
    ],
    tasks: [
      'Zauważenie, że jeden obiekt jest dalej niż drugi',
      'Odwrócenie głowy w stronę niespodziewanego huku',
      'Zrozumienie prostego zdania w języku ojczystym',
      'Rozpoznanie wstrętu na twarzy rozmówcy'
    ]
  };

  const system2: SystemModeInfo = {
    name: 'System 2 (Wolny / Refleksyjny)',
    subtitle: 'Świadomy sternik wymagający skupionej energii',
    evolutionAge: 'Najmłodszy nabytek ewolucyjny (kora nowa naczelnych)',
    reactionSpeed: 'Powolny: 1000 – 5000+ milisekund (wymaga czasu)',
    energyCost: 'Bardzo wysoki (spala glukozę w dlPFC, szybko ulega zmęczeniu)',
    consciousness: 'Wymaga pełnego, świadomego skupienia uwagi',
    errorRisk: 'Niski przy pełnych danych, ale bezradny w stanie wyczerpania',
    color: 'text-blue-700 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    borderColor: 'border-blue-300 dark:border-blue-800',
    neuroStructures: [
      'Grzbietowo-boczna kora przedczołowa (dlPFC)',
      'Przednia kora zakrętu obręczy (dACC - monitor konfliktów)',
      'Brzuszno-boczna kora przedczołowa (vlPFC - hamowanie reakcji)',
      'Sieć wykonawcza (Central Executive Network)'
    ],
    strengths: [
      'Zdolność do logicznego wnioskowania i rachunku prawdopodobieństwa',
      'Świadome hamowanie destrukcyjnych impulsów i agresji',
      'Planowanie strategii długofalowych i budżetów finansowych',
      'Krytyczna weryfikacja własnych uprzedzeń i manipulacji innych'
    ],
    vulnerabilities: [
      'Ekstremalna energochłonność (zjawisko wyczerpania decyzyjnego)',
      'Paraliż analityczny w obliczu nadmiaru opcji (Overthinking)',
      'Zbyt wolny czas reakcji w bezpośrednim zagrożeniu fizycznym',
      'Łatwość ulegania racjonalizacji post-factum dla błędów Systemu 1'
    ],
    tasks: [
      'Obliczenie w pamięci iloczynu 17 × 24',
      'Wypatrywanie w tłumie kobiety w czerwonym berecie',
      'Równoległe parkowanie w bardzo ciasnej luce miejskiej',
      'Zachowanie uprzejmości podczas chamskiego ataku słownego'
    ]
  };

  return (
    <div className="my-8 rounded-2xl border border-stone-300 bg-white dark:bg-stone-900 shadow-md overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-blue-950 text-white p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-300 mb-1">
          <Brain className="w-4 h-4" />
          <span>Wizualizator Dwóch Systemów Myślenia • Sekcja 1.2</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-50">
          Architektura Podwójnego Przetwarzania: System 1 vs System 2
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Model Daniela Kahnemana w ujęciu współczesnej neuronauki. Sprawdź parametry, struktury mózgowe i interaktywny poligon obu trybów umysłu.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'compare' ? 'bg-amber-600 text-white shadow-xs' : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            Bezpośrednie Porównanie
          </button>
          <button
            onClick={() => setActiveTab('system1')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'system1' ? 'bg-amber-700 text-white shadow-xs' : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            System 1 (Szybki)
          </button>
          <button
            onClick={() => setActiveTab('system2')}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === 'system2' ? 'bg-blue-600 text-white shadow-xs' : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            System 2 (Wolny)
          </button>
          <button
            onClick={() => {
              setActiveTab('sim');
              setSimStep(0);
              setUserAnswer(null);
            }}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              activeTab === 'sim' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sprawdź w Praktyce</span>
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {/* TAB 1: COMPARE */}
        {activeTab === 'compare' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className={`p-4 rounded-xl border ${system1.borderColor} ${system1.bgColor}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <h4 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                      System 1: Pilot Automatyczny
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-200/60 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold">
                    Szybki
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 mb-4">
                  {system1.subtitle}
                </p>

                <div className="space-y-2.5 text-xs font-sans">
                  <div className="flex justify-between border-b border-amber-900/10 pb-1.5">
                    <span className="text-stone-500">Czas reakcji:</span>
                    <strong className="text-amber-900 dark:text-amber-300 font-mono">{system1.reactionSpeed}</strong>
                  </div>
                  <div className="flex justify-between border-b border-amber-900/10 pb-1.5">
                    <span className="text-stone-500">Koszt energii:</span>
                    <strong className="text-emerald-700 dark:text-emerald-400">Prawie zerowy</strong>
                  </div>
                  <div className="flex justify-between border-b border-amber-900/10 pb-1.5">
                    <span className="text-stone-500">Świadomość:</span>
                    <strong className="text-stone-800 dark:text-stone-200">Podświadomy automat</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Główne ryzyko:</span>
                    <strong className="text-rose-700 dark:text-rose-400">Skróty i heurystyki</strong>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`p-4 rounded-xl border ${system2.borderColor} ${system2.bgColor}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                      System 2: Świadomy Analityk
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-blue-200/60 dark:bg-blue-900/60 text-blue-900 dark:text-blue-200 font-bold">
                    Wolny
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 mb-4">
                  {system2.subtitle}
                </p>

                <div className="space-y-2.5 text-xs font-sans">
                  <div className="flex justify-between border-b border-blue-900/10 pb-1.5">
                    <span className="text-stone-500">Czas reakcji:</span>
                    <strong className="text-blue-900 dark:text-blue-300 font-mono">{system2.reactionSpeed}</strong>
                  </div>
                  <div className="flex justify-between border-b border-blue-900/10 pb-1.5">
                    <span className="text-stone-500">Koszt energii:</span>
                    <strong className="text-rose-700 dark:text-rose-400">Bardzo wysoki (spala glukozę)</strong>
                  </div>
                  <div className="flex justify-between border-b border-blue-900/10 pb-1.5">
                    <span className="text-stone-500">Świadomość:</span>
                    <strong className="text-stone-800 dark:text-stone-200">Wymaga skupionej uwagi</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Główne ryzyko:</span>
                    <strong className="text-amber-700 dark:text-amber-400">Szybkie zmęczenie / paraliż</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Crucial Insight */}
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
              <strong className="font-mono text-amber-800 dark:text-amber-400 uppercase tracking-wider block mb-1">
                Kluczowa zasada współpracy:
              </strong>
              System 1 i System 2 nie są rywalami, lecz nieodłącznym zespołem. System 1 generuje nieustanne propozycje (wrażenia, przeczucia, impulsy), a System 2 przyjmuje je bez zmian, dopóki nie napotka wyraźnej sprzeczności lub błędu. Problem polega na tym, że System 2 jest z natury leniwy i chętnie akceptuje każdą opowieść podsuwaną przez System 1, jeśli pozwala to zaoszczędzić cenną energię metaboliczną!
            </div>
          </div>
        )}

        {/* TAB 2: SYSTEM 1 DETAILED */}
        {activeTab === 'system1' && (
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-600/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-300 font-serif text-base mb-1">
                Struktury Neurobiologiczne Systemu 1
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-stone-700 dark:text-stone-300 text-xs">
                {system1.neuroStructures.map((s, idx) => (
                  <li key={idx}><strong>{s}</strong></li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                <h5 className="font-bold text-emerald-900 dark:text-emerald-300 text-xs uppercase font-mono mb-2">
                  Ewolucyjne Siły (Zalety)
                </h5>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {system1.strengths.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800">
                <h5 className="font-bold text-rose-900 dark:text-rose-300 text-xs uppercase font-mono mb-2">
                  Podatności i Wektory Błędu
                </h5>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {system1.vulnerabilities.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SYSTEM 2 DETAILED */}
        {activeTab === 'system2' && (
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-600/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-300 font-serif text-base mb-1">
                Struktury Neurobiologiczne Systemu 2
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-stone-700 dark:text-stone-300 text-xs">
                {system2.neuroStructures.map((s, idx) => (
                  <li key={idx}><strong>{s}</strong></li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                <h5 className="font-bold text-emerald-900 dark:text-emerald-300 text-xs uppercase font-mono mb-2">
                  Możliwości Analityczne
                </h5>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {system2.strengths.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                <h5 className="font-bold text-amber-900 dark:text-amber-300 text-xs uppercase font-mono mb-2">
                  Ograniczenia Fizjologiczne
                </h5>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  {system2.vulnerabilities.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LIVE SIMULATION */}
        {activeTab === 'sim' && (
          <div className="space-y-5">
            {simStep === 0 && (
              <div className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                <span className="text-xs font-mono uppercase text-amber-700 font-bold block mb-1">
                  Krok 1: Praca Systemu 1 (Automatyczna Asocjacja)
                </span>
                <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                  Spojrzenie na twarz lub wyraz słowny:
                </h4>
                <div className="p-4 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-center my-3">
                  <span className="text-3xl sm:text-4xl font-serif font-black tracking-widest text-rose-700 dark:text-rose-400">
                    WŚCIEKŁOŚĆ!
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                  Zauważ: nie musiałeś „czytać” tego słowa litera po literze. W ułamku sekundy Twój mózg nie tylko rozpoznał słowo, ale w Twoim ciele pojawiło się natychmiastowe mikro-napięcie mięśniowe i asocjacja z niebezpieczeństwem. To czysta, mimowolna praca Systemu 1.
                </p>
                <button
                  onClick={() => setSimStep(1)}
                  className="mt-4 px-4 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <span>Przejdź do wyzwania dla Systemu 2</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {simStep === 1 && (
              <div className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                <span className="text-xs font-mono uppercase text-blue-700 font-bold block mb-1">
                  Krok 2: Praca Systemu 2 (Wymuszony Wysiłek Poznawczy)
                </span>
                <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                  Oblicz bez kartki i kalkulatora:
                </h4>
                <div className="p-4 rounded-xl bg-blue-100/60 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-800 text-center my-3">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-blue-900 dark:text-blue-300">
                    23 × 14 = ?
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed mb-4">
                  Zwróć uwagę na to, co dzieje się teraz w Twoim ciele: rozszerzają się źrenice, przyspiesza puls, wstrzymujesz oddech, a Twoja uwaga odcina wszystkie dźwięki otoczenia. Jeśli ktoś w tej chwili zada Ci proste pytanie — zirytujesz się, bo kora przedczołowa nie ma wolnych mocy przerobowych!
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['292', '312', '322', '342'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setUserAnswer(option)}
                      className={`p-2.5 rounded-xl text-xs font-mono font-bold border transition ${
                        userAnswer === option
                          ? option === '322'
                            ? 'bg-emerald-600 text-white border-emerald-700'
                            : 'bg-rose-600 text-white border-rose-700'
                          : 'bg-white dark:bg-stone-700 hover:bg-stone-100 dark:hover:bg-stone-600 border-stone-300 text-stone-800 dark:text-stone-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {userAnswer && (
                  <div className="mt-4 p-3.5 rounded-xl bg-stone-100 dark:bg-stone-700/60 border border-stone-300 dark:border-stone-600 text-xs font-serif leading-relaxed">
                    {userAnswer === '322' ? (
                      <p className="text-emerald-800 dark:text-emerald-300 font-semibold">
                        Brawo! 23 × 14 = 322 (23 × 10 = 230, 23 × 4 = 92, 230 + 92 = 322). Zmusiłeś System 2 do pełnej pracy sekwencyjnej.
                      </p>
                    ) : (
                      <p className="text-rose-800 dark:text-rose-300">
                        Niepoprawny wynik ({userAnswer}). Prawidłowa odpowiedź to 322. Spójrz, jak łatwo zmęczenie lub pośpiech prowadzi do błędu, gdy System 2 nie dostanie wystarczająco dużo czasu!
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
