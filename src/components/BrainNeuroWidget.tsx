import React, { useState } from 'react';
import { Activity, ShieldAlert, Sparkles, Brain, Zap, HeartPulse } from 'lucide-react';

interface BrainRegionInfo {
  id: string;
  name: string;
  polishName: string;
  location: string;
  everydayRole: string;
  manipulationVulnerability: string;
  howToStrengthen: string;
  activationLevel: 'Wysoka w stresie' | 'Uśpiona w zmęczeniu' | 'Pobudzana obietnicą nagrody' | 'Alarmowa';
  color: string;
}

const brainRegions: BrainRegionInfo[] = [
  {
    id: 'pfc',
    name: 'Prefrontal Cortex (PFC / dlPFC)',
    polishName: 'Grzbietowo-boczna Kora Przedczołowa',
    location: 'Przednia część płata czołowego tuż za czołem',
    everydayRole: 'Siedlisko woli, logicznego myślenia, liczenia budżetu, planowania i hamowania impulsów. To Twój racjonalny "dorosły w pokoju".',
    manipulationVulnerability: 'Zużywa gigantyczne ilości glukozy. Pod wpływem zmęczenia, głodu lub stresu wyłącza się, oddając stery prymitywnym emocjom.',
    howToStrengthen: 'Wysypianie się (7-8h), technika 10-10-10, przerwy w pracy umysłowej co 90 minut, dieta stabilizująca poziom cukru.',
    activationLevel: 'Uśpiona w zmęczeniu',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'amygdala',
    name: 'Amygdala',
    polishName: 'Ciało Migdałowate',
    location: 'Głęboko w płacie skroniowym, część układu limbicznego',
    everydayRole: 'Wewnętrzny radar zagrożeń. Błyskawicznie wykrywa niebezpieczeństwo fizyczne i społeczne (krytykę, odrzucenie, utratę statusu).',
    manipulationVulnerability: 'Reaguje w 100 milisekund — szybciej niż świadomość. Manipulatorzy straszą ("zwolnią cię", "wszyscy się dowiedzą"), by wywołać tzw. Amygdala Hijack.',
    howToStrengthen: 'Oddech fizjologiczny (Physiological Sigh), werbalizowanie emocji (Affect Labeling: "czuję teraz lęk"), uziemienie somatyczne 5-4-3-2-1.',
    activationLevel: 'Alarmowa',
    color: 'from-rose-600 to-red-700'
  },
  {
    id: 'nacc',
    name: 'Nucleus Accumbens (NAcc)',
    polishName: 'Jądro Półleżące (Układ Nagrody)',
    location: 'Podkorowa część brzusznego prążkowia',
    everydayRole: 'Silnik pożądania dopaminowego. Reaguje na obietnicę przyjemności, rabaty, powiadomienia w telefonie i słodycze.',
    manipulationVulnerability: 'Podatne na sztuczny niedobór i odliczające zegary w e-commerce. Wierzy, że kolejny zakup przyniesie wieczne szczęście.',
    howToStrengthen: 'Reguła 72 godzin przed zakupem, cyfrowy detoks dopaminowy, przeliczanie ceny rzeczy na godziny własnej pracy.',
    activationLevel: 'Pobudzana obietnicą nagrody',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'insula',
    name: 'Insula (Wyspa)',
    polishName: 'Kora Wyspowa',
    location: 'Głęboko w bruździe bocznej mózgu',
    everydayRole: 'Ośrodek interocepcji (czucia ciała) oraz wstrętu fizycznego i moralnego. To ona wywołuje "ścisk w żołądku" i mdłości w niesprawiedliwej sytuacji.',
    manipulationVulnerability: 'Kiedy jesteś manipulowany, wyspa wysyła sygnały intuicji, które często racjonalizujesz i tłumisz w głowie.',
    howToStrengthen: 'Praktyka uważności somatycznej (Body Scan), zaufanie do reakcji fizjologicznych ciała przy zawieraniu umów.',
    activationLevel: 'Wysoka w stresie',
    color: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'hippocampus',
    name: 'Hippocampus',
    polishName: 'Hipokamp',
    location: 'Przyśrodkowy płat skroniowy',
    everydayRole: 'Bibliotekarz pamięci długotrwałej i tworzenie kontekstu sytuacyjnego. Porównuje to, co dzieje się teraz, ze wspomnieniami.',
    manipulationVulnerability: 'Chroniczny kortyzol niszczy jego neurony. W gaslightingu manipulator wmawia ofierze, że jej hipokamp przekłamuje fakty.',
    howToStrengthen: 'Prowadzenie pisemnego dziennika faktów, ruch aerobowy (stymuluje neurogenezę i BDNF), redukcja przewlekłego stresu.',
    activationLevel: 'Uśpiona w zmęczeniu',
    color: 'from-purple-600 to-violet-800'
  }
];

export const BrainNeuroWidget: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<BrainRegionInfo>(brainRegions[0]);

  return (
    <div className="my-8 rounded-2xl border border-amber-900/15 bg-gradient-to-br from-amber-50/70 via-stone-50 to-orange-50/40 p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between border-b border-amber-900/10 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-amber-600/10 text-amber-800">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-stone-900 tracking-tight">
              Interaktywny Skaner Neuroarchitektury Decyzji
            </h3>
            <p className="text-xs text-stone-600 font-sans">
              Kliknij strukturę mózgową, aby sprawdzić jej rolę w codziennych wyborach i podatność na manipulację
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center text-xs font-mono uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full">
          Atlas Neurobiologiczny
        </span>
      </div>

      {/* Region Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
        {brainRegions.map((region) => {
          const isSelected = selectedRegion.id === region.id;
          return (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              className={`text-left p-3 rounded-xl transition-all border ${
                isSelected
                  ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-md translate-y-[-1px]'
                  : 'bg-white/80 hover:bg-stone-100/80 text-stone-800 border-stone-200'
              }`}
            >
              <div className="text-[11px] font-mono uppercase tracking-wider opacity-70 mb-1">
                {region.name.split(' ')[0]}
              </div>
              <div className="text-xs sm:text-sm font-semibold truncate">
                {region.polishName}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail Card for Selected Region */}
      <div className="bg-white/90 rounded-xl p-5 md:p-6 border border-amber-900/10 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-xs font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
              Lokalizacja: {selectedRegion.location}
            </span>
            <h4 className="font-serif text-2xl font-bold text-stone-900 mt-1">
              {selectedRegion.polishName}
            </h4>
            <div className="text-sm font-sans text-stone-500 italic">
              {selectedRegion.name}
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
            <Activity className="w-4 h-4 text-amber-600 animate-pulse" />
            <span className="text-xs font-medium text-stone-700">
              Stan: <strong className="text-stone-900">{selectedRegion.activationLevel}</strong>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
            <div className="flex items-center space-x-2 text-blue-900 font-semibold text-xs uppercase tracking-wider mb-2 font-mono">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>Rola w Życiu Codziennym</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              {selectedRegion.everydayRole}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100">
            <div className="flex items-center space-x-2 text-rose-900 font-semibold text-xs uppercase tracking-wider mb-2 font-mono">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Jak Jest Hakowana przez Innych</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              {selectedRegion.manipulationVulnerability}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
            <div className="flex items-center space-x-2 text-emerald-900 font-semibold text-xs uppercase tracking-wider mb-2 font-mono">
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              <span>Jak Ją Wzmocnić i Chronić</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              {selectedRegion.howToStrengthen}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
