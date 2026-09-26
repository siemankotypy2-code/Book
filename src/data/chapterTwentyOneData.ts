import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterTwentyOneExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii poznawczej metapoznanie (Metacognition) wg Johna Flavella oznacza:',
    topic: 'Metapoznanie',
    sectionRef: 'Sekcja 21.2',
    options: [
      { label: 'A', text: 'Zdolność do monitorowania, kontrolowania i oceniania własnych procesów poznawczych („myślenie o myśleniu”).', isCorrect: true },
      { label: 'B', text: 'Zdolność do szybkiego czytania książek w języku angielskim.', isCorrect: false },
      { label: 'C', text: 'Proces czyszczenia pamięci podręcznej komputera.', isCorrect: false },
      { label: 'D', text: 'Nkontrolowane myślenie o wakacjach podczas pracy.', isCorrect: false }
    ],
    explanation: 'Metapoznanie to nawigacja drugiego rzędu. Pozwala zadać sobie pytanie: „Czy ja naprawdę rozumiem ten materiał, czy tylko wydaje mi się, że go rozumiem?”.',
    keyTakeaway: 'Metapoznanie to kapitan, który obserwuje nawigatora w Twoim umyśle.'
  },
  {
    id: 2,
    question: 'Eksperymenty Nisbetta i Wilsona („Telling More Than We Can Know”) dowiodły, że ludzie pytani o przyczyny własnych wyborów:',
    topic: 'Ograniczenia Introspekcji',
    sectionRef: 'Sekcja 21.4',
    options: [
      { label: 'A', text: 'Często tworzą przekonujące racjonalizacje post-factum, nie mając rzeczywistego bezpośredniego dostępu do podświadomych mechanizmów decyzyjnych.', isCorrect: true },
      { label: 'B', text: 'Zawsze podają idealnie trafną przyczyny neurologiczne każdego odruchu.', isCorrect: false },
      { label: 'C', text: 'Nie potrafią wypowiedzieć ani jednego słowa.', isCorrect: false },
      { label: 'D', text: 'Pamiętają dokładnie każdy sygnał z pnia mózgu.', isCorrect: false }
    ],
    explanation: 'Gdy badani wybierali rajtuzki położone po prawej stronie (efekt pozycji), twierdzili, że wybrali je z powodu „lepszej jakości i splotu”. Introspekcja często tworzy dorobioną teorię zamiast faktu.',
    keyTakeaway: 'Twoje uzasadnienie wyboru jest często opowieścią wymyśloną przez korę po podjęciu decyzji.'
  },
  {
    id: 3,
    question: 'Różnica między konstruktywną autorefleksją a niszczącą ruminacją (Rumination) polega na tym, że:',
    topic: 'Autorefleksja vs Ruminacja',
    sectionRef: 'Sekcja 21.8',
    options: [
      { label: 'A', text: 'Autorefleksja zorientowana jest na analizę problemu z dystansu i poszukiwanie rozwiązań, a ruminacja to zapętlone, pełne wstydu odtwarzanie błędu bez intencji działania.', isCorrect: true },
      { label: 'B', text: 'Autorefleksja występuje tylko rano, a ruminacja wieczorem.', isCorrect: false },
      { label: 'C', text: 'Ruminacja zwiększa wydzielanie serotoniny dziesięciokrotnie.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy, obie są jednakowo szkodliwe dla zdrowia.', isCorrect: false }
    ],
    explanation: 'Ruminacja („Dlaczego znowu mi nie wyszło, jestem do niczego”) utrwala wyczerpanie. Autorefleksja („Co konkretnie poszło nie tak i co zrobimy inaczej następnym razem”) buduje sprawczość.',
    keyTakeaway: 'Przełam ruminację pytaniem: „Jaki jest mój następny konstruktywny krok?”.'
  },
  {
    id: 4,
    question: 'Fizjologicznym sygnałem wykrycia błędu przez mózg (Error-Related Negativity – ERN) zarządza głównie:',
    topic: 'Neurobiologia Błędu',
    sectionRef: 'Sekcja 21.5',
    options: [
      { label: 'A', text: 'Grzbietowa część przedniej kory obwodu (dACC).', isCorrect: true },
      { label: 'B', text: 'Móżdżek i palce stóp.', isCorrect: false },
      { label: 'C', text: 'Kora wzrokowa w płacie potylicznym.', isCorrect: false },
      { label: 'D', text: 'Pęcherzyk żółciowy.', isCorrect: false }
    ],
    explanation: 'Gdy popełniasz błąd (np. wciśniesz zły klawisz), dACC generuje sygnał ERN w ciągu 50–100 milisekund – jeszcze zanim uświadomisz sobie pomyłkę.',
    keyTakeaway: 'Twój mózg rejestruje błąd zanim zdążysz się nad nim zastanowić.'
  },
  {
    id: 5,
    question: 'Zjawisko de-centracji (De-centering / Cognitive Defusion) w praktyce metapoznawczej polega na:',
    topic: 'De-centracja Poznawcza',
    sectionRef: 'Sekcja 21.6',
    options: [
      { label: 'A', text: 'Oserwowaniu myśli jako przemijających zdarzeń umysłowych, a nie jako niepodważalnych faktów o rzeczywistości.', isCorrect: true },
      { label: 'B', text: 'Próbie całkowitego wykasowania wszystkich myśli z głowy na 24 godziny.', isCorrect: false },
      { label: 'C', text: 'Szybkim kręceniu się w kółko aż do zawrotów głowy.', isCorrect: false },
      { label: 'D', text: 'Krzyczeniu na własne emocje w celu ich przestraszenia.', isCorrect: false }
    ],
    explanation: 'Zamiast myśleć: „Jestem beznadziejny” (fuzja), mówisz: „Zauważam myśl, że czuję się beznadziejny” (de-centracja). Tworzy to przestrzeń do wyboru reakcji.',
    keyTakeaway: 'Nie jesteś swoimi myślami – jesteś przestrzenią, w której te myśli się pojawiają.'
  },
  {
    id: 6,
    question: 'W ocenie własnej wiedzy, złudzenie wyjaśnienia (Illusion of Explanatory Depth) objawia się tym, że:',
    topic: 'Złudzenie Wyjaśnienia',
    sectionRef: 'Sekcja 21.7',
    options: [
      { label: 'A', text: 'Ludziom wydaje się, że rozumieją działanie złożonych systemów (np. spłuczki, roweru, ekonomii), dopóki nie zostaną poproszeni o szczegółowe wyjaśnienie kroczek po kroczku.', isCorrect: true },
      { label: 'B', text: 'Wszyscy ludzie potrafią bezbłędnie wyjaśnić fizykę kwantową.', isCorrect: false },
      { label: 'C', text: 'Im mniej wiemy, tym bardziej milczymy w dyskusji.', isCorrect: false },
      { label: 'D', text: 'Złudzenie to występuje tylko u dzieci do 3 roku życia.', isCorrect: false }
    ],
    explanation: 'Poproś kogoś, by narysował schemat działania przerzutki w rowerze – pewność siebie błyskawicznie ustąpi miejsca świadomości własnej niewiedzy.',
    keyTakeaway: 'Prawdziwe sprawdzanie wiedzy to próba jej dokładnego wytłumaczenia.'
  },
  {
    id: 7,
    question: 'Czym jest ocena uczenia się (Judgments of Learning – JOL) w metapoznaniu?',
    topic: 'Judgments of Learning',
    sectionRef: 'Sekcja 21.9',
    options: [
      { label: 'A', text: 'Metapoznawcza ocena stopnia opanowania materiału, decydująca o tym, czy potrzebujemy dalszych powtórek.', isCorrect: true },
      { label: 'B', text: 'Ocena wystawiana przez nauczyciela na świadectwie szkolnym.', isCorrect: false },
      { label: 'C', text: 'Test sprawdzający czas reakcji na światło zielone.', isCorrect: false },
      { label: 'D', text: 'Kara pieniężna za spóźnienie na wykład.', isCorrect: false }
    ],
    explanation: 'Jeśli Twoje JOL jest niedokładne (myślisz, że już umiesz, bo tekst wydaje się znajomy), przestajesz się uczyć i doznajesz rozczarowania na egzaminie.',
    keyTakeaway: 'Znajomość tekstu to nie to samo co jego zapamiętanie i rozumienie.'
  },
  {
    id: 8,
    question: 'Jakie podejście do monitorowania emocji w czasie rzeczywistym wspiera samoregulację?',
    topic: 'Monitorowanie Emocji',
    sectionRef: 'Sekcja 21.10',
    options: [
      { label: 'A', text: 'Nazywanie emocji w myśli (Affect Labeling) i lokalizowanie jej sygnałów w ciele bez oceniania.', isCorrect: true },
      { label: 'B', text: 'Gwałtowne tłumienie każdego sygnału złości i udawanie radostki.', isCorrect: false },
      { label: 'C', text: 'Krzyczenie na współpracowników przy każdym napięciu.', isCorrect: false },
      { label: 'D', text: 'Ucieczka w alkohole lub objadanie się.', isCorrect: false }
    ],
    explanation: 'Nazwanie emocji („To jest złość, czuję ją jako ścisk w klatce”) aktywuje brzuszno-boczną korę przedczołową (vlPFC) i wyhamowuje pobudzenie ciała migdałowatego.',
    keyTakeaway: 'Nazwij emocję, aby osłabić jej biologiczny dyktat.'
  },
  {
    id: 9,
    question: 'Co jest głównym celem prowadzenia Dziennika Metapoznawczego (Metacognitive Journal)?',
    topic: 'Dziennik Metapoznawczy',
    sectionRef: 'Sekcja 21.12',
    options: [
      { label: 'A', text: 'Rejestrowanie własnych błędów poznawczych, wyzwalaczy emocjonalnych i schematów reagowania w celu podniesienia trafności obrazu siebie.', isCorrect: true },
      { label: 'B', text: 'Pisanie wierszy miłosnych do nieznajomych.', isCorrect: false },
      { label: 'C', text: 'Zapisywanie cen paliw na stacjach benzynowych.', isCorrect: false },
      { label: 'D', text: 'Liczenie kroków wykonanych w ciągu dnia.', isCorrect: false }
    ],
    explanation: 'Pisanie z dystansu zmusza mózg do przełączenia się z automatycznego Systemu 1 w refleksyjny System 2 i analizę własnych procesów myślowych.',
    keyTakeaway: 'Zapisane myśli stają się obiektem analizy, a nie dyktatorem zachowania.'
  },
  {
    id: 10,
    question: 'W jaki sposób złudzenie wglądu (Insight Illusion) zniekształca naszą samoświadomość?',
    topic: 'Złudzenie Wglądu',
    sectionRef: 'Sekcja 21.4',
    options: [
      { label: 'A', text: 'Jesteśmy przekonani, że doskonale rozumiemy motywy własnego zachowania, podczas gdy w rzeczywistości ignorujemy wpływ czynników sytuacyjnych i biologicznych.', isCorrect: true },
      { label: 'B', text: 'Uważamy, że wszyscy ludzie wokół czytają w naszych myślach.', isCorrect: false },
      { label: 'C', text: 'Widzimy plamy na ścianach i przypisujemy im znaczenie mityczne.', isCorrect: false },
      { label: 'D', text: 'Nie pamiętamy własnego numeru pesel.', isCorrect: false }
    ],
    explanation: 'Niewielki spadek cukru we krwi czy brak snu potrafi wywołać poirytowanie, a nasza kora przedczołowa stworzy filozoficzną teorię o „złym charakterze partnera”.',
    keyTakeaway: 'Zanim stworzysz teorię o swoim życiu, sprawdź, czy nie jesteś po prostu głodny lub zmęczony.'
  },
  {
    id: 11,
    question: 'Co oznacza pojęcie „poziomu reprezentacji zachowania” (Action Identification Theory) Vallachera i Wegnera?',
    topic: 'Poziom Reprezentacji',
    sectionRef: 'Sekcja 21.11',
    options: [
      { label: 'A', text: 'Możliwość opisywania tej samej czynności na poziomie niskim (mechanicznym, np. „poruszam palcami po klawiaturze”) lub wysokim (znaczeniowym, np. „buduję moją przyszłość”).', isCorrect: true },
      { label: 'B', text: 'Podział na aktorów teatralnych i filmowych.', isCorrect: false },
      { label: 'C', text: 'Liczba kroków wykonanych podczas spaceru.', isCorrect: false },
      { label: 'D', text: 'Mierzenie prędkości pisania na maszynie.', isCorrect: false }
    ],
    explanation: 'Elastyczność metapoznawcza pozwala przełączać się między poziomem wysokim (dającym motywację i sens) a niskim (powalającym skupić się na precyzji wykonania).',
    keyTakeaway: 'Pamiętaj o wielkim celu, ale skup się na poprawnym wykonaniu bieżącego ruchu.'
  },
  {
    id: 12,
    question: 'Co jest celem protokołu „Audytu Myśli i Wykrywania Błędów” (Sekcja 21.15)?',
    topic: 'Protokół Metapoznawczy',
    sectionRef: 'Sekcja 21.15',
    options: [
      { label: 'A', text: 'Zatzymanie się w momencie silnego napięcia, nazwanie błędu poznawczego i zadanie pytania: „Jakie są twarde dowody na tę myśl?”.', isCorrect: true },
      { label: 'B', text: 'Bezmyślne powtarzanie, że wszystko będzie dobrze.', isCorrect: false },
      { label: 'C', text: 'Ucieczka przed dyskomfortem w gry komputerowe.', isCorrect: false },
      { label: 'D', text: 'Oskarżanie innych o wywołanie u nas złego nastroju.', isCorrect: false }
    ],
    explanation: 'Protokół wyrywa umysł z automatycznego transu reagowania i przywraca kontrolę kory przedczołowej nad impulsami.',
    keyTakeaway: 'Pauza między bodźcem a reakcją to przestrzeń Twojej wolności.'
  }
];

export const caseStudiesChapterTwentyOne: CaseStudy[] = [
  {
    id: 'studium-21-1-reaktywny-menedzer',
    title: 'Niewolnik impulsów: Jak brak metapoznania niszczył autorytet Daniela',
    subtitle: 'Automatyzmy emocjonalne, racjonalizacja post-factum i nauka de-centracji myśli',
    protagonist: 'Daniel, 45 lat, dyrektor operacyjny w firmie logistycznej',
    context: 'Daniel słynął z gwałtownych wybuchów gniewu na zebraniach. Po każdym wybuchu tłumaczył sobie: „Jestem porywczy, ale to przez niekompetencję zespołu. Gdyby oni robili wszystko dobrze, ja bym nie krzyczał”.',
    story: [
      'Daniel funkcjonował w całkowitym braku metapoznania. Nie obserwował własnych procesów myślowych – był z nimi całkowicie zfuzjowany. Gdy pojawiało się napięcie w ciele, natychmiast zamieniało się w krzyk.',
      'Po kolejnym wybuchu, podczas którego upokorzył wartościowego analityka, prezes postawił mu ultimatum: „Albo idziesz na trening samoregulacji i metapoznania, albo żegnamy się z dniem dzisiejszym”.',
      'Podczas ćwiczeń Daniel po raz pierwszy w życiu musiał zastosować de-centrację. Zamiast reagować od razu na powiadomienie o błędzie w wysyłce, musiał zauważyć: „Pojawia się myśli, że oni robią to specjalnie, a w ciele rośnie fala gorąca”.',
      'Nauka wytworzenia 3-sekundowej pauzy między bodźcem a reakcją uratowała jego karierę. Daniel przestał być marionetką własnych podkorowych impulsów i zbudował dojrzałą autorefleksję.'
    ],
    dialogue: [
      { speaker: 'Analityk', text: 'Danielu, mamy 2-godzinne opóźnienie na rampie.', subtext: 'Bodziec zewnętrzny.' },
      { speaker: 'Daniel (stary skrypt)', text: 'Znowu wszystko schrzaniliście! Jesteście bandą nieudaczników!', subtext: 'Natychmiastowa fuzja z myśli i wybuch emocjonalny.' },
      { speaker: 'Daniel (po treningu metapoznania)', text: '(Pauza, oddech). Zauważam złość. Ok, zobaczmy, z czego wynika to opóźnienie.', subtext: 'Metapoznawcza de-centracja i przejście w tryb analizy Systemu 2.' }
    ],
    decisionTaken: 'Zastosowanie protokołu pauzy metapoznawczej przed podjęciem jakiejkolwiek decyzji w stanie pobudzenia.',
    whatProtagonistSaw: 'Stary wzorzec: niekompetentny zespół i konieczność krzyku. Nowy wzorzec: powiadomienie o błędzie i własny automatyczny odruch gniewu.',
    whatWasMissed: 'Fakt, że krzyk nie rozwiązywał problemów logistycznych, lecz paraliżował podwładnych.',
    psychologicalAnalysis: {
      coreMechanism: 'Brak metapoznania i fuzja poznawcza (Cognitive Fusion) połączona z racjonalizacją post-factum.',
      cognitiveBiases: [
        { name: 'Self-serving Bias', description: 'Przypisywanie winy za własne wybuchy czynnikom zewnętrznym.', impact: 'Brak wglądu we własne mechanizmy samoregulacji.' }
      ],
      defenseMechanisms: [
        { name: 'Projekcja (Projection)', explanation: 'Oskarżanie innych o celowe wywoływanie złości.' }
      ],
      emotionalDynamic: 'Gwałtowny wyrzut noradrenaliny i przejście w reakcję walki bez pośrednictwa kory przedczołowej.'
    },
    decisionProcessAnalysis: {
      trigger: 'Informacja o błędzie w wysyłce.',
      attentionFocus: 'Napięcie w ciele i myśl „oni mnie ignorują”.',
      interpretation: '„Muszę natychmiast uderzyć, by odzyskać kontrolę”.',
      emotion: 'Wściekłość, impulsywna frustracja.',
      impulse: 'Krzyczeć, uderzyć w stół.',
      action: 'Wykonanie 3-sekundowej pauzy, nazwanie emocji w myśli, przejście do pytań o fakty.',
      consequence: 'Rozwiązanie problemu opóźnienia i wzrost szacunku ze strony zespołu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Aktywacja hamowania odpowiedzi impulsywnej', activationState: 'Wzrost aktywacji po treningu' },
        { region: 'Brzuszno-boczna kora przedczołowa (vlPFC)', role: 'Nazywanie emocji (Affect Labeling) i wyhamowanie ciała migdałowatego', activationState: 'Wysoka aktywacja' }
      ],
      neurotransmitters: [
        { name: 'GABA', roleInScenario: 'Zwiększenie przewodnictwa hamującego obniżającego poziom pobudzenia.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Impuls złości trafia do ciała migdałowatego.' },
        { timeMs: '300 ms+', process: 'Świadomy oddech aktywuje nerw błędny i włącza korę przedczołową.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Auto-szantaż porywczością', description: 'Wmawianie sobie, że krzyk to jedyna skuteczna metoda zarządzania.', vulnerabilityExploited: 'Lęk przed utratą kontroli.' }
      ],
      counterMeasures: [
        { step: '1. Protokół Stop-Observe-Proceed', script: '„Zatrzymaj się. Zauważ napięcie. Nazwij emocję. Zdecyduj o ruchu”.', rationale: 'Przerywa automatyczny łuk odruchowy.' }
      ]
    },
    alternativePath: 'Gdyby Daniel nie opanował metapoznania, zostałby zwolniony z firmy, a jego małżeństwo uległoby rozpadowi.',
    readerQuestion: 'Jak często dajesz się ponieść automatycznym impulsom, wierząc, że „nie miałeś innego wyjścia”?',
    keyTakeaway: 'Pomiędzy bodźcem a Twoją reakcją istnieje mała przestrzeń. W tej przestrzeni leży Twoja wolność i Twój rozwój.'
  }
];

export const selfExercisesChapterTwentyOne: SelfExercise[] = [
  {
    id: 'cwiczenie-21-1-audit-metapoznawczy',
    title: 'Audit Metapoznawczy: Obserwator Myśli i Wykrywacz Błędów',
    subtitle: 'Narzędzie de-centracji i odzyskiwania kontroli nad Systemem 2',
    objective: 'Rozszerzenie przestrzeni między bodźcem a reakcją poprzez codzienne praktykowanie de-centracji.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Wzmacnianie połączeń między brzuszno-boczną korą przedczołową (vlPFC) a ciałem migdałowatym, obniżające reaktywność emocjonalną.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zauważenie napięcia',
        instruction: 'W momencie, gdy poczujesz nagłą zmianę nastroju (złość, lęk, rezygnację), zatrzymaj się na 5 sekund.',
        promptText: 'Wykryty sygnał z ciała / emocja:',
        placeholder: 'np. „Ścisk w żołądku i złość po przeczytaniu maila”'
      },
      {
        stepNumber: 2,
        title: 'Formuła de-centracji',
        instruction: 'Przekształć myśl z postaci „X jest beznadziejne” na postać: „Zauważam myśl, że X jest beznadziejne”.',
        promptText: 'Myśl wyodrębniona od Ja:',
        placeholder: 'np. „Zauważam myśl, że ten projekt na pewno się nie uda”'
      },
      {
        stepNumber: 3,
        title: 'Pytanie o twarde dowody',
        instruction: 'Zadaj pytanie: „Jakie są twarde, obiektywne fakty na poparcie tej myśli, a jakie są fakty przeciwne?”.',
        promptText: 'Chłodna analiza faktów:',
        placeholder: 'np. „Fakt: Mamy opóźnienie o 1 dzień. Fakt przeciwny: Mamy przygotowany plan awaryjny”'
      }
    ],
    reflectionQuestions: [
      'Jakie to uczucie patrzeć na własną myśl jak na chmurę na niebie zamiast dawać się jej porywać?',
      'Jak zmiana perspektywy wpłynęła na Twoją decyzję wykonawczą?'
    ]
  }
];

export const chapterTwentyOne: Chapter = {
  number: 21,
  volume: 3,
  volumeChapterNumber: 5,
  title: 'Rozdział 5: Świadomość Siebie i Metapoznanie',
  subtitle: 'Myślenie o myśleniu, de-centracja poznawcza, ograniczenia introspekcji i sztuka samoregulacji w czasie rzeczywistym',
  leadParagraph: 'Świadomość siebie i metapoznanie stanowią koronny osiągnięcie ewolucyjne ludzkiego układu nerwowego. Żadne inne stworzenie na Ziemi nie posiada zdolności do cofnięcia się o krok i przyjrzenia się własnemu procesowi myślenia tak, jakby był on obiektem na stole laboratoryjnym. Metapoznanie – czyli „myślenie o myśleniu” – jest fundamentem wszelkiej autentycznej samoregulacji. Bez niego jesteśmy jedynie skomplikowanymi biochemicznymi automatami, które reagują na bodźce i wymyślają racjonalizacje dla swoich odruchów. W tym rozdziale nauczymy się, jak budować elastyczną przestrzeń między bodźcem a reakcją, jak demaskować złudzenia własnej introspekcji i jak rozwinąć trafną refleksyjność życiową.',
  totalEstimatedPages: 54,
  sections: [
    {
      id: 'sec-21-1',
      pageNumber: 1,
      sectionNumber: '21.1',
      title: 'Szczytowe Osiągnięcie Ewolucji: Czym Jest Metapoznanie?',
      category: 'wstep',
      readingTimeMinutes: 7,
      quote: {
        text: 'Między bodźcem a reakcją istnieje przestrzeń. W tej przestrzeni leży nasza wolność i możliwość wyboru.',
        author: 'Viktor Frankl'
      },
      paragraphs: [
        'Większość ludzi spędza całe życie w stanie fuzji poznawczej. Kiedy pojawia się myśl: „To się nie uda”, traktują ją nie jako przelotną aktywność bioelektryczną kory mózgowej, lecz jako twardy, niepodważalny fakt o świecie.',
        'Metapoznanie pozwala przełamać tę iluzję. To zdolność do wyjścia na balkon własnego umysłu i spoglądania na scenę, na której odgrywają się myśli, emocje i impulsy.'
      ]
    },
    {
      id: 'sec-21-2',
      pageNumber: 4,
      sectionNumber: '21.2',
      title: 'Dwa Filary Metapoznania Flavella: Wiedza i Regulacja',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'John Flavell rozbił metapoznanie na dwa składniki: I) Metapoznawczą wiedzę (co wiem o tym, jak działa mój umysł, jakie mam słabości, w jakich warunkach się mylę), II) Metapoznawczą regulację (jakie narzędzia stosuję w czasie rzeczywistym, by monitorować i korygować przebieg myślenia).',
        'Sama wiedza o błędach poznawczych nie wystarcza – potrzebna jest umiejętność aktywowania hamulca ręcznego w momencie, gdy złość lub pośpiech próbują przejąć stery.'
      ]
    },
    {
      id: 'sec-21-3',
      pageNumber: 7,
      sectionNumber: '21.3',
      title: 'Ograniczenia Introspekcji: Badania Nisbetta i Wilsona',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Przez wieki uważano, że introspekcja jest bezbłędnym źródłem wiedzy o sobie. Słynne eksperymenty Nisbetta i Wilsona wykazały jednak, że gdy pytamy ludzi: „Dlaczego to zrobiłeś?”, ich kora przedczołowa błyskawicznie tworzy wysoce prawdopodobną, ale całkowicie zmyśloną opowieść.',
        'Nie mamy bezpośredniego wglądu w podkorowe procesy decyzyjne. Widzimy tylko produkt końcowy i dorabiamy do niego dopasowaną teorię.'
      ]
    },
    {
      id: 'sec-21-4',
      pageNumber: 10,
      sectionNumber: '21.4',
      title: 'Neurobiologia Błędu: Jak Przednia Kora Obwodu Wykrywa Pomyłki?',
      category: 'neuronauka',
      readingTimeMinutes: 9,
      paragraphs: [
        'W momencie, gdy popełniasz błąd, w Twoim mózgu powstaje sygnał elektryczny zwany Error-Related Negativity (ERN). Odpowiada za niego grzbietowa część przedniej kory obwodu (dACC).',
        'ERN działa jak dzwonek alarmowy. U osób o wysokiej wrażliwości metapoznawczej sygnał ten prowadzi do natychmiastowego wyhamowania tempa działania i analizy przyczyn błędu.'
      ]
    },
    {
      id: 'sec-21-5',
      pageNumber: 13,
      sectionNumber: '21.5',
      title: 'De-centracja Poznawcza (Cognitive Defusion): Myśl to Tylko Myśl',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'De-centracja to zmiana perspektywy z „widzę świat poprzez myśl” na „widzę myśl jako obiekt w umyśle”.',
        'Zamiast mknąć w pętli: „Jestem beznadziejnym menedżerem”, stosujesz formułę: „Zauważam, że w moim umyśle pojawiła się myśl, że jestem beznadziejnym menedżerem”. Ten prosty zabieg językowy obniża reaktywność ciała migdałowatego.'
      ]
    },
    {
      id: 'sec-21-6',
      pageNumber: 16,
      sectionNumber: '21.6',
      title: 'Złudzenie Wyjaśnienia i Test Rzeczywistego Rozumienia',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Wielu ludzi żyje w złudzeniu głębokiego rozumienia procesów biznesowych czy politycznych (Illusion of Explanatory Depth).',
        'Gdy poprosisz ich o dokładne opisanie mechanizmu krok po kroku na kartce papieru, okazuje się, że ich wiedza jest jedynie powierzchowną siecią haseł. Trening metapoznawczy wymusza ciągłe sprawdzanie własnych luk informacyjnych.'
      ]
    },
    {
      id: 'sec-21-7',
      pageNumber: 19,
      sectionNumber: '21.7',
      title: 'Autorefleksja vs Ruminacja: Jak Nie Wpaść w Pętlę Samo-Zamęczania',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Autorefleksja jest konstruktywnym procesem zadawania pytań: „Co się wydarzyło, co mogę z tego wyciągnąć i co zrobię inaczej?”.',
        'Ruminacja to niszczące kręcenie się w kółko wokół wstydu: „Dlaczego znowu to zrobiłem, dlaczego jestem taki beznadziejny”. Ruminacja nie prowadzi do żadnego działania – wyczerpuje jedynie zasoby glukozy w mózgu.'
      ],
      caseStudyRef: caseStudiesChapterTwentyOne[0]
    },
    {
      id: 'sec-21-8',
      pageNumber: 22,
      sectionNumber: '21.8',
      title: 'Judgments of Learning (JOL) i Metapoznawcza Kontrola Uczenia Się',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Prawidłowa ocena stopnia opanowania wiedzy decyduje o sukcesie edukacyjnym i zawodowym. Gdy czytasz tekst i wydaje Ci się prosty, doznajesz złudzenia znajomości (Fluency Illusion).',
        'Prawdziwy sprawdzian następuje wtedy, gdy zamkniesz książkę i spróbujesz własnymi słowami odtworzyć strukturę argumentu.'
      ]
    },
    {
      id: 'sec-21-9',
      pageNumber: 25,
      sectionNumber: '21.9',
      title: 'Monitorowanie Emocji i Affect Labeling w Czasie Rzeczywistym',
      category: 'neuronauka',
      readingTimeMinutes: 8,
      paragraphs: [
        'Nazwanie emocji po imieniu (Affect Labeling) jest potężnym aktem metapoznawczym. Badania rezonansem magnetycznym (fMRI) pokazują, że precyzyjne nazwanie stanu: „To jest lęk przed oceną” natychmiast aktywuje prawą brzuszno-boczną korę przedczołową i wyhamowuje pobudzenie w ciele migdałowatym.'
      ]
    },
    {
      id: 'sec-21-10',
      pageNumber: 28,
      sectionNumber: '21.10',
      title: 'Poziomy Reprezentacji Zachowania: Od Detalu do Sensu',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Teoria identyfikacji akcji pokazuje, że każde działanie możemy opisywać na poziomie niskim (operacyjnym) lub wysokim (znaczeniowym).',
        'Gdy czujesz przytłoczenie wielkim celem, przełącz metapoznanie na poziom niski („Napisz pierwsze zdanie”). Gdy tracisz motywację, przełącz na poziom wysoki („Buduję bezpieczeństwo mojej rodziny”).'
      ]
    },
    {
      id: 'sec-21-11',
      pageNumber: 31,
      sectionNumber: '21.11',
      title: 'Dziennik Metapoznawczy jako Laboratorium Samoregulacji',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Regularne zapisywanie własnych procesów myślowych, wyzwalaczy i błędów zmienia Cię z bezwolnego uczestnika zdarzeń w czujnego badacza własnej psychiki.'
      ],
      exerciseRef: selfExercisesChapterTwentyOne[0]
    },
    {
      id: 'sec-21-12',
      pageNumber: 34,
      sectionNumber: '21.12',
      title: 'Wykrywanie Własnych Błędów Poznawczych w Działaniu',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Szczytem sprawności metapoznawczej jest złapanie własnego umysłu na błędzie poznawczym w momencie jego trwania: „Uwaga, właśnie stosuję błąd potwierdzenia, bo szukam tylko przychylnych opinii”.'
      ]
    },
    {
      id: 'sec-21-13',
      pageNumber: 37,
      sectionNumber: '21.13',
      title: '🧠 BŁĘDNA INTUICJA: „Im Więcej Analizuję Swoje Myśli, Tym Jestem Mądrzejszy”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'INTUICJA: Wydaje się nam, że nieustanne rozmyślanie nad swoimi motywami i emocjami automatycznie podnosi samoświadomość.',
        'CO MOŻE BYĆ BŁĘDNE? Nadmierna, nieustrukturyzowana analiza przekształca się w paraliż analityczny i niszczącą ruminację. Powstaje iluzja pracy nad sobą, która w rzeczywistości jest ucieczką przed działaniem w świecie realnym.',
        'CO MÓWI PSYCHOLOGIA? Samoświadomość bez testowania hipotez w działaniu jest jedynie narcyzmem poznawczym. Metapoznanie ma służyć lepszemu działaniu, a nie zastępować działanie.',
        'BARDZIEJ PRECYZYJNY MODEL: Analizuj z dystansu, wyciągaj wniosek, wykonuj krok w świecie realnym.'
      ]
    },
    {
      id: 'sec-21-14',
      pageNumber: 40,
      sectionNumber: '21.14',
      title: '🔬 CO NADAL NIE JEST JASNE? Czy Świadomość Jest Przyczyną czy Skutkiem?',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'Nieustający spór w neurofilozofii: Czy świadome metapoznanie jest aktywnym sprawcą decyzji, czy jedynie poświadczeniem wykonanym przez mózg po tym, jak podkorowe obwody podjęły już decyzję? Eksperymenty typu Libeta wciąż wywołują gorące debaty na temat granic wolnej woli.'
      ]
    },
    {
      id: 'sec-21-15',
      pageNumber: 43,
      sectionNumber: '21.15',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokół Audytu Myśli',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        '1. Wykonaj pauzę w momencie silnej emocji.',
        '2. Zastosuj zdanie de-centrujące: „Zauważam myśl X”.',
        '3. Nazwij emocję w ciele (Affect Labeling).',
        '4. Wybierz jeden świadomy krok zgodny z wartościami z Rozdziału 20.'
      ]
    },
    {
      id: 'sec-21-16',
      pageNumber: 46,
      sectionNumber: '21.16',
      title: 'Podsumowanie Etapu I Tomu III oraz Most do Rozdziału 6 i Dalszych',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Oto zamknęliśmy pierwszy wielki blok Tomu III książki. Przeszliśmy ścieżkę od dekonstrukcji iluzji tożsamości (Rozdział 17), przez badanie przekonań i schematów (Rozdział 18), opanowanie mechanizmów samooceny i skuteczności (Rozdział 19), odnalezienie busoli wartości i potrzeb (Rozdział 20), aż po szczytowe opanowanie metapoznania i samoregulacji (Rozdział 21).',
        'Ta pięcioelementowa matryca stanowi fundament indywidualnej autonomii. W kolejnym etapie prac (Rozdziały 6–10 Tomu III) wykorzystamy te narzędzia do badania długoterminowego kształtowania nawyków, dyscypliny, odporności psychicznej (resilience) i budowania własnej ścieżki życiowej.'
      ]
    },
    {
      id: 'sec-21-17',
      pageNumber: 49,
      sectionNumber: '21.17',
      title: 'Interaktywny Auditor Metapoznawczy i Wykrywacz Błędów',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Wypróbuj interaktywne narzędzie metapoznawcze do audytu automatycznych myśli i przełamywania fuzji poznawczej.'
      ]
    },
    {
      id: 'sec-21-18',
      pageNumber: 54,
      sectionNumber: '21.18',
      title: 'Egzamin Końcowy Rozdziału 21: Metapoznanie i Samoświadomość',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu de-centracji, ograniczeń introspekcji, neurobiologii ERN oraz zjawiska Judgments of Learning.'
      ]
    }
  ]
};
