import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 27 (GLOBALNIE ROZDZIAŁ 43 W STRUKTURZE DZIEŁA)
 * TYTUŁ: REPUTACJA, WIZERUNEK I TOŻSAMOŚĆ SPOŁECZNA
 * PODTYTUŁ: Jak człowiek funkcjonuje w oczach innych, dlaczego reputacja jest najcenniejszym i najkruchszym zasobem oraz jak tożsamość społeczna kształtuje zachowanie
 */

export const chapterFortyThreeExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Jaka jest fundamentalna różnica pomiędzy wizerunkiem (image) a reputacją (reputation) w ujęciu psychologii społecznej i socjologii relacyjnej?',
    topic: 'Wizerunek a Reputacja',
    sectionRef: 'Sekcja 43.1 & 43.2',
    options: [
      { label: 'A', text: 'Wizerunek to krótkoterminowa, doraźna autoprezentacja i projekcja (to, co mówimy o sobie), podczas gdy reputacja to zakorzeniony w czasie, uśredniony bilans rzeczywistych zachowań jednostki w pamięci sieci społecznej (to, co inni mówią o nas, gdy wychodzimy z pokoju).', isCorrect: true },
      { label: 'B', text: 'Wizerunek dotyczy wyłącznie gwiazd telewizyjnych, a reputacja polityków.', isCorrect: false },
      { label: 'C', text: 'Reputację można kupić za pomocą płatnej kampanii reklamowej w 24 godziny.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy — oba pojęcia oznaczają liczbę polubień w mediach społecznościowych.', isCorrect: false }
    ],
    explanation: 'Wizerunek można szybko wykreować za pomocą makijażu, retoryki i marketingu; reputacja jest kapitałem historycznym, budowanym latami przez powtarzalne, spójne czyny w warunkach próby.',
    keyTakeaway: 'Wizerunek to obietnica złożona na pokaz; reputacja to twardy bilans dotrzymanych słów.'
  },
  {
    id: 2,
    question: 'Zgodnie z Teorią Tożsamości Społecznej (SIT) Henriego Tajfela i Johna Turnera, czym jest zjawisko faworyzowania grupy własnej (In-Group Favoritism)?',
    topic: 'Teoria Tożsamości Społecznej Tajfela',
    sectionRef: 'Sekcja 43.8 & 43.9',
    options: [
      { label: 'A', text: 'Automatyczną tendencją do przypisywania członkom własnej grupy wyższej moralności, kompetencji i zaufania przy jednoczesnej depersonalizacji i podejrzliwości wobec obcych (Out-Group), nawet w warunkach minimalnego podziału laboratoryjnego.', isCorrect: true },
      { label: 'B', text: 'Chęcią natychmiastowej wyprowadzki do innego kraju.', isCorrect: false },
      { label: 'C', text: 'Całkowitą obojętnością na los jakiejkolwiek wspólnoty.', isCorrect: false },
      { label: 'D', text: 'Zaburzeniem pamięci krótkotrwałej uniemożliwiającym rozpoznawanie twarzy.', isCorrect: false }
    ],
    explanation: 'Paradygmat grupy minimalnej Tajfela dowiódł, że wystarczy podzielić ludzi monetą na grupę Klee i Kandinsky’ego, by w ciągu 5 minut uruchomić mechanizm dyskryminacji obcych i obrony prestiżu własnego stada.',
    keyTakeaway: 'Nasza tożsamość karmi się dumą ze stada; bez krytycznej autorefleksji lojalność grupowa łatwo staje się źródłem uprzedzeń.'
  },
  {
    id: 3,
    question: 'Dlaczego z punktu widzenia ewolucyjnego (Dunbar) reputacja jest uważana za najpotężniejszy mechanizm stabilizujący współpracę w społecznościach ludzkich?',
    topic: 'Ewolucyjna Rola Reputacji i Plotki',
    sectionRef: 'Sekcja 43.5 & 43.6',
    options: [
      { label: 'A', text: 'Ponieważ sieć plotki i wymiany opinii o nieuczciwych członkach grupy (Free-Riders) drastycznie podnosi koszt oszustwa, chroniąc zasoby plemienia przed pasożytnictwem bez konieczności ciągłej walki fizycznej.', isCorrect: true },
      { label: 'B', text: 'Gdyż plotkowanie służy wyłącznie rozrywce i nie ma żadnej funkcji adaptacyjnej.', isCorrect: false },
      { label: 'C', text: 'Ponieważ eliminuje potrzebę jakichkolwiek praw pisanych w nowoczesnych państwach.', isCorrect: false },
      { label: 'D', text: 'Świadczy to o wrodzonym instynkcie kłamstwa u naczelnych.', isCorrect: false }
    ],
    explanation: 'Robin Dunbar wykazał, że ludzki język ewoluował głównie jako społeczny grooming: monitoring reputacji innych pozwalał wiedzieć, komu można zaufać przy polowaniu, zanim osobiście doświadczyło się zdrady.',
    keyTakeaway: 'Plotka reputacyjna była pierwotnym systemem ostrzegania przed oszustami; zła reputacja oznaczała śmierć społeczną.'
  },
  {
    id: 4,
    question: 'Co decyduje o sukcesie lub całkowitej klęsce procesu odbudowy reputacji po kryzysie wizerunkowym (Etiologia Kryzysu i Naprawa)?',
    topic: 'Naprawa Reputacji i Prawdziwe Przeprosiny',
    sectionRef: 'Sekcja 43.18 & 43.19',
    options: [
      { label: 'A', text: 'Natychmiastowe, jednoznaczne wzięcie pełnej odpowiedzialności bez obwiniania ofiar, jawne zadośćuczynienie krzywdom oraz długofalowa, mierzalna zmiana procedur i zachowania.', isCorrect: true },
      { label: 'B', text: 'Wynajęcie drogiej agencji PR, która zamiecie fakty pod dywan i zaatakuje sygnalistów.', isCorrect: false },
      { label: 'C', text: 'Udawanie, że nic się nie stało i wyjazd na roczne wakacje.', isCorrect: false },
      { label: 'D', text: 'Wypowiedzenie formuły: „Przepraszam wszystkich, którzy poczuli się urażeni”.', isCorrect: false }
    ],
    explanation: 'Fałszywe przeprosiny warunkowe („Przepraszam, jeśli ktoś poczuł...”) są przez ludzki mózg odczytywane jako kolejna manipulacja i pogłębiają katastrofę. Odbudowa zaufania wymaga bolesnego, jawnego rozliczenia i zadośćuczynienia.',
    keyTakeaway: 'Reputację niszczy się w jedną minutę kłamstwa; odbudowuje się ją przez dekadę bezbłędnej prawości.'
  }
];

export const chapterFortyThreeCaseStudies: CaseStudy[] = [
  {
    id: 'cs-43-1-kryzys-reputacji-restauracji',
    title: 'Studium Przypadku: Pycha, Kamery i Śmierć Reputacji Gwiazdy Kulinarnej',
    context: 'Luksusowa restauracja w stolicy prowadzona przez medialnego szefa kuchni Roberta (42 lata, 500 tysięcy obserwujących, autor książek, stały gość telewizyjnych śniadaniówek).',
    characters: [
      { name: 'Robert', role: 'Szef kuchni i właściciel', personality: 'Niezwykle utalentowany, narcyz wizerunkowy, przekonany o własnej nietykalności, wulgarny wobec personelu.' },
      { name: 'Marta', role: 'Młoda cukierniczka', personality: 'Pracowita, skromna, przez rok znosiła upokorzenia, aż wreszcie nagrała nocną awanturę w chłodni.' }
    ],
    dilemma: 'Jak w dobie wszechobecnych smartfonów pęknięcie między sztucznym wizerunkiem „ciepłego kucharza” a brutalną rzeczywistością niszczy kapitał budowany przez 15 lat?',
    timeline: [
      { time: 'Dzień 1', event: 'Marta publikuje na TikToku 45-sekundowe nagranie, na którym Robert rzuca w nią gorącą patelnią i wrzeszczy: „Jesteś nikim, zniszczę cię w tym mieście!”. Wideo osiąga 3 miliony wyświetleń w 12 godzin.' },
      { time: 'Dzień 2', event: 'Robert publikuje oświadczenie przygotowane przez prawnika: „Materiał został zmanipulowany, wycięty z kontekstu twórczego stresu. Przepraszam, jeśli ktoś poczuł się dotknięty. Pozwę autorkę za naruszenie dóbr osobistych”.' },
      { time: 'Dzień 3', event: 'Wybucha pożar reputacyjny: dziesięciu byłych pracowników publikuje własne relacje o mobbingu i niewypłacaniu pensji. Stacja telewizyjna zrywa kontrakt na program kulinarny, a sponsorzy wycofują logo z restauracji.' },
      { time: 'Tydzień 2', event: 'Rezerwacje w lokalu spadają o 95%. Robert zostaje zmuszony do ogłoszenia upadłości i wycofania się z życia publicznego.' }
    ],
    psychologicalDynamics: {
      cognitiveBiases: [
        { biasName: 'Złudzenie Niewrażliwości Wizerunkowej (Illusion of PR Invulnerability)', manifestation: 'Robert sądził, że miliony fanów w internecie stanowią pancerz chroniący go przed odpowiedzialnością za codzienne draństwo.' },
        { biasName: 'Negatywna Asymetria Reputacyjna (Negativity Bias)', manifestation: 'Jeden dowód na przemoc fizyczną i mobbing zniszczył w oczach opinii publicznej 15 lat wybitnych osiągnięć gastronomicznych.' }
      ],
      emotionalStates: [
        { trigger: 'Pojawienie się nagrania w sieci', emotion: 'Panika, wściekłość narcystyczna i zaprzeczenie u Roberta.' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol i Adrenalina', roleInScenario: 'Zalały system Roberta, wyłączając zdolność do pokornej autorefleksji i dyktując agresywne oświadczenie prawne.' }
      ],
      biologicalTimeline: [
        { timeMs: '0-500 ms', process: 'Błyskawiczne zawalenie się tożsamości „uwielbianego mistrza” w obliczu powszechnego linczu sieciowego.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Wymuszone przeprosiny PR-owe (Non-Apology)', description: 'Użycie zwrotu „jeśli ktoś poczuł się dotknięty” i groźby pozwów sądowych.', vulnerabilityExploited: 'Brak — taktyka wywołała natychmiastową eskalację oburzenia.' }
      ],
      counterMeasures: [
        { step: 'Radykalna prawda i pokuta', script: '„To nagranie jest prawdziwe. Zawiodłem jako szef i jako człowiek. Zawieszam działalność, rozpoczynam terapię i wypłacam rekompensaty zespołowi”.', rationale: 'Jedyna teoretyczna szansa na zahamowanie lawiny infamii.' }
      ]
    },
    keyTakeaway: 'W erze cyfrowej nie ma bezpiecznych kulis. Twoja reputacja to nie to, co mówisz w świetle jupiterów, lecz to, jak traktujesz najsłabszego człowieka w ciemności.'
  }
];

export const chapterFortyThreeExercises: SelfExercise[] = [
  {
    id: 'ex-43-audyt-kapitalu-reputacyjnego',
    title: 'Audyt Kapitału Reputacyjnego: Co Zostaje, Gdy Zgaśnie Reflektor?',
    subtitle: 'Narzędzie dekonstrukcji własnego wizerunku i identyfikacji pęknięć między autoprezentacją a czynami',
    objective: 'Zdiagnozowanie obszarów, w których twój zewnętrzny wizerunek rozmija się z twoim codziennym zachowaniem, zanim dojdzie do kryzysu zaufania.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Konfrontacja idealnego „Ja” (Self-Concept) z twardym bilansem zachowań aktywuje przednią korę zakrętu obręczy (ACC), inicjując proces naprawczy.',
    steps: [
      {
        stepNumber: 1,
        title: 'Trójkąt Reputacji',
        instruction: 'Wypisz 3 przymiotniki, którymi sam chciałbyś być opisywany przez otoczenie, a następnie 3 przymiotniki, których najbardziej bałbyś się usłyszeć za swoimi plecami.',
        promptText: 'Jakie cechy stanowią twoją pożądaną tożsamość, a jakie twój największy cień?',
        placeholder: 'Pożądane: Niezawodny, sprawiedliwy, mądry... Cień: Skąpy, fałszywy, arogancki...'
      },
      {
        stepNumber: 2,
        title: 'Test Spójności w Cieniu',
        instruction: 'Przypomnij sobie sytuację z ostatniego roku, w której twoje zachowanie wobec kogoś o niższym statusie (kelner, kurier, stażysta, własne dziecko w złości) było sprzeczne z twoim oficjalnym wizerunkiem.',
        promptText: 'Co ujawniła ta sytuacja o twoim rzeczywistym stanie etycznym?',
        placeholder: 'Np. Wypadłem z roli opanowanego lidera i nakrzyczałem na asystenta za drobny błąd, bo byłem zmęczony...'
      }
    ],
    reflectionQuestions: [
      'Czy ludzie w twojej organizacji boją się powiedzieć ci prawdę o tym, jak jesteś postrzegany?',
      'Co musiałbyś zrobić dzisiaj, by twoje czyny zaczęły w 100% odpowiadać twoim deklaracjom?'
    ]
  }
];

export const chapterFortyThree: Chapter = {
  number: 43,
  volume: 3,
  volumeChapterNumber: 27,
  title: 'Reputacja, Wizerunek i Tożsamość Społeczna',
  subtitle: 'Jak człowiek funkcjonuje w oczach innych, dlaczego reputacja jest najcenniejszym i najkruchszym zasobem oraz jak tożsamość społeczna kształtuje zachowanie',
  leadParagraph: `Człowiek nie żyje w próżni. Każde nasze słowo, decyzja i gest odkładają się w pamięci innych ludzi jak warstwy geologiczne, tworząc potężny, niewidzialny kapitał: naszą reputację. To ona decyduje o tym, czy otrzymamy kredyt, czy powierzą nam dziecko pod opiekę, czy zechcą z nami robić interesy i czy w chwili upadku ktokolwiek poda nam rękę. W tym zamykającym blok rozdziale badamy anatomię społecznego zwierciadła: od Goffmanowskiego teatru codzienności, przez plemienne mechanizmy tożsamości, aż po dramatyczną kruchość dobrego imienia w epoce cyfrowego linczu.`,
  totalEstimatedPages: 68,
  sections: [
    // 43.1
    {
      id: 'sec-43-1',
      pageNumber: 1,
      sectionNumber: '43.1',
      title: 'Podstawowe pojęcia: Reputacja, wizerunek, prestiż, tożsamość i autoprezentacja — Ścisłe rozgraniczenie',
      category: 'teoria',
      readingTimeMinutes: 24,
      quote: {
        text: 'Wizerunek to to, co ludzie myślą, że robisz; reputacja to to, co naprawdę zrobiłeś, gdy nikt nie patrzył; tożsamość to to, kim jesteś, gdy zapomnisz o publiczności.',
        author: 'Prof. Nicholas Emler',
        source: 'University of Surrey, „Gossip, Reputation, and Social Adaptation”, Oxford University Press, 1994'
      },
      paragraphs: [
        'W dobie wszechwładzy mediów społecznościowych pojęcia wizerunku i reputacji uległy katastrofalnemu zatarciu. Współczesny człowiek spędza godziny na budowaniu profilu w sieci, myląc liczbę polubień z rzeczywistym zaufaniem otoczenia. Zbudujmy precyzyjną architekturę pojęciową:',
        '1. AUTOPREZENTACJA (Self-Presentation): Świadome i nieświadome zabiegi komunikacyjne (strój, mowa ciała, ton głosu, publikowane zdjęcia), za pomocą których jednostka próbuje wywrzeć pożądane wrażenie na audytorium.',
        '2. WIZERUNEK (Image): Syntetyczna, powierzchowna projekcja w umysłach odbiorców. Może powstać w kilka minut pod wpływem chwytliwej reklamy, profesjonalnej sesji fotograficznej lub charyzmatycznego wystąpienia.',
        '3. REPUTACJA (Reputation): Stabilny, historyczny bilans wiarygodności jednostki wypracowany w sieci społecznej. Reputacja nie opiera się na tym, co mówisz, lecz na tym, jak zachowałeś się w chwilach próby, kryzysu i konfliktu interesów.',
        '4. PRESTIŻ (Prestige): Społeczna ranga i podziw przypisywany jednostce przez wzgląd na jej unikalne kompetencje, wiedzę lub zasługi dla wspólnoty (Rozdział 38).',
        '5. TOŻSAMOŚĆ SPOŁECZNA (Social Identity): Część koncepcji samego siebie, która rodzi się z przynależności do określonych grup społecznych (narodowych, zawodowych, religijnych) wraz z ładunkiem emocjonalnym i wartościami, jakie z tą przynależnością łączymy.'
      ],
      subsections: [
        {
          id: 'sub-43-1-1',
          title: 'Analiza słów prof. Nicholasa Emlera: Reputacja jako Waluta Społeczna',
          content: [
            'Profesor Nicholas Emler dowodzi, że reputacja jest najważniejszą walutą adaptacyjną człowieka. W świecie bez formalnych instytucji i policji to dobra sława decydowała o przetrwaniu jednostki. Jeśli wspólnota uznała cię za zdrajcę, złodzieja lub tchórza — żadne bogactwo materialne nie mogło uratować cię przed ostracyzmem i śmiercią.',
            'Współczesny błąd polega na wierze, że wizerunek PR może zastąpić reputację. Możesz oszukać miliony ludzi na ekranie smartfona, ale nie oszukasz ludzi, z którymi dzielisz biuro, dom i trudne projekty. Reputacja zawsze dogania wizerunek.'
          ],
          highlightBox: {
            title: 'Złota Zasada Socjologii: Prawo Trwałości Reputacji',
            content: 'Wizerunek buduje się w mediach; reputację weryfikuje się w kryzysie. Gdy pęka scenografia sukcesu, to nie lajki w sieci decydują o twoim losie, lecz dług pamięci tych, którym pomogłeś lub których skrzywdziłeś.',
            type: 'insight'
          }
        }
      ]
    },

    // 43.2
    {
      id: 'sec-43-2',
      pageNumber: 4,
      sectionNumber: '43.2',
      title: 'Wizerunek a reputacja: Dlaczego wizerunek można kupić w tydzień, a na reputację pracuje się dekadami',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Z punktu widzenia ekonomii behawioralnej wizerunek jest kosztem marketingowym, podczas gdy reputacja jest AKTYWEM STRUKTURALNYM.',
        'Każdy milioner z kryminalną przeszłością może zatrudnić czołową agencję public relations, ubrać się w nienaganny garnitur od mediolańskiego krawca i zasponsorować szpital dziecięcy, tworząc w ciągu miesiąca olśniewający wizerunek filantropa.',
        'Dlaczego jednak banki inwestycyjne i wieloletni partnerzy biznesowi wciąż patrzą na niego z chłodną rezerwą? Ponieważ znają jego REPUTACJĘ: pamiętają, jak traktował podwykonawców 10 lat temu, ile spółek doprowadził do upadłości i czy dotrzymywał nieformalnych umów dżentelmeńskich.',
        'Reputacja posiada potężną bezwładność poznawczą: jest sumą tysięcy mikro-interakcji przekazywanych w nieformalnych sieciach poleceń.'
      ]
    },

    // 43.3
    {
      id: 'sec-43-3',
      pageNumber: 7,
      sectionNumber: '43.3',
      title: 'Teoria dramaturgiczna Ervinga Goffmana: Człowiek w teatrze życia codziennego — Fasada, rekwizyty i kulisy',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Świat jest rzeczywiście teatrem, w którym każdy z nas występuje na scenie przed audytorium. Posługujemy się fasadą, kostiumem i starannie dobranymi rekwizytami, by utrzymać definicję sytuacji. Jednak całe nasze człowieczeństwo rozgrywa się za kulisami — w miejscu, gdzie aktor może wreszcie zmyć makijaż i odetchnąć.',
        author: 'Prof. Erving Goffman',
        source: 'University of Edinburgh & Berkeley, „The Presentation of Self in Everyday Life”, Doubleday, 1956'
      },
      paragraphs: [
        'Genialny kanadyjski socjolog Erving Goffman zrewolucjonizował nasze rozumienie życia społecznego, opisując je za pomocą metafor teatralnych:',
        '- SCENA PRZEDNIA (Front Stage): Przestrzeń, w której odgrywamy naszą oficjalną rolę społeczną (lekarza, profesora, idealnej matki, twardego prezesa). Dbamy o fasadę osobistą: strój, akcent, maniery, ukrywanie wątpliwości.',
        '- REKWIZYTY STATUSOWE: Dyplomy na ścianach, drogie pióra, stetoskopy, służbowe telefony — materialne dowody potwierdzające nasze prawo do odgrywania roli.',
        '- KULISY (Backstage): Zamknięta przestrzeń intymna, do której wpuszczamy tylko najbliższych zaufanych sojuszników. Tutaj klniemy ze zmęczenia, płaczemy z bezsilności, robimy głupie miny i obgadujemy publiczność.',
        'Tragedia współczesnego człowieka polega na zaniku kulis: w dobie wszechobecnych kamer i social mediów scena wdarła się do naszych sypialni, zmuszając nas do odgrywania spektaklu sukcesu przez 24 godziny na dobę.'
      ]
    },

    // 43.4
    {
      id: 'sec-43-4',
      pageNumber: 10,
      sectionNumber: '43.4',
      title: 'Historia: „Dwa życia mecenasa Wiktora” — Gdy pękają kulisy i prawda niszczy fasadę w jeden wieczór',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Mecenas Wiktor był chodzącym pomnikiem cnót obywatelskich. W telewizji występował jako obrońca praw człowieka, w kościele zbierał datki na domy dziecka, a jego kancelaria szczyciła się hasłem: „Prawość, Tradycja, Godność”. Nosił tweedowe marynarki, palił fajkę i mówił piękną polszczyzną z lat 30.',
        'Miał jednak swoje mroczne kulisy. W piątkowe wieczory zamykał się w podmiejskim motelu z młodymi aplikantkami, którym groził zablokowaniem wpisu na listę adwokacką, jeśli nie ulegną jego szantażom seksualnym. Trwało to 7 lat.',
        'Wszystko pękło w jeden wtorkowy poranek. Trzy byłe aplikantki złożyły w prokuraturze 200 stron wydruków wiadomości, nagrań audio i zeznań świadków. Wiadomość trafiła na czołówki portali informacyjnych.',
        'Reakcja społeczeństwa była jak wybuch wulkanu. Fasada runęła w milisekundę. Przyjaciele z palestry udawali, że go nie znają, stowarzyszenia wykreśliły go z członków honorowych, a jego gabinet został zdemolowany przez protestujących. Wiktor zamknął się w pustym domu, niezdolny pojąć, jak to możliwe, że 30 lat budowania wizerunku wyparowało w 48 godzin.'
      ]
    },

    // 43.5
    {
      id: 'sec-43-5',
      pageNumber: 13,
      sectionNumber: '43.5',
      title: 'Ewolucyjna funkcja reputacji: Teoria Robina Dunbara — Plotka jako społeczny klej i ochrona przed darmozjadami',
      category: 'neuronauka',
      readingTimeMinutes: 25,
      paragraphs: [
        'Brytyjski antropolog i prymatolog Robin Dunbar postawił fascynującą tezę: LUDZKA MOWA POWSTAŁA PO TO, BY ZASTĄPIĆ ISKANIE SIĘ U MAŁP.',
        'U szympansów budowanie sojuszy wymaga fizycznego iskania futra (grooming), co pochłania do 20% dnia i ogranicza wielkość stada do 50 osobników. Człowiek, rozwijając język, zyskał narzędzie do „iskania społecznego na odległość” — czyli do PLOTKOWANIA.',
        'Dzięki plotce mogliśmy wiedzieć: 1) Kto jest pracowity, a kto kradnie upolowane mięso, 2) Kto zdradza partnerów, 3) Komu można zaufać w czasie wojny. Plotka reputacyjna pozwoliła ludziom tworzyć stabilne grupy liczące do 150 osobników (Liczba Dunbara), kładąc podwaliny pod nowoczesną cywilizację.'
      ]
    },

    // 43.6
    {
      id: 'sec-43-6',
      pageNumber: 16,
      sectionNumber: '43.6',
      title: 'Mechanika rozchodzenia się opinii: Sieci społeczne, kaskady informacyjne i potęga plotki negatywnej',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'W dynamice sieci społecznych obowiązuje bezwzględne prawo: INFORMACJA NEGATYWNA ROZCHODZI SIĘ TRZYKROTNIE SZYBCIEJ I DOCIERA CZTEROKROTNIE DALEJ NIŻ INFORMACJA POZYTYWNA (Negative Information Cascades).',
        'Z punktu widzenia ewolucji jest to całkowicie logiczne: jeśli usłyszysz, że pan X jest wspaniałym kucharzem, to miła wiadomość; jeśli usłyszysz, że pan X truje gości muchomorami, to wiedza ratująca życie. Mózg traktuje doniesienia o nielojalności lub oszustwie jako alarm bezpieczeństwa najwyższego priorytetu.'
      ]
    },

    // 43.7
    {
      id: 'sec-43-7',
      pageNumber: 19,
      sectionNumber: '43.7',
      title: 'Historia: „Plotka na korytarzu” — Jak jedno złośliwe zdanie potrafi zatruć atmosferę i zniszczyć awans',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Agnieszka była wybitną programistką i faworytką w konkursie na stanowisko dyrektora technicznego (CTO) w firmie gamingowej.',
        'Jej konkurent Mariusz nie zaatakował jej na zebraniu. Podczas nieformalnego papierosa z dyrektorem HR rzucił mimochodem z zatroskaną miną: „Agnieszka ma świetny kod... Szkoda tylko, że po jej ostatnim rozwodzie ma takie wahania nastrojów i bierze silne leki uspokajające. Ostatnio w nocy wysłała mi maila z takimi dziwnymi pretensjami, że aż się przestraszyłem o jej stabilność”.',
        'Mariusz nie musiał niczego udowadniać. Ziarno podejrzliwości zostało zasiane w umyśle HR-owca. Kiedy nadszedł dzień wyboru, zarząd uznał: „Agnieszka jest świetna, ale może na to stanowisko potrzebujemy kogoś bardziej stabilnego emocjonalnie?”. Awans dostał Mariusz.',
        'Agnieszka dowiedziała się o przyczynie porażki rok później. Złośliwa plotka reputacyjna zniszczyła jej marzenie bez pozostawienia ani jednego formalnego śladu.'
      ],
      interactiveWindowRef: {
        id: 'win-43-7-anatomia-plotki',
        title: 'MODUŁ A: Jak Rozchodzi Się Zatruta Informacja?',
        subtitle: 'Laboratorium śledzenia kaskady reputacyjnej na studium przypadku Mariusza',
        context: 'Konfrontacja plotki korytarzowej z rzetelną oceną kompetencji pracownika.',
        type: 'what_we_know',
        takeaway: 'Plotka reputacyjna zabija z ukrycia: ofiara nie ma nawet szansy przedstawić kontrargumentów, bo nikt nie pyta jej o zdanie.',
        whatWeKnow: {
          items: [
            {
              id: 'gossip-43-1',
              statement: 'Agnieszka posiada najwyższe kompetencje techniczne i rekomendacje od zespołu inżynierów.',
              category: 'fakt',
              explanation: 'Twardy kapitał merytoryczny i bilans pracy w projektach.'
            },
            {
              id: 'gossip-43-2',
              statement: 'Mariusz rzuca aluzję o lekach i rozwodzie z pozycją rzekomej troski.',
              category: 'motyw',
              explanation: 'Zatruwanie studni (Poisoning the Well): podważenie stabilności poznawczej rywala.'
            },
            {
              id: 'gossip-43-3',
              statement: 'Zarząd podejmuje decyzję z lęku przed ryzykiem wizerunkowym i niepewnością.',
              category: 'interpretacja',
              explanation: 'Działanie heurystyki ostrożnościowej: wycofanie poparcia bez weryfikacji faktów.'
            }
          ]
        }
      }
    },

    // 43.8
    {
      id: 'sec-43-8',
      pageNumber: 22,
      sectionNumber: '43.8',
      title: 'Tożsamość społeczna: Teoria SIT Henriego Tajfela i Johna Turnera — My kontra Oni',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Tożsamość społeczna to ta część wiedzy jednostki o samej sobie, która wynika z jej członkostwa w grupie społecznej, powiązana z wartościowaniem i znaczeniem emocjonalnym przypisywanym temu członkostwu.',
        author: 'Prof. Henri Tajfel',
        source: 'University of Bristol, „Differentiation Between Social Groups”, Academic Press, 1978'
      },
      paragraphs: [
        'Henri Tajfel — polski Żyd, który cudem ocalał z Holocaustu we Francji — poświęcił całe życie naukowe na zbadanie pytania: Dlaczego ludzie z tak przerażającą łatwością dzielą się na wrogie plemiona i nienawidzą obcych?',
        'W słynnym PARADYGMACIE GRUPY MINIMALNEJ (Minimal Group Paradigm) Tajfel wykazał coś wstrząsającego: wystarczyło podzielić nastoletnich chłopców na dwie grupy na podstawie tego, czy woleli obrazy Paula Klee czy Wassily’ego Kandinsky’ego, by natychmiast zaczęli przyznawać więcej pieniędzy i punktów członkom własnej grupy, celowo szkodząc grupie obcej — nawet jeśli obniżało to ich własny zysk!',
        'Trzy filary Teorii Tożsamości Społecznej (SIT):',
        '1. KATEGORYZACJA: Dzielimy świat na „Nas” (In-Group) i „Ich” (Out-Group).',
        '2. IDENTYFIKACJA: Czerpiemy poczucie własnej wartości z sukcesów i prestiżu naszego plemienia („My, Polacy”, „My, lekarze”, „My, kibice Barcelony”).',
        '3. PORÓWNANIE SPOŁECZNE: Aby czuć się dobrze ze sobą, musimy stale udowadniać, że nasza grupa jest lepsza, szlachetniejsza i mądrzejsza niż tamci barbarzyńcy zza rzeki.'
      ]
    },

    // 43.9
    {
      id: 'sec-43-9',
      pageNumber: 25,
      sectionNumber: '43.9',
      title: 'Mechanizm kategoryzacji i depersonalizacji: Dlaczego obcy stają się jednakowi, a swoi zróżnicowani',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Kiedy patrzymy na członków własnej grupy, widzimy barwne, złożone jednostki: „Tomek jest cichy, Kasia jest dowcipna, a Marek bywa porywczy”.',
        'Kiedy jednak patrzymy na grupę obcą (inny naród, inną partię polityczną, inny dział w korporacji), nasz mózg odpala EFEKT JEDNORODNOŚCI GRUPY OBCEJ (Out-Group Homogeneity Effect): „Oni wszyscy są tacy sami: leniwi, roszczeniowi i fałszywi”.',
        'Ta depersonalizacja jest pierwszym krokiem ku dehumanizacji: łatwiej jest gardzić, odmawiać pomocy czy linczować symboliczną masę niż człowieka z imieniem i twarzą.'
      ]
    },

    // 43.10
    {
      id: 'sec-43-10',
      pageNumber: 28,
      sectionNumber: '43.10',
      title: 'Wierność grupie a autonomia jednostki: Presja lojalnościowa i syndrom Czarnej Owcy (Black Sheep Effect)',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Kto spotyka się z największą nienawiścią stada? Wróg z zewnątrz? Nie. Największa furia stada kieruje się przeciwko ZDRAJCY WEWNĘTRZNEMU — członkowi własnej grupy, który odważył się zakwestionować oficjalną narrację (Efekt Czarnej Owcy, Marques & Yzerbyt).',
        'Grupa wybaczy wrogowi, że jest wrogiem — w końcu to „obcy”. Ale buntownikowi z własnych szeregów nie wybaczy nigdy, ponieważ jego odmienność uderza w poczucie moralnej wyższości plemienia. Sygnalista, dysydent czy wolnomyśliciel jest wypychany poza nawias ze szczególnym okrucieństwem.'
      ]
    },

    // 43.11
    {
      id: 'sec-43-11',
      pageNumber: 31,
      sectionNumber: '43.11',
      title: 'Historia: „Nie pasuję do żadnej grupy” — Kryzys tożsamościowy człowieka na granicy dwóch światów',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Seweryn (30 lat) pochodził z małej, tradycyjnej wsi na Podkarpaciu, z rodziny robotniczej. Jako jedyny z rocznika skończył prestiżową informatykę w Warszawie i zaczął zarabiać wielkie pieniądze w korporacji.',
        'Gdy wracał na święta do rodzinnej wsi, słyszał złośliwe docinki przy stole: „No tak, panicz z Warszawy przyjechał, schabowy mu nie smakuje, w głowie mu się poprzewracało od tych milionów”. Czuł się tam obco i nieswojo.',
        'Kiedy jednak wracał do Warszawy i szedł na lunch z kolegami z korporacji, słyszał żarty ze „słoików”, prowincji i ludzi wierzących. Kiedy zająknął się o swoich korzeniach, widział protekcjonalne uśmieszki.',
        'Doświadczył bolesnego stanu MARGINALNOŚCI SPOŁECZNEJ: utracił dawną wspólnotę, a w nowej był zaledwie tolerowanym gościem. Tożsamość nie jest czymś, co wybierasz w sklepie — to przestrzeń uznania, którą inni muszą ci przyznać.'
      ]
    },

    // 43.12
    {
      id: 'sec-43-12',
      pageNumber: 34,
      sectionNumber: '43.12',
      title: 'Reputacja w erze cyfrowej: Trwałość śladu cyfrowego, archiwa internetowe i utrata prawa do zapomnienia',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Przez setki tysięcy lat ewolucji reputacja była dynamiczna i lokalna: jeśli popełniłeś głupi błąd w młodości, po 10 latach ludzie o nim zapominali, albo mogłeś przenieść się do innego miasta i zacząć od nowa z czystą kartą.',
        'W epoce cyfrowej ludzkość utraciła tę biologiczną łaskę zapomnienia. Internet ma pamięć absolutną i wieczną. Głupi post napisany przez 16-latka pod wpływem emocji może zostać wyciągnięty 20 lat później, gdy ten sam człowiek kandyduje na sędziego sądu najwyższego.',
        'Cyfrowy ślad (Digital Footprint) zamienia nasze życie w zabetonowaną skamielinę, w której każda pomyłka może zostać użyta jako broń reputacyjna w dowolnym momencie.'
      ]
    },

    // 43.13
    {
      id: 'sec-43-13',
      pageNumber: 37,
      sectionNumber: '43.13',
      title: 'Kultura unieważnienia (Cancel Culture) i lincz sieciowy: Od moralnego oburzenia do cyfrowego stosu',
      category: 'teoria',
      readingTimeMinutes: 26,
      paragraphs: [
        'Zjawisko CANCEL CULTURE rozpoczęło się od szlachetnej potrzeby pociągania do odpowiedzialności ludzi wpływowych i nietykalnych (jak w ruchu #MeToo). Bardzo szybko jednak zdegenerowało się w patologię cyfrowego linczu.',
        'Psychodynamika cyfrowego stosu przebiega według bezwzględnego schematu: 1) Wycięcie 10 sekund z kontekstu, 2) Eksplozja moralnego oburzenia w mediach społecznościowych, 3) Sygnalizowanie własnej cnoty przez tłum („Patrzcie, jak bardzo potępiam tego łajdaka!”), 4) Masowy nacisk na pracodawców i sponsorów, 5) Wyrzucenie ofiary z pracy w ciągu 24 godzin bez sądu i możliwości obrony.',
        'Tłum sieciowy nie szuka prawdy ani zadośćuczynienia — szuka krwi i dopaminowego upojenia płynącego ze zbiorowej egzekucji.'
      ]
    },

    // 43.14
    {
      id: 'sec-43-14',
      pageNumber: 40,
      sectionNumber: '43.14',
      title: 'Kruchość reputacji: Asymetria zysków i strat w budowaniu zaufania — Zasada Warrena Buffetta',
      category: 'teoria',
      readingTimeMinutes: 24,
      quote: {
        text: 'Zbudowanie reputacji zajmuje dwadzieścia lat, a jej zniszczenie — pięć minut. Jeśli o tym pomyślisz, zaczniesz robić rzeczy zupełnie inaczej.',
        author: 'Warren Buffett',
        source: 'Przemówienie do kadry Berkshire Hathaway, 1991'
      },
      paragraphs: [
        'Maksyma Warrena Buffetta jest najkrótszym i najbardziej brutalnym prawem reputacyjnym w dziejach rynków kapitałowych.',
        'Dlaczego ta asymetria jest tak bezwzględna? Ponieważ ludzki aparat poznawczy traktuje uczciwość jako STANDARD BAZOWY. To, że przez 20 lat nie ukradłeś ani złotówki ze spółki, jest traktowane jako coś oczywistego. Ale wystarczy jeden przypadek kradzieży lub kłamstwa, by mózg odbiorcy uznał: „Aha! Skoro skłamał raz, to znaczy, że przez całe 20 lat był po prostu sprytnym oszustem, którego nie złapano!”.',
        'Zaufanie spada windą, a wchodzi po schodach o kulach.'
      ]
    },

    // 43.15
    {
      id: 'sec-43-15',
      pageNumber: 43,
      sectionNumber: '43.15',
      title: 'Historia wieloetapowa: „Upadek i powolna odbudowa” — Dziesięć lat walki o odzyskanie twarzy po skandalu',
      category: 'studium-przypadku',
      readingTimeMinutes: 28,
      paragraphs: [
        'Krzysztof był cenionym profesorem kardiochirurgii. W wieku 48 lat, pod wpływem alkoholu, spowodował wypadek samochodowy, w którym ranny został motocyklista. Zamiast wezwać pomoc, w panice uciekł z miejsca zdarzenia.',
        'Lincz medialny był totalny. Stracił prawo wykonywania zawodu, klinikę, przyjaciół, żona zażądała rozwodu. Został skazany na 2 lata więzienia w zawieszeniu. Większość ludzi na jego miejscu załamałaby się lub popełniła samobójstwo.',
        'Prześledźmy 10 lat jego drogi powrotnej:',
        'LATA 1–2 (Pokuta w cieniu): Zero wywiadów, zero tłumaczenia się. Krzysztof przeniósł się na prowincję, zatrudnił jako sanitariusz w hospicjum dla terminalnie chorych, gdzie mył podłogi i karmił pacjentów, a całe odszkodowanie i pensję oddawał poszkodowanemu motocykliście.',
        'LATA 3–5 (Cicha praca): Po odzyskaniu prawa wykonywania zawodu nie pchał się do kamer. Operował najtrudniejsze, bezpłatne przypadki w małym szpitalu rejonowym.',
        'LATA 6–10 (Odzyskanie szacunku): Motocyklista, który w pełni wyzdrowiał dzięki rehabilitacji opłaconej przez Krzysztofa, sam opublikował w mediach list: „Ten człowiek popełnił zbrodnię, ale odkupił ją krwią i łzami. Wybaczam mu i dziękuję za życie”. Dopiero wtedy środowisko medyczne na powrót otworzyło przed nim drzwi.',
        'Krzysztof nie odbudował wizerunku przez PR — odbudował duszę przez autentyczną, dziesięcioletnią pokutę.'
      ],
      interactiveWindowRef: {
        id: 'win-43-15-petla-odbudowy',
        title: 'MODUŁ B: Fazy Rozpadu i Odbudowy Dobrego Imienia',
        subtitle: 'Analiza pętli sprzężeń w dziesięcioletniej drodze Krzysztofa',
        context: 'Identyfikacja etapów transformacji od zbrodni do odzyskanego zaufania.',
        type: 'loop',
        takeaway: 'Prawdziwa odbudowa reputacji nie polega na zaprzeczaniu winie, lecz na przyjęciu pełnej kary i długofalowej służbie wspólnocie.',
        loopSteps: [
          {
            step: 1,
            title: 'Zbrodnia i ucieczka',
            actor: 'Krzysztof',
            action: 'Spowodowanie wypadku pod wpływem alkoholu i paniczna ucieczka.',
            interpretationByOther: '„Bezduszny hipokryta, który ratuje serca, a niszczy ludzi na drodze”.',
            emotionalTrigger: 'Powszechny gniew moralny i lincz medialny.',
            counterAction: 'Całkowita utrata tytułów i statusu.'
          },
          {
            step: 2,
            title: 'Odmowa walki medialnej',
            actor: 'Krzysztof',
            action: 'Rezygnacja z adwokatów PR, przyznanie się do winy w sądzie i praca w hospicjum.',
            interpretationByOther: '„Zniknął z radaru, nie pyszczy się”.',
            emotionalTrigger: 'Stopniowe wygaszanie furii tłumu na korzyść obojętności.',
            counterAction: 'Początek procesu realnego zadośćuczynienia motocykliście.'
          },
          {
            step: 3,
            title: 'Świadectwo ofiary',
            actor: 'Poszkodowany motocyklista',
            action: 'Publiczne wybaczenie i ujawnienie lat bezinteresownej pomocy lekarza.',
            interpretationByOther: '„Ten człowiek naprawdę przeszedł głęboką przemianę wewnętrzną”.',
            emotionalTrigger: 'Wzruszenie, szacunek i odzyskanie autorytetu.',
            counterAction: 'Powrót do trudnych operacji z nową, pokorną tożsamością.'
          }
        ]
      }
    },

    // 43.16
    {
      id: 'sec-43-16',
      pageNumber: 46,
      sectionNumber: '43.16',
      title: 'Zarządzanie reputacją: Czy to etyczne? Granica między przejrzystością a fałszerstwem biografii',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Czy dbałość o własną reputację jest czymś złym? Absolutnie nie. Każdy dojrzały człowiek ma prawo i obowiązek chronić swoje dobre imię przed pomówieniami i dbać o to, by jego intencje były czytelne dla otoczenia.',
        'Granica etyczna leży pomiędzy dwoma podejściami:',
        '- ETYCZNE ZARZĄDZANIE REPUTACJĄ: Dbanie o to, by prawda o twojej pracy i wartościach docierała do ludzi bez zniekształceń; korygowanie fałszywych plotek; jawne komunikowanie trudności.',
        '- PATOLOGICZNA MANIPULACJA WIZERUNKIEM: Przekupywanie dziennikarzy, kupowanie botów w mediach społecznościowych, usuwanie niewygodnych komentarzy klientów i tworzenie fałszywych biografii w celu ukrycia rzeczywistych oszustw.'
      ]
    },

    // 43.17
    {
      id: 'sec-43-17',
      pageNumber: 49,
      sectionNumber: '43.17',
      title: 'Etiologia kryzysu reputacyjnego: Anatomia zaprzeczenia, arogancji i efektu Streisand',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Kiedy wybucha kryzys wizerunkowy, większość niedojrzałych liderów popełnia trzy klasyczne błędy pogłębiające katastrofę:',
        '1. ZAPRZECZENIE W ŻYWE OCZY: Wmawianie opinii publicznej, że białe jest czarne, mimo że wszyscy widzą nagranie wideo.',
        '2. ATROFIA EMPATII: Skupienie się na własnych stratach finansowych zamiast na bólu i krzywdzie ofiar.',
        '3. EFEKT STREISAND (The Streisand Effect): Zjawisko nazwane na cześć Barbary Streisand, która w 2003 roku pozwała fotografa za opublikowanie zdjęcia jej willi na klifie w Kalifornii (zdjęcie pobrało wcześniej 6 osób). W wyniku pozwu zdjęcie w ciągu tygodnia obejrzało 420 tysięcy internautów!',
        'Próba cenzury i agresywnego tłumienia prawdy za pomocą pozwów sądowych działa jak dolanie kanistra benzyny do gasnącego ogniska.'
      ]
    },

    // 43.18
    {
      id: 'sec-43-18',
      pageNumber: 52,
      sectionNumber: '43.18',
      title: 'Odbudowa reputacji: Anatomia prawdziwych przeprosin kontra fałszywe oświadczenia PR (Non-Apology Apology)',
      category: 'teoria',
      readingTimeMinutes: 26,
      quote: {
        text: 'Prawdziwe przeprosiny nie służą temu, byś ty poczuł się lepiej. Służą temu, by uznać ból osoby skrzywdzonej i przyjąć na siebie pełny koszt naprawy szkody. Słowa „przepraszam, jeśli ktoś poczuł się urażony” to nie przeprosiny — to ponowna zniewaga.',
        author: 'Dr Harriet Lerner',
        source: 'The Menninger Clinic, „Why Won’t You Apologize?”, Touchstone, 2017'
      },
      paragraphs: [
        'Większość oświadczeń kryzysowych publikowanych przez korporacje i celebrytów to tzw. PRZEPROSINY WARUNKOWE (Non-Apology Apology): „Przepraszam wszystkich, którzy mogli poczuć się urażeni moimi słowami wyrwanymi z kontekstu”.',
        'Taki komunikat jest toksyczny, ponieważ przerzuca winę na ofiarę: to nie ja zrobiłem coś złego, to ty jesteś „przewrażliwiony i źle zrozumiałeś”.',
        'SZEŚĆ KROKÓW ETYCZNYCH PRZEPROSIN (Model Roya Lewickiego):',
        '1. Wyrażenie żalu („Bardzo mi przykro, cierpię z powodu tego, co się stało”).',
        '2. Jasne wyjaśnienie błędu bez wybielania się („Zrobiłem to z pychy i pośpiechu”).',
        '3. PEŁNE PRZYJĘCIE ODPOWIEDZIALNOŚCI („Wina leży wyłącznie po mojej stronie”).',
        '4. Deklaracja skruchy („Nigdy więcej tego nie powtórzę”).',
        '5. OFERTA ZADOŚĆUCZYNIENIA I NAPRAWY („Oto jak pokryję straty”).',
        '6. Prośba o wybaczenie bez roszczeniowości („Wiem, że potrzebujecie czasu, by mi zaufać”).'
      ]
    },

    // 43.19
    {
      id: 'sec-43-19',
      pageNumber: 55,
      sectionNumber: '43.19',
      title: 'Badania nad przebaczeniem społecznym: Kiedy wspólnota wybacza upadek, a kiedy pieczętuje infamię',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Badania psychologii moralnej (Kurt Gray, Jonathan Haidt) ujawniają kryteria, według których opinia publiczna decyduje o ułaskawieniu lub potępieniu upadłego lidera:',
        '- CZY BŁĄD DOTYCZYŁ KOMPETENCJI CZY MORALNOŚCI? Pomyłkę inżynierską czy złą decyzję biznesową ludzie wybaczają łatwo. Złamanie tabu moralnego (kradzież, zdrada, przemoc wobec dzieci) budzi trwałą odrazę wstrętu somatycznego, którą niezwykle trudno zneutralizować.',
        '- CZY SKRUCHA BYŁA DROGA CZY TANIA? Ludzie gardzą łzami w telewizji, jeśli za nimi nie idzie realna rezygnacja z przywilejów i majątku. Szacunek budzi ten, kto sam zrzeka się fotela i oddaje pieniądze.'
      ]
    },

    // 43.20
    {
      id: 'sec-43-20',
      pageNumber: 58,
      sectionNumber: '43.20',
      title: 'Kontrprzypadek I: Znakomity, perfekcyjny wizerunek w mediach — i całkowity brak reputacji w branży',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Klasycznym kontrprzypadkiem są tzw. „gwiazdy LinkedIna” i medialni guru biznesu. Na profilach społecznościowych mają 200 tysięcy fanów, publikują profesjonalne rolki wideo o przywództwie i cytują Sun Tzu.',
        'Kiedy jednak zapytasz o nich w środowisku przedsiębiorców z ich branży, napotkasz wymowne uśmiechy i ostrzeżenia: „Z nim nie podpisuj żadnej umowy, zostawia za sobą zgliszcza i niepłacone faktury”. Pusty wizerunek bez pokrycia w faktach to wydmuszka, która pęka przy pierwszej transakcji.'
      ]
    },

    // 43.21
    {
      id: 'sec-43-21',
      pageNumber: 60,
      sectionNumber: '43.21',
      title: 'Kontrprzypadek II: Zerowy wizerunek publiczny — i żelazna, legendarna reputacja w wąskim kręgu ekspertów',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Z drugiej strony spotykamy ludzi, którzy nie mają konta na Facebooku, nie udzielają wywiadów i chodzą w starym swetrze. To wybitni architekci baz danych, niszowi kardiochirurdzy, rzemieślnicy unikalnych instrumentów.',
        'Wielki świat o nich nie słyszał, ale w ich wąskim gronie ich słowo jest warte miliony. Kiedy taki ekspert powie: „Ten most runie” — inwestorzy wstrzymują budowę. Prawdziwa reputacja merytoryczna nie potrzebuje billboardów.'
      ]
    },

    // 43.22
    {
      id: 'sec-43-22',
      pageNumber: 62,
      sectionNumber: '43.22',
      title: 'Historia: „Odmowa gry wizerunkowej” — Zwycięstwo milczącej prawości nad medialnym szumem',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Gdy w spółce farmaceutycznej wybuchł kryzys wokół wadliwej partii leku na nadciśnienie, prezes zarządu żądał zatuszowania sprawy i zatrudnienia drogiej agencji PR, by „uciszyć dziennikarzy”.',
        'Główna technolog jakości, dr Maria, odmówiła udziału w tej grze. Nie poszła do mediów, nie zrobiła skandalu. Położyła na biurku prezesa pismo: „Wycofujemy partię z aptek w ciągu 24 godzin na mój wniosek, albo natychmiast zawiadamiam Główny Inspektorat Farmaceutyczny i składam dymisję”. Spółka straciła 10 milionów złotych na utylizacji leku, a prezes zwolnił Marię za „brak lojalności korporacyjnej”.',
        'Przez rok Maria była bez pracy. Kiedy jednak szwajcarski koncern biotechnologiczny otwierał w Polsce centrum badawcze i szukał dyrektora ds. bezpieczeństwa klinicznego, szef rekrutacji powiedział jej na rozmowie: „Wiemy dokładnie, dlaczego odeszła pani z poprzedniej firmy. Szukamy człowieka, który wolał stracić pracę niż narazić życie pacjentów. Oferujemy pani podwójną stawkę”.',
        'Prawość Marii była jej najpotężniejszą polisą ubezpieczeniową.'
      ]
    },

    // 43.23
    {
      id: 'sec-43-23',
      pageNumber: 64,
      sectionNumber: '43.23',
      title: 'Człowiek pod mikroskopem: Sekwencja reputacyjna — Czyn, interpretacja, plotka i utrwalenie tożsamości',
      category: 'studium-przypadku',
      readingTimeMinutes: 28,
      paragraphs: [
        'Rozłóżmy pod mikroskopem pełny proces krystalizacji reputacji w sieci społecznej:',
        'CZYN JEDNOSTKI W KRYZYSIE → PIERWSZA INTERPRETACJA PRZEZ ŚWIADKÓW → WŁĄCZENIE DO NIEFORMALNEGO OBIEGU PLOTKI (Grooming) → KONDENSACJA OPINII W ETYKIETĘ REPUTACYJNĄ („Niezawodny” vs „Kanciarz”) → TEST SPOŁECZNY W KOLEJNEJ PRÓBIE → ZAMKNIĘCIE PĘTLI TOŻSAMOŚCI.',
        'Poniższy moduł analityczny bada mechanizm degradacji i ochrony dobrego imienia.'
      ],
      interactiveWindowRef: {
        id: 'win-43-23-mikroskop-reputacji',
        title: 'CZŁOWIEK POD MIKROSKOPEM: Anatomia Społecznego Osądu',
        subtitle: 'Dekonstrukcja procesu etykietowania dr Marii w kryzysie farmaceutycznym',
        context: 'Konfrontacja nacisku zarządu z suwerennym wyborem etycznym inspektora jakości.',
        type: 'microscope',
        takeaway: 'Etykieta reputacyjna nadana ci przez zdeprawowaną grupę („nielojalny”) jest twoim najwyższym medalem w oczach ludzi prawych.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: '1. WYBÓR W CIENIU',
            question: 'Przed jakim dylematem stanęła dr Maria?',
            content: 'Zatuszowanie wady leku gwarantowało premię roczną i spokój; ujawnienie oznaczało natychmiastowe wyrzucenie z pracy.',
            subtext: 'Konfrontacja doraźnego zysku materialnego z długofalową tożsamością moralną.'
          },
          {
            stepNumber: 2,
            label: '2. PIĘTNO KORPORACYJNE',
            question: 'Jak zdefiniował jej czyn zarząd?',
            content: 'Została określona jako „histeryczka niszcząca budżet firmy” i wyrzucona z wilczym biletem.',
            subtext: 'Obronne zniekształcenie faktów przez sprawców w celu ochrony własnego ego.'
          },
          {
            stepNumber: 3,
            label: '3. METASTABILNOŚĆ PRAWDY',
            question: 'Jak zareagował rynek w perspektywie długiej?',
            content: 'Prawda o wadzie leku wyszła na jaw w badaniach niezależnych. Spółka stanęła przed sądem, a Maria zyskała legendarną reputację nieskazitelnego eksperta.',
            subtext: 'Zwycięstwo kapitału prawdy nad doraźną machinacją.'
          }
        ]
      }
    },

    // 43.24
    {
      id: 'sec-43-24',
      pageNumber: 67,
      sectionNumber: '43.24',
      title: 'Jak budować niezniszczalny kapitał dobrego imienia? Spójność kulis ze sceną i pokora wobec faktów',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Jak zbudować reputację, która przetrwa największe burze i ataki złośliwych konkurentów? Wdróż PROTOKÓŁ CZTERECH FILARÓW:',
        '1. ZMNIEJSZAJ ROZDŹWIĘK MIĘDZY KULISAMI A SCENĄ: Żyj tak, byś nie musiał bać się, że ktoś opublikuje nagranie z twojej kuchni czy prywatnego telefonu. Kiedy twoje zachowanie w ciemności jest takie samo jak w świetle jupiterów — jesteś wolny od lęku.',
        '2. TRAKTUJ NAJSŁABSZYCH Z NAJWYŻSZYM SZACUNKIEM: O twojej prawdziwej klasie nie decyduje to, jak kłaniasz się prezesowi. Decyduje to, jak rozmawiasz z kelnerem, sprzątaczką i młodym stażystą.',
        '3. DOTRZYMUJ NIEPISANYCH UMÓW: Prawdziwy kapitał reputacyjny powstaje wtedy, gdy dotrzymujesz słowa danego w cztery oczy, nawet gdy okoliczności zmieniły się na twoją niekorzyść i nikt nie mógłby cię pozwać do sądu.',
        '4. BĄDŹ PIERWSZYM, KTÓRY UJAWNIA WŁASNY BŁĄD: Kiedy zawalisz projekt — nie czekaj, aż ktoś to odkryje. Przyjdź do klienta lub zespołu jako pierwszy: „Popełniłem błąd, oto plan naprawy na mój koszt”. Taka postawa natychmiast rozbraja agresję i buduje granitowy szacunek.'
      ]
    },

    // 43.25
    {
      id: 'sec-43-25',
      pageNumber: 70,
      sectionNumber: '43.25',
      title: 'WIELKA SYNTEZA BLOKU WPŁYWU, WŁADZY I POZYCJI SPOŁECZNEJ (Rozdziały 39–43)',
      category: 'podsumowanie',
      readingTimeMinutes: 28,
      paragraphs: [
        'Zatrzymajmy się w tym miejscu i spójrzmy wstecz na monumentalną drogę, jaką przebyliśmy w rozdziałach 39–43 Tomu III.',
        'Prześledźmy organiczny, nieprzerwany łańcuch ewolucji społecznej człowieka:',
        'STATUS I POZYCJA SPOŁECZNA (Rozdział 38) wyznaczyły punkt wyjścia: pokazały, jak hierarchia porządkuje stado i rodzi asymetrię możliwości.',
        'PERSWAZJA (Rozdział 39) ukazała szlachetny, transparentny proces wymiany racji i aktualizacji modeli mentalnych w poszanowaniu wolnej woli odbiorcy.',
        'MANIPULACJA (Rozdział 40) odsłoniła cień wpływu: podstępne zniekształcanie pola informacyjnego, grę na poczuciu winy, lęku i zależności w celu odebrania człowiekowi kontroli nad własnym losem.',
        'WŁADZA I KONTROLA (Rozdział 41) wprowadziły nas w anatomię zależności zasobowej, ukazując, jak kontrola nad nagrodami i karami zmienia mózg decydenta i jak łatwo rodzi pychę Hubris.',
        'AUTORYTET I POSŁUSZEŃSTWO (Rozdział 42) wyjaśniły tajemnicę dobrowolnego uznania mądrości drugiego człowieka oraz wstrząsające niebezpieczeństwo wejścia w stan agentalny, gdy rozkaz autorytetu gasi sumienie.',
        'Wreszcie REPUTACJA I TOŻSAMOŚĆ SPOŁECZNA (Rozdział 43) zamknęły ten krąg, ukazując, że ostatecznym sędzią każdego człowieka jest pamięć wspólnoty i wierność własnemu człowieczeństwu.',
        'Wpływ społeczny nie jest mechanizmem laboratoryjnym: A robi coś → B reaguje. To dynamiczny taniec sprzężeń zwrotnych, w którym każdy nasz gest przekształca pole relacji. Prawdziwa mądrość nie polega na zdobyciu władzy nad innymi — polega na zdobyciu panowania nad samym sobą, na szacunku dla cudzej wolności i na budowaniu świata, w którym zaufanie jest silniejsze niż strach.',
        'Tym samym dobiega końca Wersja Rozszerzona Bloku Wpływu, Władzy i Pozycji Społecznej (Rozdziały 39–43 Tomu III).'
      ]
    }
  ]
};
