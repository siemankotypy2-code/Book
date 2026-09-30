import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 22 (GLOBALNIE ROZDZIAŁ 38 W STRUKTURZE DZIEŁA)
 * TYTUŁ: WŁADZA, AUTORYTET I POSŁUSZEŃSTWO
 * PODTYTUŁ: Jak zmienia się człowiek, kiedy ma władzę nad innymi — i jak zmienia się, kiedy ktoś ma władzę nad nim
 */

export const chapterThirtyEightExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Czym w ujęciu psychologii społecznej jest władza (power)?',
    topic: 'Definicja Władzy',
    sectionRef: 'Sekcja 38.1',
    options: [
      { label: 'A', text: 'Asymetryczną kontrolą nad cenionymi zasobami i wynikami innych w relacji społecznej.', isCorrect: true },
      { label: 'B', text: 'Wrodzoną cechą osobowości dominującej.', isCorrect: false },
      { label: 'C', text: 'Wyłącznie formalnym stanowiskiem zapisanym w umowie o pracę lub kodeksie prawnym.', isCorrect: false },
      { label: 'D', text: 'Zdolnością do stosowania bezpośredniego przymusu fizycznego.', isCorrect: false }
    ],
    explanation: 'Władza w naukach społecznych jest definiowana relacyjnie — jako asymetryczna kontrola nad dostępem do cenionych zasobów (materialnych, informacyjnych, emocjonalnych), co sprawia, że jedna strona jest zależna od drugiej.',
    keyTakeaway: 'Władza to relacja zależności, a nie stała cecha charakteru.'
  },
  {
    id: 2,
    question: 'Który rodzaj władzy w klasyfikacji Frencha i Ravena opiera się na tym, że podwładny pragnie identyfikować się z liderem i darzy go osobistym podziwem?',
    topic: 'Bazy Władzy Frencha i Ravena',
    sectionRef: 'Sekcja 38.2',
    options: [
      { label: 'A', text: 'Władza odniesienia / referencyjna (referent power).', isCorrect: true },
      { label: 'B', text: 'Władza prawomocna (legitimate power).', isCorrect: false },
      { label: 'C', text: 'Władza przymusu (coercive power).', isCorrect: false },
      { label: 'D', text: 'Władza ekspercka (expert power).', isCorrect: false }
    ],
    explanation: 'Władza odniesienia (referencyjna) wynika z sympatii, podziwu i pragnienia identyfikacji z osobą wpływającą. Jest fundamentem charyzmy.',
    keyTakeaway: 'Władza odniesienia rodzi się z dobrowolnego podziwu, a nie z dekretu.'
  },
  {
    id: 3,
    question: 'Co według rewizji badań Milgrama jest kluczowym psychologicznym mechanizmem uległości wobec poleceń autorytetu?',
    topic: 'Mechanizmy Uległości Milgrama',
    sectionRef: 'Sekcja 38.6',
    options: [
      { label: 'A', text: 'Przeniesienie odpowiedzialności na postrzegany autorytet (stan agentic state) oraz stopniowanie żądań techniką stopy w drzwiach.', isCorrect: true },
      { label: 'B', text: 'Ukryte skłonności sadystyczne większości badanych ludzi.', isCorrect: false },
      { label: 'C', text: 'Hipoaktywacja układu limbicznego uniemożliwiająca odczuwanie stresu.', isCorrect: false },
      { label: 'D', text: 'Brak inteligencji ogólnej u osób podporządkowujących się.', isCorrect: false }
    ],
    explanation: 'Uczestnicy Milgrama przeżywali ogromny stres moralny; uległość wynikała z wejścia w stan pośredniczący (agentic state — „odpowiada ten, kto nakazuje”) oraz powolnej, stopniowej eskalacji napięcia od 15V do 450V.',
    keyTakeaway: 'Autorytet zdejmuje z jednostki ciężar sumienia, czyniąc z niej narzędzie instytucji.'
  },
  {
    id: 4,
    question: 'W jaki sposób wysokie poczucie władzy wpływa zazwyczaj na procesy poznawcze i empatię jednostki?',
    topic: 'Neurobiologia Władzy',
    sectionRef: 'Sekcja 38.4 & 38.9',
    options: [
      { label: 'A', text: 'Zmniejsza skłonność do przyjmowania cudzej perspektywy, nasila myślenie stereotypowe i wyostrza koncentrację wyłącznie na celach.', isCorrect: true },
      { label: 'B', text: 'Zwiększa zdolność do precyzyjnego czytania mikroekspresji mimicznych innych ludzi.', isCorrect: false },
      { label: 'C', text: 'Skłania do dłuższego rozważania perspektywy i uczuć osób o niższym statusie.', isCorrect: false },
      { label: 'D', text: 'Eliminuje całkowicie zdolność logicznego myślenia.', isCorrect: false }
    ],
    explanation: 'Liczne eksperymenty (np. Galinsky, Keltner) dowodzą, że wysoka władza uruchamia behawioralny system dążenia (BAS), redukując czujność społeczną, empatię i potrzebę wczuwania się w perspektywę podwładnych.',
    keyTakeaway: 'Władza działa poznawczo znieczulająco, przesuwając uwagę z relacji na realizację celów.'
  },
  {
    id: 5,
    question: 'Jaki czynnik w wariantach eksperymentu Milgrama najsilniej obniżał poziom posłuszeństwa badanych (aż do zaledwie 10%)?',
    topic: 'Czynniki Oporu Wobec Autorytetu',
    sectionRef: 'Sekcja 38.16',
    options: [
      { label: 'A', text: 'Obecność dwóch innych osób (współbadanych-pomocników), które odmówiły dalszego wykonywania polecenia.', isCorrect: true },
      { label: 'B', text: 'Zwiększenie gratyfikacji finansowej za udział.', isCorrect: false },
      { label: 'C', text: 'Zastąpienie autorytetu mężczyzny autorytetem kobiety.', isCorrect: false },
      { label: 'D', text: 'Wypowiedzenie polecenia cichym, spokojnym głosem.', isCorrect: false }
    ],
    explanation: 'Obecność społecznego sojusznika (dysydenta), który otwarcie mówi „nie”, łamie monopol autorytetu na definiowanie sytuacji i drastycznie redukuje uległość pozostałych.',
    keyTakeaway: 'Jeden głos oporu wystarczy, by przełamać hipnotyczną uległość całej grupy.'
  }
];

export const chapterThirtyEightCaseStudies: CaseStudy[] = [
  {
    id: 'cs-38-michal-awans-wladza',
    title: 'Gdy Michał został dyrektorem: transformacja relacji rówieśniczej we władzę',
    subtitle: 'Studium przypadku: jak zmiana pozycji strukturalnej niszczy dotychczasową empatię i komunikację',
    protagonist: 'Michał (34 lata, nowo mianowany dyrektor IT) oraz jego dawny zespół projektowy',
    context: 'Dział IT w firmie finansowej, transformacja z programisty w menedżera zarządzającego 20 osobami.',
    story: [
      'ETAP I — KUMPELSKA SOLIDARNOŚĆ: Michał przez 5 lat pracował biurko w biurko z Piotrem i Anią. Wspólnie narzekali na zarząd, żartowali i krytykowali sztywne procedury.',
      'ETAP II — AWANS I NOWE SIŁY: Gdy poprzedni lider odszedł, Michał przyjął propozycję awansu, obiecując przyjaciołom: „Będę waszym rzecznikiem na górze, nic się nie zmieni”.',
      'ETAP III — NACISK Z GÓRY: Po miesiącu wiceprezes zażądał redukcji terminów o 40%. Michał zaczął odbierać telefony w nocy. Zrozumiał, że osobiście odpowiada za każdy błąd kolegów.',
      'ETAP IV — INCYDENT NA ZEBRANIU: Podczas dyskusji o architekturze Piotr rzucił: „Michał, przestań gwiazdorzyć, zrobimy to po staremu”. Michał poczuł ukłucie lęku przed utratą autorytetu i uciął publicznie: „Piotr, nie jesteś od oceniania strategii, tylko od dowiezienia modułu do piątku”.',
      'ETAP V — CISZA I IZOLACJA: W pokoju zapadła cisza. W kolejnych tygodniach koledzy przestali zapraszać Michała na lunche i przestali zgłaszać usterki, co doprowadziło do awarii systemu.'
    ],
    dialogue: [
      { speaker: 'Piotr', text: 'Michał, przecież zawsze gadaliśmy szczerze, co się z tobą stało po tym awansie?', subtext: 'Tęsknota za symetrią rówieśniczą i rozczarowanie nowym dystansem.' },
      { speaker: 'Michał', text: 'Wy widzicie tylko swój kod, ja muszę dowieźć wynik przed zarządem. Ktoś tu musi rządzić.', subtext: 'Poczucie osamotnienia, lęku przed porażką i redukcji empatii pod presją wskaźników.' }
    ],
    decisionTaken: 'Użycie władzy formalnej i sankcji do stłumienia krytyki dawnego przyjaciela w celu obrony własnej legitymacji przed zarządem.',
    whatProtagonistSaw: 'Zagrożenie utratą kontroli nad zespołem i ryzyko kompromitacji przed wiceprezesem.',
    whatWasMissed: 'Że uwaga Piotra była cenną informacją inżynierską, a sięgnięcie po pałkę władzy zablokowało szczery feedback.',
    psychologicalAnalysis: {
      coreMechanism: 'Asymetria zależności, syndrom oblężonej twierdzy i redukcja perspektywizmu pod wpływem aktywacji BAS.',
      cognitiveBiases: [
        { name: 'Iluzja wrogości (Hostile Attribution Bias)', description: 'Interpretowanie żartu przyjaciela jako ataku na autorytet.', impact: 'Agresywna reakcja obronna.' },
        { name: 'Erozja perspektywizmu', description: 'Niemożność wczucia się w perspektywę dawnych kolegów.', impact: 'Izolacja społeczna lidera.' }
      ],
      defenseMechanisms: [
        { name: 'Radykalna racjonalizacja', explanation: '„Muszę być twardy, bo tego wymaga profesjonalizm menedżerski”.' }
      ],
      emotionalDynamic: 'Od lęku przed niespełnieniem oczekiwań zarządu do frustracji i emocjonalnego chłodu.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Prążkowie i układ nagrody (BAS)', role: 'Koncentracja na celach zarządczych i premiach', activationState: 'Wysoka' },
        { region: 'Biegun skroniowy i sieć empatii (Default Mode)', role: 'Wyciszenie zdolności do empatii społecznej', activationState: 'Zmniejszona' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Testosteron', roleInScenario: 'Połączenie wysokiego stresu z dążeniem do dominacji statusowej.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Telefon od zarządu (0 min)', process: 'Skok kortyzolu -> percepcja zagrożenia.' },
        { timeMs: 'Zebranie (30 min)', process: 'Wypowiedź Piotra -> reakcja obronna kory czołowej.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Autorytarna reprymenda statusowa', description: 'Publiczne przypomnienie o braku uprawnień do krytyki.', vulnerabilityExploited: 'Zależność finansowa podwładnych.' }
      ],
      counterMeasures: [
        { step: 'Rozmowa 1:1 o redefinicji relacji', script: '„Piotr, jako lider odpowiadam za to głową. Pomóż mi wygrać ten projekt, a na forum dyskutujmy merytorycznie bez podkopywania ustaleń”.', rationale: 'Oddziela przyjaźń od roli zarządczej bez upokarzania partnera.' }
      ]
    },
    keyTakeaway: 'Awans rówieśnika niszczy symetrię — lider musi świadomie budować bezpieczeństwo psychologiczne, by nie stać się samotnym tyranem.'
  }
];

export const chapterThirtyEightSelfExercises: SelfExercise[] = [
  {
    id: 'ex-38-zrodla-wplywu',
    title: 'Autodiagnoza Baz Władzy i Podległości (French & Raven)',
    subtitle: 'Narzędzie do mapowania własnych źródeł wpływu w pracy i życiu prywatnym',
    objective: 'Zrozumienie, na jakich bazach opierasz swoje przywództwo i jakie lęki decydują o twojej uległości wobec innych.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Świadoma analiza baz władzy przenosi aktywność z reaktywnego układu limbicznego (lęk przed autorytetem) do grzbietowo-bocznej kory przedczołowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Audyt Baz Wpływu',
        instruction: 'Wypisz 3 osoby, które postępują zgodnie z twoją wolą. Zastanów się, czy słuchają cię ze strachu (przymus), dla korzyści (nagroda), z szacunku do roli (prawomocna), podziwu (odniesienie), czy twojej wiedzy (ekspercka).',
        promptText: 'Której z baz używasz najczęściej jako domyślnej strategii w relacjach z innymi?',
        placeholder: 'Np. W pracy opieram się głównie na wiedzy eksperckiej, ale w domu niepotrzebnie sięgam po władzę przymusu...'
      },
      {
        stepNumber: 2,
        title: 'Analiza Własnej Uległości',
        instruction: 'Wskaż sytuację z ostatnich miesięcy, w której wykonałeś polecenie mimo wewnętrznego oporu moralnego lub logicznego. Dlaczego nie powiedziałeś „nie”?',
        promptText: 'Jaki lęk powstrzymał cię przed odmową?',
        placeholder: 'Np. Bałem się, że szef uzna mnie za osobę konfliktową i stracę szansę na awans...'
      }
    ],
    reflectionQuestions: [
      'Jak zmieniłoby się twoje poczucie sprawczości, gdybyś oparł swój wpływ wyłącznie na autorytecie eksperckim i referencyjnym, rezygnując z przymusu?',
      'W jakich sytuacjach wchodzisz w stan pośredniczący (agentic state), zrzucając odpowiedzialność moralną na autorytet?'
    ]
  }
];

export const chapterThirtyEight: Chapter = {
  number: 38,
  volume: 3,
  volumeChapterNumber: 22,
  title: 'Władza, Autorytet i Posłuszeństwo',
  subtitle: 'Jak zmienia się człowiek, kiedy ma władzę nad innymi — i jak zmienia się, kiedy ktoś ma władzę nad nim',
  leadParagraph: `Władza nie jest czymś, co człowiek posiada w izolacji. Władza to asymetryczna relacja zależności. Ten rozdział bada fascynujący i niebezpieczny proces psychologiczny: co dzieje się z empatią, uwagą i moralnością jednostki, gdy zyskuje kontrolę nad losem innych, oraz dlaczego racjonalni ludzie są zdolni do bezwzględnego posłuszeństwa w obecności autorytetu.`,
  totalEstimatedPages: 44,
  sections: [
    {
      id: 'sec-38-1',
      pageNumber: 1,
      sectionNumber: '38.1',
      title: 'Władza jako relacja zależności i asymetrii, a nie cecha jednostki',
      category: 'teoria',
      readingTimeMinutes: 24,
      quote: {
        text: 'Władza A nad B jest wprost proporcjonalna do zależności B od dóbr i zasobów kontrolowanych przez A, oraz odwrotnie proporcjonalna do dostępności dla B alternatywnych źródeł zaspokojenia tych samych potrzeb.',
        author: 'Prof. Richard M. Emerson',
        source: 'University of Washington, „Power-Dependence Relations”, American Sociological Review, 1962'
      },
      paragraphs: [
        'W potocznym rozumieniu władzę często traktuje się jak wrodzony przymiot charakteru lub cechę fizyczną: mówi się o „charyzmatycznych liderach”, „osobach o władczej aparycji” lub o tych, którzy „nie nadają się do rządzenia”. Psychologia społeczna i socjologia relacyjna kategorycznie odrzucają ten naiwny esencjalizm. Władza nie jest substancją, rzeczą ani cechą tkwiącą w genach — jest właściwością relacji interpersonalnej.',
        'W przełomowej definicji Richarda Emersona (1962) władza jednostki A nad jednostką B opiera się na prostym wzorze matematyczno-psychologicznym: jest dokładnie równa stopniu zależności B od wartościowych zasobów kontrolowanych przez A. Jeżeli przełożony kontroluje jedyne źródło dochodu w mieście o wysokim bezrobociu, posiada nad tobą gigantyczną władzę.',
        'Jeżeli jednak ten sam pracownik znajdzie na rynku trzy alternatywne oferty pracy z wyższą pensją, władza owego przełożonego natychmiast drastycznie spada — mimo że jego gabinet, stanowisko i charakter nie zmieniły się ani o milimetr. Zrozumienie tej relacyjnej natury jest pierwszym krokiem do demitologizacji wpływu: nie walczymy z mityczną charyzmą kierownika, lecz analizujemy sieć zależności i alternatyw, w której tkwimy.'
      ],
      subsections: [
        {
          id: 'sub-38-1-1',
          title: 'Analiza słów prof. Richarda M. Emersona: Teoria Zależności i Architektura Wyzwolenia',
          content: [
            'Genialna formuła Emersona odczarowuje zjawisko dominacji społecznej. Pokazuje, że nikt nie posiada władzy sam z siebie; władzę dają mu ci, którzy od niego zależą i nie widzą dla siebie alternatyw (BATNA — Best Alternative to a Negotiated Agreement).',
            'Słowa Emersona prowadzą do praktycznego wniosku: najskuteczniejszą metodą neutralizacji opresyjnej władzy nie jest bezpośredni atak na lidera, lecz dywersyfikacja własnych zasobów i budowanie niezależnych alternatyw. Zwiększając własną autonomię, automatycznie redukujesz władzę otoczenia nad sobą.'
          ],
          highlightBox: {
            title: 'Wgląd Strategiczny: Zwiększaj Swoją BATNA',
            content: 'Nigdy nie pozwalaj, by jedna osoba, korporacja czy relacja kontrolowała 100% Twojego poczucia bezpieczeństwa, dochodów lub samooceny. Posiadanie alternatyw przywraca równowagę w każdym układzie społecznym.',
            type: 'insight'
          }
        }
      ]
    },
    {
      id: 'sec-38-2',
      pageNumber: 3,
      sectionNumber: '38.2',
      title: 'Źródła władzy: taksonomia Frencha i Ravena',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'W 1959 roku John French i Bertram Raven stworzyli model, który do dziś stanowi fundament analizy dynamiki wpływu w organizacjach i grupach. Wyróżnili oni pięć (później rozszerzonych do sześciu) odrębnych baz władzy społecznej:',
        '1. Władza nagradzania (Reward Power): oparta na percepcji, że jednostka dysponuje środkami do przyznawania pozytywnych wzmocnień (pieniądze, pochwała, awans, urlop). Działa tylko tak długo, jak nagroda jest pożądana i wierzysz w obietnicę jej przyznania.',
        '2. Władza przymusu (Coercive Power): bazująca na strachu przed karą (zwolnienie, degradacja, publiczna reprymenda, izolacja społeczna). Generuje silny opór wewnętrzny, wymaga stałego nadzoru i niszczy zaufanie.',
        '3. Władza prawomocna / formalna (Legitimate Power): wynika z uwewnętrznionego przez podwładnego przekonania, że druga strona ma instytucjonalne, społeczne lub kulturowe prawo wydawać polecenia ze względu na zajmowaną rolę (sędzia, policjant, dyrektor, rodzic).',
        '4. Władza ekspercka (Expert Power): oparta na wierze, że druga osoba dysponuje unikalną, rzetelną wiedzą, umiejętnościami i doświadczeniem w danej dziedzinie. Nie wymaga sankcji ani nagród — podporządkowujemy się lekarzowi lub nawigatorowi, bo ufamy ich kompetencjom.',
        '5. Władza odniesienia / referencyjna (Referent Power): wynika z podziwu, sympatii i pragnienia bycia podobnym do danej osoby. To psychologiczne jądro charyzmy i lojalności emocjonalnej.',
        '6. Władza informacyjna (Information Power): dostęp do krytycznych danych, których inni nie posiadają (np. asystentka dyrektora kontrolująca kalendarz i obieg dokumentów).'
      ]
    },
    {
      id: 'sec-38-3',
      pageNumber: 5,
      sectionNumber: '38.3',
      title: 'Historia: Przeistoczenie Michała — cena biurka kierownika',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Prześledźmy losy Michała, którego historię poznaliśmy w studium przypadku. Gdy Michał pracował przy jednym stole z Piotrem i Anią, ich relacje regulowała norma wzajemności i rówieśniczej solidarności. Wszyscy dzielili wspólny front przeciwko niejasnym wytycznym zarządu.',
        'Moment powołania na stanowisko Team Leada przeniósł Michała w inne pole sił psychologicznych. Z dnia na dzień to on zaczął odbierać telefony od wiceprezesa z pytaniem: „Dlaczego moduł płatności ma 48 godzin opóźnienia?”. Nagle luz i swobodne tempo pracy dawnych kolegów przestały być urokliwym elementem kultury biurowej, a stały się bezpośrednim zagrożeniem dla jego pozycji zawodowej.',
        'Podczas pamiętnego sporu o architekturę Piotr rzucił żartem: „Michał, przestań gwiazdorzyć, zrobimy to po swojemu”. W ułamku sekundy mózg Michała dokonał reinterpretacji: to nie jest kumpelska uwaga, to publiczne podważenie mojego prawa do decydowania. Ostra odpowiedź Michała była demonstracją władzy prawomocnej, po którą sięgnął, gdyż poczuł, że jego dotychczasowa władza odniesienia właśnie wyparowała. Awans zerwał niewidzialną nić zaufania, zastępując ją chłodną kalkulacją transakcyjną.'
      ],
      caseStudyRef: chapterThirtyEightCaseStudies[0]
    },
    {
      id: 'sec-38-4',
      pageNumber: 7,
      sectionNumber: '38.4',
      title: 'Jak władza zmienia mózg: spadek empatii i tunel celów',
      category: 'neuronauka',
      readingTimeMinutes: 8,
      paragraphs: [
        'Neurobiologia i psychologia eksperymentalna dostarczają uderzających dowodów na to, że doświadczenie władzy fizjologicznie i poznawczo modyfikuje sposób funkcjonowania człowieka. Dacher Keltner z UC Berkeley sformułował tzw. Teorię Dążenia i Zahamowania (Approach/Inhibition Theory of Power).',
        'Zgodnie z tą koncepcją wysoka władza aktywuje Behawioralny System Dążenia (BAS — Behavioral Approach System). Człowiek na szczycie hierarchii koncentruje się niemal wyłącznie na potencjalnych nagrodach, szansach i celach strategicznych. Przestaje obawiać się zagrożeń, staje się bardziej impulsywny i optymistyczny.',
        'Ceną za tę sprawczość jest jednak drastyczne wyciszenie Behawioralnego Systemu Hamowania (BIS) oraz atrofia czujności społecznej. Eksperymenty Adama Galinsky’ego pokazały, że osoby wprowadzone w stan poczucia władzy znacznie gorzej odczytują emocje z wyrazu oczu innych ludzi i trzykrotnie rzadziej przyjmują perspektywę rozmówcy (np. proszone o narysowanie litery „E” na własnym czole, rysowały ją tak, by była czytelna dla nich samych, a odwrócona do góry nogami dla patrzącego).',
        'Władza działa więc jak poznawczy anestetyk: redukuje szum informacyjny pochodzący z emocji innych ludzi, by umożliwić szybkie, bezwzględne działanie. Dla lidera jest to użyteczne narzędzie realizacji celów, dla otoczenia — źródło chłodu i potencjalnego terroru.'
      ],
      interactiveWindowRef: {
        id: 'win-38-1',
        title: 'CZŁOWIEK POD MIKROSKOPEM: Anatomia Przemiany Lidera',
        subtitle: 'Obserwacja krok po kroku: jak awans Michała zneutralizował empatię i wywołał syndrom oblężonej twierdzy',
        context: 'Badanie transformacji Michała z kolegi z biurka w autorytarnego menedżera pod wpływem presji zarządu.',
        type: 'microscope',
        takeaway: 'Władza adaptuje układ poznawczy do realizacji celów kosztem empatii perspektywicznej.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: 'Zmiana układu nagród i kar',
            question: 'Przed kim teraz odpowiada Michał?',
            content: 'Michał przestaje być oceniany za linie kodu, a zaczyna za terminowość całego zespołu przed zarządem.',
            subtext: 'Zastąpienie normy solidarności grupowej normą odpowiedzialności pionowej.'
          },
          {
            stepNumber: 2,
            label: 'Aktywacja Behawioralnego Systemu Dążenia (BAS)',
            question: 'Co dzieje się z uwagą lidera?',
            content: 'Zarząd żąda wdrożenia do piątku. Każda dyskusja o architekturze staje się w oczach Michała wyłącznie stratą czasu.',
            subtext: 'Utrata perspektywizmu poznawczego na rzecz redukcji lęku zadaniowego.'
          },
          {
            stepNumber: 3,
            label: 'Reinterpretacja sygnałów rówieśniczych jako buntu',
            question: 'Dlaczego żart wywołał agresję?',
            content: 'Kiedy kumpel mówi „przestań gwiazdorzyć”, Michał nie słyszy żartu, lecz zagrożenie utratą kontroli nad zespołem.',
            subtext: 'Obrona świeżo zyskanej tożsamości kierowniczej poprzez sięgnięcie po sankcję formalną.'
          },
          {
            stepNumber: 4,
            label: 'Skutek systemowy — cenzura otoczenia',
            question: 'Jaka jest długofalowa cena autorytaryzmu?',
            content: 'Zespół zamyka się w sobie. Michał triumfuje, że „zaprowadził porządek”, nie wiedząc, że właśnie odciął się od prawdy o projekcie.',
            subtext: 'Pozorna uległość podwładnych maskująca wycofanie zaangażowania (quiet quitting).'
          }
        ]
      }
    },
    {
      id: 'sec-38-5',
      pageNumber: 9,
      sectionNumber: '38.5',
      title: 'Autorytet i posłuszeństwo: dlaczego ulegamy symbolom',
      category: 'teoria',
      readingTimeMinutes: 7,
      paragraphs: [
        'Dlaczego kierowcy zwalniają na widok białego samochodu z niebieskim paskiem, nawet jeśli nie widzą w środku policjanta? Dlaczego pacjent bez wahania połyka gorzką tabletkę zapisaną nieczytelnym pismem na recepcie ze stemplem lekarskim?',
        'Uległość wobec autorytetu jest jednym z najstarszych i najbardziej efektywnych ewolucyjnie skrótów poznawczych (heurystyk). W złożonym społeczeństwie nikt nie jest w stanie samodzielnie weryfikować czystości wody w kranie, bezpieczeństwa mostu kolejowego czy skuteczności antybiotyku. Zaufanie do instytucjonalnego autorytetu pozwala zaoszczędzić gigantyczne zasoby poznawcze.',
        'Problem polega na tym, że ludzki mózg reaguje nie tyle na rzeczywistą mądrość czy moralność autorytetu, ile na jego zewnętrzne symbole i atrybuty: tytuły naukowe, mundury, garnitury, pieczęcie, oficjalny żargon i gabinety na najwyższych piętrach. Cialdini wielokrotnie dokumentował, jak obecność takich rekwizytów wyłącza krytyczne myślenie dorosłych, wykształconych ludzi.'
      ]
    },
    {
      id: 'sec-38-6',
      pageNumber: 11,
      sectionNumber: '38.6',
      title: 'Eksperyment Milgrama: Stan Agentalny i Mechanizm Gradacji Uległości',
      category: 'teoria',
      readingTimeMinutes: 28,
      quote: {
        text: 'Zwykli ludzie, po prostu wykonujący swoją pracę i bez żadnej szczególnej wrogości, mogą stać się agentami w straszliwym procesie niszczycielskim. Co więcej, nawet gdy niszczycielskie skutki ich działań stają się całkowicie oczywiste, bardzo niewielu ma wystarczającą siłę, by sprzeciwić się autorytetowi.',
        author: 'Prof. Stanley Milgram',
        source: 'Yale University, „Obedience to Authority: An Experimental View”, Harper & Row, 1974'
      },
      paragraphs: [
        'Przeprowadzony w latach 1961–1963 na Uniwersytecie Yale eksperyment Stanleya Milgrama pozostaje najbardziej wstrząsającym badaniem empirycznym w historii psychologii. Przypomnijmy: aż 65% reprezentatywnych obywateli New Haven (robotników, urzędników, inżynierów) aplikowało drugiemu człowiekowi serię wstrząsów elektrycznych aż do maksymalnej, potencjalnie śmiertelnej dawki 450 V (oznaczonej ostrzeżeniem „XXX”), tylko dlatego, że badacz w szarym fartuchu laboratoryjnym powtarzał opanowanym tonem: „Eksperyment wymaga, aby pan kontynuował”.',
        'Przez lata interpretowano ten wynik jako dowód na „uśpionego potwora” drzemiącego w każdym ludzkim sercu. Współczesna psychologia społeczna i reanalizy nagrań z archiwum Yale (m.in. prace Haslama i Reichera) pokazują jednak znacznie bardziej złożony mechanizm:',
        '1. Badani nie byli sadystami: pocili się, jąkali, obgryzali paznokcie do krwi, błagali eksperymentatora o przerwanie badania. Przeżywali potężny, obezwładniający dysonans moralny.',
        '2. Kluczem było wejście w STAN POŚREDNICZĄCY (Agentic State): stan psychiczny, w którym jednostka przestaje postrzegać siebie jako osobę odpowiedzialną za własne czyny, a zaczyna widzieć się wyłącznie jako pasywne narzędzie wykonujące wolę prawomocnego autorytetu.',
        '3. Technika stopniowania (Foot-in-the-Door): wstrząsy nie zaczynały się od 450 V, lecz od 15 V i rosły o drobne 15 V na każdym kroku. Gdyby badany odmówił przy 300 V, musiałby przyznać przed samym sobą, że jego posłuszeństwo przy 285 V było już złe i niemoralne.',
        '4. Identyfikacja z misją: posłuszeństwo spadało do zera, kiedy eksperymentator wydawał polecenie w formie czystego nakazu („Musi pan to zrobić”), a rosło, gdy apelował do wyższego celu nauki („Eksperyment jest kluczowy dla wiedzy o pamięci”). Ludzie ulegają nie ślepej przemocy, lecz autorytetowi ubranemu w szatę wyższej konieczności.'
      ],
      subsections: [
        {
          id: 'sub-38-6-1',
          title: 'Analiza słów prof. Stanleya Milgrama: Rozproszone Sumienie i Anatomia Zła Systemowego',
          content: [
            'Diagnoza prof. Milgrama poraża swoją aktualnością. Zło w świecie nowożytnym rzadko bywa skutkiem demonicznej nienawiści; znacznie częściej rodzi się z biurokratycznego podziału pracy i oddania odpowiedzialności na zewnątrz.',
            'Kiedy odpowiedzialność moralna zostaje rozproszona w strukturze hierarchicznej — gdy polityk wydaje dekret, urzędnik pisze rozporządzenie, a szeregowy wykonawca naciska guzik — nikt z nich indywidualnie nie czuje się winny. Każdy z nich jest tylko „częścią mechanizmu”. To jest właśnie stan agentalny, przed którym Milgram ostrzegał całą ludzkość.'
          ],
          highlightBox: {
            title: 'Wgląd Moralny: Odpowiedzialność Indywidualna',
            content: 'Nigdy nie zasłaniaj się zdaniem: „Ja tylko wykonywałem polecenia”. Moralność i odpowiedzialność prawna za własne czyny zawsze pozostają przy człowieku, który naciska przycisk, bez względu na szarżę osoby wydającej rozkaz.',
            type: 'warning'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'win-38-5',
        title: 'FAKT CZY INTERPRETACJA? Nowe odczytanie posłuszeństwa',
        subtitle: 'Rozdzielanie obiektywnych wyników naukowych od obiegowych mitów wokół Milgrama',
        context: 'Jak uproszczona pop-psychologia zamieniła badania Milgrama w opowieść o „ukrytym potworze”.',
        type: 'what_we_know',
        takeaway: 'Badani Milgrama nie byli sadystami — ulegli mechanizmom struktury i zrzucenia odpowiedzialności.',
        whatWeKnow: {
          items: [
            {
              id: 'f-1',
              statement: 'Uczestnicy eksperymentu nie odczuwali stresu ani dylematów moralnych i chętnie razili prądem.',
              category: 'interpretacja',
              explanation: 'Jest to bzdura. Nagrania i notatki wykazują gigantyczny stres somatyczny: drżenie rąk, pocenie się, płacz i próby dyskusji.'
            },
            {
              id: 'f-2',
              statement: '65% badanych doszło do najwyższego napięcia 450V w klasycznym wariancie.',
              category: 'fakt',
              explanation: 'To prawda, to obiektywny i powtarzalny wynik statystyczny tego konkretnego wariantu badania.'
            },
            {
              id: 'f-3',
              statement: 'Obecność drugiego badacza, który kwestionował polecenia, obniżała posłuszeństwo niemal do zera.',
              category: 'fakt',
              explanation: 'Prawda. Jeden sojusznik wyłamujący się ze schematu całkowicie niszczył autorytet i dawał wolność wyboru innym.'
            }
          ]
        }
      }
    },
    {
      id: 'sec-38-7',
      pageNumber: 13,
      sectionNumber: '38.7',
      title: 'Rewizja eksperymentu Zimbardo: rola instrukcji i normy sytuacji',
      category: 'teoria',
      readingTimeMinutes: 7,
      paragraphs: [
        'Stanfordzki Eksperyment Więzienny (1971) Philipa Zimbardo przez lata służył jako podręcznikowy dowód na to, że zwykli studenci włożeni w mundur strażnika więziennego automatycznie stają się sadystami pod wpływem samej sytuacji.',
        'Odtajnione po latach nagrania i analizy historyczne (m.in. Thibault Le Texier, 2019) wykazały jednak, że eksperyment nie był spontanicznym procesem deindywiduacji, lecz wyreżyserowanym spektaklem. Zimbardo osobiście instruował strażników, jak mają się zachowywać, podpowiadał im techniki upokarzania i jasno dawał do zrozumienia, jakich wyników oczekuje, by „udowodnić patologię więziennictwa”.',
        'Co to oznacza dla nas? Wniosek jest jeszcze bardziej alarmujący niż wersja Zimbardo: ludzie nie stają się oprawcami automatycznie pod wpływem kostiumu. Stają się nimi wtedy, gdy prawomocny autorytet daje im wyraźne moralne przyzwolenie na okrucieństwo w imię wyższej sprawy i zapewnia, że nie poniosą za to osobistej odpowiedzialności.'
      ]
    },
    {
      id: 'sec-38-8',
      pageNumber: 15,
      sectionNumber: '38.8',
      title: 'Historia: „Dyrektor podpisał” — anatomia uległości biurowej',
      category: 'studium-przypadku',
      readingTimeMinutes: 8,
      paragraphs: [
        'W dużej spółce dystrybucyjnej Joanna, starsza księgowa, zauważyła podwójne fakturowanie fikcyjnych usług doradczych na kwotę kilkuset tysięcy złotych, wystawianych przez spółkę powiązaną z członkiem zarządu. Poszła z tym do swojego bezpośredniego kierownika, Marka.',
        'Marek spojrzał na dokumenty, zbladł, zamknął teczkę i powiedział: „Joanna, to jest zatwierdzone przez dyrektora finansowego i audytora zewnętrznego. Mają wgląd w całą strukturę podatkową grupy, my widzimy tylko ułamek. Naszym zadaniem jest sprawdzić poprawność formalną i zaksięgować”.',
        'Joanna poczuła ulgę. Skoro dyrektor wie, a kierownik nakazuje, ciężar moralny spadł z jej barków. Kiedy pół roku później sprawą zajęła się prokuratura, wszyscy pracownicy działu zeznawali identycznie: „Ja tylko realizowałem instrukcję przełożonego, to nie była moja decyzja”. Nikt nie czuł się sprawcą oszustwa.'
      ]
    },
    {
      id: 'sec-38-9',
      pageNumber: 17,
      sectionNumber: '38.9',
      title: 'Władza a teoria umysłu: dlaczego na szczycie robi się głucho',
      category: 'neuronauka',
      readingTimeMinutes: 8,
      paragraphs: [
        'Teoria Umysłu (Theory of Mind) to zdolność do przypisywania innym ludziom odrębnych stanów psychicznych: wiedzy, intencji, przekonań i emocji. Jest podstawą ludzkiej empatii.',
        'Wraz ze wzrostem władzy Teoria Umysłu ulega paradoksalnemu upośledzeniu. Dlaczego? Ponieważ ewolucyjnie wnikliwe analizowanie cudzych stanów psychicznych jest kosztowną pracą poznawczą, którą wykonujemy wtedy, gdy jesteśmy zależni od innych. Szeregowy pracownik godzinami analizuje każdy grymas prezesa, by przewidzieć jego humor i uniknąć zwolnienia. Prezes nie musi analizować grymasu szeregowego pracownika — jego pozycja nie zależy od jego nastroju.',
        'Powstaje zjawisko „asymetrii uważności”: osoby o niższym statusie wiedzą o przełożonych znacznie więcej niż przełożeni o nich. Liderzy zaczynają traktować ludzi instrumentalnie — nie jako złożone istoty z własnymi dramatami, lecz jako funkcje wykonawcze („zasób ludzki”).'
      ]
    },
    {
      id: 'sec-38-10',
      pageNumber: 19,
      sectionNumber: '38.10',
      title: 'Mechanizm racjonalizacji autorytetu: „Oni muszą wiedzieć coś więcej”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Kiedy podwładny styka się z poleceniem, które wydaje mu się nielogiczne, absurdalne lub szkodliwe, staje przed ostrym dysonansem poznawczym:',
        'Hipoteza A: Mój przełożony jest niekompetentny, bezmyślny lub działa na szkodę firmy.',
        'Hipoteza B: Mój przełożony posiada szerszy kontekst strategiczny, dane z zarządu, których ja nie widzę, i realizuje mądry plan, którego po prostu jeszcze nie rozumiem.',
        'Niemal bezwyjątkowo ludzki umysł wybiera Hipotezę B. Dlaczego? Ponieważ przyjęcie Hipotezy A wywołuje natychmiastowe przerażenie: oznacza, że moje bezpieczeństwo finansowe zależy od człowieka niepoczytalnego, a ja muszę podjąć heroiczny i ryzykowny sprzeciw. Wiara w tajemną mądrość „góry” to mechanizm obronny chroniący nas przed poczuciem bezradności w chaotycznym świecie.'
      ],
      interactiveWindowRef: {
        id: 'win-38-2',
        title: 'CO ZMIENIŁOBY SYTUACJĘ? Przełamanie Uległości Wobec Polecenia',
        subtitle: 'Symulacja alternatyw w historii Joanny: które interwencje zatrzymałyby oszustwo?',
        context: 'Dylemat księgowej otrzymującej ustne polecenie zaksięgowania fikcyjnej faktury.',
        type: 'what_if',
        takeaway: 'Przeniesienie sporu na twarde procedury dowodowe natychmiast paraliżuje nieetyczne polecenia władzy.',
        whatIfOptions: {
          defaultScenario: 'Joanna bez sprzeciwu księguje fikcyjną fakturę, ufając, że dyrektor i kierownik biorą całą odpowiedzialność na siebie.',
          options: [
            {
              id: 'opt-a',
              changeLabel: 'Opcja A: Samotny protest w gabinecie Marka',
              resultingInterpretation: 'Joanna kategorycznie odmawia zaksięgowania bez formalnych procedur.',
              resultingBehavior: 'Marek sam podpisuje przelew, a Joanna zostaje odsunięta za „brak elastyczności”.',
              psychologicalImpact: 'Niska skuteczność bez dowodów pisemnych i sojuszników organizacyjnych.'
            },
            {
              id: 'opt-b',
              changeLabel: 'Opcja B: Żądanie polecenia na piśmie z klauzulą odpowiedzialności',
              resultingInterpretation: 'Joanna wysyła oficjalnego maila z prośbą o potwierdzenie instrukcji.',
              resultingBehavior: 'Marek natychmiast cofa dokument, bojąc się pozostawienia śladu w audycie.',
              psychologicalImpact: 'Wysoka ochrona prawna i natychmiastowe zamrożenie nadużycia.'
            }
          ]
        }
      }
    },
    {
      id: 'sec-38-11',
      pageNumber: 21,
      sectionNumber: '38.11',
      title: 'Odpowiedzialność rozproszona w strukturach piramidalnych',
      category: 'teoria',
      readingTimeMinutes: 7,
      paragraphs: [
        'Hannah Arendt w swojej słynnej relacji z procesu Adolfa Eichmanna wprowadziła pojęcie „banalności zła”. Eichmann nie był demonicznym potworem — był pedantycznym urzędnikiem logistyki kolejowej, którego ambicją było sprawne zarządzanie rozkładami jazdy pociągów.',
        'Nowoczesne korporacje, armie i administracje publiczne są zorganizowane w sposób, który niemal perfekcyjnie izoluje sumienie jednostki od ostatecznego rezultatu działania organizacji:',
        '- Dział prawny przygotowuje formułę prawną umożliwiającą ominięcie norm środowiskowych.',
        '- Dział inżynieryjny konstruuje oprogramowanie fałszujące emisję spalin.',
        '- Dział marketingu tworzy kampanię o „zielonej technologii”.',
        '- Szeregowi sprzedawcy zachwalają samochód klientom.',
        'Kto w tym łańcuchu truje powietrze w miastach? Każdy z nich wykonuje jedynie „dobrą robotę inżynierską” lub „spełnia targety”. Złożoność struktury zdejmuje z człowieka poczucie winy, zamieniając etykę w procedurę optymalizacyjną.'
      ]
    },
    {
      id: 'sec-38-12',
      pageNumber: 23,
      sectionNumber: '38.12',
      title: 'Władza formalna a władza nieformalna: kto naprawdę rządzi',
      category: 'teoria',
      readingTimeMinutes: 7,
      paragraphs: [
        'Organigram firmy wywieszony na ścianie pokazuje, jak władza POWINNA płynąć wedle założeń właścicieli. Socjogram relacji nieformalnych pokazuje, jak władza PŁYNIE w rzeczywistości.',
        'Wielokrotnie w organizacjach kluczowe decyzje nie zapadają przy stole zarządu, lecz podczas nieformalnych rozmów w palarni, przy ekspresie do kawy lub w gabinecie osoby, która w strukturze zajmuje pozycję zaledwie koordynatora. Do źródeł władzy nieformalnej należą:',
        '- Węzłowa pozycja w sieci komunikacyjnej (Centrality): kontrola nad tym, kto z kim rozmawia.',
        '- Dostęp do ucha lidera: rola zaufanego doradcy lub wieloletniego współpracownika.',
        '- Niezastępowalność techniczna: jedyny człowiek, który rozumie stary kod systemu bazodanowego.',
        'Mądry analityk wpływu społecznego nie patrzy na tabliczki na drzwiach — obserwuje, do kogo ludzie zwracają się o radę i czyje milczenie budzi największy niepokój na zebraniu.'
      ],
      interactiveWindowRef: {
        id: 'win-38-6',
        title: 'DWA SPOJRZENIA: Formalny menedżer i nieformalny lider',
        subtitle: 'Zderzenie perspektyw w walce o rząd dusz w zespole programistów',
        context: 'Jak formalny kierownik zderza się z potęgą merytoryczną nieformalnego lidera.',
        type: 'dual_perspectives',
        takeaway: 'Władza formalna bez poparcia autorytetu merytorycznego i relacyjnego generuje ciągły, paraliżujący sabotaż.',
        dualPerspective: {
          situation: 'Wprowadzenie nowych restrykcyjnych procedur raportowania czasu pracy.',
          personA: {
            name: 'Krzysztof (Formalny Manager)',
            quote: '„Muszę mieć raporty, bo tego żąda centrala. Moje stanowisko daje mi prawo tego oczekiwać”.',
            whatTheyKnow: 'Presja centrali, wymogi raportowe, konieczność optymalizacji budżetu.',
            whatTheyMiss: 'Brak rzeczywistego autorytetu i kompletna obcość wobec zespołu inżynierów.',
            interpretation: 'Uważa opór programistów za lenistwo i bunt przeciwko dyscyplinie.',
            coreNeed: 'Kontrola i legitymizacja swojej pozycji.',
            fear: 'Kompromitacja przed zarządem i utrata twarzy.',
            action: 'Sięganie po władzę formalną i groźbę przymusu.'
          },
          personB: {
            name: 'Andrzej (Nieformalny Lider, główny architekt)',
            quote: '„Krzysztof to typowy biurokrata, który nie rozumie naszej pracy i marnuje nasz czas”.',
            whatTheyKnow: 'Skutki biurokracji dla tempa pisania kodu, oddanie i zaufanie całego zespołu.',
            whatTheyMiss: 'Niewidzialne z góry presje budżetowe, którym podlega Krzysztof.',
            interpretation: 'Widzi w managerze wroga produktywności i technicznego analfabetę.',
            coreNeed: 'Ochrona zespołu i merytoryczna jakość projektu.',
            fear: 'Wypalenie zawodowe i paraliż kreatywności zespołu.',
            action: 'Cichy sabotaż nowych wytycznych i ośmieszanie pomysłów managera.'
          },
          synthesis: 'Tylko sojusz władzy formalnej (Krzysztof) z ekspercką (Andrzej) zapobiega paraliżowi organizacji.'
        }
      }
    },
    {
      id: 'sec-38-13',
      pageNumber: 25,
      sectionNumber: '38.13',
      title: 'Historia: Dwa oddziały szpitalne — autorytaryzm a błędy medyczne',
      category: 'studium-przypadku',
      readingTimeMinutes: 8,
      paragraphs: [
        'W badaniach Amy Edmondson nad bezpieczeństwem psychologicznym (psychological safety) w szpitalach klinicznych pojawił się pozorny paradoks: oddziały kierowane przez ciepłych, otwartych ordynatorów raportowały ZNACZNIE WIĘCEJ błędów medycznych niż oddziały rządzone twardą ręką przez autorytarnych profesorów.',
        'Początkowo sądzono, że ordynatorzy-demokraci mają gorszych lekarzy. Prawda okazała się wstrząsająca: na oddziałach autorytarnych popełniano dokładnie tyle samo (lub więcej) pomyłek w dawkowaniu leków, ale pielęgniarki i rezydenci PANICZNIE BALI SIĘ ICH ZGŁASZAĆ. Każde zgłoszenie błędu kończyło się publicznym linczem i wyzwiskami ze strony „autorytetu”. W efekcie błędy zamiatano pod dywan, a pacjenci umierali na powikłania o „nieznanej przyczynie”.',
        'Na oddziałach o wysokim bezpieczeństwie psychologicznym zgłoszenie pomyłki traktowano jako dane do poprawy procedury. Autorytarny styl zarządzania nie eliminuje błędów — eliminuje jedynie wiedzę lidera o tym, że błędy istnieją.'
      ],
      interactiveWindowRef: {
        id: 'win-38-7',
        title: 'KONTRPRZYPADEK: Gdy opór pielęgniarki ratuje pacjenta',
        subtitle: 'Przełamanie ślepego posłuszeństwa w pionie klinicznym',
        context: 'Jak tradycyjna hierarchia medyczna paraliżuje myślenie i jak opór jednostki ratuje ludzkie życie.',
        type: 'counter_case',
        takeaway: 'Bezpieczeństwo psychologiczne to nie brak wymagań, lecz warunek sine qua non bezpieczeństwa fizycznego.',
        counterCase: {
          standardTheory: 'Ordynator (profesor) jako najwyższy autorytet posiada pełną, nieomylną wiedzę o leczeniu, a personel pomocniczy ma bezwzględnie realizować zalecenia.',
          counterExample: 'Pielęgniarka Maria zauważa, że profesor przepisał pacjentowi dawkę leku nasercowego pięciokrotnie przekraczającą normę dobową. Gdy zwraca mu uwagę, profesor grzmi przy pacjencie: „Czy pani ma dyplom lekarski, czy jest pani tylko od podawania basenu?! Robić, co napisałem!”',
          whyItDefiesRule: 'Maria staje przed dylematem: ulec autorytetowi prawomocnemu i eksperckiemu pod groźbą linczu, czy odmówić podania leku. Wybiera odmowę. Profesor z wściekłością podaje lek sam, ale zatrzymuje go ordynator innego oddziału, potwierdzając śmiertelne zagrożenie.',
          deeperLesson: 'Gdy hierarchia wyłącza krytycyzm personelu, instytucja staje się maszyną do generowania śmiertelnych wypadków.'
        }
      }
    },
    {
      id: 'sec-38-14',
      pageNumber: 27,
      sectionNumber: '38.14',
      title: 'Psychologiczne ubezwłasnowolnienie i wyuczona bezradność w relacjach hierarchicznych',
      category: 'teoria',
      readingTimeMinutes: 7,
      paragraphs: [
        'Co dzieje się z człowiekiem, który przez lata funkcjonuje w środowisku całkowicie zdominowanym przez autorytarną władzę (toksyczny dom rodzinny, sekta, przemocowe małżeństwo, despotyczna korporacja)?',
        'Rozwija się u niego zjawisko wyuczonej bezradności (learned helplessness). Kiedy jednostka odkrywa, że żadna jej inicjatywa, sprzeciw czy racjonalny argument nie mają wpływu na zachowanie władcy, jej mózg podejmuje decyzję o wygaszeniu wszelkiej aktywności dążeniowej. Człowiek przestaje myśleć samodzielnie, czekając na najdrobniejsze instrukcje.',
        'W skrajnych przypadkach dochodzi do identyfikacji z agresorem: ubezwłasnowolniony podwładny zaczyna zaciekle bronić tyrana przed krytyką z zewnątrz, widząc w nim jedyną gwarancję ładu i porządku w swoim zrujnowanym świecie.'
      ]
    },
    {
      id: 'sec-38-15',
      pageNumber: 29,
      sectionNumber: '38.15',
      title: 'Język władzy: eufemizmy, pasywizacja i technokratyzacja',
      category: 'teoria',
      readingTimeMinutes: 7,
      paragraphs: [
        'Władza utrzymuje posłuszeństwo nie tylko siłą i pieniędzmi, ale przede wszystkim kontrolą nad językiem, za pomocą którego opisuje się rzeczywistość. George Orwell w „Roku 1984” nazwał to nowomową; w nowoczesnym świecie proces ten przybiera subtelniejsze formy:',
        '1. Strona bierna eliminująca sprawcę: Zamiast „Zwolniliśmy pięciuset pracowników, by zwiększyć zysk”, mówi się: „Zostały podjęte działania optymalizacyjne w obszarze zasobów ludzkich”. Sprawca znika — decyzja staje się prawem natury.',
        '2. Peryfrazy i eufemizmy medyczno-techniczne: Zamiast „kryzys i straty” mówi się „wyzwania rynkowe”. Zamiast „zabicie cywilów” w raportach wojskowych pojawia się termin „straty uboczne” (collateral damage).',
        '3. Sakralizacja procedury: „Taka jest polityka firmy”, „System nie pozwala na taką operację”. Odpowiedzialność zostaje przeniesiona z żywego człowieka na bezduszny system komputerowy lub kodeks korporacyjny.'
      ]
    },
    {
      id: 'sec-38-16',
      pageNumber: 31,
      sectionNumber: '38.16',
      title: 'Odwaga cywilna i czynniki ułatwiające opór wobec destrukcyjnego autorytetu',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Co sprawia, że niektórzy ludzie potrafią powiedzieć autorytetowi stanowcze „NIE”, ryzykując karierę, wolność, a niekiedy życie? Badania nad dysydentami politycznymi, sygnalistami (whistleblowers) oraz uczestnikami wariantów badań Milgrama wskazują na kilka kluczowych warunków:',
        '1. Obecność choćby jednego sprzymierzeńca: W wariancie Milgrama, gdzie badany miał obok siebie dwóch pomocników, którzy odmówili podawania wstrząsów, odsetek uległych spadł z 65% do 10%. Samotny sprzeciw wymaga tytanicznej siły; widok innej osoby mówiącej „nie” natychmiast legitymizuje odmowę.',
        '2. Oparcie tożsamości poza strukturą: Człowiek, którego jedyną wartością w życiu jest pozycja w danej korporacji czy partii, nie postawi się liderowi. Odwagę mają ci, którzy czerpią poczucie godności z silnej rodziny, niezależnej pozycji materialnej lub głębokich wartości duchowych/etycznych.',
        '3. Jasność procedur prawnych i dowodowych: Sygnalista nie rzuca oskarżeń na oślep — gromadzi twarde fakty i dokumenty, rozumiejąc mechanizmy obronne instytucji.'
      ],
      interactiveWindowRef: {
        id: 'win-38-3',
        title: 'DWA SPOJRZENIA: Rozmowa Ocenowa w Gabinecie Prezesa',
        subtitle: 'Zderzenie perspektyw: jak to samo spotkanie widzi dyrektor generalny i młody kierownik',
        context: 'Rozmowa o redukcji etatów w wieloletnim zakładzie produkcyjnym.',
        type: 'dual_perspectives',
        takeaway: 'Ukrywanie strategicznego kontekstu rodzi wzajemne oskarżenia o cynizm i niszczy zaufanie.',
        dualPerspective: {
          situation: 'Spotkanie prezesa z kierownikiem w sprawie natychmiastowego zwolnienia pracowników.',
          personA: {
            name: 'Prezes Edward (30 lat u władzy)',
            quote: '„Kierownik musi mieć odwagę ciąć koszty, inaczej fundusz zamknie całą fabrykę”.',
            whatTheyKnow: 'Zna ultimatum zagranicznych inwestorów, które grozi likwidacją tysiąca miejsc pracy.',
            whatTheyMiss: 'Nie dostrzega dramatu moralnego Tomasza i dewastacji zaufania w załodze.',
            interpretation: 'Widzi w Tomaszu miękkiego idealistę niegotowego do prawdziwego biznesu.',
            coreNeed: 'Uratowanie płynności całego przedsiębiorstwa.',
            fear: 'Bankructwo spółki i upokorzenie zawodowe.',
            action: 'Wywieranie bezwzględnego nacisku służbowego na kierownika.'
          },
          personB: {
            name: 'Kierownik Tomasz (32 lata, idealista)',
            quote: '„Ci mechanicy pracowali tu po 20 lat, nie mogę wyrzucić ich na bruk bez odpraw”.',
            whatTheyKnow: 'Zna rodziny zwalnianych pracowników i ich wkład w rozwój firmy.',
            whatTheyMiss: 'Nie wie o groźbie upadłości fabryki, ponieważ prezes ukrywa raporty funduszu.',
            interpretation: 'Widzi w prezesie cynicznego socjopatę kierującego się chciwością.',
            coreNeed: 'Zachowanie własnej godności moralnej i lojalności wobec zespołu.',
            fear: 'Stanie się bezdusznym narzędziem korporacyjnym.',
            action: 'Stawianie oporu i groźba rezygnacji ze stanowiska.'
          },
          synthesis: 'Ukrywanie szerszego kontekstu strategicznego przez władzę zawsze prowokuje opór etyczny i niszczy zaufanie.'
        }
      }
    },
    {
      id: 'sec-38-17',
      pageNumber: 33,
      sectionNumber: '38.17',
      title: 'Granice posłuszeństwa: kiedy lojalność staje się współudziałem',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'Lojalność jest jedną z najwyżej cenionych cnót społecznych. To cement, który scala zespoły, małżeństwa i państwa w chwilach kryzysu. Istnieje jednak moment zwrotny, w którym lojalność przestaje być cnotą, a staje się patologią moralną.',
        'Zjawisko to nazywamy „lojalnością toksyczną” (toxic loyalty). Polega na bezkrytycznym wspieraniu autorytetu lub grupy nawet wtedy, gdy ich działania w jawny sposób niszczą innych ludzi, łamią prawo lub depczą wartości, na których grupa została ufundowana.',
        'Kiedy lojalność staje się współudziałem? Wtedy, gdy twoje milczenie staje się warunkiem koniecznym do tego, by niegodziwość mogła trwać dalej. W tym punkcie nie ma już pozycji neutralnej: brak sprzeciwu jest psychologicznym i prawnym podpisem pod działaniem sprawcy.'
      ]
    },
    {
      id: 'sec-38-18',
      pageNumber: 35,
      sectionNumber: '38.18',
      title: 'Pętla nadużycia władzy: powolna korupcja etyczna lidera',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Lord Acton sformułował słynny aforyzm: „Władza korumpuje, a władza absolutna korumpuje absolutnie”. Współczesna psychologia precyzuje to zdanie: władza nie tyle tworzy nowe zło z niczego, ile uruchamia samonapędzającą się pętlę sprzężenia zwrotnego.',
        'Pętla ta wygląda następująco: Władza daje przywileje → Podwładni schlebiają liderowi z obawy przed karą → Lider otrzymuje wyłącznie pochlebne informacje zwrotne → U lidera rozwija się pycha (hubris) i przekonanie o własnej nieomylności → Lider zaczyna uważać, że powszechne zasady go nie dotyczą („Jestem ponad prawem, bo tworzę ten sukces”) → Lider podejmuje coraz bardziej ryzykowne i nieetyczne decyzje → Każdy sprzeciw traktuje jako zdradę.',
        'Bez zewnętrznych bezpieczników (wolne media w państwie, niezależna rada nadzorcza w spółce, silny partner w małżeństwie) każdy człowiek prędzej czy później ulegnie erozji moralnej pod wpływem nieskrępowanej władzy.'
      ],
      interactiveWindowRef: {
        id: 'win-38-4',
        title: 'PĘTLA RELACYJNA: Samonapędzające się Nadużycie Władzy',
        subtitle: 'Interaktywna rekonstrukcja mechanizmu powstawania arogancji u dyrektora',
        context: 'Jak izolacja od krytyki i potakiwanie podwładnych prowadzą do syndromu Hubris.',
        type: 'loop',
        takeaway: 'Brak zinstytucjonalizowanej krytyki nieuchronnie korumpuje osąd poznawczy każdego lidera.',
        loopSteps: [
          {
            step: 1,
            title: 'Spektakularny sukces rynkowy',
            actor: 'Lider',
            action: 'Osiągnięcie rekordowych wyników i rozszerzenie kompetencji zarządczych.',
            interpretationByOther: 'Zarząd i zespół uznają lidera za geniusza biznesu.',
            emotionalTrigger: 'Wyrzut dopaminy i aktywacja poczucia omnipotencji.',
            counterAction: 'Wycofanie ostrożności i procedur kontrolnych.'
          },
          {
            step: 2,
            title: 'Wyciszenie głosów krytycznych',
            actor: 'Zespół podwładnych',
            action: 'Usuwanie złych wieści z raportów ze strachu przed gniewem szefa.',
            interpretationByOther: 'Lider utwierdza się w przekonaniu, że nikt nie ma wątpliwości.',
            emotionalTrigger: 'Pycha (Hubris) i poczucie bycia ponad prawem.',
            counterAction: 'Podejmowanie nieetycznych operacji na krawędzi prawa.'
          }
        ]
      }
    },
    {
      id: 'sec-38-19',
      pageNumber: 37,
      sectionNumber: '38.19',
      title: 'Konstruktywne przywództwo: jak przewodzić bez manipulacji i dehumanizacji',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'Czy władza musi być destrukcyjna? Absolutnie nie. Władza jest energią społeczną — podobnie jak prąd elektryczny może zasilić inkubator ratujący życie noworodka albo porazić człowieka na krześle elektrycznym.',
        'Konstruktywne przywództwo (Servant Leadership wg Roberta Greenleafa lub Przywództwo Transformacyjne wg Jamesa MacGregora Burnsa) opiera się na radykalnej redefinicji roli lidera:',
        '1. Władza jako służba misji, a nie ego: Lider nie pyta: „Jak mogę użyć ludzi do powiększenia mojej potęgi?”, lecz: „Jakich warunków potrzebują ci ludzie, byśmy wspólnie zrealizowali cel?”.',
        '2. Budowanie autonomii zamiast zależności: Dobry lider dąży do tego, by jego obecność stawała się z czasem coraz mniej potrzebna.',
        '3. Świadome wprowadzanie instytucji „adwokata diabła”: Mądry przywódca wyznacza w zespole osoby, których formalnym obowiązkiem jest szukanie dziur w jego planach i publiczne ich punktowanie.',
        '4. Odpowiedzialność transparentna: Lider bierze na siebie winę za porażki, a oddaje zespołowi chwałę za sukcesy.'
      ]
    },
    {
      id: 'sec-38-20',
      pageNumber: 39,
      sectionNumber: '38.20',
      title: 'Eksperyment z pozycją: jak status zniekształca ocenę argumentu',
      category: 'teoria',
      readingTimeMinutes: 7,
      paragraphs: [
        'Wyobraź sobie następujące doświadczenie: grupie stu menedżerów przedstawiono krótką notatkę z propozycją całkowitej zmiany strategii marketingowej spółki. Notatka była napisana w sposób rzeczowy, zawierała twarde dane liczbowe i wskazywała na ryzyka obecnego podejścia.',
        'Połowie badanych powiedziano, że autorem notatki jest Jan Kowalski — stażysta odbywający bezpłatne praktyki od trzech tygodni. Drugiej połowie powiedziano, że autorem jest dr Jan Kowalski — wiceprezes ds. strategii ściągnięty z londyńskiego oddziału McKinsey.',
        'Wyniki? Kiedy autorem był „wiceprezes”, argumenty oceniono jako genialne, dalekowzroczne i rewolucyjne (平均 ocena 8.7/10). Kiedy autorem był „stażysta”, te same argumenty, zapisane tymi samymi słowami, uznano za naiwne, ryzykowne, aroganckie i świadczące o braku zrozumienia specyfiki branży (średnia ocena 3.2/10).',
        'Nasz aparat poznawczy nie analizuje czystej logiki argumentu w próżni. W pierwszej kolejności skanuje status nadawcy, dopasowując interpretację treści do jego miejsca na drabinie hierarchicznej.'
      ],
      interactiveWindowRef: {
        id: 'win-38-8',
        title: 'ZMIEŃ JEDEN ELEMENT: Czyj argument ma znaczenie?',
        subtitle: 'Symulacja wpływu statusu na akceptację krytycznego rozwiązania inżynieryjnego',
        context: 'Jak zmienia się percepcja merytorycznych obiekcji w zależności od formalnej pozycji nadawcy.',
        type: 'what_if',
        takeaway: 'System hierarchiczny odrzuca krytykę od dołu nie ze względu na jej treść, lecz ze względu na status autora.',
        whatIfOptions: {
          defaultScenario: 'Notatka inżynierska wskazująca na przeciążenie bazy danych zostaje odrzucona przez dyrektora operacyjnego jako „panikarstwo i hamowanie rozwoju”.',
          options: [
            {
              id: 'status-stazysta',
              changeLabel: 'Warunek A: Autorem notatki jest stażysta',
              resultingInterpretation: 'Dyrektor uznaje uwagi za dowód na „teoretyczne przemądrzanie się nowicjusza”.',
              resultingBehavior: 'Ignoruje ostrzeżenie i nakazuje wdrożenie kodu bez poprawek architektonicznych.',
              psychologicalImpact: 'Potwierdzenie błędu atrybucji i klasyczne wykluczenie argumentu ze względu na brak statusu.'
            },
            {
              id: 'status-architekt',
              changeLabel: 'Warunek B: Autorem notatki jest architekt z 15-letnim stażem',
              resultingInterpretation: 'Ten sam tekst zostaje uznany za „głęboką, przezorną i niezwykle cenną analizę ryzyka”.',
              resultingBehavior: 'Wstrzymuje wdrożenie, powołuje sztab kryzysowy i przyznaje budżet na przebudowę bazy.',
              psychologicalImpact: 'Aktywacja heurystyki autorytetu — twarde argumenty są słuchane tylko z ust oznaczonych rangą.'
            }
          ]
        }
      }
    },
    {
      id: 'sec-38-21',
      pageNumber: 41,
      sectionNumber: '38.21',
      title: 'Ćwiczenia autorefleksyjne: Twój osobisty stosunek do autorytetu',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Każdy człowiek nosi w sobie uwewnętrznioną matrycę władzy, ukształtowaną we wczesnym dzieciństwie w relacjach z rodzicami, nauczycielami i pierwszymi pracodawcami. Wyróżniamy trzy główne wzorce:',
        '1. Automatyczny uległy: Na widok munduru, tytułu lub surowego szefa natychmiast kurczy się wewnętrznie, przeprasza, że żyje, i zgadza się na każde żądanie, kumulując urazę i bierną agresję.',
        '2. Automatyczny buntownik: Odrzuca każde polecenie tylko dlatego, że pochodzi od autorytetu. Myli brak dyscypliny z wolnością, niszcząc własną karierę dla samej satysfakcji powiedzenia „nie”.',
        '3. Podmiotowy partner: Rozpoznaje funkcjonalną konieczność hierarchii, szanuje rolę przełożonego, ale zachowuje nienaruszone poczucie własnej godności i gotowość do merytorycznego sprzeciwu, gdy zagrożone są fundamentalne standardy.',
        'Poniższy warsztat pozwala zdiagnozować, do którego wzorca jest ci najbliżej.'
      ],
      exerciseRef: chapterThirtyEightSelfExercises[0]
    },
    {
      id: 'sec-38-22',
      pageNumber: 42,
      sectionNumber: '38.22',
      title: 'Słownik pojęć i modeli władzy społecznej',
      category: 'podsumowanie',
      readingTimeMinutes: 6,
      paragraphs: [
        'Glosa kluczowych pojęć ułatwiająca precyzyjną analizę dynamiki władzy:',
        '- Agentic State (Stan Pośredniczący): stan umysłu zdefiniowany przez Milgrama, w którym jednostka postrzega siebie jako narzędzie realizacji woli wyższego autorytetu, odcinając własne poczucie odpowiedzialności moralnej.',
        '- Hubris Syndrome (Syndrom Pychy Władzy): zaburzenie nabyte pod wpływem długotrwałego sprawowania władzy, charakteryzujące się arogancją, utratą kontaktu z realiami i pogardą dla innych.',
        '- Władza Prawomocna (Legitimate Power): autorytet wynikający z zajmowanej formalnej roli instytucjonalnej.',
        '- Whistleblowing (Sygnalizowanie): ujawnienie przez członka organizacji nielegalnych lub nieetycznych działań władzy na forum publicznym lub organom ścigania.',
        '- Asymetria Zależności: stan, w którym jedna strona potrzebuje zasobów drugiej znacznie bardziej niż druga pierwszej, stanowiący fundament przewagi w negocjacjach.'
      ]
    },
    {
      id: 'sec-38-23',
      pageNumber: 43,
      sectionNumber: '38.23',
      title: 'Studia przypadków — pytania analityczne i dylematy',
      category: 'cwiczenia',
      readingTimeMinutes: 7,
      paragraphs: [
        'Przeanalizuj poniższe dylematy decyzyjne:',
        'Dylemat 1: Pracujesz w dziale kontroli jakości firmy farmaceutycznej. Dyrektor naciska na dopuszczenie partii leku, która wykazuje marginalne odchylenia od normy, argumentując: „Jeśli wstrzymamy dystrybucję, spółka straci płynność i zwolnimy 200 osób w twoim rodzinnym mieście”. Co robisz?',
        'Dylemat 2: Zostałeś awansowany na kierownika zespołu, w którym pracuje twój serdeczny przyjaciel. Przyjaciel ostentacyjnie spóźnia się do pracy i ignoruje nowe wytyczne, mrugając do ciebie okiem: „Michał, przecież wiemy, jak to jest”. Jak prowadzisz pierwszą rozmowę dyscyplinującą?',
        'Odpowiedzi na te pytania wymagają zintegrowania wiedzy o bazach władzy, asertywności i granicach etycznych.'
      ]
    },
    {
      id: 'sec-38-24',
      pageNumber: 44,
      sectionNumber: '38.24',
      title: 'Podsumowanie syntetyczne: anatomia władzy i podległości',
      category: 'podsumowanie',
      readingTimeMinutes: 6,
      paragraphs: [
        'Władza i posłuszeństwo to potężne siły kształtujące cywilizację ludzką. Pozwalają budować katedry, organizować loty kosmiczne i zarządzać milionowymi miastami, ale bez etycznych hamulców prowadzą do wojen, totalitaryzmów i korporacyjnych zbrodni.',
        'Najważniejsze wnioski z Rozdziału 38:',
        '1. Władza jest relacją zależności — zmieniając swoje alternatywy, zmieniasz siłę władzy, która nad tobą stoi.',
        '2. Poczucie władzy upośledza empatię i zdolność do przyjmowania cudzej perspektywy; lider musi aktywnie walczyć z tym biologicznym mechanizmem.',
        '3. Uległość wobec autorytetu rzadko wynika ze złej woli — jest owocem ucieczki przed lękiem egzystencjalnym w stan pośredniczący (agentic state).',
        '4. Złamanie monopolu destrukcyjnego autorytetu wymaga sojuszu — jeden człowiek mówiący „nie” otwiera drogę do wolności dla całej grupy.'
      ]
    },
    {
      id: 'sec-38-25',
      pageNumber: 45,
      sectionNumber: '38.25',
      title: 'Egzamin sprawdzający wiedzę z Rozdziału 38',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'Rozdział 38 kończy wielki cykl Tomu III poświęcony psychologii społecznej, władzy, konfliktowi, zaufaniu i wpływowi społecznemu.',
        'Rozwiąż poniższy test wielokrotnego wyboru, aby sprawdzić swoje rozumienie mechanizmów władzy, taksonomii Frencha i Ravena, uległości w badaniach Milgrama oraz dynamiki relacji przełożony-podwładny.'
      ]
    }
  ]
};
