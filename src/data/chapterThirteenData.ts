import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterThirteenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'W badaniach MIT opublikowanych w czasopiśmie „Science” (Vosoughi, Roy, Aral, 2018) nad rozprzestrzenianiem się wiadomości na Twitterze/X (Sekcja 13.11), fałszywe informacje rozprzestrzeniały się:',
    topic: 'Dynamika Viralowa Fake Newsów a Emocje',
    sectionRef: 'Sekcja 13.11',
    options: [
      { label: 'A', text: 'Znacznie wolniej niż prawda, ponieważ ludzie weryfikują źródła przed podaniem dalej.', isCorrect: false },
      { label: 'B', text: 'Aż 6 razy szybciej i docierały do znacznie szerszej grupy odbiorców niż prawda, ponieważ wywoływały silniejsze emocje moralnego oburzenia, strachu i nowości.', isCorrect: true },
      { label: 'C', text: 'Z dokładnie taką samą prędkością jak rzetelne depesze prasowe.', isCorrect: false },
      { label: 'D', text: 'Wyłącznie w godzinach nocnych z winy botów.', isCorrect: false }
    ],
    explanation: 'Fake newsy są zoptymalizowane pod kątem uderzania w ciało migdałowate i prążkowie (oburzenie i nowość). Prawda jest często skomplikowana, zniuansowana i nudna; fałsz jest prosty, sensacyjny i emocjonalnie uzależniający.',
    keyTakeaway: 'Prawda zakłada buty, podczas gdy kłamstwo obiegło już pół świata.'
  },
  {
    id: 2,
    question: 'Na czym polega fundamentalna różnica między „Bańką Filtrującą” (Filter Bubble) a „Komorą Echa” (Echo Chamber) (Sekcja 13.5 i 13.6)?',
    topic: 'Bańka Filtrująca a Komora Echa',
    sectionRef: 'Sekcja 13.5',
    options: [
      { label: 'A', text: 'Nie ma żadnej różnicy, to dwa synonimy.', isCorrect: false },
      { label: 'B', text: 'Bańka filtrująca to zjawisko ALGORYTMICZNE (platforma po cichu ukrywa treści sprzeczne z Twoimi preferencjami), podczas gdy komora echa to zjawisko SPOŁECZNO-PSYCHOLOGICZNE (aktywne odrzucanie, wyśmiewanie i uciszanie głosów spoza własnego plemienia politycznego/światopoglądowego).', isCorrect: true },
      { label: 'C', text: 'Bańka dotyczy tylko telewizji, a komora echa tylko radia.', isCorrect: false },
      { label: 'D', text: 'Komora echa występuje wyłącznie w górach.', isCorrect: false }
    ],
    explanation: 'W bańce filtrującej jesteś pasywnym więźniem kodu napisanego przez inżynierów z Doliny Krzemowej. W komorze echa sam stajesz się strażnikiem ideologicznej czystości, atakując każdego, kto myśli inaczej.',
    keyTakeaway: 'Algorytm buduje klatkę bańki; twoje własne ego zamyka w niej drzwi na klucz.'
  },
  {
    id: 3,
    question: 'W ekonomii uwagi Herbert Simon zauważył, że „Bogactwo informacji rodzi ubóstwo czegoś innego”. Czego ubywa w świecie przesytu danych (Sekcja 13.1 i 13.2)?',
    topic: 'Ekonomia Uwagi Herberta Simona',
    sectionRef: 'Sekcja 13.2',
    options: [
      { label: 'A', text: 'Pamięci na dyskach twardych komputerów.', isCorrect: false },
      { label: 'B', text: 'LUDZKIEJ UWAGI — ponieważ uwaga jest zasobem ściśle ograniczonym, nadmiar bodźców prowadzi do płytkiego, pofragmentowanego przetwarzania i paraliżu decyzyjnego.', isCorrect: true },
      { label: 'C', text: 'Papieru w drukarkach biurowych.', isCorrect: false },
      { label: 'D', text: 'Szybkości łączy światłowodowych.', isCorrect: false }
    ],
    explanation: 'Nawiązując do Rozdziału 3 Tomu I (Uwaga): reflektor świadomości nie jest z gumy. Kiedy zalewa cię 10 000 bodźców dziennie, kora przedczołowa przestaje analizować głębokie argumenty i przełącza się na powierzchowne skanowanie nagłówków.',
    keyTakeaway: 'Kiedy informacja staje się darmowa i nieskończona, to twoja uwaga staje się towarem.'
  },
  {
    id: 4,
    question: 'Zjawisko FOMO (Fear of Missing Out - Lęk przed Odpadnięciem / Przeoczeniem) (Sekcja 13.9) jest bezpośrednio zakorzenione w ewolucyjnym mechanizmie:',
    topic: 'Ewolucyjne Źródła FOMO',
    sectionRef: 'Sekcja 13.9',
    options: [
      { label: 'A', text: 'Chęci zostania programistą komputerowym.', isCorrect: false },
      { label: 'B', text: 'Lęku pierwotnego przed wykluczeniem ze stada (Ostracyzmem) — w plemieniu przeoczenie kluczowej informacji o drapieżniku czy zasobach oznaczało śmierć.', isCorrect: true },
      { label: 'C', text: 'Potrzebie ciągłego ładowania baterii w smartfonie.', isCorrect: false },
      { label: 'D', text: 'Wstręcie do czytania tradycyjnych książek.', isCorrect: false }
    ],
    explanation: 'Social media bezwzględnie eksploatują ten prastary obwód przetrwania. Ciągłe odświeżanie relacji na Instagramie to biologiczny odruch sprawdzania: „Czy stado nie bawi się beze mnie? Czy nadal jestem bezpieczny?”.',
    keyTakeaway: 'FOMO to ewolucyjny strach przed śmiercią poza jaskinią, wykorzystywany do sprzedaży reklam.'
  },
  {
    id: 5,
    question: 'W metodzie weryfikacji informacji zwanej „Czytaniem Horyzontalnym” (Lateral Reading) stosowanej przez zawodowych fact-checkerów (Sekcja 13.12), gdy trafiasz na szokujący artykuł na nieznanej stronie, należy:',
    topic: 'Czytanie Horyzontalne vs Wertykalne Fact-Checkingu',
    sectionRef: 'Sekcja 13.12',
    options: [
      { label: 'A', text: 'Wczytywać się głęboko w tekst tej samej strony i analizować jej szatę graficzną (czytanie wertykalne).', isCorrect: false },
      { label: 'B', text: 'Natychmiast otworzyć nowe karty w przeglądarce i sprawdzić, co NIEZALEŻNE, wiarygodne źródła zewnętrzne mówią o autorze, organizacji i opisywanym zjawisku.', isCorrect: true },
      { label: 'C', text: 'Uwierzyć autorowi, jeśli w tekście jest dużo trudnych słów.', isCorrect: false },
      { label: 'D', text: 'Przesłać link do wszystkich znajomych z pytaniem: „Czy to prawda?”.', isCorrect: false }
    ],
    explanation: 'Oszuści potrafią perfekcyjnie podrobić wygląd wiarygodnego portalu medycznego czy naukowego. Czytanie wertykalne (badanie samej strony) wprowadza w błąd. Jedynym ratunkiem jest wyjście poza stronę i sprawdzenie zewnętrznych rejestrów i konsensusu naukowego.',
    keyTakeaway: 'Nie badaj tego, co strona mówi o sobie. Zbadaj to, co świat mówi o tej stronie.'
  },
  {
    id: 6,
    question: 'Dlaczego algorytmy platform społecznościowych promują treści wywołujące wściekłość i moralne oburzenie (tzw. Ragebait) (Sekcja 13.8)?',
    topic: 'Ragebait i Ekonomia Oburzenia',
    sectionRef: 'Sekcja 13.8',
    options: [
      { label: 'A', text: 'Inżynierowie oprogramowania są z natury złośliwi.', isCorrect: false },
      { label: 'B', text: 'Oburzenie moralne generuje najwyższy wskaźnik zaangażowania (Engagement Rate): ludzie piszą 4 razy więcej komentarzy i spędzają 3 razy więcej czasu w aplikacji, co maksymalizuje przychody z reklam.', isCorrect: true },
      { label: 'C', text: 'Komputery działają sprawniej w wysokiej temperaturze emocjonalnej.', isCorrect: false },
      { label: 'D', text: 'Wymagają tego międzynarodowe traktaty handlowe.', isCorrect: false }
    ],
    explanation: 'Algorytm nie ma moralności — optymalizuje jeden parametr: czas spędzony przed ekranem (Time on Platform). Gniew i oburzenie są najsilniejszym biologicznym klejem uwagi.',
    keyTakeaway: 'Twoja wściekłość to ich zysk bilansowy. Kiedy jesteś oburzony w sieci — zostałeś zmonetyzowany.'
  },
  {
    id: 7,
    question: 'Na czym polega zasada „Diety Niskoinformacyjnej” (Low-Information Diet) Tima Ferrissa (Sekcja 13.4)?',
    topic: 'Dieta Informacyjna i Higiena Kognitywna',
    sectionRef: 'Sekcja 13.4',
    options: [
      { label: 'A', text: 'Na całkowitym zakazie czytania jakichkolwiek książek.', isCorrect: false },
      { label: 'B', text: 'Na radykalnej selekcji źródeł: eliminacji wiadomości bieżących (newsów sensacyjnych) na rzecz długich, pogłębionych analiz i wiedzy ponadczasowej, która nie traci wartości po 48 godzinach.', isCorrect: true },
      { label: 'C', text: 'Na jedzeniu posiłków wyłącznie w ciemności.', isCorrect: false },
      { label: 'D', text: 'Na instalacji 50 dodatkowych aplikacji z powiadomieniami.', isCorrect: false }
    ],
    explanation: 'Większość newsów z nagłówków nie ma żadnego wpływu na Twoje realne życie. Karmienie mózgu bieżącym szumem niszczy skupienie i rodzi bezradność poznawczą. Chroń swój umysł jak żołądek.',
    keyTakeaway: 'Większość wiadomości to śmieciowe kalorie dla Twojego mózgu. Czytaj to, co będzie aktualne za 10 lat.'
  }
];

export const chapterThirteenCaseStudyRadicalization: CaseStudy = {
  id: 'cs-ch13-banka-janusz',
  title: 'Królicza Nora: Janusz i Algorytmiczne Oddalenie od Rodziny',
  subtitle: 'Jak 52-letni inżynier wpadł w komorę echa teorii spiskowych i zerwał więź z dziećmi',
  protagonist: 'Janusz, 52 lata, inżynier mechanik',
  context: 'Dom na przedmieściach, wieczory przed ekranem tabletu po przejściu dzieci na swoje.',
  story: [
    'Janusz zawsze był człowiekiem pragmatycznym. Po wyprowadzce dorosłych dzieci z domu poczuł pustkę i samotność. Kupił tablet i zaczął spędzać wieczory na YouTube i Facebooku.',
    'Zaczęło się niewinnie: obejrzał film o zanieczyszczeniu powietrza i smugach kondensacyjnych samolotów. Algorytm rekomendacji zarejestrował wysoki czas oglądania (Watch Time) i natychmiast podsunął kolejny film: „Czego rządy nie mówią o chemtrails?”.',
    'W ciągu 6 miesięcy algorytm zamknął Janusza w szczelnej Bańce Filtrującej (Filter Bubble). 90% postów na jego tablicy dotyczyło „światowego spisku elit”, „fałszywych pandemii” i „trucizn w wodzie”. W jego mózgu zadziałała Heurystyka Dostępności (Tom I, Rozdział 4): skoro widzi te treści codziennie setki razy, uznał, że mówi o tym cały świat.',
    'Podczas świątecznego obiadu Janusz nie potrafił rozmawiać o niczym innym. Kiedy jego 26-letnia córka lekarka próbowała sprostować fake newsa o szczepionkach badaniami z The Lancet, Janusz wpadł we wściekłość: „Jesteś zmanipulowana przez korporacje medyczne! Sprzedałaś duszę systemowi!”.',
    'Córka wybiegła z płaczem. Przez kolejny rok dzieci przestały go odwiedzać. Janusz został sam ze swoim tabletem, otoczony wirtualnymi „przyjaciółmi z grupy prawdy”, przekonany, że jest samotnym obrońcą ludzkości przed apokalipsą.'
  ],
  decisionTaken: 'Janusz uznał algorytmicznie podsuwane teorie za jedyną obiektywną prawdę i poświęcił realne relacje rodzinne w imię wirtualnej komory echa.',
  whatProtagonistSaw: 'Janusz widział siebie jako przebudzonego wojownika prawdy, a rodzinę jako naiwne owce sterowane przez media.',
  whatWasMissed: 'Że algorytm platformy karmił go skrajnymi treściami wyłącznie po to, by utrzymać jego wzrok na ekranie i sprzedawać reklamy suplementów diety.',
  psychologicalAnalysis: {
    coreMechanism: 'Radykalizacja w komorze echa (Echo Chamber) napędzana błędem konfirmacji i ewolucyjną potrzebą unikalnego statusu (Gnostycka duma: „Wiem to, czego nie wiedzą inni”).',
    cognitiveBiases: [
      { name: 'Błąd konfirmacji (Confirmation Bias)', description: 'Janusz szukał wyłącznie źródeł potwierdzających teorię spiskową, odrzucając całą literaturę recenzowaną.', impact: 'Utrata zdolności do korekty poglądów.' },
      { name: 'Heurystyka dostępności', description: 'Ciągłe widzenie tych samych haseł na tablicy wywołało iluzję powszechności zjawiska.', impact: 'Zniekształcenie obrazu świata.' }
    ],
    defenseMechanisms: [
      { name: 'Projekcja manipulacji', explanation: 'Oskarżanie wszystkich innych o uleganie manipulacji w celu obrony własnej klatki poznawczej.' }
    ],
    emotionalDynamic: 'Głęboka samotność i lęk przed starzeniem się przekształcone w poczucie przynależności do tajemnego bractwa.'
  },
  decisionProcessAnalysis: {
    trigger: 'Pierwsze kliknięcie w sensacyjny nagłówek o samolotach.',
    attentionFocus: 'Dreszcz emocji i poczucie odkrywania sekretu.',
    interpretation: '„Oficjalna nauka kłamie, ja odkryłem prawdę”.',
    emotion: 'Ekscytacja, wyższość moralna, lęk przed spiskiem.',
    impulse: 'Udostępniać posty dalej i nawracać rodzinę.',
    action: 'Agresywny atak na córkę przy świątecznym stole.',
    consequence: 'Całkowita izolacja od dzieci i wnuków, chroniczny stres paranoiczny.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Prążkowie brzuszne', role: 'Wyrzut dopaminy przy każdym „odkryciu prawdy”', activationState: 'Uwarunkowanie uzależniające' },
      { region: 'Ciało migdałowate', role: 'Podtrzymywanie stanu stałego zagrożenia spiskowego', activationState: 'Hiperaktywacja' }
    ],
    neurotransmitters: [
      { name: 'Dopamina i kortyzol', roleInScenario: 'Toksyczny koktajl pobudzenia i strachu' }
    ],
    biologicalTimeline: [
      { timeMs: 'Miesiąc 1', process: 'Ciekawość (VTA).' },
      { timeMs: 'Miesiąc 6', process: 'Komora echa zamyka synapsy na jakiekolwiek argumenty przeciwne.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Algorytmiczne uzależnienie od oburzenia', description: 'Platforma podsuwa coraz bardziej skrajne materiały, by wydłużyć czas sesji.', vulnerabilityExploited: 'Poczucie osamotnienia na emeryturze i potrzeba znaczenia' }
    ],
    counterMeasures: [
      { step: 'Zasada Równoległej Diety Poznawczej', script: 'Wymuszenie czytania źródeł o odmiennym punkcie widzenia i tygodniowy detoks od algorytmów społecznościowych.', rationale: 'Przywraca elastyczność poznawczą kory przedczołowej.' }
    ]
  },
  alternativePath: 'Gdyby córka zamiast wyśmiewać ojca przy stole, zapytała: „Tato, widzę, że bardzo się tym martwisz. Skąd to się w tobie wzięło? Opowiedz mi o swoich emocjach”, mogłaby zaopiekować się jego samotnością bez walki o fakty.',
  readerQuestion: 'W jakiej bańce informacyjnej tkwisz Ty sam? Kiedy ostatnio przeczytałeś z szacunkiem artykuł kogoś, z kim fundamentalnie się nie zgadzasz?',
  keyTakeaway: 'Kiedy algorytm podsuwa Ci tylko to, co lubisz — nie jesteś poinformowany. Jesteś hodowany w klatce własnych uprzedzeń.'
};

export const chapterThirteenCaseStudyFomoMaja: CaseStudy = {
  id: 'cs-ch13-fomo-maja',
  title: 'Iluzja Perfekcji: Maja i Lustro Instagrama',
  subtitle: 'Jak 16-letnia licealistka popadła w depresję, porównując swoje kulisy z cudzą sceną',
  protagonist: 'Maja, 16 lat, uczennica liceum ogólnokształcącego',
  context: 'Pokój nastolatki, 1:30 w nocy, światło ekranu smartfona oświetlające twarz w ciemności.',
  story: [
    'Maja była bystrą, zdolną dziewczyną z talentem plastycznym. W jej telefonie mieszkał jednak potwór: Instagram i TikTok. Spędzała w nich średnio 6 godzin na dobę.',
    'Każdej nocy, leżąc pod kołdrą, oglądała relacje rówieśniczek: egzotyczne wakacje na Bali, idealnie gładkie cery bez ani jednego wyprysku, markowe ubrania, uśmiechnięte paczki przyjaciół na imprezach. W jej głowie odpalał się bezlitosny mechanizm porównań społecznych Leona Festingera.',
    'Maja nie rozumiała, że ogląda wyreżyserowaną, przefiltrowaną scenę, podczas gdy siebie obserwuje od kulis — w starym dresie, z nieodrobioną matematyką i zmęczeniem. W jej układzie limbicznym wybuchło ostre zjawisko FOMO: „Wszyscy żyją wspaniale, tylko ja jestem beznadziejna, brzydka i samotna”.',
    'Zaczęła unikać spotkań w realnym świecie, bo wstydziła się swojego wyglądu bez cyfrowego filtra. Przestała malować obrazy. Schudła 8 kg, głodząc się, by dorównać ciałom z rolek. O 2:00 w nocy budziła się, by sprawdzić liczbę polubień pod swoim nowym zdjęciem — brak lajków odczuwała jak fizyczny cios w twarz.',
    'Ratunek przyszedł, gdy telefon Mai uległ zniszczeniu na wycieczce szkolnej. Przez pierwsze 4 dni przeżywała piekło zespołu odstawiennego: drżenie rąk, płacz, panikę. Piątego dnia wyszła na spacer do lasu bez aparatu. Zauważyła zapach mchu, zieleń liści, usłyszała śpiew ptaków. Jej mózg po raz pierwszy od 3 lat wyszedł ze stanu ciągłego skanowania statusowego. Po powrocie poprosiła rodziców o telefon klawiszowy bez dostępu do social mediów.'
  ],
  decisionTaken: 'Maja podjęła radykalną decyzję o rezygnacji ze smartfona na rzecz telefonu bez aplikacji społecznościowych, ratując swoje zdrowie psychiczne.',
  whatProtagonistSaw: 'Widziała obiektywny dowód na własną brzydotę i nieadekwatność w porównaniu z „idealnymi ludźmi” z sieci.',
  whatWasMissed: 'Że obrazy na ekranie były produktem inżynierii optycznej, filtrów AI i sponsoringu, a dziewczyny z ekranów cierpiały na dokładnie takie same lęki i zaburzenia odżywiania.',
  psychologicalAnalysis: {
    coreMechanism: 'Porównania Społeczne w Górę (Upward Social Comparison) spotęgowane przez zniekształcenie algorytmiczne i pętlę uzależnienia dopaminowego.',
    cognitiveBiases: [
      { name: 'Błąd reprezentatywności', description: 'Uznanie 5-sekundowej, wyretuszowanej migawki za wierny obraz całego życia drugiej osoby.', impact: 'Głęboka autodewaluacja.' }
    ],
    defenseMechanisms: [
      { name: 'Autoagresja', explanation: 'Karanie własnego ciała głodówkami za to, że nie przypomina awatara z ekranu.' }
    ],
    emotionalDynamic: 'Chroniczny wstyd tożsamościowy i panika przed byciem niewidzialną dla rówieśników.'
  },
  decisionProcessAnalysis: {
    trigger: 'Widok zdjęcia koleżanki na plaży z 1000 polubień.',
    attentionFocus: 'Własne niedoskonałości fizyczne w lustrze.',
    interpretation: '„Jestem gorsza, nikt mnie nie chce”.',
    emotion: 'Zawiść, wstyd, rozpacz, samotność.',
    impulse: 'Nie jeść kolacji i zrobić 50 selfie z filtrem w poszukiwaniu aprobaty.',
    action: 'Detoks cyfrowy i zamiana smartfona na telefon klawiszowy.',
    consequence: 'Powrót apetytu, ustąpienie stanów lękowych i powrót do pasji malarskiej.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przednia wyspa', role: 'Generowanie bólu odrzucenia społecznego pod wpływem widoku cudzych sukcesów', activationState: 'Permanentny stan zapalny' },
      { region: 'Ciało migdałowate', role: 'Lęk przed wypadnięciem z hierarchii stada', activationState: 'Hiperaktywacja nocna' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol i dopamina', roleInScenario: 'Zaburzenie rytmu dobowego melatoniny przez niebieskie światło ekranu i skoki kortyzolu' }
    ],
    biologicalTimeline: [
      { timeMs: 'Nocne scrollowanie', process: 'Blokada melatoniny, spłycenie snu REM, brak regeneracji kory czołowej.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Interfejs Slot Machine (Pociągnij, by odświeżyć)', description: 'Mechanizm kasyna wbudowany w aplikację wywołuje przymus ciągłego sprawdzania.', vulnerabilityExploited: 'Krucha tożsamość dojrzewającego mózgu' }
    ],
    counterMeasures: [
      { step: 'Higiena Cyfrowa Sypialni', script: 'Telefon nigdy nie przekracza progu sypialni. Ładowarka zostaje w kuchni na noc.', rationale: 'Chroni najświętszy czas regeneracji mózgu przed zatruciem algorytmicznym.' }
    ]
  },
  alternativePath: 'Gdyby Maja nadal spędzała 6 godzin na Instagramie, rozwinęłaby kliniczną anoreksję i wylądowała na oddziale psychiatrycznym z próbą samobójczą.',
  readerQuestion: 'Jak czujesz się w swoim ciele i życiu po 30 minutach scrollowania mediów społecznościowych — jesteś pełen energii, czy czujesz pustkę i zmęczenie?',
  keyTakeaway: 'Nigdy nie porównuj swoich kulis z cudzą sceną. W sieci nikt nie publikuje swoich porażek, samotności i łez.'
};

export const chapterThirteenExerciseDietAudit: SelfExercise = {
  id: 'ex-ch13-diet-audit',
  title: 'Ćwiczenie 13.1: Audyt Diety Informacyjnej (Białko vs Cukier Cyfrowy)',
  subtitle: 'Zbadaj, czym karmisz swój mózg i usuń toksyczne kalorie poznawcze',
  objective: 'Zidentyfikowanie źródeł wywołujących niepokój i zastąpienie ich wiedzą głęboką.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Ograniczenie chaotycznych bodźców cyfrowych obniża tonus układu współczulnego i przywraca naturalną gęstość receptorów dopaminergicznych D2 w prążkowiu.',
  steps: [
    {
      stepNumber: 1,
      title: 'Audyt 24 godzin konsumpcji',
      instruction: 'Sprawdź w ustawieniach telefonu czas ekranowy z wczorajszego dnia. Wypisz 3 aplikacje, które pożarły najwięcej Twojego czasu.',
      promptText: 'Moje 3 aplikacje pożerające uwagę i łączny czas ekranowy:',
      placeholder: 'Czas łączny: 4h 15 min. Aplikacje: 1. TikTok (1h 40m), 2. Instagram (1h 10m), 3. Portale informacyjne (45m)...'
    },
    {
      stepNumber: 2,
      title: 'Klasyfikacja: Białko czy Pusty Cukier?',
      instruction: 'Oceń, ile z tych treści realnie wzbogaciło Twoje życie i kompetencje (Białko), a ile było bezmyślnym zapychaczem wywołującym niepokój (Cukier).',
      promptText: 'Procentowy udział cukru w mojej diecie informacyjnej:',
      placeholder: 'Około 85% to był pusty cukier emocjonalny (oburzenie, plotki, memy)...'
    },
    {
      stepNumber: 3,
      title: 'Plan Odchudzania Informacyjnego',
      instruction: 'Wybierz jedno konkretne cięcie na ten tydzień (np. usunięcie TikToka z telefonu, wyciszenie powiadomień ze wszystkich portali newsowych).',
      promptText: 'Moje jedno radykalne cięcie cyfrowe:',
      placeholder: 'Usuwam aplikacje newsowe z telefonu. Wiadomości sprawdzam tylko raz w tygodniu w sobotę na komputerze.'
    }
  ],
  reflectionQuestions: [
    'Co zmieniłoby się w Twoim poziomie lęku, gdybyś przez miesiąc nie wiedział o żadnym skandalu ze świata polityki?',
    'Na jaką pasję lub relację przeznaczyłbyś te 2 godziny dziennie odzyskane z ekranu?'
  ]
};

export const chapterThirteenExerciseBubbleBreaker: SelfExercise = {
  id: 'ex-ch13-bubble-breaker',
  title: 'Ćwiczenie 13.2: Przebijanie Bańki Filtrującej — Wizyta w Świecie Oponenta',
  subtitle: 'Wytrenuj intelektualną odwagę i przeczytaj argumenty drugiej strony bez pogardy',
  objective: 'Rozbicie iluzji jednomyślności i poszerzenie horyzontu poznawczego.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Konfrontacja z odmienną perspektywą bez odpalania agresji aktywuje grzbietowo-boczną korę przedczołową, budując elastyczność poznawczą (Cognitive Flexibility).',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz temat, w którym masz skrajnie wyrazisty pogląd',
      instruction: 'Wskaż kwestię polityczną, społeczną lub gospodarczą, w której uważasz drugą stronę za „szkodników lub idiotów”.',
      promptText: 'Jaki to temat i jakie jest Twoje stanowisko?',
      placeholder: 'Temat: Transformacja energetyczna i zakaz aut spalinowych. Moje zdanie: konieczne natychmiast...'
    },
    {
      stepNumber: 2,
      title: 'Znajdź najmądrzejszego reprezentanta przeciwnej strony (Steel-manning)',
      instruction: 'Nie szukaj internetowych krzykaczy. Znajdź rzetelny artykuł lub esej wybitnego intelektualisty o przeciwnych poglądach. Przeczytaj go w całości.',
      promptText: 'Kogo przeczytałeś i jaki był jego najsilniejszy argument merytoryczny?',
      placeholder: 'Przeczytałem analizę ekonomisty wskazującą na ubóstwo energetyczne emerytów w małych miastach bez transportu publicznego...'
    },
    {
      stepNumber: 3,
      title: 'Uznaj ziarno prawdy oponenta',
      instruction: 'Sformułuj jedno zdanie pokazujące, że rozumiesz racjonalne obawy drugiej strony, nawet jeśli wciąż się z nią nie zgadzasz.',
      promptText: 'Co zrozumiałem z perspektywy mojego oponenta?',
      placeholder: 'Zrozumiałem, że ich opór nie wynika ze złośliwości, lecz z realnego lęku przed wykluczeniem komunikacyjnym i brakiem środków do życia.'
    }
  ],
  reflectionQuestions: [
    'O ile trudniej jest nienawidzić człowieka, gdy zrozumiesz jego lęki i motywacje?',
    'Jak zmieniłaby się debata publiczna, gdybyśmy zamiast wyśmiewać karykatury przeciwnika, dyskutowali z jego najlepszymi argumentami?'
  ]
};

export const chapterThirteenExerciseLateralReading: SelfExercise = {
  id: 'ex-ch13-lateral-reading-lab',
  title: 'Ćwiczenie 13.3: Laboratorium Czytania Horyzontalnego (Fact-Checking w 3 Minuty)',
  subtitle: 'Przetestuj szokującą wiadomość w sieci za pomocą technik profesjonalnych weryfikatorów',
  objective: 'Zbudowanie odruchu otwierania nowych kart i sprawdzania źródeł przed kliknięciem „Udostępnij”.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Zahamowanie impulsu natychmiastowego podania wiadomości dalej angażuje prawą korę czołowo-oczodołową, rozbijając manipulację afektywną twórców fake newsa.',
  steps: [
    {
      stepNumber: 1,
      title: 'Wybierz sensacyjny nagłówek z sieci',
      instruction: 'Znajdź post lub artykuł z ostatnich dni, który wywołał w Tobie szok, oburzenie lub strach.',
      promptText: 'Jaki to nagłówek i z jakiej strony pochodzi?',
      placeholder: '„Szokujące odkrycie: ten powszechny dodatek do chleba niszczy neurony u dzieci!”...'
    },
    {
      stepNumber: 2,
      title: 'Otwórz 3 nowe karty (Czytanie Horyzontalne)',
      instruction: 'Wpisz w wyszukiwarkę nazwisko autora + „afiliacja naukowa” oraz kluczowe tezy + „fact-check” / „badania kliniczne”.',
      promptText: 'Co mówią niezależne źródła o autorze i tym twierdzeniu?',
      placeholder: 'Autor nie ma wykształcenia medycznego, sprzedaje na tej samej stronie własne suplementy, a oficjalne instytucje dawno obaliły ten mit...'
    },
    {
      stepNumber: 3,
      title: 'Werdykt i zasada higieny',
      instruction: 'Napisz krótki werdykt krytyczny i zobowiąż się do nieudostępniania niesprawdzonych treści.',
      promptText: 'Mój werdykt poznawczy:',
      placeholder: 'Artykuł to klasyczny clickbait handlowy grający na lęku rodziców w celu sprzedaży witamin. Usuwam i nie podaję dalej.'
    }
  ],
  reflectionQuestions: [
    'Dlaczego mózg tak chętnie wierzy w przerażające informacje bez sprawdzania pieczątek?',
    'Jak możesz stać się ambasadorem spokoju i prawdy w swoich grupach na komunikatorach?'
  ]
};

export const chapterThirteen: Chapter = {
  number: 13,
  title: 'Decyzje w Świecie Informacji: Media, Algorytmy i Iluzja Wyboru',
  subtitle: 'Jak ekonomia uwagi, clickbaity, bańki filtrujące i dezinformacja kształtują Twoje poglądy i zakupy',
  leadParagraph: 'Dawniej największym wyzwaniem człowieka był brak dostępu do wiedzy — książki były przepisywane ręcznie, a wieści z sąsiedniego miasta szły tygodniami. Dziś stoimy przed wyzwaniem o 180 stopni przeciwnym: żyjemy w epoce cyfrowego potopu. W każdej minucie na YouTube trafia 500 godzin wideo, a algorytmy korporacji technologicznych walczą na śmierć i życie o każdy ułamek sekundy Twojej uwagi. Jeśli nie nauczysz się higieny informacyjnej, staniesz się biernym marionetkowym odbiorcą cudzych narracji.',
  totalEstimatedPages: 52,
  sections: [
    {
      id: 'sec-13-1',
      pageNumber: 604,
      sectionNumber: '13.1',
      title: 'Informacja nie jest neutralnym doświadczeniem: Fizjologia bodźca cyfrowego',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Jeśli nie płacisz za produkt, to znaczy, że sam jesteś produktem sprzedawanym reklamodawcom.',
        author: 'Tristan Harris'
      },
      paragraphs: [
        'Wyobraź sobie, że co 15 minut ktoś podchodzi do Ciebie na ulicy, klepie Cię w ramię i krzyczy do ucha: „Wojna!”, „Skandal u celebrytów!”, „Ten produkt zniszczy Twoje zdrowie!”, „Zobacz, co sąsiad napisał o Twojej dzielnicy!”. Po dwóch godzinach Twój układ nerwowy byłby w stanie głębokiego wycieńczenia.',
        'Dokładnie to dzieje się w Twoim smartfonie, tylko w wersji bezszelestnej. Informacja to nie jest niewinny pakiet zer i jedynek. Każdy nagłówek, każde czerwone kółko powiadomienia, każdy filmik na TikToku to impuls biochemiczny wpuszczany bezpośrednio do Twojego krwioobiegu.',
        'Z punktu widzenia fizjologii, informacja jest pokarmem dla mózgu. Podobnie jak jedzenie przetworzonej żywności pełnej cukru i tłuszczu trans niszczy wątrobę i naczynia krwionośne, tak samo konsumpcja cyfrowego śmiecia informacyjnego wywołuje stany zapalne w układzie nerwowym: mgłę mózgową, chroniczny lęk, spadek zdolności głębokiego skupienia i cynizm relacyjny.'
      ]
    },
    {
      id: 'sec-13-2',
      pageNumber: 608,
      sectionNumber: '13.2',
      title: 'Ekonomia uwagi: Kiedy uwaga człowieka staje się towarem',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Herbert Simon już w 1971 roku proroczo zauważył: „W świecie bogatym w informacje, bogactwo informacji oznacza ubóstwo czegoś innego: niedobór tego, co informacja konsumuje. A informacja konsumuje uwagę swoich odbiorców”.',
        'Najcenniejszym zasobem na Ziemi nie jest już ropa naftowa ani złoto. Jest nim Twoja uwaga. Modele biznesowe gigantów technologicznych opierają się na jednym wskaźniku: Time on Screen (Czas przed Ekranem). Im dłużej patrzysz na ekran, tym więcej reklam można Ci wyświetlić i tym więcej danych o Twoich lękach i słabościach można zebrać.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 1: Poranne sprawdzanie powiadomień w łóżku',
          paragraphs: [
            'Sytuacja i bohater: 36-letni Grzegorz budzi się o 7:00. Jeszcze przed wstaniem z łóżka sięga po telefon. Przez 20 minut czyta nagłówki o kryzysie gospodarczym, wypadkach drogowych i kłótniach politycznych.',
            'Działający mechanizm: Zalanie układu nerwowego kortyzolem w stanie hipnopompocznym (przejście ze snu do czuwania). Zanim postawił stopę na podłodze, jego kora przedczołowa została wrzucona w tryb zagrożenia.',
            'Jak rozpoznać w czasie rzeczywistym: Ciężar w klatce piersiowej i niechęć do rozpoczęcia dnia mimo przespanej nocy.',
            'Możliwa konstruktywna reakcja: Zasada „Złotej Pierwszej Godziny”: pierwsze 60 minut dnia całkowicie bez ekranów i bez wiadomości.',
            'Wniosek dydaktyczny dla czytelnika: Kto zaczyna dzień od cudzych wiadomości, oddaje stery swojego nastroju w ręce obcych ludzi.'
          ]
        }
      ]
    },
    {
      id: 'sec-13-3',
      pageNumber: 612,
      sectionNumber: '13.3',
      title: 'Clickbait i luka informacyjna: Jak nagłówki porywają mózg',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'George Loewenstein opisał teorię luki informacyjnej (Information Gap Theory). Ciekawość pojawia się w mózgu w momencie, gdy zdamy sobie sprawę z luki między tym, co wiemy, a tym, czego nie wiemy. Ta luka odczuwana jest w układzie nagrody jako nieprzyjemne swędzenie, którego mózg pragnie się pozbyć.',
        'Clickbaity są inżynieryjnym wykorzystaniem tej luki: „Nie uwierzysz, co stało się potem...”, „Popełniasz ten jeden błąd każdego dnia”. Mózg musi kliknąć, by zamknąć pętlę dopaminową, po czym okazuje się, że treść artykułu jest banalna lub kłamliwa.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 2: Zagadka zepsutego nagłówka',
          paragraphs: [
            'Sytuacja i bohater: Magda widzi na portalu nagłówek: „Znana polska aktorka miała straszny wypadek! Lekarze walczą o jej życie!”. Klika w panice, obawiając się o ulubioną artystkę. W artykule okazuje się, że chodzi o rolę filmową w serialu z 2008 roku.',
            'Działający mechanizm: Manipulacja luką informacyjną i strachem w celu wymuszenia odsłony reklamowej.',
            'Jak rozpoznać w czasie rzeczywistym: Uczucie bycia oszukanym połączone z niesmakiem.',
            'Wniosek dydaktyczny dla czytelnika: Każdy klik w clickbait to finansowe zasilenie fabryki kłamstwa. Ignoruj luki, które nie mają wpływu na Twoje życie.'
          ]
        }
      ]
    },
    {
      id: 'sec-13-4',
      pageNumber: 616,
      sectionNumber: '13.4',
      title: 'Dieta niskoinformacyjna: Selekcja pokarmu dla neuronów',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Podobnie jak nie wlewasz do baku luksusowego auta brudnej wody z kałuży, tak samo nie możesz wlewać do swojej kory przedczołowej śmieciowego szumu medialnego, oczekując, że będziesz podejmować genialne decyzje życiowe.',
        'Dieta niskoinformacyjna (Low-Information Diet) polega na radykalnej selekcji źródeł: eliminacji wiadomości bieżących na rzecz wiedzy głębokiej i książek. Poniższy warsztat uczy, jak przeprowadzić audyt własnej konsumpcji cyfrowej.'
      ],
      exerciseRef: chapterThirteenExerciseDietAudit
    },
    {
      id: 'sec-13-5',
      pageNumber: 620,
      sectionNumber: '13.5',
      title: 'Bańki filtrujące (Filter Bubbles): Klatka uszyta z Twoich lajków',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Eli Pariser ukuł termin Filter Bubble. Algorytmy Google, Facebooka czy TikToka nie pokazują Ci obiektywnego świata. Pokazują Ci świat, który potwierdza Twoje dotychczasowe kliknięcia, lajki i wyszukiwania.',
        'W rezultacie dwóch sąsiadów mieszkających drzwi w drzwi, wpisując to samo hasło w wyszukiwarkę, otrzymuje całkowicie odmienne zestawy wyników. Każdy z nich żyje w innym uniwersum poznawczym, święcie przekonany, że „przecież wszyscy tak myślą”.'
      ]
    },
    {
      id: 'sec-13-6',
      pageNumber: 624,
      sectionNumber: '13.6',
      title: 'Komory echa: Kiedy plemię krzyczy do własnego odbicia',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Podczas gdy bańka filtrująca jest dziełem algorytmu, komora echa (Echo Chamber) jest dziełem ludzkiego plemienia. W komorze echa wszelkie głosy krytyczne lub zniuansowane są natychmiast wyciszane, wyśmiewane i banowane jako „zdrada”.',
        'Poniższe studium przypadku ukazuje tragedię inżyniera, który wpadł w komorę echa teorii spiskowych, niszcząc więź z własnymi dziećmi.'
      ],
      caseStudyRef: chapterThirteenCaseStudyRadicalization
    },
    {
      id: 'sec-13-7',
      pageNumber: 628,
      sectionNumber: '13.7',
      title: 'Przełamywanie bańki: Technika Steel-Manningu',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'W erystyce istnieje pojęcie Straw Mana (Chochoła) — stworzenie prymitywnej, karykaturalnej wersji argumentu oponenta, by łatwo go obalić. Znakomici myśliciele stosują technikę przeciwną: STEEL-MANNING.',
        'Polega ona na sformułowaniu argumentu przeciwnika w najsilniejszej, najbardziej inteligentnej i przekonującej postaci, zanim spróbujesz z nim polemizować. Poniższy warsztat uczy, jak przebijać własną bańkę filtrującą.'
      ],
      exerciseRef: chapterThirteenExerciseBubbleBreaker
    },
    {
      id: 'sec-13-8',
      pageNumber: 632,
      sectionNumber: '13.8',
      title: 'Ekonomia oburzenia (Ragebait): Dlaczego złość jest najbardziej zyskowna',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Badania laboratoryjne dowodzą, że ze wszystkich ludzkich emocji to OBURZENIE MORALNE wywołuje najszybszą i najtrwalszą reakcję behawioralną w mediach społecznościowych. Treści budzące złość rozprzestrzeniają się 4 razy szybciej niż treści budzące radość czy spokój.',
        'Algorytmy nie są złe moralnie — są obojętne. Po prostu zoptymalizowano je pod kątem czasu spędzonego na platformie. A ponieważ nic nie trzyma człowieka przed ekranem tak mocno jak nienawiść do oponenta politycznego, platformy celowo podsuwają Ci treści, które wyprowadzają Cię z równowagi.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 4: Złość na forum internetowym pod postem politycznym',
          paragraphs: [
            'Sytuacja i bohater: Paweł (42 lata) po powrocie z pracy czyta komentarze pod postem o podatkach. Trafia na chamski, prowokacyjny wpis oponenta. W Pawle gotuje się krew. Poświęca 45 minut na pisanie 5-akapitowej, pełnej jadu riposty.',
            'Działający mechanizm: Ragebait. Paweł nie przekonał oponenta do swoich racji. Oddał 45 minut swojego życia platformie, która w tym czasie wyświetliła mu 12 reklam.',
            'Jak rozpoznać w czasie rzeczywistym: Poczucie moralnego przymusu „wyjaśnienia komuś w internecie, jak bardzo się myli”.',
            'Możliwa konstruktywna reakcja: Natychmiastowe zamknięcie karty i uświadomienie sobie: „Moje oburzenie to ich zysk. Odmawiam karmienia tej bestii”.',
            'Wniosek dydaktyczny dla czytelnika: Nigdy nie kłóć się z nieznajomymi w internecie. To walka na arenie zbudowanej po to, by sprzedawać bilety na Twoją wściekłość.'
          ]
        }
      ]
    },
    {
      id: 'sec-13-9',
      pageNumber: 636,
      sectionNumber: '13.9',
      title: 'FOMO: Ewolucyjny lęk przed wykluczeniem ze stada w erze cyfrowej',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'FOMO (Fear of Missing Out) to nie jest wymysł współczesnych nastolatków. To prastary obwód przetrwania hominida. Na sawannie opuszczenie narady stada czy przeoczenie sygnału o zagrożeniu oznaczało śmierć w paszczy drapieżnika.',
        'W erze cyfrowej ten sam obwód jest bombardowany tysiącami relacji z imprez, sukcesów i zakupów innych ludzi. Studium przypadku poniżej przedstawia dramat nastolatki w pułapce wiecznych porównań społecznych na Instagramie.'
      ],
      caseStudyRef: chapterThirteenCaseStudyFomoMaja
    },
    {
      id: 'sec-13-10',
      pageNumber: 640,
      sectionNumber: '13.10',
      title: 'Kultura influencerów i zniekształcenie rzeczywistości',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Przemysł influencerski to multimiliardowy biznes oparty na handlu pozorami. Widzisz 20-letniego chłopaka opierającego się o wynajęte Lamborghini lub uśmiechniętą modelkę z idealną cerą wygładzoną filtrem AI.',
        'Kiedy porównujesz swoje szare, zwyczajne kulisy z cudzym, precyzyjnie oświetlonym spektaklem, Twój mózg doświadcza trwałego spadku dopaminy bazowej. Zapominasz, że to, co widzisz na ekranie, jest pracą aktorów reklamowych, a nie realnym życiem.'
      ]
    },
    {
      id: 'sec-13-11',
      pageNumber: 644,
      sectionNumber: '13.11',
      title: 'Fake news i dezinformacja: Dlaczego fałsz jest bardziej pociągający niż prawda',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Prawda jest skomplikowana, nudna i obwarowana zastrzeżeniami („Badania wskazują na umiarkowaną korelację przy uwzględnieniu czynników X i Y”). Fałsz jest prosty, absolutny i spektakularny („Ten owoc niszczy 100% komórek raka!”).',
        'Z punktu widzenia ewolucji, mózg poszukuje nowości (Novelty Seeking). Prawda rzadko bywa szokująco nowa; fake news zawsze oferuje tani zastrzyk nowości, co sprawia, że użytkownicy podają go dalej 6 razy szybciej niż rzetelną wiadomość.'
      ]
    },
    {
      id: 'sec-13-12',
      pageNumber: 648,
      sectionNumber: '13.12',
      title: 'Czytanie horyzontalne (Lateral Reading): Jak weryfikować źródła jak zawodowiec',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Badania Stanford University dowiodły, że czytanie wertykalne (zagłębianie się w sam podejrzany artykuł) jest gwarancją bycia oszukanym. Profesjonalni fact-checkerzy stosują czytanie horyzontalne: natychmiast otwierają nowe karty i sprawdzają źródło od zewnątrz.',
        'Poniższy warsztat uczy, jak przeprowadzić 3-minutowy fact-checking dowolnej wiadomości.'
      ],
      exerciseRef: chapterThirteenExerciseLateralReading
    },
    {
      id: 'sec-13-13',
      pageNumber: 652,
      sectionNumber: '13.13',
      title: 'Wielkie Studium Przypadku: Anatomia Viralowej Paniki Lekowej',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Wstrząsające studium przypadku analizujące, jak jeden wyrwany z kontekstu post na Twitterze doprowadził do wykupienia zapasów kluczowego leku w aptekach w całym kraju, zagrażając życiu tysięcy chorych.'
      ],
      caseStudyRef: {
        id: 'cs-ch13-viral',
        title: 'Brakujący Składnik: Jak Fałszywy Post Wywołał Kryzys Zdrowotny',
        subtitle: 'Od anonimowego tweeta do paniki w aptekach — wiwisekcja kaskady dostępności',
        protagonist: 'Piotr, Redaktor Portalu Informacyjnego (31 lat) i Krystyna, Pacjentka z Cukrzycą (64 lata)',
        context: 'Redakcja portalu internetowego w Warszawie, piątek 14:30.',
        story: [
          'W piątek po południu anonimowe konto na Twitterze opublikowało zrzut ekranu z rzekomego „tajnego pisma Ministerstwa Zdrowia”: „Od poniedziałku całkowity zakaz sprzedaży leku X z powodu wykrycia zanieczyszczeń rakotwórczych. Podajcie dalej, zanim usuną!”.',
          'Piotr, dyżurny redaktor poczytnego serwisu, zobaczył, że tweet ma już 2000 retweetów. Jego szef krzyknął przez open space: „Piotrek, konkurencja już o tym pisze! Daj tekst z nagłówkiem: PILNE: Czy popularny lek zostanie wycofany?! Dajesz na jedynkę, mamy 3 minuty!”.',
          'Piotr nie zadzwonił do Głównego Inspektoratu Farmaceutycznego. Nie zastosował czytania horyzontalnego. Opublikował tekst z wielkim czerwonym paskiem. W ciągu 45 minut artykuł przeczytało pół miliona ludzi.',
          'W tym samym czasie 64-letnia Krystyna, chorująca na cukrzycę, zobaczyła artykuł udostępniony na Facebooku przez swoją siostrę. W jej ciele wybuchła panika (FOMO + Strach przed śmiercią). Ubrała się w pośpiechu i pobiegła do osiedlowej apteki.',
          'Przed apteką stała już kolejka 40 osób. Każdy chciał kupić po 10 opakowań leku na zapas. Do godziny 19:00 zapasy hurtowni w całym województwie zostały wyczyszczone. Ludzie, którzy naprawdę potrzebowali leku na dany dzień, odeszli z kwitkiem.',
          'W sobotę rano Ministerstwo Zdrowia wydało oficjalne dementi: pismo było prymitywnym fotomontażem stworzonym przez zagraniczną farmę trolli testującą podatność polskiego społeczeństwa na panikę. Ale było już za późno. Z powodu histerii i braku leku trzy osoby trafiły na oddziały intensywnej terapii.'
        ],
        decisionTaken: 'Piotr wybrał klikalność i szybkość zamiast weryfikacji źródła; Krystyna uległa panice społecznego dowodu słuszności.',
        whatProtagonistSaw: 'Piotr widział słupki ruchu i pochwałę szefa; Krystyna widziała śmiertelne zagrożenie dla swojego zdrowia.',
        whatWasMissed: 'Że anonimowy profil miał zaledwie 3 dni, a oficjalne rejestry GIF nie zawierały żadnego ostrzeżenia.',
        psychologicalAnalysis: {
          coreMechanism: 'Kaskada Dostępności (Availability Cascade) Kuran i Sunsteina — samospełniający się łańcuch reakcji wywołany przez plotkę medialną.',
          cognitiveBiases: [
            { name: 'Heurystyka dostępności', description: 'Czerwony pasek i tłum w aptece sprawiły, że zagrożenie wydało się natychmiastowe i realne.', impact: 'Paniczny wykup zapasów.' },
            { name: 'Społeczny dowód słuszności', description: 'Widok kolejki przed apteką utwierdził ludzi w przekonaniu, że katastrofa jest faktem.', impact: 'Paraliż krytycznego myślenia.' }
          ],
          defenseMechanisms: [],
          emotionalDynamic: 'Pierwotny lęk o przetrwanie podsycany przez technologię cyfrową.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Ciało migdałowate', role: 'Reakcja na nagłówek „PILNE / ZAGROŻENIE”', activationState: 'Ekstremalna' },
            { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Logiczna weryfikacja pieczątek na dokumencie', activationState: 'Stłumiona pośpiechem' }
          ],
          neurotransmitters: [
            { name: 'Adrenalina', roleInScenario: 'Zmusiła tysiące starszych ludzi do natychmiastowego wybiegnięcia do aptek' }
          ],
          biologicalTimeline: [
            { timeMs: '14:30', process: 'Publikacja tweeta.' },
            { timeMs: '15:15', process: 'Tekst na portalu odpala panikę w skali kraju.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [
            { tactic: 'Wojna Informacyjna i Fabrykowanie Paniki', description: 'Uderzenie w newralgiczny punkt: bezpieczeństwo lekowe obywateli.', vulnerabilityExploited: 'Lęk chorych i pośpiech dziennikarzy' }
          ],
          counterMeasures: [
            { step: 'Zasada 15 Minut Ciszy Redakcyjnej', script: 'Żadna wiadomość o zagrożeniu zdrowotnym nie wychodzi na czołówkę bez potwierdzenia w dwóch oficjalnych źródłach państwowych.', rationale: 'Chroni przed byciem pożytecznym idiotą dezinformacji.' }
          ]
        },
        alternativePath: 'Gdyby Piotr poświęcił 5 minut na sprawdzenie strony GIF, zobaczyłby brak komunikatu, napisał artykuł ostrzegający przed fake newsem, a panika zostałaby zduszona w zarodku.',
        readerQuestion: 'Ile razy w tym tygodniu podałeś dalej informację, której sam nie zweryfikowałeś poza nagłówkiem?',
        keyTakeaway: 'W epoce wojny informacyjnej udostępnienie niesprawdzonej wiadomości jest jak rzucenie granatu w tłum. Bądź filtrem, nie przekaźnikiem.'
      }
    },
    {
      id: 'sec-13-14',
      pageNumber: 656,
      sectionNumber: '13.14',
      title: 'Higiena Informacyjna, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'Zbadaliśmy pole bitwy, na którym codziennie toczy się walka o Twoją duszę poznawczą: algorytmy zaangażowania, bańki filtrujące, clickbaity, FOMO i wirusy dezinformacji.',
        'Oto Twój osobisty Dekalog Higieny Informacyjnej:',
        '1. Wyłącz wszystkie powiadomienia push oprócz bezpośrednich wiadomości od żywych ludzi.',
        '2. Nigdy nie czytaj wiadomości w pierwszych 60 minutach po przebudzeniu ani na 60 minut przed snem.',
        '3. Płać za rzetelne dziennikarstwo — darmowe media żyją ze sprzedaży Twojego oburzenia.',
        '4. Zastosuj Czytanie Horyzontalne przed każdym udostępnieniem sensacji.',
        'Jednak nawet najbardziej świadomy i poinformowany człowiek nie uniknie w życiu sytuacji kryzysowych, w których JEGO INTERES zderzy się z INTERESEM INNEGO CZŁOWIEKA. Co zrobić, gdy kompromis wydaje się niemożliwy?',
        'W Rozdziale 14 wejdziemy w fascynujący świat KONFLIKTÓW, NEGOCJACJI I ROZWIĄZYWANIA PROBLEMÓW — poznamy metodę harwardzką, koncepcję BATNA i sztukę wygrywania bez pokonywania oponenta.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 13.'
      ]
    }
  ]
};
