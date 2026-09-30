import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 20 (GLOBALNIE ROZDZIAŁ 36 W STRUKTURZE DZIEŁA)
 * TYTUŁ: ZAUFANIE, ZDRADA I ODBUDOWA
 * PODTYTUŁ: Jak człowiek tworzy oczekiwanie dotyczące drugiej osoby i co dzieje się, kiedy to oczekiwanie zostaje złamane
 */

export const chapterThirtySixExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Czym w ujęciu psychologii poznawczo-społecznej (np. model Mayera, Davisa i Schoormana) jest zaufanie?',
    topic: 'Definicja i Istota Zaufania',
    sectionRef: 'Sekcja 36.1 & 36.23',
    options: [
      { label: 'A', text: 'Gotowością do wejścia w stan podatności na zranienie (vulnerability) w oparciu o pozytywne oczekiwania co do intencji i zachowań drugiej strony, bez możliwości pełnej kontroli.', isCorrect: true },
      { label: 'B', text: 'Naiwną pewnością, że nikt nigdy nas nie okłamie.', isCorrect: false },
      { label: 'C', text: 'Podpisaniem umowy notarialnej z gwarancją finansową.', isCorrect: false },
      { label: 'D', text: 'Całkowitym brakiem lęku w relacji.', isCorrect: false }
    ],
    explanation: 'Zaufanie nie istnieje bez ryzyka. Gdybyśmy mieli 100% kontroli i gwarancji (np. stały monitoring GPS partnera), nie potrzebowalibyśmy zaufania — mielibyśmy do czynienia z nadzorem technicznym.',
    keyTakeaway: 'Zaufanie to świadoma decyzja o zrezygnowaniu z kontroli na rzecz wiary w czyjąś rzetelność.'
  },
  {
    id: 2,
    question: 'Dlaczego po ujawnieniu zdrady lub kłamstwa człowiek zaczyna obsesyjnie analizować całą przeszłość relacji?',
    topic: 'Reorganizacja Modelu Poznawczego',
    sectionRef: 'Sekcja 36.5 & 36.13',
    options: [
      { label: 'A', text: 'Ponieważ mózg doświadcza załamania modelu predykcyjnego (Prediction Error); musi ponownie zinterpretować tysiące wspomnień, by ustalić, co z przeszłości było prawdą, a co iluzją.', isCorrect: true },
      { label: 'B', text: 'Ponieważ ludzie po zdradzie tracą pamięć długotrwałą.', isCorrect: false },
      { label: 'C', text: 'Z czystej złośliwości i chęci dręczenia partnera pytaniami.', isCorrect: false },
      { label: 'D', text: 'Jest to objaw choroby somatycznej wywołanej brakiem snu.', isCorrect: false }
    ],
    explanation: 'Kłamstwo nie niszczy tylko teraźniejszości — infekuje wstecznie całą historię relacji. Człowiek zadaje sobie pytanie: „Kiedy uśmiechał się do mnie w zeszłym roku na wakacjach, czy już wtedy kłamał?”. Mózg próbuje zrekonstruować spójną mapę rzeczywistości.',
    keyTakeaway: 'Ból po zdradzie to ból utraty pewności co do własnej przeszłości i własnego rozeznania w świecie.'
  },
  {
    id: 3,
    question: 'W jaki sposób próby ciągłego sprawdzania i kontrolowania partnera (np. przeglądanie telefonu) po naruszeniu zaufania wpływają na proces odbudowy?',
    topic: 'Paradoks Kontroli i Podejrzliwości',
    sectionRef: 'Sekcja 36.9 & 36.10',
    options: [
      { label: 'A', text: 'Dają krótkotrwałą ulgę, lecz w dłuższej perspektywie uniemożliwiają odbudowę zaufania, ponieważ brak dowodów zdrady w telefonie jest interpretowany jako: „po prostu lepiej to ukrył”.', isCorrect: true },
      { label: 'B', text: 'W 100% natychmiast uzdrawiają relację w ciągu 24 godzin.', isCorrect: false },
      { label: 'C', text: 'Sprawiają, że partner automatycznie zakochuje się na nowo.', isCorrect: false },
      { label: 'D', text: 'Nie wywołują żadnego efektu psychologicznego.', isCorrect: false }
    ],
    explanation: 'Nadzór techniczny podtrzymuje stan czujności lękowej. Zaufanie może odbudować się tylko w warunkach, w których partner MA MOŻLIWOŚĆ zachować się nieuczciwie, lecz z własnej woli wybiera wierność i przejrzystość.',
    keyTakeaway: 'Nadzorem można wymusić posłuszeństwo, ale nigdy nie zbuduje się nim zaufania.'
  },
  {
    id: 4,
    question: 'Jakie są trzy filary wiarygodności w klasycznym modelu ABI (Mayer, Davis, Schoorman)?',
    topic: 'Filary Wiarygodności',
    sectionRef: 'Sekcja 36.23',
    options: [
      { label: 'A', text: 'Kompetencja / Zdolność (Ability), Życzliwość / Dobra Wola (Benevolence), Prawość / Spójność Zasad (Integrity).', isCorrect: true },
      { label: 'B', text: 'Atrakcyjność fizyczna, Bogactwo, Status społeczny.', isCorrect: false },
      { label: 'C', text: 'Wiek, Wykształcenie, Miejsce zamieszkania.', isCorrect: false },
      { label: 'D', text: 'Poczucie humoru, Spontaniczność, Asertywność.', isCorrect: false }
    ],
    explanation: 'Ufamy komuś, gdy wierzymy, że: 1) potrafi dowieźć obietnicę (Ability), 2) dba o nasze dobro, a nie tylko o swój zysk (Benevolence), 3) kieruje się trwałymi, spójnymi zasadami moralnymi (Integrity).',
    keyTakeaway: 'Sama deklaracja uczucia to za mało; zaufanie wymaga spójności między słowami a czynami w czasie.'
  },
  {
    id: 5,
    question: 'Dlaczego same przeprosiny („Przepraszam, to się więcej nie powtórzy”) są niewystarczające do odbudowy zaufania po głębokiej zdradzie?',
    topic: 'Anatomia Naprawy Zaufania',
    sectionRef: 'Sekcja 36.18 & 36.19',
    options: [
      { label: 'A', text: 'Ponieważ przeprosiny są jedynie deklaracją werbalną; odbudowa wymaga długotrwałego, powtarzalnego zachowania demonstrującego przejrzystość, uznania krzywdy ofiary bez obrony i znoszenia jej niepewności w czasie.', isCorrect: true },
      { label: 'B', text: 'Ponieważ przeprosiny są nielegalne w świetle prawa psychologicznego.', isCorrect: false },
      { label: 'C', text: 'Zawsze należy milczeć po błędzie, aby nie psuć nastroju.', isCorrect: false },
      { label: 'D', text: 'Przeprosiny są w 100% wystarczające, o ile dołączymy bukiet róż.', isCorrect: false }
    ],
    explanation: 'Słowo „przepraszam” kosztuje niewiele. Zaufanie to model statystyczny: mózg potrzebuje setek mikroskopijnych, powtarzalnych dowodów rzetelności w trudnych momentach, by zaktualizować wskaźnik bezpieczeństwa.',
    keyTakeaway: 'Zaufanie traci się w sekundę, a odbudowuje się je po milimetrze przez miesiące powtarzalnych czynów.'
  }
];

export const chapterThirtySixCaseStudies: CaseStudy[] = [
  {
    id: 'cs-36-tomasz-monika-tajemnica',
    title: 'Studium Przypadku: Pieniądze, Kłamstwo i Złudzenie Lojalności — Tomasz i Monika',
    subtitle: 'Jak ukryty dług w wysokości 80 000 zł zniszczył fundament dziesięcioletniego małżeństwa',
    protagonist: 'Tomasz (38 lat, dyrektor handlowy) i Monika (36 lat, stomatolog)',
    context: 'Małżeństwo z dwójką dzieci, stabilne materialnie, postrzegane jako wzorcowe przez rodzinę.',
    story: [
      'ETAP I — UKRYTY BŁĄD: Tomasz dwa lata wcześniej zainwestował oszczędności w ryzykowny projekt znajomego. Stracił 50 000 zł. Ze strachu przed utratą wizerunku „pana sytuacji” w oczach żony zaciągnął pożyczkę na spłatę straty.',
      'ETAP II — ARCHITEKTURA KŁAMSTWA: Przez 24 miesiące Tomasz fałszował wyciągi bankowe, usuwał SMS-y z banku i tworzył skomplikowane alibi finansowe, mówiąc: „Robię to, żeby chronić spokój Moniki”.',
      'ETAP III — PRZYPADKOWE ODKRYCIE: W piątkowy wieczór Monika szuka w gabinecie paszportu dziecka. Z szafki wypada pismo przedprocesowe od komornika z wezwaniem do zapłaty 84 000 zł z odsetkami.',
      'ETAP IV — SZOK I ROZPAD ŚWIATA: Monika nie mdleje. Siada na podłodze. Przez 40 minut nie może złapać tchu. W jej głowie przewijają się ostatnie dwa lata: „Kiedy byliśmy w Rzymie... Kiedy kupowaliśmy sofę... On cały czas kłamał mi prosto w oczy”.',
      'ETAP V — REAKCJA OBRONNA TOMASZA: Złapany na gorącym uczynku Tomasz mówi: „Monika, to nie tak jak myślisz! Zrobiłem to dla nas! Nie chciałem cię martwić!”. Te słowa („zrobiłem to dla ciebie”) ranią Monikę bardziej niż sam dług.',
      'ETAP VI — DWULETNI PROCES ODBUDOWY LUB ROZPADU: Oboje stają przed dylematem: Czy to małżeństwo da się uratować, skoro fundament prawdy przestał istnieć?'
    ],
    dialogue: [
      { speaker: 'Monika', text: 'Pieniądze jakoś spłacimy. Ale kim ty jesteś? Przez dwa lata patrzyłeś mi w oczy przy śniadaniu, wiedząc, że komornik wisi nad naszym domem. Z kim ja żyłam pod jednym dachem?!', subtext: 'Rozpad modelu tożsamości partnera i załamanie poczucia bezpieczeństwa ontologicznego.' },
      { speaker: 'Tomasz', text: 'Bałem się, że jak się dowiesz, uznasz mnie za nieudacznika i odejdziesz... Kochałem cię, dlatego milczałem.', subtext: 'Lęk przed wstydem maskowany narracją o „ochronie partnerki”.' }
    ],
    decisionTaken: 'Podjęcie terapii par z warunkiem absolutnej, natychmiastowej jawności finansowej (wspólny wgląd we wszystkie konta) oraz rezygnacja Tomasza z decydowania o budżecie przez pierwszy rok.',
    whatProtagonistSaw: 'Tomasz widział w swoim milczeniu „męską ochronę rodziny”. Monika widziała zimną, wyrachowaną socjotechnikę.',
    whatWasMissed: 'Tomasz nie chronił Moniki — chronił własne narcystyczne ego przed przyznaniem się do porażki inwestycyjnej.',
    psychologicalAnalysis: {
      coreMechanism: 'Zdrada instytucjonalna i finansowa: rozbicie zaufania opartego na spójności (Integrity) i życzliwości (Benevolence).',
      cognitiveBiases: [
        { name: 'Efekt uwikłania w eskalację kłamstwa (Sunk Cost Fallacy)', description: 'Jedno kłamstwo wymusiło kolejne dziesięć, aż skala oszustwa uniemożliwiła dobrowolne ujawnienie.', impact: 'Katastrofalny finał.' }
      ],
      defenseMechanisms: [
        { name: 'Usprawiedliwienie moralne (Moral Disengagement)', explanation: 'Wmawianie sobie: „kłamię z miłości, żeby ona się nie denerwowała”.' }
      ],
      emotionalDynamic: 'Od wstydu i ucieczki u Tomasza do głębokiej traumy zdrady (Betrayal Trauma) i anhedonii u Moniki.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia wyspa i ciało migdałowate', role: 'Reakcja wstrząsu pourazowego u Moniki na widok pisma komorniczego', activationState: 'Ekstremalna' },
        { region: 'Grzbietowa kora przedczołowa', role: 'Próba chłodnego ułożenia planu spłaty długu', activationState: 'Początkowo sparaliżowana' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Oksytocyna', roleInScenario: 'Dramatyczny krach oksytocynowego poczucia więzi przy zalaniu kortyzolem.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Piątek 19:15', process: 'Otwarcie koperty -> tachykardia -> derealizacja.' },
        { timeMs: 'Kolejne 3 miesiące', process: 'Stan hipervigilance (nadczujności) u Moniki.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Gaslighting sytuacyjny', description: 'Uspokajanie partnerki, że „finanse są pod kontrolą”, gdy palił się grunt pod nogami.', vulnerabilityExploited: 'Zaufanie żony do kompetencji biznesowych męża.' }
      ],
      counterMeasures: [
        { step: 'Radykalna przejrzystość', script: '„Oto wszystkie moje hasła, konta i bilingi. Nie masz obowiązku mi wierzyć na słowo. Będziesz widzieć każdy mój ruch”.', rationale: 'Jedyna droga do stopniowego ugaszenia nadczujności lękowej.' }
      ]
    },
    keyTakeaway: 'Zdrada finansowa boli tak samo jak zdrada seksualna, ponieważ niszczy tę samą wartość: wiarę w to, że rzeczywistość, w której żyliśmy, była prawdziwa.'
  }
];

export const chapterThirtySixSelfExercises: SelfExercise[] = [
  {
    id: 'ex-36-1-bilans-wiarygodnosci',
    title: 'Ćwiczenie: Osobisty Bilans Wiarygodności (Model ABI)',
    subtitle: 'Autodiagnoza fundamentów zaufania we własnych relacjach',
    objective: 'Zidentyfikowanie obszarów, w których wysyłamy niespójne sygnały niszczące zaufanie innych.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Refleksja nad własną spójnością integruje przyśrodkową korę przedczołową z obwodami oceny moralnej, redukując tendencję do samousprawiedliwiania błędów.',
    steps: [
      {
        stepNumber: 1,
        title: 'Kompetencja (Ability): Czy dowożę to, co obiecuję?',
        instruction: 'Wypisz 3 obietnice złożone bliskim w ostatnim półroczu, których nie dotrzymałeś z powodu braku czasu lub zapomnienia.',
        promptText: 'Niedotrzymane obietnice zadaniowe:',
        placeholder: 'Naprawa kranu, przesłanie dokumentów, wspólny wyjazd...'
      },
      {
        stepNumber: 2,
        title: 'Życzliwość (Benevolence): Czy partner czuje, że gram do jego bramki?',
        instruction: 'Zastanów się, czy w sporach z partnerem zależy Ci na jego dobru, czy na wygraniu dyskusji za wszelką cenę.',
        promptText: 'Szczera refleksja nad motywacją:',
        placeholder: 'Często wolę udowodnić swoją rację, nawet kosztem jej upokorzenia...'
      },
      {
        stepNumber: 3,
        title: 'Prawość (Integrity): Czy mówię prawdę, gdy jest to niewygodne?',
        instruction: 'Czy w ciągu ostatniego miesiąca skłamałeś w drobnej sprawie, by uniknąć trudnej rozmowy?',
        promptText: 'Mikrokłamstwa ochronne:',
        placeholder: 'Powiedziałem, że byłem w korku, a po prostu zasiedziałem się z kolegą...'
      }
    ],
    reflectionQuestions: [
      'Jak te drobne mikrokłamstwa wpływają na Twoją własną samoocenę?',
      'Co musiałbyś zrobić dzisiaj, aby podnieść wskaźnik swojej prawości w oczach najważniejszej dla Ciebie osoby?'
    ]
  }
];

export const chapterThirtySix: Chapter = {
  number: 36,
  volume: 3,
  volumeChapterNumber: 20,
  title: 'Zaufanie, Zdrada i Odbudowa',
  subtitle: 'Jak człowiek tworzy oczekiwanie dotyczące drugiej osoby i co dzieje się, kiedy to oczekiwanie zostaje złamane',
  leadParagraph: 'Zaufanie jest cichym fundamentem każdej ludzkiej kooperacji. Pozwala nam zasypiać obok drugiego człowieka, wsiadać do samolotu, powierzać oszczędności bankom i wchodzić w intymność bez pancerza ochronnego. Co jednak dzieje się w mózgu i duszy człowieka, gdy ten fundament pęka? Dlaczego zdrada boli bardziej niż fizyczna rana i czy zaufanie raz rozbite można kiedykolwiek odbudować na nowo? W tym rozdziale badamy anatomię przewidywania, psychologię kłamstwa, traumę zdrady oraz trudną inżynierię odzyskiwania wiarygodności.',
  totalEstimatedPages: 66,
  sections: [
    // 36.1
    {
      id: 'sec-36-1',
      pageNumber: 2700,
      sectionNumber: '36.1',
      title: 'Czym jest zaufanie? Zaufanie jako oczekiwanie dotyczące zachowania drugiej osoby i Akceptacja Podatności na Zranienie',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Zaufanie to decyzja o wejściu w stan pełnej podatności na zranienie (vulnerability) w sytuacji niepewności. Nie jest to przekonanie, że druga osoba nigdy nas nie skrzywdzi, lecz gotowość do zaryzykowania własnego bezpieczeństwa emocjonalnego na podstawie pozytywnych oczekiwań co do jej intencji i integralności.',
        author: 'Prof. Roger C. Mayer & Prof. David H. Schoorman',
        source: 'Purdue University, „An Integrative Model of Organizational Trust”, Academy of Management Review, 1995'
      },
      paragraphs: [
        'Zaufanie nie jest dziecinnym sentymentem ani naiwnym romantyzmem. W ujęciu psychologii poznawczej i nauk o zachowaniu zaufanie jest SPECYFICZNYM STANEM PROBABILISTYCZNYM UMYSŁU: polega na przyjęciu odważnego założenia predykcyjnego, że druga osoba w przyszłości zachowa się w sposób lojalny, życzliwy i spójny z wartościami, nawet wtedy (i przede wszystkim wtedy), gdy nie mamy żadnej możliwości jej bieżącego kontrolowania, śledzenia ani penalizacji.',
        'Kiedy komuś naprawdę ufam, wydaję naszemu układowi nerwowemu polecenie metaboliczne: «Możesz wyłączyć przewlekły stan czujności lękowej. Możesz zwinąć posterunki wartownicze ciała migdałowatego. Ten człowiek nie wykorzysta moich czułych miejsc przeciwko mnie, gdy odwrócę wzrok».',
        'Zaufanie stanowi więc fundamentalną oszczędność energii biologicznej. Relacja pozbawiona zaufania zamienia się w wycieńczającą pracę śledczą i stały nadzór techniczny, co wywołuje u obu stron przewlekły wyrzut kortyzolu i wyczerpanie kory przedczołowej.'
      ],
      subsections: [
        {
          id: 'sub-36-1-1',
          title: 'Analiza słów prof. Rogera C. Mayera i prof. Davida H. Schoormana: Paradoks Podatności na Zranienie',
          content: [
            'Sformułowanie prof. Mayera i Schoormana ujawnia osiowy paradoks zaufania: jeśli posiadasz 100% gwarancji, umowę notarialną, podgląd z kamer i śledzenie GPS w telefonie partnera — to nie ufasz. Prowadzisz kontrolę techniczną.',
            'Zaufanie rozpoczyna się dokładnie tam, gdzie kończy się możliwość kontroli. Wymaga ono zgody na ryzyko (risk acceptance). Dając komuś zaufanie, dajesz mu broń, która może cię zranić, wierząc, że ten człowiek postanowi jej nie użyć. Bez tej odważnej gotowości na zranienie niemożliwe jest zbudowanie żadnej głębokiej więzi międzyludzkiej.'
          ],
          highlightBox: {
            title: 'Wgląd Psychologiczny: Zaufanie a Nadzór',
            content: 'Nadzorem wymuszasz uległość, ale niszczysz bliskość. Zaufanie buduje się w cieniu wolności: tylko wtedy, gdy partner ma pełną swobodę oszustwa, a z własnej woli wybiera uczciwość, zaufanie staje się żywą tkanką relacji.',
            type: 'insight'
          }
        }
      ]
    },

    // 36.2
    {
      id: 'sec-36-2',
      pageNumber: 2712,
      sectionNumber: '36.2',
      title: 'Zaufanie a przewidywanie: Jak mózg redukuje złożoność świata społecznego',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Zgodnie z koncepcją niemieckiego socjologa Niklasa Luhmanna, zaufanie jest podstawowym mechanizmem REDUKCJI ZŁOŻONOŚCI SPOŁECZNEJ. Świat ludzki jest nieskończenie skomplikowany. Gdybyśmy musieli w każdej sekundzie weryfikować kompetencje chirurga, uczciwość pilota samolotu i wierność partnera — nasze funkcje wykonawcze załamałyby się w ciągu godziny.',
        'Zaufanie działa jak poznawczy skrót (heurystyka): zastępuje brakującą informację pewnością psychologiczną. Zamiast sprawdzać telefon partnera co 15 minut, przyjmuję hipotezę: «On jest lojalny» i zwalniam zasoby uwagi na realizację własnych celów życiowych i zawodowych.'
      ],
      interactiveWindowRef: {
        id: 'iw-36-2-istota-zaufania',
        type: 'what_we_know',
        title: 'Co naprawdę wiemy? — Istota i paradoks zaufania',
        subtitle: 'Rozdzielenie faktów od złudzeń w mechanizmach redukcji lęku',
        context: 'Decyzja o powierzeniu partnerowi haseł do kont lub kluczy do mieszkania.',
        whatWeKnow: {
          items: [
            {
              id: 'c36-item-z1',
              statement: 'Zaufanie polega na rezygnacji z nadzoru i kontroli na rzecz wiary w intencje drugiej osoby.',
              category: 'fakt',
              explanation: 'To podstawowa naukowa definicja zaufania; bez podatności na zranienie i rezygnacji z kontroli zaufanie nie istnieje.'
            },
            {
              id: 'c36-item-z2',
              statement: 'If ogólnie zainstaluję partnerowi aplikację śledzącą GPS w telefonie, będę miał do niego pełne zaufanie.',
              category: 'interpretacja',
              explanation: 'To błąd poznawczy. Stały nadzór techniczny to brak zaufania i uwięzienie partnera w systemie kontroli, co potęguje jego bunt.'
            },
            {
              id: 'c36-item-z3',
              statement: 'Mózg zużywa znacznie mniej glukozy, gdy przyjmuje bezpieczną predykcję dotyczącą wierności partnera.',
              category: 'fakt',
              explanation: 'Badania neurobiologiczne potwierdzają, że stan stałej podejrzliwości (hipervigilance) drenuje zasoby energetyczne kory przedczołowej.'
            },
            {
              id: 'c36-item-z4',
              statement: 'Zaufanie oznacza pewność, że partner nigdy nie popełni błędu ani nas nie rozczaruje.',
              category: 'interpretacja',
              explanation: 'To jest idealistyczna iluzja. Zaufanie to zgoda na to, że błąd jest możliwy, ale wierzymy w dobrą wolę i naprawę po fakcie.'
            }
          ]
        },
        takeaway: 'Zaufanie to nie brak ryzyka — to świadoma zgoda na podatność na zranienie w imię głębokiej bliskości.'
      }
    },

    // 36.3
    {
      id: 'sec-36-3',
      pageNumber: 2725,
      sectionNumber: '36.3',
      title: 'Zaufanie a podatność na zranienie: Dlaczego nie ma zaufania bez ryzyka',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Istotą zaufania jest PODATNOŚĆ NA ZRANIENIE (Vulnerability). Nie można ufać bez oddania drugiej stronie części swojej władzy nad własnym bezpieczeństwem.',
        'Kiedy powierzam partnerowi swoją intymną tajemnicę, swoje finanse lub swoje serce, daję mu do ręki naładowaną broń — z wiarą, że nigdy nie pociągnie za spust. Człowiek, który nie jest gotów na ryzyko zranienia, nigdy nie doświadczy zaufania. Może mieć co najwyżej niewolników, podwładnych pod stałym monitoringiem lub bezpieczną samotność.'
      ]
    },

    // 36.4
    {
      id: 'sec-36-4',
      pageNumber: 2738,
      sectionNumber: '36.4',
      title: 'Historia: „Jedno kłamstwo” — Gdy pęka tama psychologiczna',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Grzegorz i Justyna byli parą od trzech lat. Grzegorz zawsze powtarzał: „U nas w domu nie ma tajemnic”. Był dumny ze swojej nieskazitelnej reputacji człowieka prawdomównego.',
        'Pewnego popołudnia Justyna przypadkowo zobaczyła w jego portfelu bilet parkingowy z podziemnego garażu hotelu w centrum miasta z datą z zeszłego czwartku — dnia, w którym Grzegorz twierdził, że do 23:00 siedział sam w biurze nad audytem.',
        'Gdy Justyna zapytała o ten bilet, Grzegorz na ułamek sekundy zbladł, po czym powiedział: „A, to... Podwoziłem kolegę z pracy, bo miał tam spotkanie”. Dwie godziny później przyznał, że spotkał się tam na kawie ze swoją byłą narzeczoną, o czym nie powiedział Justynie, „żeby nie robić niepotrzebnego dramatu”.',
        'Samo spotkanie na kawie było niewinne. Ale FAKT KŁAMSTWA podziałał jak kropla kwasu wlana do kryształowego naczynia.'
      ]
    },

    // 36.5
    {
      id: 'sec-36-5',
      pageNumber: 2750,
      sectionNumber: '36.5',
      title: 'Jak wydarzenie zmienia interpretację kolejnych zdarzeń? Aktualizacja modelu drugiego człowieka',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Z punktu widzenia neuronauki poznawczej jedno kłamstwo wywołuje tzw. KATASTROFALNY BŁĄD PREDYKCJI (Catastrophic Prediction Error). Mózg Justyny posiadał stabilny model pod hasłem: «Grzegorz to człowiek, który zawsze mówi prawdę».',
        'Odkrycie kłamstwa niszczy ten model. Umysł musi natychmiast stworzyć nową mapę: «Grzegorz to człowiek, który potrafi patrzeć mi w oczy i mówić nieprawdę bez mrugnięcia okiem».',
        'Od tej chwili KAŻDE kolejne zachowanie Grzegorza będzie przepuszczane przez ten nowy filtr. Poniższy moduł pokazuje mechanizm tej dramatycznej zmiany.'
      ],
      interactiveWindowRef: {
        id: 'iw-36-5-zmiana-modelu',
        type: 'what_if',
        title: 'Jak zmienia się model? — Wstrząs kłamstwa',
        subtitle: 'Symulacja zmiany filtrów percepcyjnych przed i po ujawnieniu nielojalności',
        context: 'Grzegorz wraca z pracy o 19:00 i mówi: „Korki na trasie były gigantyczne”.',
        whatIfOptions: {
          defaultScenario: 'Sytuacja PRZED odkryciem kłamstwa: Justyna całuje Grzegorza i współczuje mu zmęczenia.',
          options: [
            {
              id: 'c36-opt-1',
              changeLabel: 'Sytuacja PO odkryciu kłamstwa z hotelem',
              resultingInterpretation: 'Justyna myśli: „Czy to naprawdę były korki? A może znowu z kimś się spotkał i patrzy mi w oczy kłamiąc?”.',
              resultingBehavior: 'Chłodne spojrzenie, badanie wzrokiem jego koszuli, sprawdzanie mapy korków w Google Maps.',
              psychologicalImpact: 'Uruchomienie stałego stanu hipervigilance (nadczujności śledczej).'
            },
            {
              id: 'c36-opt-2',
              changeLabel: 'Grzegorz sam z własnej woli pokazuje bilingi i trasę GPS bez proszenia',
              resultingInterpretation: 'Justyna czuje lekką ulgę, ale jednocześnie upokorzenie: „Muszę go kontrolować jak małe dziecko”.',
              resultingBehavior: 'Stopniowe wygaszanie ostrej paniki, ale poczucie braku spontaniczności w związku.',
              psychologicalImpact: 'Zastąpienie zaufania procedurą audytorską.'
            }
          ]
        },
        takeaway: 'Po kłamstwie prawda zaczyna brzmieć jak kłamstwo, a spokój zamienia się w podejrzliwość.'
      }
    },

    // 36.6
    {
      id: 'sec-36-6',
      pageNumber: 2765,
      sectionNumber: '36.6',
      title: 'Zaufanie jako model drugiego człowieka: Teoria bayesowskiego uaktualniania przekonań',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Mózg ludzki funkcjonuje jak maszyna bayesowska (Friston, Clark): nieustannie porównuje swoje wcześniejsze hipotezy (Prior) z napływającymi danymi zmysłowymi, tworząc zaktualizowane prawdopodobieństwo (Posterior).',
        'Zaufanie jest właśnie taką bayesowską wagą prawdopodobieństwa: „Jakie jest prawdopodobieństwo, że partner dochowa lojalności?”. Jeśli waga wynosiła 0.99, jedno potwierdzone oszustwo drastycznie redukuje ją do poziomu 0.30.',
        'Aby podnieść tę wagę z powrotem do 0.90, mózg potrzebuje nie słów, lecz TYSIĘCY kolejnych bezbłędnych obserwacji w warunkach próby. Właśnie dlatego odbudowa zaufania trwa lata, a nie dni.'
      ]
    },

    // 36.7
    {
      id: 'sec-36-7',
      pageNumber: 2778,
      sectionNumber: '36.7',
      title: 'Historia: „Czy mogę ci wierzyć?” — Udręka człowieka w pułapce niepewności',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
      paragraphs: [
        'Justyna po odkryciu kłamstwa nie może spać. Każdej nocy budzi się o 3:00 rano z walącym sercem. Leży obok Grzegorza i patrzy na jego śpiącą twarz. W jej głowie toczy się wyniszczający monolog:',
        '„Wygląda tak niewinnie... Ale przecież tydzień temu też tak wyglądał, a w kieszeni miał bilet z hotelu. Czy jeśli go przytulę, będę naiwną idiotką? A jeśli odejdę, zniszczę trzy lata dobrego życia z powodu jednej kawy?”.',
        'To jest największa męczarnia zdrady: UTRATA ZAUFANIA DO WŁASNEGO OSĄDU RZECZYWISTOŚCI. Człowiek przestaje ufać nie tylko partnerowi — przestaje ufać własnym oczom i własnej intuicji.'
      ]
    },

    // 36.8
    {
      id: 'sec-36-8',
      pageNumber: 2790,
      sectionNumber: '36.8',
      title: 'Dowody zgodne i niezgodne z oczekiwaniem: Jak podejrzliwość zniekształca percepcję',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Kiedy w umyśle zakorzeni się podejrzliwość, zaczyna działać BŁĄD KONFIRMACJI (Confirmation Bias). Od tej pory mózg szuka wyłącznie dowodów potwierdzających zdradę:',
        '- Grzegorz kupił kwiaty? $\\rightarrow$ „Ma poczucie winy, na pewno znowu coś przeskrobał!”.\n- Grzegorz nie kupił kwiatów? $\\rightarrow$ „Widzicie? Jest zimny i już mnie nie kocha!”.\n- Grzegorz schował telefon do kieszeni? $\\rightarrow$ „Ukrywa wiadomości!”.\n- Grzegorz zostawił telefon na stole? $\\rightarrow$ „Robi to na pokaz, ma drugi aparat w samochodzie!”.',
        'Podejrzliwość jest układem samonapędzającym się. Każdy fakt — niezależnie od treści — zostaje zinterpretowany jako dowód winy.'
      ]
    },

    // 36.9
    {
      id: 'sec-36-9',
      pageNumber: 2802,
      sectionNumber: '36.9',
      title: 'Podejrzliwość i poszukiwanie potwierdzeń: Błędne koło detektywistycznej kontroli',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Wielu zranionych partnerów zaczyna prowadzić prywatne śledztwo: sprawdzanie historii przeglądarki, bilingów, zapachów na ubraniach, licznika kilometrów w aucie.',
        'Dlaczego to robią? Ponieważ znalezienie czegokolwiek (nawet podejrzanego maila) daje paradoksalną, chwilową ulgę biologiczną — ucisza niepewność. Mózg woli straszną prawdę niż wiszenie w próżni.',
        'Jednak ta strategia ma śmiertelny koszt uboczny: zamienia partnera w strażnika więziennego, a drugą stronę w osaczonego więźnia. W takich warunkach żadna miłość nie ma szans na przetrwanie.'
      ]
    },

    // 36.10
    {
      id: 'sec-36-10',
      pageNumber: 2815,
      sectionNumber: '36.10',
      title: 'Neutralne zachowanie po zdradzie: Dlaczego zwykły gest urasta do rangi zagrożenia',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Poniższy moduł analityczny pokazuje, jak zwykłe, codzienne zachowania partnera po incydencie kłamstwa są automatycznie dekodowane przez pryzmat zagrożenia.'
      ],
      interactiveWindowRef: {
        id: 'iw-36-10-czy-to-dowod',
        type: 'what_we_know',
        title: 'Czy to naprawdę dowód? — Dekonstrukcja podejrzeń',
        subtitle: 'Weryfikacja rzekomych „poszlak” w stanie wzmożonej czujności relacyjnej',
        context: 'Justyna wchodzi do pokoju. Grzegorz w pośpiechu zamyka laptopa. Justyna czuje ucisk w żołądku.',
        whatWeKnow: {
          items: [
            {
              id: 'c36-item-1',
              statement: 'Grzegorz zamknął klapę laptopa w momencie wejścia Justyny do pokoju.',
              category: 'fakt',
              explanation: 'Obiektywny ruch fizyczny zarejestrowany przez zmysły.'
            },
            {
              id: 'c36-item-2',
              statement: 'Grzegorz pisał z inną kobietą i ukrywa okno czatu.',
              category: 'interpretacja',
              explanation: 'Automatyczna projekcja lęku zdrady bez wglądu w ekran.'
            },
            {
              id: 'c36-item-3',
              statement: 'Grzegorz mógł zamykać okno z prezentem urodzinowym dla Justyny lub kończyć poufny raport firmowy.',
              category: 'hipoteza',
              explanation: 'Alternatywne wyjaśnienie wymagające spokojnego sprawdzenia.'
            },
            {
              id: 'c36-item-4',
              statement: 'Grzegorz celowo prowokuje Justynę, żeby wyprowadzić ją z równowagi.',
              category: 'motyw',
              explanation: 'Błędne przypisanie perwersyjnego motywu w stanie zalania emocjonalnego.'
            }
          ]
        },
        takeaway: 'W stanie zranienia mózg widzi dym tam, gdzie jest tylko kurz. Zanim oskarżysz — poproś o pokazanie ekranu spokojnym głosem.'
      }
    },

    // 36.11
    {
      id: 'sec-36-11',
      pageNumber: 2830,
      sectionNumber: '36.11',
      title: 'Zdrada jako wydarzenie relacyjne: Wymiary nielojalności emocjonalnej i seksualnej',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Zdrada nie sprowadza się wyłącznie do aktu seksualnego. W relacjach dorosłych wyróżniamy cztery odrębne wymiary zdrady:',
        '1. Zdrada seksualna: Złamanie wyłączności cielesnej.\n2. Zdrada emocjonalna: Przeniesienie intymności, zwierzeń i marzeń na osobę trzecią z jednoczesnym ukrywaniem tego przed stałym partnerem.\n3. Zdrada finansowa: Tajne konta, długi, ukrywane wydatki (jak u Tomasza i Moniki).\n4. Zdrada koalicyjna: Trzymanie strony rodziców lub znajomych przeciwko własnemu partnerowi w kluczowych momentach życiowych.',
        'Wspólnym mianownikiem każdej zdrady jest ZŁAMANIE NIEPISANEGO PRZYMIERZA i utworzenie tajnego sojuszu za plecami osoby, która powierzyła nam swoje bezpieczeństwo.'
      ],
      interactiveWindowRef: {
        id: 'iw-36-11-wymiary-zdrady',
        type: 'dual_perspectives',
        title: 'Wymiary Zdrady: Seksualna vs Emocjonalna',
        subtitle: 'Zderzenie definicji nielojalności w diadzie małżeńskiej',
        context: 'Konfrontacja małżonków po odkryciu intensywnej, wielotygodniowej relacji online partnera z inną osobą.',
        dualPerspective: {
          situation: 'Dyskusja o granicach zdrady w dobie komunikacji cyfrowej.',
          personA: {
            name: 'Piotr (Sprawca kontaktu)',
            quote: 'Przecież nawet jej nie dotknąłem! To była tylko koleżeńska rozmowa o pasjach, nie ma tu żadnej zdrady.',
            whatTheyKnow: 'Zna treść swoich rozmów online, uważa, że brak kontaktu fizycznego całkowicie go usprawiedliwia.',
            whatTheyMiss: 'Ignoruje ból żony i fakt, że ukrywał tę relację przez 3 miesiące, kasując wiadomości.',
            interpretation: '„Żona przesadza, jest zazdrosna i chce mnie całkowicie odciąć od ludzi”.',
            coreNeed: 'Zrozumienie, stymulacja intelektualna, uznanie poza małżeństwem.',
            fear: 'Uwięzienie w rutynie domowej i całkowity brak swobody.',
            action: 'Minimalizowanie wagi problemu, obrona przed zarzutami.'
          },
          personB: {
            name: 'Anna (Zraniona żona)',
            quote: 'Pisałeś do niej o naszych problemach seksualnych, wysyłałeś jej zdjęcia o 23:00 i pisałeś, że cię inspiruje. To jest gorsze niż seks na jedną noc!',
            whatTheyKnow: 'Zobaczyła screeny czatu, na których Piotr pisał rzeczy, o których nigdy nie rozmawiał z nią pod jednym dachem.',
            whatTheyMiss: 'Brak.',
            interpretation: '„Zostałam całkowicie zdradzona emocjonalnie, on oddał naszą intymność obcej kobiecie”.',
            coreNeed: 'Wyłączność emocjonalna, prawda, poczucie bycia jedynym powiernikiem sekretów.',
            fear: 'Bycie uwięzioną w pustym związku-fikcji, w którym mąż kocha kogoś innego online.',
            action: 'Wypominanie zdrady, płacz, żądanie zablokowania tamtej osoby.'
          },
          synthesis: 'Zdrada emocjonalna boli równie mocno jak fizyczna, ponieważ łamie przymierze intymności psychicznej, które stanowi rdzeń zaufania w związku.'
        },
        takeaway: 'Granice zdrady określa przymierze pary, a nie tylko fizjologiczny kontakt cielesny.'
      }
    },

    // 36.12
    {
      id: 'sec-36-12',
      pageNumber: 2845,
      sectionNumber: '36.12',
      title: 'Historia wieloetapowa: Przed zdradą — Niewidzialna erozja bliskości',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Zdrada rzadko spada jak grom z jasnego nieba. Zazwyczaj poprzedza ją wielomiesięczny okres NIEWIDZIALNEJ EROZJI BLISKOŚCI.',
        'Przyjrzyjmy się historii Marcina i Aleksandry. Oboje byli pochłonięci budową domu i wychowaniem małych dzieci. Rozmowy zredukowały się do logistyki: „Kupiłeś pieluchy?”, „Zrobiłaś przelew?”. Zero kontaktu wzrokowego, zero czułości, zero intymności.',
        'Marcin czuł się w domu jedynie dostawcą zasobów. Kiedy w nowym projekcie zawodowym pojawiła się koleżanka Joanna, która z zachwytem słuchała jego opowieści o pasjach inżynierskich, Marcin poczuł dopaminowy wyrzut zapomnianej męskości. Nie planował zdrady. Pozwolił jednak na pierwszy krok: na zwierzenia, na wspólne lunche, na niewinne SMS-y późnym wieczorem. Tama pękała powoli, kropla po kropli.'
      ]
    },

    // 36.13
    {
      id: 'sec-36-13',
      pageNumber: 2858,
      sectionNumber: '36.13',
      title: 'Moment odkrycia: Psychologiczne trzęsienie ziemi i derealizacja',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Moment, w którym zdrada wychodzi na jaw, ma charakter ostrego wstrząsu psychicznego. Ofiara często doświadcza zjawiska DEREALIZACJI i DEPERSONALIZACJI: „To się nie dzieje naprawdę, to zły sen, moje ciało jest z waty, a dźwięki dochodzą jak zza grubej szyby”.',
        'Układ nerwowy nie jest w stanie zintegrować sprzecznych danych: człowiek, który wczoraj robił herbatę i całował w czoło, okazuje się kimś, kto prowadził podwójne życie. W ułamku sekundy dotychczasowy świat zostaje zrównany z ziemią.'
      ],
      interactiveWindowRef: {
        id: 'iw-36-13-anatomia-szoku',
        type: 'microscope',
        title: 'Człowiek pod mikroskopem: Aleksandra w momencie odkrycia prawdy',
        subtitle: 'Wiwisekcja wstrząsu pourazowego po ujawnieniu podwójnego życia partnera',
        context: 'Aleksandra otwiera telefon Marcina i widzi intymne zdjęcia przesyłane od koleżanki z biura.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: 'SYTUACJA',
            question: 'Co obiektywnie rejestruje wzrok Aleksandry?',
            content: 'Niebieskie dymki czatu na ekranie telefonu, intymny nagłówek, zdjęcie z plaży i wyznania miłosne z datą wczorajszą.',
            subtext: 'Surowy bodziec docierający do kory wzrokowej.'
          },
          {
            stepNumber: 2,
            label: 'DEREALIZACJA',
            question: 'Jak reaguje mózg na tak potężną sprzeczność?',
            content: 'Gwałtowne wyłączenie orientacji przestrzennej. Aleksandra ma wrażenie, że sufit się obniża, a przedmioty tracą trójwymiarowość.',
            subtext: 'Błąd predykcji o skrajnej sile niszczący dotychczasową mapę świata.'
          },
          {
            stepNumber: 3,
            label: 'EMOCJA I REAKCJA SOMATYCZNA',
            question: 'Jak reaguje ciało Aleksandry?',
            content: 'Nagłe tąpnięcie ciśnienia, tętno skacze do 135 bpm, ostry dreszcz zimna od stóp do głowy, paraliż mięśni rąk.',
            subtext: 'Masywny wyrzut adrenaliny i aktywacja pętli lękowej dACC-insula.'
          },
          {
            stepNumber: 4,
            label: 'ROZPAD PRZESZŁOŚCI',
            question: 'Jak reorganizuje się pamięć w ciągu tych kilku sekund?',
            content: '„Kiedy tydzień temu mówił, że jedzie do klienta... Kiedy kupował wino... On cały czas mnie okłamywał”. Cała przeszłość relacji zostaje skażona kłamstwem.',
            subtext: 'Wsteczna rekalibracja pamięci epizodycznej.'
          },
          {
            stepNumber: 5,
            label: 'DECYZJA I KROK OPERACYJNY',
            question: 'Co robi Aleksandra, by uniknąć natychmiastowego załamania?',
            content: 'Odkłada telefon, wychodzi z pokoju, zamyka się w łazience i bierze cichy, głęboki oddech, by nie wybuchnąć płaczem przy śpiących dzieciach.',
            subtext: 'Szybkie, obronne odcięcie dopływu bodźców w celu ratowania równowagi.'
          }
        ],
        takeaway: 'Wstrząs po zdradzie to nie zwykły smutek — to biologiczny uraz poznawczy niszczący poczucie realności.'
      }
    },

    // 36.14
    {
      id: 'sec-36-14',
      pageNumber: 2870,
      sectionNumber: '36.14',
      title: 'Pierwsze godziny po odkryciu: Reakcje ostrego stresu i kardynalne błędy decyzyjne',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W pierwszych 48 godzinach po ujawnieniu zdrady poziom kortyzolu i adrenaliny uniemożliwia jakiekolwiek racjonalne decyzje strategiczne. Ludzie popełniają wtedy dwa skrajne, symetryczne błędy:',
        'BŁĄD 1: Natychmiastowe wyrzucenie walizek przez okno, złożenie pozwu rozwodowego i ogłoszenie zdrady wszystkim znajomym na Facebooku pod wpływem furii (zanim człowiek zrozumie, czego naprawdę chce).\nBŁĄD 2: Histeryczne błaganie o powrót, uprawianie histerycznego seksu („Hysterical Bonding”) i udawanie, że nic się nie stało, ze strachu przed samotnością.',
        'ZASADA BEZPIECZEŃSTWA: W pierwszych dniach po odkryciu zdrady nie podejmuje się ostatecznych decyzji o rozstaniu ani o powrocie. Wprowadza się separację doraźną, dba o sen, posiłki i pomoc terapeutyczną.'
      ]
    },

    // 36.15
    {
      id: 'sec-36-15',
      pageNumber: 2885,
      sectionNumber: '36.15',
      title: 'Następne tygodnie: Huśtawka afektywna i fale traumy relacyjnej',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Proces po zdradzie przypomina żałobę, ale powikłaną zranieniem narcystycznym. W ciągu jednego dnia ofiara zdrady przechodzi przez pełne spektrum afektów:',
        '- O 9:00: Mordercza wściekłość i chęć zemsty,\n- O 12:00: Rozdzierający ból i tęsknota za partnerem,\n- O 15:00: Poczucie obrzydzenia do własnego ciała („Czym ona była lepsza ode mnie?”),\n- O 18:00: Nadzieja na odbudowę i chwila czułości,\n- O 21:00: Nagły flashback i wybuch płaczu.',
        'Partner, który zdradził, musi zrozumieć: ta niestabilność emocjonalna jest normalną reakcją na nienormalne wydarzenie. Pytanie: „Czy ty już nigdy o tym nie zapomnisz?” po trzech tygodniach od zdrady jest dowodem całkowitego braku empatii.'
      ]
    },

    // 36.16
    {
      id: 'sec-36-16',
      pageNumber: 2900,
      sectionNumber: '36.16',
      title: 'Jak zdrada zmienia zachowanie obu osób? Dynamika Kata i Ofiary',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Jeśli para nie wejdzie w profesjonalny proces naprawczy, po zdradzie szybko wytwarza się toksyczny układ ról:',
        'Zraniony partner wchodzi w rolę MORALNEGO PROKURATORA: ma prawo do nieustannych przesłuchań, złośliwości, karania i przypominania winy przy każdej okazji.\nPartner, który zdradził, wchodzi w rolę SKRUSZONEGO GRZESZNIKA: kaja się, znosi upokorzenia, chodzi na palcach... aż po kilku miesiącach jego wina zamienia się we wściekłość: „Ile jeszcze będziesz mnie biczować?! Już przeprosiłem sto razy!”.',
        'Ten układ jest ślepą uliczką. Prawdziwa naprawa nie polega na dożywotnim więzieniu z dozorem kuratorskim, lecz na stopniowym odzyskiwaniu symetrii relacyjnej.'
      ]
    },

    // 36.17
    {
      id: 'sec-36-17',
      pageNumber: 2915,
      sectionNumber: '36.17',
      title: 'Odbudowa zaufania: Warunki progowe, proces i znaczenie czasu',
      category: 'cwiczenia',
      readingTimeMinutes: 25,
      paragraphs: [
        'Czy zaufanie można odbudować? Tak. Ale wymaga to spełnienia czterech bezwzględnych warunków progowych:\n1. Całkowite, natychmiastowe zerwanie kontaktu z osobą trzecią (zero kontaktu, zero wiadomości „na pożegnanie”).\n2. Pełna, dobrowolna przejrzystość (brak haseł, brak tajemnic).\n3. Gotowość sprawcy do wysłuchiwania bólu partnera bez uciekania w defensywność i bez mówienia: „Przesadzasz”.\n4. Czas: biologiczny proces leczenia traumy relacyjnej trwa średnio od 12 do 24 miesięcy.',
        'Poniższy moduł analityczny weryfikuje gotowość relacji do wejścia na drogę naprawy.'
      ],
      interactiveWindowRef: {
        id: 'iw-36-17-czy-odbudowac',
        type: 'what_if',
        title: 'Czy zaufanie można odbudować? — Test warunków brzegowych',
        subtitle: 'Weryfikacja postawy obu stron przed podjęciem decyzji o terapii',
        context: 'Para po ujawnieniu zdrady decyduje, czy walczyć o związek, czy podpisać porozumienie rozwodowe.',
        whatIfOptions: {
          defaultScenario: 'Partner zdradzający mówi: „Przepraszam, ale musisz mi znowu zaufać i przestać wypominać przeszłość”.',
          options: [
            {
              id: 'c36-opt-b1',
              changeLabel: 'Partner zdradzający przyjmuje odpowiedzialność i znosi pytania bez złości',
              resultingInterpretation: 'Osoba zraniona czuje: „Mój ból ma dla niego znaczenie, on nie ucieka od odpowiedzialności”.',
              resultingBehavior: 'Stopniowe wygaszanie ataków paniki i powolne otwieranie się na dialog.',
              psychologicalImpact: 'Spełniony warunek Benevolence (Życzliwości) i Integrity (Prawości).'
            },
            {
              id: 'c36-opt-b2',
              changeLabel: 'Partner zdradzający nadal utrzymuje kontakt z kochanką pod pretekstem „spraw zawodowych”',
              resultingInterpretation: 'Osoba zraniona wie: „On nadal kłamie, zdrada trwa nadal”.',
              resultingBehavior: 'Trwała destabilizacja psychiczna, depresja, konieczność natychmiastowego zerwania.',
              psychologicalImpact: 'Całkowity brak warunków do jakiejkolwiek odbudowy zaufania.'
            }
          ]
        },
        takeaway: 'Odbudowa zaufania jest niemożliwa, dopóki zdrada nie została w 100% zakończona w świecie fizycznym i emocjonalnym.'
      }
    },

    // 36.18
    {
      id: 'sec-36-18',
      pageNumber: 2930,
      sectionNumber: '36.18',
      title: 'Czy przeprosiny wystarczają? Różnica między deklaracją werbalną a zmianą strukturalną',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Słowa „bardzo cię przepraszam” są w psychologii relacji jedynie biletem wstępu na salę sądową — nie są uniewinnieniem ani wyrokiem.',
        'Dojrzałe zadośćuczynienie wymaga ZMIANY STRUKTURALNEJ w życiu sprawcy. Jeśli zdradziłeś po alkoholu na wyjazdach integracyjnych — warunkiem jest rezygnacja z takich imprez i abstynencja. Jeśli zdradziłeś w pracy — warunkiem może być zmiana działu lub rezygnacja z posady.',
        'Jeśli sprawca mówi: „Przepraszam, ale nie zamierzam niczego zmieniać w swoim stylu życia” — jego przeprosiny są bezwartościową monetą z plastiku.'
      ]
    },

    // 36.19
    {
      id: 'sec-36-19',
      pageNumber: 2942,
      sectionNumber: '36.19',
      title: 'Znaczenie przewidywalności: Monotonia uczciwości jako lekarstwo na lęk',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Co leczy zraniony mózg partnera? Nie wielkie romantyczne gesty, nie drogie wycieczki na Malediwy i nie pierścionki z brylantem. Mózg po zdradzie leczy MONOTONIA POWTARZALNEJ UCZCIWOŚCI.',
        'Leczy to, że gdy mówisz, że będziesz o 17:15 — jesteś o 17:14.\nLeczy to, że gdy dzwoni telefon — odbierasz go przy partnerze na głośnomówiącym.\nLeczy to, że przez 300 kolejnych dni Twoje słowa w 100% pokrywają się z faktami w świecie fizycznym.',
        'Przewidywalność jest nudna dla poszukiwaczy wrażeń, ale jest jedynym tlenem dla człowieka leczącego się z traumy nielojalności.'
      ]
    },

    // 36.20
    {
      id: 'sec-36-20',
      pageNumber: 2955,
      sectionNumber: '36.20',
      title: 'Historia: „Druga szansa” — Nowy związek z tą samą osobą (Koncepcja Esther Perel)',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Wybitna psychoterapeutka Esther Perel stawia rewolucyjną tezę: «Gdy w związku dochodzi do zdrady, wasze pierwsze małżeństwo dobiegło końca. Umarło. Pytanie brzmi: czy chcecie wspólnie stworzyć DRUGIE MAŁŻEŃSTWO z tą samą osobą?».',
        'Próba powrotu do tego, co było PRZED zdradą, jest skazana na porażkę — bo to, co było przedtem, doprowadziło do katastrofy.',
        'Para, która z sukcesem odbudowuje więź, buduje zupełnie nową kulturę relacji: uczy się mówić o tłumionych potrzebach, rezygnuje ze sztucznych pozorów i staje w prawdzie o własnych ograniczeniach.'
      ]
    },

    // 36.21
    {
      id: 'sec-36-21',
      pageNumber: 2970,
      sectionNumber: '36.21',
      title: 'Kontrprzypadek: Relacja, która nie zostaje odbudowana — Mądrość ostatecznego pożegnania',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Wielkim błędem pop-psychologii jest przymus wybaczania za wszelką cenę. Czasami najzdrowszą, najbardziej heroiczną i autonomiczną decyzją człowieka jest powiedzenie:',
        '«Nie wybaczam ci powrotu do mojego życia. Nie chcę z tobą być. Granica została przekroczona tak głęboko, że dalsze trwanie w tym związku niszczy moją godność i zdrowie psychiczne».',
        'Zakończenie relacji po zdradzie nie jest porażką. Jest aktem najwyższego szacunku dla własnych wartości i granic. Człowiek ma niezbywalne prawo odejść z czystym sumieniem.'
      ]
    },

    // 36.22
    {
      id: 'sec-36-22',
      pageNumber: 2985,
      sectionNumber: '36.22',
      title: 'Kontrprzypadek: Dwie drogi po zdradzie — Porównanie par w kryzysie',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Poniższy moduł analityczny zestawia dwie pary stojące przed tym samym faktem zdrady, które wybrały przeciwstawne trajektorie życiowe.'
      ],
      interactiveWindowRef: {
        id: 'iw-36-22-dwie-drogi',
        type: 'dual_perspectives',
        title: 'Dwie Drogi po Zdradzie — Odbudowa vs Rozstanie',
        subtitle: 'Analiza czynników decydujących o sukcesie lub konieczności odejścia',
        context: 'Porównanie dynamiki psychologicznej dwóch par po ujawnieniu zdrady pozamałżeńskiej.',
        dualPerspective: {
          situation: 'Odkrycie trzymiesięcznego romansu partnera.',
          personA: {
            name: 'Para 1 (Ścieżka Nowego Związku: Adam i Beata)',
            quote: 'Zrozumieliśmy, że nasz stary związek był martwy od lat. Zdrada była tragicznym alarmem, który zmusił nas do stanięcia w nagiej prawdzie.',
            whatTheyKnow: 'Oboje uznali współodpowiedzialność za wieloletni chłód (choć Adam wziął 100% winy za sam akt zdrady).',
            whatTheyMiss: 'Brak.',
            interpretation: '„Możemy stworzyć nową relację opartą na absolutnej szczerości”.',
            coreNeed: 'Prawda, nowa intymność, transformacja tożsamości pary.',
            fear: 'Wymaga to gigantycznej pracy i bolesnej wiwisekcji.',
            action: 'Terapia, zerwanie kontaktu z kochanką, powolna odbudowa bliskości.'
          },
          personB: {
            name: 'Para 2 (Ścieżka Autonomicznego Rozstania: Michał i Dorota)',
            quote: 'Zrozumiałam, że nigdy więcej nie spojrzę na niego z szacunkiem. Każdy jego dotyk budzi we mnie wstręt. Moje odejście to ratowanie siebie.',
            whatTheyKnow: 'Michał kłamał seryjnie przez lata, manipulował faktami i nie wykazuje autentycznego żalu.',
            whatTheyMiss: 'Brak.',
            interpretation: '„Trwanie w tym układzie zamieni mnie w zgorzkniałą jędzę pilnującą cudzego telefonu”.',
            coreNeed: 'Godność, spokój, odzyskanie samostanowienia.',
            fear: 'Trudności samotnego rodzicielstwa i podział majątku.',
            action: 'Kulturalny rozwód z pomocą mediatora, zachowanie granic rodzicielskich.'
          },
          synthesis: 'Nie ma jednej właściwej drogi. Odbudowa ma sens tylko wtedy, gdy obie strony szczerze pragną nowego przymierza. Jeśli zaufanie umarło bezpowrotnie — rozstanie jest aktem odwagi i zdrowia psychicznego.'
        },
        takeaway: 'Miara dojrzałości nie polega na tym, czy zostałeś, czy odszedłeś. Polega na tym, czy podjąłeś decyzję w zgodzie ze swoimi najgłębszymi wartościami.'
      }
    },

    // 36.23
    {
      id: 'sec-36-23',
      pageNumber: 3000,
      sectionNumber: '36.23',
      title: 'Badania nad zaufaniem: Model ABI, gry zaufania i neurobiologia oksytocyny Kosfelda',
      category: 'teoria',
      readingTimeMinutes: 27,
      quote: {
        text: 'Oksytocyna podawana donosowo znacząco zwiększa zaufanie u ludzi. W grze finansowej inwestorzy z grupy oksytocynowej powierzali nieznajomym o 17% więcej gotówki niż grupa kontrolna. Oksytocyna nie wpływa jednak na gotowość do podejmowania ryzyka losowego — działa wybitnie selektywnie, wyciszając biologiczny lęk przed oszustwem ze strony drugiego człowieka.',
        author: 'Dr Michael Kosfeld & Prof. Markus Heinrichs',
        source: 'University of Zurich, „Oxytocin increases trust in humans”, Nature, 2005'
      },
      paragraphs: [
        'Współczesna neuronauka i ekonomia behawioralna badają zaufanie w kontrolowanych warunkach laboratoryjnych za pomocą zaawansowanych gier decyzyjnych oraz neuroobrazowania fMRI:',
        '1. DYLEMAT WIĘŹNIA I GRY ZAUFANIA (Trust Games — Berg, Dickhaut, McCabe): Badania dowodzą, że wbrew dogmatowi o czysto egoistycznej naturze ludzkiej (Homo Oeconomicus), ludzie inwestują realne pieniądze w anonimowych partnerów znacznie częściej, niż wynikałoby to z chłodnego rachunku zysków. Istnieje ewolucyjny „prospołeczny skłon” (prosocial bias).',
        '2. NEUROBIOLOGIA OKSYTOCYNY (Pionierskie badania Michaela Kosfelda i Markusa Heinrichsa w Zurychu): Podanie badanym pojedynczej dawki oksytocyny w sprayu do nosa spowodowało podwojenie odsetka uczestników, którzy powierzyli całość swoich pieniędzy całkowicie obcej osobie. Neuroobrazowanie pokazało, że oksytocyna zmniejsza odpowiedź ciała migdałowatego na społeczne sygnały zagrożenia.',
        '3. MODEL ABI (Ability, Benevolence, Integrity): Metaanalizy Kurtzberga, Dirksa i Ferrina dowodzą, że wiarygodność człowieka opiera się na trzech filarach: Kompetencji (Ability — czy potrafi to zrobić), Życzliwości (Benevolence — czy chce mojego dobra) oraz Prawości (Integrity — czy przestrzega spójnych zasad etycznych, gdy nikt nie patrzy).'
      ],
      subsections: [
        {
          id: 'sub-36-23-1',
          title: 'Analiza słów dr. Michaela Kosfelda i prof. Markusa Heinrichsa: Neurochemia Przełamywania Lęku Społecznego',
          content: [
            'Odkrycie zespołu z Zurychu opublikowane w „Nature” zdemaskowało neurobiologiczny hamulec zaufania. Tym hamulcem jest aktywacja struktury limbicznej — ciała migdałowatego — które rejestruje każdego obcego człowieka jako potencjalnego oszusta lub drapieżnika.',
            'Oksytocyna nie wyłącza logicznego myślenia ani oceny ryzyka finansowego (gdy badani grali z komputerowym losowym generatorem, oksytocyna nie zmieniła ich decyzji!). Zmieniła wyłącznie relację z drugim człowiekiem — wyciszyła pierwotną paranoidalną czujność społeczną. Pokazuje to, że naturalne budowanie zaufania wymaga środowiska o niskim poziomie wrogości, w którym neuropeptydy łączności mogą swobodnie regulować pracę mózgu.'
          ],
          highlightBox: {
            title: 'Trzy Filary Modelu ABI w Praktyce',
            content: 'Jeśli ktoś ma wysokie Kompetencje (Ability), ale zerową Życzliwość (Benevolence) — wykorzysta Cię do własnych celów. Jeśli ma Życzliwość, ale brakuje mu Prawości (Integrity) — zdradzi Cię pod wpływem pierwszej większej presji otoczenia.',
            type: 'neuro'
          }
        }
      ]
    },

    // 36.24
    {
      id: 'sec-36-24',
      pageNumber: 3015,
      sectionNumber: '36.24',
      title: 'Analiza psychologiczna zdrady: Rekonstrukcja wnętrza sprawcy i ofiary',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Zakończmy analizę wiwisekcją psychologiczną:',
        'CO DZIEJE SIĘ ZE SPRAWCĄ? Sprawca rzadko jest psychopatą. Najczęściej jest człowiekiem słabym, uwikłanym w dysonans poznawczy, który nie potrafił skonfrontować się z pustką we własnym życiu. Po zdradzie zmaga się z toksycznym wstydem i poczuciem moralnego upadku.',
        'CO DZIEJE SIĘ Z OFIARĄ? Ofiara cierpi na tzw. ZESPÓŁ TRAUMY ZDRADY (Betrayal Trauma): doświadcza natrętnych myśli, bezsenności, huśtawki emocjonalnej i głębokiego podważenia poczucia własnej wartości.',
        'Mostem między tymi dwoma brzegami cierpienia może być wyłącznie bezwzględna prawda. Prawda rani natychmiastowo, ale pozwala ranie się zagoić. Kłamstwo znieczula na chwilę, ale sprawia, że pod opatrunkiem rozwija się gangrena.'
      ],
      interactiveWindowRef: {
        id: 'iw-36-24-petla-podejrzen',
        type: 'loop',
        title: 'Pętla Podejrzliwości i Defensywy po Zdradzie',
        subtitle: 'Samonapędzający się mechanizm niszczenia resztek więzi',
        context: 'Życie codzienne pod jednym dachem po ujawnieniu i próbie wybaczenia zdrady.',
        loopSteps: [
          {
            step: 1,
            title: 'Wzmożona czujność',
            actor: 'Ofiara (Anna)',
            action: 'Skanowanie reakcji partnera, sprawdzanie ekranu telefonu i bilingów.',
            interpretationByOther: '„Ona mnie kontroluje, nie daje mi żyć, jestem więźniem we własnym domu”.',
            emotionalTrigger: 'Poczucie winy zamieniające się w bunt i duszność u sprawcy.',
            counterAction: 'Blokowanie dostępu do telefonu, chowanie aparatu do kieszeni.'
          },
          {
            step: 2,
            title: 'Potwierdzenie podejrzeń',
            actor: 'Sprawca (Piotr)',
            action: 'Chowanie telefonu i zmiana haseł w imię „obrony prywatności”.',
            interpretationByOther: '„On znowu kłamie, na pewno romans trwa nadal!”.',
            emotionalTrigger: 'Ostry atak lęku i paniki u Anny.',
            counterAction: 'Wybuch płaczu, publiczne oskarżenia o cynizm i kłamstwo.'
          },
          {
            step: 3,
            title: 'Defensywny kontratak',
            actor: 'Sprawca (Piotr)',
            action: 'Krzyk: „Ile jeszcze będziesz mnie biczować?! Przeprosiłem sto razy, a ty wciąż szukasz dziury w całym!”.',
            interpretationByOther: '„On w ogóle nie żałuje tego, co zrobił, jego skrucha była tylko maską”.',
            emotionalTrigger: 'Głęboka rozpacz i emocjonalne zamrożenie u obojga.',
            counterAction: 'Ciche dni, spanie w osobnych pokojach.'
          }
        ],
        takeaway: 'Przerwanie pętli podejrzliwości wymaga od sprawcy zgody na dobrowolną, transparentną przewidywalność, a od ofiary — powolnego rezygnowania z moralnej wyższości oskarżyciela.'
      }
    },

    // 36.25
    {
      id: 'sec-36-25',
      pageNumber: 3030,
      sectionNumber: '36.25',
      title: 'SYNTEZA: Zaufanie jako dynamiczny proces przewidywania drugiego człowieka',
      category: 'podsumowanie',
      readingTimeMinutes: 22,
      paragraphs: [
        'Zaufanie nie jest marmurowym pomnikiem postawionym raz na zawsze w dniu ślubu czy podpisania kontraktu. Zaufanie jest ŻYWYM ORGANIZMEM.',
        'Oddycha z każdym dotrzymanym słowem, z każdą szczerą odpowiedzią na trudne pytanie, z każdym powrotem do domu o obiecanej porze. Karmi się odwagą bycia bezbronnym.',
        'Poznaliśmy dynamikę więzi (Rozdział 34), mechanikę konfliktu (Rozdział 35) oraz kruchość zaufania (Rozdział 36) w układach jeden na jeden. Co jednak dzieje się z człowiekiem, kiedy opuszcza bezpieczną przestrzeń diad i wkracza w świat WIELKIEJ GRUPY? Jak zmienia się nasze myślenie i sumienie pod wpływem obecności stada, presji rówieśniczej i autorytetu większości? Temu fundamentalnemu zagadnieniu poświęcimy kolejny, 37. Rozdział naszej książki: KONFORMIZM I PRESJA GRUPY.'
      ]
    }
  ]
};
