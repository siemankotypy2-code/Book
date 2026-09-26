import React, { useState } from 'react';
import { Award, Zap, Activity, CheckCircle2, AlertCircle, TrendingUp, Sparkles, Sliders } from 'lucide-react';

interface DomainEvaluation {
  id: string;
  name: string;
  enactiveMastery: number; // 1-10: Prawdziwe sukcesy w działaniu
  vicariousModeling: number; // 1-10: Widzenie podobnych do mnie odnoszących sukces
  verbalPersuasion: number; // 1-10: Konstruktywny feedback otoczenia
  somaticArousal: number; // 1-10: Spokój w ciele (10 = brak paraliżującego lęku)
  contingentSelfEsteem: number; // 1-10: Uzależnienie wartości od wyniku (10 = silna zależność)
  neuroticPerfectionism: number; // 1-10: Paraliżujący lęk przed najmniejszym błędem
}

const DEFAULT_DOMAINS: DomainEvaluation[] = [
  {
    id: 'd1',
    name: 'Wystąpienia publiczne i prezentacje',
    enactiveMastery: 4,
    vicariousModeling: 6,
    verbalPersuasion: 5,
    somaticArousal: 3,
    contingentSelfEsteem: 9,
    neuroticPerfectionism: 8
  },
  {
    id: 'd2',
    name: 'Trudne rozmowy i stawianie granic',
    enactiveMastery: 5,
    vicariousModeling: 4,
    verbalPersuasion: 6,
    somaticArousal: 4,
    contingentSelfEsteem: 7,
    neuroticPerfectionism: 7
  },
  {
    id: 'd3',
    name: 'Realizacja złożonych projektów zawodowych',
    enactiveMastery: 8,
    vicariousModeling: 7,
    verbalPersuasion: 8,
    somaticArousal: 7,
    contingentSelfEsteem: 6,
    neuroticPerfectionism: 5
  }
];

export const SelfEfficacyLab: React.FC = () => {
  const [domains, setDomains] = useState<DomainEvaluation[]>(DEFAULT_DOMAINS);
  const [selectedDomainId, setSelectedDomainId] = useState<string>(DEFAULT_DOMAINS[0].id);

  const activeDomain = domains.find((d) => d.id === selectedDomainId) || domains[0];

  const handleUpdateParam = (param: keyof DomainEvaluation, val: number) => {
    setDomains((prev) =>
      prev.map((d) => (d.id === selectedDomainId ? { ...d, [param]: val } : d))
    );
  };

  // Bandura's Self-Efficacy index (weighted mastery + vicarious + verbal + calm somatic)
  const banduraEfficacy = Math.round(
    (activeDomain.enactiveMastery * 0.4 +
      activeDomain.vicariousModeling * 0.2 +
      activeDomain.verbalPersuasion * 0.2 +
      activeDomain.somaticArousal * 0.2) *
      10
  );

  // Fragility index: high contingent esteem + high perfectionism vs efficacy
  const fragilityScore = Math.round(
    ((activeDomain.contingentSelfEsteem + activeDomain.neuroticPerfectionism) / 2) * 10
  );

  return (
    <div className="my-10 rounded-2xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-lg overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-purple-950 to-stone-900 text-white p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-purple-300 mb-1">
          <Zap className="w-4 h-4 text-purple-400" />
          <span>Laboratorium Tomu III • Rozdział 3</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-purple-50">
          Eksplorator Poczucia Skuteczności i Kruchości Samooceny
        </h3>
        <p className="text-sm text-stone-300 mt-1 max-w-2xl">
          Albert Bandura wykazał, że poczucie własnej skuteczności (Self-Efficacy) nie jest ogólną „pewnością siebie”, lecz specyficzną wiarą w zdolność do wykonania konkretnego zadania. Zmierz swoje 4 filary sprawczości i oddziel wartość od wyników.
        </p>
      </div>

      <div className="p-6">
        {/* Domain Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {domains.map((dom) => (
            <button
              key={dom.id}
              onClick={() => setSelectedDomainId(dom.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                dom.id === selectedDomainId
                  ? 'bg-purple-800 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300'
              }`}
            >
              {dom.name}
            </button>
          ))}
        </div>

        {/* 4 Pillars of Bandura Self-Efficacy */}
        <div className="mb-6">
          <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-purple-600" />
            <span>Cztery Źródła Poczucia Własnej Skuteczności (Albert Bandura):</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="font-bold text-stone-800 dark:text-stone-200">
                  1. Doświadczenia Mistrzostwa (Enactive Mastery):
                </span>
                <span className="font-bold text-purple-700 dark:text-purple-400">
                  {activeDomain.enactiveMastery} / 10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={activeDomain.enactiveMastery}
                onChange={(e) => handleUpdateParam('enactiveMastery', parseInt(e.target.value, 10))}
                className="w-full accent-purple-700 cursor-pointer"
              />
              <span className="text-[10px] text-stone-500 block mt-1">
                Najpotężniejsze źródło: ile razy w przeszłości podjąłeś to działanie i doprowadziłeś je do końca?
              </span>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="font-bold text-stone-800 dark:text-stone-200">
                  2. Doświadczenia Zastępcze (Vicarious Modeling):
                </span>
                <span className="font-bold text-purple-700 dark:text-purple-400">
                  {activeDomain.vicariousModeling} / 10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={activeDomain.vicariousModeling}
                onChange={(e) => handleUpdateParam('vicariousModeling', parseInt(e.target.value, 10))}
                className="w-full accent-purple-700 cursor-pointer"
              />
              <span className="text-[10px] text-stone-500 block mt-1">
                Czy masz przed oczami ludzi podobnych do Ciebie (wiek, punkt startowy), którzy to opanowali?
              </span>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="font-bold text-stone-800 dark:text-stone-200">
                  3. Perswazja Społeczna (Social Feedback):
                </span>
                <span className="font-bold text-purple-700 dark:text-purple-400">
                  {activeDomain.verbalPersuasion} / 10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={activeDomain.verbalPersuasion}
                onChange={(e) => handleUpdateParam('verbalPersuasion', parseInt(e.target.value, 10))}
                className="w-full accent-purple-700 cursor-pointer"
              />
              <span className="text-[10px] text-stone-500 block mt-1">
                Czy otrzymujesz rzetelny feedback od mentorów (zamiast pustych pochwał lub toksycznej krytyki)?
              </span>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
              <div className="flex justify-between items-center text-xs font-mono mb-1">
                <span className="font-bold text-stone-800 dark:text-stone-200">
                  4. Stany Fizjologiczne i Regulacja Lęku (Somatic State):
                </span>
                <span className="font-bold text-purple-700 dark:text-purple-400">
                  {activeDomain.somaticArousal} / 10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={activeDomain.somaticArousal}
                onChange={(e) => handleUpdateParam('somaticArousal', parseInt(e.target.value, 10))}
                className="w-full accent-purple-700 cursor-pointer"
              />
              <span className="text-[10px] text-stone-500 block mt-1">
                Jak interpretujesz bicie serca: jako paraliżujący strach czy jako gotowość organizmu do działania?
              </span>
            </div>
          </div>
        </div>

        {/* Pathology of Worth: Contingent Esteem & Perfectionism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-4 border-t border-stone-200 dark:border-stone-700">
          <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="font-bold text-rose-900 dark:text-rose-200">
                Warunkowość Samooceny (Contingent Self-Esteem):
              </span>
              <span className="font-bold text-rose-700 dark:text-rose-400">
                {activeDomain.contingentSelfEsteem} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={activeDomain.contingentSelfEsteem}
              onChange={(e) => handleUpdateParam('contingentSelfEsteem', parseInt(e.target.value, 10))}
              className="w-full accent-rose-700 cursor-pointer"
            />
            <span className="text-[10px] text-stone-500 block mt-1">
              Czy Twoje poczucie bycia wartościowym człowiekiem załamuje się, gdy popełnisz błąd w tym obszarze?
            </span>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
            <div className="flex justify-between items-center text-xs font-mono mb-1">
              <span className="font-bold text-rose-900 dark:text-rose-200">
                Lękowy Perfekcjonizm (Fear of Imperfection):
              </span>
              <span className="font-bold text-rose-700 dark:text-rose-400">
                {activeDomain.neuroticPerfectionism} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={activeDomain.neuroticPerfectionism}
              onChange={(e) => handleUpdateParam('neuroticPerfectionism', parseInt(e.target.value, 10))}
              className="w-full accent-rose-700 cursor-pointer"
            />
            <span className="text-[10px] text-stone-500 block mt-1">
              Przekonanie: „Jeśli nie zrobię tego idealnie, okażę się oszustem i nieudacznikiem”.
            </span>
          </div>
        </div>

        {/* Diagnosis & Metric Readout */}
        <div className="p-5 rounded-xl bg-purple-50/70 dark:bg-stone-800 border border-purple-200 dark:border-purple-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-purple-800 dark:text-purple-300 font-bold">
                Wskaźnik Prawdziwej Sprawczości (Self-Efficacy Index):
              </div>
              <div className="font-mono text-3xl font-bold text-purple-900 dark:text-purple-100">
                {banduraEfficacy} %
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-rose-800 dark:text-rose-300 font-bold">
                Wskaźnik Kruchości i Zagrożenia Ego:
              </div>
              <div className="font-mono text-3xl font-bold text-rose-700 dark:text-rose-400">
                {fragilityScore} %
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-2 border-t border-purple-200 dark:border-purple-800 space-y-2">
            <p>
              <strong>Diagnoza Psychologiczna:</strong>{' '}
              {fragilityScore > 70 && banduraEfficacy < 60
                ? 'Profil Wysokiego Ryzyka Paraliżu: Wysoka warunkowość wartości połączona z niskim doświadczeniem mistrzostwa. Twój mózg traktuje każdą próbę jako zagrożenie egzystencjalne, co prowokuje prokrastynację lub ucieczkę.'
                : fragilityScore > 70 && banduraEfficacy >= 60
                ? 'Profil Kruchego Sukcesu: Mimo realnych kompetencji żyjesz w ciągłym stresie, ponieważ utożsamiasz swoją godność z brakiem potknięć (Syndrom Oszusta).'
                : 'Profil Stabilnej Sprawczości: Poczucie wartości jest odseparowane od chwilowych wyników. Potknięcie traktujesz jak informację zwrotną, co pozwala na szybką naukę.'}
            </p>
            <p>
              <strong>Kluczowy wniosek z Rozdziału 3:</strong> Poczucie własnej wartości powinno być <em>bezwarunkowe</em> (jesteś wart szacunku niezależnie od tego, czy wygrasz przetarg), natomiast poczucie skuteczności powinno być <em>realistycznie skalibrowane</em> do Twoich faktycznych umiejętności i historii treningu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
