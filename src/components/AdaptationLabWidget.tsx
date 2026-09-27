import React, { useState } from 'react';
import { 
  Compass, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  AlertCircle, 
  Target, 
  Layers, 
  BookOpen, 
  Check, 
  HelpCircle,
  Brain,
  Sliders,
  FileText,
  UserCheck,
  ChevronRight
} from 'lucide-react';

interface ExperimentItem {
  id: number;
  title: string;
  category: string;
  instruction: string;
  prompt: string;
  placeholder: string;
}

const EXPERIMENTS: ExperimentItem[] = [
  {
    id: 1,
    title: 'Eksperyment 1: Świadoma Zmiana Planu',
    category: 'Elastyczność Poznawcza',
    instruction: 'Zaplanuj prostą czynność (np. trasę spaceru, kolejność porannych zadań), a w połowie celowo zmień jeden element. Zarejestruj pierwszą automatyczną myśl.',
    prompt: 'Jaka była Twoja pierwsza myśl po zmianie? (np. irytacja, opór, ciekawość)',
    placeholder: 'Wpisz swoje obserwacje...'
  },
  {
    id: 2,
    title: 'Eksperyment 2: Decyzja przy 60% Danych',
    category: 'Tolerancja Niepewności',
    instruction: 'Podejmij bezpieczną decyzję (np. wybór książki, zamówienie obiadu) bez sprawdzania kolejnych opinii w internecie.',
    prompt: 'Jak wysoki był poziom dyskomfortu w skali 1–10 przed podjęciem decyzji i 10 minut po niej?',
    placeholder: 'Opisz poziom napięcia i rezultat...'
  },
  {
    id: 3,
    title: 'Eksperyment 3: Architektura Planu B',
    category: 'Redundancja Strategiczna',
    instruction: 'Dla najważniejszego zadania tego tygodnia przygotuj alternatywny wariant działania na wypadek niespodziewanego zakłócenia.',
    prompt: 'Jaki jest Twój Plan B i jaki wskaźnik uruchamia jego wdrożenie?',
    placeholder: 'Opisz Plan B...'
  },
  {
    id: 4,
    title: 'Eksperyment 4: Błąd bez Samoosądu',
    category: 'Rozdzielenie Tożsamości',
    instruction: 'Przy najbliższym drobnym potknięciu (rozlana woda, pomyłka w słowie) powiedz sobie: „To fakt fizyczny, moja wartość jest niezmienna” i przejdź do sprzątania bez komentarzy.',
    prompt: 'Co poczułeś, rezygnując z automatycznego narzekania na siebie?',
    placeholder: 'Twoja refleksja...'
  },
  {
    id: 5,
    title: 'Eksperyment 5: Pivot Narzędziowy',
    category: 'Plastyczność Metod',
    instruction: 'Wybierz jedną czynność, w której czujesz opór, i zmień wyłącznie narzędzie (np. notatki w telefonie zamień na kartkę i pióro).',
    prompt: 'Jak zmiana narzędzia wpłynęła na tarcie behawioralne?',
    placeholder: 'Wnioski z testu...'
  },
  {
    id: 6,
    title: 'Eksperyment 6: Asymetryczna Prośba o Wsparcie',
    category: 'Odporność Społeczna',
    instruction: 'Poproś bliską osobę o 10 minut wysłuchania Twojego dylematu z zastrzeżeniem: „Tylko mnie wysłuchaj, nie dawaj mi rad”.',
    prompt: 'Jak zareagował Twój układ nerwowy na bycie wysłuchanym bez presji na natychmiastowe rozwiązania?',
    placeholder: 'Refleksja po rozmowie...'
  },
  {
    id: 7,
    title: 'Eksperyment 7: Akceptacja Braku Kontroli (Strefa C)',
    category: 'Dychotomia Kontroli',
    instruction: 'Wskaż sprawę, na której wynik czekasz z niepokojem, i świadomie zadeklaruj: „To leży w Strefie C. Dziś oddaję kontrolę światu”.',
    prompt: 'Jak zmieniła się ilość Twojej energii na bieżące zadania w Strefie A?',
    placeholder: 'Twoje wnioski...'
  }
];

interface FactTestItem {
  id: number;
  text: string;
  correct: 'F' | 'I' | 'P' | 'H';
  explanation: string;
}

const FACT_TEST_ITEMS: FactTestItem[] = [
  { id: 1, text: '„Szef nie odpisał na mojego maila przez 6 godzin”.', correct: 'F', explanation: 'Fakt: mierzalny upływ czasu bez odpowiedzi w skrzynce.' },
  { id: 2, text: '„Szef uważa mój projekt za bezwartościowy”.', correct: 'I', explanation: 'Interpretacja: dopisanie motywacji i oceny bez dowodu.' },
  { id: 3, text: '„Na pewno zwolnią mnie przy najbliższej redukcji etatów”.', correct: 'P', explanation: 'Przewidywanie: katastroficzna projekcja przyszłości.' },
  { id: 4, text: '„Możliwe, że szef ma dziś napięty grafik spotkań zarządu”.', correct: 'H', explanation: 'Hipoteza robocza: prawdopodobne przypuszczenie do weryfikacji.' },
  { id: 5, text: '„Stan konta bankowego wykazuje 450 zł”.', correct: 'F', explanation: 'Fakt: surowa liczba na wyciągu bankowym.' },
  { id: 6, text: '„Jestem finansowym nieudacznikiem”.', correct: 'I', explanation: 'Interpretacja tożsamościowa: samobójcza ocena moralna.' },
  { id: 7, text: '„Zbankrutuję i wyląduję na ulicy”.', correct: 'P', explanation: 'Przewidywanie: skrajna katastrofizacja pomijająca alternatywy.' },
  { id: 8, text: '„Partner powiedział: Nie mam dziś siły rozmawiać”.', correct: 'F', explanation: 'Fakt: dosłowny cytat wypowiedzi.' },
  { id: 9, text: '„Partner mnie już nie kocha i planuje odejście”.', correct: 'P', explanation: 'Przewidywanie oparte na lęku przed odrzuceniem.' },
  { id: 10, text: '„Waga wskazuje 84.5 kg”.', correct: 'F', explanation: 'Fakt: odczyt czujnika nacisku.' },
  { id: 11, text: '„Nigdy nie schudnę, mam zniszczony metabolizm”.', correct: 'I', explanation: 'Interpretacja i fałszywa generalizacja.' },
  { id: 12, text: '„Klient zrezygnował po 2 tygodniach negocjacji”.', correct: 'F', explanation: 'Fakt: informacja o odmowie podpisania umowy.' },
  { id: 13, text: '„Wszyscy klienci w tej branży są nielojalni”.', correct: 'I', explanation: 'Interpretacja: błąd nadmiernego uogólnienia (Overgeneralization).' },
  { id: 14, text: '„Z powodu remontu pociąg ma 30 minut opóźnienia”.', correct: 'F', explanation: 'Fakt: komunikat dyspozytora PKP.' },
  { id: 15, text: '„Cały wyjazd jest zrujnowany i nie ma sensu jechać”.', correct: 'I', explanation: 'Interpretacja czarno-biała zniekształcająca rzeczywistość.' }
];

interface SimScenario {
  id: string;
  title: string;
  protagonist: string;
  goal: string;
  disruption: string;
  options: {
    label: string;
    action: string;
    consequence: string;
    cost: string;
    benefit: string;
    advice: string;
  }[];
}

const SIM_SCENARIOS: SimScenario[] = [
  {
    id: 'scen-1',
    title: 'Nieudana premiera aplikacji edukacyjnej',
    protagonist: 'Kamil (22 lata)',
    goal: 'Uruchomienie startupu i pozyskanie pierwszych 1000 użytkowników.',
    disruption: 'Awaria bazy danych w dniu premiery i 7-dniowa blokada aktualizacji przez sklep.',
    options: [
      {
        label: 'Opcja A: Zwiększyć presję i klepać kod przez 24h bez snu',
        action: 'Ignorowanie zmęczenia i próba zamaskowania usterki bez informowania użytkowników.',
        consequence: 'Kardynalne błędy w kodzie, załamanie nerwowe i utrata zaufania pierwszych klientów.',
        cost: 'Skrajny drenaż kory przedczołowej i ryzyko skasowania bazy.',
        benefit: 'Chwilowa iluzja, że coś się robi.',
        advice: 'Sztywność behawioralna pod wpływem lęku przed oceną.'
      },
      {
        label: 'Opcja B: Plan B — Wersja Webowa i Transparentny Komunikat',
        action: 'Zatrzymanie paniki, szczery e-mail z przeprosinami i link do prostej wersji przeglądarkowej dla 50 testerów.',
        consequence: 'Użytkownicy doceniają uczciwość, zgłaszają cenne uwagi i czekają na wersję mobilną.',
        cost: 'Konieczność przyznania się do usterki technicznej.',
        benefit: 'Ocalenie relacji z klientami, zebranie danych i stabilna naprawa kodu.',
        advice: 'Wzorowa elastyczność adaptacyjna (Agile resilience).'
      },
      {
        label: 'Opcja C: Skasować projekt i uznać się za nieudacznika',
        action: 'Uznanie usterki za dowód braku talentu i porzucenie programowania.',
        consequence: 'Półroczna depresja i utrata zainwestowanych 10 miesięcy pracy.',
        cost: 'Zniszczenie poczucia własnej sprawczości.',
        benefit: 'Brak natychmiastowego dyskomfortu związanego z naprawą.',
        advice: 'Pułapka wyuczonej bezradności i utożsamienia błędu z tożsamością.'
      }
    ]
  },
  {
    id: 'scen-2',
    title: 'Zawieszenie awansów w holdingu międzynarodowym',
    protagonist: 'Natalia (31 lat)',
    goal: 'Zdobycie stanowiska dyrektora operacyjnego.',
    disruption: 'Fuzja korporacyjna i zamrożenie wszystkich nominacji dyrektorskich w regionie.',
    options: [
      {
        label: 'Opcja A: Obsesyjne pisanie maili do zarządu w nocy',
        action: 'Próba wymuszenia wyjątku i udowodnienia swojej niezbędności poprzez pracę po 16 godzin.',
        consequence: 'Etykieta osoby roszczeniowej i wypalenie psychosomatyczne.',
        cost: 'Utrata zdrowia i godności zawodowej.',
        benefit: 'Brak.',
        advice: 'Próba bezpośredniego kontrolowania Strefy C (polityki zarządu).'
      },
      {
        label: 'Opcja B: Stoicka dychotomia kontroli i wyjście na rynek',
        action: 'Uznanie faktów, skupienie się na jakości bieżących projektów i przygotowanie portfolio dla konkurencji.',
        consequence: 'Otrzymanie oferty dyrektorskiej od innej firmy z 40% wyższą pensją po 3 tygodniach.',
        cost: 'Konieczność zmiany środowiska pracy.',
        benefit: 'Spokój wewnętrzny i dynamiczny rozwój kariery.',
        advice: 'Prawidłowe ulokowanie 100% energii w strefie własnych kompetencji.'
      }
    ]
  },
  {
    id: 'scen-3',
    title: '17 miesięcy nieskutecznej promocji w social media',
    protagonist: 'Karolina (25 lat)',
    goal: 'Sprzedaż autorskiego kursu ilustracji cyfrowej.',
    disruption: 'Organiczne rolki przynoszą 0–1 sprzedaży miesięcznie przy 4h pracy dziennie.',
    options: [
      {
        label: 'Opcja A: „Cisnąć mocniej” — publikować 5 rolek dziennie',
        action: 'Zwiększenie nakładu pracy na tę samą, nieskuteczną metodę.',
        consequence: 'Dalszy brak sprzedaży i narastający debet na koncie.',
        cost: 'Wyczerpanie kreatywne i frustracja.',
        benefit: 'Poczucie, że „nie poddała się”.',
        advice: 'Klasyczna pułapka eskalacji zaangażowania (upór zamiast elastyczności).'
      },
      {
        label: 'Opcja B: 90-stopniowy pivot na warsztaty stacjonarne',
        action: 'Zorganizowanie 2 bezpłatnych warsztatów w kawiarni artystycznej i zaoferowanie mentoringu na żywo.',
        consequence: 'Pozyskanie 8 płatnych uczniów i stabilny dochód w 6 tygodni.',
        cost: 'Wyjście ze strefy komfortu przed kamerą do żywych ludzi.',
        benefit: 'Realizacja wartości nauczania i wysoka rentowność.',
        advice: 'Mądra zmiana metody przy zachowaniu nadrzędnego celu.'
      }
    ]
  }
];

export const AdaptationLabWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lab' | 'dichotomy' | 'fact_test' | 'sim' | 'grit_audit' | 'protocol'>('lab');
  const [selectedExpId, setSelectedExpId] = useState<number>(1);
  const [userNotes, setUserNotes] = useState<Record<number, string>>({});
  
  // Dychotomia Kontroli Simulator (15 items)
  const [dichotomyState, setDichotomyState] = useState<Record<string, 'A' | 'B' | 'C' | null>>({
    'Moje merytoryczne przygotowanie do projektu': null,
    'Decyzja zarządu o przyznaniu budżetu': null,
    'Ton i kultura mojej wypowiedzi w konflikcie': null,
    'Nastrój i sympatie przełożonego': null,
    'Ilość snu i regeneracji przed trudnym dniem': null,
    'Stan gospodarki i inflacja': null,
    'Moja reakcja na ewentualne odrzucenie oferty': null,
    'Pogoda w dniu wyjazdu w góry': null,
    'Punktualność mojego przyjścia na spotkanie': null,
    'Czy druga osoba dotrzyma danego słowa': null,
    'Wybór zdrowego posiłku zamiast fast foodu': null,
    'Komentarze obcych ludzi pod moim postem': null,
    'Czas poświęcony na naukę nowego języka': null,
    'Algorytm polecający na Instagramie': null,
    'Moja decyzja o poproszeniu o pomoc w kryzysie': null
  });

  const correctDichotomy: Record<string, 'A' | 'B' | 'C'> = {
    'Moje merytoryczne przygotowanie do projektu': 'A',
    'Decyzja zarządu o przyznaniu budżetu': 'C',
    'Ton i kultura mojej wypowiedzi w konflikcie': 'A',
    'Nastrój i sympatie przełożonego': 'C',
    'Ilość snu i regeneracji przed trudnym dniem': 'A',
    'Stan gospodarki i inflacja': 'C',
    'Moja reakcja na ewentualne odrzucenie oferty': 'A',
    'Pogoda w dniu wyjazdu w góry': 'C',
    'Punktualność mojego przyjścia na spotkanie': 'A',
    'Czy druga osoba dotrzyma danego słowa': 'B',
    'Wybór zdrowego posiłku zamiast fast foodu': 'A',
    'Komentarze obcych ludzi pod moim postem': 'C',
    'Czas poświęcony na naukę nowego języka': 'A',
    'Algorytm polecający na Instagramie': 'C',
    'Moja decyzja o poproszeniu o pomoc w kryzysie': 'A'
  };

  // Fact Test State
  const [factAnswers, setFactAnswers] = useState<Record<number, 'F' | 'I' | 'P' | 'H'>>({});
  
  // Sim state
  const [selectedSimId, setSelectedSimId] = useState<string>('scen-1');
  const [chosenOptionIdx, setChosenOptionIdx] = useState<number | null>(null);

  // Grit audit state
  const [gritAnswers, setGritAnswers] = useState<{
    q1GoalImportant: boolean | null;
    q2MethodWorking: boolean | null;
    q3ResourcesAvailable: boolean | null;
    q4AlternativeExists: boolean | null;
  }>({
    q1GoalImportant: null,
    q2MethodWorking: null,
    q3ResourcesAvailable: null,
    q4AlternativeExists: null
  });

  const currentExp = EXPERIMENTS.find(e => e.id === selectedExpId) || EXPERIMENTS[0];
  const currentSim = SIM_SCENARIOS.find(s => s.id === selectedSimId) || SIM_SCENARIOS[0];

  const handleNoteChange = (text: string) => {
    setUserNotes(prev => ({ ...prev, [selectedExpId]: text }));
  };

  const handleSortItem = (itemKey: string, zone: 'A' | 'B' | 'C') => {
    setDichotomyState(prev => ({ ...prev, [itemKey]: zone }));
  };

  const handleFactAnswer = (questionId: number, answer: 'F' | 'I' | 'P' | 'H') => {
    setFactAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-amber-900/5 dark:bg-stone-900/90 border border-amber-800/20 dark:border-stone-800 font-sans shadow-md">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-900/10 dark:border-stone-800">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-amber-800 text-white shadow-sm">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-amber-800 dark:text-amber-400 block font-mono">
              Laboratorium Rozdziału 32
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 dark:text-stone-100">
              Interaktywne Laboratorium Adaptacji & Pracy z Niepewnością
            </h3>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center bg-stone-200/80 dark:bg-stone-800 p-1 rounded-xl text-xs font-semibold gap-1">
          <button
            onClick={() => setActiveTab('lab')}
            className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'lab' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs' : 'text-stone-600 dark:text-stone-400'}`}
          >
            7 Eksperymentów
          </button>
          <button
            onClick={() => setActiveTab('dichotomy')}
            className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'dichotomy' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs' : 'text-stone-600 dark:text-stone-400'}`}
          >
            Mapa Kontroli (15)
          </button>
          <button
            onClick={() => setActiveTab('fact_test')}
            className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'fact_test' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs' : 'text-stone-600 dark:text-stone-400'}`}
          >
            Fakt vs Projekcja
          </button>
          <button
            onClick={() => setActiveTab('sim')}
            className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'sim' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs' : 'text-stone-600 dark:text-stone-400'}`}
          >
            Symulator Zakłócenia
          </button>
          <button
            onClick={() => setActiveTab('grit_audit')}
            className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'grit_audit' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs' : 'text-stone-600 dark:text-stone-400'}`}
          >
            Wytrwać czy Zmienić?
          </button>
          <button
            onClick={() => setActiveTab('protocol')}
            className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'protocol' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs' : 'text-stone-600 dark:text-stone-400'}`}
          >
            Karta Kryzysu
          </button>
        </div>
      </div>

      {/* TAB 1: 7 EKSPERYMENTÓW */}
      {activeTab === 'lab' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {EXPERIMENTS.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`p-2.5 rounded-xl border text-xs font-bold transition text-center flex flex-col items-center gap-1 ${
                  selectedExpId === exp.id
                    ? 'bg-amber-800 text-white border-amber-900 shadow-sm'
                    : userNotes[exp.id]
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300'
                    : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                }`}
              >
                <span>Eksperyment {exp.id}</span>
                {userNotes[exp.id] && <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase font-bold tracking-wider text-amber-800 dark:text-amber-400">
                {currentExp.category}
              </span>
              <span className="text-xs text-stone-500 font-mono">ID: EXP-0{currentExp.id}</span>
            </div>

            <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
              {currentExp.title}
            </h4>

            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-amber-50/50 dark:bg-stone-900/50 p-4 rounded-xl border border-amber-800/10">
              <strong>Instrukcja wykonania:</strong> {currentExp.instruction}
            </p>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block">
                {currentExp.prompt}
              </label>
              <textarea
                value={userNotes[selectedExpId] || ''}
                onChange={(e) => handleNoteChange(e.target.value)}
                placeholder={currentExp.placeholder}
                rows={3}
                className="w-full p-3 text-sm rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-700"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MAPA KONTROLI (15 ITEMS) */}
      {activeTab === 'dichotomy' && (
        <div className="space-y-6">
          <div className="bg-amber-50 dark:bg-stone-900/60 p-4 rounded-2xl border border-amber-800/20 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            Przyporządkuj poniższe 15 elementów do trzech stref: <strong>[A] Strefa Kontroli Pełnej (100% ode mnie)</strong>, <strong>[B] Strefa Wpływu (częściowo)</strong> lub <strong>[C] Strefa Braku Kontroli (radykalna akceptacja)</strong>:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.keys(dichotomyState).map((itemKey) => {
              const currentChoice = dichotomyState[itemKey];
              const isDone = currentChoice !== null;
              const isCorrect = isDone && currentChoice === correctDichotomy[itemKey];

              return (
                <div
                  key={itemKey}
                  className={`p-3.5 rounded-xl bg-white dark:bg-stone-800 border transition flex flex-col justify-between gap-2.5 text-xs ${
                    isDone 
                      ? isCorrect 
                        ? 'border-emerald-400 bg-emerald-50/30 dark:bg-emerald-950/20' 
                        : 'border-amber-400 bg-amber-50/30 dark:bg-amber-950/20'
                      : 'border-stone-200 dark:border-stone-700'
                  }`}
                >
                  <span className="font-medium text-stone-800 dark:text-stone-200 leading-snug">{itemKey}</span>
                  <div className="flex items-center gap-1.5 shrink-0 justify-end">
                    <button
                      onClick={() => handleSortItem(itemKey, 'A')}
                      className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition ${
                        currentChoice === 'A' ? 'bg-emerald-700 text-white' : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                      }`}
                    >
                      A (Kontrola)
                    </button>
                    <button
                      onClick={() => handleSortItem(itemKey, 'B')}
                      className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition ${
                        currentChoice === 'B' ? 'bg-blue-700 text-white' : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                      }`}
                    >
                      B (Wpływ)
                    </button>
                    <button
                      onClick={() => handleSortItem(itemKey, 'C')}
                      className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition ${
                        currentChoice === 'C' ? 'bg-purple-700 text-white' : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                      }`}
                    >
                      C (Brak Kontroli)
                    </button>
                  </div>
                  {isDone && (
                    <div className="text-[11px] pt-1 text-stone-500 border-t border-stone-100 dark:border-stone-700">
                      Wzorzec: Strefa <strong>{correctDichotomy[itemKey]}</strong>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: TEST FAKT VS PROJEKCJA */}
      {activeTab === 'fact_test' && (
        <div className="space-y-4">
          <div className="bg-amber-50 dark:bg-stone-900/60 p-4 rounded-2xl border border-amber-800/20 text-xs text-stone-700 dark:text-stone-300">
            Wybierz właściwą kategorię dla każdego zdania: <strong>[F] Fakt</strong> (zapis zmysłowy), <strong>[I] Interpretacja</strong> (ocena), <strong>[P] Przewidywanie</strong> (projekcja w przyszłość) lub <strong>[H] Hipoteza</strong> (przypuszczenie do testu).
          </div>

          <div className="space-y-3">
            {FACT_TEST_ITEMS.map((item) => {
              const userAns = factAnswers[item.id];
              const isAnswered = userAns !== undefined;
              const isCorrect = userAns === item.correct;

              return (
                <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs sm:text-sm font-serif font-semibold text-stone-900 dark:text-stone-100">{item.text}</span>
                    <div className="flex gap-1 shrink-0">
                      {(['F', 'I', 'P', 'H'] as const).map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleFactAnswer(item.id, opt)}
                          className={`w-7 h-7 rounded-lg text-xs font-bold transition ${
                            userAns === opt 
                              ? isCorrect ? 'bg-emerald-700 text-white' : 'bg-rose-700 text-white'
                              : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  {isAnswered && (
                    <div className={`p-2 rounded-lg text-xs ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300' : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300'}`}>
                      <strong>{isCorrect ? 'Prawidłowo!' : `Poprawna odpowiedź: ${item.correct}.`}</strong> {item.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: SYMULATOR ZAKŁÓCENIA */}
      {activeTab === 'sim' && (
        <div className="space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {SIM_SCENARIOS.map((scen) => (
              <button
                key={scen.id}
                onClick={() => { setSelectedSimId(scen.id); setChosenOptionIdx(null); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                  selectedSimId === scen.id 
                    ? 'bg-amber-800 text-white border-amber-900' 
                    : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                }`}
              >
                {scen.title}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase font-bold text-amber-800 dark:text-amber-400">Bohater: {currentSim.protagonist}</span>
              <span className="text-xs text-stone-500 font-mono">SCENARIUSZ INTERAKTYWNY</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">{currentSim.title}</h4>
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900 border-l-4 border-amber-700 text-xs sm:text-sm space-y-1">
              <p><strong>Cel pierwotny:</strong> {currentSim.goal}</p>
              <p><strong>Nagłe zakłócenie:</strong> {currentSim.disruption}</p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider block">Wybierz swoją decyzję strategiczną:</span>
              {currentSim.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setChosenOptionIdx(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition flex items-center justify-between gap-3 ${
                    chosenOptionIdx === idx
                      ? 'bg-amber-100/70 dark:bg-amber-950/60 border-amber-600 text-amber-950 dark:text-amber-100 font-semibold'
                      : 'bg-stone-50 dark:bg-stone-900/50 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <span>{opt.label}</span>
                  <ChevronRight className="w-4 h-4 shrink-0 text-amber-700" />
                </button>
              ))}
            </div>

            {chosenOptionIdx !== null && (
              <div className="mt-4 p-4 rounded-xl bg-amber-50/80 dark:bg-stone-900 border border-amber-600/30 space-y-2 text-xs sm:text-sm animate-fadeIn">
                <p className="font-bold text-amber-950 dark:text-amber-200">Konsekwencja decyzji:</p>
                <p className="text-stone-700 dark:text-stone-300">{currentSim.options[chosenOptionIdx].consequence}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300">
                    <strong>Koszt:</strong> {currentSim.options[chosenOptionIdx].cost}
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300">
                    <strong>Zysk:</strong> {currentSim.options[chosenOptionIdx].benefit}
                  </div>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 italic pt-1">
                  Wgląd psychologiczny: {currentSim.options[chosenOptionIdx].advice}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 5: WYTRWAĆ CZY ZMIENIĆ METODĘ? */}
      {activeTab === 'grit_audit' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-amber-800 dark:text-amber-400">
            <Sliders className="w-4 h-4" />
            <span>Audyt Decyzyjny: Test 4 Pytań Nawigacyjnych</span>
          </div>

          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <span>1. Czy cel nadrzędny nadal odpowiada Twoim głębokim wartościom?</span>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => setGritAnswers(prev => ({ ...prev, q1GoalImportant: true }))}
                  className={`px-3 py-1 rounded-lg font-bold ${gritAnswers.q1GoalImportant === true ? 'bg-emerald-700 text-white' : 'bg-stone-200 dark:bg-stone-700'}`}
                >
                  TAK
                </button>
                <button
                  onClick={() => setGritAnswers(prev => ({ ...prev, q1GoalImportant: false }))}
                  className={`px-3 py-1 rounded-lg font-bold ${gritAnswers.q1GoalImportant === false ? 'bg-rose-700 text-white' : 'bg-stone-200 dark:bg-stone-700'}`}
                >
                  NIE
                </button>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <span>2. Czy dotychczasowa metoda przyniosła jakikolwiek mierzalny postęp w ostatnich 90 dniach?</span>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => setGritAnswers(prev => ({ ...prev, q2MethodWorking: true }))}
                  className={`px-3 py-1 rounded-lg font-bold ${gritAnswers.q2MethodWorking === true ? 'bg-emerald-700 text-white' : 'bg-stone-200 dark:bg-stone-700'}`}
                >
                  TAK
                </button>
                <button
                  onClick={() => setGritAnswers(prev => ({ ...prev, q2MethodWorking: false }))}
                  className={`px-3 py-1 rounded-lg font-bold ${gritAnswers.q2MethodWorking === false ? 'bg-rose-700 text-white' : 'bg-stone-200 dark:bg-stone-700'}`}
                >
                  NIE
                </button>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <span>3. Czy dysponujesz zasobami biologicznymi i finansowymi na dalszą walkę tą samą drogą?</span>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => setGritAnswers(prev => ({ ...prev, q3ResourcesAvailable: true }))}
                  className={`px-3 py-1 rounded-lg font-bold ${gritAnswers.q3ResourcesAvailable === true ? 'bg-emerald-700 text-white' : 'bg-stone-200 dark:bg-stone-700'}`}
                >
                  TAK
                </button>
                <button
                  onClick={() => setGritAnswers(prev => ({ ...prev, q3ResourcesAvailable: false }))}
                  className={`px-3 py-1 rounded-lg font-bold ${gritAnswers.q3ResourcesAvailable === false ? 'bg-rose-700 text-white' : 'bg-stone-200 dark:bg-stone-700'}`}
                >
                  NIE
                </button>
              </div>
            </div>
          </div>

          {gritAnswers.q1GoalImportant !== null && gritAnswers.q2MethodWorking !== null && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-stone-900 border border-amber-600/30 text-xs sm:text-sm space-y-2">
              <span className="font-bold text-amber-950 dark:text-amber-200 block">Rekomendacja Systemowa:</span>
              {gritAnswers.q1GoalImportant && !gritAnswers.q2MethodWorking && (
                <p className="text-stone-800 dark:text-stone-200">
                  <strong>Wykonaj Pivot Taktyczny (Plan B):</strong> Twój cel jest wartościowy, lecz metoda została sfalsyfikowana przez rynek lub biologię. Nie porzucaj marzenia — zmień narzędzie na inne (jak Karolina w Studium Przypadku III).
                </p>
              )}
              {gritAnswers.q1GoalImportant && gritAnswers.q2MethodWorking && (
                <p className="text-stone-800 dark:text-stone-200">
                  <strong>Wytrwaj i Chroń Regenerację:</strong> Twoja metoda działa, a cel ma sens. Upewnij się, że nie zaciągasz długu sennego i kontynuuj plan z cierpliwością.
                </p>
              )}
              {!gritAnswers.q1GoalImportant && (
                <p className="text-stone-800 dark:text-stone-200">
                  <strong>Mądra Rezygnacja z Celu:</strong> Jeśli cel stracił wewnętrzny sens i był realizowany wyłącznie z obawy przed opinią innych, rezygnacja z niego jest aktem najwyższej odwagi i dojrzałości.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* TAB 6: KARTA KRYZYSU I PROTOKÓŁ 60 SEKUND */}
      {activeTab === 'protocol' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-4">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Karta Szybkiego Reagowania Kryzysowego (Procedura 60 Sekund)</span>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border-l-4 border-amber-700">
              <strong className="text-stone-900 dark:text-stone-100">1. Pauza Fizjologiczna:</strong> Zakaz wysyłania wiadomości, maili i deklaracji przez pierwsze 10 minut. 3 głębokie wdechy z wydłużonym wydechem.
            </div>
            <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border-l-4 border-amber-700">
              <strong className="text-stone-900 dark:text-stone-100">2. Surowy Zapis Kamery:</strong> Zapisz fakt jednym zdaniem bez przymiotników („Pociąg ma 30 min spóźnienia” zamiast „Dzień zniszczony”).
            </div>
            <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border-l-4 border-amber-700">
              <strong className="text-stone-900 dark:text-stone-100">3. Wydzielenie Strefy A:</strong> Co w tej minucie zależy wyłącznie ode mnie?
            </div>
            <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border-l-4 border-amber-700">
              <strong className="text-stone-900 dark:text-stone-100">4. Mikrokrok (2 minuty):</strong> Wykonaj jedną fizyczną czynność przywracającą poczucie sprawczości.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
