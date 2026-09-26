import React, { useState } from 'react';
import { Users, Eye, RotateCcw, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, Shield } from 'lucide-react';

interface Dilemma {
  id: string;
  title: string;
  context: string;
  groupChoice: string;
  groupPressureQuote: string;
  options: {
    id: string;
    text: string;
    type: 'conformity' | 'autonomous' | 'rebellious';
    resultTitle: string;
    psychologicalAnalysis: string;
    neuroMechanism: string;
  }[];
}

const dilemmas: Dilemma[] = [
  {
    id: 'dil-1',
    title: 'Dylemat 1: Spotkanie Zarządu i Wadliwy Raport',
    context: 'Na kluczowym zebraniu projektowym dyrektor i czterech starszych inżynierów zachwyca się projektem, w którym zauważyłeś krytyczny błąd obliczeniowy grożący awarią.',
    groupChoice: 'Wszyscy jednogłośnie głosują za zatwierdzeniem bez uwag.',
    groupPressureQuote: 'Dyrektor: „Wszyscy widzimy, że robota jest wykonana perfekcyjnie. Czy ktoś ma jakiekolwiek wątpliwości, czy możemy podpisywać?”.',
    options: [
      {
        id: 'opt-1',
        text: 'Zmilcz i podnieś rękę za zatwierdzeniem: „Skoro oni nie widzą problemu, pewnie to ja się mylę”.',
        type: 'conformity',
        resultTitle: 'Konformizm Normatywny i Niewiedza Wielu',
        psychologicalAnalysis: 'Lęk przed wykluczeniem społecznym (Social Exclusion Pain) przeważył nad racjonalną oceną danych. Wpadłeś w syndrom myślenia grupowego.',
        neuroMechanism: 'Przednia kora zakrętu obręczy (dACC) zarejestrowała dyskomfort wyłamania się, stłumiając aktywność analityczną dlPFC.'
      },
      {
        id: 'opt-2',
        text: 'Zastosuj pauzę i zadaj pytanie merytoryczne: „Panie dyrektorze, w punkcie 4 zauważyłem odchylenie o 12%. Czy możemy wspólnie zweryfikować ten parametr przed podpisem?”.',
        type: 'autonomous',
        resultTitle: 'Asertywna Niezależność Poznawcza',
        psychologicalAnalysis: 'Rozbiłeś iluzję jednomyślności (efekt jednego sojusznika Ascha). Pozwoliłeś innym członkom grupy, którzy również mieli wątpliwości, na poparcie Twojego pytania.',
        neuroMechanism: 'Grzbietowo-boczna kora przedczołowa (dlPFC) utrzymała kontrolę wykonawczą mimo zalewu noradrenaliny.'
      },
      {
        id: 'opt-3',
        text: 'Zaatakuj ze złością: „Czy wy wszyscy jesteście ślepi?! Przecież ten system wybuchnie po tygodniu!”.',
        type: 'rebellious',
        resultTitle: 'Agresywna Reaktywność (Porwanie Afektywne)',
        psychologicalAnalysis: 'Choć miałeś rację merytoryczną, forma ataku uruchomiła mechanizmy obronne u całej grupy. Zamiast zająć się błędem, zebrani skupią się na ukaraniu Twojej bezczelności.',
        neuroMechanism: 'Amygdala hijack wywołał zachowanie bojowe, niszcząc Twoją wiarygodność źródła (etos).'
      }
    ]
  },
  {
    id: 'dil-2',
    title: 'Dylemat 2: Incydent na Ulicy (Efekt Widza)',
    context: 'Idziesz ruchliwą ulicą w centrum handlowym. Starszy mężczyzna nagle potyka się i upada na posadzkę, łapiąc się za klatkę piersiową. Obok przechodzą dziesiątki ludzi, nikt się nie zatrzymuje.',
    groupChoice: 'Tłum przyspiesza kroku, patrząc przed siebie lub w telefony.',
    groupPressureQuote: 'Przechodzień obok: „Pewnie pijany albo bezdomny, ochrona zaraz podejdzie...”.',
    options: [
      {
        id: 'opt-2-1',
        text: 'Idź dalej jak inni: „Przecież inni są bliżej, ochrona na pewno widzi to na kamerach”.',
        type: 'conformity',
        resultTitle: 'Rozproszenie Odpowiedzialności i Znieczulenie Tłumu',
        psychologicalAnalysis: 'Podzieliłeś 100% odpowiedzialności moralnej przez liczbę przechodniów. Zadziałało zjawisko niewiedzy wielu: spokój innych zinterpretowałeś jako brak zagrożenia.',
        neuroMechanism: 'Brak bezpośredniej stymulacji neuronów lustrzanych z powodu unikania kontaktu wzrokowego z ofiarą.'
      },
      {
        id: 'opt-2-2',
        text: 'Zatrzymaj się, podejmij interwencję i wskaż konkretnego świadka do pomocy.',
        type: 'autonomous',
        resultTitle: 'Przełamanie Efektu Widza',
        psychologicalAnalysis: 'Pojedynczy akt odwagi natychmiast zmienia normę sytuacyjną. Kiedy jedna osoba klęka przy poszkodowanym, statystycznie w ciągu 10 sekund dołącza 2–3 kolejnych pomocników.',
        neuroMechanism: 'Przednia wyspa i układ empatii poznawczej przezwyciężyły behawioralne zahamowanie społeczne.'
      }
    ]
  }
];

export const SocialInfluenceLab: React.FC = () => {
  const [activeDilemmaIdx, setActiveDilemmaIdx] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  const dilemma = dilemmas[activeDilemmaIdx];
  const chosenOpt = dilemma.options.find((o) => o.id === selectedChoiceId);

  const handleNext = () => {
    setSelectedChoiceId(null);
    setActiveDilemmaIdx((prev) => (prev + 1) % dilemmas.length);
  };

  return (
    <div className="my-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-600/30 text-stone-900 dark:text-stone-100 font-sans shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold">
          <Users className="w-4 h-4 text-amber-700" />
          <span>Laboratorium Społeczne: Eksperyment Presji i Zmiany Perspektywy</span>
        </div>
        <span className="text-xs font-mono text-stone-500">
          Scenariusz {activeDilemmaIdx + 1} z {dilemmas.length}
        </span>
      </div>

      <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3">
        {dilemma.title}
      </h3>

      <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-4">
        {dilemma.context}
      </p>

      {/* Pressure Box */}
      <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-600/20 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 dark:text-amber-300 mb-1">
          <Eye className="w-4 h-4" />
          <span>Presja Grupy: {dilemma.groupChoice}</span>
        </div>
        <p className="text-xs sm:text-sm italic text-stone-800 dark:text-stone-200">
          {dilemma.groupPressureQuote}
        </p>
      </div>

      {/* Choices */}
      <div className="space-y-3 mb-6">
        <span className="text-xs font-mono uppercase text-stone-500 font-bold block">
          Jak reagujesz w tej milisekundzie?
        </span>
        {dilemma.options.map((opt) => {
          const isSelected = opt.id === selectedChoiceId;
          return (
            <button
              key={opt.id}
              onClick={() => setSelectedChoiceId(opt.id)}
              className={`w-full text-left p-4 rounded-2xl border transition ${
                isSelected
                  ? 'bg-amber-800 text-white border-amber-900 shadow-md font-medium'
                  : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 border-stone-300 dark:border-stone-700'
              }`}
            >
              <div className="text-sm leading-relaxed">{opt.text}</div>
            </button>
          );
        })}
      </div>

      {/* Feedback Panel */}
      {chosenOpt && (
        <div className="p-5 rounded-2xl bg-white dark:bg-stone-800/90 border border-stone-300 dark:border-stone-700 space-y-3 animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-600" />
            <h4 className="font-bold text-base text-stone-900 dark:text-stone-100">
              {chosenOpt.resultTitle}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            <strong className="text-stone-900 dark:text-stone-100">Mechanizm psychologiczny: </strong>
            {chosenOpt.psychologicalAnalysis}
          </p>
          <div className="p-3 rounded-xl bg-amber-50/80 dark:bg-stone-900/60 border border-amber-600/20 text-xs text-amber-900 dark:text-amber-300 font-mono">
            <strong>Ślad neuronalny: </strong> {chosenOpt.neuroMechanism}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-amber-800 text-white text-xs font-semibold hover:bg-amber-900 transition flex items-center gap-1.5"
            >
              <span>Następny scenariusz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
