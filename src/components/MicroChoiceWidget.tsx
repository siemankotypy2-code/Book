import React, { useState } from 'react';
import { Smartphone, BookOpen, Clock, AlertCircle, ArrowRight, RotateCcw, Brain, CheckCircle2 } from 'lucide-react';

interface ChoiceOutcome {
  id: string;
  label: string;
  actionText: string;
  mechanismsExplaining: {
    title: string;
    description: string;
  }[];
  shortTermConsequence: string;
  longTermConsequence: string;
  whatItReveals: string;
}

const choices: ChoiceOutcome[] = [
  {
    id: 'ignore_and_fight',
    label: 'Opcja A: Zaciśnij zęby i próbuj stłumić impuls czystą wolą',
    actionText: 'Michał odkłada telefon ekranem w dół na biurko i mówi sobie: „Nie dotknę go przez 2 godziny. Muszę być zdyscyplinowany”.',
    mechanismsExplaining: [
      {
        title: 'Biały Niedźwiedź (Teoria Ironicznego Procesu - Wegner)',
        description: 'Próba aktywnego NIE-myślenia o bodźcu (telefonie) zmusza mózg do ciągłego monitorowania, czy aby o nim nie myśli, co stale utrzymuje reprezentację telefonu w pamięci roboczej.'
      },
      {
        title: 'Wyczerpanie Zasobów Samokontroli',
        description: 'Utrzymywanie ciągłego oporu w korze przedczołowej jest biochemicznie kosztowne. Każda minuta takiego napięcia obniża rezerwę glukozowo-metaboliczną.'
      }
    ],
    shortTermConsequence: 'Przez pierwsze 12 minut Michał czyta ten sam akapit 4 razy, myśląc o powiadomieniu. O 20:45 sięga po telefon ze zdwojoną siłą.',
    longTermConsequence: 'Pojawia się narracja: „Nie mam silnej woli, jestem beznadziejny”. Poczucie winy zwiększa poziom kortyzolu, co w kolejnych dniach jeszcze bardziej utrudnia skupienie.',
    whatItReveals: 'Czysta siła woli w bezpośrednim starciu z obecnym bodźcem wzrokowym ma drastycznie ograniczony czas działania.'
  },
  {
    id: 'friction_design',
    label: 'Opcja B: Wprowadź fizyczne tarcie środowiskowe (Friction)',
    actionText: 'Michał wstaje, wyłącza dźwięk w telefonie i wynosi go do szafki w przedpokoju lub do drugiego pokoju. Wraca z szklanką wody i zamyka drzwi.',
    mechanismsExplaining: [
      {
        title: 'Usunięcie Wskazówki Sensorycznej (Out of Sight, Out of Mind)',
        description: 'Zgodnie z badaniami Warda i współpracowników (University of Texas), sama fizyczna obecność smartfona w zasięgu wzroku obniża dostępną pojemność pamięci roboczej, nawet gdy telefon jest wyciszony.'
      },
      {
        title: 'Reguła 20 Sekund (Shawn Achor)',
        description: 'Wymuszenie wstania z krzesła i przejścia do innego pokoju tworzy barierę czasowo-przestrzenną. Ten krótki dystans wystarcza, by automatyczny impuls Systemu 1 został przejęty przez świadomą refleksję Systemu 2.'
      }
    ],
    shortTermConsequence: 'Przez pierwsze 3 minuty pojawia się lekki niepokój („phantom vibration”), ale wobec braku telefonu ręka nie ma czego chwycić. Spokojna uwaga stabilizuje się po ok. 8 minutach.',
    longTermConsequence: 'Michał kończy planowany rozdział o 21:30. Nie musiał toczyć heroicznej walki ze sobą, bo załatwił to za niego projekt otoczenia.',
    whatItReveals: 'Mądrzy stratedzy nie polegają na silniejszej woli – polegają na inteligentniejszym projektowaniu środowiska.'
  },
  {
    id: 'rationalized_compromise',
    label: 'Opcja C: „Tylko 3 minuty i natychmiast wracam” (Kompromis Racjonalizacyjny)',
    actionText: 'Michał myśli: „Szybko sprawdzę, kto napisał. Jeśli to nic pilnego, od razu odkładam i zaczynam naukę z czystą głową”.',
    mechanismsExplaining: [
      {
        title: 'Zmienne Wzmocnienie Losowe (Variable Ratio Schedule)',
        description: 'Gdy odblokowujesz ekran, nie wiesz, co zobaczysz: nudną reklamę, lajka czy emocjonującą wiadomość. Ta nieprzewidywalność powoduje maksymalny wyrzut dopaminy w jądrze półleżącym.'
      },
      {
        title: 'Rozszerzenie Horyzontu Poznawczego (Cognitive Attentional Drift)',
        description: 'Odpisanie na jedną wiadomość otwiera pętlę asocjacyjną: zauważasz czerwony badge innej aplikacji, nagłówek artykułu, filmik. Koszt powrotu uwagi wynosi średnio 15–20 minut.'
      }
    ],
    shortTermConsequence: 'Zamiast 3 minut mija 48 minut. Michał budzi się o 21:35 ze zmęczeniem oczu, suchością w gardle i nietkniętym podręcznikiem.',
    longTermConsequence: 'Utrwalenie nawykowej ścieżki: „odblokowanie = znieczulenie”. Mózg uczy się, że obietnica „tylko 3 minuty” jest bezpieczną fasadą dla bezkarnej prokrastynacji.',
    whatItReveals: 'System 1 mistrzowsko racjonalizuje uleganie pokusie, przedstawiając kapitulację jako racjonalny plan.'
  }
];

export const MicroChoiceWidget: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const currentChoice = choices.find((c) => c.id === selectedId);

  return (
    <div className="my-8 rounded-2xl border border-stone-300 bg-white dark:bg-stone-900 shadow-md overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white p-5 sm:p-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-1">
          <Smartphone className="w-4 h-4" />
          <span>Interaktywny Dylemat Decyzyjny • Sekcja 1.1</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-50">
          Rozdroże Michała: Co zrobiłbyś na jego miejscu?
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Godzina 20:15. Michał ma przed sobą otwarty podręcznik i telefon leżący 15 cm od prawej dłoni. Właśnie rozbłysnął ekran z powiadomieniem. Wybierz strategię i zobacz, co stanie się z jego procesem decyzyjnym.
        </p>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        {/* Choices Buttons */}
        <div className="space-y-3">
          {choices.map((choice) => {
            const isSelected = choice.id === selectedId;
            return (
              <button
                key={choice.id}
                onClick={() => setSelectedId(choice.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3 ${
                  isSelected
                    ? 'bg-amber-50 dark:bg-stone-800 border-amber-600 dark:border-amber-500 shadow-sm'
                    : 'bg-stone-50 dark:bg-stone-950/60 hover:bg-stone-100 dark:hover:bg-stone-800/60 border-stone-200 dark:border-stone-800'
                }`}
              >
                <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                  isSelected ? 'border-amber-600 bg-amber-600 text-white' : 'border-stone-400'
                }`}>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div className="flex-1">
                  <div className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                    {choice.label}
                  </div>
                  <div className="text-xs text-stone-600 dark:text-stone-400 mt-1 font-sans">
                    {choice.actionText}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Outcome Details */}
        {currentChoice && (
          <div className="mt-6 pt-5 border-t border-stone-200 dark:border-stone-800 space-y-4 animate-fadeIn">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-400 font-bold flex items-center space-x-1.5">
              <Brain className="w-4 h-4" />
              <span>Anatomia Wyboru: Co naprawdę dzieje się w głowie?</span>
            </div>

            {/* Mechanisms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentChoice.mechanismsExplaining.map((mech, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <span className="font-mono text-xs font-bold text-stone-900 dark:text-stone-100 block mb-1">
                    {mech.title}
                  </span>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    {mech.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Consequences Box */}
            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-2 text-xs sm:text-sm">
              <div>
                <strong className="text-stone-900 dark:text-stone-100 font-semibold font-mono text-xs uppercase block text-amber-900 dark:text-amber-300">
                  Krótkoterminowy efekt (dzisiejszy wieczór):
                </strong>
                <span className="text-stone-700 dark:text-stone-300 font-serif">{currentChoice.shortTermConsequence}</span>
              </div>
              <div className="pt-2 border-t border-amber-200/60 dark:border-amber-800/40">
                <strong className="text-stone-900 dark:text-stone-100 font-semibold font-mono text-xs uppercase block text-amber-900 dark:text-amber-300">
                  Długofalowy wpływ na poczucie sprawczości:
                </strong>
                <span className="text-stone-700 dark:text-stone-300 font-serif">{currentChoice.longTermConsequence}</span>
              </div>
            </div>

            {/* Takeaway Insight */}
            <div className="p-3.5 rounded-lg bg-stone-900 text-stone-100 flex items-start space-x-2 text-xs font-sans">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 block mb-0.5">Wniosek do zapamiętania:</strong>
                <span>{currentChoice.whatItReveals}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
