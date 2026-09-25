import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, BookOpen, Sparkles, HelpCircle } from 'lucide-react';
import { ExamQuestion } from '../types/book';

const examQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Czym w świetle współczesnej neuronauki poznawczej są System 1 i System 2 opisane przez Daniela Kahnemana?',
    topic: 'System 1 i 2',
    sectionRef: 'Sekcja 1.2',
    options: [
      { label: 'A', text: 'Dwoma fizycznymi organami anatomicznymi zlokalizowanymi w lewej i prawej półkuli mózgu.', isCorrect: false },
      { label: 'B', text: 'Użytecznym modelem funkcjonalnym opisującym dwa różne tryby przetwarzania informacji (automatyczny vs analityczny).', isCorrect: true },
      { label: 'C', text: 'Podziałem na świadomość i podświadomość w ujęciu psychoanalizy freudowskiej.', isCorrect: false },
      { label: 'D', text: 'Teorią mówiącą, że ludzie dzielą się na czysto racjonalnych lub czysto emocjonalnych.', isCorrect: false }
    ],
    explanation: 'System 1 i 2 to modele edukacyjne i funkcjonalne. Mózg nie posiada dwóch oddzielnych „pudełek” — procesy te angażują rozproszone sieci neuronalne w całym mózgowiu.',
    keyTakeaway: 'Nie traktuj Systemu 1 i 2 jako fizycznych struktur, lecz jako różne stany pobudzenia sieci poznawczych.'
  },
  {
    id: 2,
    question: 'W zadaniu z kijem i piłką (kosztują razem 1,10 zł, kij jest o 1 zł droższy od piłki) intuicyjna odpowiedź „10 groszy” jest przykładem:',
    topic: 'Heurystyki Poznawcze',
    sectionRef: 'Sekcja 1.2',
    options: [
      { label: 'A', text: 'Głupoty lub braku wykształcenia matematycznego.', isCorrect: false },
      { label: 'B', text: 'Działania Systemu 1, który natychmiast podstawia najtańsze energetycznie przybliżenie bez analitycznej weryfikacji.', isCorrect: true },
      { label: 'C', text: 'Zaburzenia pamięci operacyjnej hipokampa.', isCorrect: false },
      { label: 'D', text: 'Wyczerpania wolicjonalnego wywołanego głodem.', isCorrect: false }
    ],
    explanation: 'System 1 błyskawicznie chwyta różnicę między liczbami 1,10 a 1,00 i podsuwa 10 gr. Dopiero zatrzymanie się i włączenie Systemu 2 pozwala zauważyć, że prawidłowa odpowiedź to 5 gr.',
    keyTakeaway: 'Szybka intuicja jest genialna w rozpoznawaniu twarzy, ale bezradna w precyzyjnej kalkulacji arytmetycznej.'
  },
  {
    id: 3,
    question: 'Jaka jest fundamentalna różnica pomiędzy FAKTEM a INTERPRETACJĄ?',
    topic: 'Fakt vs Interpretacja',
    sectionRef: 'Sekcja 1.3',
    options: [
      { label: 'A', text: 'Fakt to to, co czujemy w sercu, a interpretacja to to, co mówią inni ludzie.', isCorrect: false },
      { label: 'B', text: 'Fakt to obiektywne, weryfikowalne zdarzenie (np. treść SMS-a), a interpretacja to znaczenie, historię i motywy, które do niego dopisuje umysł.', isCorrect: true },
      { label: 'C', text: 'Fakt dotyczy przeszłości, a interpretacja dotyczy wyłącznie przyszłości.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, ponieważ każdy fakt jest tylko i wyłącznie subiektywną interpretacją.', isCorrect: false }
    ],
    explanation: 'Fakt to to, co zarejestrowałaby kamera wideo (np. „Szef napisał: musimy porozmawiać”). Interpretacja to fabuła wytworzona przez umysł (np. „Na pewno chce mnie zwolnić”).',
    keyTakeaway: 'Nigdy nie reaguj na interpretację tak, jakby była niepodważalnym faktem.'
  },
  {
    id: 4,
    question: 'Koncepcja „ograniczonej racjonalności” (Bounded Rationality) Herberta Simona dowodzi, że:',
    topic: 'Ograniczona Racjonalność',
    sectionRef: 'Sekcja 1.4',
    options: [
      { label: 'A', text: 'Ludzie są z natury irracjonalni i niezdolni do żadnego logicznego myślenia.', isCorrect: false },
      { label: 'B', text: 'Ludzki umysł dąży do decyzji zadowalających, a nie optymalnych, ze względu na ograniczenia czasu, uwagi i dostępu do informacji.', isCorrect: true },
      { label: 'C', text: 'Tylko osoby z wysokim IQ potrafią podejmować w pełni racjonalne decyzje.', isCorrect: false },
      { label: 'D', text: 'Mózg podejmuje decyzje losowo, podobnie jak rzut monetą.', isCorrect: false }
    ],
    explanation: 'Simon wykazał, że wobec oceanu danych i presji czasu mózg zadowala się opcją „wystarczająco dobrą” (satisficing), stosując ewolucyjne reguły kciuka.',
    keyTakeaway: 'Dążenie do perfekcyjnej decyzji za każdym razem prowadzi do paraliżu analitycznego.'
  },
  {
    id: 5,
    question: 'W słynnym eksperymencie z „Niewidzialnym Gorylem” (Simons & Chabris) ponad połowa badanych nie zauważyła postaci goryla, ponieważ:',
    topic: 'Selektywna Uwaga',
    sectionRef: 'Sekcja 1.5',
    options: [
      { label: 'A', text: 'Goryl poruszał się zbyt szybko, by ludzkie oko mogło go zarejestrować.', isCorrect: false },
      { label: 'B', text: 'Ich zasoby uwagi były w 100% pochłonięte trudnym zadaniem liczenia podań zawodników w białych koszulkach (ślepota pozauwagowa).', isCorrect: true },
      { label: 'C', text: 'Badani mieli wadę wzroku lub byli pod wpływem środków uspokajających.', isCorrect: false },
      { label: 'D', text: 'Światło w sali laboratoryjnej uniemożliwiało dostrzeżenie czarnego koloru.', isCorrect: false }
    ],
    explanation: 'Ślepota pozauwagowa (Inattentional Blindness) dowodzi, że samo patrzenie na obiekt nie gwarantuje jego dostrzeżenia — świadomość wymaga skupionej uwagi.',
    keyTakeaway: 'Możesz być ślepy na rzeczy oczywiste, a co gorsza — ślepy na własną ślepotę.'
  },
  {
    id: 6,
    question: 'Dlaczego twierdzenie „pamięć działa jak kamera wideo” jest całkowicie fałszywe?',
    topic: 'Pamięć Rekonstrukcyjna',
    sectionRef: 'Sekcja 1.6',
    options: [
      { label: 'A', text: 'Ponieważ kamera nagrywa dźwięk, a pamięć rejestruje wyłącznie obrazy statyczne.', isCorrect: false },
      { label: 'B', text: 'Ponieważ każde przypomnienie jest procesem aktywnej rekonstrukcji, podatnym na bieżący nastrój, kontekst i późniejsze sugestie.', isCorrect: true },
      { label: 'C', text: 'Ponieważ pamięć przechowuje tylko wspomnienia z ostatnich 7 dni.', isCorrect: false },
      { label: 'D', text: 'Ponieważ pamięć rejestruje wydarzenia w zwolnionym tempie.', isCorrect: false }
    ],
    explanation: 'Badania Elizabeth Loftus dowiodły, że mózg nie „odtwarza taśmy”, lecz za każdym razem na nowo składa wspomnienie z fragmentów, nierzadko wypełniając luki domysłami.',
    keyTakeaway: 'Różnice w pamięci między dwiema osobami nie oznaczają automatycznie, że jedna z nich celowo kłamie.'
  },
  {
    id: 7,
    question: 'Jaka jest kluczowa zasada dotycząca relacji między emocjami a prawdą o sytuacji?',
    topic: 'Rola Emocji',
    sectionRef: 'Sekcja 1.7',
    options: [
      { label: 'A', text: 'Emocje to zawsze błąd poznawczy, który należy całkowicie wyeliminować z życia.', isCorrect: false },
      { label: 'B', text: 'Emocja NIE JEST błędem, ale NIE JEST też automatycznie obiektywną prawdą o sytuacji — jest sygnałem o Twoim stanie wewnętrznym.', isCorrect: true },
      { label: 'C', text: 'Jeśli czujesz lęk, oznacza to w 100%, że jesteś w śmiertelnym niebezpieczeństwie.', isCorrect: false },
      { label: 'D', text: 'Logika i emocje wykluczają się wzajemnie i nigdy nie współpracują w mózgu.', isCorrect: false }
    ],
    explanation: 'Emocja informuje Cię o Twojej relacji z bodźcem i gotowości ciała do działania. Nie wolno jej lekceważyć, ale nie wolno też mylić jej z faktami o świecie zewnętrznym.',
    keyTakeaway: 'Pytaj: „Co czuję?” oraz „Czego jeszcze o tej sytuacji nie wiem?”.'
  },
  {
    id: 8,
    question: 'Badania nad zjawiskiem zwanym „Decision Fatigue” (zmęczenie decyzyjne) pokazują, że po całym dniu dokonywania trudnych wyborów mózg ma tendencję do:',
    topic: 'Obciążenie Poznawcze',
    sectionRef: 'Sekcja 1.8',
    options: [
      { label: 'A', text: 'Podejmowania coraz bardziej kreatywnych i ryzykownych decyzji.', isCorrect: false },
      { label: 'B', text: 'Wybierania opcji domyślnej, ucieczki w automatyzm lub zachowania status quo, bo to wymaga najmniej energii.', isCorrect: true },
      { label: 'C', text: 'Całkowitego wyłączenia ciała migdałowatego.', isCorrect: false },
      { label: 'D', text: 'Zwiększenia pamięci roboczej o 30%.', isCorrect: false }
    ],
    explanation: 'Gdy zasoby metaboliczne kory przedczołowej są na wyczerpaniu, mózg unika wysiłku i wybiera drogę najprostszą: odmowę, odłożenie na później lub nawyk.',
    keyTakeaway: 'Nie podejmuj kluczowych decyzji życiowych późnym wieczorem ani przy silnym głodzie.'
  },
  {
    id: 9,
    question: 'Dlaczego prokrastynacja (odkładanie zadań na później) NIE JEST problemem ze złym zarządzaniem czasem ani lenistwem?',
    topic: 'Prokrastynacja i Emocje',
    sectionRef: 'Sekcja 1.9',
    options: [
      { label: 'A', text: 'Ponieważ jest chorobą genetyczną, której nie da się zmienić.', isCorrect: false },
      { label: 'B', text: 'Ponieważ jest strategią radzenia sobie z trudnymi emocjami (lękiem przed oceną, porażką lub nudą) poprzez ucieczkę w natychmiastową ulgę.', isCorrect: true },
      { label: 'C', text: 'Ponieważ ludzie prokrastynujący nie posiadają kalendarzy ani zegarków.', isCorrect: false },
      { label: 'D', text: 'Ponieważ kora mózgowa wyłącza się całkowicie podczas czytania trudnych tekstów.', isCorrect: false }
    ],
    explanation: 'Dr Tim Pychyl udowodnił, że prokrastynacja to problem regulacji emocjonalnej: mózg ucieka przed dyskomfortem zadania ku natychmiastowemu znieczuleniu dopaminowemu.',
    keyTakeaway: 'Aby przestać odkładać zadanie, zaadresuj lęk przed niedoskonałością, a nie kupuj kolejny organizer.'
  },
  {
    id: 10,
    question: 'Jaka jest pierwsza i najważniejsza reguła autorskiego Protokołu Pauzy (STOP)?',
    topic: 'Protokół Pauzy',
    sectionRef: 'Sekcja 1.10',
    options: [
      { label: 'A', text: 'Natychmiast zaatakować rozmówcę ciętą ripostą.', isCorrect: false },
      { label: 'B', text: 'Zatrzymać automatyczny ruch, wziąć oddech fizjologiczny i dać korze przedczołowej 4–6 sekund na powrót do sterów.', isCorrect: true },
      { label: 'C', text: 'Przeprosić za wszystko i natychmiast wyjść z pomieszczenia.', isCorrect: false },
      { label: 'D', text: 'Wypić puszkę napoju energetycznego.', isCorrect: false }
    ],
    explanation: 'Zatrzymanie ciała i oddech stymulujący nerw błędny przerywa kaskadę odruchową i daje czas na aktywację hamowania w korze przedczołowej.',
    keyTakeaway: 'Pomiędzy bodźcem a Twoją reakcją istnieje przestrzeń — to w niej mieszka Twoja wolność wyboru.'
  },
  {
    id: 11,
    question: 'Co według badań Warda i współpracowników dzieje się z pamięcią roboczą, gdy wyciszony smartfon leży na biurku obok Ciebie?',
    topic: 'Uwaga i Środowisko',
    sectionRef: 'Sekcja 1.1',
    options: [
      { label: 'A', text: 'Zwiększa się jej pojemność, bo czujesz się bezpieczniej mając kontakt ze światem.', isCorrect: false },
      { label: 'B', text: 'Pojemność pamięci roboczej spada, ponieważ mózg musi bezustannie wydatkować energię na aktywne ignorowanie obecności telefonu.', isCorrect: true },
      { label: 'C', text: 'Nic się nie dzieje, o ile telefon nie wydaje dźwięków ani wibracji.', isCorrect: false },
      { label: 'D', text: 'Temperatura kory mózgowej wzrasta o 2 stopnie Celsjusza.', isCorrect: false }
    ],
    explanation: 'Zjawisko „Brain Drain” pokazuje, że sam widok smartfona pochłania zasoby uwagi mimowolnej. Wyniesienie go do drugiego pokoju natychmiast poprawia koncentrację.',
    keyTakeaway: 'Projektuj środowisko tak, by pokusy wymagały fizycznego wysiłku, a dobre nawyki działy się same.'
  },
  {
    id: 12,
    question: 'W studium przypadku Tomasza (rozmowa o podwyżkę z dyrektorem Wiktorem) głównym czynnikiem paraliżu decyzyjnego było:',
    topic: 'Studium Przypadku',
    sectionRef: 'Sekcja 1.12',
    options: [
      { label: 'A', text: 'Złe przygotowanie merytoryczne i brak danych finansowych.', isCorrect: false },
      { label: 'B', text: 'Przejęcie sterów przez lęk przed odrzuceniem w hierarchii stada i natychmiastowa kapitulacja przed mową ciała autorytetu.', isCorrect: true },
      { label: 'C', text: 'Brak znajomości języka angielskiego.', isCorrect: false },
      { label: 'D', text: 'Niski poziom glukozy po zjedzeniu owoców.', isCorrect: false }
    ],
    explanation: 'Tomasz miał twarde dane, ale asymetria statusu i 90 sekund wymuszonej ciszy wywołały uległość ewolucyjną (odruch Freeze/Fawn).',
    keyTakeaway: 'Gdy czujesz ścisk w gardle przed autorytetem, przypomnij sobie, że to biologiczny relikt plemienny, a nie dowód na brak racji.'
  },
  {
    id: 13,
    question: 'Gdy kupujesz w pośpiechu drogi płaszcz pod wpływem licznika „Oferta wygasa za 04:32 min!”, Twoim zachowaniem steruje:',
    topic: 'Sztuczny Niedobór',
    sectionRef: 'Sekcja 1.12',
    options: [
      { label: 'A', text: 'Chłodna kalkulacja stopy zwrotu z inwestycji tekstylnej.', isCorrect: false },
      { label: 'B', text: 'Sztucznie wywołany lęk przed utratą (Loss Aversion) i wyrzut dopaminy w jądrze półleżącym w odpowiedzi na obietnicę natychmiastowej nagrody.', isCorrect: true },
      { label: 'C', text: 'Zalecenie lekarza dermatologa.', isCorrect: false },
      { label: 'D', text: 'Działanie kory słuchowej na muzykę w butiku.', isCorrect: false }
    ],
    explanation: 'Sztuczna presja czasu wyłącza analityczną korę przedczołową, stawiając organizm w trybie walki o limitowany zasób (Scarcity).',
    keyTakeaway: 'Zasada 72 godzin jest najlepszą szczepionką przeciwko dopaminowej gorączce zakupowej.'
  },
  {
    id: 14,
    question: 'Dlaczego zrozumienie neurobiologicznych mechanizmów decyzji NIE ODBIERA człowiekowi wolnej woli i sprawczości?',
    topic: 'Sprawczość i Wolna Wola',
    sectionRef: 'Sekcja 1.13',
    options: [
      { label: 'A', text: 'Ponieważ biologia w ogóle nie ma wpływu na to, co robimy.', isCorrect: false },
      { label: 'B', text: 'Ponieważ świadomość automatyzmów pozwala je zauważyć w zarodku i wstawić świadomą pauzę pomiędzy bodziec a działanie.', isCorrect: true },
      { label: 'C', text: 'Ponieważ wolna wola jest iluzją i nic od nas nie zależy.', isCorrect: false },
      { label: 'D', text: 'Ponieważ mózg człowieka nigdy się nie uczy nowych zachowań.', isCorrect: false }
    ],
    explanation: 'Dopóki nie wiesz, jak działa automat w Twojej głowie, jesteś jego niewolnikiem. Gdy poznasz jego mechanizm, zyskujesz możliwość wyboru momentu interwencji.',
    keyTakeaway: 'Świadomość to nie utrata kontroli — to jedyny prawdziwy początek autonomii.'
  },
  {
    id: 15,
    question: 'Co jest ostatecznym celem przejścia przez Rozdział 1 książki?',
    topic: 'Podsumowanie',
    sectionRef: 'Sekcja 1.16',
    options: [
      { label: 'A', text: 'Zapamiętanie setek łacińskich nazw struktur mózgowych na pamięć.', isCorrect: false },
      { label: 'B', text: 'Nauczenie się zauważania własnego procesu myślowego i wykształcenie nawyku robienia pauzy przed reakcją.', isCorrect: true },
      { label: 'C', text: 'Wygranie każdej kłótni rodzinnej za pomocą manipulacji.', isCorrect: false },
      { label: 'D', text: 'Udowodnienie sobie, że nikt inny nie ma racji.', isCorrect: false }
    ],
    explanation: 'Celem książki jest przekształcenie czytelnika z biernego wykonawcy impulsów w świadomego architekta własnych decyzji życiowych.',
    keyTakeaway: 'Zatrzymaj się. Rozpoznaj fakt. Zauważ emocję. Wybierz świadomie.'
  }
];

export const ChapterOneFinalTest: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = examQuestions[currentIdx];
  const selectedOptionLabel = userAnswers[currentQ.id];
  const isAnswered = selectedOptionLabel !== undefined;

  const handleSelectOption = (label: string) => {
    if (isAnswered) return; // Prevent changing after revealing explanation
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: label
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIdx + 1 < examQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setUserAnswers({});
    setCurrentIdx(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  // Calculate final score
  let correctCount = 0;
  const topicStats: Record<string, { correct: boolean; sectionRef: string }> = {};

  examQuestions.forEach((q) => {
    const userChoice = userAnswers[q.id];
    const correctOpt = q.options.find((o) => o.isCorrect);
    const isCorrect = userChoice === correctOpt?.label;
    if (isCorrect) correctCount++;
    topicStats[q.topic] = { correct: isCorrect, sectionRef: q.sectionRef };
  });

  const percentage = Math.round((correctCount / examQuestions.length) * 100);

  return (
    <div className="my-10 rounded-2xl border border-stone-300 bg-white dark:bg-stone-900 shadow-xl overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <span className="text-xs font-mono uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            Egzamin Końcowy Rozdziału 1 • Sekcja 1.15
          </span>
          <span className="text-xs font-mono text-stone-400">
            {isFinished ? 'Test Ukończony' : `Pytanie ${currentIdx + 1} z ${examQuestions.length}`}
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-amber-50">
          Sprawdź Swój Aparat Decyzyjny (15 Pytań)
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
          Test weryfikuje zrozumienie kluczowych pojęć: od Systemu 1 i 2, przez uwagę i pamięć, po Protokół Pauzy. Każde pytanie zawiera obszerne wyjaśnienie.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        {!isFinished ? (
          <div className="space-y-6">
            {/* Progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-mono text-stone-500">
                <span>Postęp: {currentIdx + 1} / {examQuestions.length}</span>
                <span>{Math.round(((currentIdx + 1) / examQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-stone-100 dark:bg-stone-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-600 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / examQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-amber-800 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                  {currentQ.topic}
                </span>
                <span className="text-xs font-mono text-stone-400">
                  {currentQ.sectionRef}
                </span>
              </div>

              <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedOptionLabel === opt.label;
                  let btnStyle = 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/40 hover:bg-stone-100 dark:hover:bg-stone-800/60 text-stone-800 dark:text-stone-200';

                  if (showExplanation) {
                    if (opt.isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200 font-semibold';
                    } else if (isSelected && !opt.isCorrect) {
                      btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200';
                    } else {
                      btnStyle = 'opacity-50 border-stone-200 dark:border-stone-800';
                    }
                  }

                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectOption(opt.label)}
                      disabled={showExplanation}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all text-xs sm:text-sm font-sans flex items-start space-x-3 ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                        {opt.label}
                      </span>
                      <span className="leading-relaxed font-serif pt-0.5">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation box after selection */}
            {showExplanation && (
              <div className="space-y-4 pt-3 animate-fadeIn">
                <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 space-y-2 text-xs sm:text-sm">
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center space-x-1.5">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>Wyjaśnienie Merytoryczne:</span>
                  </div>
                  <p className="text-stone-800 dark:text-stone-200 font-serif leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  <div className="pt-2 border-t border-amber-200/60 dark:border-amber-800/40 text-[11px] font-mono text-amber-950 dark:text-amber-200">
                    <strong>Kluczowa lekcja:</strong> {currentQ.keyTakeaway}
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 hover:bg-amber-900 text-white dark:text-stone-900 font-mono text-xs sm:text-sm font-semibold transition flex items-center space-x-2"
                  >
                    <span>{currentIdx + 1 < examQuestions.length ? 'Następne Pytanie' : 'Zobacz Podsumowanie Testu'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Finished State Report */
          <div className="space-y-6 text-center py-2 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 max-w-lg mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 block mb-1">
                Twój Wynik Egzaminu Końcowego
              </span>
              <div className="font-serif font-bold text-5xl text-amber-950 dark:text-amber-100 my-2">
                {correctCount} / {examQuestions.length}
              </div>
              <div className="text-sm font-mono text-stone-600 dark:text-stone-400">
                Poprawne odpowiedzi: {percentage}%
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif mt-3 leading-relaxed">
                {percentage >= 80
                  ? 'Znakomity wynik! Opanowałeś fundamenty architektury decyzyjnej. Rozumiesz różnicę między faktem a interpretacją i potrafisz zastosować Protokół Pauzy.'
                  : 'Dobry początek! Wynik pokazuje, że Twój aparat poznawczy przyswoił kluczowe idee, ale warto wrócić do kilku sekcji, by ugruntować nawyki.'}
              </p>
            </div>

            {/* Review Recommendations */}
            <div className="text-left space-y-3 max-w-2xl mx-auto pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-bold block">
                Zalecenia i Sekcje do Powtórki:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(topicStats).map(([topic, data]) => (
                  <div
                    key={topic}
                    className={`p-3 rounded-xl border text-xs flex items-center justify-between space-x-2 ${
                      data.correct
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300'
                        : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/40 text-rose-900 dark:text-rose-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      {data.correct ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                      <span className="font-semibold truncate">{topic}</span>
                    </div>
                    <span className="font-mono text-[10px] text-stone-500 shrink-0">
                      {data.sectionRef}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                onClick={handleRestart}
                className="px-5 py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 text-white dark:text-stone-900 font-mono text-xs font-semibold transition flex items-center space-x-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Rozwiąż test ponownie</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
