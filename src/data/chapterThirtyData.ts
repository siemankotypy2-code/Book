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
    { speaker: 'Dominik (protekcjonalnie)', text: 'Piotrek, daj ten kod, ja go ładnie opakuję i pokażę szefom, ty przecież nie lubisz wystąpień publicznych.', subtext: 'Paternalistyczna manipulacja i kradzież dorobku pod pozorem pomocy.' },
    { speaker: 'Piotr (wersja uległa — przed zmianą)', text: 'No dobra... ale wspomnij o mnie chociaż jednym słowem, dobrze?', subtext: 'Kapitulacja i oddanie pełnej władzy manipulatorowi.' },
    { speaker: 'Piotr (wersja agresywna — nieskuteczna)', text: 'Odpierdol się od mojego projektu, ty złodzieju! Zawsze tylko żerujesz na innych!', subtext: 'Wybuch furii skutkujący naganą dyscyplinarną za wulgaryzmy.' },
    { speaker: 'Piotr (wersja asertywna — skuteczna)', text: 'Dominik, doceniam twoją gotowość do wystąpienia, jednak to jest mój autorski projekt i to ja zaprezentuję go zarządowi.', subtext: 'Jasna, spokojna i niepodważalna deklaracja autorstwa.' }
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
  dialogue: [
    { speaker: 'Kamil (krzyk, purpura na twarzy)', text: 'Idioci! Nic bez was nie potrafię zrobić! Wszyscy wylecicie!', subtext: 'Reakcja agresywna maskująca bezradność i paniczny lęk przed zarządem.' },
    { speaker: 'Kamil (po treningu FUKO)', text: 'Mamy 48h opóźnienia. Jestem zaniepokojony. Oczekuję planu naprawczego do 14:00. Jak mogę pomóc?', subtext: 'Spokojna, twarda dla problemu i szanująca człowieka asertywność.' }
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
  neuroScientificFoundation: 'Aktywne ćwiczenie nowych ścieżek językowych tworzy trwałe połączenia synaptyczne w ośrodku Broki i lewej korze przedczołowej.',
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
  totalEstimatedPages: 115,
  sections: [
    // BLOK I — ZROZUMIENIE ASERTYWNOŚCI (30.1 - 30.5)
    {
      id: 'sec-30-1',
      pageNumber: 1160,
      sectionNumber: '30.1',
      title: 'Czym jest asertywność? Filozofia „Ja jestem OK — Ty jesteś OK”, godność i odwaga cywilna',
      category: 'wstep',
      readingTimeMinutes: 16,
      quote: {
        text: 'Asertywność nie polega na tym, by mieć rację. Polega na tym, by mieć odwagę stanąć po swojej stronie bez potrzeby deptania praw innych.',
        author: 'Manuel J. Smith'
      },
      paragraphs: [
        'W potocznym dyskursie asertywność bywa rażąco spłycana i mylona z bezwzględnością, arogancją lub umiejętnością „twardego odmawiania” w każdej sytuacji. W rzeczywistości asertywność jest jedną z najbardziej szlachetnych, wymagających i dojrzałych postaw psychologicznych, jakie człowiek może w sobie ukształtować.',
        'Jej fundamentem jest filozoficzna postawa opisana w analizie transakcyjnej przez Thomasa Harrisa: „Ja jestem OK — Ty jesteś OK”. Oznacza to głębokie, niezachwiane przekonanie, że moje potrzeby, emocje, myśli, wartości i granice są ważne i godne szacunku — i dokładnie tak samo ważne i godne szacunku są potrzeby, emocje, myśli, wartości i granice każdego drugiego człowieka.',
        'Asertywność to złoty środek między ULEGŁOŚCIĄ (gdzie uznajesz: „Ty jesteś OK — Ja nie jestem OK” i rezygnujesz ze swoich praw, by zadowolić innych) a AGRESJĄ (gdzie uznajesz: „Ja jestem OK — Ty nie jesteś OK” i wymuszasz swoje prawa przemocą, upokarzając rozmówcę).',
        'To odwaga bycia autentycznym w świecie, który nieustannie wywiera presję na konformistyczną uległość lub barbarzyńską walkę.'
      ],
      subsections: [
        {
          title: 'Asertywność to nie zestaw trików',
          paragraphs: [
            'Jeśli nauczysz się samych formułek językowych, ale w środku będziesz czuć się gorszy lub będziesz pragnąć zemsty, rozmówca natychmiast wyczuje Twój fałsz w tonie głosu i mikrogrymasach twarzy.',
            'Prawdziwa asertywność zaczyna się w Twojej relacji z samym sobą — w głębokiej zgodzie na własną niedoskonałość i w poczuciu niezbywalnej godności ludzkiej.'
          ],
          highlightBox: {
            title: 'Filozofia Harrisowska',
            content: 'Postawa asertywna to jedyna relacja symetryczna: stajesz przed drugim człowiekiem jak równy z równym — bez klękania i bez wywyższania się.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-30-2',
      pageNumber: 1164,
      sectionNumber: '30.2',
      title: 'Asertywność a agresja — Siła spokoju kontra przemoc, dominacja i narzucanie woli',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Człowiek agresywny dąży do dominacji. Postrzega każdą rozmowę jako wojnę o sumie zerowej: „Albo ja ciebie zniszczę i narzucę swoje zdanie, albo ty zrobisz to ze mną”. Agresja posługuje się krzykiem, przerwaniem wypowiedzi, sarkazmem, wulgaryzmami, groźbami i manipulacją.',
        'Wielu ludzi myli agresję z siłą i zdecydowaniem. W rzeczywistości agresja jest najbardziej jaskrawym dowodem skrajnej bezsilności emocjonalnej i panicznego lęku przed utratą kontroli. Agresor krzyczy, ponieważ podświadomie nie wierzy, że jego spokojne słowo może mieć jakąkolwiek wagę.',
        'Asertywność nie potrzebuje podnoszenia głosu ani prężenia muskułów. Człowiek asertywny mówi cicho, spokojnie, precyzyjnie i powoli. Jego siła wypływa z nieugiętej pewności własnych praw oraz gotowości do poniesienia pełnej odpowiedzialności za swoje wybory.',
        'Bądź twardy dla problemu i miękki dla człowieka — to fundament dojrzałej asertywności.'
      ]
    },
    {
      id: 'sec-30-3',
      pageNumber: 1168,
      sectionNumber: '30.3',
      title: 'Asertywność a uległość — Cena pozornego pokoju, tłumiona złość i autodestrukcja',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Postawa uległa opiera się na założeniu: „Twoje potrzeby są święte — moje nie mają żadnego znaczenia”. Osoba uległa milczy, gdy łamane są jej prawa, godzi się na niechciane nadgodziny, uśmiecha się, gdy ktoś ją obraża, i nieustannie przeprasza za to, że żyje.',
        'Cena takiego pozornego „świętego spokoju” jest niszczycielska dla całego organizmu. Tłumiona złość i żal nie znikają — zamieniają się w autoagresję, przewlekłą depresję, bezsenność, nerwice natręctw oraz skrajne poczucie bezwartościowości.',
        'Ponadto uległość demoralizuje otoczenie: uczysz innych ludzi, że mogą bezkarnie po Tobie deptać i traktować Cię jak darmowego wykonawcę swoich zadań. Zamiast szacunku, zyskujesz lekceważenie.',
        'Uległość nie jest cnotą — jest lękiem przebranym za dobroć.'
      ]
    },
    {
      id: 'sec-30-4',
      pageNumber: 1172,
      sectionNumber: '30.4',
      title: 'Asertywność a bierność — Prokrastynacja relacyjna, milczenie i unikanie odpowiedzialności',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Bierność (pasywność) w relacjach to strategia udawania, że konflikt nie istnieje. Osoba bierna nie mówi „tak”, nie mówi „nie”, lecz dryfuje z prądem zdarzeń, licząc na to, że czas, przypadek lub inni ludzie rozwiążą trudną sytuację za nią.',
        'Częstą odmianą bierności jest postawa bierno-agresywna (passive-aggressive): ciche dni, ostentacyjne wzdychanie, przewracanie oczami, celowe spóźnianie się i sabotowanie zadań zamiast otwartej rozmowy.',
        'Bierność pozwala zachować fałszywe poczucie „czystości rąk” („przecież ja nic złego nie powiedziałem”), lecz odbiera człowiekowi wszelkie poczucie sprawstwa i szacunku do samego siebie.',
        'Asertywność wymaga odwagi cywilnej: stanięcia twarzą w twarz z problemem i podjęcia otwartego, bezpośredniego dialogu.'
      ]
    },
    {
      id: 'sec-30-5',
      pageNumber: 1176,
      sectionNumber: '30.5',
      title: 'Ćwiczenie Praktyczne — Rozpoznawanie Stylu Komunikacji w 4 Sytuacjach Codziennych',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Przeanalizuj poniższe 4 sytuacje i przyporządkuj wypowiedzi do czterech stylów: Uległego, Agresywnego, Bierno-Agresywnego i Asertywnego:',
        'SYTUACJA: Ktoś wpycha się przed Ciebie w kolejce do kasy w markecie.',
        '• WERSJA A: „Przepraszam... no trudno, widocznie panu się spieszy...” [Styl Uległy].',
        '• WERSJA B: „Gdzie się pchasz, ślepy chamie?! Do okulisty idź!” [Styl Agresywny].',
        '• WERSJA C: (Głośne wzdychanie, stukanie stopą i komentowanie pod nosem: „Co za ludzie w tym kraju...”) [Styl Bierno-Agresywny].',
        '• WERSJA D: „Przepraszam, koniec kolejki znajduje się za mną. Proszę stanąć na końcu” [Styl Asertywny].',
        'ZADANIE: Wybierz jedną bliską relację (partner, rodzic, szef) i zapisz w dzienniku, w których momentach najczęściej osuwasz się w uległość, a w których w agresję.'
      ]
    },

    // BLOK II — PRAWA I POTRZEBY (30.6 - 30.10)
    {
      id: 'sec-30-6',
      pageNumber: 1180,
      sectionNumber: '30.6',
      title: 'Prawo do własnego zdania — Różnica zdań bez lęku przed odrzuceniem i konformizmem',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Masz pełne, niezbywalne prawo do posiadania własnych opinii, gustów, upodobań, przekonań politycznych, filozoficznych i życiowych — nawet jeśli 99% ludzi w Twoim otoczeniu uważa zupełnie inaczej.',
        'Nie masz żadnego moralnego ani społecznego obowiązku dostosowywać swoich poglądów do grupy tylko po to, by przypodobać się większości lub uniknąć chwilowego dyskomfortu.',
        'Odwaga do wypowiedzenia słów: „Rozumiem waszą perspektywę, ale ja widzę tę sprawę inaczej” jest fundamentem niezależności intelektualnej i suwerenności poznawczej.',
        'Dojrzała wspólnota nie polega na jednomyślności klonów — polega na wzajemnym szacunku dla różnorodności ludzkiego myślenia.'
      ]
    },
    {
      id: 'sec-30-7',
      pageNumber: 1184,
      sectionNumber: '30.7',
      title: 'Prawo do odmowy — Dlaczego „nie” jest kompletnym zdaniem chroniącym integralność',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Kanon Praw Asertywności jednoznacznie stwierdza: masz prawo powiedzieć „nie” bez poczucia winy, bez lęku przed odrzuceniem i bez konieczności składania raportu ze swojego życia.',
        'Odmowa nie jest atakiem na drugiego człowieka — jest odmową wykonania konkretnej czynności. Twoje zasoby czasu, energii i pieniędzy są skończone i masz pełne prawo decydować, w co je inwestujesz.',
        'Osoby dojrzałe przyjmują odmowę z szacunkiem; osoby manipulujące obrażają się. Twoje spokojne „nie” jest najszybszym testem dojrzałości Twoich relacji.'
      ]
    },
    {
      id: 'sec-30-8',
      pageNumber: 1188,
      sectionNumber: '30.8',
      title: 'Prawo do własnych potrzeb — Legitymizacja odpoczynku, samotności i osobistych celów',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Masz pełne prawo stawiać swoje fundamentalne potrzeby — zdrowie, sen, spokój psychiczny, rozwój pasji i samotność — na pierwszym miejscu bez obawy przed byciem nazwanym „egoistą”.',
        'NALEŻY ODRÓŻNIĆ ZDROWY EGOIZM OD EGOCENTRYZMU:',
        '• ZDROWY EGOIZM: dbanie o własne zasoby i napełnianie własnego dzbana energią, aby móc zdrowo żyć i wspierać innych.',
        '• EGOCENTRYZM: wykorzystywanie innych ludzi jako narzędzi do zaspokajania własnych zachcianek kosztem ich godności.',
        'Z pustego dzbana nikt się nie napije. Jeśli sam nie zadbasz o swoje potrzeby, wkrótce nie będziesz miał nic wartościowego do zaoferowania światu.'
      ]
    },
    {
      id: 'sec-30-9',
      pageNumber: 1192,
      sectionNumber: '30.9',
      title: 'Prawo do popełniania błędów — Przełamanie perfekcjonizmu, odpowiedzialność za pomyłki i pokora',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Manuel J. Smith w swoim klasycznym podręczniku asertywności sformułował fundamentalną zasadę: Masz prawo popełniać błędy — i ponosić za nie pełną odpowiedzialność.',
        'Wielu ludzi żyje w paraliżującym lęku przed jakąkolwiek pomyłką, co zmusza ich do ukrywania wpadek, kłamstw, zrzucania winy na podwładnych i chorobliwego perfekcjonizmu.',
        'Człowiek asertywny nie boi się prawdy o swojej omylności. Potrafi bez wstydu i lęku powiedzieć: „Myliłem się. W tym raporcie popełniłem błąd obliczeniowy. Przepraszam za zamieszanie, naprawię to do jutra do 12:00”.',
        'Taka postawa buduje potężny autorytet osobisty i rozbraja każdą próbę szantażu emocjonalnego.'
      ]
    },
    {
      id: 'sec-30-10',
      pageNumber: 1196,
      sectionNumber: '30.10',
      title: 'Ćwiczenie Praktyczne — Moje Prawa w Komunikacji: Osobisty Dekalog Suwerenności',
      category: 'cwiczenia',
      readingTimeMinutes: 20,
      paragraphs: [
        'Przeczytaj uważnie 5 Fundamentalnych Praw Asertywności Manuela J. Smitha i wybierz to, które najtrudniej przychodzi Ci wdrożyć w codziennym życiu:',
        '1. Masz prawo do samodzielnej oceny własnego zachowania, myśli i emocji oraz ponoszenia odpowiedzialności za ich skutki.',
        '2. Masz prawo nie tłumaczyć się i nie usprawiedliwiać swojego zachowania przed innymi.',
        '3. Masz prawo do zmiany zdania w świetle nowych faktów.',
        '4. Masz prawo do popełniania błędów i ponoszenia za nie odpowiedzialności.',
        '5. Masz prawo powiedzieć: „Nie wiem”, „Nie rozumiem”, „Nie zależy mi na tym”.',
        'ZADANIE: Napisz osobistą deklarację suwerenności: Wobec kogo (szefa, teściowej, znajomego) zaczniesz stosować to prawo od jutra?'
      ]
    },

    // BLOK III — JĘZYK ASERTYWNY (30.11 - 30.15)
    {
      id: 'sec-30-11',
      pageNumber: 1200,
      sectionNumber: '30.11',
      title: 'Komunikat „JA” — Anatomia języka odpowiedzialności i deeskalacji obrony rozmówcy',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Komunikat „JA” (I-statement) to najważniejsze gramatyczne narzędzie asertywności. Zastępuje on oskarżycielskie, agresywne komunikaty typu „TY” („Ty zawsze wszystko niszczysz!”, „Jesteś nieodpowiedzialny!”) językiem opisu faktów i własnych stanów wewnętrznych.',
        'STRUKTURA KOMUNIKATU „JA” SKŁADA SIĘ Z 4 CZĘŚCI:',
        '1. FAKT: „Kiedy zdarza się [konkretne zachowanie opisane okiem kamery]...”',
        '2. EMOCJA: „...czuję [nazwa emocji bez oskarżeń: złość, zaniepokojenie, bezradność]...”',
        '3. KONSEKWENCJA: „...ponieważ [realny wpływ tego faktu na mój czas/budżet/zdrowie]...”',
        '4. OCZEKIWANIE: „...dlatego oczekuję / proszę, aby [konkretna, mierzalna zmiana]”.',
        'Komunikat „JA” nie ocenia i nie etykietuje rozmówcy, dzięki czemu nie wywołuje w jego mózgu odruchowego oporu ciała migdałowatego i otwiera przestrzeń do porozumienia.'
      ]
    },
    {
      id: 'sec-30-12',
      pageNumber: 1204,
      sectionNumber: '30.12',
      title: 'Jak mówić konkretnie? Eliminacja kwantyfikatorów wielkich („zawsze”, „nigdy”) i język kamery wideo',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Najszybszym sposobem na wywołanie awantury i zablokowanie porozumienia jest użycie kwantyfikatorów wielkich: „Ty ZAWSZE się spóźniasz!”, „NIGDY mnie nie słuchasz!”, „WSZYSCY przez ciebie cierpią!”.',
        'Gdy mózg rozmówcy słyszy słowo „zawsze”, natychmiast przeszukuje pamięć i znajduje jeden wyjątek z przeszłości („To kłamstwo! W zeszły wtorek byłem 5 minut przed czasem!”). W ułamku sekundy cała rozmowa zbacza z rozwiązania problemu na jałowy spór o definicje i sprawiedliwość dziejową.',
        'ASERTACJA WYMAGA JĘZYKA KAMERY WIDEO: Kamera nie widzi „zawsze” ani „jesteś leniwy”. Kamera widzi twarde fakty: „Dziś spóźniłeś się 25 minut na spotkanie”. Z obiektywnymi faktami nikt nie jest w stanie dyskutować.'
      ]
    },
    {
      id: 'sec-30-13',
      pageNumber: 1208,
      sectionNumber: '30.13',
      title: 'Jak mówić o emocjach? Nazywanie afektu bez oskarżeń i rola Affect Labeling w neuronauce',
      category: 'neuronauka',
      readingTimeMinutes: 18,
      paragraphs: [
        'Wielu ludzi unika mówienia o swoich emocjach, obawiając się, że wyjdą na osoby słabe, przewrażliwione lub histeryczne. Neuronauka dowodzi zjawiska dokładnie odwrotnego: werbalne nazwanie emocji (affect labeling, Matthew Lieberman) drastycznie aktywuje prawą brzuszno-boczną korę przedczołową (rvlPFC), co wysyła potężny sygnał hamujący do ciała migdałowatego i obniża tętno u obu rozmówców.',
        'Mówienie o emocjach w sposób asertywny nie polega na dramatycznym wybuchu, lecz na chłodnym nazwaniu stanu: „Czuję złość”, „Czuję głębokie rozczarowanie”, „Czuję bezradność w tej sytuacji”.',
        'Twoje uczucia są faktami psychologicznymi — nikt nie ma prawa powiedzieć Ci: „Wcale tego nie czujesz”. Nazwanie emocji odbiera im niszczycielską siłę i pozwala przejść do rozwiązań.'
      ]
    },
    {
      id: 'sec-30-14',
      pageNumber: 1212,
      sectionNumber: '30.14',
      title: 'Jak wyrażać krytykę? Model FUKO (Fakty, Uczucia, Konsekwencje, Oczekiwania) vs fałszywa kanapka',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Popularna w podręcznikach zarządzania z lat 90. „metoda kanapki” (pochwała – krytyka – pochwała) jest dziś uznawana za manipulacyjną, nieszczerą i nieskuteczną. Pracownicy szybko uczą się ignorować wstępne pochwały, czekając z napięciem na niszczące „ale...”.',
        'NOWOCZESNYM STANDARDEM JEST MODEL FUKO:',
        '1. F — FAKTY: „Wczorajszy raport został przesłany 3 godziny po wyznaczonym terminie”.',
        '2. U — UCZUCIA: „Jestem zaniepokojony i poirytowany tą sytuacją”.',
        '3. K — KONSEKWENCJE: „Ponieważ zarząd musiał czekać na dane i opóźniło to decyzję budżetową”.',
        '4. O — OCZEKIWANIA: „Oczekuję, że kolejny raport zostanie przesłany w piątek do 12:00. W czym mogę ci pomóc, aby to zrealizować?”.',
        'Krytyka FUKO jest podawana w cztery oczy, ze spokojem i z pełnym szacunkiem dla godności pracownika.'
      ]
    },
    {
      id: 'sec-30-15',
      pageNumber: 1216,
      sectionNumber: '30.15',
      title: 'Jak przyjmować krytykę? Technika Zamgławiania (Fogging), dopytywanie i oddzielanie faktów od ocen',
      category: 'teoria',
      readingTimeMinutes: 19,
      paragraphs: [
        'Gdy ktoś Cię krytykuje, naturalnym odruchem układu limbicznego jest paniczny kontratak („Sam jesteś beznadziejny!”) lub załamanie i uległość. Asertywność proponuje techniki oparte na jujitsu komunikacyjnym: ZAMGŁAWIANIE (Fogging) oraz DOPYTYWANIE.',
        'ZAMGŁAWIANIE (Manuel Smith) polega na spokojnym zgodzeniu się z tą częścią krytyki, która jest prawdziwa lub prawdopodobna, bez przyjmowania złośliwych uogólnień i etykiet. Jeśli szef mówi: „Spóźniłeś się z raportem, jesteś kompletnie nieodpowiedzialny!”, odpowiadasz:',
        '„Zgadzam się, spóźniłem się z raportem o 2 godziny [FAKT]. Nie zgadzam się z opinią, że jestem nieodpowiedzialny [OCENA]”.',
        'DOPYTYWANIE polega na poproszeniu o szczegóły: „Co konkretnie w moim wystąpieniu sprawiło, że uznałeś je za mało przekonujące?”. To zmusza agresora do zejścia na poziom faktów i natychmiast rozbraja emocjonalny atak.'
      ]
    },

    // BLOK IV — ASERTYWNOŚĆ POD PRESJĄ (30.16 - 30.20)
    {
      id: 'sec-30-16',
      pageNumber: 1220,
      sectionNumber: '30.16',
      title: 'Co robić, gdy ktoś naciska? Odmowa stopniowana, bufor czasowy i utrzymanie granic',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W obliczu agresywnego nacisku czasowego („Musisz podpisać tę umowę teraz, za 10 minut oferta wygasa!”) pierwszym krokiem człowieka asertywnego jest natychmiastowe spowolnienie tempa interakcji.',
        'Zastosuj BUFOR CZASOWY: „Zasada, którą stosuję w życiu, nie pozwala mi podejmować decyzji finansowych pod presją czasu. Zapoznam się z dokumentem i dam odpowiedź jutro o 10:00”.',
        'Jeśli rozmówca nadal naciska: „Albo teraz, albo wcale!”, asertywna odpowiedź brzmi: „W takim razie w tym momencie moja odpowiedź brzmi: NIE”. Nigdy nie oddawaj kontroli nad własnym czasem.'
      ]
    },
    {
      id: 'sec-30-17',
      pageNumber: 1224,
      sectionNumber: '30.17',
      title: 'Powtarzanie komunikatu — Klaryfikacja, parafraza intencji rozmówcy i stanowczość',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Gdy rozmówca próbuje obejść Twoją odmowę, wspaniałą techniką jest połączenie empatii z niezłomnością:',
        '1. NAZWIJ POTRZEBĘ ROZMÓWCY (Parafraza): „Słyszę, jak bardzo zależy ci na szybkim załatwieniu tej sprawy...”.',
        '2. PONÓW SWOJE STANOWISKO (Twarda granica): „...jednocześnie moja decyzja o nieprzejmowaniu tego projektu pozostaje niezmienna”.',
        'Dzięki takiemu połączeniu rozmówca czuje się usłyszany i potraktowany poważnie, co gasi jego złość, ale jednocześnie nie uzyskuje żadnego ustępstwa w sprawie Twojej granicy.'
      ]
    },
    {
      id: 'sec-30-18',
      pageNumber: 1228,
      sectionNumber: '30.18',
      title: 'Technika zdartej płyty — Zasady stosowania, spokój fonacyjny i neutralizacja manipulacji',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Technika zdartej płyty (Broken Record) polega na spokojnym, monotonnym powtarzaniu tego samego zdania-odmowy bez wdawania się w dyskusje poboczne, usprawiedliwienia czy kontrataki.',
        'Każda próba wciągnięcia Cię w labirynt argumentacyjny przez rozmówcę („No ale dlaczego?”, „Inni się zgodzili!”, „Chyba mnie nie lubisz!”) jest kwitowana parafrazą i powtórzeniem zdania bazowego: „Rozumiem, że inni się zgodzili, jednak moja decyzja jest odmowna”.',
        'Kluczem do sukcesu jest zachowanie niezmiennego, cichego tonu głosu i rozluźnionego ciała. Po 3–4 powtórzeniach manipulator rezygnuje, zdając sobie sprawę, że trafił na granitową ścianę spokoju.'
      ]
    },
    {
      id: 'sec-30-19',
      pageNumber: 1232,
      sectionNumber: '30.19',
      title: 'Reagowanie na prowokację — Pauza taktyczna, metakomunikat i odcięcie paliwa emocjonalnego',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Jedynym celem prowokacji jest wytrącenie Cię z równowagi, zmuszenie do wybuchu złości i przejęcie kontroli nad rozmową. Ktokolwiek doprowadza Cię do wściekłości, ten staje się Twoim panem.',
        'ODPOWIEDZIĄ NA PROWOKACJĘ JEST METAKOMUNIKAT — przejście z poziomu treści na poziom procesu komunikacji:',
        '„Widzę, że próbujesz mnie sprowokować i podnosisz głos. W ten sposób nie będziemy rozmawiać. Wrócimy do tematu, gdy oboje będziemy spokojni”.',
        'Następnie natychmiast zamilknij lub wyjdź z pomieszczenia. Brak reakcji emocjonalnej jest dla prowokatora najcięższą klęską.'
      ]
    },
    {
      id: 'sec-30-20',
      pageNumber: 1236,
      sectionNumber: '30.20',
      title: 'Reagowanie na wzbudzanie poczucia winy — Demaskowanie szantażu FOG i zachowanie spokoju',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Gdy ktoś próbuje manipulować Twoim poczuciem winy („Przez ciebie będę musiał siedzieć po godzinach!”, „Dobra córka by tak nie postąpiła!”), najważniejszą zasadą jest nieprzyjmowanie tego ładunku do swojego wnętrza.',
        'Zdemaskuj mechanizm na głos z pełną życzliwością:',
        '„Przykro mi, że jesteś w trudnej sytuacji. Jednocześnie nie wyrażam zgody na obarczanie mnie odpowiedzialnością za Twoje wybory życiowe”.',
        'Oddziel empatię od uległości: możesz szczerze współczuć czyjemuś dyskomfortowi, nie zmieniając ani o milimetr swojej suwerennej decyzji.'
      ]
    },

    // BLOK V — ASERTYWNOŚĆ W PRAKTYCZNYCH SYTUACJACH (30.21 - 30.25)
    {
      id: 'sec-30-21',
      pageNumber: 1240,
      sectionNumber: '30.21',
      title: 'Asertywność wobec znajomego — Pieniądze, przysługi, zaproszenia i higiena relacji',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W gronie znajomych asertywność jest niezbędna do utrzymania czystości relacji. Dotyczy to pożyczania pieniędzy, niechcianych wyjść towarzyskich, uczestnictwa w zbiórkach czy darmowych porad eksperckich.',
        'DIALOG PORÓWNAWCZY (Prośba o pożyczkę 2000 zł):',
        '• WERSJA ULEGŁA: „No wiesz... sam nie mam za dużo, ale dobra, jakoś dam radę, tylko oddaj do pierwszego...” (potem 6 miesięcy stresu i niszczenia relacji).',
        '• WERSJA AGRESYWNA: „Co ty sobie myślisz, że jestem bankomatem?! Sam weź się do roboty!”.',
        '• WERSJA ASERTYWNA: „Rozumiem, że jesteś w trudnej sytuacji, jednak z zasady nie pożyczam pieniędzy znajomym. Zależy mi na naszej relacji i nie chcę wprowadzać napięć finansowych”.'
      ]
    },
    {
      id: 'sec-30-22',
      pageNumber: 1244,
      sectionNumber: '30.22',
      title: 'Asertywność wobec rodziny — Szacunek bez uległości, tradycja kontra własna autonomia',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'W relacjach rodzinnych asertywność wymaga największego kunsztu. Chodzi o to, by zachować miłość i szacunek do rodziców, jednocześnie stanowczo broniąc granic własnej dorosłości.',
        'DIALOG PORÓWNAWCZY (Wtrącanie się w wychowanie wnuków):',
        '• WERSJA ULEGŁA: (Milczenie, zgrzytanie zębami i uleganie naciskom matki).',
        '• WERSJA AGRESYWNA: „Nienawidzę, jak się wtrącasz! Zniszczyłaś mi dzieciństwo, a teraz chcesz zniszczyć moje dzieci!”.',
        '• WERSJA ASERTYWNA: „Mamo, bardzo doceniam twoją miłość do wnuków. Jednak zasady żywieniowe i ekranowe ustalamy z mężem samodzielnie i prosimy o ich bezwzględne przestrzeganie w naszym domu”.'
      ]
    },
    {
      id: 'sec-30-23',
      pageNumber: 1248,
      sectionNumber: '30.23',
      title: 'Asertywność w szkole i na uczelni — Odpowiedzi przed grupą, relacje z nauczycielami i presja rówieśnicza',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W środowisku edukacyjnym młodzi ludzie nieustannie mierzą się z presją grupy (alkohol, używki, hejtowanie słabszych, ściąganie) oraz z trudnymi relacjami z kadrą pedagogiczną.',
        'Asertywność rówieśnicza to odwaga powiedzenia grupie: „Nie, nie wezmę w tym udziału” bez konieczności moralizowania innych.',
        'W relacji z wykładowcą asertywność polega na kulturalnym dopytaniu o kryteria oceniania bez lęku i bez arogancji: „Panie profesorze, chciałbym zrozumieć, jakie konkretnie elementy w mojej pracy zadecydowały o ocenie, aby móc poprawić je w przyszłości”.'
      ]
    },
    {
      id: 'sec-30-24',
      pageNumber: 1252,
      sectionNumber: '30.24',
      title: 'Asertywność w pracy — Negocjacje wynagrodzenia, odmowa nadgodzin i obrona projektów',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'W środowisku biznesowym asertywność jest kluczową kompetencją decydującą o sukcesie zawodowym i zdrowiu psychicznym. Obejmuje ona: negocjowanie podwyżek w oparciu o twarde dane rynkowe, odmawianie brania dodatkowych zadań bez poszerzenia budżetu lub czasu oraz asertywną obronę własnych koncepcji przed zarządem.',
        'DIALOG PORÓWNAWCZY (Prośba szefa o nadgodziny w piątek o 16:30):',
        '• WERSJA ULEGŁA: „No dobrze... jakoś zostanę...” (narastająca frustracja).',
        '• WERSJA AGRESYWNA: „Czy pan oszalał?! Kodeks pracy pana nie obowiązuje?!”.',
        '• WERSJA ASERTYWNA: „Dziś o 17:00 kończę pracę i mam zaplanowane zobowiązania prywatne. Mogę zająć się tym zadaniem w poniedziałek od 8:00 rano”.'
      ]
    },
    {
      id: 'sec-30-25',
      pageNumber: 1256,
      sectionNumber: '30.25',
      title: 'Asertywność w internecie — Komentarze, spory w social mediach, cyberprzemoc i higiena uwagi',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'W przestrzeni cyfrowej asertywność oznacza przede wszystkim umiejętność nieangażowania się w jałowe pyskówki i wojenki komentarzowe.',
        'PAMIĘTAJ: Nie masz żadnego obowiązku odpowiadać na każdy komentarz pod swoim postem ani prostować każdej bzdury w sieci. Twoja uwaga jest najcenniejszą walutą.',
        'CYFROWY STANDARD ASERTYWNOŚCI: 1 merytoryczna odpowiedź (jeśli rozmówca pyta w dobrej wierze), a w razie hejtu, trollingu lub wulgaryzmów — natychmiastowe zablokowanie i usunięcie komentarza bez wdawania się w dyskusje.'
      ]
    },

    // BLOK VI — STUDIA PRZYPADKU I WIELKA INTEGRACJA DZIEŁA (30.26 - 30.30)
    {
      id: 'sec-30-26',
      pageNumber: 1260,
      sectionNumber: '30.26',
      title: 'Studium Przypadku — Osoba Uległa: Cena Wiecznego Milczenia Piotra',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
      caseStudyRef: chapterThirtyCaseStudyUleglosc,
      paragraphs: [
        'W tym studium przypadku analizujemy dramat Piotra (30 lat), wybitnego analityka danych, którego uległość i lęk przed konfrontacją doprowadziły do kradzieży jego autorskiego algorytmu przez dominującego kolegę.',
        'Przeanalizuj interaktywną kartę powyżej: dekompozycję reakcji zamrożenia (Freezing) w istocie szarej okołowodociągowej (PAG) oraz nowy, 3-krokowy skrypt obrony autorstwa, który pozwolił mu odzyskać status eksperta.'
      ]
    },
    {
      id: 'sec-30-27',
      pageNumber: 1266,
      sectionNumber: '30.27',
      title: 'Studium Przypadku — Osoba Reagująca Agresją: Płonące Mosty Kamila',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
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
      readingTimeMinutes: 20,
      caseStudyRef: chapterThirtyCaseStudyKonfliktGranice,
      paragraphs: [
        'Trzecie studium przypadku ilustruje walkę Karoliny z subtelnym gaslightingiem przełożonej za pomocą twardych faktów i techniki Paper Trail.',
        'Przeanalizuj, w jaki sposób zachowanie żelaznego spokoju i odwołanie się do pisemnej dokumentacji rozbraja każdą próbę manipulacji pamięcią.'
      ]
    },
    {
      id: 'sec-30-29',
      pageNumber: 1278,
      sectionNumber: '30.29',
      title: 'Wielki Trening Asertywności — Laboratorium Transformacji Komunikacyjnej',
      category: 'cwiczenia',
      readingTimeMinutes: 25,
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
      readingTimeMinutes: 26,
      quote: {
        text: 'Poznanie samego siebie to dopiero początek. Prawdziwym celem jest świadome ukształtowanie siebie i swojego miejsca w świecie.',
        author: 'Synteza Dzieła: Anatomia Umysłu'
      },
      paragraphs: [
        'WIELKA SYNTEZA TRZECH TOMÓW:',
        '• TOM I (Jak działa umysł? — Rozdziały 1–10): Odkryliśmy neurobiologiczną architekturę percepcji, uwagi, pamięci, emocji i procesów myślenia. Zrozumiałeś, że nie jesteś bezwolnym niewolnikiem swoich impulsów limbicznych, lecz plastycznym systemem poznawczym zdolnym do samoregulacji.',
        '• TOM II (Jak człowiek funkcjonuje wśród innych ludzi? — Rozdziały 11–20): Zbadaliśmy dynamikę wpływu społecznego, perswazji, relacji, konformizmu, manipulacji i dynamiki grupowej. Nauczyłeś się widzieć niewidzialne siły kształtujące zachowania ludzi w interakcjach.',
        '• TOM III (Jak człowiek kształtuje siebie i swoje zachowanie? — Rozdziały 21–30): W finałowej części przeszliśmy przez nawyki, motywację, odporność psychiczną, podejmowanie decyzji w warunkach niepewności (Rozdział 28), stawianie zdrowych granic (Rozdział 29) aż po mistrzostwo asertywności (Rozdział 30).',
        'SŁOWNIK KLUCZOWYCH POJĘĆ ROZDZIAŁU 30:',
        '• ASERTYWNOŚĆ — bezpośrednie, uczciwe wyrażanie siebie z pełnym poszanowaniem godności innych („Ja OK — Ty OK”).',
        '• KOMUNIKAT „JA” — struktura: Fakt + Emocja + Konsekwencja + Oczekiwanie.',
        '• MODEL FUKO — Fakty, Uczucia, Konsekwencje, Oczekiwania w konstruktywnej krytyce.',
        '• ZAMGŁAWIANIE (Fogging) — zgoda z prawdziwą częścią krytyki przy odrzuceniu złośliwej oceny.',
        '• TECHNIKA ZDARTEJ PŁYTY — monotonne powtarzanie jasnego stanowiska w obliczu manipulacyjnego nacisku.',
        '• METAKOMUNIKAT — przejście z poziomu treści na poziom analizy procesu komunikacji w obliczu prowokacji.',
        'ZAKOŃCZENIE KSIĄŻKI: Wiedza, którą zdobyłeś na kartach tej 30-rozdziałowej książki, nie jest martwą teorią akademicką. Jest Twoim kompasem i tarczą na całe dorosłe życie. Używaj jej z mądrością, odwagą i empatią.'
      ]
    }
  ]
};
