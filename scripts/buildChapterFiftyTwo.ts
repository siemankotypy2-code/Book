import * as fs from 'fs';
import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData, BookSection } from '../src/types/book';

export const chapterFiftyTwoExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: "Czym charakteryzuje się syndrom myślenia grupowego (Groupthink) sformułowany przez Irvinga Janisa (1972)?",
    topic: "Definicja i Istota Myślenia Grupowego",
    sectionRef: "Sekcja 52.1 & 52.2",
    options: [
      {
        label: "A",
        text: "Sposobem myślenia ludzi zintegrowanych w spójnej grupie, w której dążenie do jednomyślności staje się tak dominujące, że unieważnia motywację do realistycznej oceny alternatywnych kierunków działania.",
        isCorrect: true
      },
      {
        label: "B",
        text: "Zdolnością grupy do bezbłędnego rozwiązywania zagadek logicznych w rekordowym czasie.",
        isCorrect: false
      },
      {
        label: "C",
        text: "Gwałtowną bójką fizyczną między członkami zarządu.",
        isCorrect: false
      },
      {
        label: "D",
        text: "Całkowitym brakiem jakiejkolwiek dyskusji i natychmiastowym rozejściem się do domów.",
        isCorrect: false
      }
    ],
    explanation: "Janis podkreślał, że myślenie grupowe nie wynika z głupoty uczestników — dotyka często najbardziej inteligentnych i doświadczonych ekspertów, gdy wysoka spójność grupy i lojalność wobec lidera eliminują krytyczną refleksję.",
    keyTakeaway: "Myślenie grupowe to patologia spójności: pragnienie harmonii staje się ważniejsze niż obiektywna prawda."
  },
  {
    id: 2,
    question: "Który z poniższych objawów NIE należy do klasycznych ośmiu symptomów myślenia grupowego według Janisa?",
    topic: "Objawy Syndromu Groupthink",
    sectionRef: "Sekcja 52.2 & 52.4–52.11",
    options: [
      {
        label: "A",
        text: "Instytucjonalne wyznaczanie niezależnego 'Adwokata Diabła' i nagradzanie sceptyków za wytknięcie ryzyk projektu.",
        isCorrect: true
      },
      {
        label: "B",
        text: "Iluzja niezwyciężoności (Illusion of Invulnerability) wywołująca nadmierny optymizm.",
        isCorrect: false
      },
      {
        label: "C",
        text: "Autocenzura wątpliwości i iluzja powszechnej jednomyślności.",
        isCorrect: false
      },
      {
        label: "D",
        text: "Obecność samozwańczych strażników myśli (Mindguards) chroniących lidera przed niewygodnymi faktami.",
        isCorrect: false
      }
    ],
    explanation: "Obowiązkowy Adwokat Diabła i procedury Pre-Mortem to sprawdzone narzędzia prewencji i leczenia myślenia grupowego, stojące w całkowitej opozycji do syndromu.",
    keyTakeaway: "Zdrowy zespół nie boi się metodycznego podważania własnych założeń — traktuje krytykę jako polisę ubezpieczeniową."
  },
  {
    id: 3,
    question: "Na czym polega rola tzw. 'strażników myśli' (Mindguards) w patologicznym zespole decyzyjnym?",
    topic: "Funkcja Strażników Myśli (Mindguards)",
    sectionRef: "Sekcja 52.11 & 52.12",
    options: [
      {
        label: "A",
        text: "Na aktywnym, nieformalnym filtrowaniu informacji docierających do lidera i grupy, ukrywaniu raportów ostrzegawczych oraz wywieraniu presji na kolegów z wątpliwościami, by nie 'psuli atmosfery'.",
        isCorrect: true
      },
      {
        label: "B",
        text: "Na ochronie fizycznej budynku przed włamaniem.",
        isCorrect: false
      },
      {
        label: "C",
        text: "Na prowadzeniu mediacji psychologicznej między zwaśnionymi działami.",
        isCorrect: false
      },
      {
        label: "D",
        text: "Na sprawdzaniu poprawności gramatycznej wysyłanych e-maili.",
        isCorrect: false
      }
    ],
    explanation: "Mindguards działają z subiektywnego przekonania o lojalności — uważają, że chronią spokój i morale lidera, podczas gdy w rzeczywistości odcinają go od sygnałów o nadciągającej katastrofie.",
    keyTakeaway: "Strażnik myśli zabija zespół w imię jego pozornego spokoju."
  },
  {
    id: 4,
    question: "W jaki sposób pojęcie 'bezpieczeństwa psychologicznego' (Psychological Safety) Amy Edmondson zapobiega myśleniu grupowemu?",
    topic: "Bezpieczeństwo Psychologiczne a Odwaga do Wątpliwości",
    sectionRef: "Sekcja 52.21 & 52.22",
    options: [
      {
        label: "A",
        text: "Tworzy w zespole wspólne przekonanie, że ujawnienie błędu, zadanie trudnego pytania lub zgłoszenie wątpliwości nie spotka się z karą, wyśmianiem ani degradacją statusu.",
        isCorrect: true
      },
      {
        label: "B",
        text: "Zakazuje jakiejkolwiek dyskusji o trudnych problemach, by nie wywoływać stresu u pracowników.",
        isCorrect: false
      },
      {
        label: "C",
        text: "Gwarantuje każdemu pracownikowi dożywotnie zatrudnienie bez względu na wyniki.",
        isCorrect: false
      },
      {
        label: "D",
        text: "Wprowadza całkowity zakaz podejmowania decyzji zespołowych na rzecz losowania komputerowego.",
        isCorrect: false
      }
    ],
    explanation: "Edmondson wykazała, że najlepsze zespoły medyczne i inżynieryjne wcale nie popełniają mniej błędów, lecz otwarcie o nich meldują i natychmiast je korygują, podczas gdy w zespołach bez bezpieczeństwa błędy są ukrywane aż do katastrofy.",
    keyTakeaway: "Bezpieczeństwo psychologiczne to nie uprzejmość; to twardy warunek bezwzględnej prawdomówności operacyjnej."
  },
  {
    id: 5,
    question: "Na czym polega technika 'Pre-Mortem' opracowana przez Gary'ego Kleina w inżynierii decyzji strategicznych?",
    topic: "Procedury Ochronne: Pre-Mortem",
    sectionRef: "Sekcja 52.18 & 52.24",
    options: [
      {
        label: "A",
        text: "Przed ostatecznym zatwierdzeniem planu zespół przyjmuje założenie, że minął rok, projekt poniósł całkowitą, spektakularną klapę, a zadaniem każdego członka jest spisanie wiarygodnej historii tego, co dokładnie poszło nie tak.",
        isCorrect: true
      },
      {
        label: "B",
        text: "Wykonywaniu badań lekarskich członków zarządu przed podpisaniem kontraktu.",
        isCorrect: false
      },
      {
        label: "C",
        text: "Zwalnianiu wszystkich pracowników w przypadku opóźnienia harmonogramu o jeden dzień.",
        isCorrect: false
      },
      {
        label: "D",
        text: "Ukrywaniu budżetu projektu przed akcjonariuszami firmy.",
        isCorrect: false
      }
    ],
    explanation: "Pre-Mortem legalizuje pesymizm: zamiast uchodzić za 'hamulcowego', ten, kto znajdzie najbardziej prawdopodobną przyczynę hipotetycznej katastrofy, zostaje uznany za najbardziej wnikliwego stratega.",
    keyTakeaway: "Pre-Mortem odwraca presję społeczną: sprawia, że szukanie słabości staje się dowodem lojalności, a nie zdrady."
  }
];

export const chapterFiftyTwoCaseStudies: CaseStudy[] = [
  {
    id: "cs-52-1-niezatapialny-projekt",
    title: "Studium Przypadku: Niezatapialny Projekt — Anatomia Katastrofy Baterii Titan-X",
    subtitle: "Jak wybitny zarząd koncernu technologicznego zignorował 12 ostrzeżeń inżynierów i doprowadził do strat rzędu miliarda euro",
    protagonist: "Krzysztof Weber (46 lat), główny inżynier bezpieczeństwa termicznego",
    context: "Europejski koncern automotive opracowuje przełomową baterię do pojazdów elektrycznych. Presja na premierę targową w Genewie jest ogromna — opóźnienie oznacza przewagę konkurencji z Azji.",
    dilemma: "Czy Krzysztof ma zaryzykować karierę i zerwać posiedzenie komitetu sterującego, gdy widzi, że liderzy bagatelizują testy przegrzewania ogniw w ujemnych temperaturach?",
    timeline: [
      {
        time: "Tydzień -12",
        event: "Testy laboratoryjne wykazują niestabilność mikroseparatorów przy gwałtownym ładowaniu. Krzysztof wysyła notatkę do dyrektora projektu. Odpowiedź brzmi: 'Nie siejmy paniki, poprawimy oprogramowaniem w locie'."
      },
      {
        time: "Tydzień -6",
        event: "Posiedzenie komitetu sterującego. Prezes otwiera spotkanie słowami: 'Mamy przed sobą historyczny sukces, rada nadzorcza czeka na zielone światło'. Żaden z obecnych menedżerów nie zadaje trudnych pytań. Krzysztof przygotowuje slajd z ostrzeżeniem, lecz w ostatniej chwili go ukrywa."
      },
      {
        time: "Tydzień -2",
        event: "Młody tester laboratoryjny próbuje zgłosić zapłon testowego pakietu. Szef działu jakości (pełniący rolę 'strażnika myśli') instruuje go, by nie wpisywał tego do oficjalnego protokołu, gdyż był to 'błąd procedury ludzkiej'."
      },
      {
        time: "Tydzień +8",
        event: "Katastrofa rynkowa: trzy pożary seryjnych pojazdów w Norwegii, globalny recall 40 tysięcy aut, spadek akcji o 32%, dymisja całego zarządu i załamanie reputacji marki."
      }
    ],
    characters: [
      {
        name: "Krzysztof Weber",
        role: "Główny inżynier bezpieczeństwa",
        personality: "Wybitny merytorycznie, lecz ulegający autocenzurze w obecności dominujących autorytetów."
      },
      {
        name: "Arthur Vance",
        role: "Dyrektor Projektu / Wiceprezes",
        personality: "Charyzmatyczny wizjoner, nieznoszący 'sceptyków i asekurantów', budujący atmosferę kultu sukcesu."
      },
      {
        name: "Monika",
        role: "Dyrektor ds. Komunikacji i Jakości (Mindguard)",
        personality: "Filtrująca negatywne raporty, dbająca o to, by prezes widział wyłącznie zielone wskaźniki na dashboardzie."
      }
    ],
    psychologicalDynamics: {
      cognitiveBiases: [
        {
          name: "Iluzja Niezwyciężoności (Illusion of Invulnerability)",
          description: "Zarząd uznał, że dotychczasowe pasmo sukcesów chroni ich przed prawami fizyki i termodynamiki."
        },
        {
          name: "Autocenzura i Złudzenie Jednomyślności",
          description: "Skoro nikt przy stole nie podnosił głosu sprzeciwu, każdy uczestnik błędnie uznał, że tylko on ma wątpliwości."
        }
      ],
      emotionalStates: [
        {
          trigger: "Słowa dyrektora o 'historycznym sukcesie'",
          emotion: "Lęk przed wyjściem na jedynego defetystę, który niszczy entuzjazm wspólnoty."
        },
        {
          trigger: "Milczenie sali",
          emotion: "Fałszywy spokój i konformistyczna ulga zrzucenia odpowiedzialności na grupę."
        }
      ]
    },
    alternativePath: "Gdyby Krzysztof zażądał formalnej sesji Pre-Mortem i wymusił procedurę podwójnego podpisu inżynierskiego, premiera zostałaby przesunięta o 4 miesiące, usterka usunięta za ułamek promila kosztów recallu, a koncern zyskałby miano lidera rzetelności.",
    readerQuestion: "Czy zdarzyło Ci się kiedykolwiek schować do teczki raport ostrzegawczy tylko dlatego, że cała sala emanowała euforyczną pewnością siebie?",
    keyTakeaway: "W komitecie ogarniętym myśleniem grupowym brak sprzeciwu nigdy nie oznacza zgody — oznacza jedynie terror fałszywej harmonii."
  }
];

export const chapterFiftyTwoExercises: SelfExercise[] = [
  {
    id: "ex-52-audyt-bezpieczenstwa-decyzyjnego",
    title: "Audyt Bezpieczeństwa Decyzyjnego: Szczepionka na Myślenie Grupowe",
    subtitle: "Praktyczny protokół wdrażania Adwokata Diabła i sesji Pre-Mortem w Twoim zespole",
    objective: "Zidentyfikowanie objawów autocenzury w Twoich zebraniach decyzyjnych oraz wdrożenie procedury legalizującej krytyczną analizę ryzyk.",
    durationMinutes: 30,
    neuroScientificFoundation: "Instytucjonalne nakazanie poszukiwania błędów zdejmuje z ciała migdałowatego lęk przed ostracyzmem społecznym, umożliwiając pełne wykorzystanie sieci wykonawczej kory czołowej.",
    steps: [
      {
        stepNumber: 1,
        title: "Diagnoza Atmosfery: Test Milczących Wątpliwości",
        instruction: "Przypomnij sobie ostatnie kluczowe zebranie Twojego zespołu, na którym zatwierdzono ważną decyzję.",
        promptText: "Czy ktoś obecny na sali wyraził fundamentalne obiekcje? Jeśli nie, to czy w kuluarach po spotkaniu padły słowa: 'To się nie może udać'?",
        placeholder: "Na sali wszyscy kiwali głowami, ale przy ekspresie do kawy dwie osoby mówiły, że budżet jest nierealny..."
      },
      {
        stepNumber: 2,
        title: "Rotacyjna Rola Adwokata Diabła",
        instruction: "Wprowadź na stałe zasadę: na każdym zebraniu strategicznym jedna osoba (rotacyjnie) ma oficjalny obowiązek zaatakować projekt z pozycji bezwzględnego sceptyka.",
        promptText: "Kto w najbliższym spotkaniu obejmie tę rolę? Jakie 3 najtrudniejsze pytania musi zadać zespołowi?",
        placeholder: "Wyznaczam Tomasza. Pytanie 1: Co zrobimy, jeśli kluczowy dostawca zbankrutuje w drugim miesiącu?..."
      },
      {
        stepNumber: 3,
        title: "Protokół Pre-Mortem (Gary Klein)",
        instruction: "Przeprowadź 15-minutowe ćwiczenie wyobrażeniowe: 'Przenieśmy się w czasie o rok. Nasz projekt poniósł całkowitą klapę. Każdy ma 5 minut na spisanie przyczyn tej porażki'.",
        promptText: "Zbierz anonimowe kartki. Jakie ukryte lęki ujawniły się w wypowiedziach współpracowników?",
        placeholder: "Najczęstsza obawa dotyczyła braku przeszkolenia personelu liniowego i przeciążenia serwerów..."
      },
      {
        stepNumber: 4,
        title: "Reguła Ostatniego Głosu Lidera",
        instruction: "Zobowiąż lidera spotkania do zabierania głosu jako ostatni. Gdy szef zaczyna od: 'Uważam, że powinniśmy zrobić X', dyskusja natychmiast ulega skażeniu konformizmem.",
        promptText: "W jaki sposób przeformułujesz wstęp lidera na najbliższym spotkaniu?",
        placeholder: "Zamiast mówić, co myślę, powiem: 'Mamy tu trudny problem. Chcę usłyszeć wasze najbardziej krytyczne obserwacje, zanim powiem słowo'..."
      }
    ],
    reflectionQuestions: [
      "Czy w Twoim zespole nagradza się tych, którzy pierwsi sygnalizują ryzyko, czy etykietuje się ich jako 'toksycznych malkontentów'?",
      "Jaki jest osobisty koszt psychologiczny nieodezwania się w kluczowym momencie w porównaniu z kosztem późniejszej katastrofy?"
    ]
  }
];

export const chapterFiftyTwoInteractiveWindow: InteractiveWindowData = {
  id: "iw-52-7-milczenie-przy-stole",
  type: "what_if",
  title: "Milczenie przy Stole Decyzyjnym: Anatomia Konformizmu",
  subtitle: "Symulacja interwencji lidera: jak zmiana procedury zebrania rozbija pancerz jednomyślności",
  context: "Zarząd spółki debatuje nad ryzykownym przejęciem zadłużonego konkurenta. Prezes jest zachwycony pomysłem. Trzech dyrektorów ma poważne obawy, lecz żaden nie śmie odezwać się pierwszy.",
  whatIfOptions: {
    defaultScenario: "Prezes pyta: 'Czy ktoś ma jakieś zastrzeżenia?'. W sali panuje trzysekundowa cisza. Prezes konstatuje: 'Świetnie, skoro jest jednomyślność, podpisujemy list intencyjny'. Sześć miesięcy później spółka staje na skraju niewypłacalności.",
    options: [
      {
        id: "opt-secret-ballot",
        changeLabel: "Wariant A: Anonimowe Głosowanie Ryzyk przed Dyskusją",
        resultingInterpretation: "Każdy dyrektor na tablecie wpisuje stopień obawy w skali 1-10 oraz jedno największe zagrożenie bez podpisu.",
        resultingBehavior: "Na ekranie pojawia się średnia obaw 7.8/10 oraz anonimowe ostrzeżenie o ukrytych długach celnych konkurenta. Prezes jest zszokowany, lecz zmuszony do podjęcia dyskusji merytorycznej.",
        psychologicalImpact: "Zlikwidowanie presji normatywnej i lęku przed natychmiastową reprymendą lidera."
      },
      {
        id: "opt-outside-evaluator",
        changeLabel: "Wariant B: Wprowadzenie Niezależnego Audytora Zewnętrznego",
        resultingInterpretation: "Zewnętrzny ekspert bez powiązań personalnych z zarządem przedstawia 'analizę najgorszego przypadku' (Worst-Case Scenario).",
        resultingBehavior: "Ciężar krytyki spoczywa na osobie z zewnątrz, co pozwala wewnętrznym sceptykom na dołączenie do argumentacji bez ryzyka utraty reputacji lojalnych członków zespołu.",
        psychologicalImpact: "Przełamanie bariery 'my kontra oni' i ochrona spójności relacyjnej zarządu przy zachowaniu prawdy operacyjnej."
      }
    ],
    epistemicLesson: "Milczenie w obecności władzy nigdy nie jest dowodem porozumienia; jest naturalnym odruchem samoobrony. Jeśli chcesz usłyszeć prawdę, musisz zaprojektować architekturę spotkania tak, by prawda nie wymagała heroizmu."
  }
};

const rawSections52: { num: string; title: string; p: string[] }[] = [
  {
    num: "52.1",
    title: "Teoria myślenia grupowego (Groupthink) Irvinga Janisa — geneza i definicja",
    p: [
      "W 1972 roku amerykański psycholog społeczny Irving Janis opublikował dzieło, które wstrząsnęło teorią zarządzania i politologią: 'Victims of Groupthink'. Analizując największe katastrofy polityczno-militarne Stanów Zjednoczonych — w tym brak przygotowania na atak na Pearl Harbor, inwazję w Zatoce Świń z 1961 roku oraz eskalację wojny w Wietnamie — Janis zadał pytanie z pozoru paradoksalne: jak to możliwe, że komitety złożone z najbardziej błyskotliwych, wykształconych i patriotycznych mężów stanu podejmują decyzje o porażającej naiwności i autodestrukcyjnym potencjale?",
      "Odpowiedzią było pojęcie myślenia grupowego (Groupthink). Janis zdefiniował je jako specyficzny tryb myślenia, w który ludzie popadają wtedy, gdy pragnienie utrzymania spójności, harmonii i jednomyślności wewnątrz zwartej grupy staje się silniejsze niż motywacja do realistycznej, krytycznej oceny alternatywnych kierunków działania.",
      "Istotą groupthink nie jest spisek ani zdrada. Przeciwnie: to syndrom wynikający ze zbyt wysokiej solidarności i wzajemnej sympatii członków elitarnego gremium. Kiedy zespół postrzega siebie jako moralną elitę powołaną do wielkich celów, krytyka zaczyna być odczuwana jako niegrzeczność, nielojalność lub zdrada wspólnego etosu.",
      "Myślenie grupowe jest patologią sukcesu: to właśnie zespoły o długiej historii triumfów, pewne swojej wyższości intelektualnej i zintegrowane wokół charyzmatycznego przywódcy, są najbardziej podatne na ten śmiertelny wirus poznawczy."
    ]
  },
  {
    num: "52.2",
    title: "Osiem klasycznych symptomów myślenia grupowego",
    p: [
      "Janis wyodrębnił osiem specyficznych symptomów, które podzielił na trzy powiązane kategorie. Pierwsza kategoria to przecenianie siły i moralności grupy. Należą do niej: 1) Iluzja niezwyciężoności (Illusion of Invulnerability), rodząca nadmierny optymizm i skłaniająca do podejmowania skrajnego ryzyka, oraz 2) Niezachwiana wiara we wrodzoną moralność grupy, która pozwala członkom ignorować etyczne konsekwencje własnych decyzji.",
      "Druga kategoria to ciasnota umysłowa i zamknięcie na sygnały zewnętrzne. Obejmuje: 3) Zbiorową racjonalizację (Collective Rationalization) — kolektywne konstruowanie wymówek w celu zdyskredytowania ostrzeżeń, które mogłyby skłonić do rewizji założeń, oraz 4) Stereotypowe postrzeganie oponentów i rywali jako zbyt złośliwych, by negocjować, lub zbyt głupich i słabych, by stanowić realne zagrożenie.",
      "Trzecia kategoria to presja na jednomyślność. Obejmuje: 5) Autocenzurę wątpliwości — powstrzymywanie się przez poszczególnych członków od zgłaszania zastrzeżeń, 6) Iluzję jednomyślności (Illusion of Unanimity) — fałszywe przekonanie, że milczenie oznacza pełną aprobatę, 7) Bezpośrednią presję na dysydentów — natychmiastowe upominanie każdego, kto wyłamuje się z optymizmu, oraz 8) Samozwańczych strażników myśli (Mindguards) — osoby aktywnie izolujące grupę i lidera od niewygodnych danych.",
      "Wystąpienie choćby połowy tych objawów w zespole projektowym lub zarządzie oznacza, że proces decyzyjny przestał być badaniem rzeczywistości, a stał się rytuałem wzajemnego usypiania czujności."
    ]
  },
  {
    num: "52.3",
    title: "Historia: „Niezatapialny projekt”",
    p: [
      "W 2019 roku zarząd potężnego holdingu logistycznego 'TransGlobal' zebrał się w luksusowej sali konferencyjnej w Rotterdamie, by ostatecznie zatwierdzić projekt 'Titan-Cargo' — budowę w pełni zautomatyzowanego mega-terminalu przeładunkowego za 450 milionów euro. Prezes, charyzmatyczny Pieter van Dijk, promieniał dumą. Od miesięcy media branżowe pisały o nim jako o wizjonerze, który zrewolucjonizuje europejski transport.",
      "Na sali panowała euforia. Prezes otworzył spotkanie słowami: 'Panowie, ten projekt uczyni naszą firmę nietykalną na dekady. Nasi azjatyccy konkurenci zostaną w epoce kamienia łupanego'. Wszyscy dyrektorzy kiwali głowami z entuzjazmem. Gdy dyrektor finansowy przedstawił prezentację z prognozą 25% zwrotu z inwestycji w trzy lata, sala biła brawo.",
      "Przy stole siedział jednak Krzysztof, główny inżynier systemów informatycznych. Krzysztof wiedział to, czego nie było na slajdach: algorytm sterowania suwnicami zawieszał się średnio raz na cztery godziny w warunkach silnego deszczu i zasolenia morskiego. Miał przy sobie pendrive z nagraniem awarii z poligonu doświadczalnego. Kiedy prezes zapytał: 'Czy są jakieś pytania lub wątpliwości przed podpisaniem?', Krzysztof spojrzał na rozpromienione twarze kolegów. Poczuł lód w gardle. Pomyślał: 'Jeśli teraz to powiem, uznają mnie za hamulcowego, który niszczy historyczny moment firmy. Zresztą... może programiści poprawią to przed uruchomieniem?'. Krzysztof opuścił rękę i zamilkł.",
      "Terminal ruszył w listopadzie. Po pierwszym jesiennym sztormie system zawiesił się całkowicie, blokując 18 tysięcy kontenerów w porcie. Straty z tytułu kar umownych wyniosły 120 milionów euro, terminal stał bezczynnie przez dziewięć miesięcy, a akcje holdingu runęły o 40%. Krzysztof do dziś nie może sobie wybaczyć tamtych trzech sekund milczenia przy stole w Rotterdamie."
    ]
  },
  {
    num: "52.4",
    title: "Iluzja niezwyciężoności (Illusion of Invulnerability) i nadmierny optymizm",
    p: [
      "Iluzja niezwyciężoności jest pierwszym i najbardziej zdradliwym objawem myślenia grupowego. Powstaje ona w zespołach, które w przeszłości odniosły spektakularne sukcesy lub cieszą się niekwestionowaną pozycją rynkową i polityczną. W umysłach członków rodzi się wówczas uogólnienie indukcyjne o katastrofalnej strukturze logicznej: 'Skoro zawsze dotąd wygrywaliśmy, to znaczy, że nasz instynkt jest bezbłędny, a opatrzność lub prawa rynku zawsze będą po naszej stronie'.",
      "Ten syndrom pychy (hubris) prowadzi do całkowitego zniekształcenia percepcji ryzyka. Ostrzeżenia o możliwych trudnościach, awariach czy barierach prawnych nie są traktowane jako twarde dane do uwzględnienia w modelu budżetowym, lecz jako mało znaczący szum generowany przez 'ludzi małej wiary'. Grupa zaczyna podejmować zakłady o asymetrycznym ryzyku, w których potencjalna strata oznacza unicestwienie organizacji.",
      "Klasycznym przykładem historycznym była decyzja doradców prezydenta Johna F. Kennedy’ego o wysłaniu 1400 kubańskich emigrantów do Zatoki Świń. Kennedy i jego gabinet — złożony z 'najlepszych i najbystrzejszych' (The Best and the Brightest) umysłów Ameryki — uznali z naiwnością graniczącą z obłędem, że inwazja natychmiast wywoła powszechne powstanie przeciwko Castro, a wojska kubańskie uciekną w panice.",
      "Iluzja niezwyciężoności działa jak znieczulenie przed uderzeniem: sprawia, że pacjent z uśmiechem na ustach wkracza w strefę śmiertelnego zagrożenia, pozbawiony jakichkolwiek procedur ewakuacyjnych."
    ]
  },
  {
    num: "52.5",
    title: "Niezachwiana wiara w wyższą moralność grupy",
    p: [
      "Jedną z najbardziej niebezpiecznych cech ludzkiej psychologii jest zdolność do usprawiedliwiania najciemniejszych postępków pod warunkiem, że są one dokonywane w imię 'świętej misji'. Gdy grupa decyzyjna ulegnie przekonaniu o swojej bezwzględnej wyższości moralnej, mechanizmy etycznej samokontroli ulegają natychmiastowemu zawieszeniu.",
      "Członkowie zespołu zaczynają uważać, że stoją ponad prawem, konwencjami czy zwykłą przyzwoitością, ponieważ ich nadrzędny cel — obrona ojczyzny, zbawienie ludzkości, rewolucja technologiczna czy walka o sprawiedliwość społeczną — uświęca wszelkie środki. Wszelka krytyka ich metod ze strony opinii publicznej lub audytorów jest zbywana jako przejaw ignorancji lub złej woli 'przeciwników postępu'.",
      "To zjawisko wyjaśnia, dlaczego korporacje farmaceutyczne potrafiły ukrywać badania o uzależniającym potencjale opioidów, wmawiając sobie, że 'walczą z cierpieniem pacjentów', a rządy demokratyczne autoryzowały tortury w tajnych więzieniach, wierząc głęboko, że chronią wolny świat.",
      "Utrata moralnej pokory sprawia, że grupa staje się ślepa na własne okrucieństwo i arogancję. Jeśli wierzysz, że jesteś ucieleśnieniem dobra, każdy, kto staje Ci na drodze, automatycznie staje się ucieleśnieniem zła, na którego los nie warto marnować empatii."
    ]
  },
  {
    num: "52.6",
    title: "Stereotypizacja oponentów i lekceważenie konkurencji",
    p: [
      "W warunkach myślenia grupowego świat zewnętrzny zostaje poddany brutalnej karykaturze. Każdy, kto znajduje się poza naszym kręgiem, zostaje skatalogowany za pomocą jednego z dwóch prymitywnych stereotypów: albo jest 'zbyt głupi i nieudolny', by z nami konkurować, albo jest 'zbyt zdemoralizowany i podły', by można było prowadzić z nim racjonalny dialog.",
      "Pierwszy stereotyp prowadzi do katastrofalnego lekceważenia rywali. Kiedy na początku lat 2000. inżynierowie Nokii spoglądali na pierwszy model iPhone’a, ich reakcją był gromki śmiech: 'Nie ma fizycznej klawiatury, bateria trzyma jeden dzień, a po upadku na beton pęka szybka; nikt tego nie kupi'. Poczucie własnej doskonałości inżynieryjnej uniemożliwiło im dostrzeżenie, że Apple nie sprzedawało telefonu komórkowego — sprzedawało kieszonkowy komputer i platformę usługową.",
      "Z kolei drugi stereotyp uniemożliwia dyplomację i deeskalację konfliktów. Postrzeganie przeciwnika politycznego czy biznesowego jako bezwzględnego diabła sprawia, że każdy kompromis jest traktowany jak hańbiąca zdrada. Negocjacje stają się niemożliwe, a jedyną dopuszczalną strategią staje się totalna konfrontacja.",
      "Gdy grupa odmawia swoim rywalom rozumu i godności, sama pozbawia się zdolności przewidywania ich ruchów. Rzeczywistość ma to do siebie, że zlekceważony przeciwnik uderza dokładnie w to miejsce, które uznaliśmy za niezniszczalne."
    ]
  },
  {
    num: "52.7",
    title: "Historia interaktywna: „Milczenie przy stole decyzyjnym”",
    p: [
      "Przenieśmy się do sali zarządu spółki farmaceutycznej 'BioHelix'. Na stole leży dokument zezwalający na uruchomienie III fazy badań klinicznych nowego leku przeciwdepresyjnego. Dotychczasowe próby laboratoryjne pochłonęły 80 milionów dolarów. Prezes zarządu, profesor Karski, patrzy na zebranych zza okularów w rogowej oprawie. Karski jest legendą medycyny, człowiekiem, którego autorytet onieśmiela każdego młodszego badacza.",
      "'Koledzy', mówi Karski, 'ten lek to nasza przepustka na giełdę w Nowym Jorku. Wszystkie dane toksykologiczne wyglądają obiecująco. Zakładam, że nikt z obecnych nie ma zamiaru blokować podpisania protokołu?'. Wzrok prezesa omiata stół. Zatrzymuje się na Annie, szefowej zespołu biostatystyki.",
      "Anna doskonale wie, że Karski użył sformułowania 'wszystkie dane wyglądają obiecująco' jako zręcznej manipulacji. W surowych tabelach z ostatniego tygodnia pojawił się niepokojący sygnał: 3% pacjentów z grupy badawczej wykazało groźne zaburzenia rytmu serca (wydłużenie odcinka QT). Jednak Anna jest w firmie od zaledwie sześciu miesięcy, a jej umowa o pracę podlega odnowieniu w przyszłym tygodniu.",
      "Jeśli Anna się odezwie, zburzy triumfalny nastrój i narazi się na publiczne upokorzenie ze strony Karskiego. Jeśli zamilknie, niebezpieczny preparat trafi do tysięcy ochotników. W naszym interaktywnym module sprawdzisz, co dzieje się w dynamice zespołu w zależności od tego, czy Anna wybierze milczenie, czy zdecyduje się na proceduralną interwencję."
    ]
  },
  {
    num: "52.8",
    title: "Autocenzura — dlaczego eksperci tłumią własne wątpliwości?",
    p: [
      "Autocenzura jest psychologicznym sercem syndromu myślenia grupowego. Wbrew potocznym wyobrażeniom o autorytarnych reżimach, w większości nowoczesnych organizacji tłumienie krytyki nie wymaga fizycznej cenzury ani groźby aresztowania. Najskuteczniejszym cenzorem jest sam człowiek, pilnujący własnych myśli ze strachu przed wyobcowaniem.",
      "Dlaczego wybitny ekspert, widząc błąd, decyduje się zacisnąć zęby? Pierwszą przyczyną jest lęk przed odrzuceniem i ośmieszeniem. W kulturze, w której dominują entuzjazm i lojalność, zgłoszenie wątpliwości jest odbierane jako przejaw słabości charakteru, defetyzmu lub braku zaangażowania. Nikt nie chce być tą osobą, która 'psuje imprezę'.",
      "Drugą przyczyną jest błąd wnioskowania społecznego: człowiek zakłada, że skoro pozostali wybitni eksperci milczą i uśmiechają się z aprobatą, to widocznie oni wiedzą coś więcej. 'To niemożliwe, żeby tylko ja widział ten problem. Skoro profesor i dyrektor finansowy są spokojni, to zapewne moje obawy wynikają z braku doświadczenia'. W ten sposób każdy członek grupy ulega samouspokojeniu opartemu na milczeniu sąsiada.",
      "Autocenzura jest aktem cichej kapitulacji: człowiek zamienia swoją integralność intelektualną na komfort przynależności, płacąc za to głuchym poczuciem winy, które powraca ze zdwojoną siłą w dniu katastrofy."
    ]
  },
  {
    num: "52.9",
    title: "Iluzja jednomyślności — branie milczenia za zgodę",
    p: [
      "Stara rzymska maksyma prawnicza głosi: 'Qui tacet, consentire videtur' — kto milczy, ten zdaje się zgadzać. W procesach decyzyjnych ta reguła staje się źródłem katastrofalnej iluzji jednomyślności (Illusion of Unanimity).",
      "Gdy lider zadaje rytualne pytanie: 'Czy są jakieś głosy sprzeciwu?', a w odpowiedzi napotyka milczenie zebranych, natychmiast rejestruje w protokole: 'decyzję podjęto jednogłośnie'. Lider opuszcza salę przekonany o potężnym mandacie i jednomyślnym poparciu całego zespołu. Jednak gdyby w tym samym momencie przeprowadzić tajne, anonimowe ankiety, mogłoby się okazać, że 60% obecnych uważało projekt za szaleństwo.",
      "Iluzja jednomyślności żywi się społecznym dowodem słuszności. Kiedy patrzysz na salę, w której nikt nie podnosi ręki, Twoja własna niepewność rośnie, a odwaga maleje. Grupa wydaje się monolitową skałą, podczas gdy w rzeczywistości jest domkiem z kart, trzymającym się wyłącznie dlatego, że nikt nie ośmiela się dmuchnąć.",
      "Prawdziwa jednomyślność nie jest brakiem sprzeciwu; jest rezultatem wyczerpującej, wielogodzinnej debaty, w której wszystkie kontrargumenty zostały z szacunkiem wysłuchane, zbadane i merytorycznie odparte. Jeśli jednomyślność pojawia się w pierwszych dziesięciu minutach zebrania, nie jest to porozumienie — to zbiorowa hipnoza."
    ]
  },
  {
    num: "52.10",
    title: "Bezpośrednia presja na dysydentów („Nie bądź defetystą”)",
    p: [
      "Co dzieje się wtedy, gdy autocenzura zawodzi i odważny uczestnik decyduje się jednak podnieść rękę i zgłosić wątpliwość? W zespole ogarniętym myśleniem grupowym natychmiast uruchamiają się procedury pacyfikacji dysydenta. Reakcja grupy rzadko polega na chłodnej analizie przedstawionych danych; najczęściej jest to atak personalny zmierzający do przywołania 'buntownika' do porządku.",
      "Arsenał presji bezpośredniej jest bogaty: od żartobliwych docinków mających podważyć powagę pytającego ('O, nasz naczelny pesymista znowu szuka dziury w całym!'), przez szantaż emocjonalny ('Słuchaj, wszyscy ciężko pracowaliśmy przez pół roku, czy naprawdę chcesz to teraz zablokować na ostatniej prostej?'), aż po otwarte groźby dotyczące kariery ('Pamiętaj, że gramy w jednej drużynie, a gracze solowi rzadko awansują').",
      "Presja na dysydenta ma charakter wychowawczy nie tylko dla niego samego, ale przede wszystkim dla reszty sali. Widząc, jak lider ucisza śmiałka, pozostali uczestnicy utwierdzają się w przekonaniu, że otwieranie ust jest skrajnie niebezpieczne dla ich pozycji zawodowej.",
      "W ten sposób grupa uczy się konformizmu poprzez pokazowe karanie odwagi. W krótkim czasie zespół staje się jednorodnym chórem powtarzającym tezy lidera, a wszelka różnorodność perspektyw zostaje bezpowrotnie zdeptana."
    ]
  },
  {
    num: "52.11",
    title: "Rola samozwańczych strażników myśli (Mindguards)",
    p: [
      "W literaturze Janisa jedną z najbardziej fascynujących figur jest postać strażnika myśli (Mindguard). Pojęcie to nawiązuje do orwellowskiej policji myśli, lecz w psychologii grupowej mindguard nie jest zewnętrznym agentem — to członek zespołu, który z własnej woli i nieproszony przyjmuje rolę bufora chroniącego lidera przed dysonansem poznawczym.",
      "Mindguard działa dyskretnie, często poza oficjalnymi posiedzeniami. Jeśli dowiaduje się, że któryś z podwładnych przygotowuje raport wskazujący na wady flagowego produktu, podchodzi do niego na korytarzu i mówi: 'Słuchaj, prezes ma teraz na głowie fuzję z Amerykanami, jest pod potężną presją. Nie zawracajmy mu głowy tymi szczegółami, załatwmy to po cichu w dziale'. Raport trafia do szuflady i nigdy nie dociera do decydentów.",
      "Podczas zebrań strażnik myśli natychmiast przechwytuje trudne pytania z sali, udzielając gładkich, wymijających odpowiedzi, byle tylko lider nie musiał mierzyć się z nieprzyjemną rzeczywistością. Działa z motywacji lojalnościowej — uważa się za wiernego tarczownika swojego szefa, ratującego go przed stresem i wątpliwościami.",
      "Tragizm roli mindguarda polega na tym, że chroniąc lidera przed niewygodną prawdą, prowadzi go prostą drogą pod topór rzeczywistości. Gdy katastrofa wreszcie następuje, zdezorientowany lider pyta: 'Dlaczego nikt mi o tym nie powiedział?'. Odpowiedź brzmi: ponieważ Twój najbardziej lojalny przyjaciel zadbał o to, byś pozostał ślepy."
    ]
  },
  {
    num: "52.12",
    title: "Historia: „Ostatni raport, którego nikt nie chciał przeczytać”",
    p: [
      "W przeddzień startu promu kosmicznego Challenger, w mroźny wieczór 27 stycznia 1986 roku, w biurach firmy Morton Thiokol w Utah trwała dramatyczna telekonferencja z przedstawicielami NASA w Centrum Lotów Kosmicznych Marshalla w Alabamie. Inżynier Roger Boisjoly i jego koledzy desperacko błagali o wstrzymanie startu.",
      "Ich dane były bezlitosne: temperatura na platformie startowej miała spaść do minus dwóch stopni Celsjusza. Nigdy dotąd nie testowano gumowych uszczelek O-ring w tak niskiej temperaturze, a modele fizyczne wskazywały, że guma straci elastyczność i nie uszczelni połączeń dopalaczy rakietowych na paliwo stałe. Boisjoly przedstawił wykresy pokazujące, że niska temperatura oznacza śmiertelne ryzyko ucieczki gorących gazów.",
      "Reakcja menedżerów NASA była klasycznym przykładem presji na dysydentów. Lawrence Mulloy z NASA wykrzyknął przez telefon: 'Mój Boże, Thiokol, kiedy wy wreszcie chcecie wystartować? W przyszłym kwietniu?! Jestem zszokowany waszą rekomendacją!'. To było jawne podważenie lojalności i profesjonalizmu partnera.",
      "Wtedy do akcji wkroczyli wewnętrzni menedżerowie Thiokolu — klasyczni strażnicy myśli. Zarządzili przerwę w telekonferencji na wewnętrzną naradę. Wiceprezes ds. inżynierii, Bob Lund, wciąż wahał się, popierając inżynierów. Wtedy dyrektor generalny Jerald Mason spojrzał na niego i wypowiedział historyczne zdanie: 'Zdejmij kapelusz inżyniera i załóż kapelusz menedżera' (Take off your engineering hat and put on your management hat). Lund ugiął się. Rekomendację zmieniono na pozytywną. Następnego ranka, po 73 sekundach lotu, Challenger eksplodował na oczach milionów widzów, zabijając całą siedmioosobową załogę."
    ]
  },
  {
    num: "52.13",
    title: "Wpływ dominującego lidera na tłumienie krytyki",
    p: [
      "Styl przywództwa jest najważniejszym pojedynczym czynnikiem decydującym o tym, czy zespół wpadnie w sidła myślenia grupowego, czy zachowa epistemiczną czujność. Lider dominujący, autorytarny lub skrajnie charyzmatyczny, nawet jeśli deklaruje otwartość na dialog, niemal zawsze paraliżuje proces krytycznej oceny.",
      "Błąd zaczyna się w momencie, gdy lider na samym początku spotkania ujawnia swoje osobiste preferencje. Jeśli szef wchodzi na salę i mówi: 'Moim zdaniem powinniśmy natychmiast kupić tę fabrykę, ale oczywiście jestem otwarty na wasze opinie', dyskusja jest w istocie zakończona. Układ nerwowy podwładnych natychmiast przestawia się z trybu poszukiwania prawdy na tryb poszukiwania argumentów potwierdzających intuicję szefa.",
      "Podwładni wiedzą — podświadomie lub z gorzkiego doświadczenia — że otwarty sprzeciw wobec pomysłu, w który lider zainwestował emocjonalnie, jest obarczony wysokim kosztem relacyjnym. Zaczynają ważyć każde słowo, łagodzić kanty raportów i zamieniać kategoryczne ostrzeżenia w eufemizmy.",
      "Prawdziwie mądry lider rozumie ciężar swojego autorytetu. Wie, że jego obecność wykrzywia pole grawitacyjne debaty. Dlatego wchodzi na zebranie w postawie sokratejskiej: zadaje pytania, nie ujawnia własnego zdania aż do samego końca, a swoje uznanie wyraża nie tym, którzy mu przytakują, lecz tym, którzy potrafią wskazać lukę w jego założeniach."
    ]
  },
  {
    num: "52.14",
    title: "Izolacja zespołu od ekspertów zewnętrznych",
    p: [
      "Hermetyczność jest pożywką dla urojeń. Kiedy komitet decyzyjny odcina się od napływu świeżych, niezależnych opinii z zewnątrz, wewnątrz grupy zaczyna krążyć to samo zużyte powietrze intelektualne. Zjawisko to Janis nazwał strukturalną izolacją zespołu decyzyjnego.",
      "Izolacja bywa często uzasadniana potrzebą zachowania tajemnicy handlowej, poufnością państwową lub po prostu 'elitarnością' projektu. Menedżerowie zamykają się w gabinetach, tworząc zamkniętą kastę wtajemniczonych, do której dostęp mają wyłącznie ci, którzy podpisali zobowiązanie do lojalności i podzielają wspólny żargon projektowy.",
      "W takich warunkach znikają naturalne mechanizmy kalibracji rzeczywistości. Wszelkie pojęcia i wskaźniki zaczynają być definiowane wewnętrznie. To, co dla każdego trzeźwo myślącego eksperta z zewnątrz byłoby jaskrawą niegospodarnością lub rażącym absurdem technologicznym, wewnątrz zamkniętego kręgu staje się 'innowacyjnym podejściem'.",
      "Przełamanie izolacji wymaga świadomej higieny organizacyjnej: obowiązku zasięgania recenzji u niezależnych audytorów, zapraszania zewnętrznych recenzentów na kluczowe etapy weryfikacji założeń oraz ochrony tzw. whistle-blowerów — ludzi z dołu drabiny organizacyjnej, którzy widzą to, co dzieje się na styku planu z twardą materią."
    ]
  },
  {
    num: "52.15",
    title: "Stres, presja czasu i iluzja braku alternatyw",
    p: [
      "Myślenie grupowe osiąga swoje apogeum w warunkach ostrego kryzysu, wysokiego stresu i skrajnej presji czasu. Gdy organizacja staje przed nagłym zagrożeniem — załamaniem płynności, atakiem medialnym czy kryzysem militarnym — ludzki aparat poznawczy ulega gwałtownemu zawężeniu (tzw. tunel poznawczy).",
      "Wysoki poziom kortyzolu wygasza aktywność kory przedczołowej, odpowiedzialnej za myślenie dywergencyjne, analizę scenariuszową i generowanie alternatyw. Umysł pod presją szuka natychmiastowej ulgi: pragnie prostej, szybkiej decyzji, która pozwoli rozładować nieznośne napięcie emocjonalne.",
      "W takiej atmosferze pojawia się niebezpieczna iluzja braku alternatyw (TINA — 'There Is No Alternative'): 'Nie mamy czasu na debaty, musimy działać natychmiast, to jedyne wyjście!'. Każda próba zatrzymania się i zapytania: 'A co, jeśli nie zrobimy nic lub wybierzemy opcję C?' jest traktowana jako sabotaż w obliczu pożaru.",
      "Paradoksalnie, to właśnie w momentach największego stresu pochopne działanie przynosi najgorsze skutki. Lepsze jest poświęcenie dwóch godzin na rzetelną analizę wariantów niż spędzenie kolejnych pięciu lat na gaszeniu pożaru wywołanego paniczną decyzją."
    ]
  },
  {
    num: "52.16",
    title: "Dlaczego wysoka spójność grupy bywa pułapką?",
    p: [
      "Przez dziesięciolecia literatura z zakresu HR i team buildingu promowała dogmat o nadrzędnej wartości 'spójności zespołu' (team cohesion). Wmawiano nam, że idealny zespół to grupa ludzi, którzy uwielbiają swoje towarzystwo, wspólnie spędzają weekendy, nigdy się nie kłócą i myślą jak jeden mąż. Janis wykazał, że ta sielankowa wizja kryje w sobie śmiertelną pułapkę.",
      "Spójność interpersonalna — oparta na wzajemnej sympatii i lęku przed popsuciem dobrych relacji — często prowadzi do abdykacji ze spójności zadaniowej. Kiedy zależy nam na kolegach bardziej niż na jakości projektu, zaczynamy przedkładać ich dobre samopoczucie nad twardą weryfikację faktów. 'Nie wytknę Jankowi błędu w budżecie, bo Janek ma teraz trudny okres w domu, a poza tym to taki miły facet'.",
      "Prawdziwie wydajne i odporne na błędy zespoły nie charakteryzują się brakiem konfliktów; charakteryzują się zdolnością do prowadzenia ostrego, bezwzględnego konfliktu poznawczego (cognitive conflict) przy zachowaniu głębokiego szacunku osobistego i braku konfliktu afektywnego (affective conflict).",
      "W wielkim zespole ludzie potrafią przez cztery godziny spierać się o założenia architektoniczne z pasją prokuratorów, a po wyjściu z sali pójść razem na obiad, wiedząc, że ten spór był wyrazem najwyższej troski o wspólne dzieło, a nie atakiem na ich godność."
    ]
  },
  {
    num: "52.17",
    title: "Historia: „Sprawa inżyniera, który podniósł rękę”",
    p: [
      "W 2014 roku inżynier bezpieczeństwa lotniczego w jednym z wiodących koncernów lotniczych w Seattle, Robert, analizował integrację nowego systemu sterowania lotem (MCAS) przeznaczonego dla zmodernizowanego modelu samolotu pasażerskiego. Samolot wyposażono w większe, mocniejsze silniki, które przesunięto do przodu, co zmieniało aerodynamikę maszyny przy ostrym wznoszeniu.",
      "Robert odkrył, że system MCAS opierał się na danych z zaledwie jednego czujnika kąta natarcia (Angle of Attack), bez żadnej redundancji. W razie awarii lub zablokowania pojedynczego czujnika przez lód, komputer pokładowy mógł gwałtownie skierować dziób maszyny w dół, odbierając pilotom kontrolę nad sterami. Robert sporządził notatkę i poprosił o spotkanie z kierownictwem programu.",
      "Na zebraniu spotkał się z chłodnym murem. 'Robert', usłyszał, 'jeśli dodamy drugi czujnik i zmienimy architekturę oprogramowania, Federalna Agencja Lotnictwa (FAA) uzna ten samolot za zupełnie nową konstrukcję. Wtedy linie lotnicze będą musiały wysłać pilotów na drogie symulatory, a nasz kontrakt z liniami z Teksasu przepadnie. Konkurent z Tuluzy nas zmiażdży. Testy wykazują, że piloci zareagują w trzy sekundy'.",
      "Robert nie był typem rewolucjonisty. Pomyślał o swoich trzech córkach, o kredycie hipotecznym i o tym, że jego szef właśnie dostał awans. Podpisał protokół odbioru z adnotacją 'uwagi techniczne omówiono ustnie'. Cztery lata później dwa fabrycznie nowe samoloty tego typu rozbiły się w Indonezji i Etiopii, grzebiąc w szczątkach 346 pasażerów i członków załogi. Robert stanął przed komisją senacką, będąc cieniem samego siebie."
    ]
  },
  {
    num: "52.18",
    title: "Instytucjonalizacja krytyki: Adwokat Diabła, Red Teaming i Pre-Mortem",
    p: [
      "Ponieważ myślenie grupowe jest chorobą systemową, nie da się go wyleczyć za pomocą samych apeli moralnych o 'odwagę' i 'szczerość'. Zespół potrzebuje twardych procedur instytucjonalnych, które zdejmują z jednostki osobisty koszt krytyki.",
      "Pierwszym narzędziem jest formalna instytucja Adwokata Diabła (Advocatus Diaboli), zapożyczona z historycznych procesów kanonizacyjnych Kościoła katolickiego. Zadaniem wyznaczonej osoby nie jest wyrażanie własnych poglądów, lecz urzędowy, bezwzględny atak na projekt. Ponieważ rola ta jest nakazana przez procedurę, nikt nie może oskarżyć Adwokata Diabła o nielojalność czy defetyzm — wypełnia on jedynie swój służbowy obowiązek.",
      "Drugim narzędziem, wywodzącym się z wojskowości i cyberbezpieczeństwa, jest Red Teaming (Czerwony Zespół). To niezależna grupa analityków, której jedynym zadaniem jest wcielenie się w rolę bezwzględnego wroga lub konkurenta i znalezienie słabych punktów, luk i wektorów ataku w planie opracowanym przez 'Niebieski Zespół' (autorów projektu).",
      "Trzecim genialnym narzędziem jest Pre-Mortem Gary'ego Kleina, które odwraca psychologię spotkania: zamiast pytać: 'co może pójść nie tak?', zakładamy, że projekt już poniósł klapę, co legalizuje pesymizm i uwalnia kreatywność w identyfikacji ukrytych ryzyk."
    ]
  },
  {
    num: "52.19",
    title: "Badania nad dynamiką komitetów i replikacje Janisa",
    p: [
      "Przez pół wieku od publikacji teorii Janisa wielu badaczy poddawało jego model rygorystycznym testom empirycznym i laboratoryjnym. Badacze tacy jak Marlene Turner, Anthony Pratkanis czy James Esser potwierdzili kluczowe tezy Janisa, wprowadzając jednak istotne uściślenia teoretyczne.",
      "Okazało się, że sama wysoka spójność grupy nie jest wystarczającym warunkiem wywołania myślenia grupowego. Istotniejszym czynnikiem jest tożsamościowe zagrożenie grupy (social identity threat) połączone z brakiem procedur metodycznych. Kiedy spójna grupa staje przed problemem, ale dysponuje zinstytucjonalizowaną kulturą badania hipotez, wysoka spójność wręcz sprzyja otwartości i wzajemnemu zaufaniu.",
      "Z kolei badania z wykorzystaniem analizy lingwistycznej (m.in. Choi i Kim, 2005) wykazały, że zespoły w stanie groupthink wykazują specyficzny wzorzec komunikacji: dramatyczny spadek liczby zaimków pierwszej osoby liczby pojedynczej ('ja myślę', 'mam wrażenie') na rzecz zaimków kolektywnych ('my wiemy', 'wszyscy się zgadzamy') oraz lawinowy wzrost uogólnień kwantyfikatorowych.",
      "Współczesna nauka traktuje zatem myślenie grupowe nie jako nieuchronny los każdego kolektywu, lecz jako patologię zarządzania architekturą wyboru i komunikacji w warunkach presji społecznej."
    ]
  },
  {
    num: "52.20",
    title: "Kontrprzypadek: Zespół kryzysowy Johna F. Kennedy’ego podczas Kryzysu Kubańskiego",
    p: [
      "Najwspanialszą lekcją w historii psychologii zarządzania jest to, że z myślenia grupowego można wyciągnąć wnioski i zbudować system odporny na błędy. Sam prezydent John F. Kennedy, który w 1961 roku dopuścił do kompromitacji w Zatoce Świń, zaledwie osiemnaście miesięcy później, w październiku 1962 roku podczas Kryzysu Kubańskiego, zastosował procedury decyzyjne, które uratowały świat przed wojną nuklearną.",
      "Kennedy powołał specjalny komitet doradczy EXCOMM (Executive Committee of the National Security Council), wprowadzając bezprecedensowe zasady pracy. Po pierwsze, celowo opuszczał niektóre kluczowe posiedzenia, by jego obecność nie krępowała swobody wypowiedzi doradców. Po drugie, nakazał zniesienie protokołu hierarchicznego — sekretarze stanu, generałowie i młodzi analitycy mieli równy status w debacie.",
      "Po trzecie, wyznaczył swojego brata, Roberta Kennedy’ego, oraz doradcę Theodore'a Sorensena na oficjalnych, bezlitosnych Adwokatów Diabła, których zadaniem było bezustanne atakowanie każdej rodzącej się propozycji (w tym natychmiastowego nalotu na radzieckie wyrzutnie rakietowe żądanego przez dowództwo sił powietrznych).",
      "Po czwarte, zespół podzielono na mniejsze podgrupy pracujące równolegle nad alternatywnymi scenariuszami. Dzięki temu EXCOMM nie uległ iluzji natychmiastowego uderzenia, lecz wypracował precyzyjną strategię kwarantanny morskiej połączoną z tajnym kanałem dyplomatycznym, co doprowadziło do pokojowego wycofania radzieckich rakiet z Kuby."
    ]
  },
  {
    num: "52.21",
    title: "Kontrprzypadek: Zespoły o wysokim bezpieczeństwie psychologicznym (Amy Edmondson)",
    p: [
      "W latach 90. XX wieku profesor Harvard Business School, Amy Edmondson, prowadziła badania nad błędami medycznymi w szpitalach klinicznych. Ku swojemu początkowemu zaskoczeniu odkryła, że zespoły lekarsko-pielęgniarskie uznawane za najlepsze i najbardziej zintegrowane raportowały... znacznie więcej błędów w dawkowaniu leków niż zespoły przeciętne.",
      "Dalsza analiza ujawniła fascynującą prawdę: najlepsze zespoły wcale nie popełniały więcej błędów — one po prostu otwarcie o nich mówiły. Panował w nich klimat, który Edmondson nazwała bezpieczeństwem psychicznym (Psychological Safety): wspólne przekonanie, że nikt w zespole nie zostanie ukarany, wyśmiany ani zdegradowany za to, że zada naiwne pytanie, zgłosi wątpliwość lub przyzna się do pomyłki.",
      "W szpitalach o niskim bezpieczeństwie pielęgniarka, widząc, że chirurg podaje złą dawkę, milczała ze strachu przed awanturą i publicznym upokorzeniem. W szpitalach o wysokim bezpieczeństwie mówiła natychmiast: 'Doktorze, czy na pewno chodzi o 50 miligramów?', a lekarz odpowiadał: 'Dziękuję, uratowałaś pacjenta'.",
      "Bezpieczeństwo psychologiczne nie jest pobłażliwością ani strefą leniwego komfortu; to twardy warunek operacyjny, w którym wysokie standardy wykonania łączą się z całkowitym brakiem lęku przed prawdą."
    ]
  },
  {
    num: "52.22",
    title: "Historia wieloetapowa: „Firma, która nauczyła się nie zgadzać”",
    p: [
      "Etap I: Porażka milczenia. Warszawska spółka technologiczna 'Nexura' przez dwa lata rozwijała platformę płatności biometrycznych. Na wszystkich zebraniach zarządu panowała atmosfera absolutnej jednomyślności — założyciele znali się ze studiów, wspólnie jeździli w góry i nie chcieli psuć wzajemnych relacji. Wszelkie sygnały o trudnościach z integracją bankową były zamiatane pod dywan. Projekt zakończył się spektakularną klapą i stratą 15 milionów złotych.",
      "Etap II: Bolesny audyt kultury. Zamiast bankructwa, założyciele zaprosili zewnętrznego konsultanta psychologii organizacji. Podczas dwudniowych warsztatów wyszło na jaw, że każdy z dyrektorów wiedział o wadach systemu na pół roku przed premierą, lecz nikt nie chciał 'ranić uczuć' głównego architekta oprogramowania. Szok wywołany tym odkryciem uświadomił im, że ich rzekoma przyjaźń była w istocie formą zbiorowego tchórzostwa.",
      "Etap III: Wdrożenie rytuałów niezgody. Zarząd wprowadził trzy żelazne zasady: 1) Każde spotkanie koncepcyjne kończy się 10-minutowym ćwiczeniem 'Co może nas zabić?', 2) Lider prezentujący pomysł musi jako pierwszy wymienić jego trzy największe wady, 3) Na koniec miesiąca przyznawana jest premia za 'Zgłoszenie Najbardziej Wartościowego Błędu w Projekcie'.",
      "Etap IV: Nowa dojrzałość. Po trzech latach 'Nexura' stała się jednym z najszybciej rosnących fintechów w regionie. Na ich zebraniach nikt już nie boi się podnieść ręki i powiedzieć: 'Piotr, bardzo cię cenię, ale to założenie jest całkowicie błędne z punktu widzenia API banków'. Przyjaźń założycieli przetrwała, stając się silniejsza, ponieważ przestała być zakładnikiem pozornej harmonii."
    ]
  },
  {
    num: "52.23",
    title: "CZŁOWIEK POD MIKROSKOPEM: Kortyzol, lęk przed odrzuceniem i konformizm hierarchiczny",
    p: [
      "Z punktu widzenia neurobiologii ewolucyjnej zachowanie dysydenta w grupie jest skrajnie kosztowne. Badania z użyciem neuroobrazowania fMRI dowodzą, że gdy jednostka wyraża pogląd odmienny od jednomyślnej większości, w jej mózgu dochodzi do natychmiastowej aktywacji przedniej części zakrętu obręczy (dACC) oraz przedniej wyspy — struktur tworzących tzw. matrycę bólu społecznego (Social Pain Matrix).",
      "Ewolucyjnie odrzucenie przez grupę oznaczało śmierć z głodu lub w paszczy drapieżnika. Dlatego mózg traktuje izolację społeczną jak realną ranę fizyczną. Uruchamia się kaskada osi HPA (podwzgórze-przysadka-nadnercza), powodując gwałtowny wyrzut kortyzolu i przyspieszenie akcji serca. Człowiek siedzący przy stole zarządczym, który zamierza sprzeciwić się prezesowi, przeżywa fizjologiczną panikę.",
      "Jednocześnie w obecności samca lub samicy alfa (dominującego lidera) w mózgu aktywują się atawistyczne mechanizmy uległości hierarchicznej. Subtelne sygnały niewerbalne — uniesienie podbródka, głęboki tembr głosu, brak uśmiechu u lidera — wywołują mimowolne wygaszenie asertywności u podwładnych.",
      "Zrozumienie tej neurobiologicznej bazy uczy, że odwaga cywilna w organizacji nie jest stanem naturalnym; jest aktem heroicznego przezwyciężenia pierwotnych mechanizmów przetrwania naszego mózgu. Jeśli organizacja nie obniży biologicznego kosztu sprzeciwu za pomocą procedur, ewolucja zawsze wygra z racjonalnością."
    ]
  },
  {
    num: "52.24",
    title: "Czy myślenie grupowe można całkowicie wyeliminować?",
    p: [
      "Uczciwa odpowiedź nauki na to pytanie brzmi: nie, myślenia grupowego nie da się całkowicie wyeliminować raz na zawsze. Dopóki ludzie będą łączyć się w zespoły, dopóki będą pragnąć akceptacji, szacunku i poczucia przynależności, dopóty pokusa ulegania pozornej jednomyślności będzie nieodłącznym cieniem naszej społecznej natury.",
      "Myślenie grupowe przypomina korozję metalu: nie da się sprawić, by stal przestała wchodzić w reakcję z tlenem, lecz można ją bezustannie czyścić, pokrywać powłokami antykorozyjnymi i poddawać regularnym przeglądom technicznym. W organizacji taką powłoką antykorozyjną jest bezwzględna higiena procedur decyzyjnych.",
      "Największym błędem jest uznanie, że nasz zespół jest już 'wyleczony' z groupthink, bo 'przecież jesteśmy tacy nowocześni, pracujemy w metodykach zwinnych (Agile) i nie nosimy krawatów'. Wiele najbardziej skrajnych przypadków myślenia grupowego w XXI wieku miało miejsce w modnych startupach z Doliny Krzemowej, gdzie kult 'kultury organizacyjnej' i 'wspólnej misji' stał się substytutem sekty religijnej.",
      "Wieczna czujność jest ceną trafnych decyzji. Zespół, który przestaje badać swoje procesy myślowe, natychmiast zaczyna staczać się po równi pochyłej samozachwytu prosto w ramiona kolejnej katastrofy."
    ]
  },
  {
    num: "52.25",
    title: "SYNTEZA",
    p: [
      "Myślenie grupowe to wielka przestroga dla pychy ludzkiego rozumu: dowodzi, że jednostkowa inteligencja, wiedza i najlepsze intencje są bezsilne, gdy proces grupowy zostanie skażony lękiem przed prawdą i kultem pozornej harmonii. Wielkie katastrofy nie są dziełem szaleńców; są owocem milczenia ludzi rozsądnych w obecności władzy.",
      "Odporność decyzyjna nie rodzi się z unikania konfliktów, lecz ze zdolności do ich mądrego, bezpiecznego kultywowania. Wielkie zespoły to te, w których miłość do prawdy przewyższa lęk przed dyskomfortem, w których krytyka jest formą lojalności, a lider mierzy swoją siłę nie liczbą uległych potakiwaczy, lecz jakością pytań, które potrafią zadać mu współpracownicy.",
      "Jednak patologie dynamiki społecznej nie kończą się wewnątrz pojedynczej grupy decyzyjnej. Gdy zintegrowana, pewna swoich racji wspólnota zderza się z inną, równie zdeterminowaną wspólnotą o odmiennych interesach i wartościach, na scenę wkracza najbardziej niszczycielski ze wszystkich mechanizmów psychologii społecznej: konflikt międzygrupowy, dehumanizacja obcych i plemienna wojna o zasoby. O tym, jak rodzi się wrogość 'My kontra Oni' i jak budować mosty ponad przepaściami podziału, opowiada monumentalny, zamykający Tom III Rozdział 53: KONFLIKT MIĘDZYGRUPOWY, TOŻSAMOŚĆ SPOŁECZNA I DROGI POROZUMIENIA."
    ]
  }
];

export const chapterFiftyTwo: Chapter = {
  number: 52,
  volume: 3,
  volumeChapterNumber: 36,
  title: "Myślenie Grupowe i Patologie Decyzyjne",
  subtitle: "Jak iluzja jednomyślności, autocenzura i presja na konformizm prowadzą elitarne zespoły do katastrofalnych błędów",
  leadParagraph: "Gdy spójny zespół wyżej stawia harmonię i lojalność wobec lidera niż rzetelne badanie faktów, nawet najbystrzejsze umysły podejmują decyzje o katastrofalnych skutkach. Niniejszy rozdział bada syndrom Groupthink Irvinga Janisa, osiem symptomów patologii komitetów, rolę strażników myśli oraz praktyczne procedury ochrony decyzyjnej: Adwokata Diabła, sesje Pre-Mortem i kulturę bezpieczeństwa psychologicznego.",
  totalEstimatedPages: 36,
  sections: rawSections52.map((sec, idx) => {
    const secId = `sec-52-${idx + 1}`;
    const section: BookSection = {
      id: secId,
      pageNumber: 1 + idx * 2,
      sectionNumber: sec.num,
      title: sec.title,
      paragraphs: sec.p
    };
    if (idx === 2) {
      section.caseStudyRef = chapterFiftyTwoCaseStudies[0];
    }
    if (idx === 6) {
      section.interactiveWindowRef = chapterFiftyTwoInteractiveWindow;
    }
    if (idx === 17) {
      section.exerciseRef = chapterFiftyTwoExercises[0];
    }
    return section;
  })
};

const outputContent = `import { Chapter, ExamQuestion, CaseStudy, SelfExercise, InteractiveWindowData } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 36 (GLOBALNIE ROZDZIAŁ 52 W STRUKTURZE DZIEŁA)
 * TYTUŁ: MYŚLENIE GRUPOWE I PATOLOGIE DECYZYJNE
 * PODTYTUŁ: Jak iluzja jednomyślności, autocenzura i presja na konformizm prowadzą elitarne zespoły do katastrofalnych błędów
 */

export const chapterFiftyTwoExamQuestions: ExamQuestion[] = ${JSON.stringify(chapterFiftyTwoExamQuestions, null, 2)};

export const chapterFiftyTwoCaseStudies: CaseStudy[] = ${JSON.stringify(chapterFiftyTwoCaseStudies, null, 2)};

export const chapterFiftyTwoExercises: SelfExercise[] = ${JSON.stringify(chapterFiftyTwoExercises, null, 2)};

export const chapterFiftyTwoInteractiveWindow: InteractiveWindowData = ${JSON.stringify(chapterFiftyTwoInteractiveWindow, null, 2)};

export const chapterFiftyTwo: Chapter = ${JSON.stringify(chapterFiftyTwo, null, 2)};
`;

fs.writeFileSync('src/data/chapterFiftyTwoData.ts', outputContent, 'utf-8');
console.log('Chapter 52 successfully created and written to src/data/chapterFiftyTwoData.ts');
