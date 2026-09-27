import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 14 (GLOBALNIE ROZDZIAŁ 30 W STRUKTURZE DZIEŁA)
 * TYTUŁ: ASERTYWNOŚĆ — SZTUKA KOMUNIKACJI W ZGODZIE ZE SOBĄ, WYRAŻANIE GRANIC I SPÓJNOŚĆ DZIAŁANIA
 */

export const chapterThirtyExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest fundamentalna definicja asertywności w psychologii komunikacji interpersonalnej?',
    topic: 'Definicja i Istota Asertywności',
    sectionRef: 'Sekcja 30.1',
    options: [
      { label: 'A', text: 'Zdolność do bezpośredniego, uczciwego i stanowczego wyrażania własnych myśli, uczuć, przekonań i granic z jednoczesnym pełnym poszanowaniem praw i godności drugiego człowieka.', isCorrect: true },
      { label: 'B', text: 'Umiejętność wygrywania każdej dyskusji i narzucania swojego zdania za wszelką cenę.', isCorrect: false },
      { label: 'C', text: 'Nieustanne unikanie konfliktów i ustępowanie innym dla zachowania spokoju.', isCorrect: false },
      { label: 'D', text: 'Technika manipulowania emocjami rozmówcy za pomocą ukrytych sugestii.', isCorrect: false }
    ],
    explanation: 'Asertywność nie jest ani agresją (dbaniem o siebie kosztem innych), ani uległością (dbaniem o innych kosztem siebie). Jest dojrzałą postawą „Ja jestem w porządku — Ty jesteś w porządku” (Model Thomasa Harrisa).',
    keyTakeaway: 'Asertywność to odwaga bycia sobą bez potrzeby ranienia lub dominowania nad innymi ludźmi.'
  },
  {
    id: 2,
    question: 'W jaki sposób technika „Zamgławiania” (Fogging) chroni przed destrukcyjnym atakiem krytycznym i prowokacją?',
    topic: 'Techniki Asertywnego Przyjmowania Krytyki',
    sectionRef: 'Sekcja 30.15',
    options: [
      { label: 'A', text: 'Polega na spokojnym zgodzeniu się z tą częścią krytyki, która zawiera ziarno prawdy lub prawdopodobieństwa, bez przyjmowania uogólnień, poczucia winy ani kontrataku emocjonalnego.', isCorrect: true },
      { label: 'B', text: 'Polega na natychmiastowym wyparciu się wszystkiego i oskarżeniu krytykującego o kłamstwo.', isCorrect: false },
      { label: 'C', text: 'Polega na wyjściu z pokoju bez słowa i rozpłakaniu się.', isCorrect: false },
      { label: 'D', text: 'Polega na użyciu skomplikowanych pojęć naukowych w celu zmylenia rozmówcy.', isCorrect: false }
    ],
    explanation: 'Zamgławianie (zaproponowane przez Manuela Smitha) działa jak mgła dla rzuconego kamienia: kamień przelatuje przez mgłę i spada na ziemię, nie wyrządzając szkody. Zgadzając się z częścią prawdy („Rzeczywiście, spóźniłem się dziś 5 minut”), odbierasz agresorowi paliwo do eskalacji sporu.',
    keyTakeaway: 'Nie walcz z krytyką tam, gdzie jest prawdziwa — oddziel fakt od złośliwej oceny i zachowaj spokój.'
  },
  {
    id: 3,
    question: 'Na czym polega różnica między strukturą komunikatu typu „TY” a komunikatu typu „JA” (I-statement)?',
    topic: 'Komunikat JA w Komunikacji Asertywnej',
    sectionRef: 'Sekcja 30.11',
    options: [
      { label: 'A', text: 'Komunikat „TY” zawiera oskarżenie, etykietowanie i wzbudza natychmiastową obronę („Ty zawsze wszystko niszczysz”), natomiast komunikat „JA” opisuje obiektywny fakt, moje własne emocje i konkretne oczekiwanie („Kiedy przerywasz mi wypowiedź, czuję irytację. Chcę dokończyć zdanie”).', isCorrect: true },
      { label: 'B', text: 'Komunikat „TY” jest zawsze po angielsku, a komunikat „JA” po polsku.', isCorrect: false },
      { label: 'C', text: 'Komunikat „JA” polega na mówieniu wyłącznie o swoich sukcesach materialnych.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy psychologicznej, oba komunikaty wywołują identyczną reakcję.', isCorrect: false }
    ],
    explanation: 'Komunikat „JA” bierze odpowiedzialność za własny stan afektywny i nie przypisuje rozmówcy wrogich intencji. Zmniejsza opór limbiczny u odbiorcy i otwiera przestrzeń do merytorycznego dialogu.',
    keyTakeaway: 'Mów o faktach i własnych uczuciach zamiast diagnozować i osądzać drugiego człowieka.'
  },
  {
    id: 4,
    question: 'Czym jest tzw. Technika Zdartej Płyty (Broken Record) i w jakich sytuacjach jest szczególnie rekomendowana?',
    topic: 'Techniki Reagowania na Nacisk',
    sectionRef: 'Sekcja 30.18',
    options: [
      { label: 'A', text: 'Spokojnym, powtarzalnym i niezmiennym powracaniu do swojego stanowiska wyjściowego bez wdawania się w dyskusje poboczne, prowokacje czy usprawiedliwienia, gdy rozmówca ignoruje naszą pierwszą odmowę.', isCorrect: true },
      { label: 'B', text: 'Mówieniu tak głośno, aby całkowicie zagłuszyć głos drugiej osoby.', isCorrect: false },
      { label: 'C', text: 'Ciągłym zmienianiu zdania w zależności od nastroju rozmówcy.', isCorrect: false },
      { label: 'D', text: 'Ignorowaniu wszystkich pytań i udawaniu osoby głuchej.', isCorrect: false }
    ],
    explanation: 'Technika zdartej płyty uniemożliwia manipulatorowi wciągnięcie nas w labirynt argumentacyjny. Każda kolejna próba nacisku spotyka się z tym samym, wyciszonym komunikatem („Rozumiem twoją sytuację, jednak nie pożyczę ci tych pieniędzy”).',
    keyTakeaway: 'Nie musisz wymyślać nowych argumentów — po prostu powtórz swoje pierwotne zdanie z niezmiennym spokojem.'
  },
  {
    id: 5,
    question: 'W jaki sposób Kanon Praw Asertywności (wg Manuela J. Smitha) redefiniuje prawo do popełniania błędów i zmiany zdania?',
    topic: 'Kanon Praw Asertywności',
    sectionRef: 'Sekcja 30.9',
    options: [
      { label: 'A', text: 'Jako niezbywalne prawo każdego człowieka do bycia niedoskonałym, ponoszenia odpowiedzialności za własne pomyłki oraz aktualizowania swoich decyzji w świetle nowych faktów bez konieczności odczuwania wstydu czy winy.', isCorrect: true },
      { label: 'B', text: 'Jako pozwolenie na celowe ranienie innych i brak jakiejkolwiek odpowiedzialności prawnej.', isCorrect: false },
      { label: 'C', text: 'Jako zasadę stosowaną wyłącznie w terapii osób uzależnionych.', isCorrect: false },
      { label: 'D', text: 'Kanon Smitha zabrania popełniania jakichkolwiek błędów pod groźbą utraty asertywności.', isCorrect: false }
    ],
    explanation: 'Człowiek nie musi być nieomylny, by mieć prawo do szacunku. Uznanie prawa do błędu i zmiany zdania odbiera innym możliwość szantażowania nas przeszłymi deklaracjami i uwalnia od perfekcjonistycznego paraliżu.',
    keyTakeaway: 'Masz prawo powiedzieć: „Myliłem się, zmieniłem zdanie w świetle nowych informacji” — to dowód dojrzałości, a nie słabości.'
  }
];

export const chapterThirtyCaseStudyUleglosc: CaseStudy = {
  id: 'cs-ch30-piotr-uleglosc',
  title: 'Studium Przypadku: Cena Wiecznego Milczenia — Piotr i Uległość w Zespole',
  subtitle: 'Jak brak asertywnego sprzeciwu doprowadził do kradzieży autorstwa i jak odzyskać głos',
  protagonist: 'Piotr, 30 lat, analityk danych w firmie doradczej',
  context: 'Piotr od 6 miesięcy pracował po nocach nad autorskim algorytmem predykcji churnu klientów. Jego kolega z pokoju, Dominik — osoba głośna, dominująca i charyzmatyczna — stale podglądał postępy prac Piotra, rzucając protekcjonalne uwagi. Na tydzień przed prezentacją dla zarządu Dominik przyszedł do Piotra z prośbą o udostępnienie kodu, twierdząc, że „chce tylko sprawdzić formatowanie”. Piotr czuł głęboki niepokój, ale bał się odmówić, by nie wyjść na niekoleżeńskiego.',
  story: [
    'Piotr wysłał kod Dominikowi ze słowami: „Tylko proszę, nie zmieniaj niczego bez konsultacji ze mną”. Dominik rzucił: „Spoko stary, masz to u mnie”.',
    'Podczas spotkania z zarządem Dominik wyświetlił slajdy z algorytmem Piotra i przedstawił go jako: „Mój autorski projekt optymalizacyjny, który przygotowałem we współpracy z zespołem wsparcia”.',
    'Piotr siedział na sali jak spetryfikowany. Serce biło mu w skroniach, dłonie pociły się ze wstydu i złości, ale nie odezwał się ani jednym słowem. Gdy prezes zapytał: „Czy ktoś z analityków ma coś do dodania?”, Piotr jedynie pokręcił głową.',
    'Dominik otrzymał premię i awans na Lead Data Scientista. Piotr wrócił do domu, wypił trzy piwa i przez dwa tygodnie nie mógł spać, trawiąc wściekłość na Dominika, prezesa i samego siebie.',
    'W toku pracy z coachem komunikacji Piotr zrekonstruował ten moment i przećwiczył alternatywną, asertywną interwencję.',
    'Podczas kolejnego projektu, gdy Dominik ponownie próbował przejąć jego analizę, Piotr w obecności zespołu powiedział spokojnym, pewnym głosem: „Dominik, ten moduł jest moim autorskim zadaniem. Ja osobiście zaprezentuję go zarządowi w czwartek. Chętnie odpowiem na Twoje pytania po prezentacji”.',
    'Dominik był w szoku, próbował żartować, ale widząc żelazny spokój Piotra, musiał ustąpić. Piotr odzyskał poczucie godności i pozycję eksperta w firmie.'
  ],
  dialogue: [
    { speaker: 'Dominik (z uśmiechem)', text: 'Piotrek, daj ten kod, ja go ładnie opakuję i pokażę szefom, ty przecież nie lubisz wystąpień.', subtext: 'Manipulacja paternalistyczna i kradzież dorobku pod płaszczykiem troski.' },
    { speaker: 'Piotr (uległy)', text: 'No dobra... ale wspomnij o mnie, dobrze?', subtext: 'Błagalna uległość oddająca pełną władzę manipulatorowi.' },
    { speaker: 'Piotr (asertywny)', text: 'Dominik, doceniam chęć pomocy, jednak to jest mój projekt i to ja zaprezentuję go zarządowi.', subtext: 'Jasna, spokojna i niepodważalna deklaracja autorstwa i odpowiedzialności.' }
  ],
  decisionTaken: 'Porzucenie uległości i biernego czekania na sprawiedliwość dziejową na rzecz bezpośredniego, publicznego ogłoszenia własnego autorstwa i granic zawodowych.',
  whatProtagonistSaw: 'Dominika jako wszechmocnego manipulatora, a siebie jako bezbronną ofiarę okoliczności.',
  whatWasMissed: 'Że milczenie na sali konferencyjnej było w rzeczywistości milczącą zgodą na kradzież; nikt nie obroni Twoich praw, jeśli sam z nich zrezygnujesz.',
  psychologicalAnalysis: {
    coreMechanism: 'Bierność i uległość wynikająca z lęku przed konfrontacją hierarchiczną i wyuczonej bezradności.',
    cognitiveBiases: [
      { name: 'Iluzja Sprawiedliwego Świata', description: 'Naiwne przekonanie, że szefowie sami zauważą jego cichą ciężką pracę i ukarzą Dominika bez słowa sprzeciwu.', impact: 'Pasywność w kluczowym momencie.' }
    ],
    defenseMechanisms: [
      { name: 'Tłumienie i Autodestrukcja', explanation: 'Kierowanie złości przeciwko samemu sobie zamiast asertywnego wyładowania na zewnątrz.' }
    ],
    emotionalDynamic: 'Przejście od paraliżującego wstydu i żalu do poczucia triumfu i siły po udanej obronie granic.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Aktywacja odwagi poznawczej i kontrola mowy pod presją', activationState: 'Wzmocniona treningiem behawioralnym' },
      { region: 'Istota szara okołowodociągowa (PAG)', role: 'Reakcja zamrożenia (Freezing)', activationState: 'Przełamana działaniem werbalnym' }
    ],
    neurotransmitters: [
      { name: 'Dopamina i Serotonina', roleInScenario: 'Wzrost stężenia po odzyskaniu kontroli nad statusem społecznym.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Próba przejęcia projektu', process: 'Początkowy impuls lęku zastąpiony spokojnym oddechem przeponowym.' },
      { timeMs: 'Wypowiedzenie asertywnego zdania', process: 'Natychmiastowe obniżenie poziomu kortyzolu i wyprostowanie sylwetki.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Paternalistyczne umniejszanie', description: '„Ty przecież nie lubisz występować, ja to zrobię lepiej”.', vulnerabilityExploited: 'Niepewność co do własnych kompetencji autoprezentacyjnych.' }
    ],
    counterMeasures: [
      { step: 'Deklaracja Autorska w 3 Krokach', script: '1. Uznanie intencji rozmówcy („Doceniam chęć pomocy”). 2. Twardy fakt („To mój projekt”). 3. Zamknięcie tematu („Ja go zaprezentuję”).', rationale: 'Nie pozwala na wejście w dyskusję i ustala niepodważalny fakt.' }
    ]
  },
  keyTakeaway: 'Nikt nie przyjdzie, by uratować Twoje prawa. Jeśli sam nie powiesz głośno i spokojnie: „To jest moja praca i moja granica”, świat potraktuje Twoje milczenie jako zgodę na bycie pominiętym.'
};

export const chapterThirtyCaseStudyAgresja: CaseStudy = {
  id: 'cs-ch30-kamil-agresja',
  title: 'Studium Przypadku: Płonące Mosty — Kamil i Pułapka Reakcji Agresywnej',
  subtitle: 'Jak mylenie siły z agresją zniszczyło autorytet i jak trening asertywności odbudował zaufanie',
  protagonist: 'Kamil, 38 lat, dyrektor operacyjny w firmie produkcyjnej',
  context: 'Kamil uważał się za człowieka „bezkompromisowego i twardego”. Gdy pracownicy popełniali błędy, krzyczał, uderzał pięścią w stół, używał wulgaryzmów i publicznie wyśmiewał ich kompetencje. Sądził, że buduje w ten sposób szacunek i dyscyplinę. W rzeczywistości w firmie panowała atmosfera terroru: najlepsi inżynierowie składali wypowiedzenia, pracownicy ukrywali awarie maszyn z lęku przed wybuchem Kamila, a koszty przestojów wzrosły o 300%.',
  story: [
    'Podczas narady produkcyjnej Kamil dowiaduje się o 2-dniowym opóźnieniu dostawy komponentów. Wpada we wściekłość: wstaje z krzesła, rzuca teczką w ścianę i krzyczy na kierownika logistyki: „Czy wy wszyscy jesteście kompletnymi idiotami?! Jak można być tak tępym! Jeśli jutro tego nie będzie, osobiście wyrzucę cię na zbity pysk!”.',
    'Kierownik logistyki zbladł, zamilkł, a następnego dnia poszedł na zwolnienie lekarskie i złożył pozew o mobbing. Produkcja stanęła na 5 dni.',
    'Zarząd postawił Kamilowi ultimatum: roczny program psychoterapii i treningu asertywnego przywództwa albo natychmiastowe dyscyplinarne zwolnienie.',
    'Podczas treningu Kamil przeżył szok poznawczy: zrozumiał, że jego agresja nie była przejawem siły, lecz skrajnej bezsilności emocjonalnej i lęku przed utratą kontroli. Mylił asertywność z dominacją barbarzyńską.',
    'Nauczył się modelu FUKO (Fakty, Uczucia, Konsekwencje, Oczekiwania) oraz panowania nad markerami gniewu (obniżanie tonu głosu zamiast krzyku, pauza na oddech).',
    'Gdy 4 miesiące później doszło do kolejnego błędu w dostawie, Kamil nie podniósł głosu. Wezwał kierownika do gabinetu, usiadł naprzeciwko i powiedział: „Mamy 48 godzin opóźnienia na linii 3 [FAKT]. Jestem bardzo zaniepokojony tą sytuacją [UCZUCIE], ponieważ naraża to firmę na kary umowne [KONSEKWENCJA]. Oczekuję, że do godziny 14:00 przedstawisz mi plan transportu zastępczego [OCZEKIWANIE]. W czym mogę ci pomóc, aby to zrealizować?”.',
    'Kierownik zamiast uciekać w zwolnienie, rozwiązał problem w 3 godziny. Kamil po raz pierwszy poczuł, czym jest prawdziwy, dojrzały autorytet oparty na asertywności.'
  ],
  decisionTaken: 'Całkowite odrzucenie agresji słownej i terroru na rzecz asertywnego modelu komunikacji krytycznej FUKO połączonego ze wsparciem wykonawczym.',
  whatProtagonistSaw: 'Swoją agresję jako jedyny skuteczny sposób na wymuszenie dyscypliny i efektów.',
  whatWasMissed: 'Że agresja wywołuje w mózgach pracowników stan zagrożenia życia (Threat State), wyłączając myślenie twórcze i zmuszając ich do ukrywania prawdy i sabotażu.',
  psychologicalAnalysis: {
    coreMechanism: 'Transformacja agresji (eksternalizacji lęku i bezradności) w dojrzałą asertywność przywódczą.',
    cognitiveBiases: [
      { name: 'Iluzja Kontroli Przemocowej', description: 'Przekonanie, że tylko krzyk zmusza ludzi do rzetelnej pracy.', impact: 'Erozja kultury organizacyjnej.' }
    ],
    defenseMechanisms: [
      { name: 'Przemieszczenie afektu', explanation: 'Wyładowywanie frustracji biznesowej na słabszych pracownikach w formie ataków personalnych.' }
    ],
    emotionalDynamic: 'Przejście od niekontrolowanego furii limbicznej do chłodnego, opanowanego zarządzania kryzysowego.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Brzuszno-boczna kora przedczołowa (vlPFC)', role: 'Hamowanie gwałtownych impulsów motorycznych i agresji słownej', activationState: 'Wzmocniona treningiem oddechowym' },
      { region: 'Ciało migdałowate', role: 'Źródło ataku szału', activationState: 'Wyciszone przez werbalizację emocji (Affect Labeling)' }
    ],
    neurotransmitters: [
      { name: 'Serotonina', roleInScenario: 'Poprawa tonusu serotoninergicznego redukująca impulsywną agresję.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Informacja o błędzie', process: 'Impuls gniewu -> świadome zaciśnięcie dłoni pod stołem i 3 powolne wydechy.' },
      { timeMs: 'Rozmowa modelem FUKO', process: 'Spokojna fonacja aktywująca układ przywspółczulny u obu rozmówców.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Algorytm FUKO w 4 Krokach', script: 'Fakt: „Spóźniłeś się z raportem o 2 dni”. Uczucie: „Jestem zaniepokojony”. Konsekwencja: „Zarząd czeka na dane”. Oczekiwanie: „Prześlij plik do 15:00”.', rationale: 'Usuwa oceny i etykiety, skupiając się wyłącznie na rozwiązaniu problemu.' }
    ]
  },
  keyTakeaway: 'Krzyk nie jest dowodem siły — jest najbardziej jaskrawym dowodem utraty panowania nad sobą. Prawdziwa siła wyraża się w cichym, precyzyjnym i nieubłaganym spokoju.'
};

export const chapterThirtyCaseStudyKonfliktGranice: CaseStudy = {
  id: 'cs-ch30-karolina-konflikt',
  title: 'Studium Przypadku: W Kleszczach Gaslightingu — Karolina i Konfrontacja z Przełożoną',
  subtitle: 'Zastosowanie technik zamgławiania, dopytywania i asertywnej obrony faktów wobec manipulacji',
  protagonist: 'Karolina, 27 lat, specjalistka ds. PR',
  context: 'Szefowa Karoliny, Beata, stosowała subtelny gaslighting: zmieniała wytyczne w rozmowach w cztery oczy, a na spotkaniach z klientami twierdziła, że Karolina wszystko zmyśliła lub źle zrozumiała: „Karolinko, chyba masz problemy z pamięcią, nigdy czegoś takiego nie mówiłam!”. Karolina zaczęła wątpić we własne zmysły, czując narastający niepokój i obniżenie samooceny.',
  story: [
    'Przed kluczową kampanią Beata ustnie poleciła Karolinie przygotowanie kreacji w kolorystyce pastelowej. Na spotkaniu z zarządem Beata skrytykowała projekt: „Kto zatwierdził te blade pastele? Karolina, chyba znowu żyjesz w swoim świecie!”.',
    'Karolina poczuła, jak krew odpływa jej z twarzy. Zamiast jednak rozpłakać się lub wejść w histeryczną kłótnię, zastosowała protokół asertywnej weryfikacji.',
    'Otworzyła laptopa i spokojnym głosem powiedziała: „Beato, 12 października o 14:30 wysłałam notatkę podsumowującą nasze ustalenia z prośbą o wdrożenie kolorystyki pastelowej, którą zatwierdziłaś mailem o 15:10. Wyświetlam tę korespondencję na ekranie”.',
    'Beata zmieszała się, próbowała obrócić sytuację w żart: „Oj, nie bądź taka drobiazgowa, po prostu trzeba było myśleć elastycznie!”.',
    'Karolina zastosowała technikę zdartej płyty: „Projekt został wykonany w 100% zgodnie z pisemnymi wytycznymi. Jeśli zarząd decyduje o zmianie palety, przygotuję wersję kontrastową do jutra do 12:00”.',
    'Zarząd docenił profesjonalizm Karoliny. Od tego momentu Beata przestała stosować gaslighting i zaczęła traktować Karolinę z respektem.'
  ],
  decisionTaken: 'Wprowadzenie żelaznej zasady archiwizacji ustaleń (paper trail), publiczna konfrontacja oparta na faktach i odrzucenie manipulacji pamięcią.',
  whatProtagonistSaw: 'Perfekcyjną manipulatorkę, której słowo zawsze będzie miało większą wagę niż jej własne.',
  whatWasMissed: 'Że gaslighting żywi się brakiem twardych dowodów i niepewnością ofiary; konfrontacja z pisemnym faktem natychmiast rozbraja iluzję kłamcy.',
  psychologicalAnalysis: {
    coreMechanism: 'Obrona przed gaslightingiem i manipulacją relacyjną poprzez asertywne ugruntowanie w faktach i protokół pisemny.',
    cognitiveBiases: [
      { name: 'Zwątpienie We Własną Percepcję (Gaslighting Effect)', description: 'Uleganie autosugestii, że to ja popełniam błąd, pod wpływem pewności siebie agresora.', impact: 'Erozja zaufania do siebie.' }
    ],
    defenseMechanisms: [
      { name: 'Ucieczka w dokumentację', explanation: 'Konstruktywna adaptacja polegająca na tworzeniu faktograficznego bufora bezpieczeństwa.' }
    ],
    emotionalDynamic: 'Uwolnienie od neurotycznego poczucia winy i odzyskanie pełnego zaufania do własnych zmysłów i pamięci.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Hipokamp i Kora Przedczołowa', role: 'Przywoływanie faktów epizodycznych i stabilizacja logiki', activationState: 'W pełni zsynchronizowane' }
    ],
    neurotransmitters: [
      { name: 'Acetylocholina', roleInScenario: 'Wspierająca precyzję myślenia i spokój pod presją.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Atak gaslightingowy Beaty', process: 'Krótki impuls konsternacji zastąpiony otwarciem archiwum mailowego.' },
      { timeMs: 'Odczytanie faktów', process: 'Natychmiastowe uspokojenie tętna i odzyskanie dominacji merytorycznej.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Gaslighting i podważanie poczytalności', description: '„Masz problemy z pamięcią, znowu żyjesz w swoim świecie”.', vulnerabilityExploited: 'Młody wiek i naturalna niepewność w nowym zespole.' }
    ],
    counterMeasures: [
      { step: 'Protokół Paper Trail (Ślad Pisemny)', script: '„Po każdej rozmowie ustnej wysyłam maila z podsumowaniem: ‘Zgodnie z naszą rozmową wdrażam opcję X’”.', rationale: 'Uniemożliwia wyparcie się ustaleń i chroni integralność pracownika.' }
    ]
  },
  keyTakeaway: 'Najlepszą tarczą przeciwko manipulacji, kłamstwu i podważaniu Twojej wartości są twarde, spokojnie przedstawione fakty. Nie musisz krzyczeć, gdy masz rację zapisaną czarno na białym.'
};

export const chapterThirtyExerciseAssertivenessLab: SelfExercise = {
  id: 'ex-ch30-assertiveness-lab',
  title: 'Wielki Trening Asertywności: Laboratorium Transformacji Komunikacyjnej',
  subtitle: 'Praktyczny trening przepisywania skryptów rozmów i budowania komunikatów JA w 4 kluczowych obszarach życia',
  objective: 'Opanowanie umiejętności natychmiastowej zamiany reakcji uległej lub agresywnej na precyzyjny, asertywny komunikat.',
  durationMinutes: 30,
  neuroScientificFoundation: 'Aktywne ćwiczenie nowych ścieżek językowych tworzy trwałe połączenia synaptyczne w obszarze Broki i lewej kory przedczołowej.',
  steps: [
    {
      stepNumber: 1,
      title: 'Scenariusz 1: Znajomy notorycznie spóźnia się na spotkania o 30 minut',
      instruction: 'Przekształć wersję uległą („Nic się nie stało, poczekam...”) i agresywną („Jesteś bezczelnym egoistą!”) w wersję asertywną.',
      promptText: 'Mój asertywny komunikat (Scenariusz 1):',
      placeholder: '„Kiedy spóźniasz się 30 minut bez uprzedzenia, czuję zniecierpliwienie i brak szacunku dla mojego czasu. Czekam maksymalnie 15 minut, po czym ruszam do swoich spraw”.'
    },
    {
      stepNumber: 2,
      title: 'Scenariusz 2: Rodzina krytykuje Twoją decyzję o zmianie pracy',
      instruction: 'Zastosuj technikę Zamgławiania (Fogging) połączoną z asertywnym prawem do decydowania o sobie.',
      promptText: 'Mój asertywny komunikat (Scenariusz 2):',
      placeholder: '„Rozumiem waszą troskę i to, że nowa praca wiąże się z ryzykiem. Jednak to jest moja przemyślana decyzja i biorę za nią pełną odpowiedzialność”.'
    },
    {
      stepNumber: 3,
      title: 'Scenariusz 3: Współpracownik zrzuca na Ciebie swoje zadanie przed weekendem',
      instruction: 'Zastosuj Czystą Odmowę z Techniką Zdartej Płyty (bez tłumaczenia się i przepraszania).',
      promptText: 'Mój asertywny komunikat (Scenariusz 3):',
      placeholder: '„Doceniam, że jesteś w trudnej sytuacji, jednak dziś o 16:00 kończę pracę i nie przejmę tego zadania”.'
    },
    {
      stepNumber: 4,
      title: 'Scenariusz 4: Osobisty Audyt 5 Praw Asertywności Smitha',
      instruction: 'Wybierz jedno prawo, którego najbardziej odmawiałeś sobie w przeszłości (prawo do błędu, prawo do niewiedzy, prawo do odmowy, prawo do zmiany zdania, prawo do nielogiczności) i napisz swoją osobistą deklarację suwerenności.',
      promptText: 'Moja Deklaracja Suwerenności Asertywnej:',
      placeholder: '„Mam pełne prawo do popełniania błędów i ponoszenia za nie odpowiedzialności bez konieczności czucia się gorszym człowiekiem”.'
    }
  ],
  reflectionQuestions: [
    'Jakie to uczucie stanąć po swojej stronie z pełnym szacunkiem dla drugiego człowieka?',
    'W jakiej jednej, konkretnej rozmowie w tym tygodniu zastosujesz swój nowy asertywny skrypt?'
  ]
};

export const chapterThirty: Chapter = {
  number: 30,
  volume: 3,
  volumeChapterNumber: 14,
  title: 'Rozdział 30: Asertywność — Sztuka Komunikacji w Zgodzie ze Sobą, Wyrażanie Granic i Spójność Działania',
  subtitle: 'Od obrony własnych praw i kanonu Manuela Smitha do mistrzowskich technik komunikacji bezprzemocowej, radzenia sobie z krytyką i pełnej integracji dzieła',
  leadParagraph: 'Asertywność jest ukoronowaniem całej drogi, jaką przeszedłeś przez 30 rozdziałów tej książki. Nie jest to zbiór sprytnych trików retorycznych ani technika wygrywania sprzeczek przy niedzielnym obiedzie. Prawdziwa asertywność to głęboka, dojrzała postawa egzystencjalna — to stan, w którym znasz swoją wartość, szanujesz swoje granice, potrafisz otwarcie i bez lęku wyrażać swoje myśli oraz dajesz dokładnie takie samo prawo każdemu drugiemu człowiekowi. W tym finałowym rozdziale zbadamy 30 filarów dojrzałej asertywności: odróżnimy ją od agresji i uległości, zdekodujemy Kanon Praw Asertywności, opanujesz techniki zamgławiania, komunikatu JA, zdartej płyty i deeskalacji konfliktów oraz połączymy całą wiedzę Tomu I, II i III w jeden zintegrowany, potężny system samokształtowania człowieka.',
  totalEstimatedPages: 102,
  sections: [
    // BLOK I — ZROZUMIENIE ASERTYWNOŚCI (30.1 - 30.5)
    {
      id: 'sec-30-1',
      pageNumber: 1160,
      sectionNumber: '30.1',
      title: 'Czym jest asertywność? Filozofia „Ja jestem OK — Ty jesteś OK”, godność i odwaga cywilna',
      category: 'wstep',
      readingTimeMinutes: 15,
      quote: {
        text: 'Asertywność nie polega na tym, by mieć rację. Polega na tym, by mieć odwagę stanąć po swojej stronie bez potrzeby deptania praw innych.',
        author: 'Manuel J. Smith'
      },
      paragraphs: [
        'W potocznym rozumieniu asertywność bywa często wypaczana i mylona z bezwzględnością, arogancją lub umiejętnością twardego odmawiania w każdej sytuacji. W rzeczywistości asertywność jest jedną z najbardziej szlachetnych i wymagających form dojrzałości psychologicznej, jaką człowiek może wypracować.',
        'Jej fundamentem jest filozoficzna postawa opisana w analizie transakcyjnej przez Thomasa Harrisa: „Ja jestem OK — Ty jesteś OK”. Oznacza to głębokie przekonanie, że moje potrzeby, emocje, prawa i granice są ważne i godne szacunku — i dokładnie tak samo ważne i godne szacunku są potrzeby, emocje, prawa i granice drugiego człowieka.',
        'Asertywność to złoty środek między uległością (gdzie rezygnujesz ze swoich praw, by przypodobać się innym) a agresją (gdzie wymuszasz swoje prawa, raniąc i poniżając innych).',
        'To odwaga bycia autentycznym w świecie, który nieustannie wywiera presję na uległość lub walkę.'
      ]
    },
    {
      id: 'sec-30-2',
      pageNumber: 1164,
      sectionNumber: '30.2',
      title: 'Asertywność a agresja — Siła spokoju kontra przemoc, dominacja i narzucanie woli',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Człowiek agresywny dąży do dominacji. Postrzega świat jako arenę walki o sumie zerowej: „Albo ja ciebie zniszczę, albo ty zniszczysz mnie”. Agresja posługuje się krzykiem, sarkazmem, etykietowaniem, przerwaniem wypowiedzi, szantażem i zastraszaniem.',
        'Paradoksalnie, agresja nie jest dowodem siły — jest najbardziej jaskrawym przejawem ukrytego lęku, poczucia zagrożenia i bezsilności poznawczej. Agresor krzyczy, ponieważ nie wierzy, że jego spokojne słowo może mieć jakąkolwiek wagę.',
        'Asertywność nie potrzebuje krzyku. Człowiek asertywny mówi cicho, spokojnie i precyzyjnie. Jego siła leży w nieugiętej pewności własnych praw i gotowości do ponoszenia konsekwencji swoich wyborów.'
      ]
    },
    {
      id: 'sec-30-3',
      pageNumber: 1168,
      sectionNumber: '30.3',
      title: 'Asertywność a uległość — Cena pozornego pokoju, tłumiona złość i autodestrukcja',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Postawa uległa opiera się na założeniu: „Ty jesteś ważny — ja jestem nieważny”. Osoba uległa milczy, gdy łamane są jej prawa, zgadza się na niechciane zadania, przeprasza za to, że żyje i nieustannie kłania się oczekiwaniom otoczenia.',
        'Cena uległości jest jednak niszczycielska. Tłumiona złość i żal nie znikają — zamieniają się w autoagresję, depresję, migreny, nerwice żołądkowe oraz skrajne poczucie bezwartościowości.',
        'Ponadto uległość demoralizuje otoczenie: uczysz innych ludzi, że mogą bezkarnie po Tobie deptać, co prowadzi do nieuchronnego rozpadu relacji.'
      ]
    },
    {
      id: 'sec-30-4',
      pageNumber: 1172,
      sectionNumber: '30.4',
      title: 'Asertywność a bierność — Prokrastynacja relacyjna, milczenie i unikanie odpowiedzialności',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Bierność w relacjach to strategia udawania, że problem nie istnieje. Osoba bierna nie mówi „tak”, nie mówi „nie”, lecz dryfuje z prądem zdarzeń, licząc na to, że czas rozwiąże konflikt za nią.',
        'Bierność jest formą ucieczki przed odpowiedzialnością. Pozwala zachować fałszywe poczucie czystości rąk („ja nic nie zrobiłem, to oni tak zdecydowali”), lecz odbiera człowiekowi wszelkie poczucie sprawstwa i kontroli nad własnym losem.',
        'Asertywność wymaga aktywnego zajęcia stanowiska: nawet jeśli sytuacja jest trudna i niejednoznaczna, człowiek asertywny wchodzi w dialog i współtworzy rzeczywistość.'
      ]
    },
    {
      id: 'sec-30-5',
      pageNumber: 1176,
      sectionNumber: '30.5',
      title: 'Ćwiczenie Praktyczne — Rozpoznawanie Stylu Komunikacji w 4 Sytuacjach Codziennych',
      category: 'cwiczenia',
      readingTimeMinutes: 18,
      paragraphs: [
        'Rozpoznaj, który styl reprezentują poniższe wypowiedzi (Uległy, Agresywny, Bierny, Asertywny):',
        'SYTUACJA 1: Ktoś wpycha się przed Ciebie w kolejce w sklepie.',
        'A: „Przepraszam... no trudno...” [Styl Uległy].',
        'B: „Gdzie się pchasz, ślepy jesteś czy bezczelny?!” [Styl Agresywny].',
        'C: (Ciche wzdychanie i przewracanie oczami bez słowa) [Styl Bierny/Bierno-agresywny].',
        'D: „Przepraszam, koniec kolejki znajduje się za mną. Proszę stanąć na końcu” [Styl Asertywny].',
        'ZADANIE: Zapisz w swoim dzienniku, w których relacjach (z partnerem, szefem, rodzicami) najczęściej osuwasz się w uległość, a w których w agresję.'
      ]
    },

    // BLOK II — PRAWA I POTRZEBY (30.6 - 30.10)
    {
      id: 'sec-30-6',
      pageNumber: 1180,
      sectionNumber: '30.6',
      title: 'Prawo do własnego zdania — Różnica zdań bez lęku przed odrzuceniem i konformizmem',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Masz pełne, niezbywalne prawo do posiadania własnych opinii, gustów, przekonań politycznych, filozoficznych i życiowych — nawet jeśli 99% ludzi w Twoim otoczeniu uważa zupełnie inaczej.',
        'Nie masz obowiązku dostosowywać swoich poglądów do grupy tylko po to, by zyskać chwilową aprobatę. Odwaga do powiedzenia: „Rozumiem wasze stanowisko, ale ja widzę tę sprawę inaczej” jest fundamentem niezależności intelektualnej.',
        'Prawdziwa wspólnota nie wymaga jednomyślności — wymaga wzajemnego szacunku dla różnorodności myśli.'
      ]
    },
    {
      id: 'sec-30-7',
      pageNumber: 1184,
      sectionNumber: '30.7',
      title: 'Prawo do odmowy — Dlaczego „nie” jest kompletnym zdaniem chroniącym integralność',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Kanon Praw Asertywności jednoznacznie stwierdza: masz prawo powiedzieć „nie” bez poczucia winy i bez konieczności przedstawiania usprawiedliwień.',
        'Odmowa nie jest atakiem na drugiego człowieka — jest odmową wykonania konkretnej czynności. Twoje zasoby są ograniczone i masz moralne prawo decydować, na co przeznaczasz swoje życie.',
        'Osoby dojrzałe przyjmują odmowę z szacunkiem; osoby manipulujące obrażają się. Twoje „nie” pozwala natychmiast rozpoznać, z kim masz do czynienia.'
      ]
    },
    {
      id: 'sec-30-8',
      pageNumber: 1188,
      sectionNumber: '30.8',
      title: 'Prawo do własnych potrzeb — Legitymizacja odpoczynku, samotności i osobistych celów',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Masz prawo stawiać swoje fundamentalne potrzeby (zdrowie, sen, spokój psychiczny, rozwój osobisty) na pierwszym miejscu bez bycia nazywanym „egoistą”.',
        'Istnieje zasadnicza różnica między ZDROWYM EGOIZMEM (dbaniem o własne zasoby, aby móc funkcjonować i wspierać innych) a EGOCENTRYZMEM (wykorzystywaniem innych do własnych celów).',
        'Z pustego dzbana nikt się nie napije. Jeśli sam nie zadbasz o napełnienie własnego dzbana energią, nie będziesz miał nic do zaoferowania światu.'
      ]
    },
    {
      id: 'sec-30-9',
      pageNumber: 1192,
      sectionNumber: '30.9',
      title: 'Prawo do popełniania błędów — Przełamanie perfekcjonizmu, odpowiedzialność za pomyłki i pokora',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Manuel Smith podkreślał: masz prawo popełniać błędy — i ponosić za nie pełną odpowiedzialność. Nie musisz być doskonały, by zasługiwać na szacunek i miłość.',
        'Wielu ludzi żyje w paraliżującym lęku przed wpadką, co zmusza ich do ukrywania pomyłek, kłamstw i obwiniania innych. Taka postawa niszczy zaufanie.',
        'Człowiek asertywny potrafi bez wstydu i lęku powiedzieć: „Popełniłem błąd w tym raporcie. Przepraszam za zamieszanie, naprawię to do jutra do 12:00”. Taka postawa buduje potężny autorytet.'
      ]
    },
    {
      id: 'sec-30-10',
      pageNumber: 1196,
      sectionNumber: '30.10',
      title: 'Ćwiczenie Praktyczne — Moje Prawa w Komunikacji: Osobisty Dekalog Suwerenności',
      category: 'cwiczenia',
      readingTimeMinutes: 18,
      paragraphs: [
        'Przeczytaj uważnie 5 Fundamentalnych Praw Asertywności Manuela J. Smitha i wybierz to, które najtrudniej przychodzi Ci wdrożyć:',
        '1. Masz prawo do samodzielnej oceny własnego zachowania, myśli i emocji oraz ponoszenia odpowiedzialności za ich skutki.',
        '2. Masz prawo nie tłumaczyć się i nie usprawiedliwiać swojego zachowania przed innymi.',
        '3. Masz prawo do zmiany zdania.',
        '4. Masz prawo do popełniania błędów i ponoszenia za nie odpowiedzialności.',
        '5. Masz prawo powiedzieć: „Nie wiem”, „Nie rozumiem”, „Nie zależy mi na tym”.',
        'Napisz krótki esej refleksyjny: Kto w Twoim otoczeniu próbuje odbierać Ci te prawa i jak odpowiesz mu przy następnej rozmowie?'
      ]
    },

    // BLOK III — JĘZYK ASERTYWNY (30.11 - 30.15)
    {
      id: 'sec-30-11',
      pageNumber: 1200,
      sectionNumber: '30.11',
      title: 'Komunikat „JA” — Anatomia języka odpowiedzialności i deeskalacji obrony rozmówcy',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Komunikat „JA” (I-statement) to najważniejsze narzędzie gramatyczne asertywności. Zastępuje on oskarżycielskie komunikaty typu „TY” („Ty zawsze mnie lekceważysz!”) językiem opisu faktów i własnych stanów wewnętrznych.',
        'Struktura komunikatu „JA” składa się z czterech elementów: 1. FAKT: „Kiedy zdarza się [konkretne zachowanie]...” 2. EMOCJA: „...czuję [nazwa emocji]...” 3. KONSEKWENCJA: „...ponieważ [wpływ na mnie]...” 4. OCZEKIWANIE: „...dlatego proszę / oczekuję [konkretna zmiana]”.',
        'Taki komunikat nie atakuje tożsamości rozmówcy, dzięki czemu nie uruchamia w jego mózgu odruchowej reakcji obronnej ciała migdałowatego.'
      ]
    },
    {
      id: 'sec-30-12',
      pageNumber: 1204,
      sectionNumber: '30.12',
      title: 'Jak mówić konkretnie? Eliminacja kwantyfikatorów wielkich („zawsze”, „nigdy”) i język kamery wideo',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Najszybszym sposobem na wywołanie awantury w relacji jest użycie kwantyfikatorów wielkich: „Ty ZAWSZE się spóźniasz!”, „NIGDY mnie nie słuchasz!”, „Wszyscy wiedzą, jaki jesteś!”.',
        'Mózg rozmówcy natychmiast znajduje jeden wyjątek z przeszłości („To nieprawda, w zeszły wtorek byłem na czas!”) i cała rozmowa zbacza na jałowy spór o definicje, zamiast rozwiązać problem.',
        'Mów precyzyjnie jak kamera wideo: „Dziś spóźniłeś się 20 minut na spotkanie”. Z faktami się nie dyskutuje.'
      ]
    },
    {
      id: 'sec-30-13',
      pageNumber: 1208,
      sectionNumber: '30.13',
      title: 'Jak mówić o emocjach? Nazywanie afektu bez oskarżeń i rola Affect Labeling w neuronauce',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Wielu ludzi unika mówienia o emocjach, obawiając się, że wyjdą na słabych lub przewrażliwionych. Neuronauka wykazuje zjawisko odwrotne: werbalne nazwanie emocji (affect labeling) drastycznie obniża pobudzenie ciała migdałowatego i przywraca kontrolę kory przedczołowej.',
        'Mówienie o emocjach w sposób asertywny nie polega na histerycznym wybuchu, lecz na chłodnym nazwaniu stanu: „Czuję złość”, „Czuję bezradność”, „Czuję głębokie rozczarowanie”.',
        'Uczucia są faktami psychologicznymi — nikt nie może powiedzieć Ci: „Wcale tego nie czujesz”.'
      ]
    },
    {
      id: 'sec-30-14',
      pageNumber: 1212,
      sectionNumber: '30.14',
      title: 'Jak wyrażać krytykę? Model FUKO (Fakty, Uczucia, Konsekwencje, Oczekiwania) vs fałszywa kanapka',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Popularna niegdyś „metoda kanapki” (pochwała – krytyka – pochwała) jest dziś uznawana za manipulacyjną i nieskuteczną. Pracownicy szybko uczą się ignorować pochwały, czekając z niepokojem na „ale...”.',
        'Nowoczesnym standardem jest model FUKO: 1. FAKTY (opis bez oceny), 2. UCZUCIA (mój stan afektywny), 3. KONSEKWENCJE (realny wpływ błędu na zespół lub proces), 4. OCZEKIWANIA (jasne zdefiniowanie pożądanego standardu na przyszłość).',
        'Krytyka FUKO jest podawana w cztery oczy, z szacunkiem i z orientacją na rozwiązanie problemu, a nie na upokorzenie pracownika.'
      ]
    },
    {
      id: 'sec-30-15',
      pageNumber: 1216,
      sectionNumber: '30.15',
      title: 'Jak przyjmować krytykę? Technika Zamgławiania (Fogging), dopytywanie i oddzielanie faktów od ocen',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Gdy ktoś Cię krytykuje, naturalnym odruchem jest kontratak lub paniczna obrona. Asertywność proponuje techniki oparte na jujitsu psychologicznym: ZAMGŁAWIANIE (Fogging) oraz DOPYTYWANIE.',
        'ZAMGŁAWIANIE polega na spokojnym zgodzeniu się z tą częścią krytyki, która jest prawdziwa lub prawdopodobna, bez przyjmowania złośliwych uogólnień. Jeśli szef mówi: „Spóźniłeś się z raportem, jesteś kompletnie nieodpowiedzialny!”, odpowiadasz: „Zgadzam się, spóźniłem się z raportem o 2 godziny [fakt]. Nie zgadzam się z opinią, że jestem nieodpowiedzialny [ocena]”.',
        'DOPYTYWANIE polega na poproszeniu o szczegóły: „Co konkretnie w moim zachowaniu sprawiło, że tak uważasz?”. To zmusza krytykującego do zejścia na poziom faktów i rozbraja emocjonalny atak.'
      ]
    },

    // BLOK IV — ASERTYWNOŚĆ POD PRESJĄ (30.16 - 30.20)
    {
      id: 'sec-30-16',
      pageNumber: 1220,
      sectionNumber: '30.16',
      title: 'Co robić, gdy ktoś naciska? Odmowa stopniowana, bufor czasowy i utrzymanie granic',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'W obliczu agresywnego nacisku czasowego („Musisz podjąć decyzję teraz, zaraz okazja przepadnie!”) pierwszym krokiem człowieka asertywnego jest natychmiastowe spowolnienie tempa.',
        'Zastosuj bufor czasowy: „Zasada, którą stosuję, nie pozwala mi podejmować takich decyzji pod presją. Odpowiem ci jutro o 10:00”.',
        'Jeśli rozmówca nalega: „Albo teraz, albo wcale!”, asertywna odpowiedź brzmi: „W takim razie w tym momencie moja odpowiedź brzmi: nie”. Zawsze wybieraj kontrolę nad własnym procesem decyzyjnym.'
      ]
    },
    {
      id: 'sec-30-17',
      pageNumber: 1224,
      sectionNumber: '30.17',
      title: 'Powtarzanie komunikatu — Klaryfikacja, parafraza intencji rozmówcy i stanowczość',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Gdy rozmówca próbuje obejść Twoją odmowę, wspaniałą techniką jest połączenie empatii z niezłomnością: 1. Nazwij potrzebę rozmówcy („Słyszę, że bardzo zależy ci na szybkim załatwieniu tej sprawy”); 2. Ponów swoje stanowisko („Jednocześnie nie wezmę dziś nadgodzin”).',
        'Dzięki temu rozmówca czuje się usłyszany, co redukuje jego złość, ale jednocześnie nie uzyskuje ustępstwa w sprawie Twojej granicy.'
      ]
    },
    {
      id: 'sec-30-18',
      pageNumber: 1228,
      sectionNumber: '30.18',
      title: 'Technika zdartej płyty — Zasady stosowania, spokój fonacyjny i neutralizacja manipulacji',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Technika zdartej płyty (Broken Record) polega na spokojnym, monotonnym powtarzaniu tego samego zdania-odmowy bez wdawania się w dyskusje poboczne, usprawiedliwienia czy kontrataki.',
        'Każda próba wciągnięcia Cię w dyskusję przez rozmówcę („No ale dlaczego?”, „Inni się zgodzili!”, „Chyba mnie nie lubisz!”) jest kwitowana parafrazą i powtórzeniem zdania bazowego: „Rozumiem, że inni się zgodzili, jednak moja decyzja jest odmowna”.',
        'Kluczem do sukcesu jest zachowanie stałego, cichego tonu głosu i rozluźnionego ciała. Po 3–4 powtórzeniach manipulator rezygnuje, zdając sobie sprawę, że trafił na granitową ścianę spokoju.'
      ]
    },
    {
      id: 'sec-30-19',
      pageNumber: 1232,
      sectionNumber: '30.19',
      title: 'Reagowanie na prowokację — Pauza taktyczna, metakomunikat i odcięcie paliwa emocjonalnego',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Celem prowokacji jest wytrącenie Cię z równowagi, zmuszenie do wybuchu złości i przejęcie kontroli nad rozmową. Ktokolwiek doprowadza Cię do wściekłości, ten staje się Twoim panem.',
        'Odpowiedzią na prowokację jest METAKOMUNIKAT — przejście z poziomu treści na poziom procesu komunikacji: „Widzę, że próbujesz mnie sprowokować i podnosisz głos. W ten sposób nie będziemy rozmawiać. Porozmawiamy, gdy będziemy oboje spokojni”.',
        'Następnie natychmiast zamilknij lub wyjdź z pomieszczenia. Brak reakcji emocjonalnej jest dla prowokatora najcięższą porażką.'
      ]
    },
    {
      id: 'sec-30-20',
      pageNumber: 1236,
      sectionNumber: '30.20',
      title: 'Reagowanie na wzbudzanie poczucia winy — Demaskowanie szantażu FOG i zachowanie spokoju',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Gdy ktoś próbuje manipulować Twoim poczuciem winy („Przez ciebie znowu będę musiał siedzieć po godzinach!”, „Dobra córka by tak nie postąpiła!”), najważniejszą zasadą jest nieprzyjmowanie tego ładunku do swojego wnętrza.',
        'Nazwij mechanizm na głos z pełną życzliwością: „Przykro mi, że jesteś w trudnej sytuacji. Jednocześnie nie wyrażam zgody na obarczanie mnie odpowiedzialnością za Twoje wybory”.',
        'Oddziel empatię od uległości: możesz współczuć czyjemuś dyskomfortowi, nie zmieniając ani o milimetr swojej suwerennej decyzji.'
      ]
    },

    // BLOK V — ASERTYWNOŚĆ W PRAKTYCZNYCH SYTUACJACH (30.21 - 30.25)
    {
      id: 'sec-30-21',
      pageNumber: 1240,
      sectionNumber: '30.21',
      title: 'Asertywność wobec znajomego — Pieniądze, przysługi, zaproszenia i higiena relacji',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'W gronie znajomych asertywność jest niezbędna do utrzymania czystości relacji. Dotyczy to pożyczania pieniędzy, niechcianych wyjść towarzyskich, uczestnictwa w zbiórkach czy darmowych porad eksperckich.',
        'Masz pełne prawo odmówić pożyczki („Z zasady nie pożyczam pieniędzy znajomym, zależy mi na naszej relacji”) lub odmówić udziału w imprezie („Dziękuję za zaproszenie, ten weekend spędzam w domu odpoczywając”).',
        'Prawdziwi znajomi uszanują Twoje wybory; ludzie szukający darmowych korzyści szybko poszukają innej ofiary.'
      ]
    },
    {
      id: 'sec-30-22',
      pageNumber: 1244,
      sectionNumber: '30.22',
      title: 'Asertywność wobec rodziny — Szacunek bez uległości, tradycja kontra własna autonomia',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'W relacjach rodzinnych asertywność wymaga największego kunsztu. Chodzi o to, by zachować miłość i szacunek do rodziców, jednocześnie stanowczo broniąc granic własnej dorosłości.',
        'Nie pozwól na ingerowanie w Twój styl wychowania dzieci, Twoje wydatki czy Twoje wybory partnerskie. Formuła brzmi: „Dziękuję za radę, mamo. Razem z mężem podjęliśmy już decyzję w tej sprawie i prosimy o jej uszanowanie”.',
        'Dojrzałość rodzinna polega na przejściu z relacji Rodzic-Dziecko do relacji Dorosły-Dorosły.'
      ]
    },
    {
      id: 'sec-30-23',
      pageNumber: 1248,
      sectionNumber: '30.23',
      title: 'Asertywność w szkole i na uczelni — Odpowiedzi przed grupą, relacje z nauczycielami i presja rówieśnicza',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'W środowisku edukacyjnym młodzi ludzie nieustannie mierzą się z presją grupy (alkohol, używki, hejtowanie słabszych, ściąganie) oraz z trudnymi relacjami z kadrą pedagogiczną.',
        'Asertywność to odwaga powiedzenia grupie: „Nie, nie wezmę w tym udziału” oraz odwaga do kulturalnego dopytania wykładowcy o kryteria oceniania bez lęku i bez arogancji.',
        'Budowanie asertywności w wieku szkolnym i studenckim procentuje przez całe dorosłe życie zawodowe.'
      ]
    },
    {
      id: 'sec-30-24',
      pageNumber: 1252,
      sectionNumber: '30.24',
      title: 'Asertywność w pracy — Negocjacje wynagrodzenia, odmowa nadgodzin i obrona projektów',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W środowisku biznesowym asertywność jest kluczową kompetencją decydującą o sukcesie zawodowym i zdrowiu psychicznym. Obejmuje ona: negocjowanie podwyżek w oparciu o twarde dane rynkowe, odmawianie brania dodatkowych zadań bez poszerzenia budżetu lub czasu oraz asertywną obronę własnych koncepcji przed zarządem.',
        'Pracownicy asertywni są wyżej cenieni przez dojrzałych liderów niż potakujący konformiści — wnoszą bowiem do firmy realną wartość merytoryczną i stabilność operacyjną.',
        'Bądź twardy dla problemów i miękki dla ludzi — to złota zasada profesjonalnej asertywności.'
      ]
    },
    {
      id: 'sec-30-25',
      pageNumber: 1256,
      sectionNumber: '30.25',
      title: 'Asertywność w internecie — Komentarze, spory w social mediach, cyberprzemoc i higiena uwagi',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'W przestrzeni cyfrowej asertywność oznacza przede wszystkim umiejętność nieangażowania się w jałowe pyskówki i wojenki komentarzowe.',
        'Pamiętaj: nie masz obowiązku odpowiadać na każdy komentarz pod swoim postem ani prostować każdej nieprawdy w sieci. Twoja uwaga jest cenną walutą.',
        'Stosuj zasadę: 1 merytoryczna odpowiedź (jeśli rozmówca pyta w dobrej wierze), a w razie hejtu i trollingu — natychmiastowe wyciszenie lub zablokowanie bez wchodzenia w emocje.'
      ]
    },

    // BLOK VI — INTEGRACJA (30.26 - 30.30)
    {
      id: 'sec-30-26',
      pageNumber: 1260,
      sectionNumber: '30.26',
      title: 'Studium Przypadku — Osoba Uległa: Cena Wiecznego Milczenia Piotra',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      caseStudyRef: chapterThirtyCaseStudyUleglosc,
      paragraphs: [
        'W tym studium przypadku analizujemy dramat Piotra (30 lat), analityka danych, którego uległość doprowadziła do kradzieży jego autorskiego projektu przez dominującego kolegę z pokoju.',
        'Zapoznaj się ze szczegółową analizą mechanizmów bierności, dialogami oraz nowym, asertywnym skryptem obrony dorobku opisanym w interaktywnej karcie powyżej.'
      ]
    },
    {
      id: 'sec-30-27',
      pageNumber: 1266,
      sectionNumber: '30.27',
      title: 'Studium Przypadku — Osoba Reagująca Agresją: Płonące Mosty Kamila',
      category: 'studium-przypadku',
      readingTimeMinutes: 20,
      caseStudyRef: chapterThirtyCaseStudyAgresja,
      paragraphs: [
        'W drugim studium przypadku przyglądamy się Kamilowi — dyrektorowi operacyjnemu, który mylił autorytet z terrorem i agresją, niszcząc morale całego zakładu produkcyjnego.',
        'Zobacz, jak trening asertywnego przywództwa w oparciu o model FUKO uratował jego karierę i przywrócił zaufanie zespołu.'
      ]
    },
    {
      id: 'sec-30-28',
      pageNumber: 1272,
      sectionNumber: '30.28',
      title: 'Studium Przypadku — Konflikt i Granice: Karolina w Kleszczach Gaslightingu',
      category: 'studium-przypadku',
      readingTimeMinutes: 19,
      caseStudyRef: chapterThirtyCaseStudyKonfliktGranice,
      paragraphs: [
        'Trzecie studium przypadku ilustruje walkę Karoliny z subtelnym gaslightingiem przełożonej za pomocą twardych faktów i techniki Paper Trail.',
        'Przeanalizuj, w jaki sposób zachowanie żelaznego spokoju i odwołanie się do dokumentacji rozbraja każdą próbę manipulacji pamięcią.'
      ]
    },
    {
      id: 'sec-30-29',
      pageNumber: 1278,
      sectionNumber: '30.29',
      title: 'Wielki Trening Asertywności — Laboratorium Transformacji Komunikacyjnej',
      category: 'cwiczenia',
      readingTimeMinutes: 22,
      exerciseRef: chapterThirtyExerciseAssertivenessLab,
      paragraphs: [
        'Wykonaj kompleksowy trening asertywności w 4 scenariuszach życiowych (znajomi, rodzina, praca, audyt praw Smitha), korzystając z interaktywnego formularza ćwiczenia 30.1 powyżej.',
        'Przepisz swoje stare reakcje uległe lub agresywne na czyste, pewne komunikaty JA.'
      ]
    },
    {
      id: 'sec-30-30',
      pageNumber: 1284,
      sectionNumber: '30.30',
      title: 'Wielkie Podsumowanie Dzieła — Integracja Tomu I, II i III oraz Architektura Samoświadomego Człowieka',
      category: 'podsumowanie',
      readingTimeMinutes: 24,
      quote: {
        text: 'Poznanie samego siebie to dopiero początek. Prawdziwym celem jest świadome ukształtowanie siebie i swojego miejsca w świecie.',
        author: 'Synteza Dzieła'
      },
      paragraphs: [
        'WIELKA SYNTEZA TRZECH TOMÓW:',
        '• TOM I (Jak działa umysł?): Odkryliśmy neurobiologiczną architekturę percepcji, uwagi, pamięci, emocji i procesów myślenia. Zrozumiałeś, że nie jesteś bezwolnym niewolnikiem swoich impulsów, lecz plastycznym systemem poznawczym.',
        '• TOM II (Jak człowiek funkcjonuje wśród innych ludzi?): Zbadaliśmy dynamikę wpływu społecznego, perswazji, relacji, konformizmu i manipulacji. Nauczyłeś się widzieć niewidzialne siły kształtujące zachowania w grupach.',
        '• TOM III (Jak człowiek kształtuje siebie i swoje zachowanie?): W finałowej części przeszliśmy przez nawyki, motywację, odporność psychiczną, podejmowanie decyzji (Rozdział 28), stawianie zdrowych granic (Rozdział 29) aż po dojrzałą asertywność (Rozdział 30).',
        'SŁOWNIK KLUCZOWYCH POJĘĆ ROZDZIAŁU 30:',
        '• ASERTYWNOŚĆ — bezpośrednie, uczciwe wyrażanie siebie z pełnym poszanowaniem godności innych („Ja OK — Ty OK”).',
        '• KOMUNIKAT „JA” — struktura: Fakt + Emocja + Konsekwencja + Oczekiwanie.',
        '• MODEL FUKO — Fakty, Uczucia, Konsekwencje, Oczekiwania w konstruktywnej krytyce.',
        '• ZAMGŁAWIANIE (Fogging) — zgoda z prawdziwą częścią krytyki przy odrzuceniu złośliwej oceny.',
        '• TECHNIKA ZDARTEJ PŁYTY — monotonne powtarzanie jasnego stanowiska w obliczu manipulacyjnego nacisku.',
        'ZAKOŃCZENIE KSIĄŻKI: Wiedza, którą zdobyłeś na kartach tej książki, nie jest martwą teorią akademicką. Jest Twoim kompasem i tarczą na całe dorosłe życie. Używaj jej z mądrością, odwagą i empatią.'
      ]
    }
  ]
};
