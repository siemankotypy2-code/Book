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
        'To jest istota manipulacji: instrumentalne potraktowanie drugiego człowieka jako pionka w cudzej partii, przy jednoczesnym zatarciu śladów samej ingerencji. Słowo „manipulacja” pochodzi od łacińskiego manus (ręka) i manipulare (kierować, sterować). Manipulator trzyma rękę na Twoich sznurkach emocjonalnych.',
        'Wielkim błędem jest jednak polowanie na czarownice i etykietowanie każdego szefa, partnera czy sprzedawcy jako „narcyza i socjopaty”. Większość manipulacji w życiu codziennym to zachowania nieświadome — wyuczone w dzieciństwie schematy bezradności („Jeśli będę płakać i dąsać się, mama wreszcie kupi mi zabawkę”). Niezależnie jednak od tego, czy manipulacja jest wyrachowaną strategią, czy nieświadomym odruchem, jej niszczycielski wpływ na Twoje neurony jest dokładnie taki sam.'
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
          title: 'PRZYKŁAD 1: Pokaz garnków i pościeli dla seniorów',
          paragraphs: [
            'Sytuacja i bohater: 73-letnia pani Danuta trafia na „bezpłatne badanie krążenia”, połączone z prezentacją mat magnetycznych za 9 000 zł.',
            'Działający mechanizm: Sztuczna presja czasu połączona z izolacją społeczną. Prowadzący krzyczy do mikrofonu: „Tylko pierwsze 3 osoby, które podejdą do stolika w ciągu 3 minut, otrzymają dotację unijną 4000 zł! Kto pierwszy, ten lepszy!”.',
            'Jak rozpoznać w czasie rzeczywistym: Kołatanie serca, suchość w ustach, panika przed utratą niepowtarzalnej okazji.',
            'Możliwa konstruktywna reakcja: Wstanie z krzesła, opuszczenie sali i żelazna zasada: „Nigdy nie podpisuję żadnych umów w trakcie prezentacji marketingowych”.',
            'Wniosek dydaktyczny dla czytelnika: Jeśli oferta jest naprawdę dobra dzisiaj, będzie równie dobra w poniedziałek rano. Pośpiech to znak ostrzegawczy numer jeden.'
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
          title: 'PRZYKŁAD 2: Agresywna kampania ubezpieczeniowa',
          paragraphs: [
            'Sytuacja i bohater: Agent ubezpieczeniowy pokazuje młodemu ojcu Piotrowi drastyczne zdjęcia z wypadków samochodowych i pyta: „Czy kocha pan swoje dzieci? Bo jeśli zginie pan jutro na trasie, to z czego pana żona zapłaci za ich jedzenie w przyszłym miesiącu?”.',
            'Działający mechanizm: Szantaż moralny oparty na strachu i winie (Fear Appeal). Próba wywołania paraliżu afektywnego w celu natychmiastowego podpisania najdroższej polisy.',
            'Jak rozpoznać w czasie rzeczywistym: Ścisk w mostku i poczucie bycia potwornym rodzicem w razie wahania.',
            'Możliwa konstruktywna reakcja: „Panie agencie, zadbam o bezpieczeństwo mojej rodziny w oparciu o chłodną kalkulację finansową, a nie o drastyczne zdjęcia. Poproszę o OWU na maila, porównam oferty 3 towarzystw i podejmę decyzję za tydzień”.',
            'Wniosek dydaktyczny dla czytelnika: Nie pozwól nikomu sprzedawać ci polis na bazie terroru emocjonalnego.'
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
            'Sytuacja i bohater: Starsza analityczka Ewa przygotowała raport zgodnie z ustaleniami z dyrektorem Dariuszem. Na zebraniu zarządu dyrektor publicznie gani Ewę: „Przecież mówiłem pani wyraźnie, że wskaźniki EBITDA liczymy według nowego wzoru. Jak mogła pani popełnić tak szkolny błąd?”. Ewa pamięta, że na spotkaniu w cztery oczy Dariusz nakazał stary wzór, lecz nie ma notatki mailowej.',
            'Działający mechanizm: Gaslighting biurowy jako tarcza ochronna menedżera przed zarządem kosztem zaufania pracownika do własnej pamięci.',
            'Jak rozpoznać w czasie rzeczywistym: Poczucie zawrotu głowy i gorączkowe zastanawianie się: „Czy ja naprawdę oszalałam i tego nie dosłyszałam?”.',
            'Możliwa konstruktywna reakcja: Zasada „Paper Trail” (ślad papierowy): od tego momentu każde ustalenie z Dariuszem kończy się podsumowaniem mailowym: „Zgodnie z naszą rozmową, przyjmuję wskaźnik X”.',
            'Wniosek dydaktyczny dla czytelnika: W relacjach z manipulatorem fakty istnieją tylko wtedy, gdy są zapisane na piśmie.'
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
          title: 'PRZYKŁAD 5: Fałszywy dylemat u szefa zespołu',
          paragraphs: [
            'Sytuacja i bohater: Kierownik projektu rzuca do programisty Rafała w piątek o 17:00: „Rafał, albo zostaniesz dziś do 23:00 i dokończysz ten moduł, albo w poniedziałek powiem dyrektorowi, że przez ciebie straciliśmy klienta”.',
            'Działający mechanizm: Fałszywy dylemat (szantaż binarny) maskujący błędy w planowaniu harmonogramu przez menedżera.',
            'Jak rozpoznać w czasie rzeczywistym: Poczucie bycia przypartym do muru bez dobrego wyjścia.',
            'Możliwa konstruktywna reakcja: Rozbicie binarnego wyboru: „Tomaszu, nie wybieram żadnej z tych dwóch opcji. Kończę pracę o 17:00 zgodnie z kodeksem pracy, a w poniedziałek od 8:00 wspólnie z dyrektorem przeanalizujemy, dlaczego harmonogram wdrożenia był nierealny od samego początku”.',
            'Wniosek dydaktyczny dla czytelnika: Zawsze pytaj: „Jakie są inne opcje poza tymi dwiema, które mi narzucasz?”.'
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
          title: 'PRZYKŁAD 4: Trzy dni ciszy po odmowie wyjazdu do teściów',
          paragraphs: [
            'Sytuacja i bohater: Łukasz (35 lat) powiedział żonie Kamili, że w nadchodzący weekend chce odpocząć w domu i nadrobić sen, zamiast jechać na 3-dniowy zjazd rodzinny. Kamila bez słowa wyszła z pokoju i przez kolejne 72 godziny nie odezwała się do niego ani słowem, ostentacyjnie trzaskając naczyniami.',
            'Działający mechanizm: Karanie ciszą (Silent Treatment) jako kara za postawienie zdrowej granicy i próba wymuszenia uległości bez otwartej konfrontacji.',
            'Jak rozpoznać w czasie rzeczywistym: Poczucie duszącego napięcia w mieszkaniu i automatyczna chęć natychmiastowego ugięcia się („Dobra, pojedziemy, tylko przestań milczeć”).',
            'Możliwa konstruktywna reakcja: Odmowa tańczenia w tym spektaklu: „Kamila, widzę, że wybrałaś milczenie. Szanuję twoją potrzebę samotności. Kiedy zechcesz porozmawiać normalnym głosem o naszych planach, jestem do dyspozycji”. Następnie Łukasz zajmuje się własnymi sprawami bez żebrania o kontakt.',
            'Wniosek dydaktyczny dla czytelnika: Karanie ciszą żywi się Twoim lękiem przed odrzuceniem. Gdy przestajesz prosić o kontakt, technika ta traci całą swoją moc operacyjną.'
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
          title: 'PRZYKŁAD 6: Nowy adorator na portalu randkowym',
          paragraphs: [
            'Sytuacja i bohater: 30-letnia Marta poznaje przez internet Konrada. Konrad wysyła jej bukiety kwiatów do biura drugiego dnia, dzwoni 15 razy na dobę i po tygodniu mówi: „Jesteś kobietą mojego życia, musimy natychmiast zamieszkać razem”.',
            'Działający mechanizm: Love Bombing jako wstęp do przejęcia kontroli. Po miesiącu Konrad zaczyna żądać usunięcia kont w mediach społecznościowych pod hasłem: „Skoro mnie kochasz, nie potrzebujesz uwagi innych facetów”.',
            'Jak rozpoznać w czasie rzeczywistym: Poczucie zawrotu głowy, przyspieszone tempo relacji, pomijanie naturalnych etapów poznawania się.',
            'Możliwa konstruktywna reakcja: Świadome zwolnienie tempa: „Dziękuję za kwiaty, ale spotykamy się dopiero tydzień. Poznajmy się spokojnie przez kolejne miesiące”. Obserwuj reakcję: manipulator wpadnie we wściekłość lub natychmiast zniknie.',
            'Wniosek dydaktyczny dla czytelnika: Jeśli coś wygląda zbyt pięknie, by było prawdziwe — najczęściej jest pułapką na Twoje neurony nagrody.'
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
            { region: 'Hipokamp', role: 'Rekonstrukcja wspomnień z kawiarni', activationState: 'Zdestabilizowana przez powtarzający się fałszywy przekaz Wiktora' },
            { region: 'Przednia kora zakrętu obręczy (ACC)', role: 'Rejestracja stałego konfliktu poznawczego', activationState: 'Chroniczny stan alarmowy' }
          ],
          neurotransmitters: [
            { name: 'Kortyzol', roleInScenario: 'Chroniczny stres doprowadził do bezsenności i mgły mózgowej' }
          ],
          biologicalTimeline: [
            { timeMs: 'Rozmowa z Wiktorem', process: 'Ciepły ton głosu wyłącza obronę amygdali, pozwalając na wstrzyknięcie fałszywej sugestii.' }
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
