import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterNineExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Czym jest zjawisko Gaslightingu (Sekcja 9.5) i dlaczego jest ono uznawane za jedną z najbardziej niszczycielskich form przemocy psychologicznej?',
    topic: 'Gaslighting i Kwestionowanie Zmysłów',
    sectionRef: 'Sekcja 9.5',
    options: [
      { label: 'A', text: 'Używaniem gazu łzawiącego podczas manifestacji ulicznych.', isCorrect: false },
      { label: 'B', text: 'Systematycznym podważaniem zdolności poznawczych ofiary („Wymyślasz to”, „Jesteś przewrażliwiona”, „Nic takiego nie miało miejsca”), prowadzącym do utraty zaufania do własnej pamięci i zmysłów.', isCorrect: true },
      { label: 'C', text: 'Gwałtownym wybuchem gniewu w miejscu publicznym.', isCorrect: false },
      { label: 'D', text: 'Oszustwem finansowym polegającym na fałszowaniu faktur.', isCorrect: false }
    ],
    explanation: 'Gaslighting uderza bezpośrednio w aparat weryfikacji rzeczywistości (Tom I, Rozdział 4: Percepcja i Rozdział 5: Pamięć). Ofiara zaczyna wątpić we własną poczytalność i staje się w 100% zależna od wersji wydarzeń podawanej przez manipulatora.',
    keyTakeaway: 'Kiedy ktoś wmawia ci, że nie widziałeś tego, co widziałeś, stawką jest twoja autonomia psychiczna.'
  },
  {
    id: 2,
    question: 'W jaki sposób manipulatorzy wykorzystują „Sztuczną Presję Czasu” (Artificial Urgency) przeciwko korze przedczołowej ofiary (Sekcja 9.2)?',
    topic: 'Presja Czasu i Ograniczenie Zasobów Poznawczych',
    sectionRef: 'Sekcja 9.2',
    options: [
      { label: 'A', text: 'Zmuszają ofiarę do noszenia dwóch zegarków na ręku.', isCorrect: false },
      { label: 'B', text: 'Wywołują skok kortyzolu i panikę („Musisz podpisać teraz, za 10 minut oferta przepada!”), uniemożliwiając włączenie analitycznego Systemu 2 i konsultację z kimkolwiek z zewnątrz.', isCorrect: true },
      { label: 'C', text: 'Uruchamiają stoper na telefonie bez dźwięku.', isCorrect: false },
      { label: 'D', text: 'Płacą ofierze za każdą sekundę zwłoki.', isCorrect: false }
    ],
    explanation: 'System 2 (Tom I, Rozdział 1) potrzebuje czasu i tlenu metabolicznego. W warunkach sztucznego pośpiechu stery przejmuje zalękniona amygdala, co zmusza do podjęcia bezkrytycznej decyzji uległej.',
    keyTakeaway: 'Jeśli ktoś mówi, że musisz zdecydować natychmiast — jedyną właściwą odpowiedzią jest „NIE”.'
  },
  {
    id: 3,
    question: 'Na czym polega faza „Love Bombingu” (Bombardowania Miłością) w toksycznych relacjach interpersonalnych i sektach (Sekcja 9.10)?',
    topic: 'Love Bombing i Zalew Dopaminowy',
    sectionRef: 'Sekcja 9.10',
    options: [
      { label: 'A', text: 'Na rzucaniu bukietami kwiatów z dużej wysokości.', isCorrect: false },
      { label: 'B', text: 'Na gwałtownym, nienaturalnie intensywnym zalewie zachwytem, uwagą, prezentami i obietnicami w pierwszych dniach znajomości, mającym na celu wywołanie uzależnienia dopaminowo-oksytocynowego i uśpienie czujności.', isCorrect: true },
      { label: 'C', text: 'Na całkowitym milczeniu przez pierwsze trzy miesiące relacji.', isCorrect: false },
      { label: 'D', text: 'Na pisaniu wyłącznie listów tradycyjnych na papierze czerpanym.', isCorrect: false }
    ],
    explanation: 'Love bombing to zalanie układu nagrody. Tworzy iluzję odnalezienia „idealnej bratniej duszy”. Gdy ofiara jest już emocjonalnie uzależniona, manipulator nagle wycofuje aprobatę i zaczyna etap karania oraz kontroli.',
    keyTakeaway: 'Zdrowa relacja rośnie w tempie drzewa; manipulacja wybucha jak fajerwerki.'
  },
  {
    id: 4,
    question: 'W manipulacji „Fałszywy Wybór” (Dylemat Pozorny / Związanie) manipulator konstruuje sytuację tak, że:',
    topic: 'Fałszywy Wybór i Zawężenie Ram',
    sectionRef: 'Sekcja 9.7',
    options: [
      { label: 'A', text: 'Daje ofierze do wyboru 100 równorzędnych opcji w ankiecie.', isCorrect: false },
      { label: 'B', text: 'Przedstawia tylko dwie skrajne, spreparowane opcje (np. „Albo dziś ze mną podpiszesz umowę, albo dowiedziesz, że nie zależy ci na rodzinie”), ukrywając fakt, że istnieją dziesiątki innych rozwiązań.', isCorrect: true },
      { label: 'C', text: 'Pozwala wybrać dowolny kolor długopisu.', isCorrect: false },
      { label: 'D', text: 'Każe losować monetą każdą decyzję życiową.', isCorrect: false }
    ],
    explanation: 'Manipulator zamyka ofiarę w sztucznym korytarzu decyzyjnym (Kahneman: WYSIATI — To, co widzisz, to wszystko, co istnieje). Kluczem do obrony jest wyjście poza narzucony fałszywy dualizm.',
    keyTakeaway: 'Nie wybieraj mniejszego zła z listy przygotowanej przez manipulatora. Zmień samą listę.'
  },
  {
    id: 5,
    question: 'Zgodnie z zasadami asertywności, jaka jest najskuteczniejsza technika rozbrojenia szantażu emocjonalnego opartego na wzbudzaniu poczucia winy („Jak możesz mi to robić po tym wszystkim, co dla ciebie poświęciłem?!”) (Sekcja 9.8 i 9.12)?',
    topic: 'Technika Zdarta Płyta i Oddzielenie Winy od Wyboru',
    sectionRef: 'Sekcja 9.12',
    options: [
      { label: 'A', text: 'Płacz, padnięcie na kolana i przepraszanie za swoje istnienie.', isCorrect: false },
      { label: 'B', text: 'Technika zamglonej tarczy i asertywnego ugruntowania: „Doceniam to, co dla mnie zrobiłeś, i jednocześnie w tej konkretnej sprawie podejmuję decyzję X”.', isCorrect: true },
      { label: 'C', text: 'Fizyczny atak na szantażystę.', isCorrect: false },
      { label: 'D', text: 'Podpisanie zrzeczenia się majątku.', isCorrect: false }
    ],
    explanation: 'Szantażysta liczy na to, że wciągnie cię w kłótnię o przeszłość lub wywoła paraliżujący wstyd. Uznanie faktu z jednoczesnym utrzymaniem granicy rozrywa manipulacyjną pętlę poczucia winy.',
    keyTakeaway: 'Możesz kochać człowieka i jednocześnie stanowczo odmówić spełnienia jego żądania.'
  },
  {
    id: 6,
    question: 'Na czym polega akronim DARVO (Deny, Attack, Reverse Victim and Offender) w toksycznych konfrontacjach (Sekcja 9.6)?',
    topic: 'Mechanizm DARVO',
    sectionRef: 'Sekcja 9.6',
    options: [
      { label: 'A', text: 'Na technice szybkiego zapamiętywania słówek języka obcego.', isCorrect: false },
      { label: 'B', text: 'Sprawca zaprzecza faktom (Deny), atakuje osobę zgłaszającą krzywdę (Attack) oraz odwraca role, kreując siebie na niewinną ofiarę, a ofiarę na agresora (Reverse Victim and Offender).', isCorrect: true },
      { label: 'C', text: 'Na wojskowym protokole szyfrowania radiowego.', isCorrect: false },
      { label: 'D', text: 'Na systemie motywacyjnym dla pracowników handlowych.', isCorrect: false }
    ],
    explanation: 'DARVO (zdefiniowane przez prof. Jennifer Freyd) to manewr odwracania uwagi. Gdy sprawca zostaje przyłapany na kłamstwie lub krzywdzie, zaczyna krzyczeć: „Jak możesz mnie o to podejrzewać, po tym wszystkim to ja jestem tu niszczony!”.',
    keyTakeaway: 'Kiedy oskarżony o krzywdę nagle staje się największą ofiarą rozmowy — obserwujesz DARVO.'
  },
  {
    id: 7,
    question: 'Czym różnią się „Dark Patterns” (Ciemne Wzorce Projektowe) w aplikacjach internetowych od zwykłego marketingu (Sekcja 9.11)?',
    topic: 'Dark Patterns w Świecie Cyfrowym',
    sectionRef: 'Sekcja 9.11',
    options: [
      { label: 'A', text: 'Wykorzystują wyłącznie czarny kolor tła na stronach internetowych.', isCorrect: false },
      { label: 'B', text: 'Są to interfejsy zaprojektowane z premedytacją tak, by wykorzystać luki w ludzkiej percepcji (np. mylące przyciski, ukryte subskrypcje, shame-canceling: „Nie, wolę płacić więcej”), skłaniając do niekorzystnych decyzji.', isCorrect: true },
      { label: 'C', text: 'Są tworzone wyłącznie przez hakerów działających w Darknecie.', isCorrect: false },
      { label: 'D', text: 'Polegają na całkowitym wyłączeniu internetu w godzinach nocnych.', isCorrect: false }
    ],
    explanation: 'Dark Patterns exploitują zmęczenie decyzyjne, heurystykę domyślności i lęk przed odrzuceniem w kodzie UI/UX, omijając świadomą zgodę użytkownika.',
    keyTakeaway: 'Jeśli interfejs zawstydza cię za próbę rezygnacji, to nie jest design — to cyfrowy szantaż.'
  }
];

export const chapterNineCaseStudyFamilyGuilt: CaseStudy = {
  id: 'cs-ch9-rodzina-fog',
  title: 'Choroba na Zawołanie: Agnieszka i Niewidzialna Smycz Matki',
  subtitle: 'Jak szantaż emocjonalny FOG (Strach, Obowiązek, Wina) niszczył niezależność 36-letniej córki',
  protagonist: 'Agnieszka (36 lat, tłumaczka) i jej matka Teresa (64 lata, na emeryturze)',
  context: 'Planowany pierwszy od trzech lat dwutygodniowy urlop Agnieszki z mężem i dziećmi za granicą.',
  story: [
    'Agnieszka od miesięcy marzyła o wyjeździe z mężem i dwójką dzieci do Grecji. Bilety były kupione, hotel opłacony. Gdy na trzy dni przed wylotem odwiedziła matkę Teresę, by przekazać zapasowe klucze, w mieszkaniu panował półmrok.',
    'Matka leżała na kanapie z kompresem na czole i termometrem w dłoni. Słabym, łamiącym się głosem powiedziała: „Agnieszko... od wczoraj mam potworne kłucie w klatce piersiowej. Lekarz w przychodni powiedział, że to może być stan przedzawałowy ze stresu. Ale wy jedźcie, bawcie się dobrze w tym słońcu. Jakoś sobie poradzę. W razie czego sąsiedzi może wezwą pogotowie, jak nie będę odbierać”.',
    'Agnieszka poczuła, jak grunt usuwa jej się spod nóg. W jej głowie eksplodowało poczucie winy: „Moja matka może umrzeć, a ja myślę o plaży. Jestem wyrodną córką, samolubną egoistką”. Zadzwoniła do męża ze łzami, że muszą odwołać urlop.',
    'Mąż przypomniał jej, że dokładnie taka sama sytuacja wydarzyła się w zeszłym roku przed wyjazdem w Tatry, a dwa lata wcześniej w dniu obrony jej doktoratu — za każdym razem, gdy Agnieszka kierowała uwagę poza matkę, Teresa lądowała na kanapie z tajemniczą dolegliwością, która znikała 24 godziny po odwołaniu planów.',
    'Agnieszka stanęła przed dramatycznym wyborem: ulec szantażowi i zniszczyć urlop dzieciom, czy postawić granicę i zmierzyć się z potwornym lękiem o zdrowie matki.'
  ],
  decisionTaken: 'Agnieszka zorganizowała profesjonalną opiekę medyczną dla matki na czas wyjazdu, odmawiając jednoczesnego odwołania urlopu rodzinnego.',
  whatProtagonistSaw: 'Śmiertelnie chorą, samotną matkę, która potrzebuje jej obecności do przeżycia.',
  whatWasMissed: 'Że somatyzacja Teresy była nieświadomą lub półświadomą bronią kontroli, wyuczoną w celu zapobiegania naturalnej separacji dorosłej córki.',
  psychologicalAnalysis: {
    coreMechanism: 'Szantaż Emocjonalny FOG (Fear, Obligation, Guilt) połączony z wtórnymi korzyściami z choroby i triangulacją relacji małżeńskiej.',
    cognitiveBiases: [
      { name: 'Nadmierna odpowiedzialność moralna', description: 'Przekonanie Agnieszki, że odpowiada w 100% za stan emocjonalny i zdrowotny dorosłej matki.', impact: 'Paraliż autonomii życiowej.' },
      { name: 'Katastrofizowanie', description: 'Wyobrażenie, że wyjazd do Grecji bezpośrednio spowoduje śmierć matki.', impact: 'Poddanie się presji szantażystki.' }
    ],
    defenseMechanisms: [
      { name: 'Somatyzacja u matki', explanation: 'Konwersja lęku przed opuszczeniem w realne, fizjologiczne objawy kłucia w klatce.' }
    ],
    emotionalDynamic: 'Klasyczny cykl FOG: Szantażysta stawia żądanie → ofiara stawia opór → szantażysta wzmaga presję chorobą/milczeniem → ofiara kapituluje → ulga → kolejny szantaż.'
  },
  decisionProcessAnalysis: {
    trigger: 'Widok cierpiącej matki na kanapie i komunikat o samotnej śmierci.',
    attentionFocus: 'Własne poczucie winy i wizja telefonu ze szpitala podczas urlopu.',
    interpretation: '„Jestem złą córką, która przedkłada basen nad życie matki”.',
    emotion: 'Wina neurotyczna, panika, bezsilna złość na męża.',
    impulse: 'Natychmiast rzucić bilety i zostać przy łóżku matki.',
    action: 'Zastosowanie asertywnego protokołu: wezwanie prywatnej opieki pielęgniarskiej i wylot na urlop.',
    consequence: 'Uzdrowienie granic w rodzinie, uratowanie małżeństwa i spadek częstotliwości rzekomych „zawałów” matki.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przednia kora zakrętu obręczy (dACC)', role: 'Rejestracja bólu wywołanego oskarżeniem o brak empatii', activationState: 'Bardzo wysoka' },
      { region: 'Prawostronna kora czołowa', role: 'Generowanie ruminacji i poczucia winy', activationState: 'Przeciążenie' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol', roleInScenario: 'Utrzymywanie stanu chronicznego czuwania i gotowości do ratowania matki' }
    ],
    biologicalTimeline: [
      { timeMs: '0 - 300 ms', process: 'Słowa matki o umieraniu aktywują somatyczny ból w żołądku córki.' },
      { timeMs: 'Dzień 1 wyjazdu', process: 'Kortyzol opada po potwierdzeniu przez pielęgniarkę, że parametry matki są idealne.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Szantaż Cierpiętniczy (The Sufferer)', description: '„Jeśli nie zrobisz tego, co chcę, będę cierpieć przez ciebie”.', vulnerabilityExploited: 'Głęboko zaszczepione w dzieciństwie poczucie długu wobec rodzica' }
    ],
    counterMeasures: [
      { step: 'Protokół Trzeźwego Pomagania', script: '„Mamo, bardzo niepokoi mnie twój stan. Ponieważ nie jestem lekarzem, wykupiłam na te 10 dni codzienną wizytę pielęgniarki i lekarza domowego, który będzie u ciebie codziennie o 10:00. My lecimy do Grecji i będziemy dzwonić wieczorami. Zdrowie twoje jest zabezpieczone”.', rationale: 'Rozbraja szantaż: zapewnia realną pomoc medyczną, jednocześnie odmawiając oddania własnej wolności.' }
    ]
  },
  alternativePath: 'Gdyby Agnieszka odwołała wyjazd, po trzech dniach matka cudownie by wyzdrowiała, mąż złożyłby pozew rozwodowy z powodu braku granic, a Agnieszka spędziłaby resztę życia jako uwięziona opiekunka kaprysów matki.',
  readerQuestion: 'W jakich relacjach pozwalasz innym na kontrolowanie Twoich planów za pomocą ich złego nastroju lub demonstracji cierpienia?',
  keyTakeaway: 'Nie jesteś odpowiedzialny za cudze emocje, jeśli Twoje działania są uczciwe i pełne szacunku. Pozwól dorosłym ludziom przeżywać ich własne rozczarowania.'
};

export const chapterNineCaseStudyDarvo: CaseStudy = {
  id: 'cs-ch9-darvo-finanse',
  title: 'Odwrócona Klatka: Piotr, Klaudia i Manewr DARVO',
  subtitle: 'Jak sprawca zdrady finansowej przekształcił siebie w ofiarę, a partnera w agresora',
  protagonist: 'Piotr (28 lat, analityk) i Klaudia (27 lat, specjalistka PR)',
  context: 'Wspólne mieszkanie po odkryciu przez Piotra tajemniczego długu na wspólnym koncie oszczędnościowym.',
  story: [
    'Piotr i Klaudia od dwóch lat zbierali na wkład własny na mieszkanie. Mieli wspólne konto, na które co miesiąc przelewali po 2000 zł. Pewnego wieczoru Piotr zalogował się do banku, by sprawdzić saldo. Ze zdumieniem odkrył, że z konta zniknęło 25 000 zł, a karta debetowa Klaudii była obciążona pożyczką gotówkową na luksusowe zakupy odzieżowe i wyjazd do SPA.',
    'Piotr, zszokowany i zraniony, wszedł do pokoju z wydrukiem wyciągu bankowego i zapytał spokojnie, choć drżącym głosem: „Klaudia, co to jest? Dlaczego wypłaciłaś nasze oszczędności bez słowa?”.',
    'W tym momencie Klaudia zastosowała podręcznikowy manewr DARVO:',
    'Krok 1 (Deny - Zaprzeczenie): „To jakaś pomyłka banku! Albo prowizja, o której nie wiesz!”. Kiedy Piotr pokazał jej transakcje z jej imieniem, nastąpił zwrot.',
    'Krok 2 (Attack - Atak): Klaudia zerwała się z fotela z błyskiem wściekłości w oku: „Ty mnie sprawdzasz?! Przeglądasz moje wyciągi za moimi plecami?! Jesteś chorym z zazdrości, kontrolującym paranoikiem! Żaden normalny facet nie szpieguje kobiety, z którą mieszka!”.',
    'Krok 3 (Reverse Victim and Offender - Odwrócenie Ról): Klaudia zalała się łzami, osunęła na kolana i zaczęła łkać: „Moje przyjaciółki ostrzegały mnie przed tobą! Żyję w tym domu jak w więzieniu z klawiszem, który liczy mi każdy grosz! Nie mam prawa do odrobiny radości, bo pan i władca musi mieć wszystko w tabelkach! Czuję się zdeptana i poniżona!”.',
    'Piotr zbaraniał. Zamiast rozmawiać o skradzionych 25 000 zł, po 15 minutach siedział na kanapie, podając Klaudii chusteczki i przepraszając ją za to, że „zrobił to tak niezręcznie i zranił jej uczucia”.'
  ],
  decisionTaken: 'Piotr wycofał się z rozliczenia kradzieży oszczędności i wziął na siebie winę za wywołanie kryzysu w związku.',
  whatProtagonistSaw: 'Płaczącą, zranioną kobietę, która czuje się kontrolowana przez jego pedantyzm finansowy.',
  whatWasMissed: 'Że furia i łzy Klaudii były precyzyjną zasłoną dymną mającą uniemożliwić rozliczenie oszustwa majątkowego.',
  psychologicalAnalysis: {
    coreMechanism: 'Manewr DARVO (Deny, Attack, Reverse Victim and Offender) sprzężony z gaslightingiem relacyjnym i odwróceniem wektora winy.',
    cognitiveBiases: [
      { name: 'Zwątpienie we własną rację moralną', description: 'Piotr uwierzył, że sprawdzenie wspólnego konta było „szpiegowaniem”.', impact: 'Kapitulacja przed sprawcą.' }
    ],
    defenseMechanisms: [
      { name: 'Projekcja winy u Klaudii', explanation: 'Oskarżenie Piotra o despotyzm, aby nie musieć skonfrontować się z własnym uzależnieniem od zakupów.' }
    ],
    emotionalDynamic: 'Agresor przejmuje status ofiary, wymuszając na prawdziwej ofierze rolę ratownika i przepraszającego.'
  },
  decisionProcessAnalysis: {
    trigger: 'Konfrontacja z twardymi dowodami zdrady finansowej.',
    attentionFocus: 'Oskarżenie o szpiegowanie i histeria partnerki.',
    interpretation: '„Jestem złym, zaborczym partnerem, który doprowadził ukochaną do płaczu”.',
    emotion: 'Wstyd, konfuzja, paraliż decyzyjny.',
    impulse: 'Zakończyć awanturę i pocieszyć płaczącą kobietę.',
    action: 'Schowanie wyciągów i przeprosiny za „brak taktu”.',
    consequence: 'Dalsze zadłużanie wspólnego majątku i całkowita utrata szacunku w relacji.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Kora zakrętu obręczy (ACC)', role: 'Poczucie dysonansu moralnego u Piotra', activationState: 'Ekstremalna dezorientacja' },
      { region: 'Brzuszno-boczna kora przedczołowa', role: 'Utrzymanie linii obrony faktów', activationState: 'Zablokowana przez empatię wobec płaczu Klaudii' }
    ],
    neurotransmitters: [
      { name: 'Oksytocyna', roleInScenario: 'Odruch opiekuńczy wywołany łzami manipulatorki unieważnia sygnał zdrady' }
    ],
    biologicalTimeline: [
      { timeMs: '0 - 1 minuta', process: 'Faza zaprzeczenia i krzyk: aktywacja lęku przed konfliktem u Piotra.' },
      { timeMs: '2 - 5 minuta', process: 'Płacz i rola ofiary: przejście Piotra w tryb uległości ratowniczej.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'DARVO i Odwrócenie Wektora Sprawstwa', description: 'Przekształcenie własnego czynu przestępczego w dyskusję o metodzie jego ujawnienia.', vulnerabilityExploited: 'Rycerskość, lęk przed byciem uznanym za tyrana' }
    ],
    counterMeasures: [
      { step: 'Technika Żelaznego Punktu Ciężkości (Anchoring to Facts)', script: '„Klaudio, widzę, że płaczesz i słyszę twoje zarzuty dotyczące sprawdzania konta. Porozmawiamy o zasadach wglądu w konto później. W tej chwili rozmawiamy WYŁĄCZNIE o zniknięciu 25 000 zł ze wspólnych oszczędności. Gdzie są te pieniądze i jak zamierzasz je zwrócić?”.', rationale: 'Całkowita odmowa wejścia w dyskusję o „metodzie szpiegowania” i trzymanie manipulatora przy twardym fakcie pierwotnym.' }
    ]
  },
  alternativePath: 'Gdyby Piotr utrzymał żelazny punkt ciężkości, Klaudia musiałaby skonfrontować się z własnym nałogiem zakupowym, podjąć terapię i podpisać rozdzielność majątkową, co uratowałoby ich przyszłość.',
  readerQuestion: 'Ile razy w życiu zacząłeś rozmowę o czyjejś krzywdzącej postawie, a skończyłeś na przepraszaniu za to, w jaki sposób o tym powiedziałeś?',
  keyTakeaway: 'Nie pozwól, aby sprawca dyktował temat rozmowy o swojej winie. Trzymaj się pierwotnego faktu jak skały.'
};

export const chapterNineExerciseGuiltDecoder: SelfExercise = {
  id: 'ex-ch9-guilt-decoder',
  title: 'Ćwiczenie 9.1: Dekoder Poczucia Winy — Wina Zdrowa a Wina Neurotyczna',
  subtitle: 'Naucz się odróżniać sygnał sumienia od manipulacyjnego sznurka pociąganego przez innych',
  objective: 'Zdemaskowanie nieuzasadnionego poczucia winy wzbudzanego przez otoczenie i odzyskanie spokoju sumienia.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Świadome rozróżnienie winy adaptacyjnej (związanej z realną szkodą) od winy narzuconej aktywuje lewostronną grzbietowo-boczną korę przedczołową, wygaszając nadmierną reaktywność wyspy.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zidentyfikuj sytuację gryzące poczucie winy',
      instruction: 'Przypomnij sobie odmowę lub decyzję, z powodu której czujesz się „złym człowiekiem” wobec kogoś bliskiego lub szefa.',
      promptText: 'Wobec kogo czujesz winę i jaka sytuacja ją wywołała?',
      placeholder: 'Czuję winę wobec brata, bo odmówiłem pożyczenia mu 10 000 zł na kolejny ryzykowny interes...'
    },
    {
      stepNumber: 2,
      title: 'Test 3 Pytań Rzeczywistości',
      instruction: 'Odpowiedz twardo na pytania: 1. Czy złamałem wcześniejszą, dobrowolną obietnicę? 2. Czy celowo wyrządziłem tej osobie realną krzywdę? 3. Czy ta osoba próbuje przerzucić na mnie odpowiedzialność za własne wybory?',
      promptText: 'Odpowiedzi na 3 pytania sprawdzające:',
      placeholder: '1. Nie obiecywałem pożyczki. 2. Nie skrzywdziłem go, chronię własne oszczędności. 3. Tak, brat sam doprowadził do długu i oczekuje, że go uratuję.'
    },
    {
      stepNumber: 3,
      title: 'Sformułuj Asertywne Zwolnienie z Winy',
      instruction: 'Napisz zdanie ugruntowujące, które wypowiesz sobie w duchu za każdym razem, gdy powróci fałszywe poczucie winy.',
      promptText: 'Moja formuła wewnętrznego spokoju:',
      placeholder: '„Mam prawo chronić swoje bezpieczeństwo finansowe. Odmowa pożyczki nie jest brakiem miłości braterskiej”.'
    }
  ],
  reflectionQuestions: [
    'Kto w Twoim dzieciństwie najskuteczniej kontrolował Cię za pomocą obrażania się i milczenia?',
    'Czego tak naprawdę obawiasz się, gdybyś całkowicie przestał ulegać cudzym fochom?'
  ]
};

export const chapterNineExerciseGaslightJournal: SelfExercise = {
  id: 'ex-ch9-gaslight-journal',
  title: 'Ćwiczenie 9.2: Dziennik Faktów — Tarcza Przeciwko Gaslightingowi',
  subtitle: 'Stwórz nienaruszalny zewnętrzny nośnik pamięci, którego nikt nie zdoła zakwestionować',
  objective: 'Zbudowanie nawyku dokumentowania ustaleń, słów i faktów w relacjach o wysokim poziomie manipulacji.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Zewnętrzny zapis faktów zdejmuje z hipokampa ciężar pamięciowy i zapobiega efektowi podatności na dezinformację Elizabeth Loftus.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz relację, w której czujesz zamęt poznawczy',
      instruction: 'Wskaż osobę, przy której regularnie słyszysz: „Nigdy tego nie mówiłem”, „Źle pamiętasz”, „Wymyślasz problemy”.',
      promptText: 'Kto wywołuje w Tobie to zwątpienie i jakie słowa padają najczęściej?',
      placeholder: 'Mój wspólnik / partner często mówi: „Przecież ustaliliśmy inaczej, masz fatalną pamięć”...'
    },
    {
      stepNumber: 2,
      title: 'Wprowadź Zasadę Podsumowania Mailowego (Paper Trail)',
      instruction: 'Po każdej ważnej rozmowie wyślij krótkie, rzeczowe podsumowanie: „Dziękuję za rozmowę. Podsumowując: do piątku robisz X, a ja robię Y. Jeśli coś pominąłem, daj znać”.',
      promptText: 'Wpisz treść szablonu podsumowania, którego użyjesz:',
      placeholder: '„Cześć, w nawiązaniu do naszej dzisiejszej rozmowy, potwierdzam nasze ustalenia: 1... 2... Pozdrawiam serdecznie”.'
    },
    {
      stepNumber: 3,
      title: 'Zapisz 3 twarde kotwice rzeczywistości',
      instruction: 'Wypisz 3 niezaprzeczalne fakty z ostatnich tygodni, które manipulator próbował podważyć, a które są w 100% prawdziwe.',
      promptText: 'Moje 3 kotwice prawdy:',
      placeholder: '1. Widziałem tę fakturę na własne oczy 12 maja. 2. Poinformowałem o urlopie 3 tygodnie temu. 3. Moje zmysły działają bezbłędnie.'
    }
  ],
  reflectionQuestions: [
    'Dlaczego tak łatwo przychodzi Ci uwierzyć w cudzą pewność siebie, kosztem własnej pamięci?',
    'Jakie to uczucie wiedzieć, że masz czarno na białym dowód na to, że miałeś rację?'
  ]
};

export const chapterNineExerciseAssertiveScripts: SelfExercise = {
  id: 'ex-ch9-assertive-scripts',
  title: 'Ćwiczenie 9.3: Skryptor Granic — Technika Zdartej Płyty i Zamglonej Tarczy',
  subtitle: 'Wytrenuj gotowe formuły językowe, które neutralizują agresję i próby naruszania granic',
  objective: 'Zbudowanie automatyzmu asertywnego, który nie pozwala wciągnąć Cię w pyskówki i manipulacyjne bagna.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Gotowy, zautomatyzowany skrypt lingwistyczny redukuje obciążenie kory przedczołowej w warunkach stresu, chroniąc przed reakcją walcz-lub-uciekaj.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz natrętną prośbę lub atak',
      instruction: 'Opisz powtarzającą się sytuację, w której ktoś próbuje wymusić na Tobie coś wbrew Twojej woli (np. pożyczka, darmowa praca, wtrącanie się w wychowanie dzieci).',
      promptText: 'Jaki nacisk jest na Ciebie wywierany?',
      placeholder: 'Teściowa mówi: „Musicie ochrzcić dziecko w tradycyjny sposób, co powie rodzina!”...'
    },
    {
      stepNumber: 2,
      title: 'Skonstruuj Zdartą Płytę (Broken Record)',
      instruction: 'Ułóż jedno neutralne, krótkie zdanie odmowne i zobowiąż się powtórzyć je 3 razy z rzędu bez zmiany ani jednego słowa.',
      promptText: 'Moja Zdarta Płyta:',
      placeholder: '„Rozumiem pani zdanie, i jednocześnie podjęliśmy z mężem decyzję, że chrzest odbędzie się w wąskim gronie”.'
    },
    {
      stepNumber: 3,
      title: 'Skonstruuj Zamgloną Tarczę (Fogging)',
      instruction: 'Zgódź się z częścią prawdy lub prawem rozmówcy do własnej opinii, nie ustępując ani na milimetr ze swojej decyzji.',
      promptText: 'Moja Zamglona Tarcza:',
      placeholder: '„To prawda, rodzina może być zaskoczona. I jednocześnie nasza decyzja pozostaje niezmienna”.'
    }
  ],
  reflectionQuestions: [
    'Dlaczego próba tłumaczenia się i podawania 10 powodów odmowy jest największym prezentem dla manipulatora?',
    'Jak zmienia się Twoja siła wewnętrzna, gdy mówisz spokojnym, cichym i nieugiętym głosem?'
  ]
};

export const chapterNine: Chapter = {
  number: 9,
  title: 'Manipulacja: Anatomia Psychologicznego Sabotażu',
  subtitle: 'Jak rozpoznawać ukryte techniki wpływu, neutralizować szantaż emocjonalny i budować nienaruszalne granice',
  leadParagraph: 'Nie każde nieprzyjemne zachowanie jest manipulacją. Czasem to po prostu ludzki błąd, zły dzień, różnica temperamentów czy brak kompetencji komunikacyjnych. Prawdziwa manipulacja zaczyna się tam, gdzie pojawia się ukryta agenda, asymetria informacji i celowe sabotowanie zdolności poznawczych drugiego człowieka. W tym rozdziale zapalimy światło w najciemniejszych zakamarkach psychologicznych gier: od gaslightingu i DARVO, przez szantaż FOG, po obronę asertywną.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-9-1',
      pageNumber: 388,
      sectionNumber: '9.1',
      title: 'Czym jest manipulacja? Anatomia zniekształconej gry',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Manipulator nie przekonuje cię do swoich racji. Sprawia, że sam przekonujesz siebie do realizacji jego planu, wierząc, że to twój własny pomysł.',
        author: 'Harriet Braiker'
      },
      paragraphs: [
        'Wyobraź sobie grę w szachy, w której przeciwnik nie tylko wykonuje ruchy figurami na planszy, ale gdy odwracasz wzrok, przesuwa Twojego piona, a gdy pytasz o to z zaskoczeniem, patrzy Ci w oczy z zatroskaną miną i pyta: „Czy ty na pewno dobrze się czujesz? Przecież sam go tam postawiłeś dziesięć sekund temu”.',
        'To jest istota manipulacji: instrumentalne potraktowanie drugiego człowieka jako pionka w cudzej partii, przy jednoczesnym zatarciu śladów samej ingerencji. Słowo „manipulacja” pochodzi od łacińskiego manus (ręka) i manipulare (kierować, sterować). Manipulator trzyma rękę na Twoich sznurkach emocjonalnych, ukrywając swoje rzeczywiste intencje i ograniczając Twoje pole wyboru.',
        'BŁĘDNA INTUICJA: Powszechne w pop-psychologii jest amatorskie diagnozowanie każdego trudnego człowieka jako „narcyza”, „socjopaty” czy „toksyka”. Należy wprowadzić tu fundamentalne rozróżnienie merytoryczne. Nie każde krzywdzące zachowanie jest wyrachowaną manipulacją. Wiele osób stosuje nieświadome, obronne mechanizmy wyuczone w rodzinie pochodzenia (np. wycofywanie się w milczenie, lękowe wyolbrzymianie problemów, szukanie uwagi przez skargę) z powodu deficytów komunikacyjnych i braku samoregulacji emocjonalnej.',
        'Manipulacja instrumentalna to systematyczne, asymetryczne działanie mające na celu pozbawienie drugiej osoby sprawczości, zniekształcenie jej percepcji lub wymuszenie korzyści kosztem jej dobrostanu. Niezależnie jednak od tego, czy zachowanie wynika z cynizmu, czy z niedojrzałości, Twoja odpowiedzialność polega na postawieniu nienaruszalnych granic.'
      ]
    },
    {
      id: 'sec-9-2',
      pageNumber: 392,
      sectionNumber: '9.2',
      title: 'Sztuczna presja czasu: Kradzież tlenu kory przedczołowej',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'System 2 — Twój logiczny, analityczny procesor opisany w Tomie I — ma jedną fundamentalną wadę: jest powolny i energochłonny. Aby przeanalizować umowę, zważyć ryzyka i skonsultować się z ekspertem, potrzebujesz minut, godzin lub dni.',
        'Manipulator doskonale o tym wie. Dlatego jego pierwszą bronią jest zawsze SZTUCZNA PRESJA CZASU (Artificial Urgency). Komunikaty w stylu: „Decyzję musisz podjąć w tej chwili”, „Mam trzech innych chętnych za drzwiami”, „Promocja kończy się za 60 sekund” mają jeden cel: zalać mózg noradrenaliną, odciąć zasilanie od dlPFC i zmusić Cię do reakcji limbicznej.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 1: Pokaz garnków i mat magnetycznych dla seniorów — Kradzież czasu decyzyjnego',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: 73-letnia emerytka Danuta zostaje zaproszona do hotelowej sali konferencyjnej na „bezpłatne profilaktyczne badanie krążenia”. Po 15 minutach badania rozpoczyna się 2-godzinna agresywna prezentacja wełnianej pościeli i mat leczniczych za 8 900 zł.',
            '2. Co widzi bohater (pani Danuta): Danuta widzi troskliwego młodego prezentera, który roztacza wizję udarów i zawałów grożących seniorom, a następnie krzyczy do mikrofonu: „Tylko pierwsze 3 osoby, które podejdą do stolika w ciągu 180 sekund, otrzymają dotację unijną 4000 zł! Zegar tyka!”. Danuta czuje, że musi biec do stolika, by nie stracić szansy na zdrowie.',
            '3. Czego bohater nie widzi (martwe pole): Danuta nie dostrzega, że żadna „dotacja unijna” nie istnieje, cena 8 900 zł jest ośmiokrotnie zawyżona, a pośpiech służy wyłącznie temu, by nie zdążyła zadzwonić do syna ani przeczytać 12-stronicowej umowy kredytowej.',
            '4. Działający mechanizm psychologiczny: Sztuczna presja czasu (Artificial Urgency) połączona z apelem o charakterze lękowym (Fear Appeal) i izolacją od otoczenia wspierającego.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W sytuacji realnego zagrożenia fizycznego (atak drapieżnika) brak natychmiastowej reakcji oznaczał śmierć; kora analityczna zostaje wygaszona na rzecz pnia mózgu.',
            '6. Jak rozpoznać w czasie rzeczywistym: Kołatanie serca, suchość w ustach, drżenie dłoni i natarczywa myśl: „Muszę podpisać teraz, bo za chwilę będzie za późno”.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Zastosowanie żelaznej reguły 24 godzin: Danuta wstaje, zabiera prospekt i mówi: „Nigdy nie podpisuję żadnych umów w trakcie prezentacji. Przeanalizuję warunki w domu z rodziną i jeśli uznam to za korzystne, wrócę w poniedziałek”.',
            '8. Konsekwencje alternatywnego wyboru: Prezenter traci panowanie nad sobą (co demaskuje manipulację), a Danuta zachowuje oszczędności całego życia.',
            '9. Wniosek dydaktyczny dla czytelnika: Jeśli oferta jest naprawdę rzetelna i uczciwa dzisiaj, będzie równie dobra za 48 godzin. Żądanie natychmiastowego podpisu to stuprocentowy sygnał manipulacji.'
          ]
        }
      ]
    },
    {
      id: 'sec-9-3',
      pageNumber: 396,
      sectionNumber: '9.3',
      title: 'Poczucie winy jako sznurek: Anatomia szantażu emocjonalnego',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Susan Forward zdefiniowała syndrom FOG (Fear, Obligation, Guilt — Strach, Obowiązek, Wina). Poczucie winy jest dla mózgu społecznym odpowiednikiem bólu fizycznego. Kiedy czujesz, że kogoś zraniłeś, włącza się silny przymus naprawienia szkody.',
        'Szantażysta emocjonalny wytwarza sztuczną winę z niczego: Twoje prawo do odpoczynku, własnych pasji czy ochrony budżetu przedstawia jako dowód Twojego egoizmu i braku serca. Poniższe studium przypadku ukazuje destrukcyjną dynamikę szantażu cierpiętniczego w relacji matki z córką.'
      ],
      caseStudyRef: chapterNineCaseStudyFamilyGuilt
    },
    {
      id: 'sec-9-4',
      pageNumber: 400,
      sectionNumber: '9.4',
      title: 'Fabryka strachu: Paraliżowanie wyobraźni najczarniejszym scenariuszem',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Strach to najstarszy ewolucyjnie klawisz w ludzkim mózgu. Kiedy manipulator roztacza przed Tobą wizję katastrofy („Jeśli nie zrobisz tego, zwolnią cię”, „Twoje dzieci będą żebrakami”, „Nikt cię nigdy nie pokocha”), ciało migdałowate przejmuje pełną kontrolę.',
        'W stanie paniki człowiek oddaje wolność i majątek każdemu, kto obieca mu choćby pozorne bezpieczeństwo. Poniższy warsztat uczy, jak dekodować poczucie winy i oddzielać realną odpowiedzialność od manipulacji.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 2: Agresywna kampania ubezpieczeniowa — Wymuszanie decyzji przez terror moralny',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Młody ojciec Piotr (30 lat) spotyka się z doradcą ubezpieczeniowym. Agent zamiast analizy bilansu finansowego kładzie na stole album ze zdjęciami zmiażdżonych aut i pyta lodowatym głosem: „Czy kocha pan swoje dzieci? Bo jeśli zginie pan jutro na trasie, z czego pana żona kupi jedzenie w przyszłym miesiącu? Jak pan spojrzy w oczy synowi?”.',
            '2. Co widzi bohater (Piotr): Piotr widzi siebie jako wyrodnego, nieodpowiedzialnego ojca, który skazuje własne dzieci na nędzę, jeśli natychmiast nie wykupi najdroższego pakietu z prowizją 600 zł miesięcznie.',
            '3. Czego bohater nie widzi (martwe pole): Piotr nie widzi, że proponowana polisa zawiera rażące wyłączenia odpowiedzialności (OWU) i nie chroni rodziny w większości realnych ryzyk, a agent gra na pierwotnym lęku rodzicielskim.',
            '4. Działający mechanizm psychologiczny: Moralny szantaż lękowy (Fear Appeal) połączony z indukowaniem poczucia winy. Próba wywołania paraliżu afektywnego, w którym zakup staje się jedyną przepustką do odkupienia moralnego.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Troska o potomstwo i lęk przed osieroceniem to najsilniejszy biologiczny imperatyw ssaków.',
            '6. Jak rozpoznać w czasie rzeczywistym: Pojawienie się duszącego ucisku w mostku i poczucia wstydu za zadawanie merytorycznych pytań o koszty.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Asertywne odrzucenie szantażu: „Panie agencie, zadbam o bezpieczeństwo moich dzieci w oparciu o chłodną kalkulację ryzyk, a nie o drastyczne zdjęcia. Dziękuję za to spotkanie. Proszę przesłać OWU na maila, porównam oferty trzech towarzystw i sam podejmę decyzję”.',
            '8. Konsekwencje alternatywnego wyboru: Piotr wybiera czyste ubezpieczenie terminowe na życie za 70 zł miesięcznie z sumą ubezpieczenia 1 000 000 zł, chroniąc rodzinę i oszczędzając 530 zł co miesiąc.',
            '9. Wniosek dydaktyczny dla czytelnika: Kto w relacji biznesowej zaczyna od kwestionowania Twojej miłości do bliskich, ten nie jest doradcą, lecz emocjonalnym szantażystą.'
          ]
        }
      ],
      exerciseRef: chapterNineExerciseGuiltDecoder
    },
    {
      id: 'sec-9-5',
      pageNumber: 404,
      sectionNumber: '9.5',
      title: 'Gaslighting: Gdy ktoś podmienia Ci rzeczywistość pod powiekami',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Nazwa pochodzi ze sztuki teatralnej Gas Light (1938), w której mąż celowo przykręcał lampy gazowe w domu, a gdy żona mówiła, że światło przygasa, wmawiał jej, że traci zmysły.',
        'Współczesny gaslighting to wyrafinowana forma przemocy psychologicznej polegająca na konsekwentnym podważaniu percepcji, pamięci i zdrowia psychicznego ofiary. Zdania-klucze: „Jesteś przewrażliwiona”, „Nigdy czegoś takiego nie mówiłem”, „Masz paranoję”, „Wszyscy widzą, że coś z tobą nie tak”.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 3: Gaslighting w korporacji — Znikające ustalenia projektowe',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Starsza analityczka Ewa przygotowała kwartalny raport finansowy dokładnie według instrukcji udzielonych jej ustnie przez dyrektora Dariusza w cztery oczy. Na zebraniu zarządu dyrektor publicznie krytykuje Ewę: „Pani Ewo, przecież wyraźnie mówiłem pani o nowym wzorze EBITDA. Jak mogła pani popełnić tak szkolny błąd? Ostatnio jest pani strasznie roztargniona”.',
            '2. Co widzi bohater (Ewa): Ewa czuje szok, zawrót głowy i gorączkowe zwątpienie: „Przecież pamiętam, że mówił inaczej... A może to ja się pomyliłam? Może przez te nadgodziny tracę pamięć?”.',
            '3. Czego bohater nie widzi (martwe pole): Ewa nie widzi, że Dariusz sam zapomniał poinformować zarząd o zmianie metodologii i z zimną krwią poświęca reputację analityczki, by zatuszować własną niekompetencję.',
            '4. Działający mechanizm psychologiczny: Gaslighting korporacyjny. Celowe podważanie zaufania pracownika do własnej pamięci i zmysłów w celu ochrony własnego statusu.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W hierarchiach dominacyjnych przerzucenie winy na osobnika niżej w drabinie dziobania chroniło status samca alfa.',
            '6. Jak rozpoznać w czasie rzeczywistym: Poczucie dysocjacji, stałe wracanie do starych rozmów z pytaniem: „Czy ze mną jest coś nie tak?”, połączone z brakiem obiektywnych dowodów.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Wdrożenie żelaznej zasady śladu dokumentacyjnego (Paper Trail): natychmiastowe wysyłanie podsumowań mailowych po każdej rozmowie ustnej: „Dariuszu, podsumowując naszą rozmowę z 14:00, do raportu przyjmuję wskaźnik X”.',
            '8. Konsekwencje alternatywnego wyboru: Na kolejnym zebraniu Ewa spokojnie wyświetla maila potwierdzającego polecenie dyrektora, neutralizując manipulację faktami.',
            '9. Wniosek dydaktyczny dla czytelnika: W relacjach z manipulatorem ustalenia ustne nie istnieją. Twoją jedyną tarczą przed podmienianiem rzeczywistości jest pisemny zapis faktów.'
          ]
        }
      ]
    },
    {
      id: 'sec-9-6',
      pageNumber: 408,
      sectionNumber: '9.6',
      title: 'Odwracanie ról (DARVO): Sprawca staje się ofiarą',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Prof. Jennifer Freyd opisała zjawisko DARVO (Deny, Attack, Reverse Victim and Offender). To uniwersalny mechanizm obronny stosowany przez osoby przyłapane na kłamstwie, zdradzie lub nadużyciu.',
        'Zamiast przeprosić, sprawca natychmiast zaprzecza faktom, atakuje osobę zgłaszającą problem za to, że „śmiała zapytać”, a na koniec urządza spektakl własnego cierpienia, w którym to on staje się udręczoną ofiarą. Studium przypadku poniżej przedstawia mechanizm DARVO w zderzeniu z kradzieżą majątku.'
      ],
      caseStudyRef: chapterNineCaseStudyDarvo
    },
    {
      id: 'sec-9-7',
      pageNumber: 412,
      sectionNumber: '9.7',
      title: 'Fałszywy dylemat: Zamykanie ofiary w korytarzu dwóch złych wyborów',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Człowiek ma naturalną tendencję do myślenia binarnego: tak/nie, białe/czarne, zysk/strata. Manipulator wykorzystuje tę lukę, stawiając fałszywą alternatywę: „Albo zostajesz po godzinach, albo firma upadnie”, „Albo mi ufasz i dasz hasło do telefonu, albo mnie zdradzasz”.',
        'W rzeczywistości między opcją A i B istnieje całe spektrum innych możliwości (C, D, E). Obrona przed fałszywym dylematem polega na odmowie wyboru i rozbiciu samej ramy pytania.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 5: Fałszywy dylemat u kierownika projektu — Zamykanie w sztucznym korytarzu',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: W piątek o 16:55 kierownik projektu Tomasz wchodzi do pokoju programisty Rafała (27 lat) i stawia ultimatum: „Rafał, albo zostaniesz dziś do 23:00 i dokończysz ten moduł, albo w poniedziałek powiem dyrektorowi, że przez twoje lenistwo straciliśmy klienta i nie dostaniesz premii”.',
            '2. Co widzi bohater (Rafał): Rafał czuje panikę i złość. Widzi tylko dwie drogi: albo poświęcić prywatny wieczór i rodzinę, albo stać się kozłem ofiarnym w oczach zarządu.',
            '3. Czego bohater nie widzi (martwe pole): Rafał nie dostrzega, że Tomasz stawia fałszywy dylemat, by zamaskować własne rażące błędy w harmonogramie wdrożenia, a klient wcale nie zażądał kodu w weekend, lecz w kolejną środę.',
            '4. Działający mechanizm psychologiczny: Błąd fałszywego dylematu (False Dilemma) połączony z szantażem utraty reputacji zawodowej.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W obliczu zagrożenia umysł ma tendencję do redukowania złożoności do prostych kategorii binarnych (walcz albo uciekaj).',
            '6. Jak rozpoznać w czasie rzeczywistym: Poczucie klaustrofobii decyzyjnej i obecność spójnika: „Albo zrobisz X, albo stanie się straszne Y”.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Rozbicie binarnej ramy i wyjście poza korytarz: „Tomaszu, nie wybieram żadnej z tych dwóch opcji. Zgodnie z kodeksem pracy kończę zmianę o 17:00. W poniedziałek o 8:00 wspólnie z dyrektorem przeanalizujemy status modułu i zaproponujemy realny termin testów na środę”.',
            '8. Konsekwencje alternatywnego wyboru: Tomasz wycofuje się z gróźb, Rafał chroni swoje zdrowie i granice, a w poniedziałek zarząd koryguje nierealny harmonogram.',
            '9. Wniosek dydaktyczny dla czytelnika: Kiedy ktoś stawia Cię pod ścianą z dwoma złymi wyborami, zawsze odrzuć ścianę i zapytaj o opcję trzecią i czwartą.'
          ]
        }
      ]
    },
    {
      id: 'sec-9-8',
      pageNumber: 416,
      sectionNumber: '9.8',
      title: 'Cicha agresja: Obrażanie się, karanie ciszą i podwójne wiązanie',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Karanie ciszą (Silent Treatment) to jedna z najbardziej toksycznych form biernej agresji. Odcięcie kontaktu wzrokowego i werbalnego aktywuje w mózgu ofiary przednią korę zakrętu obręczy — dokładnie ten sam obszar, który rejestruje ból fizyczny.',
        'Ofiara nie może się bronić, bo nie ma z kim rozmawiać. Chodzi po domu na palcach, błagając o słowo wyjaśnienia, gotowa na każde ustępstwo, byle przerwać lodowaty mur ciszy. To ewolucyjny koszmar wykluczenia ze stada przeniesiony do domowego salonu.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 4: Trzy dni ciszy po odmowie wyjazdu — Przemoc lodowatego muru',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Łukasz (35 lat) informuje żonę Kamilę w czwartek wieczorem, że w nadchodzący weekend potrzebuje zostać w domu, odespać wyczerpujący tydzień i pobyć w ciszy, zamiast jechać na 3-dniowy zjazd jej dalszej rodziny. Kamila bez słowa odwraca się na pięcie i przez kolejne 72 godziny nie odzywa się do męża ani jednym słowem, ostentacyjnie ignorując jego obecność i trzaskając drzwiami.',
            '2. Co widzi bohater (Łukasz): Łukasz czuje narastające, obezwładniające poczucie winy i lęku. Ma wrażenie, że w mieszkaniu brakuje tlenu, a jego potrzeba odpoczynku była zbrodnią niszczącą małżeństwo.',
            '3. Czego bohater nie widzi (martwe pole): Łukasz nie dostrzega, że milczenie Kamili nie jest „smutkiem”, lecz wyuczoną, potężną bronią dominacyjną mającą zmusić go do kapitulacji i zrzeczenia się prawa do własnych granic.',
            '4. Działający mechanizm psychologiczny: Karanie ciszą (Silent Treatment / Ostracyzm relacyjny). Aktywacja bólu wykluczenia społecznego w dACC w celu złamania oporu partnera.',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): W społecznościach pierwotnych banicja i wykluczenie ze wspólnoty były równoznaczne z wyrokiem śmierci.',
            '6. Jak rozpoznać w czasie rzeczywistym: Poczucie przymusu „przeproszenia za cokolwiek”, byle tylko druga strona zaczęła normalnie odpowiadać.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Neutralna odmowa udziału w spektaklu: „Kamilo, widzę, że wybrałaś milczenie. Szanuję twoją potrzebę wyciszenia. Kiedy zechcesz porozmawiać o naszych planach dorosłym głosem, jestem w salonie”. Następnie Łukasz zajmuje się swoimi sprawami bez żebrania o kontakt.',
            '8. Konsekwencje alternatywnego wyboru: Kamila po 24 godzinach orientuje się, że karanie ciszą nie przynosi uległości, przerywa blokadę i rozpoczyna rozmowę o swoich obawach przed reakcją rodziców.',
            '9. Wniosek dydaktyczny dla czytelnika: Karanie ciszą żywi się Twoją paniką przed odrzuceniem. Kiedy przestajesz przepraszać za swoje granice, mur obojętności natychmiast traci swoją moc operacyjną.'
          ]
        }
      ]
    },
    {
      id: 'sec-9-9',
      pageNumber: 420,
      sectionNumber: '9.9',
      title: 'Izolacja społeczna: Odcinanie gałęzi wsparcia',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Zanim drapieżnik zaatakuje ofiarę, odcina ją od stada. Toksyczny partner lub sekta zawsze zaczyna od subtelnego obrzydzania Twoich przyjaciół i rodziny: „Oni cię nie rozumieją”, „Twoja matka ci zazdrości”, „Twoi znajomi mają zły wpływ na nasz związek”.',
        'Kiedy ofiara zerwie relacje z bliskimi, manipulator staje się jej jedynym punktem odniesienia do rzeczywistości — nie ma już nikogo, kto mógłby powiedzieć: „Hej, to co on ci robi, nie jest normalne!”.',
        'Poniższy warsztat uczy budowania dziennika faktów jako nienaruszalnej tarczy przed manipulacją.'
      ],
      exerciseRef: chapterNineExerciseGaslightJournal
    },
    {
      id: 'sec-9-10',
      pageNumber: 424,
      sectionNumber: '9.10',
      title: 'Cykl przemocy psychicznej: Od Love Bombingu do dewaluacji',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Relacje z manipulatorami nie zaczynają się od kłótni i przemocy. Zaczynają się od bajki. Love Bombing (bombardowanie miłością) to zalew komplementami, prezentami i deklaracjami dozgonnej miłości po kilku dniach znajomości.',
        'Mózg zostaje zalany dopaminą i oksytocyną. Kiedy pułapka się zatrzaśnie, następuje faza druga: Dewaluacja (krytyka, chłód, wyśmiewanie). Ofiara zrobi wszystko, by odzyskać „tamtego cudownego człowieka z początku”, wchodząc w mechanizm uzależnienia przerywanego (jak hazardzista przy jednorękim bandycie).'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 6: Nowy adorator na portalu randkowym — Pętla Love Bombingu',
          paragraphs: [
            '1. Obiektywna sytuacja i fakty: Marta (30 lat) poznaje na aplikacji randkowej Konrada (33 lata). Konrad po 48 godzinach przysyła kosze 100 róż do jej pracy, dzwoni kilkanaście razy dziennie, a po tygodniu oświadcza: „Jesteś kobietą mojego życia, musimy natychmiast zamieszkać razem i rzucić twoją pracę, ja o wszystko zadbam”.',
            '2. Co widzi bohater (Marta): Marta czuje euforyczny haj dopaminowy. Myśli, że spotkała wymarzonego księcia z bajki, który kocha ją tak mocno, jak nikt dotąd.',
            '3. Czego bohater nie widzi (martwe pole): Marta nie dostrzega, że tempo relacji jest patologicznie przyspieszone, a Konrad nie kocha jej (bo jej jeszcze nie zna), lecz buduje w jej mózgu uzależnienie biochemiczne, po którym nastąpi faza dewaluacji i całkowitej izolacji.',
            '4. Działający mechanizm psychologiczny: Love Bombing jako wstęp do cyklu przemocy psychicznej i wytworzenia więzi traumatycznej (Trauma Bonding).',
            '5. Dlaczego ten mechanizm powstał (rola adaptacyjna): Ewolucyjny mechanizm przywiązania i głodu akceptacji społecznej uaktywnia zalew oksytocyny, wyłączając krytyczne obwody czołowe.',
            '6. Jak rozpoznać w czasie rzeczywistym: Poczucie przytłoczenia intensywnością, przyspieszone tempo decyzji i presja na natychmiastowe zrywanie innych relacji.',
            '7. Możliwa konstruktywna reakcja (alternatywa): Świadome spowolnienie dynamiki: „Konradzie, dziękuję za miłe słowa, ale znamy się dopiero 7 dni. Potrzebuję co najmniej kilku miesięcy spokojnego poznawania się, zanim podejmiemy jakiekolwiek wspólne decyzje”. Obserwacja reakcji: w obliczu oporu manipulator wpada w złość lub natychmiast znika.',
            '8. Konsekwencje alternatywnego wyboru: Ochrona własnej niezależności, mieszkania i stabilności emocjonalnej przed toksycznym cyklem dewaluacji.',
            '9. Wniosek dydaktyczny dla czytelnika: Prawdziwa miłość i szacunek potrzebują czasu, by wyrosnąć. Jeśli ktoś próbuje wbić się w Twoje życie z impetem taranu, to nie pasja — to próba przejęcia kontroli.'
          ]
        }
      ]
    },
    {
      id: 'sec-9-11',
      pageNumber: 428,
      sectionNumber: '9.11',
      title: 'Manipulacja w świecie cyfrowym: Dark Patterns i algorytmiczne sidła',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Dark Patterns (Ciemne Wzorce Projektowe) to manipulacja wbudowana bezpośrednio w architekturę aplikacji i serwisów www. Inżynierowie behawioralni wykorzystują zmęczenie uwagowe, by wyciągnąć od Ciebie zgodę na subskrypcję lub zakup.',
        'Przykłady: Confirmshaming (przycisk rezygnacji z rabatu o treści: „Nie, dziękuję, wolę przepłacać”), Ukryte koszty dodawane na ostatnim kroku płatności czy celowo utrudniony proces kasowania konta (Roach Motel — łatwo wejść, niemożliwe wyjść).'
      ]
    },
    {
      id: 'sec-9-12',
      pageNumber: 432,
      sectionNumber: '9.12',
      title: 'Jak reagować? Tarcza asertywności i protokoły obronne',
      category: 'cwiczenia',
      readingTimeMinutes: 15,
      paragraphs: [
        'Oto cztery bezbłędne, sprawdzone klinicznie narzędzia asertywnej samoobrony poznawczej:',
        '1. Technika Zdartej Płyty: Powtarzanie stałej formuły odmownej bez wchodzenia w dyskusję.',
        '2. Zamglona Tarcza (Fogging): Zgoda z prawem rozmówcy do własnej oceny przy jednoczesnym utrzymaniu własnej granicy.',
        '3. Demaskowanie Gry: Nazwanie mechanizmu wprost bez wrogości.',
        'Poniższy warsztat pozwala wytrenować własne skrypty asertywne.'
      ],
      exerciseRef: chapterNineExerciseAssertiveScripts
    },
    {
      id: 'sec-9-13',
      pageNumber: 436,
      sectionNumber: '9.13',
      title: 'Wielkie Studium Przypadku: Mistrzowski Gaslighting w Start-upie',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Wstrząsające, wielopoziomowe studium przypadku pokazujące, jak charyzmatyczny założyciel spółki technologicznej doprowadził współzałożycielkę na skraj załamania nerwowego za pomocą subtelnych technik manipulacji.'
      ],
      caseStudyRef: {
        id: 'cs-ch9-gaslight',
        title: 'Cień Mentora: Anatomia Przejęcia Spółki przez Zwątpienie',
        subtitle: 'Jak subtelne podważanie pamięci i love bombing zastąpiły uczciwą umowę wspólników',
        protagonist: 'Ewa, Dyrektor Techniczna / CTO (29 lat) i Wiktor, Prezes / CEO (41 lat)',
        context: 'Dynamicznie rosnący start-up z branży MedTech u progu wejścia funduszu Venture Capital.',
        story: [
          'Ewa była wybitną programistką i architektem algorytmu analizującego zdjęcia rentgenowskie. Wiktor był seryjnym przedsiębiorcą z kontaktami w funduszach inwestycyjnych. Na początku znajomości Wiktor zalał Ewę komplementami (love bombing): „Ewa, jesteś geniuszem, bez ciebie ta firma nie istnieje, jesteś dla mnie jak młodsza siostra, zmienimy razem świat medycyny!”. Ewa poczuła, że spotkała wymarzonego mentora.',
          'Umowa ustna zakładała podział udziałów 50/50. Jednak gdy zbliżał się termin podpisania umowy z funduszem na 5 milionów złotych, w zachowaniu Wiktora pojawiły się dziwne rysy. Wersje robocze dokumentów od prawnika zawierały zapis: Wiktor 75%, Ewa 25%.',
          'Gdy Ewa zapytała o to na spotkaniu, Wiktor spojrzał na nią z głębokim, zmartwionym wzrokiem, położył dłoń na jej ramieniu i powiedział: „Ewcia, przecież rozmawialiśmy o tym w zeszłym miesiącu w kawiarni przy rondzie. Sama mówiłaś, że nie chcesz brać na siebie odpowiedzialności prawnej i wolisz mniejszy pakiet, byle skupić się na kodzie. Naprawdę tego nie pamiętasz? Ostatnio jesteś strasznie przemęczona, martwię się o twoją koncentrację”.',
          'Ewa zaniemówiła. Nie pamiętała żadnej takiej rozmowy. Ale Wiktor mówił z tak niezachwianą pewnością siebie i troską, że w jej głowie pojawiło się zwątpienie: „A może faktycznie coś takiego powiedziałam w żartach? Może przez te nocne wdrożenia tracę pamięć?”.',
          'Przez kolejne trzy miesiące Wiktor systematycznie izolował Ewę od inwestorów („Oni mają twardy styl, to by cię tylko zestresowało”) i powtarzał współpracownikom: „Ewa to złote dziecko, ale psychicznie nie wytrzymuje presji biznesowej”. Ewa zaczęła brać leki uspokajające, czując, że bez Wiktora sobie nie poradzi.',
          'Przełom nastąpił przypadkiem: sprzątając szufladę, Ewa znalazła swój prywatny notes z tamtego spotkania w kawiarni, gdzie czarno na białym zapisała: „Wiktor potwierdza 50/50 przed wejściem VC”. W tym ułamku sekundy zasłona dymna opadła. Zrozumiała, że nie jest chora psychicznie — była ofiarą cynicznego, metodycznego gaslightingu.'
        ],
        decisionTaken: 'Ewa zamiast skonfrontować się z Wiktorem sam na sam, wzięła niezależnego adwokata i zażądała oficjalnego audytu prawnego spółki przed wejściem funduszu.',
        whatProtagonistSaw: 'Początkowo widziała mentora, który troszczy się o jej zdrowie i chroni ją przed brutalnym światem biznesu.',
        whatWasMissed: 'Że Wiktor stosował podręcznikową sekwencję: Love Bombing → Izolacja od inwestorów → Podważanie pamięci → Przejęcie kontroli finansowej.',
        psychologicalAnalysis: {
          coreMechanism: 'Gaslighting połączony z manipulacją poczuciem długu wdzięczności i autorytetem mentora.',
          cognitiveBiases: [
            { name: 'Podatność pamięci na sugestię (Loftus Effect)', description: 'Ewa zaczęła kwestionować własne wspomnienia pod wpływem narracji autorytetu.', impact: 'Paraliż decyzyjny i utrata sprawczości.' }
          ],
          defenseMechanisms: [
            { name: 'Wyparcie', explanation: 'Ewa długo nie dopuszczała myśli, że podziwiany mentor mógłby z premedytacją ją oszukiwać.' }
          ],
          emotionalDynamic: 'Głęboki dysonans poznawczy między wdzięcznością a wewnętrznym poczuciem krzywdy.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Hipokamp', role: 'Rekonstrukcja i konsolidacja wspomnień epizodycznych z kawiarni', activationState: 'Zdestabilizowana przez powtarzający się fałszywy przekaz Wiktora (błąd podatności na sugestię)' },
            { region: 'Przednia kora zakrętu obręczy (ACC) i sieć istotności', role: 'Rejestracja stałego konfliktu poznawczego między zmysłami a narracją autorytetu', activationState: 'Chroniczny stan alarmowy wyczerpujący zasoby wolicjonalne' }
          ],
          neurotransmitters: [
            { name: 'Oś HPA i hormony stresu (kortyzol)', roleInScenario: 'Chroniczny stres neuroendokrynny: przedłużony wyrzut glikokortykoidów upośledza plastyczność synaptyczną hipokampa, wywołując bezsenność i mgłę poznawczą' }
          ],
          biologicalTimeline: [
            { timeMs: 'Rozmowa z Wiktorem', process: 'Ciepły ton głosu i pozorna troska obniżają czujność ciała migdałowatego, ułatwiając zaszczepienie fałszywej sugestii autobiograficznej.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Gaslighting i Fałszywa Troska', description: '„Martwię się o ciebie, zapominasz o rzeczach”.', vulnerabilityExploited: 'Zmęczenie pracą i syndrom oszusta' }
          ],
          counterMeasures: [
            { step: 'Twardy Ślad Dokumentacyjny', script: 'Wszystkie ustalenia biznesowe i obietnice spisywane na piśmie pod rygorem nieważności.', rationale: 'Eliminuje możliwość podważania faktów.' }
          ]
        },
        alternativePath: 'Gdyby Ewa podpisała umowę 75/25, po wejściu funduszu Wiktor przegłosowałby jej odwołanie z zarządu, a ona straciłaby prawa do własnego wynalazku.',
        readerQuestion: 'Czy w Twoim otoczeniu jest ktoś, przy kim regularnie zaczynasz czuć, że „chyba wariujesz” lub „wszystko przekręcasz”?',
        keyTakeaway: 'Zaufanie w biznesie i relacjach opiera się na przejrzystości, nie na konieczności pamiętania słów rzuconych przy kawie. Zapisuj fakty.'
      }
    },
    {
      id: 'sec-9-14',
      pageNumber: 440,
      sectionNumber: '9.14',
      title: 'Odporność Psychologiczna, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Przeszliśmy przez labirynt manipulacji — od presji czasu i poczucia winy, przez gaslighting i DARVO, po cyfrowe sidła algorytmów. Najważniejszą tarczą ochronną nie jest agresja, lecz głębokie ugruntowanie we własnym ciele, asertywne protokoły lingwistyczne i odwaga do mówienia stanowczego „NIE”.',
        'Gdy potrafisz już odróżnić czystą perswazję od toksycznej manipulacji, czas przyjść do fundamentu ludzkiego szczęścia i dobrostanu: do RELACJI.',
        'W Rozdziale 10 zbadamy, dlaczego jedni ludzie budują z nami bezpieczną przystań, a inni permanentne pole minowe. Poznamy neurobiologię zaufania, sztukę deeskalacji konfliktów i psychologię autentycznego przebaczenia.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 9.'
      ]
    }
  ]
};
