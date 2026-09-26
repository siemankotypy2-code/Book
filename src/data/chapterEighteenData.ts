import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterEighteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii poznawczej przekonanie (belief) różni się od obiektywnego faktu tym, że:',
    topic: 'Natura Przekonań',
    sectionRef: 'Sekcja 18.2',
    options: [
      { label: 'A', text: 'Przekonanie jest subiektywną reprezentacją umysłową traktowaną jako prawda, podczas gdy fakt to zweryfikowany empirycznie stan rzeczywistości.', isCorrect: true },
      { label: 'B', text: 'Przekonanie dotyczy tylko pogody, a fakt dotyczy matematyki.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy, każde przekonanie staje się faktem po upływie 24 godzin.', isCorrect: false },
      { label: 'D', text: 'Przekonania są zapisane w DNA, a fakty w encyklopedii.', isCorrect: false }
    ],
    explanation: 'Przekonanie to struktura poznawcza, w którą umysł wierzy i według której filtruje bodźce. Fakt istnieje niezależnie od tego, czy ktoś w niego wierzy.',
    keyTakeaway: 'To, że mocno w coś wierzysz, nie zmienia tego w obiektywny fakt.'
  },
  {
    id: 2,
    question: 'Na czym polega efekt Backfire (Efekt Odbicia) opisywany w Sekcji 18.6?',
    topic: 'Opór Poznawczy',
    sectionRef: 'Sekcja 18.6',
    options: [
      { label: 'A', text: 'Przedstawienie twardych dowodów sprzecznych z głębokim przekonaniem człowieka sprawia, że zaczyna on jeszcze silniej bronić swojego pierwotnego poglądu.', isCorrect: true },
      { label: 'B', text: 'Natychmiastowa zmiana zdania pod wpływem każdego wykresu w gazecie.', isCorrect: false },
      { label: 'C', text: 'Utrata pamięci krótkotrwałej po zjedzeniu obfitego posiłku.', isCorrect: false },
      { label: 'D', text: 'Zdolność do szybkiego liczenia w pamięci pod wpływem stresu.', isCorrect: false }
    ],
    explanation: 'Gdy atakowane jest rdzenne przekonanie, mózg odczuwa to jako zagrożenie tożsamościowe. Uruchamia wtedy mechanizmy obronne, wyszukując kontrargumenty i utwierdzając się w błędzie.',
    keyTakeaway: 'Fakty przedstawione agresywnie często usztywniają opór rozmówcy zamiast go przekonać.'
  },
  {
    id: 3,
    question: 'Czym jest epistemiczna pokora (Intellectual Humility) przedstawiona w Sekcji 18.13?',
    topic: 'Epistemiczna Pokora',
    sectionRef: 'Sekcja 18.13',
    options: [
      { label: 'A', text: 'Przekonanie, że własna wiedza jest niepełna i podatna na błędy, połączone z gotowością do aktualizowania poglądów w świetle nowych dowodów.', isCorrect: true },
      { label: 'B', text: 'Przepraszanie wszystkich ludzi za to, że ma się własne zdanie.', isCorrect: false },
      { label: 'C', text: 'Brak jakichkolwiek poglądów i odmowa podejmowania decyzji.', isCorrect: false },
      { label: 'D', text: 'Udawanie głupszego niż się jest w celu przypodobania się przełożonemu.', isCorrect: false }
    ],
    explanation: 'Epistemiczna pokora to nie brak pewności siebie, lecz naukowy stosunek do własnych hipotez umysłowych – traktowanie przekonań jako roboczych modeli, a nie nienaruszalnej świętości.',
    keyTakeaway: 'Epistemiczna pokora to odwaga do powiedzenia: „Myliłem się, oto nowe dane”.'
  },
  {
    id: 4,
    question: 'W koncepcji aktualizowania przekonań opartej na wnioskowaniu Bayesowskim (Bayesian Belief Updating), nowa informacja powinna:',
    topic: 'Aktualizacja Przekonań',
    sectionRef: 'Sekcja 18.10',
    options: [
      { label: 'A', text: 'Modyfikować prawdopodobieństwo słuszności hipotezy w zależności od wiarygodności i siły nowych dowodów.', isCorrect: true },
      { label: 'B', text: 'Być całkowicie ignorowana, jeśli nie zgadza się z intuicją.', isCorrect: false },
      { label: 'C', text: 'Prowadzić do natychmiastowego skasowania całej dotychczasowej wiedzy.', isCorrect: false },
      { label: 'D', text: 'Być oceniana wyłącznie na podstawie tego, czy jest miła dla ucha.', isCorrect: false }
    ],
    explanation: 'Myślenie bayesowskie nakazuje aktualizować stopień przekonania (prawdopodobieństwo a posteriori) na podstawie wartości dowodowej nowych faktów, zamiast stosować zero-jedynkową wiarę.',
    keyTakeaway: 'Traktuj swoje przekonania jak hipotezy o zmiennym stopniu prawdopodobieństwa.'
  },
  {
    id: 5,
    question: 'Błąd potwierdzenia (Confirmation Bias) w kontekście wyszukiwania informacji w internecie objawia się tym, że:',
    topic: 'Confirmation Bias',
    sectionRef: 'Sekcja 18.5',
    options: [
      { label: 'A', text: 'Wpisujemy w wyszukiwarkę pytania sformułowane tak, by znaleźć tylko artykuły potwierdzające naszą tezę i ignorujemy źródła przeciwne.', isCorrect: true },
      { label: 'B', text: 'Czytamy wyłącznie encyklopedię PWN od A do Z.', isCorrect: false },
      { label: 'C', text: 'Kupujemy najdroższy komputer na rynku.', isCorrect: false },
      { label: 'D', text: 'Sprawdzamy pisownię każdego słowa w słowniku ortograficznym.', isCorrect: false }
    ],
    explanation: 'Mózg szuka potwierdzenia, a nie prawdy. Gdy chcemy dowiedzieć się, czy kawa jest zdrowa, wpisujemy „zalety picia kawy”, omijając artykuły o negatywnych skutkach.',
    keyTakeaway: 'Aby poznać prawdę, musisz celowo szukać dowodów na to, że się mylisz.'
  },
  {
    id: 6,
    question: 'Różnica między opinią a hipotezą polega na tym, że:',
    topic: 'Poziomy Pewności',
    sectionRef: 'Sekcja 18.11',
    options: [
      { label: 'A', text: 'Opinia jest subiektywnym sądem wartościującym, a hipoteza jest sprawdzalnym empirycznie przypuszczeniem sformułowanym do weryfikacji.', isCorrect: true },
      { label: 'B', text: 'Opinia jest pisana wierszem, a hipoteza prozą.', isCorrect: false },
      { label: 'C', text: 'Hipoteza zawsze okazuje się fałszywa.', isCorrect: false },
      { label: 'D', text: 'Opinia musi być zatwierdzona przez sąd najwyższy.', isCorrect: false }
    ],
    explanation: 'Opinia wyraża preferencję („Lody truskawkowe są najlepsze”), hipoteza stawia testowalną tezę („Nowy algorytm skróci czas ładowania o 15%”).',
    keyTakeaway: 'Nie myl subiektywnych upodobań ze sprawdzalnymi hipotezami naukowymi.'
  },
  {
    id: 7,
    question: 'Dysonans poznawczy według Leona Festingera powstaje w sytuacji, gdy:',
    topic: 'Dysonans Poznawczy',
    sectionRef: 'Sekcja 18.4',
    options: [
      { label: 'A', text: 'Jednostka doświadcza sprzeczności między dwoma przekonaniami lub między swoim przekonaniem a własnym zachowaniem.', isCorrect: true },
      { label: 'B', text: 'Słucha muzyki klasycznej na bardzo wysokim poziomie głośności.', isCorrect: false },
      { label: 'C', text: 'Zapomni hasła do konta bankowego.', isCorrect: false },
      { label: 'D', text: 'Jest głodna po intensywnym treningu fizycznym.', isCorrect: false }
    ],
    explanation: 'Dysonans wywołuje nieprzyjemne napięcie psychiczne. Aby je zredukować, człowiek częściej zmienia interpretację faktów niż własne wygodne zachowanie.',
    keyTakeaway: 'Łatwiej zmienić przekonanie o szkodliwości palenia niż rzucić papierosy.'
  },
  {
    id: 8,
    question: 'Co charakteryzuje schematy poznawcze (Cognitive Schemas) opisane przez Aarona Becka?',
    topic: 'Schematy Poznawcze',
    sectionRef: 'Sekcja 18.3',
    options: [
      { label: 'A', text: 'Są utrwalonymi matrycami interpretacyjnymi, które automatycznie organizują i nadają sens napływającym informacjom.', isCorrect: true },
      { label: 'B', text: 'Są fizycznymi bliznami na skórze głowy powstałymi w dzieciństwie.', isCorrect: false },
      { label: 'C', text: 'Są programami komputerowymi służącymi do edycji zdjęć.', isCorrect: false },
      { label: 'D', text: 'Są tabelami w programie Excel przeznaczonymi do księgowości.', isCorrect: false }
    ],
    explanation: 'Schematy działają jak okulary o określonym kolorze. Osoba ze schematem zagrożenia w każdym neutralnym spojrzeniu przechodnia zobaczysz wrogość.',
    keyTakeaway: 'Nie widzimy świata takim, jaki jest – widzimy go przez pryzmat naszych schematów.'
  },
  {
    id: 9,
    question: 'Efekt Dunninga-Krugera (Sekcja 18.12) polega na tym, że:',
    topic: 'Efekt Dunninga-Krugera',
    sectionRef: 'Sekcja 18.12',
    options: [
      { label: 'A', text: 'Osoby o niskich kompetencjach w danej dziedzinie drastycznie przeceniają swoją wiedzę, a eksperci mają tendencję do niedoceniania własnej przewagi.', isCorrect: true },
      { label: 'B', text: 'Wszyscy ludzie mają dokładnie taki sam poziom wiedzy w każdej dziedzinie.', isCorrect: false },
      { label: 'C', text: 'Im więcej czytamy książek, tym gorzej pamiętamy własne imię.', isCorrect: false },
      { label: 'D', text: 'Osoby po studiach medycznych nie potrafią stawiać diagnoz.', isCorrect: false }
    ],
    explanation: 'Arogancja często wynika z braku metawiedzy – trzeba mieć pewien poziom wiedzy, by zorientować się, jak wiele się jeszcze nie wie.',
    keyTakeaway: 'Ignorancja częściej zradza pewność siebie niż wiedza.'
  },
  {
    id: 10,
    question: 'Jakie podejście ułatwia bezbolesne aktualizowanie przekonań (Belief Updating)?',
    topic: 'Separacja Przekonań od Tożsamości',
    sectionRef: 'Sekcja 18.9',
    options: [
      { label: 'A', text: 'Oddzielenie przekonań od własnej wartości tożsamościowej i traktowanie ich jako narzędzi roboczych do nawigacji po świecie.', isCorrect: true },
      { label: 'B', text: 'Przysięganie przed sądem, że nigdy nie zmieni się zdania.', isCorrect: false },
      { label: 'C', text: 'Utożsamienie każdego poglądu politycznego ze swoją godnością osobiście.', isCorrect: false },
      { label: 'D', text: 'Niewyrażanie żadnych opinii w obawie przed krytyką.', isCorrect: false }
    ],
    explanation: 'Gdy przekonanie nie jest splecione z Twoją godnością („Jestem mądry tylko wtedy, gdy mam rację”), zmiana zdania po poznaniu faktów jest oznaką dojrzałości, a nie porażki.',
    keyTakeaway: 'Zmień przekonanie bez utraty poczucia własnej wartości.'
  },
  {
    id: 11,
    question: 'Czym są rdzenne przekonania (Core Beliefs)?',
    topic: 'Rdzenne Przekonania',
    sectionRef: 'Sekcja 18.8',
    options: [
      { label: 'A', text: 'Głęboko zakorzenione, absolutne założenia na temat siebie („Jestem niewystarczający”), innych („Ludzie są wrodzy”) i świata („Świat jest niebezpieczny”).', isCorrect: true },
      { label: 'B', text: 'Opinie na temat preferowanego gatunku filmowego.', isCorrect: false },
      { label: 'C', text: 'Wzory na pole powierzchni koła zapamiętane w szkole.', isCorrect: false },
      { label: 'D', text: 'Ceny artykułów spożywczych w lokalnym markecie.', isCorrect: false }
    ],
    explanation: 'Rdzenne przekonania stanowią najgłębszą warstwę psychiki. Kształtują automatyczne myśli i reakcje emocjonalne w codziennych sytuacjach.',
    keyTakeaway: 'Zmiana rdzennego przekonania zmienia cały styl reagowania na życie.'
  },
  {
    id: 12,
    question: 'W jaki sposób bańki informacyjne (Information Bubbles) utrwalają fałszywe przekonania?',
    topic: 'Bańki Informacyjne',
    sectionRef: 'Sekcja 18.7',
    options: [
      { label: 'A', text: 'Algorytmy sieciowe serwują nam treści zgodne z naszymi kliknięciami, odcinając nas od odmiennych perspektyw i stwarzając iluzję powszechnego konsensusu.', isCorrect: true },
      { label: 'B', text: 'Wyłączają prąd w całym mieście na 4 godziny.', isCorrect: false },
      { label: 'C', text: 'Zmuszają nas do czytania zagranicznych gazet w obcych językach.', isCorrect: false },
      { label: 'D', text: 'Kasują wszystkie pliki tekstowe z dysku twardego.', isCorrect: false }
    ],
    explanation: 'Algorytmy optymalizują zaangażowanie, a nie prawdę. Dając nam to, co chcemy usłyszeć, radykalizują nasze przekonania i niszczą przestrzeń dialogu.',
    keyTakeaway: 'Jeśli wszyscy w Twoim otoczeniu się z Tobą zgadzają, jesteś w bańce.'
  }
];

export const caseStudiesChapterEighteen: CaseStudy[] = [
  {
    id: 'studium-18-1-katastrofa-investora',
    title: 'Ślepota inwestora: Jak przekonanie o nieomylności doprowadziło Marka do bankructwa',
    subtitle: 'Confirmation Bias, Sunk Cost Fallacy i pętla zaprzeczenia faktom rynkowym',
    protagonist: 'Marek, 42 lata, przedsiębiorca i inwestor giełdowy',
    context: 'Marek zainwestował 80% swoich oszczędności w akcje spółki technologicznej, będąc głęboko przekonanym o jej przełomowym potencjale. Mimo napływających raportów finansowych wskazujących na fałszowanie danych i spadek przychodów, Marek dokupował akcje, twierdząc, że „rynek jest ślepy i niedowartościowuje genialnego produktu”.',
    story: [
      'Marek spędził trzy miesiące na analizowaniu sprawozdań firmy GreenTech. Sformułował mocne przekonanie: „To nowa Tesla, zarobię 500%”. Kiedy kupił pierwsze akcje, jego tożsamość splotła się z tym sukcesem. Opowiadał o spółce znajomym i na forach internetowych.',
      'Po pół roku pojawił się niezależny raport audytorski ujawniający nieprawidłowości w bilansie spółki. Cena akcji spadła o 30%. Zamiast przeanalizować dane, Marek odczuł wściekłość. Uznał raport za „atak spekulantów grających na spadek”. Zgodnie z mechanizmem Confirmation Bias, zaczął szukać na forach wpisów innych inwestorów, którzy podzielali jego zdanie.',
      'Kiedy spółka ogłosiła opóźnienie w publikacji sprawozdania rocznego, cena akcji spadła o kolejne 40%. Znajomi doradzali mu sprzedaż i uratowanie resztek kapitału. Marek zareagował agresją: „Nie rozumiecie nowoczesnego biznesu! Ja znam tę spółkę od podszewki!”. Zrobił zastaw na domu i dokupił akcje po obniżonej cenie (efekt zatopionych kosztów).',
      'Trzy miesiące później spółka ogłosiła upadłość. Marek stracił cały majątek. Dopiero w obliczu katastrofy moralnej zrozumiał, że nie walczył z rynkiem – walczył o obronę własnego ego przed przyznaniem się do błędu.'
    ],
    dialogue: [
      { speaker: 'Analityk rynku', text: 'Marek, raport pokazuje brak realnych przychodów z licencji.', subtext: 'Twardy dowód empiryczny sprzeczny z hipotezą Marka.' },
      { speaker: 'Marek', text: 'To opłacony paszkwil! Rynek po prostu nie dorósł do ich wizji.', subtext: 'Uruchomienie mechanizmu Backfire Effect i teorie spiskowe broniące przekonania.' }
    ],
    decisionTaken: 'Dokupywanie akcji upadającej spółki i zignorowanie twardych audytów finansowych w celu obrony własnego przekonania.',
    whatProtagonistSaw: 'Przyszły olbrzymi zysk, opłaconych wrogów spółki i własną wyjątkowość jako dostrzegającego szansę przed innymi.',
    whatWasMissed: 'Oficjalne bilanse, brak płynności finansowej spółki i fakt, że własne emocje przysłoniły chłodną kalkulację ryzyka.',
    psychologicalAnalysis: {
      coreMechanism: 'Dysonans poznawczy zniwelowany przez racjonalizację oraz potężny błąd potwierdzenia (Confirmation Bias).',
      cognitiveBiases: [
        { name: 'Sunk Cost Fallacy', description: 'Inwestowanie kolejnych zasobów w przegraną sprawę tylko dlatego, że włożono w nią już bardzo dużo.', impact: 'Zastawienie domu na zakupy upadających akcji.' },
        { name: 'Myside Bias', description: 'Selektywne ocenianie dowodów w sposób sprzyjający własnej tezie.', impact: 'Ignorowanie audytów przy jednoczesnym wierzeniu bezimiennym wpisom na forach.' }
      ],
      defenseMechanisms: [
        { name: 'Zaprzeczanie (Denial)', explanation: 'Refuzja przyjęcia do wiadomości faktu upadłości firmy.' }
      ],
      emotionalDynamic: 'Lęk przed przyznaniem się do błędu zastąpiony przez manijną pewność siebie i agresję obronną.'
    },
    decisionProcessAnalysis: {
      trigger: 'Spadek ceny akcji o 30% po raporcie audytorskim.',
      attentionFocus: 'Wpisy na forach internetowych popierające spółkę.',
      interpretation: '„Atak spekulantów; mam rację, a reszta świata się myli”.',
      emotion: 'Złość, dysonans poznawczy, desperacka pycha.',
      impulse: 'Udowodnić wszystkim swoją rację za wszelką cenę.',
      action: 'Zastawienie domu i dokupienie akcji.',
      consequence: 'Całkowite bankructwo i utrata majątku życiowego.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Wyhamowana funkcja kontroli i weryfikacji faktów', activationState: 'Niska aktywacja' },
        { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Przetwarzanie wartości nagrody i obrona ego', activationState: 'Wysoka aktywacja' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Oczekiwanie na gigantyczną nagrodę blokujące krytyczne myślenie.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Negatywna wiadomość wywołuje mikropaniczną reakcję w ciele migdałowatym.' },
        { timeMs: '200 ms+', process: 'Kora mowa tworzy natychmiastową narrację o „spisku spekulantów”.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Auto-manipulacja pychą', description: 'Przekonanie o posiadaniu wiedzy niedostępnej dla zwykłych ludzi.', vulnerabilityExploited: 'Potrzeba wyjątkowości i wyższego statusu.' }
      ],
      counterMeasures: [
        { step: '1. Test Falsyfikacji Poppera', script: '„Jaki konkretny fakt sprawi, że uznam moją hipotezę za fałszywą?”.', rationale: 'Wymusza zdefiniowanie granicy błędu przed podjęciem ryzyka.' }
      ]
    },
    alternativePath: 'Gdyby Marek zastosował zasady bayesowskie i po pierwszym raporcie obniżył prawdopodobieństwo sukcesu z 90% do 20%, sprzedałby akcje z małą stratą i zachował majątek.',
    readerQuestion: 'W jakiej dziedzinie życia tkwisz w błędnym przekonaniu tylko dlatego, że zainwestowałeś w nie za dużo czasu lub pieniędzy?',
    keyTakeaway: 'Rynek i rzeczywistość nie troszczą się o Twoje ego. Prawdziwa siła leży w zdolności do szybkiego przyznania się do błędu.'
  }
];

export const selfExercisesChapterEighteen: SelfExercise[] = [
  {
    id: 'cwiczenie-18-1-test-falsyfikacji',
    title: 'Audit Przekonań: Test Falsyfikacji i Weryfikacja Bayesowska',
    subtitle: 'Narzędzie dekonstrukcji dogmatów i podnoszenia epistemicznej pokory',
    objective: 'Identyfikacja kluczowego przekonania i wyznaczenie obiektywnych warunków, w których uznasz je za fałszywe.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Trening kory przedczołowej w zakresie hamowania automatycznych racjonalizacji wywołanych przez Domyślną Sieć Neuronalną (DMN).',
    steps: [
      {
        stepNumber: 1,
        title: 'Formułowanie hipotezy',
        instruction: 'Wybierz jedno silne przekonanie na temat rynku, pracy lub ludzi („Nikt w mojej branży nie gra uczciwie”).',
        promptText: 'Moje przekonanie:',
        placeholder: 'np. „Wszyscy szefowie dbają tylko o własny interes”'
      },
      {
        stepNumber: 2,
        title: 'Szukanie dowodów sprzecznych (Falsyfikacja)',
        instruction: 'Znajdź co najmniej 3 udokumentowane przypadki, które są bezpośrednim zaprzeczeniem Twojej tezy.',
        promptText: 'Dowody sprzeczne:',
        placeholder: 'np. „Mój znajomy pracuje w firmie, gdzie szef sfinansował leczenie pracownika”'
      },
      {
        stepNumber: 3,
        title: 'Określenie warunku zmiany zdania',
        instruction: 'Napisz: „Zmienię zdanie o 50%, jeśli zobaczę dowód X”.',
        promptText: 'Kryterium aktualizacji poglądu:',
        placeholder: 'np. „Jeśli zobaczę wyniki audytu pokazujące inne podejście, zaktualizuję mój model”'
      }
    ],
    reflectionQuestions: [
      'Co najgorszego stałoby się z Twoim obrazem siebie, gdyby okazało się, że to przekonanie jest błędne?',
      'Jakie korzyści emocjonalne czerpiesz z uważania, że masz w tej sprawie 100% racji?'
    ]
  }
];

export const chapterEighteen: Chapter = {
  number: 18,
  volume: 3,
  volumeChapterNumber: 2,
  title: 'Rozdział 2: Przekonania i Sposób Patrzenia na Świat',
  subtitle: 'Schematy poznawcze, mechanizmy dysonansu, bańki informacyjne i sztuka epistemicznej pokory',
  leadParagraph: 'Przekonania są niewidzialnymi okularami, przez które patrzymy na całą rzeczywistość. Nie reagujemy na świat taki, jaki jest w sposób obiektywny, lecz na nasz wewnętrzny model tego świata. Przekonania decydują o tym, co uznamy za szansę, a co za zagrożenie, komu zaufamy, a kogo uznamy za wroga. W tym rozdziale zbadamy anatomiczną strukturę przekonań, przyjrzymy się temu, jak powstają schematy poznawcze, dlaczego tak wściekle bronimy własnych błędów oraz jak opanować sztukę aktualizowania poglądów w świetle nowych faktów.',
  totalEstimatedPages: 50,
  sections: [
    {
      id: 'sec-18-1',
      pageNumber: 1,
      sectionNumber: '18.1',
      title: 'Anatomia Przekonania: Czym Jest Umysłowy Model Rzeczywistości?',
      category: 'wstep',
      readingTimeMinutes: 7,
      quote: {
        text: 'Nie widzimy rzeczy takimi, jakimi są. Widzimy je takimi, jakimi my jesteśmy.',
        author: 'Anaïs Nin'
      },
      paragraphs: [
        'Przekonanie to struktura poznawcza, która reprezentuje stan świata traktowany przez dany umysł jako prawda. Posiadanie przekonań jest biologicznie niezbędne – bez nich mózg musiałby w każdej sekundzie od nowa przeliczać fizykę i intencje każdego napotkanego człowieka.',
        'Przekonania skracają czas reakcji. Działają jak mapy nawigacyjne. Problem pojawia się w momencie, gdy zaczynamy mylić mapę z rzeczywistym terenem. Gdy mapa mówi, że tu jest most, a w rzeczywistości rzeka go zmyła, uderzenie w wodę jest kwestią czasu.'
      ]
    },
    {
      id: 'sec-18-2',
      pageNumber: 4,
      sectionNumber: '18.2',
      title: 'Schematy Poznawcze: Jak Mózg Porządkuje Chaotyczny Strumień Bodźców?',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Pojęcie schematu poznawczego, rozwinięte przez Aarona Becka, wyjaśnia, w jaki sposób doświadczenia z przeszłości tworzą trwale zorganizowane matryce interpretacyjne.',
        'Schemat działa jak automatyczny filtr: selekcjonuje docierające informacje, uderza w odpowiednie struny emocjonalne i podsuwa gotowe skrypty zachowań. Jeśli posiadasz schemat „Świat jest niesprawiedliwy”, dostrzeżesz każdy przejaw protekcji, a przeoczysz setki przykładów uczciwej rywalizacji.'
      ]
    },
    {
      id: 'sec-18-3',
      pageNumber: 7,
      sectionNumber: '18.3',
      title: 'Błędy Poznawcze w Służbie Dogmatu: Confirmation Bias i Myside Bias',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Błąd potwierdzenia (Confirmation Bias) to największy wampir epistemiczny ludzkiego umysłu. Kiedy sformułujemy tezę („Kawa szkodliwie wpływa na serce”), nasz mózg staje się genialnym adwokatem tej tezy.',
        'Ignoruje badania naukowe na próbie 100 000 osób, za to z zachwytem zapamiętuje opowieść sąsiada, któremu po kawie skoczyło ciśnienie. W ten sposób powstają niezłomne, lecz całkowicie błędne przekonania.'
      ]
    },
    {
      id: 'sec-18-4',
      pageNumber: 10,
      sectionNumber: '18.4',
      title: 'Dysonans Poznawczy i Męki Zmiany Zdania',
      category: 'neuronauka',
      readingTimeMinutes: 9,
      paragraphs: [
        'Leon Festinger opisał dysonans poznawczy jako stan głębokiego napięcia fizjologicznego powstającego w momencie zderzenia dwóch sprzecznych informacji. Mózg rejestruje dysonans w tych samych obszarach kory (ACC i wyspa), które odpowiadają za ból fizyczny.',
        'Aby uciec przed tym bólem, stosujemy genialne akrobatyki umysłowe: unieważniamy źródło, dopisujemy spiskowe teorie lub odwracamy uwagę.'
      ]
    },
    {
      id: 'sec-18-5',
      pageNumber: 13,
      sectionNumber: '18.5',
      title: 'Efekt Backfire: Dlaczego Fakty Często Niszczą Dialog?',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Wielu ludzi uważa, że wystarczy przedstawić drugiemu człowiekowi twarde wykresy i liczby, aby zmienił zdanie. Tymczasem zjawisko Backfire Effect pokazuje coś przeciwnego.',
        'Gdy atakujesz czyjeś przekonanie bez poszanowania jego godności i poczucia bezpieczeństwa, jego mózg przechodzi w tryb obronny (walka lub ucieczka). Wynikiem jest jeszcze głębsze okopanie się na dotychczasowych pozycjach.'
      ]
    },
    {
      id: 'sec-18-6',
      pageNumber: 16,
      sectionNumber: '18.6',
      title: 'Bańki Informacyjne i Cyfrowa Radykalizacja Przekonań',
      category: 'studium-przypadku',
      readingTimeMinutes: 8,
      paragraphs: [
        'Współczesne algorytmy mediów społecznościowych zostały zaprojektowane tak, aby maksymalizować czas spędzony przed ekranem. Najlepiej wywołuje to oburzenie i potwierdzenie istniejących uprzedzeń.',
        'Żyjąc w cyfrowej bańce informacyjnej, człowiek otrzymuje złudzenie, że „wszyscy myślą tak jak ja”, co prowadzi do drastycznego spadku empatii wobec osób o odmiennych poglądach.'
      ],
      caseStudyRef: caseStudiesChapterEighteen[0]
    },
    {
      id: 'sec-18-7',
      pageNumber: 19,
      sectionNumber: '18.7',
      title: 'Rdzenne Przekonania (Core Beliefs): Matryca O Sobie, Innych i Świecie',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Na samym dnie naszej psychiki leżą rdzenne przekonania. Dotyczą trzech obszarów: I) Ja („Jestem wartościowy” vs „Jestem uszkodzony”), II) Inni („Ludzie są życzliwi” vs „Ludzie wykorzystają każdą słabość”), III) Świat („Świat daje możliwości” vs „Świat jest wrogim chaosem”).',
        'Zmiana jednego rdzennego przekonania potrafi automatycznie przekształcić tysiące drobnych opinii wykonawczych.'
      ]
    },
    {
      id: 'sec-18-8',
      pageNumber: 22,
      sectionNumber: '18.8',
      title: 'Separacja Przekonań od Tożsamości: Jak Przestać Być Swoim Poglądem?',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Kluczem do elastyczności myślenia jest rozdzielenie sfery „kim jestem” od sfery „co w tej chwili uważam za prawdopodobne”.',
        'Jeśli Twoja godność zależy od tego, czy masz rację w sporze politycznym lub biznesowym, każda korekta poglądu będzie odczuwana jako śmierć ego.'
      ]
    },
    {
      id: 'sec-18-9',
      pageNumber: 25,
      sectionNumber: '18.9',
      title: 'Aktualizowanie Przekonań w Modelu Bayesowskim',
      category: 'neuronauka',
      readingTimeMinutes: 9,
      paragraphs: [
        'Wnioskowanie Bayesowskie proponuje traktowanie przekonań nie jako dogmatów (0 lub 1), lecz jako wartości prawdopodobieństwa (np. 70% pewności).',
        'Gdy pojawia się nowy fakt, nie wyrzucasz całego modelu ani nie ignorujesz faktu – przesuwasz suwak prawdopodobieństwa na 55% lub 80%. To fundament nowoczesnego myślenia naukowego.'
      ]
    },
    {
      id: 'sec-18-10',
      pageNumber: 28,
      sectionNumber: '18.10',
      title: 'Hierarchia Epistemiczna: Fakt, Hipoteza, Opinia i Dogmat',
      category: 'teoria',
      readingTimeMinutes: 7,
      paragraphs: [
        'Większość sporów wynika z braku odróżnienia opinii od faktów. Opinia („Ten obraz jest piękny”) nie podlega weryfikacji w kategoriach prawdy i fałszu.',
        'Fakt („Temperatura wrzenia wody wynosi 100°C przy ciśnieniu 1 atm”) jest sprawdzalny. Mieszanie opinii z faktami tworzy chaos pojęciowy.'
      ]
    },
    {
      id: 'sec-18-11',
      pageNumber: 31,
      sectionNumber: '18.11',
      title: 'Fałszywa Pewność i Efekt Dunninga-Krugera',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Osoby wchodzące do nowej dziedziny często przechodzą przez fazę zwaną „Górą Głupców” (Peak of Mount Stupid) – wykazują ekstremalną pewność siebie przy znikomej wiedzy.',
        'Dopiero w miarę zgłębiania tematu uświadamiają sobie stopień skomplikowania materii, wchodząc w „Dolinę Rozpaczy” i powoli budując prawdziwą ekspertyzę.'
      ]
    },
    {
      id: 'sec-18-12',
      pageNumber: 34,
      sectionNumber: '18.12',
      title: 'Epistemiczna Pokora (Intellectual Humility) jako Supermoc XXI Wieku',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Epistemiczna pokora to świadomość własnych ograniczeń poznawczych. Nie oznacza ona braku wyrazistych poglądów, lecz ciekawość świata i szacunek dla dowodów.',
        'Liderzy posiadający epistemiczną pokorę potrafią przyznać się do błędu, skorygować strategię i uratować firmę przed katastrofą.'
      ]
    },
    {
      id: 'sec-18-13',
      pageNumber: 37,
      sectionNumber: '18.13',
      title: '🧠 BŁĘDNA INTUICJA: „Człowiek Inteligentny Nie Ulega Błędom Poznawczym”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'INTUICJA: Wydaje się nam, że wysoce inteligentni ludzie (profesorowie, inżynierowie) są odporni na błędy poznawcze i bańki informacyjne.',
        'CO MOŻE BYĆ BŁĘDNE? Wysoki iloraz inteligencji nie chroni przed błędem potwierdzenia – sprawia jedynie, że człowiek potrafi szybciej i sprawniej wymyślać genialne racjonalizacje dla swoich błędnych przekonań.',
        'CO MÓWI PSYCHOLOGIA? Zjawisko to nazywa się „myside bias in high IQ”. Inteligencja służy jako broń defensywna dla przyjętej wcześniej tezy emocjonalnej.',
        'BARDZIEJ PRECYZYJNY MODEL: Ochroną przed błędem nie jest wyższe IQ, lecz epistemiczna pokora i elastyczność proceduralna.'
      ]
    },
    {
      id: 'sec-18-14',
      pageNumber: 40,
      sectionNumber: '18.14',
      title: '🔬 CO NADAL NIE JEST JASNE? Zagadka Szybkiej Zmiany Przekonań',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'Dlaczego niektórzy ludzie potrafią zmienić swoje rdzenne przekonania polityczne czy religijne w ciągu jednego dnia pod wpływem traumatycznego wydarzenia, podczas gdy inni ignorują dowody przez dekady?',
        'Mechanizmy tzw. „epifanii poznawczej” i nagłej reorganizacji schematów umysłowych stanowią jedno z najbardziej fascynujących i wciąż nie w pełni wyjaśnionych zagadnień współczesnej psychologii.'
      ]
    },
    {
      id: 'sec-18-15',
      pageNumber: 43,
      sectionNumber: '18.15',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokół Testu Falsyfikacji',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        '1. Wybierz jeden pogląd, w który mocno wierzysz w pracy lub w relacji.',
        '2. Zadaj sobie pytanie Poppera: „Jaki konkretny fakt sprawiłby, że przyznałbym się do błędu?”.',
        '3. Jeśli odpowiedź brzmi „Nic nie zmieni mojego zdania”, oznacza to, że nie posiadasz przekonania, lecz dogmat.',
        '4. Zrób jedno wyszukiwanie w internecie celowo nastawione na znalezienie badań sprzecznych z Twoim zdaniem.'
      ],
      exerciseRef: selfExercisesChapterEighteen[0]
    },
    {
      id: 'sec-18-16',
      pageNumber: 46,
      sectionNumber: '18.16',
      title: 'Most do Rozdziału 19 oraz Integracja z Tomem I i II',
      category: 'podsumowanie',
      readingTimeMinutes: 6,
      paragraphs: [
        'Poznaliśmy mechanikę przekonań i sposób ich weryfikacji. Przekonania o świecie i innych ludziach tworzą jednak bezpośredni fundament pod szczególną klasę przekonań – przekonania o własnych możliwościach i wartości.',
        'W następnym rozdziale przejdziemy do szczegółowej analizy samooceny, poczucia własnej wartości oraz poczucia własnej skuteczności (Bandura self-efficacy), rozbijając potoczne mity na temat „pewności siebie”.'
      ]
    },
    {
      id: 'sec-18-17',
      pageNumber: 48,
      sectionNumber: '18.17',
      title: 'Interaktywne Laboratorium Zmiany Przekonań',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Przeprowadź symulację aktualizowania przekonań na podstawie wprowadzanych dowodów. Zobacz, jak przesuwają się suwaki prawdopodobieństwa w modelu bayesowskim.'
      ]
    },
    {
      id: 'sec-18-18',
      pageNumber: 50,
      sectionNumber: '18.18',
      title: 'Egzamin Końcowy Rozdziału 18: Przekonania i Schematy',
      category: 'podsumowanie',
      readingTimeMinutes: 10,
      paragraphs: [
        'Sprawdź swój poziom zrozumienia mechanizmów dysonansu poznawczego, epistemicznej pokory i błędu potwierdzenia.'
      ]
    }
  ]
};
