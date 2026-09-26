import { Chapter, ExamQuestion } from '../types/book';

export const chapterFiveExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W świetle współczesnej neuronauki poznawczej, które stwierdzenie najlepiej opisuje naturę ludzkiej pamięci?',
    topic: 'Złudzenie Kamery Wideo',
    sectionRef: 'Sekcja 5.1 & 5.2',
    options: [
      { label: 'A', text: 'Pamięć działa jak twardy dysk lub kamera wideo — rejestruje zdarzenia klatka po klatce i odtwarza je w stanie nienaruszonym.', isCorrect: false },
      { label: 'B', text: 'Pamięć jest procesem rekonstrukcyjnym — przy każdym przypomnieniu mózg składa zdarzenie na nowo ze śladów pamięciowych, łącząc je z bieżącym stanem emocjonalnym, wiedzą i kontekstem.', isCorrect: true },
      { label: 'C', text: 'Pamiętamy tylko to, co wydarzyło się przed 5. rokiem życia.', isCorrect: false },
      { label: 'D', text: 'Pamięć nie podlega żadnym błędom u osób z wyższym wykształceniem.', isCorrect: false }
    ],
    explanation: 'Sir Frederic Bartlett oraz Elizabeth Loftus dowiedli, że przypominanie to nie odtwarzanie nagrania, lecz pisanie scenariusza na nowo. Każdy akt pamięciowy jest aktywną rekonstrukcją.',
    keyTakeaway: 'Pamięć nie jest kamerą wideo — jest montażystą filmu.'
  },
  {
    id: 2,
    question: 'W słynnym eksperymencie Elizabeth Loftus ze stłuczką samochodów (Sekcja 5.4), zmiana słowa w pytaniu z „zderzyły się” na „roztrzaskały się” (smashed) spowodowała, że:',
    topic: 'Efekt Dezinformacji (Loftus)',
    sectionRef: 'Sekcja 5.4',
    options: [
      { label: 'A', text: 'Badani natychmiast zapomnieli, że w ogóle widzieli film.', isCorrect: false },
      { label: 'B', text: 'Badani szacowali prędkość aut jako znacznie wyższą, a po tygodniu ponad 30% z nich „pamiętało” rozbite szkło, którego w rzeczywistości w ogóle nie było na nagraniu.', isCorrect: true },
      { label: 'C', text: 'Wszyscy badani zgodnie zaprotestowali przeciwko manipulacji.', isCorrect: false },
      { label: 'D', text: 'Badani uznali, że w wypadku uczestniczył helikopter.', isCorrect: false }
    ],
    explanation: 'To klasyczny dowód na Efekt Wprowadzania w Błąd (Misinformation Effect). Sugestywne pytanie po wydarzeniu modyfikuje pierwotny ślad pamięciowy, wstawiając do niego fałszywe detale.',
    keyTakeaway: 'Późniejsza informacja potrafi bez śladu przepisać pierwotne wspomnienie.'
  },
  {
    id: 3,
    question: 'Na czym polega paradoks „Wspomnień Fleszowych” (Flashbulb Memories) zbadany m.in. przez Ulricha Neissera (katastrofa Challengera)?',
    topic: 'Pewność vs Dokładność',
    sectionRef: 'Sekcja 5.5',
    options: [
      { label: 'A', text: 'Na tym, że ludzie pamiętają katastrofy z dokładnością do setnych części sekundy.', isCorrect: false },
      { label: 'B', text: 'Na braku korelacji między subiektywną pewnością a obiektywną dokładnością — ludzie deklarują 100% pewności co do szczegółów wspomnienia o silnym ładunku emocjonalnym, mimo że ich opisy po latach są diametralnie sprzeczne z ich własnymi notatkami z dnia katastrofy.', isCorrect: true },
      { label: 'C', text: 'Na całkowitym zaniku pamięci po błysku flesza aparatu fotograficznego.', isCorrect: false },
      { label: 'D', text: 'Na tym, że emocje zawsze chronią wspomnienie przed zniekształceniem.', isCorrect: false }
    ],
    explanation: 'Wysokie pobudzenie emocjonalne daje iluzję absolutnej wyrazistości (vividness) i niepodważalnej pewności, ale nie chroni śladu pamięciowego przed degradacją i zniekształceniami.',
    keyTakeaway: 'To, że pamiętasz coś z absolutną pewnością i emocjami, nie oznacza, że zdarzyło się to dokładnie tak.'
  },
  {
    id: 4,
    question: 'Czym jest zjawisko REKONSOLIDACJI pamięci odkryte m.in. przez Karima Nadera?',
    topic: 'Rekonsolidacja Pamięci',
    sectionRef: 'Sekcja 5.8',
    options: [
      { label: 'A', text: 'Trwałym zamrożeniem wspomnienia w cemencie neuronalnym raz na zawsze.', isCorrect: false },
      { label: 'B', text: 'Faktem, że za każdym razem, gdy wydobywamy wspomnienie z magazynu, wchodzi ono w stan labilny (niestabilny), staje się podatne na modyfikacje i musi zostać zsyntetyzowane na nowo (zapisane z aktualnymi danymi).', isCorrect: true },
      { label: 'C', text: 'Utratą pamięci po uderzeniu w głowę.', isCorrect: false },
      { label: 'D', text: 'Pojawieniem się zdolności telepatycznych.', isCorrect: false }
    ],
    explanation: 'Wspomnienie jest bezpieczne tylko wtedy, gdy go nie używasz. Każdy akt przypomnienia otwiera okno czasowe (rekonsolidację), w którym treść wspomnienia może zostać zaktualizowana lub odkształcona.',
    keyTakeaway: 'Przypominając sobie przeszłość, nieustannie ją modyfikujesz.'
  },
  {
    id: 5,
    question: 'W teorii Poziomów Przetwarzania Craika i Lockharta (Sekcja 5.6), który rodzaj kodowania zapewnia najtrwalsze zapamiętanie materiału?',
    topic: 'Poziomy Przetwarzania',
    sectionRef: 'Sekcja 5.6',
    options: [
      { label: 'A', text: 'Przetwarzanie Płytkie (Strukturalne) — powtarzanie wzrokowe kształtu liter.', isCorrect: false },
      { label: 'B', text: 'Przetwarzanie Fonetyczne — rymowanie słów w myślach.', isCorrect: false },
      { label: 'C', text: 'Przetwarzanie Głębokie (Semantyczne / Elaboracyjne) — łączenie nowej informacji z sensem, własnymi doświadczeniami i zadawanie pytania „dlaczego tak jest?”.', isCorrect: true },
      { label: 'D', text: 'Wielokrotne zakreślanie tekstu neonowym markerem.', isCorrect: false }
    ],
    explanation: 'Mechaniczne powtarzanie (zakuwanie) tworzy nietrwałe ślady. Prawdziwe zapamiętanie wymaga elaboracji semantycznej — powiązania faktu z siatką dotychczasowej wiedzy w korze nowej.',
    keyTakeaway: 'Pamiętasz to, o czym głęboko myślisz, a nie to, na co tylko patrzysz.'
  },
  {
    id: 6,
    question: 'Jaka jest kluczowa funkcja SNU (w szczególności fazy wolnofalowej SWS/NREM oraz fazy REM) w procesie pamięciowym?',
    topic: 'Sen i Konsolidacja',
    sectionRef: 'Sekcja 5.7',
    options: [
      { label: 'A', text: 'Sen służy wyłącznie odpoczynkowi mięśni szkieletowych.', isCorrect: false },
      { label: 'B', text: 'Podczas snu dochodzi do aktywnej KONSOLIDACJI pamięciowej — hipokamp „odtwarza” doświadczenia dnia i stopniowo transferuje kluczowe ślady pamięciowe do kory nowej, usuwając szum informacyjny.', isCorrect: true },
      { label: 'C', text: 'W czasie snu mózg całkowicie wyłącza zużycie tlenu i glukozy.', isCorrect: false },
      { label: 'D', text: 'Sen powoduje bezpowrotne skasowanie 99% wiedzy z poprzedniego dnia.', isCorrect: false }
    ],
    explanation: 'Zarwanie nocy po nauce obniża utrwalenie wiedzy nawet o 40%. Wrzeciona senne i fale wolne w fazie NREM dosłownie przenoszą engramy z tymczasowego bufora hipokampa do trwałego magazynu kory.',
    keyTakeaway: 'Uczysz się za dnia, ale zapamiętujesz w nocy.'
  },
  {
    id: 7,
    question: 'Dlaczego według Daniela Schactera zawodność pamięci (zapominanie, uogólnianie, podatność na sugestię) jest ewolucyjnym sukcesem, a nie defektem?',
    topic: 'Adaptacyjna Rola Pamięci',
    sectionRef: 'Sekcja 5.10',
    options: [
      { label: 'A', text: 'Ponieważ pozwala ludziom oszukiwać w grach karcianych.', isCorrect: false },
      { label: 'B', text: 'Ponieważ pamięć nie powstała po to, by archiwizować przeszłość, lecz by SYMULOWAĆ PRZYSZŁOŚĆ i wyciągać elastyczne wnioski w nowych sytuacjach bez zatykania mózgu terabajtami zbędnych pikseli.', isCorrect: true },
      { label: 'C', text: 'Ponieważ dzięki temu nie musimy płacić podatków.', isCorrect: false },
      { label: 'D', text: 'Jest to błąd ewolucji, który zostanie wkrótce usunięty przez dobór naturalny.', isCorrect: false }
    ],
    explanation: 'Osoby z syndromem hipermnezji (pamiętające każdy szczegół każdego dnia) cierpią na paraliż poznawczy — nie potrafią uogólniać wiedzy ani planować przyszłości. Pamięć musi abstrahować sens.',
    keyTakeaway: 'Pamięć to elastyczny generator przyszłości, a nie muzealne archiwum.'
  },
  {
    id: 8,
    question: 'W studium przypadku Michała i umowy ustnej (Sekcja 5.11), dlaczego Michał z pełnym przekonaniem twierdził, że ustalili 25% prowizji, podczas gdy serwetka dowiodła 15%?',
    topic: 'Studium Przypadku Michał Umowa',
    sectionRef: 'Sekcja 5.11',
    options: [
      { label: 'A', text: 'Michał był wyrachowanym kłamcą i chciał z premedytacją okraść wspólnika.', isCorrect: false },
      { label: 'B', text: 'Z powodu motywowanej rekonsolidacji (Motivated Remembering) — przez rok narastającej urazy jego mózg podświadomie i stopniowo „korygował” cyfrę we wspomnieniu, by pasowała do poczucia krzywdy.', isCorrect: true },
      { label: 'C', text: 'Wspólnik podrobił pismo Michała na serwetce.', isCorrect: false },
      { label: 'D', text: 'Michał cierpiał na zaawansowaną chorobę Alzheimera.', isCorrect: false }
    ],
    explanation: 'Michał nie kłamał świadomie — w jego głowie wspomnienie z kawiarni naprawdę zawierało cyfrę 25%. Mózg wypełnił lukę pamięciową narracją spójną z bieżącym stanem emocjonalnym (konfabulacja nieświadoma).',
    keyTakeaway: 'Można mówić nieprawdę, będąc jednocześnie w 100% przekonanym o swojej uczciwości.'
  },
  {
    id: 9,
    question: 'Czym jest zjawisko BŁĘDU PĘDZĄCEJ PRZESZŁOŚCI / WIEDZIAŁEM TO OD POCZĄTKU (Hindsight Bias — studium Adama, Sekcja 5.13)?',
    topic: 'Hindsight Bias',
    sectionRef: 'Sekcja 5.13',
    options: [
      { label: 'A', text: 'Zdolnością do przepowiadania trzęsień ziemi.', isCorrect: false },
      { label: 'B', text: 'Tendencją do postrzegania minionych zdarzeń jako oczywistych i łatwych do przewidzenia po tym, jak już nastąpiły, przy jednoczesnym wymazywaniu z pamięci własnej pierwotnej niepewności.', isCorrect: true },
      { label: 'C', text: 'Lękiem przed czytaniem książek historycznych.', isCorrect: false },
      { label: 'D', text: 'Zjawiskiem występującym tylko u osób grających na giełdzie.', isCorrect: false }
    ],
    explanation: 'Gdy poznajemy wynik zdarzenia (np. upadek projektu), kora mózgowa natychmiast przebudowuje przeszłe wspomnienia: „Od początku mówiłem, że to nie wypali!”. Blokuje to rzetelne uczenie się na błędach.',
    keyTakeaway: 'Z perspektywy czasu wszystko wydaje się oczywiste, bo znasz już zakończenie filmu.'
  },
  {
    id: 10,
    question: 'W badaniach nad pamięcią świadków (studium Ewy, Sekcja 5.12), BŁĄD MONITOROWANIA ŹRÓDŁA (Source Monitoring Error) polega na:',
    topic: 'Błąd Monitorowania Źródła',
    sectionRef: 'Sekcja 5.12',
    options: [
      { label: 'A', text: 'Zepsuciu źródła zasilania w kamerze przemysłowej.', isCorrect: false },
      { label: 'B', text: 'Sytuacji, w której człowiek pamięta konkretny fakt (np. że samochód miał kolor czerwony), ale błędnie przypisuje jego źródło własnemu doświadczeniu naoczemu, podczas gdy usłyszał to od gapiów po wypadku.', isCorrect: true },
      { label: 'C', text: 'Pomyłce w podaniu adresu zamieszkania.', isCorrect: false },
      { label: 'D', text: 'Niezdolności do rozpoznania źródła wody mineralnej.', isCorrect: false }
    ],
    explanation: 'Pamiętamy samą informację, ale gubimy metadane dotyczące jej pochodzenia. W efekcie plotka zasłyszana w tłumie staje się w naszej głowie „własnym naocznym wspomnieniem”.',
    keyTakeaway: 'Często pamiętasz informację, ale całkowicie mylisz jej źródło.'
  },
  {
    id: 11,
    question: 'Która z poniższych technik uczenia się ma NAJWYŻSZĄ skuteczność w utrwalaniu wiedzy w pamięci długotrwałej wg badań Dunlosky\'ego?',
    topic: 'Warsztat Pamięciowy: Retrieval Practice',
    sectionRef: 'Sekcja 5.14',
    options: [
      { label: 'A', text: 'Wielokrotne pasywne czytanie tych samych notatek.', isCorrect: false },
      { label: 'B', text: 'Praktyka Wydobywania (Retrieval Practice — aktywne testowanie siebie bez zaglądania do źródła) połączona z powtórkami w interwałach czasowych (Spaced Repetition).', isCorrect: true },
      { label: 'C', text: 'Słuchanie nagrań wykładów przez sen.', isCorrect: false },
      { label: 'D', text: 'Przepisywanie podręcznika słowo w słowo kolorowymi długopisami.', isCorrect: false }
    ],
    explanation: 'Pasywne czytanie daje jedynie iluzję znajomości tekstu (fluency). Dopiero bolesny wysiłek wydobycia informacji z głowy (efekt testowania) wymusza przebudowę połączeń synaptycznych.',
    keyTakeaway: 'Nie uczysz się wtedy, gdy informację wkładasz do głowy, lecz wtedy, gdy próbujesz ją z niej wyciągnąć.'
  },
  {
    id: 12,
    question: 'W jaki sposób wiedza z Części I (Rozdziały 1–5: Architektura Umysłu, Emocje, Uwaga, Percepcja, Pamięć) stanowi fundament dla Części II (Myślenie i Interpretowanie)?',
    topic: 'Wielka Synteza Części I',
    sectionRef: 'Sekcja 5.15',
    options: [
      { label: 'A', text: 'Nie ma żadnego związku — Część II to zupełnie inna książka.', isCorrect: false },
      { label: 'B', text: 'Pokazuje, że zanim zaczniemy świadomie „myśleć”, surowe dane ze świata zostały już przefiltrowane przez uwagę, zinterpretowane przez predykcje percepcyjne, zabarwione przez afekt i połączone ze zrekonstruowaną pamięcią.', isCorrect: true },
      { label: 'C', text: 'Udowadnia, że człowiek nie posiada mózgu.', isCorrect: false },
      { label: 'D', text: 'Zmusza czytelnika do zapomnienia wszystkiego, co przeczytał.', isCorrect: false }
    ],
    explanation: 'Myślenie nie zaczyna się w próżni. Nasze błędy poznawcze i heurystyki (temat Części II) wyrastają bezpośrednio z biologicznych ograniczeń uwagi, percepcji i pamięci omówionych w Części I.',
    keyTakeaway: 'Zrozumiałeś fundamenty sensoryczno-afektywne — teraz pora na mechanikę myślenia.'
  }
];

export const chapterFive: Chapter = {
  number: 5,
  title: 'Pamięć',
  subtitle: 'Dlaczego twoja pamięć nie jest nagraniem?',
  leadParagraph:
    'Gdy sięgasz pamięcią do wydarzeń sprzed kilku lat – pierwszego dnia w pracy, ślubu czy trudnej rozmowy z partnerem – masz całkowite przekonanie, że odtwarzasz w głowie dokładny plik wideo z twardego dysku. To jedno z najbardziej niebezpiecznych złudzeń poznawczych. W tym rozdziale udowadniamy, że ludzka pamięć nie działa jak kamera wideo, lecz jak scenarzysta i montażysta, który przy każdym przypomnieniu składa historię na nowo z dostępnych fragmentów.',
  totalEstimatedPages: 44,
  sections: [
    {
      id: 'sec-5-1',
      pageNumber: 295,
      sectionNumber: '5.1',
      title: 'Złudzenie Kamery Wideo: Spór o Słowa, Które Nigdy Nie Padły',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Pamięć nie jest rekonstrukcją przeszłości. Jest konstrukcja teraźniejszości opartą na śladach przeszłości.',
        author: 'Sir Frederic Bartlett, "Remembering"'
      },
      paragraphs: [
        'Podczas niedzielnego obiadu rodzinnego Michał i jego siostra Aneta pokłócili się o wydarzenie sprzed trzech lat. Chodziło o moment, w którym ich ojciec ogłosił decyzję o sprzedaży starego domu letniskowego.',
        'Michał twierdził z niezłomną pewnością: „Aneta, byłeś wtedy wściekła! Wstałaś od stołu, trzasnęłaś drzwiami i powiedziałaś, że ojciec niszczy nasze wspomnienia z dzieciństwa. Pamiętam to tak wyraźnie, jakby to było wczoraj. Miałaś na sobie czerwoną bluzkę”.',
        'Aneta spojrzała na niego ze zdumieniem: „Michał, o czym ty mówisz? W dniu, kiedy ojciec o tym mówił, leżałam w szpitalu po operacji kolana! Nie było mnie przy tym stole! To nasza kuzynka Kasia wstała i wyszła!”.',
        'Michał poczuł głęboki opór. Jego wspomnienie było tak żywe, pełne kolorów, emocji i detali, że nie potrafił dopuścić do siebie myśli, że może się mylić. Dochodzenie ze zdjęciami i wpisami w kalendarzu potwierdziło wersję Anety. Jak to możliwe, że zdrowy, inteligentny człowiek może „pamiętać” z absolutną pewnością zdarzenie, w którym brał udział zupełnie inny aktor?'
      ],
      subsections: [
        {
          title: 'Dlaczego Błędy Pamięci Wydają Się Tak Przekonujące?',
          paragraphs: [
            'Większość ludzi zakłada intuicyjnie: „Jeśli pamiętam coś wyraźnie i czuję przy tym autentyczne emocje, to MUSI to być prawda”. Tymczasem neuronauka poznawcza jednoznacznie dowodzi, że subiektywna żywość wspomnienia (vividness) oraz poczucie pewności (confidence) są kodowane przez zupełnie inne obwody neuronalne niż dokładność faktograficzna (accuracy)!',
            'Możesz pamiętać z kryształową wyrazistością rozmowę, która nigdy się nie odbyła, ubranie, którego nikt nie nosił, albo obietnicę, której nikt nie złożył.'
          ]
        }
      ]
    },
    {
      id: 'sec-5-2',
      pageNumber: 301,
      sectionNumber: '5.2',
      title: 'Trzy Architektoniczne Etapy Pamięci: Kodowanie, Przechowywanie i Przypominanie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Proces pamięciowy składa się z trzech odrębnych faz, a na każdej z nich dochodzi do zniekształceń:',
        '1. KODOWANIE (Encoding): Przekształcenie bodźców zmysłowych w ślad pamięciowy (engram). Kodowanie nigdy nie obejmuje całości zdarzenia – zależy od tego, na co skierowaliśmy uwagę (patrz Rozdział 3) oraz od naszego poziomu pobudzenia emocjonalnego.',
        '2. PRZECHOWYWANIE / KONSOLIDACJA (Storage & Consolidation): Utwalanie engramu w sieciach neuronowych (z udziałem hipokampa i kory nowej). Ślad pamięciowy nie leży w mózgu w stanie nienaruszonym. Ulega ciągłym modyfikacjom pod wpływem nowych doświadczeń, snu i upływu czasu.',
        '3. PRZYPOMINANIE / REKONSTRUKCJA (Retrieval): Proces wydobywania informacji. Za każdym razem, gdy przypominasz sobie zdarzenie, ślad pamięciowy staje się niestabilny (zjawisko REKONSOLIDACJI) i zostaje zapisany na nowo – wzbogacony o Twój AKTUALNY stan emocjonalny, wiek i kontekst!'
      ]
    },
    {
      id: 'sec-5-3',
      pageNumber: 307,
      sectionNumber: '5.3',
      title: 'Taksonomia Systemów Pamięci: Robocza, Deklaratywna i Proceduralna',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Pamięć jest zbiorem zróżnicowanych modułów neuronalnych:',
        '• Pamięć Robocza / Operacyjna (Working Memory – model Baddeleya): Podręczny bufor poznawczy (utrzymujący informacje przez 15–30 sekund). To w niej wykonujesz obliczenia i przetwarzasz zdania.',
        '• Pamięć Deklaratywna (Jawna / Świadoma): obejmuje pamięć epizodyczną (wydarzenia osobiste umiejscowione w czasie i przestrzeni, np. pierwszy dzień w szkole – podatna na rekonstrukcję) oraz pamięć semantyczną (fakty i wiedza o świecie, np. stolicą Francji jest Paryż).',
        '• Pamięć Niedeklaratywna / Utajona (Proceduralna): Pamięć nawyków motorowych i automatyzmów („Jazda na rowerze”, „Pisanie na klawiaturze”). Odporna na upływ czasu i uszkodzenia hipokampa.'
      ]
    },
    {
      id: 'sec-5-4',
      pageNumber: 313,
      sectionNumber: '5.4',
      title: 'Odkrycia Elizabeth Loftus: Efekt Wprowadzania w Błąd (Misinformation Effect)',
      category: 'neuronauka',
      readingTimeMinutes: 16,
      paragraphs: [
        'Wybitna badaczka prof. Elizabeth Loftus z University of California w Irvine poświęciła cztery dekady na badanie elastyczności ludzkiej pamięci. W jednym z klasycznych eksperymentów badanym pokazano nagranie stłuczki dwóch samochodów.',
        'Następnie podzielono uczestników na dwie grupy i zadano im nieznacznie różniące się pytania:',
        '• Grupa A: „Jak szybko jechały samochody, gdy zderzyły się ze sobą?” (hit each other)',
        '• Grupa B: „Jak szybko jechały samochody, gdy ROZTRZASKAŁY się o siebie?” (smashed into each other)',
        'Uczestnicy z Grupy B szacowali prędkość pojazdów jako znacznie wyższą. Ale prawdziwy szok przyniósł sprawdzian po tygodniu. Na pytanie: „Czy na miejscu wypadku widziałeś rozbite szkło?”, ponad 30% osób z Grupy B potwierdziło! W rzeczywistości na nagraniu NIE BYŁO ŻADNEGO rozbitego szkła.',
        'Jedno słowo sugerujące w pytaniu wystarczyło, aby mózg uczestników przebudował ślad pamięciowy i wstawił do niego nieistniejący detal.'
      ],
      subsections: [
        {
          title: 'Efekt Wprowadzania w Błąd w Sądzie',
          paragraphs: [
            'Odkrycia Loftus wstrząsnęły wymiarem sprawiedliwości. W projektach takich jak Innocence Project w USA, gdzie dzięki badaniom DNA uniewinniono setki niesłusznie skazanych osób, ponad 70% pomyłek sądowych wynikało z błędnych zeznań naocznych świadków, którzy byli w 100% przekonani o swojej racji!'
          ],
          highlightBox: {
            title: 'Kluczowe Odkrycie Prawne',
            content: 'Brak korelacji między pewnością a dokładnością! Badania sądowe pokazują, że świadkowie mówiący z najgłębszym przekonaniem i emocjami potrafią wskazać niewinną osobę z powodu zniekształcenia pamięciowego źródła (source monitoring error).',
            type: 'warning'
          }
        }
      ]
    },
    {
      id: 'sec-5-5',
      pageNumber: 319,
      sectionNumber: '5.5',
      title: '„Pewność Wspomnienia ≠ Jego Dokładność”: Badania Neissera nad Katastrofą Challengera',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Dzień po tragicznej eksplozji promu kosmicznego Challenger w 1986 roku psycholog Ulrich Neisser poprosił grupę 106 studentów o szczegółowe opisanie na piśmie: gdzie byli, z kim rozmawiali, co robili i co czuli w chwili, gdy dowiedzieli się o tragedii.',
        'Trzy lata później badacz zebrał tych samych uczestników i poprosił ich o ponowne opisanie tamtego poranka. Wyniki były wstrząsające: ponad 25% studentów podało wersję CAŁKOWICIE SPRZECZNĄ ze swoimi własnymi odręcznymi notatkami sprzed trzech lat! Ktoś, kto dzień po katastrofie napisał: „Siedziałem w pokoju w akademiku z kolegą Jimem”, po trzech latach twierdził z płomiennym przekonaniem: „Byłem na stołówce z dziewczyną, gdy nagle ktoś krzyknął!”.',
        'Gdy Neisser pokazał badanym ich własne, pożółkłe notatki z 1986 roku, studenci patrzyli na nie z niedowierzaniem. Jedna ze studentek powiedziała słynne zdanie: „Rozpoznaję mój charakter pisma, ale wiem na pewno, że to nie wydarzyło się w ten sposób”. Zjawisko to nazwano paradoksem Wspomnień Fleszowych (Flashbulb Memories).'
      ]
    },
    {
      id: 'sec-5-6',
      pageNumber: 325,
      sectionNumber: '5.6',
      title: 'Poziomy Przetwarzania Informacji (Craik & Lockhart): Dlaczego Zakuwanie Nie Działa',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Wielu uczniów i studentów spędza godziny na mechanicznym czytaniu podręczników i zakreślaniu linijek neonowym markerem. Z punktu widzenia neuronauki to jedna z najmniej efektywnych metod nauki.',
        'W 1972 roku Fergus Craik i Robert Lockhart sformułowali Teorię Poziomów Przetwarzania (Levels of Processing). Wykazali, że trwałość śladu pamięciowego nie zależy od czasu spędzonego nad książką, lecz od GŁĘBOKOŚCI PRZETWARZANIA KOGNITYWNEGO:',
        '1. Poziom Płytki (Strukturalny / Fizyczny): Zwrócenie uwagi na krój czcionki, kolor czy długość słowa. Pamięć gaśnie po kilku minutach.',
        '2. Poziom Średni (Fonetyczny / Akustyczny): Powtarzanie brzmienia słów w pamięci roboczej (tzw. pętla fonologiczna). Pozwala zdać kolokwium za godzinę, ale ulatuje nazajutrz.',
        '3. Poziom Głęboki (Semantyczny / Elaboracyjny): Zadawanie pytań o sens: „Z czym to się łączy? Jaka jest reguła? Jak to się ma do mojego życia?”. Informacja zostaje wpleciona w gęstą sieć asocjacyjną kory mózgowej i przetrwa dekady.'
      ]
    },
    {
      id: 'sec-5-7',
      pageNumber: 331,
      sectionNumber: '5.7',
      title: 'Konsolidacja Pamięciowa i Biologiczna Rola Snu (NREM i REM)',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Wyobraź sobie hipokamp jako podręczny notes ze spiralą o ograniczonej liczbie kartek, a korę nową jako potężną bibliotekę narodową. W ciągu dnia wszystkie nowe doświadczenia zapisywane są w notesie.',
        'Co dzieje się, gdy zasypiasz? Podczas snu wolnofalowego (NREM / SWS) mózg generuje tzw. wrzeciona senne (Sleep Spindles) oraz ostre fale powolne. Hipokamp zaczyna „odtwarzać” doświadczenia dnia z 10-krotną prędkością, wysyłając sygnały do odpowiednich pól kory mózgowej.',
        'To właśnie w nocy dochodzi do KONSOLIDACJI SYNAPTYCZNEJ I SYSTEMOWEJ. Z kolei w fazie REM mózg tworzy dalekosiężne, kreatywne połączenia semantyczne. Zarywając noc przed egzaminem, dosłownie wyrzucasz do kosza notes z notatkami, zanim biblioteka zdążyła go skatalogować!'
      ]
    },
    {
      id: 'sec-5-8',
      pageNumber: 337,
      sectionNumber: '5.8',
      title: 'Zjawisko Rekonsolidacji (Karim Nader): Dlaczego Każde Przypomnienie Przepisuje Przeszłość',
      category: 'neuronauka',
      readingTimeMinutes: 15,
      paragraphs: [
        'Przez dziesięciolecia wierzono, że gdy wspomnienie ulegnie już konsolidacji w korze, jest niezmienne jak rzeźba w marmurze. W 2000 roku Karim Nader z McGill University dokonał przełomowego odkrycia.',
        'Udowodnił, że w momencie, gdy wydobywasz wspomnienie z pamięci długotrwałej do świadomości, jego ślad neuronalny ulega przejściowemu „rozpuszczeniu” — staje się niestabilny i plastyczny (tzw. labilizacja).',
        'Aby wspomnienie nie przepadło, mózg musi je REKONSOLIDOWAĆ — czyli przeprowadzić ponowną syntezę białek w synapsach. Problem w tym, że podczas tego procesu do pierwotnego śladu zostają wmontowane Twoje AKTUALNE emocje, nowo zdobyte informacje oraz sugestie rozmówców. Wspomnienie, które odkładasz na półkę, nigdy nie jest identyczne z tym, które z niej zdjąłeś!'
      ]
    },
    {
      id: 'sec-5-9',
      pageNumber: 343,
      sectionNumber: '5.9',
      title: 'Zapominanie jako Funkcja Adaptacyjna: Krzywa Ebbinghausa i Czyszczenie Szumu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Hermann Ebbinghaus już w XIX wieku wyznaczył słynną Krzywą Zapominania: bez powtórek po zaledwie 24 godzinach zapominamy blisko 70% przyswojonych informacji.',
        'Z ewolucyjnego punktu widzenia zapominanie nie jest porażką pamięci, lecz jej największym sprzymierzeńcem. Układ nerwowy nieustannie dokonuje przycinania synaptycznego (synaptic pruning), usuwając dane bezużyteczne (gdzie zaparkowałeś auto 3 lata temu, ile kosztowało masło w zeszły wtorek). Gdybyśmy pamiętali wszystko, kora utonęłaby w szumie, tracąc zdolność do myślenia pojęciowego.'
      ]
    },
    {
      id: 'sec-5-10',
      pageNumber: 349,
      sectionNumber: '5.10',
      title: 'Dlaczego Niewierna Pamięć Jest Ewolucyjnym Sukcesem?',
      category: 'neuronauka',
      readingTimeMinutes: 14,
      paragraphs: [
        'Gdy dowiadujemy się o zawodności pamięci, pierwszym odruchem jest rozczarowanie: „Dlaczego ewolucja stworzyła tak niedoskonały system?”.',
        'Jednak zdaniem neurobiologów (np. Daniela Schactera, autora „Siedmiu grzechów pamięci”) rekonstrukcyjny charakter pamięci jest genialną adaptacją:',
        '1. Zapobieganie Przeładowaniu: Gdybyśmy pamiętali każdy pojedynczy liść na drzewie i każdy odcień szarości chodnika, nasza kora uległaby paraliżowi informacyjnemu.',
        '2. Abstrakcja i Generalizacja: Pamięć wyciąga sens i regułę ze zdarzeń, pozwalając na stosowanie wiedzy w NOWYCH, niespotykanych dotąd sytuacjach.',
        '3. Elastyczność i Symulowanie Przyszłości: Ten sam system neuronalny (hipokamp i sieć wzbudzeń podstawowych DMN), który służy do odtwarzania przeszłości, służy nam do WYOBRAŻANIA SOBIE PRZYSZŁOŚCI! Gdyby pamięć była sztywnym twardym dyskiem, nie potrafilibyśmy elastycznie planować.'
      ]
    },
    {
      id: 'sec-5-11',
      pageNumber: 355,
      sectionNumber: '5.11',
      title: 'Studium Przypadku: Michał i Spór o Umowę Ustną',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Michał (35 lat, współwłaściciel agencji kreatywnej) od pół roku pozostawał w ostrym konflikcie ze swoim wspólnikiem.'
      ],
      caseStudyRef: {
        id: 'cs-michal-memory',
        title: 'Konfabulacja Nieświadoma: Jak Zmieniły Się Ustalenia Sprzed Roku',
        subtitle: 'Gdy dwie strony pamiętają absolutnie sprzeczne warunki podziału zysków',
        protagonist: 'Michał, Co-founder (35 lat)',
        context: 'Rozliczenie rocznej dywidendy w firmie na podstawie rozmowy ustnej z kawiarni.',
        story: [
          'Rok wcześniej przy kawiarnianym stoliku Michał i jego wspólnik Paweł uzgadniali zasady premiowania za pozyskanie inwestora. Wtedy ustalili, że ten, kto sprowadzi klienta, otrzyma dodatkowe 15% zysku z projektu.',
          'Przez rok firma się rozrosła, a relacje między wspólnikami uległy ochłodzeniu. Podczas rocznego podsumowania Michał zażądał wypłaty 25% premii. Gdy Paweł ze zdumieniem przypomniał mu o 15%, Michał oburzył się i oskarżył Pawła o oszustwo.',
          'Michał miał przed oczami żywe wspomnienie: kawiarnię, zapach espresso i moment, w którym Paweł przytakuje na kwotę 25%.',
          'Na szczęście Paweł zachował stary, odręczny szkic na serwetce z tamtego dnia, na którym widniała wyraźna cyfra: „15%”. Michał zamarł. Przez rok narastającej niechęci do Pawła jego mózg podświadomie i stopniowo „korygował” kwotę z 15% na 25%, dopasowując poczucie własnej krzywdy do zrekonstruowanego wspomnienia.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Rekonsolidacja pamięci zniekształcona bieżącym stanem emocjonalnym i motywacją finansową (Motivated Remembering).',
          cognitiveBiases: [
            {
              name: 'Efekt Wspierania Decyzji (Choice-Supportive Bias)',
              description: 'Zniekształcenie wspomnień w taki sposób, by pasowały do aktualnego poczucia sprawiedliwości.',
              impact: 'Wywołało fałszywe poczucie pewności prawnej.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Konfabulacja Nieświadoma',
              explanation: 'Wypełnienie luki w pamięci fałszywym detalem bez intencji kłamstwa (utrzymanie spójnego obrazu siebie jako uczciwego wspólnika).'
            }
          ],
          emotionalDynamic: 'Głębokie poczucie bycia oszukanym bazujące na nieistniejącym fakcie.'
        },
        decisionProcessAnalysis: {
          trigger: 'Pytanie o wypłatę rocznej premii.',
          attentionFocus: 'Własne wkład w rozwój firmy i narastająca niechęć do Pawła.',
          interpretation: '„Przecież ustalałem z nim 25%, on próbuje mnie teraz okraść”.',
          emotion: 'Oburzenie i zawiść.',
          impulse: 'Oskarżenie wspólnika o kłamstwo.',
          action: 'Gwałtowna konfrontacja na zebraniu.',
          consequence: 'Kryzys zaufania w zarządzie i kompromitacja po przedstawieniu serwetki.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Hipokamp (Hippocampus)', role: 'Wydobywanie i ponowny zapis śladu pamięciowego', activationState: 'Podatność na rekonsolidację' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol', roleInScenario: 'Utrudniał chłodne wyodrębnienie pierwotnego kontekstu zebrania.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 100 ms', process: 'Aktywacja śladu pamięciowego z kawiarni połączona z aktualną emocją żalu.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Dokumentowanie ustaleń (Verba volant, scripta manent)', script: 'Wysyłanie e-maila podsumowującego po każdej rozmowie ustnej.', rationale: 'Chroni przed naturalnym falowaniem pamięci obu stron.' }
          ]
        },
        keyTakeaway: 'Nigdy nie polegaj na samej pamięci ustnej przy kluczowych ustaleniach finansowych. Mózg bez trudu zastąpi fakty życzeniową narracją.'
      }
    },
    {
      id: 'sec-5-12',
      pageNumber: 361,
      sectionNumber: '5.12',
      title: 'Studium Przypadku: Ewa i Zeznanie Świadka Kolizji Drogowej (Misinformation Effect)',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Drugie studium przypadku bada zjawisko zanieczyszczenia pamięci naocznego świadka przez sugestie osób trzecich.'
      ],
      caseStudyRef: {
        id: 'cs-ewa-witness',
        title: 'Skradzione Wspomnienie: Jak Plotka Przebudowała Pamięć Świadka',
        subtitle: 'Gdy świadek z pełną odpowiedzialnością przysięgał na nieistniejące fakty',
        protagonist: 'Ewa, Nauczycielka Języka Polskiego (39 lat)',
        context: 'Zeznania na policji po groźnym potrąceniu pieszego na skrzyżowaniu.',
        story: [
          'Ewa stała na przystanku autobusowym, gdy doszło do potrącenia pieszego przez ciemny samochód osobowy. Sprawca zbiegł z miejsca zdarzenia.',
          'W pierwszych minutach po wypadku wokół zebrał się tłum gapiów. Jeden z mężczyzn zaczął krzyczeć: „Widzieliście tego pirata w czerwonej kurtce w srebrnym Audi?! Przejechał na czerwonym!”.',
          'Ewa w rzeczywistości widziała jedynie sylwetkę auta w cieniu i nie była pewna ani marki, ani koloru kurtki kierowcy. Jednak przez 40 minut oczekiwania na policję słuchała powtarzanych opowieści gapiów.',
          'Gdy funkcjonariusz zapytał Ewę: „Co pani widziała?”, Ewa złożyła szczegółowe zeznanie: „Kierowca w czerwonej kurtce jechał srebrnym Audi, widziałam to na własne oczy”. Zeznanie skierowało śledztwo na fałszywy tor.',
          'Dopiero zabezpieczony monitoring miejski wykazał, że sprawca poruszał się granatowym Fordem i miał na sobie ciemny płaszcz. Ewa doświadczyła klasycznego błędu monitorowania źródła (Source Monitoring Error).'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Błąd monitorowania źródła (Source Monitoring Error) w połączeniu ze społecznym konformizmem pamięciowym (Memory Conformity).',
          cognitiveBiases: [
            {
              name: 'Efekt Dezinformacji Pourazowej',
              description: 'Zastąpienie luki w pamięci sugestywnymi okrzykami świadków.',
              impact: 'Złożenie fałszywych zeznań pod przysięgą bez intencji kłamstwa.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Konstruktywne Wypełnianie Luk',
              explanation: 'Umysł nie znosi niepewności w scenie traumatycznej i automatycznie scalił zasłyszane słowa z własnym obrazem.'
            }
          ],
          emotionalDynamic: 'Silny szok powypadkowy ułatwiający zaimplementowanie fałszywych informacji.'
        },
        decisionProcessAnalysis: {
          trigger: 'Pytanie policjanta o rysopis.',
          attentionFocus: 'Zasłyszane zdanie o srebrnym Audi.',
          interpretation: '„Skoro to pamiętam, to znaczy że to widziałam”.',
          emotion: 'Poczucie obywatelskiego obowiązku i pewność.',
          impulse: 'Pomóc policji za wszelką cenę.',
          action: 'Podpisanie protokołu z fałszywymi danymi.',
          consequence: 'Opóźnienie ujęcia realnego sprawcy wypadku.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Kora Przedczołowa Przednia (Brodmann 10)', role: 'Weryfikacja źródła wspomnień', activationState: 'Upośledzona przez stres powypadkowy' },
            { region: 'Płat Skroniowy', role: 'Integracja danych słuchowych ze wzrokowymi', activationState: 'Bezrefleksyjne scalenie' }
          ],
          neurotransmitters: [
            { name: 'Adrenalina', roleInScenario: 'Zwiększyła pewność subiektywną bez poprawy wierności zapisu.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 40 min', process: 'Wielokrotne powtarzanie plotki w tłumie trwale nadpisuje pierwotny engram.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Natychmiastowa Notatka Izolacyjna', script: 'W razie bycia świadkiem odejdź od tłumu na 20 metrów i natychmiast zapisz w telefonie TYLKO TO, co widziałeś osobiście, zanim porozmawiasz z kimkolwiek.', rationale: 'Chroni pierwotny ślad pamięciowy przed kontaminacją dezinformacją.' }
          ]
        },
        keyTakeaway: 'Ludzka pamięć jest zaraźliwa. Rozmowa z innymi świadkami przed przesłuchaniem prawie zawsze niszczy wartość dowodową zeznań.'
      }
    },
    {
      id: 'sec-5-13',
      pageNumber: 367,
      sectionNumber: '5.13',
      title: 'Studium Przypadku: Adam i Pułapka Hindsight Bias w Projekcie Biznesowym',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Trzecie studium analizuje błąd „Wiedziałem to od początku!” (Hindsight Bias) i jego destrukcyjny wpływ na uczenie się organizacji.'
      ],
      caseStudyRef: {
        id: 'cs-adam-hindsight',
        title: 'Generałowie po Bitwie: Złudzenie Wstecznej Przewidywalności',
        subtitle: 'Jak poznanie finału projektu wykasowało pamięć o pierwotnym ryzyku',
        protagonist: 'Adam, Dyrektor Rozwoju Produktu (42 lata)',
        context: 'Podsumowanie wdrożenia nowej aplikacji e-commerce, która poniosła rynkową klapę.',
        story: [
          'Rok wcześniej Adam i jego zarząd jednogłośnie przegłosowali inwestycję 2 milionów złotych w nową platformę zakupową. Na tamtym etapie Adam pisał w e-mailach: „To rewolucyjny pomysł, konkurencja zostanie daleko w tyle, ryzyko jest minimalne”.',
          'Jednak po 12 miesiącach aplikacja okazała się kompletnym niewypałem — klienci woleli tradycyjne rozwiązania, a projekt wygenerował 1,5 miliona straty.',
          'Podczas zebrania kryzysowego Adam wstał i z oburzeniem oświadczył: „Przecież od samego początku mówiłem, że ten projekt to szaleństwo! Wiedziałem, że rynek tego nie przyjmie! Trzeba było mnie posłuchać rok temu, zamiast pchać się w te koszty!”.',
          'Gdy prezes zarządu wyjął z teczki wydrukowane notatki i e-maile Adama sprzed roku, w których ten wychwalał projekt pod niebiosa, Adam zbladł. Nie kłamał cynicznie — jego mózg po poznaniu klęski natychmiast przepisał historię pamięciową, by chronić poczucie własnej nieomylności.'
        ],
        psychologicalAnalysis: {
          coreMechanism: 'Hindsight Bias (pełzający determinizm / błąd wstecznej pewności) chroniący ego przed poczuciem odpowiedzialności za porażkę.',
          cognitiveBiases: [
            {
              name: 'Wsteczna Pewność (Hindsight Bias)',
              description: 'Przypisanie sobie zdolności przewidzenia katastrofy po fakcie.',
              impact: 'Uniemożliwiło wyciągnięcie rzetelnych wniosków strategicznych na przyszłość.'
            }
          ],
          defenseMechanisms: [
            {
              name: 'Autorewaloryzacja Pamięciowa',
              explanation: 'Selektywne wymazanie wspomnień własnego entuzjazmu na rzecz wyolbrzymienia drobnych wątpliwości.'
            }
          ],
          emotionalDynamic: 'Lęk przed utratą twarzy zamieniony w arogancką postawę mentora.'
        },
        decisionProcessAnalysis: {
          trigger: 'Raport finansowy o klęsce projektu.',
          attentionFocus: 'Własna reputacja w oczach zarządu.',
          interpretation: '„Muszę pokazać, że miałem rację, to nie moja wina”.',
          emotion: 'Wstyd, zagrożenie pozycji zawodowej.',
          impulse: 'Zrzucenie winy na resztę zespołu.',
          action: 'Wypowiedzenie słów: „Wiedziałem to od początku”.',
          consequence: 'Utrata szacunku zespołu po konfrontacji z twardymi mailami.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'vmPFC (Brzuszno-przyśrodkowa kora przedczołowa)', role: 'Podtrzymywanie pozytywnego obrazu Ja', activationState: 'Zniekształcanie wspomnień dla obrony statusu' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol', roleInScenario: 'Zwiększał defensywność w odpowiedzi na krytykę.' }
          ],
          biologicalTimeline: [
            { timeMs: '0 - 100 ms', process: 'Poznanie wyniku projektu automatycznie reorganizuje sieci skojarzeniowe w pamięci.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Krok 1: Dziennik Decyzji (Decision Journal)', script: 'Zapisuj przed każdą ważną decyzją: datę, prognozę, warianty alternatywne i poziom pewności w procentach.', rationale: 'Czarno na białym demaskuje zjawisko hindsight bias i zmusza do prawdziwego rozwoju.' }
          ]
        },
        keyTakeaway: 'Nigdy nie oceniaj jakości decyzji wyłącznie po jej ostatecznym wyniku. Dobra decyzja w warunkach niepewności może przynieść zły wynik, a zła decyzja — przypadkowy sukces.'
      }
    },
    {
      id: 'sec-5-14',
      pageNumber: 373,
      sectionNumber: '5.14',
      title: 'Warsztat Efektywnego Kodowania: Technika Elaboracji, Retrieval Practice i Spaced Repetition',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Zamiast bezproduktywnie walczyć z ograniczeniami pamięci, zastosuj trzy najlepiej udokumentowane techniki neuronaukowe zwiększające retencję o ponad 300%:'
      ],
      subsections: [
        {
          title: 'Złota Trójka Neuronauki Uczenia Się',
          paragraphs: [
            '1. Praktyka Wydobywania (Retrieval Practice / Testing Effect): Po przeczytaniu rozdziału natychmiast zamknij książkę i wypisz z głowy wszystko, co pamiętasz. Bolesny wysiłek przypominania zmusza neurony do trwałej konsolidacji.',
            '2. Powtórki w Odstępach Czasowych (Spaced Repetition): Powtarzaj materiał tuż przed momentem, gdy Twój mózg ma go zapomnieć: po 24 godzinach, po 3 dniach, po tygodniu i po miesiącu (zgodnie z algorytmem SuperMemo).',
            '3. Elaboracja Semantyczna (Feynman Technique): Wyjaśnij skomplikowaną ideę swojemu 10-letniemu dziecku lub komuś bez wiedzy branżowej, używając wyłącznie prostych metafor. Jeśli nie potrafisz czegoś prosto wytłumaczyć — sam tego nie rozumiesz.'
          ]
        }
      ]
    },
    {
      id: 'sec-5-15',
      pageNumber: 379,
      sectionNumber: '5.15',
      title: 'Podsumowanie Rozdziału 5, Wielkie Zwieńczenie Części I i Zapowiedź Części II',
      category: 'podsumowanie',
      readingTimeMinutes: 15,
      paragraphs: [
        'W ten sposób dobiega końca fundamentalna CZĘŚĆ I — ARCHITEKTURA UMYSŁU w Tomie I: Fundamenty Umysłu.',
        'Wspólnie przebyliśmy całą oś genezy ludzkiego doświadczenia:',
        '• W Rozdziale 1 poznaliśmy Podwójny System Przetwarzania (System 1 i 2), 11-etapową mapę decyzji i koszty metaboliczne kory przedczołowej.',
        '• W Rozdziale 2 rozbroiliśmy porwanie emocjonalne, odkrywając niską i wysoką drogę LeDouxa, sygnały somatyczne Damasio oraz strategie regulacji i pauzy.',
        '• W Rozdziale 3 zbadaliśmy wąskie gardło uwagi, obaliliśmy mit multitaskingu, zdemaskowaliśmy koszty przełączania zadań i ślepotę nieuwagi.',
        '• W Rozdziale 4 udowodniliśmy, że percepcja nie jest kamerą, lecz odgórną maszyną predykcyjną tworzącą hipotezę świata na bazie szczątkowych sygnałów zmysłów.',
        '• Wreszcie w Rozdziale 5 odsłoniliśmy rekonstrukcyjny, elastyczny charakter pamięci, uwalniając się od iluzji nieomylnego nagrania wideo.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 5.',
        'Z tą potężną bazą naukową i zintegrowanymi narzędziami jesteśmy gotowi, by przejść na wyższy poziom wtajemniczenia: do CZĘŚCI II — MYŚLENIE I INTERPRETOWANIE, w której odsłonimy tajemnice skrótów myślowych (heurystyk), barier poznawczych i mechanizmów powstawania niezłomnych przekonań!'
      ]
    }
  ]
};
