import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 25 (GLOBALNIE ROZDZIAŁ 41 W STRUKTURZE DZIEŁA)
 * TYTUŁ: WŁADZA I KONTROLA
 * PODTYTUŁ: Co sprawia, że jedna osoba może w większym stopniu wpływać na decyzje, możliwości i zachowania innych
 */

export const chapterFortyOneExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Dlaczego w socjologii relacyjnej (Emerson, Blau) władzę definiuje się jako właściwość relacji, a nie cechę osoby?',
    topic: 'Relacyjna Natura Władzy',
    sectionRef: 'Sekcja 41.1 & 41.2',
    options: [
      { label: 'A', text: 'Ponieważ zakres władzy osoby A nad osobą B zależy bezpośrednio od tego, jak bardzo osoba B potrzebuje zasobów kontrolowanych przez A i czy posiada realne źródła alternatywne (BATNA).', isCorrect: true },
      { label: 'B', text: 'Ponieważ władza zależy wyłącznie od wzrostu i tembru głosu lidera.', isCorrect: false },
      { label: 'C', text: 'Gdyż władza formalna zawsze automatycznie gwarantuje 100% posłuchu.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy — władza jest wrodzonym genem dominacji.', isCorrect: false }
    ],
    explanation: 'Władza znika w chwili, gdy druga strona przestaje zależeć od naszych nagród lub kar. Lider bez zależności podwładnych jest generałem bez armii.',
    keyTakeaway: 'Twoja władza nad drugim człowiekiem sięga dokładnie tak daleko, jak daleko sięga jego zależność od ciebie.'
  },
  {
    id: 2,
    question: 'Czym różni się władza formalna (potestas) od władzy nieformalnej (auctoritas / wpływ rzeczywisty)?',
    topic: 'Władza Formalna a Nieformalna',
    sectionRef: 'Sekcja 41.3 & 41.4',
    options: [
      { label: 'A', text: 'Władza formalna wynika ze stanowiska zapisanego w schemacie organizacyjnym, podczas gdy władza nieformalna rodzi się z kontroli nad obiegiem informacji, zaufania zespołu i pozycji w sieci relacji.', isCorrect: true },
      { label: 'B', text: 'Władzę nieformalną posiadają wyłącznie przestępcy.', isCorrect: false },
      { label: 'C', text: 'Władza formalna nigdy nie pozwala na podejmowanie decyzji finansowych.', isCorrect: false },
      { label: 'D', text: 'Władza nieformalna jest całkowicie zakazana przez prawo pracy.', isCorrect: false }
    ],
    explanation: 'Nowy dyrektor może mieć pełną władzę formalną, lecz jeśli kluczowa asystentka lub główny inżynier cieszą się zaufaniem załogi, to oni kontrolują realny bieg procesów w firmie.',
    keyTakeaway: 'Pieczątka daje prawo do wydawania poleceń; szacunek i kontrola zasobów decydują o tym, czy ktokolwiek je wykona.'
  },
  {
    id: 3,
    question: 'W jaki sposób zgodnie z Teorią Dążenia i Zahamowania (Keltner) wysoka władza wpływa na percepcję społeczną decydenta?',
    topic: 'Neurobiologia i Poznawcze Skutki Władzy',
    sectionRef: 'Sekcja 41.13',
    options: [
      { label: 'A', text: 'Aktywuje Behawioralny System Dążenia (BAS), co wyostrza uwagę na celach i nagrodach, lecz jednocześnie osłabia zdolność do przyjmowania perspektywy innych ludzi (mentalizacji).', isCorrect: true },
      { label: 'B', text: 'Wywołuje natychmiastową utratę wzroku i słuchu.', isCorrect: false },
      { label: 'C', text: 'Sprawia, że człowiek staje się nadmiernie ostrożny i przestaje podejmować jakiekolwiek decyzje.', isCorrect: false },
      { label: 'D', text: 'Automatycznie zwiększa empatię wobec osób słabszych o 300%.', isCorrect: false }
    ],
    explanation: 'Władza działa jak poznawczy anestetyk: redukuje szum emocjonalny pochodzący od podwładnych, by ułatwić sprawne parcie do celu, co rodzi ryzyko znieczulicy moralnej.',
    keyTakeaway: 'Władza ułatwia działanie, ale oślepia na subtelne sygnały bólu i protestu otoczenia.'
  },
  {
    id: 4,
    question: 'Dlaczego organizacje, w których panuje kultura braku sprzeciwu (brak bezpiecznej informacji zwrotnej), popełniają katastrofalne błędy strategiczne?',
    topic: 'Pętla Sprzężenia Zwrotnego i Ślepota Władzy',
    sectionRef: 'Sekcja 41.16 & 41.17',
    options: [
      { label: 'A', text: 'Ponieważ liderzy zostają odcięci od danych korygujących błędy predykcji; podwładni z lęku przed sankcją filtrują złe wiadomości, tworząc wokół szefa fałszywą bańkę sukcesu.', isCorrect: true },
      { label: 'B', text: 'Ponieważ komputery w takich firmach psują się dwukrotnie szybciej.', isCorrect: false },
      { label: 'C', text: 'Gdyż klienci natychmiast wycofują 100% zamówień przez telefon.', isCorrect: false },
      { label: 'D', text: 'Świadczy to wyłącznie o braku wykształcenia pracowników niższego szczebla.', isCorrect: false }
    ],
    explanation: 'Gdy za przyniesienie złych wieści „zabija się posłańca”, posłańcy zaczynają przynosić wyłącznie laurki. Lider podejmuje decyzje w oparciu o halucynację, aż do zderzenia z twardą ścianą rynku.',
    keyTakeaway: 'Prawdziwa siła lidera nie polega na uciszaniu krytyków, lecz na ochronie ludzi, którzy mają odwagę powiedzieć: „Szefie, to nie zadziała”.'
  }
];

export const chapterFortyOneCaseStudies: CaseStudy[] = [
  {
    id: 'cs-41-1-nowy-dyrektor-fabryki',
    title: 'Studium Przypadku: Zderzenie Pieczątki z Autorytetem Brygadzisty',
    context: 'Zakład produkcji podzespołów motoryzacyjnych w Wielkopolsce. Nowy dyrektor operacyjny Adam (34 lata, MBA, doświadczenie w korporacjach consultingowych) i mistrz produkcji pan Staszek (58 lat, 32 lata w tej samej fabryce).',
    characters: [
      { name: 'Adam', role: 'Dyrektor operacyjny', personality: 'Nastawiony na procedury, wskaźniki KPI, wykresy Gantta, niecierpliwy.' },
      { name: 'Pan Staszek', role: 'Główny brygadzista', personality: 'Cichy autorytet załogi, zna każdą śrubę w zabytkowych prasach hydraulicznych, darzony bezwzględnym szacunkiem robotników.' }
    ],
    dilemma: 'Co się dzieje, gdy władza formalna próbuje siłowo złamać nieformalną sieć lojalności i wiedzy rzemieślniczej?',
    timeline: [
      { time: 'Miesiąc 1', event: 'Adam wprowadza nowy system rejestracji czasu pracy co do minuty i nakazuje reorganizację gniazd produkcyjnych bez konsultacji ze Staszkiem.' },
      { time: 'Miesiąc 2', event: 'Staszek na zebraniu mówi spokojnie: „Panie dyrektorze, te matryce na trzeciej linii przy takim ustawieniu będą pękać od wibracji”. Adam odpowiada ostro: „Od inżynierii procesowej są wykształceni specjaliści, pan ma pilnować dyscypliny”.' },
      { time: 'Miesiąc 3', event: 'Staszek wzrusza ramionami i przechodzi w tryb „strajku włoskiego” (wykonuje wyłącznie dosłowne polecenia Adama). Trzecia linia pęka, zakład staje na 5 dni, a kary umowne dla niemieckiego odbiorcy sięgają 800 tysięcy euro.' },
      { time: 'Miesiąc 4', event: 'Zarząd wzywa Adama na dywanik. Adam zdaje sobie sprawę, że pan Staszek posiadał władzę, której nie da się kupić dekretem — władzę wiedzy milczącej i bezwzględnego posłuchu ludzi.' }
    ],
    psychologicalDynamics: {
      cognitiveBiases: [
        { biasName: 'Złudzenie Władzy Formalnej (Illusion of Positional Control)', manifestation: 'Adam sądził, że podpis na umowie o pracę daje mu realną kontrolę nad fizyką maszyn i ludzkim zaangażowaniem.' },
        { biasName: 'Pycha Hierarchiczna (Hubris)', manifestation: 'Odrzucenie 30 lat doświadczenia robotnika z powodu braku dyplomu politechniki.' }
      ],
      emotionalStates: [
        { trigger: 'Publiczne upokorzenie mistrza produkcji', emotion: 'Poczucie braku szacunku i zimna kalkulacja odwetu u pana Staszka.' }
      ],
      neurotransmitters: [
        { name: 'Testosteron i Kortyzol', roleInScenario: 'U Adama: zaślepienie dążeniem do dominacji statusowej, tłumiące analityczną ocenę ryzyka technicznego.' }
      ],
      biologicalTimeline: [
        { timeMs: '0-300 ms', process: 'Reakcja obronna na uwagę brygadzisty jako na zagrożenie pozycji w hierarchii.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Władza przymusu i prawomocna (Adam)', description: 'Egzekwowanie posłuszeństwa za pomocą kar regulaminowych.', vulnerabilityExploited: 'Brak — taktyka doprowadziła do katastrofy produkcyjnej.' },
        { tactic: 'Wycofanie wiedzy milczącej (Staszek)', description: 'Pozwolenie nowemu szefowi na popełnienie zapowiedzianego błędu w imię litery prawa.', vulnerabilityExploited: 'Arogancja i brak pokory dyrektora.' }
      ],
      counterMeasures: [
        { step: 'Kojarzenie władzy formalnej z ekspercką', script: '„Panie Staszku, mam cele z zarządu, ale to pan wie, jak oddycha ta fabryka. Zaprojektujmy to razem”.', rationale: 'Zamienia opór w koalicję kompetencji.' }
      ]
    },
    keyTakeaway: 'Możesz kupić czas człowieka i ruchy jego rąk, ale jego uwagi, sprytu i lojalności nie wymusisz żadnym paragrafem regulaminu.'
  }
];

export const chapterFortyOneExercises: SelfExercise[] = [
  {
    id: 'ex-41-mapa-zaleznosci',
    title: 'Audyt Własnej Sieci Władzy i Zależności: Gdzie Sięgają Twoje Alternatywy?',
    subtitle: 'Narzędzie dekonstrukcji relacji zależności w pracy i życiu prywatnym',
    objective: 'Zidentyfikowanie asymetrii sił, które czynią cię bezbronnym, oraz obszarów, w których nieświadomie nadużywasz kontroli nad innymi.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Przejście od lękowego reagowania na władzę do analitycznego mapowania zasobów angażuje lewą grzbietowo-boczną korę przedczołową.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identyfikacja Asymetrii Zależności',
        instruction: 'Wskaż osobę w twoim otoczeniu zawodowym lub osobistym, która ma nad tobą największy wpływ. Od jakiego jej zasobu zależy twoje bezpieczeństwo?',
        promptText: 'Co sprawia, że czujesz się przy niej bezbronny lub nie możesz odmówić?',
        placeholder: 'Np. Mój szef kontroluje premię roczną, a ja mam kredyt hipoteczny i brak oszczędności na koncie...'
      },
      {
        stepNumber: 2,
        title: 'Budowanie Własnej BATNA',
        instruction: 'Jaki jeden krok możesz podjąć w ciągu najbliższego miesiąca, by zmniejszyć tę zależność i odzyskać równowagę psychologiczną?',
        promptText: 'Jakie alternatywne źródło zasobów możesz zacząć rozwijać?',
        placeholder: 'Np. Zbudować poduszkę finansową na 3 miesiące życia i odświeżyć profil na rynku pracy...'
      }
    ],
    reflectionQuestions: [
      'Czy w jakiejś relacji wykorzystujesz cudzą bezradność finansową lub emocjonalną, by narzucać swoją wolę?',
      'Jaka jest różnica między kierowaniem zespołem a obsesyjną mikrokontrolą każdego kroku?'
    ]
  }
];

export const chapterFortyOne: Chapter = {
  number: 41,
  volume: 3,
  volumeChapterNumber: 25,
  title: 'Władza i Kontrola',
  subtitle: 'Co sprawia, że jedna osoba może w większym stopniu wpływać na decyzje, możliwości i zachowania innych',
  leadParagraph: `Władza nie jest marmurowym posągiem ani wrodzonym darem niebios. To dynamiczna sieć naczyń połączonych: asymetryczna kontrola nad tym, czego inni pragną lub czego się boją. Kiedy zyskujesz władzę, zmienia się nie tylko twoje otoczenie — zmienia się przede wszystkim chemia twojego własnego mózgu. Zrozumienie anatomii władzy to odkrycie, dlaczego formalne stanowisko bywa bezsilne bez nieformalnego zaufania, dlaczego brak sprzeciwu jest zwiastunem katastrofy i jak zachować człowieczeństwo w cieniu hierarchii.`,
  totalEstimatedPages: 65,
  sections: [
    // 41.1
    {
      id: 'sec-41-1',
      pageNumber: 1,
      sectionNumber: '41.1',
      title: 'Podstawowe pojęcia: Władza, wpływ, kontrola, autorytet i dominacja — Precyzyjna siatka pojęciowa',
      category: 'teoria',
      readingTimeMinutes: 24,
      quote: {
        text: 'Władza jest możliwością narzucenia własnej woli w ramach relacji społecznej, nawet wbrew oporowi innych, bez względu na to, na czym ta możliwość się opiera.',
        author: 'Prof. Max Weber',
        source: 'Uniwersytet w Heidelbergu, „Wirtschaft und Gesellschaft”, J.C.B. Mohr, 1922'
      },
      paragraphs: [
        'W naukach społecznych pojęcia władzy, kontroli, autorytetu i dominacji bywają bezrefleksyjnie wrzucane do jednego worka. Prowadzi to do głębokiego zamętu diagnostycznego. Zbudujmy precyzyjną siatkę pojęciową:',
        '1. WPŁYW (Influence): Najszersze pojęcie. Zdolność jednostki A do wywołania zmiany w stanach psychicznych lub zachowaniu jednostki B (może być mimowolny, perswazyjny, emocjonalny).',
        '2. WŁADZA (Power): Potencjał strukturalny. Zdolność do określania opcji wyboru innych ludzi i egzekwowania posłuszeństwa dzięki asymetrycznej kontroli nad cennymi zasobami lub karami.',
        '3. KONTROLA (Control): Realne, bieżące sprawdzanie i sterowanie procesem lub zachowaniem w czasie rzeczywistym. Władzę można posiadać bez sprawowania kontroli każdego dnia.',
        '4. AUTORYTET (Authority): Prawomocna, społecznie uznana i uszanowana władza, w której podwładni podporządkowują się dobrowolnie, uznając moralne lub merytoryczne prawo zwierzchnika do kierowania (Rozdział 42).',
        '5. DOMINACJA (Dominance): Behawioralny wzorzec zachowań asertywno-agresywnych (mowa ciała, ton głosu, naruszanie przestrzeni), służący wymuszeniu pierwszeństwa w stadzie drogą zastraszenia.'
      ],
      subsections: [
        {
          id: 'sub-41-1-1',
          title: 'Analiza słów prof. Maxa Webera: Trzy Typy Prawomocnego Panowania',
          content: [
            'Max Weber w swoim klasycznym dziele podzielił legitymizację władzy na trzy fundamentalne źródła: 1) Tradycyjne (wiara w świętość odwiecznych porządków — monarchia, klan), 2) Charyzmatyczne (wiara w niezwykłe, heroiczne cechy jednostki — prorok, wódz rewolucji), 3) Racjonalno-legalne (wiara w legalność stanowionego prawa i kompetencję formalnych urzędów).',
            'Nowoczesne organizacje opierają się na porządku racjonalno-legalnym, ale w chwilach kryzysu ludzie instynktownie cofają się do poszukiwania przywódców charyzmatycznych, co otwiera wrota dla populizmu i autorytaryzmu.'
          ],
          highlightBox: {
            title: 'Wgląd Socjologiczny: Kruchość Charyzmy',
            content: 'Władza charyzmatyczna jest najbardziej porywająca, ale i najbardziej niestabilna. Wymaga nieustannego potwierdzania „cudami” i sukcesami; gdy pojawia się seria porażek, charyzma wyparowuje w ciągu kilku tygodni.',
            type: 'insight'
          }
        }
      ]
    },

    // 41.2
    {
      id: 'sec-41-2',
      pageNumber: 4,
      sectionNumber: '41.2',
      title: 'Relacyjna natura władzy: Teoria Emersona — Władza jako funkcja zależności i braku alternatyw',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Najważniejszą lekcją współczesnej psychologii władzy jest porzucenie złudzenia, że władza jest „czymś, co wódz nosi w teczce”. Władza rodzi się z ZALEŻNOŚCI.',
        'W klasycznej teorii Richarda Emersona (Power-Dependence Theory):',
        'Władza A nad B = Zależność B od A.',
        'A od czego zależy owa zależność? Od dwóch zmiennych: 1) Jak wielka jest wartość dóbr, które A kontroluje dla B (Motywacja), 2) Ile B ma ALTERNATYWNYCH źródeł zaspokojenia tej potrzeby poza osobą A (Dostępność alternatyw — BATNA).',
        'Z tego wynika rewolucyjny wniosek: jeśli chcesz odzyskać wolność w relacji z despotycznym pracodawcą lub kontrolującym partnerem, nie musisz błagać go o łaskę. Musisz ZWIĘKSZYĆ SWOJE ALTERNATYWY: zdobyć nowe kwalifikacje, zaoszczędzić fundusz bezpieczeństwa, odbudować sieć przyjaciół. W chwili, gdy masz dokąd pójść, władza despoty pęka jak bańka mydlana.'
      ]
    },

    // 41.3
    {
      id: 'sec-41-3',
      pageNumber: 7,
      sectionNumber: '41.3',
      title: 'Władza formalna a nieformalna: Kiedy pieczątka na papierze zderza się z cichą hierarchią stada',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'W każdej ludzkiej instytucji (od korporacji po wojsko, szpital i rodzinę) funkcjonują równolegle dwa porządki:',
        'ORGANIGRAM FORMALNY: Linie podległości, stanowiska, taryfikatory płac, oficjalne procedury. Wyznacza on władzę z nadania (De Iure).',
        'SIECI NIEFORMALNE: Rzeczywisty przepływ zaufania, plotek, sympatii, wzajemnych przysług i lojalności. Wyznacza on władzę rzeczywistą (De Facto).',
        'Doświadczony lider wie, że ignorowanie liderów nieformalnych (szarej eminencji, najstarszego pracownika, powszechnie lubianej księgowej) to recepta na katastrofę. Lider formalny może podpisać zarządzenie, ale to liderzy nieformalni decydują o tym, z jakim entuzjazmem lub z jakim złośliwym opóźnieniem owo zarządzenie wejdzie w życie.'
      ]
    },

    // 41.4
    {
      id: 'sec-41-4',
      pageNumber: 10,
      sectionNumber: '41.4',
      title: 'Historia: „Stanowisko nie wystarczy” — Porażka młodego menedżera ignorującego nieformalną strukturę',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Doświadczył tego spektakularnie Łukasz — 30-letni absolwent prestiżowej uczelni, mianowany kierownikiem działu handlowego w tradycyjnej hurtowni budowlanej. Łukasz zaczął od rewolucji: rozesłał maile z nowymi procedurami raportowania co do godziny.',
        'W dziale od 20 lat pracowała pani Grażyna — formalnie starsza fakturzystka, a nieformalnie „matka chrzestna” wszystkich handlowców. Grażyna znała osobiście każdego klienta, chrzciła dzieci magazynierów i parzyła herbatę dyrektorowi generalnemu.',
        'Łukasz na pierwszym zebraniu publicznie skarcił Grażynę za to, że nie wpisała faktury do nowego systemu CRM. Grażyna zamilkła, skinęła głową. Następnego dnia w firmie wybuchł paraliż: handlowcy przestali zgłaszać zamówienia, kierowcy nie wiedzieli, dokąd jechać, a kluczowi hurtownicy zaczęli dzwonić z pretensjami. Grażyna po prostu „przestała korygować błędy z własnej inicjatywy”.',
        'Łukasz zrozumiał swój błąd po miesiącu strat. Kupił bukiet kwiatów, wszedł do pokoju fakturzystki i powiedział: „Pani Grażyno, przepraszam. Bez pani wiedzy ten dział nie istnieje. Jak możemy to poukładać?”. Dopiero sojusz z nieformalnym sercem biura dał mu realną władzę.'
      ]
    },

    // 41.5
    {
      id: 'sec-41-5',
      pageNumber: 13,
      sectionNumber: '41.5',
      title: 'Źródła władzy I: Kontrola zasobów materialnych — Pieniądze, infrastruktura i narzędzia pracy',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Najbardziej widoczną bazą władzy jest monopol na zasoby materialne. Człowiek, który decyduje o wypłatach, budżetach projektowych, zakupie nowego sprzętu czy przydziale służbowych aut, trzyma w ręku dźwignię o gigantycznej sile nacisku.',
        'Władza materialna działa jednak tylko tak długo, jak długo zasób jest deficytowy. W dobie rynków pracownika i łatwego dostępu do kapitału venture capital sama kontrola nad portfelem traci swoją bezwzględną moc na rzecz kontroli nad wiedzą i relacjami.'
      ]
    },

    // 41.6
    {
      id: 'sec-41-6',
      pageNumber: 16,
      sectionNumber: '41.6',
      title: 'Źródła władzy II: Monopol informacyjny i kontrola nad bramkami przepływu danych (Gatekeeping)',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'W nowoczesnej gospodarce opartej na wiedzy najpotężniejszą formą panowania jest GATEKEEPING — rola odźwiernego informacji.',
        'Osoba kontrolująca bramki decyduje: jakie raporty trafią na biurko prezesa, o których problemach dowie się zarząd, a które zostaną zamiecione pod dywan. Gatekeeper nie musi podejmować decyzji osobiście — on preparuje materiał decyzyjny tak, by szef musiał wybrać dokładnie to, co zaplanował odźwierny.'
      ]
    },

    // 41.7
    {
      id: 'sec-41-7',
      pageNumber: 19,
      sectionNumber: '41.7',
      title: 'Źródła władzy III: Kontrola nad sankcjami i nagrodami — Anatomia kija i marchewki w neurobiologii',
      category: 'neuronauka',
      readingTimeMinutes: 25,
      paragraphs: [
        'Operowanie nagrodą i karą to klasyczny model behawiorystyczny. Neurobiologia pokazuje jednak głęboką asymetrię między tymi bodźcami:',
        '- NAGRODA (Marchewka): Stymuluje prążkowie i układ dopaminergiczny. Buduje motywację dążeniową, zaciekawienie, proaktywność. Wymaga jednak ciągłego podnoszenia dawki z powodu zjawiska habituacji (Rozdział 23).',
        '- KARA (Kij): Aktywuje ciało migdałowate i oś stresu HPA. Skutecznie gasi niepożądane zachowanie natychmiast, ale płaci za to dramatyczną ceną: wywołuje paraliż twórczy, wyuczoną bezradność i ukrytą wrogość. Zespół zarządzany wyłącznie kijem nigdy nie stworzy innowacji — będzie robił tylko tyle, by uniknąć batogów.'
      ]
    },

    // 41.8
    {
      id: 'sec-41-8',
      pageNumber: 22,
      sectionNumber: '41.8',
      title: 'Historia: „Kto naprawdę podejmuje decyzję?” — Analiza ukrytych wektorów wpływu w komitecie inwestycyjnym',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Wyobraźmy sobie posiedzenie komitetu inwestycyjnego funduszu nieruchomości. Przy stole zasiada prezes Bogusław, wiceprezes ds. ryzyka Marta oraz dyrektor analityczny Karol.',
        'Formalnie 100% władzy decyzyjnej posiada prezes Bogusław — to jego podpis zatwierdza kupno działki za 40 milionów złotych. Jednak prześledźmy przepływ sił:',
        'Bogusław ma 65 lat i nie rozumie skomplikowanych modeli ekonometrycznych. Zdaje się całkowicie na streszczenie sporządzone przez Martę. Marta z kolei jest w cichym sojuszu z Karolem, który marzy o awansie i celowo dobrał dane demograficzne tak, by ukryć spadek liczby mieszkańców w danej gminie.',
        'Kto naprawdę podjął decyzję o wydaniu 40 milionów? Młody analityk Karol, który na slajdzie 4. podmienił jedną tabelę statystyczną. Władza formalna była tylko pieczęcią przybitą na cudzym zamyśle.'
      ],
      interactiveWindowRef: {
        id: 'win-41-8-mapa-wladzy',
        title: 'MODUŁ B: Interaktywna Mapa Władzy i Wpływu',
        subtitle: 'Identyfikacja realnych węzłów kontroli zasobów, informacji i alternatyw',
        context: 'Audyt procesu decyzyjnego w komitecie inwestycyjnym Bogusława.',
        type: 'what_we_know',
        takeaway: 'Nigdy nie patrz wyłącznie na to, kto trzyma pióro; patrz na to, kto przygotował atrament i zredagował tekst.',
        whatWeKnow: {
          items: [
            {
              id: 'map-41-1',
              statement: 'Prezes Bogusław posiada formalną władzę wykonawczą i podpisuje przelew bankowy.',
              category: 'fakt',
              explanation: 'Odpowiedzialność prawno-instytucjonalna spoczywa na prezesie.'
            },
            {
              id: 'map-41-2',
              statement: 'Karol kontroluje architekturę informacyjną i selekcję danych rynkowych.',
              category: 'fakt',
              explanation: 'Władza ekspercko-informacyjna: manipulacja założeniami modelu determinuje wynik decydenta.'
            },
            {
              id: 'map-41-3',
              statement: 'Marta kontroluje filtr bezpieczeństwa i zaufanie relacyjne prezesa.',
              category: 'motyw',
              explanation: 'Władza referencyjna i gatekeeping: pieczętuje wiarygodność Karola przed szefem.'
            }
          ]
        }
      }
    },

    // 41.9
    {
      id: 'sec-41-9',
      pageNumber: 25,
      sectionNumber: '41.9',
      title: 'Władza a możliwość odmowy: Odporność podwładnego jako granica wszechmocy zwierzchnika',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Żaden tyran ani autorytarny szef nie posiada władzy absolutnej w sensie fizycznym. Granicą władzy każdego zwierzchnika jest determinacja podwładnego do poniesienia kosztu odmowy.',
        'W słynnym eseju Étienne’a de La Boétie Dobrowolna niewola (1576) padło fundamentalne pytanie: Jak to możliwe, że miliony ludzi ulegają jednemu człowiekowi, często słabemu fizycznie i przeciętnemu umysłowo? Odpowiedź brzmi: Ponieważ sami oddają mu swoją moc w zamian za iluzję spokoju.',
        'Gdy pracownik mówi: „Może mnie pan zwolnić, ale nie podpiszę tego fałszywego bilansu” — władza przełożonego natychmiast ulega załamaniu. Despota staje przed wyborem: spełnić groźbę i stracić eksperta, czy skapitulować. Odmowa jest aktem, który przywraca podmiotowość.'
      ]
    },

    // 41.10
    {
      id: 'sec-41-10',
      pageNumber: 28,
      sectionNumber: '41.10',
      title: 'Władza a odpowiedzialność: Asymetria sprawczości i moralny koszt podejmowania decyzji za innych',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Z punktu widzenia etyki odpowiedzialność jest nieodłącznym cieniem władzy. Nie można sprawiedliwie posiadać władzy bez ponoszenia pełnej odpowiedzialności za skutki swoich dekretów.',
        'Niestety, patologia nowoczesnych biurokracji polega na SYSTEMOWYM ROZŁĄCZENIU WŁADZY I ODPOWIEDZIALNOŚCI (Moral Hazard): decydenci na szczycie inkasują premie za sukcesy, a koszty błędów i katastrof zrzucają na podatników, szeregowych pracowników lub przyszłe pokolenia.',
        'Zdrowa organizacja to taka, w której ten, kto decyduje o ryzyku, osobiście ryzykuje własnym statusem i majątkiem (tzw. Skin in the Game Nassima Taleba).'
      ]
    },

    // 41.11
    {
      id: 'sec-41-11',
      pageNumber: 31,
      sectionNumber: '41.11',
      title: 'Historia wieloetapowa: „Mała przewaga” — Jak mikro-przywileje krok po kroku budują autokratę',
      category: 'studium-przypadku',
      readingTimeMinutes: 28,
      paragraphs: [
        'Prześledźmy 5-letnią transformację Damiana — założyciela spółki technologicznej, który zaczynał w garażu z dwoma kolegami z roku.',
        'ROK 1 (Równość): Wszyscy siedzą przy jednym biurku, jedzą pizzę, decyzje zapadają przez aklamację.',
        'ROK 2 (Pierwszy bufor): Spółka pozyskuje inwestora. Damian dostaje osobny pokój, bo „musi rozmawiać z prawnikami”. Koledzy pukają przed wejściem.',
        'ROK 3 (Atrybuty statusu): Damian zaczyna latać klasą biznes i zatrudnia asystentkę filtrującą maile. Wprowadza zasadę, że programiści nie mogą bezpośrednio zaglądać do jego kalendarza.',
        'ROK 4 (Dystans poznawczy): Damian przestaje mówić o problemach technicznych, posługuje się żargonem giełdowym. Na korytarzu mija dawnych kolegów bez słowa, patrząc w ekran telefonu.',
        'ROK 5 (Autokracja): Na zebraniu zarządu Damian zwalnia wiceprezesa, który odważył się zakwestionować prognozy przychodów: „To moja firma, stworzyłem was od zera i jeśli komuś nie pasuje moja wizja, drzwi są otwarte”.',
        'Damian nie urodził się tyranem. Został ugotowany w garnku drobnych mikro-przywilejów, które systematycznie odcinały jego mózg od korygującej empatii.'
      ]
    },

    // 41.12
    {
      id: 'sec-41-12',
      pageNumber: 34,
      sectionNumber: '41.12',
      title: 'Dystans władzy: Wymiar Geerta Hofstede i kulturowe uwarunkowania hierarchii',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Sposób przeżywania i manifestowania władzy zależy potężnie od matrycy kulturowej. Holenderski socjolog Geert Hofstede zdefiniował wskaźnik DYSTANSU WŁADZY (Power Distance Index — PDI):',
        '- KULTURY O DUŻYM DYSTANSIE WŁADZY (np. Rosja, Chiny, kraje arabskie, w znacznym stopniu Polska tradycyjna): Nierówność jest traktowana jako naturalny porządek świata. Przełożony to figura ojcowska, autorytarna; podwładny nie ma prawa publicznie podważać słów szefa, a hierarchia wymaga demonstracyjnych symboli szacunku.',
        '- KULTURY O MAŁYM DYSTANSIE WŁADZY (np. Dania, Szwecja, Holandia): Nierówność jest złem koniecznym, czysto funkcjonalnym podziałem ról. Szef je lunch w tej samej stołówce, przyjeżdża do pracy rowerem, a podwładny może swobodnie powiedzieć mu na zebraniu: „Lars, ten pomysł jest bez sensu”.',
        'Zderzenie tych dwóch kultur w międzynarodowych korporacjach rodzi gigantyczne nieporozumienia: skandynawski menedżer w Polsce bywa brany za słabego i bezradnego, a polski dyrektor w Kopenhadze za toksycznego despotę.'
      ]
    },

    // 41.13
    {
      id: 'sec-41-13',
      pageNumber: 37,
      sectionNumber: '41.13',
      title: 'Czy władza psuje człowieka? Rewizja maksymy Lorda Actona: Neurobiologia basu, odhamowanie i syndrom Hubris',
      category: 'neuronauka',
      readingTimeMinutes: 26,
      quote: {
        text: 'Władza ma tendencję do korumpowania, a władza absolutna korumpuje absolutnie. Wielcy ludzie są prawie zawsze złymi ludźmi.',
        author: 'Lord John Acton',
        source: 'List do biskupa Mandella Creightona, 1887'
      },
      paragraphs: [
        'Słynna maksyma Lorda Actona wymaga dziś gruntownej rewizji naukowej. Współczesna psychologia (Dacher Keltner, Adam Galinsky, Susan Fiske) odpowiada: Władza nie tyle „psuje” człowieka z definicji, ile UJAWNIA I WZMACNIA JEGO PRAWDZIWE DYSPOZYCJE oraz zmienia działanie jego układu nerwowego.',
        'W badaniach fMRI Keltnera wykazano, że wysokie poczucie władzy działa na płaty czołowe podobnie jak... LEKKIE USZKODZENIE PŁATÓW CZOŁOWYCH (Traumatic Brain Injury):',
        '1. HIPOAKTYWACJA UKŁADU ZWIERCIADLANEGO (Mirror Neurons): Ludzie u władzy dosłownie przestają rejestrować mikroekspresje twarzy rozmówców. Spada ich zdolność do rezonansu afektywnego.',
        '2. ODHAMOWANIE BEHAWIORALNE (Disinhibition): Liderzy częściej przerywają innym, głośniej mówią, częściej dotykają obcych ludzi, jedzą z otwartymi ustami i sypią okruszkami (słynny eksperyment Keltnera z ciasteczkami). Czują, że normy społeczne ich nie dotyczą.',
        '3. HIPERTROFIA CELÓW (Goal-Obsession): Koncentracja na własnych celach sprawia, że inni ludzie zaczynają być postrzegani wyłącznie przez pryzmat ich przydatności: „Do czego mogę go użyć?”.'
      ],
      subsections: [
        {
          id: 'sub-41-13-1',
          title: 'Analiza słów Lorda Actona: Syndrom Hubris Davida Owena',
          content: [
            'Brytyjski neurolog i były minister spraw zagranicznych lord David Owen opisał jednostkę kliniczną zwaną SYNDROMEM HUBRIS (Hubris Syndrome) — nabyte zaburzenie osobowości rozwijające się u ludzi sprawujących władzę przez długi czas bez kontroli zewnętrznej.',
            'Cechy Hubris: mesjanistyczne poczucie misji, utożsamianie siebie z państwem lub firmą („Firma to ja”), lekceważenie sądów i ekspertów, przekonanie, że odpowiada się wyłącznie przed „historią lub Bogiem”. Hubris prowadzi do utraty kontaktu z rzeczywistością i spektakularnego upadku.'
          ],
          highlightBox: {
            title: 'Odtrutka na Hubris: Trzymaj Przy Sobie Ludzi Wolnych',
            content: 'Jedynym lekarstwem na znieczulicę władzy jest posiadanie w najbliższym otoczeniu partnera, przyjaciela lub doradcy, który ma pełną swobodę powiedzenia ci w twarz: „Zachowujesz się jak arogancki głupiec”. Jeśli pozbędziesz się takich ludzi, twój upadek jest kwestią czasu.',
            type: 'warning'
          }
        }
      ]
    },

    // 41.14
    {
      id: 'sec-41-14',
      pageNumber: 40,
      sectionNumber: '41.14',
      title: 'Złudzenie wszechmocy: Dlaczego liderzy przeceniają swój wpływ na złożone systemy rynkowe',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Wielu liderów pada ofiarą błędu atrybucji: kiedy firma odnosi sukces w warunkach hossy gospodarczej, przypisują to w 100% swojemu geniuszowi strategicznemu. Kiedy przychodzi kryzys — winią pogodę, rząd i leniwych pracowników.',
        'W rzeczywistości w systemach nieliniowych i złożonych (Complex Adaptive Systems) wpływ pojedynczego człowieka na ostateczny wynik rzadko przekracza kilkanaście procent. Reszta to dynamika rynkowa, przypadek i zbiorowy wysiłek setek anonimowych ludzi.'
      ]
    },

    // 41.15
    {
      id: 'sec-41-15',
      pageNumber: 43,
      sectionNumber: '41.15',
      title: 'Mechanizm izolacji lidera: Odcinanie od złych wiadomości i pochlebcy jako filtr rzeczywistości',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Im wyżej wchodzisz po drabinie władzy, tym cieńsze staje się powietrze prawdy. Wokół lidera samoistnie formuje się dwór pochlebców i oportunistów.',
        'Mechanizm ten działa jak sito selektywne: 1) Każdy boi się przynieść złą wiadomość, bo szef reaguje wściekłością, 2) Dane są wygładzane na każdym szczeblu raportowania, 3) Do gabinetu na szczycie dociera raport w kolorze różowym.',
        'Lider staje się więźniem własnego imperium: żyje w wyimaginowanym świecie pełnego sukcesu, podczas gdy pod fundamentami budynku płonie ogień.'
      ]
    },

    // 41.16
    {
      id: 'sec-41-16',
      pageNumber: 46,
      sectionNumber: '41.16',
      title: 'Historia: „Nikt nie powiedział mu NIE” — Katastrofa nowego produktu i narodziny fałszywego konsensusu',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Wiktor był prezesem spółki produkującej sprzęt AGD. Pewnego dnia wpadł na pomysł stworzenia „inteligentnego czajnika” z wbudowanym ekranem dotykowym i łącznością 5G, który miał kosztować 1500 zł.',
        'Główny inżynier wiedział, że układ chłodzenia elektroniki tuż obok wrzątku ulegnie awarii po trzech tygodniach. Szef marketingu wiedział z badań, że żaden klient nie chce płacić 1500 zł za gotowanie wody. Dyrektor sprzedaży wiedział, że sieci handlowe nie wezmą tego na półki.',
        'Co powiedzieli na zebraniu? Główny inżynier: „Śmiały pomysł, panie prezesie”. Szef marketingu: „To zrewolucjonizuje kategorię śniadań”. Dyrektor sprzedaży: „Wchodzimy w segment premium”. Dlaczego milczeli? Bo pół roku wcześniej Wiktor z hukiem zwolnił analityka, który ośmielił się skrytykować jego projekt tostera.',
        'Produkt wszedł na rynek. Po 2 miesiącach sprzedano 40 sztuk, 35 wróciło ze spalonym ekranem. Strata wyniosła 12 milionów złotych. Na zebraniu kryzysowym Wiktor krzyczał: „Dlaczego nikt mnie nie ostrzegł?!”. Wszyscy patrzyli w podłogę.'
      ],
      interactiveWindowRef: {
        id: 'win-41-16-kiedy-problem',
        title: 'MODUŁ C: Kiedy Naprawdę Rozpoczęła Się Katastrofa?',
        subtitle: 'Laboratorium śledzenia zniszczenia pętli informacji zwrotnej',
        context: 'Projekt czajnika Wiktora: identyfikacja momentu krytycznego w kulturze milczenia.',
        type: 'loop',
        takeaway: 'Klęska produktu nie zaczęła się w fabryce — zaczęła się w dniu, w którym prezes zwolnił pierwszego krytyka.',
        loopSteps: [
          {
            step: 1,
            title: 'Eliminacja głosu odrębnego',
            actor: 'Prezes Wiktor',
            action: 'Publiczne zwolnienie analityka krytykującego toster.',
            interpretationByOther: '„W tej firmie prawda oznacza śmierć zawodową”.',
            emotionalTrigger: 'Lęk o przetrwanie u wszystkich dyrektorów.',
            counterAction: 'Wdrożenie strategii całkowitego przytakiwania.'
          },
          {
            step: 2,
            title: 'Narodziny fałszywego konsensusu',
            actor: 'Zespół dyrektorów',
            action: 'Pochwały dla absurdalnego czajnika za 1500 zł.',
            interpretationByOther: '„Wszyscy eksperci popierają mój geniusz, jestem nieomylny”.',
            emotionalTrigger: 'Pycha i inflacja ego u Wiktora.',
            counterAction: 'Podwojenie budżetu produkcyjnego bez testów rynkowych.'
          },
          {
            step: 3,
            title: 'Zderzenie z rynkiem',
            actor: 'Klienci',
            action: 'Brak zakupów i zwroty wadliwego sprzętu.',
            interpretationByOther: '„Zostałem zdradzony przez zespół”.',
            emotionalTrigger: 'Wściekłość i paranoja u prezesa.',
            counterAction: 'Dalsza eskalacja despotyzmu i upadek spółki.'
          }
        ]
      }
    },

    // 41.17
    {
      id: 'sec-41-17',
      pageNumber: 49,
      sectionNumber: '41.17',
      title: 'Władza a informacja zwrotna: Psychologiczne bezpieczeństwo (Psychological Safety) Amy Edmondson',
      category: 'teoria',
      readingTimeMinutes: 25,
      quote: {
        text: 'Psychologiczne bezpieczeństwo to przekonanie, że nikt w zespole nie zostanie ukarany, wyśmiany ani odrzucony za to, że zabierze głos, ujawni błąd, zada trudne pytanie lub zaproponuje nową ideę.',
        author: 'Prof. Amy C. Edmondson',
        source: 'Harvard Business School, „The Fearless Organization”, John Wiley & Sons, 2018'
      },
      paragraphs: [
        'Badania Amy Edmondson w szpitalach, lotnictwie i zespołach technologicznych Google (Słynny Projekt Arystoteles) udowodniły bezdyskusyjnie: najważniejszym predyktorem sukcesu i bezpieczeństwa zespołu nie jest IQ członków, lecz PSYCHOLOGICZNE BEZPIECZEŃSTWO.',
        'W szpitalach o niskim bezpieczeństwie pielęgniarki widziały, że lekarz podaje złą dawkę leku, ale milczały, bojąc się krzyku ordynatora — pacjenci umierali. W klinikach o wysokim bezpieczeństwie młody asystent mógł bez obaw chwycić profesora za rękę: „Panie profesorze, to zła ampułka”.',
        'Mądry lider nie mierzy swojej władzy liczbą ludzi, którzy drżą na jego widok. Mierzy ją liczbą ludzi, którzy mają odwagę powiedzieć mu prawdę.'
      ]
    },

    // 41.18
    {
      id: 'sec-41-18',
      pageNumber: 52,
      sectionNumber: '41.18',
      title: 'Kontrola a autonomia: Mikrozarządzanie (Micromanagement) jako patologia lękowa przełożonego',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Czym w rzeczywistości jest mikrozarządzanie — ta powszechna udręka współczesnych korporacji? To nerwica natręctw przełożonego przebrana w szaty dbałości o jakość.',
        'Mikromenedżer musi sprawdzać każdego maila, zatwierdzać każdy przecinek w prezentacji i kontrolować każdą minutę pracy podwładnego. Dlaczego? Ponieważ cierpi na patologiczny brak zaufania i paniczny lęk przed utratą kontroli.',
        'Skutki mikrozarządzania są dewastujące: zabija motywację wewnętrzną, niszczy poczucie odpowiedzialności (pracownicy myślą: „Po co mam się starać, skoro szef i tak wszystko przekreśli?”) i prowadzi do natychmiastowego odejścia najbardziej utalentowanych jednostek.'
      ]
    },

    // 41.19
    {
      id: 'sec-41-19',
      pageNumber: 55,
      sectionNumber: '41.19',
      title: 'Badania empiryczne nad władzą: Od gier dyktatorskich po neurobiologię hierarchii u naczelnych',
      category: 'teoria',
      readingTimeMinutes: 25,
      paragraphs: [
        'Badania prymatologa Fransa de Waala nad szympansami ujawniają głębokie ewolucyjne korzenie przywództwa. Samiec alfa u szympansów nie utrzymuje władzy wyłącznie siłą mięśni — samiec brutalny i nielubiany zostaje po kilku miesiącach obalony i rozerwany na strzępy przez koalicję młodszych samców.',
        'Skuteczny szympans alfa to dyplomata: dzieli się mięsem, pociesza małe szympansy, broni starych samic i buduje koalicje. Władza u ssaków wyższych jest kontraktem społecznym: stado akceptuje twoje przywództwo dopóty, dopóki zapewniasz mu bezpieczeństwo i sprawiedliwy podział zasobów.'
      ]
    },

    // 41.20
    {
      id: 'sec-41-20',
      pageNumber: 58,
      sectionNumber: '41.20',
      title: 'Kontrprzypadek I: Olbrzymia władza formalna — i zerowa realna kontrola nad sytuacją (Syndrom papierowego cara)',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Klasycznym kontrprzypadkiem jest sytuacja polityków lub prezesów wielkich konglomeratów państwowych. Posiadają gabinety, limuzyny, pieczęcie i setki podwładnych.',
        'Kiedy jednak wydają polecenie reformy, ich dekrety grzęzną w labiryncie biurokracji, układów związkowych i biernego oporu tysięcy urzędników. Taki lider ma pełną odpowiedzialność konstytucyjną, a zerową sprawczość operacyjną. Jest zakładnikiem aparatu, którym rzekomo rządzi.'
      ]
    },

    // 41.21
    {
      id: 'sec-41-21',
      pageNumber: 60,
      sectionNumber: '41.21',
      title: 'Kontrprzypadek II: Zerowa władza formalna — i kolosalny, decydujący wpływ na losy organizacji',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Z drugiej strony spotykamy jednostki, które w schemacie organizacyjnym znajdują się na samym dole: asystentki, informatyków dyżurnych, kierowców prezesa.',
        'Kiedy administrator sieci komputerowej wyłącza serwery, praca 10 000 ludzi staje w miejscu. Kiedy asystentka dyrektora decyduje, czyj projekt położyć na wierzchu teczki, rozstrzyga o losach milionowych przetargów. Wpływ oparty na węzłowej pozycji w sieci relacji (Network Centrality) wielokrotnie przewyższa siłę formalnych gwiazdek na pagonach.'
      ]
    },

    // 41.22
    {
      id: 'sec-41-22',
      pageNumber: 62,
      sectionNumber: '41.22',
      title: 'Historia: „Utrata władzy” — Szok psychologiczny upadłego decydenta i próba odzyskania tożsamości',
      category: 'studium-przypadku',
      readingTimeMinutes: 26,
      paragraphs: [
        'Gdy minister Henryk został odwołany ze stanowiska w ciągu 15 minut podczas nocnej rekonstrukcji rządu, jego telefon zamilkł jak zaklęty.',
        'Jeszcze wczoraj odbierał 200 połączeń dziennie, ludzie kłaniali mu się w pas, kierowca otwierał drzwi, a każda jego anegdota wywoływała salwy śmiechu. Dziś wszedł do osiedlowego sklepu po chleb i zdał sobie sprawę, że nikt na niego nie patrzy.',
        'Doświadczył zjawiska zwanego DEPERSONALIZACJĄ POWŁADZOWĄ: zorientował się z przerażeniem, że ludzie nie szanowali i nie lubili JEGO. Szanowali i bali się wyłącznie JEGO KRZESŁA. Gdy zabrano krzesło, człowiek przestał istnieć dla swojego dawnego dworu. Największym sprawdzianem charakteru jest to, kim jesteś, gdy odbiorą ci gabinet.'
      ]
    },

    // 41.23
    {
      id: 'sec-41-23',
      pageNumber: 64,
      sectionNumber: '41.23',
      title: 'Człowiek pod mikroskopem: Dynamika pętli władzy — Zasoby, zależność, decyzja i zmiana układu sił',
      category: 'studium-przypadku',
      readingTimeMinutes: 28,
      paragraphs: [
        'Rozłóżmy pod mikroskopem pełny cykl relacji władzy w 10 krokach dynamicznych:',
        'KONTROLA KLUCZOWEGO ZASOBU → BRAK ALTERNATYW U DRUGIEJ STRONY → NARODZINY ASYMETRII SIŁ → ŻĄDANIE ULEGŁOŚCI → DECYZJA O PODPORZĄDKOWANIU LUB SPRZECIWIE → WYPŁATA NAGRODY / EGZEKUCJA KARY → REAKCJA POZNAWCZA LIDERA (BAS vs Emaptia) → BUDOWANIE KONTR-KOALICJI W TLE → ZMIANA WARUNKÓW RYNKOWYCH → PRZEŁAMANIE ZALEŻNOŚCI I REDYSTRYBUCJA WŁADZY.',
        'Poniższy moduł analityczny pozwala prześledzić ten proces na konkretnym studium przypadku.'
      ],
      interactiveWindowRef: {
        id: 'win-41-23-mikroskop-wladzy',
        title: 'CZŁOWIEK POD MIKROSKOPEM: Anatomia Przejęcia i Utraty Kontroli',
        subtitle: '10 etapów dekonstrukcji dynamiki zależności w relacji wspólników',
        context: 'Konflikt między inwestorem Tomaszem a twórcą technologii Kamilem w startupie medycznym.',
        type: 'microscope',
        takeaway: 'Władza przepływa tam, gdzie rodzi się unikalna, niezastępowalna wartość; gdy zasób staje się powszechny, władza wygasa.',
        microscopeLayers: [
          {
            stepNumber: 1,
            label: '1. WYJŚCIOWA ASYMETRIA',
            question: 'Kto ma zasób krytyczny na początku?',
            content: 'Tomasz ma 2 miliony złotych kapitału, Kamil ma prototyp algorytmu na dysku i zero grosza przy duszy.',
            subtext: 'Bezwzględna dominacja kapitału finansowego nad ideą.'
          },
          {
            stepNumber: 2,
            label: '2. NARZUCENIE WARUNKÓW',
            question: 'Jak Tomasz wykorzystuje brak alternatyw Kamila?',
            content: 'Żąda 70% udziałów w spółce i prawa weta w każdej decyzji. Kamil, z braku oszczędności, podpisuje umowę.',
            subtext: 'Zastawienie pułapki prawnej na etapie deficytu zasobów.'
          },
          {
            stepNumber: 3,
            label: '3. PUNKT ZWROTNY: PRZESUNIĘCIE ZASOBU KRYTYCZNEGO',
            question: 'Co zmienia się po 2 latach?',
            content: 'Pieniądze Tomasza się skończyły, a algorytm Kamila zdobywa międzynarodowy certyfikat medyczny FDA. Amerykański gigant oferuje 50 milionów dolarów za licencję, ale licencja wymaga obecności Kamila jako kluczowego naukowca.',
            subtext: 'Gwałtowny skok BATNA po stronie programisty.'
          },
          {
            stepNumber: 4,
            label: '4. NOWA RÓWNOWAGA SIŁ',
            question: 'Kto ma teraz władzę?',
            content: 'Kamil kładzie na stole rezygnację: „Albo renegocjujemy udziały pół na pół, albo odchodzę do instytutu, a spółka zostaje z bezwartościową wydmuszką”. Tomasz musi skapitulować.',
            subtext: 'Redystrybucja władzy w oparciu o unikalność kompetencji.'
          }
        ]
      }
    },

    // 41.24
    {
      id: 'sec-41-24',
      pageNumber: 67,
      sectionNumber: '41.24',
      title: 'Czy władza musi prowadzić do nadużycia? Przywództwo służebne (Servant Leadership) Roberta Greenleafa',
      category: 'teoria',
      readingTimeMinutes: 24,
      paragraphs: [
        'Czy jesteśmy skazani na wieczną wojnę ego i opresję hierarchii? Nie. Odpowiedzią dojrzałej psychologii jest koncepcja PRZYWÓDZTWA SŁUŻEBNEGO (Servant Leadership) sformułowana przez Roberta Greenleafa:',
        'Lider służebny zadaje sobie każdego ranka inne pytanie niż autokrata. Nie pyta: „Jak mogę wykorzystać ludzi, by osiągnąć mój cel?”, lecz pyta: „Czego potrzebują moi ludzie, by mogli rozwijać swoje talenty, pracować w poczuciu bezpieczeństwa i samodzielnie rozwiązywać problemy?”.',
        'Taki lider nie buduje murów — buduje mosty. Używa swojej władzy formalnej nie jako bicza, lecz jako tarczy chroniącej zespół przed chaosem i biurokracją z góry. Władza służebna nie słabnie — staje się niezniszczalna, bo opiera się na autentycznym, dobrowolnym oddaniu ludzi.'
      ]
    },

    // 41.25
    {
      id: 'sec-41-25',
      pageNumber: 70,
      sectionNumber: '41.25',
      title: 'SYNTEZA: Władza jako architektura możliwości i odpowiedzialność za cudzy los',
      category: 'podsumowanie',
      readingTimeMinutes: 24,
      paragraphs: [
        'Zintegrujmy fundamenty Rozdziału 41 w końcowy model myślowy:',
        'WŁADZA TO NIE DOMINACJA — TO ASYMETRYCZNA ZDOLNOŚĆ DO WPŁYWANIA NA POLE MOŻLIWOŚCI DRUGIEGO CZŁOWIEKA.',
        'Sprawowanie władzy jest najtrudniejszą próbą dojrzałości psychicznej. Wymaga nieustannego walki z biologicznym odrętwieniem empatii, budowania kanałów bezpiecznej informacji zwrotnej i szacunku dla prawa do odmowy. Prawdziwa wielkość nie polega na tym, ilu ludziom możesz rozkazać, lecz na tym, ilu ludzi dzięki twojemu wsparciu zyskało wolność, odwagę i samodzielność.',
        'Wiemy już, jak funkcjonuje władza wynikająca z zasobów i zależności. Co jednak dzieje się wtedy, gdy posłuszeństwo nie wynika z kontraktu ani przymusu, lecz z głębokiego, wewnętrznego przekonania, że dana osoba ma PRAWO nami kierować, bo reprezentuje mądrość, moralność, tradycję lub majestat instytucji? O tajemnicy społecznego uznania i granicach lojalności traktuje Rozdział 42: AUTORYTET I POSŁUSZEŃSTWO.'
      ]
    }
  ]
};
