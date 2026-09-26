import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterNineteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W psychologii Alberta Bandury poczucie własnej skuteczności (Self-efficacy) różni się od ogólnej samooceny (Self-esteem) tym, że:',
    topic: 'Poczucie Własnej Skuteczności',
    sectionRef: 'Sekcja 19.2',
    options: [
      { label: 'A', text: 'Self-efficacy dotyczy subiektywnego przekonania o własnej zdolności do wykonania konkretnego zadania, podczas gdy samoocena jest ogólną emocjonalną oceną własnej wartości.', isCorrect: true },
      { label: 'B', text: 'Self-efficacy odnosi się tylko do sportowców wyczynowych.', isCorrect: false },
      { label: 'C', text: 'Samoocena jest pojęciem genetycznym, a self-efficacy wygasa po skończeniu studiów.', isCorrect: false },
      { label: 'D', text: 'Nie ma żadnej różnicy, to dwa synonimy z języka angielskiego.', isCorrect: false }
    ],
    explanation: 'Można posiadać wysokie poczucie skuteczności w programowaniu Python (wiedzieć „poradzę sobie z tym kodem”), mając jednocześnie niską ogólną samoocenę (czuć się bezwartościowym człowiekiem).',
    keyTakeaway: 'Skuteczność to wiara w umiejętności w danej domenie, samoocena to stosunek do samego siebie jako człowieka.'
  },
  {
    id: 2,
    question: 'Co według badań Alberta Bandury jest najbardziej niezawodnym i trwałym źródłem budowania poczucia własnej skuteczności?',
    topic: 'Źródła Skuteczności',
    sectionRef: 'Sekcja 19.5',
    options: [
      { label: 'A', text: 'Doświadczenie opanowania (Mastery Experiences) – osobiste przeżycie sukcesu osiągniętego poprzez pokonanie przeszkód własnym wysiłkiem.', isCorrect: true },
      { label: 'B', text: 'Powtarzanie sztucznych afirmacji przed lustrem bez podejmowania jakichkolwiek działań.', isCorrect: false },
      { label: 'C', text: 'Wypicie napoju energetycznego przed przystąpieniem do pracy.', isCorrect: false },
      { label: 'D', text: 'Słuchanie głośnej muzyki marszowej.', isCorrect: false }
    ],
    explanation: 'Sztuczne komplementy dają chwilowe pobudzenie. Trwałe poczucie skuteczności buduje się wyłącznie na fundamencie pokonanych trudności i zrealizowanych zadań w świecie realnym.',
    keyTakeaway: 'Nie zbudujesz wiary w siebie słowami — zbudujesz ją dowodami zebranymi w działaniu.'
  },
  {
    id: 3,
    question: 'Na czym polega efekt Dunninga-Krugera w ocenie własnych możliwości?',
    topic: 'Efekt Dunninga-Krugera',
    sectionRef: 'Sekcja 19.4',
    options: [
      { label: 'A', text: 'Osoby o niskich kompetencjach w danej dziedzinie drastycznie przeceniają swoje umiejętności z powodu braku wiedzy potrzebnej do dostrzeżenia własnych błędów.', isCorrect: true },
      { label: 'B', text: 'Osoby wybitnie uzdolnione zawsze uważają się za genialne we wszystkim.', isCorrect: false },
      { label: 'C', text: 'Utrata pamięci krótkotrwałej u osób po 60. roku życia.', isCorrect: false },
      { label: 'D', text: 'Brak możliwości nauki języków obcych bez pomocy tłumacza.', isCorrect: false }
    ],
    explanation: 'Brak wiedzy uniemożliwia rzetelną ocenę jakości własnej pracy. Dopiero w miarę wzrostu kompetencji człowiek dostrzega stopień skomplikowania dziedziny i jego pewność siebie początkowo spada.',
    keyTakeaway: 'Nieprawdopodobna pewność siebie w nowej dziedzinie bywa często cechą laika.'
  },
  {
    id: 4,
    question: 'Co charakteryzuje uzależnienie poczucia własnej wartości od wyników (Contingent Self-Esteem)?',
    topic: 'Uwarunkowana Samoocena',
    sectionRef: 'Sekcja 19.7',
    options: [
      { label: 'A', text: 'Poczucie własnej wartości gwałtownie rośnie po sukcesie i rozpada się po porażce, wywołując rollercoaster emocjonalny.', isCorrect: true },
      { label: 'B', text: 'Stałe, niezmienne poczucie spokoju niezależnie od sytuacji na giełdzie.', isCorrect: false },
      { label: 'C', text: 'Brak jakichkolwiek emocji podczas wykonywania zadań.', isCorrect: false },
      { label: 'D', text: 'Zdolność do bezbłędnego wykonywania poleceń bez wysiłku.', isCorrect: false }
    ],
    explanation: 'Gdy Twoja wartość jako człowieka zależy od ostatniego wyniku, każda drobna porażka staje się egzystencjalnym zagrożeniem.',
    keyTakeaway: 'Oddziel ocenę wykonania zadania od oceny własnej wartości jako człowieka.'
  },
  {
    id: 5,
    question: 'W jaki sposób porównania społeczne w górę (Upward Social Comparison) wpływają na samoocenę, jeśli brak nam poczucia sprawczości?',
    topic: 'Porównania Społeczne',
    sectionRef: 'Sekcja 19.6',
    options: [
      { label: 'A', text: 'Wywołują spadek poczucia własnej wartości, zazdrość, wstyd i uczucie bezsilności.', isCorrect: true },
      { label: 'B', text: 'Automatycznie podnoszą poziom inteligencji o 20 punktów.', isCorrect: false },
      { label: 'C', text: 'Zmuszają mózg do natychmiastowego zapadnięcia w głęboki sen.', isCorrect: false },
      { label: 'D', text: 'Eliminują potrzebę podejmowania jakichkolwiek starań.', isCorrect: false }
    ],
    explanation: 'Porównywanie własnych kulis z wyreżyserowaną sceną innych ludzi w mediach społecznościowych buduje iluzję własnej niedostateczności.',
    keyTakeaway: 'Porównuj się do tego, kim byłeś wczoraj, a nie do tego, kim ktoś inny jest dzisiaj.'
  },
  {
    id: 6,
    question: 'Jakie są ewolucyjne korzenie Lęku przed Oceną Społeczną (Evaluation Anxiety)?',
    topic: 'Lęk przed Oceną',
    sectionRef: 'Sekcja 19.8',
    options: [
      { label: 'A', text: 'Negatywna ocena ze strony plemienia groziła wykluczeniem i śmiercią w dzikim środowisku, dlatego mózg traktuje krytykę jako zagrożenie biologiczne.', isCorrect: true },
      { label: 'B', text: 'Lęk przed oceną pojawił się dopiero po wynalezieniu smartfonów.', isCorrect: false },
      { label: 'C', text: 'Jest wynikiem niedoboru witaminy C w diecie.', isCorrect: false },
      { label: 'D', text: 'Zależy wyłącznie od poziomu wykształcenia rodziców.', isCorrect: false }
    ],
    explanation: 'Mózg reaguje na krytykę publiczną tak samo jak na groźbę wygnania z bezpiecznego obozu przodków.',
    keyTakeaway: 'Lęk przed oceną to dawny alarm ewolucyjny, który w dzisiejszym świecie bywa fałszywy.'
  },
  {
    id: 7,
    question: 'Czym różni się adaptacyjny dążeniowy perfekcjonizm od perfekcjonizmu dezadaptacyjnego (lękowego)?',
    topic: 'Anatomia Perfekcjonizmu',
    sectionRef: 'Sekcja 19.9',
    options: [
      { label: 'A', text: 'Perfekcjonizm adaptacyjny skupia się na czerpaniu radości z rozwoju i dążenia do mistrzostwa; dezadaptacyjny napędzany jest przerażeniem przed popełnieniem błędu.', isCorrect: true },
      { label: 'B', text: 'Perfekcjonizm lękowy dotyczy wyłącznie prac domowych w szkole podstawowej.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnego perfekcjonizmu adaptacyjnego, każdy perfekcjonizm to choroba.', isCorrect: false },
      { label: 'D', text: 'Perfekcjonizm adaptacyjny polega na unikaniu podejmowania jakichkolwiek zadań.', isCorrect: false }
    ],
    explanation: 'Lękowy perfekcjonista nie dąży do sukcesu — on ucieka przed wstydem, jaki wywołałaby jakakolwiek ryska na jego pracy.',
    keyTakeaway: 'Zamień dążenie do bezbłędności na dążenie do ciągłego postępu (progress, not perfection).'
  },
  {
    id: 8,
    question: 'Jaką rolę w budowaniu stabilnej samooceny odgrywa Samowspółczucie (Self-Compassion) według Kristin Neff?',
    topic: 'Samowspółczucie',
    sectionRef: 'Sekcja 19.11',
    options: [
      { label: 'A', text: 'Pozwala traktować samego siebie z życzliwością i wyrozumiałością w chwili porażki, zastępując surowy samokrytycyzm racjonalnym wsparciem.', isCorrect: true },
      { label: 'B', text: 'Oznacza użalanie się nad sobą i unikanie wszelkiej odpowiedzialności za błędy.', isCorrect: false },
      { label: 'C', text: 'Polega na ciągłym kupowaniu sobie prezentów na pocieszenie.', isCorrect: false },
      { label: 'D', text: 'Jest techniką stosowaną wyłącznie w szpitalach neurologicznych.', isCorrect: false }
    ],
    explanation: 'Samowspółczucie to nie pobłażliwość, lecz postawa mądrego trenera, który po upadku nie bije zawodnika, lecz pomaga mu wstać i przeanalizować błąd.',
    keyTakeaway: 'Bądź dla siebie takim przyjacielem, jakiego potrzebujesz w chwili porażki.'
  },
  {
    id: 9,
    question: 'Co charakteryzuje zjawisko Samo-utrudniania (Self-Handicapping)?',
    topic: 'Samoutrudnianie',
    sectionRef: 'Sekcja 19.10',
    options: [
      { label: 'A', text: 'Stwarzanie przeszkód przed trudnym zadaniem (np. nieprzespana noc, impreza przed egzaminem), by mieć gotową wymówkę chroniącą samoocenę w razie porażki.', isCorrect: true },
      { label: 'B', text: 'Zapominanie haseł do konta bankowego.', isCorrect: false },
      { label: 'C', text: 'Pomaganie innym ludziom w brew własnemu interesowi.', isCorrect: false },
      { label: 'D', text: 'Trening siłowy z podwójnym obciążeniem na siłowni.', isCorrect: false }
    ],
    explanation: 'Umysł woli zaryzykować porażkę z powodu braku snu („oblałem, bo byłem zmęczony”) niż porażkę z braku inteligencji („oblałem, bo jestem za głupi”).',
    keyTakeaway: 'Samoutrudnianie to kosztowna tarcza chroniąca ego kosztem rzeczywistych wyników.'
  },
  {
    id: 10,
    question: 'W jaki sposób doznawanie Systematycznych Sukcesów o Rośniejącym Poziomie Trudności (Graded Mastery) wpływa na strukturę neuronalną?',
    topic: 'Protokół Graded Mastery',
    sectionRef: 'Sekcja 19.12',
    options: [
      { label: 'A', text: 'Wzmacnia ścieżki dopaminowe w jądrze półleżącym i buduje połączenia w dlPFC odpowiedzialne za poczucie kontroli i odporność na stres.', isCorrect: true },
      { label: 'B', text: 'Prowadzi do zaniku tkanki mózgowej w płatach skroniowych.', isCorrect: false },
      { label: 'C', text: 'Eliminuje potrzebę jakiegokolwiek odpoczynku i snu.', isCorrect: false },
      { label: 'D', text: 'Zmniejsza szybkość przewodzenia impulsów w nerwach wzrokowych.', isCorrect: false }
    ],
    explanation: 'Równomierne podnoszenie poprzeczki pozwala mózgowi doświadczać sukcesu bez wywoływania paraliżującego lęku w ciele migdałowatym.',
    keyTakeaway: 'Dziel wielkie cele na mikrokroki, które dają ciągłe poczucie wygranej.'
  },
  {
    id: 11,
    question: 'Na czym polega różnica między pewnością siebie wynikającą z kompetencji a pewnością siebie defensywną (maską pewności)?',
    topic: 'Pewność Siebie vs Maska',
    sectionRef: 'Sekcja 19.3',
    options: [
      { label: 'A', text: 'Pewność oparta na kompetencji jest cicha i odporna na krytykę; pewność defensywna jest głośna, roszczeniowa i natychmiast wchodzi w agresję przy podważeniu.', isCorrect: true },
      { label: 'B', text: 'Pewność defensywna występuje wyłącznie u lekarzy chirurgów.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnej różnicy, pewność siebie to zawsze głośne zachowanie.', isCorrect: false },
      { label: 'D', text: 'Pewność wynikająca z kompetencji znika po ukończeniu 30. roku życia.', isCorrect: false }
    ],
    explanation: 'Głośna dominacja bywa często kompensacją głębokiego niepokoju i braku wiary we własne możliwości.',
    keyTakeaway: 'Prawdziwa kompetencja nie potrzebuje krzyku — obroni się faktami.'
  },
  {
    id: 12,
    question: 'Jaką funkcję w regulacji samooceny pełni Dziennik Zwycięstw i Drobnych Osiągnięć?',
    topic: 'Dziennik Osiągnięć',
    sectionRef: 'Sekcja 19.16',
    options: [
      { label: 'A', text: 'Dostarcza kory przedczołowej twardych, pisemnych dowodów na własną skuteczność, osłabiając skłonność do zapominania o własnych sukcesach.', isCorrect: true },
      { label: 'B', text: 'Służy do chwalenia się przed znajomymi na imprezach.', isCorrect: false },
      { label: 'C', text: 'Zmusza człowieka do kupowania drogich mebli biurowych.', isCorrect: false },
      { label: 'D', text: 'Zastępuje jakąkolwiek potrzebę podejmowania dalszych działań.', isCorrect: false }
    ],
    explanation: 'Negatywna asymetria emocjonalna sprawia, że umysł pamięta porażki, a zapomina o sukcesach. Dziennik jest pamięcią zewnętrzną dla sprawczości.',
    keyTakeaway: 'Zbieraj dowody swoich małych wygranych każdego dnia.'
  },
  {
    id: 13,
    question: 'Co według psychologii poznawczej oznacza pojęcie Reewaluacji Poznawczej Porażki?',
    topic: 'Reewaluacja Porażki',
    sectionRef: 'Sekcja 19.13',
    options: [
      { label: 'A', text: 'Przeformułowanie niepowodzenia z kategorii „klęska tożsamościowa” na kategorię „eksperyment procesowy dostarczający cennych danych”.', isCorrect: true },
      { label: 'B', text: 'Oskarżenie wszystkich współpracowników o celowy sabotaż.', isCorrect: false },
      { label: 'C', text: 'Udawanie, że projekt zakończył się sukcesem mimo straty miliona złotych.', isCorrect: false },
      { label: 'D', text: 'Płacz i odcięcie się od kontaktów z ludźmi na rok.', isCorrect: false }
    ],
    explanation: 'Reewaluacja pozwala wydobyć z porażki wartość edukacyjną, wygaszając paraliżujący wstyd w ciele migdałowatym.',
    keyTakeaway: 'Porażka to nie wyrok na Twoją wartość — to darmowa lekcja od rzeczywistości.'
  },
  {
    id: 14,
    question: 'W jaki sposób pochwały nakierowane na proces („Doceniam Twój wysiłek i strategię”) kształtują samoocenę w porównaniu do pochwał nakierowanych na cechę („Jesteś taki mądry”)?',
    topic: 'Sztuka Chwalenia',
    sectionRef: 'Sekcja 19.14',
    options: [
      { label: 'A', text: 'Pochwała procesu buduje Growth Mindset i odporność na porażki; pochwała cechy buduje Fixed Mindset i lęk przed utratą etykiety „mądrego”.', isCorrect: true },
      { label: 'B', text: 'Pochwała procesu niszczy jakąkolwiek motywację do działania.', isCorrect: false },
      { label: 'C', text: 'Pochwała cechy sprawia, że człowiek nigdy nie popełnia błędów.', isCorrect: false },
      { label: 'D', text: 'Oba typy pochwał działają dokładnie tak samo na układ nerwowy.', isCorrect: false }
    ],
    explanation: 'Chwalenie za cechę sprawia, że każda trudność staje się zagrożeniem dla etykiety, wywołując lęk i unikanie wyzwań.',
    keyTakeaway: 'Chwal za wysiłek, strategię i wyciągnięte wnioski — nie za stałe cechy.'
  },
  {
    id: 15,
    question: 'Jaki wpływ na ocenę własnych możliwości ma stan wyczerpania metabolicznego (HALT - Hungry, Angry, Lonely, Tired)?',
    topic: 'Biologia Samooceny',
    sectionRef: 'Sekcja 19.15',
    options: [
      { label: 'A', text: 'Spadek poziomu glukozy i zmęczenie drastycznie obniżają sprawność dlPFC, podbijając pesymizm i katastroficzne wizje własnej nieudolności.', isCorrect: true },
      { label: 'B', text: 'Głód i zmęczenie automatycznie podnoszą poziom pewności siebie.', isCorrect: false },
      { label: 'C', text: 'Nie ma żadnego wpływu na procesy myślowe.', isCorrect: false },
      { label: 'D', text: 'Sprawia, że człowiek zaczyna myśleć wyłącznie w języku obcym.', isCorrect: false }
    ],
    explanation: 'Gdy Twój mózg jest głodny lub wyczerpany, nie podejmuj decyzji dotyczących własnej wartości — najpierw zadbaj o fizjologię.',
    keyTakeaway: 'Nie oceniaj swoich życiowych możliwości, gdy jesteś zmęczony lub głodny.'
  },
  {
    id: 16,
    question: 'Na czym polega proces Odczarowania Krytyki Zewnętrznej (External Criticism Audit)?',
    topic: 'Audyt Krytyki',
    sectionRef: 'Sekcja 19.11',
    options: [
      { label: 'A', text: 'Przeanalizowanie, czy krytyka dotyczy faktów i zachowania, czy jest jedynie ekspresją emocji i kompleksów osoby krytykującej.', isCorrect: true },
      { label: 'B', text: 'Napisanie zgłoszenia na policję po każdej usłyszanej uwadze.', isCorrect: false },
      { label: 'C', text: 'Zgadzanie się z każdą obelgą bez zastanowienia.', isCorrect: false },
      { label: 'D', text: 'Zablokowanie wszystkich znajomych w telefonie.', isCorrect: false }
    ],
    explanation: 'Większość agresywnej krytyki mówi o wiele więcej o stanie psychicznym krytyka niż o jakości Twojej pracy.',
    keyTakeaway: 'Przefiltruj krytykę przez sito faktów — odrzuć jad, zachowaj merytoryczne ziarno.'
  },
  {
    id: 17,
    question: 'Czym charakteryzuje się Stabilna Samoocena Niezależna (Stable High Self-Esteem)?',
    topic: 'Stabilna Samoocena',
    sectionRef: 'Sekcja 19.1',
    options: [
      { label: 'A', text: 'Głębokie poczucie akceptacji samego siebie, które nie wymaga ciągłego udowadniania wyższości nad innymi ani poklasku.', isCorrect: true },
      { label: 'B', text: 'Przekonanie o własnej nieomylności i pogarda dla słabszych.', isCorrect: false },
      { label: 'C', text: 'Ciągłe poszukiwanie komplementów u obcych ludzi.', isCorrect: false },
      { label: 'D', text: 'Zwolnienie ze wszystkich obowiązków domowych.', isCorrect: false }
    ],
    explanation: 'Człowiek o stabilnej samoocenie nie musi dominować ani błyszczeć za wszelką cenę — jest osadzony w wewnętrznym spokoju.',
    keyTakeaway: 'Stabilna samoocena nie potrzebuje widza ani aplauzu.'
  },
  {
    id: 18,
    question: 'Jakie jest główne zadanie Protokołu Budowania Sprawczości w nowej domenie?',
    topic: 'Budowanie Sprawczości',
    sectionRef: 'Sekcja 19.17',
    options: [
      { label: 'A', text: 'Zaplanowanie serii małych, wygrywalnych zadań, które dostarczą mózgowi dowodów na stopniowe opanowanie dziedziny.', isCorrect: true },
      { label: 'B', text: 'Rzucenie się od razu na najtrudniejszy projekt bez przygotowania.', isCorrect: false },
      { label: 'C', text: 'Czytanie podręczników bez podejmowania jakichkolwiek prób praktycznych.', isCorrect: false },
      { label: 'D', text: 'Czekanie na idealny moment, kiedy lęk całkowicie zniknie.', isCorrect: false }
    ],
    explanation: 'Sprawczość buduje się krok po kroku. Małe wygrane torują drogę dla odważniejszych decyzji w przyszłości.',
    keyTakeaway: 'Zacznij od wygranych tak małych, że nie sposób ich przegrać.'
  }
];

export const caseStudiesChapterNineteen: CaseStudy[] = [
  {
    id: 'studium-19-1-wysoka-pewnosc-niska-kompetencja',
    title: 'Ślepa pewność siebie i twardy upadek: Przypadek Sebastiana na rynku startups',
    subtitle: 'Anatomia Efektu Dunninga-Krugera, ignorowanie sygnałów rynkowych i budowanie autentycznej kompetencji',
    protagonist: 'Sebastian, 26 lat, założyciel aplikacji mobilnej',
    context: 'Sebastian po przeczytaniu dwóch książek biznesowych uznał się za „genialnego stratega”. Odrzucił uwagi doświadczonych inwestorów, przepalił 500 000 zł oszczędności rodziny i doprowadził projekt do bankructwa.',
    story: [
      'Sebastian po ukończeniu kursu marketingu uważał, że rozumie psychologię konsumenta lepiej niż doświadczeni badacze rynku. Jego pewność siebie była imponująca — czarował inwestorów hasłami o „rewolucji w branży”.',
      'Kiedy analitycy pokazywali mu dane świadczące o tym, że użytkownicy wyinstalowują aplikację po 3 minutach, Sebastian odrzucał uwagi z pogardą: „Głupi ludzie nie dorśli do mojej wizji. Musimy wydać więcej na reklamę”.',
      'Refusował przeprowadzenie jakichkolwiek poprawek w UX/UI. Jego subiektywna pewność siebie była na szczycie Góry Głupców (Peak of Mount Stupid w modelu Dunninga-Krugera). Brak wiedzy uniemożliwiał mu dostrzeżenie drastycznych błędów w architektury systemu.',
      'Kiedy pieniądze się skończyły, a inwestorzy wycofali wsparcie, Sebastian przeżył brutalne zderzenie z rzeczywistością. Dziś pracuje jako młodszy analityk, powoli budując kompetencje od podstaw i ucząc się pokory wobec faktów.'
    ],
    dialogue: [
      { speaker: 'Inwestor', text: 'Sebastian, retention rate wynosi 2%. Musimy zmienić model przed kolejną rundą.', subtext: 'Twardy sygnał rynkowy o braku dopasowania produktu.' },
      { speaker: 'Sebastian', text: 'Nie rozumiecie tego konceptu! Zobaczysz, za pół roku będziemy jednorożcem!', subtext: 'Obrona iluzji kompetencji wynikająca z efektu Dunninga-Krugera.' }
    ],
    decisionTaken: 'Sebastian odmówił zmiany strategii i przeznaczył resztki budżetu na agresywną kampanię promocyjną nieudanego produktu.',
    whatProtagonistSaw: 'Własną genialną wizję, podziw w oczach znajomych i pewność rychłego sukcesu.',
    whatWasMissed: 'Twarde wskaźniki rynkowe, krytyczne błędy w produkcie i brak własnych kompetencji menedżerskich.',
    psychologicalAnalysis: {
      coreMechanism: 'Efekt Dunninga-Krugera w połączeniu z narcyzmem defensywnym.',
      cognitiveBiases: [
        { name: 'Iluzja ponadprzeciętności', description: 'Przekonanie o posiadaniu unikalnych zdolności bez pokrycia w dowodach.', impact: 'Odrzucenie rad ekspertów.' }
      ],
      defenseMechanisms: [
        { name: 'Zaprzeczenie rynkowe', explanation: 'Ignorowanie negatywnych wskaźników użytkowników.' }
      ],
      emotionalDynamic: 'Euforia wynikająca z braku świadomości własnych braków przechodząca w brutalne zderzenie z porażką.'
    },
    decisionProcessAnalysis: {
      trigger: 'Uwagi inwestorów o złych wynikach.',
      attentionFocus: 'Własne ego i marzenia o byciu gwiazdą biznesu.',
      interpretation: '„Oni się nie znają, udowodnię im, że się mylą”.',
      emotion: 'Duma, złość na krytyków, ekscytacja.',
      impulse: 'Zwiększenie wydatków na reklamę.',
      action: 'Przepalenie resztek budżetu.',
      consequence: 'Bankructwo i utrata zaufania rodziny.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Brzuszno-przyśrodkowa kora przedczołowa (vmPFC)', role: 'Nierealistyczna wycena własnych pomysłów', activationState: 'Hiperaktywacja' },
        { region: 'Przednia kora obwodu (ACC)', role: 'Brak reakcji na sygnały błędu', activationState: 'Niska aktywacja' }
      ],
      neurotransmitters: [
        { name: 'Dopamina', roleInScenario: 'Sztucznie podwyższony poziom napędzany mityczną wizją sukcesu.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Krytyka inwestora wywołuje gniew zamiast refleksji.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kult bezkrytycznej pewności siebie', description: 'Promowanie w mediach postawy „fake it till you make it”.', vulnerabilityExploited: 'Pragnienie szybkiego sukcesu bez wysiłku.' }
      ],
      counterMeasures: [
        { step: '1. Audyt Niezależnych Ekspertów', script: 'Weryfikacja założeń przez osoby bez interesu w projekcie.', rationale: 'Sprowadza na ziemię bezduszne wskaźniki.' }
      ]
    },
    alternativePath: 'Gdyby Sebastian zrewidował produkt przy pierwszych sygnałach, uratowałby firmę i zbudował realną wartość.',
    readerQuestion: 'W jakiej dziedzinie czujesz się ekspertem mimo braku formalnego wykształcenia i twardych wyników?',
    keyTakeaway: 'Niewiedza często rodzi pewność siebie znacznie łatwiej niż wiedza. Prawdziwy ekspert zna granice swoich kompetencji.'
  },
  {
    id: 'studium-19-2-wysoka-kompetencja-niski-self-efficacy',
    title: 'Ekspertka w cieniu własnego lęku: Przypadek Moniki',
    subtitle: 'Wysoka kompetencja merytoryczna, niski self-efficacy i paraliż przed wyzwaniami',
    protagonist: 'Monika, 37 lat, chirurżka dziecięca',
    context: 'Monika posiadała wskaźnik udanych operacji na poziomie 98%, lecz przed każdym trudniejszym zabiegiem odczuwała paraliżujący lęk, wymioty i przekonanie, że „tym razem doprowadzi do tragedii”.',
    story: [
      'Monika ukończyła studia z wyróżnieniem, odbyła staże w USA i wykonała ponad 500 udanych operacji. Jej wiedza medyczna i precyzja manualna były na najwyższym poziomie.',
      'Mimo to jej poczucie własnej skuteczności (Self-efficacy) było dramatycznie niskie. Przed każdą trudniejszą operacją jej umysł generował katastroficzne wizje powikłań. Monika spędzała noce na analizowaniu podręczników, mimo że procedury znała na pamięć.',
      'Kiedy dyrektor szpitala zaproponował jej objęcie funkcji ordynatora oddziału, Monika wpadła w przerażenie i odmówiła, przekazując stanowisko mniej doświadczonemu, lecz pewnemu siebie koledze.',
      'Praca z psychologiem sportowym oparta na analizie twardych statystyk i technikach deeskalacji lęku pomogła jej uwierzyć w własne ręce i podjąć wyzwania kierownicze.'
    ],
    dialogue: [
      { speaker: 'Dyrektor Szpitala', text: 'Monika, jesteś najlepszym chirurgiem w tym mieście. Ordynatura należy się tobie.', subtext: 'Obiektywne uznanie mistrzostwa.' },
      { speaker: 'Monika', text: 'Panie dyrektorze, ja się nie nadaję do kierowania. Jeden błąd i odpowiadam za ludzkie życie... Nie dam rady.', subtext: 'Spadek poczucia skuteczności pod wpływem lęku przed odpowiedzialnością.' }
    ],
    decisionTaken: 'Monika odrzuciła propozycję ordynatury i przez kolejne lata pracowała poniżej swojego potencjału.',
    whatProtagonistSaw: 'Wizję błędu na stole operacyjnym, własny niepokój i ogromną odpowiedzialność.',
    whatWasMissed: 'Fakt, że jej dotychczasowy bilans operacyjny dławiąco dowodził jej unikalnych umiejętności i odporności w kryzysie.',
    psychologicalAnalysis: {
      coreMechanism: 'Niskie poczucie własnej skuteczności (Self-Efficacy) mimo wybitnej kompetencji merytorycznej.',
      cognitiveBiases: [
        { name: 'Myślenie katastroficzne', description: 'Focusowanie uwagi wyłącznie na najgorszych możliwych scenariuszach.', impact: 'Paraliż decyzyjny.' }
      ],
      defenseMechanisms: [
        { name: 'Unikanie wyzwań', explanation: 'Ucieczka przed awansem celem ochrony przed hipotetyczną porażką.' }
      ],
      emotionalDynamic: 'Przewlekły niepokój antycypacyjny i wyczerpanie emocjonalne.'
    },
    decisionProcessAnalysis: {
      trigger: 'Propozycja objęcia funkcji ordynatora.',
      attentionFocus: 'Wizja ewentualnego błędu i śmierci pacjenta.',
      interpretation: '„Nie udźwignę tej odpowiedzialności, skompromituję się”.',
      emotion: 'Przerażenie, ścisk w żołądku, poczucie nieadekwatności.',
      impulse: 'Odmowa, ucieczka do bezpiecznej roli.',
      action: 'Niezgłoszenie kandydatury na ordynatora.',
      consequence: 'Frustracja z powodu pracy pod kierunkiem słabszego merytorycznie szefa.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ciało migdałowate', role: 'Inicjowanie osi HPA w odpowiedzi na wyobrażone zagrożenie', activationState: 'Hiperaktywacja' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Próba logicznego opanowania lęku', activationState: 'Przeciążenie' }
      ],
      neurotransmitters: [
        { name: 'Noradrenalina', roleInScenario: 'Ciągły wyrzut wywołujący objawy somatyczne (drżenie rąk, nudności).' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 100 ms', process: 'Myśl „ordynatura” uruchamia natychmiastowy skok tętna.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Medyczny kult bezbłędności', description: 'Nierealistyczne oczekiwanie zerowego wskaźnika powikłań.', vulnerabilityExploited: 'Głęboka odpowiedzialność moralna.' }
      ],
      counterMeasures: [
        { step: '1. Dziennik Twardych Wyników', script: 'Prowadzenie statystyk operacji i analiza faktów zamiast katastroficznych wyobrażeń.', rationale: 'Uczy mózg ufać twardym danym.' }
      ]
    },
    alternativePath: 'Gdyby Monika uwierzyła w swoje wskaźniki, została wybitną ordynatorką i wprowadziła innowacyjne procedury na oddziale.',
    readerQuestion: 'W jakich obszarach Twoje rzeczywiste umiejętności są znacznie wyższe niż Twoja wiara w to, że dasz radę?',
    keyTakeaway: 'Kompetencja to fakt, poczucie skuteczności to przekonanie. Zadbaj o to, by Twoje przekonanie nadążało za Twoimi faktami.'
  },
  {
    id: 'studium-19-3-uzaleznienie-od-wynikow',
    title: 'Rollercoaster samooceny: Przypadek Damiana na giełdzie krypto',
    subtitle: 'Uzależnienie wartości od wyników finansowych i odzyskiwanie stabilności',
    protagonist: 'Damian, 30 lat, inwestor indywidualny',
    context: 'Damian uzależnił swoje poczucie własnej wartości od stanu portfela inwestycyjnego. W dniach wzrostów czuł się „bogiem”, w dniach spadków nie wstawał z łóżka i myślał o samobójstwie.',
    story: [
      'Damian wszedł w rynek kryptowalut podczas hossy. Gdy jego portfel wzrósł do miliona złotych, Damian kupił drogi zegarek i zaczął pouczać znajomych, jak należy żyć. Jego samoocena była na uwięzi zielonych słupków na wykresie.',
      'Kiedy nastąpiło załamanie rynku i wartość jego aktywów spadła o 70% w 48 godzin, Damian przeżył głęboki wstrząs. Nie stracił dachu nad głową, ale odczuł spadek cyfr na ekranie jako ostateczny dowód na to, że jest „bezwartościowym nieudacznikiem”.',
      'Nie potrafił rozmawiać z partnerką, wycofał się ze spotkań towarzyskich i spędzał noce na wpatrywaniu się w czerwone świece wykresów. Poczucie własnej wartości miało charakter całkowicie uwarunkowany (Contingent Self-Esteem).',
      'Dopiero całkowite odcięcie od handlu krótkoterminowego i odbudowa relacji rodzinnych pomogły mu zrozumieć, że jego godność jako człowieka nie ma nic wspólnego z wahań kursu bitcoina.'
    ],
    dialogue: [
      { speaker: 'Partnerka', text: 'Damian, mamy z czego żyć. Dlaczego leżysz w ciemności od dwóch dni?', subtext: 'Troska o stan psychiczny i próba przywrócenia proporcji.' },
      { speaker: 'Damian', text: 'Nie rozumiesz... Straciłem wszystko. Jestem niczym...', subtext: 'Utożsamienie wartości człowieka z chwilowym wynikiem finansowym.' }
    ],
    decisionTaken: 'Damian podjął ryzykowne transakcje z dźwignią 100x celem „odrobienia strat”, co doprowadziło do utraty reszty oszczędności.',
    whatProtagonistSaw: 'Czerwone wykresy, upadek własnego statusu i wizję bycia nieudacznikiem.',
    whatWasMissed: 'Fakt, że rynek jest zmiennym środowiskiem losowym, a jego wartość jako partnera i przyjaciela nie uległa żadnej zmianie.',
    psychologicalAnalysis: {
      coreMechanism: 'Contingent Self-Esteem (Samoocena uwarunkowana wynikami) i hazard emocjonalny.',
      cognitiveBiases: [
        { name: 'Błąd atrybucji sukcesu', description: 'Przypisywanie wzrostów rynkowych własnemu genialnemu umysłowi, a spadków — pechowi.', impact: 'Nierealistyczne ryzyko.' }
      ],
      defenseMechanisms: [
        { name: 'Maniakalna kompensacja', explanation: 'Gorączkowe podejmowanie coraz większego ryzyka celem szybkiego powrotu na szczyt.' }
      ],
      emotionalDynamic: 'Gwałtowne przejście od manii i wielkościowości do ciężkiej depresji reaktywnej.'
    },
    decisionProcessAnalysis: {
      trigger: 'Spadek kursu o 70%.',
      attentionFocus: 'Czerwone wskaźniki na ekranie i strach przed brakiem uznania.',
      interpretation: '„Jestem niczym, straciłem swoją wartość”.',
      emotion: 'Rozpacz, panika, wstyd.',
      impulse: 'Odrobienie strat za wszelką cenę (dźwignia 100x).',
      action: 'Otwarcie skrajnie ryzykownej pozycji.',
      consequence: 'Całkowite wyczyszczenie konta i załamanie psychiczne.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące (NAcc)', role: 'Gwałtowny spadek dopaminy po utracie nagrody', activationState: 'Deprywacja dopaminowa' },
        { region: 'Przednia wyspa', role: 'Przetwarzanie bolesnej straty finansowej', activationState: 'Hiperaktywacja' }
      ],
      neurotransmitters: [
        { name: 'Dopamina i Serotonina', roleInScenario: 'Drastyczny spadek poziomów wywołujący anhedonię i stany rezygnacyjne.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 150 ms', process: 'Widok czerwonego wykresu wywołuje ból fizyczny w wyspie.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Kulturowy kult szybkich bogactw', description: 'Promowanie przekazu, że wartość człowieka mierzy się stanem konta.', vulnerabilityExploited: 'Potrzeba natychmiastowego znaczenia.' }
      ],
      counterMeasures: [
        { step: '1. Odbudowa Bezwarunkowej Samooceny', script: 'Praktykowanie działań bezmaterialnych (wolontariat, relacje, sport) niezwiązanych z zyskiem.', rationale: 'Dywersyfikuje źródła poczucia wartości.' }
      ]
    },
    alternativePath: 'Gdyby Damian posiadał stabilną samoocenę, po spadkach zamknąłby pozycję i wyciągnął wnioski bez wpadania w ciąg hazardowy.',
    readerQuestion: 'Od jakiego jednego wyniku zewnętrznego (waga, konto, lajki) uzależniasz swoje dzisiejsze samopoczucie?',
    keyTakeaway: 'Twój wynik to stan zadania w danym momencie. Twoja wartość to niezbywalna cecha Twojego jestestwa.'
  },
  {
    id: 'studium-19-4-perfekcjonizm-lezliwy',
    title: 'W pułapce bezbłędności: Jak lękowy perfekcjonizm sparaliżował prace doktorską Łukasza',
    subtitle: 'Nierealistyczne standardy, lęk przed błędem i wieloletnia prokrastynacja',
    protagonist: 'Łukasz, 31 lat, doktorant filozofii',
    context: 'Łukasz pisał swoją pracę doktorską przez 7 lat. Mimo napisania 400 stron genialnego tekstu, nie oddał ani jednego rozdziału promotorowi, ciągle uważając, że tekst jest „niedojrzały i pełen luk”.',
    story: [
      'Łukasz uważał, że jego praca doktorska musi być dziełem przełomowym, które zmieni bieg historii filozofii. Jego standardy były tak wysokie, że napisanie jednego akapitu zajmowało mu 3 dni.',
      'Każde zdanie było analizowane pod kątem ewentualnej krytyki ze strony potencjalnych recenzentów. Lęk przed popełnieniem błędu merytorycznego wywoływał u niego paraliż (Paralysis by Analysis).',
      'Łukasz ciągle dokupował nowe książki, twierdząc: „Muszę przeczytać jeszcze te 5 pozycji, zanim zamknę rozdział I”. W rzeczywistości uciekał przed oceną ze strony promotora (Self-Handicapping).',
      'Dopiero gdy promotor wyznaczył mu ostateczny, nieprzesuwalny termin skreślenia z listy doktorantów, Łukasz musiał zastosować zasadę „gotowe jest lepsze od idealnego” i oddać pracę w wersji niedoskonałej, uzyskano za nią wyróżnienie.'
    ],
    dialogue: [
      { speaker: 'Promotor', text: 'Łukasz, ten rozdział jest genialny. Oddaj go wreszcie do recenzji!', subtext: 'Zewnętrzne potwierdzenie wysokiej jakości tekstu.' },
      { speaker: 'Łukasz', text: 'Panie profesorze, muszę jeszcze dopracować przypisy w sekcji 3... Zostały mi dwa tygodnie lektur...', subtext: 'Obrona perfekcjonizmu lękowego przed ekspozycją na ocenę.' }
    ],
    decisionTaken: 'Łukasz przez 4 lata odsuwał termin obrony doktoratu z powodu lęku przed niespełnieniem własnych nierealistycznych standardów.',
    whatProtagonistSaw: 'Ewentualne błędy w przypisach, wizję surowej krytyki i własną nieadekwatność.',
    whatWasMissed: 'Fakt, że praca doktorska jest jedynie pierwszym etapem drogi naukowej, a nie ostatecznym monumentem życiowym.',
    psychologicalAnalysis: {
      coreMechanism: 'Dezadaptacyjny perfekcjonizm lękowy w połączeniu z prokrastynacją obronną.',
      cognitiveBiases: [
        { name: 'Myślenie czarno-białe', description: '„Albo napiszę dzieło genialne, albo moja praca jest bezwartościowym śmieciem”.', impact: 'Paraliż twórczy.' }
      ],
      defenseMechanisms: [
        { name: 'Prokrastynacja przygotowawcza', explanation: 'Ciągłe dokupowanie książek celem ucieczki przed oddaniem tekstu.' }
      ],
      emotionalDynamic: 'Przewlekłe poczucie winy, wstyd i wyczerpanie psychiczne.'
    },
    decisionProcessAnalysis: {
      trigger: 'Prośba promotora o oddanie rozdziału.',
      attentionFocus: 'Ewentualne luki w tekście i wizja krytyki.',
      interpretation: '„Jeśli oddam ten tekst z błędem, kompromituję się jako naukowiec”.',
      emotion: 'Przerażenie, wstyd, paraliż.',
      impulse: 'Ucieczka w ponowne redagowanie i lektury.',
      action: 'Odmowa oddania rozdziału i prośba o przesunięcie terminu.',
      consequence: 'Groźba skreślenia z listy doktorantów.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Przednia kora obwodu (ACC)', role: 'Hiperaktywność na sygnały potencjalnego błędu', activationState: 'Stale włączony alarm' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Paraliż decyzyjny pod wpływem nadmiernej analizy', activationState: 'Przeciążenie' }
      ],
      neurotransmitters: [
        { name: 'Kortyzol', roleInScenario: 'Utrzymujący się wysoki poziom wywołujący bezsenność.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 200 ms', process: 'Myśl „oddanie pracy” wywołuje ścisk w żołądku.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Akademicki mit genialności', description: 'Promowanie przekazu, że wartościowe są tylko dzieła przełomowe.', vulnerabilityExploited: 'Potrzeba wybitności i znaczenia.' }
      ],
      counterMeasures: [
        { step: '1. Zasada 80/20 (Pareto) i Dobrostan', script: 'Oddawanie prac na poziomie „wystarczająco dobrym” i akceptacja poprawek.', rationale: 'Uwalnia od paraliżu bezbłędności.' }
      ]
    },
    alternativePath: 'Gdyby Łukasz przyjął zasadę „praca doktorska ma być napisana, a nie idealna”, obroniłby się 4 lata wcześniej i wydał dwie książki.',
    readerQuestion: 'W jakim projekcie odsuwasz finał z powodu lęku, że nie będzie on idealny?',
    keyTakeaway: 'Perfekcjonizm to nie dążenie do doskonałości — to paraliżujący lęk przed popełnieniem błędu. Wybierz postęp zamiast bezbłędności.'
  },
  {
    id: 'studium-19-5-samowspolczucie-vs-samokrytyka',
    title: 'Od biczowania do wsparcia: Przełom Doroty po nieudanym wystąpieniu',
    subtitle: 'Niszcząca siła samokrytycyzmu i budowanie samowspółczucia (Self-Compassion)',
    protagonist: 'Dorota, 39 lat, dyrektorka HR',
    context: 'Dorota po zapomnieniu jednego wątku podczas prezentacji dla zarządu spędziła noc na wyzywaniu siebie w myśli od „beznadziejnych idiotek” i płaczu.',
    story: [
      'Dorota posiadała w głowie niezwykle surowego wewnętrznego krytyka. Każde, nawet najmniejsze potknięcie wywoływało u niej falę auto-agresji werbalnej: „Jesteś do niczego”, „Znowu to zepsułaś”, „Wszyscy z ciebie śmieją”.',
      'Podczas corocznego spotkania zarządu Dorota pomyliła slajdy i zająknęła się przez 10 sekund. Mimo że dokończyła wystąpienie, a zarząd przyjął jej budżet, Dorota po powrocie do domu czuła się zmiażdżona.',
      'Jej wewnętrzny monolog przypominał katowanie bezbronnego człowieka. Samokrytycyzm wywołał u niej silny wyrzut kortyzolu i bezsenność.',
      'Podczas warsztatów Self-Compassion opartych na pracach Kristin Neff, Dorota po raz pierwszy spróbowała odpowiedzieć swojemu wewnętrznemu krytykowi głosem życzliwego przyjaciela. Zrozumiała, że wyrozumiałość wobec własnych błędów nie osłabia dyscypliny, lecz daje siłę do szybszego podnoszenia się po upadku.'
    ],
    dialogue: [
      { speaker: 'Wewnętrzny Krytyk', text: 'Zająknęłaś się przy zarządzie! Jesteś beznadziejna! Zniszczyłaś całą swoją karierę!', subtext: 'Atak wewnętrznego tyrana wywołujący wstyd i paraliż.' },
      { speaker: 'Dorota (Głos Współczucia)', text: 'Zająknęłam się, bo byłam zmęczona, ale dokończyłam prezentację i budżet został przyjęty. Jestem tylko człowiekiem i mam prawo do błędu.', subtext: 'Wdrożenie samowspółczucia i racjonalnej wyceny faktów.' }
    ],
    decisionTaken: 'Dorota zastosowała protokół samowspółczucia i po raz pierwszy po nieudanym wystąpieniu zasnęła bez leków uspokajających.',
    whatProtagonistSaw: '10 sekund zająknięcia jako całkowitą kompromitację i ruinę reputacji.',
    whatWasMissed: 'Fakt, że cała reszta 45-minutowej prezentacji była wybitna, a zarząd zatwierdził jej wniosek bez zastrzeżeń.',
    psychologicalAnalysis: {
      coreMechanism: 'Przejście od Surowego Samokrytycyzmu do Samowspółczucia (Self-Compassion).',
      cognitiveBiases: [
        { name: 'Filtr negatywny', description: 'Skupienie całej uwagi na 10 sekundach błędu z pominięciem 45 minut sukcesu.', impact: 'Poczucie klęski mimo wygranej.' }
      ],
      defenseMechanisms: [
        { name: 'Auto-agresja werbalna', explanation: 'Karanie samej siebie przed usłyszeniem krytyki z zewnątrz.' }
      ],
      emotionalDynamic: 'Głęboki wstyd, poczucie nieadekwatności i ulga po wdrożeniu głosu współczucia.'
    },
    decisionProcessAnalysis: {
      trigger: 'Zająknięcie się na prezentacji.',
      attentionFocus: 'Śmiech jednego z dyrektorów i własny błąd.',
      interpretation: '„Jestem beznadziejna, skompromitowałam się”.',
      emotion: 'Wstyd, wściekłość na siebie, rozpacz.',
      impulse: 'Biczowanie się w myśli, płacz.',
      action: 'Zastosowanie 3 kroków Self-Compassion (uważność, wspólne doświadczenie ludzkie, życzliwość).',
      consequence: 'Wyciszenie alarmu limfatycznego i powrót do spokoju.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Ośrodek współczucia (przednia kora obwodu i wyspa)', role: 'Generowanie poczucia bezpieczeństwa i ukojenia', activationState: 'Aktywacja przez głos życzliwości' },
        { region: 'Ciało migdałowate', role: 'Wygaszanie reakcji lękowej', activationState: 'Spadek aktywacji' }
      ],
      neurotransmitters: [
        { name: 'Oksytocyna i Opiaty endogenne', roleInScenario: 'Wzrost poziomów wywołujący fizyczną ulgę i spadek tętna.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Słowo „beznadziejna” wywołuje skok kortyzolu; głos współczucia go wygasza.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Szkolny mit samokrytyki', description: 'Przekonanie, że surowość wobec siebie jest jedynym motywatorem rozwoju.', vulnerabilityExploited: 'Lęk przed rozleniwieniem.' }
      ],
      counterMeasures: [
        { step: '1. Trzy Kroki Kristin Neff', script: '1. To jest chwila cierpienia. 2. Cierpienie jest częścią ludzkiego życia. 3. Niech będę dla siebie życzliwa.', rationale: 'Biologicznie przełącza układ nerwowy z zagrożenia na ukojenie.' }
      ]
    },
    alternativePath: 'Gdyby Dorota trwała w samokrytycyzmie, rozwinęłaby lęk przed jakimikolwiek wystąpieniami i zrezygnowała ze stanowiska dyrektorki.',
    readerQuestion: 'Jakimi słowami zwracasz się do siebie, gdy popełnisz błąd? Czy powiedziałbyś to samo swojemu najlepszemu przyjacielowi?',
    keyTakeaway: 'Samokrytycyzm niszczy siłę do działania. Samowspółczucie daje odwagę do podnoszenia się z każdej porażki.'
  },
  {
    id: 'studium-19-6-samoutrudnianie-student',
    title: 'Impreza przed egzaminem: Samoutrudnianie u Kamila',
    subtitle: 'Ochrona samooceny kosztem wyniku i dekonstrukcja mechanizmów obronnych',
    protagonist: 'Kamil, 22 lata, student architektury',
    context: 'Kamil przed najważniejszym egzaminem z konstrukcji budowlanych poszedł na całonocną imprezę i wypił znaczne ilości alkoholu, idąc na egzamin bez snu.',
    story: [
      'Kamil był uważany za „zdolnego, ale leniwego”. Bardzo bał się egzaminu z konstrukcji, gdyż materiał był trudny, a ewentualna porażka uderzyłaby w jego przekonanie o własnej błyskotliwości.',
      'Gdyby uczył się przez 2 tygodnie i oblał, musiałby przyznać przed sobą: „Oblałem, bo jestem za mało błyskotliwy”. To wyobrażenie było dla jego ego nie do zniesienia.',
      'Tuż przed egzaminem Kamil poszedł na imprezę (Self-Handicapping). Dzięki temu stworzył sobie doskonałą, zewnętrzną wymówkę. Jeśli obleje, powie: „Oblałem, bo poszedłem na imprezę, a nie dlatego, że nie rozumiem materiału”. Jeśli zda, będzie bohaterem: „Zdałem bez uczenia i na kacu!”.',
      'Kamil oblał egzamin. Jego ego zostało uratowane, ale musiał powtarzać cały rok studiów. Dziś rozumie, że użył samoutrudniania jako tarczy chroniącej przed oceną kompetencji.'
    ],
    dialogue: [
      { speaker: 'Kolega', text: 'Kamil, zwariowałeś? Jutro masz najważniejszy egzamin, a pijesz trzecie piwo?', subtext: 'Troska o wynik i zdziwienie niestosownym zachowaniem.' },
      { speaker: 'Kamil', text: 'Spokojnie, co ma być to będzie! Raz się żyje, nie będę ślęczał nad książkami jak kujon.', subtext: 'Obronna racjonalizacja samoutrudniania.' }
    ],
    decisionTaken: 'Kamil spędził noc przed egzaminem na imprezie, rezygnując ze snu i powtórki materiału.',
    whatProtagonistSaw: 'Szansę na ochronę ego przed wstydem porażki merytorycznej.',
    whatWasMissed: 'Fakt, że uratowanie samopoczucia kosztowało go utratę roku studiów i ogromne koszty finansowe.',
    psychologicalAnalysis: {
      coreMechanism: 'Samo-utrudnianie (Self-Handicapping) jako tarcza chroniąca samoocenę.',
      cognitiveBiases: [
        { name: 'Self-serving bias', description: 'Przypisywanie ewentualnego sukcesu talentowi, a porażki — czynnikom zewnętrznym (impreza).', impact: 'Brak motywacji do nauki.' }
      ],
      defenseMechanisms: [
        { name: 'Tworzenie barier zewnętrznych', explanation: 'Świadome obniżanie własnych szans na sukces w celu asekuracji samooceny.' }
      ],
      emotionalDynamic: 'Lęk przed weryfikacją własnych zdolności przykryty pozorną beztroską.'
    },
    decisionProcessAnalysis: {
      trigger: 'Zbliżający się termin egzaminu.',
      attentionFocus: 'Lęk przed porażką merytoryczną i wstydem.',
      interpretation: '„Jeśli będę się uczył i obleję, okaże się, że jestem głupi”.',
      emotion: 'Przerażenie, spadek poczucia skuteczności.',
      impulse: 'Ucieczka, stwoezenie wymówki.',
      action: 'Wyjście na imprezę i spożywanie alkoholu.',
      consequence: 'Olanie egzaminu i powtarzanie roku.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Jądro półleżące', role: 'Poszukiwanie natychmiastowej ulgi dopaminowej na imprezie', activationState: 'Ucieczka w nagrodę' },
        { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Utrata kontroli nad długoterminowym celem', activationState: 'Wyhamowanie' }
      ],
      neurotransmitters: [
        { name: 'Alkohol i Dopamina', roleInScenario: 'Chwilowe znieczulenie niepokoju egzaminacyjnego.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 300 ms', process: 'Myśl o nauce wywołuje opór, zaproszenie na imprezę przynosi ulgę.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Młodzieńczy mit zdolnego lenia', description: 'Wartościowanie sukcesu osiągniętego bez wysiłku wyżej niż sukcesu wypracowanego.', vulnerabilityExploited: 'Potrzeba posiadania naturalnego talentu.' }
      ],
      counterMeasures: [
        { step: '1. Bezpośrednia konfrontacja z lękiem', script: '„Boję się, że nie zrozumie tego materiału. Przyznam się do lęku i uczę się przez 2 godziny”.', rationale: 'Usuwa potrzebę tworzenia barier obronnych.' }
      ]
    },
    alternativePath: 'Gdyby Kamil uczył się i przyjął korepetycje, zdałby egzamin w pierwszym terminie i zbudował realną sprawność.',
    readerQuestion: 'W jakich sytuacjach świadomie stwarzasz sobie przeszkody (zmęczenie, spóźnienie, brak sprzętu), by mieć wymówkę na wypadek porażki?',
    keyTakeaway: 'Nie niszcz własnych szans na sukces tylko po to, by chronić swoje złudzenie nieomylności.'
  },
  {
    id: 'studium-19-7-graded-mastery-rehabilitacja',
    title: 'Odbudowa sprawczości krok po kroku: Powrót do zdrowia Marka po udarze',
    subtitle: 'Stosowanie protokołu Graded Mastery w rehabilitacji neurologicznej',
    protagonist: 'Marek, 62 lata, były inżynier po udarze niedokrwiennym',
    context: 'Marek po udarze stracił władzę w prawej dłoni. Początkowo wpadł w ciężką depresję, twierdząc, że „jest rośliną i już nigdy niczego sam nie zrobi”.',
    story: [
      'Dla człowieka, który przez 40 lat rysował skomplikowane projekty, utrata sprawności w dłoni była cios w samo serce tożsamości. Marek odmawiał udziału w ćwiczeniach, uważając próby chwytania piłeczki za poniżające.',
      'Fizjoterapeutka zastosowała protokół Graded Mastery (Stopniowane Opanowanie). Zamiast kazać mu pisać, zaczęła od mikrozadania: dotknięcia kciukiem palca wskazującego z pomocą wzroku.',
      'Każdy mały sukces był rejestrowany na specjalnym wykresie. Po 3 tygodniach Marek sam podniósł lekki kubek z wodą. W jego mózgu doszło do wyrzutu dopaminy i reaktywacji poczucia sprawczości.',
      'Po roku konsekwentnej pracy małych kroków Marek zaczął ponownie szkicować proste rysunki. Jego samoocena przestała być reaktywną ruiną i stała się stabilnym fundamentem opartym na fakcie pokonania ciężkiej niepełnosprawności.'
    ],
    dialogue: [
      { speaker: 'Fizjoterapeutka', text: 'Panie Marku, dzisiaj nie musimy pisać. Dzisiaj tylko przesuniemy tę jedną kostkę o 2 centymetry.', subtext: 'Obniżenie progu aktywacji i dostosowanie wyzwania do możliwości.' },
      { speaker: 'Marek', text: 'Tylko kostkę? No dobrze... to spróbujmy.', subtext: 'Akceptacja mikrozadania bez wywoływania odruchu paniki.' }
    ],
    decisionTaken: 'Marek podjął codzienne, 15-minutowe sesje mikro-ćwiczeń, odbudowując sprawność dłoni i wiarę w siebie.',
    whatProtagonistSaw: 'Początkowo: całkowitą niepełnosprawność i bezsens starań. Później: codzienne, małe dowody postępu.',
    whatWasMissed: 'Fakt, że neuroplastyczność mózgu wymaga tysięcy powtórzeń na małym poziomie trudności, a nie jednego wielkiego zrywu.',
    psychologicalAnalysis: {
      coreMechanism: 'Protokół Graded Mastery (Systematyczne Opanowanie) i odbudowa Self-Efficacy.',
      cognitiveBiases: [
        { name: 'Uogólnianie porażki', description: 'Przekonanie, że niesprawność dłoni oznacza całkowity brak wartości człowieka.', impact: 'Początkowy stupor depresyjny.' }
      ],
      defenseMechanisms: [
        { name: 'Bierna rezygnacja', explanation: 'Odmowa ćwiczeń w celu uniknięcia bolesnego konfrontowania się z brakiem sprawności.' }
      ],
      emotionalDynamic: 'Przejście od głębokiej rozpaczy do ciągłej, dopaminowej motywacji osiągnięć.'
    },
    decisionProcessAnalysis: {
      trigger: 'Propozycja mikrozadania od fizjoterapeutki.',
      attentionFocus: 'Ruch jednego palca i przesunięcie kostki.',
      interpretation: '„To jest proste, to mogę zrobić”.',
      emotion: 'Ciekawość, ulga, pierwszy błysk sprawczości.',
      impulse: 'Podjęcie próby.',
      action: 'Przesunięcie kostki i rejestracja sukcesu na wykresie.',
      consequence: 'Wzrost self-efficacy i podjęcie długoterminowej rehabilitacji.'
    },
    neurobiologicalAnalysis: {
      brainRegions: [
        { region: 'Kora ruchowa i somatosensoryczna', role: 'Reorganizacja map korowych wokół uszkodzonego obszaru', activationState: 'Stymulacja neuroplastyczna' },
        { region: 'Jądro półleżące', role: 'Wyrzut dopaminy po osiągnięciu mikro-celu', activationState: 'Pobudzenie układu nagrody' }
      ],
      neurotransmitters: [
        { name: 'Dopamina i BDNF', roleInScenario: 'Kluczowe stymulatory tworzenia nowych synaps w korze.' }
      ],
      biologicalTimeline: [
        { timeMs: '0 - 500 ms', process: 'Udało się! Wyrzut dopaminy po przesunięciu kostki.' }
      ]
    },
    influenceAndManipulation: {
      tacticsUsed: [
        { tactic: 'Metoda Drobnych Wygranych (Small Wins)', description: 'Projektowanie środowiska tak, by sukces był nieunikniony.', vulnerabilityExploited: 'Mózgowy głód dopaminowy u osób w kryzysie.' }
      ],
      counterMeasures: [
        { step: '1. Tworzenie Wizualnych Wykresów Postępu', script: 'Rysowanie codziennych małych kroków na widocznym arkuszu.', rationale: 'Dostarcza kory przedczołowej niezaprzeczalnych dowodów wzrostu.' }
      ]
    },
    alternativePath: 'Gdyby Marek odrzucił metodę małych kroków, spędziłby resztę życia w łóżku w stanie głębokiej depresji.',
    readerQuestion: 'Jaki cel w Twoim życiu wydaje się tak wielki, że paraliżuje Cię przed zrobieniem pierwszego mikrokroku?',
    keyTakeaway: 'Nie szturmuj góry jednym skokiem. Podziel trasę na stopnie tak małe, że Twój mózg nie zdoła poczuć lęku.'
  }
];

export const selfExercisesChapterNineteen: SelfExercise[] = [
  {
    id: 'cwiczenie-19-1-audyt-self-efficacy',
    title: 'Audyt Poczucia Własnej Skuteczności (Self-Efficacy Matrix)',
    subtitle: 'Rozdzielanie ogólnej samooceny od twardych umiejętności w konkretnych domenach',
    objective: 'Precyzyjna ocena poziomu pewności siebie i sprawności w 5 głównych obszarach życia.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Aktywacja dlPFC do analitycznej oceny zasobów z wyłączeniem podkorowych uogólnień lękowych.',
    steps: [
      {
        stepNumber: 1,
        title: 'Wybór 5 domen życiowych',
        instruction: 'Wypisz 5 obszarów (np. przemawianie, finanse, sport, relacje, praca techniczna).',
        promptText: 'Moje 5 domen:',
        placeholder: 'Przemawianie, Budżet domowy, Gotowanie, Negocjacje, Bieganie...'
      },
      {
        stepNumber: 2,
        title: 'Ocena Skuteczności vs Kompetencji',
        instruction: 'W skali 1-10 oceń: A) Twoje RZECZYWISTE umiejętności, B) Twoją WIARĘ w to, że dasz radę.',
        promptText: 'Ocena domen (Kompetencja / Wiara):',
        placeholder: 'Przemawianie: Kompetencja 8/10, Wiara 3/10 (Syndrom Oszusta!)'
      },
      {
        stepNumber: 3,
        title: 'Plan zrównoważenia',
        instruction: 'Dla domeny z największą luką zaplanuj jedno doświadczenie opanowania (Mastery Experience).',
        promptText: 'Mój mikrokrok opanowania:',
        placeholder: 'Nagram 2-minutowe wideo z wypowiedzią i obejrzę je bez oceniania.'
      }
    ],
    reflectionQuestions: [
      'W której domenie Twoje lęki całkowicie mwijają się z Twoimi rzeczywistymi sukcesami?'
    ]
  },
  {
    id: 'cwiczenie-19-2-dziennik-zwyciestw',
    title: 'Dziennik Zwycięstw i Drobnych Osiągnięć (Small Wins Log)',
    subtitle: 'Zbieranie twardych dowodów sprawczości każdego dnia',
    objective: 'Wzmocnienie uwalniania dopaminy i budowanie pamięci zewnętrznej dla sukcesów.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Przełamywanie Negatywnej Asymetrii Emocjonalnej (Loss Aversion) poprzez intencjonalne skupienie uwagi na wygranych.',
    steps: [
      {
        stepNumber: 1,
        title: 'Codzienny zapis 3 wygranych',
        instruction: 'Zapisz 3 konkretne rzeczy, które dzisiaj ukończyłeś lub przełamałeś mimo oporu.',
        promptText: 'Dzisiejsze 3 wygrane:',
        placeholder: '1. Odbyłem trudną rozmowę telefoniczną. 2. Zrobiłem 30 min treningu. 3. Dokończyłem raport.'
      },
      {
        stepNumber: 2,
        title: 'Nazwanie użytej cechy',
        instruction: 'Przy każdym sukcesie dopisz cechę, którą wykazałeś (np. odwaga, dyscyplina, spokój).',
        promptText: 'Moje aktywowane zasoby:',
        placeholder: '1. Odwaga. 2. Dyscyplina. 3. Koncentracja.'
      }
    ],
    reflectionQuestions: [
      'Jak zmienia się Twój wieczorny poziom niepokoju, gdy zamykasz dzień listą sukcesów zamiast listą niedociągnięć?'
    ]
  },
  {
    id: 'cwiczenie-19-3-samowspolczucie-w-porazce',
    title: 'Protokół Samowspółczucia w Chwili Porażki (Self-Compassion Pause)',
    subtitle: 'Narzędzie deeskalacji samokrytyki wg Kristin Neff',
    objective: 'Przełączenie układu nerwowego z trybu zagrożenia (samokrytyka) na tryb ukojenia (życzliwość).',
    durationMinutes: 15,
    neuroScientificFoundation: 'Stymulacja nerwu błędnego i uwalnianie oksytocyny poprzez cichy, życzliwy monolog wewnętrzny.',
    steps: [
      {
        stepNumber: 1,
        title: 'Krok 1: Uważność (Mindfulness)',
        instruction: 'Nazwij swój błąd i emocję bez dramatyzowania („To jest chwila trudności/stresu/wstydu”).',
        promptText: 'Nazwanie stanu:',
        placeholder: 'Czucję silny wstyd, bo zająknąłem się podczas wypowiedzi.'
      },
      {
        stepNumber: 2,
        title: 'Krok 2: Wspólne Doświadczenie Ludzkie',
        instruction: 'Przypomnij sobie, że popełnianie błędów jest wpisane w naturę każdego człowieka („Porażki przytrafiają się każdemu”).',
        promptText: 'Normalizacja stanu:',
        placeholder: 'Każdy człowiek czasem się myli. Błędy są częścią uczenia się.'
      },
      {
        stepNumber: 3,
        title: 'Krok 3: Życzliwość dla Siebie',
        instruction: 'Wypowiedz do siebie słowa, które powiedziałbyś przyjacielowi w tej samej sytuacji.',
        promptText: 'Słowa życzliwego wsparcia:',
        placeholder: 'Nic się nie stało. Dałeś z siebie wszystko. Wyciągnij wnioski i idź dalej.'
      }
    ],
    reflectionQuestions: [
      'O ile szybciej wracasz do równowagi, gdy stosujesz wyrozumiałość zamiast surowego biczowania się?'
    ]
  },
  {
    id: 'cwiczenie-19-4-reewaluacja-porazki',
    title: 'Warsztat Reewaluacji Porażki (Failure Reframing)',
    subtitle: 'Przekształcanie klęski w cenny materiał badawczy',
    objective: 'Wydobycie wartości edukacyjnej z nieudanego projektu bez obniżania samooceny.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Przeniesienie pobudzenia z ciała migdałowatego do kory przedczołowej celem wyciągnięcia logicznych wniosków.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zapis nieudanego projektu',
        instruction: 'Zapisz sytuację, którą uważasz za swoją porażkę.',
        promptText: 'Opis niepowodzenia:',
        placeholder: 'Odrzucenie mojej oferty przez klienta Y...'
      },
      {
        stepNumber: 2,
        title: 'Wyciągnięcie 3 twardych lekcji',
        instruction: 'Napisz 3 konkretne rzeczy, których nauczyłeś się dzięki temu niepowodzeniu.',
        promptText: 'Moje 3 lekcje procesowe:',
        placeholder: '1. Muszę dokładniej badać budżet klienta na początku. 2. Oferta była za długa. 3. Warto zadawać więcej pytań.'
      }
    ],
    reflectionQuestions: [
      'Dlaczego ta porażka może okazać się najbardziej wartościowym zdarzeniem tego roku dla Twojego rozwoju?'
    ]
  },
  {
    id: 'cwiczenie-19-5-audyt-krytyki-zewnetrznej',
    title: 'Sito Selekcji Krytyki Zewnętrznej (External Criticism Audit)',
    subtitle: 'Ochrona samooceny przed niekonstruktywnym jadem i hejtem',
    objective: 'Oddzielenie wartościowych uwag merytorycznych od obelg wynikających z kompleksów krytyka.',
    durationMinutes: 15,
    neuroScientificFoundation: 'Wzmacnianie granicy tożsamościowej w mPFC i hamowanie automatycznej reakcji lękowej.',
    steps: [
      {
        stepNumber: 1,
        title: 'Zapis usłyszanej krytyki',
        instruction: 'Zapisz przykrą uwagę, którą usłyszałeś od kogoś w ostatnim czasie.',
        promptText: 'Trudna uwaga:',
        placeholder: '„Twoja Prezentacja była chaotyczna i nudna”'
      },
      {
        stepNumber: 2,
        title: 'Test Sita Merytorycznego',
        instruction: 'Odpowiedz na pytania: Czy ta uwaga zawiera konkretne fakty? Czy osoba krytykująca jest dla Ciebie autorytetem w tej dziedzinie?',
        promptText: 'Wynik testu sita:',
        placeholder: 'Krytyk nie podał żadnych faktów i był zdenerwowany. Odrzucam emocje, zachowuję uwagę o strukturze.'
      }
    ],
    reflectionQuestions: [
      'O ile wolniejszy stajesz się od cudzych opinii, gdy stosujesz Sito Merytoryczne?'
    ]
  },
  {
    id: 'cwiczenie-19-6-dekonstrukcja-samoutrudniania',
    title: 'Wykrywacz Samo-utrudniania (Self-Handicapping Radar)',
    subtitle: 'Identyfikacja ukrytych barier stwarzanych własnemu sukcesowi',
    objective: 'Odkrycie zachowań asekuracyjnych (zmęczenie, spóźnienia, bałagan) i ich natychmiastowa eliminacja.',
    durationMinutes: 20,
    neuroScientificFoundation: 'Zwiększanie samoświadomości w kory obwodu celem zahamowania nawykowych ucieczek obronnych.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identyfikacja wymówki asekuracyjnej',
        instruction: 'Zapisz, co robisz tuż przed trudnym zadaniem, co może stanowić gotową wymówkę w razie porażki.',
        promptText: 'Moja bariera obronna:',
        placeholder: 'Przed ważnym zebraniem siedzę do 2 w nocy w telefonie, żeby rano powiedzieć „jestem nieprzytomny”.'
      },
      {
        stepNumber: 2,
        title: 'Plan bezpośredniej ekspozycji',
        instruction: 'Napisz, co zrobisz, by przystąpić do zadania w stanie optymalnym i przyjąć wynik na klatę.',
        promptText: 'Mój plan dojrzały:',
        placeholder: 'Kładę się o 23:00, odkładam telefon i przyimuję pełną odpowiedzialność za wynik zebrania.'
      }
    ],
    reflectionQuestions: [
      'Jakie to uczucie stanąć do walki na 100% bez poduszki powietrznej w postaci wymówki?'
    ]
  },
  {
    id: 'cwiczenie-19-7-protokol-graded-mastery',
    title: 'Projektor Mikrokroków Sprawczości (Graded Mastery Plan)',
    subtitle: 'Rozbijanie paraliżujących celów na serie wygrywalnych zadań',
    objective: 'Budowanie dopaminowej drabiny sukcesu w nowej, trudnej domenie.',
    durationMinutes: 25,
    neuroScientificFoundation: 'Stymulacja jąder półleżących ciągłym dopływem małych dawek dopaminy za osiągnięte mikrokroki.',
    steps: [
      {
        stepNumber: 1,
        title: 'Definicja celu wielkiego',
        instruction: 'Zapisz cel, który wywołuje w Tobie lęk i paraliż (np. napisanie książki, przebiegnięcie maratonu).',
        promptText: 'Wielki cel:',
        placeholder: 'Napisanie książki branżowej o długości 200 stron...'
      },
      {
        stepNumber: 2,
        title: 'Stworzenie 3 mikrokroków bezstresowych',
        instruction: 'Podziel ten cel na kroki tak małe, że nie sposób ich przegrać.',
        promptText: '3 mikrokroki bezstresowe:',
        placeholder: '1. Otwarcie pliku i napisanie 1 zdania dziennie. 2. Wypisanie 3 punktów spisu treści. 3. Pisanie przez 5 minut.'
      }
    ],
    reflectionQuestions: [
      'Dlaczego najtrudniejsza jest zawsze iskra zapłonowa, a po 2 minutach działanie staje się naturalne?'
    ]
  }
];

export const chapterNineteen: Chapter = {
  number: 19,
  volume: 3,
  volumeChapterNumber: 3,
  title: 'Rozdział 3: Samoocena, Pewność Siebie i Obraz Własnych Możliwości',
  subtitle: 'Anatomia self-esteem vs self-efficacy, radzenie sobie z krytyką i porażką, mechanizmy perfekcjonizmu i metody budowania stabilnej sprawczości',
  leadParagraph: 'Stosunek do samego siebie nie jest prostą sumą komplementów usłyszanych w dzieciństwie. Jest złożonym, wielopoziomowym układem regulacyjnym, w skład którego wchodzi ogólne poczucie własnej wartości (self-esteem), domenowe poczucie skuteczności (self-efficacy) oraz subiektywna ocena własnej kompetencji. Myślenie, że wysoka samoocena rozwiązuje każdy problem życiowy, jest groźnym uproszczeniem. Stabilne poczucie wartości nie polega na ślepej pewności siebie, lecz na zdolności do obiektywnego oceniania własnych zasobów, przyjmowania trudnej informacji zwrotnej i działania mimo odczuwanego niepokoju.',
  totalEstimatedPages: 60,
  sections: [
    {
      id: 'sec-19-1',
      pageNumber: 1,
      sectionNumber: '19.1',
      title: 'Samoocena vs Poczucie Skuteczności: Ścisła Rozdzielczość pojmowania',
      category: 'wstep',
      readingTimeMinutes: 9,
      quote: {
        text: 'Nikt nie może sprawić, że poczujesz się gorszy bez Twojej zgody.',
        author: 'Eleanor Roosevelt'
      },
      paragraphs: [
        'Większość poradników motywacyjnych popełnia fundamentalny błąd, wrzucając do jednego worka poczucie własnej wartości, pewność siebie i kompetencje merytoryczne. Aby odzyskać sprawczość, musimy rozdzielić te pojęcia.',
        'Samoocena (self-esteem) dotyczy ogólnej, emocjonalnej oceny własnej wartości jako człowieka („czy jestem warty szacunku i miłości?”). Poczucie własnej skuteczności (self-efficacy) to subiektywne przekonanie o własnej zdolności do wykonania konkretnego zadania („czy poradzę sobie z tym projektem?”).',
        'Można posiadać wysokie poczucie skuteczności w programowaniu, mając jednocześnie niską ogólną samoocenę i czując się bezwartościowym człowiekiem. I odwrotnie: można mieć narcystycznie podbitą samoocenę przy zerowych realnych kompetencjach.',
        'Stabilny rozwój wymaga budowania obu tych obszarów w oparciu o twarde dowody empiryczne.'
      ]
    },
    {
      id: 'sec-19-2',
      pageNumber: 4,
      sectionNumber: '19.2',
      title: 'Teoria Alberta Bandury: Cztery Źródła Poczucia Skuteczności',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Albert Bandura wykazał, że poczucie własnej skuteczności (self-efficacy) ulega budowaniu poprzez 4 kluczowe kanały informacyjne:',
        '1. Doświadczenia opanowania (Mastery Experiences) — najważniejsze źródło. Osobiste przeżycie sukcesu osiągniętego pokonaniem trudności własnym wysiłkiem.',
        '2. Doświadczenia zastępcze (Vicarious Experiences) — obserwowanie ludzi podobnych do nas, którzy osiągają cel („skoro on dał radę, ja też mogę”).',
        '3. Perswazja społeczna (Social Persuasion) — merytoryczne wsparcie ze strony autorytetów.',
        '4. Stany fizjologiczne i emocjonalne — interpretacja sygnałów z ciała (drżenie rąk jako ekscytacja, a nie jako paraliżujący strach).'
      ]
    },
    {
      id: 'sec-19-3',
      pageNumber: 7,
      sectionNumber: '19.3',
      title: 'Pewność Siebie z Kompetencji vs Maska Pewności Siebie',
      category: 'cwiczenia',
      readingTimeMinutes: 10,
      paragraphs: [
        'Prawdziwa pewność siebie wynika ze zebranych dowodów i opanowania rzemiosła. Jest cicha, spokojna i odporna na krytykę, gdyż nie musi niczego udowadniać.',
        'Maska pewności siebie (defensywna dominacja) to narzucona fasada mająca ukryć głęboki lęk przed kompromitacją. Gdy ktoś podważa tezy osoby z maską, reaguje ona natychmiastową agresją i krzykiem.',
        'Poniższe laboratorium umożliwia zdiagnozowanie własnego profilu pewności siebie w kluczowych domenach.'
      ],
      exerciseRef: selfExercisesChapterNineteen[0]
    },
    {
      id: 'sec-19-4',
      pageNumber: 10,
      sectionNumber: '19.4',
      title: 'Efekt Dunninga-Krugera: Pułapka Nieświadomej Niekompetencji',
      category: 'teoria',
      readingTimeMinutes: 10,
      paragraphs: [
        'Efekt Dunninga-Krugera pokazuje, że osoby o najmniejszych kompetencjach wykazują najwyższy poziom pewności siebie (Góra Głupców). Brak wiedzy uniemożliwia im dostrzeżenie własnych błędów.',
        'W miarę jak zdobywamy wiedzę, wchodzimy w Dolinę Rozpaczy — nasza pewność siebie spada, gdyż zaczynamy pojmować potęgę i skomplikowanie danej dziedziny.',
        'Dopiero długotrwały trening prowadzi do powolnego wzrostu stabilnej pewności opartej na rzeczywistym mistrzostwie.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[0]
    },
    {
      id: 'sec-19-5',
      pageNumber: 13,
      sectionNumber: '19.5',
      title: 'Syndrom Oszusta (Impostor Syndrome) u Ludzi Wybitnych',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Na przeciwnym biegunie Efektu Dunninga-Krugera leży Syndrom Oszusta. Dotyka on często wybitnych ekspertów, którzy swoje sukcesy przypisują przypatkowi, a porażki własnej skazie.',
        'Rozbrojenie syndromu oszusta wymaga prowadzenia Twardego Dziennika Dowodów i akceptowania komplementów bez nawykowej dyskredytacji.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[1]
    },
    {
      id: 'sec-19-6',
      pageNumber: 16,
      sectionNumber: '19.6',
      title: 'Porównania Społeczne Festingera i Trzask Medialny',
      category: 'teoria',
      readingTimeMinutes: 9,
      paragraphs: [
        'Człowiek nieustannie szuka punktów odniesienia dla oceny własnych możliwości. Porównania w górę (z lepszymi) mogą inspirować, jeśli mamy poczucie sprawczości, lub niszczyć samoocenę, jeśli czujemy się bezsilni.',
        'Media społecznościowe serwują nam nierealistyczne porównania z wyreżyserowanymi sukcesami innych, wzbudzając ciągły niepokój niewystarczalności.'
      ]
    },
    {
      id: 'sec-19-7',
      pageNumber: 19,
      sectionNumber: '19.7',
      title: 'Uzależnienie Samooceny od Wyników (Contingent Self-Esteem)',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Gdy Twoja wartość jako człowieka zależy od ostatniego wyniku finansowego, wagi czy liczby lajków, żyjesz na emocjonalnym rollercoasterze.',
        'Stabilizacja wymaga zbudowania bezwarunkowej akceptacji samego siebie jako podmiotu i odseparowania jej od wskaźników zadaniowych.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[2]
    },
    {
      id: 'sec-19-8',
      pageNumber: 22,
      sectionNumber: '19.8',
      title: 'Lęk przed Oceną Społeczną i Odruch Plemienny',
      category: 'neuronauka',
      readingTimeMinutes: 9,
      paragraphs: [
        'Lęk przed krytyką jest dawno ukształtowanym alarmem ewolucyjnym. Odrzucenie przez grupę oznaczało śmierć z głodu na sawannie.',
        'Zrozumienie, że dzisiejsza krytyka na zebraniu nie zagraża Twojemu życiu biologicznemu, pozwala wyciszyć reakcję ciała migdałowatego.'
      ]
    },
    {
      id: 'sec-19-9',
      pageNumber: 25,
      sectionNumber: '19.9',
      title: 'Anatomia Perfekcjonizmu: Dążeniowy vs Lękowy',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Perfekcjonizm adaptacyjny nakręca nas do rozwoju i pasji. Perfekcjonizm dezadaptacyjny jest paraliżującym lękiem przed popełnieniem błędu.',
        'Lękowy perfekcjonista ucieka przed wstydem, przekładając oddanie projektu w nieskończoność.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[3]
    },
    {
      id: 'sec-19-10',
      pageNumber: 28,
      sectionNumber: '19.10',
      title: 'Samo-utrudnianie (Self-Handicapping): Asekuracja Ego',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Samo-utrudnianie polega na tworzeniu przeszkód przed zadaniem (np. impreza przed egzaminem), by mieć gotową wymówkę w razie porażki.',
        'Umysł woli zaryzykować oblanie z powodu braku snu niż z powodu braku inteligencji.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[5]
    },
    {
      id: 'sec-19-11',
      pageNumber: 31,
      sectionNumber: '19.11',
      title: 'Samowspółczucie (Self-Compassion) wg Kristin Neff',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Samowspółczucie to nie pobłażliwość dla własnych słabości, lecz życzliwa postawa mądrego trenera w chwili porażki.',
        'Składa się z 3 elementów: uważności, poczucia wspólnoty losu i dobroci dla samego siebie.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[4]
    },
    {
      id: 'sec-19-12',
      pageNumber: 34,
      sectionNumber: '19.12',
      title: 'Protokół Graded Mastery: Drabina Małych Wygranych',
      category: 'studium-przypadku',
      readingTimeMinutes: 9,
      paragraphs: [
        'Odbudowa sprawczości po ciężkim kryzysie wymaga stosowania metody małych, wygrywalnych kroków (Graded Mastery).',
        'Każda mała wygrana dostarcza mózgowi dopaminy i odbudowuje sieć neuronalną poczucia kontroli.'
      ],
      caseStudyRef: caseStudiesChapterNineteen[6]
    },
    {
      id: 'sec-19-13',
      pageNumber: 37,
      sectionNumber: '19.13',
      title: 'Reewaluacja Poznawcza Porażki: Eksperyment Procesowy',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Zamiast traktować niepowodzenie jako wyrok tożsamościowy, przeformułuj je na eksperyment dostarczający cennych danych badawczych.'
      ],
      exerciseRef: selfExercisesChapterNineteen[3]
    },
    {
      id: 'sec-19-14',
      pageNumber: 40,
      sectionNumber: '19.14',
      title: 'Sztuka Chwalenia: Proces vs Cechy',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'Chwalenie dzieci i współpracowników za proces (wysiłek, strategię) buduje Growth Mindset. Chwalenie za stałą cechę („jesteś genialny”) wzbudza lęk przed utratą etykiety.'
      ]
    },
    {
      id: 'sec-19-15',
      pageNumber: 43,
      sectionNumber: '19.15',
      title: 'Biologia Samooceny i Wskaźnik HALT',
      category: 'neuronauka',
      readingTimeMinutes: 8,
      paragraphs: [
        'Spadek poziomu glukozy, zmęczenie i samotność (HALT) obniżają sprawność dlPFC, wzmagając samokrytycyzm i katastroficzne wizje.',
        'Nie podejmuj decyzji o własnej wartości, gdy Twój mózg jest fizjologicznie wyczerpany.'
      ]
    },
    {
      id: 'sec-19-16',
      pageNumber: 46,
      sectionNumber: '19.16',
      title: 'Dziennik Osiągnięć i Zwycięstw',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        'Prowadzenie pisemnego rejestru codziennych sukcesów wzmacnia pamięć sprawczości i równoważy błąd asymetrii emocjonalnej.'
      ],
      exerciseRef: selfExercisesChapterNineteen[1]
    },
    {
      id: 'sec-19-17',
      pageNumber: 49,
      sectionNumber: '19.17',
      title: '🧠 BŁĘDNA INTUICJA: „Muszę Mieć Wysoką Pewność Siebie, Bym Mógł Zacząć Działać”',
      category: 'teoria',
      readingTimeMinutes: 8,
      paragraphs: [
        'INTUICJA: Czekanie na idealny moment, w którym lęk całkowicie zniknie, a pewność siebie osiągnie maksimum przed podjęciem wyzwania.',
        'CO MOŻE BYĆ BŁĘDNE? Pewność siebie nie pojawia się PRZED działaniem — powstaje W TRAKCIE i PO wykonaniu działania.',
        'CO MÓWI PSYCHOLOGIA? Działanie wyprzedza emocję. Najpierw wykonujesz mikrokrok mimo niepokoju, a mózg rejestruje sukces i dostarcza pewności.',
        'BARDZIEJ PRECYZYJNY MODEL: Działaj z niepokojem w kieszeni. Pewność przyjdzie za Tobą.'
      ]
    },
    {
      id: 'sec-19-18',
      pageNumber: 52,
      sectionNumber: '19.18',
      title: '🔬 CO NADAL NIE JEST JASNE? Zdolność Mózgu do Trwałej Podwyżki Samooceny Podstawowej',
      category: 'podsumowanie',
      readingTimeMinutes: 8,
      paragraphs: [
        'W jakim stopniu samoocena podstawowa jest uwarunkowana genetycznie poziomem neurotyczności, a w jakim stopniu można ją trwale podnieść poprzez psychoterapię i trening sprawczości?',
        'Badania pokazują, że interwencje poznawczo-behawioralne skutecznie podnoszą self-efficacy, lecz reaktywność emocjonalna na odrzucenie zachowuje pewien poziom bazy biologicznej.'
      ]
    },
    {
      id: 'sec-19-19',
      pageNumber: 54,
      sectionNumber: '19.19',
      title: '🎯 JAK ZASTOSOWAĆ TO JUTRO? Protokół Budowania Sprawczości',
      category: 'cwiczenia',
      readingTimeMinutes: 8,
      paragraphs: [
        '1. Wybierz jedną trudną domenę.',
        '2. Zidentyfikuj mikrokrok tak mały, że nie sposób go przegrać (np. zadzwoń na 1 minutę).',
        '3. Wykonaj akcję i natychmiast zapisz wygraną w Dzienniku Sprawczości.',
        '4. Powtórz proces przez 7 dni z rzędu.'
      ],
      exerciseRef: selfExercisesChapterNineteen[6]
    },
    {
      id: 'sec-19-20',
      pageNumber: 56,
      sectionNumber: '19.20',
      title: 'Podsumowanie Rozdziału 3 i Most do Rozdziału 20',
      category: 'podsumowanie',
      readingTimeMinutes: 7,
      paragraphs: [
        'Samoocena i poczucie skuteczności są wewnętrznymi kompasami sprawczości. Gdy rozdzielimy ocenę zadania od oceny własnej wartości, odzyskujemy wolność do podejmowania ryzyka i uczenia się.',
        'Ale na co przeznaczymy naszą sprawczość? Odpowiedź leży w naszych wartościach, potrzebach i priorytetach. W następnym rozdziale przejdziemy do badania architektury wartości i podejmowania trudnych decyzji w konflikcie celów.'
      ]
    },
    {
      id: 'sec-19-21',
      pageNumber: 60,
      sectionNumber: '19.21',
      title: 'Egzamin Końcowy Rozdziału 3: Samoocena i Obraz Możliwości',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Sprawdź swoją wiedzę z zakresu teorii Bandury, efektu Dunninga-Krugera, perfekcjonizmu lękowego oraz metod budowania trwałej sprawczości. Poniższy egzamin zawiera pytania analityczne i sytuacyjne.'
      ]
    }
  ]
};
