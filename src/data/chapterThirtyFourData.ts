import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 18 (GLOBALNIE ROZDZIAŁ 34 W STRUKTURZE DZIEŁA)
 * TYTUŁ: PRZYWIĄZANIE, BLISKOŚĆ I POTRZEBA WIĘZI
 * PODTYTUŁ: Dlaczego człowiek potrzebuje bliskości, różnie reaguje na obecność innych i interpretuje te same zachowania na różne sposoby
 */

export const chapterThirtyFourExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest kluczowa różnica między pojęciem kontaktu społecznego a autentyczną więzią (attachment)?',
    topic: 'Relacja a Więź',
    sectionRef: 'Sekcja 34.2',
    options: [
      { label: 'A', text: 'Więź opiera się na specyficznej, trwałej reprezentacji psychicznej obiektu przywiązania jako bezpiecznej bazy i bezpiecznej przystani, podczas gdy kontakt to jedynie interakcja behawioralna.', isCorrect: true },
      { label: 'B', text: 'Kontakt dotyczy wyłącznie rodziny, a więź znajomych z pracy.', isCorrect: false },
      { label: 'C', text: 'Więź powstaje automatycznie po 30 dniach znajomości.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy naukowej między kontaktem a więzią.', isCorrect: false }
    ],
    explanation: 'Zgodnie z koncepcją Johna Bowlby’ego więź przywiązaniowa różni się od zwykłej relacji funkcją regulacyjną: służy poszukiwaniu bliskości w warunkach stresu i daje poczucie bezpieczeństwa ontologicznego.',
    keyTakeaway: 'Więź to nie częstotliwość rozmów, lecz rola drugiej osoby w regulacji lęku i poczucia bezpieczeństwa.'
  },
  {
    id: 2,
    question: 'Czego wbrew obiegowym uproszczeniom NIE dowodzi procedura „Obcej Sytuacji” (Strange Situation) Mary Ainsworth?',
    topic: 'Badania Ainsworth i Ograniczenia',
    sectionRef: 'Sekcja 34.4',
    options: [
      { label: 'A', text: 'Nie dowodzi, że obserwowany u rocznego dziecka wzorzec reakcji jest niezmiennym, genetycznym wyrokiem na całe dorosłe życie bez względu na późniejsze doświadczenia relacyjne.', isCorrect: true },
      { label: 'B', text: 'Nie dowodzi, że dzieci różnią się reakcją na powrót matki.', isCorrect: false },
      { label: 'C', text: 'Nie dowodzi istnienia zachowań unikających.', isCorrect: false },
      { label: 'D', text: 'Nie dowodzi, że separacja od opiekuna wywołuje pobudzenie fizjologiczne.', isCorrect: false }
    ],
    explanation: 'Ainsworth badała reakcję na krótkotrwałą separację w sztucznym laboratorium. Przekładanie kategorii niemowlęcych 1:1 na dorosłe relacje partnerskie bez uwzględnienia plastyczności mózgu i późniejszych doświadczeń jest metodologicznym błędem.',
    keyTakeaway: 'Wzorzec przywiązania to zbiór dynamicznych strategii adaptacyjnych, a nie tatuaż na całe życie.'
  },
  {
    id: 3,
    question: 'W jaki sposób w relacji romantycznej powstaje tzw. „Pętla Lęku i Unikania” (Anxious-Avoidant Trap)?',
    topic: 'Pętla Relacyjna',
    sectionRef: 'Sekcja 34.12 & 34.18',
    options: [
      { label: 'A', text: 'Próba przybliżenia podjęta przez osobę zaniepokojoną jest interpretowana przez drugą stronę jako presja i kontrola, co wywołuje jej wycofanie, a to wycofanie potwierdza lęk pierwszej osoby i potęguje jej nacisk.', isCorrect: true },
      { label: 'B', text: 'Wynika z całkowitej nienawiści obu stron od pierwszego dnia znajomości.', isCorrect: false },
      { label: 'C', text: 'Jest wynikiem braku wspólnych pasji sportowych.', isCorrect: false },
      { label: 'D', text: 'Zachodzi wyłącznie wtedy, gdy partnerzy mieszkają w innych miastach.', isCorrect: false }
    ],
    explanation: 'Pętla ma charakter sprzężenia zwrotnego: zachowanie obronne jednej osoby staje się wyzwalaczem lękowym dla drugiej. Obie strony próbują regulować to samo napięcie, ale przeciwstawnymi strategiami.',
    keyTakeaway: 'Pętla nie wynika ze złej woli, lecz ze zderzenia dwóch odmiennych mechanizmów regulacji emocjonalnej.'
  },
  {
    id: 4,
    question: 'Dlaczego ten sam człowiek może przejawiać bezpieczny wzorzec w relacji zawodowej, a lękowy w relacji intymnej?',
    topic: 'Zmienność Wzorców Przywiązania',
    sectionRef: 'Sekcja 34.14 & 34.15',
    options: [
      { label: 'A', text: 'Wzorce przywiązania są zależne od kontekstu i poziomu podatności na zranienie: im wyższa stawka emocjonalna i zależność, tym szybciej aktywują się pierwotne strategie obronne.', isCorrect: true },
      { label: 'B', text: 'Świadczy to o rozdwojeniu jaźni lub poważnej patologii osobowości.', isCorrect: false },
      { label: 'C', text: 'Ponieważ w pracy nie odczuwamy żadnych emocji.', isCorrect: false },
      { label: 'D', text: 'Ludzie zmieniają styl przywiązania losowo co 24 godziny.', isCorrect: false }
    ],
    explanation: 'Współczesna psychologia relacji (m.in. Fraley) podkreśla, że człowiek posiada wielopoziomowe wewnętrzne modele operacyjne (IWM) różniące się w zależności od typu więzi i relacyjnej historii.',
    keyTakeaway: 'Styl przywiązania to funkcja interakcji między dwiema konkretnymi osobami, a nie sztywna cecha charakteru.'
  },
  {
    id: 5,
    question: 'Na czym polega fundamentalne rozróżnienie między FAKTEM a INTERPRETACJĄ w sytuacji opóźnionej odpowiedzi na wiadomość?',
    topic: 'Fakty a Interpretacje',
    sectionRef: 'Sekcja 34.8 & 34.24',
    options: [
      { label: 'A', text: 'Faktem jest obiektywny zapis: „Partner nie odpisał przez 3 godziny”. Interpretacją jest hipoteza: „Odpisuje późno, bo przestałem być dla niego ważny”.', isCorrect: true },
      { label: 'B', text: 'Faktem jest, że partner nas ignoruje, a interpretacją jest data na telefonie.', isCorrect: false },
      { label: 'C', text: 'Fakty i interpretacje w psychologii są tożsame.', isCorrect: false },
      { label: 'D', text: 'Faktem jest emocja lęku, a interpretacją długość tekstu.', isCorrect: false }
    ],
    explanation: 'Umysł w warunkach braku danych natychmiast uzupełnia lukę projekcją własnych obaw lub wcześniejszych zranień, myląc własną hipotezę z obiektywnym stanem rzeczywistości.',
    keyTakeaway: 'Oddzielenie rejestracji kamery (fakt) od opowieści umysłu (interpretacja) to pierwszy krok do regulacji relacyjnej.'
  }
];

export const chapterThirtyFourCaseStudies: CaseStudy[] = [
  {
    id: 'cs-34-anna-marek-bliskosc',
    title: 'Studium Przypadku: Anna i Marek — Anatomia Tańca Bliskości i Dystansu',
    subtitle: 'Jak dwie osoby z prawomocnymi potrzebami tworzą pętlę wzajemnego zagrożenia',
    protagonist: 'Anna (28 lat, tłumaczka) i Marek (30 lat, programista)',
    context: 'Związek z dwuletnim stażem. Oboje deklarują miłość i zaangażowanie, lecz po wspólnym zamieszkaniu wpadli w powtarzający się cykl pretensji i chłodu.',
    story: [
      'ETAP I — PIERWSZY SYGNAŁ: Marek po 10 godzinach intensywnej pracy wraca do domu ze słuchawkami na uszach. Potrzebuje 45 minut ciszy, by wygasić przebodźcowanie poznawcze.',
      'ETAP II — INTERPRETACJA ANNY: Anna czekała na Marka cały dzień. Widok słuchawek i oszczędne powitanie interpretuje jako: „On się ode mnie oddala, żałuje, że ze mną zamieszkał”. Czuje przyspieszone bicie serca i ucisk w klatce.',
      'ETAP III — PRÓBA PRZYBLIŻENIA PRZEZ NACISK: Anna wchodzi do pokoju Marka z serią pytań: „Dlaczego nawet na mnie nie spojrzysz? Coś się stało? Czy znowu jesteś na mnie zły?”. Jej ton jest napięty i oskarżycielski.',
      'ETAP IV — OBRONA MARKA PRZEZ WYCOFANIE: Marek słyszy w pytaniach Anny zarzut i zagrożenie własnej autonomii. W jego ciele rośnie napięcie. Odpowiada chłodno: „Daj mi po prostu święty spokój na pół godziny, czy to aż tak wiele?”. Zamyka drzwi.',
      'ETAP V — POTWIERDZENIE KATASTROFY: Zamknięcie drzwi jest dla Anny jednoznacznym potwierdzeniem odrzucenia. Płacze, wysyła długą wiadomość o braku miłości. Marek z kolei utwierdza się w przekonaniu: „Ona mnie osacza, w tym domu nie ma dla mnie powietrza”.',
      'ETAP VI — PRZEŁAMANIE PĘTLI: Podczas analizy relacyjnej oboje odkrywają, że Marek nie uciekał przed Anną, lecz przed przeciążeniem sensorycznym, a Anna nie chciała kontrolować Marka, lecz szukała uspokojenia lęku przed porzuceniem.'
    ],
    dialogue: [
      { speaker: 'Anna', text: 'Kiedy wracasz i zamykasz się w pokoju, czuję się, jakbym była dla ciebie niewidzialna.', subtext: 'Lęk przed utratą więzi ubrany w opis własnych uczuć.' },
      { speaker: 'Marek', text: 'Kiedy od progu zadajesz mi dziesięć pytań z pretensją w głosie, czuję, jakbym stawał przed trybunałem.', subtext: 'Poczucie przytłoczenia i potrzeba regeneracji autonomii.' }
    ],
    decisionTaken: 'Wprowadzenie „Protokołu 30 Minut Dekompresji” — obustronne uzgodnienie, że Marek ma pół godziny gwarantowanej ciszy bez konieczności tłumaczenia się, po czym sam inicjuje kontakt z Anną.',
    whatProtagonistSaw: 'Anna widziała partnera, który staje się obojętny. Marek widział partnerkę, która nie szanuje jego granic.',
    whatWasMissed: 'Oboje przeoczyli, że ich reakcje były desperackimi próbami obrony własnego bezpieczeństwa emocjonalnego.',
    psychologicalAnalysis: {
      coreMechanism: 'Zderzenie strategii hiperaktywacji (poszukiwanie natychmiastowego potwierdzenia) ze strategią deaktywacji (redukcja pobudzenia przez dystans fizyczny).',
      cognitiveBiases: [
        { name: 'Błąd atrybucji intencji', description: 'Przypisanie partnerowi wrogich motywów na podstawie jego reakcji obronnej.', impact: 'Eskalacja napięcia zamiast dialogu.' }
      ],
      defenseMechanisms: [
        { name: 'Projekcja lęku i wycofanie emocjonalne', explanation: 'Anna projektuje odrzucenie; Marek odcina kontakt afektywny.' }
      ],
      emotionalDynamic: 'Cykliczne przechodzenie od tęsknoty przez panikę i złość do chłodu i rezygnacji.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przedni zakręt kory obręczy (dACC)', role: 'Rejestracja bólu wykluczenia u Anny', activationState: 'Wysoka' },
        { region: 'Ciało migdałowate', role: 'Alarm przeciążenia bodźcami u Marka', activationState: 'Wysoka' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Oksytocyna', roleInScenario: 'Spadek poczucia bezpieczeństwa przy wyrzucie hormonów stresu.' }
      ],
      biologicalTimeline: [
        { timeMs: 'Powrót do domu (0 min)', process: 'Widok słuchawek -> pobudzenie lękowe u Anny.' },
        { timeMs: 'Wejście do pokoju (10 min)', process: 'Podniesiony głos -> reakcja „walcz lub uciekaj” u Marka.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Szantaż milczeniem vs natrętne dopytywanie', description: 'Nieświadome próby wymuszenia pożądanej reakcji.', vulnerabilityExploited: 'Lęk przed samotnością i lęk przed uwięzieniem.' }
      ],
      counterMeasures: [
        { step: 'Nazwanie pętli', script: '„Widzę, że oboje wpadamy w nasz stary taniec. Ty potrzebujesz oddechu, ja potrzebuję pewności, że jesteśmy razem. Dajmy sobie 30 minut”.', rationale: 'Rozbraja spiralę oskarżeń.' }
      ]
    },
    keyTakeaway: 'Bliskość i autonomia nie wykluczają się — są dwoma płucami tego samego organizmu relacyjnego.'
  }
];

export const chapterThirtyFourSelfExercises: SelfExercise[] = [
  {
    id: 'ex-34-1-mapa-wyzwalaczy',
    title: 'Ćwiczenie: Mapa Osobistych Wyzwalaczy Bliskości i Dystansu',
    subtitle: 'Identyfikacja momentów, w których tracisz poczucie bezpieczeństwa w relacji',
    objective: 'Zdiagnozowanie własnych automatycznych reakcji na wycofanie lub zbliżenie partnera.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Świadome nazwanie bodźców wyzwalających aktywuje grzbietowo-boczną korę przedczołową i hamuje automatyczne wyładowania w ciele migdałowatym.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zauważenie fizycznego sygnału alarmu',
        instruction: 'Przypomnij sobie sytuację z ostatniego miesiąca, gdy zachowanie bliskiej osoby wywołało w Tobie nagły niepokój lub złość.',
        promptText: 'Jaki był pierwszy sygnał z ciała?',
        placeholder: 'Ścisk w żołądku, gul w gardle, nagłe uderzenie gorąca...'
      },
      {
        stepNumber: 2,
        title: 'Rozdzielenie faktów od hipotez',
        instruction: 'Wypisz obiektywny fakt (rejestracja kamery) oraz automatyczną myśl, która się pojawiła.',
        promptText: 'Fakt vs Myśl automatyczna:',
        placeholder: 'Fakt: Nie odpisał przez 2h. Myśl: „Ma mnie gdzieś, znowu jestem na szarym końcu”...'
      },
      {
        stepNumber: 3,
        title: 'Zidentyfikowanie własnej strategii obronnej',
        instruction: 'Czy Twoją domyślną reakcją jest natychmiastowe dążenie do kontaktu (dopytywanie, pretensje), czy odcięcie emocjonalne i udawanie obojętności?',
        promptText: 'Moja strategia obronna:',
        placeholder: 'Zaczynam pisać złośliwe wiadomości albo milczę przez dwa dni, czekając aż zauważy...'
      }
    ],
    reflectionQuestions: [
      'Jak Twoja strategia obronna wpływa na układ nerwowy drugiej osoby?',
      'Co mogłaby usłyszeć druga osoba, gdybyś zamiast strategii obronnej nazwał swoją pierwotną bezbronną potrzebę?'
    ]
  }
];

export const chapterThirtyFour: Chapter = {
  number: 34,
  volume: 3,
  volumeChapterNumber: 18,
  title: 'Przywiązanie, Bliskość i Potrzeba Więzi',
  subtitle: 'Dlaczego człowiek potrzebuje bliskości, różnie reaguje na obecność innych i interpretuje te same zachowania na różne sposoby',
  leadParagraph: 'Człowiek nie rodzi się jako samotna, samowystarczalna jednostka. Od pierwszego oddechu aż po kres życia nasze przetrwanie, regulacja emocjonalna i poczucie sensu zależą od jakości relacji z innymi. Dlaczego jednak to, co dla jednej osoby jest upragnionym dowodem miłości, dla innej staje się duszącą kontrolą? W tym rozdziale badamy neurobiologię więzi, dynamikę przywiązania, napięcie między bliskością a autonomią oraz mechanizmy powstawania relacyjnych pętli nieporozumień.',
  totalEstimatedPages: 62,
  sections: [
    // 34.1
    {
      id: 'sec-34-1',
      pageNumber: 2040,
      sectionNumber: '34.1',
      title: 'Człowiek jako istota relacyjna: Dlaczego potrzebujemy innych, by stać się sobą',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Przez stulecia filozofia zachodnia promowała mit izolowanego, suwerennego podmiotu — racjonalnej jednostki, która najpierw w samotności definiuje swoje „ja”, a dopiero później, z własnej woli, zawiera umowy i wchodzi w relacje ze światem zewnętrznym. Współczesna psychologia rozwojowa, neuronauka społeczna i biologia ewolucyjna bezlitośnie obalają ten pogląd.',
        'Człowiek nie staje się sobą w samotności. Ludzki mózg jest narządem społecznie programowalnym. Kora przedczołowa, układ limbiczny, a nawet autonomiczny układ nerwowy dojrzewają i kalibrują się wyłącznie w obecności drugiego człowieka — poprzez kontakt wzrokowy, ton głosu, dotyk i współregulację afektu.',
        'Potrzeba przynależności i więzi nie jest luksusem emocjonalnym ani cechą osób „słabych”. Jest biologicznym imperatywem przetrwania. Bezpieczny kontakt z drugim człowiekiem obniża poziom bazowego kortyzolu, stabilizuje rytm serca i aktywuje grzbietową część kory przedczołowej odpowiedzialną za myślenie perspektywiczne. Zrozumienie relacji nie jest zatem dodatkiem do wiedzy o umyśle — jest fundamentem rozumienia człowieka.'
      ]
    },

    // 34.2
    {
      id: 'sec-34-2',
      pageNumber: 2050,
      sectionNumber: '34.2',
      title: 'Relacja a więź: Anatomia psychologicznego zróżnicowania kontaktu',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W języku potocznym słowa „znajomość”, „kontakt”, „relacja” i „więź” bywają używane zamiennie. Z punktu widzenia psychologii naukowej opisują one jednak diametralnie różne stany organizmu i reprezentacji psychicznych.',
        'KONTAKT to pojedyncza, doraźna interakcja — wymiana słów z kasjerem, krótka rozmowa na korytarzu. ZNAJOMOŚĆ to powtarzalny kontakt z przewidywalną rolą społeczną (np. współpracownik z innego działu). RELACJA zakłada już wzajemne oczekiwania, historię interakcji i pewien poziom wpływu na codzienne wybory.',
        'Czym zatem jest autentyczna WIĘŹ (attachment bond)? Zgodnie z kryteriami psychologii przywiązania, relacja staje się więzią dopiero wtedy, gdy spełnia cztery specyficzne warunki:',
        '1. Dążenie do bliskości (Proximity Seeking): W warunkach dyskomfortu jednostka spontanicznie szuka fizycznego lub emocjonalnego kontaktu z obiektem przywiązania.\n2. Bezpieczna przystań (Safe Haven): Obecność drugiej osoby pozwala ukoić pobudzenie lękowe i odzyskać równowagę somatyczną.\n3. Bezpieczna baza (Secure Base): Poczucie, że druga osoba jest dostępna, umożliwia odważną eksplorację świata, podejmowanie ryzyka i naukę.\n4. Ból separacyjny (Separation Distress): Niechciane zerwanie kontaktu wywołuje ostry dyskomfort psychobiologiczny.',
        'Wielu ludzi uczestniczy w setkach powierzchownych relacji, nie doświadczając ani jednej bezpiecznej więzi — co tworzy paradoks „samotności w tłumie”.'
      ]
    },

    // 34.3
    {
      id: 'sec-34-3',
      pageNumber: 2062,
      sectionNumber: '34.3',
      title: 'Teoria przywiązania — początki: Rewolucja Johna Bowlby’ego i Biologia Przetrwania',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Przywiązanie intymne do drugiego człowieka jest osnową, wokół której toczy się całe ludzkie życie — nie tylko w niemowlęctwie i dzieciństwie, ale przez cały okres dorosłości aż po podeszły wiek. Z tych pierwotnych więzi człowiek czerpie siłę i radość życia, a także zdolność dawania siły i radości innym.',
        author: 'Dr John Bowlby',
        source: 'Tavistock Institute of Medical Psychology, „A Secure Base: Parent-Child Attachment and Healthy Human Development”, Basic Books, 1988'
      },
      paragraphs: [
        'W latach 50. XX wieku John Bowlby, brytyjski psychoanalityk i psychiatra dziecięcy, rzucił wyzwanie ówczesnemu dogmatowi psychoanalitycznemu i behawiorystycznemu, głoszącemu, że niemowlę przywiązuje się do matki wyłącznie dlatego, że ta zaspokaja jego głód fizjologiczny (tzw. teoria popędowa lub redukcja popędu wtórnego).',
        'Inspirując się etologią (badaniami Konrada Lorenza nad wdrukowaniem u gęsi oraz eksperymentami Harry’ego Harlowa z młodymi rezusami wybierającymi miękką kukłę z frotte zamiast drucianej kukły podającej mleko), Bowlby sformułował rewolucyjną tezę: System przywiązania jest wrodzonym, ewolucyjnie ukształtowanym behawioralnym systemem kontrolnym (Behavioral Control System), działającym analogicznie do biologicznego termostatu.',
        'Dziecko nie szuka opiekuna z powodu jedzenia — szuka ochrony przed drapieżnikami, ukojenia przerażonego układu nerwowego i fizjologicznej synchronizacji. Bowlby wprowadził fundamentalne pojęcie WEWNĘTRZNYCH MODELI OPERACYJNYCH (Internal Working Models — IWM): poznawczo-afektywnych map predykcyjnych, które mózg konstruuje na fundamencie powtarzających się interakcji z kluczowymi opiekunami.',
        'Model operacyjny odpowiada na dwa kardynalne pytania egzystencjalne: 1) „Czy świat i inni ludzie są dostępni, przewidywalni i godni zaufania w chwilach mojego cierpienia?”, oraz 2) „Czy ja sam jestem kimś wartościowym, kto zasługuje na troskę i miłość bez konieczności udowadniania swojej przydatności?”. Ta podwójna matryca rzutuje później na każdą relację romantyczną, przyjacielską i zawodową w dorosłym życiu.'
      ],
      subsections: [
        {
          id: 'sub-34-3-1',
          title: 'Analiza słów dr. Johna Bowlby’ego: Przywiązanie jako Podstawa Odwagi Życiowej',
          content: [
            'Słowa dr. Johna Bowlby’ego o przywiązaniu jako „osnowie całego ludzkiego życia” obalają jeden z najbardziej destrukcyjnych mitów zachodniej kultury sukcesu: mit absolutnej, samowystarczalnej niezależności. Bowlby dowodził, że dojrzała niezależność nie powstaje z odcięcia się od innych, lecz rodzi się z głębokiego, zinternalizowanego poczucia bezpiecznej bazy.',
            'Z perspektywy neurobiologii przywiązania, posiadanie bezpiecznej przystani w drugim człowieku dramatycznie obniża poziom bazowej aktywności ciała migdałowatego i osi podwzgórze-przysadka-nadnercza (HPA). Kiedy człowiek czuje, że w razie katastrofy ma do kogo wrócić, jego kora przedczołowa zyskuje metabolizm niezbędny do eksploracji, twórczego ryzyka i uczenia się. Paradoks Bowlby’ego brzmi: Im bezpieczniej jesteś połączony, tym odważniej możesz eksplorować świat w pojedynkę.'
          ],
          highlightBox: {
            title: 'Wgląd Kliniczny: Pozorna Samowystarczalność a Chroniczny Stres',
            content: 'Jednostka, która uważa, że „nie potrzebuje nikogo i na nikim nie polega”, często płaci za to utajoną hiperaktywacją układu współczulnego. Niezależność wymuszona lękiem przed odrzuceniem to nie dojrzałość, lecz mechanizm obronny izolacji afektu.',
            type: 'insight'
          }
        }
      ]
    },

    // 34.4
    {
      id: 'sec-34-4',
      pageNumber: 2075,
      sectionNumber: '34.4',
      title: 'Mary Ainsworth i procedura Strange Situation: Od obserwacji do empirii',
      category: 'teoria',
      readingTimeMinutes: 27,
      quote: {
        text: 'Wzorce zachowania obserwowane podczas ponownego spotkania po krótkiej separacji nie odzwierciedlają jedynie nastroju dziecka w danej chwili; odzwierciedlają one całą historię wzajemnej responsywności i wrażliwości, jakiej dziecko doświadczało w ramionach matki przez pierwsze dwanaście miesięcy życia.',
        author: 'Dr Mary D. Salter Ainsworth',
        source: 'University of Virginia, „Patterns of Attachment: A Psychological Study of the Strange Situation”, Lawrence Erlbaum, 1978'
      },
      paragraphs: [
        'Mary Ainsworth przeniosła intuicje Bowlby’ego na grunt precyzyjnych badań empirycznych, tworząc ustandaryzowaną procedurę „Obcej Sytuacji” (Strange Situation). Roczne dziecko przechodziło przez serię 8 starannie zaaranżowanych, 3-minutowych epizodów: swobodna zabawa z matką, wejście obcej osoby dorosłej, wyjście matki i pozostanie dziecka z obcym, samotność dziecka w pokoju, powrót matki, ponowna separacja i ostateczne spotkanie.',
        'Kluczowe odkrycie naukowe Ainsworth nie dotyczyło tego, czy dzieci płaczą podczas separacji (płacze większość zdrowych niemowląt pod wpływem aktywacji lęku separacyjnego w zakręcie obręczy). Prawdziwa różnica diagnostyczna ujawniła się w MOMENCIE POWROTU opiekuna do pokoju:',
        '- Grupa B (Przywiązanie bezpieczne, ~65% populacji normatywnej): Dziecko aktywnie wita matkę, szuka fizycznego kontaktu, pozwala się objąć i ukoić. Po 1-2 minutach pobudzenie somatyczne spada, tętno zwalnia, a dziecko z zaciekawieniem powraca do eksploracji zabawek.',
        '- Grupa A (Przywiązanie lękowo-unikające, ~20%): Dziecko przy powrocie matki demonstracyjnie udaje obojętność, nie podnosi wzroku, odwraca się plecami i skupia na zabawkach. Jednak podpięte czujniki telemetryczne wykazały szokujący fakt: tętno tych dzieci było gwałtownie przyspieszone, a poziom kortyzolu w ślinie równie wysoki jak u dzieci głośno płaczących! Ich spokój był fałszywą maską autonomiczną służącą wygaszeniu sygnałów distressu, aby uniknąć kolejnego chłodnego odrzucenia.',
        '- Grupa C (Przywiązanie lękowo-ambiwalentne / oporne, ~15%): Dziecko po wejściu matki krzyczy, rzuca się w jej stronę, a gdy znajdzie się na rękach — szarpie się, bije opiekunkę rączkami, odpycha zabawki i nie daje się ukoić przez wiele minut. Chroniczna hiperaktywacja służy utrzymaniu uwagi niekonsekwentnego opiekuna za wszelką cenę.',
        'W późniejszych latach Mary Main i Judith Solomon zidentyfikowały czwartą, najtrudniejszą kategorię: Styl Zdezorganizowany (Grupa D), w którym dziecko zastyga w bezruchu (freezing), wykazuje zachowania sprzeczne (np. czołga się w tył w stronę matki z twarzą odwróconą w ścianę), ponieważ opiekun jest jednocześnie jedynym źródłem bezpieczeństwa i źródłem śmiertelnego przerażenia.'
      ],
      subsections: [
        {
          id: 'sub-34-4-1',
          title: 'Analiza słów dr Mary Ainsworth: Odpowiedzialność Responsywności a Biologia Regulacji',
          content: [
            'Wnikliwa dekonstrukcja obserwacji dr Ainsworth ujawnia fundamentalne prawo relacyjne: styl przywiązania niemowlęcia nie jest cechą wrodzoną ani genetycznym przeznaczeniem temperamentu, lecz bezpośrednim zapisem wrażliwości emocjonalnej opiekuna (maternal sensitivity). Opiekun bezpieczny to nie ktoś nieskazitelny, lecz ktoś, kto trafnie odczytuje sygnały niemowlęcia i odpowiada na nie bez zbędnej zwłoki.',
            'W przypadku dzieci unikających matki systematycznie odrzucały prośby o przytulenie w chwilach bólu; w przypadku dzieci ambiwalentnych matki były nieprzewidywalne — raz nadmiernie wylewne, raz nieobecne psychicznie. Mózg dziecka dostosowuje więc swoją strategię nerwową: unikający wyłącza ekspresję, by zatrzymać matkę chociaż w zasięgu wzroku; ambiwalentny rozkręca krzyk do maksimum, by wymusić kontakt. Te strategie radzenia sobie, zrodzone jako genialne adaptacje w kołysce, w dorosłym małżeństwie zamieniają się w destrukcyjne pułapki.'
          ],
          highlightBox: {
            title: 'Kluczowe Ograniczenie Metodologiczne Badania Ainsworth',
            content: 'Procedura Obcej Sytuacji rejestruje mikromoment w sztucznym laboratorium. Choć styl przywiązania ma tendencję do samopotwierdzania się, mózg zachowuje neuroplastyczność przez całe życie. Głębokie, bezpieczne relacje partnerskie w dorosłości, psychoterapia relacyjna oraz autorefleksja pozwalają wypracować tzw. styl bezpieczny nabyty (earned security).',
            type: 'warning'
          }
        }
      ]
    },

    // 34.5
    {
      id: 'sec-34-5',
      pageNumber: 2088,
      sectionNumber: '34.5',
      title: 'Historia: „Pierwsze tygodnie” — Jak rodzą się oczekiwania relacyjne',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
      paragraphs: [
        'Piotr i Julia poznali się na konferencji projektowej. Przez pierwsze trzy tygodnie ich kontakt przypominał podręcznikowy stan zakochania: codzienne rozmowy, wspólny zachwyt literaturą, szybka wymiana myśli.',
        'Jednak pod powierzchnią tych spotkań każde z nich wnosiło do relacji zupełnie inny bagaż doświadczeń i predykcji. Piotr dorastał w domu, w którym miłość była warunkowa i nagle odbierana w chwilach dziecięcego błędu. W jego mózgu bliskość była nierozerwalnie połączona z lękiem przed nagłym porzuceniem.',
        'Julia z kolei wychowała się w rodzinie o wysokim stopniu kontroli, gdzie rodzice czytali jej pamiętniki i nie szanowali zamkniętych drzwi pokoju. Dla niej intymność niosła podświadome zagrożenie utraty suwerenności i „połknięcia”.',
        'W czwartym tygodniu znajomości nastąpił z pozoru błahy incydent: Julia wyjechała na weekendowy warsztat jogi z zasadą offline, uprzedzając dzień wcześniej: „Będę miała wyłączony telefon do niedzieli wieczorem”. Jak zareagował umysł Piotra?'
      ]
    },

    // 34.6
    {
      id: 'sec-34-6',
      pageNumber: 2098,
      sectionNumber: '34.6',
      title: 'Co człowiek robi z niepewnością? Przewidywanie i wypełnianie luk informacyjnych',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Luka informacyjna jest dla ludzkiego mózgu stanem głębokiego dyskomfortu metabolicznego. W sytuacji braku sygnału z zewnątrz (np. wyłączony telefon partnera przez 24 godziny) kora mózgowa nie przechodzi w stan neutralnego wyczekiwania. Natychmiast uruchamia aparat predykcyjny.',
        'Człowiek zaczyna „wypełniać ciszę”. Z jakiego materiału buduje te wypełnienia? Wyłącznie z materiału własnych wcześniejszych doświadczeń i ugruntowanych obaw. Osoba z lękowym wzorcem przywiązania zinterpretuje milczenie jako: „Spotkała kogoś lepszego, znudziłem się jej, żałuje, że ze mną była”.',
        'W tym momencie w ciele zachodzi pełna reakcja stresowa: wyrzut noradrenaliny, przyspieszony oddech, ruminacje. Człowiek reaguje nie na to, co się stało (wyłączony telefon zgodnie z umową), lecz na film katastroficzny wygenerowany przez własny mózg.'
      ]
    },

    // 34.7
    {
      id: 'sec-34-7',
      pageNumber: 2110,
      sectionNumber: '34.7',
      title: 'Historia: „Dlaczego nie odpisałeś?” — Jedna sytuacja, wiele możliwych światów',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
      paragraphs: [
        'Wyobraźmy sobie prostą sytuację komunikacyjną: Tomasz wysyła do swojej partnerki Marty wiadomość: „Hej, kupiłem bilety do teatru na piątek, cieszysz się?”. Wiadomość otrzymuje status „odczytano” o godzinie 11:15.',
        'Do godziny 16:30 na ekranie nie pojawia się żadna odpowiedź. Przez 5 godzin i 15 minut Tomasz przechodzi przez trzy odrębne stany świadomości: od lekkiego zdziwienia, przez narastający lęk, aż po złość obronną.',
        'Co w tym samym czasie działo się u Marty? O 11:15 odebrała wiadomość w drodze na salę operacyjną w szpitalu, gdzie jako lekarka asystowała przy nagłym przypadku zagrażającym życiu pacjenta. Telefon leżał w szafce pracowniczej.',
        'Pomiędzy światem Tomasza a światem Marty powstała przepaść interpretacyjna. Poniższy moduł analityczny rozkłada tę sytuację na czynniki pierwsze.'
      ],
      interactiveWindowRef: {
        id: 'iw-34-7-fakty-interpretacje',
        type: 'what_we_know',
        title: 'Co naprawdę wiemy? — Wiadomość bez odpowiedzi',
        subtitle: 'Rozdzielenie nagich faktów od projekcji i domysłów',
        context: 'Tomasz widzi status „odczytano” o 11:15. Do 16:30 brak odpowiedzi. W jego głowie rodzi się przekonanie: „Ona mnie lekceważy i teatr jej nie obchodzi”.',
        whatWeKnow: {
          items: [
            {
              id: 'item-1',
              statement: 'Aplikacja komunikatora wyświetliła status „odczytano” o 11:15.',
              category: 'fakt',
              explanation: 'To jedyny obiektywny fakt zarejestrowany przez urządzenie techniczne.'
            },
            {
              id: 'item-2',
              statement: 'Marta przeczytała treść z pełną uwagą i uznała ją za nieważną.',
              category: 'interpretacja',
              explanation: 'Ekran mógł zostać odblokowany w pośpiechu, w kieszeni lub powiadomienie zniknęło przed przeczytaniem.'
            },
            {
              id: 'item-3',
              statement: 'Marta może znajdować się w sytuacji nagłego obowiązku zawodowego uniemożliwiającego pisanie.',
              category: 'hipoteza',
              explanation: 'Testowalna hipoteza alternatywna wymagająca weryfikacji przed wyciągnięciem ostatecznych wniosków.'
            },
            {
              id: 'item-4',
              statement: 'Marta celowo ignoruje Tomasza, aby pokazać mu swoją wyższość i niezależność.',
              category: 'motyw',
              explanation: 'Przypisanie wrogiej intencji bez cienia dowodu — klasyczna projekcja własnego poczucia zagrożenia.'
            }
          ]
        },
        takeaway: 'Nigdy nie myl statusu technicznego aplikacji z wewnętrznym stanem psychologicznym drugiego człowieka.'
      }
    },

    // 34.8
    {
      id: 'sec-34-8',
      pageNumber: 2125,
      sectionNumber: '34.8',
      title: 'Fakty a interpretacje: Dlaczego umysł natychmiast dopowiada historię',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Zdolność do tworzenia hipotez o stanach mentalnych innych ludzi (tzw. Teoria Umysłu — Theory of Mind) była wielkim sukcesem ewolucyjnym Homo sapiens. Pozwalała przewidywać zamiary członków plemienia i wrogów.',
        'Jednak ta sama zdolność w warunkach stresu relacyjnego staje się źródłem cierpienia. Mózg posiada silną tendencję do natychmiastowego przekształcania hipotezy w niepodważalny fakt. Nazywamy to BŁĘDEM REIFIKACJI INTERPRETACJI.',
        'Kiedy partner mówi: „Chciałbym spędzić ten wieczór sam”, faktem jest komunikat o potrzebie samotności. Interpretacją jest: „On już mnie nie kocha”. Jeśli potraktujesz interpretację jak fakt, Twoja odpowiedź będzie atakiem lub fochem — co sprowokuje u partnera dokładnie to wycofanie, którego tak bardzo się obawiałeś.'
      ]
    },

    // 34.9
    {
      id: 'sec-34-9',
      pageNumber: 2135,
      sectionNumber: '34.9',
      title: 'Potrzeba bliskości: Bezpieczeństwo, wsparcie, regulacja i potwierdzenie',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Potrzeba bliskości w dorosłym życiu nie jest dziecinną zależnością. Spełnia kluczowe funkcje fizjologiczne i psychiczne:',
        '1. Współregulacja afektu (Social Baseline Theory Jamesa Coana): Badania fMRI Coana wykazały, że gdy kobieta oczekuje na bolesny impuls elektryczny, trzymanie za rękę anonimowej osoby obniża aktywność struktur lękowych mózgu, ale trzymanie za rękę kochającego męża redukuje ten lęk niemal do zera. Obecność bliskiej osoby sprawia, że mózg wydatkuje mniej glukozy na obsługę stresu.',
        '2. Potwierdzenie tożsamości (Validation): Potrzebujemy, aby nasze emocje i doświadczenia zostały zauważone i uznane przez kogoś ważnego. Brak walidacji wywołuje poczucie alienacji poznawczej.',
        '3. Bezpieczna przystań: Świadomość, że po trudnym dniu w świecie zewnętrznym mamy miejsce, w którym nie musimy zakładać maski ani walczyć o status.'
      ]
    },

    // 34.10
    {
      id: 'sec-34-10',
      pageNumber: 2146,
      sectionNumber: '34.10',
      title: 'Potrzeba autonomii: Przestrzeń, granice, tożsamość i suwerenność',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'Równolegle do potrzeby więzi, w każdym człowieku pulsuje równie fundamentalna potrzeba AUTONOMII (opisywana m.in. w teorii samostanowienia Ryana i Deciego).',
        'Autonomia to poczucie, że jestem źródłem własnych działań, posiadam przestrzeń na własne myśli, pasje, odpoczynek i granice psychofizyczne. Autonomia nie jest przeciwieństwem miłości — jest jej warunkiem koniecznym. Relacja pozbawiona autonomii przestaje być związkiem dwóch osób, stając się zlaną masą (enmeshment), w której każdy ruch jednej osoby wywołuje panikę u drugiej.',
        'Człowiek, którego granice autonomii są gwałcone (np. poprzez natrętne przesłuchania, ciągłe wymuszanie deklaracji, sprawdzanie korespondencji), zaczyna podświadomie kojarzyć bliskość z uwięzieniem i utratą siebie.'
      ]
    },

    // 34.11
    {
      id: 'sec-34-11',
      pageNumber: 2158,
      sectionNumber: '34.11',
      title: 'Bliskość kontra autonomia: Dialektyczne napięcie dojrzałej relacji i Protest Przywiązaniowy',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Większość walk w związkach nie dotyczy pieniędzy, seksu ani niepozmywanych naczyń. To zawoalowane, desperackie protesty przywiązaniowe. Pod powłoką wściekłości i oskarżeń kryje się jedno przerażone pytanie: „Czy jesteś tam dla mnie? Czy się dla ciebie liczę? Czy jeśli zawołam w ciemności, przyjdziesz mi z pomocą?”.',
        author: 'Dr Sue Johnson',
        source: 'University of Ottawa, „Hold Me Tight: Seven Conversations for a Lifetime of Love”, Little, Brown & Company, 2008'
      },
      paragraphs: [
        'Największy dramat i zarazem powtarzalny paraliż w relacjach intymnych nie wynika ze zderzenia „dobra ze złem” czy manipulacji socjopatycznej, lecz ze zderzenia DWÓCH RÓWNIE ZDROWYCH, BIOLOGICZNIE ZAKORZENIONYCH POTRZEB: potrzeby bezpiecznej przynależności oraz potrzeby psychologicznej autonomii.',
        'Kiedy partner A wysyła komunikat: „Chcę być z tobą bliżej, porozmawiajmy o nas”, a partner B odpowiada: „Potrzebuję pobyć sam, dusi mnie ta rozmowa”, żaden z nich nie jest potworem ani emocjonalnym kaleką. Reprezentują oni dwa bieguny ludzkiej kondycji układu nerwowego. Katastrofa relacyjna zaczyna się wtedy, gdy każda ze stron interpretuje neurologiczną potrzebę partnera jako egzystencjalny atak na własne bezpieczeństwo:',
        '- Partner lękowy interpretuje prośbę o autonomię jako zwiastun odrzucenia i porzucenia („Jeśli on chce być sam, to znaczy, że już mnie nie kocha, a ja przestaję dla niego istnieć”).',
        '- Partner unikający interpretuje prośbę o bliskość jako agresywne wtargnięcie, kontrolę i próbę emocjonalnego połknięcia („Ona chce mnie uwięzić, odebrać mi wolność i zniszczyć moją tożsamość”).',
        'Dojrzałość relacyjna polega na porzuceniu naiwnego wyobrażenia, że związek jest statycznym punktem pełnego zespolenia. Dojrzała relacja jest pulsującym tańcem homeostazy: nieustannym rytmem przybliżenia i oddalenia, bezpiecznego powrotu do bazy i odważnego wyjścia w świat — dokładnie tak, jak wdech i wydech w fizjologii oddychania.'
      ],
      subsections: [
        {
          id: 'sub-34-11-1',
          title: 'Analiza słów dr Sue Johnson: Protest Przywiązaniowy i Koncepcja Demon Dialogues',
          content: [
            'Twórczyni Terapii Skoncentrowanej na Emocjach (EFT), dr Sue Johnson, demaskuje naturę awantur domowych. Gdy kora mózgowa partnera lękowego rejestruje emocjonalny chłód lub milczenie drugiej strony, w ciele migdałowatym odpala się tzw. Panika Przywiązaniowa (Attachment Panic) — identyczny neurochemiczny alarm, jaki przeżywa niemowlę zgubione w lesie.',
            'Ponieważ dorosły człowiek wstydzi się powiedzieć: „Boję się, że mnie opuścisz i jestem bezradny”, maskuje ten lęk agresją wtórną: krzykiem, ironią, wypominaniem starych błędów. Druga strona widzi jedynie atakującego agresora, więc uruchamia strategię obronną: zamyka się w sobie lub ucieka. Dr Johnson nazywa to „Tańcem Protestu”: im głośniej krzyczysz z lęku, tym dalej ucieka partner, co z kolei potęguje Twój krzyk. Przerwanie tego zaklętego koła wymaga odwagi obnażenia pierwotnej bezradności pod pancerzem złości.'
          ],
          highlightBox: {
            title: 'Wgląd Terapeutyczny: Pytanie ARE (Accessibility, Responsiveness, Engagement)',
            content: 'W chwilach kryzysu partnerskiego układ limbiczny zadaje podświadomie trzy pytania: 1) Dostępność: Czy mogę do Ciebie dotrzeć? 2) Responsywność: Czy odpowiesz na mój ból, gdy Ci go pokażę? 3) Zaangażowanie: Czy wiesz, jak bardzo jestem dla Ciebie ważny? Pozytywna odpowiedź na te trzy pytania gasi 90% relacyjnych pożarów.',
            type: 'insight'
          }
        }
      ]
    },

    // 34.12
    {
      id: 'sec-34-12',
      pageNumber: 2170,
      sectionNumber: '34.12',
      title: 'Historia: „Za blisko” — Jak powstaje pętla relacyjnego uciekania i pogoni',
      category: 'studium-przypadku',
      readingTimeMinutes: 24,
      paragraphs: [
        'Karolina i Michał są parą od roku. Karolina ma za sobą trudne rozstanie, w którym poprzedni partner odszedł bez słowa wyjaśnienia. Michał z kolei wychował się przy nadopiekuńczej matce, która kontrolowała każdy jego krok aż do 20. roku życia.',
        'W niedzielne popołudnie Michał siada przy biurku, by zająć się modelarstwem. Karolina podchodzi, siada obok i pyta: „O czym myślisz? Wyglądasz na smutnego. Czy coś jest między nami nie tak?”.',
        'Michał wzdycha ciężko: „Nic, po prostu chcę pokleić model”. Karolina słyszy westchnienie i czuje ukłucie lęku: „Zawsze tak mówisz, kiedy się oddalasz. Powiedz mi prawdę!”. Michał wstaje, rzuca klej na stół i wychodzi na spacer bez słowa.',
        'Rozpoczyna się klasyczna pętla relacyjna. Zobaczmy jej interaktywny model.'
      ],
      interactiveWindowRef: {
        id: 'iw-34-12-petla-relacji',
        type: 'loop',
        title: 'Pętla Relacyjna: Pogoń i Ucieczka (Demand-Withdraw Pattern)',
        subtitle: 'Cykliczny mechanizm napędzania się lęku i dystansu',
        context: 'Karolina odczuwa lęk przed chłodem -> zadaje pytania z presją -> Michał czuje osaczenie -> Michał wychodzi -> Karolina czuje panikę -> kolejna eskalacja.',
        loopSteps: [
          {
            step: 1,
            title: 'Wyzwalacz autonomii',
            actor: 'Michał',
            action: 'Siada do własnego hobby, milczy i skupia się na modelu.',
            interpretationByOther: '„Oddala się ode mnie, traci zainteresowanie, zbliża się kryzys”.',
            emotionalTrigger: 'Lęk przed porzuceniem u Karoliny.',
            counterAction: 'Dopytywanie z napiętym głosem: „Czy coś jest nie tak?”.'
          },
          {
            step: 2,
            title: 'Wyzwalacz osaczenia',
            actor: 'Karolina',
            action: 'Nalega na rozmowę o relacji w momencie wyciszenia Michała.',
            interpretationByOther: '„Znowu przesłuchanie, nie mam prawa do własnej przestrzeni”.',
            emotionalTrigger: 'Lęk przed utratą autonomii u Michała.',
            counterAction: 'Wycofanie fizyczne i emocjonalne — wyjście z pokoju.'
          },
          {
            step: 3,
            title: 'Potwierdzenie katastrofy',
            actor: 'Michał',
            action: 'Trzaśnięcie drzwiami i spacer w milczeniu.',
            interpretationByOther: '„Moje najgorsze obawy się spełniły — zostałam sama i odrzucona”.',
            emotionalTrigger: 'Poczucie bezradności i panika u Karoliny.',
            counterAction: 'Wysyłanie dziesiątek oskarżycielskich wiadomości na telefon.'
          },
          {
            step: 4,
            title: 'Zabetonowanie dystansu',
            actor: 'Karolina',
            action: 'Zalanie wiadomościami i pretensjami.',
            interpretationByOther: '„Powrót do domu oznacza wojnę, muszę zostać na zewnątrz dłużej”.',
            emotionalTrigger: 'Wyczerpanie i poczucie bezsilności u Michała.',
            counterAction: 'Wyłączenie telefonu na kolejne 3 godziny.'
          }
        ],
        takeaway: 'W pętli relacyjnej nikt nie jest agresorem — oboje są więźniami własnych strategii obronnych, które produkują dokładnie to, czego najbardziej się obawiają.'
      }
    },

    // 34.13
    {
      id: 'sec-34-13',
      pageNumber: 2185,
      sectionNumber: '34.13',
      title: 'Wzorce przywiązania u dorosłych: Cztery strategie radzenia sobie z zależnością',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'W latach 80. Cindy Hazan i Phillip Shaver przenieśli koncepcję Ainsworth na grunt relacji romantycznych dorosłych, a Bartholomew i Horowitz zaproponowali czteropolowy model oparty na dwóch wymiarach: LĘKU (przed odrzuceniem) oraz UNIKANIA (bliskości):',
        '1. BEZPIECZNY (Niski lęk, niskie unikanie): Pozytywny obraz siebie i pozytywny obraz innych. Człowiek nie boi się intymności ani zależności, a jednocześnie nie traci autonomii. W kryzysie komunikuje potrzeby wprost.',
        '2. LĘKOWO-POCHŁONIĘTY (Wysoki lęk, niskie unikanie): Negatywny obraz siebie („nie wystarczam”) i idealizowany obraz innych. Ciągłe poszukiwanie zapewnień, nadmierna czujność na sygnały chłodu, skłonność do dramatyzowania i natrętnego testowania partnera.',
        '3. ODDALAJĄCO-UNIKAJĄCY (Niski lęk deklaratywny, wysokie unikanie): Pozornie wysoka samoocena („jestem samowystarczalny, nikogo nie potrzebuję”) i negatywny obraz innych. Tłumienie potrzeb więzi, ucieczka w pracę lub hobby przy próbach pogłębienia relacji.',
        '4. LĘKOWO-UNIKAJĄCY / ZDEZORGANIZOWANY (Wysoki lęk, wysokie unikanie): Pragnienie bliskości połączone z paniką przed zranieniem. Gdy partner jest daleko — tęsknią; gdy podchodzi blisko — uciekają lub atakują.'
      ]
    },

    // 34.14
    {
      id: 'sec-34-14',
      pageNumber: 2200,
      sectionNumber: '34.14',
      title: 'Dlaczego etykiety przywiązania mogą być mylące? Pułapka pop-psychologicznych szufladek',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'W dobie internetu pojęcia „styl lękowy” i „styl unikający” stały się modnymi etykietami służącymi do szybkiego diagnozowania partnerów po trzech randkach. Jest to głębokie wypaczenie nauki.',
        'Współczesna psychologia traktuje wymiary przywiązania jako CIĄGŁE (kontinuum), a nie dyskretne szuflady. Co więcej, wzorce te wykazują dużą specyficzność relacyjną: ten sam człowiek może czuć się w 100% bezpiecznie w przyjaźni z kolegą ze szkoły, a przejawiać silny lęk w relacji intymnej z partnerką.',
        'Używanie etykiety jako wyroku („On jest po prostu unikający, nic się nie da zrobić”) zwalnia z wysiłku zrozumienia kontekstu i dynamiki wzajemnej.'
      ],
      interactiveWindowRef: {
        id: 'iw-34-14-rozpoznaj-styl',
        type: 'counter_case',
        title: 'Czy naprawdę potrafisz rozpoznać styl? — Pułapka etykietowania',
        subtitle: 'Konfrontacja uproszczonego schematu z rzeczywistością psychologiczną',
        context: 'Michał nie odzywa się po kłótni. Znajomi Karoliny natychmiast mówią: „Klasyczny narcyz i styl unikający, uciekaj!”.',
        counterCase: {
          standardTheory: 'Ktoś, kto milczy i odcina kontakt po awanturze, ma „styl unikający” i nie zależy mu na relacji.',
          counterExample: 'Michał milczy, ponieważ poziom kortyzolu i tętna przekroczył u niego 120 bpm (stan zalania emocjonalnego wg Gottmana). Jego milczenie nie jest brakiem uczuć, lecz desperacką próbą uniknięcia wybuchu agresji słownej, której panicznie się wstydzi.',
          whyItDefiesRule: 'To samo zachowanie (milczenie) może wynikać z chłodu, ale równie dobrze z paraliżującego przestymulowania układu nerwowego.',
          deeperLesson: 'Nigdy nie oceniaj głębi uczuć wyłącznie po powierzchownej ekspresji obronnej w warunkach ostrego stresu.'
        },
        takeaway: 'Etykieta przywiązania opisuje jedynie nawykową strategię regulacji pobudzenia, a nie moralną wartość człowieka.'
      }
    },

    // 34.15
    {
      id: 'sec-34-15',
      pageNumber: 2215,
      sectionNumber: '34.15',
      title: 'Historia: „Ta sama osoba, dwie relacje” — Zmienna natura wzorca',
      category: 'studium-przypadku',
      readingTimeMinutes: 22,
      paragraphs: [
        'Wojtek przez cztery lata był w związku z Beatą. W tamtej relacji był wiecznie zazdrosny, kontrolował telefon partnerki, wymagał ciągłych zapewnień o miłości i czuł się niewystarczający. Znajomi uważali go za „skrajnie lękowego”.',
        'Dwa lata po rozstaniu Wojtek związał się z Natalią — osobą spokojną, przewidywalną w komunikacji, która otwarcie mówiła o swoich uczuciach i dotrzymywała słowa bez gier psychologicznych. Co zaskakujące: w relacji z Natalią Wojtek nigdy nie sprawdził telefonu, nie wszczął sceny zazdrości i bez trudu zgadzał się na jej samotne wyjazdy.',
        'Czy Wojtek „zmienił osobowość”? Nie. Zmieniło się POLE RELACYJNE. Wcześniejsza partnerka stosowała technikę gorąco-zimno, nagradzając go uwagą i nagle znikając, co nieustannie destabilizowało jego układ nerwowy. Natalia zaoferowała bezpieczną bazę, w której lękowe strategie przestały być potrzebne do przetrwania.'
      ]
    },

    // 34.16
    {
      id: 'sec-34-16',
      pageNumber: 2228,
      sectionNumber: '34.16',
      title: 'Poszukiwanie potwierdzenia: Testowanie partnera i pułapki protestacyjne',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Kiedy osoba o wzorcu lękowym odczuwa zagrożenie więzi, rzadko mówi wprost: „Boję się, że mnie opuścisz, przytul mnie”. Taki komunikat wydaje się jej zbyt ryzykowny — odsłania bezbronność.',
        'Zamiast tego uruchamia tzw. ZACHOWANIA PROTESTACYJNE (Protest Behavior): dąsa się, wykonuje prowokacyjne telefony, udaje obojętność, wzbudza zazdrość lub urządza awantury o drobiazgi. Celem zachowania protestacyjnego jest zmuszenie partnera do reakcji i udowodnienia, że nadal mu zależy.',
        'Tragedia tego mechanizmu polega na tym, że zachowanie protestacyjne niemal zawsze odpycha drugą stronę, generując dokładnie to odrzucenie, przed którym miało chronić.'
      ]
    },

    // 34.17
    {
      id: 'sec-34-17',
      pageNumber: 2240,
      sectionNumber: '34.17',
      title: 'Wycofanie jako strategia: Kiedy dystans staje się jedynym schronieniem',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Zrozumienie strategii unikającej wymaga porzucenia moralizowania. Osoba oddalająca się nie robi tego ze złośliwości. Dystans jest dla niej tym samym, czym dla osoby lękowej jest pogoń: jedynym znanym sposobem na uniknięcie zranienia.',
        'W dzieciństwie osoby unikające często doświadczyły, że ich łzy i prośby o wsparcie spotykały się z odrzuceniem, kpiną lub zniecierpliwieniem rodzica. Ich układ nerwowy nauczył się: „Gdy okazujesz potrzebę — cierpisz. Bezpieczeństwo jest tylko wtedy, gdy polegasz wyłącznie na sobie”.',
        'Gdy w dorosłym związku pojawia się silna presja emocjonalna, mózg unikający krzyczy: „Alarm! Tracisz kontrolę, znowu zostaniesz zraniony! Uciekaj za mury!”. Dystans jest pancerzem, pod którym kryje się głęboko stłumiony ból.'
      ]
    },

    // 34.18
    {
      id: 'sec-34-18',
      pageNumber: 2252,
      sectionNumber: '34.18',
      title: 'Pętla niepewności: Jak przerwać spiralę i zmienić jeden parametr relacji',
      category: 'cwiczenia',
      readingTimeMinutes: 24,
      quote: {
        text: 'Strategie wtórne przywiązania — hiperaktywacja u osób lękowych i deaktywacja u osób unikających — nie są patologią, lecz desperackimi próbami samoregulacji. Aby przerwać ich destrukcyjną dynamikę, jedna ze stron musi zaryzykować zmianę własnego zachowania bez czekania, aż partner zmieni się pierwszy.',
        author: 'Prof. Mario Mikulincer & Prof. Phillip R. Shaver',
        source: 'Interdisciplinary Center Herzliya & UC Davis, „Attachment in Adulthood: Structure, Dynamics, and Change”, Guilford Press, 2016'
      },
      paragraphs: [
        'Czy skazani jesteśmy na wieczne powtarzanie tych samych destrukcyjnych pętli? Zdecydowanie nie. Pętla relacyjna jest z punktu widzenia cybernetyki systemem sprzężeń zwrotnych. Oznacza to, że ZMIANA JEDNEGO ELEMENTU (Single-Parameter Shift) po którejkolwiek stronie natychmiast destabilizuje cały patologiczny wzorzec i wymusza rekonfigurację całego układu.',
        'Jeśli osoba goniąca powstrzyma automatyczny impuls nacisku i wdroży samoukojenie (Self-Soothing), osoba uciekająca przestaje rejestrować sygnał zagrożenia i bardzo często sama, nieprzymuszona, robi krok w stronę kontaktu. Z kolei jeśli osoba wycofująca się przed wyjściem do pokoju wypowie proste zdanie ugruntowujące: „Kocham cię, bardzo cię cenię, ale mój mózg jest przebodźcowany; potrzebuję 30 minut ciszy i dokładnie o 18:30 wrócę do ciebie na herbatę”, układ limbiczny osoby lękowej nie wpada w panikę separacyjną.',
        'Poniższy interaktywny moduł symulacyjny pozwala przetestować laboratoryjnie wpływ zmiany pojedynczego parametru behawioralnego na dynamikę związku.'
      ],
      subsections: [
        {
          id: 'sub-34-18-1',
          title: 'Analiza słów prof. Mario Mikulincera i prof. Phillipa Shavera: Rozbrojenie Wtórnych Strategii Przywiązania',
          content: [
            'Profesorowie Mikulincer i Shaver w swoich monumentalnych badaniach nad dorosłym przywiązaniem wykazali, że zmiana w relacji nie wymaga jednoczesnego oświecenia obojga partnerów. Gdy jedna osoba świadomie wygasza swoją strategię wtórną (np. osoba lękowa przestaje bombardować wiadomościami, a osoba unikająca przestaje trzaskać drzwiami), pętla traci swoje paliwo energetyczne.',
            'Kluczem jest zrozumienie, że nie czekamy na idealną postawę drugiej strony. Zmiana własnego parametru komunikacyjnego to akt autonomicznego przywództwa relacyjnego. Kiedy zmieniasz swój krok w tańcu, partner po prostu nie może kontynuować starego układu choreograficznego bez potknięcia się — musi dostosować swój krok do nowej rzeczywistości.'
          ],
          highlightBox: {
            title: 'Zasada 1% Zmiany Parametru',
            content: 'Nie próbuj rozwiązywać wszystkich problemów naraz w środku awantury. Zmień jeden mikroskopijny parametr: ton głosu, podanie dokładnej godziny powrotu lub wypicie szklanki wody przed odpowiedzią na zarzut. Zmiana jednego parametru wyhamowuje kaskadę adrenergiczną.',
            type: 'exercise'
          }
        }
      ],
      interactiveWindowRef: {
        id: 'iw-34-18-zmien-element',
        type: 'what_if',
        title: 'Co zmieniłoby sytuację? — Przełamywanie pętli',
        subtitle: 'Wpływ pojedynczej zmiany behawioralnej na cały system relacyjny',
        context: 'Marek chce 30 minut samotności. Zwykle zamyka się bez słowa, co prowokuje wybuch Anny.',
        whatIfOptions: {
          defaultScenario: 'Marek bez słowa zakłada słuchawki i zatrzaskuje drzwi pokoju.',
          options: [
            {
              id: 'opt-1',
              changeLabel: 'Marek podaje ramy czasowe i intencję (Protokół Bezpiecznego Oddechu)',
              resultingInterpretation: 'Anna myśli: „On nie odrzuca mnie, po prostu jest zmęczony i wróci za 30 minut”.',
              resultingBehavior: 'Anna spokojnie pije herbatę i czeka bez pukania.',
              psychologicalImpact: 'Zaspokojona zostaje potrzeba przewidywalności u Anny i potrzeba autonomii u Marka.'
            },
            {
              id: 'opt-2',
              changeLabel: 'Anna zamiast pytać „Czy coś jest nie tak?”, mówi: „Cieszę się, że jesteś. Odpocznij sobie”',
              resultingInterpretation: 'Marek myśli: „W tym domu nikt na mnie nie poluje, moje granice są szanowane”.',
              resultingBehavior: 'Marek po 15 minutach sam wychodzi z pokoju i przytula Annę.',
              psychologicalImpact: 'Zmniejszenie presji natychmiast wygasza potrzebę obronnej ucieczki.'
            },
            {
              id: 'opt-3',
              changeLabel: 'Wprowadzenie ustalonego wcześniej gestu-hasła (np. żółta karteczka „Ładuję baterie”)',
              resultingInterpretation: 'Oboje odczytują sytuację przez pryzmat humoru i wspólnego kontraktu, a nie odrzucenia.',
              resultingBehavior: 'Brak jakichkolwiek oskarżeń, obopólny szacunek dla rytmu biologicznego.',
              psychologicalImpact: 'Rozbrojenie lęku poprzez sformalizowaną procedurę relacyjną.'
            }
          ]
        },
        takeaway: 'Nie musisz zmieniać partnera. Wystarczy, że zmienisz jedną własną reakcję, by zmusić cały system do przeorganizowania.'
      }
    },

    // 34.19
    {
      id: 'sec-34-19',
      pageNumber: 2268,
      sectionNumber: '34.19',
      title: 'Wielka historia: „Dwie interpretacje jednej relacji” — Ta sama scena, dwa światy',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Przeanalizujmy wieczór z życia Ewy i Pawła. Są razem od pięciu lat. Na pozór stabilne małżeństwo. Dziś jest ich rocznica. Paweł wraca z pracy o 19:30 z bukietem kwiatów. Ewa siedzi przy stole z przygotowaną kolacją.',
        'W ciągu następnych dwóch godzin nie padło ani jedno wulgarne słowo, nie doszło do jawnej kłótni. Mimo to wieczór zakończył się lodowatym milczeniem w sypialni i poczuciem całkowitego osamotnienia obojga.',
        'Jak to możliwe? Zobaczmy tę samą scenę oczami Ewy i oczami Pawła w poniższym module dwóch perspektyw.'
      ],
      interactiveWindowRef: {
        id: 'iw-34-19-dwa-spojrzenia',
        type: 'dual_perspectives',
        title: 'Dwa Spojrzenia: Rocznicowa Kolacja',
        subtitle: 'Ta sama sytuacja z dwóch odmiennych modeli wewnętrznych',
        context: 'Paweł spóźnił się 30 minut, przyniósł kwiaty i jest cichy. Ewa zjadła połowę kolacji sama i ma łzy w oczach.',
        dualPerspective: {
          situation: 'Rocznicowy wieczór po ciężkim dniu pracy obu stron.',
          personA: {
            name: 'Ewa',
            quote: 'On znowu potraktował tę rocznicę jak przykry obowiązek z checklisty.',
            whatTheyKnow: 'Przygotowywała kolację przez 3 godziny, Paweł spóźnił się pół godziny, kwiaty kupił na stacji benzynowej.',
            whatTheyMiss: 'Że Paweł stoczył heroiczną walkę z szefem, by w ogóle wyjść przed 19:00, a kwiaty kupił w panice z obawy przed spóźnieniem.',
            interpretation: '„Jestem dla niego rutyną, wolałby być w biurze niż ze mną”.',
            coreNeed: 'Poczucie bycia wyjątkową, wybraną i autentycznie upragnioną.',
            fear: 'Stopniowe wygasanie miłości i bycie uwięzioną w pustym związku.',
            action: 'Chłodne podziękowanie za kwiaty, milczenie podczas jedzenia, unikanie wzroku.'
          },
          personB: {
            name: 'Paweł',
            quote: 'Cokolwiek zrobię, dla niej to i tak za mało.',
            whatTheyKnow: 'Zrezygnował z premii za nadgodziny, pędził przez korki, wydał ostatnie pieniądze na kwiaty, czuje ból głowy.',
            whatTheyMiss: 'Że Ewa od tygodnia czuła narastający chłód i kolacja była dla niej testem na to, czy nadal są blisko.',
            interpretation: '„Znowu skwaszona mina. Jestem dla niej tylko bankomatem i rozczarowaniem”.',
            coreNeed: 'Docenienie wysiłku, akceptacja i ciepłe schronienie po morderczym dniu.',
            fear: 'Poczucie wiecznej porażki jako mąż i bycie niewystarczającym.',
            action: 'Wycofanie się w przeglądanie wiadomości w telefonie, obojętny ton głosu.'
          },
          synthesis: 'Oboje pragnęli miłości i bliskości. Jednak obrona przed poczuciem bycia zranionym (u Ewy) i bycia niewystarczającym (u Pawła) doprowadziła do wzajemnego zamrożenia kontaktu.'
        },
        takeaway: 'Największe tragedie relacyjne nie wynikają z braku miłości, lecz z niewidzialności wzajemnego cierpienia pod maskami obronnymi.'
      }
    },

    // 34.20
    {
      id: 'sec-34-20',
      pageNumber: 2285,
      sectionNumber: '34.20',
      title: 'Człowiek pod mikroskopem: Szesnastostopniowa wiwisekcja zachowania relacyjnego',
      category: 'teoria',
      readingTimeMinutes: 28,
      paragraphs: [
        'Zastosujmy teraz pełne narzędzie analityczne książki — CZŁOWIEKA POD MIKROSKOPEM. Przyjrzymy się Pawłowi w momencie, gdy przekracza próg mieszkania i widzi twarz Ewy.',
        'Rozłożymy jego proces psychiczny na 15 kolejnych poziomów: od surowego faktu zmysłowego aż po uruchomienie kolejnej rundy interakcji.'
      ],
      interactiveWindowRef: {
        id: 'iw-34-20-mikroskop-pawel',
        type: 'microscope',
        title: 'Człowiek pod mikroskopem: Paweł w progu mieszkania',
        subtitle: 'Szczegółowa wiwisekcja łańcucha decyzyjno-afektywnego',
        context: 'Paweł wchodzi do domu o 19:30 z kwiatami. Ewa nie wstaje z krzesła, patrzy w blat stołu.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: 'SYTUACJA',
            question: 'Co dokładnie się wydarzyło?',
            content: 'Paweł otwiera drzwi kluczem, mówi: „Cześć kochanie”. Ewa odpowiada cichym „Cześć” bez podnoszenia wzroku.',
            subtext: 'Rejestracja czystego bodźca bez interpretacji.'
          },
          {
            stepNumber: 2,
            label: 'CO CZŁOWIEK WIE?',
            question: 'Jakie informacje rzeczywiście posiada?',
            content: 'Wie, że spóźnił się 30 minut w stosunku do wstępnej zapowiedzi i że Ewa siedzi przy nakrytym stole.',
            subtext: 'Fakty obiektywne w pamięci operacyjnej.'
          },
          {
            stepNumber: 3,
            label: 'CZEGO NIE WIE?',
            question: 'Jakich kluczowych informacji mu brakuje?',
            content: 'Nie wie, że Ewa płakała 20 minut temu i że jej milczenie jest próbą powstrzymania kolejnego ataku płaczu.',
            subtext: 'Brak wglądu w stan mentalny partnerki.'
          },
          {
            stepNumber: 4,
            label: 'CO ZAUWAŻA?',
            question: 'Na czym skupia uwagę reflektor świadomości?',
            content: 'Skupia uwagę na opuszczonych kącikach ust Ewy i braku uśmiechu na widok przyniesionych kwiatów.',
            subtext: 'Selektywna uwaga na sygnałach odrzucenia/krytyki.'
          },
          {
            stepNumber: 5,
            label: 'CO INTERPRETUJE?',
            question: 'Jakie znaczenie nadaje sytuacji?',
            content: '„Znowu foch. Próbowałem, spieszyłem się, a ona i tak jest niezadowolona. Nigdy jej nie dogodzę”.',
            subtext: 'Atrybucja wrogości i niewdzięczności.'
          },
          {
            stepNumber: 6,
            label: 'CO CZUJE?',
            question: 'Jakie emocje i pobudzenie somatyczne się pojawiają?',
            content: 'Nagłe ukłucie złości, po którym następuje ciężki zjazd energetyczny w klatce piersiowej, napięcie mięśni karku.',
            subtext: 'Aktywacja układu współczulnego przechodząca w zamrożenie.'
          },
          {
            stepNumber: 7,
            label: 'CZEGO POTRZEBUJE?',
            question: 'Jaka głęboka potrzeba zostaje zablokowana?',
            content: 'Potrzeba uznania, bycia przyjętym i poczucia, że jego dom jest bezpieczną przystanią po walce w pracy.',
            subtext: 'Fundamentalna potrzeba akceptacji.'
          },
          {
            stepNumber: 8,
            label: 'CZEGO SIĘ OBAWIA?',
            question: 'Jakie zagrożenie przewiduje umysł?',
            content: 'Obawia się kolejnej wielogodzinnej awantury, wypominania błędów z przeszłości i bezsennej nocy.',
            subtext: 'Antycypacja cierpienia relacyjnego.'
          },
          {
            stepNumber: 9,
            label: 'CZEGO CHCE?',
            question: 'Jaki doraźny cel próbuje osiągnąć?',
            content: 'Chce zminimalizować ryzyko wybuchu i uchronić swoje resztki energii psychicznej.',
            subtext: 'Cel obronny (Damage Control).'
          },
          {
            stepNumber: 10,
            label: 'JAKIE MA ALTERNATYWY?',
            question: 'Jakie inne reakcje byłyby teoretycznie możliwe?',
            content: 'Mógłby podejść, objąć Ewę i zapytać: „Kochanie, widzę, że jesteś smutna. Przepraszam za spóźnienie, bardzo mi na tobie zależy”.',
            subtext: 'Ścieżka dojrzałej deeskalacji (wymaga jednak wielkich zasobów).'
          },
          {
            stepNumber: 11,
            label: 'CO WYBIERA?',
            question: 'Jaka decyzja zostaje podjęta?',
            content: 'Wybiera chłodny dystans i formalne odłożenie kwiatów do wazonu.',
            subtext: 'Wybór strategii unikającej.'
          },
          {
            stepNumber: 12,
            label: 'CO ROBI?',
            question: 'Jak wygląda obserwowalne zachowanie?',
            content: 'Kładzie bukiet na szafce, mówi suchym głosem: „Kwiaty są na szafce. Idę umyć ręce” i wychodzi do łazienki.',
            subtext: 'Behawioralny sygnał chłodu.'
          },
          {
            stepNumber: 13,
            label: 'JAK REAGUJĄ INNI?',
            question: 'Jaka jest odpowiedź drugiej strony?',
            content: 'Ewa zaciska wargi, wstaje od stołu, chowa talerze do lodówki i mówi: „Widać, jak bardzo ci zależy”.',
            subtext: 'Wzmocnienie poczucia odrzucenia u partnerki.'
          },
          {
            stepNumber: 14,
            label: 'CO TA REAKCJA POWODUJE?',
            question: 'Jaki jest bezpośredni skutek u bohatera?',
            content: 'Paweł myśli: „A nie mówiłem? Znowu miała pretensje, dobrze że się nie zbliżałem”.',
            subtext: 'Błędne koło samospełniającego się proroctwa.'
          },
          {
            stepNumber: 15,
            label: 'JAK POWSTAJE KOLEJNA RUNDA?',
            question: 'Jak zamyka się pętla na przyszłość?',
            content: 'Podczas kolejnej rocznicy Paweł będzie jeszcze bardziej spięty, a Ewa jeszcze bardziej nieufna.',
            subtext: 'Utrwalenie zniekształconego modelu drugiego człowieka.'
          }
        ],
        takeaway: 'Gdy nie rozumiesz własnego łańcucha reakcji, automatyzm obronny zniszczy każdą próbę porozumienia.'
      }
    },

    // 34.21
    {
      id: 'sec-34-21',
      pageNumber: 2305,
      sectionNumber: '34.21',
      title: 'Badania nad przywiązaniem dorosłych: ECR, AAI i rzetelność pomiaru',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W naukowej psychologii przywiązania stosuje się dwie zupełnie różne metodologie badawcze, które dają czasami rozbieżne wyniki:',
        '1. Wywiad Przywiązania Dorosłych (Adult Attachment Interview — AAI opracowany przez Mary Main): Półtoralitrowy wywiad kliniczny badający nie tyle treść wspomnień z dzieciństwa, ile SPOSÓB OPOWIADANIA o nich (spójność narracji wg maksym Grice’a). Osoba bezpieczna potrafi mówić o trudnym dzieciństwie w sposób spójny i wyważony. Osoba unikająca (odrzucająca) mówi ogólnikowo: „Miałam idealnych rodziców”, ale nie potrafi podać ani jednego konkretnego przykładu.',
        '2. Kwestionariusze samoopisowe (np. ECR — Experiences in Close Relationships Brennana, Clarka i Shavera): Mierzą świadome deklaracje dotyczące lęku i unikania w relacjach romantycznych.',
        'NAUKOWE OSTRZEŻENIE: Badania metaanalityczne (Roisman i in.) pokazują umiarkowaną korelację między AAI a kwestionariuszami (r ≈ 0.15–0.25). Oznacza to, że nasza świadoma opinia o tym, jak funkcjonujemy w miłości, często różni się od ukrytej organizacji naszej pamięci autobiograficznej!'
      ]
    },

    // 34.22
    {
      id: 'sec-34-22',
      pageNumber: 2318,
      sectionNumber: '34.22',
      title: 'Przywiązanie a regulacja emocji: Wsparcie społeczne i współregulacja somatyczna',
      category: 'neuronauka',
      readingTimeMinutes: 24,
      paragraphs: [
        'Jednym z najważniejszych odkryć współczesnej psychobiologii jest fakt, że ludzki układ nerwowy nie został zaprojektowany do samoregulacji w całkowitej izolacji.',
        'Pojęcie WSPÓŁREGULACJI (Co-regulation) opisuje proces, w którym układ nerwowy jednej osoby bezpośrednio wpływa na układ nerwowy drugiej poprzez:',
        '- Ton głosu (prozodia aktywująca nerw błędny brzuszny wg teorii poliwagalnej Porgesa),\n- Mikroruchy mięśni mimicznych twarzy,\n- Oddech i kontakt wzrokowy.',
        'Gdy bezpieczny partner zachowuje spokój w obliczu naszego wzburzenia, jego stabilność działa jak somatyczny falochron. Z kolei gdy w relacji brakuje bezpieczeństwa, każda interakcja staje się źródłem przestymulowania, prowadząc do przewlekłego wyczerpania nadnerczy i zaburzeń snu.'
      ]
    },

    // 34.23
    {
      id: 'sec-34-23',
      pageNumber: 2330,
      sectionNumber: '34.23',
      title: 'Kontrprzypadek: Silna potrzeba bliskości bez zachowań kontrolujących',
      category: 'teoria',
      readingTimeMinutes: 20,
      paragraphs: [
        'Wielu autorów poradników popełnia błąd, stawiając znak równości między „silną potrzebą bliskości” a „toksyczną zależnością i kontrolą”. To rażące uproszczenie.',
        'Przyjrzyjmy się kontrprzypadkowi: Marta kocha swojego męża niezwykle głęboko, uwielbia spędzać z nim czas i otwarcie mówi: „Tęsknię za tobą, gdy wyjeżdżasz”. Kiedy jednak mąż mówi, że w sobotę idzie z kolegami w góry na cały dzień, Marta mówi: „Super, odpocznij sobie, ja nadrobię zaległości z książkami”.',
        'Marta ma BARDZO WYSOKĄ POTRZEBĘ BLISKOŚCI, ale jej styl przywiązania jest BEZPIECZNY. Jej potrzeba nie wynika z lęku, że bez męża przestanie istnieć, lecz z autentycznej radości z kontaktu. Gdy męża nie ma — jej wewnętrzne poczucie wartości pozostaje nienaruszone.',
        'Potrzeba bliskości nie jest chorobą. Patologią staje się dopiero wtedy, gdy zostaje zaprzęgnięta w służbę uciszania lęku egzystencjalnego poprzez kontrolowanie drugiego człowieka.'
      ],
      interactiveWindowRef: {
        id: 'iw-34-23-kontrprzypadek',
        type: 'counter_case',
        title: 'Kontrprzypadek: Bezpieczna Bliskość vs Lękowa Zależność',
        subtitle: 'Przełamywanie powierzchownych ocen potrzeb relacyjnych',
        context: 'Jak odróżnić zdrową, wysoką potrzebę bliskości od lękowego kontrolowania i osaczania partnera.',
        counterCase: {
          standardTheory: 'Ktoś, kto chce spędzać z partnerem każdą wolną chwilę i głośno deklaruje tęsknotę, cierpi na lękowe przywiązanie i brak dojrzałości emocjonalnej.',
          counterExample: 'Marta kocha intensywną bliskość, ale potrafi uszanować pasję męża (całodniowy wyjazd w góry) i spędzić czas na własnych pasjach z pełnym spokojem w ciele.',
          whyItDefiesRule: 'Marta reprezentuje wysokie pragnienie bliskości zintegrowane z bezpiecznym stylem przywiązania — jej miłość nie jest próbą uciszenia lęku egzystencjalnego.',
          deeperLesson: 'Miarą dojrzałości nie jest udawanie samowystarczalności, lecz zdolność do cieszenia się bliskością bez przymusu sprawowania kontroli.'
        },
        takeaway: 'Potrzeba bliskości jest zdrowym, biologicznym faktem, a nie patologią.'
      }
    },

    // 34.24
    {
      id: 'sec-34-24',
      pageNumber: 2342,
      sectionNumber: '34.24',
      title: 'Czego nie można wywnioskować z zachowania? Granice interpretacji psychologicznej',
      category: 'teoria',
      readingTimeMinutes: 22,
      paragraphs: [
        'W dobie wszechobecnej psychoedukacji ludzie nabrali niebezpiecznego nawyku „prześwietlania” partnerów: „Odpisał po 40 minutach — styl unikający!”, „Zapytała z kim byłem — lękowa!”.',
        'Należy z całą mocą podkreślić: Z SAMEGO ZEWNĘTRZNEGO ZACHOWANIA NIE MOŻNA W 100% WYWNIOSKOWAĆ O INTENCJACH ANI STRUKTURZE PSYCHICZNEJ DRUGIEGO CZŁOWIEKA.',
        'Człowiek może nie odpisywać, bo:',
        'a) Jest unikający,\nb) Ma zawał serca,\nc) Rozładował mu się telefon,\nd) Jest wściekły,\ne) Skupia się na operacji chirurgicznej,\nf) Zgubił okulary.',
        'Dopóki nie zapytasz i nie zweryfikujesz faktów, każda Twoja diagnoza jest tylko projekcją Twojego własnego mózgu. Pokora poznawcza to najwspanialszy prezent, jaki możesz podarować swojemu związkowi.'
      ],
      interactiveWindowRef: {
        id: 'iw-34-24-dekoder',
        type: 'what_we_know',
        title: 'Fakt czy Interpretacja? — Skanowanie zachowań komunikacyjnych',
        subtitle: 'Jak odróżnić nagie fakty od nadinterpretacji pop-psychologicznych',
        context: 'Analiza zachowań partnera na komunikatorach internetowych.',
        whatWeKnow: {
          items: [
            {
              id: 'iw-34-24-item-1',
              statement: 'Partner odczytał wiadomość o 14:00 i do 15:30 nie przysłał odpowiedzi.',
              category: 'fakt',
              explanation: 'To czysty fakt behawioralno-techniczny zarejestrowany na urządzeniu.'
            },
            {
              id: 'iw-34-24-item-2',
              statement: 'Partner stosuje strategię unikającą i celowo ignoruje mój komunikat, by mnie ukarać.',
              category: 'interpretacja',
              explanation: 'To jest zaawansowana nadinterpretacja przypisująca wrogie intencje i diagnozująca styl bez żadnych dowodów.'
            },
            {
              id: 'iw-34-24-item-3',
              statement: 'Partner może być pochłonięty pracą, spotkaniem lub po prostu odłożył telefon, by dokończyć zadanie.',
              category: 'hipoteza',
              explanation: 'Zdrowa, neutralna hipoteza alternatywna, którą należy zweryfikować przed eskalacją napięcia.'
            },
            {
              id: 'iw-34-24-item-4',
              statement: 'Odpisanie na wiadomość zajmuje tylko 5 sekund, więc brak odpowiedzi zawsze oznacza brak szacunku.',
              category: 'interpretacja',
              explanation: 'To uogólnienie poznawcze wynikające z narzucania własnego tempa przetwarzania bodźców jako jedynej normy relacyjnej.'
            }
          ]
        },
        takeaway: 'Zawsze oddzielaj nagie fakty techniczne od pop-psychologicznych wyroków, które wydaje Twój umysł.'
      }
    },

    // 34.25
    {
      id: 'sec-34-25',
      pageNumber: 2355,
      sectionNumber: '34.25',
      title: 'SYNTEZA: Wielka architektura więzi — Od lęku do dojrzałej współzależności',
      category: 'podsumowanie',
      readingTimeMinutes: 24,
      paragraphs: [
        'Zakończmy ten rozdział wielką syntezą. Człowiek dojrzały relacyjnie nie jest ani bezradnym niewolnikiem swoich dziecięcych zranień, ani chłodnym samotnikiem udającym, że nikogo nie potrzebuje.',
        'Prawdziwym celem rozwoju psychicznego jest DOJRZAŁA WSPÓŁZALEŻNOŚĆ (Interdependence). Jest to stan, w którym potrafię powiedzieć:',
        '«Potrzebuję cię i nie wstydzę się tego. Twoja obecność daje mi radość i siłę. Ale jeśli z jakiegoś powodu odejdziesz — będę cierpiał, będę płakał, lecz nie rozpadnę się na kawałki. Przetrwam, ponieważ moje poczucie istnienia zakorzenione jest we mnie samym».',
        'Z tego fundamentu bezpieczeństwa i zaufania wypływa zdolność do radzenia sobie z kolejnym nieuniknionym zjawiskiem życia między ludźmi: KONFLIKTEM. Temu, dlaczego nawet najbardziej kochający się ludzie zderzają się ze sobą i jak mały problem potrafi urosnąć do wojny o tożsamość, poświęcimy kolejny, 35. Rozdział naszej książki.'
      ]
    }
  ]
};
