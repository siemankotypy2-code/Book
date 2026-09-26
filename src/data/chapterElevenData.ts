import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

export const chapterElevenExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Zgodnie ze współczesną neuronauką poznawczą (prace Wolframa Schultza i Kenta Berridge’a), jaka jest FAKTYCZNA funkcja dopaminy w układzie nerwowym (Sekcja 11.4)?',
    topic: 'Mit i Prawda o Dopaminie: Wanting vs Liking',
    sectionRef: 'Sekcja 11.4',
    options: [
      { label: 'A', text: 'Dopamina jest „cząsteczką przyjemności i szczęścia”, która uwalnia się wyłącznie wtedy, gdy osiągamy cel i konsumujemy nagrodę.', isCorrect: false },
      { label: 'B', text: 'Dopamina odpowiada za POŻĄDANIE (Wanting) i antycypację nagrody (błąd predykcji nagrody), napędzając nas do wysiłku, podczas gdy za samą przyjemność i sytość (Liking) odpowiadają endogenne opioidy i receptory kannabinoidowe.', isCorrect: true },
      { label: 'C', text: 'Dopamina służy do spowalniania akcji serca podczas medytacji.', isCorrect: false },
      { label: 'D', text: 'Wytwarzana jest wyłącznie w żołądku podczas trawienia węglowodanów prostych.', isCorrect: false }
    ],
    explanation: 'Dopamina to waluta motywacyjna, a nie nagroda sama w sobie. Szczyt dopaminowy pojawia się W TRAKCIE POLOWANIA na cel i w oczekiwaniu na nagrodę. W chwili osiągnięcia celu poziom dopaminy gwałtownie spada.',
    keyTakeaway: 'Dopamina to głód drogi, a nie sytość u celu.'
  },
  {
    id: 2,
    question: 'W Teorii Autodeterminacji Deciego i Ryana (SDT) motywacja wewnętrzna kwitnie tylko wtedy, gdy zaspokojone są trzy fundamentalne potrzeby psychologiczne (Sekcja 11.2):',
    topic: 'Trzy Filary Motywacji Wewnętrznej (SDT)',
    sectionRef: 'Sekcja 11.2',
    options: [
      { label: 'A', text: 'Pieniądze, Władza i Prestiż.', isCorrect: false },
      { label: 'B', text: 'Autonomia (poczucie wyboru), Kompetencja (poczucie rozwoju i mistrzostwa) oraz Relacyjność/Przynależność (poczucie więzi z innymi).', isCorrect: true },
      { label: 'C', text: 'Strach przed karą, Kofeina i Rygorystyczny regulamin.', isCorrect: false },
      { label: 'D', text: 'Izolacja społeczna, Monotonia i Brak informacji zwrotnej.', isCorrect: false }
    ],
    explanation: 'Zewnętrzne marchewki i kije (nagrody finansowe, groźby) mogą wymusić chwilową uległość, ale niszczą motywację wewnętrzną (tzw. efekt podkopania / Overjustification Effect). Trwały napęd wymaga wolności, poczucia sprawczości i sensu.',
    keyTakeaway: 'Ludzie nie potrzebują poganiacza z batem; potrzebują autonomii, poczucia wpływu i sensu.'
  },
  {
    id: 3,
    question: 'Na czym polega zasada „Kosztu Aktywacji” (Activation Energy) w pokonywaniu prokrastynacji (Sekcja 11.8 i 11.9)?',
    topic: 'Energia Aktywacji i Zasada 2 Minut',
    sectionRef: 'Sekcja 11.9',
    options: [
      { label: 'A', text: 'Wypiciu trzech puszek napoju energetycznego przed rozpoczęciem pracy.', isCorrect: false },
      { label: 'B', text: 'Mózg zużywa najwięcej energii metabolicznej na sam moment przejścia ze stanu bezruchu do działania. Zmniejszenie progu wejścia (np. „będę pisał raport tylko przez 2 minuty”) pozwala przełamać opór, po czym zadziała bezwładność poznawcza.', isCorrect: true },
      { label: 'C', text: 'Opłaceniu z góry rocznego abonamentu na siłownię.', isCorrect: false },
      { label: 'D', text: 'Zmuszaniu się do pracy przez 14 godzin bez przerwy.', isCorrect: false }
    ],
    explanation: 'Podobnie jak w chemii, najtrudniejsza jest iskra zapłonowa. Gdy kora przedczołowa widzi przed sobą „napisanie 100 stron książki”, wchodzi w paraliż. Gdy widzi „otwarcie pliku i napisanie jednego zdania”, opór amygdali znika.',
    keyTakeaway: 'Nie musisz mieć ochoty na całe zadanie. Wystarczy, że zrobisz pierwszy mikro-krok.'
  },
  {
    id: 4,
    question: 'Dlaczego prokrastynacja NIE JEST problemem ze złym zarządzaniem czasem, lecz problemem z (Sekcja 11.11):',
    topic: 'Prokrastynacja jako Nieadaptacyjna Regulacja Emocji',
    sectionRef: 'Sekcja 11.11',
    options: [
      { label: 'A', text: 'Brakiem odpowiednio drogiego skórzanego kalendarza.', isCorrect: false },
      { label: 'B', text: 'Regulacją trudnych stanów emocjonalnych (lęk przed oceną, lęk przed porażką, nuda, wstyd) — ucieczka w scrollowanie social mediów przynosi natychmiastową ulgę afektywną kosztem długofalowego celu.', isCorrect: true },
      { label: 'C', text: 'Zbyt szybkim obrotem Ziemi wokół własnej osi.', isCorrect: false },
      { label: 'D', text: 'Niskim ilorazem inteligencji matematycznej.', isCorrect: false }
    ],
    explanation: 'Prokrastynator doskonale wie, jak zaplanować czas w kalendarzu. Odsuwa zadanie, bo samo myślenie o nim wywołuje somatyczny ból i dyskomfort w ciele migdałowatym. Ucieczka w telefon to znieczulenie emocjonalne.',
    keyTakeaway: 'Nie naprawiaj kalendarza — zaopiekuj się lękiem, który paraliżuje twoje działanie.'
  },
  {
    id: 5,
    question: 'W koncepcji Jamesa Cleara i Stephena Guise’a, dlaczego budowanie „Systemu” jest nieskończenie skuteczniejsze niż poleganie na samym „Celu” (Sekcja 11.6)?',
    topic: 'Cele a Systemy Codziennego Działania',
    sectionRef: 'Sekcja 11.6',
    options: [
      { label: 'A', text: 'Ponieważ cele są całkowicie niepotrzebne w życiu.', isCorrect: false },
      { label: 'B', text: 'Zwycięzcy i przegrani mają dokładnie te same cele (np. wygrać złoty medal). O sukcesie decyduje nie marzenie o mecie, lecz jakość codziennego, powtarzalnego procesu (systemu), który wykonujesz niezależnie od nastroju.', isCorrect: true },
      { label: 'C', text: 'Systemy komputerowe potrafią pisać książki bez udziału człowieka.', isCorrect: false },
      { label: 'D', text: 'Cele sprawiają, że człowiek traci wzrok.', isCorrect: false }
    ],
    explanation: 'Cel daje kierunek, ale to system tworzy postęp. Osiągnięcie celu przynosi ulgę na 10 minut, po czym wraca pustka. Zakochiwanie się w codziennym procesie uwalnia od wiecznego czekania na szczęście.',
    keyTakeaway: 'Nie wznosisz się do poziomu swoich celów — spadasz do poziomu swoich systemów.'
  },
  {
    id: 6,
    question: 'Czym jest zjawisko Dyskontowania Hiperbolicznego (Hyperbolic Discounting) i jak niszczy realizację celów długoterminowych (Sekcja 11.5)?',
    topic: 'Dyskonto Hiperboliczne i Myopia Czasowa',
    sectionRef: 'Sekcja 11.5',
    options: [
      { label: 'A', text: 'Zniżką procentową w hipermarketach spożywczych.', isCorrect: false },
      { label: 'B', text: 'Ewolucyjną skłonnością mózgu do drastycznego zaniżania wartości nagrody odroczonej w czasie na rzecz małej, natychmiastowej nagrody dostępnej tu i teraz.', isCorrect: true },
      { label: 'C', text: 'Błędem w obliczaniu trajektorii lotu rakiet.', isCorrect: false },
      { label: 'D', text: 'Zaburzeniem wzroku polegającym na widzeniu podwójnych liter.', isCorrect: false }
    ],
    explanation: 'Dla układu limbicznego „ja za 5 lat” jest obcą osobą. Mózg woli 5 minut natychmiastowej dopaminy ze smartfona niż wizję zdrowego serca za 20 lat.',
    keyTakeaway: 'Przyszłość jest dla mózgu abstrakcją; teraźniejszość jest jedyną biologiczną rzeczywistością.'
  },
  {
    id: 7,
    question: 'W jaki sposób manipulacja „Tarciem Środowiskowym” (Environmental Friction) pozwala wygrać z prokrastynacją (Sekcja 11.7)?',
    topic: 'Architektura Środowiska i Tarcie Behawioralne',
    sectionRef: 'Sekcja 11.7',
    options: [
      { label: 'A', text: 'Przez pocieranie dłoni przed rozpoczęciem pisania.', isCorrect: false },
      { label: 'B', text: 'Poprzez maksymalne zwiększenie liczby przeszkód do zachowań niepożądanych (np. wyniesienie telefonu do innego pokoju) i maksymalne obniżenie tarcia do zachowań dobrych (otwarty notes i długopis na biurku).', isCorrect: true },
      { label: 'C', text: 'Przez instalowanie dodatkowych dywanów w pokoju do pracy.', isCorrect: false },
      { label: 'D', text: 'Przez całkowite zrezygnowanie z mebli w biurze.', isCorrect: false }
    ],
    explanation: 'Silna wola jest ograniczonym zasobem metabolicznym. Projektowanie środowiska tak, by złe nawyki wymagały wysiłku, a dobre działy się same, jest istotą dyscypliny bez cierpienia.',
    keyTakeaway: 'Nie polegaj na silnej woli — zaprojektuj środowisko, które nie wymaga bohaterstwa.'
  }
];

export const chapterElevenCaseStudyStudent: CaseStudy = {
  id: 'cs-ch11-student-wypalenie',
  title: 'Cudze Marzenie: Adam i Krach Motywacji Zewnętrznej',
  subtitle: 'Jak 25-letni student medycyny zderzył się ze ścianą depresji, żyjąc z motywacji rodziców',
  protagonist: 'Adam, 25 lat, student V roku medycyny',
  context: 'Pokój w akademiku medycznym przed sesją egzaminacyjną z pediatrii i chorób wewnętrznych.',
  story: [
    'Adam od dziecka słyszał: „Będziesz wybitnym kardiochirurgiem jak dziadek i ojciec”. Nigdy nie zadał sobie pytania, czego sam pragnie. Przez 4 lata uczył się po nocach, zdając egzaminy na same piątki. Napędzała go wyłącznie motywacja zewnętrzna: lęk przed rozczarowaniem ojca i duma z prestiżu białego fartucha.',
    'Na V roku coś pękło. Wszedł do pokoju, położył się na łóżku i... nie mógł wstać przez trzy dni. Na widok podręcznika farmakologii dostawał drgawek i mdłości. W głowie panowała absolutna, martwa pustka. Mózg całkowicie odmówił współpracy — poziom dopaminy spadł do zera.',
    'Adam płakał w poduszkę, myśląc, że jest leniem i zdrajcą rodu. Ojciec przez telefon krzyczał: „Weź się w garść! Pij kawę i siadaj do książek, za rok masz staż!”. Ale poganiacz z batem przestał działać. System biologiczny wszedł w stan ostrego strajku generalnego.',
    'Adam wziął urlop dziekański. Za radą terapeuty zaczął bezpłatny wolontariat w hospicjum onkologicznym dla dorosłych — bez ocen, bez punktów, bez wiedzy rodziców. Spędzał godziny na trzymaniu pacjentów za rękę, słuchaniu ich historii i przynoszeniu herbaty.',
    'Po raz pierwszy w życiu poczuł, czym jest autonomia i sens relacyjny (SDT). Nikt go do tego nie zmuszał. Nagle motywacja wróciła, ale z zupełnie innego źródła: wrócił na uczelnię nie po to, by zadowolić ojca na kardiochirurgii, lecz by zostać lekarzem medycyny paliatywnej.'
  ],
  decisionTaken: 'Adam odrzucił zewnętrzną presję sukcesu kardiochirurgicznego i wybrał autonomiczną ścieżkę medycyny paliatywnej w oparciu o wewnętrzne wartości.',
  whatProtagonistSaw: 'Początkowo widział swój paraliż jako lenistwo, brak charakteru i niewdzięczność wobec zamożnych rodziców.',
  whatWasMissed: 'Że motywacja zewnętrzna ma skończony termin ważności metabolicznej — w pewnym momencie kora przedczołowa odcina energię, jeśli działanie jest całkowicie pozbawione wewnętrznej autonomii.',
  psychologicalAnalysis: {
    coreMechanism: 'Załamanie motywacji zewnętrznej (Extrinsic Motivation Crash) połączone z Syndromem Narzuconego Losu i odzyskaniem autonomii wg Teorii Autodeterminacji Deciego i Ryana.',
    cognitiveBiases: [
      { name: 'Introjekcja przekonań', description: 'Bezkrytyczne przyjęcie ambicji ojca za własne cele tożsamościowe.', impact: 'Utrata kontaktu z własnym ja.' }
    ],
    defenseMechanisms: [
      { name: 'Depresyjne zamrożenie (Depressive Freeze)', explanation: 'Biologiczna blokada działania jako ostatnia linia obrony przed całkowitym zniszczeniem organizmu, zmuszająca do zatrzymania się.' }
    ],
    emotionalDynamic: 'Przejście od lęku przed odrzuceniem do głębokiego spokoju płynącego z autentycznego powołania.'
  },
  decisionProcessAnalysis: {
    trigger: 'Kolejny tom farmakologii i telefon ojca z oczekiwaniami.',
    attentionFocus: 'Fizyczny brak sił i pustka emocjonalna.',
    interpretation: '„Nie dam rady dłużej udawać kogoś, kim nie jestem”.',
    emotion: 'Rozpacz, ulga z poddania się, wstyd.',
    impulse: 'Uciec ze studiów, zniknąć.',
    action: 'Urlop dziekański, wolontariat w hospicjum i przedefiniowanie specjalizacji.',
    consequence: 'Uzdrowienie psychiczne, ukończenie studiów z pasją i autentyczny szacunek do siebie.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Brzuszne pole nakrywki (VTA)', role: 'Wytwarzanie dopaminy dla celów o wysokim sensie podmiotowym', activationState: 'Odblokowane w hospicjum' },
      { region: 'Przednia kora zakrętu obręczy', role: 'Monitorowanie konfliktu między pragnieniem a przymusem', activationState: 'Uregulowana po zmianie decyzji' }
    ],
    neurotransmitters: [
      { name: 'Dopamina i serotonina', roleInScenario: 'Odbudowa bazowego poziomu neuroprzekaźników po odzyskaniu autonomii' }
    ],
    biologicalTimeline: [
      { timeMs: 'Dzień 1 kryzysu', process: 'Maksymalny wyrzut kortyzolu, załamanie homeostazy.' },
      { timeMs: 'Miesiąc 3', process: 'Wolontariat: powrót endorfin i oksytocyny w relacji z pacjentami.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Transgeneracyjny przymus sukcesu', description: 'Warunkowa miłość rodziców uzależniona od ocen i tytułu profesora.', vulnerabilityExploited: 'Potrzeba akceptacji synowskiej' }
    ],
    counterMeasures: [
      { step: 'Deklaracja Autonomii Dorosłego', script: '„Tato, wiem, że marzyłeś o kardiochirurgii. Szanuję twoją drogę. Moją drogą jest medycyna paliatywna. Będę lekarzem, ale na własnych warunkach”.', rationale: 'Ustanawia granicę tożsamościową.' }
    ]
  },
  alternativePath: 'Gdyby Adam zmusił się do zrobienia specjalizacji z kardiochirurgii pod dyktando ojca, w wieku 35 lat popełniłby błąd medyczny z przemęczenia lub popadł w ciężkie uzależnienie od alkoholu i leków.',
  readerQuestion: 'Ile z Twoich obecnych codziennych obowiązków wynika z Twoich własnych wartości, a ile z lęku przed rozczarowaniem innych ludzi?',
  keyTakeaway: 'Nie można wiecznie jechać na cudzym paliwie. Jeśli nie wiesz, DLACZEGO coś robisz dla siebie — Twój mózg w końcu zaciągnie hamulec ręczny.'
};

export const chapterElevenCaseStudyHomeOffice: CaseStudy = {
  id: 'cs-ch11-homeoffice-tarcie',
  title: 'Sofa zjadła karierę: Beata i Pułapka Niskiego Tarcia',
  subtitle: 'Jak praca zdalna bez granic środowiskowych doprowadziła wybitną tłumaczkę do krachu',
  protagonist: 'Beata, 44 lata, tłumaczka literatury i dokumentacji prawnej',
  context: 'Dwupokojowe mieszkanie w kamienicy, praca w 100% zdalna.',
  story: [
    'Beata uważała się za osobę zorganizowaną, dopóki jej wydawnictwo nie przeszło w całości na model pracy z domu. Na początku była zachwycona: brak dojazdów, praca w dresie, kawa w ulubionym kubku.',
    'Niezauważalnie jednak jej środowisko fizyczne uległo całkowitej degradacji decyzyjnej. Zaczęła pracować z laptopem na kolanach w łóżku. Telefon leżał 10 centymetrów od dłoni, co 4 minuty pikając powiadomieniami z portali informacyjnych i komunikatorów. Tarcie do wejścia w social media wynosiło ZERO sekund.',
    'Tymczasem tarcie do tłumaczenia skomplikowanego tekstu prawniczego wymagało ogromnego wysiłku kory przedczołowej. W efekcie mózg Beaty co 3 minuty wybierał ścieżkę najmniejszego oporu metabolicznego: odsuwała plik z tekstem i otwierała Facebooka, mówiąc sobie: „Tylko na 30 sekund”.',
    'Dni zlewały się w jedno. O 15:00 wciąż była w piżamie, z nieumytymi zębami, z poczuciem winy wielkim jak góra lodowa. Zaczęła nie dosypiać, tłumacząc w panice w nocy. Przegapiła kluczowy deadline na przekład 500-stronicowej monografii, co skutkowało zerwaniem kontraktu i karą umowną na 15 000 zł.',
    'Ocaliła ją radykalna reżynieria środowiskowa (Environment Design). Kupiła prosty telefon bez internetu do rozmów. Wynajęła biurko w małym coworkingu 15 minut spacerem od domu. Wprowadziła rytuał: rano ubiera się jak do biura, wychodzi z mieszkania, a laptop zostawia w coworkingu. W ciągu dwóch tygodni jej produktywność skoczyła o 300% bez ani grama dodatkowej „siły woli”.'
  ],
  decisionTaken: 'Beata przestała walczyć z brakiem silnej woli i przebudowała architekturę fizycznego środowiska, wyprowadzając pracę z sypialni do coworkingu.',
  whatProtagonistSaw: 'Beata obwiniała siebie o brak charakteru, lenistwo i starzenie się mózgu.',
  whatWasMissed: 'Że w środowisku, w którym rozrywka wymaga 0 sekund tarcia, a praca wymaga skupienia, żaden ludzki mózg nie jest w stanie wygrać walki o uwagę.',
  psychologicalAnalysis: {
    coreMechanism: 'Prawo Najmniejszego Oporu i Hipoteza Wyczerpania Woli (Ego Depletion) w zderzeniu z toksyczną architekturą środowiska domowego.',
    cognitiveBiases: [
      { name: 'Iluzja samokontroli', description: 'Przekonanie, że „mogę mieć telefon przed nosem i po prostu na niego nie patrzeć”.', impact: 'Ciągłe zużywanie zasobów metabolicznych na hamowanie impulsu.' }
    ],
    defenseMechanisms: [
      { name: 'Minimalizacja', explanation: '„Tylko sprawdzę jeden nagłówek wiadomości, to mi pomoże się rozbudzić”.' }
    ],
    emotionalDynamic: 'Permanentne poczucie winy i rozmycie granicy między pracą a odpoczynkiem.'
  },
  decisionProcessAnalysis: {
    trigger: 'Trudne zdanie prawnicze wymagające sprawdzenia w słowniku.',
    attentionFocus: 'Powiadomienie na ekranie leżącego obok telefonu.',
    interpretation: '„To za trudne, zrobię sobie małą przerwę na jeden artykuł”.',
    emotion: 'Znudzenie, zmęczenie kognitywne, lęk przed błędem.',
    impulse: 'Sięgnąć po telefon (0 sekund tarcia).',
    action: '45 minut bezmyślnego scrollowania w łóżku.',
    consequence: 'Zerwanie kontraktu, kara umowna, utrata reputacji w wydawnictwie.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Prążkowie (Striatum)', role: 'Wybór natychmiastowej mikro-dopaminy z telefonu', activationState: 'Automatyczny nawyk bez udziału kory' },
      { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Hamowanie sięgania po smartfon', activationState: 'Wyczerpana po 30 próbach oporu w ciągu godziny' }
    ],
    neurotransmitters: [
      { name: 'Dopamina', roleInScenario: 'Szarpana, przerywana stymulacja przez powiadomienia, wywołująca deficyt koncentracji głębokiej' }
    ],
    biologicalTimeline: [
      { timeMs: 'Dzwonek telefonu', process: 'Wzbudzenie uwagi mimowolnej, odcięcie uwagi dowolnej (Tom I, Rozdział 3).' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [],
    counterMeasures: [
      { step: 'Zasada 20 Sekund Tarcia (Shawn Achor)', script: 'Schowanie telefonu do szuflady w drugim pokoju i wyłączenie routera. Każde rozproszenie musi wymagać co najmniej 20 sekund fizycznego wysiłku.', rationale: 'W ciągu 20 sekund kora przedczołowa zdąży się obudzić i zadać pytanie: „Czy ja naprawdę chcę to teraz robić?”.' }
    ]
  },
  alternativePath: 'Gdyby Beata od początku oddzieliła strefę snu od strefy pracy i wyznaczyła sztywne godziny bez internetu, zrealizowałaby monografię 2 tygodnie przed terminem i otrzymała prestiżową nagrodę translatorską.',
  readerQuestion: 'Ile centymetrów od Twojej dłoni znajduje się Twój telefon podczas najważniejszych zadań w ciągu dnia?',
  keyTakeaway: 'Dyscyplina to nie walka z pokusą. Prawdziwa dyscyplina to usunięcie pokusy z pola widzenia, zanim walka w ogóle się rozpocznie.'
};

export const chapterElevenExerciseValueEquation: SelfExercise = {
  id: 'ex-ch11-value-equation',
  title: 'Ćwiczenie 11.1: Kalkulator Wartości Zadania (Piers Steel Procrastination Equation)',
  subtitle: 'Zdiagnozuj, dlaczego odkładasz konkretne zadanie i podnieś jego współczynnik motywacyjny',
  objective: 'Zastosowanie wzoru: Motywacja = (Oczekiwanie Sukcesu × Wartość Nagrody) / (Odroczenie w Czasie × Impulsywność).',
  durationMinutes: 20,
  neuroScientificFoundation: 'Świadoma dekompozycja składowych równania motywacji pozwala precyzyjnie zaadresować biologiczny punkt oporu w układzie dopaminergicznym.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zdefiniuj odkładane zadanie',
      instruction: 'Wybierz jedno konkretne zadanie, z którym zwlekasz od ponad 2 tygodni.',
      promptText: 'Co to za zadanie i jak długo z nim zwlekasz?',
      placeholder: 'Zwlekam z rozliczeniem podatków i wysłaniem dokumentów do księgowej od 3 tygodni...'
    },
    {
      stepNumber: 2,
      title: 'Oceń 4 parametry w skali 1-10',
      instruction: '1. Oczekiwanie (Czy wierzysz, że dasz radę bez błędu?), 2. Wartość (Jak bardzo zależy ci na nagrodzie?), 3. Odroczenie (Jak daleko w czasie jest deadline?), 4. Impulsywność (Jak łatwo się rozpraszasz?).',
      promptText: 'Moje oceny parametrów:',
      placeholder: 'Oczekiwanie: 4/10, Wartość: 3/10, Odroczenie: 8/10, Impulsywność: 9/10 (Wynik motywacji jest skrajnie niski)...'
    },
    {
      stepNumber: 3,
      title: 'Zastosuj 2 interwencje naprawcze',
      instruction: 'Zwiększ licznik (podnieś wiarę w sukces przez podział na kroki) lub zmniejsz mianownik (zmniejsz impulsywność przez odcięcie internetu na 45 minut).',
      promptText: 'Moje 2 konkretne posunięcia operacyjne:',
      placeholder: '1. Zamiast „zrobić podatki”, moim zadaniem na dziś jest tylko znaleźć 5 faktur w mailu. 2. Wyłączam telefon na 25 minut.'
    }
  ],
  reflectionQuestions: [
    'Który z 4 parametrów najczęściej sabotuje Twoją chęć do działania?',
    'W jaki sposób możesz sprawić, by odległa nagroda stała się natychmiastowa tu i teraz?'
  ]
};

export const chapterElevenExerciseMicrostepLab: SelfExercise = {
  id: 'ex-ch11-microstep-lab',
  title: 'Ćwiczenie 11.2: Generator Mikro-Kroków 2 Minut — Zezwolenie na Wersję 30%',
  subtitle: 'Przełam paraliż perfekcjonizmu za pomocą bezczelnie małego pierwszego kroku',
  objective: 'Zmniejszenie energii aktywacji do zera i wywołanie bezwładności poznawczej.',
  durationMinutes: 15,
  neuroScientificFoundation: 'Mikro-zadanie trwające 2 minuty nie jest interpretowane przez ciało migdałowate jako zagrożenie, co pozwala na płynną aktywację kory ruchowej bez wyrzutu kortyzolu.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zidentyfikuj zadanie budzące lęk lub opór',
      instruction: 'Wybierz projekt, przed którym czujesz paraliżujący ucisk w mostku.',
      promptText: 'O jakim zadaniu mowa?',
      placeholder: 'Przygotowanie 40 slajdów prezentacji strategicznej dla klienta...'
    },
    {
      stepNumber: 2,
      title: 'Stwórz Mikro-Krok Śmiesznie Mały (Ridiculously Small)',
      instruction: 'Zredukuj to zadanie do czynności, która zajmuje maksymalnie 120 sekund i której zrobienie jest tak łatwe, że odmowa byłaby absurdem.',
      promptText: 'Mój 2-minutowy mikro-krok to:',
      placeholder: 'Otworzyć PowerPointa, zapisać plik pod nazwą „Prezentacja_v1” i napisać tytuł na pierwszym slajdzie.'
    },
    {
      stepNumber: 3,
      title: 'Klauzula Brzydkiej Wersji (Shitty Draft License)',
      instruction: 'Zadeklaruj sobie oficjalnie: „Robię to na 30% możliwości. Pierwsza wersja ma być koślawa, byle istniała”.',
      promptText: 'Moja deklaracja wolności od perfekcjonizmu:',
      placeholder: 'Daję sobie prawo do stworzenia brzydkich, roboczych slajdów bez formatowania przez pierwsze 20 minut.'
    }
  ],
  reflectionQuestions: [
    'O ile łatwiej jest zacząć, gdy wiesz, że nikt nie wymaga od Ciebie arcydzieła na starcie?',
    'Ile razy w przeszłości okazało się, że po 2 minutach pracy po prostu kontynuowałeś działanie z lekkością?'
  ]
};

export const chapterElevenExerciseResetProtocol: SelfExercise = {
  id: 'ex-ch11-reset-protocol',
  title: 'Ćwiczenie 11.3: 7-Dniowy Zeszyt Resetu Motywacyjnego',
  subtitle: 'Wdrażaj jeden nawyk systemowy dziennie i zbadaj swój poziom energii życiowej',
  objective: 'Przejście od zrywów motywacyjnych do stabilnego, powtarzalnego rytmu pracy głębokiej.',
  durationMinutes: 20,
  neuroScientificFoundation: 'Systematyczne monitorowanie codziennych mikro-sukcesów wywołuje kontrolowane wyrzuty dopaminy, reinwestując energię w kolejne pętle działania.',
  steps: [
    {
      stepNumber: 1,
      title: 'Dzień 1-2: Środowisko i Tarcie',
      instruction: 'Co konkretnie usuniesz ze swojego pola widzenia, by obniżyć tarcie do pracy, a zwiększyć tarcie do rozpraszaczy?',
      promptText: 'Moja zmiana środowiskowa:',
      placeholder: 'Kładę telefon w sypialni, a na biurku zostawiam tylko notes i szklankę wody...'
    },
    {
      stepNumber: 2,
      title: 'Dzień 3-4: Złota Godzina Procesu',
      instruction: 'Wybierz 45 minut każdego dnia, w których pracujesz w 100% offline nad najważniejszym zadaniem.',
      promptText: 'Mój blok pracy głębokiej (godzina i miejsce):',
      placeholder: 'Codziennie od 8:30 do 9:15, przy zamkniętych drzwiach pokoju...'
    },
    {
      stepNumber: 3,
      title: 'Dzień 5-7: Zasada „Nigdy dwa razy z rzędu”',
      instruction: 'Co zrobisz w dniu, w którym dopadnie Cię zmęczenie lub nieprzewidziane wydarzenia, by zachować ciągłość tożsamości?',
      promptText: 'Mój awaryjny mikro-krok kryzysowy:',
      placeholder: 'Jeśli nie dam rady ćwiczyć 40 minut, zrobię 5 pompek, by mój mózg wiedział: „Jestem kimś, kto nie odpuszcza”.'
    }
  ],
  reflectionQuestions: [
    'Kim stajesz się w swoich własnych oczach, gdy dzień po dniu dotrzymujesz małych obietnic składanych samemu sobie?',
    'Dlaczego wierność systemowi daje stokroć więcej spokoju niż pogoń za iluzorycznym celem?'
  ]
};

export const chapterEleven: Chapter = {
  number: 11,
  title: 'Motywacja: Dlaczego Chcemy, ale Nie Robimy',
  subtitle: 'Biochemia napędu, neurobiologia dopaminy, rozbijanie paraliżu i inżynieria systemów działania',
  leadParagraph: 'Znasz to uczucie: w niedzielę wieczorem siedzisz na kanapie, pełen wzniosłych idei i postanowień. Od jutra zdrowa dieta, regularne bieganie, praca nad książką i zero scrollowania telefonu. W poniedziałek o 16:30 cała ta wspaniała motywacja wyparowuje jak kamfora, a Ty lądujesz z paczką chipsów przed serialem. Dlaczego człowiek jest jedyną istotą na Ziemi, która potrafi zaplanować swój sukces, a potem metodycznie go sabotować? Pora zajrzeć pod maskę układu napędowego: od dopaminowych pułapek po inżynierię systemów.',
  totalEstimatedPages: 50,
  sections: [
    {
      id: 'sec-11-1',
      pageNumber: 496,
      sectionNumber: '11.1',
      title: 'Czym jest motywacja? Od biologicznego popędu do woli sensu',
      category: 'wstep',
      readingTimeMinutes: 12,
      quote: {
        text: 'Motywacja to to, co pozwala ci zacząć. Nawyk to to, co pozwala ci wytrwać.',
        author: 'Jim Ryun'
      },
      paragraphs: [
        'Wyobraź sobie lwa na sawannie. Kiedy jest syty, śpi 18 godzin na dobę pod drzewem akacji. Żaden lew nie ma wyrzutów sumienia z powodu braku samorozwoju, żaden nie wstaje o 5:00 rano, by „zoptymalizować swoje polowanie”. Zwierzę działa wyłącznie pod wpływem bezpośrednich sygnałów homeostatycznych: głód, pragnienie, zagrożenie drapieżnikiem, popęd rozrodczy.',
        'Człowiek to jedyny organizm, który potrafi cierpieć z powodu braku motywacji do zadań, których skutki pojawią się za 10 lat (emerytura, doktorat, profilaktyka kardiologiczna). Nasz mózg został ukształtowany w środowisku natychmiastowego powrotu (Immediate Return Environment), podczas gdy żyjemy w społeczeństwie opóźnionego powrotu (Delayed Return Environment).',
        'Kiedy siadasz do pisania pracy dyplomowej, Twoja kora przedczołowa wie, że to ważne. Ale Twoje prążkowie i układ limbiczny pytają: „Gdzie jest natychmiastowa glukoza? Gdzie jest lajk? Gdzie jest nagroda?”. Ponieważ nagroda jest odsunięta o rok, układ nerwowy odcina zasilanie energetyczne. Motywacja to nie mistyczna siła woli — to bilans chemiczny w obwodzie nagrody.'
      ]
    },
    {
      id: 'sec-11-2',
      pageNumber: 500,
      sectionNumber: '11.2',
      title: 'Motywacja wewnętrzna a zewnętrzna: Marchewka, kij i autonomia',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Przez dziesięciolecia behawioryzm uczył nas, że ludzie działają jak psy Pawłowa: daj nagrodę, a zachowanie się powtórzy; daj karę, a wygaśnie. Współczesna psychologia humanistyczna i kognitywna (Deci & Ryan: Teoria Autodeterminacji) obaliły ten prymitywny schemat.',
        'Okazuje się, że gdy płacisz komuś za robienie czegoś, co wcześniej sprawiało mu czystą frajdę (np. rysowanie, gra na gitarze, programowanie), niszczysz jego motywację wewnętrzną (tzw. Overjustification Effect). Mózg wnioskuje: „Skoro mi za to płacą, widocznie samo w sobie jest to nudne i przykre”. Trwały napęd wymaga Autonomii, Mistrzostwa i Sensu.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 1: Dziecko i pianino — Jak zabić pasję pieniędzmi',
          paragraphs: [
            'Sytuacja i bohater: 11-letnia Ola uwielbiała sama siadać do pianina i improwizować melodie. Rodzice, chcąc zmotywować ją do systematycznych ćwiczeń gamy, ogłosili: „Za każdą pełną godzinę ćwiczeń dostaniesz 15 zł kieszonkowego”.',
            'Działający mechanizm: Efekt podkopania (Overjustification Effect). Motywacja wewnętrzna (radość tworzenia dźwięków) została wyparta przez motywację zewnętrzną (kalkulacja zarobku).',
            'Jak rozpoznać w czasie rzeczywistym: Pojawienie się patrzenia na zegarek co 3 minuty i narastająca niechęć do instrumentu.',
            'Możliwa konstruktywna reakcja: Wycofanie nagród finansowych i powrót do wspierania autonomii: „Olu, zachwyca mnie, jak eksperymentujesz z tym utworem. Jaki nastrój chciałaś w nim przekazać?”.',
            'Wniosek dydaktyczny dla czytelnika: Zewnętrzne nagrody gaszą ogień pasji. Chwal wysiłek i proces, nigdy nie kupuj uległości.'
          ]
        }
      ]
    },
    {
      id: 'sec-11-3',
      pageNumber: 504,
      sectionNumber: '11.3',
      title: 'Piramida sensu: Dlaczego robimy rzeczy trudne bez nagrody',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Człowiek jest w stanie znieść niemal każde „jak”, jeśli ma wystarczająco silne „dlaczego” (Viktor Frankl). Gdy działanie jest zakorzenione w tożsamości i służbie wyższym wartościom, kora przedczołowa potrafi zablokować sygnały bólu i wyczerpania.',
        'Poniższe studium przypadku ukazuje zderzenie motywacji zewnętrznej (oczekiwania rodziny) z odzyskaniem autonomicznego sensu życia u młodego lekarza.'
      ],
      caseStudyRef: chapterElevenCaseStudyStudent
    },
    {
      id: 'sec-11-4',
      pageNumber: 508,
      sectionNumber: '11.4',
      title: 'Dopamina: Cząsteczka pragnienia, nie spełnienia',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Największym nieporozumieniem pop-psychologii jest nazywanie dopaminy „hormonem szczęścia”. Dopamina nie ma nic wspólnego z poczuciem zadowolenia, wdzięczności czy błogostanu.',
        'Dopamina to czysta ANTYCYPACJA. To silnik polowania. Szczyt dopaminowy wyrzuca się w momencie, gdy widzisz jelonka na horyzoncie lub gdy słyszysz powiadomienie w telefonie. W chwili, gdy zjesz posiłek lub przeczytasz posta, poziom dopaminy gwałtownie spada poniżej poziomu wyjściowego (Dopamine Baseline Drop), wywołując lekki dyskomfort i pragnienie „kolejnej dawki”.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 2: Scrollowanie w toalecie — Dopaminowa pętla głodu',
          paragraphs: [
            'Sytuacja i bohater: 29-letni Mateusz wchodzi do łazienki na 2 minuty, trzymając telefon. Mija 25 minut, nogi mu drętwieją, a on wciąż bezmyślnie przesuwa kciukiem kolejne krótkie rolki wideo.',
            'Działający mechanizm: Nieregularne wzmocnienie dopaminowe (Variable Reward Schedule). Co piąty filmik jest śmieszny lub szokujący. Mózg Mateusza tkwi w stanie nieustannego błędu predykcji nagrody: „Może kolejny będzie genialny?”.',
            'Jak rozpoznać w czasie rzeczywistym: Poczucie pustki i zmęczenia przy jednoczesnym fizycznym przymusie przesunięcia palcem jeszcze raz.',
            'Możliwa konstruktywna reakcja: Zasada „Łazienka to strefa bez ekranu”. Zostawianie telefonu na ładowarce w przedpokoju.',
            'Wniosek dydaktyczny dla czytelnika: Dopamina obiecuje szczęście za kolejnym rogiem, ale nigdy go tam nie dostarcza. Przerwij polowanie, by odzyskać spokój.'
          ]
        }
      ]
    },
    {
      id: 'sec-11-5',
      pageNumber: 512,
      sectionNumber: '11.5',
      title: 'Wycena zadania: Model Piersa Steela i równanie prokrastynacji',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Profesor Piers Steel po przeanalizowaniu setek badań nad motywacją sformułował Równanie Prokrastynacji: Użyteczność = (Oczekiwanie Sukcesu × Wartość Zadania) / (Odroczenie w Czasie × Impulsywność).',
        'Jeśli chcesz przestać odkładać zadanie, musisz podnieść licznik (zwiększyć wiarę w powodzenie i nagrodę) lub drastycznie obniżyć mianownik (skrócić czas do mikro-nagrody i wyeliminować bodźce impulsywne).',
        'Poniższy warsztat pozwala zastosować to równanie do Twojego najbardziej opornego zadania.'
      ],
      exerciseRef: chapterElevenExerciseValueEquation
    },
    {
      id: 'sec-11-6',
      pageNumber: 516,
      sectionNumber: '11.6',
      title: 'Cele a systemy: Dlaczego marzenia o mecie przegrywają z procesem',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Skupienie na samym celu ma trzy wady: po pierwsze, zakłada, że szczęśliwy będziesz dopiero wtedy, gdy go osiągniesz (życie w poczekalni). Po drugie, gdy cel zostanie osiągnięty, motywacja natychmiast zapada się w próżnię. Po trzecie, cel nie mówi ani słowa o tym, jak pokonać wtorkowy kryzys o 14:00.',
        'Zwycięzcy i przegrani mają te same cele. Różni ich SYSTEM — jakość codziennych, powtarzalnych rytuałów, które wykonujesz bez względu na to, czy masz motywację, czy nie.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 3: Cel „Schudnę 15 kg” kontra System',
          paragraphs: [
            'Sytuacja i bohater: Tomasz (40 lat) co roku w sylwestra zapisuje cel: „W tym roku schudnę 15 kg i przebiegnę maraton”. Kupuje karnet na siłownię, biega przez 10 dni do utraty tchu, po czym z zakwasami i kontuzją rezygnuje na kolejne 11 miesięcy.',
            'Działający mechanizm: Szok adaptacyjny i pułapka heroizmu decyzyjnego. Tomasz skupił się na gigantycznym celu, ignorując fizjologię kory przedczołowej.',
            'Jak rozpoznać w czasie rzeczywistym: Poczucie, że zmiana wymaga nadludzkiego bohaterstwa i cierpienia.',
            'Możliwa konstruktywna reakcja: Zastąpienie celu systemem: „Mój system to: codziennie po wejściu do domu zdejmuję buty i idę na 20-minutowy spacer w strefie tętna tlenowego, a kolację jem bez pieczywa”.',
            'Wniosek dydaktyczny dla czytelnika: Cel to kompas; system to nogi, które idą. Przestań wpatrywać się w igłę kompasu — zacznij stawiać małe kroki.'
          ]
        }
      ]
    },
    {
      id: 'sec-11-7',
      pageNumber: 520,
      sectionNumber: '11.7',
      title: 'Architektura tarcia: Jak przestrzeń decyduje o Twoich wyborach',
      category: 'studium-przypadku',
      readingTimeMinutes: 16,
      paragraphs: [
        'Najważniejszą siłą kształtującą Twoje zachowanie nie jest Twoja wola, lecz TARCIE ŚRODOWISKOWE (Environmental Friction). Człowiek to istota skrajnie energooszczędna: zawsze wybierze to, co wymaga mniej energii metabolicznej tu i teraz.',
        'Poniższe studium przypadku ilustruje dramat tłumaczki pracującej zdalnie, której kariera legła w gruzach przez brak granic fizycznych w mieszkaniu i zerowe tarcie do rozpraszaczy cyfrowych.'
      ],
      caseStudyRef: chapterElevenCaseStudyHomeOffice
    },
    {
      id: 'sec-11-8',
      pageNumber: 524,
      sectionNumber: '11.8',
      title: 'Koszt aktywacji: Dlaczego najtrudniejsza jest pierwsza minuta',
      category: 'teoria',
      readingTimeMinutes: 13,
      paragraphs: [
        'Wyobraź sobie pchanie zepsutego samochodu. Kiedy auto stoi w miejscu, musisz zaprzeć się nogami o asfalt i włożyć 100% siły, by przełamać opór spoczynkowy. W chwili, gdy koła wykonają pierwszy obrót, samochód zaczyna toczyć się lekko i możesz pchać go jedną ręką.',
        'Dokładnie to samo dzieje się w mózgu. Kora przedczołowa zużywa 80% energii metabolicznej na sam moment przełączenia uwagi z bezruchu na zadanie. Kiedy już zaczniesz pisać raport, bezwładność poznawcza (Cognitive Momentum) niesie Cię sama.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 4: Zniechęcenie do nauki hiszpańskiego',
          paragraphs: [
            'Sytuacja i bohater: Kasia (27 lat) chce uczyć się hiszpańskiego. Jej podręcznik i płyty leżą na dnie szafy w pudle pod starymi ubraniami. Każdego wieczoru Kasia myśli: „Powinnam poćwiczyć, ale nie chce mi się tego wszystkiego wyciągać”.',
            'Działający mechanizm: Wysoki koszt aktywacji fizycznej i poznawczej. Kilka drobnych przeszkód skutecznie gasi intencję Systemu 2.',
            'Jak rozpoznać w czasie rzeczywistym: Westchnienie i automatyczna wymówka: „Zrobię to w weekend, jak będę miała więcej czasu”.',
            'Możliwa konstruktywna reakcja: Redukcja tarcia: podręcznik leży otwarty na biurku na stronie z dzisiejszą lekcją, a długopis leży obok.',
            'Wniosek dydaktyczny dla czytelnika: Przygotuj scenę do działania poprzedniego wieczoru. Usuń każdy kamyk z drogi do startu.'
          ]
        }
      ]
    },
    {
      id: 'sec-11-9',
      pageNumber: 528,
      sectionNumber: '11.9',
      title: 'Zasada 2 minut i mikro-kroki: Oszukiwanie ciała migdałowatego',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Kiedy mówisz swojemu mózgowi: „Napiszmy 50 stron pracy magisterskiej” albo „Zróbmy generalny remont garażu”, Twoje ciało migdałowate widzi górę lodową i uruchamia paraliż ucieczkowy.',
        'Zasada 2 Minut polega na bezczelnym zmniejszeniu skali: „Nie piszemy pracy. Otwieramy plik i piszemy jedno koślawe zdanie przez 120 sekund. Po 2 minutach wolno nam przestać”. W 85% przypadków po upływie 2 minut kora przedczołowa kontynuuje pracę, bo opór zniknął.',
        'Poniższy warsztat uczy projektowania mikro-kroków odpornych na perfekcjonizm.'
      ],
      exerciseRef: chapterElevenExerciseMicrostepLab
    },
    {
      id: 'sec-11-10',
      pageNumber: 532,
      sectionNumber: '11.10',
      title: 'Głęboka praca (Deep Work) a stan Flow: Wejście w strefę mistrzostwa',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Mihaly Csikszentmihalyi opisał stan Flow — optymalne doświadczenie zaangażowania, w którym poczucie czasu znika, lęki ego wygasają, a działanie płynie bezwysiłkowo. Flow pojawia się na wąskiej grani między nudą (zadanie zbyt łatwe) a lękiem (zadanie zbyt trudne).',
        'Z kolei Cal Newport w koncepcji Deep Work wykazuje, że zdolność do pracy w 100% skupieniu bez powiadomień staje się najrzadszą i najcenniejszą walutą XXI wieku. Czterdzieści minut pracy głębokiej generuje więcej wartości merytorycznej niż 8 godzin płytkiego klikania w biurze.'
      ]
    },
    {
      id: 'sec-11-11',
      pageNumber: 536,
      sectionNumber: '11.11',
      title: 'Prokrastynacja to nie lenistwo: Zagojenie rany lęku i perfekcjonizmu',
      category: 'teoria',
      readingTimeMinutes: 14,
      paragraphs: [
        'Prokrastynator nie jest człowiekiem leniwym. Lenistwo to stan błogiego relaksu na hamaku („Nic nie robię i jest mi wspaniale”). Prokrastynacja to piekło cierpienia i samobiczowania: nie robisz tego, co trzeba, a jednocześnie nie potrafisz cieszyć się odpoczynkiem, bo w Twoim ciele płonie poczucie winy.',
        'Prokrastynacja to mechanizm obronny przed lękiem: lękiem przed porażką, lękiem przed sukcesem (i związaną z nim presją) oraz lękiem przed zdemaskowaniem własnej niedoskonałości. Przestań naprawiać kalendarz — zaopiekuj się lękiem.'
      ],
      subsections: [
        {
          title: 'PRZYKŁAD 7: Telefon do urzędu skarbowego',
          paragraphs: [
            'Sytuacja i bohater: Przedsiębiorca Marcin (38 lat) od 10 dni odkłada telefon do urzędu w sprawie wyjaśnienia błędu w deklaracji VAT. W zamian za to segreguje maile, czyści klawiaturę i czyta artykuły branżowe.',
            'Działający mechanizm: Prokrastynacja produktywna jako znieczulenie emocjonalne. Marcin unika rozmowy, bo boi się poczucia upokorzenia i krzyku urzędnika.',
            'Jak rozpoznać w czasie rzeczywistym: Zastępowanie zadania kluczowego zadaniami pobocznymi, które dają fałszywe poczucie bycia zajętym.',
            'Możliwa konstruktywna reakcja: Nazwanie emocji: „Boję się tej rozmowy, bo nie znam się na przepisach. To normalne. Wybieram numer teraz i powiem: Dzień dobry, potrzebuję państwa pomocy w zrozumieniu pisma”.',
            'Wniosek dydaktyczny dla czytelnika: Zmierz się z emocją pod zadaniem, a samo zadanie skurczy się do 5-minutowej rozmowy.'
          ]
        }
      ]
    },
    {
      id: 'sec-11-12',
      pageNumber: 540,
      sectionNumber: '11.12',
      title: 'Wielkie Studium Przypadku: Pętla „Od Jutra Zaczynam” Karola',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      paragraphs: [
        'Głęboka analiza psychologiczna człowieka uwięzionego w permanentnej prokrastynacji i perfekcjonizmie. Zobaczmy, jak Karol przeszedł od paraliżu do ukończenia kluczowego projektu życiowego.'
      ],
      caseStudyRef: {
        id: 'cs-ch11-prokrastynacja',
        title: 'Brakujący Pierwszy Krok: Jak Karol Pokonał 3 Lata Zwlekania',
        subtitle: 'Wiwisekcja ucieczki w seriale, lęku przed oceną i narodzin dyscypliny opartej na mikro-krokach',
        protagonist: 'Karol, Senior UX Designer (35 lat)',
        context: 'Mieszkanie Karola, niedziela wieczorem przed ostatecznym deadlinem na oddanie portfolio na stanowisko marzeń.',
        story: [
          'Karol od trzech lat marzył o awansie do międzynarodowego studia projektowego. Miał wybitny zmysł estetyczny i wielki talent. Wszystko rozbijało się o jeden warunek: musiał przygotować nowe, przekrojowe portfolio w serwisie Behance.',
          'Każdy weekend wyglądał identycznie: w piątek Karol z dumą kupował zdrową żywność, sprzątał biurko i zapowiadał narzeczonej: „W tę sobotę zamknę sprawę portfolio”. W sobotę rano siadał przed monitorem. Otwierał plik Figmy. I wtedy pojawiało się to uczucie — zimny ucisk w klatce piersiowej.',
          'W jego głowie odpalał się głos Wewnętrznego Krytyka: „To musi być genialne. Jeśli to portfolio nie zachwyci dyrektora kreatywnego, wszyscy przekonają się, że jesteś przeciętny”. Perfekcjonizm paraliżował każdy ruch. Aby uśmierzyć ten lęk, Karol myślał: „Zanim zacznę, muszę jeszcze przejrzeć trendy na Dribbble”.',
          'Z Dribbble przechodził na YouTube, stamtąd na Reddit, a o 18:00 czuł się tak zmęczony i zrezygnowany, że zamawiał pizzę i włączał Netflixa, obiecując sobie solennie: „Zacznę jutro z samego rana”. W niedzielę wieczorem tonął w potwornym poczuciu wstydu.',
          'Przełom nastąpił podczas sesji z psychologiem poznawczo-behawioralnym. Terapeuta zapytał: „Karol, a gdybyś miał napisać najbrzydszy, najbardziej żałosny opis jednego projektu, jaki potrafisz stworzyć w 5 minut, bez prawa do poprawiania?”. Karol zaśmiał się przez łzy. Zgodził się.',
          'Nastawił stoper na 5 minut. Napisał trzy koślawe akapity. Nagle poczuł, jak napięcie zeszło z jego karku. Stoper zadzwonił, ale Karol nie odszedł od biurka. Poprawił dwa zdania. Dodał jedno zdjęcie. Po dwóch godzinach pierwszy projekt był gotowy. Zrozumiał, że jego problemem nie był brak talentu, lecz nierealistyczny terror perfekcjonizmu.'
        ],
        decisionTaken: 'Karol dał sobie prawo do „beznadziejnej pierwszej wersji roboczej” (Crappy First Draft) i zredukował czas pierwszej sesji do 5 minut.',
        whatProtagonistSaw: 'Karol widział siebie jako lenia bez silnej woli, który marnuje swoje życie.',
        whatWasMissed: 'Że jego prokrastynacja była tarczą obronną przed śmiertelnym lękiem przed porażką i zdemaskowaniem (Syndrom Oszusta).',
        psychologicalAnalysis: {
          coreMechanism: 'Ucieczka w prokrastynację jako obronne unikanie somatycznego bólu lęku przed porażką.',
          cognitiveBiases: [
            { name: 'Myślenie czarno-białe (Dychotomiczne)', description: '„Albo moje portfolio będzie arcydziełem, albo nie ma sensu w ogóle go pokazywać”.', impact: 'Całkowity paraliż twórczy.' },
            { name: 'Dyskonto hiperboliczne', description: 'Natychmiastowa ulga z oglądania serialu miała dla mózgu większą wartość niż sukces za 3 miesiące.', impact: 'Chroniczne odsuwanie startu.' }
          ],
          defenseMechanisms: [
            { name: 'Racjonalizacja', explanation: '„Muszę najpierw zrobić research trendów, to przecież też praca”.' }
          ],
          emotionalDynamic: 'Głęboki wstyd i lęk przed oceną zamaskowane pod maską prokrastynacji.'
        },
        neurobiologicalAnalysis: {
          brainRegions: [
            { region: 'Grzbietowo-boczna kora przedczołowa (dlPFC)', role: 'Planowanie długofalowe', activationState: 'Wyłączona pod naporem lęku' },
            { region: 'Prążkowie brzuszne (Ventral Striatum)', role: 'Poszukiwanie natychmiastowej ulgi', activationState: 'Zasysane przez smartfon i seriale' }
          ],
          neurotransmitters: [
            { name: 'Dopamina', roleInScenario: 'Spalała się na poszukiwaniu nowych bodźców w internecie zamiast na tworzeniu portfolio' }
          ],
          biologicalTimeline: [
            { timeMs: 'Otwarcie pliku portfolio', process: 'Błyskawiczny skok kortyzolu i chęć ucieczki w YouTube.' }
          ]
        },
        influenceAndManipulation: {
          tacticsUsed: [],
          counterMeasures: [
            { step: 'Zezwolenie na Brzydotę (Shitty First Draft)', script: '„Robię to teraz na 30% możliwości, byle tylko ruszyć z miejsca”.', rationale: 'Usuwa perfekcjonistyczny paraliż kory przedczołowej.' }
          ]
        },
        alternativePath: 'Gdyby Karol nie zmienił paradygmatu, za kolejne 3 lata nadal siedziałby w tym samym dziale, zgorzkniały, zazdroszcząc sukcesu młodszym kolegom.',
        readerQuestion: 'Jaki projekt życiowy odkładasz od miesięcy tylko dlatego, że boisz się, że pierwsza próba nie będzie doskonała?',
        keyTakeaway: 'Zrobione jest nieskończenie lepsze od doskonałego. Pierwsza wersja czegokolwiek ma prawo być fatalna — jej jedynym zadaniem jest po prostu ISTNIEĆ.'
      }
    },
    {
      id: 'sec-11-13',
      pageNumber: 544,
      sectionNumber: '11.13',
      title: 'Projekt 7 Dni: Praktyczny reset motywacyjny',
      category: 'cwiczenia',
      readingTimeMinutes: 14,
      paragraphs: [
        'Zintegrujmy teorię tego rozdziału w konkretnym, 7-dniowym protokole przełamywania bezwładności i budowania dyscypliny opartej na architekturze środowiska.',
        'Poniższy warsztat krok po kroku przeprowadzi Cię przez reset Twojego układu motywacyjnego.'
      ],
      exerciseRef: chapterElevenExerciseResetProtocol
    },
    {
      id: 'sec-11-14',
      pageNumber: 548,
      sectionNumber: '11.14',
      title: 'Motywacja po Tomie I, Podsumowanie i Egzamin Końcowy',
      category: 'podsumowanie',
      readingTimeMinutes: 12,
      paragraphs: [
        'W tym rozdziale odczarowaliśmy iluzję motywacji jako kapryśnego natchnienia. Zrozumieliśmy, że dopamina to neuroprzekaźnik poszukiwania, a nie spełnienia, że systemy wygrywają z celami, a prokrastynacja jest ucieczką przed trudną emocją.',
        'Jednak sama motywacja — nawet najlepiej zaprojektowana — wciąż wymaga od czasu do czasu świadomej energii metabolicznej kory przedczołowej. Co zrobić, aby pożądane zachowanie stało się całkowicie bezwysiłkowe? Aby mózg wykonywał je na automatycznym pilocie, tak jak mycie zębów czy wiązanie butów?',
        'W Rozdziale 12 wejdziemy w świat NAWYKÓW — zbadamy pętlę wskazówka-rutyna-nagroda, nauczymy się hakować niechciane automatyzmy i poznamy potęgę tożsamości behawioralnej.',
        'Sprawdź swoją wiedzę w poniższym Egzaminie Końcowym z Rozdziału 11.'
      ]
    }
  ]
};
