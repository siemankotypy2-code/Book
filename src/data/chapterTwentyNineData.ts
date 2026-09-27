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
    { speaker: 'Bartek (z uśmiechem)', text: 'Monia, zrób to za mnie, jesteś niezastąpiona!', subtext: 'Pochlebstwo jako narzędzie manipulacji i delegowania własnych obowiązków.' },
    { speaker: 'Monika (przed terapią)', text: 'Dobrze, nie ma problemu...', subtext: 'Kapitulacja z lęku przed odrzuceniem i etykietą „złej koleżanki”.' },
    { speaker: 'Monika (po wdrożeniu granic)', text: 'Bartek, dziś o 17:00 kończę pracę i mam zaplanowany wieczór. Nie przejmę Twojej prezentacji.', subtext: 'Krótka, spokojna i nieagresywna odmowa bez tłumaczenia się i przepraszania.' }
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
  title: 'Ćwiczenie Praktyczne: Moja Osobista Mapa Granic i Audyt Szczelności',
  subtitle: 'Diagnostyka 4 stref granic w Twoim życiu: fizycznej, emocjonalnej, czasowej i informacyjnej',
  objective: 'Precyzyjne zidentyfikowanie miejsc, w których Twoje granice są zbyt sztywne (mur), zbyt nieszczelne (gąbka) lub optymalnie elastyczne (membrana).',
  durationMinutes: 25,
  neuroScientificFoundation: 'Świadome nazwanie i narysowanie granic aktywuje przyśrodkową korę przedczołową, wzmacniając poczucie odrębności i tożsamości.',
  steps: [
    {
      stepNumber: 1,
      title: 'Audyt Granic Czasowych i Dostępności',
      instruction: 'Oceń w skali 1–10: W jakim stopniu kontrolujesz swój kalendarz? Czy odbierasz telefony służbowe w weekendy? Kto kradnie Twój czas bez pytania?',
      promptText: 'Moje granice czasowe (ocena i analiza):',
      placeholder: 'Ocena: 4/10. Notorycznie odbieram maile o 23:00 z lęku, że szef uzna mnie za niezaangażowanego.'
    },
    {
      stepNumber: 2,
      title: 'Audyt Granic Emocjonalnych',
      instruction: 'Oceń w skali 1–10: W jakim stopniu przejmujesz nastroje partnera/rodziców? Czy czujesz się winny, gdy ktoś w Twojej obecności jest smutny lub zły?',
      promptText: 'Moje granice emocjonalne (ocena i analiza):',
      placeholder: 'Ocena: 3/10. Kiedy mama wzdycha, natychmiast rzucam wszystko i próbuję poprawić jej humor.'
    },
    {
      stepNumber: 3,
      title: 'Audyt Granic Informacyjnych i Prywatności',
      instruction: 'Oceń w skali 1–10: Czy dzielisz się swoimi intymnymi sprawami z ludźmi, którzy nie zasłużyli na zaufanie? Czy pozwalasz na wścibskie pytania o zarobki lub życie osobiste?',
      promptText: 'Moje granice informacyjne (ocena i analiza):',
      placeholder: 'Ocena: 6/10. Z trudem odpowiadam „to moja prywatna sprawa” na obiedzie rodzinnym.'
    },
    {
      stepNumber: 4,
      title: 'Jedna Twarda Granica na Ten Tydzień',
      instruction: 'Wybierz jeden obszar o najniższej ocenie i sformułuj jedną, konkretną regułę ochronną, którą wdrożysz w ciągu 48 godzin.',
      promptText: 'Moja nowa reguła graniczna:',
      placeholder: '„Od godziny 19:00 wyciszam powiadomienia ze skrzynki służbowej”.'
    }
  ],
  reflectionQuestions: [
    'Jaki najgorszy scenariusz podpowiada Ci Twój lęk, gdy myślisz o wdrożeniu tej reguły?',
    'Co zyskasz (w energii, zdrowiu i spokoju), gdy ta granica stanie się Twoim trwałym standardem?'
  ]
};

export const chapterTwentyNine: Chapter = {
  number: 29,
  volume: 3,
  volumeChapterNumber: 13,
  title: 'Rozdział 29: Zdrowe Granice — Ochrona Autonomii, Psychologia Odmowy i Zarządzanie Relacjami',
  subtitle: 'Od lęku przed odrzuceniem i manipulacji poczuciem winy do dojrzałego stawiania granic w rodzinie, pracy i życiu osobistym',
  leadParagraph: 'Nie możesz zbudować autentycznej bliskości, poczucia własnej wartości ani stabilności psychicznej, dopóki Twoje granice osobiste pozostają dziurawe jak sito. Wielu ludzi wierzy, że bycie dobrym człowiekiem polega na nieustannym zadowalaniu innych, unikaniu konfliktów za wszelką cenę i natychmiastowym godzeniu się na każdą prośbę. W rzeczywistości uległość nie rodzi miłości — rodzi ukrytą złość, wyczerpanie somatyczne i relacyjny rozpad. W tym rozdziale przeprowadzimy Cię przez 30 szczegółowych etapów architektury granic: zdefiniujemy granice fizyczne, emocjonalne, czasowe i informacyjne, zdemaskujemy mechanizmy szantażu emocjonalnego (FOG), nauczymy Cię odmawiać bez agresji i poczucia winy oraz pokażemy, jak skutecznie egzekwować konsekwencje wobec osób naruszających Twoją godność.',
  totalEstimatedPages: 98,
  sections: [
    // BLOK I — ZROZUMIENIE GRANIC (29.1 - 29.5)
    {
      id: 'sec-29-1',
      pageNumber: 1030,
      sectionNumber: '29.1',
      title: 'Czym są granice? Definicja psychologiczna, funkcja membrany i fundament tożsamości',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Granice to dystans, przy którym mogę kochać zarówno ciebie, jak i samego siebie jednocześnie.',
        author: 'Prentis Hemphill'
      },
      paragraphs: [
        'W potocznym rozumieniu granice kojarzą się z murem, drutem kolczastym, chłodem emocjonalnym i egoistycznym odgradzaniem się od świata. W nowoczesnej psychologii relacji i teorii przywiązania granica jest jednak czymś zgoła odmiennym — to dynamiczna, półprzepuszczalna membrana psychologiczna, która określa, gdzie kończą się moje myśli, emocje, wartości i odpowiedzialność, a gdzie zaczyna się przestrzeń drugiego człowieka.',
        'Zdrowe granice pełnią podwójną funkcję: z jednej strony chronią nasze wnętrze przed toksycznymi wpływami, eksploatacją i nadużyciami, z drugiej zaś pozwalają na swobodną wymianę ciepła, miłości, wsparcia i informacji z otoczeniem.',
        'Człowiek pozbawiony granic nie posiada w istocie własnego Ja — staje się emocjonalną gąbką wchłaniającą nastroje innych ludzi lub bezwolnym wykonawcą cudzych scenariuszy życiowych.',
        'Stawianie granic to nie akt agresji wobec innych, lecz akt elementarnej opieki nad własnym istnieniem.'
      ]
    },
    {
      id: 'sec-29-2',
      pageNumber: 1034,
      sectionNumber: '29.2',
      title: 'Dlaczego granice są potrzebne? Ochrona integralności, prewencja wypalenia i autentyczność',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Brak wyraźnych granic prowadzi do nieuchronnego bankructwa energetycznego i psychicznego. Kiedy pozwalasz wszystkim na swobodny dostęp do swojego czasu i emocji, Twoje zasoby ulegają całkowitej erozji.',
        'Badania Brené Brown nad ludźmi o wysokim poczuciu dobrostanu wykazały paradoksalną zależność: osoby najbardziej współczujące, życzliwe i głęboko kochające to jednocześnie osoby o najbardziej bezwzględnych i precyzyjnych granicach osobistych.',
        'Granice zapobiegają narastaniu cichej urazy (resentment). Kiedy potrafisz w porę powiedzieć „nie”, Twoje późniejsze „tak” jest w 100% autentyczne i pozbawione ukrytego jadu.'
      ]
    },
    {
      id: 'sec-29-3',
      pageNumber: 1038,
      sectionNumber: '29.3',
      title: 'Granice fizyczne — Ciało, przestrzeń osobista, dotyk i prawo do nietykalności',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Najbardziej pierwotnym poziomem są granice fizyczne. Obejmują one Twoje ciało, strefę dystansu personalnego (proksemikę), potrzebę odpoczynku, snu, jedzenia oraz prawo do decydowania o tym, kto, kiedy i w jaki sposób może Cię dotykać.',
        'Naruszenie granic fizycznych to nie tylko bezpośrednia przemoc cielesna — to także wymuszanie uścisków na dzieciach wbrew ich woli („daj buziaka cioci”), naruszanie strefy intymnej w pracy, wchodzenie do czyjegoś pokoju bez pukania czy zmuszanie do pracy ponad siły fizjologiczne.',
        'Odzyskanie kontaktu z własnymi granicami fizycznymi zaczyna się od wsłuchania się w sygnały ciała: napięcie w karku, ucisk w klatce piersiowej czy odruch cofnięcia się są bezpośrednią informacją o naruszeniu naszej przestrzeni.'
      ]
    },
    {
      id: 'sec-29-4',
      pageNumber: 1042,
      sectionNumber: '29.4',
      title: 'Granice emocjonalne — Separacja uczuć, empatia kontra zlewanie się (Enmeshment)',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Granice emocjonalne określają odpowiedzialność za stany psychiczne. Posiadanie zdrowych granic emocjonalnych oznacza zrozumienie fundamentalnej prawdy: JA odpowiadam za moje emocje, myśli i zachowania, a TY odpowiadasz za swoje.',
        'Gdy granice emocjonalne ulegają zatarciu, pojawia się zjawisko uwikłania (enmeshment). W takim stanie samopoczucie jednej osoby staje się całkowitym zakładnikiem nastroju partnera lub rodzica („jeśli mama ma zły humor, ja nie mam prawa czuć radości”).',
        'Dojrzała empatia polega na współodczuwaniu z zachowaniem własnej odrębności: mogę być blisko Twojego smutku, trzymać Cię za rękę i wspierać, nie stając się jednocześnie Twoim smutkiem.'
      ]
    },
    {
      id: 'sec-29-5',
      pageNumber: 1046,
      sectionNumber: '29.5',
      title: 'Ćwiczenie Praktyczne — Moja Mapa Granic: Audyt Czterech Stref Życiowych',
      category: 'cwiczenia',
      readingTimeMinutes: 18,
      exerciseRef: chapterTwentyNineExerciseBoundaryMap,
      paragraphs: [
        'Wykonaj kompleksowy audyt swoich granic w czterech kluczowych wymiarach: fizycznym, emocjonalnym, czasowym i informacyjnym, korzystając z formularza ćwiczenia 29.1 powyżej.',
        'Zidentyfikuj relację, w której Twoja granica jest najbardziej nieszczelna i przygotuj jedną konkretną mikro-zmianę na nadchodzący tydzień.'
      ]
    },

    // BLOK II — RÓŻNE RODZAJE GRANIC (29.6 - 29.10)
    {
      id: 'sec-29-6',
      pageNumber: 1050,
      sectionNumber: '29.6',
      title: 'Granice dotyczące czasu — Własność kalendarza, szacunek do czasu i asertywność harmonogramu',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Czas jest jedynym całkowicie nieodnawialnym zasobem, jakim dysponuje człowiek. Granice czasowe wyznaczają, w jaki sposób dysponujesz swoimi godzinami, ile czasu poświęcasz na pracę, ile na relacje, a ile na własną regenerację i samotność.',
        'Naruszenia granic czasowych przybierają postać: chronicznego spóźniania się innych na spotkania z Tobą, telefonów od klientów i szefów o 22:00, przedłużających się bezproduktywnych zebrań czy wymuszania natychmiastowych odpowiedzi na wiadomości w mediach społecznościowych.',
        'Twoja dostępność jest Twoim wyborem, a nie publicznym dobrem. Wyznaczenie jasnych ram dostępności czasowej jest aktem elementarnego szacunku do własnego życia.'
      ]
    },
    {
      id: 'sec-29-7',
      pageNumber: 1054,
      sectionNumber: '29.7',
      title: 'Granice prywatności — Pokoje, telefony, dzienniki i prawo do własnego wewnętrznego świata',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Każdy człowiek, niezależnie od wieku i stopnia bliskości w relacji, ma niezbywalne prawo do prywatności. Obejmuje ona przestrzeń fizyczną (własna szuflada, zamknięte drzwi łazienki, biurko) oraz przestrzeń cyfrową (hasła do telefonu, historia korespondencji, pamiętnik).',
        'W toksycznych relacjach prywatność bywa mylona z tajemnicą lub zdradą („skoro mnie kochasz, dlaczego nie chcesz dać mi hasła do telefonu?”). Taka postawa wynika z lęku i obsesyjnej potrzeby kontroli.',
        'Zdrowy związek opiera się na zaufaniu, a nie na totalitarnej inwigilacji. Szanowanie zamkniętych drzwi partnera lub dziecka jest fundamentem bezpieczeństwa relacyjnego.'
      ]
    },
    {
      id: 'sec-29-8',
      pageNumber: 1058,
      sectionNumber: '29.8',
      title: 'Granice dotyczące informacji — Oversharing, prawo do milczenia i selektywne odsłanianie siebie',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Granice informacyjne regulują to, czym, z kim, kiedy i w jakich okolicznościach decydujemy się podzielić. Nie każda osoba ma prawo do poznania Twoich intymnych historii, zarobków, planów życiowych czy traum z dzieciństwa.',
        'Zjawisko oversharingu (przesadnego, natychmiastowego odsłaniania się przed nowo poznanymi ludźmi) bywa często fałszywie uważane za dowód autentyczności, podczas gdy w rzeczywistości jest objawem niestabilnych granic i próbą wymuszenia przedwczesnej bliskości.',
        'Masz pełne, bezwzględne prawo odpowiedzieć na wścibskie pytanie: „Nie chcę o tym rozmawiać”, „To moja prywatna sprawa” — bez konieczności tłumaczenia się i wymyślania kłamstw.'
      ]
    },
    {
      id: 'sec-29-9',
      pageNumber: 1062,
      sectionNumber: '29.9',
      title: 'Granice dotyczące energii i dostępności — Zarządzanie baterią społeczną i prawo do wycofania',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'Twoja energia psychiczna (social battery) jest zasobem skończonym, regulowanym m.in. przez poziom neuroprzekaźników i stan pobudzenia układu autonomicznego.',
        'Granice dostępności polegają na uznaniu, że nie musisz być „pod telefonem” 24 godziny na dobę dla każdego znajomego w kryzysie. Jeśli Twoja bateria jest wyczerpana, masz prawo nie odebrać telefonu i odpisać dopiero po regeneracji.',
        'Próba bycia nieustannym pogotowiem emocjonalnym dla wszystkich dookoła kończy się ciężkim stanem anhedonii i znieczulicy współczuciowej (compassion fatigue).'
      ]
    },
    {
      id: 'sec-29-10',
      pageNumber: 1066,
      sectionNumber: '29.10',
      title: 'Analiza Sytuacji — Kiedy zwykła prośba zaczyna być naciskiem? Studium rozmowy Marty i Szymona',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'SCENARIUSZ: Szymon prosi Martę o pożyczenie samochodu na weekend. Marta odpowiada spokojnie: „Przykro mi, ale w ten weekend sama go potrzebuję”. Szymon zmienia ton: „Marta, daj spokój, przecież możesz pojechać pociągiem! Ja mam ważną sprawę, a ty robisz problem o byle co. Myślałem, że jesteśmy przyjaciółmi!”.',
        'ANALIZA PSYCHOLOGICZNA: W którym momencie prośba zamieniła się w nacisk? W momencie, gdy Szymon nie przyjął odmowy jako prawomocnej odpowiedzi. Zamiast uszanować decyzję Marty, zaczął podważać ważność jej planów („możesz jechać pociągiem”) oraz uderzył w więź relacyjną („myślałem, że jesteśmy przyjaciółmi”).',
        'BŁĄD MARTY: Jeśli Marta w tym momencie ulegnie i odda kluczyki, nagrodzi manipulacyjne zachowanie Szymona i nauczy go, że nacisk emocjonalny działa.',
        'PRAWIDŁOWA REAKCJA: Marta zachowuje spokój i stosuje technikę zdartej płyty: „Rozumiem, że to dla ciebie ważne, jednak moja decyzja jest niezmienna — samochód zostaje ze mną”.'
      ]
    },

    // BLOK III — DLACZEGO TAK TRUDNO STAWIAĆ GRANICE? (29.11 - 29.15)
    {
      id: 'sec-29-11',
      pageNumber: 1070,
      sectionNumber: '29.11',
      title: 'Potrzeba akceptacji — Ewolucyjny lęk przed ostracyzmem i biologia przynależności w dACC',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Z biologicznego punktu widzenia potrzeba akceptacji społecznej jest jedną z najpotężniejszych sił sterujących ludzkim mózgiem. Dla naszych przodków na sawannie wykluczenie z plemienia oznaczało nieuchronną śmierć z głodu lub w szponach drapieżników.',
        'Badania neuroobrazowe (Eisenberger & Lieberman) wykazały, że ból wywołany odrzuceniem społecznym aktywuje dokładnie te same struktury w mózgu (grzbietową część przedniej kory obręczy — dACC oraz przednią wyspę), co fizyczny ból po oparzeniu.',
        'Dlatego gdy mamy odmówić komuś bliskiemu, nasze ciało migdałowate wszczyna alarm, interpretując potencjalne niezadowolenie drugiej strony jako bezpośrednie zagrożenie biologiczne.',
        'Przełamanie tego lęku wymaga świadomego uświadomienia sobie przez korę przedczołową: „Niezadowolenie rozmówcy nie zagraża mojemu życiu. Jestem bezpieczny”.'
      ]
    },
    {
      id: 'sec-29-12',
      pageNumber: 1074,
      sectionNumber: '29.12',
      title: 'Strach przed konfliktem — Unikanie napięcia za cenę chronicznej autodestrukcji',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Dla wielu osób każda, nawet najmniejsza różnica zdań jest utożsamiana z katastrofą relacyjną. Taki lęk przed konfliktem (conflict avoidance) zmusza do ciągłego ustępowania, przełykania żalu i udawania, że wszystko jest w porządku.',
        'Cena takiego pozornego „świętego spokoju” jest jednak gigantyczna. Zamiast rozwiązać problem na wczesnym etapie, człowiek gromadzi w sobie tłumioną złość, która po miesiącach eksploduje w postaci nagłego zerwania relacji lub chorób psychosomatycznych.',
        'Dojrzały konflikt nie jest końcem miłości — jest narzędziem kalibracji relacji. Relacja, która nie jest w stanie przetrwać Twojego spokojnego „nie”, od początku była oparta na iluzji.'
      ]
    },
    {
      id: 'sec-29-13',
      pageNumber: 1078,
      sectionNumber: '29.13',
      title: 'Poczucie winy — Fałszywa odpowiedzialność za cudze emocje i dekonstrukcja wyrzutów sumienia',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Poczucie winy pojawiające się po postawieniu granicy jest najczęstszą pułapką osób uczących się asertywności. Człowiek mówi „nie”, po czym przez trzy dni nie może spać, zastanawiając się, czy nie zachował się jak potwór.',
        'Należy odróżnić POCZUCIE WINY REALNE (kiedy rzeczywiście złamałeś swoje zasady etyczne, skrzywdziłeś kogoś celowo lub złamałeś umowę) od POCZUCIA WINY INDUKOWANEGO (kiedy po prostu odmówiłeś spełnienia cudzego żądania kosztem siebie).',
        'Gdy ktoś reaguje smutkiem, złością czy fochem na Twoją uprawnioną granicę, ten dyskomfort należy do NIEGO. Masz prawo pozwolić dorosłemu człowiekowi przeżyć jego własne rozczarowanie.'
      ]
    },
    {
      id: 'sec-29-14',
      pageNumber: 1082,
      sectionNumber: '29.14',
      title: 'Strach przed odrzuceniem — Odróżnienie porzucenia od zdrowego dystansu w relacji',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Lęk przed odrzuceniem podpowiada katastroficzny scenariusz: „Jeśli powiem szefowi, że nie przyjdę w sobotę, natychmiast mnie zwolni”, „Jeśli powiem partnerowi, że potrzebuję wieczoru dla siebie, przestanie mnie kochać i odejdzie”.',
        'Warto poddać te myśli testowi empirycznemu. W 95% przypadków ludzie reagują na spokojną, uprzejmą granicę pełnym zrozumieniem i dostosowaniem się. A jeśli ktoś rzeczywiście odrzuca Cię za to, że masz własne granice — otrzymujesz bezcenną informację zwrotną, że ta osoba nie kochała Ciebie, lecz Twoją uległość i użyteczność.',
        'Stawianie granic jest najlepszym filtrem odsiewającym relacje autentyczne od pasożytniczych.'
      ]
    },
    {
      id: 'sec-29-15',
      pageNumber: 1086,
      sectionNumber: '29.15',
      title: 'Ćwiczenie Praktyczne — Dlaczego trudno mi powiedzieć „nie”? Rekonstrukcja Wczesnych Skryptów',
      category: 'cwiczenia',
      readingTimeMinutes: 18,
      paragraphs: [
        'Odpowiedz na poniższe 4 pytania w swoim dzienniku refleksyjnym:',
        '1. JAK REAGOWANO W MOIM DOMU RODZINNYM NA ODMOWĘ? Czy dziecko mówiące „nie” było wysłuchiwane, czy karane karcącym wzrokiem, fochem rodzica lub etykietą „niegrzeczny”?',
        '2. JAKIE JEST MOJE GŁÓWNE ZDANIE-PRZEKONANIE O ODMOWIE? (np. „Odmawianie jest samolubne”, „Muszę najpierw zadbać o wszystkich innych”).',
        '3. CO NAJGORSZEGO STAŁOBY SIĘ, GDYBYSZ PRZESTAŁ ZADOWALAĆ INNYCH? Zapisz swój najgłębszy ukryty lęk.',
        '4. ZAPISZ NOWE PRZEKONANIE RATUNKOWE: „Moje potrzeby są równie ważne jak potrzeby innych. Mam prawo mówić NIE bez poczucia winy”. Powtórz je trzykrotnie na głos.'
      ]
    },

    // BLOK IV — PRZEKRACZANIE GRANIC (29.16 - 29.20)
    {
      id: 'sec-29-16',
      pageNumber: 1090,
      sectionNumber: '29.16',
      title: 'Jak rozpoznać przekraczanie granic? Sygnały somatyczne, narastająca frustracja i złość jako dzwonek alarmowy',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Zanim Twój umysł logiczny zorientuje się, że Twoje granice są łamane, Twoje ciało wie o tym jako pierwsze. Do podstawowych markerów somatycznych naruszenia granic należą:',
        '1. Nagły ucisk w żołądku lub zaciśnięte gardło w obecności określonej osoby.',
        '2. Poczucie drenowania z energii i chronicznego zmęczenia po rozmowie.',
        '3. Narastająca, cicha złość, sarkazm i zniecierpliwienie wobec próśb drugiej strony.',
        '4. Odruch unikania kontaktu wzrokowego lub niechęć do odbierania telefonu.',
        'Złość nie jest wadą charakteru — jest biologicznym dzwonkiem alarmowym informującym Cię, że ktoś właśnie wtargnął na Twoje terytorium psychiczne.'
      ]
    },
    {
      id: 'sec-29-17',
      pageNumber: 1094,
      sectionNumber: '29.17',
      title: 'Prośba a nacisk — Jak odróżnić wolność wyboru od ukrytego roszczenia i przymusu',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'W komunikacji międzyludzkiej kluczowe jest rozróżnienie między autentyczną prośbą a zamaskowanym naciskiem (żądaniem). Zewnętrznie oba komunikaty mogą brzmieć identycznie: „Czy mógłbyś mi w tym pomóc?”.',
        'Różnica tkwi w tym, co dzieje się, gdy odpowiesz: „Przykro mi, ale tym razem nie mogę”. W przypadku PROŚBY rozmówca mówi: „Rozumiem, dziękuję, poszukam kogoś innego”. Szanuje Twoje prawo do decydowania.',
        'W przypadku NACISKU Twoje „nie” spotyka się z oburzeniem, wyrzutami, karaniem milczeniem, dąsaniem się lub natychmiastowym zwiększeniem presji („no weź, dla mnie tego nie zrobisz?”). Pamiętaj: jeśli nie masz prawa powiedzieć „nie”, Twoje „tak” nie ma żadnej wartości.'
      ]
    },
    {
      id: 'sec-29-18',
      pageNumber: 1098,
      sectionNumber: '29.18',
      title: 'Prośba a manipulacja — Pochlebstwa, technika stopy w drzwiach i sztuczny dług wdzięczności',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Manipulatorzy relacyjni rzadko atakują granice w sposób jawny i brutalny. Znacznie częściej stosują wyrafinowane techniki perswazyjne, które sprawiają, że ofiara sama rezygnuje ze swoich praw.',
        'Do klasycznych metod należy technika „stopy w drzwiach” (zaczynanie od mikroskopijnej przysługi, by potem zażądać wielkiego zobowiązania), technika zalewania pochlebstwami przed przedstawieniem roszczenia („jesteś jedyną osobą na świecie, która potrafi to zrobić!”) oraz budowanie sztucznego długu wdzięczności poprzez wyświadczanie nieproszonych przysług.',
        'Ochrona przed manipulacją wymaga zachowania czujności wobec dysproporcji w wymianie oraz odwagi do nazwania ukrytej dynamiki po imieniu.'
      ]
    },
    {
      id: 'sec-29-19',
      pageNumber: 1102,
      sectionNumber: '29.19',
      title: 'Krytyka a naruszanie granic — Konstruktywny feedback kontra atak personalny na godność',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'W relacjach zawodowych i osobistych niezwykle ważne jest odróżnienie merytorycznej krytyki od agresywnego przekraczania granic osobistych.',
        'KONSTRUKTYWNY FEEDBACK dotyczy konkretnego zadania lub zachowania, odnosi się do faktów, jest przekazywany w cztery oczy i zawiera wskazówki rozwojowe („W raporcie brakuje tabeli z kosztami, uzupełnij ją do jutra”).',
        'PRZEKROCZENIE GRANICY to atak na tożsamość, intelekt lub cechy osoby, stosowanie etykietowania, podnoszenie głosu, publiczne zawstydzanie lub sarkastyczne docinki („Jak zwykle nic nie potrafisz zrobić porządnie, jesteś beznadziejny”). Masz prawo bezwzględnie zatrzymać każdą rozmowę, która narusza Twoją godność osobistą.'
      ]
    },
    {
      id: 'sec-29-20',
      pageNumber: 1106,
      sectionNumber: '29.20',
      title: 'Szantaż emocjonalny — Anatomia syndromu FOG (Fear, Obligation, Guilt) Susan Forward',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Susan Forward w fundamentalnej pracy nad szantażem emocjonalnym opisała model FOG opierający się na trzech dźwigniach nacisku: LĘKU (Fear), POCZUCIU OBOWIĄZKU (Obligation) i POCZUCIU WINY (Guilt).',
        'Szantażysta identyfikuje Twoje najgłębsze wrażliwości i używa ich przeciwko Tobie. Wyróżniamy cztery typy szantażystów: PROKLAJMATORZY (grożą karą bezpośrednią: „jeśli odejdziesz, zniszczę cię”), BICZUJĄCY SIĘ (grożą samookaleczeniem lub chorobą: „przez ciebie wyląduję w szpitalu”), CIERPIĘTNICY (grają bezbronną ofiarę czekającą na ratunek) oraz KUSICIELE (obiecują nagrodę pod warunkiem bezwzględnego posłuszeństwa).',
        'Wyjście z mgły FOG wymaga przejścia od automatycznej reakcji uległości do świadomej obserwacji: „Widzę, że próbujesz wzbudzić we mnie poczucie winy. Moja decyzja pozostaje niezmienna”.'
      ]
    },

    // BLOK V — STAWIANIE GRANIC W PRAKTYCE (29.21 - 29.25)
    {
      id: 'sec-29-21',
      pageNumber: 1110,
      sectionNumber: '29.21',
      title: 'Jak powiedzieć „nie”? Anatomia czystej odmowy bez zbędnych usprawiedliwień i kłamstw',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Większość ludzi popełnia fundamentalny błąd podczas odmawiania: zaczynają się gęsto tłumaczyć, przepraszać i podawać dziesiątki zewnętrznych powodów („naprawdę bym chciał, ale akurat ciocia ma urodziny, a potem muszę wyprowadzić psa...”).',
        'Podawanie zawiłych usprawiedliwień jest dla rozmówcy zaproszeniem do negocjacji! Sprytny manipulator natychmiast rozbroi Twoje wymówki: „To przełóż ciocię na jutro, a psa wyprowadzę z tobą!”.',
        'CZYSTA ODMOWA jest krótka, uprzejma i jednoznaczna: „Dziękuję za propozycję, ale tym razem nie wezmę w tym udziału”, „Nie mogę tego zrobić”. „Nie” jest kompletnym zdaniem gramatycznym i nie wymaga składania raportu ze swojego życia.'
      ]
    },
    {
      id: 'sec-29-22',
      pageNumber: 1114,
      sectionNumber: '29.22',
      title: 'Jak odmawiać bez agresji? Spokój fonacyjny, kontakt wzrokowy i postawa pewności siebie',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Osoby, które przez lata tłumiły swoje granice, gdy wreszcie decydują się powiedzieć „nie”, często robią to w sposób wybuchowy i agresywny — krzyczą, trzaskają drzwiami lub atakują rozmówcę. Taka reakcja rodzi eskalację konfliktu i późniejsze potężne poczucie winy.',
        'Prawdziwa siła granic leży w ich spokojnej, miękkiej formie i żelaznej treści. Im bardziej jesteś pewny swojej granicy, tym ciszej i spokojniej możesz mówić.',
        'Utrzymuj stabilny kontakt wzrokowy, rozluźnij ramiona, oddychaj przeponowo i mów głosem pewnym, bez tonu przepraszającego ani oskarżycielskiego.'
      ]
    },
    {
      id: 'sec-29-23',
      pageNumber: 1118,
      sectionNumber: '29.23',
      title: 'Jak komunikować własne potrzeby? Przejście od pretensji i domysłów do jasnych próśb',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Granice to nie tylko odmawianie — to także jasne, dojrzałe komunikowanie tego, czego potrzebujesz, by czuć się bezpiecznie i komfortowo w relacji.',
        'Wielu ludzi wpada w pułapkę oczekiwania, że partner lub współpracownicy „sami powinni się domyślić” ich potrzeb. Brak czytania w myślach rodzi narastającą frustrację i pretensje.',
        'Komunikuj potrzeby wprost według formuły: „Potrzebuję [X], aby móc [Y]. Czy możemy ustalić [Z]?”. Jasność jest najwyższą formą życzliwości relacyjnej.'
      ]
    },
    {
      id: 'sec-29-24',
      pageNumber: 1122,
      sectionNumber: '29.24',
      title: 'Jak komunikować konsekwencje? Różnica między groźbą a informacją o własnym działaniu',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Granica bez określonej i wyegzekwowanej konsekwencji jest jedynie bezwartościową sugestią. Musisz jasno poinformować drugą stronę, co TY zrobisz, jeśli niedopuszczalne zachowanie będzie kontynuowane.',
        'Kluczowe jest odróżnienie GROŹBY od KONSEKWENCJI. Groźba ma na celu ukaranie, przestraszenie i kontrolowanie drugiej osoby („jeśli jeszcze raz to zrobisz, pożałujesz!”).',
        'Konsekwencja jest spokojną informacją o Twoim własnym zachowaniu obronnym: „Jeśli podnosisz na mnie głos, kończę tę rozmowę i wychodzę z pokoju. Wrócimy do tematu, gdy oboje będziemy spokojni”.'
      ]
    },
    {
      id: 'sec-29-25',
      pageNumber: 1126,
      sectionNumber: '29.25',
      title: 'Co zrobić, kiedy ktoś ignoruje granicę? Protokół eskalacji kroków i zjawisko Extinction Burst',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Gdy po raz pierwszy postawisz granicę osobie przyzwyczajonej do Twojej uległości, niemal na pewno spotkasz się z testowaniem granicy (tzw. extinction burst — nasilenie ataku przed odpuszczeniem). Osoba sprawdzi, czy mówisz poważnie.',
        'W takiej sytuacji nie tłumacz się ponownie i nie wdawaj w dyskusje. Zastosuj procedurę trzech kroków: 1. Przypomnij granicę („Mówiłem już, że nie pożyczam samochodu”). 2. Wskaż na ignorowanie ustaleń („Widzę, że ponawiasz prośbę mimo mojej jasnej odpowiedzi”). 3. Wyegzekwuj konsekwencję (zamknij temat, przerwij spotkanie, odetnij dostęp).',
        'Jeśli ktoś notorycznie i z premedytacją ignoruje Twoje granice mimo wielokrotnych upomnień, jedyną skuteczną granicą pozostaje fizyczne lub relacyjne zdystansowanie się od tej osoby.'
      ]
    },

    // BLOK VI — GRANICE W RELACJACH (29.26 - 29.30)
    {
      id: 'sec-29-26',
      pageNumber: 1130,
      sectionNumber: '29.26',
      title: 'Granice w rodzinie — Odcięcie pępowiny psychologicznej, indywiduacja i relacja Dorosły-Dorosły',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W relacjach rodzinnych stawianie granic budzi najsilniejsze opory, ponieważ dotyka pierwotnych lojalności i skryptów z dzieciństwa. Wielu dorosłych ludzi w obecności rodziców natychmiast cofa się do roli bezradnego, uległego dziecka.',
        'Proces indywiduacji (Jung) wymaga symbolicznego przecięcia pępowiny emocjonalnej. Masz prawo decydować o swoim małżeństwie, finansach, wychowaniu dzieci i sposobie spędzania świąt bez uzyskiwania zgody rodziców.',
        'Przejście z toksycznego uwikłania do dojrzałej relacji wymaga życzliwej stanowczości: „Kocham was, ale w tej sprawie podejmuję własną decyzję”.'
      ]
    },
    {
      id: 'sec-29-27',
      pageNumber: 1134,
      sectionNumber: '29.27',
      title: 'Granice w przyjaźni — Higiena wzajemności, eliminacja wampiryzmu emocjonalnego i szacunek',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Prawdziwa przyjaźń opiera się na symetrii i wzajemności. Jeśli relacja polega na tym, że jedna strona wyłącznie mówi o sobie, wylewa frustracje i oczekuje ciągłej pomocy, a nigdy nie słucha i nie wspiera — mamy do czynienia z relacją pasożytniczą.',
        'Postawienie granicy w przyjaźni brzmi: „Chętnie cię wysłucham przez 20 minut, ale potem muszę wracać do swoich obowiązków”, „Nie mogę dziś rozmawiać, odezwę się w czwartek”.',
        'Prawdziwy przyjaciel uszanuje Twoją przestrzeń; osoba szukająca darmowego terapeuty szybko poszuka innego słuchacza.'
      ]
    },
    {
      id: 'sec-29-28',
      pageNumber: 1138,
      sectionNumber: '29.28',
      title: 'Granice w związku, szkole, pracy i internecie — Zintegrowany przegląd stref społecznych',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'W ZWIĄZKU: Granice chronią tożsamość obojga partnerów — formuła brzmi: „Ja + Ty = My”, a nie „Ja rozpływam się w Tobie”. Obejmują czas na własne pasje, finanse i prywatność.',
        'W PRACY I SZKOLE: Granice zawodowe określają godziny dostępności, zakres obowiązków oraz brak zgody na mobbing, krzyk i publiczne upokarzanie.',
        'W INTERNECIE: Higiena cyfrowa obejmuje wyciszanie powiadomień, nieodpowiadanie na hejt i zaczepki oraz blokowanie użytkowników naruszających Twoją godność. Twoja uwaga cyfrowa jest Twoją własnością.'
      ]
    },
    {
      id: 'sec-29-29',
      pageNumber: 1144,
      sectionNumber: '29.29',
      title: 'Wielkie Studium Przypadku — Osoba, która nie potrafi odmawiać: Przemiana Moniki',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      caseStudyRef: chapterTwentyNineCaseStudyMonika,
      paragraphs: [
        'W tym studium przypadku szczegółowo analizujemy historię Moniki (28 lat), koordynatorki projektów, której patologiczna uczynność i lęk przed odrzuceniem doprowadziły do somatycznego załamania zdrowotnego.',
        'Prześledź interaktywną analizę mechanizmu People Pleasing, dialogi przed i po terapii oraz protokół budowania bufora czasowego w karcie studium przypadku powyżej.'
      ]
    },
    {
      id: 'sec-29-30',
      pageNumber: 1150,
      sectionNumber: '29.30',
      title: 'Ćwiczenia Końcowe, Podsumowanie i Słownik Pojęć Rozdziału 29',
      category: 'podsumowanie',
      readingTimeMinutes: 17,
      paragraphs: [
        'SŁOWNIK KLUCZOWYCH POJĘĆ ROZDZIAŁU 29:',
        '• GRANICE OSOBISTE — półprzepuszczalna membrana psychologiczna określająca tożsamość, wartości i dopuszczalne zachowania innych wobec nas.',
        '• ENMESHMENT (Uwikłanie) — zlanie się emocjonalne w rodzinie lub parze, uniemożliwiające odróżnienie własnych uczuć od cudzych.',
        '• SZANTAŻ EMOCJONALNY FOG — manipulacja wykorzystująca Lęk (Fear), Poczucie Obowiązku (Obligation) i Poczucie Winy (Guilt).',
        '• EXTINCTION BURST — gwałtowne nasilenie ataku i prób złamania granicy przez manipulatora tuż przed ostatecznym zaakceptowaniem odmowy.',
        '• PROKSEMIKA — psychologia dystansu fizycznego i przestrzeni osobistej.',
        '• CZYSTA ODMOWA — zwięzłe, nieagresywne „nie” bez zbędnych usprawiedliwień i kłamstw.',
        'PYTANIA SPRAWDZAJĄCE: 1. W jakim obszarze życia Twoje granice są zbyt nieszczelne? 2. Czy odróżniasz realną winę od poczucia winy indukowanego przez drugą osobę? 3. Jak reagujesz na próby manipulacji szantażem FOG?',
        'MOST DO ROZDZIAŁU 30: Gdy wiesz już, czym są granice i dlaczego są niezbędne, pojawia się kluczowe pytanie wykonawcze: JAK je wyrażać w codziennej rozmowie bez agresji i bez uległości? W kolejnym rozdziale wkroczymy w sztukę Asertywności — mistrzowskiego języka dialogu w zgodzie ze sobą.'
      ]
    }
  ]
};
