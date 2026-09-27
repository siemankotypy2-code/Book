import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTwentySixExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Dlaczego samo merytoryczne zrozumienie problemu psychologicznego i wiedza o nim najczęściej NIE wystarczają do dokonania trwałej zmiany zachowania?',
    topic: 'Zrozumienie a Zmiana Zachowania',
    sectionRef: 'Sekcja 26.1',
    options: [
      { label: 'A', text: 'Ponieważ wiedza jest zapisana w korze deklaratywnej, a nawykowe zachowanie jest obsługiwane przez podkorowe jądra podstawy i obwody dopaminergiczne, które zmieniają się pod wpływem powtarzalnego treningu w środowisku, a nie samej teorii.', isCorrect: true },
      { label: 'B', text: 'Ponieważ ludzie nie chcą się zmieniać z natury.', isCorrect: false },
      { label: 'C', text: 'Ponieważ wiedza wyłącza działanie układu nerwowego.', isCorrect: false },
      { label: 'D', text: 'Ponieważ zmiana jest możliwa wyłącznie po ukończeniu 50. roku życia.', isCorrect: false }
    ],
    explanation: 'Wiedza bez wdrożenia treningu behawioralnego i modyfikacji wyzwalaczy środowiskowych pozostaje bezsilną deklaracją w pamięci roboczej.',
    keyTakeaway: 'Zrozumienie daje mapę, ale dopiero powtarzalne działanie i zmiana środowiska torują nową ścieżkę neuronową.'
  },
  {
    id: 2,
    question: 'Na czym polega koncepcja Intencji Implementacyjnych „Jeśli-To” (Implementation Intentions, Peter Gollwitzer)?',
    topic: 'Intencje Implementacyjne Gollwitzera',
    sectionRef: 'Sekcja 26.5',
    options: [
      { label: 'A', text: 'Zaprogramowanie automatycznej reakcji w postaci sztywnej reguły: „JEŚLI pojawi się sytuacja X (bodziec/wyzwalacz), TO wykonam zachowanie Y”, co odciąża korę przedczołową z konieczności podejmowania decyzji w chwile słabości.', isCorrect: true },
      { label: 'B', text: 'Głośne powtarzanie życzeń sukcesu przed snem.', isCorrect: false },
      { label: 'C', text: 'Planowanie celów bez określania terminu ich realizacji.', isCorrect: false },
      { label: 'D', text: 'Czekanie na odpowiedni poziom natchnienia i energii.', isCorrect: false }
    ],
    explanation: 'Reguła „Jeśli-To” deleguje kontrolę wykonawczą na wyzwalacz środowiskowy, tworząc skrót proceduralny w pamięci operacyjnej.',
    keyTakeaway: 'Nie podejmuj decyzji w chwile słabości — zaprogramuj swoją reakcję wcześniej za pomocą reguły „Jeśli-To”.'
  },
  {
    id: 3,
    question: 'W Inżynierii Środowiska (Choice Architecture & Friction Engineering) kluczową zasadą wprowadzania nowej rutyny jest:',
    topic: 'Architektura Wyboru i Tarcie Środowiskowe',
    sectionRef: 'Sekcja 26.3',
    options: [
      { label: 'A', text: 'Zwiększenie oporu (frictional resistance) dla zachowań niepożądanych oraz maksymalne ułatwienie i wygładzenie ścieżki dla zachowań pożądanych.', isCorrect: true },
      { label: 'B', text: 'Kupowanie drogich gadżetów motywacyjnych.', isCorrect: false },
      { label: 'C', text: 'Poleganie wyłącznie na obietnicach składanych bliskim.', isCorrect: false },
      { label: 'D', text: 'Maksymalne utrudnienie dostępu do zdrowych nawyków.', isCorrect: false }
    ],
    explanation: 'Jeśli chcesz mniej przeglądać telefon, schowaj go do innego pokoju (zwiększ tarcie). Jeśli chcesz biegać rano, połów buty przy łóżku (zmniejsz tarcie).',
    keyTakeaway: 'Projektuj środowisko tak, by właściwe zachowanie było najprostszą ścieżką oporu.'
  },
  {
    id: 4,
    question: 'Czym różni się potknięcie (Lapse) od pełnego nawrotu do starego schematu (Relapse) w procesie zmiany?',
    topic: 'Potknięcie a Nawrót w Procesie Zmiany',
    sectionRef: 'Sekcja 26.7',
    options: [
      { label: 'A', text: 'Potknięcie to jednorazowy, incydentalny błąd (np. zjedzenie ciastka), podczas gdy nawrót to powrót do całkowitego, utrwalonego dawnego wzorca z powodu traktowania potknięcia jako katastrofy (Efekt „A niech to!”).', isCorrect: true },
      { label: 'B', text: 'Nie ma żadnej różnicy, każde potknięcie oznacza całkowite przekreślenie całego dotychczasowego postępu.', isCorrect: false },
      { label: 'C', text: 'Nawrót występuje tylko u sportowców zawodowych.', isCorrect: false },
      { label: 'D', text: 'Potknięcie jest zjawiskiem czysto neurologicznym bez udziału zachowania.', isCorrect: false }
    ],
    explanation: 'To nie samo jednorazowe potknięcie niszczy zmianę, lecz samobiczowanie i katastrofizacja („Skoro uległem raz, cała praca poszła na marne, więc mogę zjeść całą blachę”).',
    keyTakeaway: 'Potknięcie jest informacją zwrotną o luce w strategii, a nie wyrokiem na Twoim charakterze.'
  },
  {
    id: 5,
    question: 'Jaką rolę w budowaniu nowej, trwałej tożsamości odgrywają mikro-nawyki (Atomic Habits)?',
    topic: 'Mikro-nawyki i Tożsamość',
    sectionRef: 'Sekcja 26.4',
    options: [
      { label: 'A', text: 'Każde powtórzone mikro-działanie jest głosem oddanym na nową wersję siebie, dostarczającym mózgowi niezaprzeczalnych dowodów empirycznych na zmianę kim jesteśmy.', isCorrect: true },
      { label: 'B', text: 'Mikro-nawyki nie mają znaczenia, liczą się tylko olbrzymie, rewolucyjne zrywy.', isCorrect: false },
      { label: 'C', text: 'Mikro-nawyki wyczerpują całkowicie zapasy glukozy w mózgu.', isCorrect: false },
      { label: 'D', text: 'Mikro-nawyki działają wyłącznie na dzieci.', isCorrect: false }
    ],
    explanation: 'Przeczytanie 2 stron dziennie nie czyni z Ciebie od razu pisarza, ale 300 powtórzeń buduje tożsamość człowieka, który czyta i tworzy.',
    keyTakeaway: 'Nie zmieniaj wszystkiego naraz — buduj nową tożsamość mikrokrokami.'
  },
  {
    id: 6,
    question: 'Dlaczego sama czysta motywacja jest niestabilnym i niewiarygodnym fundamentem długoterminowej zmiany?',
    topic: 'Niestabilność Motywacji vs Niezawodność Systemu',
    sectionRef: 'Sekcja 26.8',
    options: [
      { label: 'A', text: 'Ponieważ motywacja jest zmiennym stanem afektywno-dopaminergicznym, podatnym na zmęczenie, stres i spadek nastroju, podczas gdy nawykowy system działa niezależnie od samopoczucia.', isCorrect: true },
      { label: 'B', text: 'Ponieważ motywacja znika całkowicie po ukończeniu 30. roku życia.', isCorrect: false },
      { label: 'C', text: 'Ponieważ motywacja niszczy układ immunologiczny.', isCorrect: false },
      { label: 'D', text: 'Ponieważ motywacja wymaga ciągłego zażywania suplementów.', isCorrect: false }
    ],
    explanation: 'Gdy polegasz na motywacji, działasz tylko w dobre dni. Gdy polegasz na prostym systemie i rutynie, działasz również wtedy, gdy czujesz zmęczenie.',
    keyTakeaway: 'Nie podnosisz się do poziomu swoich motywacji — opadasz do poziomu swoich przygotowanych systemów.'
  },
  {
    id: 7,
    question: 'Na czym polega postawa Samowspółczucia (Self-Compassion, Kristin Neff) w reagowaniu na niepowodzenie w procesie zmiany?',
    topic: 'Self-Compassion w Zmianie',
    sectionRef: 'Sekcja 26.7',
    options: [
      { label: 'A', text: 'Traktowanie siebie z życzliwą dociekliwością wspierającego mentora zamiast samobiczowania, uznanie omylności za część ludzkiej natury i szybki powrót do planu.', isCorrect: true },
      { label: 'B', text: 'Pobłażliwość dla każdego błędu i całkowita rezygnacja z jakichkolwiek wymagań wobec siebie.', isCorrect: false },
      { label: 'C', text: 'Uważanie siebie za lepszego od wszystkich innych ludzi.', isCorrect: false },
      { label: 'D', text: 'Ignorowanie konsekwencji swoich szkodliwych działań.', isCorrect: false }
    ],
    explanation: 'Samobiczowanie aktywuje układ stresowy i ucieczkę w poczucie winy, podczas gdy samowspółczucie obniża kortyzol i pozwala kora przedczołowej przeanalizować błąd.',
    keyTakeaway: 'Surowość blokuje wyciąganie wniosków; życzliwy realizm pozwala na naprawę strategii.'
  },
  {
    id: 8,
    question: 'W koncepcji WOOP (Gabriele Oettingen) kluczowym krokiem różniącym ją od zwykłego pozytywnego myślenia jest:',
    topic: 'Metoda WOOP i Kontrastowanie Mentalne',
    sectionRef: 'Sekcja 26.5',
    options: [
      { label: 'A', text: 'Uczciwe zderzenie marzenia o celu (Outcome) z identyfikacją głównej WEWNĘTRZNEJ przeszkody w sobie (Obstacle) i stworzenie dla niej planu „Jeśli-To”.', isCorrect: true },
      { label: 'B', text: 'Wizualizowanie wyłącznie sukcesu i ignorowanie jakichkolwiek trudności.', isCorrect: false },
      { label: 'C', text: 'Kupowanie drógich ubrań sportowych przed rozpoczęciem treningów.', isCorrect: false },
      { label: 'D', text: 'Przepisywanie swoich celów 100 razy na kartce.', isCorrect: false }
    ],
    explanation: 'Sama wizualizacja sukcesu obniża ciśnienie krwi i wywołuje złudzenie, że cel został osiągnięty. Dopiero skontrastowanie celu z przeszkodą mobilizuje energię do działania.',
    keyTakeaway: 'Marzenie daje kierunek, ale dopiero zderzenie z wewnętrzną przeszkodą generuje realny plan napędowy.'
  },
  {
    id: 9,
    question: 'Co charakteryzuje postawę Eksperymentatora Behawioralnego wobec własnego procesu zmiany?',
    topic: 'Postawa Eksperymentatora',
    sectionRef: 'Sekcja 26.10',
    options: [
      { label: 'A', text: 'Traktowanie każdej wypróbowywanej metody jako hipotezy badawczej, mierzenie wyników bez wstydu i gotowość do elastycznej modyfikacji strategii, gdy dane wskazują brak skuteczności.', isCorrect: true },
      { label: 'B', text: 'Wykonywanie skomplikowanych doświadczeń chemicznych w domowym laboratorium.', isCorrect: false },
      { label: 'C', text: 'Ciągła zmiana celów życiowych co 10 minut.', isCorrect: false },
      { label: 'D', text: 'Ignorowanie jakichkolwiek wyników i trwanie w błędzie.', isCorrect: false }
    ],
    explanation: 'Gdy metoda nie działa, naukowiec nie mówi: „jestem do niczego”, lecz mówi: „ta hipoteza się nie sprawdziła, zmieniam zmienną i testuję kolejną”.',
    keyTakeaway: 'Jesteś naukowcem we własnym laboratorium życiowym — modyfikuj strategię, a nie swoje prawo do szacunku.'
  },
  {
    id: 10,
    question: 'Jaka jest nadrzędna konkluzja z procesu: MYŚL → EMOCJA → DECYZJA → ZACHOWANIE → KONSEKWENCJA → ZMIANA?',
    topic: 'Synteza Procesu Samokształtowania',
    sectionRef: 'Sekcja 26.12',
    options: [
      { label: 'A', text: 'Człowiek nie jest bezwolną ofiarą swoich nawyków ani genialnym robotem czystej woli — jest złożonym systemem, który może świadomie kształtować swoje myśli, decyzje i środowisko, budując trwałą autonomię krok po kroku.', isCorrect: true },
      { label: 'B', text: 'Człowiek nie ma żadnego wpływu na swoje zachowanie.', isCorrect: false },
      { label: 'C', text: 'Zmiana zachowania zachodzi automatycznie bez żadnego wysiłku.', isCorrect: false },
      { label: 'D', text: 'Wszystkie zachowania ludzi są z góry ustalone w momencie narodzin.', isCorrect: false }
    ],
    explanation: 'Tożsamość i zachowanie są otwarta architekturą. Zrozumienie mechanizmów pozwala przejść od biernej reaktywności do świadomego autorstwa własnego życia.',
    keyTakeaway: 'Posiadasz mapę i wiedzę o mechanizmach. Teraz pora na codzienne, świadome praktykowanie autonomii.'
  }
];

export const caseStudiesChapterTwentySix: CaseStudy[] = [
  {
    id: 'cs-ch26-odchudzanie-system',
    title: 'Od Zrywu do Systemu: Jak Piotr Schudł 18 kg Bez Katowania Się',
    subtitle: 'Nieliniowa historia zmiany zachowania przez modyfikację środowiska i mikro-nawyki',
    protagonist: 'Piotr, 39 lat, programista i menedżer projektu',
    context: 'Piotr ważył 105 kg przy wzroście 178 cm. Od 10 lat co roku podejmował głodówkowe diety, po czym po miesiącu wracał do dawnej wagi z nawiązką (Efekt Yo-Yo).',
    story: [
      'Piotr podchodził dotychczas do zmiany w sposób rerewolucyjny: kładł na szalę całą swoją silną wolę, przechodził na rygorystyczną dietę 1200 kcal i kupował karnet na siłownię z planem 6 treningów w tygodniu. Zwykle po 3 tygodniach, w stanie wyczerpania i zmęczenia decyzyjnego, zjadał pizzę i porzucał plan.',
      'Po zrozumieniu mechanizmów samoregulacji zmienił podejście z Zrywu na SYSTEM.',
      'Krok 1 (Architektura Środowiska): Usunął z domu słodycze i przekąski, zwiększając tarcie dla złych wyborów. Kupował gotowe warzywa mrożone, obniżając tarcie dla dobrych posiłków.',
      'Krok 2 (Mikro-nawyk): Zamiast 6 treningów zaczął od 10 minut spaceru dziennie po obiedzie.',
      'Krok 3 (Reakcja na potknięcie): Gdy w 5. tygodniu na urodzinach kumpla zjadł 3 kawałki tortu, nie wpadł w katastrofizację („Wszystko zniszczone!”). Powiedział sobie: „To było jednorazowe potknięcie. Mój system działa dalej” i zjadł zdrową kolację.',
      'Po 14 miesiącach elastycznego trzymania się systemu Piotr schudł 18 kg. Nowe zachowania stały się jego drugą naturą bez poczucia katowania się.'
    ],
    decisionTaken: 'Piotr porzucił radykalne głodówki i zbudował elastyczny, długoterminowy system wspierany architekturą środowiska.',
    whatProtagonistSaw: 'Przestał widzieć odchudzanie jako dławiącą karę, a zaczął postrzegać je jako modyfikację domyślnego otoczenia.',
    whatWasMissed: 'Przez lata ignorował fakt, że silna wola jest wyczerpywalnym zasobem, a otoczenie zawsze wygrywa ze złym planem.',
    psychologicalAnalysis: {
      coreMechanism: 'Transition from Radical Effort to Choice Architecture & Micro-Habits (Atomic Habits / Fogg Behavior Model).',
      cognitiveBiases: [
        { name: 'Myślenie Dychotomiczne', description: 'Wcześniejsze przekonanie: „Albo trzymam dietę w 100%, albo jestem nieudacznikiem”.', impact: 'Inicjowanie pętli yo-yo po pierwszym potknięciu.' },
        { name: 'Naiwny Optymizm Zrywu', description: 'Przekonanie, że sam zapał motywacyjny wystarczy na przetrwanie 6 miesięcy rygoru.', impact: 'Szybkie wyczerpanie.' }
      ],
      defenseMechanisms: [
        { name: 'Racjonalizacja porażki', explanation: 'Tłumaczenie wcześniejszych niepowodzeń „słabą przemianą materii”.' }
      ],
      emotionalDynamic: 'Spadek poziomu lęku i wstydu po zastąpieniu surowości wyrozumiałym realizmem.'
    },
    decisionProcessAnalysis: {
      trigger: 'Kolejny wynik badań krwi pokazujący stłuszczenie wątroby.',
      attentionFocus: 'Przeprojektowanie kuchni i codziennej rutyny.',
      interpretation: '„Nie potrzebuję diety, potrzebuję nowego środowiska, które uczyni zdrowe wybory domyślnymi”.',
      emotion: 'Spokojna determinacja, brak podniecenia zrywem.',
      impulse: 'Gdy pojawia się ochota na słodycze — zjeść przygotowane jabłko lub wypić szklankę wody.',
      action: 'Modyfikacja środowiska i codzienne 10 minut ruchu.',
      consequence: 'Spadek wagi o 18 kg, trwała zmiana stylu życia, wysokie poczucie skuteczności.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądra podstawy', role: 'Zakodowanie nowych zautomatyzowanych nawyków żywieniowych', activationState: 'Utrwalona płynność' },
        { region: 'dlPFC', role: 'Zwolnienie kory przedczołowej z konieczności ciągłej walki z pokusami', activationState: 'Niskie obciążenie' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Utrzymujący się stabilny poziom dopaminy z celebracji mikrosukcesów' }
      ],
      biologicalTimeline: [
        { timeMs: 'Miesiąc 1-3', process: 'Modyfikacja otoczenia obniża wyrzut kortyzolu.' },
        { timeMs: 'Miesiąc 6+', process: 'Nowy wzorzec żywieniowy staje się domyślnym skryptem podkorowym.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [],
      counterMeasures: [
        { step: 'System Modyfikacji Środowiska', script: '„Nie trzymam w domu niczego, czego nie chcę zjeść w chwili zmęczenia”.', rationale: 'Usuwa bodziec wyzwalający z pola widzenia.' }
      ]
    },
    alternativePath: 'Gdyby Piotr po raz kolejny przeszedł na dietę 1200 kcal, po miesiącu przybrałby kolejne 5 kg w efekcie Yo-Yo.',
    readerQuestion: 'Jaki mały krok w swoim środowisku możesz zrobić dzisiaj, by dobra decyzja stała się najprostszą opcją?',
    keyTakeaway: 'Trwała zmiana nie wymaga olbrzymiej siły woli — wymaga mądrego przeprojektowania codziennego otoczenia.'
  },
  {
    id: 'cs-ch26-wychodzenie-z-alkoholu',
    title: 'Droga Przez Wyboje: Klaudia i Wolność od Nałogu',
    subtitle: 'Nieliniowy proces wychodzenia z nawyku sięgania po wino po pracy',
    protagonist: 'Klaudia, 34 lata, architektka wnętrz',
    context: 'Picie 3-4 kieliszków wina co wieczór jako automatyczny sposób na wyłączenie stłumionego stresu i gonitwy myśli po pracy.',
    story: [
      'Klaudia zauważyła, że nie potrafi zasnąć bez alkoholu. Alkohol stał się jej jedynym zachowaniem regulującym lęk i zmęczenie.',
      'Próba 1: Postanowienie „Nigdy więcej alkoholu”. Wytrzymała 4 dni. Piątego dnia, po trudnej rozmowie z trudnym klientem, sięgnęła po butelkę. Poczuła ogromny wstyd i uznała, że jest „słaba i bezwartościowa”. Przez kolejne 2 miesiące piła co wieczór.',
      'Przełom (Terapia CBT i Zmiana Strategii): Zrozumiała, że sięganie po wino jest ZACHOWANIEM zastępczym. Zidentyfikowała ukrytą potrzebę: wyciszenie ukadu nerwowego po stresie.',
      'Stworzyła Plan „Jeśli-To”: „JEŚLI po pracy poczuję gwałtowny impuls wypicia wina, TO włożę słuchawki, włączę trening oddechowy na 10 minut i wypiję ciepłą herbatę ziołową”.',
      'Przeżyła dwa potknięcia w ciągu pół roku. Za każdym razem analizowała wyzwalacz bez obwiniania się. Po roku Klaudia całkowicie uwolniła się od wieczornego nawyku, budując zdrowe metody regulacji emocji.'
    ],
    decisionTaken: 'Klaudia zastąpiła alkohol zdrowym zachowaniem alternatywnym zaspokajającym tę samą potrzebę wyciszenia.',
    whatProtagonistSaw: 'Zobaczyła, że wino było szkodliwą powłoką na niezaopiekowany stres.',
    whatWasMissed: 'Przez lata myślała, że problemem jest jej charakter, podczas gdy problemem był brak zdrowych narzędzi samoregulacji.',
    psychologicalAnalysis: {
      coreMechanism: 'Habit Replacement & Coping Strategy (Zamiana zachowania przy zachowaniu wyzwalacza i nagrody wyciszenia).',
      cognitiveBiases: [
        { name: 'Abstinence Violation Effect', description: 'Przekonanie, że jedno potknięcie unieważnia cały proces trzeźwienia.', impact: 'Wpływ na głęboki nawrót po pierwszym kieliszku.' }
      ],
      defenseMechanisms: [
        { name: 'Zaprzeczenie i Racjonalizacja', explanation: 'Tłumaczenie picia słowami: „Wszyscy tak odpoczywają po ciężkim dniu”.' }
      ],
      emotionalDynamic: 'Przejście od wstydliwej ucieczki do dojrzałego opiekowania się własnym układem nerwowym.'
    },
    decisionProcessAnalysis: {
      trigger: 'Powrót do domu o 19:00 ze spiętymi karkiem i lękiem.',
      attentionFocus: 'Mowa ciała i doznania z wyspy (napięcie w klatce).',
      interpretation: '„Mój układ nerwowy płonie, potrzebuję wyciszenia”.',
      emotion: 'Przebodźcowanie, lęk, zmęczenie.',
      impulse: 'Otworzyć lodówkę i nalać wino.',
      action: 'Założenie słuchawek, trening oddechowy i herbata ziołowa.',
      consequence: 'Spadek tętna, zachowanie jasności umysłu, wzrost poczucia sprawczości.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora zakrętu obręczy (dACC)', role: 'Świadome wychwycenie impulsu sięgnięcia po alkohol', activationState: 'Kontrola wykonawcza' },
        { region: 'Jądro półleżące', role: 'Obniżenie reaktywności dopaminowej na obraz butelki', activationState: 'Wygaszanie ścieżki nałogowej' }
      ],
      neurotransmitters: [
        { name: 'GABA', roleInScenario: 'Aktywacja układu przywspółczulnego poprzez głębokie oddechy zamiast alkoholu' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Wejście do kuchni wyzwala chęć wypicia wina.' },
        { timeMs: '200 ms', process: 'Uruchomienie skryptu „Jeśli-To” wyhamowuje ruch dłoni.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kulturowa normalizacja alkoholu', description: 'Promowanie wina jako jedynego eleganckiego sposobu na relaks.', vulnerabilityExploited: 'Przebodźcowanie kobiet sukcesu' }
      ],
      counterMeasures: [
        { step: 'Zamiana Zachowania Zastępczego', script: 'Daję swojemu ciału prawdziwy relaks biologiczny (oddech, sen) zamiast chemicznego znieczulenia.', rationale: 'Rozbraja uzależnienie u źródła.' }
      ]
    },
    alternativePath: 'Gdyby Klaudia trwała w karaniu się za potknięcia, popadłaby w utrwalony alkoholizm.',
    readerQuestion: 'Czym zatruwasz swój organizm, próbując dać mu chwilę wytchnienia po trudnym dniu?',
    keyTakeaway: 'Nie zabieraj swojemu ciału szkodliwego nawyku, dopóki nie dasz mu w zamian zdrowego sposobu na zaspokojenie tej samej potrzeby.'
  }
];

export const selfExercisesChapterTwentySix: SelfExercise[] = [
  {
    id: 'ex-ch26-woop-protocol',
    title: 'Ćwiczenie 10.1: Kompletny Projektant Zmiany WOOP (Wish, Outcome, Obstacle, Plan)',
    subtitle: 'Przekształć swoje marzenie w niezawodny algorytm działania odporny na przeszkody',
    objective: 'Zderzenie celu z główną wewnętrzną przeszkodą i stworzenie precyzyjnej reguły „Jeśli-To”.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Kontrastowanie mentalne aktywuje zrównoważoną pracę vmPFC i dlPFC, mobilizując zasoby metaboliczne do pokonania oporu.',
    steps: [
      {
        stepNumber: 1,
        title: 'W — Wish (Twoje Życzenie / Cel)',
        instruction: 'Wypisz jedno konkretne życzenie na najbliższe 30 dni. Musi być stanem, na który masz realny wpływ.',
        promptText: 'Moje życzenie/cel:',
        placeholder: 'Chcę co rano wstawać o 6:30 i czytać książkę przez 20 minut...'
      },
      {
        stepNumber: 2,
        title: 'O — Outcome (Najlepszy Wynik)',
        instruction: 'Wyobraź sobie żywo najlepszy rezultat osiągnięcia tego celu. Co poczujesz w ciele?',
        promptText: 'Opisz wizję sukcesu i stan emocjonalny:',
        placeholder: 'Poczuję spokój, dumę i opanowanie przed rozpoczęciem dnia pracy...'
      },
      {
        stepNumber: 3,
        title: 'O — Obstacle (Główna Wewnętrzna Przeszkodą)',
        instruction: 'Jaka Twoja WEWNĘTRZNA przeszkoda (emocja, nawyk, lenistwo, sięganie po telefon) staje na drodze?',
        promptText: 'Moja główna wewnętrzna przeszkoda to:',
        placeholder: 'Przewijanie mediów społecznościowych w łóżku tuż po przebudzeniu...'
      },
      {
        stepNumber: 4,
        title: 'P — Plan (Plan Jeśli-To)',
        instruction: 'Sformułuj precyzyjną regułę: JEŚLI [pojawia się przeszkoda], TO [wykonam konkretne działanie przełamujące].',
        promptText: 'Mój algorytm WOOP:',
        placeholder: 'JEŚLI zadzwoni budzik o 6:30, TO natychmiast postawię stopy na podłodze i zostawię telefon w łazience...'
      }
    ],
    reflectionQuestions: [
      'Jak zmienia się Twoje odczucie celu, gdy masz gotowy plan na najtrudniejszy moment?',
      'Kiedy przetestujesz ten algorytm w praktyce?'
    ]
  },
  {
    id: 'ex-ch26-friction-map',
    title: 'Ćwiczenie 10.2: Matryca Inżynierii Tarcia Środowiskowego',
    subtitle: 'Przeprojektuj swoje otoczenie fizyczne i cyfrowe tak, by zmiana stała się bezwysiłkowa',
    objective: 'Zwiększenie oporu dla zachowań szkodliwych i wygładzenie ścieżki dla zachowań rozwojowych.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Modyfikacja wyzwalaczy wzrokowych obniża niepotrzebną stymulację układu dopaminergicznego VTA w podkorze.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybierz jedno zachowanie niepożądane i zwiększ tarcie',
        instruction: 'Dodaj co najmniej 3 kroki fizyczne lub czasowe, które musisz wykonać, by ulec tej pokusie.',
        promptText: 'Mój plan zwiększenia tarcia (Friction Addition):',
        placeholder: 'Aby zagrać w grę, muszę wyjąć konsolę z szafy, podłączyć 3 kable i wdać hasło...'
      },
      {
        stepNumber: 2,
        title: 'Wybierz jedno zachowanie pożądane i zmniejsz tarcie',
        instruction: 'Usuń wszelkie przeszkody. Przygotuj materiały tak, by wykonanie ruchu zajmowało mniej niż 5 sekund.',
        promptText: 'Mój plan zmniejszenia tarcia (Friction Reduction):',
        placeholder: 'Książka leży otwarta na biurku, a okulary są położone tuż obok...'
      },
      {
        stepNumber: 3,
        title: 'Zastąp bodziec wyzwalający cyfrowy',
        instruction: 'Wyłącz powiadomienia, wyczyść pulpit, utrudnij dostęp do pożeraczy uwagi.',
        promptText: 'Moja cyfrowa zmiana środowiska:',
        placeholder: 'Wyłączam powiadomienia push we wszystkich aplikacjach poza połączeniami...'
      }
    ],
    reflectionQuestions: [
      'O ile rzadziej ulegasz pokusie, gdy usuniesz ją z pola widzenia?',
      'Jakie jeszcze jedno pomieszczenie w Twoim domu wymaga architektury wyboru?'
    ]
  }
];

export const chapterTwentySix: Chapter = {
  number: 26,
  volume: 3,
  volumeChapterNumber: 10,
  title: 'Rozdział 10: Zmiana: Od Zrozumienia do Działania',
  subtitle: 'Jak można świadomie zmieniać własne zachowanie i sposób działania? Tworzenie osobistego systemu autonomii',
  leadParagraph: 'Dotarłeś do zwieńczenia naszej wielkiej podróży przez architekturę ludzkiego umysłu. Zrozumiałeś, jak powstaje myśl i interpretacja, jak rodzi się emocja, jak podejmujemy decyzje w warunkach niepewności (Rozdział 8) oraz jak decyzje i emocje przechodzą w obserwowalne zachowanie (Rozdział 9). Teraz stajesz przed najważniejszym pytaniem całej psychologii: JAK MOŻNA ŚWIADOMIE I TRWALE ZMIENIAĆ WŁASNE ZACHOWANIE? Zmiana nie jest kwestią bezdusznej rewolucji ani pustych haseł motywacyjnych. Zmiana jest precyzyjną, życzliwą inżynierią własnego środowiska, nawyków, procesów i tożsamości. W tym rozdziale zbudujesz swój własny, niezawodny system samokształtowania.',
  totalEstimatedPages: 58,
  sections: [
    {
      id: 'sec-26-1',
      pageNumber: 700,
      sectionNumber: '26.1',
      title: 'Czym jest zmiana? Rozbijanie mitu rewolucji na rzecz ewolucji',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Nie stajesz się nowym człowiekiem w jednym momencie olśnienia. Stajesz się nim poprzez setki cichych, niewidocznych wyborów dokonywanych każdego dnia.',
        author: 'James Clear'
      },
      paragraphs: [
        'Kultura masowa i motywacyjni influenserzy sprzedają nam iluzję nagłej, widowiskowej rewolucji życiowej. Słyszymy hasła: „Zmień swoje życie w 24 godziny”, „Uwierz w siebie i zrób to teraz”, „Wszystko zależy od Twojego zapału”. To niebezpieczny mit, który wpędza miliony ludzi w poczucie winy i klęski.',
        'W rzeczywistości biologicznej i psychologicznej nagłe, rewolucyjne próby zmiany są traktowane przez ciało migdałowate jako śmiertelne zagrożenie dla homeostazy. Kiedy postanawiasz z dnia na dzień zmienić diety, zacząć biegać o 5:00 rano, rzucić nałogi i pracować po 12 godzin, Twój układ nerwowy odczytuje to jako stan alarmowy i mobilizuje wszystkie siły obronne, by przywrócić Cię do starych, bezpiecznych kolein.',
        'Prawdziwa, trwała zmiana zachowania nie jest zrywem emocjonalnym. Jest spokojną, konsekwentną EWOLUCJĄ. Polega na wprowadzaniu niedużych, precyzyjnie zaprojektowanych zmian w środowisku, automatyzowaniu mikrokroków i stopniowej aktualizacji tożsamości. Zmiana to nie walka ze sobą — to mądra współpraca z własną biologią.'
      ]
    },
    {
      id: 'sec-26-2',
      pageNumber: 704,
      sectionNumber: '26.2',
      title: 'Dlaczego sama wiedza nie wystarcza? Powrót do starych kolein neuronowych',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Najczęstszą frustracją dorosłego człowieka jest świadomość własnych błędów przy jednoczesnej niezdolności do ich powstrzymania. Przeczytałeś dziesiątki książek, wiesz dokładnie, dlaczego prokrastynujesz lub ulegasz złości, a mimo to w trudnym momencie powtarzasz ten sam schemat.',
        'Wynika to z faktu, że wiedza merytoryczna jest zapisana w korze deklaratywnej, podczas gdy nawykowe zachowanie pod wpływem stresu jest wywoływane przez obwody podkorowe (jądra podstawy, prążkowie). Stare koleiny neuronowe są jak wyżłobione koryta rzek — w chwili zmęczenia woda płynie tam, gdzie opór jest najmniejszy. Budowanie nowej ścieżki wymaga powtarzalnego treningu fizycznego w świecie realnym.'
      ]
    },
    {
      id: 'sec-26-3',
      pageNumber: 708,
      sectionNumber: '26.3',
      title: 'Rola środowiska i architektury wyboru: Przeszkody i gładkość',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Najpotężniejszym, niewidzialnym reżyserem Twoich zachowań jest Twoje ŚRODOWISKO. Richard Thaler i Cass Sunstein w Teorii Szturchania (Nudge Theory) wykazali, że ludzie wybierają to, co jest najprostsze i najbardziej dostępne w ich bezpośrednim otoczeniu.',
        'Jeśli chcesz zmienić zachowanie, przestań trenować silną wolę w skażonym środowisku. Przeprojektuj otoczenie tak, aby zachowania niepożądane wymagały wielkiego wysiłku (Inżynieria Tarcia / Friction Addition), a zachowania pożądane były natychmiastowe i bezwysepkowe (Friction Reduction).'
      ]
    },
    {
      id: 'sec-26-4',
      pageNumber: 712,
      sectionNumber: '26.4',
      title: 'Siła mikrokroków (Atomic Habits): Budowanie tożsamości przez dowody z działania',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Małe zmiany przynoszą gigantyczne skumulowane rezultaty. Wykonanie prostej czynności trwającej 2 minuty (np. przeczytanie jednej strony, zrobienie dwóch pompek, wypicie szklanki wody) wydaje się śmiesznie małe, lecz ma potężną moc psychologiczną.',
        'Oszukuje ciało migdałowate (nie wywołuje lęku przed zmianą) oraz dostarcza umysłowi empirycznego dowodu: „Jestem człowiekiem, który to robi”. Każde wykonane mikrodziałanie jest głosem oddanym na nową wersję siebie.'
      ]
    },
    {
      id: 'sec-26-16',
      pageNumber: 716,
      sectionNumber: '26.5',
      title: 'Planowanie działania i algorytmy „Jeśli-To”: Odciążanie kory przedczołowej',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Peter Gollwitzer w badaniach nad Intencjami Implementacyjnymi dowiódł, że osoby, które zaplanowały dokładny czas, miejsce i wzorzec zachowania w postaci reguły „Jeśli X, to zbiór Y”, mają o 300% wyższą skuteczność wdrożenia zmiany niż osoby polegające na czystej intencji.',
        'Reguła „Jeśli-To” przekazuje kontrolę wykonawczą na bodziec środowiskowy. Nie musisz zastanawiać się w zmęczeniu — wyzwalacz automatycznie uruchamia zaprogramowany skrypt.'
      ]
    },
    {
      id: 'sec-26-6',
      pageNumber: 720,
      sectionNumber: '26.6',
      title: 'Przezwyciężanie oporu i lęku przed zmianą: Współpraca z homeostazą',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Opór przed zmianą jest naturalnym mechanizmem obronnym organizmu chroniącym homeostazę. Każda nowość jest dla układu nerwowego potencjalnym zagrożeniem.',
        'Aby pokonać opór, należy obniżyć poprzeczkę trudności do poziomu, który wywołuje uśmiech, oraz zaopiekować się lękiem poprzez bezpieczne eksperymenty behawioralne.'
      ]
    },
    {
      id: 'sec-26-7',
      pageNumber: 724,
      sectionNumber: '26.7',
      title: 'Nawroty i błędy w procesie zmiany: Od katastrofizacji do wyrozumiałego realizmu',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Proces zmiany NIE JEST liniowy. Potknięcia są nieodłącznym elementem uczenia się nowych wzorców.',
        'Poniższe studia przypadków ukazują, jak nieliniowo przebiega zmiana w redukcji masy ciała oraz w wychodzeniu z nałogowych zachowań.'
      ],
      caseStudyRef: caseStudiesChapterTwentySix[0]
    },
    {
      id: 'sec-26-8',
      pageNumber: 728,
      sectionNumber: '26.8',
      title: 'Chwilowa motywacja a trwały system: Dlaczego potrzebujesz rurociągu, a nie wiadra',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Motywacja jest jak deszczówka — pojawia się gwałtownie, ale szybko wysycha. System jest jak rurociąg — dostarcza wodę codziennie, niezależnie od pogody.',
        'Poniższe studium przypadku ilustruje proces budowania autentycznego systemu samoregulacji w uwalnianiu się od nawykowego sięgania po alkohol po pracy.'
      ],
      caseStudyRef: caseStudiesChapterTwentySix[1]
    },
    {
      id: 'sec-26-9',
      pageNumber: 732,
      sectionNumber: '26.9',
      title: 'Mierzenie i monitorowanie postępów: Dzienniki sprawczości i twarde dane',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'To, co jest mierzone, może być zarządzane. Prowadzenie prostego rejestru wykonania zachowań daje umysłowi poczucie ciągłości i stymuluje uwalnianie dopaminy z celebracji postępu.'
      ]
    },
    {
      id: 'sec-26-10',
      pageNumber: 736,
      sectionNumber: '26.10',
      title: 'Eksperymentowanie behawioralne: Bądź naukowcem we własnym życiu',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Porzuć surową postawę sędziego na rzecz dociekliwej postawy naukowca. Przetestuj daną metodę przez 14 dni. Jeśli przynosi rezultaty — utrwal ją. Jeśli nie przynosi — zmień zmienną i testuj dalej bez poczucia winy.'
      ]
    },
    {
      id: 'sec-26-11',
      pageNumber: 740,
      sectionNumber: '26.11',
      title: 'Utrwalanie nowych zachowań i zmiana tożsamościowa: Od próby do bycia',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Ostatecznym celem zmiany zachowania jest ZMIANA TOŻSAMOŚCIOWA. Zamiast mówić: „Próbuję nie jeść słodyczy”, zaczynasz mówić: „Jestem człowiekiem, który dba o swoje zdrowie”. Zachowanie staje się naturalną ekspresją kim jesteś.',
        'Poniższy warsztat prowadzi przez projektowanie kompletnego algorytmu WOOP.'
      ],
      exerciseRef: selfExercisesChapterTwentySix[0]
    },
    {
      id: 'sec-26-12',
      pageNumber: 744,
      sectionNumber: '26.12',
      title: 'Tworzenie własnego systemu samodoskonalenia: Synteza drogi autonomii',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Oto wielka synteza procesu, który przeszliśmy:',
        '1. MYŚL / INTERPRETACJA (Zauważ jak nadajesz znaczenie bodźcom).',
        '2. EMOCJA (Zaopiekuj się stanem somatycznym w ciele).',
        '3. DECYZJA (Podejmij wybór w oparciu o kompas wartości i pauzę).',
        '4. ZACHOWANIE (Wykonaj konkretny, mikrokrok w świecie fizycznym).',
        '5. KONSEKWENCJA (Zbadaj obiektywne rezultaty bez iluzji).',
        '6. ZMIANA (Dostosuj środowisko i utrwal nowy system).',
        'Poniższy warsztat uczy inżynierii tarcia środowiskowego.'
      ],
      exerciseRef: selfExercisesChapterTwentySix[1]
    },
    {
      id: 'sec-26-13',
      pageNumber: 748,
      sectionNumber: '26.13',
      title: 'Błędne intuicje na temat świadomej zmiany zachowania',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Rozprawmy się z 5 najgroźniejszymi mitami o zmianie:',
        'BŁĘDNE PRZEKONANIE 1: „Do zmiany zachowania potrzebuję potężnej, niezłomnej silnej woli.” -> Prawda: Silna wola jest wyczerpywalnym zasobem; trwała zmiana opiera się na modyfikacji środowiska i nawykach.',
        'BŁĘDNE PRZEKONANIE 2: „Aby zmienić życie, muszę dokonać rewolucji we wszystkich obszarach naraz.” -> Prawda: Rewolucja budzi lęk w ciele migdałowatym; powolne mikrokroki budują trwałe ścieżki neuronowe.',
        'BŁĘDNE PRZEKONANIE 3: „Wystarczy 21 dni, by zbudować każdy nowy nawyk.” -> Prawda: Czas automatyzacji zależy od złożoności zachowania i wynosi od 18 do 254 dni (Lally et al.).',
        'BŁĘDNE PRZEKONANIE 4: „Jednorazowe potknięcie oznacza, że cały proces zmiany się zawalił.” -> Prawda: Potknięcie to informacja o luce w strategii, a nie o Twojej bezwartościowości.',
        'BŁĘDNE PRZEKONANIE 5: „Muszę czekać na odpowiedni moment i motywację, by zacząć.” -> Prawda: Działanie wyprzedza motywację — to wykonanie pierwszego mikrokroku wyzwoła dopaminę.'
      ]
    },
    {
      id: 'sec-26-14',
      pageNumber: 752,
      sectionNumber: '26.14',
      title: 'Co nadal nie jest jasne? Niewiadome w nauce o samokształtowaniu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Granice naszej wiedzy w obszarze plastyczności zachowania:',
        '1. Jakie indywidualne czynniki genetyczne i neurobiologiczne decydują o szybkości wygaszania starych nawyków podkorowych?',
        '2. Jak zoptymalizować interwencje behawioralne dla osób z ADHD i zaburzeniami funkcji zarządczych?',
        '3. W jakim stopniu sztuczna inteligencja i spersonalizowane algorytmy będą w stanie zastąpić tradycyjną psychoterapię w projektowaniu zmiany behawioralnej?'
      ]
    },
    {
      id: 'sec-26-15',
      pageNumber: 756,
      sectionNumber: '26.15',
      title: 'Jak zastosować to jutro? Praktyczny protokół startowy zmiany',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Oto 5 kroków, które możesz zrobić jutro rano:',
        '1. Wybierz JEDNO zachowanie i zmniejsz jego rozmiar do czynności trwającej 2 minuty.',
        '2. Zmodyfikuj swoje fizyczne środowisko — usuń z pola widzenia jeden wyzwalacz szkodliwego nawyku.',
        '3. Sformułuj jedną regułę „Jeśli-To” na najtrudniejszy moment dnia.',
        '4. Zrezygnuj z surowego oceniania siebie po potknięciu — bądź dla siebie życzliwym, dociekliwym mentorem.',
        '5. Świętuj każde małe zwycięstwo — dostarczaj swojemu mózgowi dopaminowej nagrody za wierność systemowi.'
      ]
    },
    {
      id: 'sec-26-16-exam',
      pageNumber: 760,
      sectionNumber: '26.16',
      title: 'Egzamin Końcowy z Rozdziału 10: Sprawdź swoją wiedzę o procesie zmiany',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      paragraphs: [
        'Oto końcowy test weryfikujący Twoją wiedzę z zakresu inżynierii środowiska, mikronawyków, intencji implementacyjnych i prowadzenia autorskiego systemu samokształtowania.'
      ]
    },
    {
      id: 'sec-26-17',
      pageNumber: 764,
      sectionNumber: '26.17',
      title: 'Zwieńczenie Dzieła: Twoja mapa samokształtowania i autonomii',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Przebyłeś niezwykłą drogę.',
        'W Tomie I poznałeś wewnętrzną architekturę umysłu — podwójny system, porwanie emocjonalne, reflektor uwagi, filtry percepcji i rekonstrukcję pamięci.',
        'W Tomie II wyszedłeś w świat relacji społecznych — poznałeś dynamikę wpływu, komunikacji, wywierania presji, asertywności i budowania zaufania.',
        'W Tomie III zdobyłeś narzędzia autonomii osobistej — tożsamość, przekonania, poczucie skuteczności, wartości, decyzje (Rozdział 8), zachowanie (Rozdział 9) oraz mądrą zmianę (Rozdział 10).',
        'Nie jesteś już biernym odbiorcą swoich podkorowych impulsów ani bezwolnym liściem wiatru społecznego. Posiadasz wiedzę, rozumiesz mechanizmy i dysponujesz wypróbowanymi narzędziami.',
        'Pamiętaj: dojrzałość i autonomia nie są stanem danym raz na zawsze. Są codzienną, życzliwą praktyką świadomego wyboru. Idź w świat, sprawdzaj, eksperymentuj i twórz swoje życie z pełną odpowiedzialnością i głębokim spokojem.'
      ]
    }
  ]
};
