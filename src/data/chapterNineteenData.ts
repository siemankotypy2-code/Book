import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterNineteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii Alberta Bandury poczucie własnej skuteczności (Self-efficacy) różni się od ogólnej samooceny (Self-esteem) tym, że:',
    topic: 'Poczucie Własnej Skuteczności',
    sectionRef: 'Sekcja 19.2',
    options: [
      { label: 'A', text: 'Self-efficacy dotyczy subiektywnego przekonania o własnej zdolności do wykonania konkretnego zadania, podczas gdy samoocena jest ogólną emocjonalną oceną własnej wartości.', isCorrect: true },
      { label: 'B', text: 'Self-efficacy odnosi się tylko do sportowców wyczynowych.', isCorrect: false },
      { label: 'C', text: 'Samoocena jest pojęciem genetycznym, a self-efficacy wygasa po skończeniu studiów.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, to dwa synonimy z języka angielskiego.', isCorrect: false }
    ],
    explanation: 'Można posiadać wysokie poczucie skuteczności w programowaniu Python (wiedzieć „poradzę sobie z tym kodem”), mając jednocześnie niską ogólną samoocenę (czuć się bezwartościowym człowiekiem).',
    keyTakeaway: 'Skuteczność to wiara w umiejętności w danej domenie, samoocena to stosunek do samego siebie jako człowieka.'
  },
  {
    id: 2,
    question: 'Co według badań jest najbardziej niezawodnym źródłem budowania trwałego poczucia własnej skuteczności?',
    topic: 'Źródła Skuteczności',
    sectionRef: 'Sekcja 19.5',
    options: [
      { label: 'A', text: 'Doświadczenie opanowania (Mastery Experiences) – osobiste przeżycie sukcesu osiągniętego poprzez pokonanie przeszkód własnym wysiłkiem.', isCorrect: true },
      { label: 'B', text: 'Powtarzanie sztucznych afirmacji przed lustrem bez podejmowania jakichkolwiek działań.', isCorrect: false },
      { label: 'C', text: 'Kupowanie drogich ubrań z widocznym logo znanych marek.', isCorrect: false },
      { label: 'D', text: 'Słuchanie głośnej muzyki motywacyjnej przez 8 godzin dziennie.', isCorrect: false }
    ],
    explanation: 'Bandura wykazał, że żadne słowa zachęty nie zastąpią bezpośredniego dowodu empirycznego: przeżycia sytuacji, w której podjąłeś trud, przetrwałeś kryzys i osiągnąłeś cel.',
    keyTakeaway: 'Prawdziwą pewność siebie buduje się na fundamencie pokonanych trudności, nie na puszystych słowach.'
  },
  {
    id: 3,
    question: 'Na czym polega pułapka samooceny uwarunkowanej wynikami (Contingent Self-esteem)?',
    topic: 'Samoocena Uwarunkowana',
    sectionRef: 'Sekcja 19.7',
    options: [
      { label: 'A', text: 'Poczucie własnej wartości jest całkowicie uzależnione od bieżących sukcesów lub pochwał; każda porażka wywołuje natychmiastowe załamanie emocjonalne.', isCorrect: true },
      { label: 'B', text: 'Otrzymywanie wypłaty na konto na koniec każdego miesiąca.', isCorrect: false },
      { label: 'C', text: 'Brak jakichkolwiek celów życiowych i unikanie wszelkiej pracy.', isCorrect: false },
      { label: 'D', text: 'Wyznawanie zasady, że każdy człowiek rodzi się mistrzem olimpijskim.', isCorrect: false }
    ],
    explanation: 'Gdy Twoje „jestem coś wart” stoi na filarze „muszę wygrywać”, żyjesz w stałym lęku. Wygrana daje chwilową ulgę, ale pierwsza przegrana przynosi poczucie egzystencjalnej katastrofy.',
    keyTakeaway: 'Rozdziel swoją ludzką wartość od wyników bieżących projektów.'
  },
  {
    id: 4,
    question: 'Porównania społeczne w górę (Upward Social Comparison) według Festingera (Sekcja 19.6):',
    topic: 'Porównania Społeczne',
    sectionRef: 'Sekcja 19.6',
    options: [
      { label: 'A', text: 'Polegają na porównywaniu się z osobami osiągającymi lepsze wyniki; mogą motywować do rozwoju lub wywoływać zawiść i spadek samooceny w zależności od poczucia kontroli.', isCorrect: true },
      { label: 'B', text: 'Zawsze prowadzą do natychmiastowego wzrostu zysków finansowych.', isCorrect: false },
      { label: 'C', text: 'Są zabronione przez prawo międzynarodowe.', isCorrect: false },
      { label: 'D', text: 'Dotyczą wyłącznie porównywania wzrostu fizycznego w centymetrach.', isCorrect: false }
    ],
    explanation: 'Gdy porównujesz się z kimś lepszym i wierzysz, że możesz rozwinąć te umiejętności, pojawia się inspiracja. Gdy uważasz te cechy za niedostępne, pojawia się rezygnacja i zazdrość.',
    keyTakeaway: 'Używaj sukcesu innych jako inspiracji, a nie jako batoga na własne ego.'
  },
  {
    id: 5,
    question: 'Czym różni się perfekcjonizm adaptacyjny od perfekcjonizmu dezadaptacyjnego (Sekcja 19.9)?',
    topic: 'Perfekcjonizm',
    sectionRef: 'Sekcja 19.9',
    options: [
      { label: 'A', text: 'Perfekcjonizm adaptacyjny stawia wysokie standardy przy jednoczesnym akceptowaniu błędów, podczas gdy dezadaptacyjny łączy wysokie wymagania ze stałym lękiem przed porażką i samokrytyką.', isCorrect: true },
      { label: 'B', text: 'Perfekcjonizm adaptacyjny występuje tylko u dzieci do 5 roku życia.', isCorrect: false },
      { label: 'C', text: 'Perfekcjonizm dezadaptacyjny oznacza brak sprzątania w pokoju.', isCorrect: false },
      { label: 'D', text: 'Oba rodzaje perfekcjonizmu zawsze prowadzą do wybitnych wyników bez żadnych kosztów psychicznych.', isCorrect: false }
    ],
    explanation: 'Dezadaptacyjny perfekcjonista uważa, że błąd niszczy cały jego dorobek i wartość. Adaptacyjny perfekcjonista dąży do doskonałości, traktując potknięcie jako element nauki.',
    keyTakeaway: 'Dąż do wybitności, ale daj sobie prawo do bycia człowiekiem.'
  },
  {
    id: 6,
    question: 'Niestabilna samoocena (Self-esteem instability) charakteryzuje się tym, że:',
    topic: 'Stabilność Samooceny',
    sectionRef: 'Sekcja 19.8',
    options: [
      { label: 'A', text: 'Gwałtownie fluktuuje z godziny na godzinę pod wpływem drobnych zdarzeń (np. krytyczna uwaga, brak odpowiedzi na SMS).', isCorrect: true },
      { label: 'B', text: 'Jest idealnie stała przez całe życie niezależnie od wypadków.', isCorrect: false },
      { label: 'C', text: 'Występuje wyłącznie u osób z wyższym wykształceniem medycznym.', isCorrect: false },
      { label: 'D', text: 'Trwale wyłącza zdolność do mowy.', isCorrect: false }
    ],
    explanation: 'Osoby o niestabilnej samoocenie zużywają ogromne ilości energii na obronę własnego wizerunku i szukanie ciągłych potwierdzeń ze strony otoczenia.',
    keyTakeaway: 'Stabilność samooceny jest ważniejsza dla zdrowia psychicznego niż jej bezwzględny wysoki poziom.'
  },
  {
    id: 7,
    question: 'Wjaki sposób krytyka wpływa na układ nerwowy osoby o uwarunkowanej samoocenie?',
    topic: 'Reakcja na Krytykę',
    sectionRef: 'Sekcja 19.10',
    options: [
      { label: 'A', text: 'Jest interpretowana jako egzystencjalny atak na całą osobę, aktywując ciało migdałowate i odpowiedź stresową (wyrzut kortyzolu).', isCorrect: true },
      { label: 'B', text: 'Wywołuje natychmiastowy spadek tętna do zera i uśmiech.', isCorrect: false },
      { label: 'C', text: 'Stymuluje wydzielanie serotoniny w ilościach ułatwiających sen.', isCorrect: false },
      { label: 'D', text: 'Nie wywołuje żadnej reakcji biologicznej.', isCorrect: false }
    ],
    explanation: 'Gdy krytyka pracy zostaje utożsamiona z krytyką człowieka, kora przedczołowa traci zdolność do chłodnej analizy merytorycznej uwag.',
    keyTakeaway: 'Krytyka dotyczy Twojego wykonania zadania, a nie Twojej wartości ludzkiej.'
  },
  {
    id: 8,
    question: 'Co charakteryzuje proces modelowania społecznego (Vicarious Experience) jako źródło skuteczności?',
    topic: 'Modelowanie Społeczne',
    sectionRef: 'Sekcja 19.5',
    options: [
      { label: 'A', text: 'Obserwowanie osoby podobnej do nas, która osiąga sukces w danym zadaniu, co wzmacnia naszą wiarę: „Skoro on dał radę, ja też mogę”.', isCorrect: true },
      { label: 'B', text: 'Praca na wybiegu dla modeli w paryskim domu mody.', isCorrect: false },
      { label: 'C', text: 'Oglądanie filmów science-fiction o kosmitach.', isCorrect: false },
      { label: 'D', text: 'Kopiowanie rysunków z podręcznika do anatomii.', isCorrect: false }
    ],
    explanation: 'Modelowanie działa najsilniej, gdy widzimy kogoś o zbliżonym poziomie początkowym, kto pokonuje trudności, a nie nieosiągalnego idealnego mistrza.',
    keyTakeaway: 'Szukaj modeli osób realistycznych, które przeszły drogę od błędu do sukcesu.'
  },
  {
    id: 9,
    question: 'Jakie podejście do błędu sprzyja budowaniu kompetencji (Competence Development)?',
    topic: 'Rozwój Kompetencji',
    sectionRef: 'Sekcja 19.12',
    options: [
      { label: 'A', text: 'Traktowanie błędu jako informacji zwrotnej o procesie (Feedback), wskazującej na konieczność korekty strategii.', isCorrect: true },
      { label: 'B', text: 'Ukrywanie każdego błędu przed przełożonym i zwalnianie winnych.', isCorrect: false },
      { label: 'C', text: 'Ukaranie siebie brakiem jedzenia przez dwa dni.', isCorrect: false },
      { label: 'D', text: 'Rezygnacja ze wszelkiej aktywności zawodowej.', isCorrect: false }
    ],
    explanation: 'Mózg uczy się najefektywniej w strefie błędu (Prediction Error) – gdy przewidywanie mija się z wynikiem, a my analizujemy przyczyny rozbieżności.',
    keyTakeaway: 'Błąd to cenne źródło danych dla kory przedczołowej.'
  },
  {
    id: 10,
    question: 'Co według psychologii oznacza pojęcie „samooceny bezpiecznej” (Secure Self-esteem)?',
    topic: 'Samoocena Bezpieczna',
    sectionRef: 'Sekcja 19.11',
    options: [
      { label: 'A', text: 'Samoocena zakorzeniona w realistycznej samoakceptacji, nieuzależniona od ciągłych sukcesów i odporna na powierzchowną krytykę.', isCorrect: true },
      { label: 'B', text: 'Noszenie kasku ochronnego na co dzień.', isCorrect: false },
      { label: 'C', text: 'Mieszkanie w strzeżonym osiedlu z monitoringiem.', isCorrect: false },
      { label: 'D', text: 'Brak jakichkolwiek emocji i marzeń.', isCorrect: false }
    ],
    explanation: 'Osoba o bezpiecznej samoocenie nie musi stale udowadniać swojej wyższości nad innymi. Potrafi uznać swoje słabości bez poczucia wstydu.',
    keyTakeaway: 'Bezpieczna samoocena pozwala zachować spokój w obliczu porażki.'
  },
  {
    id: 11,
    question: 'Lęk przed oceną społeczną (Evaluation Apprehension) prowadzi najczęściej do:',
    topic: 'Lęk Przed Oceną',
    sectionRef: 'Sekcja 19.10',
    options: [
      { label: 'A', text: 'Unikania wyzwań, prokrastynacji i paraliżu decyzyjnego w sytuacjach ekspozycji społecznej.', isCorrect: true },
      { label: 'B', text: 'Niekontrolowanego wzroście umiejętności wokalnych.', isCorrect: false },
      { label: 'C', text: 'Gwałtownego spadku masy ciała w ciągu 5 minut.', isCorrect: false },
      { label: 'D', text: 'Automatycznego opanowania języka chińskiego.', isCorrect: false }
    ],
    explanation: 'Lęk przed tym, że inni dostrzegą naszą niekompetencję, zmusza umysł do wycofania się ze strefy ryzyka, co niszczy okazje do budowania skuteczności.',
    keyTakeaway: 'Lęk przed oceną paralizuje potencjał przed podjęciem pierwszej próby.'
  },
  {
    id: 12,
    question: 'Jakie działanie jest kluczowym elementem protokołu budowania skuteczności (Self-efficacy Protocol)?',
    topic: 'Praktyczny Protokół Skuteczności',
    sectionRef: 'Sekcja 19.16',
    options: [
      { label: 'A', text: 'Rozbicie wielkiego celu na cele mikroskopijne (Micro-wins) i rejestrowanie ich wykonania.', isCorrect: true },
      { label: 'B', text: 'Czekanie, aż pojawi się wielka fala motywacji.', isCorrect: false },
      { label: 'C', text: 'Proszczenie innych ludzi, by wykonali zadanie za nas.', isCorrect: false },
      { label: 'D', text: 'Głośne narzekanie na brak talentu.', isCorrect: false }
    ],
    explanation: 'Mózg buduje poczucie skuteczności na małych, wygranych bitwach. Pętla małego zwycięstwa dostarcza dopaminy i buduje obwód zaufania do własnego działania.',
    keyTakeaway: 'Małe wygrane powtarzane codziennie budują potężną pewność siebie.'
  }
];

export const caseStudiesChapterNineteen: CaseStudy[] = [
  {
    id: 'studium-19-1-syndrom-oszusta',
    title: 'W cieniu doskonałości: Jak syndrom oszusta sparaliżował karierę dr Piotra',
    subtitle: 'Niska samoocena mimo wybitnych kompetencji i dekonstrukcja lęku przed zdemaskowaniem',
    protagonist: 'Dr Piotr, 38 lat, szef zespołu badawczego w biotechnologii',
    context: 'Piotr opublikował 15 prac w renomowanych pismach naukowych i zdobył międzynarodowy grant. Mimo to codziennie rano budził się z przerażeniem: „Dziś odkryją, że tak naprawdę nic nie umiem i jestem oszustem”.',
    story: [
      'Piotr wychowywał się w domu, gdzie akceptacja była uwarunkowana wynikami. Rodzice pytali o ocenę 5: „A dlaczego nie 6?”. Przyswoił rdzenne przekonanie: „Jestem wart tyle, ile wynosi mój ostatni sukces”.',
      'Gdy otrzymał zaproszenie do wygłoszenia wykładu otwierającego na kongresie w Zurychu, w jego umyśle wybuchła panika. Zamiast ucieszyć się z uznania, uznał to za „pomyłkę komitetu”. Zgodnie z mechanizmem uwarunkowanej samooceny, spędził 3 tygodnie na bezsennej pracy nad slajdami, doprowadzając organizm do wyczerpania.',
      'Podczas wystąpienia publiczność słuchała go z zachwytem. Gdy padły gromkie brawa, Piotr poczuł jedynie ulgę, że „tym razem nie został zdemaskowany”. Pochwały od autorytetów unieważniał w myśli: „Mówią tak z grzeczności”.',
      'Piotr cierpiał na klasyczny Syndrom Oszusta (Impostor Syndrome). Nie potrafił wewnętrznie zintegrować swoich obiektywnych sukcesów z własnym obrazem siebie. Dopiero praca nad oddzieleniem poczucia wartości od wyśrubowanych standardów perfekcjonistycznych pozwoliła mu odzyskać spokój.'
    ],
    dialogue: [
      { speaker: 'Koleżanka z zespołu', text: 'Piotr, Twój grant był najlepszy w tej edycji.', subtext: 'Twardy dowód zewnętrzny o sukcesie merytorycznym.' },
      { speaker: 'Piotr', text: 'Po prostu miałem szczęście, trafiłem na pobłażliwych recenzentów.', subtext: 'Unieważnienie sukcesu i atrybucja zewnętrzna chroniąca skrypt niskiej wartości.' }
    ],
    decisionTaken: 'Odmowa przyjęcia funkcji przewodniczącego międzynarodowego panelu badawczego z powodu lęku przed zdemaskowaniem.',
    whatProtagonistSaw: 'Własne niedociągnięcia w wiedzy, genialnych rywali i wizję kompromitacji naukowej.',
    whatWasMissed: 'Obiektywne wskaźniki cytowań, uznanie środowiska i fakt, że nikt nie posiada wiedzy absolutnej.',
    psychologicalAnalysis: {
      coreMechanism: 'Syndrom oszusta (Impostor Syndrome) oparty na niestabilnej, uwarunkowanej samoocenie i perfekcjonizmie dezadaptacyjnym.',
      cognitiveBiases: [
        { name: 'Discounting the Positive', description: 'Unieważnianie własnych osiągnięć jako dzieła przypadku lub błędu innych.', impact: 'Brak zdolności do czerpania dumy z własnego wysiłku.' },
        { name: 'Atrybucja asymetryczna', description: 'Sukcesy przypisywane czynnikom zewnętrznym („szczęście”), porażki – wewnętrznym („brak talentu”).', impact: 'Utrzymywanie niskiej samooceny mimo sukcesów.' }
      ],
      defenseMechanisms: [
        { name: 'Odejmowanie wartości (Devaluation)', explanation: 'Unieważnianie nagród i pochwał.' }
      ],
      emotionalDynamic: 'Przewlekły stan zagrożenia tożsamościowego i lęk przed kompromitacją.'
    },
    decisionProcessAnalysis: {
      trigger: 'Zaproszenie do objęcia funkcji przewodniczącego panelu.',
      attentionFocus: 'Własne braki w wiedzy i wizja trudnych pytań z sali.',
      interpretation: '„Nie nadaję się, w końcu zorientują się, że jestem oszustem”.',
      emotion: 'Paraliżujący lęk, wstyd, wyczerpanie.',
      impulse: 'Ucieczka, odmowa, schowanie się w laboratorium.',
      action: 'Odmowa przyjęcia funkcji.',
      consequence: 'Spadek pozycji w środowisku naukowym i pogłębienie poczucia porażki.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Generowanie stałego sygnału zagrożenia społecznego', activationState: 'Hiperaktywacja' },
        { region: 'Przyśrodkowa kora przedczołowa (mPFC)', role: 'Przetwarzanie negatywnych myśli o sobie', activationState: 'Wysoka aktywacja' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Przewlekle podwyższony poziom wywołujący bezsenność i zmęczenie.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 150 ms', process: 'Pochwała wywołuje mikronapięcie zamiast radości.' },
        { timeMs: '300 ms+', process: 'Mózg uruchamia natychmiastowe wyjaśnienie: „Nie wiedzą wszystkiego”.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Auto-sabotaż perfekcjonistyczny', description: 'Wyznaczanie nierealnych standardów jako usprawiedliwienia dla poczucia porażki.', vulnerabilityExploited: 'Potrzeba bycia doskonałym.' }
      ],
      counterMeasures: [
        { step: '1. Rejestr Obiektywnych Faktów', script: '„Oto lista 15 publikacji i recenzji. To są twarde dane empiryczne, a nie przeczucia”.', rationale: 'Przenosi punkt ciężkości z emocji na fakty.' }
      ]
    },
    alternativePath: 'Gdyby Piotr przyjął funkcję i potraktował pytania z sali nie jako test jego wartości, lecz jako merytoryczną dyskusję, przełamałby syndrom oszusta.',
    readerQuestion: 'W jakich obszarach własnego życia unieważniasz swoje prawdziwe osiągnięcia, wmawiając sobie, że miałeś tylko szczęście?',
    keyTakeaway: 'Nie musisz być doskonały, aby być wybitnym i wartościowym fachowcem.'
  }
];

export const selfExercisesChapterNineteen: SelfExercise[] = [
  {
    id: 'cwiczenie-19-1-dziennik-skutecznosci',
    title: 'Protokół Budowania Skuteczności: Rekonstrukcja Dowodów Opanowania (Mastery Log)',
    subtitle: 'Narzędzie przerwani pętli zwątpienia i budowania obiektywnej pewności siebie',
    objective: 'Systematyczne zbieranie dowodów na własne kompetencje i samodzielne pokonywanie trudności.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Stymulacja obwodów dopaminowych poprzez rejestrację ukończenia trudu (prediction error positive) i zapis w pamięci długotrwałej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór konkretnej domeny',
        instruction: 'Określ obszar, w którym chcesz zwiększyć poczucie skuteczności (np. negocjacje biznesowe, wystąpienia, nauka języka).',
        promptText: 'Moja domena docelowa:',
        placeholder: 'np. „Prowadzenie trudnych rozmów z klientami”'
      },
      {
        stepNumber: 2,
        title: 'Zapis mikrozwycięstwa z ostatniego tygodnia',
        instruction: 'Napisz o jednej sytuacji, w której poczułeś opór, ale podjąłeś działanie i przetrwałeś dyskomfort.',
        promptText: 'Moje mikrozwycięstwo i pokonany trud:',
        placeholder: 'np. „Zadzwoniłem do klienta z informacją o opóźnieniu. Mimo uścisku w żołądku, dokończyłem rozmowę”'
      },
      {
        stepNumber: 3,
        title: 'Wywód sprawczy',
        instruction: 'Dokończ zdanie: „To poradzenie sobie było możliwe, ponieważ użyłem umiejętności X”.',
        promptText: 'Użyta umiejętność / zasób:',
        placeholder: 'np. „Użyłem opanowania, przygotowanego skryptu i spokojnego oddechu”'
      }
    ],
    reflectionQuestions: [
      'Jakie to uczucie widzieć twardy dowód na własną skuteczność zamiast polegać na zmiennym nastroju?',
      'Jakie najmniejsze działanie w tym obszarze możesz wykonać jutro o godzinie 10:00?'
    ]
  }
];

export const chapterNineteen: Chapter = {
  number: 19,
  volume: 3,
  volumeChapterNumber: 3,
  title: 'Rozdział 3: Samoocena, Poczucie Własnej Skuteczności i Obraz Siebie',
  subtitle: 'Samoocena bezpieczna vs uwarunkowana, meandry self-efficacy Bandury, perfekcjonizm i psychologia pewności siebie',
  leadParagraph: 'Pewność siebie to jeden z najczęściej używanych i jednocześnie najbardziej błędnie rozumianych terminów we współczesnym świecie. Poradniki popularnonaukowe często namawiają do „uwierzenia w siebie” poprzez głośne krzyki i afirmacje, ignorując fundamentalną biologiczno-poznawczą strukturę poczucia własnej wartości i skuteczności. W tym rozdziale dokonamy precyzyjnej rozbiórki mechanizmów samooceny. Zbadamy różnicę między niestabilną samooceną uwarunkowaną sukcesami a bezpieczną samoakceptacją oraz poznamy naukowy model Alberta Bandury, pokazujący, jak budować autentyczne poczucie własnej skuteczności (Self-Efficacy) oparte na faktach i kompetencjach.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-19-1',
      pageNumber: 1,
      sectionNumber: '19.1',
      title: 'Mit „Pewności Siebie”: Dlaczego Afirmacje Przed Lustrem Nie Działają?',
      category: 'wstep',
      readingTimeMinutes: 7,
      quote: {
        text: 'Niewielka wiedza daje ludziom pychę, wielka wiedza daje im pokorę.',
        author: 'Leonardo da Vinci'
      },
      paragraphs: [
        'Przez dekady rynek rozwoju osobistego promował ideę, że wystarczy codziennie powtarzać sobie przed lustrem: „Jestem wspaniały, genialny i odniosę sukces”, aby zmienić swoją rzeczywistość. Badania psychologiczne pokazują jednak coś zdumiewającego.',
        'U osób o niskiej samoocenie sztuczne afirmacje wywołują jeszcze większy spadek samopoczucia i wzrost dysonansu poznawczego. Mózg rejestruje drastyczny rozjazd między wypowiadaną deklaracją a rzeczywistą bazą danych w pamięci, wyciągając wniosek: „To kłamstwo, jest ze mną naprawdę źle”.'
      ]
    },
    {
      id: 'sec-19-2',
      pageNumber: 4,
      sectionNumber: '19.2',
      title: 'Poczucie Własnej Skuteczności (Self-Efficacy) Bandury vs Ogólna Samoocena',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Albert Bandura zrewolucjonizował psychologię, wprowadzając pojęcie Self-Efficacy – poczucia własnej skuteczności. Podczas gdy samoocena jest emocjonalną odpowiedzią na pytanie „Czy się lubię?”, poczucie skuteczności jest poznawczą oceną: „Czy posiadam kompetencje, by osiągnąć cel X w warunkach Y?”.',
        'Poczucie skuteczności jest specyficzne dla danej domeny. Możesz czuć się niezwykle skuteczny w prowadzeniu auta po górskich serpentynach, a jednocześnie odczuwać zerową skuteczność podczas przemawiania na ślubie przyjaciela.'
      ]
    },
    {
      id: 'sec-19-3',
      pageNumber: 7,
      sectionNumber: '19.3',
      title: 'Cztery Filary Budowania Skuteczności według Bandury',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        '1. Doświadczenie opanowania (Mastery Experiences) – najważniejszy filar. Prawdziwe przeżycie sukcesu po pokonaniu oporu.',
        '2. Modelowanie społeczne (Vicarious Experiences) – obserwowanie innych podobnych do nas, którzy dali radę.',
        '3. Perswazja społeczna (Social Persuasion) – wiarygodne wsparcie od autorytetów.',
        '4. Stan somatyczny i emocjonalny (Physiological States) – umiejętność odczytywania lęku nie jako paraliżu, lecz jako mobilizacji organizmu.'
      ]
    },
    {
      id: 'sec-19-4',
      pageNumber: 10,
      sectionNumber: '19.4',
      title: 'Samoocena Bezpieczna vs Uwarunkowana (Contingent Self-Esteem)',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Samoocena uwarunkowana wisi na nitce zewnętrznych rezultatów. Jeśli domykasz transakcję – czujesz się bogiem. Jeśli klient rezygnuje – czujesz się śmieciem. To wycieńczający rollercoaster emocjonalny.',
        'Samoocena bezpieczna (Secure Self-esteem) opiera się na bezwarunkowej samoakceptacji własnego człowieczeństwa. Wiesz, że Twoja wartość jako osoby jest stała, niezależnie od tego, czy projekt zakończył się sukcesem, czy porażką.'
      ]
    },
    {
      id: 'sec-19-5',
      pageNumber: 13,
      sectionNumber: '19.5',
      title: 'Teoria Porównań Społecznych Festingera: W Góre i w Dół',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Mózg ocenia własne kompetencje poprzez porównania społeczne. Porównanie w dół (z osobami radzącymi sobie gorzej) daje szybką, powierzchowną poprawę samopoczucia, ale nie buduje rozwoju.',
        'Porównanie w górę (z mistrzami) może być źródłem inspiracji, jeśli towarzyszy mu wysokie poczucie skuteczności, lub źródłem zawiści i ucieczki, gdy czujemy brak kontroli.'
      ]
    },
    {
      id: 'sec-19-6',
      pageNumber: 16,
      sectionNumber: '19.6',
      title: 'Perfekcjonizm Adaptacyjny vs Dezadaptacyjny: Pułapka „Muszę Być Najlepszy”',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Dezadaptacyjny perfekcjonizm to nie dążenie do doskonałości – to desperacki lęk przed wstrętem i odrzuceniem.',
        'Osoba ogarnięta tym skryptem uważa, że drobna literówka w dokumencie czyni z niej niekompetentnego oszusta. Prowadzi to do prokrastynacji i wypalenia zawodowego.'
      ]
    },
    {
      id: 'sec-19-7',
      pageNumber: 19,
      sectionNumber: '19.7',
      title: 'Krytyka i Pochwała: Jak Przetwarzać Informacje Zwrotne Bez Utraty Ego',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Jak przyjmować krytykę bez wchodzenia w tryb walki lub ucieczki? Kluczem jest rozdzielenie osoby od wykonania.',
        'Kiedy szef mówi: „Ta prezentacja jest nieczytelna”, nie mówi: „Jesteś głupi”. Mówi o układzie slajdów i doborze czcionki.'
      ]
    },
    {
      id: 'sec-19-8',
      pageNumber: 22,
      sectionNumber: '19.8',
      title: 'Stabilność Samooceny: Dlaczego Wykazujemy Tyle Lęku Przed Oceną?',
      category: 'neuronauka',
      readingTimeMinutes: 8,
      paragraphs: [
        'Badania pokazują, że stabilność samooceny w czasie jest silniejszym predyktorem dobrostanu niż jej wysoki poziom. Osoba o średniej, ale stabilnej samoocenie jest znacznie odporniejsza na stres niż osoba o samoocenie wysokiej, lecz skrajnie niestabilnej.'
      ]
    },
    {
      id: 'sec-19-9',
      pageNumber: 25,
      sectionNumber: '19.9',
      title: 'Syndrom Oszusta (Impostor Syndrome): Gdy Sukces Wywołuje Panikę',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Syndrom oszusta dotyka bardzo często ludzi o wybitnych kompetencjach. Nie potrafią oni przypisać sukcesu własnym umiejętnościom, uznając go za przypadek.',
        'Rozbrojenie syndromu oszusta wymaga nauki prowadzenia obiektywnego rejestru faktów merytorycznych.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[0]
    },
    {
      id: 'sec-19-10',
      pageNumber: 28,
      sectionNumber: '19.10',
      title: 'Realistyczna Ocena Własnych Możliwości: Trójkąt Kompetencji',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Realistyczna ocena opiera się na trójkącie: I) Znam swoje mocne strony, II) Znam swoje ograniczenia bez wstydu, III) Wiem, jak uzupełnić braki.'
      ]
    },
    {
      id: 'sec-19-11',
      pageNumber: 31,
      sectionNumber: '19.11',
      title: 'Lęk przed Oceną i Paraliż Ekspozycji Społecznej',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Lęk przed tym, co pomyślą inni, jest spuścizną ewolucyjną. DLA naszego przodka wykluczenie z grupy oznaczało fizyczną śmierć na sawannie. Dlatego krytyka aktywuje w mózgu układy lęku fizycznego.'
      ]
    },
    {
      id: 'sec-19-12',
      pageNumber: 34,
      sectionNumber: '19.12',
      title: 'Rozwój Kompetencji poprzez Pętlę Błędu (Prediction Error)',
      category: 'neuronauka',
      readingTimeMinutes: 8,
      paragraphs: [
        'Mózg uczy się najszybciej, gdy popełnia błąd i natychmiast otrzymuje informację zwrotną. Błąd nie jest porażką tożsamościową – jest sygnałem neurobiologicznym do przebudowy synaps.'
      ]
    },
    {
      id: 'sec-19-13',
      pageNumber: 37,
      sectionNumber: '19.13',
      title: '🧠 BŁĘDNA INTUICJA: „Trzeba Mieć Wysoką Samoocenę, Bym Mógł Zacząć Działać”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'INTUICJA: Ludzie czekają z podjęciem trudnego projektu, założeniem firmy czy wyjściem na scenę na moment, w którym poczują się w 100% pewni siebie.',
        'CO MOŻE BYĆ BŁĘDNE? Czekanie na pewność siebie przed podjęciem działania to stawianie wozu przed koniem. Pewność siebie nie jest przyczyną działania – jest jego skutkiem.',
        'CO MÓWI PSYCHOLOGIA? Działanie podejmuje się w warunkach niepewności i lęku. Erst kommt die Handlung, dann die Gewissheit (Najpierw działanie, potem pewność).',
        'BARDZIEJ PRECYZYJNY MODEL: Działaj mimo dyskomfortu. Poczucie skuteczności pojawi się jako rezultat przetrwania trudu.'
      ]
    },
    {
      id: 'sec-19-14',
      pageNumber: 40,
      sectionNumber: '19.14',
      title: '🔬 CO NADAL NIE JEST JASNE? Związek Samooceny z Agresją',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'przez lata uważano, że to niska samoocena jest główną przyczyną agresji i przestępczości. Współczesne badania (np. Roya Baumeistera) pokazują jednak, że skrajnie wysoka, ale zagrożona i niestabilna samoocena (tzw. zagrożony narcyzm) wywołuje znacznie potężniejsze wybuchy agresji w reakcji na krytykę.'
      ]
    },
    {
      id: 'sec-19-15',
      pageNumber: 43,
      sectionNumber: '19.15',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokół Budowania Skuteczności',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        '1. Wybierz jedno małe zadanie, od którego uzależniasz poczucie pewności.',
        '2. Zaplanuj mikrokrok trwający nie dłużej niż 10 minut.',
        '3. Wykonaj go i zapisz w Dzienniku Skuteczności fakt pokonania oporu.',
        '4. Zrezygnuj z oceniania siebie w kategoriach „jestem genialny/jestem do niczego” – oceń wyłącznie jakość wykonanego kroku.'
      ],
      exerciseRef: selfExercisesChapterNineteen[0]
    },
    {
      id: 'sec-19-16',
      pageNumber: 46,
      sectionNumber: '19.16',
      title: 'Most do Rozdziału 20 oraz Integracja z Tomem I i II',
      category: 'podsumowanie',
      readingTimeMinutes: 6,
      paragraphs: [
        'Zrozumienie samooceny i skuteczne budowanie poczucia skuteczności daje nam stabilny grunt pod nogami. Ale dokąd właściwie chcemy zmierzać? Co wyznacza kierunek naszych działań?',
        'W następnym rozdziale przyjrzymymy się fundamentalnemu kompasowi ludzkiego życia: wartościom, potrzebom i priorytetom. Zobaczysz, jak rozwiązywać konflikty wartości i podejmować decyzje w zgodzie z własną autonomią.'
      ]
    },
    {
      id: 'sec-19-17',
      pageNumber: 48,
      sectionNumber: '19.17',
      title: 'Interaktywny Analizator Samooceny i Skuteczności Bandury',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Wykonaj interaktywną diagnozę swoich obszarów skuteczności i zobacz, które filary wymagają wzmocnienia.'
      ]
    },
    {
      id: 'sec-19-18',
      pageNumber: 52,
      sectionNumber: '19.18',
      title: 'Egzamin Końcowy Rozdziału 19: Samoocena i Skuteczność',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Sprawdź swoją wiedzę na temat Self-efficacy, perfekcjonizmu i stabilności poczucia własnej wartości.'
      ]
    }
  ]
};
