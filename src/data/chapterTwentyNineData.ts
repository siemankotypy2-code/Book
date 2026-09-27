import { Chapter, ExamQuestion, CaseStudy, SelfExercise } from '../types/book';

/**
 * TOM III — ROZDZIAŁ 13 (GLOBALNIE ROZDZIAŁ 29 W STRUKTURZE DZIEŁA)
 * TYTUŁ: ZDROWE GRANICE — OCHRONA AUTONOMII, PSYCHOLOGIA ODMOWY I ZARZĄDZANIE RELACJAMI
 */

export const chapterTwentyNineExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: 'Czym w ujęciu psychologicznym są „zdrowe granice osobiste” (healthy personal boundaries)?',
    topic: 'Definicja i Funkcja Granic',
    sectionRef: 'Sekcja 29.1',
    options: [
      { label: 'A', text: 'Niewidzialną linią oddzielającą moją tożsamość, emocje, czas i odpowiedzialność od tożsamości, oczekiwań i żądań innych ludzi, chroniącą integralność jednostki bez konieczności izolacji.', isCorrect: true },
      { label: 'B', text: 'Murem obronnym uniemożliwiającym nawiązanie jakiejkolwiek bliskiej relacji z drugim człowiekiem.', isCorrect: false },
      { label: 'C', text: 'Zasadami prawnymi określającymi własność nieruchomości.', isCorrect: false },
      { label: 'D', text: 'Zestawem manipulacyjnych technik służących do podporządkowywania sobie otoczenia.', isCorrect: false }
    ],
    explanation: 'Granice osobiste nie są murem izolującym, lecz półprzepuszczalną membraną, która określa, gdzie kończę się ja, a zaczyna drugi człowiek. Pozwalają one na zachowanie autonomii przy jednoczesnym budowaniu głębokiej bliskości.',
    keyTakeaway: 'Granice nie służą do kontrolowania innych — służą do określenia, jakie zachowania wobec nas są dopuszczalne, a jakie nie.'
  },
  {
    id: 2,
    question: 'W jaki sposób funkcjonuje tzw. Szantaż Emocjonalny (FOG: Fear, Obligation, Guilt wg Susan Forward)?',
    topic: 'Manipulacja i Szantaż Emocjonalny',
    sectionRef: 'Sekcja 29.16',
    options: [
      { label: 'A', text: 'Szantażysta wykorzystuje Lęk (Fear), Poczucie Obowiązku (Obligation) i Poczucie Winy (Guilt) ofiary, aby wymusić uległość pod groźbą kary emocjonalnej, odrzucenia lub eskalacji pretensji.', isCorrect: true },
      { label: 'B', text: 'Polega wyłącznie na groźbach przemocy fizycznej w miejscu publicznym.', isCorrect: false },
      { label: 'C', text: 'Jest to forma pozytywnego motywowania pracowników w nowoczesnych korporacjach.', isCorrect: false },
      { label: 'D', text: 'Występuje wyłącznie między obcymi ludźmi w internecie.', isCorrect: false }
    ],
    explanation: 'Szantaż emocjonalny bazuje na eksploatacji więzi intymnej i empatii drugiej osoby. Manipulator zamienia odmowę w „dowód braku miłości” lub „egoizmu”, wywołując paraliżujące poczucie winy.',
    keyTakeaway: 'Gdy ktoś mówi: „Gdybyś mnie kochał, zrobiłbyś to dla mnie”, nie wyraża miłości — stosuje szantaż FOG w celu złamania Twojej granicy.'
  },
  {
    id: 3,
    question: 'Jaka jest fundamentalna różnica między PROŚBĄ a NACISKIEM (żądaniem zamaskowanym pod postacią prośby)?',
    topic: 'Prośba a Nacisk',
    sectionRef: 'Sekcja 29.13',
    options: [
      { label: 'A', text: 'W przypadku autentycznej prośby druga strona ma pełną wolność powiedzenia „nie” bez obawy o karę, fochy czy wycofanie życzliwości; w przypadku nacisku odmowa spotyka się z atakiem, fochem lub poczuciem winy.', isCorrect: true },
      { label: 'B', text: 'Prośba zawsze dotyczy małych rzeczy, a nacisk dużych kwot finansowych.', isCorrect: false },
      { label: 'C', text: 'Prośba musi być wyrażona pisemnie, a nacisk ustnie.', isCorrect: false },
      { label: 'D', text: 'Nie ma różnicy, każde pytanie drugiego człowieka jest w rzeczywistości poleceniem.', isCorrect: false }
    ],
    explanation: 'Testem autentyczności prośby jest zawsze reakcja pytającego na odmowę. Jeśli „nie” wywołuje wściekłość, karanie ciszą lub oskarżenia o niewdzięczność, komunikat od początku był roszczeniem.',
    keyTakeaway: 'Masz prawo sprawdzić intencję rozmówcy: jeśli Twoje „nie” nie jest szanowane, nie miałeś do czynienia z prośbą, lecz z manipulacyjnym nakazem.'
  },
  {
    id: 4,
    question: 'Jak powinna wyglądać prawidłowa struktura komunikowania konsekwencji naruszenia granicy w relacji?',
    topic: 'Egzekwowanie Granic i Konsekwencje',
    sectionRef: 'Sekcja 29.20',
    options: [
      { label: 'A', text: 'Opis faktu + nazwanie własnej granicy + jasne określenie mojego działania w razie powtórzenia (np. „Jeśli będziesz na mnie krzyczeć, przerwę tę rozmowę i wyjdę z pokoju”).', isCorrect: true },
      { label: 'B', text: 'Wielominutowy krzyk i wyliczanie wszystkich błędów rozmówcy z ostatnich 5 lat.', isCorrect: false },
      { label: 'C', text: 'Natychmiastowe zablokowanie kontaktu bez podania jakiejkolwiek przyczyny.', isCorrect: false },
      { label: 'D', text: 'Przeproszenie rozmówcy za to, że poczuliśmy się zranieni.', isCorrect: false }
    ],
    explanation: 'Konsekwencja to nie zemsta ani groźba ukarania drugiej osoby — to informacja o tym, jak JA zadbam o swoje bezpieczeństwo i komfort, jeśli destrukcyjne zachowanie nie ustanie.',
    keyTakeaway: 'Nie możesz zmusić nikogo do zmiany zachowania, ale możesz kontrolować własną reakcję i odciąć dostęp do siebie.'
  },
  {
    id: 5,
    question: 'Dlaczego ludzie o wysokim poziomie ugodowości (Agreeableness) i niskiej asertywności odczuwają paraliżujące poczucie winy podczas mówienia „nie”?',
    topic: 'Psychologia Poczucia Winy przy Odmowie',
    sectionRef: 'Sekcja 29.10',
    options: [
      { label: 'A', text: 'Ponieważ mylą własną odpowiedzialność (odpowiadam za swoje czyny) z odpowiedzialnością za cudze emocje (nie odpowiadam za to, czy ktoś poczuje dyskomfort w reakcji na moją odmowę).', isCorrect: true },
      { label: 'B', text: 'Ponieważ biologicznie brakuje im receptorów serotoninowych w ciele modzelowatym.', isCorrect: false },
      { label: 'C', text: 'Ponieważ każda odmowa jest z definicji czynem moralnie nagannym.', isCorrect: false },
      { label: 'D', text: 'Ponieważ osoby ugodowe nie posiadają własnych potrzeb ani celów życiowych.', isCorrect: false }
    ],
    explanation: 'Uwikłanie emocjonalne polega na przyjmowaniu na siebie ciężaru stanów psychicznych innych ludzi. Człowiek uważa, że odmawiając przysługi, „krzywdzi” drugą stronę, zapominając, że rozczarowanie jest normalną, dorosłą reakcją na odmowę.',
    keyTakeaway: 'Nie jesteś odpowiedzialny za emocjonalne reakcje dorosłych ludzi na Twoje uprawnione granice.'
  }
];

export const chapterTwentyNineCaseStudyMonika: CaseStudy = {
  id: 'cs-ch29-monika-uleglosc',
  title: 'Studium Przypadku 1: Niewolnica Uczynności — Wypalenie i Kryzys Granic Moniki',
  subtitle: 'Jak lęk przed odrzuceniem i niezdolność do mówienia „nie” doprowadziły do somatycznego wyczerpania',
  protagonist: 'Monika, 28 lat, koordynatorka projektów w agencji kreatywnej',
  context: 'Monika jest uważana za „duszę firmy” — zawsze uśmiechnięta, pierwsza do pomocy, nigdy nikomu nie odmawia. Zostaje po godzinach, by dokończyć raporty za leniwych kolegów, w weekendy odbiera telefony od klientów, a w życiu prywatnym organizuje przeprowadzki znajomym i opiekuje się psem sąsiadki. Od 6 miesięcy cierpi na przewlekłą bezsenność, napady migreny i permanentne poczucie pustki.',
  story: [
    'W piątek o 16:45 kolega z zespołu podchodzi do biurka Moniki z miną pełną skruchy: „Monia, ratuj, mam dziś randkę życia, a muszę złożyć prezentację dla klienta. Zrobisz to za mnie? Jesteś w tym najlepsza!”.',
    'Wewnątrz Moniki odzywa się natychmiastowy krzyk buntu i potworne zmęczenie — planowała spędzić ten wieczór w wannie i wreszcie się wyspać.',
    'Jednak zanim kora przedczołowa zdoła sformułować odmowę, w ciele migdałowatym eksploduje lęk: „Jeśli odmówię, Bartek pomyśli, że jestem samolubna, obrazi się, powie innym, że nie można na mnie liczyć”.',
    'Z ust Moniki, wbrew jej woli, wypływa automatyczne: „No jasne, Bartek, nie ma sprawy, leć!”. Bartek rzuca „jesteś aniołem!” i wybiega z biura, a Monika zostaje sama w pustym open space, zalewając się łzami bezsilnej wściekłości.',
    'Ten schemat powtarzał się w jej życiu setki razy: uległość → złość na siebie i innych → tłumienie emocji → wyczerpanie somatyczne.',
    'Przełom nastąpił, gdy podczas ataku paniki trafiła do gabinetu terapeutycznego. Zrozumiała, że jej „uczynność” nie była altruizmem, lecz strategią lękową — próbą kupienia bezpieczeństwa i akceptacji kosztem niszczenia własnego zdrowia.',
    'Wdrożyła zasadę „Pauzy Decyzyjnej”: na każdą niespodziewaną prośbę odpowiadała formułą: „Muszę sprawdzić grafik, dam ci znać za 30 minut”. Zaczęła odmawiać w drobnych sprawach i ze zdumieniem odkryła, że świat się nie zawalił, a szacunek zespołu do niej wzrósł.'
  ],
  dialogue: [
    { speaker: 'Bartek (z uśmiechem)', text: 'Monia, zrób to za mnie, jesteś niezastąpiona!', subtext: 'Pochlebstwo jako narzędzie manipulacji i delegowania własnych obowiązków.' },
    { speaker: 'Monika (przed terapią)', text: 'Dobrze, nie ma problemu...', subtext: 'Kapitulacja z lęku przed odrzuceniem i etykietą „złej koleżanki”.' },
    { speaker: 'Monika (po wdrożeniu granic)', text: 'Bartek, dziś o 17:00 kończę pracę i mam zaplanowany wieczór. Nie przejmę Twojej prezentacji.', subtext: 'Krótka, spokojna i nieagresywna odmowa bez tłumaczenia się i przepraszania.' }
  ],
  decisionTaken: 'Zrezygnowanie z roli „ratowniczki wszystkich dookoła”, wprowadzenie zasady pauzy decyzyjnej przed każdą odpowiedzią oraz konsekwentna odmowa wykonywania cudzych zadań kosztem własnego zdrowia.',
  whatProtagonistSaw: 'Swoją uległość jako szlachetną dobroć i bezinteresowność.',
  whatWasMissed: 'Że uległość była destrukcyjnym mechanizmem obronnym, który uczył otoczenie pasożytowania na jej zasobach i niszczył jej poczucie własnej wartości.',
  psychologicalAnalysis: {
    coreMechanism: 'Syndrom Ludzkiej Satysfakcji (People Pleasing) zakorzeniony w lęku przed odrzuceniem i warunkowej samoocenie („jestem wartościowa tylko wtedy, gdy jestem użyteczna”).',
    cognitiveBiases: [
      { name: 'Czytanie w myślach (Mind Reading)', description: 'Zakładanie, że każda odmowa wywoła u drugiej strony trwałą wrogość i nienawiść.', impact: 'Paraliż przed asertywnością.' },
      { name: 'Katastrofizowanie', description: 'Przekonanie, że jedno „nie” doprowadzi do całkowitego wykluczenia z grupy.', impact: 'Automatyczna kapitulacja.' }
    ],
    defenseMechanisms: [
      { name: 'Reakcja upozorowana', explanation: 'Okazywanie przesadnej życzliwości i uśmiechu w chwili odczuwania głębokiej frustracji i złości.' }
    ],
    emotionalDynamic: 'Błędne koło: uległość -> stłumiona złość -> poczucie winy z powodu złości -> jeszcze większa uległość.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Grzbietowa część przedniej kory obręczy (dACC)', role: 'Przetwarzanie bólu wykluczenia społecznego', activationState: 'Nadmiernie wrażliwa na ryzyko dezaprobaty' },
      { region: 'Brzuszno-boczna kora przedczołowa (vlPFC)', role: 'Hamowanie zachowań automatycznych', activationState: 'Zablokowana przez nawyk uległości' }
    ],
    neurotransmitters: [
      { name: 'Kortyzol', roleInScenario: 'Chronicznie podwyższony, niszczący jakość snu głębokiego.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Pojawienie się prośby Bartka', process: 'Skok napięcia w dACC -> lęk przed odrzuceniem.' },
      { timeMs: 'Odpowiedź „tak”', process: 'Chwilowy spadek lęku, po którym następuje długotrwały wyrzut żółci i kortyzolu.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Pochlebstwo i nagłość czasowa', description: '„Jesteś w tym najlepsza!” w piątek o 16:45.', vulnerabilityExploited: 'Potrzeba bycia docenioną i lęk przed odmową w sytuacji presji.' }
    ],
    counterMeasures: [
      { step: 'Zasada Bufora Czasowego', script: '„Nie odpowiadam na prośby natychmiast. Wrócę do ciebie z odpowiedzią po 15 minutach”.', rationale: 'Rozrywa pętlę automatycznej uległości i pozwala na chłodną ocenę własnych zasobów.' }
    ]
  },
  keyTakeaway: 'Mówiąc „tak” innym ludziom wbrew sobie, za każdym razem mówisz „nie” własnemu zdrowiu, marzeniom i spokojowi ducha. Twoje „nie” dla innych jest Twoim „tak” dla siebie.'
};

export const chapterTwentyNineCaseStudySzantazEmocjonalny: CaseStudy = {
  id: 'cs-ch29-marek-rodzina',
  title: 'Studium Przypadku 2: W Pajęczynie Winy — Marek i Szantaż Emocjonalny Matki',
  subtitle: 'Dekompozycja mechanizmu FOG (Fear, Obligation, Guilt) i odzyskanie dorosłej autonomii w rodzinie',
  protagonist: 'Marek, 32 lata, architekt, w związku małżeńskim od 3 lat',
  context: 'Matka Marka, pani Teresa (65 lat), jest samotną wdową o silnie manipulacyjnym profilu relacyjnym. Każda próba spędzenia świąt z żoną lub wyjazdu na urlop spotyka się z atakiem serca, płaczem i oskarżeniami: „Poświęciłam dla ciebie całe życie, a ty teraz wolisz obcą kobietę. Przez ciebie wyląduję w szpitalu”. Marek od lat żyje w ciągłym poczuciu winy, co niszczy jego małżeństwo z Karoliną.',
  story: [
    'Marek dzwoni do matki, by poinformować, że w tym roku Wigilię spędzą u rodziców Karoliny, a do niej przyjadą w pierwszy dzień świąt.',
    'W słuchawce zapada grobowa cisza, po czym następuje ciężki szloch: „Wiedziałam. Wiedziałam, że na starość zostanę sama jak pies. Twój zmarły ojciec przewraca się w grobie. Serce mnie tak kłuje, że zaraz wezwę pogotowie”.',
    'Marek czuje, jak ziemia usuwa mu się spod nóg. Żołądek skręca się w supeł, a w głowie rozbrzmiewa: „Jestem potworem, zabijam własną matkę”.',
    'Jego pierwszy odruch to przeprosić, ulec i odwołać wyjazd do teściów. Karolina jednak stawia sprawę jasno: „Marek, twoja mama ma 65 lat i jest zdrowa. To jest szantaż. Jeśli teraz znowu ulegniesz, nasz związek tego nie przetrwa”.',
    'Marek stanął przed najtrudniejszą konfrontacją w życiu. Podczas konsultacji psychologicznej nauczył się rozpoznawać strukturę szantażu FOG (Lęk, Obowiązek, Wina).',
    'Podczas kolejnej rozmowy zastosował technikę „Zdartej Płyty” i „Oddzielenia Troski od Uległości”: „Mamo, bardzo cię kocham i zależy mi na twoim zdrowiu. Jeśli źle się czujesz, natychmiast wezwij pogotowie. Nasza decyzja co do Wigilii pozostaje niezmienna — będziemy u ciebie 25 grudnia o 11:00”.',
    'Gdy matka zaczęła krzyczeć, Marek spokojnie powiedział: „Nie będę rozmawiał, gdy na mnie krzyczysz. Zadzwonię jutro” i rozłączył się. Po trzech miesiącach konsekwentnego trzymania ram matka przestała symulować ataki paniki i zaczęła traktować Marka jak dorosłego partnera.'
  ],
  decisionTaken: 'Odrzucenie roli wykonawcy emocjonalnych zachcianek matki, wyznaczenie sztywnej granicy czasowo-komunikacyjnej i ochrona autonomii własnego małżeństwa.',
  whatProtagonistSaw: 'Śmiertelnie chorą, zrozpaczoną matkę, którą rani swoją „samolubnością”.',
  whatWasMissed: 'Że matka stosowała wyuczoną przez dekady strategię manipulacyjną, używając poczucia winy jako smyczy do kontrolowania dorosłego syna.',
  psychologicalAnalysis: {
    coreMechanism: 'Uwikłanie rodzinne (Enmeshment) i szantaż emocjonalny FOG oparty na odwróceniu ról (Parentyfikacja).',
    cognitiveBiases: [
      { name: 'Personalizacja', description: 'Błędne przekonanie, że stan zdrowia i samopoczucie innej dorosłej osoby są w 100% zależne od moich decyzji.', impact: 'Paraliżujące poczucie winy.' }
    ],
    defenseMechanisms: [
      { name: 'Racjonalizacja uległości', explanation: 'Wmawianie sobie: „ustąpię dla świętego spokoju, starszym ludziom się nie odmawia”.' }
    ],
    emotionalDynamic: 'Przełamanie toksycznej lojalności i transformacja lęku przed odrzuceniem w dojrzałą autonomię.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Przednia wyspa (Anterior Insula)', role: 'Generowanie trzewnego bólu emocjonalnego i wstrętu moralnego', activationState: 'Ukojona po rozróżnieniu faktów od szantażu' },
      { region: 'Przyśrodkowa kora przedczołowa', role: 'Diferencjacja Ja od Innych', activationState: 'Wzmocniona w procesie indywiduacji' }
    ],
    neurotransmitters: [
      { name: 'Oksytocyna', roleInScenario: 'Używana wcześniej jako narzędzie emocjonalnego uwięzienia, zrównoważona przez dopaminę sprawczości.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Szloch matki w słuchawce', process: 'Błyskawiczny wyrzut kortyzolu i skurcz naczyń trzewnych.' },
      { timeMs: 'Wypowiedzenie formuły granicy', process: 'Aktywacja dlPFC i powrót stabilnego rytmu serca.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Szantaż Somatyczno-Egzystencjalny', description: '„Wyląduję w szpitalu przez ciebie, ojciec przewraca się w grobie”.', vulnerabilityExploited: 'Synowska lojalność i lęk przed byciem przyczyną czyjejś śmierci.' }
    ],
    counterMeasures: [
      { step: 'Protokół Oddzielenia Medycznego', script: '„Jeśli Twoje życie jest zagrożone, natychmiast dzwonię pod 112. Moja decyzja o wyjeździe pozostaje bez zmian”.', rationale: 'Rozbraja blef szantażysty, pokazując realną troskę bez kapitulacji decyzyjnej.' }
    ]
  },
  keyTakeaway: 'Prawdziwa miłość rodzinna szanuje wolność i odrębność drugiego człowieka. Jeśli czyjaś obecność w Twoim życiu jest wymuszana poczuciem winy, nie jest to relacja — to niewola emocjonalna.'
};

export const chapterTwentyNineCaseStudyKonfliktPraca: CaseStudy = {
  id: 'cs-ch29-jakub-praca',
  title: 'Studium Przypadku 3: Granica w Korporacyjnej Dżungli — Jakub i Toksyczny Menedżer',
  subtitle: 'Obrona granic profesjonalnych wobec autorytarnego przełożonego bez eskalacji agresji',
  protagonist: 'Jakub, 35 lat, senior developer w międzynarodowej firmie technologicznej',
  context: 'Nowy dyrektor działu, Robert, wprowadził styl zarządzania oparty na zastraszaniu i mikrozarządzaniu. Dzwoni do inżynierów w niedziele o 22:00, pisze wiadomości z wykrzyknikami na komunikatorze i publicznie upokarza pracowników na spotkaniach statusowych, kwitując ich uwagi słowami: „Jak się komuś nie podoba tempo, na jego miejsce czeka dziesięciu”. Większość zespołu siedzi cicho z obawy o premie. Jakub postanawia postawić granicę.',
  story: [
    'W niedzielę o 21:30 telefon Jakuba wibruje — Robert dzwoni z żądaniem natychmiastowego zbadania błędu na środowisku testowym. Jakub nie odbiera.',
    'W poniedziałek o 9:00 na forum całego 15-osobowego zespołu Robert zaczyna tyradę: „Jakub, chyba ci się priorytety pomyliły! Dzwonię w ważnej sprawie, a ty ignorujesz dyrektora. Albo jesteś w tym zespole na 100%, albo poszukaj sobie innej posadki!”.',
    'W sali zapada martwa cisza. Wszyscy patrzą w podłogę. Jakub czuje skok ciśnienia, lecz pamięta o protokole komunikacji bezprzemocowej (NVC).',
    'Patrzy Robertowi prosto w oczy, zachowuje neutralny ton głosu i mówi: „Robercie, w niedzielę o 21:30 byłem poza godzinami pracy i spędzałem czas z rodziną. Mój kontrakt określa dostępność od poniedziałku do piątku w godzinach 8:00–16:00. Jestem w 100% zaangażowany w projekt w tych godzinach i chętnie rozwiążę ten problem teraz. Jednocześnie oczekuję, że będziemy rozmawiać profesjonalnie i bez podnoszenia głosu”.',
    'Robert czerwienieje na twarzy, próbuje rzucić kolejną złośliwość: „Nie bądź taki delikatny!”.',
    'Jakub nie wchodzi w pyskówkę, lecz stosuje technikę zdarta płyta: „Oczekuję profesjonalnej komunikacji. Przejdźmy do analizy logów błędu”.',
    'Robert traci impet i przechodzi do spraw technicznych. Od tego dnia Robert nigdy więcej nie zadzwonił do Jakuba w weekend ani nie podniósł na niego głosu na forum, a inni członkowie zespołu zaczęli brać z Jakuba przykład.'
  ],
  decisionTaken: 'Odrzucenie zastraszenia, zdefiniowanie granicy w oparciu o fakty i kontrakt prawny oraz publiczne, spokojne zażądanie profesjonalnego szacunku.',
  whatProtagonistSaw: 'Wściekłego przełożonego o ogromnej władzy instytucjonalnej i ryzyko utraty pracy.',
  whatWasMissed: 'Że agresorzy relacyjni żywią się uległością i lękiem; spokojna, nieagresywna, lecz żelazna postawa obnaża brak merytorycznych argumentów atakującego.',
  psychologicalAnalysis: {
    coreMechanism: 'Ustalenie granic profesjonalnych (Professional Boundaries) poprzez asertywny komunikat faktograficzny z neutralizacją zastraszania.',
    cognitiveBiases: [
      { name: 'Konformizm Informacyjny (Asch Effect)', description: 'Uleganie presji milczenia tylko dlatego, że reszta zespołu boi się odezwać.', impact: 'Podtrzymywanie patologii w organizacji.' }
    ],
    defenseMechanisms: [
      { name: 'Identyfikacja z agresorem', explanation: 'Pokusa usprawiedliwiania szefa („taka jest specyfika branży, trzeba zacisnąć zęby”).' }
    ],
    emotionalDynamic: 'Opanowanie lęku hierarchicznego i przejęcie kontroli nad ramą rozmowy.'
  },
  neurobiologicalAnalysis: {
    brainRegions: [
      { region: 'Grzbietowo-boczna kora przedczołowa', role: 'Utrzymanie spokoju i kontroli mowy w obliczu agresji', activationState: 'Maksymalnie stabilna' },
      { region: 'Ciało migdałowate', role: 'Reakcja walki lub ucieczki', activationState: 'Świadomie wyciszona głębokim oddechem' }
    ],
    neurotransmitters: [
      { name: 'Acetylocholina', roleInScenario: 'Odpowiedzialna za skupienie i precyzję wysławiania się pod ostrzałem.' }
    ],
    biologicalTimeline: [
      { timeMs: 'Atak słowny Roberta', process: 'Przejściowy skok tętna do 110 bpm.' },
      { timeMs: 'Spokojna odpowiedź Jakuba', process: 'Stabilizacja parametrów życiowych i spadek napięcia mięśni karku.' }
    ]
  },
  influenceAndManipulation: {
    tacticsUsed: [
      { tactic: 'Publiczne upokorzenie i szantaż egzystencjalny', description: '„Na twoje miejsce czeka dziesięciu”.', vulnerabilityExploited: 'Lęk o bezpieczeństwo finansowe i status zawodowy.' }
    ],
    counterMeasures: [
      { step: 'Kotwica Kontraktowa i Ramy Profesjonalizmu', script: '„Mój kontrakt określa godziny pracy. Oczekuję profesjonalnej komunikacji bez podnoszenia głosu”.', rationale: 'Przenosi spór z emocjonalnej dominacji na twardy grunt prawny i etyczny.' }
    ]
  },
  keyTakeaway: 'Ludzie traktują Cię dokładnie tak, jak ich tego nauczysz. Jeśli pozwalasz na przekraczanie granic w milczeniu, dajesz ciche przyzwolenie na dalszą eskalację przemocy.'
};

export const chapterTwentyNineExerciseBoundarySystem: SelfExercise = {
  id: 'ex-ch29-boundary-system',
  title: 'Ćwiczenie 29.1: Czterostopniowy Protokół Budowania i Egzekwowania Granic (Model D-E-S-C)',
  subtitle: 'Praktyczny warsztat komunikacji asertywnej odmowy i ochrony własnej przestrzeni',
  objective: 'Zidentyfikowanie strefy chronicznego przekraczania granic w Twoim życiu i przygotowanie precyzyjnego skryptu rozmowy.',
  durationMinutes: 25,
  neuroScientificFoundation: 'Strukturyzacja skryptu słownego obniża aktywację ciała migdałowatego i zapobiega paraliżowi mowy pod wpływem stresu.',
  steps: [
    {
      stepNumber: 1,
      title: 'Zidentyfikuj nieszczelną granicę i osobę naruszającą',
      instruction: 'W jakiej relacji (praca, rodzina, partner, przyjaciele) czujesz chroniczną złość, wykorzystanie lub wyczerpanie?',
      promptText: 'Moja nieszczelna granica i sytuacja:',
      placeholder: 'Szef dzwoni po godzinach / Znajoma pożycza pieniądze i nie oddaje / Matka krytykuje moje wychowanie dzieci...'
    },
    {
      stepNumber: 2,
      title: 'Krok 1 (Describe): Opisz fakt bez oceny i uogólnień',
      instruction: 'Napisz jedno zdanie opisujące konkretne, obserwowalne zachowanie (bez słów „zawsze”, „nigdy”, „jesteś toksyczny”).',
      promptText: 'D — Opis faktu:',
      placeholder: '„Wczoraj podczas obiadu rodzinnego skomentowałaś mój wygląd przy wszystkich gościach”.'
    },
    {
      stepNumber: 3,
      title: 'Krok 2 (Express): Wyraź swoje odczucia i nazwij granicę (Komunikat JA)',
      instruction: 'Powiedz, co czujesz i jak definiujesz swoją zasadę osobistą.',
      promptText: 'E — Wyrażenie emocji i granicy:',
      placeholder: '„Poczułam się zawstydzona i zła. Nie wyrażam zgody na publiczne ocenianie mojego ciała”.'
    },
    {
      stepNumber: 4,
      title: 'Krok 3 (Specify): Sprecyzuj pożądane zachowanie',
      instruction: 'Czego konkretnie oczekujesz na przyszłość?',
      promptText: 'S — Oczekiwanie:',
      placeholder: '„Oczekuję, że jeśli masz jakieś uwagi, przekażesz mi je na osobności i z szacunkiem”.'
    },
    {
      stepNumber: 5,
      title: 'Krok 4 (Consequences): Określ konsekwencję naruszenia',
      instruction: 'Co TY zrobisz, jeśli ta granica zostanie ponownie przekroczona?',
      promptText: 'C — Moja konsekwencja:',
      placeholder: '„Jeśli ta sytuacja się powtórzy, wstanę od stołu i zakończę wizytę”.'
    }
  ],
  reflectionQuestions: [
    'Jaki lęk powstrzymywał Cię do tej pory przed wypowiedzeniem tych słów?',
    'Jak zmieni się jakość Twojego życia i poczucie godności, gdy wdrożysz tę granicę w praktyce?'
  ]
};

export const chapterTwentyNine: Chapter = {
  number: 29,
  volume: 3,
  volumeChapterNumber: 13,
  title: 'Rozdział 29: Zdrowe Granice — Ochrona Autonomii, Psychologia Odmowy i Zarządzanie Relacjami',
  subtitle: 'Od lęku przed odrzuceniem i manipulacji poczuciem winy do dojrzałego stawiania granic w rodzinie, pracy i życiu osobistym',
  leadParagraph: 'Nie możesz zbudować autentycznej bliskości, poczucia własnej wartości ani stabilności psychicznej, dopóki Twoje granice osobiste pozostają dziurawe jak sito. Wielu ludzi wierzy, że bycie dobrym człowiekiem polega na nieustannym zadowalaniu innych, unikaniu konfliktów za wszelką cenę i natychmiastowym godzeniu się na każdą prośbę. W rzeczywistości uległość nie rodzi miłości — rodzi ukrytą złość, wyczerpanie somatyczne i relacyjny rozpad. W tym rozdziale przeprowadzimy Cię przez 30 szczegółowych etapów architektury granic: zdefiniujemy granice fizyczne, emocjonalne, czasowe i informacyjne, zdemaskujemy mechanizmy szantażu emocjonalnego (FOG), nauczymy Cię odmawiać bez agresji i poczucia winy oraz pokażemy, jak skutecznie egzekwować konsekwencje wobec osób przekraczających Twoją godność.',
  totalEstimatedPages: 98,
  sections: [
    {
      id: 'sec-29-1',
      pageNumber: 1030,
      sectionNumber: '29.1',
      title: 'Czym są granice? Definicja psychologiczna, funkcja membrany i fundament tożsamości',
      category: 'wstep',
      readingTimeMinutes: 14,
      quote: {
        text: 'Granice to dystans, przy którym mogę kochać zarówno ciebie, jak i samego siebie jednocześnie.',
        author: 'Prentis Hemphill'
      },
      paragraphs: [
        'W potocznym rozumieniu granice kojarzą się z murem, drutem kolczastym, chłodem emocjonalnym i egoistycznym odgradzaniem się od świata. W nowoczesnej psychologii relacji i teorii przywiązania granica jest jednak czymś zgoła odmiennym — to dynamiczna, półprzepuszczalna membrana psychologiczna, która określa, gdzie kończą się moje myśli, emocje, wartości i odpowiedzialność, a gdzie zaczyna się przestrzeń drugiego człowieka.',
        'Zdrowe granice pełnią podwójną funkcję: z jednej strony chronią nasze wnętrze przed toksycznymi wpływami, eksploatacją i nadużyciami, z drugiej zaś pozwalają na swobodną wymianę ciepła, miłości, wsparcia i informacji z otoczeniem.',
        'Człowiek pozbawiony granic nie posiada w istocie własnego Ja — staje się emocjonalną gąbką wchłaniającą nastroje innych ludzi lub bezwolnym wykonawcą cudzych scenariuszy życiowych.'
      ]
    },
    {
      id: 'sec-29-2',
      pageNumber: 1034,
      sectionNumber: '29.2',
      title: 'Granice fizyczne — Ciało, przestrzeń osobista, dotyk i prawo do nietykalności',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Najbardziej podstawowym, pierwotnym poziomem są granice fizyczne. Obejmują one Twoje ciało, strefę dystansu personalnego (proksemikę), potrzebę odpoczynku, snu, jedzenia oraz prawo do decydowania o tym, kto, kiedy i w jaki sposób może Cię dotykać.',
        'Naruszenie granic fizycznych to nie tylko bezpośrednia przemoc cielesna — to także wymuszanie uścisków na dzieciach wbrew ich woli („daj buziaka cioci”), naruszanie strefy intymnej w pracy, wchodzenie do czyjegoś pokoju bez pukania czy zmuszanie do pracy ponad siły fizjologiczne.',
        'Odzyskanie kontaktu z własnymi granicami fizycznymi zaczyna się od wsłuchania się w sygnały ciała: napięcie w karku, ucisk w klatce piersiowej czy odruch cofnięcia się są bezpośrednią informacją o naruszeniu naszej przestrzeni.'
      ]
    },
    {
      id: 'sec-29-3',
      pageNumber: 1038,
      sectionNumber: '29.3',
      title: 'Granice emocjonalne — Separacja uczuć, empatia kontra zlewanie się (Enmeshment)',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Granice emocjonalne określają odpowiedzialność za stany psychiczne. Posiadanie zdrowych granic emocjonalnych oznacza zrozumienie fundamentalnej prawdy: JA odpowiadam za moje emocje, myśli i zachowania, a TY odpowiadasz za swoje.',
        'Gdy granice emocjonalne ulegają zatarciu, pojawia się zjawisko uwikłania (enmeshment). W takim stanie samopoczucie jednej osoby staje się całkowitym zakładnikiem nastroju partnera lub rodzica („jeśli mama ma zły humor, ja nie mam prawa czuć radości”).',
        'Dojrzała empatia polega na współodczuwaniu z zachowaniem własnej odrębności: mogę być blisko Twojego smutku, trzymać Cię za rękę i wspierać, nie stając się jednocześnie Twoim smutkiem.'
      ]
    },
    {
      id: 'sec-29-4',
      pageNumber: 1042,
      sectionNumber: '29.4',
      title: 'Granice czasowe — Własność kalendarza, szacunek do czasu i asertywność harmonogramu',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Czas jest jedynym całkowicie nieodnawialnym zasobem, jakim dysponuje człowiek. Granice czasowe wyznaczają, w jaki sposób dysponujesz swoimi godzinami, ile czasu poświęcasz na pracę, ile na relacje, a ile na własną regenerację i samotność.',
        'Naruszenia granic czasowych przybierają postać: chronicznego spóźniania się innych na spotkania z Tobą, telefonów od klientów i szefów o 22:00, przedłużających się bezproduktywnych zebrań czy wymuszania natychmiastowych odpowiedzi na wiadomości w mediach społecznościowych.',
        'Twoja dostępność jest Twoim wyborem, a nie publicznym dobrem. Wyznaczenie jasnych ram dostępności czasowej jest aktem elementarnego szacunku do własnego życia.'
      ]
    },
    {
      id: 'sec-29-5',
      pageNumber: 1046,
      sectionNumber: '29.5',
      title: 'Granice prywatności — Pokoje, telefony, dzienniki i prawo do własnego wewnętrznego świata',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Każdy człowiek, niezależnie od wieku i stopnia bliskości w relacji, ma niezbywalne prawo do prywatności. Obejmuje ona przestrzeń fizyczną (własna szuflada, zamknięte drzwi łazienki, biurko) oraz przestrzeń cyfrową (hasła do telefonu, historia korespondencji, pamiętnik).',
        'W toksycznych relacjach prywatność bywa mylona z tajemnicą lub zdradą („skoro mnie kochasz, dlaczego nie chcesz dać mi hasła do telefonu?”). Taka postawa wynika z lęku i obsesyjnej potrzeby kontroli.',
        'Zdrowy związek opiera się na zaufaniu, a nie na totalitarnej inwigilacji. Szanowanie zamkniętych drzwi partnera lub dziecka jest fundamentem bezpieczeństwa relacyjnego.'
      ]
    },
    {
      id: 'sec-29-6',
      pageNumber: 1050,
      sectionNumber: '29.6',
      title: 'Granice dotyczące informacji — Oversharing, prawo do milczenia i selektywne odsłanianie siebie',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Granice informacyjne regulują to, czym, z kim, kiedy i w jakich okolicznościach decydujemy się podzielić. Nie każda osoba ma prawo do poznania Twoich intymnych historii, zarobków, planów życiowych czy traum z dzieciństwa.',
        'Zjawisko oversharingu (przesadnego, natychmiastowego odsłaniania się przed nowo poznanymi ludźmi) bywa często fałszywie uważane za dowód autentyczności, podczas gdy w rzeczywistości jest objawem niestabilnych granic i próbą wymuszenia przedwczesnej bliskości.',
        'Masz pełne, bezwzględne prawo odpowiedzieć na wścibskie pytanie: „Nie chcę o tym rozmawiać”, „To moja prywatna sprawa” — bez konieczności tłumaczenia się i wymyślania kłamstw.'
      ]
    },
    {
      id: 'sec-29-7',
      pageNumber: 1054,
      sectionNumber: '29.7',
      title: 'Dlaczego trudno stawiać granice? Wczesnodziecięce skrypty i syndrom grzecznego dziecka',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Niezdolność do stawiania granic rzadko rodzi się w dorosłym życiu. Jej korzenie niemal zawsze tkwią we wczesnym dzieciństwie, w którym miłość rodzicielska była warunkowa i uzależniona od posłuszeństwa.',
        'Wielu z nas zostało wychowanych w kulcie bycia „grzecznym”, „uczynnym” i „bezproblemowym”. Wyrażenie złości, odmowa zjedzenia posiłku czy obrona własnej zabawki były karane odrzuceniem, fochem rodzica lub etykietą „jesteś samolubny i niegrzeczny”.',
        'Dziecko uczy się wówczas tragicznego równania: „Aby zasłużyć na miłość i bezpieczeństwo, muszę porzucić własne potrzeby i zadowalać innych”. Ten dziecięcy skrypt przetrwania staje się w dorosłości przyczyną relacyjnego paraliżu.'
      ]
    },
    {
      id: 'sec-29-8',
      pageNumber: 1058,
      sectionNumber: '29.8',
      title: 'Potrzeba akceptacji — Ewolucyjny lęk przed ostracyzmem i biologia przynależności',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Z biologicznego punktu widzenia potrzeba akceptacji społecznej jest jedną z najpotężniejszych sił sterujących ludzkim mózgiem. Dla naszych przodków na sawannie wykluczenie z plemienia oznaczało nieuchronną śmierć z głodu lub w szponach drapieżników.',
        'Badania neuroobrazowe (Eisenberger & Lieberman) wykazały, że ból wywołany odrzuceniem społecznym aktywuje dokładnie te same struktury w mózgu (grzbietową część przedniej kory obręczy — dACC oraz przednią wyspę), co fizyczny ból po złamaniu kości czy oparzeniu.',
        'Dlatego gdy mamy odmówić komuś bliskiemu, nasze ciało migdałowate wszczyna alarm, interpretując potencjalne niezadowolenie drugiej strony jako bezpośrednie zagrożenie egzystencjalne.'
      ]
    },
    {
      id: 'sec-29-9',
      pageNumber: 1062,
      sectionNumber: '29.9',
      title: 'Strach przed konfliktem — Unikanie napięcia za cenę powolnej autodestrukcji',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Dla wielu osób każda, nawet najmniejsza różnica zdań jest utożsamiana z katastrofą relacyjną. Taki lęk przed konfliktem (conflict avoidance) zmusza do ciągłego ustępowania, przełykania żalu i udawania, że wszystko jest w porządku.',
        'Cena takiego pozornego „świętego spokoju” jest jednak gigantyczna. Zamiast rozwiązać problem na wczesnym etapie, człowiek gromadzi w sobie tłumioną złość (resentment), która po miesiącach lub latach eksploduje w postaci nagłego zerwania relacji lub ciężkich chorób psychosomatycznych.',
        'Dojrzały konflikt nie jest końcem miłości — jest narzędziem kalibracji relacji. Relacja, która nie jest w stanie przetrwać Twojego spokojnego „nie”, od początku była oparta na iluzji.'
      ]
    },
    {
      id: 'sec-29-10',
      pageNumber: 1066,
      sectionNumber: '29.10',
      title: 'Poczucie winy — Fałszywa odpowiedzialność za cudze emocje i dekonstrukcja wyrzutów sumienia',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Poczucie winy pojawiające się po postawieniu granicy jest najczęstszą pułapką, w którą wpadają osoby uczące się asertywności. Człowiek mówi „nie”, po czym przez trzy dni nie może spać, zastanawiając się, czy nie zachował się jak potwór.',
        'Należy odróżnić POCZUCIE WINY REALNE (kiedy rzeczywiście złamałeś swoje zasady etyczne, skrzywdziłeś kogoś celowo lub złamałeś obietnicę) od POCZUCIA WINY NEUROTYCZNEGO / INDUKOWANEGO (kiedy po prostu odmówiłeś spełnienia cudzego żądania kosztem siebie).',
        'Gdy ktoś reaguje smutkiem, złością czy fochem na Twoją uprawnioną granicę, ten dyskomfort należy do NIEGO. Masz prawo pozwolić dorosłemu człowiekowi przeżyć jego własne rozczarowanie.'
      ]
    },
    {
      id: 'sec-29-11',
      pageNumber: 1070,
      sectionNumber: '29.11',
      title: 'Strach przed odrzuceniem — Odróżnienie porzucenia od zdrowego dystansu w relacji',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Lęk przed odrzuceniem (fear of rejection) podpowiada katastroficzny scenariusz: „Jeśli powiem szefowi, że nie przyjdę w sobotę, natychmiast mnie zwolni”, „Jeśli powiem partnerowi, że potrzebuję wieczoru dla siebie, przestanie mnie kochać i odejdzie”.',
        'Warto poddać te myśli testowi empirycznemu. W 95% przypadków ludzie reagują na spokojną, uprzejmą granicę pełnym zrozumieniem i dostosowaniem się. A jeśli ktoś rzeczywiście odrzuca Cię za to, że masz własne granice — otrzymujesz bezcenną informację zwrotną, że ta osoba nie kochała Ciebie, lecz Twoją uległość i użyteczność.',
        'Stawianie granic jest najlepszym filtrem odsiewającym relacje autentyczne od pasożytniczych.'
      ]
    },
    {
      id: 'sec-29-12',
      pageNumber: 1074,
      sectionNumber: '29.12',
      title: 'Rozpoznawanie przekraczania granic — Sygnały somatyczne, narastająca frustracja i utrata energii',
      category: 'neuronauka',
      readingTimeMinutes: 17,
      paragraphs: [
        'Zanim Twój umysł logiczny zorientuje się, że Twoje granice są łamane, Twoje ciało wie o tym jako pierwsze. Do podstawowych markerów somatycznych naruszenia granic należą:',
        '1. Nagły ucisk w żołądku lub zaciśnięte gardło w obecności określonej osoby.',
        '2. Poczucie drenowania z energii i chronicznego zmęczenia po rozmowie.',
        '3. Narastająca, cicha złość, sarkazm i zniecierpliwienie wobec próśb drugiej strony.',
        '4. Odruch unikania kontaktu wzrokowego lub niechęć do odbierania telefonu.',
        'Złość nie jest grzechem — jest biologicznym dzwonkiem alarmowym informującym Cię, że ktoś właśnie wtargnął na Twoje terytorium psychiczne.'
      ]
    },
    {
      id: 'sec-29-13',
      pageNumber: 1078,
      sectionNumber: '29.13',
      title: 'Prośba a nacisk — Jak odróżnić wolność wyboru od ukrytego roszczenia i przymusu',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'W komunikacji międzyludzkiej kluczowe jest rozróżnienie między autentyczną prośbą a zamaskowanym naciskiem (żądaniem). Zewnętrznie oba komunikaty mogą brzmieć identycznie: „Czy mógłbyś mi w tym pomóc?”.',
        'Różnica tkwi w tym, co dzieje się, gdy odpowiesz: „Przykro mi, ale tym razem nie mogę”. W przypadku PROŚBY rozmówca mówi: „Rozumiem, dziękuję, poszukam kogoś innego”. Szanuje Twoje prawo do decydowania.',
        'W przypadku NACISKU Twoje „nie” spotyka się z oburzeniem, wyrzutami, karaniem milczeniem, dąsaniem się lub natychmiastowym zwiększeniem presji („no weź, dla mnie tego nie zrobisz?”). Pamiętaj: jeśli nie masz prawa powiedzieć „nie”, Twoje „tak” nie ma żadnej wartości.'
      ]
    },
    {
      id: 'sec-29-14',
      pageNumber: 1082,
      sectionNumber: '29.14',
      title: 'Prośba a manipulacja — Ukryte intencje, pochlebstwa i technika stopy w drzwiach',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Manipulatorzy relacyjni rzadko atakują granice w sposób jawny i brutalny. Znacznie częściej stosują wyrafinowane techniki perswazyjne, które sprawiają, że ofiara sama rezygnuje ze swoich praw.',
        'Do klasycznych metod należy technika „stopy w drzwiach” (zaczynanie od mikroskopijnej przysługi, by potem zażądać wielkiego zobowiązania), technika zalewania pochlebstwami przed przedstawieniem roszczenia („jesteś jedyną osobą na świecie, która potrafi to zrobić!”) oraz budowanie sztucznego długu wdzięczności poprzez wyświadczanie nieproszonych przysług.',
        'Ochrona przed manipulacją wymaga zachowania czujności wobec dysproporcji w wymianie oraz odwagi do nazwania ukrytej dynamiki po imieniu.'
      ]
    },
    {
      id: 'sec-29-15',
      pageNumber: 1086,
      sectionNumber: '29.15',
      title: 'Krytyka a przekraczanie granic — Konstruktywna informacja zwrotna kontra atak na godność',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'W relacjach zawodowych i osobistych niezwykle ważne jest odróżnienie merytorycznej krytyki od agresywnego przekraczania granic osobistych.',
        'KONSTRUKTYWNY FEEDBACK dotyczy konkretnego zadania lub zachowania, odnosi się do faktów, jest przekazywany w cztery oczy i zawiera wskazówki rozwojowe („W raporcie brakuje tabeli z kosztami, uzupełnij ją do jutra”).',
        'PRZEKROCZENIE GRANICY to atak na tożsamość, intelekt lub cechy osoby, stosowanie etykietowania, podnoszenie głosu, publiczne zawstydzanie lub sarkastyczne docinki („Jak zwykle nic nie potrafisz zrobić porządnie, jesteś beznadziejny”). Masz prawo bezwzględnie zatrzymać każdą rozmowę, która narusza Twoją godność osobistą.'
      ]
    },
    {
      id: 'sec-29-16',
      pageNumber: 1090,
      sectionNumber: '29.16',
      title: 'Szantaż emocjonalny — Anatomia syndromu FOG (Fear, Obligation, Guilt) Susan Forward',
      category: 'teoria',
      readingTimeMinutes: 18,
      paragraphs: [
        'Susan Forward w fundamentalnej pracy nad szantażem emocjonalnym opisała model FOG opierający się na trzech dźwigniach nacisku: LĘKU (Fear), POCZUCIU OBOWIĄZKU (Obligation) i POCZUCIU WINY (Guilt).',
        'Szantażysta identyfikuje Twoje najgłębsze wrażliwości i używa ich przeciwko Tobie. Wyróżniamy cztery typy szantażystów: PROKLAJMATORZY (grożą karą bezpośrednią: „jeśli odejdziesz, zniszczę cię”), BICZUJĄCY SIĘ (grożą samookaleczeniem lub chorobą: „przez ciebie wyląduję w szpitalu”), CIERPIĘTNICY (grają bezbronną ofiarę czekającą na ratunek) oraz KUSICIELE (obiecują nagrodę pod warunkiem bezwzględnego posłuszeństwa).',
        'Wyjście z mgły FOG wymaga przejścia od automatycznej reakcji uległości do świadomej obserwacji: „Widzę, że próbujesz wzbudzić we mnie poczucie winy. Moja decyzja pozostaje niezmienna”.'
      ]
    },
    {
      id: 'sec-29-17',
      pageNumber: 1094,
      sectionNumber: '29.17',
      title: 'Jak powiedzieć „nie”? — Anatomia czystej odmowy bez zbędnych usprawiedliwień i kłamstw',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Większość ludzi popełnia fundamentalny błąd podczas odmawiania: zaczynają się gęsto tłumaczyć, przepraszać i podawać dziesiątki zewnętrznych powodów („naprawdę bym chciał, ale akurat ciocia ma urodziny, a potem muszę wyprowadzić psa...”).',
        'Podawanie zawiłych usprawiedliwień jest dla rozmówcy zaproszeniem do negocjacji! Sprytny manipulator natychmiast rozbroi Twoje wymówki: „To przełóż ciocię na jutro, a psa wyprowadzę z tobą!”.',
        'CZYSTA ODMOWA jest krótka, uprzejma i jednoznaczna: „Dziękuję za propozycję, ale tym razem nie wezmę w tym udziału”, „Nie mogę tego zrobić”. „Nie” jest kompletnym zdaniem gramatycznym i nie wymaga składania raportu ze swojego życia.'
      ]
    },
    {
      id: 'sec-29-18',
      pageNumber: 1098,
      sectionNumber: '29.18',
      title: 'Jak odmawiać bez agresji? — Spokój, kontakt wzrokowy i postawa pewności siebie',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Osoby, które przez lata tłumiły swoje granice, gdy wreszcie decydują się powiedzieć „nie”, często robią to w sposób wybuchowy i agresywny — krzyczą, trzaskają drzwiami lub atakują rozmówcę. Taka reakcja rodzi eskalację konfliktu i późniejsze potężne poczucie winy.',
        'Prawdziwa siła granic leży w ich spokojnej, miękkiej formie i żelaznej treści. Im bardziej jesteś pewny swojej granicy, tym ciszej i spokojniej możesz mówić.',
        'Utrzymuj stabilny kontakt wzrokowy, rozluźnij ramiona, oddychaj przeponowo i mów głosem pewnym, bez tonu przepraszającego ani oskarżycielskiego.'
      ]
    },
    {
      id: 'sec-29-19',
      pageNumber: 1102,
      sectionNumber: '29.19',
      title: 'Jak komunikować potrzeby? — Przejście od pretensji i domysłów do jasnych próśb',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Granice to nie tylko odmawianie — to także jasne, dojrzałe komunikowanie tego, czego potrzebujesz, by czuć się bezpiecznie i komfortowo w relacji.',
        'Wielu ludzi wpada w pułapkę oczekiwania, że partner lub współpracownicy „sami powinni się domyślić” ich potrzeb. Brak czytania w myślach rodzi narastającą frustrację i pretensje.',
        'Komunikuj potrzeby wprost według formuły: „Potrzebuję [X], aby móc [Y]. Czy możemy ustalić [Z]?”. Jasność jest najwyższą formą życzliwości relacyjnej.'
      ]
    },
    {
      id: 'sec-29-20',
      pageNumber: 1106,
      sectionNumber: '29.20',
      title: 'Jak komunikować konsekwencje? — Różnica między szantażem a informacją o własnym działaniu',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Granica bez określonej i wyegzekwowanej konsekwencji jest jedynie bezwartościową sugestią. Musisz jasno poinformować drugą stronę, co TY zrobisz, jeśli niedopuszczalne zachowanie będzie kontynuowane.',
        'Kluczowe jest odróżnienie GROŹBY od KONSEKWENCJI. Groźba ma na celu ukaranie, przestraszenie i kontrolowanie drugiej osoby („jeśli jeszcze raz to zrobisz, pożałujesz!”).',
        'Konsekwencja jest spokojną informacją o Twoim własnym zachowaniu obronnym: „Jeśli podnosisz na mnie głos, kończę tę rozmowę i wychodzę z pokoju. Wrócimy do tematu, gdy oboje będziemy spokojni”.'
      ]
    },
    {
      id: 'sec-29-21',
      pageNumber: 1110,
      sectionNumber: '29.21',
      title: 'Co zrobić, gdy ktoś ignoruje granicę? — Eskalacja kroków i protokół ochrony siebie',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Gdy po raz pierwszy postawisz granicę osobie przyzwyczajonej do Twojej uległości, niemal na pewno spotkasz się z testowaniem granicy (tzw. extinction burst — nasilenie ataku przed odpuszczeniem). Osoba sprawdzi, czy mówisz poważnie.',
        'W takiej sytuacji nie tłumacz się ponownie i nie wdawaj w dyskusje. Zastosuj procedurę trzech kroków: 1. Przypomnij granicę („Mówiłem już, że nie pożyczam samochodu”). 2. Wskaż na ignorowanie ustaleń („Widzę, że ponawiasz prośbę mimo mojej jasnej odpowiedzi”). 3. Wyegzekwuj konsekwencję (zamknij temat, przerwij spotkanie, odetnij dostęp).',
        'Jeśli ktoś notorycznie i z premedytacją ignoruje Twoje granice mimo wielokrotnych upomnień, jedyną skuteczną granicą pozostaje fizyczne lub relacyjne zdystansowanie się od tej osoby.'
      ]
    },
    {
      id: 'sec-29-22',
      pageNumber: 1114,
      sectionNumber: '29.22',
      title: 'Granice w rodzinie — Odcięcie pępowiny psychologicznej, lojalność i prawo do własnego życia',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Stawianie granic w rodzinie pochodzenia jest dla większości ludzi najtrudniejszym wyzwaniem emocjonalnym. Rodzice często mają poczucie dożywotniego prawa własności do swoich dorosłych dzieci, ingerując w ich wybory partnerskie, finanse, wychowanie wnuków i plany wakacyjne.',
        'Proces indywiduacji (stawania się odrębną jednostką) wymaga odwagi do zaryzykowania przejściowego rozczarowania rodziców. Nie jesteś przedłużeniem niespełnionych ambicji swojej matki ani naprawiaczem błędów swojego ojca.',
        'Możesz kochać swoich rodziców, szanować ich i jednocześnie stanowczo nie pozwalać im na sterowanie Twoim domem.'
      ]
    },
    {
      id: 'sec-29-23',
      pageNumber: 1118,
      sectionNumber: '29.23',
      title: 'Granice w przyjaźni — Jednostronne relacje, wampiry energetyczne i higiena wzajemności',
      category: 'teoria',
      readingTimeMinutes: 16,
      paragraphs: [
        'Prawdziwa przyjaźń opiera się na fundamencie wzajemności i równowagi. Zdarza się jednak, że relacje przyjacielskie przekształcają się w jednostronne wysypiska emocjonalne, w których jedna strona dzwoni wyłącznie po to, by godzinami narzekać na swoje życie, kompletnie nie interesując się losem drugiej.',
        'Postawienie granicy w przyjaźni polega na przerwaniu roli bezpłatnego psychoterapeuty: „Bardzo ci współczuję, ale mam dziś tylko 15 minut na rozmowę”, „Chętnie cię wysłucham, ale chciałbym też opowiedzieć ci o tym, co dzieje się u mnie”.',
        'Przyjaciele warci Twojego czasu uszanują Twoją przestrzeń; osoby nastawione wyłącznie na czerpanie korzyści szybko znikną z Twojego otoczenia.'
      ]
    },
    {
      id: 'sec-29-24',
      pageNumber: 1122,
      sectionNumber: '29.24',
      title: 'Granice w związku — Równowaga między „Ja”, „Ty” a „My” w dojrzałej relacji intymnej',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Dojrzały związek partnerski nie polega na całkowitym zlaniu się w jedno i porzuceniu własnych pasji, znajomych i samotności. Taka fuzja prowadzi do szybkiego wypalenia pożądania i narastania frustracji.',
        'Zdrowa relacja intymna składa się z trzech odrębnych bytów: Mojego Świata (moje cele, przyjaciele, pasje), Twojego Świata oraz Naszego Wspólnego Świata (wspólne plany, wartości, bliskość).',
        'Prawo do spędzenia weekendu bez partnera, prawo do własnego konta oszczędnościowego czy prawo do własnych przekonań nie są dowodem braku miłości — są warunkiem jej długowieczności.'
      ]
    },
    {
      id: 'sec-29-25',
      pageNumber: 1126,
      sectionNumber: '29.25',
      title: 'Granice w szkole i pracy — Nadgodziny, mikrozarządzanie, mobbing i kultura dostępności 24/7',
      category: 'teoria',
      readingTimeMinutes: 17,
      paragraphs: [
        'Środowisko zawodowe jest terenem nieustannych prób rozciągania granic pracowników pod hasłami „elastyczności”, „rodzinnej atmosfery” i „zaangażowania ponad normę”.',
        'Ochrona granic w pracy obejmuje: nieodbieranie telefonów i maili poza godzinami kontraktowymi, odmawianie brania na siebie zadań kolegów bez rekompensaty oraz natychmiastowe reagowanie na przejawy mobbingu, złośliwych komentarzy czy zastraszania.',
        'Pamiętaj: dla firmy jesteś zasobem wymiennym; dla swojego zdrowia i rodziny jesteś niezastąpiony.'
      ]
    },
    {
      id: 'sec-29-26',
      pageNumber: 1130,
      sectionNumber: '29.26',
      title: 'Granice w internecie — Higiena cyfrowa, hejt, prawo do nieodpowiadania i blokowanie',
      category: 'teoria',
      readingTimeMinutes: 15,
      paragraphs: [
        'Przestrzeń cyfrowa stworzyła iluzję natychmiastowej i powszechnej dostępności każdego człowieka. Wielu ludzi czuje przymus odpisywania na wiadomości w ciągu 60 sekund oraz wchodzi w jałowe, wyczerpujące dyskusje z anonimowymi trollami w komentarzach.',
        'Granice cyfrowe to: wyłączenie powiadomień push, ustalenie okien czasowych na sprawdzanie poczty, nieudostępnianie intymnych szczegółów ze swojego życia w social mediach oraz bezwzględne korzystanie z przycisku „zablokuj” wobec osób stosujących hejt i agresję słowną.',
        'Twój profil i Twoja skrzynka odbiorcza to Twój cyfrowy dom — masz pełne prawo nie wpuszczać do niego wandali.'
      ]
    },
    {
      id: 'sec-29-27',
      pageNumber: 1134,
      sectionNumber: '29.27',
      title: 'Studium Przypadku 1 — Niewolnica Uczynności: Wypalenie i Kryzys Granic Moniki',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      caseStudyRef: chapterTwentyNineCaseStudyMonika,
      paragraphs: [
        'W pierwszym studium przypadku analizujemy historię 28-letniej Moniki, która z powodu lęku przed odrzuceniem i potrzeby bycia lubianą przez wszystkich doprowadziła swój organizm na skraj somatycznego wyczerpania.',
        'Przypadek ten dekonstruuje syndrom People Pleasing i pokazuje krok po kroku, jak wdrożyć pauzę decyzyjną oraz asertywną odmowę w miejscu pracy.'
      ]
    },
    {
      id: 'sec-29-28',
      pageNumber: 1140,
      sectionNumber: '29.28',
      title: 'Studium Przypadku 2 — W Pajęczynie Winy: Marek i Szantaż Emocjonalny Matki',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      caseStudyRef: chapterTwentyNineCaseStudySzantazEmocjonalny,
      paragraphs: [
        'Drugie studium przypadku bada toksyczną dynamikę szantażu emocjonalnego FOG w relacji matka-dorosły syn, gdzie odmowa uległości była karana symulowaniem ataków serca i oskarżeniami o brak serca.',
        'Analizujemy mechanizmy uwikłania rodzinnego, technikę oddzielenia troski medycznej od uległości decyzyjnej oraz proces odzyskiwania męskiej autonomii.'
      ]
    },
    {
      id: 'sec-29-29',
      pageNumber: 1146,
      sectionNumber: '29.29',
      title: 'Studium Przypadku 3 — Granica w Korporacyjnej Dżungli: Jakub i Toksyczny Menedżer',
      category: 'studium-przypadku',
      readingTimeMinutes: 18,
      caseStudyRef: chapterTwentyNineCaseStudyKonfliktPraca,
      paragraphs: [
        'W trzecim studium przypadku przyglądamy się starciu inżyniera Jakuba z autorytarnym dyrektorem stosującym publiczne upokorzenia i przymus pracy w weekendy.',
        'Analiza demonstruje siłę spokojnego, nieagresywnego komunikatu opartego na faktach i kontrakcie oraz technikę zdartej płyty w konfrontacji z agresorem relacyjnym.'
      ]
    },
    {
      id: 'sec-29-30',
      pageNumber: 1152,
      sectionNumber: '29.30',
      title: 'Podsumowanie, Słownik Pojęć i Własny System Budowania Granic (Model D-E-S-C)',
      category: 'podsumowanie',
      readingTimeMinutes: 20,
      paragraphs: [
        'Podsumowując 30 fundamentalnych kroków budowania zdrowych granic osobistych:',
        '1. Granice nie są murem izolującym — są półprzepuszczalną membraną chroniącą Twoją tożsamość, czas i godność.',
        '2. Poczucie winy po odmowie jest zjawiskiem naturalnym, wynikającym z ewolucyjnego lęku przed odrzuceniem — nie oznacza, że zrobiłeś coś złego.',
        '3. Szantaż emocjonalny (FOG) traci moc w chwili, gdy przestajesz bać się cudzego niezadowolenia i pozwalasz innym na przeżywanie ich własnych emocji.',
        '4. Czyste „nie” jest kompletnym zdaniem — nie wymaga usprawiedliwień, kłamstw ani przepraszania za własne istnienie.',
        'SŁOWNIK POJĘĆ ROZDZIAŁU 29:',
        '• Personal Boundaries (Granice Osobiste) — psychologiczne reguły określające dopuszczalne sposoby traktowania jednostki przez innych ludzi.',
        '• Enmeshment (Uwikłanie) — patologiczne zatarcie granic w relacji, w którym jednostki tracą autonomię emocjonalną i zlewają się w jeden system.',
        '• Emotional Blackmail (Szantaż Emocjonalny) — forma manipulacji wykorzystująca lęk, obowiązek i poczucie winy (FOG) do wymuszenia uległości.',
        '• Model D-E-S-C — czterostopniowy protokół asertywnej komunikacji granic: Describe (Opisz fakt), Express (Wyraź emocje), Specify (Sprecyzuj oczekiwanie), Consequences (Określ konsekwencje).',
        '• People Pleasing — nawykowe podporządkowywanie własnych potrzeb oczekiwaniom innych w celu uniknięcia odrzucenia.',
        'W kolejnym, wieńczącym dzieło Rozdziale 30 przejdziemy od tematu wyznaczania granic do mistrzowskiej sztuki ich wyrażania w działaniu — do pełnowymiarowej psychologii Asertywności i Integralności Osobistej.'
      ],
      exerciseRef: chapterTwentyNineExerciseBoundarySystem
    }
  ]
};
