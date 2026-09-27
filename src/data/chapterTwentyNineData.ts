import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 13 (GLOBALNIE ROZDZIAŁ 29 W STRUKTURZE DZIEŁA)
 * TYTUŁ: ZDROWE GRANICE — OCHRONA AUTONOMII, PSYCHOLOGIA ODMOWY I ZARZĄDZANIE RELACJAMI
 */

export const chapterTwentyNineExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Czym w ujęciu psychologicznym są „zdrowe granice osobiste” (healthy personal boundaries)?',
    topic: 'Definicja i Funkcja Granic',
    sectionRef: 'Sekcja 29.1',
    options: [
      { label: 'A', text: 'Niewidzialną, półprzepuszczalną membraną psychologiczną oddzielającą moją tożsamość, emocje, czas i odpowiedzialność od tożsamości i oczekiwań innych ludzi, chroniącą integralność bez izolacji.', isCorrect: true },
      { label: 'B', text: 'Murem obronnym uniemożliwiającym nawiązanie jakiejkolwiek bliskiej relacji z drugim człowiekiem.', isCorrect: false },
      { label: 'C', text: 'Zasadami prawnymi określającymi własność nieruchomości.', isCorrect: false },
      { label: 'D', text: 'Zestawem manipulacyjnych technik służących do podporządkowywania sobie otoczenia.', isCorrect: false }
    ],
    explanation: 'Granice osobiste nie są murem izolującym, lecz półprzepuszczalną membraną, która określa, gdzie kończę się ja, a zaczyna drugi człowiek. Pozwalają one na zachowanie autonomii przy jednoczesnym budowaniu głębokiej bliskości.',
    keyTakeaway: 'Granice nie służą do kontrolowania innych — służą do określenia, jakie zachowania wobec nas są dopuszczalne, a jakie nie.'
  },
  {
    id: 2,
    question: 'W jaki sposób funkcjonuje mechanizm Szantażu Emocjonalnego FOG (Fear, Obligation, Guilt wg Susan Forward)?',
    topic: 'Manipulacja i Szantaż Emocjonalny',
    sectionRef: 'Sekcja 29.20',
    options: [
      { label: 'A', text: 'Szantażysta wykorzystuje Lęk (Fear), Poczucie Obowiązku (Obligation) i Poczucie Winy (Guilt) ofiary, aby wymusić uległość pod groźbą kary emocjonalnej, odrzucenia lub eskalacji pretensji.', isCorrect: true },
      { label: 'B', text: 'Polega wyłącznie na groźbach przemocy fizycznej w miejscu publicznym.', isCorrect: false },
      { label: 'C', text: 'Jest to forma pozytywnego motywowania pracowników w nowoczesnych korporacjach.', isCorrect: false },
      { label: 'D', text: 'Występuje wyłącznie między obcymi ludźmi w internecie.', isCorrect: false }
    ],
    explanation: 'Szantaż emocjonalny bazuje na eksploatacji więzi intymnej i empatii drugiej osoby. Manipulator zamienia odmowę w „dowód braku miłości” lub „egoizmu”, wywołując paraliżujące poczucie winy.',
    keyTakeaway: 'Gdy ktoś mówi: „Gdybyś mnie kochał, zrobiłbyś to dla mnie”, nie wyraża miłości — stosuje szantaż FOG w celu złamania Twojej granicy.'
  },
  {
    id: 3,
    question: 'Jaka jest fundamentalna różnica między PROŚBĄ a NACISKIEM (żądaniem zamaskowanym pod postacią prośby)?',
    topic: 'Prośba a Nacisk',
    sectionRef: 'Sekcja 29.17',
    options: [
      { label: 'A', text: 'W przypadku autentycznej prośby druga strona ma pełną wolność powiedzenia „nie” bez obawy o karę, fochy czy wycofanie życzliwości; w przypadku nacisku odmowa spotyka się z atakiem, fochem lub poczuciem winy.', isCorrect: true },
      { label: 'B', text: 'Prośba zawsze dotyczy małych rzeczy, a nacisk dużych kwot finansowych.', isCorrect: false },
      { label: 'C', text: 'Prośba musi być wyrażona pisemnie, a nacisk ustnie.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy, każde pytanie drugiego człowieka jest w rzeczywistości poleceniem.', isCorrect: false }
    ],
    explanation: 'Testem autentyczności prośby jest zawsze reakcja pytającego na odmowę. Jeśli „nie” wywołuje wściekłość, karanie ciszą lub oskarżenia o niewdzięczność, komunikat od początku był roszczeniem.',
    keyTakeaway: 'Masz prawo sprawdzić intencję rozmówcy: jeśli Twoje „nie” nie jest szanowane, nie miałeś do czynienia z prośbą, lecz z manipulacyjnym nakazem.'
  },
  {
    id: 4,
    question: 'Jak powinna wyglądać prawidłowa struktura komunikowania konsekwencji naruszenia granicy w relacji?',
    topic: 'Egzekwowanie Granic i Konsekwencje',
    sectionRef: 'Sekcja 29.24',
    options: [
      { label: 'A', text: 'Opis faktu + nazwanie własnej granicy + jasne określenie mojego działania w razie powtórzenia (np. „Jeśli będziesz na mnie krzyczeć, przerwę tę rozmowę i wyjdę z pokoju”).', isCorrect: true },
      { label: 'B', text: 'Wielominutowy krzyk i wyliczanie wszystkich błędów rozmówcy z ostatnich 5 lat.', isCorrect: false },
      { label: 'C', text: 'Natychmiastowe zablokowanie kontaktu bez podania jakiejkolwiek przyczyny.', isCorrect: false },
      { label: 'D', text: 'Przeproszenie rozmówcy za to, że poczuliśmy się zranieni.', isCorrect: false }
    ],
    explanation: 'Konsekwencja to nie zemsta ani groźba ukarania drugiej osoby — to informacja o tym, jak JA zadbam o swoje bezpieczeństwo i komfort, jeśli destrukcyjne zachowanie nie ustanie.',
    keyTakeaway: 'Nie możesz zmusić nikogo do zmiany zachowania, ale możesz kontrolować własną reakcję i odciąć dostęp do siebie.'
  },
  {
    id: 5,
    question: 'Dlaczego ludzie o wysokim poziomie ugodowości (Agreeableness) i niskiej asertywności odczuwają paraliżujące poczucie winy podczas mówienia „nie”?',
    topic: 'Psychologia Poczucia Winy przy Odmowie',
    sectionRef: 'Sekcja 29.13',
    options: [
      { label: 'A', text: 'Ponieważ mylą własną odpowiedzialność (odpowiadam za swoje czyny) z odpowiedzialnością za cudze emocje (nie odpowiadam za to, czy ktoś poczuje dyskomfort w reakcji na moją odmowę).', isCorrect: true },
      { label: 'B', text: 'Ponieważ biologicznie brakuje im receptorów serotoninowych w ciele modzelowatym.', isCorrect: false },
      { label: 'C', text: 'Ponieważ każda odmowa jest z definicji czynem moralnie nagannym.', isCorrect: false },
      { label: 'D', text: 'Ponieważ osoby ugodowe nie posiadają własnych potrzeb ani celów życiowych.', isCorrect: false }
    ],
    explanation: 'Uwikłanie emocjonalne polega na przyjmowaniu na siebie ciężaru stanów psychicznych innych ludzi. Człowiek uważa, że odmawiając przysługi, „krzywdzi” drugą stronę, zapominając, że rozczarowanie jest normalną, dorosłą reakcją na odmowę.',
    keyTakeaway: 'Nie jesteś odpowiedzialny za emocjonalne reakcje dorosłych ludzi na Twoje uprawnione granice.'
  }
];

export const chapterTwentyNineCaseStudyMonika: CaseStudy = {
  id: 'cs-ch29-monika-uleglosc',
  title: 'Wielkie Studium Przypadku: Niewolnica Uczynności — Wypalenie i Kryzys Granic Moniki',
  subtitle: 'Jak lęk przed odrzuceniem i niezdolność do mówienia „nie” doprowadziły do somatycznego wyczerpania',
  protagonist: 'Monika, 28 lat, koordynatorka projektów w agencji kreatywnej',
  context: 'Monika jest uważana za „duszę firmy” — zawsze uśmiechnięta, pierwsza do pomocy, nigdy nikomu nie odmawia. Zostaje po godzinach, by dokończyć raporty za leniwych kolegów, w weekendy odbiera telefony od klientów, a w życiu prywatnym organizuje przeprowadzki znajomym i opiekuje się psem sąsiadki. Od 6 miesięcy cierpi na przewlekłą bezsenność, napady migreny i permanentne poczucie pustki.',
  story: [
    'W piątek o 16:45 kolega z zespołu podchodzi do biurka Moniki z miną pełną skruchy: „Monia, ratuj, mam dziś randkę życia, a muszę złożyć prezentację dla klienta. Zrobisz to za mnie? Jesteś w tym najlepsza!”.',
    'Wewnątrz Moniki odzywa się natychmiastowy krzyk buntu i potworne zmęczenie — planowała spędzić ten wieczór w wannie i wreszcie się wyspać.',
    'Jednak zanim kora przedczołowa zdoła sformułować odmowę, w ciele migdałowatym eksploduje lęk: „Jeśli odmówię, Bartek pomyśli, że jestem samolubna, obrazi się, powie innym, że nie można na mnie liczyć”.',
    'Z ust Moniki, wbrew jej woli, wypływa automatyczne: „No jasne, Bartek, nie ma sprawy, leć!”. Bartek rzuca „jesteś aniołem!” i wybiega z biura, a Monika zostaje sama w pustym open space, zalewając się łzami bezsilnej wściekłości.',
    'Ten schemat powtarzał się w jej życiu setki razy: uległość → złość na siebie i innych → tłumienie emocji → wyczerpanie somatyczne.',
    'Przełom nastąpił, gdy podczas ataku paniki trafiła do gabinetu terapeutycznego. Zrozumiała, że jej „uczynność” nie była altruizmem, lecz strategią lękową — próbą kupienia bezpieczeństwa i akceptacji kosztem niszczenia własnego zdrowia.',
    'Wdrożyła zasadę „Pauzy Decyzyjnej”: na każdą niespodziewaną prośbę odpowiadała formułą: „Muszę sprawdzić grafik, dam ci znać za 30 minut”. Zaczęła odmawiać w drobnych sprawach i ze zdumieniem odkryła, że świat się nie zawalił, a szacunek zespołu do niej wzrósł.'
  ],
  dialogue: [
    { speaker: 'Bartek (z uśmiechem, piątek 16:45)', text: 'Monia, zrób to za mnie, jesteś niezastąpiona! Uratujesz mi życie!', subtext: 'Pochlebstwo i wzbudzanie poczucia winy jako narzędzie manipulacji i zrzucenia obowiązków.' },
    { speaker: 'Monika (przed terapią — wersja uległa)', text: 'No dobrze... jakoś to zrobię, leć na tę randkę...', subtext: 'Kapitulacja z lęku przed odrzuceniem i etykietą „złej koleżanki”.' },
    { speaker: 'Monika (po wdrożeniu granic — wersja asertywna)', text: 'Bartek, dziś o 17:00 kończę pracę i mam zaplanowany wieczór. Nie przejmę Twojej prezentacji. Możesz dokończyć ją zdalnie w niedzielę.', subtext: 'Krótka, spokojna i nieagresywna odmowa bez tłumaczenia się i przepraszania.' }
  ],
  decisionTaken: 'Zrezygnowanie z roli „ratowniczki wszystkich dookoła”, wprowadzenie zasady pauzy decyzyjnej przed każdą odpowiedzią oraz konsekwentna odmowa wykonywania cudzych zadań kosztem własnego zdrowia.',
  whatProtagonistSaw: 'Swoją uległość jako szlachetną dobroć i bezinteresowność.',
  whatWasMissed: 'Że uległość była destrukcyjnym mechanizmem obronnym, który uczył otoczenie pasożytowania na jej zasobach i niszczył jej poczucie własnej wartości.',
  psychologicalAnalysis: {
    coreMechanism: 'Syndrom Ludzkiej Satysfakcji (People Pleasing) zakorzeniony w lęku przed odrzuceniem i warunkowej samoocenie („jestem wartościowa tylko wtedy, gdy jestem użyteczna”).',
    cognitiveBiases: [
      { name: 'Czytanie w myślach (Mind Reading)', description: 'Zakładanie, że każda odmowa wywoła u drugiej strony trwałą wrogość i nienawiść.', impact: 'Paraliż przed asertywnością.' },
      { name: 'Katastrofizowanie', description: 'Przekonanie, że jedno „nie” doprowadzi do całkowitego wykluczenia z grupy.', impact: 'Automatyczna kapitulacja.' }
    ],
    defenseMechanisms: [
      { name: 'Reakcja upozorowana', explanation: 'Okazywanie przesadnej życzliwości i uśmiechu w chwili odczuwania głębokiej frustracji i złości.' }
    ],
    emotionalDynamic: 'Błędne koło: uległość -> stłumiona złość -> poczucie winy z powodu złości -> jeszcze większa uległość.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Grzbietowa część przedniej kory obręczy (dACC)', role: 'Przetwarzanie bólu wykluczenia społecznego', activationState: 'Nadmiernie wrażliwa na ryzyko dezaprobaty' },
      { region: 'Brzuszno-boczna kora przedczołowa (vlPFC)', role: 'Hamowanie zachowań automatycznych', activationState: 'Zablokowana przez nawyk uległości' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol', roleInScenario: 'Chronicznie podwyższony, niszczący jakość snu głębokiego.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Pojawienie się prośby Bartka', process: 'Skok napięcia w dACC -> lęk przed odrzuceniem.' },
      { timeMs: 'Odpowiedź „tak”', process: 'Chwilowy spadek lęku, po którym następuje długotrwały wyrzut żółci i kortyzolu.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Pochlebstwo i nagłość czasowa', description: '„Jesteś w tym najlepsza!” w piątek o 16:45.', vulnerabilityExploited: 'Potrzeba bycia docenioną i lęk przed odmową w sytuacji presji.' }
    ],
    counterMeasures: [
      { step: 'Zasada Bufora Czasowego', script: '„Nie odpowiadam na prośby natychmiast. Wrócę do ciebie z odpowiedzią po 15 minutach”.', rationale: 'Rozrywa pętlę automatycznej uległości i pozwala na chłodną ocenę własnych zasobów.' }
    ]
  },
  keyTakeaway: 'Mówiąc „tak” innym ludziom wbrew sobie, za każdym razem mówisz „nie” własnemu zdrowiu, marzeniom i spokojowi ducha. Twoje „nie” dla innych jest Twoim „tak” dla siebie.'
};

export const chapterTwentyNineExerciseBoundaryMap: SelfExercise = {
  id: 'ex-ch29-boundary-map',
  title: 'Wielkie Ćwiczenie Praktyczne: Moja Osobista Mapa Granic i Audyt Szczelności',
  subtitle: 'Kompleksowa diagnostyka 4 stref granic w Twoim życiu: fizycznej, emocjonalnej, czasowej i informacyjnej',
  objective: 'Precyzyjne zidentyfikowanie miejsc, w których Twoje granice są zbyt sztywne (mur), zbyt nieszczelne (gąbka) lub optymalnie elastyczne (membrana) oraz zaprojektowanie reguł obronnych.',
  durationMinutes: 25,
  neuroScientificFoundation: 'Świadome nazwanie i narysowanie granic aktywuje przyśrodkową korę przedczołową (mPFC), wzmacniając neuronalne reprezentacje odrębności i suwerenności tożsamości.',
  steps: [
    {
      stepNumber: 1,
      title: 'Audyt Granic Czasowych i Dostępności',
      instruction: 'Oceń w skali 1–10: W jakim stopniu kontrolujesz swój kalendarz? Czy odbierasz telefony służbowe po godzinach lub w weekendy? Kto w Twoim otoczeniu kradnie Twój czas bez pytania?',
      promptText: 'Moje granice czasowe (ocena 1-10 i diagnoza nieszczelności):',
      placeholder: 'Ocena: 4/10. Notorycznie odpowiadam na maile od szefa o 22:30 z lęku, że uzna mnie za osobę mało zaangażowaną.'
    },
    {
      stepNumber: 2,
      title: 'Audyt Granic Emocjonalnych',
      instruction: 'Oceń w skali 1–10: W jakim stopniu przejmujesz nastroje partnera, dzieci lub rodziców? Czy czujesz się winny, gdy ktoś w Twojej obecności jest zły lub smutny?',
      promptText: 'Moje granice emocjonalne (ocena 1-10 i diagnoza uwikłania):',
      placeholder: 'Ocena: 3/10. Kiedy mama wzdycha przez telefon, natychmiast rzucam swoje plany i próbuję poprawić jej nastrój kosztem własnego odpoczynku.'
    },
    {
      stepNumber: 3,
      title: 'Audyt Granic Informacyjnych i Prywatności',
      instruction: 'Oceń w skali 1–10: Czy dzielisz się swoimi intymnymi sprawami z ludźmi, którzy nie zasłużyli na zaufanie? Czy pozwalasz na wścibskie pytania o zarobki lub życie osobiste na obiedzie rodzinnym?',
      promptText: 'Moje granice informacyjne (ocena 1-10 i diagnoza oversharingu):',
      placeholder: 'Ocena: 5/10. Tłumaczę się ciotkom z tego, dlaczego jeszcze nie kupiłem mieszkania, zamiast powiedzieć: „To moja prywatna sprawa”.'
    },
    {
      stepNumber: 4,
      title: 'Jedna Twarda Granica na Najbliższy Tydzień',
      instruction: 'Wybierz obszar o najniższej ocenie i sformułuj jedną konkretną, precyzyjną regułę graniczną wraz z konsekwencją, którą wdrożysz w ciągu najbliższych 48 godzin.',
      promptText: 'Moja nowa reguła graniczna i procedura konsekwencji:',
      placeholder: 'Reguła: „W dni robocze po godzinie 19:00 wyciszam powiadomienia ze skrzynki służbowej. Jeśli ktoś zadzwoni, oddzwonię następnego dnia o 8:30”.'
    }
  ],
  reflectionQuestions: [
    'Jaki najgorszy scenariusz podpowiada Ci Twój lęk, gdy myślisz o wdrożeniu tej reguły?',
    'Co zyskasz (w energii, zdrowiu, spokoju i szacunku do siebie), gdy ta granica stanie się Twoim trwałym standardem?'
  ]
};

export const chapterTwentyNine: Chapter = {
  number: 29,
  volume: 3,
  volumeChapterNumber: 13,
  title: 'Rozdział 29: Zdrowe Granice — Ochrona Autonomii, Psychologia Odmowy i Zarządzanie Relacjami',
  subtitle: 'Od lęku przed odrzuceniem i manipulacji poczuciem winy do dojrzałego stawiania granic w rodzinie, pracy i życiu osobistym',
  leadParagraph: 'Nie możesz zbudować autentycznej bliskości, poczucia własnej wartości ani stabilności psychicznej, dopóki Twoje granice osobiste pozostają dziurawe jak sito. Wielu ludzi wierzy, że bycie dobrym człowiekiem polega na nieustannym zadowalaniu innych, unikaniu konfliktów za wszelką cenę i natychmiastowym godzeniu się na każdą prośbę. W rzeczywistości uległość nie rodzi miłości — rodzi ukrytą złość, wyczerpanie somatyczne i relacyjny rozpad. W tym rozdziale przeprowadzimy Cię przez 30 szczegółowych etapów architektury granic: zdefiniujemy granice fizyczne, emocjonalne, czasowe i informacyjne, zdemaskujemy mechanizmy szantażu emocjonalnego (FOG), nauczymy Cię odmawiać bez agresji i poczucia winy oraz pokażemy, jak skutecznie egzekwować konsekwencje wobec osób naruszających Twoją godność.',
  totalEstimatedPages: 112,
  sections: [
    // BLOK I — ZROZUMIENIE GRANIC (29.1 - 29.5)
    {
      id: 'sec-29-1',
      pageNumber: 1030,
      sectionNumber: '29.1',
      title: 'Czym są granice? Definicja psychologiczna, funkcja membrany i fundament tożsamości',
      category: 'wstep',
      readingTimeMinutes: 16,
      quote: {
        text: 'Granice to dystans, przy którym mogę kochać zarówno ciebie, jak i samego siebie jednocześnie.',
        author: 'Prentis Hemphill'
      },
      paragraphs: [
        'W potocznym rozumieniu słowo „granica” kojarzy się z murem obronnym, drutem kolczastym, chłodem emocjonalnym i egoistycznym odgradzaniem się od świata. W nowoczesnej psychologii relacji i teorii przywiązania granica osobista jest czymś zgoła odmiennym — to dynamiczna, półprzepuszczalna membrana psychologiczna, która określa, gdzie kończą się moje myśli, emocje, wartości, ciało i odpowiedzialność, a gdzie zaczyna się przestrzeń drugiego człowieka.',
        'Zdrowe granice pełnią podwójną funkcję: z jednej strony chronią nasze wnętrze przed toksycznymi wpływami, manipulacją, eksploatacją i nadużyciami, z drugiej zaś pozwalają na swobodną, bezpieczną wymianę ciepła, miłości, wsparcia i informacji z otoczeniem. Człowiek z elastycznymi granicami potrafi otworzyć się na bliskość, nie tracąc przy tym poczucia własnej tożsamości.',
        'Człowiek pozbawiony granic nie posiada w istocie własnego Ja — staje się emocjonalną gąbką bezwiednie wchłaniającą nastroje innych ludzi lub bezwolnym wykonawcą cudzych scenariuszy życiowych. Gdy ktoś w jego otoczeniu jest smutny, on czuje przymus naprawienia tego nastroju; gdy ktoś żąda przysługi, on czuje przymus uległości.',
        'Stawianie granic to nie akt agresji wobec drugiego człowieka, lecz akt elementarnej opieki nad własnym istnieniem i warunek konieczny autentycznej miłości.'
      ],
      subsections: [
        {
          title: 'Granica to nie kontrola nad innymi',
          paragraphs: [
            'Fundamentalnym błędem jest mylenie granicy z próbą kontrolowania drugiego człowieka. Komunikat: „Musisz natychmiast przestać krzyczeć!” jest próbą kontroli cudzego zachowania (często nieskuteczną).',
            'Prawdziwa granica dotyczy wyłącznie CIEBIE i TWOICH działań: „Nie zgadzam się na podnoszenie na mnie głosu. Jeśli będziesz krzyczeć, wyjdę z pokoju i wrócimy do rozmowy, gdy będziemy oboje spokojni”.'
          ],
          highlightBox: {
            title: 'Zasada Samookreślenia',
            content: 'Granica nie mówi drugiemu człowiekowi, kim ma być. Granica mówi światu: kim jestem ja, na co wyrażam zgodę, a co zrobię, jeśli moje bezpieczeństwo zostanie naruszone.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-29-2',
      pageNumber: 1034,
      sectionNumber: '29.2',
      title: 'Dlaczego granice są potrzebne? Ochrona integralności, prewencja wypalenia i autentyczność',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Brak wyraźnych granic osobistych prowadzi do nieuchronnego bankructwa energetycznego, relacyjnego i zdrowotnego. Kiedy pozwalasz wszystkim na swobodny dostęp do swojego czasu, emocji i zasobów, Twoje życie przestaje należeć do Ciebie.',
        'W przełomowych badaniach socjolożki Brené Brown nad ludźmi o najwyższym poziomie dobrostanu i empatii wykazano paradoksalną zależność: osoby najbardziej współczujące, życzliwe i zdolne do bezwarunkowej miłości to jednocześnie osoby o najbardziej bezwzględnych, precyzyjnych i nieprzekraczalnych granicach osobistych.',
        'Dlaczego tak jest? Ponieważ granice zapobiegają narastaniu cichej urazy (resentment). Kiedy potrafisz w porę i ze spokojem powiedzieć „nie”, Twoje późniejsze „tak” jest w 100% czyste, szczere i pozbawione ukrytego jadu. Kiedy mówisz „tak”, a w duchu myślisz „nie”, każda minuta spędzona na pomaganiu rodzi w Tobie nienawiść do osoby, której pomagasz.',
        'Granice są jedynym trwałym fundamentem długoterminowych relacji partnerskich, przyjacielskich i zawodowych.'
      ]
    },
    {
      id: 'sec-29-3',
      pageNumber: 1038,
      sectionNumber: '29.3',
      title: 'Granice fizyczne — Ciało, przestrzeń osobista, dotyk i prawo do nietykalności',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Najbardziej pierwotnym i biologicznym poziomem są granice fizyczne. Obejmują one Twoje ciało, strefę dystansu personalnego (proksemikę), potrzebę odpoczynku, snu, pożywienia oraz prawo do decydowania o tym, kto, kiedy i w jaki sposób może Cię dotykać.',
        'Naruszenie granic fizycznych to nie tylko bezpośrednia przemoc cielesna — to także zmuszanie dzieci do całowania i przytulania dalekich krewnych wbrew ich woli („daj buziaka wujkowi, bo będzie mu przykro”), klepanie po plecach w biurze, wchodzenie do czyjegoś pokoju bez pukania czy wymuszanie pracy fizycznej w stanie skrajnej choroby i gorączki.',
        'Odzyskanie kontaktu z granicami fizycznymi wymaga ponownego wsłuchania się w sygnały autonomicznego układu nerwowego: nagłe napięcie mięśni karku, ucisk w klatce piersiowej czy mimowolny odruch cofnięcia się są bezpośrednią biologiczną informacją, że ktoś przekroczył bezpieczny dystans.',
        'Masz pełne prawo powiedzieć: „Nie lubię uścisków na powitanie, wolę podać rękę” — bez konieczności tłumaczenia się ze swojej wrażliwości zmysłowej.'
      ]
    },
    {
      id: 'sec-29-4',
      pageNumber: 1042,
      sectionNumber: '29.4',
      title: 'Granice emocjonalne — Separacja uczuć, empatia kontra zlewanie się (Enmeshment)',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Granice emocjonalne określają odpowiedzialność za stany psychiczne. Posiadanie zdrowych granic emocjonalnych oznacza zrozumienie fundamentalnej prawdy: JA odpowiadam za moje emocje, myśli, reakcje i samopoczucie, a TY odpowiadasz za swoje.',
        'Gdy granice emocjonalne ulegają zatarciu, pojawia się patologiczne zjawisko uwikłania (enmeshment), typowe dla rodzin dysfunkcyjnych. W takim układzie samopoczucie jednostki staje się całkowitym zakładnikiem nastroju innej osoby: „Jeśli ojciec wraca z pracy wściekły, cały dom musi chodzić na palcach”, „Jeśli mój partner ma doła, ja nie mam prawa cieszyć się ze swojego sukcesu zawodowego”.',
        'Dojrzała empatia polega na współodczuwaniu z zachowaniem pełnej odrębności psychicznej: mogę usiąść obok Ciebie, wysłuchać Twojego cierpienia, potrzymać Cię za rękę i wesprzeć, nie stając się jednocześnie Twoim cierpieniem i nie niszcząc własnego spokoju.',
        'Nie jesteś emocjonalnym koszem na śmieci, do którego każdy ma prawo bezkarnie wylewać swoje frustracje.'
      ]
    },
    {
      id: 'sec-29-5',
      pageNumber: 1046,
      sectionNumber: '29.5',
      title: 'Ćwiczenie Praktyczne — Moja Mapa Granic: Audyt Czterech Stref Życiowych',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      exerciseRef: chapterTwentyNineExerciseBoundaryMap,
      paragraphs: [
        'Pora na praktyczną diagnostykę stanu Twoich granic. Skorzystaj z formularza ćwiczenia 29.1 powyżej i przeprowadź rzetelny audyt czterech wymiarów:',
        '1. Strefa Czasu i Dostępności: Kto kradnie Twoje godziny bez pytania?',
        '2. Strefa Emocji: Czyje nastroje niszczą Twój spokój wewnętrzny?',
        '3. Strefa Informacji i Prywatności: Przed kim tłumaczysz się ze swoich wyborów?',
        '4. Wybór jednej twardej reguły ochronnej na nadchodzące 7 dni wraz z procedurą konsekwencji.'
      ]
    },

    // BLOK II — RÓŻNE RODZAJE GRANIC (29.6 - 29.10)
    {
      id: 'sec-29-6',
      pageNumber: 1050,
      sectionNumber: '29.6',
      title: 'Granice dotyczące czasu — Własność kalendarza, szacunek do czasu i asertywność harmonogramu',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Czas jest jedynym całkowicie nieodnawialnym zasobem, jakim dysponujesz na ziemi. Każda godzina oddana na realizację cudzych zachcianek to godzina bezpowrotnie odebrana Twoim pasjom, zdrowiu, rodzinie lub odpoczynkowi.',
        'Naruszenia granic czasowych przybierają postać: chronicznego spóźniania się innych na spotkania z Tobą, telefonów służbowych o godzinie 21:30, niekończących się zebrań bez agendy czy wymuszania natychmiastowych odpowiedzi na komunikatorach internetowych.',
        'Twoja dostępność jest Twoim suwerennym wyborem, a nie dobrem publicznym. Jeśli nie wyznaczysz sztywnych ram własnego kalendarza, inni ludzie bez wahania zapełnią Twoje luki swoimi priorytetami.',
        'ASERTACJA CZASOWA W PRAKTYCE: „Przykro mi, ale o 17:00 kończę pracę. Chętnie omówię ten temat jutro o 9:00 rano”.'
      ]
    },
    {
      id: 'sec-29-7',
      pageNumber: 1054,
      sectionNumber: '29.7',
      title: 'Granice prywatności — Pokoje, telefony, dzienniki i prawo do własnego wewnętrznego świata',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Każdy człowiek, bez względu na wiek i stopień zażyłości relacyjnej, ma niezbywalne prawo do prywatności. Obejmuje ona przestrzeń fizyczną (własny pokój, szuflada, torebka, zamknięte drzwi łazienki) oraz przestrzeń cyfrową (hasło do telefonu, historia korespondencji, prywatny dziennik).',
        'W relacjach toksycznych i uwikłanych prywatność bywa perfidnie mylona z tajemnicą lub zdradą („skoro mnie kochasz i nie masz nic do ukrycia, dlaczego nie chcesz dać mi hasła do swojego telefonu?”). Taka postawa nie wynika z miłości, lecz z paranoicznego lęku i pragnienia totalitarnej kontroli nad partnerem.',
        'Zdrowy związek opiera się na zaufaniu i poszanowaniu odrębności, a nie na wzajemnej inwigilacji. Szanowanie zamkniętych drzwi partnera lub dziecka jest fundamentem bezpieczeństwa emocjonalnego.',
        'Masz prawo odpowiedzieć: „Mój telefon i mój dziennik to moja prywatna przestrzeń. Szanuję twoją prywatność i oczekuję tego samego”.'
      ]
    },
    {
      id: 'sec-29-8',
      pageNumber: 1058,
      sectionNumber: '29.8',
      title: 'Granice dotyczące informacji — Oversharing, prawo do milczenia i selektywne odsłanianie siebie',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Granice informacyjne regulują to, czym, z kim, kiedy i w jakich okolicznościach decydujesz się podzielić. Nie każdy człowiek zasłużył na dostęp do Twoich intymnych historii, zarobków, planów życiowych, lęków czy traum z dzieciństwa.',
        'Zjawisko oversharingu (natychmiastowego, nadmiernego odsłaniania się przed nowo poznanymi ludźmi w internecie lub w pracy) bywa fałszywie promowane jako „autentyczność”. W rzeczywistości jest ono objawem nieszczelnych granic i desperacką próbą wymuszenia przedwczesnej bliskości.',
        'Podobnie na spotkaniach rodzinnych często padają wścibskie, naruszające pytania: „A kiedy ślub?”, „Ile zarabiasz?”, „Dlaczego jeszcze nie macie dzieci?”. Osoba o słabych granicach zaczyna się gęsto tłumaczyć, rumienić i pocić.',
        'Osoba o zdrowych granicach odpowiada z uśmiechem i żelaznym spokojem: „To moja prywatna sprawa, nie rozmawiam o tym przy obiedzie. Podasz mi sałatkę?”.'
      ]
    },
    {
      id: 'sec-29-9',
      pageNumber: 1062,
      sectionNumber: '29.9',
      title: 'Granice dotyczące energii i dostępności — Zarządzanie baterią społeczną i prawo do wycofania',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Twoja energia psychiczna (bateria społeczna) jest zasobem ściśle ograniczonym biologicznie, regulowanym m.in. przez tonus układu przywspółczulnego i poziom neuroprzekaźników monoaminowych.',
        'Stawianie granic energii polega na uznaniu, że nie masz obowiązku być „dyżurnym terapeutą” dla wszystkich znajomych w kryzysie. Jeśli Twoja bateria jest wyczerpana po ciężkim tygodniu, masz pełne prawo wyciszyć telefon, odmówić udziału w imprezie i spędzić sobotę w ciszy i samotności.',
        'Próba bycia całodobowym pogotowiem ratunkowym dla każdego wampira emocjonalnego w otoczeniu prowadzi do zespołu znieczulicy współczuciowej (compassion fatigue) oraz ciężkich stanów depresyjnych.',
        'JAK ZASTOSOWAĆ TO JUTRO: „Słyszę, że przeżywasz trudny moment, ale sam jestem dziś skrajnie zmęczony i nie mam przestrzeni na tę rozmowę. Porozmawiajmy w poniedziałek”.'
      ]
    },
    {
      id: 'sec-29-10',
      pageNumber: 1066,
      sectionNumber: '29.10',
      title: 'Analiza Sytuacji — Kiedy zwykła prośba zaczyna być naciskiem? Studium rozmowy Marty i Szymona',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      paragraphs: [
        'SCENARIUSZ ROZMOWY: Szymon dzwoni do Marty w piątek o 18:00 z prośbą o pożyczenie jej samochodu na weekend. Marta odpowiada spokojnie: „Przykro mi, Szymon, ale w ten weekend sama go potrzebuję, mam zaplanowany wyjazd”. Szymon zmienia ton: „Marta, daj spokój! Przecież możesz pojechać pociągiem! Ja muszę przewieźć sprzęt na działkę, a ty robisz problem o byle co. Myślałem, że jesteśmy prawdziwymi przyjaciółmi!”.',
        'ANALIZA KROK PO KROKU:',
        '1. W którym momencie prośba zamieniła się w nacisk? W momencie, gdy Szymon nie przyjął odmowy jako prawomocnej odpowiedzi.',
        '2. Zastosowane techniki manipulacyjne: podważanie ważności planów Marty („możesz jechać pociągiem”), unieważnianie jej emocji („robisz problem o byle co”) oraz szantaż więzią relacyjną („myślałem, że jesteśmy przyjaciółmi”).',
        '3. Błąd uległości: Gdyby Marta w tym momencie ustąpiła i oddała kluczyki, nagrodziłaby agresywne zachowanie Szymona i nauczyła go, że nacisk emocjonalny działa.',
        '4. Wersja asertywna: Marta stosuje technikę zdartej płyty: „Rozumiem, że to dla ciebie ważne, Szymon. Moja decyzja jest jednak niezmienna — samochód zostaje ze mną. Życzę udanego weekendu”.'
      ]
    },

    // BLOK III — DLACZEGO TAK TRUDNO STAWIAĆ GRANICE? (29.11 - 29.15)
    {
      id: 'sec-29-11',
      pageNumber: 1070,
      sectionNumber: '29.11',
      title: 'Potrzeba akceptacji — Ewolucyjny lęk przed ostracyzmem i biologia przynależności w dACC',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Z ewolucyjnego punktu widzenia potrzeba akceptacji społecznej jest jedną z najpotężniejszych sił napędzających ludzki mózg. Przez setki tysięcy lat wykluczenie z pierwotnego plemienia oznaczało nieuchronną śmierć z głodu, zimna lub w szponach drapieżników.',
        'Badania neuroobrazowe fMRI (Naomi Eisenberger i Matthew Lieberman) wykazały zdumiewające zjawisko: ból wywołany odrzuceniem społecznym (ostracism pain) aktywuje dokładnie te same struktury w mózgu — grzbietową część przedniej kory obręczy (dACC) oraz przednią wyspę — co fizyczny ból po oparzeniu ręki wrzątkiem.',
        'Dlatego gdy mamy odmówić komuś bliskiemu lub przełożonemu, nasze ciało migdałowate wszczyna natychmiastowy alarm fizjologiczny, interpretując potencjalne niezadowolenie drugiej osoby jako bezpośrednie zagrożenie biologicznego bytu.',
        'Przełamanie tego odruchu wymaga świadomej interwencji kory przedczołowej: „Niezadowolenie tej osoby nie zagraża mojemu życiu. Jestem dorosły, bezpieczny i mam prawo do własnych granic”.'
      ]
    },
    {
      id: 'sec-29-12',
      pageNumber: 1074,
      sectionNumber: '29.12',
      title: 'Strach przed konfliktem — Unikanie napięcia za cenę chronicznej autodestrukcji',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Dla wielu osób każda, nawet najbardziej błaha różnica zdań jest podświadomie utożsamiana z katastrofą relacyjną i końcem miłości. Taki lęk przed konfliktem (conflict avoidance) zmusza do nieustannego ustępowania, uśmiechania się przez łzy i udawania, że wszystko jest w porządku.',
        'Jednak cena takiego pozornego „świętego spokoju” jest gigantyczna. Zamiast rozwiązać problem na wczesnym etapie, człowiek gromadzi w sobie tłumioną złość i żal, które po miesiącach lub latach eksplodują w postaci nagłego rozwodu, zerwania kontaktu lub ciężkich chorób psychosomatycznych (wrzody, nadciśnienie, fibromialgia).',
        'Dojrzały konflikt nie jest zaprzeczeniem miłości — jest podstawowym narzędziem kalibracji relacji. Pozwala dwóm odrębnym istotom ustalić reguły wspólnego życia.',
        'PAMIĘTAJ: Relacja, która nie jest w stanie przetrwać Twojego spokojnego i uprzejmego „nie”, od początku była oparta na iluzji i Twojej uległości.'
      ]
    },
    {
      id: 'sec-29-13',
      pageNumber: 1078,
      sectionNumber: '29.13',
      title: 'Poczucie winy — Fałszywa odpowiedzialność za cudze emocje i dekonstrukcja wyrzutów sumienia',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Poczucie winy pojawiające się po postawieniu granicy jest najczęstszą pułapką, w którą wpadają osoby uczące się asertywności. Człowiek odmawia wykonania niechcianego zadania, po czym przez trzy noce nie może zasnąć, zadręczając się myślami: „Jestem potworem, jak mogłem tak postąpić?”.',
        'NALEŻY BEZWZGLĘDNIE ODRÓŻNIĆ DWA RODZAJE POCZUCIA WINY:',
        '1. POCZUCIE WINY REALNE (Moralne): pojawia się, gdy rzeczywiście złamałeś swoje zasady etyczne, celowo kogoś skrzywdziłeś, okradłeś, okłamałeś lub złamałeś dobrowolną obietnicę. Wtedy właściwą reakcją są przeprosiny i zadośćuczynienie.',
        '2. POCZUCIE WINY INDUKOWANE (Fałszywe / Neurotyczne): pojawia się, gdy po prostu odmówiłeś spełnienia cudzego roszczenia kosztem siebie i pozwoliłeś drugiej osobie poczuć jej własne rozczarowanie.',
        'Nie jesteś odpowiedzialny za to, jak dorośli ludzie radzą sobie ze swoimi emocjami w odpowiedzi na Twoje uprawnione granice.'
      ]
    },
    {
      id: 'sec-29-14',
      pageNumber: 1082,
      sectionNumber: '29.14',
      title: 'Strach przed odrzuceniem — Odróżnienie porzucenia od zdrowego dystansu w relacji',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Lęk przed odrzuceniem podpowiada katastroficzne scenariusze: „Jeśli powiem szefowi, że nie wezmę nadgodzin w sobotę, natychmiast mnie zwolni”, „Jeśli powiem partnerowi, że chcę spędzić wieczór sam, przestanie mnie kochać i znajdzie kogoś innego”.',
        'Warto poddać te czarne wizje testowi empirycznemu. W 95% przypadków dojrzali ludzie reagują na spokojną, uprzejmą granicę pełnym zrozumieniem i szacunkiem.',
        'A jeśli ktoś rzeczywiście obraża się, zrywa kontakt lub grozi odejściem z powodu Twojego spokojnego „nie”? Otrzymujesz wtedy bezcenną, faktograficzną informację zwrotną: ta osoba nigdy nie kochała Ciebie jako człowieka — kochała wyłącznie Twoją uległość, darmowe usługi i łatwość eksploatacji.',
        'Stawianie granic jest najskuteczniejszym filtrem odsiewającym relacje autentyczne od układów pasożytniczych.'
      ]
    },
    {
      id: 'sec-29-15',
      pageNumber: 1086,
      sectionNumber: '29.15',
      title: 'Ćwiczenie Praktyczne — Dlaczego trudno mi powiedzieć „nie”? Rekonstrukcja Wczesnych Skryptów',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Wykonaj poniższą pracę analityczną w swoim dzienniku refleksyjnym:',
        '1. JAK REAGOWANO W MOIM DOMU RODZINNYM NA ODMOWĘ? Czy dziecko mówiące „nie” było wysłuchiwane, czy karane krzykiem, karcącym milczeniem (fochem) rodzica lub etykietami: „jesteś niewdzięczny”, „niegrzeczny”, „egoista”?',
        '2. MOJE GŁÓWNE BŁĘDNE PRZEKONANIE: Zidentyfikuj swoje ukryte zdanie-program (np. „Żeby zasłużyć na miłość, muszę być stale użyteczny”, „Moje potrzeby są mniej ważne niż potrzeby innych”).',
        '3. NAJGORSZY SCENARIUSZ: Co najgorszego stałoby się dzisiaj, gdybyś przestał zadowalać wszystkich dookoła?',
        '4. ZAPISZ NOWĄ DEKLARACJĘ SUWERENNOŚCI: „Mam pełne prawo stawiać granice i mówić NIE bez poczucia winy. Mój spokój i moje zdrowie są dla mnie priorytetem”.'
      ]
    },

    // BLOK IV — PRZEKRACZANIE GRANIC (29.16 - 29.20)
    {
      id: 'sec-29-16',
      pageNumber: 1090,
      sectionNumber: '29.16',
      title: 'Jak rozpoznać przekraczanie granic? Sygnały somatyczne, narastająca frustracja i złość jako dzwonek alarmowy',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Zanim Twój umysł logiczny zorientuje się, że ktoś narusza Twoje terytorium psychiczne, Twoje ciało wie o tym jako pierwsze. Do podstawowych markerów somatycznych przekroczenia granic należą:',
        '1. Nagły ucisk w dołku podsercowym, zaciśnięte gardło lub płytki oddech w obecności określonej osoby.',
        '2. Chroniczne poczucie drenowania z energii i ból głowy po każdej rozmowie.',
        '3. Narastająca, cicha złość, sarkastyczne uwagi i niechęć do odbierania połączeń telefonicznych.',
        '4. Odruch ucieczki wzrokiem i fizyczne wycofywanie się w tył.',
        'Złość nie jest grzechem ani wadą charakteru — jest biologicznym dzwonkiem alarmowym układu nerwowego informującym Cię: „Ktoś właśnie wtargnął na Twoje terytorium i próbuje odebrać Ci Twoje zasoby!”. Zaakceptuj tę złość i użyj jej energii do postawienia spokojnej, twardej granicy.'
      ]
    },
    {
      id: 'sec-29-17',
      pageNumber: 1094,
      sectionNumber: '29.17',
      title: 'Prośba a nacisk — Jak odróżnić wolność wyboru od ukrytego roszczenia i przymusu',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W komunikacji międzyludzkiej fundamentalne znaczenie ma odróżnienie autentycznej prośby od ukrytego nacisku (roszczenia przebranego za prośbę). Zewnętrznie oba zdania mogą brzmieć identycznie: „Czy mógłbyś pożyczyć mi 1000 zł?”.',
        'TEST AUTENTYCZNOŚCI PROŚBY: Jedynym prawdziwym sprawdzianem jest to, co dzieje się, gdy powiesz: „Przykro mi, ale nie mogę”.',
        'W przypadku AUTENTYCZNEJ PROŚBY rozmówca szanuje Twoją podmiotowość: „Rozumiem, dzięki za odpowiedź, poszukam innego rozwiązania”. Nie ma w tym złości, obrażania się ani kary emocjonalnej.',
        'W przypadku NACISKU Twoja odmowa natychmiast wywołuje atak: fochy, karzące milczenie, sarkazm, wypominanie przysług z przeszłości („a ja ci w zeszłym roku pomogłem!”) lub szantaż emocjonalny. PAMIĘTAJ: Jeśli nie masz prawa odmówić bez poniesienia kary, nie miałeś do czynienia z prośbą, lecz z rozkazem.'
      ]
    },
    {
      id: 'sec-29-18',
      pageNumber: 1098,
      sectionNumber: '29.18',
      title: 'Prośba a manipulacja — Pochlebstwa, technika stopy w drzwiach i sztuczny dług wdzięczności',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Manipulatorzy rzadko atakują granice w sposób jawny i frontalny. Znacznie częściej stosują subtelne techniki wpływu społecznego, które sprawiają, że ofiara sama dobrowolnie rezygnuje ze swoich praw.',
        'DO NAJCZĘSTSZYCH PUŁAPEK NALEŻĄ:',
        '1. Zalewanie Pochlebstwami: „Jesteś jedyną osobą w firmie, która potrafi to ogarnąć! Bez ciebie zginiemy!”. Pod wpływem połechtanego ego człowiek zgadza się na darmowe nadgodziny.',
        '2. Technika Stopy w Drzwiach: wyłudzenie mikroskopijnej przysługi („pożycz mi tylko 10 zł”), aby po kilku dniach zażądać wielkiego zobowiązania („pożycz mi 1000 zł”).',
        '3. Sztuczny Dług Wdzięczności: wyświadczenie nieproszonej przysługi (np. przyniesienie drogiej kawy), aby wywołać w Tobie paraliżujący przymus odwzajemnienia się ustępstwem.',
        'Zachowaj czujność: nie jesteś zobowiązany do spłacania długów, o których zaciągnięcie nigdy nie prosiłeś.'
      ]
    },
    {
      id: 'sec-29-19',
      pageNumber: 1102,
      sectionNumber: '29.19',
      title: 'Krytyka a naruszanie granic — Konstruktywny feedback kontra atak personalny na godność',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W relacjach zawodowych i osobistych kluczowe jest rozróżnienie między merytorycznym feedbackiem a agresywnym przekraczaniem granic godności osobistej.',
        'KONSTRUKTYWNY FEEDBACK: dotyczy konkretnego zachowania lub zadania, odnosi się do obiektywnych faktów, jest przekazywany w cztery oczy, z szacunkiem i z propozycją poprawy („W tym arkuszu brakuje kolumny z podatkiem VAT, uzupełnij ją do 15:00”).',
        'NARUSZENIE GRANICY I PRZEMOC WERBALNA: atakuje tożsamość, intelekt lub cechy osoby, posługuje się etykietowaniem, krzykiem, sarkazmem lub publicznym zawstydzaniem („Jak zwykle nic nie potrafisz zrobić porządnie, jesteś kompletnym beztalenciem!”).',
        'Masz pełne prawo natychmiast zatrzymać rozmowę: „Nie wyrażam zgody na taki ton i obraźliwe etykiety. Jeśli chcesz porozmawiać o faktach w raporcie, chętnie to zrobię, gdy zmienisz sposób komunikacji”.'
      ]
    },
    {
      id: 'sec-29-20',
      pageNumber: 1106,
      sectionNumber: '29.20',
      title: 'Szantaż emocjonalny — Anatomia syndromu FOG (Fear, Obligation, Guilt) Susan Forward',
      category: 'teoria',
      readingTimeMinutes: 19,
      paragraphs: [
        'W fundamentalnej pracy Toksyczni rodzice i Szantaż emocjonalny Susan Forward opisała model FOG — trującą mgłę manipulacji opartą na trzech filarach: LĘKU (Fear), POCZUCIU OBOWIĄZKU (Obligation) i POCZUCIU WINY (Guilt).',
        'CZTERY TYPY SZANTAŻYSTÓW EMOCJONALNYCH:',
        '1. PROKLAJMATORZY (Punishers): grożą karą bezpośrednią: „Jeśli nie zrobisz tego, o co proszę, zwolnię cię / rozwiodę się / nie dostaniesz spadku”.',
        '2. BICZUJĄCY SIĘ (Self-Punishers): grożą samookaleczeniem lub chorobą: „Jeśli odejdziesz, zabiję się / dostanę zawału serca”.',
        '3. CIERPIĘTNICY (Sufferers): grają bezbronną, niemą ofiarę czekającą na ratunek, wzdychają i płaczą, wmawiając otoczeniu: „Przez ciebie tak cierpię”.',
        '4. KUSICIELE (Tantalizers): obiecują wspaniałą nagrodę (awans, miłość, pieniądze), ale stawiają warunek bezwzględnego posłuszeństwa.',
        'WYJŚCIE Z MGŁY FOG: Zdemaskuj mechanizm na głos: „Widzę, że próbujesz wzbudzić we mnie poczucie winy. Bardzo mi przykro z powodu twojej sytuacji, jednak moja decyzja jest niezmienna”.'
      ]
    },

    // BLOK V — STAWIANIE GRANIC W PRAKTYCE (29.21 - 29.25)
    {
      id: 'sec-29-21',
      pageNumber: 1110,
      sectionNumber: '29.21',
      title: 'Jak powiedzieć „nie”? Anatomia czystej odmowy bez zbędnych usprawiedliwień i kłamstw',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Większość ludzi popełnia fundamentalny błąd podczas odmawiania: zaczynają się gęsto tłumaczyć, przepraszać, jąkać i podawać skomplikowane zewnętrzne wymówki („Naprawdę bym chciał, ale akurat ciocia ma imieniny, a potem muszę wyprowadzić psa sąsiada...”).',
        'PUŁAPKA TŁUMACZENIA SIĘ: Podawanie zawiłych usprawiedliwień jest dla rozmówcy bezpośrednim zaproszeniem do negocjacji! Zręczny manipulator natychmiast rozbroi Twoje wymówki: „To przełóż ciocię na jutro, a psa wyprowadzę z tobą!”. Zostajesz zepchnięty do narożnika.',
        'CZYSTA ODMOWA to krótki, jednoznaczny i uprzejmy komunikat zawierający: 1. Podziękowanie za propozycję (opcjonalnie); 2. Twarde, jasne słowo odmowne; 3. Brak kłamstw i zbędnych tłumaczeń.',
        'PRZYKŁADY CZYSTEJ ODMOWY:',
        '• „Dziękuję za zaproszenie, ale tym razem nie wezmę w tym udziału”.',
        '• „Nie pożyczę ci tych pieniędzy”.',
        '• „Nie mogę przejąć tego projektu”.',
        '„NIE” jest kompletnym zdaniem gramatycznym i nie wymaga składania sprawozdania ze swojego życia.'
      ]
    },
    {
      id: 'sec-29-22',
      pageNumber: 1114,
      sectionNumber: '29.22',
      title: 'Jak odmawiać bez agresji? Spokój fonacyjny, kontakt wzrokowy i postawa pewności siebie',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Osoby, które przez lata tłumiły swoje granice, gdy wreszcie decydują się powiedzieć „nie”, często robią to w sposób wybuchowy, krzykliwy i agresywny — trzaskają drzwiami lub atakują rozmówcę. Taka reakcja rodzi natychmiastową eskalację awantury i późniejsze druzgocące poczucie winy.',
        'Prawdziwa potęga granic leży w ich miękkiej formie i żelaznej treści. Im bardziej jesteś pewny swojej granicy, tym ciszej, spokojniej i wolniej możesz mówić.',
        'TECHNIKA SPOKOJU FONACYJNEGO:',
        '1. Utrzymuj łagodny, stabilny kontakt wzrokowy (nie uciekaj wzrokiem w podłogę).',
        '2. Opuść ramiona, rozluźnij szczękę i weź głęboki oddech przeponowy.',
        '3. Obniż ton głosu (wysoki, piskliwy ton zdradza lęk i zachęca do ataku).',
        '4. Mów powoli, z wyraźnymi pauzami między zdaniami. Spokój jest najbardziej onieśmielającą formą asertywności.'
      ]
    },
    {
      id: 'sec-29-23',
      pageNumber: 1118,
      sectionNumber: '29.23',
      title: 'Jak komunikować własne potrzeby? Przejście od pretensji i domysłów do jasnych próśb',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Granice to nie tylko odmawianie — to także jasne, dojrzałe i odważne komunikowanie tego, czego potrzebujesz, by czuć się bezpiecznie i komfortowo w relacji.',
        'Wielu ludzi wpada w toksyczną pułapkę oczekiwania, że partner, przyjaciele czy szef „sami powinni się domyślić” ich potrzeb („Skoro mnie kocha, to powinien wiedzieć, dlaczego jestem smutna!”). Brak czytania w myślach rodzi narastającą frustrację, ciche dni i złośliwe docinki.',
        'Dojrzałość komunikacyjna wymaga porzucenia pretensji na rzecz precyzyjnej prośby według formuły: „Potrzebuję [X], aby móc [Y]. Czy możemy ustalić [Z]?”.',
        'PRZYKŁAD: Zamiast mówić z pretensją: „Nigdy mi nie pomagasz w domu!”, powiedz: „Potrzebuję dziś 2 godzin odpoczynku po pracy. Czy mógłbyś zrobić zakupy i ugotować kolację?”. Jasność jest najwyższą formą życzliwości relacyjnej.'
      ]
    },
    {
      id: 'sec-29-24',
      pageNumber: 1122,
      sectionNumber: '29.24',
      title: 'Jak komunikować konsekwencje? Różnica między groźbą a informacją o własnym działaniu',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Granica bez określonej i wyegzekwowanej konsekwencji jest jedynie bezwartościową prośbą lub pustą sugestią. Musisz jasno poinformować drugą stronę, co TY zrobisz, jeśli niedopuszczalne zachowanie nie ustanie.',
        'KLUCZOWE JEST ROZRÓŻNIENIE MIĘDZY GROŹBĄ A KONSEKWENCJĄ:',
        '• GROŹBA (Agresja): ma na celu ukaranie, zastraszenie i kontrolowanie drugiej osoby („Jeśli jeszcze raz to zrobisz, zniszczę cię / pożałujesz tego!”). Rodzi opór i chęć zemsty.',
        '• KONSEKWENCJA (Asertywność): jest spokojną informacją o Twoim własnym zachowaniu chroniącym („Jeśli podczas naszej rozmowy będziesz używać wulgaryzmów, przerwę to spotkanie i wyjdę z gabinetu. Wrócimy do tematu, gdy będziesz gotowy rozmawiać z szacunkiem”).',
        'Konsekwencja musi być realistyczna, proporcjonalna i w 100% możliwa do natychmiastowego zrealizowania przez Ciebie.'
      ]
    },
    {
      id: 'sec-29-25',
      pageNumber: 1126,
      sectionNumber: '29.25',
      title: 'Co zrobić, kiedy ktoś ignoruje granicę? Protokół eskalacji kroków i zjawisko Extinction Burst',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Gdy po raz pierwszy postawisz granicę osobie przyzwyczajonej do Twojej wieloletniej uległości, w 90% przypadków spotkasz się ze zjawiskiem Extinction Burst (wybuchem wygaszania). Druga strona gwałtownie nasili ataki, krzyki, fochy i szantaż, próbując sprawdzić, czy Twoja nowa postawa to tylko chwilowy kaprys, czy trwała zmiana.',
        'W takiej sytuacji nie tłumacz się ponownie i nie wchodź w jałowe dyskusje. ZASTOSUJ PROTOKÓŁ 3 KROKÓW:',
        '1. PRZYPOMNIENIE GRANICY: „Mówiłem już, że nie pożyczam samochodu”.',
        '2. WSKAZANIE NA IGNOROWANIE USTALEŃ: „Widzę, że ponawiasz prośbę mimo mojej jasnej odpowiedzi”.',
        '3. WYEGZEKWOWANIE KONSEKWENCJI: „Zamykam ten temat. Jeśli nadal będziesz naciskać, zakończę tę rozmowę”. Jeśli nacisk trwa — odłóż słuchawkę lub wyjdź z pokoju.',
        'Jeśli ktoś notorycznie i z premedytacją depcze Twoje granice mimo wielokrotnych upomnień, jedyną skuteczną granicą pozostaje trwałe zdystansowanie się lub całkowite zerwanie relacji.'
      ]
    },

    // BLOK VI — GRANICE W RELACJACH (29.26 - 29.30)
    {
      id: 'sec-29-26',
      pageNumber: 1130,
      sectionNumber: '29.26',
      title: 'Granice w rodzinie — Odcięcie pępowiny psychologicznej, indywiduacja i relacja Dorosły-Dorosły',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'W relacjach rodzinnych stawianie granic budzi najsilniejsze opory i największe poczucie winy, ponieważ dotyka pierwotnych lojalności, tabu i skryptów z dzieciństwa. Wielu 40-letnich dorosłych ludzi w obecności swoich rodziców natychmiast cofa się emocjonalnie do roli bezradnego, zastraszonego 8-latka.',
        'Proces indywiduacji (Carl Gustav Jung) wymaga symbolicznego przecięcia pępowiny emocjonalnej. Jako dorosły człowiek masz niezbywalne prawo decydować o swoim małżeństwie, finansach, wychowaniu dzieci, diecie, religii i sposobie spędzania świąt bez konieczności uzyskiwania aprobaty rodziców.',
        'Przejście od toksycznego uwikłania do dojrzałej relacji wymaga życzliwej stanowczości:',
        '„Mamo, tato, bardzo was kocham i szanuję wasze doświadczenie. Jednak w sprawie wychowania naszych dzieci podjęliśmy z żoną własną decyzję i prosimy o jej uszanowanie”.'
      ]
    },
    {
      id: 'sec-29-27',
      pageNumber: 1134,
      sectionNumber: '29.27',
      title: 'Granice w przyjaźni — Higiena wzajemności, eliminacja wampiryzmu emocjonalnego i szacunek',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Prawdziwa przyjaźń opiera się na symetrii, zaufaniu i wzajemności. Jeśli relacja polega na tym, że jedna strona wyłącznie mówi o sobie, wylewa frustracje, prosi o przysługi i oczekuje ciągłej uwagi, a nigdy nie słucha, nie wspiera i znika w Twoich trudnych chwilach — mamy do czynienia z relacją pasożytniczą.',
        'STAWIANIE GRANIC W PRZYJAŹNI:',
        '• „Bardzo chętnie cię wysłucham przez 20 minut, ale potem muszę wracać do pracy”.',
        '• „Nie pożyczę ci tych pieniędzy, ponieważ zależy mi na naszej przyjaźni i nie chcę wprowadzać napięć finansowych”.',
        '• „Nie mogę dziś z tobą porozmawiać, jestem wyczerpany. Zadzwonię w czwartek”.',
        'Prawdziwy przyjaciel przyjmie te słowa z pełnym zrozumieniem; wampir emocjonalny obrazi się i poszuka innej ofiary do wysysania energii.'
      ]
    },
    {
      id: 'sec-29-28',
      pageNumber: 1138,
      sectionNumber: '29.28',
      title: 'Granice w związku, szkole, pracy i internecie — Zintegrowany przegląd stref społecznych',
      category: 'teoria',
      readingTimeMinutes: 19,
      paragraphs: [
        'W ZWIĄZKU PARTNERSKIM: Granice chronią tożsamość obojga partnerów. Dojrzały związek to formuła: „Ja + Ty = My”, a nie „Rozpływam się w Tobie i zapominam, kim jestem”. Obejmują prawo do własnych pasji, osobistego budżetu, czasu dla siebie i przyjaciół.',
        'W SZKOLE I NA UCZELNI: Obrona przed presją rówieśniczą (używki, hejtowanie słabszych, ściąganie z Twojej kartki) oraz prawo do kulturalnego dopytania nauczyciela o kryteria oceny bez lęku przed odwetem.',
        'W PRACY: Granice zawodowe wyznaczają godziny dostępności, zakres obowiązków w umowie oraz kategoryczny brak zgody na mobbing, krzyk, seksizm i zrzucanie cudzych zadań.',
        'W INTERNECIE: Higiena cyfrowa obejmuje wyciszanie powiadomień, nieodpowiadanie na hejt, nieuczestniczenie w wojennych dyskusjach w komentarzach oraz natychmiastowe blokowanie profili naruszających Twoją godność.'
      ]
    },
    {
      id: 'sec-29-29',
      pageNumber: 1144,
      sectionNumber: '29.29',
      title: 'Wielkie Studium Przypadku — Osoba, która nie potrafi odmawiać: Przemiana Moniki',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
      caseStudyRef: chapterTwentyNineCaseStudyMonika,
      paragraphs: [
        'W tym studium przypadku szczegółowo analizujemy dramat Moniki (28 lat), koordynatorki projektów w agencji kreatywnej, której patologiczny syndrom People Pleasing doprowadził do załamania zdrowotnego i napadów paniki.',
        'Przeanalizuj interaktywną kartę powyżej: dekompozycję lęku przed odrzuceniem w korze dACC, analizę dialogu manipulacyjnego w piątek o 16:45 oraz procedurę budowania bufora czasowego, która pozwoliła jej odzyskać zdrowie i szacunek zespołu.'
      ]
    },
    {
      id: 'sec-29-30',
      pageNumber: 1150,
      sectionNumber: '29.30',
      title: 'Ćwiczenia Końcowe, Podsumowanie i Słownik Pojęć Rozdziału 29',
      category: 'podsumowanie',
      readingTimeMinutes: 18,
      paragraphs: [
        'SŁOWNIK KLUCZOWYCH POJĘĆ ROZDZIAŁU 29:',
        '• GRANICE OSOBISTE — półprzepuszczalna membrana psychologiczna określająca tożsamość, wartości, odpowiedzialność i dopuszczalne zachowania innych wobec nas.',
        '• ENMESHMENT (Uwikłanie) — patologiczne zlanie się emocjonalne w rodzinie lub parze uniemożliwiające odróżnienie własnych stanów od cudzych.',
        '• SZANTAŻ EMOCJONALNY FOG — manipulacja wykorzystująca Lęk (Fear), Poczucie Obowiązku (Obligation) i Poczucie Winy (Guilt).',
        '• EXTINCTION BURST — gwałtowne, chwilowe nasilenie ataków i manipulacji przez otoczenie tuż po postawieniu nowej granicy.',
        '• PROKSEMIKA — psychologia przestrzeni osobistej i dystansu fizycznego.',
        '• CZYSTA ODMOWA — zwięzły, uprzejmy komunikat odmowny pozbawiony zbędnych usprawiedliwień i kłamstw.',
        'PYTANIA REFLEKSYJNE: 1. W jakim obszarze Twojego życia granice są najbardziej nieszczelne? 2. Czy odróżniasz realną winę moralną od neurotycznego poczucia winy indukowanego przez innych? 3. Jakie konsekwencje wdrożysz, gdy ktoś ponownie zignoruje Twoją odmowę?',
        'MOST DO ROZDZIAŁU 30: Gdy wiesz już, czym są granice i dlaczego są niezbędne do przetrwania, stajesz przed kluczowym wyzwaniem wykonawczym: JAK wyrażać je w codziennym dialogu bez agresji i bez uległości? W kolejnym, finałowym rozdziale opanujemy sztukę Asertywności.'
      ]
    }
  ]
};
