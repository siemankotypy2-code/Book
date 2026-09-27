import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTwelveExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Dlaczego w psychologii motywacji twierdzenie „jeśli ktoś nie działa, to znaczy, że mu nie zależy” jest uznawane za zbyt uproszczone?',
    topic: 'Luka między intencją a działaniem',
    sectionRef: 'Sekcja 12.1',
    options: [
      { label: 'A', text: 'Ponieważ ludzie zawsze działają zgodnie ze swoimi deklaracjami, o ile wiedzą, jak coś zrobić.', isCorrect: false },
      { label: 'B', text: 'Ponieważ pomiędzy pragnieniem a wykonaniem działania znajduje się skomplikowany system procesów: oczekiwanie wysiłku, lęk przed porażką, ocena kompetencji i stymulacja natychmiastowymi nagrodami.', isCorrect: true },
      { label: 'C', text: 'Ponieważ motywacja zależy wyłącznie od poziomu glukozy we krwi.', isCorrect: false },
      { label: 'D', text: 'Ponieważ brak działania wynika zawsze z genetycznych uwarunkowań osobowości.', isCorrect: false }
    ],
    explanation: 'Wysoka wartość celu może współistnieć z niską gotowością do podjęcia konkretnego kroku, gdy przewidywany koszt emocjonalny lub poznawczy wydaje się w danym momencie zbyt duży.',
    keyTakeaway: '„Chcę” nie jest równoznaczne z „robię” — intencja wymaga przełożenia na konkretne warunki wykonania.'
  },
  {
    id: 2,
    question: 'W jaki sposób dekonstrukcja celu na konkretne zachowania zmniejsza dystans między intencją a działaniem (Sekcja 12.2)?',
    topic: 'Cel a konkretne działanie',
    sectionRef: 'Sekcja 12.2',
    options: [
      { label: 'A', text: 'Poprzez zastąpienie ogólnego obrazu rezultatu („Zdam egzamin”) precyzyjnym skryptem czynności w czasie i przestrzeni („O 17:00 usiądę przy biurku i rozwiążę 10 zadań”).', isCorrect: true },
      { label: 'B', text: 'Poprzez powtarzanie pozytywnych afirmacji przed pójściem spać.', isCorrect: false },
      { label: 'C', text: 'Poprzez rezygnację z wyznaczania jakichkolwiek terminów.', isCorrect: false },
      { label: 'D', text: 'Poprzez wyznaczanie celów tak trudnych, by wywołać maksymalny stres mobilizujący.', isCorrect: false }
    ],
    explanation: 'Mózg nie potrafi wykonać „celu końcowego”; potrafi wykonać jedynie konkretną mikroczynność. Przejście od celu do planu i konkretnego zachowania usuwa niepewność decyzyjną.',
    keyTakeaway: 'Cel wskazuje kierunek, ale to konkretne zachowanie uruchamia działanie.'
  },
  {
    id: 3,
    question: 'Dlaczego prokrastynacja jest w swej istocie mechanizmem regulacji emocji, a nie zwykłym lenistwem (Sekcja 12.5)?',
    topic: 'Prokrastynacja jako system',
    sectionRef: 'Sekcja 12.5',
    options: [
      { label: 'A', text: 'Ponieważ osoba odkładająca zadanie nie wie, co ma zrobić.', isCorrect: false },
      { label: 'B', text: 'Ponieważ odłożenie zadania wywołującego napięcie, niepewność lub lęk przed oceną przynosi natychmiastową ulgę emocjonalną, co wzmacnia wzorzec unikania na przyszłość.', isCorrect: true },
      { label: 'C', text: 'Ponieważ prokrastynacja występuje tylko u osób o niskim ilorazie inteligencji.', isCorrect: false },
      { label: 'D', text: 'Ponieważ prokrastynacja polega wyłącznie na braku higieny snu.', isCorrect: false }
    ],
    explanation: 'Mózg uczy się, że odsunięcie trudnego zadania przynosi szybką spadek napięcia i nagrodę w postaci odwrócenia uwagi (np. telefonem), co utrwala pętlę unikania.',
    keyTakeaway: 'Prokrastynacja jest krótkoterminową ucieczką przed dyskomfortem emocjonalnym.'
  },
  {
    id: 4,
    question: 'Na czym polega różnica między kontrolą impulsu a kontrolą środowiska w samokontroli (Sekcja 12.6)?',
    topic: 'Projektowanie środowiska vs siła woli',
    sectionRef: 'Sekcja 12.6',
    options: [
      { label: 'A', text: 'Kontrola impulsu polega na usunięciu rozpraszaczy z pokoju, a kontrola środowiska na walce z pokusą.', isCorrect: false },
      { label: 'B', text: 'Kontrola impulsu polega na ciągłym opieraniu się pokusie siłą woli, podczas gdy kontrola środowiska zmienia sytuację tak, by wyeliminować konieczność podejrzewania pokusy.', isCorrect: true },
      { label: 'C', text: 'Nie ma żadnej różnicy merytorycznej między tymi pojęciami.', isCorrect: false },
      { label: 'D', text: 'Kontrola środowiska działa tylko u dzieci, a kontrola impulsu u dorosłych.', isCorrect: false }
    ],
    explanation: 'Osoby osiągające wysokie wyniki nie polegają wyłącznie na nieustannym wysiłku woli — projektują swoje otoczenie w sposób, który redukuje liczbę pokus i zderzeń decyzyjnych.',
    keyTakeaway: 'Nie musisz pokonywać każdej przeszkody siłą woli — mądrzej jest usunąć ją z pola widzenia.'
  },
  {
    id: 5,
    question: 'Co dzieje się ze względu na zjawisko dyskontowania przyszłości w wyborze między nagrodą natychmiastową a przyszłą korzyścią (Sekcja 12.4)?',
    topic: 'Odraczanie gratyfikacji',
    sectionRef: 'Sekcja 12.4',
    options: [
      { label: 'A', text: 'Przyszła korzyść jest w umyśle subiektywnie pomniejszana, co sprawia, że mniejsza, ale natychmiastowa nagroda zyskuje przewagę w decyzji.', isCorrect: true },
      { label: 'B', text: 'Ludzie zawsze wybierają większą nagrodę odległą w czasie.', isCorrect: false },
      { label: 'C', text: 'Wartość nagrody wzrasta liniowo z każdym dniem oczekiwania.', isCorrect: false },
      { label: 'D', text: 'Mózg nie odróżnia teraźniejszości od przyszłości.', isCorrect: false }
    ],
    explanation: 'Im bardziej odległa jest korzyść (np. egzamin za miesiąc, zdrowie za rok), tym mniejsza jest jej natychmiastowa wartość psychologiczna w starciu z szybkim bodźcem (np. telefon teraz).',
    keyTakeaway: 'Walka z dyskontowaniem wymaga przybliżenia poczucia postępu i nagrody do teraźniejszości.'
  },
  {
    id: 6,
    question: 'W historii Michała (Sekcja 12.8), w jaki sposób przerwana została pętla unikania nauki przed egzaminem?',
    topic: 'Studia przypadku — zmiana systemu',
    sectionRef: 'Sekcja 12.8',
    options: [
      { label: 'A', text: 'Michał zaczął powtarzać, że ma nieskończoną motywację i zakazał sobie odpoczynku.', isCorrect: false },
      { label: 'B', text: 'Michał zmienił strukturę działania: rozbił materiał na małe części, wyznaczył stałą godzinę, odłożył telefon poza pokój i ustalił krótki, 25-minutowy blok nauki.', isCorrect: true },
      { label: 'C', text: 'Michał poczekał na ostatnie 24 godziny przed egzaminem, by wykorzystać maksymalny stres.', isCorrect: false },
      { label: 'D', text: 'Michał zatrudnił osobistego trenera, który pilnował go przez całą dobę.', isCorrect: false }
    ],
    explanation: 'Zmiana nie nastąpiła przez abstrakcyjne „zwiększenie motywacji”, lecz przez modyfikację środowiska i zmniejszenie progu rozpoczęcia pierwszej czynności.',
    keyTakeaway: 'Kiedy system działania ulega poprawie, gotowość do podjęcia wysiłku wzrasta automatycznie.'
  },
  {
    id: 7,
    question: 'Jaka jest rola poczucia postępu w podtrzymywaniu działania (Sekcja 12.7)?',
    topic: 'Poczucie postępu i informacja zwrotna',
    sectionRef: 'Sekcja 12.7',
    options: [
      { label: 'A', text: 'Poczucie postępu nie ma żadnego wpływu na zaangażowanie.', isCorrect: false },
      { label: 'B', text: 'Widoczna informacja zwrotna o zmniejszaniu dystansu do celu wzmacnia poczucie kompetencji i obniża odczuwany koszt kontynuowania pracy.', isCorrect: true },
      { label: 'C', text: 'Poczucie postępu działa wyłącznie wtedy, gdy osiągnie się 100% celu końcowego.', isCorrect: false },
      { label: 'D', text: 'Poczucie postępu osłabia motywację, bo wywołuje samozadowolenie.', isCorrect: false }
    ],
    explanation: 'Człowiek potrzebuje wiedzieć nie tylko, czy osiągnął cel końcowy, ale również czy dzisiejszy wysiłek rzeczywiście przybliża go do rezultatu.',
    keyTakeaway: 'Mierzalne etapy i informacja zwrotna karmią poczucie kompetencji i chronią przed zniechęceniem.'
  }
];

export const chapterTwelveCaseStudyMichal: CaseStudy = {
  id: 'cs-ch12-michal-egzamin',
  title: 'Pętla Odłączonego Działania: Michał i Egzamin za Miesiąc',
  subtitle: 'Anatomia racjonalizacji, paraliżu przed wysiłkiem i systemowej przebudowy procesu uczenia się',
  protagonist: 'Michał, 17 lat, uczeń szkoły średniej',
  context: 'Pokój młodzieżowy, 16:30, miesiąc przed kluczowym egzaminem końcowym.',
  story: [
    'Michał wiedział, że egzamin za miesiąc zdecyduje o jego dostaniu się na wymarzony kierunek studiów. BARDZO chciał zdać go na wysoki wynik. Każdego wieczora powtarzał sobie: „Zależy mi na tym. To mój główny cel”.',
    'Jednak każdego popołudnia scenariusz wyglądał identycznie: wracał ze szkoły zmęczony, siadał na łóżku z intencją „tylko na 5 minut sprawdzę telefon”, po czym spędzał dwie godziny na oglądaniu krótkich filmów. Gdy czuł pierwsze ukłucie winy, mówił sobie: „Przecież jest jeszcze dużo czasu, zacznę jutro od rana”.',
    'To zdanie było klasyczną racjonalizacją — mechanizmem obronnym zmniejszającym nieprzyjemne napięcie tu i teraz. Unikanie nauki przynosiło chwilową ulgę od wyobrażonego trudnego wysiłku i lęku przed konfrontacją ze złą wiedzą.',
    'Po dwóch tygodniach ucieczki zaległość urosła. Wraz z mniejszą ilością czasu wzrósł stres. A im większy stres, tym silniejsza potrzeba natychmiastowej ulgi i tym większa chęć ucieczki w telefon. Powstała pętla samonapędzającego się unikania.',
    'Przełom nastąpił, gdy Michał przestał czekać na nadejście „wielkiej motywacji” i zreorganizował system działania: wyznaczył konkretny blok (17:00–17:25), odniósł telefon do drugiego pokoju, rozbił materiał na 5 mniejszych działów i zaplanował pierwsze, bezdyskusyjnie łatwe zadanie na start. Po 3 dniach zobaczył pierwszy mierzalny postęp, a lęk ustąpił miejsca poczuciu kontroli.'
  ],
  decisionTaken: 'Michał przestał polegać na deklaracjach słownych i sile woli, a stworzył zewnętrzny system wykonawczy oparty na jasnym pierwszym kroku i kontroli środowiska.',
  whatProtagonistSaw: 'Michał widział w sobie osobę „bez charakteru” i „leniwa”, która nie potrafi się zmobilizować.',
  whatWasMissed: 'Że jego problem nie tkwił w braku pragnienia sukcesu, lecz w braku przejścia od celu końcowego do konkretnej czynności oraz w łatwej dostępności natychmiastowej ulgi.',
  psychologicalAnalysis: {
    coreMechanism: 'Systemowa pętla prokrastynacji napędzana unikaniem dyskomfortu emocjonalnego i wzmacniana natychmiastową nagrodą ze smartfona.',
    cognitiveBiases: [
      { name: 'Dyskontowanie przyszłości', description: 'Przecenianie natychmiastowej ulgi ze scrollowania w stosunku do odległej nagrody ze zdanego egzaminu.', impact: 'Ciągłe odkładanie pracy.' },
      { name: 'Racjonalizacja', description: 'Używanie usprawiedliwień typu „mam jeszcze czas”, aby znieczulić poczucie winy.', impact: 'Podtrzymywanie bezczynności.' }
    ],
    defenseMechanisms: [
      { name: 'Unikanie afektywne', explanation: 'Ucieczka od zadania wywołującego niepokój w stronę bezpiecznych bodźców rozpraszających.' }
    ],
    emotionalDynamic: 'Napięcie przed wysiłkiem → ucieczka w telefon → ulga → poczucie winy → narastający stres → powtórzenie pętli.'
  },
  decisionProcessAnalysis: {
    trigger: 'Powrót ze szkoły i widok podręcznika na biurku.',
    attentionFocus: 'Przewidywany trud i nieprzyjemne napięcie.',
    interpretation: '„To będzie męczące i trudne, nie mam teraz siły”.',
    emotion: 'Niepokój, znużenie, przytłoczenie.',
    impulse: 'Sięgnąć po telefon dla odwrócenia uwagi.',
    action: 'Oglądanie filmów przez 2 godziny.',
    consequence: 'Chwilowa ulga, narastająca zaległość i większy stres kolejnego dnia.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Kora przedczołowa', role: 'Planowanie i hamowanie impulsów', activationState: 'Przeciążona i wyciszona po całym dniu w szkole' },
      { region: 'Układ nagrody (Prążkowie)', role: 'Poszukiwanie szybkiej dopaminy', activationState: 'Aktywowany przez powiadomienia w telefonie' }
    ],
    neurotransmitters: [
      { name: 'Dopamina i kortyzol', roleInScenario: 'Kortyzol wywoływał niepokój przed zadaniem, a dopamina ze smartfona dawała szybką ucieczkę.' }
    ],
    biologicalTimeline: [
      { timeMs: '16:30', process: 'Sygnał niepokoju uruchamia odruch sięgnięcia po ekran.' },
      { timeMs: '16:31', process: 'Pierwsza rolka wyzwala mikro-wyrzut dopaminy i spadek kortyzolu (ulga).' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Twarda Redukcja Tarcza', script: 'Telefon opuszcza pokój na czas bloku nauki.', rationale: 'Eliminuje natychmiastowy nośnik ucieczki emocjonalnej.' }
    ]
  },
  alternativePath: 'Gdyby Michał nie zmienił struktury działania, przez kolejne tygodnie tkwiłby w poczuciu winy, aż do panicznego zarywania nocy przed samym egzaminem ze słabym rezultatem.',
  readerQuestion: 'W jakich sytuacjach powtarzasz sobie „zacznę od jutra”, aby znieczulić chwilowe napięcie przed trudnym zadaniem?',
  keyTakeaway: 'Nie walcz z brakiem motywacji siłą woli — obniż próg pierwszego kroku i usuń z pola widzenia źródła natychmiastowej ulgi.'
};

export const chapterTwelveExerciseGoalAnalysis: SelfExercise = {
  id: 'ex-ch12-goal-analysis',
  title: 'Ćwiczenie 12.1: Analiza Własnego Celu i Pragnienia',
  subtitle: 'Zbadaj strukturę celu, którego obecnie nie realizujesz',
  objective: 'Odkrycie źródeł oporu i precyzyjne nazwanie wartości celu.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Nazwanie sprzeczności poznawczych pobudza korę przedczołową do weryfikacji nieracjonalnych oczekiwań.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz cel, którego nie realizujesz',
      instruction: 'Zapisz cel, na którym niby bardzo Ci zależy, ale nie podejmujesz w jego kierunku regularnych działań.',
      promptText: 'Mój cel:',
      placeholder: 'Chcę nauczyć się płynnie mówić po angielsku...'
    },
    {
      stepNumber: 2,
      title: 'Zbadaj źródło pragnienia',
      instruction: 'Czy ten cel jest Twój własny (motywacja wewnętrzna), czy wynika z presji otoczenia (motywacja zewnętrzna)?',
      promptText: 'Dlaczego tego chcesz?',
      placeholder: 'Chcę swobodnie podróżować i czytać książki branżowe (wewnętrzna) vs czuję wstyd przy znajomych (zewnętrzna)...'
    },
    {
      stepNumber: 3,
      title: 'Nazwij przewidywany koszt',
      instruction: 'Jaki trud, nieprzyjemne emocje lub dyskomfort kojarzysz z realizacją tego celu?',
      promptText: 'Co sprawia, że odsuwasz ten cel?',
      placeholder: 'Lęk przed robieniem błędów gramatycznych, zmęczenie po pracy, nuda przy wkuwaniu słówek...'
    }
  ],
  reflectionQuestions: [
    'Czy Twój cel jest wystarczająco ważny, aby zaakceptować związany z nim dyskomfort?',
    'Jakie przekonanie o sobie blokuje Twój pierwszy krok?'
  ]
};

export const chapterTwelveExerciseBreakdown: SelfExercise = {
  id: 'ex-ch12-goal-breakdown',
  title: 'Ćwiczenie 12.2: Rozbicie Celu na Konkretne Działania',
  subtitle: 'Przełóż odległy rezultat na operacyjny ciąg wykonawczy',
  objective: 'Zmniejszenie dystansu poznawczego między intencją a konkretną czynnością.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Konkretne planowanie sekwencji działań redukuje obciążenie pamięci roboczej i wycisza lęk przed nieznanym.',
  steps: [
    {
      stepNumber: 1,
      title: 'Cel końcowy',
      instruction: 'Zapisz swój cel główny.',
      promptText: 'Cel końcowy:',
      placeholder: 'Zdać egzamin z matematyki na 80%...'
    },
    {
      stepNumber: 2,
      title: 'Cele pośrednie',
      instruction: 'Podziel cel na 3 kamienie milowe.',
      promptText: 'Cele pośrednie:',
      placeholder: '1. Opanować algebrę. 2. Przerobić geometrię. 3. Rozwiązać 5 arkuszy pokazowych...'
    },
    {
      stepNumber: 3,
      title: 'Zadanie na dziś i Konkretna czynność',
      instruction: 'Zdefiniuj dokładnie jedno działanie na dzisiaj z podaniem godziny, miejsca i czasu trwania.',
      promptText: 'Konkretne działanie:',
      placeholder: 'Dzisiaj o 17:00 przy biurku przez 25 minut rozwiążę 5 zadań z równań kwadratowych...'
    }
  ],
  reflectionQuestions: [
    'O ile łatwiej wyobrazić sobie wykonanie 25-minutowego zadania niż „naukę do egzaminu”?',
    'Co zrobisz, gdy po 25 minutach poczujesz chęć kontynuowania pracy?'
  ]
};

export const chapterTwelveExerciseIntentionGap: SelfExercise = {
  id: 'ex-ch12-intention-gap',
  title: 'Ćwiczenie 12.3: Analiza Luki Między Intencją a Działaniem',
  subtitle: 'Zidentyfikuj, w którym miejscu Twoje „chcę” przestaje zamieniać się w „robię”',
  objective: 'Zlokalizowanie punktu załamania procesu motywacyjnego.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Analiza błędów decyzyjnych wzmacnia funkcje monitorowania w kory przedczołowej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Przeanalizuj Ostatnie Zaniechanie',
      instruction: 'Przypomnij sobie sytuację z tego tygodnia, w której zaplanowałeś działanie, ale go nie wykonałeś.',
      promptText: 'Co miałeś zrobić, a czego nie zrobiłeś?',
      placeholder: 'Miałem pójść pobiegać o 18:00...'
    },
    {
      stepNumber: 2,
      title: 'Ustal Moment Przełamania',
      instruction: 'W którym dokładnie momencie podjąłeś decyzję o zaniechaniu? Co było wyzwalaczem?',
      promptText: 'Gdzie pękła intencja?',
      placeholder: 'Gdy usiadłem na kanapie po powrocie do domu i poczułem chłód za oknem...'
    },
    {
      stepNumber: 3,
      title: 'Zaprojektuj Zmianę Reakcji',
      instruction: 'Co zrobisz następnym razem w tym samym momencie przełamania?',
      promptText: 'Nowy skrypt na moment oporu:',
      placeholder: 'Nie będę siadał na kanapie — strój do biegania założę od razu po przekroczeniu progu domu...'
    }
  ],
  reflectionQuestions: [
    'Jaka myśl racjonalizująca pojawiła się w Twojej głowie tuż przed odłożeniem zadania?',
    'Jak możesz przygotować się na tę myśl następnym razem?'
  ]
};

export const chapterTwelveExerciseProcrastinationMap: SelfExercise = {
  id: 'ex-ch12-procrastination-map',
  title: 'Ćwiczenie 12.4: Mapa Prokrastynacji jako Systemu',
  subtitle: 'Rozłóż swój wzorzec odkładania na 7 etapów pętli',
  objective: 'Ujawnienie emocjonalnej i nagradzającej funkcji prokrastynacji.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Świadome prześledzenie pętli unikania odłącza automatyczny odruch nawykowy w zwojach podstawy.',
  steps: [
    {
      stepNumber: 1,
      title: 'Etap 1 i 2 — Zadanie i Przewidywanie',
      instruction: 'Wpisz trudne zadanie oraz swoją myślową ocenę wysiłku.',
      promptText: 'Zadanie i myśl:',
      placeholder: 'Zadanie: Napisanie raportu. Myśl: To zajmie mnóstwo czasu i będzie nudne...'
    },
    {
      stepNumber: 2,
      title: 'Etap 3, 4 i 5 — Emocja, Unikanie i Ulga',
      instruction: 'Jaka emocja się pojawia? Co robisz zamiast pracy? Jaka ulga następuje?',
      promptText: 'Emocja, zachowanie zastępcze i ulga:',
      placeholder: 'Emocja: niepokój i znużenie. Zachowanie: sprzątanie biurka i przeglądanie wiadomości. Ulga: natychmiastowe opadnięcie napięcia...'
    },
    {
      stepNumber: 3,
      title: 'Etap 6 i 7 — Nagroda i Uczenie się',
      instruction: 'Jaką szybką nagrodę dostaje Twój mózg i czego się uczy?',
      promptText: 'Nagroda i wniosek mózgu:',
      placeholder: 'Nagroda: stymulacja nowościami w internecie. Wniosek mózgu: unikanie raportu przynosi szybki spokój...'
    }
  ],
  reflectionQuestions: [
    'Przed jaką konkretną emocją próbujesz uciec, odkładając to zadanie?',
    'Jak inaczej możesz uregulować tę emocję bez uciekania w rozpraszacze?'
  ]
};

export const chapterTwelveExerciseImmediateRewards: SelfExercise = {
  id: 'ex-ch12-immediate-rewards',
  title: 'Ćwiczenie 12.5: Analiza Natychmiastowych Nagród',
  subtitle: 'Zbadaj konflikt między nagrodą teraz a korzyścią w przyszłości',
  objective: 'Zidentyfikowanie rywalizujących bodźców natychmiastowych i wyrównanie ich wpływu.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Uświadomienie sobie mechanizmu dyskontowania przyszłości obniża subiektywną atrakcyjność pokusy.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wskazanie Rywala Natychmiastowego',
      instruction: 'Jaka natychmiastowa przyjemność lub ulga wygrywa z Twoim długoterminowym celem?',
      promptText: 'Pokusa natychmiastowa:',
      placeholder: 'Słodka przekąska / film na telefonie / gra wideo...'
    },
    {
      stepNumber: 2,
      title: 'Zderzenie Wartości Psychologicznej',
      instruction: 'Porównaj co daje pokusa TERAZ z tym co daje cel ZA MIESIĄC/ROK.',
      promptText: 'Porównanie opcji:',
      placeholder: 'Teraz: 10 minut słodkiego smaku vs Za 6 miesięcy: zdrowa sylwetka i wysokie poczucie własnej wartości...'
    },
    {
      stepNumber: 3,
      title: 'Wprowadzenie Mikro-Nagrody Natychmiastowej do Ważnego Zadania',
      instruction: 'Jak możesz dodać małą, zdrową nagrodę natychmiast po wykonaniu bloku trudnej pracy?',
      promptText: 'Moja mikro-nagroda wykonawcza:',
      placeholder: 'Aromatyczna herbata pusta tylko po skończonym 25-minutowym bloku nauki...'
    }
  ],
  reflectionQuestions: [
    'Za ile dni/miesięcy odczujesz realny owoc swojego obecnego wysiłku?',
    'W jaki sposób możesz przypominać sobie o tym owocu w chwili pokusy?'
  ]
};

export const chapterTwelveExerciseEnvironmentDesign: SelfExercise = {
  id: 'ex-ch12-environment-design',
  title: 'Ćwiczenie 12.6: Projektowanie Środowiska Działania',
  subtitle: 'Przenieś samokontrolę z poziomu walki woli na poziom inżynierii otoczenia',
  objective: 'Usunięcie przeszkód i rozpraszaczy z pola widzenia i przestrzeni fizycznej.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Redukcja wskazówek rozpraszających eliminuje odruchowe pobudzenie układu dopaminergicznego.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zidentyfikuj Pokusy w Polu Widzenia',
      instruction: 'Wypisz przedmioty i bodźce, które najczęściej odciągają Cię od zaplanowanego działania.',
      promptText: 'Główni rozpraszacze przestrzenni:',
      placeholder: 'Telefon leżący na biurku, włączone powiadomienia w przeglądarce, bałagan w dokumentach...'
    },
    {
      stepNumber: 2,
      title: 'Zwiększ Tarcie dla Pokus (Krok Twardy)',
      instruction: 'Zaprojektuj modyfikację otoczenia, która utrudni sięgnięcie po pokusę.',
      promptText: 'Zwiększenie tarcia:',
      placeholder: 'Telefon wynoszę do drugiego pokoju, blokuję aplikacje na 2 godziny, wyłączam Wi-Fi...'
    },
    {
      stepNumber: 3,
      title: 'Zmniejsz Tarcie dla Właściwego Zachowania',
      instruction: 'Jak możesz ułatwić i przygotować przestrzeń do rozpoczęcia właściwego zadania?',
      promptText: 'Zmniejszenie tarcia:',
      placeholder: 'Książki i otwarty notes kładę na biurku już wieczorem poprzedniego dnia...'
    }
  ],
  reflectionQuestions: [
    'O ile mniej energii zużyjesz na siłę woli, gdy pokusa zniknie z pokoju?',
    'Jakie jeszcze ułatwienie przestrzenne możesz wprowadzić na swoim stanowisku pracy?'
  ]
};

export const chapterTwelveExerciseProgressSense: SelfExercise = {
  id: 'ex-ch12-progress-sense',
  title: 'Ćwiczenie 12.7: Analiza Poczucia Postępu i Informacji Zwrotnej',
  subtitle: 'Zbuduj wizualny wskaźnik posuwania się do przodu',
  objective: 'Wzmocnienie poczucia kompetencji poprzez obserwowalne dowody rozwoju.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Obserwowanie mierzalnych dowodów postępu stymuluje wydzielanie dopaminy, wzmacniając chęć kontynuowania wysiłku.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz Obszar i Miernik',
      instruction: 'Wybierz czynność i ustal dla niej mierzalny wskaźnik wykonania.',
      promptText: 'Obszar i miernik:',
      placeholder: 'Nauka słówek -> liczba opanowanych fiszek dziennie...'
    },
    {
      stepNumber: 2,
      title: 'Zaprojektuj Wizualny Rejestrator',
      instruction: 'W jaki sposób będziesz rejestrować wykonanie zadania (lista zadań, wykres, kalendarz)?',
      promptText: 'Forma rejestracji:',
      placeholder: 'Papierowa tarcza na ścianie, na której odhaczam każdy zrobiony 25-minutowy blok...'
    },
    {
      stepNumber: 3,
      title: 'Ustal Przegląd Tygodniowy',
      instruction: 'Kiedy w tygodniu podsumujesz wykonaną pracę i wyciągniesz wnioski?',
      promptText: 'Czas przeglądu:',
      placeholder: 'Każda niedziela o 19:00 — sprawdzam liczbę odhaczonych bloków i planuję kolejny tydzień...'
    }
  ],
  reflectionQuestions: [
    'Jak czujesz się, widząc ciąg skreślonych zadań na swojej karcie?',
    'Dlaczego brak jakiejkolwiek informacji zwrotnej tak szybko gasi zapał?'
  ]
};

export const chapterTwelveExerciseStartingProcess: SelfExercise = {
  id: 'ex-ch12-starting-process',
  title: 'Ćwiczenie 12.8: Analiza Własnego Procesu Rozpoczynania Działania',
  subtitle: 'Zbuduj bezdyskusyjny mikro-rytuał startowy',
  objective: 'Obniżenie oporu wejściowego w pierwszych 120 sekundach pracy.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Zautomatyzowany mikro-rytuał inicjujący redukuje napięcie decyzyjne w kory przedczołowej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj Trudne Rozpoczęcie',
      instruction: 'Z jaką czynnością masz największy problem, aby w ogóle siąść i zacząć?',
      promptText: 'Trudne rozpoczęcie:',
      placeholder: 'Pisanie prac dyplomowej / ćwiczenia fizyczne po pracy...'
    },
    {
      stepNumber: 2,
      title: 'Stwórz Mikro-Krok 2-Minutowy',
      instruction: 'Jaki jest najmniejszy możliwy krok startowy, który nie wywołuje żadnego oporu?',
      promptText: 'Mikro-krok 2-minutowy:',
      placeholder: 'Otworzyć plik z pracą i napisać jedno pierwsze zdanie / założyć buty do biegania i stanąć na przedpokoju...'
    },
    {
      stepNumber: 3,
      title: 'Ustal Regułę Dozwolonej Rezygnacji',
      instruction: 'Daj sobie prawo do przerwania po 2 minutach, jeśli nadal będziesz czuć opór.',
      promptText: 'Moja umowa z samym sobą:',
      placeholder: 'Jeśli po napisaniu jednego zdania i 2 minutach pracy nadal będę chciał przestać, mam prawo to zrobić bez poczucia winy...'
    }
  ],
  reflectionQuestions: [
    'Jak często po wykonaniu pierwszego 2-minutowego kroku kontynuujesz pracę?',
    'Dlaczego pokonanie tataraku bezczynności w pierwszych 2 minutach jest najtrudniejszą częścią całego zadania?'
  ]
};

export const chapterTwelve: Chapter = {
  number: 12,
  title: 'Motywacja, Cele i Uruchamianie Działania',
  subtitle: 'Psychologia pragnienia, luka między intencją a działaniem, prokrastynacja jako system i inżynieria wykonawcza',
  leadParagraph: 'Człowiek może bardzo czegoś chcieć i jednocześnie tego nie robić. To zdanie na pierwszy rzut oka wydaje się sprzeczne. Jeżeli ktoś chce zdać egzamin, dlaczego nie zaczyna się uczyć? Jeżeli chce poprawić kondycję, dlaczego nie wychodzi pobiegać? W codziennym języku zbywamy ten problem hasłem „brak motywacji”. W rzeczywistości pomiędzy pragnieniem a zachowaniem znajduje się skomplikowany system procesów psychologicznych. W tym rozdziale przejdziemy od prostego pytania „Czego chcę?” do użytecznego: „Dlaczego w określonych warunkach robię to, co robię?”.',
  totalEstimatedPages: 58,
  sections: [
    {
      id: 'sec-12-1',
      pageNumber: 550,
      sectionNumber: '12.1',
      title: 'Czym jest motywacja? Potrzeba, pragnienie, cel i intencja',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Nic nie jest tak wyczerpujące jak wieczne wiszenie niezrealizowanego zadania.',
        author: 'William James'
      },
      paragraphs: [
        'Człowiek może bardzo czegoś chcieć i jednocześnie tego nie robić. Jeżeli ktoś chce zdać egzamin, dlaczego nie zaczyna się uczyć? Jeżeli chce poprawić kondycję, dlaczego nie wychodzi pobiegać? Jeżeli chce zaoszczędzić pieniądze, dlaczego ponownie kupuje rzeczy, których właściwie nie potrzebuje?',
        'W codziennym języku często rozwiązujemy ten problem jednym słowem: „brak motywacji”. Takie wyjaśnienie jest jednak zbyt proste. Motywacja nie jest przełącznikiem, który znajduje się w pozycji ON albo OFF. Jest procesem zależnym od wielu czynników. Na zachowanie wpływają między innymi potrzeby, oczekiwania, emocje, wartość celu, przewidywane konsekwencje, poczucie kompetencji, środowisko, wcześniejsze doświadczenia oraz dostępność natychmiastowych nagród.',
        'Dlatego dwie osoby mogą mieć dokładnie ten sam cel, a mimo tego zachowywać się zupełnie inaczej. Jedna rozpocznie działanie natychmiast. Druga będzie odkładała je przez kilka dni. Obie mogą twierdzić, że naprawdę im zależy. Nie oznacza to automatycznie, że jedna z nich „chce bardziej”. Oznacza to, że pomiędzy samym pragnieniem a zachowaniem znajduje się cały system procesów psychologicznych.',
        'Warto precyzyjnie odróżnić podstawowe pojęcia:',
        '1. Potrzeba — wskazuje na pewien brak lub stan, który organizm chce zmienić (np. bezpieczeństwo, kompetencja, relacje, autonomia).',
        '2. Pragnienie — bezpośrednie doświadczenie psychiczne: „chcę dostać tę rzecz”, „chcę zdać egzamin”. Pragnienie może być silne, ale sama jego obecność nie gwarantuje działania.',
        '3. Cel — wskazuje na pożądany rezultat („chcę opanować ten język na poziomie B2”).',
        '4. Intencja — oznacza zamiar wykonania działania („jutro o 17:00 usiądę do ćwiczeń”). Pojawia się zamiar, ale nadal pomiędzy intencją a wykonaniem istnieje luka — luka między decyzją a działaniem.',
        'Jednym z najważniejszych wniosków jest fakt, że „chcę” nie oznacza „robię”. Wyobraźmy sobie dwie osoby mówiące: „Chcę nauczyć się angielskiego”. Pierwsza codziennie przez 20 minut wykonuje ćwiczenia. Druga ogląda filmy o nauce języków, kupuje zeszyty, tworzy plany, ale nie zaczyna. Druga osoba wcale nie musi „nie chcieć” — jej problem może polegać na oczekiwaniu zbyt dużego wysiłku, lęku przed błędami, braku jasnego pierwszego kroku czy środowisku pełnym natychmiastowych nagród.'
      ]
    },
    {
      id: 'sec-12-2',
      pageNumber: 555,
      sectionNumber: '12.2',
      title: 'Cel a działanie: Dekonstrukcja celu końcowego na czynności',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Cel końcowy jest obrazem tego, co człowiek chce osiągnąć. Problem polega na tym, że mózg i zachowanie muszą przełożyć odległy rezultat na działania możliwe do wykonania teraz. „Chcę zdać egzamin” jest celem — nie jest jednak konkretnym działaniem.',
        'Działaniem może być otworzenie podręcznika, przeczytanie pięciu stron, rozwiązanie dziesięciu zadań czy powtórzenie definicji. Właśnie dlatego pomocne jest rozdzielenie celu końcowego od celów pośrednich i konkretnych zadań:',
        '• Cel końcowy: „Chcę zdać egzamin.”',
        '• Cele pośrednie: „Muszę opanować pięć działów.”',
        '• Zadanie: „Dzisiaj powtórzę pierwszy dział.”',
        '• Konkretne działanie: „O godzinie 17:00 usiądę przy biurku i przez 25 minut rozwiążę zadania.”',
        'Każde kolejne przejście zmniejsza odległość pomiędzy pragnieniem a zachowaniem. Samo ustalenie celu nie wystarcza, gdy cel jest zbyt odległy, zbyt ogólny, zbyt trudny lub pozbawiony planu oraz informacji zwrotnej. Plan jest mechanizmem tłumaczącym intencję na zachowanie według ciągu:',
        'cel → plan → konkretna czynność → wykonanie → informacja zwrotna → korekta.',
        'To znacznie bardziej użyteczny model niż uproszczony schemat: cel → sukces.'
      ],
      exerciseRef: chapterTwelveExerciseBreakdown
    },
    {
      id: 'sec-12-3',
      pageNumber: 560,
      sectionNumber: '12.3',
      title: 'Motywacja wewnętrzna i zewnętrzna: Autonomia i poczucie kompetencji',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Ludzie podejmują działania z różnych powodów. Czasami działanie samo w sobie jest interesujące — jak uczeń rozwiązujący zadania matematyczne dla satysfakcji ze znalezienia wyniku (motywacja wewnętrzna). Innym razem działanie jest środkiem do uzyskania czegoś innego, np. oceny, pochwały, wynagrodzenia czy uniknięcia kary (motywacja zewnętrzna).',
        'W praktycznym życiu obie formy motywacji mogą współistnieć. Człowiek może lubić swoją pracę, a jednocześnie chcieć otrzymać wynagrodzenie. Uczeń może interesować się historią, ale równocześnie zależeć mu na dobrej ocenie.',
        'Kluczowymi filarami gotowości do działania są:',
        '1. Autonomia — poczucie, że człowiek ma wpływ na swoje decyzje. Poczucie „sam wybrałem ten cel” daje inne doświadczenie niż „muszę to zrobić, bo ktoś mi kazał”. Z czasem narzucone wymogi mogą zostać zaakceptowane, gdy człowiek dostrzeże ich sens.',
        '2. Poczucie kompetencji — przekonanie, że jest się w stanie wykonać zadanie. Zadanie typu „przeczytaj jedną stronę” buduje gotowość, podczas gdy „opanuj cały przedmiot w trzy dni” wywołuje poczucie bezradności.',
        'Wtedy pojawia się interesujące zjawisko: wysoka wartość celu może współistnieć z niską gotowością do działania. Nie dlatego, że cel przestał być ważny, lecz dlatego, że przewidywany koszt wydaje się zbyt duży.'
      ],
      subsections: [
        {
          title: 'Paradoks wysokiej wartości i braku działania',
          paragraphs: [
            'Często im ważniejszy cel (np. egzamin dojrzałości, kluczowy projekt w pracy), tym większe napięcie emocjonalne wywołuje praca nad nim. W konsekwencji człowiek параdoksalnie opóźnia rozpoczęcie działania przy najważniejszych zadaniach.'
          ],
          highlightBox: {
            title: 'Wgląd psychologiczny',
            content: 'Gdy cel jest bardzo ważny, wyzwala duży lęk przed niepowodzeniem. Wysoka wartość celu zwiększa stawkę emocjonalną, a to rodzi potrzebę ucieczki.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-12-4',
      pageNumber: 565,
      sectionNumber: '12.4',
      title: 'Natychmiastowa nagroda kontra przyszła korzyść: Odraczanie gratyfikacji',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Jednym z podstawowych problemów motywacji jest różnica między tym, co można otrzymać TERAZ, a tym, co można otrzymać PÓŹNIEJ. Telefon daje natychmiastową możliwość rozrywki, informacji, kontaktu i nowości. Nauka może dać korzyść dopiero za kilka tygodni. Sport przynosi efekty po wielu treningach.',
        'W takich sytuacjach pojawia się problem odraczania gratyfikacji. Człowiek musi zdecydować, czy ważniejsza jest mniejsza nagroda teraz, czy większa, ale późniejsza korzyść.',
        'Psychologia opisuje tu zjawisko dyskontowania przyszłości. Ludzie nie traktują przyszłej nagrody tak samo jak obecnej. Im bardziej odległy rezultat, tym łatwiej zostaje psychologicznie „pomniejszony”. Dlatego komunikat „Zdam egzamin za miesiąc” przegrywa z „Jeszcze tylko jeden film”. Problem nie polega na braku zrozumienia konsekwencji, lecz na tym, że obie opcje mają zupełnie inną natychmiastową wartość psychologiczną.'
      ],
      exerciseRef: chapterTwelveExerciseImmediateRewards
    },
    {
      id: 'sec-12-5',
      pageNumber: 570,
      sectionNumber: '12.5',
      title: 'Prokrastynacja jako system regulacji emocjonalnej',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Prokrastynacja jest często sprowadzana do zwykłego „lenistwa”. To uproszczenie. Prokrastynacja jest odkładaniem zaplanowanego działania pomimo świadomości, że opóźnienie może przynieść negatywne konsekwencje.',
        'Kluczowe jest prześledzenie pełnego systemu prokrastynacji:',
        '• Etap 1 (Zadanie): „Muszę się nauczyć / napisać raport.”',
        '• Etap 2 (Przewidywanie): „To będzie trudne i nieprzyjemne.”',
        '• Etap 3 (Emocja): Pojawia się napięcie, nuda, niepewność lub lęk przed porażką.',
        '• Etap 4 (Unikanie): „Najpierw sprawdzę telefon / posprzątam biurko.”',
        '• Etap 5 (Chwilowa ulga): Napięcie związane z zadaniem natychmiast opada.',
        '• Etap 6 (Nagroda): Telefon dostarcza rozrywki, stymulacji i kontaktu.',
        '• Etap 7 (Uczenie się): Mózg otrzymuje informację: „Kiedy zadanie powoduje nieprzyjemne napięcie, odsunięcie go przynosi szybką ulgę.”',
        'I właśnie tu powstaje pętla: zadanie → przewidywanie → nieprzyjemna emocja → unikanie → ulga → nagroda → większa gotowość do unikania następnym razem.',
        'Prokrastynacja nasila się przed ważnymi zadaniami, ponieważ im ważniejsze zadanie, tym większy lęk przed oceną, poczuciem niekompetencji i możliwością porażki. Prokrastynacja pełni więc krótkoterminową funkcję regulowania emocji, nawet jeśli długoterminowo pogarsza sytuację.'
      ],
      exerciseRef: chapterTwelveExerciseProcrastinationMap
    },
    {
      id: 'sec-12-6',
      pageNumber: 575,
      sectionNumber: '12.6',
      title: 'Samokontrola: Kontrola impulsu kontra projektowanie środowiska',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Samokontrola często kojarzy się wyłącznie z siłą woli. Jednak poleganie wyłącznie na sile woli jest wysoce ryzykowne. Jeżeli człowiek codziennie musi podejmować tę samą trudną decyzję („Czy teraz użyję telefonu, czy będę się uczył?”), to za każdym razem uruchamia konflikt wewnętrzny.',
        'Skuteczniejszym podejściem jest zmiana środowiska:',
        '• Telefon zostawiony w innym pomieszczeniu,',
        '• Wyłączone powiadomienia,',
        '• Przygotowane wcześniej materiały do pracy,',
        '• Ustala konkretna godzina rozpoczęcia,',
        '• Ograniczona liczba rozpraszaczy.',
        'Wtedy część pracy zostaje przeniesiona z poziomu kontroli zachowania na poziom projektowania sytuacji. Pierwsza osoba trzyma telefon na biurku i za każdym razem walczy z impulsem. Druga odkłada telefon do innego pokoju. Obie mogą osiągnąć cel, ale druga usunęła konieczność ciągłego wysiłku woli. Zasada brzmi: Nie każdą przeszkodę trzeba pokonywać siłą. Czasami można ją usunąć z drogi.'
      ],
      exerciseRef: chapterTwelveExerciseEnvironmentDesign
    },
    {
      id: 'sec-12-7',
      pageNumber: 580,
      sectionNumber: '12.7',
      title: 'Poczucie postępu i rola informacji zwrotnej',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Motywację wzmacnia informacja, że człowiek rzeczywiście posuwa się do przodu. Jeżeli ktoś przez tydzień pracuje, ale nie widzi żadnego efektu, pojawia się myśli: „To nie ma sensu”. Z kolei widoczny postęp zwiększa poczucie kompetencji.',
        'Dlatego wysoce użyteczne są:',
        '• Listy wykonanych zadań,',
        '• Mierzalne etapy wykonania,',
        '• Testy kontrolne i sprawdzenia wiedzy,',
        '• Obserwowalny rozwój umiejętności.',
        'Nie chodzi o obsesyjne mierzenie wszystkiego, lecz o dostarczanie informacji zwrotnej. Człowiek potrzebuje wiedzieć nie tylko „Czy osiągnąłem cel?”, ale również „Czy jestem bliżej niż wcześniej?”.'
      ],
      exerciseRef: chapterTwelveExerciseProgressSense
    },
    {
      id: 'sec-12-8',
      pageNumber: 585,
      sectionNumber: '12.8',
      title: 'Studium przypadku: Michał i egzamin za miesiąc',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Poniższe studium przypadku ilustruje przejście od racjonalizacji i unikania do przebudowy systemu wykonawczego u 17-letniego Michała.'
      ],
      caseStudyRef: chapterTwelveCaseStudyMichal
    },
    {
      id: 'sec-12-9',
      pageNumber: 590,
      sectionNumber: '12.9',
      title: 'Zbiór Warsztatów i Ćwiczeń Rozwojowych z Rozdziału 12',
      category: 'cwiczenia',
      readingTimeMinutes: 18,
      paragraphs: [
        'W tej sekcji zebrano kompletny zestaw warsztatów pozwalających na przeanalizowanie własnego procesu motywacyjnego, celów, luki wykonawczej oraz pętli prokrastynacji.'
      ],
      exerciseRef: chapterTwelveExerciseStartingProcess
    },
    {
      id: 'sec-12-10',
      pageNumber: 594,
      sectionNumber: '12.10',
      title: 'Połączenia z innymi rozdziałami: Motywacja, Stres i Tożsamość',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Motywacja nie działa w izolacji od pozostałych procesów psychicznych:',
        '1. Motywacja ↔ Stres: Stres i pobudzenie afektywne mogą dramatycznie zmieniać gotowość do działania. Wysoki stres zawęża uwagę i skłania do natychmiastowej ucieczki w ulgę (prokrastynacja). Z kolei brak stresu może powodować niewystarczające pobudzenie do rozpoczęcia pracy.',
        '2. Motywacja ↔ Tożsamość: To, jak człowiek postrzega siebie („Jestem kimś, kto kończy zadania” vs „Jestem leniwy”), definiuje filtr decyzyjny. Z kolei powtarzalne przekraczanie luki wykonawczej dostarcza dowodów, które zmieniają obraz siebie.',
        '3. Motywacja ↔ Nawyki: Gdy konkretne zachowanie powtarzane jest w stałym kontekście, przestaje wymagać bieżącej motywacji i staje się automatyzmem.'
      ]
    },
    {
      id: 'sec-12-11',
      pageNumber: 598,
      sectionNumber: '12.11',
      title: 'Podsumowanie i Słownik Pojęć Rozdziału 12',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Najważniejsze idee do zapamiętania z Rozdziału 12:',
        '• Motywacja to proces uruchamiania, kierowania, intensyfikowania i podtrzymywania działania, a nie stan jednowymiarowy.',
        '• Pomiędzy intencją a działaniem istnieje luka — samo „chcę” nie gwarantuje wykonania.',
        '• Cel końcowy należy przełożyć na cele pośrednie, zadanie i konkretną czynność wyznaczoną w czasie i przestrzeni.',
        '• Prokrastynacja jest krótkoterminową regulacją emocji nieprzyjemnych (lęk, nuda, niepewność), a nie zwykłym lenistwem.',
        '• Kontrola środowiska (usuwanie pokus) jest skuteczniejsza niż ciągłe poleganie na sile woli.',
        '• Widoczne poczucie postępu obniża koszt dalszego wysiłku.',
        'Słownik terminów Rozdziału 12:',
        '• Luka wykonawcza (Intention-Behavior Gap) — rozbieżność pomiędzy sformułowaną intencją a faktycznie podjętym zachowaniem.',
        '• Dyskontowanie przyszłości (Temporal Discounting) — psychologiczne pomniejszanie wartości nagrody w zależności od jej odległości w czasie.',
        '• Prokrastynacja — nieadaptacyjne odkładanie zaplanowanego działania pomimo świadomości negatywnych konsekwencji.',
        '• Autonomia — poczucie sprawczości i własnego wyboru w podejmowaniu działań.',
        '• Poczucie kompetencji — przekonanie o posiadaniu zasobów i umiejętności potrzebnych do wykonania zadania.'
      ]
    },
    {
      id: 'sec-12-12',
      pageNumber: 602,
      sectionNumber: '12.12',
      title: 'Sprawdzian Wiedzy i Egzamin Końcowy z Rozdziału 12',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'Sprawdź swój poziom zrozumienia mechanizmów motywacji, dekonstrukcji celów, dyskontowania przyszłości oraz pętli prokrastynacji w poniższym teście sytuacyjnym.'
      ]
    }
  ]
};
