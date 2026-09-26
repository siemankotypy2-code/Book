import { Chapter, ExamQuestion } from '../types/book';

export const chapterFifteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W badaniach nad Samokontrolą i „Luką Wiedza-Działanie” (Knowing-Doing Gap) Jeffreya Pfeffera i Roberta Suttona (Sekcja 15.1), główną przyczyną, dla której ludzie nie wdrażają wiedzy, mimo że ją posiadają, jest:',
    topic: 'Luka Wiedza-Działanie i Iluzja Informacji',
    sectionRef: 'Sekcja 15.1',
    options: [
      { label: 'A', text: 'Zbyt mała liczba przeczytanych książek i poradników.', isCorrect: false },
      { label: 'B', text: 'Mylenie gadania i zdobywania wiedzy z samym działaniem oraz brak mostów behawioralnych radzących sobie z oporem emocjonalnym w chwili wdrożenia.', isCorrect: true },
      { label: 'C', text: 'Wada wrodzona płata skroniowego.', isCorrect: false },
      { label: 'D', text: 'Brak certyfikatu ukończenia szkolenia online.', isCorrect: false }
    ],
    explanation: 'Konsumpcja wiedzy (czytanie o diecie, słuchanie o biznesie) daje fałszywy wyrzut dopaminy — mózg czuje się tak, jakby już wykonał pracę. Prawdziwe wdrożenie wymaga zmierzenia się z niewygodą i ryzykiem porażki.',
    keyTakeaway: 'Wiedza bez wdrożenia to tylko wyrafinowana forma rozrywki intelektualnej.'
  },
  {
    id: 2,
    question: 'Zgodnie z koncepcją Kristin Neff, dlaczego Samowspółczucie (Self-Compassion) jest nieskończenie skuteczniejszym narzędziem budowania odporności psychicznej niż surowa Samokrytyka (Sekcja 15.8 i 15.9)?',
    topic: 'Samowspółczucie vs Samokrytyka wg Kristin Neff',
    sectionRef: 'Sekcja 15.9',
    options: [
      { label: 'A', text: 'Samokrytyka jest zakazana przez prawo medyczne.', isCorrect: false },
      { label: 'B', text: 'Samokrytyka aktywuje obwód zagrożenia i kortyzol, wpychając mózg w lęk i unikanie, podczas gdy samowspółczucie aktywuje układ opiekuńczy i oksytocynę, dając odwagę do szybkiej nauki na błędach i ponownego działania.', isCorrect: true },
      { label: 'C', text: 'Samowspółczucie polega na leżeniu w łóżku i jedzeniu ciastek przez cały rok.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy w biochemice mózgu.', isCorrect: false }
    ],
    explanation: 'Kiedy po porażce biczujesz się słowami („Jestem beznadziejny, znowu zawaliłem”), Twoje ciało migdałowate zamyka się w obronnym paraliżu. Życzliwość wobec samego siebie w kryzysie to biologiczny fundament sprężystości psychicznej (Resilience).',
    keyTakeaway: 'Nie możesz zmotywować się do wielkości, nienawidząc samego siebie za potknięcia.'
  },
  {
    id: 3,
    question: 'Na czym polega paradoks Perfekcjonizmu Adaptacyjnego a Dezadaptacyjnego (Neurotycznego) (Sekcja 15.10)?',
    topic: 'Anatomia Perfekcjonizmu Neurotycznego',
    sectionRef: 'Sekcja 15.10',
    options: [
      { label: 'A', text: 'Perfekcjonista zawsze oddaje projekty 3 dni przed terminem.', isCorrect: false },
      { label: 'B', text: 'Perfekcjonizm dezadaptacyjny nie jest dążeniem do doskonałości — jest panicznym lękiem przed wstydem i odrzuceniem, co prowadzi do chronicznej prokrastynacji, wypalenia i zaniżania realnych wyników.', isCorrect: true },
      { label: 'C', text: 'Perfekcjoniści nigdy nie popełniają błędów ortograficznych.', isCorrect: false },
      { label: 'D', text: 'Dotyczy wyłącznie osób grających na skrzypcach.', isCorrect: false }
    ],
    explanation: 'Zdrowe dążenie do mistrzostwa (Excellence) cieszy się procesem i akceptuje błędy jako informację zwrotną. Perfekcjonizm neurotyczny uzależnia poczucie własnej wartości od nieskazitelnego rezultatu.',
    keyTakeaway: 'Dążenie do doskonałości to miłość do rozwoju; perfekcjonizm to lęk przed oceną.'
  },
  {
    id: 4,
    question: 'W technice „Pauzy Świętej” (The Sacred Pause) Tara Brach i Viktora Frankla (Sekcja 15.4), kluczowa przestrzeń wolności człowieka mieści się:',
    topic: 'Pauza między Bodźcem a Reakcją Frankla',
    sectionRef: 'Sekcja 15.4',
    options: [
      { label: 'A', text: 'W bankowym skarbcu pod ziemią.', isCorrect: false },
      { label: 'B', text: 'W ułamku sekundy pomiędzy bodźcem afektywnym a motoryczną reakcją — w tej szczelinie kora przedczołowa może wybrać świadomą odpowiedź zamiast automatycznego wybuchu.', isCorrect: true },
      { label: 'C', text: 'W trakcie snu paradoksalnego REM.', isCorrect: false },
      { label: 'D', text: 'Wyłącznie po wypiciu ziół uspokajających.', isCorrect: false }
    ],
    explanation: 'Viktor Frankl pisał: „Pomiędzy bodźcem a reakcją istnieje przestrzeń. W tej przestrzeni leży nasza wolność i nasza moc wyboru odpowiedzi. W naszej odpowiedzi leży nasz rozwój i nasze szczęście”.',
    keyTakeaway: 'Kto panuje nad pauzą, ten panuje nad swoim losem.'
  },
  {
    id: 5,
    question: 'Co to jest „Protokół Bounce-Back” (System Powrotu) w budowaniu długofalowej odporności na kryzysy życiowe (Sekcja 15.12)?',
    topic: 'System Powrotu i Elastyczność Psychiczna',
    sectionRef: 'Sekcja 15.12',
    options: [
      { label: 'A', text: 'Plan ucieczki z kraju w razie problemów finansowych.', isCorrect: false },
      { label: 'B', text: 'Z góry przygotowana, przetestowana procedura kroków somatycznych, mentalnych i społecznych, którą uruchamiasz automatycznie po zderzeniu z ciężką porażką, by skrócić czas trwania załamania.', isCorrect: true },
      { label: 'C', text: 'Wyrzucenie wszystkich pamiątek rodzinnych do rzeki.', isCorrect: false },
      { label: 'D', text: 'Zażywanie antybiotyków bez konsultacji z lekarzem.', isCorrect: false }
    ],
    explanation: 'Człowiek odporny psychicznie nie różni się od wrażliwego tym, że nie odczuwa bólu. Różni się tym, że ma gotowy system szybkiego powrotu do równowagi (Bounce-Back), który nie pozwala, by kryzys zamienił się w wielomiesięczną depresję.',
    keyTakeaway: 'Nie planuj życia bez kryzysów — zaprojektuj swój system szybkiego powrotu do pionu.'
  }
];

export const chapterFifteen: Chapter = {
  number: 15,
  title: 'Samokontrola i Działanie: Ostatnia Twierdza Woli',
  subtitle: 'Co zrobić, kiedy wiesz, co powinieneś zrobić, ale nadal tego nie robisz — odporność, antyperfekcjonizm i system powrotu',
  leadParagraph: 'Dotarliśmy do punktu krytycznego całej podróży. Znasz już architekturę swojego umysłu z Tomu I: wiesz, jak System 1 walczy z Systemem 2, jak amygdala wzbudza afekt, jak uwaga selekcjonuje świat, jak percepcja tworzy iluzje i jak pamięć rekonstruuje przeszłość. Znasz mechanizmy grupy, komunikacji, wpływu, manipulacji, relacji, motywacji, nawyków i informacji z Tomu II. Masz całą wiedzę świata. I oto stajesz przed lustrem o 6:00 rano. Wszystko sprowadza się do tego jednego pytania: CO TERAZ ZROBISZ?',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-15-1',
      pageNumber: 712,
      sectionNumber: '15.1',
      title: 'Wiedza nie gwarantuje działania: Przepaść kognitywno-behawioralna',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Wiedzieć i nie działać, to tak naprawdę jeszcze nie wiedzieć.',
        author: 'Wang Yangming'
      },
      paragraphs: [
        'Gdyby informacja była wszystkim, czego potrzebujemy, każdy człowiek z dostępem do internetu byłby milionerem z sześciopakiem na brzuchu, doskonałym małżeństwem i niezmąconym spokojem buddyjskiego mnicha. Przecież wszystkie te instrukcje są darmowe i dostępne w Google w 0,3 sekundy.',
        'Istnieje dramatyczna przepaść między wiedzą deklaratywną (co wiem) a wiedzą proceduralno-somatyczną (co moje ciało jest w stanie wykonać w warunkach stresu). Możesz przeczytać 50 książek o pływaniu, ale gdy wrzucą Cię na głęboką wodę oceanu podczas sztormu, Twoje teoretyczne dyplomy utoną razem z Tobą.',
        'W tym rozdziale przestajemy rozmawiać o teorii. Zajmiemy się inżynierią mostu, który łączy myśl z mięśniem: jak sprawić, by wola przekształciła się w twardy, fizyczny fakt w świecie rzeczywistym.'
      ]
    },
    {
      id: 'sec-15-2',
      pageNumber: 716,
      sectionNumber: '15.2',
      title: 'Samokontrola: Mięsień czy alokacja zasobów poznawczych?',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Roy Baumeister zasłynął teorią Wyczerpania Ego (Ego Depletion) — hipotezą, że samokontrola przypomina mięsień, który po zużyciu porcji glukozy traci siłę. Nowsze badania neurokognitywne (m.in. Michaela Inzlichta z Uniwersytetu w Toronto) nakazują jednak zniuansowanie tego modelu.',
        'Samokontrola nie tyle „fizycznie się wyczerpuje”, ile jest wynikiem kalkulacji alokacji uwagi: mózg po długotrwałym wysiłku przełącza priorytety z trybu „MUSZĘ” (kontrola wykonawcza, odpowiedzialność) na tryb „CHCĘ” (odpoczynek, szukanie natychmiastowej dopaminy).',
        'Kiedy wiesz, że Twój mózg nie jest zepsuty, a jedynie włącza ewolucyjny program odpoczynku, przestajesz walczyć ze sobą wściekłą samokrytyką. Zamiast tego uczysz się mądrze zarządzać cyklami skupienia i regeneracji.'
      ]
    },
    {
      id: 'sec-15-3',
      pageNumber: 720,
      sectionNumber: '15.3',
      title: 'Emocja kontra cel: Kto trzyma stery w chwili kryzysu',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Wyobraź sobie jeźdźca na słoniu (słynna metafora Jonathana Haidta). Jeździec to Twoja świadoma kora przedczołowa — ma mapę, kompas, wie, dokąd zmierzają, i potrafi czytać znaki drogowe. Słoń to Twój układ limbiczny — 6 ton czystych emocji, lęków, pożądań i biologicznych odruchów.',
        'Dopóki słoń jest spokojny, jeździec może nim z gracją kierować. Ale w ułamku sekundy, gdy w zaroślach zaszeleszczy tygrys (atak paniki, nagła pokusa, wściekłość w kłótni), słoń rzuca się do szaleńczej ucieczki. Jeździec może ciągnąć za cugle z całej siły — słoń nawet tego nie poczuje.',
        'Większość ludzi próbuje pokonać słonia przemocą („Muszę się zmusić!”). Prawdziwi mędrcy uczą się uspokajać słonia głębokim oddechem, karmić go odpowiednimi bodźcami i wybierać ścieżki, na których nie ma tygrysów.'
      ]
    },
    {
      id: 'sec-15-4',
      pageNumber: 724,
      sectionNumber: '15.4',
      title: 'Pauza Święta: Magiczna szczelina między bodźcem a reakcją',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Viktor Frankl, austriacki psychiatra i ocalały z Auschwitz, w arcydziele „Człowiek w poszukiwaniu sensu” zawarł zdanie, które powinno być wyryte nad każdym biurkiem na świecie:',
        '„Pomiędzy bodźcem a reakcją istnieje przestrzeń. W tej przestrzeni leży nasza wolność i nasza moc wyboru odpowiedzi. W naszej odpowiedzi leży nasz rozwój i nasze szczęście”.',
        'Zwierzę nie ma przestrzeni: bodziec → natychmiastowa reakcja. Człowiek nieświadomy również jej nie ma: ktoś rzuca złośliwy komentarz → natychmiastowy wybuch wściekłości.',
        'Święta Pauza (The Sacred Pause) to umiejętność wstawienia zaledwie 3 sekund ciszy pomiędzy to, co się wydarzyło, a to, co zrobisz. Te 3 sekundy to czas, jakiego potrzebuje sygnał z drogi wysokiej LeDouxa (Tom I, Rozdział 2), by dotrzeć ze wzgórza do kory nowej. W ciągu 3 sekund odzyskujesz człowieczeństwo.'
      ]
    },
    {
      id: 'sec-15-5',
      pageNumber: 728,
      sectionNumber: '15.5',
      title: 'Środowisko zamiast silnej woli: Ostateczne pożegnanie z mitem heroizmu',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Powtórzmy to z całą mocą: Poleganie na samej „silnej woli” to biologiczne samobójstwo.',
        'Jeśli chcesz przestać pić alkohol, ale codziennie trzymasz w lodówce 4 butelki piwa „dla gości” — przegrasz. Jeśli chcesz skupić się na pisaniu doktoratu, ale telefon z włączonymi powiadomieniami leży 10 cm od Twojej dłoni — przegrasz.',
        'Człowiek mądry projektuje swoje środowisko tak, by właściwe zachowanie było NAJŁATWIEJSZYM z możliwych wyborów (najniższe tarcie), a zachowanie destrukcyjne wymagało tytanicznego wysiłku. Chcesz rano biegać? Połóż buty, spodenki i zegarek na dywanie tuż obok łóżka, tak byś wstając, musiał na nie nadepnąć. Chcesz przestać grać w gry w nocy? Odłącz kabel zasilający konsoli i schowaj go na dnie szafy w piwnicy.'
      ]
    },
    {
      id: 'sec-15-6',
      pageNumber: 732,
      sectionNumber: '15.6',
      title: 'Stres i działanie: Krzywa Yerkesa-Dodsona i eustres',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Stres nie jest Twoim wrogiem. Bez stresu nie byłbyś w stanie obronić pracy magisterskiej, wyhamować przed pieszym ani wystąpić przed publicznością.',
        'Prawo Yerkesa-Dodsona z 1908 roku pokazuje zależność między pobudzeniem fizjologicznym a jakością wykonania zadania. Kiedy pobudzenie jest zbyt niskie (apatia, nuda) — wydajność jest marna. Kiedy pobudzenie rośnie, wchodzimy w pasmo optymalnego funkcjonowania: Eustres (stres adaptacyjny). Noradrenalina i dopamina wyostrzają wzrok, skracają czas reakcji i pompują krew do mięśni.',
        'Katastrofa zaczyna się dopiero wtedy, gdy przekraczamy punkt przegięcia: Distres (przeciążenie). Wówczas uwaga ulega tunelowaniu, pamięć robocza blokuje się, a kora nowa kapituluje. Sztuka polega na utrzymywaniu pobudzenia w strefie optymalnej za pomocą oddechu przeponowego i reframingu poznawczego („To bicie serca to nie panika — to moje ciało przygotowujące się do wielkiego wyzwania!”).'
      ]
    },
    {
      id: 'sec-15-7',
      pageNumber: 736,
      sectionNumber: '15.7',
      title: 'Porażka: Informacja zwrotna czy wyrok na tożsamość?',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Carol Dweck ze Stanfordu w przełomowych badaniach nad Mentalnością Rozwojową (Growth Mindset) vs Mentalnością Sztywną (Fixed Mindset) odkryła, dlaczego dwoje ludzi o identycznym ilorazie inteligencji osiąga skrajnie różne rezultaty życiowe.',
        'Człowiek o mentalności sztywnej uważa, że talent i inteligencja to cechy stałe. W jego oczach porażka (oblanie egzaminu, odrzucenie oferty handlowej) jest WYROKIEM NA JEGO WARTOŚĆ: „Nie nadaję się, jestem za głupi”. Taki człowiek unika wyzwań, by nie ryzykować kompromitacji.',
        'Człowiek o mentalności rozwojowej wie, że mózg jest plastyczny jak mięsień. Dla niego porażka to po prostu BEZPŁATNA INFORMACJA ZWROTNA Z RZECZYWISTOŚCI: „Ta konkretna strategia nie zadziałała. Czego mogę się z tego nauczyć przed kolejną próbą?”. Porażka to nie tożsamość — to zdarzenie.'
      ]
    },
    {
      id: 'sec-15-8',
      pageNumber: 740,
      sectionNumber: '15.8',
      title: 'Odporność psychologiczna (Resilience): Sztuka bycia jak trzcina na wietrze',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Słowo Resilience w inżynierii materiałowej oznacza sprężystość — zdolność metalu do powrotu do pierwotnego kształtu po ustąpieniu potężnego odkształcenia mechanicznego.',
        'Odporność psychiczna to nie bycie dębem, który sztywno stawia opór huraganowi, aż wreszcie pęka z hukiem u korzeni. Odporność psychiczna to bycie trzciną: potrafisz ugiąć się aż do samej ziemi pod naporem żałoby, kryzysu finansowego czy rozwodu, płaczesz, czujesz ból, ale gdy nawałnica mija — powoli i z godnością prostujesz się z powrotem do słońca.',
        'Filary Resilience to: głębokie poczucie sensu (Nietzsche: „Kto ma po co żyć, zniesie niemal każde jak”), silna sieć wsparcia społecznego (Rozdział 10) oraz elastyczność poznawcza pozwalająca na zmianę planu, gdy rzeczywistość unieważnia dotychczasowe założenia.'
      ]
    },
    {
      id: 'sec-15-9',
      pageNumber: 744,
      sectionNumber: '15.9',
      title: 'Wewnętrzny krytyk a samowspółczucie: Rewolucja Kristin Neff',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Większość ambitnych ludzi żyje z potwornym lokatorem we własnej głowie. Kiedy popełniają błąd, ten Wewnętrzny Tyrann ryczy: „Ty idioto! Znowu wszystko popsułeś! Nigdy do niczego nie dojdziesz!”. Ludzie wierzą, że ten bicz jest im niezbędny, bo „gdyby nie krytyk, zleniwiałbym na kanapie”.',
        'Kristin Neff z Uniwersytetu Teksaskiego w Austin udowodniła w setkach badań, że samokrytyka nie buduje sukcesu — niszczy go od środka. Aktywuje oś stresu HPA, zalewa hipokamp kortyzolem i prowadzi do depresji.',
        'Odpowiedzią jest Samowspółczucie (Self-Compassion), składające się z trzech elementów:',
        '1. Życzliwość dla siebie zamiast biczowania („Widzę, jak bardzo teraz cierpisz, to był trudny moment”).',
        '2. Wspólne człowieczeństwo (Common Humanity) zamiast izolacji („Błędy i potknięcia są naturalną częścią ludzkiego losu, nie tylko ja przez to przechodzę”).',
        '3. Uważność (Mindfulness) zamiast zlania z emocją („Zauważam ten smutek i lęk, nie muszę z nim walczyć ani w niego wierzyć”).'
      ]
    },
    {
      id: 'sec-15-10',
      pageNumber: 748,
      sectionNumber: '15.10',
      title: 'Perfekcjonizm: Zbroja ze złota, która dusi właściciela',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Brené Brown nazywa perfekcjonizm „20-tonową zbroją, którą nosimy na sobie w nadziei, że uchroni nas przed zranieniem, a która w rzeczywistości nie pozwala nam nawet wziąć głębokiego oddechu”.',
        'Perfekcjonizm nie ma nic wspólnego z doskonałością. Perfekcjonizm to przekonanie: „Jeśli będę idealnie wyglądać, idealnie pracować i nigdy nie popełnię błędu, uchronię się przed wstydem, krytyką i odrzuceniem”. To tarcza lękowa Systemu 1.',
        'Cena perfekcjonizmu jest dewastująca: chroniczne opóźnienia projektów, niekończące się poprawki, wypalenie zawodowe i niemożność cieszenia się jakimkolwiek sukcesem. Antidotum na perfekcjonizm to koncepcja Good Enough (Wystarczająco Dobre) Donalda Winnicotta: 80% jakości dowiezione na czas jest warte nieskończenie więcej niż 100% doskonałości, która nigdy nie opuściła szuflady.'
      ]
    },
    {
      id: 'sec-15-11',
      pageNumber: 752,
      sectionNumber: '15.11',
      title: 'Wielkie Studium Przypadku: Zawał Dyrektora Piotra',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Dramatyczna historia menedżera, który podporządkował całe swoje życie terrorowi perfekcjonizmu i samokontroli, doprowadzając organizm na krawędź śmierci w wieku 43 lat.'
      ],
      caseStudyRef: {
        id: 'cs-ch15-zawrot',
        title: 'Cena Perfekcji: Jak Piotr Musiał Prawie Umrzeć, by Nauczyć Się Żyć',
        subtitle: 'Od 16 godzin pracy na dobę i pogardy dla słabości do autentycznego samowspółczucia',
        protagonist: 'Piotr, Członek Zarządu spółki logistycznej (43 lata)',
        context: 'Oddział Intensywnej Terapii Kardiologicznej w szpitalu klinicznym, wtorek rano.',
        story: [
          'Piotr był legendą w branży. Nazywano go „Cyborgiem”. Nigdy nie chorował, spał po 4,5 godziny na dobę, nie wyjeżdżał na urlopy. Jego życiowym mottem było: „Odpoczniemy po śmierci. Ból to tylko informacja o słabości, którą należy stłumić”.',
          'W rzeczywistości Piotr był zakładnikiem panicznego lęku przed byciem przeciętnym, wpojonego mu przez surowego ojca-wojskowego. Każdy błąd podwładnego wywoływał u niego furię, a każdy własny błąd — bezlitosne nocne biczowanie.',
          'Pewnego popołudnia, w trakcie finalizacji przejęcia konkurenta za 80 milionów złotych, w sali zarządu Piotr poczuł, jakby ktoś położył mu na klatce piersiowej rozgrzane kowadło. Zimny pot zalał mu czoło, lewa ręka zdrętwiała. Ostatnią myślą Piotra przed utratą przytomności nie była myśl o żonie ani o dzieciach; była to myśl: „Nie mogę teraz zemdleć, zepsuję prezentację dla banku!”.',
          'Ostry zawał ściany przedniej serca. Trzy stenty, 14 dni na OIOM-ie. Kardiolog powiedział wprost: „Panie Piotrze, pana serce było zalane kortyzolem przez 15 lat bez przerwy. Następnego zawału pan nie przeżyje. Albo pan zmieni system operacyjny w głowie, albo wybierze pan sobie kwaterę na cmentarzu”.',
          'W sanatorium kardiologicznym Piotr po raz pierwszy od 30 lat usiadł na ławce w parku bez telefonu i bez komputera. Rozpłakał się. Przeszedł intensywną psychoterapię ACT (Acceptance and Commitment Therapy). Zrozumiał, że jego heroiczna „silna wola” była jedynie desperacką ucieczką przed poczuciem bycia niewystarczającym.',
          'Wrócił do pracy po 6 miesiącach na pół etatu jako doradca zarządu. Nauczył się delegować, wprowadził zakaz pisania maili po 18:00 i zaczął medytować. Z dumą powtarzał swojemu zespołowi: „Nie płacę wam za bycie męczennikami. Płacę wam za wypoczęte mózgi, które podejmują mądre decyzje”.'
        ],
        decisionTaken: 'Piotr zrezygnował z roli wszechmogącego Cyborga, uznał swoje biologiczne ograniczenia i zintegrował samowspółczucie z pracą zawodową.',
        whatProtagonistSaw: 'Przez 20 lat widział w sobie niezłomnego lidera, który trzyma firmę na swoich barkach.',
        whatWasMissed: 'Że jego styl zarządzania niszczył zdrowie jego podwładnych, oddalał go od dorastających dzieci i prowadził jego własne naczynia wieńcowe do zawału.',
        psychologicalAnalysis: {
          coreMechanism: 'Perfekcjonizm neurotyczny jako mechanizm obronny przed wstydem z dzieciństwa.',
          cognitiveBiases: [
            { name: 'Iluzja niezniszczalności', description: 'Bezkrytyczna wiara, że biologia ciała nie podlega prawom wyczerpania.', impact: 'Zignorowanie objawów dławicy piersiowej.' }
          ],
          defenseMechanisms: [
            { name: 'Rozszczepienie i stłumienie', explanation: 'Całkowite odcięcie sygnałów bólowych z ciała na rzecz realizacji celów korporacyjnych.' }
          ],
          emotionalDynamic: 'Głęboki lęk przed utratą miłości ojca zamaskowany pod maską tytana pracy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Oś podwzgórze-przysadka-nadnercza (HPA)', role: 'Wyrzut hormonów stresu', activationState: 'Chroniczna, 15-letnia hiperaktywacja niszcząca śródbłonek naczyń' },
            { region: 'Przednia wyspa (Anterior Insula)', role: 'Interocepcja — czucie sygnałów z narządów wewnętrznych', activationState: 'Całkowicie zablokowana przez korę nową' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol i adrenalina', roleInScenario: 'Permanentne skurcze naczyń krwionośnych doprowadziły do pęknięcia blaszki miażdżycowej' }
          ],
          biologicalTimeline: [
            { timeMs: 'Chwila zawału', process: 'Nagłe zamknięcie gałęzi międzykomorowej przedniej lewej tętnicy wieńcowej.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Kardio-Granice Pracy', script: '„O 17:00 zamykam laptopa i nie odbieram telefonów służbowych. Moje serce jest ważniejsze niż jakakolwiek transakcja”.', rationale: 'Utrzymanie homeostazy biologicznej.' }
          ]
        },
        alternativePath: 'Gdyby Piotr zlekceważył ból w klatce i nie zemdlał na oczach kolegów, zmarłby w gabinecie tego samego wieczoru, zostawiając osierocone dzieci.',
        readerQuestion: 'Jaką cenę zdrowotną i relacyjną płacisz dzisiaj za wiarę w to, że musisz być we wszystkim idealny?',
        keyTakeaway: 'Nawet najsilniejszy silnik zaciera się bez oleju. Regeneracja to nie nagroda za pracę — regeneracja to jej niezbędna część.'
      }
    },
    {
      id: 'sec-15-12',
      pageNumber: 756,
      sectionNumber: '15.12',
      title: 'System Powrotu (Bounce-Back): Protokół 24 godzin po upadku',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Kiedy dopadnie Cię wielka porażka — utrata pracy, rozpad relacji, publiczna kompromitacja — Twój mózg wejdzie w stan żałoby i paniki. Nie próbuj wtedy „myśleć pozytywnie”.',
        'Zastosuj precyzyjny Protokół 24 Godzin:',
        'Godziny 0–4: Pierwsza pomoc somatyczna. Gorący prysznic, ciepły posiłek, sen lub leżenie pod ciężką kołdrą. Zakaz podejmowania jakichkolwiek decyzji życiowych. Zakaz wchodzenia do mediów społecznościowych.',
        'Godziny 4–12: Drenaż emocjonalny. Rozmowa z JEDNĄ zaufaną osobą (Rozdział 10), która potrafi wysłuchać bez dawania rad.',
        'Godziny 12–24: Zamiana traumy w lekcję. Weź kartkę i napisz: 1. Co było pod moją kontrolą? 2. Co było poza moją kontrolą? 3. Jaką jedną procedurę zmienię jutro rano?',
        'W ten sposób skracasz czas paraliżu z 6 miesięcy do jednej doby.'
      ]
    },
    {
      id: 'sec-15-13',
      pageNumber: 760,
      sectionNumber: '15.13',
      title: 'Projekt Osobisty: Twój manifest sprawczości',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Czas na sformułowanie Twojego Osobistego Kodeksu Odporności:',
        '1. Moja nieprzekraczalna granica regeneracji (Godzina kładzenia się do łóżka, dni wolne).',
        '2. Moje bezpieczne środowisko (Zasady dotyczące smartfona i pracy głębokiej).',
        '3. Moje zdanie odblokowujące w chwili lęku („Zrobione na 50% jest lepsze niż doskonałe w marzeniach”).',
        '4. Moja rada od najlepszego przyjaciela (Co powiedziałbyś ukochanej osobie, gdyby była w Twojej sytuacji?).'
      ]
    },
    {
      id: 'sec-15-14',
      pageNumber: 764,
      sectionNumber: '15.14',
      title: 'Wielka Integracja Tomu II, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Przeszliśmy przez dziesięć wielkich obszarów ludzkiego funkcjonowania w świecie: grupę, komunikację, perswazję, manipulację, relacje, motywację, nawyki, środowisko informacyjne, konflikty oraz samokontrolę.',
        'Każdy z tych elementów był badany pod mikroskopem. Ale w rzeczywistym życiu te zjawiska nigdy nie występują w izolacji! Twój konflikt z szefem to jednocześnie problem z uwagą (Tom I), lękiem przed utratą statusu (Rozdział 6), błędem atrybucji (Rozdział 7), złą BATNA (Rozdział 14) i perfekcjonizmem (Rozdział 15).',
        'W ostatnim, uroczystym Rozdziale 16 połączymy wszystkie puzzle w jeden wielki, zintegrowany mechanizm: CZŁOWIEK JAKO SYSTEM SPOŁECZNY — zbudujesz mapę własnych mechanizmów i otrzymasz ostateczny kompas na całe życie.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 15.'
      ]
    }
  ]
};
